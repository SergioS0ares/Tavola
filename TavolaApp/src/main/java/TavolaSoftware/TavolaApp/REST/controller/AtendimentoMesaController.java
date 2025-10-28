package TavolaSoftware.TavolaApp.REST.controller;

import TavolaSoftware.TavolaApp.REST.model.AtendimentoMesa;
import TavolaSoftware.TavolaApp.REST.model.Garcom;
import TavolaSoftware.TavolaApp.REST.security.JwtUtil;
import TavolaSoftware.TavolaApp.REST.service.AtendimentoMesaService;
import io.jsonwebtoken.Claims;
import jakarta.persistence.EntityNotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.*;

import java.util.Map;
import java.util.UUID;
import java.util.stream.Collectors;

/**
 * Controlador para gerenciar a sessão de atendimento ativa em uma mesa.
 */
@RestController
// Ajuste a rota base conforme sua preferência, talvez dentro de /mesas?
@RequestMapping("/auth/api/restaurantes/{idRestaurante}/mesas/{mesaId}/atendimento")
public class AtendimentoMesaController {

    @Autowired
    private AtendimentoMesaService atendimentoService;

    @Autowired
    private JwtUtil jwtUtil;

    /**
     * Endpoint para o GARÇOM logado indicar que está iniciando/juntando-se
     * ao atendimento de uma mesa específica.
     *
     */
    @PutMapping("/iniciar") // Usando PUT pois é idempotente (chamar várias vezes tem o mesmo efeito)
    public ResponseEntity<?> iniciarAtendimentoMesa(
            @PathVariable UUID idRestaurante, // Vem da URL
            @PathVariable UUID mesaId
    ) {
        try {
            // Extrair Garçom ID do token
            String token = (String) SecurityContextHolder.getContext().getAuthentication().getCredentials();
            Claims claims = jwtUtil.parseToken(token);
            UUID garcomId = UUID.fromString(claims.get("garcomId", String.class));
            UUID restauranteIdToken = UUID.fromString(claims.get("restauranteId", String.class));

            // Validação simples de consistência da URL vs Token
            if (!idRestaurante.equals(restauranteIdToken)) {
                 return ResponseEntity.status(403).body(Map.of("erro", "Inconsistência entre URL e token de autenticação."));
            }

            AtendimentoMesa atendimento = atendimentoService.iniciarAtendimento(mesaId, garcomId);

            // Retorna um DTO simples ou apenas confirmação
            return ResponseEntity.ok(Map.of(
                    "mensagem", "Atendimento iniciado/atualizado para a mesa.",
                    "atendimentoId", atendimento.getId(),
                    "totalGarcons", atendimento.getGarcons().size()
            ));

        } catch (EntityNotFoundException e) {
            return ResponseEntity.status(404).body(Map.of("erro", e.getMessage()));
        } catch (SecurityException e) {
            return ResponseEntity.status(403).body(Map.of("erro", e.getMessage()));
        } catch (Exception e) {
            return ResponseEntity.status(500).body(Map.of("erro", "Erro ao iniciar atendimento: " + e.getMessage()));
        }
    }

    // Poderia ter um GET aqui para ver o status do atendimento ativo da mesa
    @GetMapping("/status")
    public ResponseEntity<?> getStatusAtendimento(@PathVariable UUID mesaId) {
         return atendimentoService.getAtendimentoAtivo(mesaId)
                 .map(atendimento -> ResponseEntity.ok(Map.of(
                         "atendimentoId", atendimento.getId(),
                         "ativo", atendimento.isAtivo(),
                         "horaInicio", atendimento.getHoraInicio(),
                         "garconsIds", atendimento.getGarcons().stream().map(Garcom::getId).collect(Collectors.toList())
                 )))
                 .orElse(ResponseEntity.ok(Map.of("ativo", false))); // Se não encontrar, está inativo
    }

}