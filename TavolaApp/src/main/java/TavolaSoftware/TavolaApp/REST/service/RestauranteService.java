package TavolaSoftware.TavolaApp.REST.service;

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
    
 // <<< INJETAR O NOVO SERVIÇO DE RECOMENDAÇÃO >>>
    @Autowired
    private RecomendacaoService recomendacaoService;
    
    // <<< INJETAR O REPOSITÓRIO DE CLIENTE >>>
    @Autowired
    private ClienteRepository clienteRepository;

    
    
    
    // === CONSTANTES PARA A PESQUISA POR RELEVÂNCIA ===
    // Ajuste estes valores para calibrar a relevância da sua busca
    private static final double MEDIA_GERAL_AVALIACAO_APP = 3.5;
    private static final int C_CONFIANCA = 10;
    private static final double PESO_FTS_BASE = 0.45;    // Relevância do nome e tipo de cozinha
    private static final double PESO_SERVICOS = 0.10;    // Relevância dos serviços oferecidos
    private static final double PESO_CARDAPIO = 0.20;    // Relevância do nome dos pratos
    private static final double PESO_TAGS = 0.10;        // Relevância das tags dos pratos
    private static final double PESO_QUALIDADE = 0.15;   // Relevância da avaliação/popularidade

    /**
     * Realiza uma busca completa por restaurantes, ordenando por relevância.
     * @param termoOriginal O termo de busca inserido pelo usuário.
     * @param pageable Objeto de paginação.
     * @return Uma página de RestauranteResponse ordenada por relevância.
     */

