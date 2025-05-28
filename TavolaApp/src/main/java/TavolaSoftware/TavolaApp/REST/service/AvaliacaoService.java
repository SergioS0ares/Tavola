package TavolaSoftware.TavolaApp.REST.service;

import java.util.List;
import java.util.Optional;
import java.util.UUID;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

// Removido o import de AvaliacaoResponse, pois não será mais usado diretamente aqui para retorno.
import TavolaSoftware.TavolaApp.REST.model.Avaliacao;
import TavolaSoftware.TavolaApp.REST.model.Cliente;
import TavolaSoftware.TavolaApp.REST.model.Restaurante;
import TavolaSoftware.TavolaApp.REST.repository.AvaliacaoRepository;
import TavolaSoftware.TavolaApp.REST.repository.RestauranteRepository;
// ClienteRepository já era importado, mantido.

@Service
public class AvaliacaoService {

    @Autowired
    private RestauranteRepository repoRestaurante; // Usaremos para buscar o restaurante

    @Autowired
    private ClienteService servCliente; 

    @Autowired
    private AvaliacaoRepository avaliacaoRepository; // Renomeado para consistência

    // Removido o autowired para RestauranteService se não for mais usado diretamente aqui para salvar média.
    // A lógica de salvar média já está no calcularMedia que usa restauranteRepository.

    @Transactional
    public double calcularMedia(UUID restauranteId) {
        List<Avaliacao> avaliacoes = avaliacaoRepository.findByRestauranteId(restauranteId);

        if (avaliacoes.isEmpty()) {
            // Atualiza a média para 0.0 se não houver avaliações
            Restaurante restaurante = repoRestaurante.findById(restauranteId)
                .orElseThrow(() -> new IllegalArgumentException("Restaurante com ID " + restauranteId + " não encontrado para calcular média."));
            restaurante.setMediaAvaliacao(0.0);
            repoRestaurante.save(restaurante);
            return 0.0;
        }

        double somaScores = avaliacoes.stream()
                                     .mapToDouble(Avaliacao::getScore)
                                     .sum();
        double media = somaScores / avaliacoes.size();
        media = Math.round(media * 10.0) / 10.0; // Arredonda para uma casa decimal

        Restaurante restaurante = repoRestaurante.findById(restauranteId)
            .orElseThrow(() -> new IllegalArgumentException("Restaurante com ID " + restauranteId + " não encontrado para salvar média."));
        restaurante.setMediaAvaliacao(media);
        repoRestaurante.save(restaurante);
        return media;
    }

    @Transactional
    public Avaliacao avaliarRestaurante(double score, String comentario, UUID restauranteId, String emailCliente) { // MUDANÇA: Retorna Avaliacao
        int scoreFinal = formatarScore(score);

        Cliente cliente = servCliente.findByEmail(emailCliente)
                                        .orElseThrow(() -> new IllegalArgumentException("Cliente não encontrado para o email: " + emailCliente));

        Restaurante restaurante = repoRestaurante.findById(restauranteId) // Busca pelo RestauranteRepository
                                                 .orElseThrow(() -> new IllegalArgumentException("Restaurante com ID " + restauranteId + " não encontrado."));

        Optional<Avaliacao> avaliacaoExistente = avaliacaoRepository.findByClienteAndRestaurante(cliente, restaurante);

        Avaliacao avaliacao;
        if (avaliacaoExistente.isPresent()) {
            avaliacao = avaliacaoExistente.get();
            avaliacao.setScore(scoreFinal);
            avaliacao.setComentario(comentario);
        } else {
            avaliacao = new Avaliacao(restaurante, cliente, scoreFinal, comentario);
        }

        Avaliacao avaliacaoSalva = avaliacaoRepository.save(avaliacao);
        
        calcularMedia(restauranteId); // Recalcula e salva a média
        
        return avaliacaoSalva; // MUDANÇA: Retorna a entidade Avaliacao salva
    }

    private int formatarScore(double score) {
        if (score < 0.5) return 1; 
        if (score > 10.0) score = 10.0; 
        double scoreDivided = score / 2.0;
        return (int) Math.round(scoreDivided); 
    }
}
