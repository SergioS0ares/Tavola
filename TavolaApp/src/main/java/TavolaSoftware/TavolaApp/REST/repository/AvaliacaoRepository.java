package TavolaSoftware.TavolaApp.REST.repository;

import TavolaSoftware.TavolaApp.REST.model.Avaliacao;
import TavolaSoftware.TavolaApp.REST.model.Cliente;
import TavolaSoftware.TavolaApp.REST.model.Restaurante;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;
import java.util.UUID;

@Repository
public interface AvaliacaoRepository extends JpaRepository<Avaliacao, UUID> {

    // Método para buscar todas as avaliações de um restaurante específico
    List<Avaliacao> findByRestauranteId(UUID restauranteId);

    // Método para encontrar uma avaliação específica por cliente e restaurante
    Optional<Avaliacao> findByClienteAndRestaurante(Cliente cliente, Restaurante restaurante);
}