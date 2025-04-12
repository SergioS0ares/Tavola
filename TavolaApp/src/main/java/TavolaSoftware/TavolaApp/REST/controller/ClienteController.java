package TavolaSoftware.TavolaApp.REST.controller;

import TavolaSoftware.TavolaApp.REST.model.Cliente;
import TavolaSoftware.TavolaApp.REST.service.ClienteService;
import org.springframework.beans.factory.annotation.Autowired;
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

    @PostMapping("/create")
    public ResponseEntity<Cliente> criarCliente(@RequestBody Cliente cliente) {
        Cliente novoCliente = serv.createCliente(cliente);
        return ResponseEntity.ok(novoCliente);
    }

    @GetMapping("/get/{id}")
    public ResponseEntity<Cliente> buscarPorId(@PathVariable UUID id) {
        Optional<Cliente> cliente = serv.findById(id);
        return cliente.map(ResponseEntity::ok).orElseGet(() -> ResponseEntity.notFound().build());
    }

    @GetMapping("/getall")
    public ResponseEntity<List<Cliente>> listarTodos() {
        return ResponseEntity.ok(serv.getAllClientes());
    }

    @PutMapping("/update/{id}")
    public ResponseEntity<Cliente> atualizar(@PathVariable UUID id, @RequestBody Cliente atualizacao) {
        try {
            Cliente cliente = serv.updateCliente(id, atualizacao);
            return ResponseEntity.ok(cliente);
        } catch (RuntimeException e) {
            return ResponseEntity.notFound().build();
        }
    }

    @DeleteMapping("/delete/{id}")
    public ResponseEntity<Void> deletarPorId(@PathVariable UUID id) {
        serv.deletarCliente(id);
        return ResponseEntity.noContent().build();
    }

}
