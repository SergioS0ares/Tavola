package TavolaSoftware.TavolaApp.REST.controller;

import java.time.LocalDateTime;
import java.util.HashSet; // <<< ADICIONE ESTA IMPORTAÇÃO
import java.util.Map;
import java.util.Optional;
import java.util.Set; // <<< ADICIONE ESTA IMPORTAÇÃO
import java.util.UUID;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseCookie;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.bcrypt.BCrypt;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;

import TavolaSoftware.TavolaApp.REST.dto.requests.ReenvioRequest;
import TavolaSoftware.TavolaApp.REST.dto.requests.RegistroRequest;
import TavolaSoftware.TavolaApp.REST.dto.requests.SenhaResetConfirmRequest;
import TavolaSoftware.TavolaApp.REST.dto.requests.SenhaResetRequest;
import TavolaSoftware.TavolaApp.REST.dto.requests.VerificacaoRequest;
import TavolaSoftware.TavolaApp.REST.dto.responses.LoginRequest;
import TavolaSoftware.TavolaApp.REST.dto.responses.LoginResponse;
import TavolaSoftware.TavolaApp.REST.model.AccessModel;
import TavolaSoftware.TavolaApp.REST.model.Cliente;
import TavolaSoftware.TavolaApp.REST.model.Restaurante;
import TavolaSoftware.TavolaApp.REST.model.Servico;
import TavolaSoftware.TavolaApp.REST.model.Usuario;
import TavolaSoftware.TavolaApp.REST.repository.AccessRepository;
import TavolaSoftware.TavolaApp.REST.repository.ClienteRepository;
import TavolaSoftware.TavolaApp.REST.repository.RestauranteRepository;
import TavolaSoftware.TavolaApp.REST.repository.ServicoRepository;
import TavolaSoftware.TavolaApp.REST.repository.UsuarioRepository;
import TavolaSoftware.TavolaApp.REST.security.JwtUtil;
import TavolaSoftware.TavolaApp.REST.service.AccessService;
import TavolaSoftware.TavolaApp.REST.service.TrustTokenService;
import TavolaSoftware.TavolaApp.tools.TipoUsuario;
import jakarta.servlet.http.Cookie;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;


@RestController
@RequestMapping("/auth")
public class AccessController {

    @Autowired private AccessRepository accessRepository;
    @Autowired private UsuarioRepository repo;
    @Autowired private ClienteRepository repoClient;
    @Autowired private RestauranteRepository repoRestaurante; // <<< ADICIONE ESTA LINHA
    @Autowired private JwtUtil jwt;
    @Autowired private AccessService accessService;
    @Autowired private ServicoRepository repoServico; // <<< ADICIONE ESTA LINHA
    @Autowired private TrustTokenService rememberMeService;


    @PostMapping("/register")
    public ResponseEntity<?> register(@RequestBody RegistroRequest request) {
        if (repo.findByEmailAndEmailVerificado(request.getEmail(), true).isPresent()) {
            return ResponseEntity.status(HttpStatus.CONFLICT).body(Map.of("erro", "O e-mail informado já está em uso."));
        }
        AccessModel pending = accessRepository.findByEmail(request.getEmail()).orElse(new AccessModel());
        pending.setNome(request.getNome());
        pending.setEmail(request.getEmail());
        pending.setSenhaCriptografada(BCrypt.hashpw(request.getSenha(), BCrypt.gensalt()));
        pending.setTipo(request.getTipo());
        pending.setCodigoVerificacao(accessService.gerarCodigoDeVerificacao());
        pending.setExpiracaoCodigo(LocalDateTime.now().plusMinutes(60));
        pending.setUsuarioId(null);

        try {
            ObjectMapper mapper = new ObjectMapper();
            pending.setPayload(mapper.writeValueAsString(request));
        } catch (JsonProcessingException e) {
            return ResponseEntity.internalServerError().body(Map.of("erro", "Falha ao processar dados de registro."));
        }
        
        accessRepository.save(pending);
        String urlDeVerificacao = "http://localhost:4200/confirmar-codigo/" + pending.getId();
        accessService.enviarEmailVerificacao(pending.getEmail(), pending.getNome(), pending.getCodigoVerificacao(), urlDeVerificacao);
        
        return ResponseEntity.status(HttpStatus.CREATED).body(Map.of(
            "mensagem", "Registro iniciado! Um código de verificação foi enviado para seu e-mail.",
            "idVerificacao", pending.getId()
        ));
    }

