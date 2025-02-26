package TavolaSoftware.TavolaApp.REST.repository;

import java.util.List;
import java.util.UUID;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import TavolaSoftware.TavolaApp.REST.model.Cardapio;

@Repository
public interface CardapioRepository extends JpaRepository<Cardapio, UUID> {
    public List<Cardapio> findByEstablishmentId(UUID restauranteId);

}
