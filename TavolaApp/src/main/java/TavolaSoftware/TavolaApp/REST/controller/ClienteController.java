package TavolaSoftware.TavolaApp.REST.controller;

import TavolaSoftware.TavolaApp.REST.dto.AvaliacaoRequest;
import TavolaSoftware.TavolaApp.REST.dto.AvaliacaoResponse;
import TavolaSoftware.TavolaApp.REST.model.Avaliacao;
import TavolaSoftware.TavolaApp.REST.model.Cliente;
import TavolaSoftware.TavolaApp.REST.model.Reserva;
import TavolaSoftware.TavolaApp.REST.service.AvaliacaoService;
import TavolaSoftware.TavolaApp.REST.service.ClienteService;
import TavolaSoftware.TavolaApp.REST.service.ReservaService;
import TavolaSoftware.TavolaApp.tools.ResponseExceptionHandler;
import TavolaSoftware.TavolaApp.tools.UploadUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.*;

import java.io.IOException;
import java.util.List;
import java.util.Optional;
import java.util.UUID;

@RestController
@RequestMapping("/auth/clientes")
public class ClienteController {

    @Autowired
    private ClienteService serv;

    @Autowired
    private ReservaService servReserva;
    
    @Autowired
    private AvaliacaoService servAvaliacao;

    @Autowired
    private UploadUtils uplUtil;
    
    @PostMapping("/avaliar/{restauranteId}")
    public ResponseEntity<?> avaliar(@PathVariable UUID restauranteId, @RequestBody AvaliacaoRequest avaliacaoRequest) {
        try {
            String emailCliente = (String) SecurityContextHolder.getContext().getAuthentication().getPrincipal();
            // O serviço de avaliação cuidará da lógica de encontrar o cliente, restaurante e salvar/atualizar a avaliação.
            // E também de calcular a média.
            Avaliacao avaliacaoSalva = servAvaliacao.avaliarRestaurante(avaliacaoRequest.getScore(), avaliacaoRequest.getComentario(), restauranteId, emailCliente);
            return ResponseEntity.status(HttpStatus.CREATED).body(new AvaliacaoResponse(avaliacaoSalva));
        } catch (IllegalArgumentException e) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(e.getMessage());
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Erro ao realizar avaliação: " + e.getMessage());
        }
    }

    @GetMapping("/reservas")
    public ResponseEntity<List<Reserva>> findAllByClient(
            @RequestParam(defaultValue = "latest") String ordem,
            @RequestParam(defaultValue = "0") int pagina,
            @RequestParam(defaultValue = "20") int tamanho) {

        String email = (String) SecurityContextHolder.getContext().getAuthentication().getPrincipal();
        UUID id = serv.getIdByEmail(email);
        List<Reserva> reservas = servReserva.findAllByClienteOrdered(id, ordem, pagina, tamanho);
        return ResponseEntity.ok(reservas);
    }

    @PostMapping("/save")
    public ResponseEntity<?> save(@RequestBody Cliente cliente) {
        ResponseExceptionHandler handler = new ResponseExceptionHandler();
        handler.checkEmptyStrting("nome", cliente.getUsuario().getNome());
        handler.checkEmptyStrting("email", cliente.getUsuario().getEmail());
        handler.checkEmptyStrting("senha", cliente.getUsuario().getSenha());
        handler.checkEmptyObject("endereco", cliente.getUsuario().getEndereco());

        if (handler.errors()) {
            return handler.generateResponse(HttpStatus.BAD_REQUEST);
        }

        Cliente novoCliente = serv.save(cliente);
        return ResponseEntity.ok(novoCliente);
    }

    @GetMapping("/get")
    public ResponseEntity<Cliente> findSelf() {
        String email = (String) SecurityContextHolder.getContext().getAuthentication().getPrincipal();
        Optional<Cliente> cliente = serv.findByEmail(email);
        return cliente.map(ResponseEntity::ok).orElseGet(() -> ResponseEntity.notFound().build());
    }

    @GetMapping("/getall")
    public ResponseEntity<List<Cliente>> findAll() {
        return ResponseEntity.ok(serv.findAll());
    }

    @PutMapping("/update")
    public ResponseEntity<?> update(@RequestBody Cliente atualizacao) {
        try {
            String email = (String) SecurityContextHolder.getContext().getAuthentication().getPrincipal();
            Cliente clienteExistente = serv.findByEmail(email)
                .orElseThrow(() -> new RuntimeException("Cliente não encontrado"));

            // Atualiza apenas os campos que foram enviados
            if (atualizacao.getUsuario() != null) {
                if (atualizacao.getUsuario().getNome() != null && !atualizacao.getUsuario().getNome().trim().isEmpty()) {
                    clienteExistente.getUsuario().setNome(atualizacao.getUsuario().getNome());
                }

                if (atualizacao.getUsuario().getEmail() != null && !atualizacao.getUsuario().getEmail().trim().isEmpty()) {
                    clienteExistente.getUsuario().setEmail(atualizacao.getUsuario().getEmail());
                }

                if (atualizacao.getUsuario().getSenha() != null && !atualizacao.getUsuario().getSenha().trim().isEmpty()) {
                    clienteExistente.getUsuario().setSenha(atualizacao.getUsuario().getSenha());
                }

                if (atualizacao.getUsuario().getEndereco() != null) {
                    clienteExistente.getUsuario().setEndereco(atualizacao.getUsuario().getEndereco());
                }

                // Processa imagem de perfil se houver
                if (atualizacao.getUsuario().getImagem() != null && !atualizacao.getUsuario().getImagem().isEmpty()) {
                    try {
                        uplUtil.processUsuarioImagem(atualizacao.getUsuario().getImagem(), clienteExistente.getUsuario().getId(), "perfil");
                        clienteExistente.getUsuario().setImagem("/upl/usuarios/" + clienteExistente.getUsuario().getId() + "/perfil.jpg");
                    } catch (IOException e) {
                        return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
                            .body("Erro ao processar imagem de perfil: " + e.getMessage());
                    }
                }

                // Processa imagem de background se houver
                if (atualizacao.getUsuario().getImagemBackground() != null && !atualizacao.getUsuario().getImagemBackground().isEmpty()) {
                    try {
                        uplUtil.processUsuarioImagem(atualizacao.getUsuario().getImagemBackground(), clienteExistente.getUsuario().getId(), "background");
                        clienteExistente.getUsuario().setImagemBackground("/upl/usuarios/" + clienteExistente.getUsuario().getId() + "/background.jpg");
                    } catch (IOException e) {
                        return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
                            .body("Erro ao processar imagem de background: " + e.getMessage());
                    }
                }
            }

            Cliente atualizado = serv.save(clienteExistente);
            return ResponseEntity.ok(atualizado);
        } catch (Exception e) {
            return ResponseEntity.badRequest().body("Erro ao atualizar cliente: " + e.getMessage());
        }
    }
    
    

    @DeleteMapping("/delete")
    public ResponseEntity<Void> delete() {
        String email = (String) SecurityContextHolder.getContext().getAuthentication().getPrincipal();
        serv.deleteByEmail(email);
        return ResponseEntity.noContent().build();
    }
}
