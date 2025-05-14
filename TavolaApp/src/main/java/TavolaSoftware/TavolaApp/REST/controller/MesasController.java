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
        List<MesaResponse> resposta = mesasService.findAll(restaurante).stream()
                .map(mesa -> new MesaResponse(
                        mesa.getNome(),
                        mesa.getDescricao(),
                        mesa.getImagem(),
                        mesa.getQuantidadeTotal(),
                        mesa.getQuantidadeDisponivel()
                ))
                .collect(Collectors.toList());

        return ResponseEntity.ok(resposta);
    }

    @GetMapping("/id/{index}")
    public ResponseEntity<?> findSelfByIndex(@PathVariable int index) {
        Restaurante restaurante = getSelfRestaurante();
        Optional<Mesas> mesa = mesasService.findByIndex(restaurante, index);

        if (mesa.isPresent()) {
            Mesas m = mesa.get();
            MesaResponse dto = new MesaResponse(
                    m.getNome(),
                    m.getDescricao(),
                    m.getImagem(),
                    m.getQuantidadeTotal(),
                    m.getQuantidadeDisponivel()
            );
            return ResponseEntity.ok(dto);
        } else {
            return ResponseEntity.badRequest().body("Índice inválido para o conjunto de mesas.");
        }
    }

    @GetMapping("/{nome}")
    public ResponseEntity<?> findByName(@PathVariable String nome) {
        Restaurante restaurante = getSelfRestaurante();
        Optional<Mesas> mesa = mesasService.findByName(restaurante, nome);

        return mesa.map(m -> ResponseEntity.ok(new MesaResponse(
                    m.getNome(),
                    m.getDescricao(),
                    m.getImagem(),
                    m.getQuantidadeTotal(),
                    m.getQuantidadeDisponivel()
                )))
                .orElseGet(() -> ResponseEntity.notFound().build());
    }

    @PutMapping
    public ResponseEntity<?> atualizarMesas(@RequestBody List<Mesas> novasMesas) {
        Restaurante restaurante = getSelfRestaurante();
        mesasService.update(restaurante, novasMesas);
        return ResponseEntity.ok("Mesas atualizadas com sucesso.");
    }
}
