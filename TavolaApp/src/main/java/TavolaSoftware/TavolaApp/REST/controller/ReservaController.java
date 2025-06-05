package TavolaSoftware.TavolaApp.REST.controller;

import TavolaSoftware.TavolaApp.REST.dto.ReservaRequest;
import TavolaSoftware.TavolaApp.REST.dto.ReservaResponse;
import TavolaSoftware.TavolaApp.REST.model.Cliente;
import TavolaSoftware.TavolaApp.REST.model.Restaurante;
import TavolaSoftware.TavolaApp.REST.model.Usuario; // <<< NOVO IMPORT
import TavolaSoftware.TavolaApp.REST.repository.UsuarioRepository; // <<< NOVO IMPORT
import TavolaSoftware.TavolaApp.REST.service.ClienteService;
import TavolaSoftware.TavolaApp.REST.service.ReservaService;
import TavolaSoftware.TavolaApp.REST.service.RestauranteService;
import TavolaSoftware.TavolaApp.tools.ResponseExceptionHandler;
import TavolaSoftware.TavolaApp.tools.TipoUsuario; // <<< NOVO IMPORT

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

    @Autowired
    private ReservaService reservaService;

    @Autowired
    private ClienteService clienteService;

    @Autowired
    private RestauranteService restauranteService;

    @Autowired
    private UsuarioRepository usuarioRepository; // <<< INJETAR UsuarioRepository

    @PostMapping("/save") // Seu endpoint de criação está como "/save"
    public ResponseEntity<?> criarReserva(@RequestBody ReservaRequest reservaRequest) {
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

            // <<< INÍCIO DA VERIFICAÇÃO DE TIPO DE USUÁRIO >>>
            Usuario usuarioLogado = usuarioRepository.findByEmail(emailUsuarioLogado);
            if (usuarioLogado == null) { // Segurança extra, embora o token deva garantir um usuário existente
                return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body(Map.of("erro", "Detalhes do usuário não encontrados."));
            }

            if (usuarioLogado.getTipo() != TipoUsuario.CLIENTE) {
                return ResponseEntity.status(HttpStatus.FORBIDDEN)
                                     .body(Map.of("erro", "Apenas clientes podem criar reservas. Usuários do tipo '" + usuarioLogado.getTipo() + "' não têm permissão."));
            }
            // <<< FIM DA VERIFICAÇÃO DE TIPO DE USUÁRIO >>>

            ReservaResponse reservaCriada = reservaService.criarReserva(reservaRequest, emailUsuarioLogado);
            return ResponseEntity.status(HttpStatus.CREATED).body(reservaCriada);

        } catch (IllegalArgumentException e) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(Map.of("erro", e.getMessage()));
        } catch (SecurityException e) { // Pode ser lançado pelo service se houver outras checagens de segurança
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

    // ... (demais endpoints do controller: /cliente, /restaurante, /{idReserva}, /{idReserva}/cancel, /{idReserva}/update)
    // Eles não precisam dessa verificação de tipo específica para *criar* reserva, pois lidam com reservas existentes
    // e o ReservaService já faz a checagem de permissão (se o cliente é dono, ou se o restaurante é o da reserva).

    // Endpoint movido de ClienteController
    @GetMapping("/cliente")
    public ResponseEntity<?> listarMinhasReservasCliente(
            @RequestParam(defaultValue = "latest") String ordem,
            @RequestParam(defaultValue = "0") int pagina,
            @RequestParam(defaultValue = "20") int tamanho) {
        try {
            String emailCliente = (String) SecurityContextHolder.getContext().getAuthentication().getPrincipal();
            // Adicionar verificação se o usuário é de fato um cliente antes de prosseguir
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

    // Endpoint movido de RestauranteController
    @GetMapping("/restaurante")
    public ResponseEntity<?> listarReservasDoMeuRestaurante(
            @RequestParam(defaultValue = "latest") String ordem,
            @RequestParam(defaultValue = "0") int pagina,
            @RequestParam(defaultValue = "20") int tamanho) {
        try {
            String emailRestaurante = (String) SecurityContextHolder.getContext().getAuthentication().getPrincipal();
            // Adicionar verificação se o usuário é de fato um restaurante antes de prosseguir
            Usuario usuarioLogado = usuarioRepository.findByEmail(emailRestaurante);
            if (usuarioLogado == null || usuarioLogado.getTipo() != TipoUsuario.RESTAURANTE) {
                return ResponseEntity.status(HttpStatus.FORBIDDEN)
                                     .body(Map.of("erro", "Apenas restaurantes podem acessar suas reservas por este endpoint."));
            }

            Restaurante restaurante = restauranteService.getByEmail(emailRestaurante); 
            
            List<ReservaResponse> reservas = reservaService.findAllByRestauranteOrdered(restaurante.getId(), ordem, pagina, tamanho);
            return ResponseEntity.ok(reservas);
        } catch (RuntimeException e) {
             if (e.getMessage() != null && e.getMessage().toLowerCase().contains("não encontrado")) {
                 return ResponseEntity.status(HttpStatus.NOT_FOUND).body(Map.of("erro", e.getMessage()));
            }
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(Map.of("erro", "Erro ao buscar reservas do restaurante: " + e.getMessage()));
        }
    }

    // NOVO: Buscar reserva por ID
    @GetMapping("/{idReserva}")
    public ResponseEntity<?> buscarReservaPorId(@PathVariable("idReserva") UUID idReserva) {
        // Aqui a permissão de quem pode ver qual reserva pode ser mais complexa
        // e geralmente é tratada no service ou com regras de segurança mais finas.
        // Por agora, qualquer usuário autenticado pode tentar buscar, o service não restringe isso.
        Optional<ReservaResponse> reservaResponseOpt = reservaService.findById(idReserva);
        return reservaResponseOpt
                .<ResponseEntity<?>>map(ResponseEntity::ok)
                .orElseGet(() -> ResponseEntity.status(HttpStatus.NOT_FOUND).body(Map.of("erro", "Reserva não encontrada com ID: " + idReserva)));
    }

    // NOVO: Cancelar reserva
    @PutMapping("/{idReserva}/cancel")
    public ResponseEntity<?> cancelarReserva(@PathVariable("idReserva") UUID idReserva) {
        try {
            String emailUsuarioLogado = (String) SecurityContextHolder.getContext().getAuthentication().getPrincipal();
            ReservaResponse reservaCancelada = reservaService.cancelarReserva(idReserva, emailUsuarioLogado);
            return ResponseEntity.ok(reservaCancelada);
        } catch (SecurityException e) {
            return ResponseEntity.status(HttpStatus.FORBIDDEN).body(Map.of("erro", e.getMessage()));
        } catch (IllegalStateException e) { 
            return ResponseEntity.status(HttpStatus.CONFLICT).body(Map.of("erro", e.getMessage()));
        } catch (RuntimeException e) {
            if (e.getMessage() != null && e.getMessage().toLowerCase().contains("não encontrado")) {
                 return ResponseEntity.status(HttpStatus.NOT_FOUND).body(Map.of("erro", e.getMessage()));
            }
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(Map.of("erro", "Erro ao cancelar reserva: " + e.getMessage()));
        }
    }
    
 // NOVO: Atualizar reserva
    @PutMapping("/{idReserva}/update")
    public ResponseEntity<?> atualizarReserva(@PathVariable("idReserva") UUID idReserva, @RequestBody ReservaRequest reservaRequest) {
        ResponseExceptionHandler handler = new ResponseExceptionHandler();

        // Validação dos campos do request
        // Se dataReserva for fornecida (não nula) E estiver em branco, adiciona erro.
        if (reservaRequest.getDataReserva() != null) { // Checa se foi fornecida
            handler.checkCondition(
                "O campo 'Data da Reserva (dataReserva)' não pode ser vazio se fornecido.", 
                reservaRequest.getDataReserva().isBlank() // A condição que dispara o erro
            );
        }
        
        // Se horarioReserva for fornecido (não nulo) E estiver em branco, adiciona erro.
        if (reservaRequest.getHorarioReserva() != null) { // Checa se foi fornecido
            handler.checkCondition(
                "O campo 'Horário da Reserva (horarioReserva)' não pode ser vazio se fornecido.",
                reservaRequest.getHorarioReserva().isBlank() // A condição que dispara o erro
            );
        }

        // Para quantidadePessoasReserva: 0 pode significar "não alterar".
        // Se for < 0, é um erro. O service já valida se é > 0 quando cria/atualiza de fato.
        // Aqui garantimos que não seja negativo se informado.
        // Você pode usar checkMinimmumNumber se a mensagem padrão dele for adequada,
        // ou checkCondition para uma mensagem mais específica.
        if (reservaRequest.getQuantidadePessoasReserva() < 0) {
            // Usando checkCondition para uma mensagem específica para valor negativo:
            handler.checkCondition(
                "O campo 'Quantidade de Pessoas (quantidadePessoasReserva)' não pode ser um valor negativo.",
                true // A condição é o próprio if, então passamos true aqui
            );
            // OU, se a mensagem do checkMinimmumNumber for aceitável ("deve ser maior que -1"):
            // handler.checkMinimmumNumber("Quantidade de Pessoas (quantidadePessoasReserva)", reservaRequest.getQuantidadePessoasReserva(), -1);
        }
        
        if (handler.errors()) {
            return handler.generateResponse(HttpStatus.BAD_REQUEST);
        }

        try {
            String emailUsuarioLogado = (String) SecurityContextHolder.getContext().getAuthentication().getPrincipal();
            ReservaResponse reservaAtualizada = reservaService.atualizarReserva(idReserva, reservaRequest, emailUsuarioLogado);
            return ResponseEntity.ok(reservaAtualizada);
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
            // Em produção, é bom logar o erro: e.printStackTrace(); ou usar um logger.
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(Map.of("erro", "Erro ao atualizar reserva: " + e.getMessage()));
        }
    }
}