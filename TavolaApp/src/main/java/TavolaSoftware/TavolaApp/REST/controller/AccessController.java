package TavolaSoftware.TavolaApp.REST.controller;

import TavolaSoftware.TavolaApp.REST.dto.RegistroRequest;
import TavolaSoftware.TavolaApp.REST.dto.LoginRequest;
import TavolaSoftware.TavolaApp.REST.dto.LoginResponse;
import TavolaSoftware.TavolaApp.REST.model.Cliente;
import TavolaSoftware.TavolaApp.REST.model.Restaurante;
import TavolaSoftware.TavolaApp.REST.model.Usuario;
import TavolaSoftware.TavolaApp.REST.repository.ClienteRepository;
import TavolaSoftware.TavolaApp.REST.repository.RestauranteRepository;
import TavolaSoftware.TavolaApp.REST.repository.UsuarioRepository;
import TavolaSoftware.TavolaApp.REST.security.JwtUtil;
import TavolaSoftware.TavolaApp.tools.Mesas;
import TavolaSoftware.TavolaApp.tools.ResponseExceptionHandler;
import TavolaSoftware.TavolaApp.tools.TipoUsuario;
import io.jsonwebtoken.Claims;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.bcrypt.BCrypt;
import org.springframework.web.bind.annotation.*;
import jakarta.servlet.http.Cookie;
import jakarta.servlet.http.HttpServletRequest;

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

        Usuario usuario = new Usuario();
        usuario.setNome(request.getNome());
        usuario.setEmail(request.getEmail());
        usuario.setSenha(senhaCriptografada);
        usuario.setEndereco(request.getEndereco());
        usuario.setTipo(request.getTipo());
        usuario = repo.save(usuario);
        if (usuario.getTipo() == TipoUsuario.CLIENTE) {
            Cliente cliente = new Cliente();
            cliente.setUsuario(usuario);
            repoClient.save(cliente);
            String accessToken = jwt.generateAccessToken(usuario.getEmail());
            String refreshToken = jwt.generateRefreshToken(usuario.getId(), usuario.getEmail());
            return ResponseEntity.ok(new LoginResponse(
                    accessToken, refreshToken,
                    usuario.getNome(), "CLIENTE",
                    usuario.getId(), usuario.getEmail()
            ));

        } else {
            Restaurante restaurante = new Restaurante();
            restaurante.setUsuario(usuario);
            List<Mesas> mesas = request.getMesas();
            if ((mesas == null || mesas.isEmpty()) && request.getQuantidadeMesas() != null) {
                Mesas padrao = new Mesas();
                padrao.setNome("Principal");
                padrao.setDescricao("Área principal do restaurante");
                padrao.setImagem("");
                padrao.setQuantidadeTotal(request.getQuantidadeMesas());
                padrao.setQuantidadeDisponivel(request.getQuantidadeMesas());
                padrao.setDisponivel(1);
                mesas = List.of(padrao);
            }
            restaurante.setMesas(mesas);
            restaurante.setHoraFuncionamento(request.getHoraFuncionamento());
            repoRestaurante.save(restaurante);
            String accessToken = jwt.generateAccessToken(usuario.getEmail());
            String refreshToken = jwt.generateRefreshToken(usuario.getId(), usuario.getEmail());

            return ResponseEntity.ok(new LoginResponse(
                    accessToken, refreshToken,
                    usuario.getNome(), "RESTAURANTE",
                    usuario.getId(), usuario.getEmail()
            ));
        }
    }
    
    @PostMapping("/login")
    public ResponseEntity<?> login(@RequestBody LoginRequest loginRequest) {
        String email = loginRequest.getEmail();
        String senha = loginRequest.getSenha();

        Cliente cliente = repoClient.findByUsuarioEmail(email);
        if (cliente != null && BCrypt.checkpw(senha, cliente.getUsuario().getSenha())) {
            String accessToken = jwt.generateAccessToken(cliente.getUsuario().getEmail());
            String refreshToken = jwt.generateRefreshToken(cliente.getId(), cliente.getUsuario().getEmail());
            return ResponseEntity.ok(new LoginResponse(
                accessToken, refreshToken,
                cliente.getUsuario().getNome(), "CLIENTE",
                cliente.getId(), cliente.getUsuario().getEmail()
            ));
        }
        Restaurante restaurante = repoRestaurante.findByUsuarioEmail(email);
        if (restaurante != null && BCrypt.checkpw(senha, restaurante.getUsuario().getSenha())) {
            String accessToken = jwt.generateAccessToken(restaurante.getEmail());
            String refreshToken = jwt.generateRefreshToken(restaurante.getId(), restaurante.getEmail());
            return ResponseEntity.ok(new LoginResponse(
                accessToken, refreshToken,
                restaurante.getNome(), "RESTAURANTE",
                restaurante.getId(), restaurante.getEmail()
            ));
        }
        return ResponseEntity.status(401).body("Credenciais inválidas.");
    }

    @PostMapping("/refresh")
    public ResponseEntity<?> refreshToken(HttpServletRequest request) {
        try {
            System.out.println("\n>>> ENTROU no refresh\n");

            String refreshToken = null;

            // Pega o cookie "refreshToken"
            if (request.getCookies() != null) {
                for (Cookie cookie : request.getCookies()) {
                    System.out.println("🍪 Cookie recebido: " + cookie.getName() + " = " + cookie.getValue());
                    if (cookie.getName().equals("refreshToken")) {
                        refreshToken = cookie.getValue();
                    }
                }
            }

            if (refreshToken == null) {
                System.out.println("❌ Cookie 'refreshToken' não encontrado.");
                return ResponseEntity.status(401).body("Refresh token não encontrado no cookie.");
            }

            Claims claims = jwt.parseToken(refreshToken);

            String email = claims.getSubject(); // continua útil pro response
            String id = claims.get("id", String.class);

            System.out.println("✅ Email do token: " + email);
            System.out.println("🆔 ID do token: " + id);

            Cliente cliente = repoClient.findById(UUID.fromString(id)).orElse(null);
            if (cliente != null) {
                System.out.println("✅ Cliente encontrado: " + cliente.getUsuario().getNome());
                String novoAccessToken = jwt.generateAccessToken(cliente.getUsuario().getEmail());
                return ResponseEntity.ok(new LoginResponse(
                        novoAccessToken, refreshToken,
                        cliente.getUsuario().getNome(), "CLIENTE",
                        cliente.getId(), cliente.getUsuario().getEmail()
                ));
            }

            Restaurante restaurante = repoRestaurante.findById(UUID.fromString(id)).orElse(null);
            if (restaurante != null) {
                System.out.println("✅ Restaurante encontrado: " + restaurante.getNome());
                String novoAccessToken = jwt.generateAccessToken(restaurante.getEmail());
                return ResponseEntity.ok(new LoginResponse(
                        novoAccessToken, refreshToken,
                        restaurante.getNome(), "RESTAURANTE",
                        restaurante.getId(), restaurante.getEmail()
                ));
            }

            System.out.println("⚠️ Nenhum cliente ou restaurante encontrado com o ID do token.");
            return ResponseEntity.status(404).body("Usuário não encontrado.");
        } catch (Exception e) {
            System.out.println("❌ Erro ao processar refresh token:");
            e.printStackTrace();
            return ResponseEntity.status(401).body("Refresh token inválido ou expirado.");
        } finally {
            System.out.println("<<< SAINDO do refresh\n");
        }
    }


}
