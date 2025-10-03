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
import java.util.Map;
import java.util.UUID;
import java.util.stream.Collectors;

@Service
public class PesquisaService {

    @Autowired
    private RestauranteRepository restauranteRepository;

    @Autowired
    private UsuarioRepository usuarioRepository;

    public List<ClienteHomeResponse> pesquisar(PesquisaRequest request) {

        // --- 1. PREPARAÇÃO DOS FILTROS ---
        String cidadeFiltro = null;
        if (request.isCidadeLocal()) {
            try {
                String userEmail = SecurityContextHolder.getContext().getAuthentication().getName();
                cidadeFiltro = usuarioRepository.findByEmail(userEmail)
                    .map(Usuario::getEndereco)
                    .map(Endereco::getCidade)
                    .orElse(null);
            } catch (Exception e) {
                cidadeFiltro = null;
            }
        }

        String diaDaSemana = null;
        LocalTime horaInicio = null;
        if (request.getHorarioAberto() != null && !request.getHorarioAberto().trim().isEmpty()) {
            try {
                String[] partes = request.getHorarioAberto().split("-");
                horaInicio = LocalTime.parse(partes[0], DateTimeFormatter.ofPattern("HH:mm"));
                DayOfWeek day = LocalDate.now().getDayOfWeek();
                diaDaSemana = day.getDisplayName(TextStyle.SHORT, new Locale("pt", "BR")).toUpperCase();
            } catch (Exception e) {
                diaDaSemana = null;
                horaInicio = null;
            }
        }

        // --- 2. BUSCA INICIAL PELOS FILTROS (SPECIFICATIONS) ---
        Specification<Restaurante> spec = Specification
            .where(RestauranteSpecification.comCidade(cidadeFiltro))
            .and(RestauranteSpecification.comNotaMinima(request.getNotaMinima()))
            .and(RestauranteSpecification.comServicos(request.getServicos()))
            .and(RestauranteSpecification.abertoAgora(diaDaSemana, horaInicio));

        List<Restaurante> restaurantesFiltrados = restauranteRepository.findAll(spec);

        if (restaurantesFiltrados.isEmpty()) {
            return Collections.emptyList();
        }

        // --- 3. SE HOUVER TERMO, APLICA O FILTRO DE TEXTO E REORDENA ---
        String termoBusca = (request.getTermo() == null) ? "" : request.getTermo().trim();
        List<Restaurante> resultadoFinal;

        if (!termoBusca.isEmpty()) {
            // Pega os IDs dos restaurantes que já passaram pelos filtros
            List<UUID> idsParaFiltrar = restaurantesFiltrados.stream().map(Restaurante::getId).collect(Collectors.toList());

            // Roda a query nativa de FTS apenas nesses IDs
            List<UUID> idsOrdenadosPorFts = restauranteRepository.filterAndSortByFts(idsParaFiltrar, termoBusca);
            
            // Reordena a lista original com base no resultado da busca por texto
            Map<UUID, Restaurante> mapaDeRestaurantes = restaurantesFiltrados.stream()
                .collect(Collectors.toMap(Restaurante::getId, r -> r));

            resultadoFinal = idsOrdenadosPorFts.stream()
                .map(mapaDeRestaurantes::get)
                .collect(Collectors.toList());
        } else {
            // Se não houver termo, o resultado é simplesmente a lista já filtrada
            resultadoFinal = restaurantesFiltrados;
        }

        // --- 4. MAPEIA PARA A RESPOSTA FINAL ---
        return resultadoFinal.stream()
            .map(ClienteHomeResponse::new)
            .collect(Collectors.toList());
    }
}