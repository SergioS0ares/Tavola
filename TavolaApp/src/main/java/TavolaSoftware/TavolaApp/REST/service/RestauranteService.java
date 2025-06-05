package TavolaSoftware.TavolaApp.REST.service;

import TavolaSoftware.TavolaApp.REST.model.Restaurante;
import TavolaSoftware.TavolaApp.REST.model.Usuario;
import TavolaSoftware.TavolaApp.REST.model.Servico;
import TavolaSoftware.TavolaApp.REST.model.Cardapio; // <<< NOVO IMPORT
import TavolaSoftware.TavolaApp.REST.model.Tags;     // <<< NOVO IMPORT
import TavolaSoftware.TavolaApp.REST.repository.RestauranteRepository;
import TavolaSoftware.TavolaApp.REST.repository.UsuarioRepository;
import TavolaSoftware.TavolaApp.REST.repository.ServicoRepository;
import TavolaSoftware.TavolaApp.REST.dto.RestauranteRequest;
import TavolaSoftware.TavolaApp.REST.dto.RestauranteResponse;
import TavolaSoftware.TavolaApp.tools.TipoUsuario;
import TavolaSoftware.TavolaApp.tools.UploadUtils;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;        // <<< NOVO IMPORT
import org.springframework.data.domain.PageImpl;    // <<< NOVO IMPORT
import org.springframework.data.domain.Pageable;    // <<< NOVO IMPORT
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.io.IOException;
import java.math.BigDecimal; // <<< NOVO IMPORT
import java.math.RoundingMode; // <<< NOVO IMPORT
import java.util.ArrayList;
import java.util.Arrays;      // <<< NOVO IMPORT
import java.util.Collections; // <<< NOVO IMPORT
import java.util.Comparator;  // <<< NOVO IMPORT
import java.util.HashSet;
import java.util.List;
import java.util.Map;         // <<< NOVO IMPORT
import java.util.Optional;
import java.util.Set;
import java.util.UUID;
import java.util.stream.Collectors;

@Service
public class RestauranteService {

    @Autowired
    private RestauranteRepository repoRestaurante; //

    @Autowired
    private UsuarioRepository repoUsuario; //
    
    @Autowired
    private ServicoRepository repoServico; //

    @Autowired
    private UploadUtils uplUtil; //

    @Autowired
    private BCryptPasswordEncoder encoder; //
    
    
    

    // Constantes para o cálculo de score de qualidade (ajuste conforme necessário)
    private static final double MEDIA_GERAL_AVALIACAO_APP = 3.5; // Exemplo: Média geral de avaliação no app
    private static final int C_CONFIANCA = 10; // Exemplo: Constante de confiança para média ponderada

    // Pesos para combinar os scores (ajuste conforme a importância de cada fator)
    private static final double PESO_FTS_BASE = 0.45; // Peso para nome e tipo de cozinha
    private static final double PESO_SERVICOS = 0.10;
    private static final double PESO_CARDAPIO = 0.15; // Nome dos pratos
    private static final double PESO_TAGS = 0.10;     // Tags dos pratos
    private static final double PESO_QUALIDADE = 0.20; // Avaliação e popularidade

