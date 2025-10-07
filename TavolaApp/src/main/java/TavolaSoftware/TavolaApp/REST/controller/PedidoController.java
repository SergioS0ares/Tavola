package TavolaSoftware.TavolaApp.REST.controller;

import TavolaSoftware.TavolaApp.REST.dto.requests.StatusUpdateRequest;
import TavolaSoftware.TavolaApp.REST.service.PedidoService;
import jakarta.persistence.EntityNotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import java.util.Map;
import java.util.UUID;

@RestController
@RequestMapping("/auth/pedidos")
public class PedidoController {

    @Autowired
    private PedidoService pedidoService;

    @PutMapping("/{idPedido}/status")
    public ResponseEntity<?> updatePedidoStatus(@PathVariable UUID idPedido, @RequestBody StatusUpdateRequest request) {
        try {
            var pedidoAtualizadoOpt = pedidoService.updateStatus(idPedido, request.getNovoStatus());
            
            // Se o Optional contiver um pedido, significa que ele foi atualizado (retorna 200 OK com o corpo).
            // Se estiver vazio, significa que foi deletado (retorna 204 No Content).
            return pedidoAtualizadoOpt
                    .map(pedido -> ResponseEntity.ok(pedido)) // Supondo que você terá um PedidoResponse
                    .orElseGet(() -> ResponseEntity.noContent().build());

        } catch (IllegalArgumentException e) {
            return ResponseEntity.badRequest().body(Map.of("erro", e.getMessage()));
        } catch (SecurityException e) {
            return ResponseEntity.status(HttpStatus.FORBIDDEN).body(Map.of("erro", e.getMessage()));
        } catch (EntityNotFoundException e) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(Map.of("erro", e.getMessage()));
        }
    }
}