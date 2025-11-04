package TavolaSoftware.TavolaApp.REST.service;

import java.util.List;
import java.util.Map; // <<< NOVO IMPORT
import java.util.Optional;
import java.util.UUID;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import TavolaSoftware.TavolaApp.REST.dto.requests.AmbienteRequest;
import TavolaSoftware.TavolaApp.REST.dto.responses.AmbienteDashboardResponse;
import TavolaSoftware.TavolaApp.REST.dto.responses.AmbienteResponse;
import TavolaSoftware.TavolaApp.REST.dto.responses.AtendimentoSimplesResponse;
import TavolaSoftware.TavolaApp.REST.dto.responses.MesaDashboardResponse;
import TavolaSoftware.TavolaApp.REST.dto.responses.MesaResponse;
import TavolaSoftware.TavolaApp.REST.dto.responses.ReservaSimplesResponse;
import TavolaSoftware.TavolaApp.REST.model.Ambiente;
import TavolaSoftware.TavolaApp.REST.model.AtendimentoMesa;
import TavolaSoftware.TavolaApp.REST.model.Mesa;
import TavolaSoftware.TavolaApp.REST.model.Reserva;
import TavolaSoftware.TavolaApp.REST.model.Restaurante;
import TavolaSoftware.TavolaApp.REST.repository.AmbienteRepository;
import TavolaSoftware.TavolaApp.REST.repository.AtendimentoMesaRepository;
import TavolaSoftware.TavolaApp.REST.repository.MesaRepository;
import TavolaSoftware.TavolaApp.REST.repository.ReservaRepository;

@Service
public class AmbienteService {

    @Autowired
    private AmbienteRepository ambienteRepository;

    @Autowired
    private MesaRepository mesaRepository;

    @Autowired
    private AtendimentoMesaRepository atendimentoMesaRepository;

    @Autowired
    private ReservaRepository reservaRepository;
    
    /**
     * Busca a estrutura completa do dashboard de ambientes, mesas, atendimentos e reservas
     * de forma otimizada (sem N+1 queries).
     */
    @Transactional(readOnly = true)
    public List<AmbienteDashboardResponse> getAmbienteDashboard(UUID restauranteId) {
        
        // 1. Busca todos os Ambientes do restaurante
        List<Ambiente> ambientes = ambienteRepository.findByRestauranteId(restauranteId);
        if (ambientes.isEmpty()) {
            return List.of();
        }
        List<UUID> ambienteIds = ambientes.stream().map(Ambiente::getId).collect(Collectors.toList());

        // 2. Busca TODAS as Mesas de TODOS os ambientes de uma vez
        List<Mesa> todasAsMesas = mesaRepository.findByAmbienteIdIn(ambienteIds);
        if (todasAsMesas.isEmpty()) {
            // Retorna só os ambientes vazios
            return ambientes.stream()
                .map(amb -> new AmbienteDashboardResponse(amb, List.of()))
                .collect(Collectors.toList());
        }
        List<UUID> mesaIds = todasAsMesas.stream().map(Mesa::getId).collect(Collectors.toList());

        // 3. Busca TODOS os Atendimentos (ativos e inativos) de TODAS as mesas
        List<AtendimentoMesa> todosOsAtendimentos = atendimentoMesaRepository.findByMesaIdIn(mesaIds);
        
        // 4. Busca TODAS as Reservas (ATIVAS/CONFIRMADAS) de TODAS as mesas
        List<Reserva> todasAsReservas = reservaRepository.findReservasConfirmadasByMesaIds(mesaIds);

        // 5. Agrupa os dados em Mapas para montagem rápida
        Map<UUID, List<AtendimentoSimplesResponse>> atendimentosPorMesaId = todosOsAtendimentos.stream()
            .map(AtendimentoSimplesResponse::new)
            .collect(Collectors.groupingBy(AtendimentoSimplesResponse::getMesaId));
            
        Map<UUID, List<ReservaSimplesResponse>> reservasPorMesaId = todasAsReservas.stream()
            .map(ReservaSimplesResponse::new)
            .collect(Collectors.groupingBy(res -> res.getId())); // Nota: A query pode trazer duplicatas se a reserva tiver N mesas
            
        // (Agrupamento mais complexo para Reservas M-N)
        // Precisamos mapear reservas para *todas* as mesas em que elas aparecem
        Map<UUID, List<ReservaSimplesResponse>> reservasMapeadasPorMesaId = mesaIds.stream()
             .collect(Collectors.toMap(
                 mesaId -> mesaId, // Chave é o ID da mesa
                 mesaId -> todasAsReservas.stream()
                             .filter(reserva -> reserva.getMesas().stream().anyMatch(m -> m.getId().equals(mesaId)))
                             .map(ReservaSimplesResponse::new)
                             .collect(Collectors.toList())
             ));

        Map<UUID, List<Mesa>> mesasPorAmbienteId = todasAsMesas.stream()
            .collect(Collectors.groupingBy(mesa -> mesa.getAmbiente().getId()));

        // 6. Monta a resposta final
        return ambientes.stream().map(ambiente -> {
            // Pega as mesas deste ambiente (já filtradas)
            List<Mesa> mesasDoAmbiente = mesasPorAmbienteId.getOrDefault(ambiente.getId(), List.of());
            
            List<MesaDashboardResponse> mesasDashboard = mesasDoAmbiente.stream().map(mesa -> {
                UUID mesaId = mesa.getId();
                
                // Converte a entidade Mesa para o DTO MesaResponse (que agora tem o status)
                MesaResponse mesaDto = MesaResponse.fromEntity(mesa);
                
                // Pega os atendimentos e reservas dos mapas
                List<AtendimentoSimplesResponse> atendimentos = atendimentosPorMesaId.getOrDefault(mesaId, List.of());
                List<ReservaSimplesResponse> reservas = reservasMapeadasPorMesaId.getOrDefault(mesaId, List.of());
                
                return new MesaDashboardResponse(mesaDto, atendimentos, reservas);
            }).collect(Collectors.toList());
            
            return new AmbienteDashboardResponse(ambiente, mesasDashboard);
        }).collect(Collectors.toList());
    }
    