    @Transactional(readOnly = true)
    public Page<RestauranteResponse> pesquisarRestaurantesPorRelevancia(String termoOriginal, Pageable pageable) {
        Page<Object[]> resultadosFtsBase = repoRestaurante.searchRestaurantesByFtsBase(termoOriginal.trim(), pageable);

        if (resultadosFtsBase.isEmpty()) {
            return Page.empty(pageable);
        }

        Map<UUID, Double> ftsBaseScoresMap = resultadosFtsBase.getContent().stream()
            .collect(Collectors.toMap(
                result -> UUID.fromString(result[0].toString()), // restaurante_id
                result -> result[1] != null ? ((Number) result[1]).doubleValue() : 0.0 // fts_score_base
            ));
        
        List<UUID> restauranteIds = new ArrayList<>(ftsBaseScoresMap.keySet());
        // Busca as entidades Restaurante. A anotação @Transactional garante que as coleções LAZY possam ser acessadas.
        List<Restaurante> restaurantes = repoRestaurante.findAllById(restauranteIds);

        // Para manter a ordem original do FTS se findAllById não garantir (opcional, mas bom para consistência inicial)
        // Crie um mapa de restaurantes por ID para fácil acesso e depois monte a lista na ordem de restauranteIds.
        Map<UUID, Restaurante> restauranteMap = restaurantes.stream().collect(Collectors.toMap(Restaurante::getId, r -> r));
        List<Restaurante> restaurantesOrdenadosPeloFts = restauranteIds.stream()
                                                                    .map(restauranteMap::get)
                                                                    .filter(java.util.Objects::nonNull)
                                                                    .collect(Collectors.toList());


        List<String> palavrasDoTermo = Arrays.asList(termoOriginal.trim().toLowerCase().split("\\s+"));

        List<RestauranteComScore> restaurantesComScore = restaurantesOrdenadosPeloFts.stream().map(r -> {
            double ftsScoreBase = ftsBaseScoresMap.getOrDefault(r.getId(), 0.0);
            
            double boostServicos = calcularBoostServicos(r, palavrasDoTermo);
            double boostCardapio = calcularBoostCardapio(r, palavrasDoTermo);
            double boostTags = calcularBoostTags(r, palavrasDoTermo);
            double scoreQualidade = calcularScoreQualidade(r);
            
            // Normalização (exemplos simples, ajuste conforme necessário)
            // FTS ts_rank_cd já retorna um valor normalizado (0 a 1)
            double ftsScoreNormalizado = ftsScoreBase; 
            // Boosts aqui são 0 ou 1. Se fossem contagens, precisariam de normalização (ex: contagem / num_palavras_termo)
            // Score de qualidade (0-5) normalizado para 0-1.
            double scoreQualidadeNormalizado = scoreQualidade / 5.0;

            double finalScore = (PESO_FTS_BASE * ftsScoreNormalizado) +
                                (PESO_SERVICOS * boostServicos) +
                                (PESO_CARDAPIO * boostCardapio) +
                                (PESO_TAGS * boostTags) +
                                (PESO_QUALIDADE * scoreQualidadeNormalizado);
            
            return new RestauranteComScore(r, finalScore);
        }).collect(Collectors.toList());

        restaurantesComScore.sort(Comparator.comparingDouble(RestauranteComScore::getFinalScore).reversed());

        List<RestauranteResponse> responses = restaurantesComScore.stream()
                                                .map(rsc -> {
                                                    // Reutiliza a lógica do seu findAll() para a imagem principal
                                                    RestauranteResponse responseDto = new RestauranteResponse(rsc.getRestaurante());
                                                    List<String> principalImageOnly = new ArrayList<>();
                                                    List<String> imagensDoRestaurante = rsc.getRestaurante().getImagem();
                                                    if (imagensDoRestaurante != null && !imagensDoRestaurante.isEmpty()) {
                                                        principalImageOnly.add(imagensDoRestaurante.get(0));
                                                    }
                                                    responseDto.setImagens(principalImageOnly);
                                                    // Você pode querer adicionar o score final ao DTO de resposta se for útil para o frontend/debug
                                                    // responseDto.setScoreRelevancia(rsc.getFinalScore()); // Exigiria adicionar campo ao DTO
                                                    return responseDto;
                                                })
                                                .collect(Collectors.toList());
        
        return new PageImpl<>(responses, pageable, resultadosFtsBase.getTotalElements());
    }

    private double calcularBoostServicos(Restaurante r, List<String> palavrasDoTermo) {
        if (r.getServicos() == null || r.getServicos().isEmpty() || palavrasDoTermo.isEmpty()) return 0.0;
        for (Servico servico : r.getServicos()) {
            for (String palavra : palavrasDoTermo) {
                if (servico.getNome() != null && servico.getNome().toLowerCase().contains(palavra)) {
                    return 1.0; 
                }
            }
        }
        return 0.0;
    }

    private double calcularBoostCardapio(Restaurante r, List<String> palavrasDoTermo) {
        if (r.getCardapio() == null || r.getCardapio().isEmpty() || palavrasDoTermo.isEmpty()) return 0.0;
        for (Cardapio item : r.getCardapio()) {
            for (String palavra : palavrasDoTermo) {
                if (item.getNome() != null && item.getNome().toLowerCase().contains(palavra)) {
                    return 1.0;
                }
            }
        }
        return 0.0;
    }

