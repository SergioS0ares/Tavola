package TavolaSoftware.TavolaApp.REST.service;

import TavolaSoftware.TavolaApp.REST.dto.requests.PesquisaRequest;
import TavolaSoftware.TavolaApp.REST.dto.responses.ClienteHomeResponse;
import TavolaSoftware.TavolaApp.REST.model.Restaurante;
import TavolaSoftware.TavolaApp.REST.model.Usuario;
import TavolaSoftware.TavolaApp.REST.repository.RestauranteRepository;
import TavolaSoftware.TavolaApp.REST.repository.UsuarioRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Service;

import java.math.BigInteger;
import java.util.*;
import java.util.stream.Collectors;

@Service
public class PesquisaService {

    @Autowired
    private RestauranteRepository restauranteRepository;

    @Autowired
    private UsuarioRepository usuarioRepository;

    public List<ClienteHomeResponse> pesquisar(PesquisaRequest request) {
        // 1. Prepara o termo de busca para o formato FTS do PostgreSQL
        String termoFts = Arrays.stream(request.getTermo().split(" "))
                                .filter(s -> !s.trim().isEmpty())
                                .collect(Collectors.joining(" & "));

        // 2. Lógica para o filtro de cidadeLocal
        String cidadeFiltro = null;
        if (request.isCidadeLocal()) {
            // Pega o email do usuário logado no contexto de segurança do Spring
            String userEmail = SecurityContextHolder.getContext().getAuthentication().getName();
            Usuario usuario = usuarioRepository.findByEmail(userEmail);
            if (usuario != null && usuario.getEndereco() != null) {
                cidadeFiltro = usuario.getEndereco().getCidade();
            }
        }

        // 3. Lógica para o filtro de horário (simplificada)
        String diaDaSemana = null, horaInicio = null, horaFim = null;
        if (request.getHorarioAberto() != null && !request.getHorarioAberto().isEmpty()) {
            // Lógica para extrair dia e horas - aqui precisaria de um parser mais robusto
            // Por enquanto, vamos manter simples e passar null
        }
        
        // 4. Parâmetros para o filtro de serviços
        List<String> servicos = request.getServicos();
        long servicosCount = (servicos != null) ? servicos.size() : 0;

        // 5. Chama a query poderosa no repositório
        List<Object[]> resultadosRaw = restauranteRepository.searchAvancado(
            termoFts,
            cidadeFiltro,
            request.getNotaMinima(),
            servicos,
            servicosCount,
            diaDaSemana,
            horaInicio,
            horaFim
        );

        // 6. Mapeia os IDs retornados para uma lista
        if (resultadosRaw.isEmpty()) {
            return Collections.emptyList();
        }
        
        List<UUID> idsOrdenados = resultadosRaw.stream()
            .map(row -> UUID.fromString((String) row[0].toString()))
            .collect(Collectors.toList());

        // 7. Busca as entidades completas dos restaurantes
        Map<UUID, Restaurante> restaurantesMap = restauranteRepository.findAllById(idsOrdenados)
            .stream()
            .collect(Collectors.toMap(Restaurante::getId, r -> r));

        // 8. Monta a resposta final na ordem correta, convertendo para ClienteHomeResponse
        return idsOrdenados.stream()
            .map(id -> new ClienteHomeResponse(restaurantesMap.get(id)))
            .collect(Collectors.toList());
    }
}