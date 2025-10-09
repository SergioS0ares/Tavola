package TavolaSoftware.TavolaApp.REST.service;

import java.time.LocalDateTime;
import java.util.List;
import java.util.Optional;
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
    
    @Autowired private CardapioRepository cardapioRepository;


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
        novoPedido.setStatus(PedidoStatus.PENDENTE); // Ou o status que a cozinha deve receber

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