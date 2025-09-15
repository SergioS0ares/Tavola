package TavolaSoftware.TavolaApp.REST.service;

import TavolaSoftware.TavolaApp.REST.dto.responses.ClienteUpdateRequest;
import TavolaSoftware.TavolaApp.REST.model.Cliente;
import TavolaSoftware.TavolaApp.REST.model.Usuario;
import TavolaSoftware.TavolaApp.REST.repository.AvaliacaoRepository;
import TavolaSoftware.TavolaApp.REST.repository.ClienteRepository;
import TavolaSoftware.TavolaApp.REST.repository.ReservaRepository;
import TavolaSoftware.TavolaApp.REST.repository.RestauranteRepository;
import TavolaSoftware.TavolaApp.REST.repository.UsuarioRepository;
import TavolaSoftware.TavolaApp.tools.UploadUtils;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCrypt;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.io.IOException;
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
    private AvaliacaoRepository avaliacaoRepository;

    @Autowired
    private ReservaRepository reservaRepository;
    
    @Autowired
    private UsuarioRepository repoUsuario;

    @Autowired
    private UploadUtils uplUtil;
    
    // ... (Seus outros métodos: save, findAll, etc. permanecem aqui) ...
    public Cliente save(Cliente client) { return repo.save(client); }
    public List<Cliente> findAll() { return repo.findAll(); }
    public Optional<Cliente> findById(UUID id) { return repo.findById(id); }
    public Optional<Cliente> findByEmail(String email) { return Optional.ofNullable(repo.findByUsuarioEmail(email)); }
    public void delete(UUID id) { repo.deleteById(id); }

    @Transactional
    public String toggleFavorito(String emailCliente, UUID restauranteId) {
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
    
    public List<UUID> getFavoritos(String emailCliente) {
        Cliente cliente = repo.findByUsuarioEmail(emailCliente);
        if (cliente == null) {
            throw new RuntimeException("Cliente não encontrado para email: " + emailCliente);
        }
        return new ArrayList<>(cliente.getFavoritos());
    }

    @Transactional
    public Cliente updateFromRequest(String email, ClienteUpdateRequest request) {
        Cliente clienteExistente = findByEmail(email)
            .orElseThrow(() -> new RuntimeException("Cliente não encontrado para atualização com email: " + email));

        Usuario usuarioParaAtualizar = clienteExistente.getUsuario();
        
        // Atualiza os campos do usuário
        if (request.getNome() != null && !request.getNome().isBlank()) {
            usuarioParaAtualizar.setNome(request.getNome());
        }
        if (request.getEndereco() != null) {
            usuarioParaAtualizar.setEndereco(request.getEndereco());
        }
        if (request.getTelefone() != null) {
            usuarioParaAtualizar.setTelefone(request.getTelefone());
        }
        if (request.getSenha() != null && !request.getSenha().isBlank()) {
             usuarioParaAtualizar.setSenha(BCrypt.hashpw(request.getSenha(), BCrypt.gensalt()));
        }
        
        try {
            // Atualiza Imagem de Perfil
            if (request.getImagemPerfilBase64() != null && uplUtil.isBase64Image(request.getImagemPerfilBase64())) {
                // Deleta a imagem antiga antes de salvar a nova, se existir
                if (usuarioParaAtualizar.getImagem() != null) {
                    uplUtil.deletarArquivoPeloCaminho(usuarioParaAtualizar.getImagem());
                }
                // <<< CORREÇÃO APLICADA AQUI >>>
                String caminhoImagemPerfil = uplUtil.processUsuarioImagem(request.getImagemPerfilBase64(), usuarioParaAtualizar.getId());
                usuarioParaAtualizar.setImagem(caminhoImagemPerfil);
            }
            // Atualiza Imagem de Background
            if (request.getImagemBackgroundBase64() != null && uplUtil.isBase64Image(request.getImagemBackgroundBase64())) {
                if (usuarioParaAtualizar.getImagemBackground() != null) {
                    uplUtil.deletarArquivoPeloCaminho(usuarioParaAtualizar.getImagemBackground());
                }
                // <<< CORREÇÃO APLICADA AQUI >>>
                String caminhoImagemBg = uplUtil.processUsuarioImagem(request.getImagemBackgroundBase64(), usuarioParaAtualizar.getId());
                usuarioParaAtualizar.setImagemBackground(caminhoImagemBg);
            }
        } catch (IOException e) {
            throw new RuntimeException("Erro ao processar imagem: " + e.getMessage(), e);
        }
        
        // Salva a entidade Cliente, que por cascata salvará as alterações no Usuario associado.
        return repo.save(clienteExistente);
    }
    
    @Transactional
    public void deleteByEmail(String email) {
        // 1. Encontrar o cliente e o usuário associado
        Cliente cliente = findByEmail(email)
            .orElseThrow(() -> new RuntimeException("Cliente não encontrado com o email: " + email));
        
        UUID clienteId = cliente.getId();
        Usuario usuario = cliente.getUsuario();

        // 2. Deletar as dependências primeiro
        avaliacaoRepository.deleteAllByClienteId(clienteId);
        reservaRepository.deleteAllByClienteId(clienteId);

        // 3. Deletar o Cliente
        repo.delete(cliente);

        // 4. Deletar o Usuário associado (se ele não estiver atrelado a mais nada)
        if (usuario != null) {
            // 5. Deletar a pasta de imagens do usuário
            String pastaUsuario = "upl/usuarios/" + usuario.getId().toString();
            uplUtil.deletarPasta(pastaUsuario);
            
            // Finalmente, deleta o usuário
            // A injeção do repoUsuario já está na sua classe
            repoUsuario.delete(usuario);
        }
    }
}













