package TavolaSoftware.TavolaApp.REST.repository;

import TavolaSoftware.TavolaApp.REST.model.Restaurante;
import TavolaSoftware.TavolaApp.REST.model.Usuario;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;
import java.util.UUID;

@Repository
public interface RestauranteRepository extends JpaRepository<Restaurante, UUID> {

    Restaurante findByUsuarioEmail(String email);
    Optional<Restaurante> findByUsuario(Usuario usuario);

    /**
     * Encontra todos os restaurantes localizados em uma cidade específica, ignorando maiúsculas/minúsculas.
     * O Spring Data JPA gera a query a partir do nome do método.
     * O caminho da propriedade é: Restaurante -> usuario -> endereco -> cidade.
     * @param cidade O nome da cidade para filtrar.
     * @return Uma lista de restaurantes encontrados.
     */
    List<Restaurante> findByUsuarioEnderecoCidadeIgnoreCase(String cidade);
    
    /**
     * Realiza uma busca Full-Text Search (FTS) principal no nome do restaurante e tipo de cozinha.
     * Retorna IDs dos restaurantes e seus scores FTS base.
     * Esta query é um exemplo para PostgreSQL.
     */
    @Query(value = 
            "SELECT " +
            "    r.usuario_id AS restaurante_id, " +
            "    ts_rank_cd(" +
            "        COALESCE(u.nome_tsv, to_tsvector('portuguese', '')) || ' ' || COALESCE(r.tipo_cozinha_tsv, to_tsvector('portuguese', '')), " +
            "        to_tsquery('portuguese', :termo)" +
            "    ) AS fts_score " +
            "FROM restaurante_table r " + // NOME DA TABELA CORRIGIDO
            "JOIN usuario_table u ON r.usuario_id = u.usuario_id " + // NOMES DAS TABELAS E COLUNAS CORRIGIDOS
            "WHERE (COALESCE(u.nome_tsv, to_tsvector('portuguese', '')) || ' ' || COALESCE(r.tipo_cozinha_tsv, to_tsvector('portuguese', ''))) @@ to_tsquery('portuguese', :termo) " +
            "ORDER BY fts_score DESC",
            countQuery = "SELECT count(r.usuario_id) " +
                         "FROM restaurante_table r " + // NOME DA TABELA CORRIGIDO
                         "JOIN usuario_table u ON r.usuario_id = u.usuario_id " + // NOMES DAS TABELAS E COLUNAS CORRIGIDOS
                         "WHERE (COALESCE(u.nome_tsv, to_tsvector('portuguese', '')) || ' ' || COALESCE(r.tipo_cozinha_tsv, to_tsvector('portuguese', ''))) @@ to_tsquery('portuguese', :termo)",
            nativeQuery = true)
        Page<Object[]> searchRestaurantesByFtsBase(@Param("termo") String termo, Pageable pageable);
}