package TavolaSoftware.TavolaApp.REST.service;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;
import java.util.Map;
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
import TavolaSoftware.TavolaApp.REST.repository.GarcomRepository; // Importe o GarcomRepository
import TavolaSoftware.TavolaApp.REST.repository.MesaRepository;
import TavolaSoftware.TavolaApp.REST.repository.PedidoRepository;
import TavolaSoftware.TavolaApp.REST.security.JwtUtil;
import TavolaSoftware.TavolaApp.tools.EventLabel;
import TavolaSoftware.TavolaApp.tools.PedidoStatus;
import io.jsonwebtoken.Claims;
import jakarta.persistence.EntityNotFoundException;

@Service
public class PedidoService {

    @Autowired
    private PedidoRepository pedidoRepository;

    @Autowired
    private GarcomRepository garcomRepository; // Precisamos dele para buscar o garçom
    
    @Autowired
    private ClienteRepository clienteRepository;

    @Autowired
    private MesaRepository mesaRepository;

    @Autowired
    private JwtUtil jwtUtil;
    
    @Autowired
    private SimpMessagingTemplate messagingTemplate;
    
    @Autowired 
    private CardapioRepository cardapioRepository;
    
    // @Autowired 
    // private ItemPedidoRepository itemPedidoRepository; // <--- REMOVIDO (Correto!)

    
    @Transactional
    public PedidoResponse atenderChamadoMesa(UUID mesaId) {
        // 1. Extrai dados do garçom logado
        String token = (String) SecurityContextHolder.getContext().getAuthentication().getCredentials();
        Claims claims = jwtUtil.parseToken(token);
        UUID garcomId = UUID.fromString(claims.get("garcomId", String.class));
        UUID restauranteId = UUID.fromString(claims.get("restauranteId", String.class));

        // 2. Busca Garçom e Mesa
        Garcom garcom = garcomRepository.findById(garcomId)
            .orElseThrow(() -> new EntityNotFoundException("Garçom não encontrado."));
        Mesa mesa = mesaRepository.findById(mesaId)
            .orElseThrow(() -> new EntityNotFoundException("Mesa não encontrada."));

        // 3. Validação de Segurança
        if (!mesa.getAmbiente().getRestaurante().getId().equals(restauranteId)) {
            throw new SecurityException("Acesso negado. A mesa não pertence ao seu restaurante.");
        }

        // 4. Encontra o "chamado" (Pedido sem itens em AGUARDANDO_ATENDIMENTO)
        //    Ou cria um novo pedido de atendimento se não existir um chamado aberto.
        Pedido pedidoAtendimento = pedidoRepository
            .findFirstByMesaIdAndStatusAndItensIsEmpty(mesaId, PedidoStatus.AGUARDANDO_ATENDIMENTO)
            .orElseGet(() -> {
                // Se não há chamado explícito, cria um novo pedido de "atendimento"
                Pedido novoChamado = new Pedido();
                novoChamado.setMesa(mesa);
                novoChamado.setGarcom(garcom); // Garçom que está atendendo
                novoChamado.setRestaurante(mesa.getAmbiente().getRestaurante());
                novoChamado.setDataHora(LocalDateTime.now());
                novoChamado.setStatus(PedidoStatus.ATENDIMENTO); // Já inicia em atendimento
                return pedidoRepository.save(novoChamado); // Salva primeiro para ter ID
            });

        // 5. Se encontrou um chamado existente, atualiza
        if (pedidoAtendimento.getStatus() == PedidoStatus.AGUARDANDO_ATENDIMENTO) {
            pedidoAtendimento.setStatus(PedidoStatus.ATENDIMENTO);
            pedidoAtendimento.setGarcom(garcom); // Associa o garçom que atendeu
            pedidoAtendimento = pedidoRepository.save(pedidoAtendimento);
        }
        // Se já estava em ATENDIMENTO (criado no orElseGet), não faz nada extra.

        // 6. Notifica via WebSocket (opcional, pode notificar outros garçons ou a gerência)
        String topic = "/topic/restaurante/" + restauranteId + "/mesas/" + mesaId; // Tópico específico da mesa
        messagingTemplate.convertAndSend(topic, new WebSocketMessage(EventLabel.MESA_ATENDIMENTO, new PedidoResponse(pedidoAtendimento))); // DTO adaptado

        return new PedidoResponse(pedidoAtendimento);
    }
    
