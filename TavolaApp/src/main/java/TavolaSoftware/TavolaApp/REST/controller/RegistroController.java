package TavolaSoftware.TavolaApp.REST.controller;

import TavolaSoftware.TavolaApp.REST.dto.RegistroRequest;
import TavolaSoftware.TavolaApp.REST.dto.LoginResponse;
import TavolaSoftware.TavolaApp.REST.model.Cliente;
import TavolaSoftware.TavolaApp.REST.model.Restaurante;
import TavolaSoftware.TavolaApp.REST.repository.ClienteRepository;
import TavolaSoftware.TavolaApp.REST.repository.RestauranteRepository;
import TavolaSoftware.TavolaApp.REST.security.JwtUtil;
import TavolaSoftware.TavolaApp.tools.TipoUsusario;

import org.springframework.beans.factory.annotation.Autowired;
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

    @PostMapping ("/register")
    public ResponseEntity<?> registrar(@RequestBody RegistroRequest request) {
        String senhaCriptografada = BCrypt.hashpw(request.getSenha(), BCrypt.gensalt());

        if (request.getTipo() == TipoUsusario.CLIENTE) {
            Cliente novoCliente = new Cliente(request.getNome(), senhaCriptografada, request.getEmail(), request.getEndereco());
            repoClient.save(novoCliente);
            String accessToken = jwt.generateAccessToken(novoCliente.getEmail());
            String refreshToken = jwt.generateRefreshToken(novoCliente.getId().toString());
            return ResponseEntity.ok(new LoginResponse(accessToken, refreshToken, novoCliente.getNome(), "CLIENTE"));

        } else if (request.getTipo() == TipoUsusario.RESTAURANTE) {
            Restaurante novoRestaurante = new Restaurante();
            novoRestaurante.setName(request.getNome());
            novoRestaurante.setEmail(request.getEmail());
            novoRestaurante.setPassword(senhaCriptografada);
            novoRestaurante.setAdress(request.getEndereco());
            novoRestaurante.setTables(request.getMesas());
            novoRestaurante.setHour(request.getHoraFuncionamento());
            repoRestaurante.save(novoRestaurante);
            String accessToken = jwt.generateAccessToken(novoRestaurante.getEmail());
            String refreshToken = jwt.generateRefreshToken(novoRestaurante.getId().toString());
            return ResponseEntity.ok(new LoginResponse(accessToken, refreshToken, novoRestaurante.getName(), "RESTAURANTE"));
        }

        return ResponseEntity.badRequest().body("Tipo de usuário inválido.");
    }
}
