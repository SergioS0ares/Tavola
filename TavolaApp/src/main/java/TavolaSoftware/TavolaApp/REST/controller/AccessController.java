package TavolaSoftware.TavolaApp.REST.controller;

import TavolaSoftware.TavolaApp.REST.dto.*;
import TavolaSoftware.TavolaApp.REST.model.*;
import TavolaSoftware.TavolaApp.REST.repository.*;
import TavolaSoftware.TavolaApp.REST.security.JwtUtil;
import TavolaSoftware.TavolaApp.REST.service.AccessService;
import TavolaSoftware.TavolaApp.tools.TipoUsuario;
import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
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
import java.util.Map;
import java.util.Optional;
import java.util.UUID;

@RestController
@RequestMapping("/auth")
public class AccessController {

    @Autowired private AccessRepository accessRepository;
    @Autowired private UsuarioRepository repo;
    @Autowired private ClienteRepository repoClient;
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

        String urlDeVerificacao = "http://localhost:4200/verificar-codigo/" + pending.getId();
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
            
            accessService.enviarEmailVerificacao(usuario.getEmail(), usuario.getNome(), pendingLogin.getCodigoVerificacao());
            
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
            } catch (JsonProcessingException e) {
                 return ResponseEntity.internalServerError().body(Map.of("erro", "Falha ao recriar dados do usuário."));
            }
            
            repo.save(usuario);

            if (usuario.getTipo() == TipoUsuario.CLIENTE) {
                Cliente cliente = new Cliente();
                cliente.setUsuario(usuario);
                repoClient.save(cliente);
            } else {
                // Lógica para criar a entidade Restaurante
            }
        }

        accessRepository.delete(pending);

        return gerarRespostaComTokens(usuario, request.isMantenhaMeConectado(), response);
    }
    
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
        Optional<AccessModel> pendingOpt = accessRepository.findByEmail(request.getEmail());
        if (pendingOpt.isPresent()) {
            AccessModel pending = pendingOpt.get();
            String novoCodigo = accessService.gerarCodigoDeVerificacao();
            pending.setCodigoVerificacao(novoCodigo);
            pending.setExpiracaoCodigo(LocalDateTime.now().plusMinutes(10));
            accessRepository.save(pending);
            
            accessService.enviarEmailVerificacao(pending.getEmail(), pending.getNome(), novoCodigo);
        }
        return ResponseEntity.ok(Map.of("mensagem", "Se uma verificação estiver pendente para este e-mail, um novo código foi enviado."));
    }

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