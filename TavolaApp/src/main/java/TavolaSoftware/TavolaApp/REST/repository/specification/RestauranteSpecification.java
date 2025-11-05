package TavolaSoftware.TavolaApp.REST.repository.specification;

import TavolaSoftware.TavolaApp.REST.model.Restaurante;
import TavolaSoftware.TavolaApp.REST.model.Servico;
// <<< MUDANÇA: Usar o SEU Enum de DiaDaSemana >>>
import TavolaSoftware.TavolaApp.tools.DiaDaSemana; 
import TavolaSoftware.TavolaApp.tools.HorarioFuncionamento;

import org.springframework.data.jpa.domain.Specification;
import jakarta.persistence.criteria.Join;
import java.util.List;
import java.util.Locale; 

public class RestauranteSpecification {

    /**
     * Specification para busca por termo (nome, descrição, bairro, cidade) usando ILIKE.
     */
    public static Specification<Restaurante> comTermo(String termo) {
        if (termo == null || termo.isBlank()) {
            // Retorna uma spec neutra que não faz nada (Evita NullPointerException).
            return (root, query, cb) -> cb.conjunction();
        }
        String termoLike = "%" + termo.toLowerCase() + "%";
        
        return (root, query, cb) -> {
            // Lógica de busca (sem alterações)
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
            return (root, query, cb) -> cb.conjunction();
        }
        return (root, query, cb) -> cb.equal(cb.lower(root.get("usuario").get("endereco").get("cidade")), cidade.toLowerCase());
    }

    /**
     * Specification para nota mínima.
     */
    public static Specification<Restaurante> comNotaMinima(Double notaMinima) {
        if (notaMinima == null || notaMinima <= 0) {
            return (root, query, cb) -> cb.conjunction();
        }
        return (root, query, cb) -> cb.greaterThanOrEqualTo(root.get("mediaAvaliacao"), notaMinima);
    }

    /**
     * Specification para verificar se o restaurante possui TODOS os serviços solicitados.
     */
    public static Specification<Restaurante> comServicos(List<String> servicos) {
        if (servicos == null || servicos.isEmpty()) {
            return (root, query, cb) -> cb.conjunction();
        }
        return (root, query, cb) -> {
            query.distinct(true);
            // Assumindo que a entidade Servico tem o campo 'nome'
            return root.join("servicos").get("nome").in(servicos);
        };
    }

    /**
     * Specification para verificar se o restaurante abre em um determinado dia da semana.
     * ATUALIZADO: Valida o 'dia' (String) contra o Enum 'DiaDaSemana' 
     * e compara String com String (do banco).
     */
    public static Specification<Restaurante> comDiaSemanaDisponivel(String dia) {
        if (dia == null || dia.isBlank()) {
            return (root, query, cb) -> cb.conjunction();
        }
        
        String diaUpper = dia.toUpperCase(Locale.ROOT);
        
        try {
            // Passo 1: Validar se a String é um dia válido (ex: "SEGUNDA", "TERCA")
            // Usamos o *seu* Enum 'DiaDaSemana' para isso.
            DiaDaSemana.valueOf(diaUpper); //
            
        } catch (IllegalArgumentException e) {
            // Se o front mandar "undefined" ou "flaseiujgbhwer...", ele falha aqui
            //
            System.err.println("Filtro de dia da semana inválido, ignorando: " + dia);
            return (root, query, cb) -> cb.conjunction(); // Ignora o filtro
        }
        
        // Passo 2: Se for válido, comparar a String validada com a String do banco
        return (root, query, cb) -> {
            Join<Restaurante, HorarioFuncionamento> horariosJoin = root.join("horariosFuncionamento");
            
            // ANTES (errado): return cb.equal(horariosJoin.get("diaSemana"), diaDaSemanaEnum);
            // DEPOIS (correto): Compara String (do banco) com String (do input validado)
            return cb.equal(horariosJoin.get("diaSemana"), diaUpper);
        };
    }
}