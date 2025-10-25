package TavolaSoftware.TavolaApp.REST.controller;

import TavolaSoftware.TavolaApp.REST.dto.requests.PedidoRequest;
import TavolaSoftware.TavolaApp.REST.dto.requests.StatusUpdateRequest;
import TavolaSoftware.TavolaApp.REST.dto.responses.PedidoResponse;
import TavolaSoftware.TavolaApp.REST.service.PedidoService;
import TavolaSoftware.TavolaApp.tools.PedidoStatus;
import jakarta.persistence.EntityNotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
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
	public ResponseEntity<?> atenderMesa(
            @PathVariable UUID idRestaurante, // Vem da URL principal
            @PathVariable UUID mesaId
    ) {
		/*
		 * esse método vai alterar o Status de pedido de null ou de AGUARDANDO_PEDIDO para ATENDENDO apenas isso...
		 * não vamos colocar nenhum payload. mas podemos fazer um tratamento de exceção para casos como o Status
		 * não estar nem 'AGUARDANDO_ATENDIMENTO', nem em null.
		 * */
         try {
            PedidoResponse pedidoAtendido = pedidoService.atenderChamadoMesa(mesaId);
            return ResponseEntity.ok(pedidoAtendido);
        } catch (EntityNotFoundException e) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(Map.of("erro", e.getMessage()));
        } catch (SecurityException e) {
            return ResponseEntity.status(HttpStatus.FORBIDDEN).body(Map.of("erro", e.getMessage()));
        } catch (IllegalStateException e) {
             return ResponseEntity.status(HttpStatus.CONFLICT).body(Map.of("erro", e.getMessage())); // Ex: Mesa já atendida
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(Map.of("erro", "Erro ao atender mesa: " + e.getMessage()));
        }
	}

	@PutMapping ("/{mesaId}/liberar")
	public ResponseEntity<?> liberarMesa(
            @PathVariable UUID idRestaurante, // Vem da URL principal
            @PathVariable UUID mesaId
    ) {
		/*
		 * esse método está aqui para desassociar um garçom do atendimento
		 * */
         try {
            pedidoService.liberarAtendimentoMesa(mesaId);
            return ResponseEntity.noContent().build(); // 204 OK, sem corpo
        } catch (EntityNotFoundException e) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(Map.of("erro", e.getMessage()));
        } catch (SecurityException e) {
            return ResponseEntity.status(HttpStatus.FORBIDDEN).body(Map.of("erro", e.getMessage()));
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(Map.of("erro", "Erro ao liberar mesa: " + e.getMessage()));
        }
	}

	@GetMapping ("/{mesaId}/ativos")
	public ResponseEntity<?> getPedidosAtivosDaMesa(
            @PathVariable UUID idRestaurante, // Vem da URL principal
            @PathVariable UUID mesaId
    ) {
		/*
		 * puxa pedidos pendentes para a mesa específica
		 * */
         try {
            List<PedidoResponse> pedidos = pedidoService.findPedidosAtivosPorMesa(mesaId);
            return ResponseEntity.ok(pedidos);
        } catch (EntityNotFoundException e) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(Map.of("erro", e.getMessage()));
        } catch (SecurityException e) {
            return ResponseEntity.status(HttpStatus.FORBIDDEN).body(Map.of("erro", e.getMessage()));
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(Map.of("erro", "Erro ao buscar pedidos ativos: " + e.getMessage()));
        }
	}

	@PutMapping ("/{idPedido}/add")
	public ResponseEntity<?> adicionarRemoverItens(
            @PathVariable UUID idRestaurante, // Vem da URL principal
            @PathVariable UUID idPedido,
            @RequestBody PedidoRequest request // Reutilizando o DTO por enquanto
    ) {
		/*
		 * update do pedido, que adiciona ou remove a lista de itemPedido no pedido do usuario.
		 * */
         try {
            PedidoResponse pedidoAtualizado = pedidoService.adicionarRemoverItensPedido(idPedido, request);
             // Verifica se o pedido foi cancelado (e deletado) porque ficou sem itens
             if (pedidoAtualizado.getStatus() == PedidoStatus.CANCELADO) {
                 return ResponseEntity.noContent().build(); // Retorna 204 se foi cancelado/deletado
             }
            return ResponseEntity.ok(pedidoAtualizado);
        } catch (EntityNotFoundException e) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(Map.of("erro", e.getMessage()));
        } catch (SecurityException e) {
            return ResponseEntity.status(HttpStatus.FORBIDDEN).body(Map.of("erro", e.getMessage()));
        } catch (IllegalStateException e) {
             return ResponseEntity.status(HttpStatus.CONFLICT).body(Map.of("erro", e.getMessage())); // Ex: Status não permite alteração
        } catch (IllegalArgumentException e) {
            return ResponseEntity.badRequest().body(Map.of("erro", e.getMessage())); // Ex: Itens inválidos
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(Map.of("erro", "Erro ao atualizar itens do pedido: " + e.getMessage()));
        }
	}
}