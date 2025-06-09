package TavolaSoftware.TavolaApp.REST.controller;

import TavolaSoftware.TavolaApp.REST.dto.RestauranteRequest;
import TavolaSoftware.TavolaApp.REST.dto.RestauranteResponse;
// Removido import de Reserva e ReservaService se não for mais usado aqui
import TavolaSoftware.TavolaApp.REST.model.Restaurante; // Usado nos métodos de save/update
import TavolaSoftware.TavolaApp.REST.model.Usuario;    // <<< NOVO IMPORT
import TavolaSoftware.TavolaApp.REST.repository.UsuarioRepository; // <<< NOVO IMPORT
import TavolaSoftware.TavolaApp.REST.service.RestauranteService;
import TavolaSoftware.TavolaApp.tools.ResponseExceptionHandler;
import TavolaSoftware.TavolaApp.tools.TipoUsuario; // <<< NOVO IMPORT

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;        // <<< NOVO IMPORT
import org.springframework.data.domain.PageRequest; // <<< NOVO IMPORT
import org.springframework.data.domain.Pageable;    // <<< NOVO IMPORT
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.*;

import java.util.Collections; // <<< NOVO IMPORT
import java.util.List;
import java.util.Map;         // <<< NOVO IMPORT
import java.util.Optional;
import java.util.UUID;
// Removido collectors se não for mais usado aqui

@RestController
@RequestMapping("/auth/restaurantes")
public class RestauranteController {

    @Autowired
    private RestauranteService servRestaurante; //

    @Autowired
    private UsuarioRepository usuarioRepository; // <<< INJETAR UsuarioRepository

    

