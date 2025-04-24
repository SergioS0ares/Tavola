package TavolaSoftware.TavolaApp.REST.service;

import TavolaSoftware.TavolaApp.REST.model.Reserva;
import TavolaSoftware.TavolaApp.REST.repository.ReservaRepository;

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

    public List<Reserva> findAllByClienteOrdered(UUID clienteId, String ordem, int pagina, int tamanho) {
        Pageable pageable = PageRequest.of(pagina, tamanho);
        return repo.findAllByClienteOrdered(clienteId, ordem, pageable);
    }
    
    public List<Reserva> findAllByRestauranteOrdered(UUID restauranteId, String ordem, int pagina, int tamanho) {
        Pageable pageable = PageRequest.of(pagina, tamanho);
        return repo.findAllByRestauranteOrdered(restauranteId, ordem, pageable);
    }
    

    public Reserva saveReserva(Reserva reserva) {
        return repo.save(reserva);
    }

    public void deleteReserva(UUID id) {
        repo.deleteById(id);
    }
}