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
    @Autowired private RestauranteRepository repoRestaurante;
    @Autowired private JwtUtil jwt;
    @Autowired private AccessService accessService;

    // ===================================================================
    // FLUXO DE REGISTRO
    // ===================================================================
    @PostMapping("/register")
    public ResponseEntity<?> register(@RequestBody RegistroRequest request) {
        if (repo.findByEmailAndEmailVerificado(request.getEmail(), true).isPresent()) {
            return ResponseEntity.status(HttpStatus.CONFLICT).body(Map.of("erro", "O e-mail informado já está em uso por um usuário verificado."));
        }

        Optional<AccessModel> pendingOpt = accessRepository.findByEmail(request.getEmail());
        AccessModel pending = pendingOpt.orElse(new AccessModel());

        pending.setNome(request.getNome());
        pending.setEmail(request.getEmail());
        pending.setSenhaCriptografada(BCrypt.hashpw(request.getSenha(), BCrypt.gensalt()));
        pending.setTipo(request.getTipo());
        pending.setCodigoVerificacao(accessService.gerarCodigoDeVerificacao());
        pending.setExpiracaoCodigo(LocalDateTime.now().plusMinutes(60));

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

    @PostMapping("/register/verificar")
    public ResponseEntity<?> verificarRegistro(@RequestBody VerificacaoRequest request, HttpServletResponse response) {
        AccessModel pending = accessRepository.findById(request.getIdVerificacao()).orElse(null);

        if (pending == null || !pending.getCodigoVerificacao().equals(request.getCodigo()) || pending.getExpiracaoCodigo().isBefore(LocalDateTime.now())) {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body(Map.of("erro", "Código de verificação inválido ou expirado."));
        }

        // Cria o usuário permanente
        Usuario usuario = new Usuario();
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
            // Lógica para criar o Restaurante a partir do payload...
        }

        accessRepository.delete(pending);

        // Gera os tokens para o primeiro login
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
            // <<< CORREÇÃO: Chama o método com 3 argumentos, SEM URL >>>
            accessService.enviarEmailVerificacao(usuario.getEmail(), usuario.getNome(), codigo);
            return ResponseEntity.ok(Map.of("mensagem", "Código de verificação enviado para o seu e-mail."));
        }
        return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body(Map.of("erro", "Credenciais inválidas."));
    }


    @PostMapping("/login/verificar")
    public ResponseEntity<?> verificarLogin(@RequestBody LoginVerificacaoRequest request, HttpServletResponse response) {
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
    
 // ===================================================================
    // FLUXO DE LOGOUT
    // ===================================================================
    
    @PostMapping("/logout")
    public ResponseEntity<?> logout(HttpServletResponse response) {
        Cookie refreshTokenCookie = new Cookie("refreshToken", null); // O valor não importa, pode ser nulo.
        refreshTokenCookie.setHttpOnly(true);
        refreshTokenCookie.setSecure(false); // Mantenha consistente com sua configuração de login (use 'true' em produção com HTTPS).
        refreshTokenCookie.setPath("/auth/refresh"); // IMPORTANTE: O path DEVE ser o mesmo do cookie original.
        refreshTokenCookie.setMaxAge(0); // O segredo está aqui: 0 segundos de vida útil.
        
        // Adiciona o cookie na resposta, o que substituirá o cookie existente no navegador.
        response.addCookie(refreshTokenCookie);

        // O frontend, ao receber esta resposta de sucesso (200 OK), deve ser responsável por
        // apagar o Access Token que está salvo localmente (ex: localStorage ou sessionStorage).
        return ResponseEntity.ok(Map.of("mensagem", "Logout realizado com sucesso."));
    }
}