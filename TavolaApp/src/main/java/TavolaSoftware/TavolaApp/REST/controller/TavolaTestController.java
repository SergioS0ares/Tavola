package TavolaSoftware.TavolaApp.REST.controller;

import java.util.UUID;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import TavolaSoftware.TavolaApp.REST.security.JwtUtil;

@RestController("/test")
public class TavolaTestController {

	@Autowired
	JwtUtil jwt;
	
	@GetMapping("/dev-token")
	public ResponseEntity<String> gerarTokenDev() {
	    // Substitua com um email válido de algum cliente ou restaurante já cadastrado
	    String fakeEmail = "dev@tavola.com";
	    String fakeId = UUID.randomUUID().toString(); // ou ID de verdade se quiser

	    String accessToken = jwt.generateAccessToken(fakeEmail);
	    String refreshToken = jwt.generateRefreshToken(fakeId);

	    return ResponseEntity.ok("AccessToken: \"" + accessToken + "\" RefreshToken: \"" + refreshToken);
	}

}
