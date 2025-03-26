package TavolaSoftware.TavolaApp.REST.controller;

import TavolaSoftware.TavolaApp.REST.model.Cardapio;
import TavolaSoftware.TavolaApp.REST.service.CardapioService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;
import java.util.UUID;

@RestController
@RequestMapping("/auth/cardapios")
public class CardapioController {

    @Autowired
    private CardapioService serv;

    @GetMapping
    public ResponseEntity<List<Cardapio>> findAll() {
        return ResponseEntity.ok(serv.findAll());
    }

    @GetMapping("/{id}")
    public ResponseEntity<Cardapio> findById(@PathVariable UUID id) {
        Optional<Cardapio> cardapio = serv.findById(id);
        return cardapio.map(ResponseEntity::ok).orElseGet(() -> ResponseEntity.notFound().build());
    }

    @GetMapping("/restaurante/{restauranteId}")
    public ResponseEntity<List<Cardapio>> findByEstablishment(@PathVariable UUID restauranteId) {
        return ResponseEntity.ok(serv.findByEstablishmentId(restauranteId));
    }

    @PostMapping
    public ResponseEntity<Cardapio> save(@RequestBody Cardapio cardapio) {
        return ResponseEntity.ok(serv.save(cardapio));
    }

    @PutMapping("/{id}")
    public ResponseEntity<Cardapio> update(@PathVariable UUID id, @RequestBody Cardapio cardapio) {
        Cardapio updated = serv.update(id, cardapio);
        return (updated != null) ? ResponseEntity.ok(updated) : ResponseEntity.notFound().build();
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteById(@PathVariable UUID id) {
        serv.deleteById(id);
        return ResponseEntity.noContent().build();
    }
}
