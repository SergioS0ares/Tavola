package TavolaSoftware.TavolaApp.REST.service;

import TavolaSoftware.TavolaApp.REST.dto.requests.MesaRequest;
import TavolaSoftware.TavolaApp.REST.model.Ambiente;
import TavolaSoftware.TavolaApp.REST.model.Mesa;
import TavolaSoftware.TavolaApp.REST.repository.AmbienteRepository;
import TavolaSoftware.TavolaApp.REST.repository.MesaRepository;
import TavolaSoftware.TavolaApp.REST.repository.ReservaRepository; // <--- 1. IMPORTAR
import TavolaSoftware.TavolaApp.REST.security.JwtUtil;
import TavolaSoftware.TavolaApp.tools.MesaStatus;
import TavolaSoftware.TavolaApp.REST.dto.responses.MesaComReservasResponse;
import TavolaSoftware.TavolaApp.REST.dto.responses.MesaResponse;
import TavolaSoftware.TavolaApp.REST.dto.responses.ReservaResponse;
import TavolaSoftware.TavolaApp.REST.dto.responses.WebSocketMessage;
import TavolaSoftware.TavolaApp.tools.EventLabel;
import io.jsonwebtoken.Claims;
import jakarta.persistence.EntityNotFoundException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.messaging.simp.SimpMessagingTemplate;

import java.time.LocalDate;
import java.util.List;
import java.util.UUID;
import java.util.stream.Collectors;

@Service
public class MesaService {

    @Autowired
    private MesaRepository mesaRepository;

    @Autowired
    private AmbienteRepository ambienteRepository;
    
    @Autowired
    private JwtUtil jwtUtil;

    @Autowired
    private SimpMessagingTemplate messagingTemplate;
    
    @Autowired
    private ReservaRepository reservaRepository; 

    @Autowired
    private AtendimentoMesaService atendimentoMesaService;

    @Transactional(readOnly = true)
    public List<MesaComReservasResponse> findMesasComReservasPorAmbienteEData(UUID idAmbiente, LocalDate data) {
        // Validação de Segurança: Garante que o ambiente pertence ao restaurante do Garçom logado
        String token = (String) SecurityContextHolder.getContext().getAuthentication().getCredentials();
        Claims claims = jwtUtil.parseToken(token);
        UUID restauranteIdDoGarcom = UUID.fromString(claims.get("restauranteId", String.class));

        Ambiente ambiente = ambienteRepository.findById(idAmbiente)
                .orElseThrow(() -> new EntityNotFoundException("Ambiente não encontrado: " + idAmbiente));

        if (!ambiente.getRestaurante().getId().equals(restauranteIdDoGarcom)) {
            throw new SecurityException("Acesso negado. Este ambiente não pertence ao seu restaurante.");
        }

        List<Mesa> mesasDoAmbiente = mesaRepository.findByAmbienteId(idAmbiente);

        List<ReservaResponse> reservasDoDia = reservaRepository.findByRestauranteIdAndDataReserva(restauranteIdDoGarcom, data)
                .stream()
                .map(ReservaResponse::new) // Converte para DTO
                .collect(Collectors.toList());

        // 3. Mapeia cada mesa para o DTO de resposta, incluindo suas reservas filtradas
        return mesasDoAmbiente.stream()
                .map(mesa -> new MesaComReservasResponse(mesa, reservasDoDia))
                .collect(Collectors.toList());
    }
    
    public Mesa createMesa(MesaRequest request, UUID ambienteId) {
        // 1. Busca o ambiente ao qual a mesa pertencerá.
        Ambiente ambiente = ambienteRepository.findById(ambienteId)
                .orElseThrow(() -> new EntityNotFoundException("Ambiente não encontrado com o id: " + ambienteId));

        // 2. Cria uma nova entidade Mesa.
        Mesa novaMesa = new Mesa();
        novaMesa.setNome(request.getNome());
        novaMesa.setTipo(request.getTipo());
        novaMesa.setCapacidade(request.getCapacidade());
        novaMesa.setVip(request.isVip());
        novaMesa.setAmbiente(ambiente); // 3. Associa a mesa ao ambiente.

        // 4. Salva a mesa no banco de dados.
        return mesaRepository.save(novaMesa);
    }
    
    @Transactional
    public Mesa updateStatus(UUID idMesa, String novoStatusStr) {
        MesaStatus novoStatus;
        try {
            novoStatus = MesaStatus.valueOf(novoStatusStr.toUpperCase());
        } catch (IllegalArgumentException e) {
            throw new IllegalArgumentException("Status de mesa inválido: " + novoStatusStr);
        }

        String token = (String) SecurityContextHolder.getContext().getAuthentication().getCredentials();
        Claims claims = jwtUtil.parseToken(token);

        UUID restauranteIdDoUsuario = UUID.fromString(claims.get("restauranteId", String.class)); 
        
        Mesa mesa = mesaRepository.findById(idMesa)
                .orElseThrow(() -> new EntityNotFoundException("Mesa não encontrada com o id: " + idMesa));

        if (!mesa.getAmbiente().getRestaurante().getId().equals(restauranteIdDoUsuario)) {
            throw new SecurityException("Acesso negado. Você não tem permissão para gerenciar esta mesa.");
        }

        MesaStatus statusAntigo = mesa.getStatus();
        
        mesa.setStatus(novoStatus);
        Mesa mesaSalva = mesaRepository.save(mesa);

        if ((statusAntigo == MesaStatus.OCUPADA || statusAntigo == MesaStatus.RESERVADA) && novoStatus == MesaStatus.LIVRE) {
            atendimentoMesaService.finalizarAtendimento(mesaSalva); // Passa a mesa já salva
        }

        String topic = "/topic/restaurante/" + restauranteIdDoUsuario + "/mesas";
        WebSocketMessage mensagem = new WebSocketMessage(
            EventLabel.MESA_UPDATE_STATUS, 
            MesaResponse.fromEntity(mesaSalva) // Use a mesa já salva
        );
        System.out.println("Disparando mensagem para o tópico: " + topic);
        messagingTemplate.convertAndSend(topic, mensagem);
        
        return mesaSalva;
    }

    public Mesa updateMesa(UUID idMesa, MesaRequest request) {
        Mesa mesaExistente = mesaRepository.findById(idMesa)
                .orElseThrow(() -> new EntityNotFoundException("Mesa não encontrada com o id: " + idMesa));

        mesaExistente.setNome(request.getNome());
        mesaExistente.setTipo(request.getTipo());
        mesaExistente.setCapacidade(request.getCapacidade());
        mesaExistente.setVip(request.isVip());

        return mesaRepository.save(mesaExistente);
    }

    public void deleteMesa(UUID idMesa) {
        if (!mesaRepository.existsById(idMesa)) {
            throw new EntityNotFoundException("Mesa não encontrada com o id: " + idMesa);
        }
        mesaRepository.deleteById(idMesa);
    }

    public List<Mesa> getMesasByAmbiente(UUID ambienteId) {
        return mesaRepository.findByAmbienteId(ambienteId);
    }
}