package TavolaSoftware.TavolaApp.REST.service;

import TavolaSoftware.TavolaApp.REST.dto.requests.UsuarioUpdateRequest;
import TavolaSoftware.TavolaApp.REST.model.Usuario;
import TavolaSoftware.TavolaApp.REST.repository.ClienteRepository;
import TavolaSoftware.TavolaApp.REST.repository.RestauranteRepository;
import TavolaSoftware.TavolaApp.REST.repository.UsuarioRepository;
import TavolaSoftware.TavolaApp.tools.UploadUtils;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.io.IOException;
import java.util.List;
import java.util.Optional;
import java.util.UUID;

@Service
public class UsuarioService {

    @Autowired
    private RestauranteRepository restauranteRepo;

    @Autowired
    private ClienteRepository clienteRepo;

    @Autowired
    private UsuarioRepository usuarioRepo;
    
    @Autowired
    private UploadUtils uploadUtils; // Injetar para processar imagens

    public UUID getIdByEmail(String email) {
        // --- CORREÇÃO AQUI ---
        return usuarioRepo.findByEmail(email)
                .map(Usuario::getId) // Extrai o ID se o usuário existir
                .orElseThrow(() -> new RuntimeException("Usuário não encontrado para o email: " + email));
    }

    public Usuario getUsuarioByEmail(String email) {
        // --- CORREÇÃO AQUI ---
        return usuarioRepo.findByEmail(email)
                .orElseThrow(() -> new RuntimeException("Usuário não encontrado para o email: " + email));
    }

    public boolean isRestaurante(String email) {
        return restauranteRepo.findByUsuarioEmail(email) != null;
    }

    public boolean isCliente(String email) {
        return clienteRepo.findByUsuarioEmail(email) != null;
    }

 // --- NOVOS MÉTODOS CRUD ---

    /**
     * Retorna todos os usuários. (Função de Admin)
     */
    @Transactional(readOnly = true)
    public List<Usuario> findAllUsers() {
        return usuarioRepo.findAll();
    }

    /**
     * Busca um usuário por ID. (Função de Admin)
     */
    @Transactional(readOnly = true)
    public Optional<Usuario> findUserById(UUID id) {
        return usuarioRepo.findById(id);
    }
    
    /**
     * Atualiza o perfil do usuário logado.
     */
    @Transactional
    public Usuario updateUserProfile(String email, UsuarioUpdateRequest request) throws IOException {
        Usuario usuario = getUsuarioByEmail(email);

        // Atualiza campos simples se eles foram fornecidos no request
        if (request.getNome() != null) usuario.setNome(request.getNome());
        if (request.getEndereco() != null) usuario.setEndereco(request.getEndereco());
        if (request.getTelefone() != null) usuario.setTelefone(request.getTelefone());

        // Processa a imagem de perfil se uma nova foi enviada
        if (request.getImagem() != null && uploadUtils.isBase64Image(request.getImagem())) {
            // Deleta a imagem antiga antes de salvar a nova, se existir
            if (usuario.getImagem() != null) {
                uploadUtils.deletarArquivoPeloCaminho(usuario.getImagem());
            }
            String caminhoImagem = uploadUtils.processUsuarioImagem(request.getImagem(), usuario.getId());
            usuario.setImagem(caminhoImagem);
        }

        // Processa a imagem de background se uma nova foi enviada
        if (request.getImagemBackground() != null && uploadUtils.isBase64Image(request.getImagemBackground())) {
             if (usuario.getImagemBackground() != null) {
                uploadUtils.deletarArquivoPeloCaminho(usuario.getImagemBackground());
            }
            String caminhoBackground = uploadUtils.processUsuarioImagem(request.getImagemBackground(), usuario.getId());
            usuario.setImagemBackground(caminhoBackground);
        }

        return usuarioRepo.save(usuario);
    }

    /**
     * Deleta um usuário por ID, incluindo sua pasta de imagens. (Função de Admin)
     */
    @Transactional
    public void deleteUserById(UUID id) {
        if (usuarioRepo.existsById(id)) {
            usuarioRepo.deleteById(id);
            // Limpa a pasta de imagens associada ao usuário
            String pastaUsuario = "upl/usuarios/" + id.toString();
            uploadUtils.deletarPasta(pastaUsuario);
        } else {
            throw new RuntimeException("Usuário não encontrado para deleção com ID: " + id);
        }
    }
} 
