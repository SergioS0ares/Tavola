package TavolaSoftware.TavolaApp.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@Configuration
public class CorsConfig {

    @Bean
    public WebMvcConfigurer corsConfigurer() {
        return new WebMvcConfigurer() {
            @Override
            public void addCorsMappings(CorsRegistry registry) {
                registry.addMapping("/**") // aplica pra todos os endpoints
                        .allowedOrigins("http://localhost:4200", "http://localhost:8080", "http://localhost", "http://64.181.187.11") // Permite o Angular, o ambiente Docker, a nuvem e o Swagger
                        .allowedMethods("GET", "POST", "PUT", "DELETE", "OPTIONS")
                        .allowedHeaders("*")
                        .allowCredentials(true); // se estiver usando cookies/autenticação
            }
        };
    }
}