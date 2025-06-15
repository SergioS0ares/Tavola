package TavolaSoftware.TavolaApp.REST.controller;

import TavolaSoftware.TavolaApp.REST.dto.RegistroRequest;
import TavolaSoftware.TavolaApp.REST.dto.LoginRequest;
import TavolaSoftware.TavolaApp.REST.dto.LoginResponse;
import TavolaSoftware.TavolaApp.REST.model.Cliente;
import TavolaSoftware.TavolaApp.REST.model.Restaurante;
import TavolaSoftware.TavolaApp.REST.model.Usuario;
import TavolaSoftware.TavolaApp.REST.model.Servico;
import TavolaSoftware.TavolaApp.REST.repository.ClienteRepository;
import TavolaSoftware.TavolaApp.REST.repository.RestauranteRepository;
import TavolaSoftware.TavolaApp.REST.repository.ServicoRepository;
import TavolaSoftware.TavolaApp.REST.repository.UsuarioRepository;
import TavolaSoftware.TavolaApp.REST.security.JwtUtil;
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
import jakarta.servlet.http.HttpServletResponse;

import java.util.HashSet;
import java.util.Set;
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
    private ServicoRepository repoServico;

    @Autowired
    private JwtUtil jwt;

    @PostMapping("/login")
    public ResponseEntity<?> login(@RequestBody LoginRequest loginRequest, HttpServletResponse response) { 
        String email = loginRequest.getEmail();
        String senha = loginRequest.getSenha();
        Usuario usuario = repo.findByEmail(email);

        if (usuario != null && BCrypt.checkpw(senha, usuario.getSenha())) {
            String accessToken = jwt.generateAccessToken(usuario.getEmail());
            String refreshTokenString = jwt.generateRefreshToken(usuario.getId(), usuario.getEmail());
            Cookie refreshTokenCookie = new Cookie("refreshToken", refreshTokenString);
            refreshTokenCookie.setHttpOnly(true);
            refreshTokenCookie.setSecure(false); 
            refreshTokenCookie.setPath("/auth"); 
            refreshTokenCookie.setMaxAge(30 * 60 * 60); 
            response.addCookie(refreshTokenCookie);
            String tipoUsuarioStr = "";
            UUID entidadeId = usuario.getId(); 
            if (usuario.getTipo() == TipoUsuario.CLIENTE) {
                tipoUsuarioStr = "CLIENTE";
            } else if (usuario.getTipo() == TipoUsuario.RESTAURANTE) {
                tipoUsuarioStr = "RESTAURANTE";
            } else {
                return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Tipo de usuário não configurado corretamente.");
            }
            
            // <<< ALTERAÇÃO 1 AQUI: Adicionando as imagens >>>
            return ResponseEntity.ok(new LoginResponse(
                accessToken, 
                usuario.getNome(), 
                tipoUsuarioStr, 
                entidadeId, 
                usuario.getEmail(),
                usuario.getImagem(),        // Novo parâmetro
                usuario.getImagemBackground() // Novo parâmetro
            ));
        }
        return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Credenciais inválidas.");
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
            String idStr = claims.get("id", String.class); 
            UUID usuarioId = UUID.fromString(idStr);
            Usuario usuario = repo.findById(usuarioId).orElse(null);
            if (usuario != null && usuario.getEmail().equals(email)) {
                String novoAccessToken = jwt.generateAccessToken(usuario.getEmail());
                String tipoUsuarioStr = usuario.getTipo() == TipoUsuario.CLIENTE ? "CLIENTE" : "RESTAURANTE";
                
                // <<< ALTERAÇÃO 2 AQUI: Adicionando as imagens >>>
                return ResponseEntity.ok(new LoginResponse(
                        novoAccessToken, 
                        usuario.getNome(), 
                        tipoUsuarioStr, 
                        usuario.getId(), 
                        usuario.getEmail(),
                        usuario.getImagem(),        // Novo parâmetro
                        usuario.getImagemBackground() // Novo parâmetro
                ));
            }
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Usuário não encontrado ou dados do token inconsistentes.");
        } catch (Exception e) { 
            e.printStackTrace();
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Refresh token inválido ou expirado.");
        }
    }


    @PostMapping("/register")
    public ResponseEntity<?> register(@RequestBody RegistroRequest request, HttpServletResponse responseHttp) {
        ResponseExceptionHandler handler = new ResponseExceptionHandler();

        // Validações...
        handler.checkEmptyStrting("nome", request.getNome());
        handler.checkEmptyStrting("email", request.getEmail());
        handler.checkEmptyStrting("senha", request.getSenha());
        handler.checkEmptyObject("endereco", request.getEndereco());
        handler.checkEmptyObject("tipo", request.getTipo());
        if (request.getTelefone() == null || request.getTelefone().isBlank()) {
            handler.checkCondition("O campo 'telefone' é obrigatório.", true);
        }
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
        
        // No momento do registro, as imagens são nulas, o que é o comportamento esperado.
        // O usuário fará o upload depois.
        usuario.setImagem(null);
        usuario.setImagemBackground(null);
        
        usuario = repo.save(usuario); 

        // Geração de Tokens...
        String accessToken = jwt.generateAccessToken(usuario.getEmail());
        String refreshTokenString = jwt.generateRefreshToken(usuario.getId(), usuario.getEmail());

        Cookie refreshTokenCookie = new Cookie("refreshToken", refreshTokenString);
        refreshTokenCookie.setHttpOnly(true);
        refreshTokenCookie.setSecure(false); 
        refreshTokenCookie.setPath("/auth"); 
        refreshTokenCookie.setMaxAge(30 * 60 * 60);
        responseHttp.addCookie(refreshTokenCookie);

        if (usuario.getTipo() == TipoUsuario.CLIENTE) {
            Cliente cliente = new Cliente();
            cliente.setUsuario(usuario);
            repoClient.save(cliente);
            
            // <<< ALTERAÇÃO 3 AQUI: Adicionando as imagens (que serão nulas) >>>
            return ResponseEntity.ok(new LoginResponse(
                    accessToken, 
                    usuario.getNome(), 
                    "CLIENTE", 
                    usuario.getId(), 
                    usuario.getEmail(),
                    usuario.getImagem(),
                    usuario.getImagemBackground()
            ));

        } else { // TipoUsuario.RESTAURANTE
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

            // <<< ALTERAÇÃO 4 AQUI: Adicionando as imagens (que serão nulas) >>>
            return ResponseEntity.ok(new LoginResponse(
                    accessToken, 
                    usuario.getNome(), 
                    "RESTAURANTE", 
                    usuario.getId(), 
                    usuario.getEmail(),
                    usuario.getImagem(),
                    usuario.getImagemBackground()
            ));
        }
    }
}