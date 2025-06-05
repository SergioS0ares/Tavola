package TavolaSoftware.TavolaApp.REST.controller;

import TavolaSoftware.TavolaApp.REST.dto.AvaliacaoRequest;
import TavolaSoftware.TavolaApp.REST.dto.RestauranteResponse;
import TavolaSoftware.TavolaApp.REST.model.Cliente;
import TavolaSoftware.TavolaApp.REST.model.Reserva;
import TavolaSoftware.TavolaApp.REST.service.AvaliacaoService;
import TavolaSoftware.TavolaApp.REST.service.ClienteService;
import TavolaSoftware.TavolaApp.REST.service.ReservaService;
import TavolaSoftware.TavolaApp.REST.service.RestauranteService;
import TavolaSoftware.TavolaApp.tools.ResponseExceptionHandler;
import TavolaSoftware.TavolaApp.tools.UploadUtils;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.*;

import java.io.IOException;
import java.util.List;
import java.util.Map; // Adicionado para respostas JSON simples
import java.util.Optional;
import java.util.UUID;

@RestController
@RequestMapping("/auth/clientes") // O endpoint base é /auth/clientes
public class ClienteController {

    @Autowired
    private ClienteService serv;

    @Autowired
    private ReservaService servReserva;
    
    @Autowired
    private AvaliacaoService servAvaliacao;

    @Autowired
    private RestauranteService servRestaurante;

    @Autowired
    private UploadUtils uplUtil;
    
    // GET - self
    @GetMapping("/favoritos")
    public ResponseEntity<?> findAllFavoritos() {
        try {
            String emailCliente = (String) SecurityContextHolder.getContext().getAuthentication().getPrincipal();
            List<UUID> favoritos = serv.getFavoritos(emailCliente);
            return ResponseEntity.ok(favoritos);
        } catch (RuntimeException e) { // Captura "Cliente não encontrado"
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(Map.of("erro", e.getMessage()));
        } catch (Exception e) {
            // Logar o erro: e.printStackTrace();
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(Map.of("erro", "Erro ao buscar favoritos: " + e.getMessage()));
        }
    }

    @GetMapping("/get")
    public ResponseEntity<Cliente> findSelf() {
        String email = (String) SecurityContextHolder.getContext().getAuthentication().getPrincipal();
        Optional<Cliente> cliente = serv.findByEmail(email);
        return cliente.map(ResponseEntity::ok).orElseGet(() -> ResponseEntity.notFound().build());
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

    // GET - all
    @GetMapping("/getall")
    public ResponseEntity<List<Cliente>> findAll() {
        return ResponseEntity.ok(serv.findAll());
    }

    // POST
    @PostMapping("/avaliar/{restauranteId}")
    public ResponseEntity<?> avaliar(@PathVariable UUID restauranteId, @RequestBody AvaliacaoRequest avaliacaoRequest) {
        try {
            String emailCliente = (String) SecurityContextHolder.getContext().getAuthentication().getPrincipal();
            
            servAvaliacao.avaliarRestaurante(
                avaliacaoRequest.getScore(), 
                avaliacaoRequest.getComentario(), 
                restauranteId, 
                emailCliente
            );
            
            Optional<RestauranteResponse> restauranteResponseOpt = servRestaurante.findById(restauranteId);
            
            if (restauranteResponseOpt.isPresent()) {
                return ResponseEntity.status(HttpStatus.OK).body(restauranteResponseOpt.get());
            } else {
                return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Restaurante não encontrado após avaliação.");
            }

        } catch (IllegalArgumentException e) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(e.getMessage());
        } catch (Exception e) {
            // Logar o erro e.printStackTrace();
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Erro ao realizar avaliação: " + e.getMessage());
        }
    }

    @PostMapping("/favoritar/{id}") // /{id} como solicitado
    public ResponseEntity<?> favoritar(@PathVariable("id") UUID restauranteId) { // @PathVariable("id") para corresponder
        try {
            String emailCliente = (String) SecurityContextHolder.getContext().getAuthentication().getPrincipal();
            String resultado = serv.toggleFavorito(emailCliente, restauranteId);
            return ResponseEntity.ok(Map.of("mensagem", resultado));
        } catch (RuntimeException e) { // Captura exceções como "Cliente não encontrado" ou "Restaurante não encontrado"
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(Map.of("erro", e.getMessage()));
        } catch (Exception e) {
            // Logar o erro: e.printStackTrace();
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(Map.of("erro", "Erro ao processar 'favoritar': " + e.getMessage()));
        }
    }
    
    @PostMapping("/save")
    public ResponseEntity<?> save(@RequestBody Cliente cliente) {
        ResponseExceptionHandler handler = new ResponseExceptionHandler();
        // É importante validar se cliente.getUsuario() não é nulo antes de chamar os getters
        if (cliente.getUsuario() == null) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(Map.of("erro", "Dados de usuário não fornecidos."));
        }
        handler.checkEmptyStrting("nome", cliente.getUsuario().getNome());
        handler.checkEmptyStrting("email", cliente.getUsuario().getEmail());
        handler.checkEmptyStrting("senha", cliente.getUsuario().getSenha()); // Senha deve ser encodada
        handler.checkEmptyObject("endereco", cliente.getUsuario().getEndereco());

        if (handler.errors()) {
            return handler.generateResponse(HttpStatus.BAD_REQUEST);
        }

