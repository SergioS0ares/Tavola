package TavolaSoftware.TavolaApp.REST.controller;

import TavolaSoftware.TavolaApp.REST.dto.requests.PedidoRequest;
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
@RequestMapping("/auth/api/restaurantes/{idRestaurante}/pedidos")
public class PedidoController {

    @Autowired
    private PedidoService pedidoService;
    
    @PostMapping ("/{mesaId}/salvar")
    public ResponseEntity<?> criarPedido(@PathVariable UUID mesaId, @RequestBody PedidoRequest request) {
        try {
            // A lógica de extrair o garçom do token será feita no service
            var pedidoCriado = pedidoService.criarPedido(mesaId, request);
            return ResponseEntity.status(HttpStatus.CREATED).body(pedidoCriado); // Retorna o PedidoResponse
        } catch (EntityNotFoundException e) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(Map.of("erro", e.getMessage()));
        } catch (SecurityException e) {
            return ResponseEntity.status(HttpStatus.FORBIDDEN).body(Map.of("erro", e.getMessage()));
        } catch (IllegalArgumentException e) {
            return ResponseEntity.badRequest().body(Map.of("erro", e.getMessage()));
        }
    }

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
    

	@PutMapping ("/{mesaId}/atender")
	public void c() {
		/*
		 * esse método vai alterar o Status de pedido de null ou de AGUARDANDO_PEDIDO para ATENDENDO apenas isso...
		 * não vamos colocar nenhum payload. mas podemos fazer um tratamento de exceção para casos como o Status
		 * não estar nem 'AGUARDANDO_ATENDIMENTO', nem em null.
		 * */
	}
	
	@PutMapping ("/{mesaId}/liberar")
	public void d() {
		/*
		 * esse método está aqui para desassociar um garçom do atendimento
		 * */
	}
	
	@GetMapping ("/{mesaId}/ativos")
	public void e() {
		/*
		 * puxa pedidos pendentes para a mesa expecífica
		 * */
	}
	
	
}


/*
 * aqui a enum do Status de pedido pra vc tomar de conhecimento:
public enum PedidoStatus {
    AGUARDANDO_ATENDIMENTO, // O cliente chamou o garçom, mas ainda não fez um pedido
    ATENDIMENTO,			// O cliente chamou (ou não, sei lá) e ESTÁ atendido.
    PENDENTE,               // O cliente fez um pedido de item, aguardando ação
    EM_PREPARO,             // Status futuro para a Cozinha usar
    PRONTO,                 // Status futuro para a Cozinha usar
    ENTREGUE,               // O garçom entregou o item/atendeu ao chamado
    CANCELADO;              // O pedido/chamado foi cancelado
}
 * */
 