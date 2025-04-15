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
	public ResponseEntity<String> gerarTokenDesenvolvedor() {
	    String emailFicticio = "dev@tavola.com";
	    String idFicticio = UUID.randomUUID().toString();

	    String accessToken = jwt.generateAccessToken(emailFicticio);
	    String refreshToken = jwt.generateRefreshToken(idFicticio);

	    return ResponseEntity.ok("AccessToken: \"" + accessToken + "\" RefreshToken: \"" + refreshToken);
	}


}
