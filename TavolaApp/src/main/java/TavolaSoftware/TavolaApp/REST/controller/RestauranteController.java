package TavolaSoftware.TavolaApp.REST.controller;

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
import java.util.UUID;

@RestController
@RequestMapping("/auth/restaurantes")
public class RestauranteController {

    @Autowired
    private RestauranteService serv;

    @Autowired
    private ReservaService reservaService;

    @GetMapping("/reservas")
    public ResponseEntity<List<Reserva>> findAllByRestaurante(
            @RequestParam(defaultValue = "latest") String ordem,
            @RequestParam(defaultValue = "0") int pagina,
            @RequestParam(defaultValue = "20") int tamanho) {

        String email = (String) SecurityContextHolder.getContext().getAuthentication().getPrincipal();
        Restaurante restaurante = serv.getByEmail(email);
        List<Reserva> reservas = reservaService.findAllByRestauranteOrdered(restaurante.getId(), ordem, pagina, tamanho);
        return ResponseEntity.ok(reservas);
    }

    @GetMapping
    public ResponseEntity<List<Restaurante>> findAll() {
        return ResponseEntity.ok(serv.findAll());
    }

    @GetMapping("/{id}")
    public ResponseEntity<Restaurante> findById(@PathVariable UUID id) {
        return serv.findById(id)
                .map(ResponseEntity::ok)
                .orElseGet(() -> ResponseEntity.notFound().build());
    }

    @PostMapping("/save")
    public ResponseEntity<?> save(@RequestBody Restaurante restaurante) {
        ResponseExceptionHandler handler = new ResponseExceptionHandler();

        handler.checkEmptyStrting("nome", restaurante.getUsuario().getNome());
        handler.checkEmptyStrting("email", restaurante.getUsuario().getEmail());
        handler.checkEmptyStrting("senha", restaurante.getUsuario().getSenha());
        handler.checkEmptyObject("endereco", restaurante.getUsuario().getEndereco());
        handler.checkEmptyList("horário de funcionamento", restaurante.getHoraFuncionamento());

        if (handler.errors()) {
            return handler.generateResponse(HttpStatus.BAD_REQUEST);
        }

        return ResponseEntity.ok(serv.save(restaurante));
    }

    @PutMapping("/update")
    public ResponseEntity<?> update(@RequestBody Restaurante atualizacao) {
        ResponseExceptionHandler handler = new ResponseExceptionHandler();

        handler.checkEmptyStrting("nome", atualizacao.getUsuario().getNome());
        handler.checkEmptyStrting("email", atualizacao.getUsuario().getEmail());
        handler.checkEmptyStrting("senha", atualizacao.getUsuario().getSenha());
        handler.checkEmptyObject("endereco", atualizacao.getUsuario().getEndereco());
        handler.checkEmptyList("horário de funcionamento", atualizacao.getHoraFuncionamento());

        if (handler.errors()) {
            return handler.generateResponse(HttpStatus.BAD_REQUEST);
        }

        String email = (String) SecurityContextHolder.getContext().getAuthentication().getPrincipal();
        Restaurante existente = serv.getByEmail(email);
        Restaurante atualizado = serv.update(existente.getId(), atualizacao);

        return ResponseEntity.ok(atualizado);
    }

    @DeleteMapping
    public ResponseEntity<Void> deleteSelf() {
        String email = (String) SecurityContextHolder.getContext().getAuthentication().getPrincipal();
        Restaurante restaurante = serv.getByEmail(email);
        serv.deleteById(restaurante.getId());
        return ResponseEntity.noContent().build();
    }
} 
