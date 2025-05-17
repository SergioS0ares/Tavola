package TavolaSoftware.TavolaApp.REST.controller;

import TavolaSoftware.TavolaApp.REST.model.Reserva;
import TavolaSoftware.TavolaApp.REST.model.Restaurante;
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
import java.util.UUID;

@RestController
@RequestMapping("/auth/restaurantes")
public class RestauranteController {

    @Autowired
    private RestauranteService serv;

    @Autowired
    private ReservaService servReserva;
    
    @Autowired
    private UploadUtils uplUtil;

    private Restaurante getSelfRestaurante() {
        String email = (String) SecurityContextHolder.getContext().getAuthentication().getPrincipal();
        return serv.getByEmail(email);
    }

    @GetMapping("/reservas")
    public ResponseEntity<List<Reserva>> findAllByRestaurante(
            @RequestParam(defaultValue = "latest") String ordem,
            @RequestParam(defaultValue = "0") int pagina,
            @RequestParam(defaultValue = "20") int tamanho) {

        Restaurante restaurante = getSelfRestaurante();
        List<Reserva> reservas = servReserva.findAllByRestauranteOrdered(restaurante.getId(), ordem, pagina, tamanho);
        return ResponseEntity.ok(reservas);
    }

    @GetMapping
    public ResponseEntity<List<Restaurante>> findAll() {
        return ResponseEntity.ok(serv.findAll());
    }

    @GetMapping("/{id}")
    public ResponseEntity<Restaurante> findById(@PathVariable UUID id) {
        return serv.findById(id)
                .map(ResponseEntity::ok)
                .orElseGet(() -> ResponseEntity.notFound().build());
    }

    @PostMapping("/save")
    public ResponseEntity<?> save(@RequestBody Restaurante restaurante) {
        ResponseExceptionHandler handler = new ResponseExceptionHandler();

        handler.checkEmptyStrting("nome", restaurante.getUsuario().getNome());
        handler.checkEmptyStrting("email", restaurante.getUsuario().getEmail());
        handler.checkEmptyStrting("senha", restaurante.getUsuario().getSenha());
        handler.checkEmptyObject("endereco", restaurante.getUsuario().getEndereco());
        handler.checkEmptyList("horário de funcionamento", restaurante.getHoraFuncionamento());

        if (handler.errors()) {
            return handler.generateResponse(HttpStatus.BAD_REQUEST);
        }

        return ResponseEntity.ok(serv.save(restaurante));
    }

    @PutMapping("/update")
    public ResponseEntity<?> update(@RequestBody Restaurante atualizacao) {
        try {
            String email = (String) SecurityContextHolder.getContext().getAuthentication().getPrincipal();
            Restaurante restauranteExistente = serv.getByEmail(email);

            // Atualiza apenas os campos que foram enviados
            if (atualizacao.getUsuario() != null) {
                if (atualizacao.getUsuario().getNome() != null && !atualizacao.getUsuario().getNome().trim().isEmpty()) {
                    restauranteExistente.getUsuario().setNome(atualizacao.getUsuario().getNome());
                }

                if (atualizacao.getUsuario().getEmail() != null && !atualizacao.getUsuario().getEmail().trim().isEmpty()) {
                    restauranteExistente.getUsuario().setEmail(atualizacao.getUsuario().getEmail());
                }

                if (atualizacao.getUsuario().getSenha() != null && !atualizacao.getUsuario().getSenha().trim().isEmpty()) {
                    restauranteExistente.getUsuario().setSenha(atualizacao.getUsuario().getSenha());
                }

                if (atualizacao.getUsuario().getEndereco() != null) {
                    restauranteExistente.getUsuario().setEndereco(atualizacao.getUsuario().getEndereco());
                }
            }

            if (atualizacao.getTipoCozinha() != null && !atualizacao.getTipoCozinha().trim().isEmpty()) {
                restauranteExistente.setTipoCozinha(atualizacao.getTipoCozinha());
            }

            if (atualizacao.getHoraFuncionamento() != null && !atualizacao.getHoraFuncionamento().isEmpty()) {
                restauranteExistente.setHoraFuncionamento(atualizacao.getHoraFuncionamento());
            }

            // Processa imagens se houver
            if (atualizacao.getImagem() != null && !atualizacao.getImagem().isEmpty()) {
                try {
                    uplUtil.processRestauranteImagens(atualizacao.getImagem(), restauranteExistente.getId());
                    restauranteExistente.setImagem(atualizacao.getImagem());
                } catch (IOException e) {
                    return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
                        .body("Erro ao processar imagens: " + e.getMessage());
                }
            }

            Restaurante restauranteAtualizado = serv.save(restauranteExistente);
            return ResponseEntity.ok(restauranteAtualizado);
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
                .body("Erro ao atualizar restaurante: " + e.getMessage());
        }
    }

    @PutMapping("/{id}")
    public ResponseEntity<?> updateById(@PathVariable UUID id, @RequestBody Restaurante restauranteAtualizado) {
        try {
            Restaurante restauranteExistente = serv.findById(id)
                .orElseThrow(() -> new RuntimeException("Restaurante não encontrado"));

            // Atualiza apenas os campos que foram enviados
            if (restauranteAtualizado.getNome() != null && !restauranteAtualizado.getNome().trim().isEmpty()) {
                restauranteExistente.setNome(restauranteAtualizado.getNome());
            }

            if (restauranteAtualizado.getEndereco() != null) {
                restauranteExistente.setEndereco(restauranteAtualizado.getEndereco());
            }

            if (restauranteAtualizado.getHoraFuncionamento() != null && !restauranteAtualizado.getHoraFuncionamento().isEmpty()) {
                restauranteExistente.setHoraFuncionamento(restauranteAtualizado.getHoraFuncionamento());
            }

            if (restauranteAtualizado.getTipoCozinha() != null && !restauranteAtualizado.getTipoCozinha().trim().isEmpty()) {
                restauranteExistente.setTipoCozinha(restauranteAtualizado.getTipoCozinha());
            }

            // Processa imagens se houver
            if (restauranteAtualizado.getImagem() != null && !restauranteAtualizado.getImagem().isEmpty()) {
                try {
                    uplUtil.processRestauranteImagens(restauranteAtualizado.getImagem(), restauranteExistente.getId());
                    restauranteExistente.setImagem(restauranteAtualizado.getImagem());
                } catch (IOException e) {
                    return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
                        .body("Erro ao processar imagens: " + e.getMessage());
                }
            }

            Restaurante updated = serv.save(restauranteExistente);
            return ResponseEntity.ok(updated);
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
                .body("Erro ao atualizar restaurante: " + e.getMessage());
        }
    }

    @DeleteMapping
    public ResponseEntity<Void> deleteSelf() {
        Restaurante restaurante = getSelfRestaurante();
        serv.deleteById(restaurante.getId());
        return ResponseEntity.noContent().build();
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteById(@PathVariable UUID id) {
        serv.deleteById(id);
        return ResponseEntity.noContent().build();
    }
} 
