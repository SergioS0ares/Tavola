package TavolaSoftware.TavolaApp.REST.controller;

import TavolaSoftware.TavolaApp.REST.dto.MesaResponse;
import TavolaSoftware.TavolaApp.REST.model.Restaurante;
import TavolaSoftware.TavolaApp.REST.service.MesasService;
import TavolaSoftware.TavolaApp.tools.Mesas;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

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
    public ResponseEntity<List<MesaResponse>> findAll() {
        Restaurante restaurante = getSelfRestaurante();
        List<MesaResponse> mesas = restaurante.getMesas().stream()
            .map(MesaResponse::new)
            .collect(Collectors.toList());
        return ResponseEntity.ok(mesas);
    }

    @GetMapping("/id/{index}")
    public ResponseEntity<?> findSelfByIndex(@PathVariable int index) {
        Restaurante restaurante = getSelfRestaurante();
        Optional<Mesas> mesa = mesasService.findByIndex(restaurante, index);

        if (mesa.isPresent()) {
            return ResponseEntity.ok(new MesaResponse(mesa.get()));
        } else {
            return ResponseEntity.badRequest().body("Índice inválido para o conjunto de mesas.");
        }
    }

    @GetMapping("/{nome}")
    public ResponseEntity<?> findByName(@PathVariable String nome) {
        Restaurante restaurante = getSelfRestaurante();
        Optional<Mesas> mesa = mesasService.findByName(restaurante, nome);

        return mesa.map(m -> ResponseEntity.ok(new MesaResponse(m)))
                .orElseGet(() -> ResponseEntity.notFound().build());
    }

    @PutMapping
    public ResponseEntity<?> update(@RequestBody List<Mesas> novasMesas) {
        Restaurante restaurante = getSelfRestaurante();
        mesasService.update(restaurante, novasMesas);
        return ResponseEntity.ok("Mesas atualizadas com sucesso.");
    }
}
