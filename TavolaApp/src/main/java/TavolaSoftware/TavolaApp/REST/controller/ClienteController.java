package TavolaSoftware.TavolaApp.REST.controller;

import TavolaSoftware.TavolaApp.REST.dto.responses.AvaliacaoRequest;
import TavolaSoftware.TavolaApp.REST.dto.responses.ClienteResponse;
import TavolaSoftware.TavolaApp.REST.dto.responses.ClienteUpdateRequest;
import TavolaSoftware.TavolaApp.REST.dto.responses.RestauranteResponse;
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
    
    /*
     * GET auth/clientes/favoritos
     * Endpoint pro cliente se lembrar de quem ele gosta
     * */ 
    @GetMapping("/favoritos")
    public ResponseEntity<?> findAllFavoritos() {  
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
    
    /*
     * GET auth/clientes/get
     * Endpoint pro cliente lembrar quem ele é
     * */
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

    /*
     * Pega todos os clientes... simples assim
     * */ 
    @GetMapping("/getall")
    public ResponseEntity<List<Cliente>> findAll() { 
        return ResponseEntity.ok(serv.findAll());
    }

    /*
     * POST auth/clientes/avaliar/{id}
     * Endpoint para o cliente avaliar um restaurante
     * */
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

    /*
     * POST auth/clientes/favoritar/{id}
     * Endpoint para o cliente favoritar um restaurante
     * */
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

    /**
     * PUT /auth/clientes/self/update
     * Endpoint para o cliente autenticado atualizar seu próprio perfil.
     */
    @PutMapping("/self/update")
    public ResponseEntity<?> updateSelf(@RequestBody ClienteUpdateRequest request) {
        try {
            String email = (String) SecurityContextHolder.getContext().getAuthentication().getPrincipal();
            
            Cliente clienteAtualizado = serv.updateFromRequest(email, request);
            
            // Retorna uma resposta de sucesso com os dados atualizados (sem a senha)
            // Para isso, seria ideal ter um ClienteResponse DTO, similar ao que fizemos para Restaurante.
            // Por simplicidade, retornaremos um Map por enquanto.
            return ResponseEntity.ok(Map.of(
                "id", clienteAtualizado.getId(),
                "nome", clienteAtualizado.getUsuario().getNome(),
                "email", clienteAtualizado.getUsuario().getEmail(),
                "mensagem", "Perfil atualizado com sucesso."
            ));
            
        } catch (RuntimeException e) {
            // Captura erros como "Cliente não encontrado" ou erros de processamento de imagem
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(Map.of("erro", e.getMessage()));
        }
    }

    /*
     * DELETE auth/clientes/delete
     * Endpoint para o cliente se matar
     * */
    @DeleteMapping("/delete")
    public ResponseEntity<Void> delete() {  
        String email = (String) SecurityContextHolder.getContext().getAuthentication().getPrincipal();
        serv.deleteByEmail(email);
        return ResponseEntity.noContent().build();
    }
}
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    