    @PostMapping("/login")
    public ResponseEntity<?> iniciarLogin(@RequestBody LoginRequest loginRequest, HttpServletRequest request) {
        // ETAPA 1: Autenticação Primária (Usuário e Senha)
        Usuario usuario = repo.findByEmail(loginRequest.getEmail());
        if (usuario == null || !BCrypt.checkpw(loginRequest.getSenha(), usuario.getSenha())) {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body(Map.of("erro", "Credenciais inválidas."));
        }

        // ETAPA 2: Verificação de Confiança (Uso do "TrustToken")
        String trustTokenValue = null;
        if (request.getCookies() != null) {
            for (Cookie cookie : request.getCookies()) {
                // Usamos o novo nome "trustToken"
                if ("trustToken".equals(cookie.getName())) {
                    trustTokenValue = cookie.getValue();
                    break;
                }
            }
        }

        if (trustTokenValue != null) {
            // Renomeie seu RememberMeService para TrustTokenService se desejar
            Optional<Usuario> usuarioDoTokenOpt = rememberMeService.validateTokenAndGetUser(trustTokenValue);

            // O token é válido E pertence ao usuário que acabou de digitar a senha?
            if (usuarioDoTokenOpt.isPresent() && usuarioDoTokenOpt.get().getId().equals(usuario.getId())) {
                System.out.println("[Login] Dispositivo confiável para " + usuario.getEmail() + ". Pulando 2FA.");
                // Login direto, sem 2FA e sem gerar um NOVO trust token.
                // Passamos 'null' para o trust token para não gerar um novo.
                return gerarRespostaComTokens(usuario, null);
            }
        }

        // ETAPA 3: Fluxo de Verificação por E-mail (Dispositivo não confiável)
        System.out.println("[Login] Dispositivo não confiável para " + usuario.getEmail() + ". Iniciando verificação por e-mail.");
        AccessModel pendingLogin = accessRepository.findByEmail(usuario.getEmail()).orElse(new AccessModel());
        
        pendingLogin.setEmail(usuario.getEmail());
        pendingLogin.setNome(usuario.getNome());
        pendingLogin.setSenhaCriptografada(usuario.getSenha());
        pendingLogin.setTipo(usuario.getTipo());
        pendingLogin.setUsuarioId(usuario.getId());
        pendingLogin.setCodigoVerificacao(accessService.gerarCodigoDeVerificacao());
        pendingLogin.setExpiracaoCodigo(LocalDateTime.now().plusMinutes(10));
        
        accessRepository.save(pendingLogin);
        
        String urlDeVerificacao = "http://localhost:4200/confirmar-codigo/" + pendingLogin.getId();
        accessService.enviarEmailVerificacao(usuario.getEmail(), usuario.getNome(), pendingLogin.getCodigoVerificacao(), urlDeVerificacao);
        System.out.println("[Login] " + "email enviado para " + usuario.getEmail());
        return ResponseEntity.ok(Map.of(
            "mensagem", "Código de verificação enviado para o seu e-mail.",
            "idVerificacao", pendingLogin.getId()
        ));
    }

