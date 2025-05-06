package TavolaSoftware.TavolaApp.REST.service;

import TavolaSoftware.TavolaApp.REST.model.Restaurante;
import TavolaSoftware.TavolaApp.REST.repository.RestauranteRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
import java.util.UUID;

@Service
public class RestauranteService {

    @Autowired
    private RestauranteRepository repo;

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
        Restaurante restaurante = repo.findByEmail(email);
        if (restaurante == null) {
            throw new RuntimeException("Restaurante não encontrado para o e-mail: " + email);
        }
        return restaurante;
    }

    public Restaurante updatePreservandoDados(Restaurante existente, Restaurante atualizacao) {
        existente.setNome(atualizacao.getNome());
        existente.setEmail(atualizacao.getEmail());
        existente.setSenha(atualizacao.getSenha());
        existente.setEndereco(atualizacao.getEndereco());

        if (atualizacao.getHorarioFuncionamento() != null) {
            existente.setHoraFuncionamento(atualizacao.getHorarioFuncionamento());
        }

        if (atualizacao.getMesas() != null) {
            existente.setMesas(atualizacao.getMesas());
        }

        return repo.save(existente);
    }
}
