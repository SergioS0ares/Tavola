package TavolaSoftware.TavolaApp.REST.service;

import TavolaSoftware.TavolaApp.REST.model.Cliente;
import TavolaSoftware.TavolaApp.REST.repository.ClienteRepository;
import TavolaSoftware.TavolaApp.REST.repository.RestauranteRepository;

// import TavolaSoftware.TavolaApp.REST.repository.RestauranteRepository; // Opcional: para validar se o restaurante existe
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional; // Importante para operações de escrita

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
import java.util.UUID;

@Service
public class ClienteService {

    @Autowired
    private ClienteRepository repo;

    // Opcional: injetar se for validar a existência do restaurante
    @Autowired
    private RestauranteRepository repoRestaurante;

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

        // É importante garantir que o objeto 'usuario' dentro de 'atualizacao' não seja nulo
        // antes de tentar acessar seus campos, ou tratar caso a caso.
        // Esta implementação assume que 'atualizacao.getUsuario()' não é nulo.
        if (atualizacao.getUsuario() != null) {
            if (atualizacao.getUsuario().getNome() != null) {
                cliente.getUsuario().setNome(atualizacao.getUsuario().getNome());
            }
            if (atualizacao.getUsuario().getEmail() != null) {
                cliente.getUsuario().setEmail(atualizacao.getUsuario().getEmail());
            }
            if (atualizacao.getUsuario().getSenha() != null) { // Senha deve ser tratada com encoding na prática
                cliente.getUsuario().setSenha(atualizacao.getUsuario().getSenha());
            }
            if (atualizacao.getUsuario().getEndereco() != null) {
                cliente.getUsuario().setEndereco(atualizacao.getUsuario().getEndereco());
            }
            // Adicionar aqui a lógica para imagem de perfil e background, se necessário no service.
        }
        // Se houver outros campos específicos do Cliente para atualizar, adicione-os aqui.
        // Ex: cliente.setAlgumCampoDoCliente(atualizacao.getAlgumCampoDoCliente());


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

    // --- NOVOS MÉTODOS PARA FAVORITOS ---

    /**
     * Adiciona ou remove um restaurante da lista de favoritos de um cliente.
     * @param emailCliente O email do cliente.
     * @param restauranteId O ID do restaurante a ser favoritado/desfavoritado.
     * @return Uma mensagem indicando a ação realizada.
     */
    @Transactional // Garante que a operação seja atômica
    public String toggleFavorito(String emailCliente, UUID restauranteId) {
        Cliente cliente = repo.findByUsuarioEmail(emailCliente);
        if (cliente == null) {
            throw new RuntimeException("Cliente não encontrado para email: " + emailCliente);
        }

        // Opcional: Validar se o restauranteId existe na base de dados de restaurantes
        if (!repoRestaurante.existsById(restauranteId)) {
        throw new RuntimeException("Restaurante com ID " + restauranteId + " não encontrado.");
        }

        List<UUID> favoritos = cliente.getFavoritos(); // Usa o getter que inicializa se necessário
        String mensagem;

        if (favoritos.contains(restauranteId)) {
            favoritos.remove(restauranteId);
            mensagem = "Restaurante removido dos favoritos.";
        } else {
            favoritos.add(restauranteId);
            mensagem = "Restaurante adicionado aos favoritos.";
        }
        
        repo.save(cliente); // Salva o cliente com a lista de favoritos atualizada
        return mensagem;
    }

    /**
     * Retorna a lista de IDs de restaurantes favoritos de um cliente.
     * @param emailCliente O email do cliente.
     * @return Lista de UUIDs dos restaurantes favoritos.
     */
    public List<UUID> getFavoritos(String emailCliente) {
        Cliente cliente = repo.findByUsuarioEmail(emailCliente);
        if (cliente == null) {
            throw new RuntimeException("Cliente não encontrado para email: " + emailCliente);
        }
        // Retorna uma nova lista para evitar modificações externas diretas na lista da entidade, se desejado.
        // Ou simplesmente: return cliente.getFavoritos();
        return new ArrayList<>(cliente.getFavoritos()); 
    }
}