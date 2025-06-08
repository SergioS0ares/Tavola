package TavolaSoftware.TavolaApp.REST.repository;

import TavolaSoftware.TavolaApp.REST.model.Reserva;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.UUID;

@Repository
public interface ReservaRepository extends JpaRepository<Reserva, UUID> {

    /**
     * Busca todas as reservas de um cliente específico com ordenação dinâmica.
     * A ordenação por nome da mesa foi removida pois o campo 'mesa' foi alterado para uma lista 'mesas'.
     */
    @Query("SELECT r FROM Reserva r WHERE r.cliente.id = :clienteId ORDER BY " +
           "CASE WHEN :ordem = 'latest' THEN r.dataReserva END DESC, " +
           "CASE WHEN :ordem = 'newest' THEN r.dataReserva END ASC, " +
           "CASE WHEN :ordem = 'placescrescent' THEN r.quantidadePessoas END ASC, " +
           "CASE WHEN :ordem = 'placesdecrescent' THEN r.quantidadePessoas END DESC")
    List<Reserva> findAllByClienteOrdered(@Param("clienteId") UUID clienteId, @Param("ordem") String ordem, Pageable pageable);

    /**
     * Busca todas as reservas de um restaurante específico com ordenação dinâmica.
     * A ordenação por nome da mesa foi removida pois o campo 'mesa' foi alterado para uma lista 'mesas'.
     */
    @Query("SELECT r FROM Reserva r WHERE r.restaurante.id = :restauranteId ORDER BY " +
           "CASE WHEN :ordem = 'latest' THEN r.dataReserva END DESC, " +
           "CASE WHEN :ordem = 'newest' THEN r.dataReserva END ASC, " +
           "CASE WHEN :ordem = 'placescrescent' THEN r.quantidadePessoas END ASC, " +
           "CASE WHEN :ordem = 'placesdecrescent' THEN r.quantidadePessoas END DESC")
    List<Reserva> findAllByRestauranteOrdered(@Param("restauranteId") UUID restauranteId, @Param("ordem") String ordem, Pageable pageable);

}