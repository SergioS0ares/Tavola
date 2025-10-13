package TavolaSoftware.TavolaApp.REST.repository.specification;

import TavolaSoftware.TavolaApp.REST.model.Restaurante;
import TavolaSoftware.TavolaApp.tools.DiaDaSemana;
import org.springframework.data.jpa.domain.Specification;

import java.util.List;

public class RestauranteSpecification {

    /**
     * Specification para busca por termo (nome, descrição, bairro, cidade) usando ILIKE.
     */
    public static Specification<Restaurante> comTermo(String termo) {
        if (termo == null || termo.isBlank()) {
            return null;
        }
        String termoLike = "%" + termo.toLowerCase() + "%";
        
        return (root, query, cb) -> {
            // Para cada campo, usamos .as(String.class) para sermos explícitos com o Hibernate
            return cb.or(
                cb.like(cb.lower(root.get("usuario").get("nome").as(String.class)), termoLike),
                cb.like(cb.lower(root.get("descricao").as(String.class)), termoLike),
                cb.like(cb.lower(root.get("usuario").get("endereco").get("bairro").as(String.class)), termoLike),
                cb.like(cb.lower(root.get("usuario").get("endereco").get("cidade").as(String.class)), termoLike)
            );
        };
    }

    /**
     * Specification para busca por cidade.
     */
    public static Specification<Restaurante> comCidade(String cidade) {
        if (cidade == null || cidade.isBlank()) {
            return null;
        }
        // Aqui não usamos lower(), então não precisamos do .as(String.class), mas não faria mal.
        return (root, query, cb) -> cb.equal(root.get("usuario").get("endereco").get("cidade"), cidade);
    }

    /**
     * Specification para nota mínima.
     */
    public static Specification<Restaurante> comNotaMinima(Double notaMinima) {
        if (notaMinima == null || notaMinima <= 0) {
            return null;
        }
        return (root, query, cb) -> cb.greaterThanOrEqualTo(root.get("mediaAvaliacao"), notaMinima);
    }

    /**
     * Specification para verificar se o restaurante possui TODOS os serviços solicitados.
     */
    public static Specification<Restaurante> comServicos(List<String> servicos) {
        if (servicos == null || servicos.isEmpty()) {
            return null;
        }
        return (root, query, cb) -> {
            query.distinct(true);
            return root.join("servicos").get("nome").in(servicos);
        };
    }

    /**
     * Specification para verificar se o restaurante abre em um determinado dia da semana.
     */
    public static Specification<Restaurante> comDiaSemanaDisponivel(DiaDaSemana dia) {
        if (dia == null) {
            return null;
        }
        return (root, query, cb) -> {
            // O .name() do Enum já retorna uma String, então a comparação é direta.
            return cb.equal(root.join("horariosFuncionamento").get("diaSemana"), dia.name());
        };
    }
}