    // === NOVO ENDPOINT DE PESQUISA POR CIDADE ===
    @GetMapping("/por-cidade")
    public ResponseEntity<?> findByCity(@RequestParam String cidade) {
        // Validação de permissão (consistente com o endpoint /pesquisar)
        String emailUsuarioLogado = (String) SecurityContextHolder.getContext().getAuthentication().getPrincipal();
        Usuario usuarioLogado = usuarioRepository.findByEmail(emailUsuarioLogado);

        if (usuarioLogado == null) {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body(Map.of("erro", "Usuário não autenticado ou não encontrado."));
        }
        if (usuarioLogado.getTipo() != TipoUsuario.CLIENTE) {
            return ResponseEntity.status(HttpStatus.FORBIDDEN)
                                 .body(Map.of("erro", "Apenas clientes podem realizar esta busca."));
        }
        
        // Validação do parâmetro de entrada
        if (cidade == null || cidade.trim().isEmpty()) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST)
                                 .body(Map.of("erro", "O parâmetro 'cidade' não pode ser vazio."));
        }

        List<RestauranteResponse> resultados = servRestaurante.findByCidade(cidade.trim());
        return ResponseEntity.ok(resultados);
    }
    // === NOVO ENDPOINT DE PESQUISA ===    
    @GetMapping("/pesquisar")
    public ResponseEntity<?> pesquisarRestaurantes(
            @RequestParam String termo,
            @RequestParam(defaultValue = "0") int pagina,
            @RequestParam(defaultValue = "10") int tamanho) {

        String emailUsuarioLogado = (String) SecurityContextHolder.getContext().getAuthentication().getPrincipal();
        Usuario usuarioLogado = usuarioRepository.findByEmail(emailUsuarioLogado);

        if (usuarioLogado == null) { // Checagem extra
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body(Map.of("erro", "Usuário não autenticado ou não encontrado."));
        }
        if (usuarioLogado.getTipo() != TipoUsuario.CLIENTE) {
            return ResponseEntity.status(HttpStatus.FORBIDDEN)
                                 .body(Map.of("erro", "Apenas clientes podem realizar pesquisas."));
        }

        if (termo == null || termo.trim().isEmpty()) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST)
                                 .body(Map.of("erro", "O termo de pesquisa não pode ser vazio."));
        }

        Pageable pageable = PageRequest.of(pagina, tamanho);
        Page<RestauranteResponse> resultados = servRestaurante.pesquisarRestaurantesPorRelevancia(termo.trim(), pageable);

        return ResponseEntity.ok(resultados);
    }

    
    
    
    // === SEUS MÉTODOS EXISTENTES (mantidos como no seu arquivo RestauranteController versão 1) ===
    @GetMapping("/self")
    public ResponseEntity<RestauranteResponse> findSelf() { //
        String email = (String) SecurityContextHolder.getContext().getAuthentication().getPrincipal(); //
        Restaurante restaurante = servRestaurante.getByEmail(email);  //
        if (restaurante == null) { //
            return ResponseEntity.notFound().build(); //
        }
        return ResponseEntity.ok(new RestauranteResponse(restaurante));  //
    }

    @GetMapping
    public ResponseEntity<List<RestauranteResponse>> findAll() { //
        List<RestauranteResponse> responses = servRestaurante.findAll(); //
        return ResponseEntity.ok(responses); //
    }

    @GetMapping("/{id}")
    public ResponseEntity<RestauranteResponse> findById(@PathVariable UUID id) { //
        return servRestaurante.findById(id)  //
                .map(ResponseEntity::ok) //
                .orElseGet(() -> ResponseEntity.notFound().build()); //
    }
    
    @PostMapping("/save")
    public ResponseEntity<?> save(@RequestBody RestauranteRequest request) { //
        ResponseExceptionHandler handler = new ResponseExceptionHandler(); //
        handler.checkEmptyStrting("nome do usuário", request.getNomeUsuario());  //
        handler.checkEmptyStrting("email do usuário", request.getEmailUsuario());  //
        handler.checkEmptyStrting("senha do usuário", request.getSenhaUsuario());  //
        handler.checkEmptyObject("endereço do usuário", request.getEnderecoUsuario());  //

        if (handler.errors()) { //
            return handler.generateResponse(HttpStatus.BAD_REQUEST); //
        }
        
        try {
            Restaurante restauranteSalvo = servRestaurante.saveFromRequest(request);  //
            return ResponseEntity.status(HttpStatus.CREATED).body(new RestauranteResponse(restauranteSalvo));  //
        } catch (RuntimeException e) { //
            // Retornar um Map para consistência com outros tratamentos de erro
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(Map.of("erro", e.getMessage()));
        }
    }

    @PutMapping("/update")
    public ResponseEntity<?> updateSelf(@RequestBody RestauranteRequest request) { //
        String email = (String) SecurityContextHolder.getContext().getAuthentication().getPrincipal(); //
        Restaurante restauranteExistente = servRestaurante.getByEmail(email);  //

        if (restauranteExistente == null) { //
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(Map.of("erro","Restaurante não encontrado para o usuário autenticado.")); //
        }

        try {
            Restaurante restauranteAtualizado = servRestaurante.updateFromRequest(restauranteExistente.getId(), request);  //
            return ResponseEntity.ok(new RestauranteResponse(restauranteAtualizado));  //
        } catch (RuntimeException e) { //
             return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(Map.of("erro", e.getMessage())); //
        }
    }

    @PutMapping("/{id}")
    public ResponseEntity<?> updateById(@PathVariable UUID id, @RequestBody RestauranteRequest request) { //
        try {
            Restaurante restauranteAtualizado = servRestaurante.updateFromRequest(id, request);  //
            return ResponseEntity.ok(new RestauranteResponse(restauranteAtualizado));  //
        } catch (RuntimeException e) { //
            if (e.getMessage().contains("não encontrado")) { //
                return ResponseEntity.status(HttpStatus.NOT_FOUND).body(Map.of("erro",e.getMessage())); //
            }
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(Map.of("erro",e.getMessage())); //
        }
    }

    @DeleteMapping
    public ResponseEntity<Void> deleteSelf() { //
        String email = (String) SecurityContextHolder.getContext().getAuthentication().getPrincipal(); //
        Restaurante restaurante = servRestaurante.getByEmail(email);  //
        if (restaurante == null) { //
            return ResponseEntity.notFound().build(); //
        }
        try {
            servRestaurante.deleteById(restaurante.getId());  //
            return ResponseEntity.noContent().build(); //
        } catch (RuntimeException e) { //
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build(); //
        }
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteById(@PathVariable UUID id) { //
        try {
            servRestaurante.deleteById(id);  //
            return ResponseEntity.noContent().build(); //
        } catch (RuntimeException e) { //
            if (e.getMessage().contains("não encontrado")) { //
                return ResponseEntity.status(HttpStatus.NOT_FOUND).build(); //
            }
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build(); //
        }
    }
}