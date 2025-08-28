package TavolaSoftware.TavolaApp.REST.controller;

import TavolaSoftware.TavolaApp.REST.dto.*;
import TavolaSoftware.TavolaApp.REST.model.*;
import TavolaSoftware.TavolaApp.REST.repository.*;
import TavolaSoftware.TavolaApp.REST.security.JwtUtil;
import TavolaSoftware.TavolaApp.REST.service.AccessService;
import TavolaSoftware.TavolaApp.tools.ResponseExceptionHandler;
import TavolaSoftware.TavolaApp.tools.TipoUsuario;
import io.jsonwebtoken.Claims;
import jakarta.servlet.http.Cookie;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.bcrypt.BCrypt;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDateTime;
import java.util.HashSet;
import java.util.Map;
import java.util.Set;
import java.util.UUID;

@RestController
@RequestMapping("/auth")
public class AccessController {
	
    @Autowired private UsuarioRepository repo;
    @Autowired private ClienteRepository repoClient;
    @Autowired private RestauranteRepository repoRestaurante;
    @Autowired private ServicoRepository repoServico;
    @Autowired private JwtUtil jwt;
    @Autowired private AccessService accessService;

    // ===================================================================
    // FLUXO DE REGISTRO
    // ===================================================================
    @PostMapping("/register")
    public ResponseEntity<?> register(@RequestBody RegistroRequest request) {
        ResponseExceptionHandler handler = new ResponseExceptionHandler();
        handler.checkEmptyStrting("nome", request.getNome());
        handler.checkEmptyStrting("email", request.getEmail());
        handler.checkEmptyStrting("senha", request.getSenha());
        if (repo.findByEmail(request.getEmail()) != null) {
            handler.checkCondition("O e-mail informado já está em uso.", true);
        }
        if (handler.errors()) {
            return handler.generateResponse(HttpStatus.BAD_REQUEST);
        }

        String senhaCriptografada = BCrypt.hashpw(request.getSenha(), BCrypt.gensalt());
        Usuario usuario = new Usuario();
        usuario.setNome(request.getNome());
        usuario.setEmail(request.getEmail());
        usuario.setSenha(senhaCriptografada);
        usuario.setEndereco(request.getEndereco());
        usuario.setTipo(request.getTipo());
        usuario.setTelefone(request.getTelefone());
        
        String codigo = accessService.gerarCodigoDeVerificacao();
        usuario.setCodigoVerificacao(codigo);
        usuario.setExpiracaoCodigo(LocalDateTime.now().plusMinutes(60));
        
        usuario = repo.save(usuario); 

        if (usuario.getTipo() == TipoUsuario.CLIENTE) {
            Cliente cliente = new Cliente();
            cliente.setUsuario(usuario);
            repoClient.save(cliente);
        } else {
            // <<< LÓGICA CORRIGIDA E COMPLETA PARA CRIAR RESTAURANTE >>>
            Restaurante restaurante = new Restaurante();
            restaurante.setUsuario(usuario);
            
            if (request.getTipoCozinha() != null && !request.getTipoCozinha().isBlank()) {
                restaurante.setTipoCozinha(request.getTipoCozinha());
            } else {
                restaurante.setTipoCozinha("Outro");
            }
            if (request.getDescricao() != null && !request.getDescricao().isBlank()) {
                restaurante.setDescricao(request.getDescricao());
            }

            if (request.getHoraFuncionamento() != null) {
                restaurante.setHorariosFuncionamento(request.getHoraFuncionamento());
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
            
            repoRestaurante.save(restaurante);
        }
        
        accessService.enviarEmailVerificacao(usuario.getEmail(), usuario.getNome(), codigo);
        
        return ResponseEntity.status(HttpStatus.CREATED).body(Map.of(
            "mensagem", "Registro quase concluído! Um código de verificação foi enviado para o seu e-mail.",
            "email", usuario.getEmail()
        ));
    }

    // ===================================================================
    // FLUXO DE LOGIN
    // ===================================================================
    @PostMapping("/login")
    public ResponseEntity<?> iniciarLogin(@RequestBody LoginRequest loginRequest) { 
        Usuario usuario = repo.findByEmail(loginRequest.getEmail());
        if (usuario != null && BCrypt.checkpw(loginRequest.getSenha(), usuario.getSenha())) {
            String codigo = accessService.gerarCodigoDeVerificacao();
            usuario.setCodigoVerificacao(codigo);
            usuario.setExpiracaoCodigo(LocalDateTime.now().plusMinutes(10));
            repo.save(usuario);
            accessService.enviarEmailVerificacao(usuario.getEmail(), usuario.getNome(), codigo);
            return ResponseEntity.ok(Map.of("mensagem", "Código de verificação enviado para o seu e-mail."));
        }
        return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body(Map.of("erro", "Credenciais inválidas."));
    }

    @PostMapping("/login/verificar")
    public ResponseEntity<?> verificarCodigoECompletarLogin(@RequestBody VerificacaoRequest request, HttpServletResponse response) {
        Usuario usuario = repo.findByEmail(request.getEmail());
        if (usuario == null || usuario.getCodigoVerificacao() == null ||
            !usuario.getCodigoVerificacao().equals(request.getCodigo()) ||
            usuario.getExpiracaoCodigo().isBefore(LocalDateTime.now())) {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body(Map.of("erro", "Código de verificação inválido ou expirado."));
        }

        usuario.setCodigoVerificacao(null);
        usuario.setExpiracaoCodigo(null);
        usuario.setEmailVerificado(true);
        repo.save(usuario);

        String accessToken = jwt.generateAccessToken(usuario.getEmail());
        String refreshTokenString = jwt.generateRefreshToken(usuario.getId(), usuario.getEmail());
        Cookie refreshTokenCookie = new Cookie("refreshToken", refreshTokenString);
        refreshTokenCookie.setHttpOnly(true);
        refreshTokenCookie.setSecure(false);
        refreshTokenCookie.setPath("/auth/refresh");
        refreshTokenCookie.setMaxAge(request.isMantenhaMeConectado() ? 30 * 24 * 60 * 60 : 2 * 24 * 60 * 60);
        response.addCookie(refreshTokenCookie);

        return ResponseEntity.ok(new LoginResponse(
            accessToken, usuario.getNome(), usuario.getTipo().toString(), 
            usuario.getId(), usuario.getEmail(), usuario.getImagem(), usuario.getImagemBackground()
        ));
    }

    // ===================================================================
    // MANTER CONECTADO E REENVIO
    // ===================================================================
    @PostMapping("/refresh")
    public ResponseEntity<?> refreshToken(HttpServletRequest request) { 
        // <<< LÓGICA COMPLETA E CORRIGIDA DO REFRESH TOKEN >>>
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
            Claims claims = jwt.parseToken(refreshToken); 
            String email = claims.getSubject();
            UUID usuarioId = UUID.fromString(claims.get("id", String.class));
            
            Usuario usuario = repo.findById(usuarioId)
                .orElseThrow(() -> new RuntimeException("Usuário do token não encontrado."));

            if (usuario.getEmail().equals(email)) {
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
            }
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Dados do token inconsistentes.");
        } catch (Exception e) { 
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Erro ao processar refresh token: " + e.getMessage());
        }
    }