    private double calcularBoostTags(Restaurante r, List<String> palavrasDoTermo) {
        if (r.getCardapio() == null || r.getCardapio().isEmpty() || palavrasDoTermo.isEmpty()) return 0.0;
        for (Cardapio item : r.getCardapio()) {
            if (item.getTags() != null && !item.getTags().isEmpty()) {
                for (Tags tag : item.getTags()) {
                    for (String palavra : palavrasDoTermo) {
                        if (tag.getTag() != null && tag.getTag().toLowerCase().contains(palavra)) {
                            return 1.0; 
                        }
                    }
                }
            }
        }
        return 0.0;
    }

    private double calcularScoreQualidade(Restaurante restaurante) {
        int totalAvaliacoes = restaurante.getTotalDeAvaliacoes();
        double mediaAvaliacao = restaurante.getMediaAvaliacao();
        if (totalAvaliacoes == 0) return MEDIA_GERAL_AVALIACAO_APP; 
        if (totalAvaliacoes >= 100) return mediaAvaliacao;
        double scorePonderado = ((MEDIA_GERAL_AVALIACAO_APP * C_CONFIANCA) + (mediaAvaliacao * totalAvaliacoes))
                                / (C_CONFIANCA + totalAvaliacoes);
        return BigDecimal.valueOf(scorePonderado).setScale(2, RoundingMode.HALF_UP).doubleValue();
    }

    // Classe interna auxiliar
    private static class RestauranteComScore {
        private Restaurante restaurante;
        private double finalScore;
        public RestauranteComScore(Restaurante restaurante, double finalScore) {
            this.restaurante = restaurante; this.finalScore = finalScore;
        }
        public Restaurante getRestaurante() { return restaurante; }
        public double getFinalScore() { return finalScore; }
    }

    
    
    
    // === Seus Métodos Existentes (mantidos como no seu arquivo) ===
    public List<RestauranteResponse> findAll() { //
        List<Restaurante> restaurantes = repoRestaurante.findAll(); //
        return restaurantes.stream()
            .map(restaurante -> {
                RestauranteResponse responseDto = new RestauranteResponse(restaurante); //
                List<String> principalImageOnly = new ArrayList<>(); //
                List<String> imagensDoRestaurante = restaurante.getImagem(); //
                
                if (imagensDoRestaurante != null && !imagensDoRestaurante.isEmpty()) { //
                    principalImageOnly.add(imagensDoRestaurante.get(0)); //
                }
                responseDto.setImagens(principalImageOnly); //
                
                return responseDto;
            })
            .collect(Collectors.toList());
    }

    public Optional<RestauranteResponse> findById(UUID id) {  //
        return repoRestaurante.findById(id).map(RestauranteResponse::new); //
    }

    @Transactional
    public Restaurante saveFromRequest(RestauranteRequest request) { //
        Usuario usuario = new Usuario(); //
        usuario.setNome(request.getNomeUsuario());  //
        usuario.setEmail(request.getEmailUsuario());  //
        usuario.setSenha(encoder.encode(request.getSenhaUsuario()));  //
        usuario.setEndereco(request.getEnderecoUsuario());  //
        usuario.setTipo(TipoUsuario.RESTAURANTE); //
        Usuario usuarioSalvo = repoUsuario.save(usuario); //

        Restaurante restaurante = new Restaurante(); //
        restaurante.setUsuario(usuarioSalvo); //
        restaurante.setTipoCozinha(request.getTipoCozinha());  //
        
        if (request.getHorariosFuncionamento() != null) { //
            restaurante.setHoraFuncionamento(request.getHorariosFuncionamento());  //
        }
        
        if (request.getNomesServicos() != null && !request.getNomesServicos().isEmpty()) {  //
            Set<Servico> servicosParaAssociar = new HashSet<>(); //
            for (String nomeServico : request.getNomesServicos()) {  //
                Servico serv = repoServico.findByNome(nomeServico) //
                                .orElseGet(() -> repoServico.save(new Servico(nomeServico, ""))); //
                servicosParaAssociar.add(serv); //
            }
            restaurante.setServicos(servicosParaAssociar);  //
        }

        if (request.getImagens() != null && !request.getImagens().isEmpty()) {  //
            try {
                List<String> caminhosImagens = uplUtil.processRestauranteImagens(request.getImagens(), usuarioSalvo.getId()); //
                restaurante.setImagem(caminhosImagens); //
            } catch (IOException e) { //
                throw new RuntimeException("Erro ao processar imagens do restaurante: " + e.getMessage(), e); //
            }
        }
        
        return repoRestaurante.save(restaurante); //
    }
    
