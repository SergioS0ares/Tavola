package TavolaSoftware.TavolaApp.REST.repository;

import TavolaSoftware.TavolaApp.REST.model.Mesa;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.UUID;

@Repository
public interface MesaRepository extends JpaRepository<Mesa, UUID> {
    // Encontra todas as mesas de um ambiente específico
    List<Mesa> findByAmbienteId(UUID ambienteId);
    
    List<Mesa> findByAmbienteIdIn(List<UUID> ambienteIds);
}