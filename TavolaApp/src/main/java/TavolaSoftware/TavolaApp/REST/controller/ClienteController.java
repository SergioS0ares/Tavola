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
    private ReservaService reservaService;

    @GetMapping("/reservas")
    public ResponseEntity<List<Reserva>> listarReservasCliente(
            @RequestParam(defaultValue = "latest") String ordem,
            @RequestParam(defaultValue = "0") int pagina,
            @RequestParam(defaultValue = "20") int tamanho) {

        String email = (String) SecurityContextHolder.getContext().getAuthentication().getPrincipal();
        UUID id = serv.getIdByEmail(email);
        List<Reserva> reservas = reservaService.findAllByClienteOrdered(id, ordem, pagina, tamanho);
        return ResponseEntity.ok(reservas);
    }

    @PostMapping("/create")
    public ResponseEntity<?> criarCliente(@RequestBody Cliente cliente) {
        ResponseExceptionHandler handler = new ResponseExceptionHandler();
        handler.checkEmptyStrting("nome", cliente.getNome());
        handler.checkEmptyStrting("email", cliente.getEmail());
        handler.checkEmptyStrting("senha", cliente.getSenha());
        handler.checkEmptyObject("endereco", cliente.getEndereco());

        if (handler.errors()) {
            return handler.generateResponse(HttpStatus.BAD_REQUEST);
        }

        Cliente novoCliente = serv.save(cliente);
        return ResponseEntity.ok(novoCliente);
    }

    @GetMapping("/get")
    public ResponseEntity<Cliente> buscarPorEmail() {
        String email = (String) SecurityContextHolder.getContext().getAuthentication().getPrincipal();
        Optional<Cliente> cliente = serv.findByEmail(email);
        return cliente.map(ResponseEntity::ok).orElseGet(() -> ResponseEntity.notFound().build());
    }

    @GetMapping("/getall")
    public ResponseEntity<List<Cliente>> listarTodos() {
        return ResponseEntity.ok(serv.findAll());
    }

    @PutMapping("/update")
    public ResponseEntity<?> atualizar(@RequestBody Cliente atualizacao) {
        ResponseExceptionHandler handler = new ResponseExceptionHandler();
        handler.checkEmptyStrting("nome", atualizacao.getNome());
        handler.checkEmptyStrting("email", atualizacao.getEmail());
        handler.checkEmptyStrting("senha", atualizacao.getSenha());
        handler.checkEmptyObject("endereco", atualizacao.getEndereco());

        if (handler.errors()) {
            return handler.generateResponse(HttpStatus.BAD_REQUEST);
        }

        String email = (String) SecurityContextHolder.getContext().getAuthentication().getPrincipal();
        Cliente atualizado = serv.updateByEmail(email, atualizacao);
        return ResponseEntity.ok(atualizado);
    }
    
    

    @DeleteMapping("/delete")
    public ResponseEntity<Void> deletar() {
        String email = (String) SecurityContextHolder.getContext().getAuthentication().getPrincipal();
        serv.deleteByEmail(email);
        return ResponseEntity.noContent().build();
    }
}
