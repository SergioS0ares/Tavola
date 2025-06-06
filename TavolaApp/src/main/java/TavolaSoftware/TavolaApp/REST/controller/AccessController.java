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

    // ... métodos login() e refreshToken() permanecem os mesmos ...
    @PostMapping("/login")
    public ResponseEntity<?> login(@RequestBody LoginRequest loginRequest, HttpServletResponse response) {
        //...
        return null;
    }

    @PostMapping("/refresh")
    public ResponseEntity<?> refreshToken(HttpServletRequest request) {
        //...
        return null;
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
            
            return ResponseEntity.ok(new LoginResponse(
                    accessToken, null, usuario.getNome(), "CLIENTE", usuario.getId(), usuario.getEmail()
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

            // <<< TODA A LÓGICA DE CRIAÇÃO DE MESAS PADRÃO FOI REMOVIDA DAQUI >>>

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

            return ResponseEntity.ok(new LoginResponse(
                    accessToken, null, usuario.getNome(), "RESTAURANTE", usuario.getId(), usuario.getEmail()
            ));
        }
    }
}