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

    public Optional<Cliente> findByEmail(String email) {
        return Optional.ofNullable(repo.findByUsuarioEmail(email));
    }

    public UUID getIdByEmail(String email) {
        Cliente cliente = repo.findByUsuarioEmail(email);
        if (cliente == null) {
            throw new RuntimeException("Cliente não encontrado para email: " + email);
        }
        return cliente.getId();
    }

    public Cliente updateByEmail(String email, Cliente atualizacao) {
        Cliente cliente = repo.findByUsuarioEmail(email);
        if (cliente == null) {
            throw new RuntimeException("Cliente não encontrado!");
        }

        cliente.getUsuario().setNome(atualizacao.getUsuario().getNome());
        cliente.getUsuario().setEmail(atualizacao.getUsuario().getEmail());
        cliente.getUsuario().setSenha(atualizacao.getUsuario().getSenha());
        cliente.getUsuario().setEndereco(atualizacao.getUsuario().getEndereco());

        return repo.save(cliente);
    }

    public void deleteByEmail(String email) {
        Cliente cliente = repo.findByUsuarioEmail(email);
        if (cliente != null) {
            repo.delete(cliente);
        }
    }

    public void delete(UUID id) {
        repo.deleteById(id);
    }
}
