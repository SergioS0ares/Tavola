package TavolaSoftware.TavolaApp.REST.service;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
import java.util.Set;
import java.util.UUID;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.messaging.simp.SimpMessagingTemplate;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import TavolaSoftware.TavolaApp.REST.dto.requests.PedidoRequest;
import TavolaSoftware.TavolaApp.REST.dto.responses.PedidoResponse;
import TavolaSoftware.TavolaApp.REST.dto.responses.WebSocketMessage;
import TavolaSoftware.TavolaApp.REST.model.Cardapio;
import TavolaSoftware.TavolaApp.REST.model.Cliente;
import TavolaSoftware.TavolaApp.REST.model.Garcom;
import TavolaSoftware.TavolaApp.REST.model.ItemPedido;
import TavolaSoftware.TavolaApp.REST.model.Mesa;
import TavolaSoftware.TavolaApp.REST.model.Pedido;
import TavolaSoftware.TavolaApp.REST.repository.CardapioRepository;
import TavolaSoftware.TavolaApp.REST.repository.ClienteRepository;
import TavolaSoftware.TavolaApp.REST.repository.GarcomRepository;
import TavolaSoftware.TavolaApp.REST.repository.MesaRepository;
import TavolaSoftware.TavolaApp.REST.repository.PedidoRepository;
import TavolaSoftware.TavolaApp.REST.security.JwtUtil;
import TavolaSoftware.TavolaApp.tools.EventLabel;
import TavolaSoftware.TavolaApp.tools.PedidoStatus;
import io.jsonwebtoken.Claims;
import jakarta.persistence.EntityNotFoundException;

@Service
public class PedidoService {

    @Autowired private PedidoRepository pedidoRepository;
    @Autowired private GarcomRepository garcomRepository;
    @Autowired private ClienteRepository clienteRepository;
    @Autowired private MesaRepository mesaRepository;
    @Autowired private JwtUtil jwtUtil;
    @Autowired private SimpMessagingTemplate messagingTemplate;
    @Autowired private CardapioRepository cardapioRepository;
    // <<< INJETAR AtendimentoMesaService >>>
    @Autowired private AtendimentoMesaService atendimentoMesaService; 

    // <<< MÉTODO atenderChamadoMesa REMOVIDO >>>
    // (Código obsoleto removido)

    // <<< MÉTODO liberarAtendimentoMesa REMOVIDO >>>
    // (Código obsoleto removido)
    
    @Transactional(readOnly = true)
    public List<PedidoResponse> findPedidosAtivosPorMesa(UUID mesaId) {
        // ... (Extração de token e validação de mesa - sem alterações) ...
        String token = (String) SecurityContextHolder.getContext().getAuthentication().getCredentials();
        Claims claims = jwtUtil.parseToken(token);
        UUID restauranteId = UUID.fromString(claims.get("restauranteId", String.class));
        Mesa mesa = mesaRepository.findById(mesaId)
            .orElseThrow(() -> new EntityNotFoundException("Mesa não encontrada."));
        if (!mesa.getAmbiente().getRestaurante().getId().equals(restauranteId)) {
            throw new SecurityException("Acesso negado. A mesa não pertence ao seu restaurante.");
        }

        // Define os status ativos (já estava correto, PENDENTE, EM_PREPARO, PRONTO)
        Set<PedidoStatus> statusAtivos = Set.of(
            PedidoStatus.PENDENTE,
            PedidoStatus.EM_PREPARO,
            PedidoStatus.PRONTO
            // Não inclui mais ATENDIMENTO nem AGUARDANDO_ATENDIMENTO
        ); //

        // Busca os pedidos (já estava correto)
        List<Pedido> pedidosAtivos = pedidoRepository.findByMesaIdAndStatusInAndItensIsNotEmpty(mesaId, statusAtivos); //

        // Mapeia para DTOs (já estava correto)
        return pedidosAtivos.stream()
                .map(PedidoResponse::new)
                .collect(Collectors.toList()); //
    }
    
