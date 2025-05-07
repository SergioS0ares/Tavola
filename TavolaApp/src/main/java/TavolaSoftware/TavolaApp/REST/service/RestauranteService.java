package TavolaSoftware.TavolaApp.REST.service;

import TavolaSoftware.TavolaApp.REST.model.Restaurante;
import TavolaSoftware.TavolaApp.REST.model.Usuario;
import TavolaSoftware.TavolaApp.REST.repository.RestauranteRepository;
import TavolaSoftware.TavolaApp.REST.repository.UsuarioRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
import java.util.UUID;

@Service
public class RestauranteService {

    @Autowired
    private RestauranteRepository repo;
    
    @Autowired
    private UsuarioRepository repoUser;

    public List<Restaurante> findAll() {
        return repo.findAll();
    }

    public Optional<Restaurante> findById(UUID id) {
        return repo.findById(id);
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

    public Restaurante update(Restaurante existente, Restaurante atualizacao) {
        existente.getUsuario().setNome(atualizacao.getUsuario().getNome());
        existente.getUsuario().setEmail(atualizacao.getUsuario().getEmail());
        existente.getUsuario().setSenha(atualizacao.getUsuario().getSenha());
        existente.getUsuario().setEndereco(atualizacao.getUsuario().getEndereco());

        if (atualizacao.getHorarioFuncionamento() != null) {
            existente.setHoraFuncionamento(atualizacao.getHorarioFuncionamento());
        }

        if (atualizacao.getMesas() != null) {
            existente.setMesas(atualizacao.getMesas());
        }

        return repo.save(existente);
    }
}
