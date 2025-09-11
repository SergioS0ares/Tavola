package TavolaSoftware.TavolaApp.REST.repository;

import java.time.LocalDate;
import java.util.List;
import java.util.UUID;

import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import TavolaSoftware.TavolaApp.REST.model.Reserva;
import TavolaSoftware.TavolaApp.tools.StatusReserva;

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
     * [VERSÃO FINAL E SIMPLIFICADA] Busca reservas por dia, ignorando o horário.
     */
    @Query(value = "SELECT r.* FROM reserva_table r " +
                   "JOIN cliente_table c ON c.usuario_id = r.cliente_id " +
                   "JOIN usuario_table u ON u.usuario_id = c.usuario_id " +
                   "WHERE r.restaurante_id = :restauranteId " +
                   // Comparamos apenas a DATA, ignorando a hora da coluna do banco
                   "AND CAST(r.data_reserva AS DATE) = :dataReserva " +
                   "AND (:clienteNome IS NULL OR LOWER(CAST(u.nome_usuario AS TEXT)) LIKE LOWER(CONCAT('%', :clienteNome, '%'))) " +
                   "AND (:status IS NULL OR r.status_reserva = :status) " +
                   // A cláusula de tempo (BETWEEN :horaInicio AND :horaFim) foi REMOVIDA
                   "ORDER BY r.hora_reserva ASC, u.nome_usuario ASC",
           nativeQuery = true)
    List<Reserva> findReservasByRestauranteWithFilters(
            @Param("restauranteId") UUID restauranteId,
            @Param("dataReserva") LocalDate dataReserva,
            @Param("clienteNome") String clienteNome,
            @Param("status") String status
    );

    // >>> NOVO MÉTODO PARA A LISTA DE ESPERA <<<
    /**
     * Encontra todas as reservas de um restaurante com um status específico, ordenado pela data e hora.
     * Ideal para a funcionalidade de "Lista de Espera".
     * @param restauranteId O ID do restaurante.
     * @param status O status da reserva a ser buscado (ex: LISTA_ESPERA).
     * @return Uma lista de reservas que correspondem aos critérios.
     */
    List<Reserva> findByRestauranteIdAndStatusOrderByDataReservaAscHoraReservaAsc(UUID restauranteId, StatusReserva status);

    // >>> NOVO MÉTODO PARA O CALENDÁRIO <<<
    /**
     * Encontra todas as reservas de um restaurante dentro de um intervalo de datas.
     * Ideal para a funcionalidade de "Calendário".
     * @param restauranteId O ID do restaurante.
     * @param dataInicio A data inicial do intervalo.
     * @param dataFim A data final do intervalo.
     * @return Uma lista de reservas dentro do período especificado.
     */
    List<Reserva> findByRestauranteIdAndDataReservaBetween(UUID restauranteId, LocalDate dataInicio, LocalDate dataFim);

    
    List<Reserva> findByClienteIdOrderByDataReservaDescHoraReservaDesc(UUID clienteId);

    
    List<Reserva> findByRestauranteIdOrderByDataReservaDescHoraReservaDesc(UUID restauranteId);


    void deleteAllByClienteId(UUID clienteId);
}