        // Aqui, antes de salvar, você normalmente faria o hash da senha
        // cliente.getUsuario().setSenha(passwordEncoder.encode(cliente.getUsuario().getSenha()));
        
        Cliente novoCliente = serv.save(cliente);
        return ResponseEntity.ok(novoCliente);
    }

    // PUT
    @PutMapping("/update")
    public ResponseEntity<?> update(@RequestBody Cliente atualizacao) {
        try {
            String email = (String) SecurityContextHolder.getContext().getAuthentication().getPrincipal();
            Cliente clienteExistente = serv.findByEmail(email)
                .orElseThrow(() -> new RuntimeException("Cliente não encontrado com o email: " + email));

            boolean algumaAlteracaoFeita = false;

            if (atualizacao.getUsuario() != null) {
                if (atualizacao.getUsuario().getNome() != null && !atualizacao.getUsuario().getNome().trim().isEmpty()) {
                    clienteExistente.getUsuario().setNome(atualizacao.getUsuario().getNome());
                    algumaAlteracaoFeita = true;
                }

                // Não permitir alteração de email ou senha por este endpoint simplificado
                // ou adicionar validações e lógica de segurança mais robustas se permitido.
                // Se for permitir alteração de email, precisa verificar se o novo email já existe.
                // Se for permitir alteração de senha, precisa encodar a nova senha.

                if (atualizacao.getUsuario().getEndereco() != null) {
                    clienteExistente.getUsuario().setEndereco(atualizacao.getUsuario().getEndereco());
                    algumaAlteracaoFeita = true;
                }
                
                // A lógica de imagem do usuário já existente parece correta,
                // mas lembre-se que o processUsuarioImagem pode precisar da atualização
                // que fizemos no UploadUtils para passar o tipo "image"
                if (atualizacao.getUsuario().getImagem() != null && uplUtil.isBase64Image(atualizacao.getUsuario().getImagem())) {
                    try {
                        // Lembre-se que processUsuarioImagem foi modificado para aceitar um 4º parâmetro 'tipoDeDadoPrefixo'
                        // Veja a resposta anterior sobre UploadUtils.java
                        // String nomeArquivo = uplUtil.processBase64(atualizacao.getUsuario().getImagem(), "upl/usuarios/" + clienteExistente.getUsuario().getId(), "jpg", "image");
                        // clienteExistente.getUsuario().setImagem("/upl/usuarios/" + clienteExistente.getUsuario().getId() + "/" + nomeArquivo);
                        // A linha abaixo é como estava no seu código, assumindo que processUsuarioImagem internamente usa o processBase64 correto
                        String caminhoImagemPerfil = uplUtil.processUsuarioImagem(atualizacao.getUsuario().getImagem(), clienteExistente.getUsuario().getId(), "perfil"); // "perfil" aqui é um nome de arquivo, não o tipo de dado do UploadUtils
                        clienteExistente.getUsuario().setImagem(caminhoImagemPerfil); // O processUsuarioImagem já retorna o caminho completo
                        algumaAlteracaoFeita = true;
                    } catch (IOException e) {
                        return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
                            .body(Map.of("erro", "Erro ao processar imagem de perfil: " + e.getMessage()));
                    }
                }


                if (atualizacao.getUsuario().getImagemBackground() != null && uplUtil.isBase64Image(atualizacao.getUsuario().getImagemBackground())) {
                     try {
                        // String nomeArquivoBg = uplUtil.processBase64(atualizacao.getUsuario().getImagemBackground(), "upl/usuarios/" + clienteExistente.getUsuario().getId(), "jpg", "image");
                        // clienteExistente.getUsuario().setImagemBackground("/upl/usuarios/" + clienteExistente.getUsuario().getId() + "/" + nomeArquivoBg);
                        String caminhoImagemBg = uplUtil.processUsuarioImagem(atualizacao.getUsuario().getImagemBackground(), clienteExistente.getUsuario().getId(), "background");
                        clienteExistente.getUsuario().setImagemBackground(caminhoImagemBg);
                        algumaAlteracaoFeita = true;
                    } catch (IOException e) {
                        return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
                            .body(Map.of("erro", "Erro ao processar imagem de background: " + e.getMessage()));
                    }
                }
            }
            // Adicione aqui a lógica para atualizar outros campos específicos do Cliente se houver.

            if (!algumaAlteracaoFeita) {
                return ResponseEntity.ok(Map.of("mensagem", "Nenhuma alteração fornecida ou necessária.", "cliente", clienteExistente));
            }

            Cliente clienteAtualizado = serv.save(clienteExistente); // Salva as alterações
            return ResponseEntity.ok(clienteAtualizado);

        } catch (RuntimeException e) { // Captura RuntimeException do orElseThrow e outras
             return ResponseEntity.status(HttpStatus.NOT_FOUND).body(Map.of("erro", e.getMessage()));
        } 
        catch (Exception e) {
            // Logar o erro: e.printStackTrace();
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(Map.of("erro", "Erro interno ao atualizar cliente: " + e.getMessage()));
        }
    }

    // DELETE - self
    @DeleteMapping("/delete")
    public ResponseEntity<Void> delete() {
        String email = (String) SecurityContextHolder.getContext().getAuthentication().getPrincipal();
        serv.deleteByEmail(email);
        return ResponseEntity.noContent().build();
    }
}