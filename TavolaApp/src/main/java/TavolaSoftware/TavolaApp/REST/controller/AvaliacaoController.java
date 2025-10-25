package TavolaSoftware.TavolaApp.REST.controller;

import TavolaSoftware.TavolaApp.REST.dto.requests.AvaliacaoRequest;
import TavolaSoftware.TavolaApp.REST.dto.responses.RestauranteAvaliacoesResponse;
import TavolaSoftware.TavolaApp.REST.dto.responses.RestauranteResponse;
import TavolaSoftware.TavolaApp.REST.service.AvaliacaoService;
import TavolaSoftware.TavolaApp.REST.service.RestauranteService;
import jakarta.persistence.EntityNotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Map;
import java.util.Optional;
import java.util.UUID;

@RestController
// Rota base mais específica para avaliações
@RequestMapping("/auth/avaliacoes")
public class AvaliacaoController {

    @Autowired
    private AvaliacaoService serv;
    @Autowired
    private RestauranteService servRestaurante;

    /**
     * GET /auth/avaliacoes/restaurante/{restauranteId}
     * Retorna a média, total e a lista detalhada de avaliações para um restaurante específico.
     */
    @GetMapping("/restaurante/{restauranteId}")
    public ResponseEntity<?> getAvaliacoesDoRestaurante(@PathVariable UUID restauranteId) {
        try {
            RestauranteAvaliacoesResponse response = serv.getAvaliacoesDetalhadasPorRestaurante(restauranteId);
            return ResponseEntity.ok(response);
        } catch (EntityNotFoundException e) {
            // Se o restaurante não for encontrado, retorna 404
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(Map.of("erro", e.getMessage()));
        } catch (Exception e) {
            // Para outros erros inesperados
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(Map.of("erro", "Erro ao buscar avaliações: " + e.getMessage()));
        }
    }

    /*
     * POST auth/clientes/avaliar/{id}
     * Endpoint para o cliente avaliar um restaurante
     * */
    @PostMapping("/avaliar/{restauranteId}")
    public ResponseEntity<?> avaliar(@PathVariable UUID restauranteId, @RequestBody AvaliacaoRequest avaliacaoRequest) { /* ... seu código ... */
        try {
            String emailCliente = (String) SecurityContextHolder.getContext().getAuthentication().getPrincipal();
            serv.avaliarRestaurante(
                avaliacaoRequest.getScore(), avaliacaoRequest.getComentario(), restauranteId, emailCliente
            );
            Optional<RestauranteResponse> restauranteResponseOpt = servRestaurante.findById(restauranteId);
            if (restauranteResponseOpt.isPresent()) {
                return ResponseEntity.status(HttpStatus.OK).body(restauranteResponseOpt.get());
            } else {
                return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Restaurante não encontrado após avaliação.");
            }
        } catch (IllegalArgumentException e) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(e.getMessage());
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Erro ao realizar avaliação: " + e.getMessage());
        }
    }

}