package TavolaSoftware.TavolaApp.REST.service;

import TavolaSoftware.TavolaApp.REST.model.Restaurante;
import TavolaSoftware.TavolaApp.REST.repository.RestauranteRepository;
import TavolaSoftware.TavolaApp.tools.Mesas;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class MesasService {

    @Autowired
    private RestauranteRepository restauranteRepository;

    public Restaurante getRestauranteByEmail(String email) {
        Restaurante restaurante = restauranteRepository.findByUsuarioEmail(email);
        if (restaurante == null) {
            throw new RuntimeException("Restaurante não encontrado para o e-mail informado: " + email);
        }
        return restaurante;
    }

    public List<Mesas> findAll(Restaurante restaurante) {
        return restaurante.getMesas();
    }

    public Optional<Mesas> findByName(Restaurante restaurante, String nome) {
        return restaurante.getMesas().stream()
                .filter(m -> m.getNome().equalsIgnoreCase(nome))
                .findFirst();
    }

    public Optional<Mesas> findByIndex(Restaurante restaurante, int index) {
        List<Mesas> mesas = restaurante.getMesas();
        if (index < 0 || index >= mesas.size()) {
            return Optional.empty();
        }
        return Optional.of(mesas.get(index));
    }

    public void update(Restaurante restaurante, List<Mesas> novasMesas) {
        restaurante.setMesas(novasMesas);
        restauranteRepository.save(restaurante);
    }
} 
