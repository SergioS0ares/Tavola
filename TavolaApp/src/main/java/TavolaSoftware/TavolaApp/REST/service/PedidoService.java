package TavolaSoftware.TavolaApp.REST.service;

import TavolaSoftware.TavolaApp.REST.model.Garcom;
import TavolaSoftware.TavolaApp.REST.model.Pedido;
import TavolaSoftware.TavolaApp.REST.repository.GarcomRepository; // Importe o GarcomRepository
import TavolaSoftware.TavolaApp.REST.repository.PedidoRepository;
import TavolaSoftware.TavolaApp.REST.security.JwtUtil;
import TavolaSoftware.TavolaApp.tools.PedidoStatus;
import io.jsonwebtoken.Claims;
import jakarta.persistence.EntityNotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import java.util.Optional; // Importe o Optional
import java.util.UUID;

@Service
public class PedidoService {

    @Autowired
    private PedidoRepository pedidoRepository;

    @Autowired
    private GarcomRepository garcomRepository; // Precisamos dele para buscar o garçom

    @Autowired
    private JwtUtil jwtUtil;

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

        // Se o pedido for entregue, registra qual garçom o fez.
        if (novoStatus == PedidoStatus.ENTREGUE) {
            Garcom garcom = garcomRepository.findById(garcomId)
                .orElseThrow(() -> new EntityNotFoundException("Garçom não encontrado."));
            pedido.setGarcom(garcom); 
        }

        // REGRA DE NEGÓCIO: SE O NOVO STATUS FOR FINAL, DELETAMOS O PEDIDO.
        if (novoStatus == PedidoStatus.ENTREGUE || novoStatus == PedidoStatus.CANCELADO) {
            pedidoRepository.delete(pedido);
            return Optional.empty(); // Retorna um Optional vazio para indicar que foi deletado.
        } else {
            // Se não for um status final, apenas salvamos a atualização.
            Pedido pedidoAtualizado = pedidoRepository.save(pedido);
            return Optional.of(pedidoAtualizado); // Retorna o objeto atualizado.
        }
    }
}