package TavolaSoftware.TavolaApp.REST.controller;

import TavolaSoftware.TavolaApp.REST.model.Cliente;
import TavolaSoftware.TavolaApp.REST.model.Reserva;
import TavolaSoftware.TavolaApp.REST.service.ClienteService;
import TavolaSoftware.TavolaApp.REST.service.ReservaService;
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
@RequestMapping("/auth/clientes")
public class ClienteController {

    @Autowired
    private ClienteService serv;

    @Autowired
    private ReservaService servReserva;

    @GetMapping("/reservas")
    public ResponseEntity<List<Reserva>> findAllByClient(
            @RequestParam(defaultValue = "latest") String ordem,
            @RequestParam(defaultValue = "0") int pagina,
            @RequestParam(defaultValue = "20") int tamanho) {

        String email = (String) SecurityContextHolder.getContext().getAuthentication().getPrincipal();
        UUID id = serv.getIdByEmail(email);
        List<Reserva> reservas = servReserva.findAllByClienteOrdered(id, ordem, pagina, tamanho);
        return ResponseEntity.ok(reservas);
    }

    @PostMapping("/save")
    public ResponseEntity<?> save(@RequestBody Cliente cliente) {
        ResponseExceptionHandler handler = new ResponseExceptionHandler();
        handler.checkEmptyStrting("nome", cliente.getUsuario().getNome());
        handler.checkEmptyStrting("email", cliente.getUsuario().getEmail());
        handler.checkEmptyStrting("senha", cliente.getUsuario().getSenha());
        handler.checkEmptyObject("endereco", cliente.getUsuario().getEndereco());

        if (handler.errors()) {
            return handler.generateResponse(HttpStatus.BAD_REQUEST);
        }

        Cliente novoCliente = serv.save(cliente);
        return ResponseEntity.ok(novoCliente);
    }

    @GetMapping("/get")
    public ResponseEntity<Cliente> findSelf() {
        String email = (String) SecurityContextHolder.getContext().getAuthentication().getPrincipal();
        Optional<Cliente> cliente = serv.findByEmail(email);
        return cliente.map(ResponseEntity::ok).orElseGet(() -> ResponseEntity.notFound().build());
    }

    @GetMapping("/getall")
    public ResponseEntity<List<Cliente>> findAll() {
        return ResponseEntity.ok(serv.findAll());
    }

    @PutMapping("/update")
    public ResponseEntity<?> update(@RequestBody Cliente atualizacao) {
        ResponseExceptionHandler handler = new ResponseExceptionHandler();
        handler.checkEmptyStrting("nome", atualizacao.getUsuario().getNome());
        handler.checkEmptyStrting("email", atualizacao.getUsuario().getEmail());
        handler.checkEmptyStrting("senha", atualizacao.getUsuario().getSenha());
        handler.checkEmptyObject("endereco", atualizacao.getUsuario().getEndereco());

        if (handler.errors()) {
            return handler.generateResponse(HttpStatus.BAD_REQUEST);
        }

        String email = (String) SecurityContextHolder.getContext().getAuthentication().getPrincipal();
        Cliente atualizado = serv.updateByEmail(email, atualizacao);
        return ResponseEntity.ok(atualizado);
    }
    
    

    @DeleteMapping("/delete")
    public ResponseEntity<Void> delete() {
        String email = (String) SecurityContextHolder.getContext().getAuthentication().getPrincipal();
        serv.deleteByEmail(email);
        return ResponseEntity.noContent().build();
    }
}
