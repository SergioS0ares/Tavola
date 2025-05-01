package TavolaSoftware.TavolaApp.REST.controller;

import TavolaSoftware.TavolaApp.REST.dto.RegistroRequest;
import TavolaSoftware.TavolaApp.REST.dto.LoginResponse;
import TavolaSoftware.TavolaApp.REST.model.Cliente;
import TavolaSoftware.TavolaApp.REST.model.Restaurante;
import TavolaSoftware.TavolaApp.REST.repository.ClienteRepository;
import TavolaSoftware.TavolaApp.REST.repository.RestauranteRepository;
import TavolaSoftware.TavolaApp.REST.security.JwtUtil;
import TavolaSoftware.TavolaApp.tools.ResponseExceptionHandler;
import TavolaSoftware.TavolaApp.tools.TipoUsuario;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.bcrypt.BCrypt;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/auth")
public class RegistroController {

    @Autowired
    private ClienteRepository repoClient;

    @Autowired
    private RestauranteRepository repoRestaurante;

    @Autowired
    private JwtUtil jwt;

    @PostMapping("/register")
    public ResponseEntity<?> registrar(@RequestBody RegistroRequest request) {
        ResponseExceptionHandler handler = new ResponseExceptionHandler();

        // Validação comum
        handler.checkEmptyStrting("nome", request.getNome());
        handler.checkEmptyStrting("email", request.getEmail());
        handler.checkEmptyStrting("senha", request.getSenha());
        handler.checkEmptyObject("endereco", request.getEndereco());
        handler.checkEmptyObject("tipo", request.getTipo());

        // Verificação de email já existente (para ambos)
        if (repoClient.findByEmail(request.getEmail()) != null || 
            repoRestaurante.findByEmail(request.getEmail()) != null) {
            handler.checkCondition("O e-mail informado já está em uso.", true);
        }

        // Validações específicas de restaurante
        if (request.getTipo() == TipoUsuario.RESTAURANTE) {
            handler.checkEmptyList("mesas", request.getMesas());
            handler.checkEmptyList("horaFuncionamento", request.getHoraFuncionamento());

            // Verifica se já existe restaurante com mesmo nome
            boolean nomeRepetido = repoRestaurante.findAll().stream()
                    .anyMatch(r -> r.getNome().equalsIgnoreCase(request.getNome()));

            handler.checkCondition("Já existe um restaurante com esse nome.", nomeRepetido);
        }

        if (handler.errors()) {
            return handler.generateResponse(HttpStatus.BAD_REQUEST);
        }

        String senhaCriptografada = BCrypt.hashpw(request.getSenha(), BCrypt.gensalt());

        if (request.getTipo() == TipoUsuario.CLIENTE) {
            Cliente novoCliente = new Cliente(request.getNome(), senhaCriptografada, request.getEmail(), request.getEndereco());
            repoClient.save(novoCliente);

            String accessToken = jwt.generateAccessToken(novoCliente.getEmail());
            String refreshToken = jwt.generateRefreshToken(novoCliente.getId().toString());
            return ResponseEntity.ok(new LoginResponse(accessToken, refreshToken, novoCliente.getNome(), "CLIENTE"));

        } else if (request.getTipo() == TipoUsuario.RESTAURANTE) {
            Restaurante novoRestaurante = new Restaurante();
            novoRestaurante.setNome(request.getNome());
            novoRestaurante.setEmail(request.getEmail());
            novoRestaurante.setSenha(senhaCriptografada);
            novoRestaurante.setEndereco(request.getEndereco());
            novoRestaurante.setMesas(request.getMesas());
            novoRestaurante.setHoraFuncionamento(request.getHoraFuncionamento());
            novoRestaurante.setTipo(TipoUsuario.RESTAURANTE);
            repoRestaurante.save(novoRestaurante);

            String accessToken = jwt.generateAccessToken(novoRestaurante.getEmail());
            String refreshToken = jwt.generateRefreshToken(novoRestaurante.getId().toString());
            return ResponseEntity.ok(new LoginResponse(accessToken, refreshToken, novoRestaurante.getNome(), "RESTAURANTE"));
        }

        return ResponseEntity.badRequest().body("Tipo de usuário inválido.");
    }
}
