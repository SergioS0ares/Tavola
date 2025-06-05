package TavolaSoftware.TavolaApp.REST.service;

// ... (imports como na sua versão, mais os que adicionei para pesquisa)
import TavolaSoftware.TavolaApp.REST.model.Restaurante;
import TavolaSoftware.TavolaApp.REST.model.Usuario;
import TavolaSoftware.TavolaApp.REST.model.Servico;
import TavolaSoftware.TavolaApp.REST.model.Cardapio;
import TavolaSoftware.TavolaApp.REST.model.Tags;
import TavolaSoftware.TavolaApp.REST.repository.RestauranteRepository;
import TavolaSoftware.TavolaApp.REST.repository.UsuarioRepository;
import TavolaSoftware.TavolaApp.REST.repository.ServicoRepository;
import TavolaSoftware.TavolaApp.REST.dto.RestauranteRequest;
import TavolaSoftware.TavolaApp.REST.dto.RestauranteResponse;
import TavolaSoftware.TavolaApp.tools.RestauranteComScore;
import TavolaSoftware.TavolaApp.tools.TipoUsuario;
import TavolaSoftware.TavolaApp.tools.UploadUtils;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageImpl;
import org.springframework.data.domain.Pageable;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.io.IOException;
import java.math.BigDecimal;
import java.math.RoundingMode;
import java.util.ArrayList;
import java.util.Arrays;
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
    
    // ... (método pesquisarRestaurantesPorRelevancia e seus helpers como definimos antes) ...
    private static final double MEDIA_GERAL_AVALIACAO_APP = 3.5;
    private static final int C_CONFIANCA = 10;
    private static final double PESO_FTS_BASE = 0.45; 
    private static final double PESO_SERVICOS = 0.10;
    private static final double PESO_CARDAPIO = 0.15; 
    private static final double PESO_TAGS = 0.10;     
    private static final double PESO_QUALIDADE = 0.20; 

    @Transactional(readOnly = true)
    public Page<RestauranteResponse> pesquisarRestaurantesPorRelevancia(String termoOriginal, Pageable pageable) { /* ... seu código ... */ 
        Page<Object[]> resultadosFtsBase = repoRestaurante.searchRestaurantesByFtsBase(termoOriginal.trim(), pageable);
        if (resultadosFtsBase.isEmpty()) {
            return Page.empty(pageable);
        }
        Map<UUID, Double> ftsBaseScoresMap = resultadosFtsBase.getContent().stream()
            .collect(Collectors.toMap(
                result -> UUID.fromString(result[0].toString()), 
                result -> result[1] != null ? ((Number) result[1]).doubleValue() : 0.0 
            ));
        List<UUID> restauranteIds = new ArrayList<>(ftsBaseScoresMap.keySet());
        List<Restaurante> restaurantes = repoRestaurante.findAllById(restauranteIds);
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
            double ftsScoreNormalizado = ftsScoreBase; 
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
                RestauranteResponse responseDto = new RestauranteResponse(rsc.getRestaurante());
                List<String> principalImageOnly = new ArrayList<>();
                List<String> imagensDoRestaurante = rsc.getRestaurante().getImagens();
                if (imagensDoRestaurante != null && !imagensDoRestaurante.isEmpty()) {
                    principalImageOnly.add(imagensDoRestaurante.get(0));
                }
                responseDto.setImagens(principalImageOnly);
                return responseDto;
            })
            .collect(Collectors.toList());
        return new PageImpl<>(responses, pageable, resultadosFtsBase.getTotalElements());
    }
    private double calcularBoostServicos(Restaurante r, List<String> palavrasDoTermo) { /* ... seu código ... */ 
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
    private double calcularBoostCardapio(Restaurante r, List<String> palavrasDoTermo) { /* ... seu código ... */ 
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
    private double calcularBoostTags(Restaurante r, List<String> palavrasDoTermo) { /* ... seu código ... */ 
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
    private double calcularScoreQualidade(Restaurante restaurante) { /* ... seu código ... */ 
        int totalAvaliacoes = restaurante.getTotalDeAvaliacoes();
        double mediaAvaliacao = restaurante.getMediaAvaliacao();
        if (totalAvaliacoes == 0) return MEDIA_GERAL_AVALIACAO_APP; 
        if (totalAvaliacoes >= 100) return mediaAvaliacao;
        double scorePonderado = ((MEDIA_GERAL_AVALIACAO_APP * C_CONFIANCA) + (mediaAvaliacao * totalAvaliacoes))
                                / (C_CONFIANCA + totalAvaliacoes);
        return BigDecimal.valueOf(scorePonderado).setScale(2, RoundingMode.HALF_UP).doubleValue();    
    }
    // Classe interna movida para arquivo próprio: RestauranteComScore.java


    @Transactional
    public Restaurante updateFromRequest(UUID id, RestauranteRequest request) {
        Restaurante restauranteExistente = repoRestaurante.findById(id)
            .orElseThrow(() -> new RuntimeException("Restaurante não encontrado com ID: " + id));

        Usuario usuarioAssociado = restauranteExistente.getUsuario(); 

        // Atualiza dados do Usuario
        if (request.getNomeUsuario() != null && !request.getNomeUsuario().isBlank()) { 
            usuarioAssociado.setNome(request.getNomeUsuario()); 
        }
        // Email e Senha: Cuidado com a lógica de atualização aqui. 
        // Email: precisa verificar se o novo email já não existe para outro usuário.
        // Senha: só atualize se uma nova senha for fornecida, e sempre criptografe.
        if (request.getEmailUsuario() != null && !request.getEmailUsuario().isBlank() && !request.getEmailUsuario().equals(usuarioAssociado.getEmail())) {
            // Adicionar validação se o novo email já existe, se necessário
            Usuario existenteComEmail = repoUsuario.findByEmail(request.getEmailUsuario());
            if (existenteComEmail != null && !existenteComEmail.getId().equals(usuarioAssociado.getId())) {
                throw new RuntimeException("Email já está em uso por outro usuário.");
            }
            usuarioAssociado.setEmail(request.getEmailUsuario()); 
        }
        if (request.getSenhaUsuario() != null && !request.getSenhaUsuario().isBlank()) { 
            usuarioAssociado.setSenha(encoder.encode(request.getSenhaUsuario())); 
        }
        if (request.getEnderecoUsuario() != null) { 
            usuarioAssociado.setEndereco(request.getEnderecoUsuario()); 
        }
        if (request.getTelefoneUsuario() != null && !request.getTelefoneUsuario().isBlank()) { // <<< ATUALIZAR TELEFONE
            usuarioAssociado.setTelefone(request.getTelefoneUsuario());
        }
        repoUsuario.save(usuarioAssociado); // Salva as alterações do usuário

        // Atualiza dados do Restaurante
        if (request.getTipoCozinha() != null && !request.getTipoCozinha().isBlank()) { 
            restauranteExistente.setTipoCozinha(request.getTipoCozinha()); 
        }
        if (request.getDescricao() != null && !request.getDescricao().isBlank()) { // <<< ATUALIZAR DESCRIÇÃO
            restauranteExistente.setDescricao(request.getDescricao());
        }

        if (request.getHorariosFuncionamento() != null) { 
            restauranteExistente.setHorariosFuncionamento(request.getHorariosFuncionamento()); 
        }

        // Lógica para atualizar serviços (como no seu código)
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

        // Lógica para atualizar imagens (como no seu código)
        if (request.getImagens() != null && !request.getImagens().isEmpty()) { 
            try {
                // Se as imagens no request são Base64, precisam ser processadas.
                // Se são apenas URLs existentes para manter, a lógica pode ser diferente.
                // Assumindo que uplUtil.processRestauranteImagens lida com isso.
                List<String> caminhosImagens = uplUtil.processRestauranteImagens(request.getImagens(), restauranteExistente.getId()); 
                restauranteExistente.setImagens(caminhosImagens); 
            } catch (IOException e) {
                throw new RuntimeException("Erro ao processar imagens do restaurante durante atualização: " + e.getMessage(), e);
            }
        }
        
        return repoRestaurante.save(restauranteExistente);
    }
    
 // === Seus Métodos Existentes (mantidos como no seu arquivo) ===
    public List<RestauranteResponse> findAll() { //
        List<Restaurante> restaurantes = repoRestaurante.findAll(); //
        return restaurantes.stream()
            .map(restaurante -> {
                RestauranteResponse responseDto = new RestauranteResponse(restaurante); //
                List<String> principalImageOnly = new ArrayList<>(); //
                List<String> imagensDoRestaurante = restaurante.getImagens(); //
                
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
    public Restaurante save(Restaurante restaurante) { //
        return repoRestaurante.save(restaurante); //
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
    @Transactional
    public Restaurante saveFromRequest(RestauranteRequest request) {
        Usuario usuario = new Usuario();
        usuario.setNome(request.getNomeUsuario()); 
        usuario.setEmail(request.getEmailUsuario()); 
        usuario.setSenha(encoder.encode(request.getSenhaUsuario())); 
        usuario.setEndereco(request.getEnderecoUsuario()); 
        usuario.setTipo(TipoUsuario.RESTAURANTE);
        // >>> Adicionar telefone aqui se RestauranteRequest tiver getTelefoneUsuario()
        if (request.getTelefoneUsuario() != null && !request.getTelefoneUsuario().isBlank()) {
            usuario.setTelefone(request.getTelefoneUsuario());
        }
        Usuario usuarioSalvo = repoUsuario.save(usuario);

        Restaurante restaurante = new Restaurante();
        restaurante.setUsuario(usuarioSalvo);
        
        // >>> Adicionar descricao aqui se RestauranteRequest tiver getDescricao()
        if (request.getDescricao() != null && !request.getDescricao().isBlank()) {
            restaurante.setDescricao(request.getDescricao());
        }
        // <<< Tipo de Cozinha (como já estava) >>>
        if (request.getTipoCozinha() != null && !request.getTipoCozinha().isBlank()) {
            restaurante.setTipoCozinha(request.getTipoCozinha());
        } else {
            // Decide se quer um valor padrão aqui caso o request não envie,
            // ou se a entidade já tem um, ou se permite nulo.
            // Como você removeu o default da entidade, ou envia no request, ou fica nulo.
            restaurante.setTipoCozinha(null); // ou "Outro" se quiser um default aqui.
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
}