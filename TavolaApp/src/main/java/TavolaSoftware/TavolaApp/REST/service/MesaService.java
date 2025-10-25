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
    private ReservaRepository reservaRepository; // <--- 2. INJETAR O REPOSITÓRIO

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

        // 1. Busca todas as mesas do ambiente
        List<Mesa> mesasDoAmbiente = mesaRepository.findByAmbienteId(idAmbiente);

        // 2. Busca todas as reservas do restaurante para a data específica
        //    (Filtramos por restaurante para otimizar e depois associamos às mesas)
        
        // --- 3. CORREÇÃO AQUI ---
        // ANTES: List<ReservaResponse> reservasDoDia = ReservaRepository.findByRestauranteIdAndDataReserva(restauranteIdDoGarcom, data)
        List<ReservaResponse> reservasDoDia = reservaRepository.findByRestauranteIdAndDataReserva(restauranteIdDoGarcom, data)
                .stream()
                .map(ReservaResponse::new) // Converte para DTO
                .collect(Collectors.toList());

        // 3. Mapeia cada mesa para o DTO de resposta, incluindo suas reservas filtradas
        return mesasDoAmbiente.stream()
                .map(mesa -> new MesaComReservasResponse(mesa, reservasDoDia))
                .collect(Collectors.toList());
    }
    
    // ... (Restante do código do MesaService.java sem alterações) ...
    
    /**
     * Cria uma nova mesa e a associa a um ambiente.
     * @param request DTO com os dados da nova mesa.
     * @param ambienteId ID do ambiente ao qual a mesa pertencerá.
     * @return A entidade Mesa que foi salva.
     */
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
    
    /*
     * Atualiza o status da mesa, olha a enum de status de mesa pra ver os valores, 
     * tô com preguiça de escrever tudo isso aqui.
     * */
    @Transactional
    public Mesa updateStatus(UUID idMesa, String novoStatusStr) {
        MesaStatus novoStatus;
        try {
            novoStatus = MesaStatus.valueOf(novoStatusStr.toUpperCase());
        } catch (IllegalArgumentException e) {
            throw new IllegalArgumentException("Status de mesa inválido: " + novoStatusStr);
        }

        // Para pegar o token do garçom, precisamos extrair do contexto de segurança
        String token = (String) SecurityContextHolder.getContext().getAuthentication().getCredentials();
        Claims claims = jwtUtil.parseToken(token);
        UUID restauranteIdDoGarcom = UUID.fromString(claims.get("restanteId", String.class));
        
        Mesa mesa = mesaRepository.findById(idMesa)
                .orElseThrow(() -> new EntityNotFoundException("Mesa não encontrada com o id: " + idMesa));

        if (!mesa.getAmbiente().getRestaurante().getId().equals(restauranteIdDoGarcom)) {
            throw new SecurityException("Acesso negado. Você não tem permissão para gerenciar esta mesa.");
        }

        mesa.setStatus(novoStatus);
        
     // 1. Define o "canal" (tópico) para o qual a mensagem será enviada.
        //    Será um canal exclusivo para este restaurante.
        String topic = "/topic/restaurante/" + restauranteIdDoGarcom + "/mesas";

        // 2. Cria a mensagem no nosso formato padrão (o "envelope").
        //    Usamos o "payload rico", enviando o objeto MesaResponse completo.
        WebSocketMessage mensagem = new WebSocketMessage(
            EventLabel.MESA_UPDATE_STATUS, 
            MesaResponse.fromEntity(mesa)
        );

        // 3. Dispara a mensagem para todos os clientes inscritos no tópico.
        System.out.println("Disparando mensagem para o tópico: " + topic);
        messagingTemplate.convertAndSend(topic, mensagem);
        
        return mesaRepository.save(mesa);
    }

    /**
     * Atualiza os dados de uma mesa existente.
     * @param idMesa O ID da mesa a ser atualizada.
     * @param request DTO com os novos dados.
     * @return A entidade Mesa atualizada.
     */
    public Mesa updateMesa(UUID idMesa, MesaRequest request) {
        // 1. Encontra a mesa existente.
        Mesa mesaExistente = mesaRepository.findById(idMesa)
                .orElseThrow(() -> new EntityNotFoundException("Mesa não encontrada com o id: " + idMesa));

        // 2. Atualiza os campos.
        mesaExistente.setNome(request.getNome());
        mesaExistente.setTipo(request.getTipo());
        mesaExistente.setCapacidade(request.getCapacidade());
        mesaExistente.setVip(request.isVip());

        // 3. Salva as alterações.
        return mesaRepository.save(mesaExistente);
    }
    
    /**
     * Deleta uma mesa pelo seu ID.
     * @param idMesa O ID da mesa a ser deletada.
     */
    public void deleteMesa(UUID idMesa) {
        if (!mesaRepository.existsById(idMesa)) {
            throw new EntityNotFoundException("Mesa não encontrada com o id: " + idMesa);
        }
        mesaRepository.deleteById(idMesa);
    }

    /**
     * Busca todas as mesas de um ambiente.
     * @param ambienteId ID do ambiente.
     * @return Lista de mesas.
     */
    public List<Mesa> getMesasByAmbiente(UUID ambienteId) {
        return mesaRepository.findByAmbienteId(ambienteId);
    }
}