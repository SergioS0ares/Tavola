package TavolaSoftware.TavolaApp.config;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;

import TavolaSoftware.TavolaApp.REST.security.JwtAuthenticationFilter;

import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.http.SessionCreationPolicy;

@Configuration
@EnableWebSecurity
public class SecurityConfig {

    @Autowired
    private JwtAuthenticationFilter jwtFilter;

    @Bean
    public SecurityFilterChain filterChain(HttpSecurity http) throws Exception {
        http
            // 1️⃣ Ativa o CORS usando as regras do CorsConfig
            .cors().and()

            // 2️⃣ Desativa CSRF (REST stateless)
            .csrf(csrf -> csrf.disable())

            // 3️⃣ Define quem pode acessar sem autenticação
            .authorizeHttpRequests(auth -> auth
                .requestMatchers(
                    "/auth/refresh",
                    "/auth/login",
                    "/auth/register",
                    "/v3/api-docs/**",
                    "/swagger-ui/**",
                    "/swagger-ui.html"
                ).permitAll()
                .anyRequest().authenticated()
            )

            // 4️⃣ Stateless session
            .sessionManagement(sess ->
                sess.sessionCreationPolicy(SessionCreationPolicy.STATELESS)
            )

            // 5️⃣ Insere o filtro JWT antes do filtro padrão de Spring
            .addFilterBefore(jwtFilter, UsernamePasswordAuthenticationFilter.class)
        ;

        return http.build();
    }
}
