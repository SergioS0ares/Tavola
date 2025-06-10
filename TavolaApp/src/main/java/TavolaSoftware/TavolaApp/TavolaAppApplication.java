package TavolaSoftware.TavolaApp;

import TavolaSoftware.TavolaApp.REST.security.JwtUtil;
import io.jsonwebtoken.Claims;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.scheduling.annotation.EnableScheduling;

@SpringBootApplication
@EnableScheduling // <<< ADICIONAR ESTA ANOTAÇÃO
public class TavolaAppApplication {
    public static void main(String[] args) {
		SpringApplication.run(TavolaAppApplication.class, args);
	}
}
