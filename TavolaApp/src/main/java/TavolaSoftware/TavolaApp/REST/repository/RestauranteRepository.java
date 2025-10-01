package TavolaSoftware.TavolaApp.REST.repository;

import TavolaSoftware.TavolaApp.REST.model.Restaurante;
import TavolaSoftware.TavolaApp.REST.model.Usuario;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.time.LocalTime;
import java.util.List;
import java.util.Optional;
import java.util.UUID;

@Repository
public interface RestauranteRepository extends JpaRepository<Restaurante, UUID>, JpaSpecificationExecutor<Restaurante>, RestauranteRepositoryCustom {

    Restaurante findByUsuarioEmail(String email);
    Optional<Restaurante> findByUsuario(Usuario usuario);

    List<Restaurante> findByUsuarioEnderecoCidadeIgnoreCase(String cidade);
    
/*
        @Query(value = """
            SELECT
                r.usuario_id as id,
                (CASE
                    WHEN :termoFts IS NULL THEN 0.0
                    ELSE ts_rank_cd(
                        to_tsvector('portuguese', public.get_restaurante_fts_document(r.usuario_id)),
                        to_tsquery('portuguese', :termoFts)
                    )   
                END * 1.5) + (COALESCE(AVG(av.score_avaliacao), 0) * 1.0) as final_score
            FROM restaurante_table r
            JOIN usuario_table u ON r.usuario_id = u.usuario_id
            LEFT JOIN cliente_avaliacao_table av ON r.usuario_id = av.restaurante_id
            LEFT JOIN restaurante_servicos rs ON r.usuario_id = rs.restaurante_id
            LEFT JOIN servicos_table s ON rs.servico_id = s.servicos_id
            LEFT JOIN restaurante_horarios_funcionamento hf ON r.usuario_id = hf.restaurante_id
            WHERE
                (:termoFts IS NULL OR to_tsvector('portuguese', public.get_restaurante_fts_document(r.usuario_id)) @@ to_tsquery('portuguese', :termoFts))
                AND
                (:cidade IS NULL OR u.cidade ILIKE :cidade)
                AND
                -- <<< MUDANÇA CRÍTICA AQUI >>>
                -- Adicionamos um CAST para garantir que o tipo seja conhecido mesmo se a lista for nula/vazia
                (COALESCE(:servicos) IS NULL OR s.servico_nome IN (SELECT unnest(CAST(:servicos AS text[]))))
                AND
                (
                    :diaDaSemana IS NULL OR
                    (hf.dia_semana = :diaDaSemana AND
                     CAST(:horaInicio AS time) BETWEEN CAST(hf.abertura AS time) AND CAST(hf.fechamento AS time))
                )
            GROUP BY r.usuario_id
            HAVING
                (:notaMinima IS NULL OR COALESCE(AVG(av.score_avaliacao), 0) >= :notaMinima)
                AND
                 -- <<< E AQUI TAMBÉM >>>
                (COALESCE(:servicos) IS NULL OR COUNT(DISTINCT s.servico_nome) = :servicosCount)
            ORDER BY final_score DESC
            """, nativeQuery = true)
        List<Object[]> searchAvancado(
            @Param("termoFts") String termoFts,
            @Param("cidade") String cidade,
            @Param("notaMinima") Double notaMinima,
            @Param("servicos") List<String> servicos,
            @Param("servicosCount") long servicosCount,
            @Param("diaDaSemana") String diaDaSemana,
            @Param("horaInicio") LocalTime horaInicio
        );
*/
}