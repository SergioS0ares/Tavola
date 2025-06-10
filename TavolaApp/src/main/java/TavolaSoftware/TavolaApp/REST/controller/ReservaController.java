package TavolaSoftware.TavolaApp.REST.controller;

import TavolaSoftware.TavolaApp.REST.dto.ReservaRequest;
import TavolaSoftware.TavolaApp.REST.dto.ReservaResponse;
import TavolaSoftware.TavolaApp.REST.dto.StatusUpdateRequest; // NOVO IMPORT
import TavolaSoftware.TavolaApp.REST.model.Cliente;
import TavolaSoftware.TavolaApp.REST.model.Restaurante;
import TavolaSoftware.TavolaApp.REST.model.Usuario;
import TavolaSoftware.TavolaApp.REST.repository.UsuarioRepository;
import TavolaSoftware.TavolaApp.REST.service.ClienteService;
import TavolaSoftware.TavolaApp.REST.service.ReservaService;
import TavolaSoftware.TavolaApp.REST.service.RestauranteService;
import TavolaSoftware.TavolaApp.tools.ResponseExceptionHandler;
import TavolaSoftware.TavolaApp.tools.TipoUsuario;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;
import java.util.Optional;
import java.util.UUID;

@RestController
@RequestMapping("/auth/reservas")
public class ReservaController {

    @Autowired private ReservaService reservaService;
    @Autowired private ClienteService clienteService;
    @Autowired private RestauranteService restauranteService;
    @Autowired private UsuarioRepository usuarioRepository;

