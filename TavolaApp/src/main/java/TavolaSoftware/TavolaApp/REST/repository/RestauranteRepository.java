package TavolaSoftware.TavolaApp.REST.repository;

import TavolaSoftware.TavolaApp.REST.model.Restaurante;
import TavolaSoftware.TavolaApp.REST.model.Usuario; // Mantido se usado por outros métodos
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository; // Mantido

import java.util.Optional;
import java.util.UUID;

@Repository
public interface RestauranteRepository extends JpaRepository<Restaurante, UUID> { //

    Restaurante findByUsuarioEmail(String email); //
    Optional<Restaurante> findByUsuario(Usuario usuario); //

    /**
     * Realiza uma busca Full-Text Search (FTS) principal no nome do restaurante e tipo de cozinha.
     * Retorna IDs dos restaurantes e seus scores FTS base.
     * Esta query é um exemplo para PostgreSQL.
     * Certifique-se de que as colunas referenciadas (user_name, establishment_service)
     * estão preparadas para FTS no seu banco (com tsvector e índices GIN).
     */
    @Query(value = 
        "SELECT " +
        "    r.id AS restaurante_id, " + // ID do Restaurante (establishment_table.id)
        "    ts_rank_cd(" +
        "        COALESCE(u.nome_tsv, to_tsvector('portuguese', COALESCE(u.user_name, ''))) || ' ' || COALESCE(r.tipo_cozinha_tsv, to_tsvector('portuguese', COALESCE(r.establishment_service, ''))), " + // Usa colunas tsv pré-calculadas se existirem
        "        plainto_tsquery('portuguese', :termo)" +
        "    ) AS fts_score " +
        "FROM establishment_table r " +
        "JOIN user_table u ON r.usuario_id = u.user_id " +
        "WHERE (COALESCE(u.nome_tsv, to_tsvector('portuguese', COALESCE(u.user_name, ''))) || ' ' || COALESCE(r.tipo_cozinha_tsv, to_tsvector('portuguese', COALESCE(r.establishment_service, '')))) @@ plainto_tsquery('portuguese', :termo) " +
        "ORDER BY fts_score DESC",
        countQuery = "SELECT count(r.id) " +
                     "FROM establishment_table r " +
                     "JOIN user_table u ON r.usuario_id = u.user_id " +
                     "WHERE (COALESCE(u.nome_tsv, to_tsvector('portuguese', COALESCE(u.user_name, ''))) || ' ' || COALESCE(r.tipo_cozinha_tsv, to_tsvector('portuguese', COALESCE(r.establishment_service, '')))) @@ plainto_tsquery('portuguese', :termo)",
        nativeQuery = true)
    Page<Object[]> searchRestaurantesByFtsBase(@Param("termo") String termo, Pageable pageable);
    // Retorna Object[] onde: object[0] é restaurante_id (UUID), object[1] é fts_score (Double)
}