    @Transactional
    public PedidoResponse adicionarRemoverItensPedido(UUID idPedido, PedidoRequest request) {
        // ... (Extração de token e busca do Pedido - sem alterações) ...
        String token = (String) SecurityContextHolder.getContext().getAuthentication().getCredentials();
        Claims claims = jwtUtil.parseToken(token);
        UUID restauranteId = UUID.fromString(claims.get("restauranteId", String.class));
        Pedido pedido = pedidoRepository.findById(idPedido)
                .orElseThrow(() -> new EntityNotFoundException("Pedido não encontrado: " + idPedido));
        
        // Validação do restaurante (sem alterações)
        if (!pedido.getRestaurante().getId().equals(restauranteId)) {
            throw new SecurityException("Acesso negado. O pedido não pertence ao seu restaurante.");
        }
        
        // Validação de Status (já estava correta, bloqueia EM_PREPARO, PRONTO, ENTREGUE, CANCELADO)
        Set<PedidoStatus> statusBloqueados = Set.of(
            PedidoStatus.EM_PREPARO,
            PedidoStatus.PRONTO,
            PedidoStatus.ENTREGUE,
            PedidoStatus.CANCELADO
        ); //
        if (statusBloqueados.contains(pedido.getStatus())) {
             throw new IllegalStateException("Não é possível adicionar/remover itens de um pedido que está 'EM PREPARO', 'PRONTO', 'ENTREGUE' ou 'CANCELADO'. Status atual: " + pedido.getStatus());
        } //
        
        // ... (Garante lista vazia se request.getItens() for nulo - sem alterações) ...
        if (request.getItens() == null) {
             request.setItens(new ArrayList<>()); 
        }

        // LÓGICA DE ATUALIZAÇÃO (REPLACE)
        pedido.getItens().clear(); //

        List<ItemPedido> novosItens = request.getItens().stream().map(itemDto -> {
            // ... (Busca Cardapio, valida restaurante, cria ItemPedido - sem alterações) ...
            Cardapio itemDeCardapio = cardapioRepository.findById(itemDto.getCardapioItemId())
                .orElseThrow(() -> new EntityNotFoundException("Item de cardápio não encontrado: " + itemDto.getCardapioItemId()));
            if (!itemDeCardapio.getRestaurante().getId().equals(restauranteId)) {
                throw new SecurityException("Item do cardápio " + itemDeCardapio.getNome() + " não pertence a este restaurante.");
            }
            ItemPedido itemPedido = new ItemPedido();
            itemPedido.setPedido(pedido); 
            itemPedido.setProdutoId(itemDeCardapio.getId());
            itemPedido.setNomeProduto(itemDeCardapio.getNome());
            itemPedido.setPrecoUnitario(itemDeCardapio.getPreco());
            itemPedido.setQuantidade(itemDto.getQuantidade());
            itemPedido.setObservacoes(itemDto.getObservacao());
            return itemPedido;
        }).collect(Collectors.toList());

        pedido.getItens().addAll(novosItens); //
        
        // <<< LÓGICA DE MUDANÇA DE STATUS REMOVIDA >>>
        // A lógica que mudava de ATENDIMENTO para PENDENTE foi removida, pois ATENDIMENTO não existe mais.

        // Lógica de cancelamento se itens ficarem vazios (sem alterações)
        if (pedido.getItens().isEmpty()) {
            pedido.setStatus(PedidoStatus.CANCELADO); //
            String topicCancel = "/topic/restaurante/" + restauranteId + "/pedidos";
            messagingTemplate.convertAndSend(topicCancel, new WebSocketMessage(EventLabel.PEDIDO_UPDATE_CANCEL, new PedidoResponse(pedido))); //
            pedidoRepository.delete(pedido); //
            PedidoResponse responseAntesDeDeletar = new PedidoResponse(pedido);
            responseAntesDeDeletar.setStatus(PedidoStatus.CANCELADO); 
            return responseAntesDeDeletar; //
        } else {
             // Salva e notifica (sem alterações)
             Pedido pedidoAtualizado = pedidoRepository.save(pedido); //
             String topicUpdate = "/topic/restaurante/" + restauranteId + "/pedidos";
             messagingTemplate.convertAndSend(topicUpdate, new WebSocketMessage(EventLabel.PEDIDO_UPDATE_NEW, new PedidoResponse(pedidoAtualizado))); //
             return new PedidoResponse(pedidoAtualizado); //
        }
    }
    
    @Transactional
    public Optional<Pedido> updateStatus(UUID idPedido, String novoStatusStr) {
        // ... (Parse do novoStatus e extração de token - sem alterações) ...
        PedidoStatus novoStatus;
        try {
            novoStatus = PedidoStatus.valueOf(novoStatusStr.toUpperCase());
        } catch (IllegalArgumentException e) {
            throw new IllegalArgumentException("Status de pedido inválido: " + novoStatusStr);
        }
        String token = (String) SecurityContextHolder.getContext().getAuthentication().getCredentials();
        Claims claims = jwtUtil.parseToken(token);
        UUID restauranteIdDoGarcom = UUID.fromString(claims.get("restauranteId", String.class));
        UUID garcomId = UUID.fromString(claims.get("garcomId", String.class));
        
        // Busca pedido e valida restaurante (sem alterações)
        Pedido pedido = pedidoRepository.findById(idPedido)
                .orElseThrow(() -> new EntityNotFoundException("Pedido não encontrado: " + idPedido));
        if (!pedido.getRestaurante().getId().equals(restauranteIdDoGarcom)) {
            throw new SecurityException("Acesso negado. O pedido não pertence ao seu restaurante.");
        }

        pedido.setStatus(novoStatus); //

        // Associa garçom se ENTREGUE (sem alterações)
        if (novoStatus == PedidoStatus.ENTREGUE) {
            Garcom garcom = garcomRepository.findById(garcomId)
                .orElseThrow(() -> new EntityNotFoundException("Garçom não encontrado."));
            pedido.setGarcom(garcom); 
        }

        // Notificação e deleção se ENTREGUE ou CANCELADO (sem alterações)
        String topic = "/topic/restaurante/" + restauranteIdDoGarcom + "/pedidos"; //
        EventLabel eventLabel = (novoStatus == PedidoStatus.CANCELADO) ? EventLabel.PEDIDO_UPDATE_CANCEL : EventLabel.PEDIDO_UPDATE_NEW; //

        if (novoStatus == PedidoStatus.ENTREGUE || novoStatus == PedidoStatus.CANCELADO) { //
            messagingTemplate.convertAndSend(topic, new WebSocketMessage(eventLabel, new PedidoResponse(pedido))); //
            pedidoRepository.delete(pedido); //
            return Optional.empty(); //
        } else {
            Pedido pedidoAtualizado = pedidoRepository.save(pedido); //
            messagingTemplate.convertAndSend(topic, new WebSocketMessage(eventLabel, new PedidoResponse(pedidoAtualizado))); //
            return Optional.of(pedidoAtualizado); //
        }
    }
    
