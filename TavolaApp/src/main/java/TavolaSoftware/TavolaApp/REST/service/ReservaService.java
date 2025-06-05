package TavolaSoftware.TavolaApp.REST.service;

import TavolaSoftware.TavolaApp.REST.model.Reserva;
import TavolaSoftware.TavolaApp.REST.model.Restaurante;
import TavolaSoftware.TavolaApp.REST.repository.ReservaRepository;
import TavolaSoftware.TavolaApp.REST.repository.RestauranteRepository;

import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.PageRequest;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.UUID;

@Service
public class ReservaService {

    @Autowired
    private ReservaRepository repo;

    @Autowired
    private RestauranteRepository restauranteRepo;

    public List<Reserva> findAllByClienteOrdered(UUID clienteId, String ordem, int pagina, int tamanho) {
        Pageable pageable = PageRequest.of(pagina, tamanho);
        return repo.findAllByClienteOrdered(clienteId, ordem, pageable);
    }
    
    public List<Reserva> findAllByRestauranteOrdered(UUID restauranteId, String ordem, int pagina, int tamanho) {
        Pageable pageable = PageRequest.of(pagina, tamanho);
        return repo.findAllByRestauranteOrdered(restauranteId, ordem, pageable);
    }
    
    public List<Reserva> findByRestauranteEmail(String email, int limit) {
        Restaurante restaurante = restauranteRepo.findByUsuarioEmail(email);
        if (restaurante == null) {
            throw new RuntimeException("Restaurante não encontrado para o email: " + email);
        }
        Pageable pageable = PageRequest.of(0, limit);
        return repo.findAllByRestauranteOrdered(restaurante.getId(), "latest", pageable);
    }
    
    public Reserva save(Reserva reserva) {
        return repo.save(reserva);
    }

    public void delete(UUID id) {
        repo.deleteById(id);
    }
}