    @PostMapping("/verificar")
    public ResponseEntity<?> verificarCodigo(@RequestBody VerificacaoRequest request) { // Removi HttpServletResponse, pois não é mais necessário
        AccessModel pending = accessRepository.findById(request.getIdVerificacao()).orElse(null);
        if (pending == null || !pending.getCodigoVerificacao().equals(request.getCodigo()) || pending.getExpiracaoCodigo().isBefore(LocalDateTime.now())) {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body(Map.of("erro", "Código de verificação inválido ou expirado."));
        }
        
        Usuario usuario;
        
        if (pending.getUsuarioId() != null) {
            usuario = repo.findById(pending.getUsuarioId()).orElseThrow(() -> 
                new RuntimeException("Usuário associado à verificação não encontrado.")
            );
        } else {
            // Cria o usuário base a partir dos dados pendentes
            usuario = new Usuario();
            usuario.setNome(pending.getNome());
            usuario.setEmail(pending.getEmail());
            usuario.setSenha(pending.getSenhaCriptografada());
            usuario.setTipo(pending.getTipo());
            usuario.setEmailVerificado(true);
            
            try {
                ObjectMapper mapper = new ObjectMapper();
                // Assumindo que seu RegistroRequest tem todos os campos do payload
                RegistroRequest originalRequest = mapper.readValue(pending.getPayload(), RegistroRequest.class);
                usuario.setEndereco(originalRequest.getEndereco());
                usuario.setTelefone(originalRequest.getTelefone());
                
                repo.save(usuario); 
                
                if (usuario.getTipo() == TipoUsuario.CLIENTE) {
                    Cliente cliente = new Cliente();
                    cliente.setUsuario(usuario);
                    repoClient.save(cliente);
                
                } else if (usuario.getTipo() == TipoUsuario.RESTAURANTE) {
                    Restaurante restaurante = new Restaurante();
                    restaurante.setUsuario(usuario);
                    
                    restaurante.setDescricao(originalRequest.getDescricao());
                    restaurante.setTipoCozinha(originalRequest.getTipoCozinha());

                    if (originalRequest.getHoraFuncionamento() != null) {
                        restaurante.setHorariosFuncionamento(originalRequest.getHoraFuncionamento());
                    }

                    if (originalRequest.getNomesServicos() != null && !originalRequest.getNomesServicos().isEmpty()) {
                        Set<Servico> servicosParaAssociar = new HashSet<>();
                        for (String nomeServico : originalRequest.getNomesServicos()) {
                            Servico serv = repoServico.findByNome(nomeServico)
                                            .orElseGet(() -> repoServico.save(new Servico(nomeServico, ""))); // Usa o repoServico injetado
                            servicosParaAssociar.add(serv);
                        }
                        restaurante.setServicos(servicosParaAssociar);
                    }
                    
                    repoRestaurante.save(restaurante); // Salva a nova entidade Restaurante
                }

            } catch (JsonProcessingException e) {
                 return ResponseEntity.internalServerError().body(Map.of("erro", "Falha ao recriar dados do usuário."));
            }
        }
        
        String novoTrustToken = null;
        if (request.isMantenhaMeConectado()) {
            System.out.println("[Verificar] Usuário " + usuario.getEmail() + " marcou 'Mantenha-me conectado'. Gerando novo TrustToken.");
            novoTrustToken = rememberMeService.generateNewToken();
            rememberMeService.storeToken(novoTrustToken, usuario);
        }
        
        accessRepository.delete(pending);
        
        return gerarRespostaComTokens(usuario, novoTrustToken);

    }
    
    @PostMapping("/reenviar-codigo")
    public ResponseEntity<?> reenviarCodigo(@RequestBody ReenvioRequest request) {
        Optional<AccessModel> pendingOpt = accessRepository.findByEmail(request.getEmail());
        
        if (pendingOpt.isPresent()) {
            AccessModel pending = pendingOpt.get();
            String novoCodigo = accessService.gerarCodigoDeVerificacao();
            pending.setCodigoVerificacao(novoCodigo);
            pending.setExpiracaoCodigo(LocalDateTime.now().plusMinutes(10));
            accessRepository.save(pending);
            
            String urlDeVerificacao = "http://localhost:4200/confirmar-codigo/" + pending.getId();
            accessService.enviarEmailVerificacao(pending.getEmail(), pending.getNome(), novoCodigo, urlDeVerificacao);

            return ResponseEntity.ok(Map.of(
                "mensagem", "Um novo código de verificação foi enviado para o seu e-mail.",
                "idVerificacao", pending.getId()
            ));
        }
        
        return ResponseEntity.ok(Map.of("mensagem", "Se uma verificação estiver pendente para este e-mail, um novo código foi enviado."));
    }
    
    @PostMapping("/refresh")
    public ResponseEntity<?> refreshToken(HttpServletRequest request) { 
        try {
        	System.out.println("[RefreshToken] " + "Método de refresh foi chamado, iniciando refresh do token de acesso");
            String refreshToken = null;
            if (request.getCookies() != null) {
                for (Cookie cookie : request.getCookies()) {
                    if (cookie.getName().equals("refreshToken")) {
                        refreshToken = cookie.getValue();
                        break; 
                    }
                }
            }
            if (refreshToken == null) {
            	System.out.println("[RefreshToken] " + "Token não encontrado ou cookie inexistente");
            	return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Refresh token não encontrado no cookie.");
            }
            if (!jwt.isTokenValid(refreshToken)) { 
            	System.out.println("[RefreshToken] " + "Token invalido");
                return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Refresh token inválido ou expirado.");
            }
            Usuario usuario = repo.findById(jwt.parseToken(refreshToken).get("id", UUID.class))
                .orElseThrow(() -> new RuntimeException("Usuário do token não encontrado."));

            String novoAccessToken = jwt.generateAccessToken(usuario.getEmail());
            return ResponseEntity.ok(new LoginResponse(
                    novoAccessToken, 
                    usuario.getNome(), 
                    usuario.getTipo().toString(), 
                    usuario.getId(), 
                    usuario.getEmail(),
                    usuario.getImagem(),
                    usuario.getImagemBackground()
            ));
        } catch (Exception e) { 
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Erro ao processar refresh token: " + e.getMessage());
        }
    }

