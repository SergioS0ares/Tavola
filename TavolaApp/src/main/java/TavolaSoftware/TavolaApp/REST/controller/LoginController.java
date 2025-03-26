package TavolaSoftware.TavolaApp.REST.controller;

import TavolaSoftware.TavolaApp.REST.model.*;
import TavolaSoftware.TavolaApp.REST.repository.*;
import TavolaSoftware.TavolaApp.REST.dto.*;
import TavolaSoftware.TavolaApp.REST.security.JwtUtil;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.bcrypt.BCrypt;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/auth")
public class LoginController {

    @Autowired
    private ClienteRepository repo;

    @Autowired
    private RestauranteRepository repoRestaurante;

    @Autowired
    private JwtUtil jwtUtil;

    @PostMapping("/login")
    public ResponseEntity<?> login(@RequestBody LoginRequest loginRequest) {
        String email = loginRequest.getEmail();
        String senha = loginRequest.getSenha();

        Cliente cliente = repo.findByEmail(email);
        if (cliente != null && BCrypt.checkpw(senha, cliente.getSenha())) {
            String accessToken = jwtUtil.generateAccessToken(cliente.getEmail());
            String refreshToken = jwtUtil.generateRefreshToken(cliente.getId().toString());
            return ResponseEntity.ok(new LoginResponse(accessToken, refreshToken, cliente.getNome(), "CLIENTE"));
        }

        Restaurante restaurante = repoRestaurante.findByEmail(email);
        if (restaurante != null && BCrypt.checkpw(senha, restaurante.getPassword())) {
            String accessToken = jwtUtil.generateAccessToken(restaurante.getEmail());
            String refreshToken = jwtUtil.generateRefreshToken(restaurante.getId().toString());
            return ResponseEntity.ok(new LoginResponse(accessToken, refreshToken, restaurante.getName(), "RESTAURANTE"));
        }

        return ResponseEntity.status(401).body("Credenciais inválidas.");
    }
}
