package TavolaSoftware.TavolaApp;

import TavolaSoftware.TavolaApp.REST.security.JwtUtil;
import io.jsonwebtoken.Claims;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class TavolaAppApplication {

	public static void main(String[] args) {
		SpringApplication.run(TavolaAppApplication.class, args);

		try {
			System.out.println("\n===== TESTE DE CHAVE RSA =====");

			JwtUtil jwt = new JwtUtil();

			String email = "julio@email.com";
			String token = jwt.generateAccessToken(email);

			System.out.println("✅ Token gerado com sucesso:");
			System.out.println(token);

			Claims claims = jwt.parseToken(token);
			System.out.println("✅ Token validado com sucesso:");
			System.out.println("Subject: " + claims.getSubject());

			System.out.println("===== FIM DO TESTE =====\n");

		} catch (Exception e) {
			System.out.println("❌ Erro durante o teste de geração/validação de token:");
			e.printStackTrace();
			System.out.println("===== TESTE FALHOU =====\n");
		}
	}
}
