package TavolaSoftware.TavolaApp.REST.controller;

import TavolaSoftware.TavolaApp.REST.dto.RegistroRequest;
import TavolaSoftware.TavolaApp.REST.dto.LoginRequest;
import TavolaSoftware.TavolaApp.REST.dto.LoginResponse;
import TavolaSoftware.TavolaApp.REST.model.Cliente;
import TavolaSoftware.TavolaApp.REST.model.Restaurante;
import TavolaSoftware.TavolaApp.REST.security.JwtUtil;
import TavolaSoftware.TavolaApp.REST.repository.ClienteRepository;
import TavolaSoftware.TavolaApp.REST.repository.RestauranteRepository;
import TavolaSoftware.TavolaApp.REST.repository.UsuarioRepository;
import TavolaSoftware.TavolaApp.tools.Mesas;
import TavolaSoftware.TavolaApp.tools.ResponseExceptionHandler;
import TavolaSoftware.TavolaApp.tools.TipoUsuario;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseCookie;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.bcrypt.BCrypt;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.web.bind.annotation.*;
import jakarta.servlet.http.HttpServletResponse;

import java.util.List;
import java.util.UUID;

@RestController
@RequestMapping("/auth")
public class AccessController {

    @Autowired
    private UsuarioRepository repo;

    @Autowired
    private ClienteRepository repoClient;

    @Autowired
    private RestauranteRepository repoRestaurante;

    @Autowired
    private JwtUtil jwt;

    @Autowired
    private BCryptPasswordEncoder passwordEncoder;

    @PostMapping("/register")
    public ResponseEntity<?> register(@RequestBody RegistroRequest request) {
        ResponseExceptionHandler handler = new ResponseExceptionHandler();
        handler.checkEmptyStrting("nome", request.getNome());
        handler.checkEmptyStrting("email", request.getEmail());
        handler.checkEmptyStrting("senha", request.getSenha());
        handler.checkEmptyObject("endereco", request.getEndereco());
        handler.checkEmptyObject("tipo", request.getTipo());

        if (repo.findByEmail(request.getEmail()) != null) {
            handler.checkCondition("O e-mail informado já está em uso.", true);
        }
        if (handler.errors()) {
            return handler.generateResponse(HttpStatus.BAD_REQUEST);
        }

        String senhaCriptografada = BCrypt.hashpw(request.getSenha(), BCrypt.gensalt());
        // ... restante da lógica de registro permanece igual ...
        return ResponseEntity.ok().build();
    }
    
    @PostMapping("/login")
    public ResponseEntity<LoginResponse> login(
            @RequestBody LoginRequest loginRequest,
            HttpServletResponse response
    ) {
        String email = loginRequest.getEmail();
        String senha = loginRequest.getSenha();

        Cliente cliente = repoClient.findByUsuarioEmail(email);
        if (cliente != null && passwordEncoder.matches(senha, cliente.getUsuario().getSenha())) {
            return buildLoginResponse(
                cliente.getUsuario().getEmail(),
                cliente.getId(),
                cliente.getUsuario().getNome(),
                "CLIENTE",
                response
            );
        }

        Restaurante restaurante = repoRestaurante.findByUsuarioEmail(email);
        if (restaurante != null && passwordEncoder.matches(senha, restaurante.getUsuario().getSenha())) {
            return buildLoginResponse(
                restaurante.getEmail(),
                restaurante.getId(),
                restaurante.getNome(),
                "RESTAURANTE",
                response
            );
        }

        return ResponseEntity.status(HttpStatus.UNAUTHORIZED)
                             .body(null);
    }

    /**
     * Cria accessToken, refreshToken e configura cookie HttpOnly
     */
    private ResponseEntity<LoginResponse> buildLoginResponse(
            String email,
            UUID id,
            String nome,
            String tipo,
            HttpServletResponse response
    ) {
        String accessToken  = jwt.generateAccessToken(email);
        String refreshToken = jwt.generateRefreshToken(id, email);

        ResponseCookie cookie = ResponseCookie.from("refreshToken", refreshToken)
            .httpOnly(true)
            .secure(false)
            .path("/")
            .sameSite("None")
            .maxAge(2 * 60)
            .build();

        response.setHeader(HttpHeaders.SET_COOKIE, cookie.toString());

        return ResponseEntity.ok(new LoginResponse(
            accessToken,
            refreshToken,
            nome,
            tipo,
            id,
            email
        ));
    }

    @PostMapping("/refresh")
    public ResponseEntity<?> refreshToken(HttpServletResponse response, 
                                           @CookieValue(value = "refreshToken", required = false) String refreshToken) {
        // lógica de refresh permanece igual, e ao reemitir novo refreshToken use buildLoginResponse ou bloco similar para atualizar cookie
        return ResponseEntity.ok().build();
    }
}
