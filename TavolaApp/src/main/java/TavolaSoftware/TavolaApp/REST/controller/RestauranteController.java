package TavolaSoftware.TavolaApp.REST.controller;

import TavolaSoftware.TavolaApp.REST.model.Reserva;
import TavolaSoftware.TavolaApp.REST.model.Restaurante;
import TavolaSoftware.TavolaApp.REST.service.ReservaService;
import TavolaSoftware.TavolaApp.REST.service.RestauranteService;
import TavolaSoftware.TavolaApp.tools.ResponseExceptionHandler;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
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

    
    @Autowired
    private ReservaService reservaService;

    @GetMapping("/{id}/reservas")
    public ResponseEntity<List<Reserva>> listarReservasRestaurante(
            @PathVariable UUID id,
            @RequestParam(defaultValue = "latest") String ordem,
            @RequestParam(defaultValue = "0") int pagina,
            @RequestParam(defaultValue = "20") int tamanho) {
        
        List<Reserva> reservas = reservaService.findAllByRestauranteOrdered(id, ordem, pagina, tamanho);
        return ResponseEntity.ok(reservas);
    }

    @GetMapping
    public ResponseEntity<List<Restaurante>> listarTodos() {
        return ResponseEntity.ok(serv.findAll());
    }

    @GetMapping("/{id}")
    public ResponseEntity<Restaurante> buscarPorId(@PathVariable UUID id) {
        Optional<Restaurante> restaurante = serv.findById(id);
        return restaurante.map(ResponseEntity::ok).orElseGet(() -> ResponseEntity.notFound().build());
    }

    @PostMapping("/save")
    public ResponseEntity<?> save(@RequestBody Restaurante restaurante) {
        ResponseExceptionHandler handler = new ResponseExceptionHandler();

        handler.checkEmptyStrting("nome", restaurante.getNome());
        handler.checkEmptyStrting("email", restaurante.getEmail());
        handler.checkEmptyStrting("senha", restaurante.getSenha());
        handler.checkEmptyObject("endereco", restaurante.getEndereco());
        handler.checkEmptyStrting("horário de funcionamento", restaurante.getHorarioFuncionamento());

        if (handler.errors()) {
            return handler.generateResponse(HttpStatus.BAD_REQUEST);
        }

        return ResponseEntity.ok(serv.save(restaurante));
    }
    
    @PutMapping("/update/{id}")
    public ResponseEntity<?> atualizar(@PathVariable UUID id, @RequestBody Restaurante restaurante) {
        ResponseExceptionHandler handler = new ResponseExceptionHandler();

        handler.checkEmptyStrting("nome", restaurante.getNome());
        handler.checkEmptyStrting("email", restaurante.getEmail());
        handler.checkEmptyStrting("senha", restaurante.getSenha());
        handler.checkEmptyObject("endereco", restaurante.getEndereco());
        handler.checkEmptyStrting("horário de funcionamento", restaurante.getHorarioFuncionamento());

        if (handler.errors()) {
            return handler.generateResponse(HttpStatus.BAD_REQUEST);
        }

        Restaurante atualizado = serv.update(id, restaurante);
        return (atualizado != null) ? ResponseEntity.ok(atualizado) : ResponseEntity.notFound().build();
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deletarPorId(@PathVariable UUID id) {
        serv.deleteById(id);
        return ResponseEntity.noContent().build();
    }

}
