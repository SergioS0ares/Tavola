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

    @PostMapping("/register")
    public ResponseEntity<?> registrar(@RequestBody RegistroRequest request) {
        String senhaCriptografada = BCrypt.hashpw(request.getSenha(), BCrypt.gensalt());

        if (request.getTipo() == TipoUsusario.CLIENTE) {
            Cliente novoCliente = new Cliente();
            novoCliente.setNome(request.getNome());
            novoCliente.setEmail(request.getEmail());
            novoCliente.setSenha(senhaCriptografada);
            novoCliente.setEndereco(request.getEndereco());
            novoCliente.setTipo(TipoUsusario.CLIENTE);
            repoClient.save(novoCliente);

            String accessToken = jwt.generateAccessToken(novoCliente.getEmail());
            String refreshToken = jwt.generateRefreshToken(novoCliente.getId().toString());
            return ResponseEntity.ok(new LoginResponse(accessToken, refreshToken, novoCliente.getNome(), "CLIENTE"));

        } else if (request.getTipo() == TipoUsusario.RESTAURANTE) {
            Restaurante novoRestaurante = new Restaurante();
            novoRestaurante.setNome(request.getNome());
            novoRestaurante.setEmail(request.getEmail());
            novoRestaurante.setSenha(senhaCriptografada);
            novoRestaurante.setEndereco(request.getEndereco());
            novoRestaurante.setMesas(request.getMesas());
            novoRestaurante.setHoraFuncionamento(request.getHoraFuncionamento());
            novoRestaurante.setTipo(TipoUsusario.RESTAURANTE);
            repoRestaurante.save(novoRestaurante);

            String accessToken = jwt.generateAccessToken(novoRestaurante.getEmail());
            String refreshToken = jwt.generateRefreshToken(novoRestaurante.getId().toString());
            return ResponseEntity.ok(new LoginResponse(accessToken, refreshToken, novoRestaurante.getNome(), "RESTAURANTE"));
        }

        return ResponseEntity.badRequest().body("Tipo de usuário inválido.");
    }

}