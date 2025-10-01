package TavolaSoftware.TavolaApp.REST.service;

import TavolaSoftware.TavolaApp.REST.dto.requests.PesquisaRequest;
import TavolaSoftware.TavolaApp.REST.dto.responses.ClienteHomeResponse;
import TavolaSoftware.TavolaApp.REST.model.Restaurante;
import TavolaSoftware.TavolaApp.REST.model.Usuario;
import TavolaSoftware.TavolaApp.REST.repository.RestauranteRepository;
import TavolaSoftware.TavolaApp.REST.repository.specification.*;
import TavolaSoftware.TavolaApp.REST.repository.UsuarioRepository;
import TavolaSoftware.TavolaApp.tools.Endereco;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.jpa.domain.Specification;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Service;

import java.time.DayOfWeek;
import java.time.LocalDate;
import java.time.LocalTime;
import java.time.format.DateTimeFormatter;
import java.time.format.TextStyle;
import java.util.Arrays;
import java.util.Collections;
import java.util.List;
import java.util.Locale;
import java.util.stream.Collectors;

@Service
public class PesquisaService {

    @Autowired
    private RestauranteRepository restauranteRepository;

    @Autowired
    private UsuarioRepository usuarioRepository;

    public List<ClienteHomeResponse> pesquisar(PesquisaRequest request) {

        // --- 1. PREPARAÇÃO DOS PARÂMETROS ---

        // Termo de Busca (para Full-Text Search)
        String termoBusca = (request.getTermo() == null) ? "" : request.getTermo().trim();
        String termoFts = Arrays.stream(termoBusca.split("\\s+"))
                .filter(s -> !s.isEmpty())
                .collect(Collectors.joining(" & "));
        if (termoFts.isEmpty()) {
            termoFts = null;
        }

        // Filtro de Cidade (se 'cidadeLocal' for true)
        String cidadeFiltro = null;
        if (request.isCidadeLocal()) {
            try {
                String userEmail = SecurityContextHolder.getContext().getAuthentication().getName();
                cidadeFiltro = usuarioRepository.findByEmail(userEmail)
                    .map(Usuario::getEndereco)
                    .map(Endereco::getCidade)
                    .orElse(null);
            } catch (Exception e) {
                // Usuário pode não estar logado, ignora o filtro
                cidadeFiltro = null;
            }
        }

        // Filtros de Data e Hora (se 'horarioAberto' for fornecido)
        String diaDaSemana = null;
        LocalTime horaInicio = null;
        if (request.getHorarioAberto() != null && !request.getHorarioAberto().trim().isEmpty()) {
            try {
                String[] partes = request.getHorarioAberto().split("-");
                horaInicio = LocalTime.parse(partes[0], DateTimeFormatter.ofPattern("HH:mm"));
                DayOfWeek day = LocalDate.now().getDayOfWeek();
                diaDaSemana = day.getDisplayName(TextStyle.SHORT, new Locale("pt", "BR")).toUpperCase();
            } catch (Exception e) {
                // Se o formato do horário for inválido, ignora o filtro
                diaDaSemana = null;
                horaInicio = null;
            }
        }
        
        // --- 2. CONSTRUÇÃO DA QUERY DINÂMICA COM SPECIFICATIONS ---

        // Usamos a forma encadeada que já lida com filtros nulos automaticamente
        Specification<Restaurante> spec = Specification
            .where(RestauranteSpecification.comCidade(cidadeFiltro))
            .and(RestauranteSpecification.comNotaMinima(request.getNotaMinima()))
            .and(RestauranteSpecification.comServicos(request.getServicos()))
            .and(RestauranteSpecification.abertoAgora(diaDaSemana, horaInicio));

        // --- 3. EXECUTA A BUSCA HÍBRIDA (FILTROS + FTS) ---
        List<Restaurante> restaurantesEncontrados = restauranteRepository.findBySpecificationAndFts(spec, termoFts);

        // --- 4. MAPEIA OS RESULTADOS PARA O DTO DE RESPOSTA ---
        if (restaurantesEncontrados.isEmpty()) {
            return Collections.emptyList();
        }

        return restaurantesEncontrados.stream()
                .map(ClienteHomeResponse::new)
                .collect(Collectors.toList());
    }
}