    @Transactional
    public PedidoResponse criarPedido(UUID mesaId, PedidoRequest request) {
        String token = (String) SecurityContextHolder.getContext().getAuthentication().getCredentials();
        Claims claims = jwtUtil.parseToken(token);
        UUID garcomId = UUID.fromString(claims.get("garcomId", String.class));
        UUID restauranteId = UUID.fromString(claims.get("restauranteId", String.class));
        Garcom garcom = garcomRepository.findById(garcomId)
            .orElseThrow(() -> new EntityNotFoundException("Garçom não encontrado."));
        Mesa mesa = mesaRepository.findById(mesaId)
            .orElseThrow(() -> new EntityNotFoundException("Mesa não encontrada."));

        if (!mesa.getAmbiente().getRestaurante().getId().equals(restauranteId)) {
            throw new SecurityException("Acesso negado. A mesa não pertence ao seu restaurante.");
        }

        atendimentoMesaService.getAtendimentoAtivo(mesaId)
            .orElseThrow(() -> new IllegalStateException("Não há um atendimento ativo iniciado para esta mesa. O garçom deve iniciar o atendimento primeiro."));
        // <<< FIM DA VALIDAÇÃO >>>

        // Cria e popula o Pedido
        Pedido novoPedido = new Pedido(); //
        novoPedido.setMesa(mesa); //
        novoPedido.setGarcom(garcom); //
        novoPedido.setRestaurante(mesa.getAmbiente().getRestaurante()); //
        novoPedido.setDataHora(LocalDateTime.now()); //
        
        novoPedido.setStatus(PedidoStatus.PENDENTE);
        
        if (request.getClienteId() != null) {
            Cliente cliente = clienteRepository.findById(request.getClienteId())
                .orElseThrow(() -> new EntityNotFoundException("Cliente não encontrado com o ID fornecido."));
            novoPedido.setCliente(cliente);
        }
        
        if (request.getItens() == null || request.getItens().isEmpty()) {
            throw new IllegalArgumentException("O pedido deve conter pelo menos um item.");
        }
        List<ItemPedido> itensDoPedido = request.getItens().stream().map(itemDto -> {
            Cardapio itemDeCardapio = cardapioRepository.findById(itemDto.getCardapioItemId())
                .orElseThrow(() -> new EntityNotFoundException("Item de cardápio não encontrado: " + itemDto.getCardapioItemId()));
            if (!itemDeCardapio.getRestaurante().getId().equals(restauranteId)) {
                throw new SecurityException("Item do cardápio " + itemDeCardapio.getNome() + " não pertence a este restaurante.");
            }
            ItemPedido itemPedido = new ItemPedido();
            itemPedido.setPedido(novoPedido); 
            itemPedido.setProdutoId(itemDeCardapio.getId()); 
            itemPedido.setNomeProduto(itemDeCardapio.getNome());
            itemPedido.setPrecoUnitario(itemDeCardapio.getPreco());
            itemPedido.setQuantidade(itemDto.getQuantidade());
            itemPedido.setObservacoes(itemDto.getObservacao());
            return itemPedido;
        }).collect(Collectors.toList());
        novoPedido.setItens(itensDoPedido); //
        
        // Salva e notifica (sem alterações)
        Pedido pedidoSalvo = pedidoRepository.save(novoPedido); 
        String topic = "/topic/restaurante/" + restauranteId + "/pedidos"; 
        messagingTemplate.convertAndSend(topic, new WebSocketMessage(EventLabel.PEDIDO_UPDATE_NEW, new PedidoResponse(pedidoSalvo))); 

        return new PedidoResponse(pedidoSalvo); 
    }
}