package TavolaSoftware.TavolaApp.REST.security;

import jakarta.servlet.FilterChain;
import jakarta.servlet.ServletException;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.web.authentication.WebAuthenticationDetailsSource;
import org.springframework.stereotype.Component;
import org.springframework.web.filter.OncePerRequestFilter;

import java.io.IOException;

@Component
public class JwtAuthenticationFilter extends OncePerRequestFilter {

    private final JwtUtil jwtUtil;

    public JwtAuthenticationFilter(JwtUtil jwtUtil) {
        this.jwtUtil = jwtUtil;
    }

    @Override
    protected void doFilterInternal(HttpServletRequest request, HttpServletResponse response, FilterChain filterChain)
            throws ServletException, IOException {

        final String path = request.getServletPath();
        // Log inicial para cada requisição que passa pelo filtro
        System.out.println("[JwtFilter] Recebida requisição para o path: " + path + " Método: " + request.getMethod());

        // Ignorar autenticação nas rotas públicas
        if (
        		path.equals("/auth/reenviar-codigo") ||
        	    path.equals("/auth/register") ||
        	    path.equals("/swagger-ui.html") ||
        	    path.equals("/auth/verificar") ||
        	    path.equals("/auth/refresh") ||
        	    path.equals("/auth/login") ||
        	    path.startsWith("/v3/api-docs") ||      
        	    path.startsWith("/swagger-ui") ||      
        	    path.startsWith("/upl")
        	) {
        	    System.out.println("[JwtFilter] Path público, ignorando autenticação JWT: " + path); // Log existente e mantido
        	    filterChain.doFilter(request, response);
        	    return;
        	}

        System.out.println("[JwtFilter] Path requer autenticação: " + path);
        final String authHeader = request.getHeader("Authorization");

        if (authHeader == null || !authHeader.startsWith("Bearer ")) {
            System.out.println("[JwtFilter] Cabeçalho Authorization ausente ou não começa com 'Bearer ' para o path: " + path);
            // Para endpoints protegidos, se não houver token, a requisição prossegue mas será barrada pelo Spring Security
            // resultando em 401 (ou 403 se alguma outra autenticação residual existir e não for suficiente).
            // Não é necessário enviar erro aqui, pois o Spring Security cuidará disso se o endpoint for protegido.
            filterChain.doFilter(request, response);
            return;
        }

        final String token = authHeader.substring(7);
        System.out.println("[JwtFilter] Token extraído do cabeçalho: " + token);

        if (jwtUtil.isTokenValid(token)) { //
            String username = jwtUtil.parseToken(token).getSubject(); //
            System.out.println("[JwtFilter] Token VÁLIDO para o usuário: " + username + " no path: " + path);

            // Se o contexto de segurança já tiver uma autenticação, não sobrescrever (pode acontecer em alguns cenários)
            if (SecurityContextHolder.getContext().getAuthentication() == null) {
                UsernamePasswordAuthenticationToken authentication = new UsernamePasswordAuthenticationToken(
                        username, null, null // Não precisamos de credenciais (senha) aqui, apenas o principal
                );
                authentication.setDetails(new WebAuthenticationDetailsSource().buildDetails(request));
                SecurityContextHolder.getContext().setAuthentication(authentication); //
                System.out.println("[JwtFilter] Contexto de segurança populado para: " + username);
            } else {
                 System.out.println("[JwtFilter] Contexto de segurança já continha autenticação para: " + SecurityContextHolder.getContext().getAuthentication().getName());
            }
        } else {
            System.out.println("[JwtFilter] Token INVÁLIDO (segundo jwtUtil.isTokenValid) para o path: " + path); // Log existente e mantido
            // Limpar qualquer contexto de segurança que possa existir de uma tentativa anterior
            SecurityContextHolder.clearContext(); //
            response.sendError(HttpServletResponse.SC_UNAUTHORIZED, "Token JWT inválido ou expirado"); //
            return; // Interrompe a cadeia de filtros
        }
        
        System.out.println("[JwtFilter] Prosseguindo com a cadeia de filtros para o path: " + path);
        filterChain.doFilter(request, response);
    }
}