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
    
    /**
     * Encontra todas as avaliações de um cliente específico.
     * @param clienteId O ID do cliente.
     * @return Uma lista de avaliações.
     */
    List<Avaliacao> findByClienteId(UUID clienteId);

    /**
     * Encontra todas as avaliações de um cliente com nota maior ou igual a um valor.
     * Essencial para descobrirmos do que o cliente realmente gosta.
     * @param clienteId O ID do cliente.
     * @param score A nota mínima (ex: 4).
     * @return Uma lista de avaliações positivas.
     */
    List<Avaliacao> findByClienteIdAndScoreGreaterThanEqual(UUID clienteId, int score);

}