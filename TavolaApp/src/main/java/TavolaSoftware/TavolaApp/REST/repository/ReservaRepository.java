package TavolaSoftware.TavolaApp.REST.repository;

import java.util.List;
import java.util.UUID;

import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import TavolaSoftware.TavolaApp.REST.model.Reserva;

@Repository
public interface ReservaRepository extends JpaRepository<Reserva, UUID> {

    @Query("""
        SELECT r FROM Reserva r
        WHERE r.cliente.id = :clienteId
        ORDER BY
            CASE WHEN :ordem = 'latest' THEN r.data END DESC,
            CASE WHEN :ordem = 'newest' THEN r.data END ASC,
            CASE WHEN :ordem = 'placescrescent' THEN r.pessoas END ASC,
            CASE WHEN :ordem = 'placesdecrescent' THEN r.pessoas END DESC,
            CASE WHEN :ordem = 'mesacrescent' THEN r.mesa.nome END ASC,
            CASE WHEN :ordem = 'mesadecrescent' THEN r.mesa.nome END DESC
    """)
    List<Reserva> findAllByClienteOrdered(
        @Param("clienteId") UUID clienteId,
        @Param("ordem") String ordem,
        Pageable pageable
    );

    @Query("""
        SELECT r FROM Reserva r
        WHERE r.restaurante.id = :restauranteId
        ORDER BY
            CASE WHEN :ordem = 'latest' THEN r.data END DESC,
            CASE WHEN :ordem = 'newest' THEN r.data END ASC,
            CASE WHEN :ordem = 'placescrescent' THEN r.pessoas END ASC,
            CASE WHEN :ordem = 'placesdecrescent' THEN r.pessoas END DESC,
            CASE WHEN :ordem = 'clientcrescent' THEN r.cliente.usuario.nome END ASC,
            CASE WHEN :ordem = 'clientdecrescent' THEN r.cliente.usuario.nome END DESC
    """)
    List<Reserva> findAllByRestauranteOrdered(
        @Param("restauranteId") UUID restauranteId,
        @Param("ordem") String ordem,
        Pageable pageable
    );
}