    @PostMapping("/logout")
    public ResponseEntity<?> logout(HttpServletResponse response) {
    	System.out.println("[Logout] " + "Método de logout chamado, iniciando remoção dos tokens");
        Cookie refreshTokenCookie = new Cookie("refreshToken", null);
        refreshTokenCookie.setHttpOnly(true);
        refreshTokenCookie.setSecure(false);
        refreshTokenCookie.setPath("/auth/refresh");
        refreshTokenCookie.setMaxAge(0); 
        response.addCookie(refreshTokenCookie);

        System.out.println("[Logout] " + "Logout concluido, tokens desabilitados");
        return ResponseEntity.ok(Map.of("mensagem", "Sessão encerrada com sucesso."));
    }
    
    @PostMapping("/esqueci-senha")
    public ResponseEntity<?> solicitarResetSenha(@RequestBody SenhaResetRequest request) {
        accessService.solicitarResetDeSenha(request.getEmail());
        // Resposta genérica para não revelar se o e-mail existe ou não
        return ResponseEntity.ok(Map.of("mensagem", "Se um usuário com este e-mail existir em nosso sistema, um link de redefinição será enviado."));
    }
    
    @PostMapping("/redefinir-senha")
    public ResponseEntity<?> redefinirSenha(@RequestBody SenhaResetConfirmRequest request) {
        try {
            accessService.executarResetDeSenha(request.getToken(), request.getNovaSenha());
            return ResponseEntity.ok(Map.of("mensagem", "Sua senha foi redefinida com sucesso."));
        } catch (RuntimeException e) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(Map.of("erro", e.getMessage()));
        }
    }

//====================================================================================================================================================================================
    
 // Em AccessController.java

    private ResponseEntity<LoginResponse> gerarRespostaComTokens(Usuario usuario, String novoTrustToken) {
        // 1. Gera o Access Token (para o corpo da resposta) e o Refresh Token (para o cookie)
        String accessToken = jwt.generateAccessToken(usuario.getEmail());
        String refreshTokenString = jwt.generateRefreshToken(usuario.getId(), usuario.getEmail());

        // 2. Constrói o cookie do Refresh Token (duração curta/média)
        ResponseCookie refreshTokenCookie = ResponseCookie.from("refreshToken", refreshTokenString)
            .httpOnly(true)
            .secure(false) // Mudar para 'true' em produção (HTTPS)
            .path("/")
            .maxAge(30 * 24 * 60 * 60) // 30 dias de validade
            .sameSite("Lax")
            .build();

        // 3. Prepara a resposta e adiciona o primeiro cookie
        LoginResponse loginResponse = new LoginResponse(
            accessToken,
            usuario.getNome(),
            usuario.getTipo().toString(),
            usuario.getId(),
            usuario.getEmail(),
            usuario.getImagem(),
            usuario.getImagemBackground()
        );

        ResponseEntity.BodyBuilder responseBuilder = ResponseEntity.ok()
            .header(HttpHeaders.SET_COOKIE, refreshTokenCookie.toString());

        // 4. Se um novo TrustToken foi gerado, constrói e adiciona o segundo cookie
        if (novoTrustToken != null && !novoTrustToken.isEmpty()) {
            ResponseCookie trustTokenCookie = ResponseCookie.from("trustToken", novoTrustToken) // << Novo nome do cookie
                .httpOnly(true)
                .secure(false) // Mudar para 'true' em produção (HTTPS)
                .path("/")
                .maxAge(60 * 24 * 60 * 60) // << Duração bem longa, 60 dias
                .sameSite("Lax")
                .build();
            
            responseBuilder.header(HttpHeaders.SET_COOKIE, trustTokenCookie.toString());
        }

        // 5. Retorna a resposta com os cookies nos cabeçalhos e o JSON no corpo
        return responseBuilder.body(loginResponse);
    }
}