package TavolaSoftware.TavolaApp.REST.controller;

import java.util.List;
import java.util.Map;
import java.util.UUID;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import TavolaSoftware.TavolaApp.REST.dto.responses.PedidoResponse;
import TavolaSoftware.TavolaApp.REST.service.PedidoService;
import jakarta.persistence.EntityNotFoundException;

@RestController
@RequestMapping ("/auth/api/restaurantes/{idRestaurante}/mesas")
public class MesaApiController {

	@Autowired
	private PedidoService pedidoService;
	
	@PutMapping ("/{mesaId}/vinncular/{idGarcom}")
	public ResponseEntity<?> atenderMesa(
            @PathVariable UUID idRestaurante, // Vem da URL principal
            @PathVariable UUID mesaId
    ) {
		/*
		 * ver com o sergio se faz sentido vincular garçons pelo banco
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
}
