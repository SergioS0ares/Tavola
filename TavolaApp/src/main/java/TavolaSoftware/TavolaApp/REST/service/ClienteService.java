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

    // Criar um novo cliente
    public Cliente createClient(Cliente client) {
        return repo.save(client);
    }

    // Buscar todos os clientes
    public List<Cliente> getAllClients() {
        return repo.findAll();
    }
    
 // Buscar um cliente pelo ID
    public Optional<Cliente> findById(UUID id) {
        return repo.findById(id);
    }

    // Atualizar um cliente
    public Cliente updateClient (UUID id, Cliente update) {
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

    // Deletar um cliente
    public void deletarClient(UUID id) {
        repo.deleteById(id);
    }
}
