package TavolaSoftware.TavolaApp.REST.controller;

import TavolaSoftware.TavolaApp.REST.dto.RestauranteRequest;
import TavolaSoftware.TavolaApp.REST.dto.RestauranteResponse; // <<< Usaremos este
// import TavolaSoftware.TavolaApp.REST.dto.ClienteHomeResponse; // <<< REMOVER OU COMENTAR ESTE IMPORT
import TavolaSoftware.TavolaApp.REST.model.Reserva;
import TavolaSoftware.TavolaApp.REST.model.Restaurante;
import TavolaSoftware.TavolaApp.REST.service.ReservaService;
import TavolaSoftware.TavolaApp.REST.service.RestauranteService;
import TavolaSoftware.TavolaApp.tools.ResponseExceptionHandler;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;
import java.util.UUID;
import java.util.stream.Collectors;

@RestController
@RequestMapping("/auth/restaurantes")
public class RestauranteController {

    @Autowired
    private RestauranteService servRestaurante;

    @Autowired
    private ReservaService servReserva;
    
    private Restaurante getSelfRestauranteEntity() { //
        String email = (String) SecurityContextHolder.getContext().getAuthentication().getPrincipal();
        return servRestaurante.getByEmail(email);
    }

    @GetMapping("/reservas") //
    public ResponseEntity<List<Reserva>> findAllByRestaurante(
            @RequestParam(defaultValue = "latest") String ordem,
            @RequestParam(defaultValue = "0") int pagina,
            @RequestParam(defaultValue = "20") int tamanho) {

        Restaurante restaurante = getSelfRestauranteEntity(); 
        List<Reserva> reservas = servReserva.findAllByRestauranteOrdered(restaurante.getId(), ordem, pagina, tamanho); 
        return ResponseEntity.ok(reservas);
    }

    // MUDANÇA: Retorna List<RestauranteResponse>
    @GetMapping //
    public ResponseEntity<List<RestauranteResponse>> findAll() {
        List<RestauranteResponse> responses = servRestaurante.findAll(); // Agora retorna List<RestauranteResponse>
        return ResponseEntity.ok(responses);
    }

    @GetMapping("/{id}") //
    public ResponseEntity<RestauranteResponse> findById(@PathVariable UUID id) {
        return servRestaurante.findById(id) 
                .map(ResponseEntity::ok)
                .orElseGet(() -> ResponseEntity.notFound().build());
    }
    
    @GetMapping("/self") //
    public ResponseEntity<RestauranteResponse> findSelf() {
        String email = (String) SecurityContextHolder.getContext().getAuthentication().getPrincipal();
        Restaurante restaurante = servRestaurante.getByEmail(email); 
        if (restaurante == null) {
            return ResponseEntity.notFound().build();
        }
        return ResponseEntity.ok(new RestauranteResponse(restaurante)); 
    }


    @PostMapping("/save") //
    public ResponseEntity<?> save(@RequestBody RestauranteRequest request) {
        ResponseExceptionHandler handler = new ResponseExceptionHandler();
        handler.checkEmptyStrting("nome do usuário", request.getNomeUsuario()); 
        handler.checkEmptyStrting("email do usuário", request.getEmailUsuario()); 
        handler.checkEmptyStrting("senha do usuário", request.getSenhaUsuario()); 
        handler.checkEmptyObject("endereço do usuário", request.getEnderecoUsuario()); 

        if (handler.errors()) {
            return handler.generateResponse(HttpStatus.BAD_REQUEST);
        }
        
        try {
            Restaurante restauranteSalvo = servRestaurante.saveFromRequest(request); 
            return ResponseEntity.status(HttpStatus.CREATED).body(new RestauranteResponse(restauranteSalvo)); 
        } catch (RuntimeException e) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(e.getMessage());
        }
    }

    @PutMapping("/update") //
    public ResponseEntity<?> updateSelf(@RequestBody RestauranteRequest request) {
        String email = (String) SecurityContextHolder.getContext().getAuthentication().getPrincipal();
        Restaurante restauranteExistente = servRestaurante.getByEmail(email); 

        if (restauranteExistente == null) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Restaurante não encontrado para o usuário autenticado.");
        }

        try {
            Restaurante restauranteAtualizado = servRestaurante.updateFromRequest(restauranteExistente.getId(), request); 
            return ResponseEntity.ok(new RestauranteResponse(restauranteAtualizado)); 
        } catch (RuntimeException e) {
             return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(e.getMessage());
        }
    }

    @PutMapping("/{id}") //
    public ResponseEntity<?> updateById(@PathVariable UUID id, @RequestBody RestauranteRequest request) {
        try {
            Restaurante restauranteAtualizado = servRestaurante.updateFromRequest(id, request); 
            return ResponseEntity.ok(new RestauranteResponse(restauranteAtualizado)); 
        } catch (RuntimeException e) {
            if (e.getMessage().contains("não encontrado")) {
                return ResponseEntity.status(HttpStatus.NOT_FOUND).body(e.getMessage());
            }
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(e.getMessage());
        }
    }

    @DeleteMapping //
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
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
        }
    }

    @DeleteMapping("/{id}") //
    public ResponseEntity<Void> deleteById(@PathVariable UUID id) {
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