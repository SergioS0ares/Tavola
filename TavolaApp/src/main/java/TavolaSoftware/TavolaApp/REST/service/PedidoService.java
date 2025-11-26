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
import TavolaSoftware.TavolaApp.REST.dto.responses.ItemPedidoResponse;
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
    @Autowired private AtendimentoMesaService atendimentoMesaService; 
    
    // NOVO MÉTODO DE MAPEAMENTO, ENRIQUECE OS ITENS COM A IMAGEM DO CARDAPIO
    private List<ItemPedidoResponse> mapearItensParaResposta(List<ItemPedido> itens) {
        return itens.stream()
                .map(item -> {
                    // Busca a URL da imagem no repositório do Cardápio
                    String imagemUrl = cardapioRepository.findById(item.getProdutoId())
                            .map(Cardapio::getImagem) // Assumindo que o Cardapio tem um método getImagem() ou getImagemUrl()
                            .orElse(null);
                    
                    // Constrói o DTO do item enriquecido
                    return new ItemPedidoResponse(item, imagemUrl);
                })
                .collect(Collectors.toList());
    }
    
    // MÉTODO MODIFICADO
    @Transactional(readOnly = true)
    public List<PedidoResponse> findPedidosAtivosPorMesa(UUID mesaId) {
        String token = (String) SecurityContextHolder.getContext().getAuthentication().getCredentials();
        Claims claims = jwtUtil.parseToken(token);
        UUID restauranteId = UUID.fromString(claims.get("restauranteId", String.class));
        Mesa mesa = mesaRepository.findById(mesaId)
            .orElseThrow(() -> new EntityNotFoundException("Mesa não encontrada."));
        if (!mesa.getAmbiente().getRestaurante().getId().equals(restauranteId)) {
            throw new SecurityException("Acesso negado. A mesa não pertence ao seu restaurante.");
        }

        // Define os status ativos
        Set<PedidoStatus> statusAtivos = Set.of(
            PedidoStatus.PENDENTE,
            PedidoStatus.EM_PREPARO,
            PedidoStatus.PRONTO
        ); 

        // Busca os pedidos (Assuma que o Repositório usa JOIN FETCH para carregar os Itens e a Mesa)
        List<Pedido> pedidosAtivos = pedidoRepository.findByMesaIdAndStatusInAndItensIsNotEmpty(mesaId, statusAtivos); 

        // Mapeia para DTOs (Usando o novo método de mapeamento para injetar a imagemUrl)
        return pedidosAtivos.stream()
                .map(pedido -> {
                    List<ItemPedidoResponse> itensEnriquecidos = mapearItensParaResposta(pedido.getItens());
                    return new PedidoResponse(pedido, itensEnriquecidos);
                })
                .collect(Collectors.toList()); 
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
        
        // Validação de Status (sem alterações)
        Set<PedidoStatus> statusBloqueados = Set.of(
            PedidoStatus.EM_PREPARO,
            PedidoStatus.PRONTO,
            PedidoStatus.ENTREGUE,
            PedidoStatus.CANCELADO
        ); 
        if (statusBloqueados.contains(pedido.getStatus())) {
             throw new IllegalStateException("Não é possível adicionar/remover itens de um pedido que está 'EM PREPARO', 'PRONTO', 'ENTREGUE' ou 'CANCELADO'. Status atual: " + pedido.getStatus());
        } 
        
        // ... (Garante lista vazia se request.getItens() for nulo - sem alterações) ...
        if (request.getItens() == null) {
             request.setItens(new ArrayList<>()); 
        }

        // LÓGICA DE ATUALIZAÇÃO (REPLACE)
        pedido.getItens().clear(); 

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

        pedido.getItens().addAll(novosItens); 
        
        // Lógica de cancelamento se itens ficarem vazios
        if (pedido.getItens().isEmpty()) {
            pedido.setStatus(PedidoStatus.CANCELADO); 
            String topicCancel = "/topic/restaurante/" + restauranteId + "/pedidos";
            // CHAMA CONSTRUTOR SIMPLES (sem itens enriquecidos)
            messagingTemplate.convertAndSend(topicCancel, new WebSocketMessage(EventLabel.PEDIDO_UPDATE_CANCEL, new PedidoResponse(pedido))); 
            pedidoRepository.delete(pedido); 
            
            // Para o retorno do Controller, usa o mapeamento completo, mas com status CANCELADO
            List<ItemPedidoResponse> itensCancelados = mapearItensParaResposta(pedido.getItens());
            return new PedidoResponse(pedido, itensCancelados); 
        } else {
             // Salva e notifica
             Pedido pedidoAtualizado = pedidoRepository.save(pedido); 
             String topicUpdate = "/topic/restaurante/" + restauranteId + "/pedidos";
             
             // Usa mapeamento completo para a notificação e o retorno
             List<ItemPedidoResponse> itensEnriquecidos = mapearItensParaResposta(pedidoAtualizado.getItens());
             PedidoResponse responseCompleto = new PedidoResponse(pedidoAtualizado, itensEnriquecidos);
             
             messagingTemplate.convertAndSend(topicUpdate, new WebSocketMessage(EventLabel.PEDIDO_UPDATE_NEW, responseCompleto)); 
             return responseCompleto; 
        }
    }
    
    @Transactional
    public Optional<Pedido> updateStatus(UUID idPedido, String novoStatusStr) {
        // ... (Parse do novoStatus, extração de token, busca do pedido, validação - sem alterações) ...
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
        Pedido pedido = pedidoRepository.findById(idPedido)
                .orElseThrow(() -> new EntityNotFoundException("Pedido não encontrado: " + idPedido));
        if (!pedido.getRestaurante().getId().equals(restauranteIdDoGarcom)) {
            throw new SecurityException("Acesso negado. O pedido não pertence ao seu restaurante.");
        }

        pedido.setStatus(novoStatus); 

        // Associa garçom se ENTREGUE
        if (novoStatus == PedidoStatus.ENTREGUE) { 
            Garcom garcom = garcomRepository.findById(garcomId)
                .orElseThrow(() -> new EntityNotFoundException("Garçom não encontrado."));
            pedido.setGarcom(garcom); 
        }

        // Define o canal e o tipo de evento
        String topic = "/topic/restaurante/" + restauranteIdDoGarcom + "/pedidos"; 
        EventLabel eventLabel = (novoStatus == PedidoStatus.CANCELADO) ? EventLabel.PEDIDO_UPDATE_CANCEL : EventLabel.PEDIDO_UPDATE_NEW; 

        if (novoStatus == PedidoStatus.CANCELADO) { 
            
            // Dispara a mensagem ANTES de deletar (usa construtor simples)
            messagingTemplate.convertAndSend(topic, new WebSocketMessage(eventLabel, new PedidoResponse(pedido))); 
            
            pedidoRepository.delete(pedido); 
            return Optional.empty(); 
        } else {
            // Se for PENDENTE, EM_PREPARO, PRONTO ou ENTREGUE, apenas salva e notifica
            Pedido pedidoAtualizado = pedidoRepository.save(pedido); 
            
            // Usa mapeamento completo para a notificação
            List<ItemPedidoResponse> itensEnriquecidos = mapearItensParaResposta(pedidoAtualizado.getItens());
            PedidoResponse responseCompleto = new PedidoResponse(pedidoAtualizado, itensEnriquecidos);

            messagingTemplate.convertAndSend(topic, new WebSocketMessage(eventLabel, responseCompleto)); 
            
            return Optional.of(pedidoAtualizado); 
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
        Pedido novoPedido = new Pedido(); 
        novoPedido.setMesa(mesa); 
        novoPedido.setGarcom(garcom); 
        novoPedido.setRestaurante(mesa.getAmbiente().getRestaurante()); 
        novoPedido.setDataHora(LocalDateTime.now()); 
        
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
        novoPedido.setItens(itensDoPedido); 
        
        // Salva e notifica
        Pedido pedidoSalvo = pedidoRepository.save(novoPedido); 
        String topic = "/topic/restaurante/" + restauranteId + "/pedidos"; 
        
        // Usa mapeamento completo para a notificação e o retorno
        List<ItemPedidoResponse> itensEnriquecidos = mapearItensParaResposta(pedidoSalvo.getItens());
        PedidoResponse responseCompleto = new PedidoResponse(pedidoSalvo, itensEnriquecidos);

        messagingTemplate.convertAndSend(topic, new WebSocketMessage(EventLabel.PEDIDO_UPDATE_NEW, responseCompleto)); 

        return responseCompleto; 
    }
}