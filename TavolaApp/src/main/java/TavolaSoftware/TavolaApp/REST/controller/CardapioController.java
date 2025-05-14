package TavolaSoftware.TavolaApp.REST.controller;

import TavolaSoftware.TavolaApp.REST.dto.CardapioResponse;
import TavolaSoftware.TavolaApp.REST.model.Cardapio;
import TavolaSoftware.TavolaApp.REST.model.Categoria;
import TavolaSoftware.TavolaApp.REST.model.Restaurante;
import TavolaSoftware.TavolaApp.REST.model.Tags;
import TavolaSoftware.TavolaApp.REST.service.CardapioService;
import TavolaSoftware.TavolaApp.REST.service.CategoriaService;
import TavolaSoftware.TavolaApp.REST.service.RestauranteService;
import TavolaSoftware.TavolaApp.REST.service.TagsService;
import TavolaSoftware.TavolaApp.tools.ResponseExceptionHandler;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.*;

import java.util.*;
import java.util.stream.Collectors;

@RestController
@RequestMapping("/auth/cardapios")
public class CardapioController {

    @Autowired
    private CardapioService serv;

    @Autowired
    private CategoriaService categoriaServ;

    @Autowired
    private TagsService tagsServ;

    @Autowired
    private RestauranteService restauranteServ;

    @PostMapping("/save")
    public ResponseEntity<?> save(@RequestBody Cardapio cardapio) {
        ResponseExceptionHandler handler = new ResponseExceptionHandler();

        handler.checkEmptyStrting("nome", cardapio.getNome());
        handler.checkMinimmumNumber("valor", cardapio.getPreco(), 0.0);
        handler.checkEmptyStrting("descricao", cardapio.getDescricao());

        if (handler.errors()) {
            return handler.generateResponse(HttpStatus.BAD_REQUEST);
        }

        String email = (String) SecurityContextHolder.getContext().getAuthentication().getPrincipal();
        Restaurante restaurante = restauranteServ.getByEmail(email);
        cardapio.setRestaurante(restaurante);

        if (cardapio.getCategoria() != null && cardapio.getCategoria().getNome() != null) {
            Categoria categoria = categoriaServ.saveIfNotExists(cardapio.getCategoria().getNome(), restaurante);
            cardapio.setCategoria(categoria);
        }

        if (cardapio.getTags() != null && !cardapio.getTags().isEmpty()) {
            Set<String> nomesTags = cardapio.getTags().stream().map(Tags::getTag).collect(Collectors.toSet());
            Set<Tags> tags = tagsServ.saveAll(nomesTags);
            cardapio.setTags(tags);
        }

        Cardapio salvo = serv.save(cardapio);
        return ResponseEntity.ok(new CardapioResponse(salvo));
    }

    @PostMapping("/save/multi")
    public ResponseEntity<?> saveMultiple(@RequestBody List<Cardapio> cardapios) {
        String email = (String) SecurityContextHolder.getContext().getAuthentication().getPrincipal();
        Restaurante restaurante = restauranteServ.getByEmail(email);

        List<CardapioResponse> salvos = new ArrayList<>();
        ResponseExceptionHandler handler = new ResponseExceptionHandler();

        for (Cardapio cardapio : cardapios) {
            handler.checkEmptyStrting("nome", cardapio.getNome());
            handler.checkMinimmumNumber("valor", cardapio.getPreco(), 0.0);
            handler.checkEmptyStrting("descricao", cardapio.getDescricao());

            cardapio.setRestaurante(restaurante);

            if (cardapio.getCategoria() != null && cardapio.getCategoria().getNome() != null) {
                Categoria categoria = categoriaServ.saveIfNotExists(cardapio.getCategoria().getNome(), restaurante);
                cardapio.setCategoria(categoria);
            }

            if (cardapio.getTags() != null && !cardapio.getTags().isEmpty()) {
                Set<String> nomesTags = cardapio.getTags().stream().map(Tags::getTag).collect(Collectors.toSet());
                Set<Tags> tags = tagsServ.saveAll(nomesTags);
                cardapio.setTags(tags);
            }

            Cardapio salvo = serv.save(cardapio);
            salvos.add(new CardapioResponse(salvo));
        }

        if (handler.errors()) {
            return handler.generateResponse(HttpStatus.BAD_REQUEST);
        }

        return ResponseEntity.ok(salvos);
    }

