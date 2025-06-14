package TavolaSoftware.TavolaApp.REST.service;

import TavolaSoftware.TavolaApp.REST.dto.ClienteHomeResponse; // <<< NOVO IMPORT
import TavolaSoftware.TavolaApp.REST.dto.RestauranteRequest;
import TavolaSoftware.TavolaApp.REST.dto.RestauranteResponse;
import TavolaSoftware.TavolaApp.REST.model.Cardapio;
import TavolaSoftware.TavolaApp.REST.model.Restaurante;
import TavolaSoftware.TavolaApp.REST.model.Servico;
import TavolaSoftware.TavolaApp.REST.model.Tags;
import TavolaSoftware.TavolaApp.REST.model.Usuario;
import TavolaSoftware.TavolaApp.REST.repository.ClienteRepository;
import TavolaSoftware.TavolaApp.REST.repository.RestauranteRepository;
import TavolaSoftware.TavolaApp.REST.repository.ServicoRepository;
import TavolaSoftware.TavolaApp.REST.repository.UsuarioRepository;
import TavolaSoftware.TavolaApp.tools.RestauranteComScore;
import TavolaSoftware.TavolaApp.tools.TipoUsuario;
import TavolaSoftware.TavolaApp.tools.UploadUtils;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageImpl;
import org.springframework.data.domain.Pageable;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.io.IOException;
import java.math.BigDecimal;
import java.math.RoundingMode;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.Collections;
import java.util.Comparator;
import java.util.HashSet;
import java.util.List;
import java.util.Map;
import java.util.Optional;
import java.util.Set;
import java.util.UUID;
import java.util.stream.Collectors;

@Service
public class RestauranteService {

    @Autowired
    private RestauranteRepository repoRestaurante;

    @Autowired
    private UsuarioRepository repoUsuario;
    
    @Autowired
    private ServicoRepository repoServico;

    @Autowired
    private UploadUtils uplUtil;

    @Autowired
    private BCryptPasswordEncoder encoder;
    
    @Autowired
    private RecomendacaoService recomendacaoService;
    
    @Autowired
    private ClienteRepository clienteRepository;

    
    
    
    // === CONSTANTES PARA A PESQUISA POR RELEVÂNCIA ===
    private static final double MEDIA_GERAL_AVALIACAO_APP = 3.5;
    private static final int C_CONFIANCA = 10;
    private static final double PESO_FTS_BASE = 0.45;
    private static final double PESO_SERVICOS = 0.10;
    private static final double PESO_CARDAPIO = 0.20;
    private static final double PESO_TAGS = 0.10;
    private static final double PESO_QUALIDADE = 0.15;