    @Transactional
    public void liberarAtendimentoMesa(UUID mesaId) {
        // 1. Extrai dados do garçom logado
        String token = (String) SecurityContextHolder.getContext().getAuthentication().getCredentials();
        Claims claims = jwtUtil.parseToken(token);
        UUID garcomId = UUID.fromString(claims.get("garcomId", String.class));
        UUID restauranteId = UUID.fromString(claims.get("restauranteId", String.class));

        // 2. Busca a Mesa (para validação do restaurante)
        Mesa mesa = mesaRepository.findById(mesaId)
            .orElseThrow(() -> new EntityNotFoundException("Mesa não encontrada."));
        if (!mesa.getAmbiente().getRestaurante().getId().equals(restauranteId)) {
            throw new SecurityException("Acesso negado. A mesa não pertence ao seu restaurante.");
        }

        // 3. Encontra o Pedido de ATENDIMENTO (sem itens) associado a ESTE garçom e mesa
        Pedido pedidoAtendimento = pedidoRepository
            .findFirstByMesaIdAndGarcomIdAndStatusAndItensIsEmpty(mesaId, garcomId, PedidoStatus.ATENDIMENTO)
            .orElseThrow(() -> new EntityNotFoundException("Nenhum atendimento ativo encontrado para você nesta mesa."));

        // 4. Finaliza o atendimento: Muda status para ENTREGUE e deleta (como no updateStatus)
        //    Ou apenas desassocia o garçom, dependendo da regra de negócio.
        //    Vamos seguir a lógica do updateStatus: marcar como ENTREGUE e deletar.
        pedidoAtendimento.setStatus(PedidoStatus.ENTREGUE); // Marca como finalizado

        // 5. Notifica via WebSocket ANTES de deletar
        String topicPedido = "/topic/restaurante/" + restauranteId + "/pedidos"; // Tópico geral de pedidos
        messagingTemplate.convertAndSend(topicPedido, new WebSocketMessage(EventLabel.PEDIDO_UPDATE_CANCEL, new PedidoResponse(pedidoAtendimento))); // Sinaliza remoção

        String topicMesa = "/topic/restaurante/" + restauranteId + "/mesas/" + mesaId; // Tópico específico da mesa
        messagingTemplate.convertAndSend(topicMesa, new WebSocketMessage(EventLabel.MESA_LIBERADA, Map.of("mesaId", mesaId))); // Sinaliza liberação

        // 6. Deleta o pedido de atendimento
        pedidoRepository.delete(pedidoAtendimento);
    }
    
    @Transactional(readOnly = true)
    public List<PedidoResponse> findPedidosAtivosPorMesa(UUID mesaId) {
        // 1. Extrai dados do garçom/restaurante logado
        String token = (String) SecurityContextHolder.getContext().getAuthentication().getCredentials();
        Claims claims = jwtUtil.parseToken(token);
        UUID restauranteId = UUID.fromString(claims.get("restauranteId", String.class));

        // 2. Busca a Mesa (para validação)
        Mesa mesa = mesaRepository.findById(mesaId)
            .orElseThrow(() -> new EntityNotFoundException("Mesa não encontrada."));
        if (!mesa.getAmbiente().getRestaurante().getId().equals(restauranteId)) {
            throw new SecurityException("Acesso negado. A mesa não pertence ao seu restaurante.");
        }

        // 3. Define os status considerados "ativos" para um pedido de item
        Set<PedidoStatus> statusAtivos = Set.of(
            PedidoStatus.PENDENTE,
            PedidoStatus.EM_PREPARO,
            PedidoStatus.PRONTO
            // Não inclui ATENDIMENTO (chamado) nem AGUARDANDO_ATENDIMENTO
        );

        // 4. Busca os pedidos da mesa com os status ativos E que tenham itens
        List<Pedido> pedidosAtivos = pedidoRepository.findByMesaIdAndStatusInAndItensIsNotEmpty(mesaId, statusAtivos);

        // 5. Mapeia para DTOs
        return pedidosAtivos.stream()
                .map(PedidoResponse::new)
                .collect(Collectors.toList());
    }
    
