package TavolaSoftware.TavolaApp.REST.controller;

import TavolaSoftware.TavolaApp.REST.model.Cliente;
import TavolaSoftware.TavolaApp.REST.model.Reserva;
import TavolaSoftware.TavolaApp.REST.service.ClienteService;
import TavolaSoftware.TavolaApp.REST.service.ReservaService;
import TavolaSoftware.TavolaApp.tools.ResponseExceptionHandler;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
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

    @GetMapping("/{id}/reservas")
    public ResponseEntity<List<Reserva>> listarReservasCliente(
            @PathVariable UUID id,
            @RequestParam(defaultValue = "latest") String ordem,
            @RequestParam(defaultValue = "0") int pagina,
            @RequestParam(defaultValue = "20") int tamanho) {
        
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

    @GetMapping("/get/{id}")
    public ResponseEntity<Cliente> buscarPorId(@PathVariable UUID id) {
        Optional<Cliente> cliente = serv.findById(id);
        return cliente.map(ResponseEntity::ok).orElseGet(() -> ResponseEntity.notFound().build());
    }

    @GetMapping("/getall")
    public ResponseEntity<List<Cliente>> listarTodos() {
        return ResponseEntity.ok(serv.findAll());
    }

    @PutMapping("/update/{id}")
    public ResponseEntity<?> atualizar(@PathVariable UUID id, @RequestBody Cliente atualizacao) {
        Optional<Cliente> clienteOptional = serv.findById(id);
        if (clienteOptional.isEmpty()) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Cliente não encontrado.");
        }

        ResponseExceptionHandler handler = new ResponseExceptionHandler();
        handler.checkEmptyStrting("nome", atualizacao.getNome());
        handler.checkEmptyStrting("email", atualizacao.getEmail());
        handler.checkEmptyStrting("senha", atualizacao.getSenha());
        handler.checkEmptyObject("endereco", atualizacao.getEndereco());

        if (handler.errors()) {
            return handler.generateResponse(HttpStatus.BAD_REQUEST);
        }

        Cliente cliente = clienteOptional.get();
        cliente.setNome(atualizacao.getNome());
        cliente.setEmail(atualizacao.getEmail());
        cliente.setSenha(atualizacao.getSenha());
        cliente.setEndereco(atualizacao.getEndereco());

        return ResponseEntity.ok(serv.save(cliente)); // usa create pois é save
    }

    @DeleteMapping("/delete/{id}")
    public ResponseEntity<Void> deletarPorId(@PathVariable UUID id) {
        serv.delete(id);
        return ResponseEntity.noContent().build();
    }
}
