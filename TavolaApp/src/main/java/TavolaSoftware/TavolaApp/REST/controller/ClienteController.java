package TavolaSoftware.TavolaApp.REST.controller;

import TavolaSoftware.TavolaApp.REST.dto.AvaliacaoRequest;
import TavolaSoftware.TavolaApp.REST.dto.ClienteResponse; // <<< NOVO IMPORT
import TavolaSoftware.TavolaApp.REST.dto.ClienteUpdateRequest;
import TavolaSoftware.TavolaApp.REST.dto.RestauranteResponse;
import TavolaSoftware.TavolaApp.REST.model.Cliente;
import TavolaSoftware.TavolaApp.REST.service.AvaliacaoService;
import TavolaSoftware.TavolaApp.REST.service.ClienteService;
import TavolaSoftware.TavolaApp.REST.service.RestauranteService;
// UploadUtils não é mais necessário aqui se a lógica foi para o service
// ResponseExceptionHandler não é mais necessário aqui se não houver validações manuais
// BCrypt não é mais necessário aqui

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;
import java.util.Optional;
import java.util.UUID;

@RestController
@RequestMapping("/auth/clientes")
public class ClienteController {

    @Autowired
    private ClienteService serv;

    @Autowired
    private AvaliacaoService servAvaliacao;

    @Autowired
    private RestauranteService servRestaurante;
    
    // ... (Seus métodos GET e POST como favoritar e avaliar permanecem os mesmos) ...
    @GetMapping("/favoritos")
    public ResponseEntity<?> findAllFavoritos() { /* ... seu código ... */ 
        try {
            String emailCliente = (String) SecurityContextHolder.getContext().getAuthentication().getPrincipal();
            List<UUID> favoritos = serv.getFavoritos(emailCliente);
            return ResponseEntity.ok(favoritos);
        } catch (RuntimeException e) { 
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(Map.of("erro", e.getMessage()));
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(Map.of("erro", "Erro ao buscar favoritos: " + e.getMessage()));
        }
    }
    
    @GetMapping("/get")
    public ResponseEntity<?> findSelf() {
        String email = (String) SecurityContextHolder.getContext().getAuthentication().getPrincipal();
        Optional<Cliente> clienteOpt = serv.findByEmail(email);

        if (clienteOpt.isPresent()) {
            Cliente cliente = clienteOpt.get();
            return ResponseEntity.ok(new ClienteResponse(cliente));
        } else {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(Map.of("erro", "Cliente não encontrado."));
        }
    }

    @GetMapping("/getall")
    public ResponseEntity<List<Cliente>> findAll() { /* ... seu código ... */ 
        return ResponseEntity.ok(serv.findAll());
    }

    @PostMapping("/avaliar/{restauranteId}")
    public ResponseEntity<?> avaliar(@PathVariable UUID restauranteId, @RequestBody AvaliacaoRequest avaliacaoRequest) { /* ... seu código ... */
        try {
            String emailCliente = (String) SecurityContextHolder.getContext().getAuthentication().getPrincipal();
            servAvaliacao.avaliarRestaurante(
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

    @PostMapping("/favoritar/{id}")
    public ResponseEntity<?> favoritar(@PathVariable("id") UUID restauranteId) { /* ... seu código ... */ 
        try {
            String emailCliente = (String) SecurityContextHolder.getContext().getAuthentication().getPrincipal();
            String resultado = serv.toggleFavorito(emailCliente, restauranteId);
            return ResponseEntity.ok(Map.of("mensagem", resultado));
        } catch (RuntimeException e) { 
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(Map.of("erro", e.getMessage()));
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(Map.of("erro", "Erro ao processar 'favoritar': " + e.getMessage()));
        }    
    }

    // PUT
    @PutMapping("/update")
    public ResponseEntity<?> update(@RequestBody ClienteUpdateRequest request) {
        try {
            String email = (String) SecurityContextHolder.getContext().getAuthentication().getPrincipal();
            // Chama o novo método do service
            Cliente clienteAtualizado = serv.updateFromRequest(email, request);
            
            // Retorna o DTO de resposta atualizado
            return ResponseEntity.ok(new ClienteResponse(clienteAtualizado));

        } catch (RuntimeException e) {
            // Captura exceções como "Cliente não encontrado" ou erros de processamento de imagem
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(Map.of("erro", e.getMessage()));
        } catch (Exception e) {
            // Logar o erro aqui
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(Map.of("erro", "Ocorreu um erro inesperado."));
        }
    }

    @DeleteMapping("/delete")
    public ResponseEntity<Void> delete() { /* ... seu código ... */ 
        String email = (String) SecurityContextHolder.getContext().getAuthentication().getPrincipal();
        serv.deleteByEmail(email);
        return ResponseEntity.noContent().build();
    }
}