package TavolaSoftware.TavolaApp.REST.controller;

import TavolaSoftware.TavolaApp.REST.model.Categoria;
import TavolaSoftware.TavolaApp.REST.model.Restaurante;
import TavolaSoftware.TavolaApp.REST.service.CategoriaService;
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

@RestController
@RequestMapping("/auth/categorias")
public class CategoriaController {

    @Autowired
    private CategoriaService serv;

    @Autowired
    private RestauranteService restauranteService;

    @GetMapping
    public ResponseEntity<List<Categoria>> findAll() {
        return ResponseEntity.ok(serv.findAll());
    }

    @GetMapping("/{id}")
    public ResponseEntity<Categoria> findById(@PathVariable UUID id) {
        Optional<Categoria> categoria = serv.findById(id);
        return categoria.map(ResponseEntity::ok).orElseGet(() -> ResponseEntity.notFound().build());
    }

    @GetMapping("/restaurante")
    public ResponseEntity<List<Categoria>> findByRestaurante() {
    	String email = (String) SecurityContextHolder.getContext().getAuthentication().getPrincipal();
    	Restaurante restaurante = restauranteService.getByEmail(email);
        return ResponseEntity.ok(serv.findByRestauranteId(restaurante.getId()));
    }

    @PostMapping
    public ResponseEntity<?> save(@RequestBody Categoria categoria) {
        ResponseExceptionHandler handler = new ResponseExceptionHandler();

        handler.checkEmptyStrting("nome", categoria.getNome());

        if (handler.errors()) {
            return handler.generateResponse(HttpStatus.BAD_REQUEST);
        }

        String email = (String) SecurityContextHolder.getContext().getAuthentication().getPrincipal();
        Restaurante restaurante = restauranteService.getByEmail(email);
        categoria.setRestaurante(restaurante);

        return ResponseEntity.ok(serv.save(categoria));
    }

    @PutMapping("/{id}")
    public ResponseEntity<?> update(@PathVariable UUID id, @RequestBody Categoria categoria) {
        ResponseExceptionHandler handler = new ResponseExceptionHandler();

        handler.checkEmptyStrting("nome", categoria.getNome());

        if (handler.errors()) {
            return handler.generateResponse(HttpStatus.BAD_REQUEST);
        }

        String email = (String) SecurityContextHolder.getContext().getAuthentication().getPrincipal();
        Restaurante restaurante = restauranteService.getByEmail(email);
        categoria.setRestaurante(restaurante);

        Categoria atualizado = serv.update(id, categoria);
        return (atualizado != null) ? ResponseEntity.ok(atualizado) : ResponseEntity.notFound().build();
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> delete(@PathVariable UUID id) {
        serv.deleteById(id);
        return ResponseEntity.noContent().build();
    }
}
