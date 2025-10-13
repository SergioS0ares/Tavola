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

public List<ClienteHomeResponse> pesquisar(PesquisaRequest request) {
        
        // --- CONSTRUÇÃO DINÂMICA DA CONSULTA COM SPECIFICATIONS ---
        // Começamos com uma Specification "vazia" que não filtra nada.
        Specification<Restaurante> spec = Specification.where(null);

        // Adicionamos o filtro de TERMO, se ele existir.
        if (request.getTermo() != null && !request.getTermo().isBlank()) {
            spec = spec.and(RestauranteSpecification.comTermo(request.getTermo()));
        }

        // Adicionamos o filtro de CIDADE, se ele existir.
        if (request.getCidade() != null && !request.getCidade().isBlank()) {
            spec = spec.and(RestauranteSpecification.comCidade(request.getCidade()));
        }

        // Adicionamos os outros filtros...
        spec = spec.and(RestauranteSpecification.comNotaMinima(request.getNotaMinima()));
        spec = spec.and(RestauranteSpecification.comServicos(request.getServicos()));
        spec = spec.and(RestauranteSpecification.comDiaSemanaDisponivel(request.getDiaSemana()));

        // --- EXECUÇÃO DA CONSULTA ÚNICA ---
        List<Restaurante> restaurantesFiltrados = restauranteRepository.findAll(spec);

        // --- MAPEAMENTO PARA A RESPOSTA FINAL ---
        return restaurantesFiltrados.stream()
            .map(ClienteHomeResponse::new)
            .collect(Collectors.toList());
    }
}