    @PostMapping("/save")
    public ResponseEntity<?> criarReserva(@RequestBody ReservaRequest reservaRequest) {
        // ... (lógica de criarReserva inalterada)
        ResponseExceptionHandler handler = new ResponseExceptionHandler();

        handler.checkUUID("ID do Restaurante (idRestaurante)", reservaRequest.getIdRestaurante());
        handler.checkEmptyStrting("Data da Reserva (dataReserva)", reservaRequest.getDataReserva());
        handler.checkEmptyStrting("Horário da Reserva (horarioReserva)", reservaRequest.getHorarioReserva());
        handler.checkMinimmumNumber("Quantidade de Pessoas (quantidadePessoasReserva)", reservaRequest.getQuantidadePessoasReserva(), 0);

        if (handler.errors()) {
            return handler.generateResponse(HttpStatus.BAD_REQUEST);
        }

        try {
            String emailUsuarioLogado = (String) SecurityContextHolder.getContext().getAuthentication().getPrincipal();
            if (emailUsuarioLogado == null) {
                return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body(Map.of("erro", "Usuário não autenticado."));
            }

            Usuario usuarioLogado = usuarioRepository.findByEmail(emailUsuarioLogado);
            if (usuarioLogado == null) {
                return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body(Map.of("erro", "Detalhes do usuário não encontrados."));
            }

            if (usuarioLogado.getTipo() != TipoUsuario.CLIENTE) {
                return ResponseEntity.status(HttpStatus.FORBIDDEN)
                                     .body(Map.of("erro", "Apenas clientes podem criar reservas. Usuários do tipo '" + usuarioLogado.getTipo() + "' não têm permissão."));
            }

            ReservaResponse reservaCriada = reservaService.criarReserva(reservaRequest, emailUsuarioLogado);
            return ResponseEntity.status(HttpStatus.CREATED).body(reservaCriada);

        } catch (IllegalArgumentException e) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(Map.of("erro", e.getMessage()));
        } catch (SecurityException e) {
             return ResponseEntity.status(HttpStatus.FORBIDDEN).body(Map.of("erro", e.getMessage()));
        } catch (IllegalStateException e) {
            return ResponseEntity.status(HttpStatus.CONFLICT).body(Map.of("erro", e.getMessage()));
        } catch (RuntimeException e) {
            if (e.getMessage() != null && e.getMessage().toLowerCase().contains("não encontrado")) {
                 return ResponseEntity.status(HttpStatus.NOT_FOUND).body(Map.of("erro", e.getMessage()));
            }
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(Map.of("erro", "Erro interno ao processar a reserva: " + e.getMessage()));
        }
    }

    /**
     * [NOVO] Lista as reservas de um restaurante com filtros.
     */
    @GetMapping("/restaurante/{idRestaurante}")
    public ResponseEntity<?> listarReservasDoRestaurante(
            @PathVariable UUID idRestaurante,
            @RequestParam String data,
            @RequestParam(required = false, defaultValue = "todos") String periodo,
            @RequestParam(required = false) String clienteNome,
            @RequestParam(required = false) String status) {
        
        try {
            String emailUsuarioLogado = (String) SecurityContextHolder.getContext().getAuthentication().getPrincipal();
            Usuario usuarioLogado = usuarioRepository.findByEmail(emailUsuarioLogado);

            if (usuarioLogado.getTipo() != TipoUsuario.RESTAURANTE) {
                 return ResponseEntity.status(HttpStatus.FORBIDDEN)
                                     .body(Map.of("erro", "Apenas usuários do tipo restaurante podem acessar este recurso."));
            }
            
            Restaurante restaurante = restauranteService.getByEmail(emailUsuarioLogado);
            if (!restaurante.getId().equals(idRestaurante)) {
                return ResponseEntity.status(HttpStatus.FORBIDDEN)
                                     .body(Map.of("erro", "Você não tem permissão para ver as reservas deste restaurante."));
            }

            List<ReservaResponse> reservas = reservaService.findReservasByRestauranteWithFilters(
                idRestaurante, data, periodo, clienteNome, status);

            return ResponseEntity.ok(reservas);

        } catch (IllegalArgumentException e) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(Map.of("erro", e.getMessage()));
        } catch (Exception e) {
            // Logar o erro em um ambiente de produção: e.printStackTrace(); ou usar um logger.
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(Map.of("erro", "Erro ao buscar reservas: " + e.getMessage()));
        }
    }

    /**
     * [NOVO] Atualiza o status de uma reserva específica.
     */
    @PutMapping("/{idReserva}/status")
    public ResponseEntity<?> atualizarStatusReserva(@PathVariable UUID idReserva, @RequestBody StatusUpdateRequest statusRequest) {
        try {
            String emailUsuarioLogado = (String) SecurityContextHolder.getContext().getAuthentication().getPrincipal();
            
            if (statusRequest.getStatus() == null) {
                return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(Map.of("erro", "O campo 'status' é obrigatório."));
            }

            ReservaResponse reservaAtualizada = reservaService.atualizarStatusReserva(idReserva, statusRequest.getStatus(), emailUsuarioLogado);
            return ResponseEntity.ok(reservaAtualizada);
        } catch (SecurityException e) {
            return ResponseEntity.status(HttpStatus.FORBIDDEN).body(Map.of("erro", e.getMessage()));
        } catch (IllegalStateException e) {
            return ResponseEntity.status(HttpStatus.CONFLICT).body(Map.of("erro", e.getMessage()));
        } catch (RuntimeException e) {
            if (e.getMessage() != null && e.getMessage().toLowerCase().contains("não encontrado")) {
                 return ResponseEntity.status(HttpStatus.NOT_FOUND).body(Map.of("erro", e.getMessage()));
            }
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(Map.of("erro", "Erro ao atualizar status: " + e.getMessage()));
        }
    }
    
    // ... (restante dos endpoints: /cliente, /{idReserva}, etc., inalterados)
    // ... (eles continuam aqui)

    @GetMapping("/cliente")
    public ResponseEntity<?> listarMinhasReservasCliente(
            @RequestParam(defaultValue = "latest") String ordem,
            @RequestParam(defaultValue = "0") int pagina,
            @RequestParam(defaultValue = "20") int tamanho) {
        try {
            String emailCliente = (String) SecurityContextHolder.getContext().getAuthentication().getPrincipal();
            Usuario usuarioLogado = usuarioRepository.findByEmail(emailCliente);
            if (usuarioLogado == null || usuarioLogado.getTipo() != TipoUsuario.CLIENTE) {
                return ResponseEntity.status(HttpStatus.FORBIDDEN)
                                     .body(Map.of("erro", "Apenas clientes podem acessar suas reservas por este endpoint."));
            }
            
            Cliente cliente = clienteService.findByEmail(emailCliente)
                .orElseThrow(() -> new RuntimeException("Cliente autenticado não encontrado."));
            
            List<ReservaResponse> reservas = reservaService.findAllByClienteOrdered(cliente.getId(), ordem, pagina, tamanho);
            return ResponseEntity.ok(reservas);
        } catch (RuntimeException e) {
            if (e.getMessage() != null && e.getMessage().toLowerCase().contains("não encontrado")) {
                 return ResponseEntity.status(HttpStatus.NOT_FOUND).body(Map.of("erro", e.getMessage()));
            }
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(Map.of("erro", "Erro ao buscar reservas do cliente: " + e.getMessage()));
        }
    }

    @GetMapping("/{idReserva}")
    public ResponseEntity<?> buscarReservaPorId(@PathVariable("idReserva") UUID idReserva) { //
        Optional<ReservaResponse> reservaResponseOpt = reservaService.findById(idReserva); //
        return reservaResponseOpt //
                .<ResponseEntity<?>>map(ResponseEntity::ok) //
                .orElseGet(() -> ResponseEntity.status(HttpStatus.NOT_FOUND).body(Map.of("erro", "Reserva não encontrada com ID: " + idReserva))); //
    }

    @PutMapping("/{idReserva}/cancel")
    public ResponseEntity<?> cancelarReserva(@PathVariable("idReserva") UUID idReserva) { //
        try {
            String emailUsuarioLogado = (String) SecurityContextHolder.getContext().getAuthentication().getPrincipal(); //
            ReservaResponse reservaCancelada = reservaService.cancelarReserva(idReserva, emailUsuarioLogado); //
            return ResponseEntity.ok(reservaCancelada); //
        } catch (SecurityException e) {
            return ResponseEntity.status(HttpStatus.FORBIDDEN).body(Map.of("erro", e.getMessage())); //
        } catch (IllegalStateException e) { 
            return ResponseEntity.status(HttpStatus.CONFLICT).body(Map.of("erro", e.getMessage())); //
        } catch (RuntimeException e) {
            if (e.getMessage() != null && e.getMessage().toLowerCase().contains("não encontrado")) { //
                 return ResponseEntity.status(HttpStatus.NOT_FOUND).body(Map.of("erro", e.getMessage())); //
            }
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(Map.of("erro", "Erro ao cancelar reserva: " + e.getMessage())); //
        }
    }
    
    @PutMapping("/{idReserva}/update")
    public ResponseEntity<?> atualizarReserva(@PathVariable("idReserva") UUID idReserva, @RequestBody ReservaRequest reservaRequest) { //
        // ... (lógica de validação do update inalterada)
        ResponseExceptionHandler handler = new ResponseExceptionHandler();
        if (reservaRequest.getDataReserva() != null) {
            handler.checkCondition(
                "O campo 'Data da Reserva (dataReserva)' não pode ser vazio se fornecido.", 
                reservaRequest.getDataReserva().isBlank()
            );
        }
        if (reservaRequest.getHorarioReserva() != null) {
            handler.checkCondition(
                "O campo 'Horário da Reserva (horarioReserva)' não pode ser vazio se fornecido.",
                reservaRequest.getHorarioReserva().isBlank()
            );
        }
        if (reservaRequest.getQuantidadePessoasReserva() < 0) {
            handler.checkCondition(
                "O campo 'Quantidade de Pessoas (quantidadePessoasReserva)' não pode ser um valor negativo.",
                true
            );
        }
        if (handler.errors()) {
            return handler.generateResponse(HttpStatus.BAD_REQUEST);
        }

        try {
            String emailUsuarioLogado = (String) SecurityContextHolder.getContext().getAuthentication().getPrincipal(); //
            ReservaResponse reservaAtualizada = reservaService.atualizarReserva(idReserva, reservaRequest, emailUsuarioLogado); //
            return ResponseEntity.ok(reservaAtualizada); //
        } catch (IllegalArgumentException e) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(Map.of("erro", e.getMessage())); //
        } catch (SecurityException e) {
            return ResponseEntity.status(HttpStatus.FORBIDDEN).body(Map.of("erro", e.getMessage())); //
        } catch (IllegalStateException e) { 
            return ResponseEntity.status(HttpStatus.CONFLICT).body(Map.of("erro", e.getMessage())); //
        } catch (RuntimeException e) {
             if (e.getMessage() != null && e.getMessage().toLowerCase().contains("não encontrado")) { //
                 return ResponseEntity.status(HttpStatus.NOT_FOUND).body(Map.of("erro", e.getMessage())); //
            }
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(Map.of("erro", "Erro ao atualizar reserva: " + e.getMessage())); //
        }
    }
}