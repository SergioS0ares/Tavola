package TavolaSoftware.TavolaApp.REST.controller;

import TavolaSoftware.TavolaApp.REST.dto.LoginRequest;
import TavolaSoftware.TavolaApp.REST.dto.LoginResponse;
import TavolaSoftware.TavolaApp.REST.dto.ReenvioRequest;
import TavolaSoftware.TavolaApp.REST.dto.RegistroRequest;
import TavolaSoftware.TavolaApp.REST.dto.VerificacaoRequest;
import TavolaSoftware.TavolaApp.REST.model.AccessModel;
import TavolaSoftware.TavolaApp.REST.model.Cliente;
import TavolaSoftware.TavolaApp.REST.model.Restaurante;
import TavolaSoftware.TavolaApp.REST.model.Usuario;
import TavolaSoftware.TavolaApp.REST.repository.AccessRepository;
import TavolaSoftware.TavolaApp.REST.repository.ClienteRepository;
import TavolaSoftware.TavolaApp.REST.repository.RestauranteRepository;
import TavolaSoftware.TavolaApp.REST.repository.UsuarioRepository;
import TavolaSoftware.TavolaApp.REST.security.JwtUtil;
import TavolaSoftware.TavolaApp.REST.service.AccessService;
import TavolaSoftware.TavolaApp.tools.TipoUsuario;
import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import jakarta.servlet.http.Cookie;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import java.time.LocalDateTime;
import java.util.Map;
import java.util.Optional;
import java.util.UUID;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.bcrypt.BCrypt;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;


@RestController
@RequestMapping("/auth")
public class AccessController {

    @Autowired private AccessRepository accessRepository;
    @Autowired private UsuarioRepository repo;
    @Autowired private ClienteRepository repoClient;
    @Autowired private RestauranteRepository repoRestaurante; // <<< ADICIONE ESTA LINHA
    @Autowired private JwtUtil jwt;
    @Autowired private AccessService accessService;

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
    public ResponseEntity<?> iniciarLogin(@RequestBody LoginRequest loginRequest) { 
        Usuario usuario = repo.findByEmail(loginRequest.getEmail());
        if (usuario != null && BCrypt.checkpw(loginRequest.getSenha(), usuario.getSenha())) {
            AccessModel pendingLogin = accessRepository.findByEmail(usuario.getEmail()).orElse(new AccessModel());
            
            pendingLogin.setEmail(usuario.getEmail());
            pendingLogin.setNome(usuario.getNome());
            pendingLogin.setSenhaCriptografada(usuario.getSenha());
            pendingLogin.setTipo(usuario.getTipo());
            pendingLogin.setUsuarioId(usuario.getId());
            pendingLogin.setCodigoVerificacao(accessService.gerarCodigoDeVerificacao());
            pendingLogin.setExpiracaoCodigo(LocalDateTime.now().plusMinutes(10));
            
            accessRepository.save(pendingLogin);
            
            // <<< ALTERAÇÃO AQUI >>>
            // Agora também criamos a URL para o fluxo de login
            String urlDeVerificacao = "http://localhost:4200/confirmar-codigo/" + pendingLogin.getId();
            accessService.enviarEmailVerificacao(usuario.getEmail(), usuario.getNome(), pendingLogin.getCodigoVerificacao(), urlDeVerificacao);
            
            return ResponseEntity.ok(Map.of(
                "mensagem", "Código de verificação enviado para o seu e-mail.",
                "idVerificacao", pendingLogin.getId()
            ));
        }
        return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body(Map.of("erro", "Credenciais inválidas."));
    }

