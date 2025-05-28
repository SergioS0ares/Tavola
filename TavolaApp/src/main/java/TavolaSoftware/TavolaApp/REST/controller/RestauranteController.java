package TavolaSoftware.TavolaApp.REST.controller;

import TavolaSoftware.TavolaApp.REST.dto.RestauranteRequest; // MUDANÇA: Usar RestauranteRequest
import TavolaSoftware.TavolaApp.REST.dto.RestauranteResponse; // MUDANÇA: Usar RestauranteResponse
import TavolaSoftware.TavolaApp.REST.model.Reserva; // Mantido para o endpoint de reservas
import TavolaSoftware.TavolaApp.REST.model.Restaurante; // Usado internamente e para getSelfRestaurante
import TavolaSoftware.TavolaApp.REST.service.ReservaService;
import TavolaSoftware.TavolaApp.REST.service.RestauranteService;
import TavolaSoftware.TavolaApp.tools.ResponseExceptionHandler; // Mantido para validação
// UploadUtils não é mais usado diretamente aqui para processar imagens, o serviço fará isso.

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.*;

// import java.io.IOException; // Não mais necessário aqui
import java.util.List;
import java.util.Optional;
import java.util.UUID;
import java.util.stream.Collectors;

@RestController
@RequestMapping("/auth/restaurantes")
public class RestauranteController {

    @Autowired
    private RestauranteService servRestaurante; // Renomeado para consistência

    @Autowired
    private ReservaService servReserva;
    
    // @Autowired // UploadUtils não é mais injetado aqui diretamente para POST/PUT de restaurante
    // private UploadUtils uplUtil;

    // Este método ainda retorna a entidade, pode ser mantido para uso interno
    // ou refatorado se getSelfRestauranteResponse for mais útil.
    private Restaurante getSelfRestauranteEntity() {
        String email = (String) SecurityContextHolder.getContext().getAuthentication().getPrincipal();
        return servRestaurante.getByEmail(email);
    }

    @GetMapping("/reservas") // Este endpoint retorna Reserva, não RestauranteResponse
    public ResponseEntity<List<Reserva>> findAllByRestaurante(
            @RequestParam(defaultValue = "latest") String ordem,
            @RequestParam(defaultValue = "0") int pagina,
            @RequestParam(defaultValue = "20") int tamanho) {

        Restaurante restaurante = getSelfRestauranteEntity();
        List<Reserva> reservas = servReserva.findAllByRestauranteOrdered(restaurante.getId(), ordem, pagina, tamanho);
        return ResponseEntity.ok(reservas);
    }

    @GetMapping // MUDANÇA: Retorna List<RestauranteResponse>
    public ResponseEntity<List<RestauranteResponse>> findAll() {
        List<RestauranteResponse> responses = servRestaurante.findAll();
        return ResponseEntity.ok(responses);
    }

    @GetMapping("/{id}") // MUDANÇA: Retorna RestauranteResponse
    public ResponseEntity<RestauranteResponse> findById(@PathVariable UUID id) {
        return servRestaurante.findById(id)
                .map(ResponseEntity::ok)
                .orElseGet(() -> ResponseEntity.notFound().build());
    }
    
    @GetMapping("/self") // NOVO ENDPOINT: Para buscar o restaurante autenticado
    public ResponseEntity<RestauranteResponse> findSelf() {
        String email = (String) SecurityContextHolder.getContext().getAuthentication().getPrincipal();
        Restaurante restaurante = servRestaurante.getByEmail(email); // Pega a entidade
        if (restaurante == null) {
            return ResponseEntity.notFound().build();
        }
        return ResponseEntity.ok(new RestauranteResponse(restaurante)); // Converte para DTO
    }


