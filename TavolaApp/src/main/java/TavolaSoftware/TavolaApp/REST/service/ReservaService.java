package TavolaSoftware.TavolaApp.REST.service;

import TavolaSoftware.TavolaApp.REST.model.Reserva;
import TavolaSoftware.TavolaApp.REST.repository.ReservaRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.UUID;

@Service
public class ReservaService {

    @Autowired
    private ReservaRepository repo;

    public List<Reserva> listarPorCliente(UUID clienteId) {
        return repo.findByClienteId(clienteId);
    }

    public List<Reserva> listarPorRestaurante(UUID restauranteId) {
        return repo.findByRestauranteId(restauranteId);
    }

    public Reserva salvarReserva(Reserva reserva) {
        return repo.save(reserva);
    }

    public void deletarReserva(UUID id) {
        repo.deleteById(id);
    }
}