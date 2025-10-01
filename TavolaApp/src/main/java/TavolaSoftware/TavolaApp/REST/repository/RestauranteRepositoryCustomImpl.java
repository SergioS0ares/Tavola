package TavolaSoftware.TavolaApp.REST.repository;

import TavolaSoftware.TavolaApp.REST.model.Restaurante;
import jakarta.persistence.EntityManager;
import jakarta.persistence.PersistenceContext;
import jakarta.persistence.TypedQuery;
import jakarta.persistence.criteria.CriteriaBuilder;
import jakarta.persistence.criteria.CriteriaQuery;
import jakarta.persistence.criteria.Predicate;
import jakarta.persistence.criteria.Root;
import org.springframework.data.jpa.domain.Specification;

import java.util.ArrayList;
import java.util.List;

public class RestauranteRepositoryCustomImpl implements RestauranteRepositoryCustom {

    @PersistenceContext
    private EntityManager entityManager;

    @Override
    public List<Restaurante> findBySpecificationAndFts(Specification<Restaurante> spec, String termoFts) {
        CriteriaBuilder cb = entityManager.getCriteriaBuilder();
        CriteriaQuery<Restaurante> query = cb.createQuery(Restaurante.class);
        Root<Restaurante> root = query.from(Restaurante.class);

        List<Predicate> allPredicates = new ArrayList<>();

        // 1. Converte a Specification em um Predicate (se existir)
        if (spec != null) {
            Predicate specPredicate = spec.toPredicate(root, query, cb);
            if (specPredicate != null) {
                allPredicates.add(specPredicate);
            }
        }

        // 2. Adiciona o filtro de Full-Text Search (se houver termo)
        if (termoFts != null && !termoFts.isBlank()) {
        	allPredicates.add(cb.isTrue(
                    cb.function(
                        "@@", 
                        Boolean.class,
                        cb.function("to_tsvector", Object.class, cb.literal("portuguese"), cb.function("public.get_restaurante_fts_document", String.class, root.get("id"))),
                        cb.function("plainto_tsquery", Object.class, cb.literal("portuguese"), cb.literal(termoFts))
                    )
                ));

            // 3. Adiciona a ordenação por relevância (score)
            query.orderBy(cb.desc(
                cb.function("ts_rank_cd", Float.class,
                    cb.function("to_tsvector", Object.class, cb.literal("portuguese"), cb.function("public.get_restaurante_fts_document", String.class, root.get("id"))),
                    cb.function("to_tsquery", Object.class, cb.literal("portuguese"), cb.literal(termoFts))
                )
            ));
        }

        // Combina todos os predicados com "AND"
        query.where(allPredicates.toArray(new Predicate[0]));
        query.distinct(true);

        TypedQuery<Restaurante> typedQuery = entityManager.createQuery(query);
        return typedQuery.getResultList();
    }
}