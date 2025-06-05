package TavolaSoftware.TavolaApp.REST.service;

import TavolaSoftware.TavolaApp.REST.dto.ClienteUpdateRequest; // <<< NOVO IMPORT
import TavolaSoftware.TavolaApp.REST.model.Cliente;
import TavolaSoftware.TavolaApp.REST.model.Usuario; // <<< NOVO IMPORT
import TavolaSoftware.TavolaApp.REST.repository.ClienteRepository;
import TavolaSoftware.TavolaApp.REST.repository.RestauranteRepository;
import TavolaSoftware.TavolaApp.REST.repository.UsuarioRepository; // <<< NOVO IMPORT
import TavolaSoftware.TavolaApp.tools.UploadUtils; // <<< NOVO IMPORT

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCrypt; // <<< NOVO IMPORT
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.io.IOException; // <<< NOVO IMPORT
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
import java.util.UUID;

@Service
public class ClienteService {

    @Autowired
    private ClienteRepository repo;

    @Autowired
    private RestauranteRepository repoRestaurante;

    @Autowired
    private UsuarioRepository repoUsuario; // <<< INJETAR UsuarioRepository

    @Autowired
    private UploadUtils uplUtil; // <<< INJETAR UploadUtils
    
    // ... (Seus métodos save, findAll, findById, findByEmail, getIdByEmail, delete, toggleFavorito, getFavoritos permanecem iguais) ...
    public Cliente save(Cliente client) { return repo.save(client); }
    public List<Cliente> findAll() { return repo.findAll(); }
    public Optional<Cliente> findById(UUID id) { return repo.findById(id); }
    public Optional<Cliente> findByEmail(String email) { return Optional.ofNullable(repo.findByUsuarioEmail(email)); }
    public UUID getIdByEmail(String email) { /* ...código... */ 
        Cliente cliente = repo.findByUsuarioEmail(email);
        if (cliente == null) {
            throw new RuntimeException("Cliente não encontrado para email: " + email);
        }
        return cliente.getId();
    }
    public void deleteByEmail(String email) { /* ...código... */
        Cliente cliente = repo.findByUsuarioEmail(email);
        if (cliente != null) {
            repo.delete(cliente);
        }
    }
    public void delete(UUID id) { repo.deleteById(id); }
    @Transactional
    public String toggleFavorito(String emailCliente, UUID restauranteId) { /* ...código... */
        Cliente cliente = repo.findByUsuarioEmail(emailCliente);
        if (cliente == null) {
            throw new RuntimeException("Cliente não encontrado para email: " + emailCliente);
        }
        if (!repoRestaurante.existsById(restauranteId)) {
        throw new RuntimeException("Restaurante com ID " + restauranteId + " não encontrado.");
        }
        List<UUID> favoritos = cliente.getFavoritos(); 
        String mensagem;
        if (favoritos.contains(restauranteId)) {
            favoritos.remove(restauranteId);
            mensagem = "Restaurante removido dos favoritos.";
        } else {
            favoritos.add(restauranteId);
            mensagem = "Restaurante adicionado aos favoritos.";
        }
        repo.save(cliente); 
        return mensagem;
    }
    public List<UUID> getFavoritos(String emailCliente) { /* ...código... */
        Cliente cliente = repo.findByUsuarioEmail(emailCliente);
        if (cliente == null) {
            throw new RuntimeException("Cliente não encontrado para email: " + emailCliente);
        }
        return new ArrayList<>(cliente.getFavoritos());
    }

    /**
     * Atualiza os dados de um cliente (e seu usuário associado) com base em um DTO.
     * @param email O email do cliente a ser atualizado.
     * @param request O DTO com os novos dados.
     * @return A entidade Cliente atualizada.
     */
    @Transactional // Garante que todas as operações de salvamento ocorram em uma única transação
    public Cliente updateFromRequest(String email, ClienteUpdateRequest request) {
        Cliente clienteExistente = findByEmail(email)
            .orElseThrow(() -> new RuntimeException("Cliente não encontrado para atualização com email: " + email));

        Usuario usuarioParaAtualizar = clienteExistente.getUsuario();
        boolean algumaAlteracaoFeita = false;

        // Atualiza Nome
        if (request.getNome() != null && !request.getNome().isBlank()) {
            usuarioParaAtualizar.setNome(request.getNome());
            algumaAlteracaoFeita = true;
        }
        // Atualiza Endereço
        if (request.getEndereco() != null) {
            usuarioParaAtualizar.setEndereco(request.getEndereco());
            algumaAlteracaoFeita = true;
        }
        // Atualiza Telefone
        if (request.getTelefone() != null && !request.getTelefone().isBlank()) {
            usuarioParaAtualizar.setTelefone(request.getTelefone());
            algumaAlteracaoFeita = true;
        }
        // Atualiza Senha (opcional)
        if (request.getSenha() != null && !request.getSenha().isBlank()) {
             usuarioParaAtualizar.setSenha(BCrypt.hashpw(request.getSenha(), BCrypt.gensalt()));
             algumaAlteracaoFeita = true;
        }
        // Atualiza Imagem de Perfil
        if (request.getImagemPerfilBase64() != null && uplUtil.isBase64Image(request.getImagemPerfilBase64())) {
            try {
                String caminhoImagemPerfil = uplUtil.processUsuarioImagem(request.getImagemPerfilBase64(), usuarioParaAtualizar.getId(), "perfil");
                usuarioParaAtualizar.setImagem(caminhoImagemPerfil);
                algumaAlteracaoFeita = true;
            } catch (IOException e) {
                throw new RuntimeException("Erro ao processar imagem de perfil: " + e.getMessage(), e);
            }
        }
        // Atualiza Imagem de Background
        if (request.getImagemBackgroundBase64() != null && uplUtil.isBase64Image(request.getImagemBackgroundBase64())) {
             try {
                String caminhoImagemBg = uplUtil.processUsuarioImagem(request.getImagemBackgroundBase64(), usuarioParaAtualizar.getId(), "background");
                usuarioParaAtualizar.setImagemBackground(caminhoImagemBg);
                algumaAlteracaoFeita = true;
            } catch (IOException e) {
                 throw new RuntimeException("Erro ao processar imagem de background: " + e.getMessage(), e);
            }
        }
        
        if (!algumaAlteracaoFeita) {
            // Se nenhuma alteração foi feita, apenas retorna o cliente existente sem salvar
            return clienteExistente;
        }
        
        // Salva a entidade Cliente. Devido ao relacionamento @OneToOne e cascata (se houver),
        // o JPA/Hibernate salvará também as alterações na entidade Usuario associada.
        return repo.save(clienteExistente);
    }
}