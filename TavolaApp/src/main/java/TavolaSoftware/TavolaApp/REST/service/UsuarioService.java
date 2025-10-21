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

    @Autowired private RestauranteRepository restauranteRepo;
    @Autowired private ClienteRepository clienteRepo;
    @Autowired private UsuarioRepository usuarioRepo;
    @Autowired private UploadUtils uploadUtils;

    public UUID getIdByEmail(String email) { 
    	return usuarioRepo.findByEmail(email).map(Usuario::getId).orElseThrow(() -> new RuntimeException("Usuário não encontrado para o email: " + email)); }
    
    public Usuario getUsuarioByEmail(String email) { 
    	return usuarioRepo.findByEmail(email).orElseThrow(() -> new RuntimeException("Usuário não encontrado para o email: " + email)); }
    
    public boolean isRestaurante(String email) { 
    	return restauranteRepo.findByUsuarioEmail(email) != null; }
    
    public boolean isCliente(String email) { 
    	return clienteRepo.findByUsuarioEmail(email) != null; }

    @Transactional(readOnly = true)
    public List<Usuario> findAllUsers() { return usuarioRepo.findAll(); }

    @Transactional(readOnly = true)
    public Optional<Usuario> findUserById(UUID id) { return usuarioRepo.findById(id); }

    @Transactional
    public Usuario updateUserProfile(String email, UsuarioUpdateRequest request) throws IOException {
        Usuario usuario = getUsuarioByEmail(email);

        // Atualiza campos simples (sem alterações)
        if (request.getNome() != null) usuario.setNome(request.getNome());
        if (request.getEndereco() != null) usuario.setEndereco(request.getEndereco());
        if (request.getTelefone() != null) usuario.setTelefone(request.getTelefone());

        // Processa a imagem de perfil
        if (request.getImagem() != null && uploadUtils.isBase64Image(request.getImagem())) {
            if (usuario.getImagem() != null) {
                // <<< CORREÇÃO AQUI >>>
                String urlAntiga = uploadUtils.construirUrlRelativa("usuarios", usuario.getImagem());
                uploadUtils.deletarArquivoPeloCaminho(urlAntiga);
            }
            // <<< CORREÇÃO AQUI >>>
            String nomeArquivo = uploadUtils.processUsuarioImagem(request.getImagem());
            usuario.setImagem(nomeArquivo); // Salva SÓ o nome
        } else if (request.getImagem() != null && request.getImagem().isBlank()) {
             if (usuario.getImagem() != null) {
                String urlAntiga = uploadUtils.construirUrlRelativa("usuarios", usuario.getImagem());
                uploadUtils.deletarArquivoPeloCaminho(urlAntiga);
            }
            usuario.setImagem(null);
        }

        // Processa a imagem de background
        if (request.getImagemBackground() != null && uploadUtils.isBase64Image(request.getImagemBackground())) {
             if (usuario.getImagemBackground() != null) {
                // <<< CORREÇÃO AQUI >>>
                String urlAntigaBg = uploadUtils.construirUrlRelativa("usuarios", usuario.getImagemBackground());
                uploadUtils.deletarArquivoPeloCaminho(urlAntigaBg);
            }
            // <<< CORREÇÃO AQUI >>>
            String nomeArquivoBg = uploadUtils.processUsuarioImagem(request.getImagemBackground());
            usuario.setImagemBackground(nomeArquivoBg); // Salva SÓ o nome
        } else if (request.getImagemBackground() != null && request.getImagemBackground().isBlank()){
             if (usuario.getImagemBackground() != null) {
                String urlAntigaBg = uploadUtils.construirUrlRelativa("usuarios", usuario.getImagemBackground());
                uploadUtils.deletarArquivoPeloCaminho(urlAntigaBg);
            }
            usuario.setImagemBackground(null);
        }

        return usuarioRepo.save(usuario);
    }

    @Transactional
    public void deleteUserById(UUID id) {
        Optional<Usuario> usuarioOpt = usuarioRepo.findById(id);
        if (usuarioOpt.isPresent()) {
            Usuario usuario = usuarioOpt.get();

            // Deleta arquivos associados antes de deletar o usuário
             if (usuario.getImagem() != null) {
                 String urlImagem = uploadUtils.construirUrlRelativa("usuarios", usuario.getImagem());
                 uploadUtils.deletarArquivoPeloCaminho(urlImagem);
            }
             if (usuario.getImagemBackground() != null) {
                 String urlBg = uploadUtils.construirUrlRelativa("usuarios", usuario.getImagemBackground());
                 uploadUtils.deletarArquivoPeloCaminho(urlBg);
            }

            usuarioRepo.deleteById(id);
        } else {
            throw new RuntimeException("Usuário não encontrado para deleção com ID: " + id);
        }
    }

    public String getUrlImagemPerfil(Usuario usuario) {
        return uploadUtils.construirUrlRelativa("usuarios", usuario.getImagem());
    }

    public String getUrlImagemBackground(Usuario usuario) {
         return uploadUtils.construirUrlRelativa("usuarios", usuario.getImagemBackground());
    }
}