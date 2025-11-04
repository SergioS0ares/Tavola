package TavolaSoftware.TavolaApp.REST.repository;

import TavolaSoftware.TavolaApp.REST.model.AtendimentoMesa;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.time.LocalDate;
import java.util.List;
import java.util.Optional;
import java.util.UUID;

@Repository
public interface AtendimentoMesaRepository extends JpaRepository<AtendimentoMesa, UUID> {

    /**
     * Encontra o atendimento ATIVO para uma mesa específica.
     * Usa JOIN FETCH para trazer os garçons associados.
     */
    @Query("SELECT a FROM AtendimentoMesa a LEFT JOIN FETCH a.garcons WHERE a.mesa.id = :mesaId AND a.ativo = true")
    Optional<AtendimentoMesa> findAtendimentoAtivoByMesaId(UUID mesaId);
    
    /**
     * Busca todos os atendimentos (ativos ou finalizados) que ocorreram
     * (iniciaram) em uma data específica, para uma lista de mesas.
     */
    @Query("SELECT a FROM AtendimentoMesa a " +
           "WHERE a.mesa.id IN :mesaIds " +
           "AND CAST(a.horaInicio AS DATE) = :data")
    List<AtendimentoMesa> findAtendimentosByMesaIdsAndData(
            @Param("mesaIds") List<UUID> mesaIds, 
            @Param("data") LocalDate data
    );

    // Poderemos adicionar outros métodos de busca aqui se necessário (ex: por restaurante)
 // Adicione este método
    List<AtendimentoMesa> findByMesaIdIn(List<UUID> mesaIds);
    
}