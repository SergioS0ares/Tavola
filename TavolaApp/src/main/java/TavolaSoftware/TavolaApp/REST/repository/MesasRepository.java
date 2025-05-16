package TavolaSoftware.TavolaApp.REST.repository;

import java.util.List;
import java.util.UUID;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import TavolaSoftware.TavolaApp.REST.model.Mesas;

@Repository
public interface MesasRepository extends JpaRepository<Mesas, UUID> {
    List<Mesas> findByRestauranteId(UUID restauranteId);
    Mesas findByIdAndRestauranteId(UUID id, UUID restauranteId);
} 