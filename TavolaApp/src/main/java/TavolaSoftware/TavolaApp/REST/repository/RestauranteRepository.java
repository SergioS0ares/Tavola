package TavolaSoftware.TavolaApp.REST.repository;

import java.util.UUID;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import TavolaSoftware.TavolaApp.REST.model.Restaurante;

@Repository
public interface RestauranteRepository extends JpaRepository<Restaurante, UUID>{

}