    @PostMapping("/verificar")
    public ResponseEntity<?> verificarCodigo(@RequestBody VerificacaoRequest request, HttpServletResponse response) {
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
                RegistroRequest originalRequest = mapper.readValue(pending.getPayload(), RegistroRequest.class);
                usuario.setEndereco(originalRequest.getEndereco());
                usuario.setTelefone(originalRequest.getTelefone());
                
                // Salva o usuário primeiro para gerar o ID
                repo.save(usuario);

                // <<< INÍCIO DA ALTERAÇÃO >>>
                // Agora, com base no tipo, criamos a entidade específica (Cliente ou Restaurante)
                if (usuario.getTipo() == TipoUsuario.CLIENTE) {
                    Cliente cliente = new Cliente();
                    cliente.setUsuario(usuario);
                    repoClient.save(cliente);
                
                } else if (usuario.getTipo() == TipoUsuario.RESTAURANTE) {
                    // Lógica que estava faltando para criar o restaurante
                    Restaurante restaurante = new Restaurante();
                    restaurante.setUsuario(usuario); // Associa o usuário ao restaurante
                    
                    // Preenche com os dados que vieram na requisição original
                    restaurante.setDescricao(originalRequest.getDescricao());
                    restaurante.setTipoCozinha(originalRequest.getTipoCozinha());
                    
                    // Salva a nova entidade Restaurante
                    repoRestaurante.save(restaurante);
                }
                // <<< FIM DA ALTERAÇÃO >>>

            } catch (JsonProcessingException e) {
                 return ResponseEntity.internalServerError().body(Map.of("erro", "Falha ao recriar dados do usuário."));
            }
        }
        
        accessRepository.delete(pending);
        return gerarRespostaComTokens(usuario, request.isMantenhaMeConectado(), response);
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
            
            // <<< ALTERAÇÃO AQUI >>>
            // Agora também criamos a URL para o fluxo de reenvio
            String urlDeVerificacao = "http://localhost:4200/confirmar-codigo/" + pending.getId();
            accessService.enviarEmailVerificacao(pending.getEmail(), pending.getNome(), novoCodigo, urlDeVerificacao);
        }
        return ResponseEntity.ok(Map.of("mensagem", "Se uma verificação estiver pendente para este e-mail, um novo código foi enviado."));
    }

    // ... O resto dos seus métodos (refresh, logout, senha, etc.) e o método auxiliar 'gerarRespostaComTokens' continuam iguais ...
    // Apenas para garantir, aqui estão eles:
    
    @PostMapping("/refresh")
    public ResponseEntity<?> refreshToken(HttpServletRequest request) { 
        try {
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
                return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Refresh token não encontrado no cookie.");
            }
            if (!jwt.isTokenValid(refreshToken)) { 
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
        Cookie refreshTokenCookie = new Cookie("refreshToken", null);
        refreshTokenCookie.setHttpOnly(true);
        refreshTokenCookie.setSecure(false);
        refreshTokenCookie.setPath("/auth/refresh");
        refreshTokenCookie.setMaxAge(0);
        response.addCookie(refreshTokenCookie);
        return ResponseEntity.ok(Map.of("mensagem", "Logout realizado com sucesso."));
    }

    private ResponseEntity<LoginResponse> gerarRespostaComTokens(Usuario usuario, boolean mantenhaConectado, HttpServletResponse response) {
        String accessToken = jwt.generateAccessToken(usuario.getEmail());
        String refreshTokenString = jwt.generateRefreshToken(usuario.getId(), usuario.getEmail());
        
        Cookie refreshTokenCookie = new Cookie("refreshToken", refreshTokenString);
        refreshTokenCookie.setHttpOnly(true);
        refreshTokenCookie.setSecure(false);
        refreshTokenCookie.setPath("/auth/refresh");
        refreshTokenCookie.setMaxAge(mantenhaConectado ? 30 * 24 * 60 * 60 : 2 * 24 * 60 * 60);
        
        response.addCookie(refreshTokenCookie);

        return ResponseEntity.ok(new LoginResponse(
            accessToken, 
            usuario.getNome(), 
            usuario.getTipo().toString(), 
            usuario.getId(), 
            usuario.getEmail(), 
            usuario.getImagem(), 
            usuario.getImagemBackground()
        ));
    }
}