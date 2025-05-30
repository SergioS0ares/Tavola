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

        // Ignorar autenticação nas rotas públicas
        if (
        	    path.equals("/auth/login") ||
        	    path.equals("/auth/register") ||
        	    path.equals("/auth/refresh") ||
        	    path.startsWith("/v3/api-docs") ||      // Corrigido para startsWith e adicionado /
        	    path.startsWith("/swagger-ui") ||       // Corrigido para startsWith
        	    path.equals("/swagger-ui.html") ||      // Mantido .equals se for exato
        	    path.startsWith("/upl/cardapios/")      // <--- CORREÇÃO PRINCIPAL AQUI: usar startsWith e adicionar a barra final
        	) {
        	    filterChain.doFilter(request, response);
        	    System.out.println("Filtro JWT ignorado para path: " + path);
        	    return;
        	}


        final String authHeader = request.getHeader("Authorization");
        if (authHeader == null || !authHeader.startsWith("Bearer ")) {
            filterChain.doFilter(request, response);
            return;
        }

        final String token = authHeader.substring(7);
        if (jwtUtil.isTokenValid(token)) {
            String username = jwtUtil.parseToken(token).getSubject();

            var authentication = new UsernamePasswordAuthenticationToken(
                    username, null, null 
            );
            authentication.setDetails(new WebAuthenticationDetailsSource().buildDetails(request));
            SecurityContextHolder.getContext().setAuthentication(authentication);
        } else {
            // Token presente, mas inválido (expirado, assinatura incorreta, etc.)
            // Limpar qualquer contexto de segurança que possa existir de uma tentativa anterior
            SecurityContextHolder.clearContext();
            response.sendError(HttpServletResponse.SC_UNAUTHORIZED, "Token JWT inválido ou expirado");
            System.out.println("Filtro JWT: Token inválido/expirado para path: " + path);
            return; // Interrompe a cadeia de filtros
        }
        filterChain.doFilter(request, response);
    }

}
