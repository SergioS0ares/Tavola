package TavolaSoftware.TavolaApp.REST.repository;

import TavolaSoftware.TavolaApp.REST.model.Reserva;
import TavolaSoftware.TavolaApp.tools.StatusReserva;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.time.LocalDate;
import java.time.LocalTime;
import java.util.List;
import java.util.UUID;

@Repository
public interface ReservaRepository extends JpaRepository<Reserva, UUID> {

    /**
     * Busca todas as reservas de um cliente específico com ordenação dinâmica.
     */
    @Query("SELECT r FROM Reserva r WHERE r.cliente.id = :clienteId ORDER BY " +
           "CASE WHEN :ordem = 'latest' THEN r.dataReserva END DESC, " +
           "CASE WHEN :ordem = 'newest' THEN r.dataReserva END ASC, " +
           "CASE WHEN :ordem = 'placescrescent' THEN r.quantidadePessoas END ASC, " +
           "CASE WHEN :ordem = 'placesdecrescent' THEN r.quantidadePessoas END DESC")
    List<Reserva> findAllByClienteOrdered(@Param("clienteId") UUID clienteId, @Param("ordem") String ordem, Pageable pageable);

    /**
     * Busca todas as reservas de um restaurante específico com ordenação dinâmica.
     */
    @Query("SELECT r FROM Reserva r WHERE r.restaurante.id = :restauranteId ORDER BY " +
           "CASE WHEN :ordem = 'latest' THEN r.dataReserva END DESC, " +
           "CASE WHEN :ordem = 'newest' THEN r.dataReserva END ASC, " +
           "CASE WHEN :ordem = 'placescrescent' THEN r.quantidadePessoas END ASC, " +
           "CASE WHEN :ordem = 'placesdecrescent' THEN r.quantidadePessoas END DESC")
    List<Reserva> findAllByRestauranteOrdered(@Param("restauranteId") UUID restauranteId, @Param("ordem") String ordem, Pageable pageable);
    
    /**
     * [NOVO] Busca reservas de um restaurante com filtros avançados para data, nome do cliente, status e período (hora).
     */
    @Query("SELECT r FROM Reserva r JOIN r.cliente c JOIN c.usuario u " +
           "WHERE r.restaurante.id = :restauranteId " +
           "AND r.dataReserva = :dataReserva " +
           "AND (:clienteNome IS NULL OR LOWER(u.nome) LIKE LOWER(CONCAT('%', :clienteNome, '%'))) " +
           "AND (:status IS NULL OR r.status = :status) " +
           "AND r.horaReserva BETWEEN :horaInicio AND :horaFim " +
           "ORDER BY r.horaReserva ASC, u.nome ASC")
    List<Reserva> findReservasByRestauranteWithFilters(
            @Param("restauranteId") UUID restauranteId,
            @Param("dataReserva") LocalDate dataReserva,
            @Param("clienteNome") String clienteNome,
            @Param("status") StatusReserva status,
            @Param("horaInicio") LocalTime horaInicio,
            @Param("horaFim") LocalTime horaFim
    );

    void deleteAllByClienteId(UUID clienteId);
}