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

    public List<Reserva> findAllByClienteOrderByLatest(UUID clienteId) {
        // tem que arrumar
    }
    
    public List<Reserva> findAllByClienteOrderByNewest(UUID clienteId){
    	// tem que arrumar
    }
    
    public List<Reserva> findAllByClienteOrderByPlacesCrescent(UUID clienteId){
    	// tem que arrumar
    }

    public List<Reserva> findAllByClienteOrderByPlacesDecrescent(UUID clientId){
    	// tem que arrumar
    }
    
    public List<Reserva> findAllByClienteOrderByMesaCrescent(UUID clienteId){
    	// aqui você faz a ordem crescente alfabética usando o nome das mesas da reserva
    }
    
    public List<Reserva> findAllByClienteOrderByMesaDecrescent(UUID clienteId){
    	// aqui você faz a ordem decrescente alfabética
    }
    
    public List<Reserva> findAllByRestauranteOrderByNameCrescent(UUID restauranteId){
        // aqui você faz a ordem crescente alfabética usando o nome do restaurante
    }
    
    public List<Reserva> findAllByRestauranteOrderByNameDecrescent(UUID restauranteId){
    	// aqui você faz a ordem decrescente
    }
    
    public List<Reserva> findAllByRestauranteOrderByNewest(UUID restauranteId){
    	// tem q arrumar aqui
    }
    
    public List<Reserva> findAllByRestauranteOrderByLatest(UUID restauranteId){
    	// tem q arrumar aqui
    }
    
    public List<Reserva> findAllByRestauranteOrderByPlacesCrescent(UUID restauranteId){
    	// tem q arrumar aqui
    }
    
    public List<Reserva> findAllByRestauranteOrderByPlacesDecrescent(UUID restauranteId){
    	// tem q arrumar aqui
    }
    
    public List<Reserva> findAllByRestauranteOrderByEnderecoCrescent(UUID resauranteId){
    	// tem que arruma
    }
    
    public List<Reserva> findAllByRestauranteOrderByEnderecoDecrescent(UUID restauranteId){
    	// tem que arrumar
    }
    
    public Reserva findByReservaId(UUID reservaId) {
    	// tem que arrumar
    }

    public Reserva saveReserva(Reserva reserva) {
        return repo.save(reserva);
    }

    public void deleteReserva(UUID id) {
        repo.deleteById(id);
    }
}