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
    
    @Query(value = """
            WITH FTS_RESULTS AS (
                -- Etapa 1: Agrega todo o texto relevante e calcula o score FTS.
                SELECT
                    r.usuario_id as id,
                    ts_rank_cd(
                        -- Pesos: A=Nome, B=Cozinha/Cardápio, C=Descrição, D=Serviços/Endereço
                        setweight(to_tsvector('portuguese', u.nome_usuario), 'A') ||
                        setweight(to_tsvector('portuguese', r.cozinha_restaurante), 'B') ||       -- <<< CORREÇÃO AQUI
                        setweight(to_tsvector('portuguese', COALESCE(r.descricao_restaurante, '')), 'C') || -- <<< CORREÇÃO AQUI
                        setweight(to_tsvector('portuguese', COALESCE(
                            (SELECT string_agg(c.nome || ' ' || c.descricao, ' ') FROM cardapio_table c WHERE c.restaurante_id = r.usuario_id), '')), 'B') ||
                        setweight(to_tsvector('portuguese', COALESCE(
                            (SELECT string_agg(s.nome_servico, ' ') FROM servico_table s JOIN restaurante_servicos rs ON s.id = rs.servico_id WHERE rs.restaurante_id = r.usuario_id), '')), 'D') ||
                        setweight(to_tsvector('portuguese', u.rua || ' ' || u.bairro || ' ' || u.cidade), 'D'), -- <<< CORREÇÃO AQUI
                        to_tsquery('portuguese', :termoFts)
                    ) as fts_score
                FROM restaurante_table r
                JOIN usuario_table u ON r.usuario_id = u.usuario_id
                WHERE to_tsvector('portuguese', u.nome_usuario || ' ' || r.cozinha_restaurante || ' ' || COALESCE(r.descricao_restaurante, '') || ' ' || u.rua || ' ' || u.bairro || ' ' || u.cidade || ' ' || -- <<< CORREÇÃO AQUI (todas as colunas)
                    COALESCE((SELECT string_agg(c.nome || ' ' || c.descricao, ' ') FROM cardapio_table c WHERE c.restaurante_id = r.usuario_id), '') || ' ' ||
                    COALESCE((SELECT string_agg(s.nome_servico, ' ') FROM servico_table s JOIN restaurante_servicos rs ON s.id = rs.servico_id WHERE rs.restaurante_id = r.usuario_id), ''))
                @@ to_tsquery('portuguese', :termoFts)
            )
            -- Etapa 2: Aplica os filtros e calcula o score final
            SELECT
                r.usuario_id as id,
                (COALESCE(fts.fts_score, 0) * 1.5) + (COALESCE(AVG(av.score), 0) * 1.0) as final_score
            FROM restaurante_table r
            JOIN usuario_table u ON r.usuario_id = u.usuario_id
            JOIN FTS_RESULTS fts ON r.usuario_id = fts.id
            LEFT JOIN avaliacao_table av ON r.usuario_id = av.restaurante_id
            LEFT JOIN restaurante_servicos rs ON r.usuario_id = rs.restaurante_id
            LEFT JOIN servico_table s ON rs.servico_id = s.id
            LEFT JOIN restaurante_horarios_funcionamento hf ON r.usuario_id = hf.restaurante_id -- Junção para horários
            WHERE
                (:cidade IS NULL OR u.cidade ILIKE :cidade)
                AND
                (:servicos IS NULL OR s.nome_servico IN (:servicos))
                AND
                (
                    :diaDaSemana IS NULL OR
                    (hf.dia_semana = :diaDaSemana AND CAST(:horaInicio AS time) BETWEEN hf.abertura AND hf.fechamento)
                )
            GROUP BY r.usuario_id, fts.fts_score
            HAVING
                (:notaMinima IS NULL OR COALESCE(AVG(av.score), 0) >= :notaMinima)
                AND
                (:servicos IS NULL OR COUNT(DISTINCT s.nome_servico) = :servicosCount)
            ORDER BY final_score DESC
            """, nativeQuery = true)
        List<Object[]> searchAvancado(
            @Param("termoFts") String termoFts,
            @Param("cidade") String cidade,
            @Param("notaMinima") Double notaMinima,
            @Param("servicos") List<String> servicos,
            @Param("servicosCount") long servicosCount,
            @Param("diaDaSemana") String diaDaSemana,
            @Param("horaInicio") String horaInicio,
            @Param("horaFim") String horaFim
        );
}