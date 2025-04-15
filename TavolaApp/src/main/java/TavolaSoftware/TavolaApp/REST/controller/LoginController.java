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
    private RestauranteRepository repoRestaurant;

    @Autowired
    private JwtUtil jwt;

    @PostMapping("/login")
    public ResponseEntity<?> login(@RequestBody LoginRequest loginRequest) {
        String email = loginRequest.getEmail();
        String senha = loginRequest.getSenha();

        Cliente cliente = repo.findByEmail(email);
        if (cliente != null && BCrypt.checkpw(senha, cliente.getSenha())) {
            String accessToken = jwt.generateAccessToken(cliente.getEmail());
            String refreshToken = jwt.generateRefreshToken(cliente.getId().toString());
            return ResponseEntity.ok(new LoginResponse(accessToken, refreshToken, cliente.getNome(), "CLIENTE"));
        }

        Restaurante restaurante = repoRestaurant.findByEmail(email);
        if (restaurante != null && BCrypt.checkpw(senha, restaurante.getSenha())) {
            String accessToken = jwt.generateAccessToken(restaurante.getEmail());
            String refreshToken = jwt.generateRefreshToken(restaurante.getId().toString());
            return ResponseEntity.ok(new LoginResponse(accessToken, refreshToken, restaurante.getNome(), "RESTAURANTE"));
        }

        return ResponseEntity.status(401).body("Credenciais inválidas.");
    }

}