    @GetMapping 
    public ResponseEntity<List<CardapioResponse>> findAllSelf() {
        String email = (String) SecurityContextHolder.getContext().getAuthentication().getPrincipal();
        Restaurante restaurante = restauranteServ.getByEmail(email);
        List<Cardapio> cardapios = serv.findByRestauranteId(restaurante.getId());
        List<CardapioResponse> response = cardapios.stream().map(CardapioResponse::new).collect(Collectors.toList());
        return ResponseEntity.ok(response);
    }

    @GetMapping("/disponiveis") 
    public ResponseEntity<List<CardapioResponse>> findAllSelfByDisponivel(Authentication authentication) {
        Restaurante restaurante = restauranteServ.getByEmail(authentication.getName());
        List<Cardapio> cardapios = serv.findAllByDisponivel(restaurante.getId());
        List<CardapioResponse> response = cardapios.stream().map(CardapioResponse::new).collect(Collectors.toList());
        return ResponseEntity.ok(response);
    }

    @GetMapping("/{id}")
    public ResponseEntity<CardapioResponse> findById(@PathVariable UUID id) {
        Optional<Cardapio> cardapio = serv.findById(id);
        return cardapio.map(c -> ResponseEntity.ok(new CardapioResponse(c)))
                       .orElseGet(() -> ResponseEntity.notFound().build());
    }

    @GetMapping("/restaurante/{restauranteId}") 
    public ResponseEntity<List<CardapioResponse>> findAllByRestaurante(@PathVariable UUID restauranteId) {
        List<Cardapio> cardapios = serv.findByRestauranteId(restauranteId);
        List<CardapioResponse> response = cardapios.stream().map(CardapioResponse::new).collect(Collectors.toList());
        return ResponseEntity.ok(response);
    }

    @GetMapping("/disponiveis/{restauranteId}")
    public ResponseEntity<List<CardapioResponse>> findAllByDisponivel(@PathVariable UUID restauranteId) {
        List<Cardapio> cardapios = serv.findAllByDisponivel(restauranteId);
        List<CardapioResponse> response = cardapios.stream().map(CardapioResponse::new).collect(Collectors.toList());
        return ResponseEntity.ok(response);
    }

    @PutMapping("/update/{id}")
    public ResponseEntity<?> update(@PathVariable UUID id, @RequestBody Cardapio cardapio) {
        ResponseExceptionHandler handler = new ResponseExceptionHandler();

        handler.checkEmptyStrting("nome", cardapio.getNome());
        handler.checkMinimmumNumber("valor", cardapio.getPreco(), 0.0);
        handler.checkEmptyStrting("descricao", cardapio.getDescricao());

        if (handler.errors()) {
            return handler.generateResponse(HttpStatus.BAD_REQUEST);
        }

        String email = (String) SecurityContextHolder.getContext().getAuthentication().getPrincipal();
        Restaurante restaurante = restauranteServ.getByEmail(email);
        cardapio.setRestaurante(restaurante);

        if (cardapio.getCategoria() != null && cardapio.getCategoria().getNome() != null) {
            Categoria categoria = categoriaServ.saveIfNotExists(cardapio.getCategoria().getNome(), restaurante);
            cardapio.setCategoria(categoria);
        }

        if (cardapio.getTags() != null && !cardapio.getTags().isEmpty()) {
            Set<String> nomesTags = cardapio.getTags().stream().map(Tags::getTag).collect(Collectors.toSet());
            Set<Tags> tags = tagsServ.saveAll(nomesTags);
            cardapio.setTags(tags);
        }

        Cardapio atualizado = serv.update(id, cardapio);
        return (atualizado != null) ? ResponseEntity.ok(new CardapioResponse(atualizado)) : ResponseEntity.notFound().build();
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteById(@PathVariable UUID id) {
        serv.deleteById(id);
        return ResponseEntity.noContent().build();
    }
}