    /**
     * Realiza uma busca completa por restaurantes, ordenando por relevância.
     * @param termoOriginal O termo de busca inserido pelo usuário.
     * @param pageable Objeto de paginação.
     * @return Uma página de ClienteHomeResponse ordenada por relevância.
     */
    @Transactional(readOnly = true)
    // >>> ALTERAÇÃO 1: O tipo de retorno agora é Page<ClienteHomeResponse> <<<
    public Page<ClienteHomeResponse> pesquisarRestaurantesPorRelevancia(String termoOriginal, Pageable pageable) {
        
        String termoFts = Arrays.stream(termoOriginal.trim().toLowerCase().split("\\s+"))
                                .filter(palavra -> palavra.length() > 1) 
                                .collect(Collectors.joining(" | "));

        Page<Object[]> resultadosFtsBase = repoRestaurante.searchRestaurantesByFtsBase(termoFts, pageable);

        if (resultadosFtsBase.isEmpty()) {
            return Page.empty(pageable);
        }

        Map<UUID, Double> ftsBaseScoresMap = resultadosFtsBase.getContent().stream()
            .collect(Collectors.toMap(
                result -> UUID.fromString(result[0].toString()),
                result -> result[1] != null ? ((Number) result[1]).doubleValue() : 0.0
            ));
        
        List<UUID> restauranteIds = new ArrayList<>(ftsBaseScoresMap.keySet());
        Map<UUID, Restaurante> restauranteMap = repoRestaurante.findAllById(restauranteIds).stream().collect(Collectors.toMap(Restaurante::getId, r -> r));
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
            double scoreQualidadeNormalizado = scoreQualidade / 5.0;

            double finalScore = (PESO_FTS_BASE * ftsScoreBase) +
                                (PESO_SERVICOS * boostServicos) +
                                (PESO_CARDAPIO * boostCardapio) +
                                (PESO_TAGS * boostTags) +
                                (PESO_QUALIDADE * scoreQualidadeNormalizado);
            
            return new RestauranteComScore(r, finalScore);
        }).collect(Collectors.toList());

        restaurantesComScore.sort(Comparator.comparingDouble(RestauranteComScore::getFinalScore).reversed());

        // >>> ALTERAÇÃO 2: Convertendo a lista de restaurantes para uma lista de ClienteHomeResponse. <<<
        // Usamos o construtor de ClienteHomeResponse que aceita um Restaurante.
        List<ClienteHomeResponse> responses = restaurantesComScore.stream()
                .map(rsc -> new ClienteHomeResponse(rsc.getRestaurante()))
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
    
    /**
     * Busca restaurantes filtrando pela cidade.
     * @param cidade O nome da cidade.
     * @return Uma lista de ClienteHomeResponse.
     */
    @Transactional(readOnly = true)
    // >>> ALTERAÇÃO 3: O tipo de retorno agora é List<ClienteHomeResponse> <<<
    public List<ClienteHomeResponse> findByCidade(String cidade) {
        if (cidade == null || cidade.trim().isEmpty()) {
            return new ArrayList<>();
        }

        List<Restaurante> restaurantes = repoRestaurante.findByUsuarioEnderecoCidadeIgnoreCase(cidade.trim());
        
        // >>> ALTERAÇÃO 4: Convertendo a lista de Restaurante para ClienteHomeResponse. <<<
        // A lógica complexa anterior foi removida, pois o ClienteHomeResponse é mais simples.
        return restaurantes.stream()
            .map(ClienteHomeResponse::new) // Usando referência do construtor para um código mais limpo
            .collect(Collectors.toList());
    }
    
    private double calcularValorMedioPorPessoa(Restaurante restaurante) {
        if (restaurante.getCardapio() == null || restaurante.getCardapio().isEmpty()) {
            return 0.0;
        }

        Map<String, List<Cardapio>> cardapioPorCategoria = restaurante.getCardapio().stream()
                .filter(item -> item.getCategoria() != null && item.getPreco() != 0.0 && item.getPreco() > 0.0)
                .collect(Collectors.groupingBy(item -> item.getCategoria().getNome()));

        double valorTotalDasMedias = cardapioPorCategoria.values().stream()
                .mapToDouble(itensDaCategoria -> 
                    itensDaCategoria.stream()
                                    .mapToDouble(Cardapio::getPreco)
                                    .average()
                                    .orElse(0.0)
                )
                .sum();
        
        return BigDecimal.valueOf(valorTotalDasMedias).setScale(2, RoundingMode.HALF_UP).doubleValue();
    }
    
    private List<UUID> getFavoritosDoClienteLogado() {
        try {
            String emailUsuarioLogado = (String) SecurityContextHolder.getContext().getAuthentication().getPrincipal();
            Usuario usuario = repoUsuario.findByEmail(emailUsuarioLogado);
            if (usuario != null && usuario.getTipo() == TipoUsuario.CLIENTE) {
                return clienteRepository.findById(usuario.getId())
                                        .map(cliente -> cliente.getFavoritos())
                                        .orElse(Collections.emptyList());
            }
        } catch (Exception e) {
            // Ignora
        }
        return Collections.emptyList();
    }

    // Os métodos abaixo (findAll, findById, save, update, delete) permanecem sem alterações
    // pois eles são usados em outros contextos (gestão do restaurante, detalhes, etc.)
    // e devem continuar retornando o DTO completo (RestauranteResponse).

    public List<RestauranteResponse> findAll() {
        List<Restaurante> restaurantes = repoRestaurante.findAll();
        
        try {
            String emailUsuarioLogado = (String) SecurityContextHolder.getContext().getAuthentication().getPrincipal();
            Usuario usuario = repoUsuario.findByEmail(emailUsuarioLogado);
            if (usuario != null && usuario.getTipo() == TipoUsuario.CLIENTE) {
                restaurantes = recomendacaoService.ordenarRestaurantesPorRecomendacao(restaurantes, usuario.getId());
            }
        } catch (Exception e) {
            System.err.println("Não foi possível ordenar por recomendação (usuário não é cliente ou não está logado): " + e.getMessage());
        }
        
        List<UUID> favoritosDoCliente = getFavoritosDoClienteLogado();

        return restaurantes.stream().map(restaurante -> {
            RestauranteResponse responseDto = new RestauranteResponse(restaurante);

            responseDto.setFavorito(favoritosDoCliente.contains(restaurante.getId()));
            responseDto.setValorMedioPorPessoa(calcularValorMedioPorPessoa(restaurante));

            List<String> principalImageOnly = new ArrayList<>();
            List<String> imagensDoRestaurante = restaurante.getImagens();

            if (imagensDoRestaurante != null && !imagensDoRestaurante.isEmpty()) {
                principalImageOnly.add(imagensDoRestaurante.get(0));
            }
            responseDto.setImagens(principalImageOnly);

            return responseDto;
        }).collect(Collectors.toList());
    }

    public Optional<RestauranteResponse> findById(UUID id) {
        Optional<Restaurante> restauranteOpt = repoRestaurante.findById(id);

        if (restauranteOpt.isEmpty()) {
            return Optional.empty();
        }
        
        Restaurante restaurante = restauranteOpt.get();
        List<UUID> favoritosDoCliente = getFavoritosDoClienteLogado();
        RestauranteResponse responseDto = new RestauranteResponse(restaurante);
        responseDto.setFavorito(favoritosDoCliente.contains(restaurante.getId()));
        responseDto.setValorMedioPorPessoa(calcularValorMedioPorPessoa(restaurante));

        return Optional.of(responseDto);
    }
    
    @Transactional
    public Restaurante saveFromRequest(RestauranteRequest request) {
        if (repoUsuario.findByEmail(request.getEmailUsuario()) != null) {
            throw new RuntimeException("Email já está em uso.");
        }

        Usuario usuario = new Usuario();
        usuario.setNome(request.getNomeUsuario()); 
        usuario.setEmail(request.getEmailUsuario()); 
        usuario.setSenha(encoder.encode(request.getSenhaUsuario())); 
        usuario.setEndereco(request.getEnderecoUsuario()); 
        usuario.setTipo(TipoUsuario.RESTAURANTE);
        if (request.getTelefoneUsuario() != null && !request.getTelefoneUsuario().isBlank()) {
            usuario.setTelefone(request.getTelefoneUsuario());
        }
        Usuario usuarioSalvo = repoUsuario.save(usuario);

        Restaurante restaurante = new Restaurante();
        restaurante.setUsuario(usuarioSalvo);
        
        if (request.getDescricao() != null && !request.getDescricao().isBlank()) {
            restaurante.setDescricao(request.getDescricao());
        }
        
        if (request.getTipoCozinha() != null && !request.getTipoCozinha().isBlank()) {
            restaurante.setTipoCozinha(request.getTipoCozinha());
        } else {
            restaurante.setTipoCozinha(null);
        }
        
        if (request.getHorariosFuncionamento() != null) {
            restaurante.setHorariosFuncionamento(request.getHorariosFuncionamento()); 
        }
        
        if (request.getNomesServicos() != null && !request.getNomesServicos().isEmpty()) { 
            Set<Servico> servicosParaAssociar = new HashSet<>();
            for (String nomeServico : request.getNomesServicos()) { 
                Servico serv = repoServico.findByNome(nomeServico)
                                .orElseGet(() -> repoServico.save(new Servico(nomeServico, "")));
                servicosParaAssociar.add(serv);
            }
            restaurante.setServicos(servicosParaAssociar); 
        }

        if (request.getImagens() != null && !request.getImagens().isEmpty()) { 
            try {
                List<String> caminhosImagens = uplUtil.processRestauranteImagens(request.getImagens(), usuarioSalvo.getId());
                restaurante.setImagens(caminhosImagens);
            } catch (IOException e) {
                throw new RuntimeException("Erro ao processar imagens do restaurante: " + e.getMessage(), e);
            }
        }
        
        return repoRestaurante.save(restaurante);
    }
    
    @Transactional
    public Restaurante updateFromRequest(UUID id, RestauranteRequest request) {
        Restaurante restauranteExistente = repoRestaurante.findById(id)
            .orElseThrow(() -> new RuntimeException("Restaurante não encontrado com ID: " + id));

        Usuario usuarioAssociado = restauranteExistente.getUsuario(); 

        if (request.getNomeUsuario() != null && !request.getNomeUsuario().isBlank()) { 
            usuarioAssociado.setNome(request.getNomeUsuario()); 
        }
        if (request.getSenhaUsuario() != null && !request.getSenhaUsuario().isBlank()) { 
            usuarioAssociado.setSenha(encoder.encode(request.getSenhaUsuario())); 
        }
        if (request.getEnderecoUsuario() != null) { 
            usuarioAssociado.setEndereco(request.getEnderecoUsuario()); 
        }
        if (request.getTelefoneUsuario() != null && !request.getTelefoneUsuario().isBlank()) {
            usuarioAssociado.setTelefone(request.getTelefoneUsuario());
        }
        repoUsuario.save(usuarioAssociado);

        if (request.getTipoCozinha() != null && !request.getTipoCozinha().isBlank()) { 
            restauranteExistente.setTipoCozinha(request.getTipoCozinha()); 
        }
        if (request.getDescricao() != null && !request.getDescricao().isBlank()) {
            restauranteExistente.setDescricao(request.getDescricao());
        }
        if (request.getHorariosFuncionamento() != null) { 
            restauranteExistente.setHorariosFuncionamento(request.getHorariosFuncionamento()); 
        }
        if (request.getNomesServicos() != null) { 
            Set<Servico> servicosAtualizados = new HashSet<>();
            if (!request.getNomesServicos().isEmpty()) { 
                for (String nomeServico : request.getNomesServicos()) { 
                    Servico serv = repoServico.findByNome(nomeServico)
                                    .orElseGet(() -> repoServico.save(new Servico(nomeServico, "")));
                    servicosAtualizados.add(serv);
                }
            }
            restauranteExistente.setServicos(servicosAtualizados); 
        }

        if (request.getImagens() != null && !request.getImagens().isEmpty()) { 
            try {
                List<String> caminhosImagens = uplUtil.processRestauranteImagens(request.getImagens(), restauranteExistente.getId());
                restauranteExistente.setImagens(caminhosImagens);
            } catch (IOException e) {
                throw new RuntimeException("Erro ao processar imagens do restaurante durante atualização: " + e.getMessage(), e);
            }
        }
        
        return repoRestaurante.save(restauranteExistente);
    }

    @Transactional
    public void deleteById(UUID id) {
        if (repoRestaurante.existsById(id)) {
            repoRestaurante.deleteById(id);
            
            String pastaImagens = "upl/restaurantes/" + id.toString();
            uplUtil.deletarPasta(pastaImagens);
            
        } else {
            throw new RuntimeException("Restaurante não encontrado para deleção com ID: " + id);
        }
    }
    
    public Restaurante getByEmail(String email) {
        Usuario usuario = repoUsuario.findByEmail(email);
        if (usuario == null) {
            throw new RuntimeException("Usuário não encontrado: " + email);
        }
        return repoRestaurante.findByUsuario(usuario)
            .orElseThrow(() -> new RuntimeException("Restaurante não encontrado para o usuário: " + email));
    }
}