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
import TavolaSoftware.TavolaApp.REST.model.Mesas;
import TavolaSoftware.TavolaApp.tools.ResponseExceptionHandler;
import TavolaSoftware.TavolaApp.tools.TipoUsuario;
import io.jsonwebtoken.Claims;
// UploadUtils não é usado diretamente aqui, mas mantido se houver outros usos futuros.
// import TavolaSoftware.TavolaApp.tools.UploadUtils; 

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.bcrypt.BCrypt;
import org.springframework.web.bind.annotation.*;
import jakarta.servlet.http.Cookie;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse; // <<< NOVO IMPORT

import java.io.IOException;
import java.util.List;
import java.util.UUID;
import java.util.ArrayList;

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

    // @Autowired // Removido se uplUtil não for usado diretamente aqui.
    // private UploadUtils uplUtil;

    // POST
    @PostMapping("/login")
    // Adicionar HttpServletResponse response como parâmetro
    public ResponseEntity<?> login(@RequestBody LoginRequest loginRequest, HttpServletResponse response) { // <<< MUDANÇA AQUI
        String email = loginRequest.getEmail();
        String senha = loginRequest.getSenha();

        Usuario usuario = repo.findByEmail(email);

        if (usuario != null && BCrypt.checkpw(senha, usuario.getSenha())) {
            String accessToken = jwt.generateAccessToken(usuario.getEmail());
            // O ID usado para o refresh token é o do Usuário
            String refreshTokenString = jwt.generateRefreshToken(usuario.getId(), usuario.getEmail());

            // Configurar o cookie para o refreshToken
            Cookie refreshTokenCookie = new Cookie("refreshToken", refreshTokenString);
            refreshTokenCookie.setHttpOnly(true);
            refreshTokenCookie.setSecure(false); // EM DESENVOLVIMENTO: false. EM PRODUÇÃO: true (HTTPS)
            refreshTokenCookie.setPath("/auth"); 
            refreshTokenCookie.setMaxAge(30 * 60 * 60); // 30 horas em segundos
            response.addCookie(refreshTokenCookie);

            String tipoUsuarioStr = "";
            UUID entidadeId = usuario.getId(); // Por padrão, usa o ID do usuário

            if (usuario.getTipo() == TipoUsuario.CLIENTE) {
                tipoUsuarioStr = "CLIENTE";
                // O ID do Cliente é o mesmo do Usuário devido ao @MapsId, então usuario.getId() é o correto.
            } else if (usuario.getTipo() == TipoUsuario.RESTAURANTE) {
                tipoUsuarioStr = "RESTAURANTE";
                // O ID do Restaurante é o mesmo do Usuário devido ao @MapsId.
            } else {
                // Tipo de usuário desconhecido ou não tratado
                return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Tipo de usuário não configurado corretamente.");
            }

            return ResponseEntity.ok(new LoginResponse(
                accessToken,
                null, // Não enviar refreshToken no corpo
                // refreshTokenString, 
                usuario.getNome(),
                tipoUsuarioStr,
                entidadeId, // ID do usuário (que é o ID da entidade Cliente/Restaurante)
                usuario.getEmail()
            ));
        }
        return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Credenciais inválidas.");
    }

    @PostMapping("/refresh")
    public ResponseEntity<?> refreshToken(HttpServletRequest request) { // HttpServletResponse não é necessário aqui, pois só lemos o cookie
        try {
            System.out.println("\n>>> ENTROU no refresh\n");

            String refreshToken = null;

            if (request.getCookies() != null) {
                for (Cookie cookie : request.getCookies()) {
                    System.out.println("🍪 Cookie recebido: " + cookie.getName() + " = " + cookie.getValue());
                    if (cookie.getName().equals("refreshToken")) {
                        refreshToken = cookie.getValue();
                        break; // Encontrou o cookie, pode sair do loop
                    }
                }
            }

            if (refreshToken == null) {
                System.out.println("❌ Cookie 'refreshToken' não encontrado.");
                return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Refresh token não encontrado no cookie.");
            }

            if (!jwt.isTokenValid(refreshToken)) { // Adicionar validação aqui também
                System.out.println("❌ Refresh token inválido ou expirado (validação JWT).");
                return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Refresh token inválido ou expirado.");
            }

            Claims claims = jwt.parseToken(refreshToken); // parseToken já valida a assinatura e expiração

            String email = claims.getSubject();
            String idStr = claims.get("id", String.class); // O ID no claim é o do Usuário
            UUID usuarioId = UUID.fromString(idStr);

            System.out.println("✅ Email do token: " + email);
            System.out.println("🆔 ID do usuário (do token): " + usuarioId);

            Usuario usuario = repo.findById(usuarioId).orElse(null);

            if (usuario != null && usuario.getEmail().equals(email)) {
                String novoAccessToken = jwt.generateAccessToken(usuario.getEmail());
                String tipoUsuarioStr = usuario.getTipo() == TipoUsuario.CLIENTE ? "CLIENTE" : "RESTAURANTE";
                
                System.out.println("✅ Usuário encontrado: " + usuario.getNome() + " (" + tipoUsuarioStr + ")");
                
                // É uma boa prática também renovar o refresh token e reenviá-lo no cookie
                // Mas para simplificar, vamos manter o refreshToken original por enquanto.
                // Se quiser renovar:
                // String novoRefreshTokenString = jwt.generateRefreshToken(usuario.getId(), usuario.getEmail());
                // Cookie novoRefreshTokenCookie = new Cookie("refreshToken", novoRefreshTokenString);
                // ... configurar e adicionar à response (precisaria injetar HttpServletResponse aqui também)
                // mas nós não vamos fazer isso... por enquanto!

                return ResponseEntity.ok(new LoginResponse(
                        novoAccessToken,
                        null, // Não precisa enviar o refresh token no corpo
                        // refreshToken, // A menos que decida renovar e enviar o novo no corpo também
                        usuario.getNome(),
                        tipoUsuarioStr,
                        usuario.getId(),
                        usuario.getEmail()
                ));
            }

            System.out.println("⚠️ Nenhum usuário encontrado com o ID e email do token.");
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Usuário não encontrado ou dados do token inconsistentes.");
        } catch (Exception e) { // Captura JwtException de parseToken se inválido/expirado
            System.out.println("❌ Erro ao processar refresh token:");
            e.printStackTrace();
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Refresh token inválido ou expirado.");
        } finally {
            System.out.println("<<< SAINDO do refresh\n");
        }
    }

    @PostMapping("/register")
    // Adicionar HttpServletResponse response como parâmetro
    public ResponseEntity<?> register(@RequestBody RegistroRequest request, HttpServletResponse response) { // <<< MUDANÇA AQUI
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

        String accessToken = jwt.generateAccessToken(usuario.getEmail());
        // O ID usado para o refresh token é o do Usuário, que é o PK para Cliente/Restaurante via @MapsId
        String refreshTokenString = jwt.generateRefreshToken(usuario.getId(), usuario.getEmail());

        // Configurar o cookie para o refreshToken
        Cookie refreshTokenCookie = new Cookie("refreshToken", refreshTokenString);
        refreshTokenCookie.setHttpOnly(true); // Impede acesso via JavaScript (mais seguro)
        refreshTokenCookie.setSecure(false);  // EM DESENVOLVIMENTO: false. EM PRODUÇÃO: true (HTTPS)
        refreshTokenCookie.setPath("/auth");  // Caminho onde o cookie é válido (consistente com /auth/refresh)
        refreshTokenCookie.setMaxAge(30 * 60 * 60); // Expiração em segundos (30 horas)
        response.addCookie(refreshTokenCookie); // Adiciona o cookie à resposta

        if (usuario.getTipo() == TipoUsuario.CLIENTE) {
            Cliente cliente = new Cliente();
            cliente.setUsuario(usuario);
            // cliente.setId(usuario.getId()); // @MapsId cuida disso
            repoClient.save(cliente);
            
            return ResponseEntity.ok(new LoginResponse(
                    accessToken,
                    null, // Não enviar refreshToken no corpo se ele já vai em cookie HttpOnly
                    // refreshTokenString, // Ou envie se o front precisar por algum motivo específico
                    usuario.getNome(), "CLIENTE",
                    usuario.getId(), // Retorna o ID do usuário (que é o mesmo do cliente)
                    usuario.getEmail()
            ));

        } else { // TipoUsuario.RESTAURANTE
            Restaurante restaurante = new Restaurante();
            restaurante.setUsuario(usuario);
            // restaurante.setID(usuario.getId()); // @MapsId cuida disso
            
            List<Mesas> mesas = request.getMesas();
            if ((mesas == null || mesas.isEmpty()) && request.getQuantidadeMesas() != null) {
                Mesas padrao = new Mesas();
                padrao.setNome("Principal");
                padrao.setDescricao("Área principal do restaurante");
                padrao.setImagem(new ArrayList<>());
                padrao.setQuantidadeTotal(request.getQuantidadeMesas());
                padrao.setQuantidadeDisponivel(request.getQuantidadeMesas());
                padrao.setDisponivel(1); // Assumindo que 1 significa disponível
                mesas = List.of(padrao);
            }
            if (mesas != null && !mesas.isEmpty()) {
            	mesas.forEach(m -> {
                    m.setRestaurante(restaurante); // Garante a associação bidirecional
                    restaurante.addMesa(m);
                });
            }
            restaurante.setHoraFuncionamento(request.getHoraFuncionamento());
            repoRestaurante.save(restaurante); // Salva o restaurante com as mesas associadas

            return ResponseEntity.ok(new LoginResponse(
                    accessToken,
                    null, // Não enviar refreshToken no corpo
                    // refreshTokenString, 
                    usuario.getNome(), "RESTAURANTE",
                    usuario.getId(), // Retorna o ID do usuário (que é o mesmo do restaurante)
                    usuario.getEmail()
            ));
        }
    }
}