    @Transactional
    public PedidoResponse adicionarRemoverItensPedido(UUID idPedido, PedidoRequest request) {
        // 1. Extrai dados do garçom/restaurante logado
        String token = (String) SecurityContextHolder.getContext().getAuthentication().getCredentials();
        Claims claims = jwtUtil.parseToken(token);
        UUID restauranteId = UUID.fromString(claims.get("restauranteId", String.class));
        // UUID garcomId = UUID.fromString(claims.get("garcomId", String.class)); // Pode ser útil para auditoria

        // 2. Busca o Pedido
        Pedido pedido = pedidoRepository.findById(idPedido)
                .orElseThrow(() -> new EntityNotFoundException("Pedido não encontrado: " + idPedido));

        // 3. Validações
        if (!pedido.getRestaurante().getId().equals(restauranteId)) {
            throw new SecurityException("Acesso negado. O pedido não pertence ao seu restaurante.");
        }
        
        // --- INÍCIO DA CORREÇÃO ---
        // Define os status que BLOQUEIAM a edição
        Set<PedidoStatus> statusBloqueados = Set.of(
            PedidoStatus.EM_PREPARO,
            PedidoStatus.PRONTO,
            PedidoStatus.ENTREGUE,
            PedidoStatus.CANCELADO
        );

        // ANTES: if (pedido.getStatus() != PedidoStatus.PENDENTE) { ... }
        
        // DEPOIS: Se o status atual estiver na lista de bloqueados, lança a exceção
        if (statusBloqueados.contains(pedido.getStatus())) {
             throw new IllegalStateException("Não é possível adicionar/remover itens de um pedido que está 'EM PREPARO', 'PRONTO', 'ENTREGUE' ou 'CANCELADO'. Status atual: " + pedido.getStatus());
        }
        // --- FIM DA CORREÇÃO ---
        
        if (request.getItens() == null) { // Permite remover todos os itens? Sim.
             request.setItens(new ArrayList<>()); // Garante lista vazia se for nulo
        }

        // --- LÓGICA DE ATUALIZAÇÃO (REPLACE) ---
        // 1. Remove os itens antigos (graças ao orphanRemoval=true)
        pedido.getItens().clear(); // Simples e correto com orphanRemoval=true

        // 2. Adiciona os novos itens (lógica similar ao criarPedido)
        List<ItemPedido> novosItens = request.getItens().stream().map(itemDto -> {
            Cardapio itemDeCardapio = cardapioRepository.findById(itemDto.getCardapioItemId())
                .orElseThrow(() -> new EntityNotFoundException("Item de cardápio não encontrado: " + itemDto.getCardapioItemId()));

            if (!itemDeCardapio.getRestaurante().getId().equals(restauranteId)) {
                throw new SecurityException("Item do cardápio " + itemDeCardapio.getNome() + " não pertence a este restaurante.");
            }

            ItemPedido itemPedido = new ItemPedido();
            itemPedido.setPedido(pedido); // Vincula ao pedido existente
            itemPedido.setProdutoId(itemDeCardapio.getId());
            itemPedido.setNomeProduto(itemDeCardapio.getNome());
            itemPedido.setPrecoUnitario(itemDeCardapio.getPreco());
            itemPedido.setQuantidade(itemDto.getQuantidade());
            itemPedido.setObservacoes(itemDto.getObservacao());
            return itemPedido;
        }).collect(Collectors.toList());

        pedido.getItens().addAll(novosItens); // Adiciona os novos itens à coleção
        
        // --- ADIÇÃO DE LÓGICA ---
        // Se estávamos em ATENDIMENTO (um chamado vazio) e adicionamos itens,
        // o status deve mudar para PENDENTE (para a cozinha).
        if (pedido.getStatus() == PedidoStatus.ATENDIMENTO || pedido.getStatus() == PedidoStatus.AGUARDANDO_ATENDIMENTO) {
            pedido.setStatus(PedidoStatus.PENDENTE);
        }
        // --- FIM DA ADIÇÃO ---


        // Se a lista ficou vazia após a atualização, cancelamos o pedido?
        if (pedido.getItens().isEmpty()) {
            pedido.setStatus(PedidoStatus.CANCELADO);
             
            String topicCancel = "/topic/restaurante/" + restauranteId + "/pedidos";
            messagingTemplate.convertAndSend(topicCancel, new WebSocketMessage(EventLabel.PEDIDO_UPDATE_CANCEL, new PedidoResponse(pedido)));
            pedidoRepository.delete(pedido);
            
             PedidoResponse responseAntesDeDeletar = new PedidoResponse(pedido);
             responseAntesDeDeletar.setStatus(PedidoStatus.CANCELADO); // Força o status no DTO
             return responseAntesDeDeletar; // Indica que foi cancelado/deletado
        } else {
             // 3. Salva o pedido atualizado
             Pedido pedidoAtualizado = pedidoRepository.save(pedido);

             // 4. Notifica via WebSocket
             String topicUpdate = "/topic/restaurante/" + restauranteId + "/pedidos";
             messagingTemplate.convertAndSend(topicUpdate, new WebSocketMessage(EventLabel.PEDIDO_UPDATE_NEW, new PedidoResponse(pedidoAtualizado)));

             return new PedidoResponse(pedidoAtualizado);
        }
    }
    
