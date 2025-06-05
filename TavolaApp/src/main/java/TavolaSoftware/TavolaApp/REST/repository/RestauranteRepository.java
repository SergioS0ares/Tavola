package TavolaSoftware.TavolaApp.REST.repository;

import TavolaSoftware.TavolaApp.REST.model.Restaurante;
import TavolaSoftware.TavolaApp.REST.model.Usuario;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.Optional;
import java.util.UUID;

@Repository
public interface RestauranteRepository extends JpaRepository<Restaurante, UUID> {

    Restaurante findByUsuarioEmail(String email);
    Optional<Restaurante> findByUsuario(Usuario usuario);

    /**
     * Realiza uma busca Full-Text Search (FTS) principal no nome do restaurante e tipo de cozinha.
     * Retorna IDs dos restaurantes e seus scores FTS base.
     * Esta query é um exemplo para PostgreSQL.
     */
    @Query(value = 
            "SELECT " +
            "    r.usuario_id AS restaurante_id, " +
            "    ts_rank_cd(" +
            "        COALESCE(u.nome_tsv, to_tsvector('portuguese', COALESCE(u.user_name, ''))) || ' ' || COALESCE(r.tipo_cozinha_tsv, to_tsvector('portuguese', COALESCE(r.establishment_cuisine_type, ''))), " +
            "        to_tsquery('portuguese', :termo)" + // <<< MUDANÇA AQUI
            "    ) AS fts_score " +
            "FROM establishment_table r " +
            "JOIN user_table u ON r.usuario_id = u.user_id " +
            "WHERE (COALESCE(u.nome_tsv, to_tsvector('portuguese', COALESCE(u.user_name, ''))) || ' ' || COALESCE(r.tipo_cozinha_tsv, to_tsvector('portuguese', COALESCE(r.establishment_cuisine_type, '')))) @@ to_tsquery('portuguese', :termo) " + // <<< E AQUI
            "ORDER BY fts_score DESC",
            countQuery = "SELECT count(r.usuario_id) " +
                         "FROM establishment_table r " +
                         "JOIN user_table u ON r.usuario_id = u.user_id " +
                         "WHERE (COALESCE(u.nome_tsv, to_tsvector('portuguese', COALESCE(u.user_name, ''))) || ' ' || COALESCE(r.tipo_cozinha_tsv, to_tsvector('portuguese', COALESCE(r.establishment_cuisine_type, '')))) @@ to_tsquery('portuguese', :termo)", // <<< E AQUI TAMBÉM
            nativeQuery = true)
        Page<Object[]> searchRestaurantesByFtsBase(@Param("termo") String termo, Pageable pageable);

}