    /**
     * Lista todos os ambientes de um restaurante específico.
     */
    @Transactional(readOnly = true)
    public List<AmbienteResponse> findAllByRestaurante(UUID restauranteId) {
        return ambienteRepository.findByRestauranteId(restauranteId).stream()
                .map(AmbienteResponse::new)
                .collect(Collectors.toList());
    }

    /**
     * Busca um ambiente específico pelo seu ID, garantindo que ele pertence ao restaurante.
     */
    @Transactional(readOnly = true)
    public Optional<AmbienteResponse> findByIdAndRestaurante(UUID ambienteId, UUID restauranteId) {
        return ambienteRepository.findById(ambienteId)
                .filter(ambiente -> ambiente.getRestaurante().getId().equals(restauranteId))
                .map(AmbienteResponse::new);
    }

    /**
     * Cria um novo ambiente para um restaurante.
     */
    @Transactional
    public AmbienteResponse create(AmbienteRequest request, Restaurante restaurante) {
        Ambiente novoAmbiente = new Ambiente();
        novoAmbiente.setNome(request.getNome());
        novoAmbiente.setRestaurante(restaurante);

        Ambiente ambienteSalvo = ambienteRepository.save(novoAmbiente);
        return new AmbienteResponse(ambienteSalvo);
    }

    /**
     * Atualiza um ambiente existente.
     */
    @Transactional
    public Optional<AmbienteResponse> update(UUID ambienteId, AmbienteRequest request, UUID restauranteId) {
        Optional<Ambiente> ambienteOpt = ambienteRepository.findById(ambienteId);

        // Verifica se o ambiente existe e pertence ao restaurante correto
        if (ambienteOpt.isEmpty() || !ambienteOpt.get().getRestaurante().getId().equals(restauranteId)) {
            return Optional.empty(); // Retorna vazio se não encontrado ou sem permissão
        }

        Ambiente ambienteExistente = ambienteOpt.get();
        ambienteExistente.setNome(request.getNome());
        // Outros campos como descrição poderiam ser atualizados aqui

        Ambiente ambienteAtualizado = ambienteRepository.save(ambienteExistente);
        return Optional.of(new AmbienteResponse(ambienteAtualizado));
    }

    /**
     * Deleta um ambiente.
     */
    @Transactional
    public boolean delete(UUID ambienteId, UUID restauranteId) {
        Optional<Ambiente> ambienteOpt = ambienteRepository.findById(ambienteId);

        if (ambienteOpt.isPresent() && ambienteOpt.get().getRestaurante().getId().equals(restauranteId)) {
            ambienteRepository.deleteById(ambienteId);
            return true; // Sucesso
        }
        return false; // Falha (não encontrado ou sem permissão)
    }
}