    @PostMapping("/reenviar-codigo")
    public ResponseEntity<?> reenviarCodigo(@RequestBody ReenvioRequest request) {
        Usuario usuario = repo.findByEmail(request.getEmail());
        if (usuario != null) {
            String novoCodigo = accessService.gerarCodigoDeVerificacao();
            usuario.setCodigoVerificacao(novoCodigo);
            usuario.setExpiracaoCodigo(LocalDateTime.now().plusMinutes(10));
            repo.save(usuario);
            accessService.enviarEmailVerificacao(usuario.getEmail(), usuario.getNome(), novoCodigo);
        }
        return ResponseEntity.ok(Map.of("mensagem", "Se um usuário com este e-mail existir, um novo código foi enviado."));
    }

    // ===================================================================
    // FLUXO DE ESQUECI MINHA SENHA
    // ===================================================================
    @PostMapping("/senha/iniciar-reset")
    public ResponseEntity<?> iniciarResetSenha(@RequestBody SenhaResetRequest request) {
        accessService.iniciarResetSenha(request.getEmail());
        return ResponseEntity.ok(Map.of("mensagem", "Se um usuário com este e-mail existir, um código para redefinição de senha foi enviado."));
    }

    @PostMapping("/senha/confirmar-reset")
    public ResponseEntity<?> confirmarResetSenha(@RequestBody SenhaResetVerificacaoRequest request) {
        try {
            if (request.getNovaSenha() == null || request.getNovaSenha().length() < 6) {
                return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(Map.of("erro", "A nova senha deve ter pelo menos 6 caracteres."));
            }
            accessService.confirmarResetSenha(request.getEmail(), request.getCodigo(), request.getNovaSenha());
            return ResponseEntity.ok(Map.of("mensagem", "Senha alterada com sucesso!"));
        } catch (RuntimeException e) {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body(Map.of("erro", e.getMessage()));
        }
    }
}