@Transactional(readOnly = true)
public Page<RestauranteResponse> pesquisarRestaurantesPorRelevancia(String termoOriginal, Pageable pageable) {
    
    // 1. Formata o termo de busca (seu código original, está perfeito)
    String termoFts = Arrays.stream(termoOriginal.trim().toLowerCase().split("\\s+"))
                            .filter(palavra -> palavra.length() > 1) 
                            .collect(Collectors.joining(" | "));

    // 2. Executa a busca FTS base no banco (seu código original, está perfeito)
    Page<Object[]> resultadosFtsBase = repoRestaurante.searchRestaurantesByFtsBase(termoFts, pageable);

    if (resultadosFtsBase.isEmpty()) {
        return Page.empty(pageable);
    }

    Map<UUID, Double> ftsBaseScoresMap = resultadosFtsBase.getContent().stream()
        .collect(Collectors.toMap(
            result -> UUID.fromString(result[0].toString()),
            result -> result[1] != null ? ((Number) result[1]).doubleValue() : 0.0
        ));
    
    // 3. Busca as entidades completas (seu código original, está perfeito)
    List<UUID> restauranteIds = new ArrayList<>(ftsBaseScoresMap.keySet());
    Map<UUID, Restaurante> restauranteMap = repoRestaurante.findAllById(restauranteIds).stream().collect(Collectors.toMap(Restaurante::getId, r -> r));
    List<Restaurante> restaurantesOrdenadosPeloFts = restauranteIds.stream()
                                                                .map(restauranteMap::get)
                                                                .filter(java.util.Objects::nonNull)
                                                                .collect(Collectors.toList());

    List<String> palavrasDoTermo = Arrays.asList(termoOriginal.trim().toLowerCase().split("\\s+"));

    // 4. Calcula o score final de relevância para cada restaurante (seu código original, está perfeito)
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

    // 5. Ordena a lista final pelo score de relevância (seu código original, está perfeito)
    restaurantesComScore.sort(Comparator.comparingDouble(RestauranteComScore::getFinalScore).reversed());

    // === 6. CORREÇÃO: Converte para o DTO de resposta APLICANDO A NOVA LÓGICA ===
    
    // Busca a lista de favoritos do cliente UMA VEZ para otimizar
    List<UUID> favoritosDoCliente = getFavoritosDoClienteLogado();

    List<RestauranteResponse> responses = restaurantesComScore.stream()
            .map(rsc -> {
                // Pega o restaurante do objeto com score
                Restaurante restaurante = rsc.getRestaurante();

                // Cria o DTO base
                RestauranteResponse dto = new RestauranteResponse(restaurante);

                // Define os campos dinâmicos
                dto.setFavorito(favoritosDoCliente.contains(restaurante.getId()));
                dto.setValorMedioPorPessoa(calcularValorMedioPorPessoa(restaurante));

                // Aplica a lógica de imagem única (igual ao findAll)
                List<String> principalImageOnly = new ArrayList<>();
                List<String> imagensDoRestaurante = restaurante.getImagens();
                if (imagensDoRestaurante != null && !imagensDoRestaurante.isEmpty()) {
                    principalImageOnly.add(imagensDoRestaurante.get(0));
                }
                dto.setImagens(principalImageOnly);

                return dto;
            })
            .collect(Collectors.toList());
    
    // 7. Retorna a página de resultados
    return new PageImpl<>(responses, pageable, resultadosFtsBase.getTotalElements());
}

    private double calcularBoostServicos(Restaurante r, List<String> palavrasDoTermo) {
        if (r.getServicos() == null || r.getServicos().isEmpty() || palavrasDoTermo.isEmpty()) return 0.0;
        for (Servico servico : r.getServicos()) {
            for (String palavra : palavrasDoTermo) {
                if (servico.getNome() != null && servico.getNome().toLowerCase().contains(palavra)) {
                    return 1.0; // Encontrou correspondência, retorna um boost
                }
            }
        }
        return 0.0; // Nenhuma correspondência
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
     * @return Uma lista de RestauranteResponse.
     */
    @Transactional(readOnly = true)
    public List<RestauranteResponse> findByCidade(String cidade) {
        if (cidade == null || cidade.trim().isEmpty()) {
            return new ArrayList<>();
        }

        List<Restaurante> restaurantes = repoRestaurante.findByUsuarioEnderecoCidadeIgnoreCase(cidade.trim());
        
        // <<< INÍCIO DA MELHORIA >>>
        
        // 1. Busca os favoritos do cliente logado, assim como nos outros métodos
        List<UUID> favoritosDoCliente = getFavoritosDoClienteLogado();

        // 2. Converte para DTO, agora adicionando os campos dinâmicos
        return restaurantes.stream()
            .map(restaurante -> {
                RestauranteResponse responseDto = new RestauranteResponse(restaurante);
                
                // Adiciona os campos dinâmicos para consistência
                responseDto.setFavorito(favoritosDoCliente.contains(restaurante.getId()));
                responseDto.setValorMedioPorPessoa(calcularValorMedioPorPessoa(restaurante));

                // Mantém a lógica da imagem principal
                List<String> principalImageOnly = new ArrayList<>();
                List<String> imagensDoRestaurante = restaurante.getImagens();
                if (imagensDoRestaurante != null && !imagensDoRestaurante.isEmpty()) {
                    principalImageOnly.add(imagensDoRestaurante.get(0));
                }
                responseDto.setImagens(principalImageOnly);
                
                return responseDto;
            })
            .collect(Collectors.toList());
        
        // <<< FIM DA MELHORIA >>>
    }
    
    /**
     * Calcula o valor médio por pessoa, somando o preço médio de cada categoria do cardápio.
     */
    private double calcularValorMedioPorPessoa(Restaurante restaurante) {
        if (restaurante.getCardapio() == null || restaurante.getCardapio().isEmpty()) {
            return 0.0;
        }

        // Agrupa os itens do cardápio por categoria
        Map<String, List<Cardapio>> cardapioPorCategoria = restaurante.getCardapio().stream()
                .filter(item -> item.getCategoria() != null && item.getPreco() != 0.0 && item.getPreco() > 0.0)
                .collect(Collectors.groupingBy(item -> item.getCategoria().getNome()));

        // Calcula a média de preço para cada categoria e soma tudo
        double valorTotalDasMedias = cardapioPorCategoria.values().stream()
                .mapToDouble(itensDaCategoria -> 
                    itensDaCategoria.stream()
                                    .mapToDouble(Cardapio::getPreco)
                                    .average()
                                    .orElse(0.0) // Se uma categoria não tiver itens com preço, a média é 0
                )
                .sum();
        
        // Arredonda para 2 casas decimais
        return BigDecimal.valueOf(valorTotalDasMedias).setScale(2, RoundingMode.HALF_UP).doubleValue();
    }
    
    /**
     * Busca a lista de IDs de restaurantes favoritados pelo cliente logado.
     * Retorna uma lista vazia se o usuário não for um cliente ou não estiver logado.
     */
    private List<UUID> getFavoritosDoClienteLogado() {
        try {
            String emailUsuarioLogado = (String) SecurityContextHolder.getContext().getAuthentication().getPrincipal();
            Usuario usuario = repoUsuario.findByEmail(emailUsuarioLogado);
            if (usuario != null && usuario.getTipo() == TipoUsuario.CLIENTE) {
                // Usamos o repoCliente para buscar a entidade Cliente e seus favoritos
                return clienteRepository.findById(usuario.getId())
                                        .map(cliente -> cliente.getFavoritos())
                                        .orElse(Collections.emptyList());
            }
        } catch (Exception e) {
            // Ocorre se não houver usuário autenticado, apenas ignoramos.
        }
        return Collections.emptyList();
    }
    // === MÉTODOS CRUD EXISTENTES (AJUSTADOS) ===

 // === MÉTODO findAll MODIFICADO PARA USAR A IA E A NOVA LÓGICA ===
    public List<RestauranteResponse> findAll() {
        // 1. Busca todos os restaurantes, como antes.
        List<Restaurante> restaurantes = repoRestaurante.findAll();
        
        // 2. Tenta ordenar por recomendação para o cliente logado (sua lógica de IA)
        try {
            String emailUsuarioLogado = (String) SecurityContextHolder.getContext().getAuthentication().getPrincipal();
            Usuario usuario = repoUsuario.findByEmail(emailUsuarioLogado);
            if (usuario != null && usuario.getTipo() == TipoUsuario.CLIENTE) {
                restaurantes = recomendacaoService.ordenarRestaurantesPorRecomendacao(restaurantes, usuario.getId());
            }
        } catch (Exception e) {
            System.err.println("Não foi possível ordenar por recomendação (usuário não é cliente ou não está logado): " + e.getMessage());
        }
        
        // 3. Busca a lista de favoritos do cliente logado UMA VEZ para otimizar
        List<UUID> favoritosDoCliente = getFavoritosDoClienteLogado();

        // 4. Mapeia para o DTO, aplicando a lógica específica do findAll
        return restaurantes.stream().map(restaurante -> {
            // Cria o DTO base
            RestauranteResponse responseDto = new RestauranteResponse(restaurante);

            // Calcula e define os campos dinâmicos
            responseDto.setFavorito(favoritosDoCliente.contains(restaurante.getId()));
            responseDto.setValorMedioPorPessoa(calcularValorMedioPorPessoa(restaurante));

            // === LÓGICA DE IMAGEM ESPECÍFICA PARA O findAll ===
            // Cria uma nova lista para conter apenas a imagem principal
            List<String> principalImageOnly = new ArrayList<>();
            List<String> imagensDoRestaurante = restaurante.getImagens();

            // Adiciona apenas a primeira imagem, se ela existir
            if (imagensDoRestaurante != null && !imagensDoRestaurante.isEmpty()) {
                principalImageOnly.add(imagensDoRestaurante.get(0));
            }
            responseDto.setImagens(principalImageOnly); // Define a lista com apenas uma imagem

            return responseDto;
        }).collect(Collectors.toList());
    }

    public Optional<RestauranteResponse> findById(UUID id) {
        // 1. Busca o restaurante no repositório
        Optional<Restaurante> restauranteOpt = repoRestaurante.findById(id);

        // Se não encontrar, retorna um Optional vazio
        if (restauranteOpt.isEmpty()) {
            return Optional.empty();
        }
        
        // 2. Pega a entidade Restaurante
        Restaurante restaurante = restauranteOpt.get();
        
        // 3. Busca a lista de favoritos do cliente logado
        List<UUID> favoritosDoCliente = getFavoritosDoClienteLogado();
        
        // 4. Converte para o DTO
        RestauranteResponse responseDto = new RestauranteResponse(restaurante);

        // 5. Calcula e define os campos dinâmicos
        responseDto.setFavorito(favoritosDoCliente.contains(restaurante.getId()));
        responseDto.setValorMedioPorPessoa(calcularValorMedioPorPessoa(restaurante));

        // === LÓGICA DE IMAGEM ESPECÍFICA PARA O findById ===
        // Aqui não fazemos nada, pois o construtor do RestauranteResponse já
        // carrega a lista completa de imagens por padrão. A lógica está correta.
        // responseDto.setImagens(restaurante.getImagens()); // Esta linha já é executada no construtor

        // 6. Retorna o DTO dentro de um Optional
        return Optional.of(responseDto);
    }
    
    @Transactional
    public Restaurante saveFromRequest(RestauranteRequest request) {
        // Validação de e-mail único
        if (repoUsuario.findByEmail(request.getEmailUsuario()) != null) {
            throw new RuntimeException("Email já está em uso.");
        }

        Usuario usuario = new Usuario();
        usuario.setNome(request.getNomeUsuario()); 
        usuario.setEmail(request.getEmailUsuario()); 
        usuario.setSenha(encoder.encode(request.getSenhaUsuario())); 
        usuario.setEndereco(request.getEnderecoUsuario()); 
        usuario.setTipo(TipoUsuario.RESTAURANTE);
        // Adicionando telefone
        if (request.getTelefoneUsuario() != null && !request.getTelefoneUsuario().isBlank()) {
            usuario.setTelefone(request.getTelefoneUsuario());
        }
        Usuario usuarioSalvo = repoUsuario.save(usuario);

        Restaurante restaurante = new Restaurante();
        restaurante.setUsuario(usuarioSalvo);
        
        // Adicionando descrição
        if (request.getDescricao() != null && !request.getDescricao().isBlank()) {
            restaurante.setDescricao(request.getDescricao());
        }
        
        if (request.getTipoCozinha() != null && !request.getTipoCozinha().isBlank()) {
            restaurante.setTipoCozinha(request.getTipoCozinha());
        } else {
            restaurante.setTipoCozinha(null); // Permite nulo se não informado
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

        // Atualiza dados do Usuario
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

        // Atualiza dados do Restaurante
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
            // Deleta a entidade do banco
            repoRestaurante.deleteById(id);
            
            // Deleta a pasta de imagens associada
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