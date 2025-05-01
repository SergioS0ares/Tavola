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

    private Restaurante getRestauranteAutenticado() {
        String email = (String) SecurityContextHolder.getContext().getAuthentication().getPrincipal();
        return mesasService.getRestauranteByEmail(email);
    }

    @GetMapping
    public ResponseEntity<List<Mesas>> listarTodas() {
        Restaurante restaurante = getRestauranteAutenticado();
        return ResponseEntity.ok(mesasService.listarTodas(restaurante));
    }

    @GetMapping("/id/{index}")
    public ResponseEntity<?> buscarPorIndice(@PathVariable int index) {
        Restaurante restaurante = getRestauranteAutenticado();
        Optional<Mesas> mesa = mesasService.buscarPorIndice(restaurante, index);

        return mesa.map(ResponseEntity::ok)
                .orElseGet(() -> ResponseEntity.badRequest().body("Índice inválido para o conjunto de mesas."));
    }

    @GetMapping("/{nome}")
    public ResponseEntity<?> buscarPorNome(@PathVariable String nome) {
        Restaurante restaurante = getRestauranteAutenticado();
        Optional<Mesas> mesa = mesasService.buscarPorNome(restaurante, nome);

        return mesa.map(ResponseEntity::ok)
                .orElseGet(() -> ResponseEntity.notFound().build());
    }

    @PutMapping
    public ResponseEntity<?> atualizarMesas(@RequestBody List<Mesas> novasMesas) {
        Restaurante restaurante = getRestauranteAutenticado();
        mesasService.atualizarMesas(restaurante, novasMesas);
        return ResponseEntity.ok("Mesas atualizadas com sucesso.");
    }
} 
