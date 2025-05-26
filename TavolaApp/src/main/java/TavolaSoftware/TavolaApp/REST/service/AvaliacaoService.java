package TavolaSoftware.TavolaApp.REST.service;

import java.util.List;
import java.util.Optional;
import java.util.UUID;
import java.util.stream.Collectors; // Importar Collectors

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional; // Importar Transactional

import TavolaSoftware.TavolaApp.REST.model.Avaliacao;
import TavolaSoftware.TavolaApp.REST.model.Cliente;
import TavolaSoftware.TavolaApp.REST.model.Restaurante;
import TavolaSoftware.TavolaApp.REST.repository.AvaliacaoRepository;
import TavolaSoftware.TavolaApp.REST.repository.RestauranteRepository;
import TavolaSoftware.TavolaApp.REST.repository.ClienteRepository; // Importar ClienteRepository

@Service
public class AvaliacaoService {

    @Autowired
    private RestauranteService restauranteService; // Renomeado para clareza
    
    @Autowired
    private ClienteService clienteService; // Injetar ClienteService

    @Autowired
    private AvaliacaoRepository repo; // O repositório de Avaliacao

    @Autowired
    private RestauranteRepository restauranteRepo; // Injetar RestauranteRepository para save

    @Transactional // Garante que a operação seja atômica
    public double calcularMedia(UUID restauranteId) {
        /*
         * Esse será o método que irá calcular a média de todas as avaliações feitas no restaurante com a id entregada pelo parametro, para isso ele irá
         * puxar todas as avaliações que contenham aquela id de restaurante do AvaliacaoRepository, e com elas calcular a média aritimética e salvar esse valor
         * na variável dedicada a isso na entidade de restaurante através da RestauranteService.
         */
        List<Avaliacao> avaliacoes = repo.findByRestauranteId(restauranteId);

        if (avaliacoes.isEmpty()) {
            return 0.0; // Se não houver avaliações, a média é 0
        }

        double somaScores = avaliacoes.stream()
                                     .mapToDouble(Avaliacao::getScore)
                                     .sum();

        double media = somaScores / avaliacoes.size();

        // Salvar a média no restaurante
        Optional<Restaurante> restauranteOptional = restauranteService.findById(restauranteId);
        if (restauranteOptional.isPresent()) {
            Restaurante restaurante = restauranteOptional.get();
            restaurante.setMediaAvaliacao(media);
            restauranteRepo.save(restaurante); // Salva o restaurante com a nova média
        } else {
            throw new IllegalArgumentException("Restaurante com ID " + restauranteId + " não encontrado.");
        }
        return media;
    }

    @Transactional // Garante que a operação seja atômica
    public Avaliacao avaliarRestaurante(double score, String comentario, UUID restauranteId, String emailCliente) {
        /*
         * Esse será o método que irá registrar ou alterar uma linha na tabela de avaliações, caso não haja uma linha com a Id do cliente, uma nova deve ser
         * criada, a id do cliente será retirada pelo Security do spring com contextholder.getprincipal como vc pode ver pelo findByEmail no ClienteService,
         * é assim que eu identifico quem é o cliente que está fazendo a avaliação.
         * score, óbviamente é o valor da avaliação feita pelo cliente, para o restaurante que contenha a id entregue.
         * esse método será entregue em uma requisição POST, ela deve servir tanto para criar uma...
         */

        // 1. Validar e formatar o score
        int scoreFinal = formatarScore(score);

        // 2. Encontrar o cliente
        Cliente cliente = clienteService.findByEmail(emailCliente)
                                        .orElseThrow(() -> new IllegalArgumentException("Cliente não encontrado para o email: " + emailCliente));

        // 3. Encontrar o restaurante
        Restaurante restaurante = restauranteService.findById(restauranteId)
                                                 .orElseThrow(() -> new IllegalArgumentException("Restaurante com ID " + restauranteId + " não encontrado."));

        // 4. Verificar se já existe uma avaliação do cliente para este restaurante
        Optional<Avaliacao> avaliacaoExistente = repo.findByClienteAndRestaurante(cliente, restaurante);

        Avaliacao avaliacao;
        if (avaliacaoExistente.isPresent()) {
            // Se a avaliação já existe, atualiza
            avaliacao = avaliacaoExistente.get();
            avaliacao.setScore(scoreFinal);
            avaliacao.setComentario(comentario);
        } else {
            // Se não existe, cria uma nova avaliação
            avaliacao = new Avaliacao(restaurante, cliente, scoreFinal, comentario);
        }

        // 5. Salvar a avaliação
        Avaliacao avaliacaoSalva = repo.save(avaliacao);

        // 6. Recalcular e atualizar a média do restaurante
        calcularMedia(restauranteId);

        return avaliacaoSalva;
    }

    private int formatarScore(double score) {
        // Implementa a lógica de formatação do score (dividir por 2 e arredondar para o inteiro mais próximo, arredondando para maior)
        // Ex: 8.5 -> 4.25 -> 5
        // Ex: 3.0 -> 1.5 -> 2
        // Ex: 10.0 -> 5.0 -> 5
        if (score < 0.5) return 1; // Score mínimo de 1, se vier muito baixo
        if (score > 10.0) score = 10.0; // Limitar o score máximo para 10

        double scoreDivided = score / 2.0;
        return (int) Math.round(scoreDivided); // Arredonda para o inteiro mais próximo
    }

    // Você precisará de um repositório para Avaliacao.
    // Crie uma interface AvaliacaoRepository que estenda JpaRepository.
}