    @Transactional
    public Restaurante save(Restaurante restaurante) { //
        return repoRestaurante.save(restaurante); //
    }

    @Transactional
    public Restaurante updateFromRequest(UUID id, RestauranteRequest request) { //
        Restaurante restauranteExistente = repoRestaurante.findById(id) //
            .orElseThrow(() -> new RuntimeException("Restaurante não encontrado com ID: " + id)); //

        Usuario usuarioAssociado = restauranteExistente.getUsuario();  //

        if (request.getNomeUsuario() != null && !request.getNomeUsuario().isBlank()) {  //
            usuarioAssociado.setNome(request.getNomeUsuario());  //
        }
        // ... (resto da lógica de update como no seu arquivo original)
        if (request.getEmailUsuario() != null && !request.getEmailUsuario().isBlank()) {  //
            usuarioAssociado.setEmail(request.getEmailUsuario());  //
        }
        if (request.getSenhaUsuario() != null && !request.getSenhaUsuario().isBlank()) {  //
            usuarioAssociado.setSenha(encoder.encode(request.getSenhaUsuario()));  //
        }
        if (request.getEnderecoUsuario() != null) {  //
            usuarioAssociado.setEndereco(request.getEnderecoUsuario());  //
        }
        repoUsuario.save(usuarioAssociado); //

        if (request.getTipoCozinha() != null && !request.getTipoCozinha().isBlank()) {  //
            restauranteExistente.setTipoCozinha(request.getTipoCozinha());  //
        }
        if (request.getHorariosFuncionamento() != null) {  //
            restauranteExistente.setHoraFuncionamento(request.getHorariosFuncionamento());  //
        }

        if (request.getNomesServicos() != null) {  //
            Set<Servico> servicosAtualizados = new HashSet<>(); //
            if (!request.getNomesServicos().isEmpty()) {  //
                for (String nomeServico : request.getNomesServicos()) {  //
                    Servico serv = repoServico.findByNome(nomeServico) //
                                    .orElseGet(() -> repoServico.save(new Servico(nomeServico, ""))); //
                    servicosAtualizados.add(serv); //
                }
            }
            restauranteExistente.setServicos(servicosAtualizados);  //
        }

        if (request.getImagens() != null && !request.getImagens().isEmpty()) {  //
            try {
                List<String> caminhosImagens = uplUtil.processRestauranteImagens(request.getImagens(), restauranteExistente.getId()); //
                restauranteExistente.setImagem(caminhosImagens); //
            } catch (IOException e) { //
                throw new RuntimeException("Erro ao processar imagens do restaurante durante atualização: " + e.getMessage(), e); //
            }
        }
        
        return repoRestaurante.save(restauranteExistente); //
    }

    @Transactional
    public void deleteById(UUID id) { //
        Optional<Restaurante> restauranteOpt = repoRestaurante.findById(id); //
        if (restauranteOpt.isPresent()) { //
            Restaurante restaurante = restauranteOpt.get(); //
            repoRestaurante.delete(restaurante); //
        } else { //
            throw new RuntimeException("Restaurante não encontrado para deleção com ID: " + id); //
        }
    }
    
    public Restaurante getByEmail(String email) { //
        Usuario usuario = repoUsuario.findByEmail(email); //
        if (usuario == null) { //
            throw new RuntimeException("Usuário não encontrado: " + email); //
        }
        return repoRestaurante.findByUsuario(usuario) //
            .orElseThrow(() -> new RuntimeException("Restaurante não encontrado para o usuário: " + email)); //
    }
}