package TavolaSoftware.TavolaApp.REST.controller;

import TavolaSoftware.TavolaApp.REST.model.Restaurante;
import TavolaSoftware.TavolaApp.REST.service.RestauranteService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;
import java.util.UUID;

@RestController
@RequestMapping("/auth/restaurantes")
public class RestauranteController {

    @Autowired
    private RestauranteService serv;

    @GetMapping
    public ResponseEntity<List<Restaurante>> listarTodos() {
        return ResponseEntity.ok(serv.findAll());
    }

    @GetMapping("/{id}")
    public ResponseEntity<Restaurante> buscarPorId(@PathVariable UUID id) {
        Optional<Restaurante> restaurante = serv.findById(id);
        return restaurante.map(ResponseEntity::ok).orElseGet(() -> ResponseEntity.notFound().build());
    }

    @PostMapping
    public ResponseEntity<Restaurante> salvar(@RequestBody Restaurante restaurante) {
        return ResponseEntity.ok(serv.save(restaurante));
    }

    @PutMapping("/{id}")
    public ResponseEntity<Restaurante> atualizar(@PathVariable UUID id, @RequestBody Restaurante restaurante) {
        Restaurante atualizado = serv.update(id, restaurante);
        return (atualizado != null) ? ResponseEntity.ok(atualizado) : ResponseEntity.notFound().build();
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deletarPorId(@PathVariable UUID id) {
        serv.deleteById(id);
        return ResponseEntity.noContent().build();
    }

}
