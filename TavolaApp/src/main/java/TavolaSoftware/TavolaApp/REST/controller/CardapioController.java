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
import TavolaSoftware.TavolaApp.tools.UploadUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.*;

import java.io.IOException;
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

    @Autowired
    private UploadUtils uplUtil;

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

        // Processa imagem do cardápio se houver
        if (cardapio.getImagem() != null && !cardapio.getImagem().isEmpty()) {
            try {
                // Verifica se a imagem é um caminho de arquivo
                if (!cardapio.getImagem().startsWith("/upl/")) {
                    uplUtil.processCardapioImagem(cardapio.getImagem(), restaurante.getId(), salvo.getId());
                    salvo = serv.save(salvo);
                }
            } catch (IOException e) {
                return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
            }
        }

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
    public ResponseEntity<List<CardapioResponse>> findAllSelfByDisponivel() {
        String email = (String) SecurityContextHolder.getContext().getAuthentication().getPrincipal();
        Restaurante restaurante = restauranteServ.getByEmail(email);
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
    public ResponseEntity<?> update(
        @PathVariable UUID id,
        @RequestBody Cardapio cardapio
    ) {
        ResponseExceptionHandler handler = new ResponseExceptionHandler();
        handler.checkEmptyStrting("nome",      cardapio.getNome());
        handler.checkMinimmumNumber("valor",  cardapio.getPreco(), 0.0);
        handler.checkEmptyStrting("descricao", cardapio.getDescricao());

        if (handler.errors()) {
            return handler.generateResponse(HttpStatus.BAD_REQUEST);
        }

        String email = (String) SecurityContextHolder
                            .getContext()
                            .getAuthentication()
                            .getPrincipal();
        Restaurante restaurante = restauranteServ.getByEmail(email);

        Optional<Cardapio> opt = serv.findById(id);
        if (opt.isEmpty()) {
            return ResponseEntity.notFound().build();
        }
        Cardapio atual = opt.get();

        // atualiza campos
        atual.setNome(cardapio.getNome());
        atual.setPreco(cardapio.getPreco());
        atual.setDescricao(cardapio.getDescricao());
        atual.setDisponivel(cardapio.getDisponivel());

        // categoria
        if (cardapio.getCategoria() != null 
            && cardapio.getCategoria().getNome() != null) {
          Categoria cat =
            categoriaServ.saveIfNotExists(
              cardapio.getCategoria().getNome(),
              restaurante
            );
          atual.setCategoria(cat);
        }

        // tags
        if (cardapio.getTags() != null && !cardapio.getTags().isEmpty()) {
          Set<String> nomes = cardapio.getTags().stream()
                                      .map(Tags::getTag)
                                      .collect(Collectors.toSet());
          Set<Tags> tags = tagsServ.saveAll(nomes);
          atual.setTags(tags);
        }

        // salva metadados primeiro
        Cardapio salvo = serv.save(atual);

        String img = cardapio.getImagem();
        // só processa se vier um data-uri completo
        if (img != null && img.startsWith("data:image/")) {
          try {
            // PASSA O DATA-URI INTEIRO COM CABEÇALHO
            uplUtil.processCardapioImagem(
              img,
              restaurante.getId(),
              salvo.getId()
            );
            // recarrega pra pegar o novo path
            salvo = serv.findById(salvo.getId()).get();
          }
          catch (IOException e) {
            return ResponseEntity
                    .status(HttpStatus.INTERNAL_SERVER_ERROR)
                    .body("Falha ao processar imagem: " + e.getMessage());
          }
        }
        // se vier qualquer outra string (o path antigo ou null), não faz nada
        return ResponseEntity.ok(new CardapioResponse(salvo));
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteById(@PathVariable UUID id) {
        serv.deleteById(id);
        return ResponseEntity.noContent().build();
    }
}
