package TavolaSoftware.TavolaApp.REST.repository;

import TavolaSoftware.TavolaApp.REST.model.AtendimentoMesa;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

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

    // Poderemos adicionar outros métodos de busca aqui se necessário (ex: por restaurante)
}