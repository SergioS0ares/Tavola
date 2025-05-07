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

        Cliente cliente = repo.findByUsuarioEmail(email);
        if (cliente != null && BCrypt.checkpw(senha, cliente.getUsuario().getSenha())) {
            String accessToken = jwt.generateAccessToken(cliente.getUsuario().getEmail());
            String refreshToken = jwt.generateRefreshToken(cliente.getId().toString());
            return ResponseEntity.ok(new LoginResponse(
                accessToken, refreshToken,
                cliente.getUsuario().getNome(), "CLIENTE",
                cliente.getId(), cliente.getUsuario().getEmail()
            ));
        }

        Restaurante restaurante = repoRestaurant.findByUsuarioEmail(email);
        if (restaurante != null && BCrypt.checkpw(senha, restaurante.getUsuario().getSenha())) {
            String accessToken = jwt.generateAccessToken(restaurante.getEmail());
            String refreshToken = jwt.generateRefreshToken(restaurante.getId().toString());
            return ResponseEntity.ok(new LoginResponse(
                accessToken, refreshToken,
                restaurante.getNome(), "RESTAURANTE",
                restaurante.getId(), restaurante.getEmail()
            ));
        }

        return ResponseEntity.status(401).body("Credenciais inválidas.");
    }
}
