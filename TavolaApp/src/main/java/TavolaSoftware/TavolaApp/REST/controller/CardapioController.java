package TavolaSoftware.TavolaApp.REST.controller;

import TavolaSoftware.TavolaApp.REST.model.Cardapio;
import TavolaSoftware.TavolaApp.REST.model.Categoria;
import TavolaSoftware.TavolaApp.REST.model.Tags;
import TavolaSoftware.TavolaApp.REST.service.CardapioService;
import TavolaSoftware.TavolaApp.REST.service.CategoriaService;
import TavolaSoftware.TavolaApp.REST.service.TagsService;
import TavolaSoftware.TavolaApp.tools.ResponseExceptionHandler;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;
import java.util.Set;
import java.util.UUID;
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

	@PostMapping("/save")
	public ResponseEntity<?> save(@RequestBody Cardapio cardapio) {
	    ResponseExceptionHandler handler = new ResponseExceptionHandler();

	    handler.checkEmptyStrting("nome", cardapio.getNome());
	    handler.checkMinimmumNumber("valor", cardapio.getPreco(), 0.0);
	    handler.checkEmptyStrting("descricao", cardapio.getDescricao());
	    handler.checkEmptyObject("restaurante", cardapio.getRestaurante());

	    if (handler.errors()) {
	        return handler.generateResponse(HttpStatus.BAD_REQUEST);
	    }

	    if (cardapio.getCategoria() != null && cardapio.getCategoria().getNome() != null) {
	        Categoria categoria = categoriaServ.saveIfNotExists(
	            cardapio.getCategoria().getNome(), 
	            cardapio.getRestaurante()
	        );
	        cardapio.setCategoria(categoria);
	    }

	    if (cardapio.getTags() != null && !cardapio.getTags().isEmpty()) {
	        Set<String> nomesTags = cardapio.getTags().stream()
	            .map(Tags::getTag)
	            .collect(Collectors.toSet());

	        Set<Tags> tags = tagsServ.saveAll(nomesTags);
	        cardapio.setTags(tags);
	    }

	    return ResponseEntity.ok(serv.save(cardapio));
	}

    @GetMapping
    public ResponseEntity<List<Cardapio>> listarTodos() {
        return ResponseEntity.ok(serv.findAll());
    }

    @GetMapping("/{id}")
    public ResponseEntity<Cardapio> findById(@PathVariable UUID id) {
        Optional<Cardapio> cardapio = serv.findById(id);
        return cardapio.map(ResponseEntity::ok).orElseGet(() -> ResponseEntity.notFound().build());
    }

    @GetMapping("/restaurante/{restauranteId}")
    public ResponseEntity<List<Cardapio>> findByRestauranteId(@PathVariable UUID restauranteId) {
        return ResponseEntity.ok(serv.findByRestauranteId(restauranteId));
    }

    @PutMapping("/update/{id}")
    public ResponseEntity<?> update(@PathVariable UUID id, @RequestBody Cardapio cardapio) {
        ResponseExceptionHandler handler = new ResponseExceptionHandler();

        handler.checkEmptyStrting("nome", cardapio.getNome());
        handler.checkMinimmumNumber("valor", cardapio.getPreco(), 0.0);
        handler.checkEmptyStrting("descricao", cardapio.getDescricao());
        handler.checkEmptyObject("restaurante", cardapio.getRestaurante());

        if (handler.errors()) {
            return handler.generateResponse(HttpStatus.BAD_REQUEST);
        }

        Cardapio atualizado = serv.update(id, cardapio);
        return (atualizado != null) ? ResponseEntity.ok(atualizado) : ResponseEntity.notFound().build();
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteById(@PathVariable UUID id) {
        serv.deleteById(id);
        return ResponseEntity.noContent().build();
    }
}
