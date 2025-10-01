// Crie este novo arquivo
package TavolaSoftware.TavolaApp.REST.repository.specification; // Ou onde preferir

import TavolaSoftware.TavolaApp.REST.model.Restaurante;
import jakarta.persistence.criteria.JoinType;
import org.springframework.data.jpa.domain.Specification;
import java.time.LocalTime;
import java.util.List;

public class RestauranteSpecification {

    // Filtro por cidade
	public static Specification<Restaurante> comCidade(String cidade) {
	    if (cidade == null || cidade.isBlank()) {
	        return null; // AQUI!
	    }
        return (root, query, cb) -> cb.like(cb.lower(root.get("usuario").get("endereco").get("cidade")), "%" + cidade.toLowerCase() + "%");
    }

    // Filtro por nota mínima
    public static Specification<Restaurante> comNotaMinima(Double notaMinima) {
        if (notaMinima == null || notaMinima <= 0) {
            return null;
        }
        return (root, query, cb) -> cb.greaterThanOrEqualTo(root.get("mediaAvaliacao"), notaMinima);
    }

    // Filtro por serviços
    public static Specification<Restaurante> comServicos(List<String> servicos) {
        if (servicos == null || servicos.isEmpty()) {
            return null;
        }
        return (root, query, cb) -> {
            // Garante que a junção seja feita apenas uma vez
            query.distinct(true); 
            return root.join("servicos", JoinType.INNER).get("nome").in(servicos);
        };
    }

    // Filtro por horário aberto
    public static Specification<Restaurante> abertoAgora(String diaDaSemana, LocalTime hora) {
        if (diaDaSemana == null || diaDaSemana.isBlank() || hora == null) {
            return null;
        }
        return (root, query, cb) -> {
            query.distinct(true);
            var joinHorarios = root.join("horariosFuncionamento", JoinType.INNER);
            return cb.and(
                cb.equal(joinHorarios.get("diaSemana"), diaDaSemana),
                cb.lessThanOrEqualTo(joinHorarios.get("abertura").as(LocalTime.class), hora),
                cb.greaterThanOrEqualTo(joinHorarios.get("fechamento").as(LocalTime.class), hora)
            );
        };
    }
}