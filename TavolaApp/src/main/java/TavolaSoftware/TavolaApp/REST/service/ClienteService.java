package TavolaSoftware.TavolaApp.REST.service;

import TavolaSoftware.TavolaApp.REST.model.Cliente;
import TavolaSoftware.TavolaApp.REST.repository.ClienteRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
import java.util.UUID;

@Service
public class ClienteService {

    @Autowired
    private ClienteRepository repo;

    public Cliente save(Cliente client) {
        return repo.save(client);
    }

    public List<Cliente> findAll() {
        return repo.findAll();
    }
    
    public Optional<Cliente> findById(UUID id) {
        return repo.findById(id);
    }

    public Cliente update(UUID id, Cliente update) {
        return repo.findById(id)
                .map(cliente -> {
                    cliente.setNome(update.getNome());
                    cliente.setEmail(update.getEmail());
                    cliente.setSenha(update.getSenha());
                    cliente.setEndereco(update.getEndereco());
                    return repo.save(cliente);
                })
                .orElseThrow(() -> new RuntimeException("Cliente não encontrado!"));
    }
    
    public UUID getIdByEmail(String email) {
        Cliente cliente = repo.findByEmail(email);
        if (cliente == null) {
            throw new RuntimeException("Cliente não encontrado para email: " + email);
        }
        return cliente.getId();
    }

    public void delete(UUID id) {
        repo.deleteById(id);
    }
}
