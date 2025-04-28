package TavolaSoftware.TavolaApp.REST.service;

import TavolaSoftware.TavolaApp.REST.model.Categoria;
import TavolaSoftware.TavolaApp.REST.repository.CategoriaRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
import java.util.UUID;

@Service
public class CategoriaService {

    @Autowired
    private CategoriaRepository repo;

    public List<Categoria> findAll() {
        return repo.findAll();
    }

    public Optional<Categoria> findById(UUID id) {
        return repo.findById(id);
    }

    public List<Categoria> findByRestauranteId(UUID restauranteId) {
        return repo.findByRestauranteId(restauranteId);
    }

    public Categoria save(Categoria categoria) {
        return repo.save(categoria);
    }

    public Categoria update(UUID id, Categoria categoria) {
        if (repo.existsById(id)) {
            categoria.setId(id);
            return repo.save(categoria);
        }
        return null;
    }

    public void deleteById(UUID id) {
        repo.deleteById(id);
    }
}
