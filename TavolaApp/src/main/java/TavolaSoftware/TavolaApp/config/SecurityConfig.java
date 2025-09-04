package TavolaSoftware.TavolaApp.config;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import TavolaSoftware.TavolaApp.REST.security.JwtAuthenticationFilter;
import jakarta.servlet.http.HttpServletResponse;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.http.SessionCreationPolicy;

@Configuration
@EnableWebSecurity
public class SecurityConfig {

    @Autowired
    private JwtAuthenticationFilter jwtFilter;
    
    @Bean
    public BCryptPasswordEncoder passwordEncoder() {
        return new BCryptPasswordEncoder();
    }

    @Bean
    public SecurityFilterChain filterChain(HttpSecurity http) throws Exception {
        http
            .cors().and() 
            .csrf(csrf -> csrf.disable()) 
            .authorizeHttpRequests(auth -> auth
                .requestMatchers( 
                	"/auth/reenviar-codigo",
                    "/auth/refresh",
                    "/auth/login",
                    "/auth/login/**",
                    "/auth/senha/**",
                    "/auth/register",
                    "/auth/register/**",
                    "/auth/verificar",
                    "/v3/api-docs/**",    
                    "/swagger-ui/**",    
                    "/swagger-ui.html",  
                    "/upl/**" 
                ).permitAll() 
                .anyRequest().authenticated() 
            )
            .sessionManagement(sess ->
                sess.sessionCreationPolicy(SessionCreationPolicy.STATELESS) 
            )
            .exceptionHandling(exceptions -> exceptions 
                .authenticationEntryPoint((request, response, authException) -> 
                    response.sendError(HttpServletResponse.SC_UNAUTHORIZED, "Não autorizado: " + authException.getMessage())
                )
            )
            // Adiciona o filtro JWT apenas UMA VEZ
            .addFilterBefore(jwtFilter, UsernamePasswordAuthenticationFilter.class);
        
        return http.build();
    }
}