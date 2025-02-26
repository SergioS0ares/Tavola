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

    public Restaurante update(UUID id, Restaurante restaurante) {
        if (repo.existsById(id)) {
            restaurante.setId(id);
            return repo.save(restaurante);
        }
        return null;
    }
}