    @PostMapping("/save") // MUDANÇA: Recebe RestauranteRequest, Retorna RestauranteResponse
    public ResponseEntity<?> save(@RequestBody RestauranteRequest request) {
        // A validação pode ser movida para o service ou usar anotações de validação no DTO
        ResponseExceptionHandler handler = new ResponseExceptionHandler();
        handler.checkEmptyStrting("nome do usuário", request.getNomeUsuario());
        handler.checkEmptyStrting("email do usuário", request.getEmailUsuario());
        handler.checkEmptyStrting("senha do usuário", request.getSenhaUsuario());
        handler.checkEmptyObject("endereço do usuário", request.getEnderecoUsuario());
        // Adicionar mais validações conforme necessário (tipoCozinha, horariosFuncionamento)

        if (handler.errors()) {
            return handler.generateResponse(HttpStatus.BAD_REQUEST);
        }
        
        try {
            Restaurante restauranteSalvo = servRestaurante.saveFromRequest(request);
            return ResponseEntity.status(HttpStatus.CREATED).body(new RestauranteResponse(restauranteSalvo));
        } catch (RuntimeException e) { // Captura exceções como "Erro ao processar imagens"
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(e.getMessage());
        }
    }

    @PutMapping("/update") // MUDANÇA: Atualiza o restaurante autenticado, usa RestauranteRequest, Retorna RestauranteResponse
    public ResponseEntity<?> updateSelf(@RequestBody RestauranteRequest request) {
        String email = (String) SecurityContextHolder.getContext().getAuthentication().getPrincipal();
        Restaurante restauranteExistente = servRestaurante.getByEmail(email);

        if (restauranteExistente == null) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Restaurante não encontrado para o usuário autenticado.");
        }

        // Validações (podem ser mais robustas)
        // ...

        try {
            Restaurante restauranteAtualizado = servRestaurante.updateFromRequest(restauranteExistente.getId(), request);
            return ResponseEntity.ok(new RestauranteResponse(restauranteAtualizado));
        } catch (RuntimeException e) {
             return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(e.getMessage());
        }
    }

    // O endpoint @PutMapping("/{id}") pode ser mantido para administradores,
    // mas também deve usar RestauranteRequest e retornar RestauranteResponse.
    @PutMapping("/{id}") // MUDANÇA: usa RestauranteRequest, Retorna RestauranteResponse
    public ResponseEntity<?> updateById(@PathVariable UUID id, @RequestBody RestauranteRequest request) {
         // Adicionar verificação se o usuário autenticado tem permissão para atualizar este ID, se necessário.
        try {
            Restaurante restauranteAtualizado = servRestaurante.updateFromRequest(id, request);
            return ResponseEntity.ok(new RestauranteResponse(restauranteAtualizado));
        } catch (RuntimeException e) { // Captura "Restaurante não encontrado" e outros erros
            // Diferenciar o status code pode ser útil (e.g., NOT_FOUND vs BAD_REQUEST)
            if (e.getMessage().contains("não encontrado")) {
                return ResponseEntity.status(HttpStatus.NOT_FOUND).body(e.getMessage());
            }
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(e.getMessage());
        }
    }

    @DeleteMapping // Deleta o restaurante do usuário autenticado
    public ResponseEntity<Void> deleteSelf() {
        String email = (String) SecurityContextHolder.getContext().getAuthentication().getPrincipal();
        Restaurante restaurante = servRestaurante.getByEmail(email);
        if (restaurante == null) {
            return ResponseEntity.notFound().build();
        }
        try {
            servRestaurante.deleteById(restaurante.getId());
            return ResponseEntity.noContent().build();
        } catch (RuntimeException e) {
            // Logar o erro
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
        }
    }

    @DeleteMapping("/{id}") // Deleta por ID (potencialmente para admin)
    public ResponseEntity<Void> deleteById(@PathVariable UUID id) {
        // Adicionar verificação de permissão se necessário
        try {
            servRestaurante.deleteById(id);
            return ResponseEntity.noContent().build();
        } catch (RuntimeException e) {
            if (e.getMessage().contains("não encontrado")) {
                return ResponseEntity.status(HttpStatus.NOT_FOUND).build();
            }
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
        }
    }
}
