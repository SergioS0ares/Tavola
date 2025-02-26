package TavolaSoftware.TavolaApp.REST.service;

import TavolaSoftware.TavolaApp.REST.model.Cardapio;
import TavolaSoftware.TavolaApp.REST.repository.CardapioRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
import java.util.UUID;

@Service
public class CardapioService {

    @Autowired
    private CardapioRepository repo;

    public List<Cardapio> findAll() {
        return repo.findAll();
    }

    public Optional<Cardapio> findById(UUID id) {
        return repo.findById(id);
    }

    public List<Cardapio> findByEstablishmentId(UUID restauranteId) {
        return repo.findByEstablishmentId(restauranteId);
    }

    public Cardapio save(Cardapio cardapio) {
        return repo.save(cardapio);
    }

    public void deleteById(UUID id) {
        repo.deleteById(id);
    }

    public Cardapio update(UUID id, Cardapio cardapio) {
        if (repo.existsById(id)) {
            cardapio.setId(id);
            return repo.save(cardapio);
        }
        return null;
    }
}