    @Transactional
    public Optional<Pedido> updateStatus(UUID idPedido, String novoStatusStr) {
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

        if (novoStatus == PedidoStatus.ENTREGUE) {
            Garcom garcom = garcomRepository.findById(garcomId)
                .orElseThrow(() -> new EntityNotFoundException("Garçom não encontrado."));
            pedido.setGarcom(garcom); 
        }

        // Define o canal e o tipo de evento
        String topic = "/topic/restaurante/" + restauranteIdDoGarcom + "/pedidos";
        EventLabel eventLabel = (novoStatus == PedidoStatus.CANCELADO) ? EventLabel.PEDIDO_UPDATE_CANCEL : EventLabel.PEDIDO_UPDATE_NEW;

        // REGRA DE NEGÓCIO: SE O NOVO STATUS FOR FINAL, DELETAMOS O PEDIDO.
        if (novoStatus == PedidoStatus.ENTREGUE || novoStatus == PedidoStatus.CANCELADO) {
            
            // Dispara a mensagem ANTES de deletar, para que o front saiba qual pedido remover
            messagingTemplate.convertAndSend(topic, new WebSocketMessage(eventLabel, new PedidoResponse(pedido)));
            
            pedidoRepository.delete(pedido);
            return Optional.empty();
        } else {
            Pedido pedidoAtualizado = pedidoRepository.save(pedido);

            // Dispara a mensagem DEPOIS de salvar a atualização
            messagingTemplate.convertAndSend(topic, new WebSocketMessage(eventLabel, new PedidoResponse(pedidoAtualizado)));
            
            return Optional.of(pedidoAtualizado);
        }
    }
    
    @Transactional
    public PedidoResponse criarPedido(UUID mesaId, PedidoRequest request) {
        // 1. Extrai os dados do garçom logado a partir do token
        String token = (String) SecurityContextHolder.getContext().getAuthentication().getCredentials();
        Claims claims = jwtUtil.parseToken(token);
        UUID garcomId = UUID.fromString(claims.get("garcomId", String.class));
        UUID restauranteId = UUID.fromString(claims.get("restauranteId", String.class));

        // 2. Busca as entidades principais
        Garcom garcom = garcomRepository.findById(garcomId)
            .orElseThrow(() -> new EntityNotFoundException("Garçom não encontrado."));
        Mesa mesa = mesaRepository.findById(mesaId)
            .orElseThrow(() -> new EntityNotFoundException("Mesa não encontrada."));

        // 3. Validação de Segurança: Garante que a mesa pertence ao restaurante do garçom
        if (!mesa.getAmbiente().getRestaurante().getId().equals(restauranteId)) {
            throw new SecurityException("Acesso negado. A mesa não pertence ao seu restaurante.");
        }

        // 4. Cria e popula o objeto Pedido
        Pedido novoPedido = new Pedido();
        novoPedido.setMesa(mesa);
        novoPedido.setGarcom(garcom);
        novoPedido.setRestaurante(mesa.getAmbiente().getRestaurante());
        novoPedido.setDataHora(LocalDateTime.now());
        novoPedido.setStatus(PedidoStatus.EM_PREPARO);
        // 5. Vincula o cliente, se um ID foi fornecido
        if (request.getClienteId() != null) {
            Cliente cliente = clienteRepository.findById(request.getClienteId())
                .orElseThrow(() -> new EntityNotFoundException("Cliente não encontrado com o ID fornecido."));
            novoPedido.setCliente(cliente);
        }
        
        // 6. Converte os DTOs de itens em entidades ItemPedido
        if (request.getItens() == null || request.getItens().isEmpty()) {
            throw new IllegalArgumentException("O pedido deve conter pelo menos um item.");
        }
        
        List<ItemPedido> itensDoPedido = request.getItens().stream().map(itemDto -> {
            Cardapio itemDeCardapio = cardapioRepository.findById(itemDto.getCardapioItemId())
                .orElseThrow(() -> new EntityNotFoundException("Item de cardápio não encontrado: " + itemDto.getCardapioItemId()));
            
            // Valida se o item do cardápio pertence ao mesmo restaurante
            if (!itemDeCardapio.getRestaurante().getId().equals(restauranteId)) {
                throw new SecurityException("Item do cardápio " + itemDeCardapio.getNome() + " não pertence a este restaurante.");
            }

            ItemPedido itemPedido = new ItemPedido();
            itemPedido.setPedido(novoPedido); // Vincula o item ao pedido principal
            itemPedido.setProdutoId(itemDeCardapio.getId()); // Guarda a referência do item original
            itemPedido.setNomeProduto(itemDeCardapio.getNome());
            itemPedido.setPrecoUnitario(itemDeCardapio.getPreco());
            itemPedido.setQuantidade(itemDto.getQuantidade());
            itemPedido.setObservacoes(itemDto.getObservacao());
            return itemPedido;
        }).collect(Collectors.toList());

        novoPedido.setItens(itensDoPedido);
        
        // 7. Salva o pedido e seus itens (graças ao CascadeType.ALL)
        Pedido pedidoSalvo = pedidoRepository.save(novoPedido);

        // 8. Dispara a notificação WebSocket para a cozinha/gerência
        String topic = "/topic/restaurante/" + restauranteId + "/pedidos";
        messagingTemplate.convertAndSend(topic, new WebSocketMessage(EventLabel.PEDIDO_UPDATE_NEW, new PedidoResponse(pedidoSalvo)));

        return new PedidoResponse(pedidoSalvo);
    }
}