package TavolaSoftware.TavolaApp.REST.controller;

import TavolaSoftware.TavolaApp.REST.model.Restaurante;
import TavolaSoftware.TavolaApp.REST.service.MesasService;
import TavolaSoftware.TavolaApp.tools.Mesas;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/auth/mesas")
public class MesasController {

    @Autowired
    private MesasService mesasService;

    private Restaurante getSelfRestaurante() {
        String email = (String) SecurityContextHolder.getContext().getAuthentication().getPrincipal();
        return mesasService.getRestauranteByEmail(email);
    }

    @GetMapping
    public ResponseEntity<List<Mesas>> findAll() {
        Restaurante restaurante = getSelfRestaurante();
        return ResponseEntity.ok(mesasService.findAll(restaurante));
    }

    @GetMapping("/id/{index}")
    public ResponseEntity<?> findSelfByIndex(@PathVariable int index) {
        Restaurante restaurante = getSelfRestaurante();
        Optional<Mesas> mesa = mesasService.findByIndex(restaurante, index);

        if (mesa.isPresent()) {
            return ResponseEntity.ok(mesa.get());
        } else {
            return ResponseEntity.badRequest().body("Índice inválido para o conjunto de mesas.");
        }
    }

    @GetMapping("/{nome}")
    public ResponseEntity<?> findByName(@PathVariable String nome) {
        Restaurante restaurante = getSelfRestaurante();
        Optional<Mesas> mesa = mesasService.findByName(restaurante, nome);

        return mesa.map(ResponseEntity::ok)
                .orElseGet(() -> ResponseEntity.notFound().build());
    }

    @PutMapping
    public ResponseEntity<?> atualizarMesas(@RequestBody List<Mesas> novasMesas) {
        Restaurante restaurante = getSelfRestaurante();
        mesasService.update(restaurante, novasMesas);
        return ResponseEntity.ok("Mesas atualizadas com sucesso.");
    }
} 
