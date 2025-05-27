package TavolaSoftware.TavolaApp.REST.service;

import TavolaSoftware.TavolaApp.REST.model.Restaurante;
import TavolaSoftware.TavolaApp.REST.model.Usuario;
import TavolaSoftware.TavolaApp.REST.repository.RestauranteRepository;
import TavolaSoftware.TavolaApp.REST.repository.UsuarioRepository;
import TavolaSoftware.TavolaApp.REST.dto.RestauranteResponse;
import TavolaSoftware.TavolaApp.REST.model.Mesas;
import TavolaSoftware.TavolaApp.tools.UploadUtils;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.io.IOException;
import java.util.List;
import java.util.Optional;
import java.util.UUID;

@Service
public class RestauranteService {

    @Autowired
    private RestauranteRepository repo;
    
    @Autowired
    private UsuarioRepository repoUser;
    
    @Autowired
    private UploadUtils uplUtil;

    public List<Restaurante> findAll() {
        return repo.findAll();
    }

 // No RestauranteService
    public Optional<RestauranteResponse> findById(UUID id) { // Novo método ou renomeia o antigo
        return repo.findById(id).map(RestauranteResponse::new);
    }

    public Restaurante save(Restaurante restaurante) {
        return repo.save(restaurante);
    }

    public void deleteById(UUID id) {
        repo.deleteById(id);
    }
    
    public Restaurante getByEmail(String email) {
        Usuario usuario = repoUser.findByEmail(email);
        if (usuario == null) {
            throw new RuntimeException("Usuário não encontrado: " + email);
        }
        return repo.findByUsuario(usuario)
            .orElseThrow(() -> new RuntimeException("Restaurante não encontrado para o usuário: " + email));
    }

    public Restaurante update(UUID id, Restaurante atualizado) {
        Restaurante existente = repo.findById(id)
            .orElseThrow(() -> new RuntimeException("Restaurante não encontrado."));

        existente.setNome(atualizado.getNome());
        existente.setEndereco(atualizado.getEndereco());
        existente.setHoraFuncionamento(atualizado.getHoraFuncionamento());

        if (atualizado.getMesas() != null && !atualizado.getMesas().isEmpty()) {
            existente.setMesas(atualizado.getMesas());
            // Processa as imagens de cada mesa
            for (Mesas mesa : atualizado.getMesas()) {
                try {
                    List<String> imagensProcessadas = uplUtil.processMesas(mesa, existente.getId());
                    mesa.setImagem(imagensProcessadas);
                } catch (IOException e) {
                    throw new RuntimeException("Erro ao processar imagens da mesa: " + e.getMessage());
                }
            }
        }

        return repo.save(existente);
    }

}
