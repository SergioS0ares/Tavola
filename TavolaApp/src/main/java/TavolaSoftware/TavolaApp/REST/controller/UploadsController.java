package TavolaSoftware.TavolaApp.REST.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.*;

import TavolaSoftware.TavolaApp.REST.model.Restaurante;
import TavolaSoftware.TavolaApp.REST.service.RestauranteService;
import TavolaSoftware.TavolaApp.REST.service.UsuarioService;
import TavolaSoftware.TavolaApp.tools.UploadUtils;

import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.Base64;
import java.util.UUID;

@RestController
@RequestMapping("/auth/uploads")
public class UploadsController {
	
	@Autowired
	private UploadUtils uploadUtils;
	
	@Autowired
	private RestauranteService servRestaurante;
	
	@Autowired
	private UsuarioService servUsuario;

	@PostMapping("/upload/cardapio")
	public ResponseEntity<String> uploadCardapio(@RequestBody String base64, Authentication auth) throws IOException {
	    String email = auth.getName();
	    Restaurante restaurante = servRestaurante.getByEmail(email);
	    UUID restauranteId = restaurante.getId();

	    if (!uploadUtils.isBase64Image(base64)) {
	        return ResponseEntity.badRequest().body("Formato inválido");
	    }

	    String pasta = "upl/cardapios/" + restauranteId;
	    String nomeImagem = uploadUtils.salvarImagemBase64(base64, pasta, "jpg");
	    String caminhoFinal = "/upl/cardapios/" + restauranteId + "/" + nomeImagem;

	    return ResponseEntity.ok(caminhoFinal);
	}
	
	@PostMapping("/upload/mesa/{mesaId}")
	public ResponseEntity<String> uploadImagemMesa(@RequestBody String base64, @PathVariable String mesaId, Authentication auth) throws IOException {
	    String email = auth.getName();
	    Restaurante restaurante = servRestaurante.getByEmail(email);
	    UUID restauranteId = restaurante.getId();

	    if (!uploadUtils.isBase64Image(base64)) {
	        return ResponseEntity.badRequest().body("Formato inválido");
	    }

	    String pasta = "upl/mesas/" + restauranteId + "/" + mesaId;
	    String nome = uploadUtils.salvarImagemBase64(base64, pasta, "jpg");
	    return ResponseEntity.ok("/upl/mesas/" + restauranteId + "/" + mesaId + "/" + nome);
	}

	@PostMapping("/upload/restaurante")
	public ResponseEntity<String> uploadImagemRestaurante(@RequestBody String base64, Authentication auth) throws IOException {
	    String email = auth.getName();
	    Restaurante restaurante = servRestaurante.getByEmail(email);
	    UUID restauranteId = restaurante.getId();

	    if (!uploadUtils.isBase64Image(base64)) {
	        return ResponseEntity.badRequest().body("Formato inválido");
	    }

	    String pasta = "upl/restaurantes/" + restauranteId;
	    String nome = uploadUtils.salvarImagemBase64(base64, pasta, "jpg");
	    return ResponseEntity.ok("/upl/restaurantes/" + restauranteId + "/" + nome);
	}

	@PostMapping("/upload/usuario/{tipo}")
	public ResponseEntity<String> uploadImagemUsuario(@RequestBody String base64, @PathVariable String tipo, Authentication auth) throws IOException {
	    String email = auth.getName();
	    UUID usuarioId = servUsuario.getIdByEmail(email);

	    if (!uploadUtils.isBase64Image(base64)) {
	        return ResponseEntity.badRequest().body("Formato inválido");
	    }

	    String nomePadrao = tipo.equalsIgnoreCase("background") ? "background.jpg" : "perfil.jpg";
	    Path pasta = Paths.get("upl", "usuarios", usuarioId.toString());
	    Path caminhoCompleto = pasta.resolve(nomePadrao);

	    Files.createDirectories(pasta);
	    byte[] imagemBytes = Base64.getDecoder().decode(base64.split(",")[1]);
	    Files.write(caminhoCompleto, imagemBytes);

	    String urlPublica = "/upl/usuarios/" + usuarioId + "/" + nomePadrao;
	    return ResponseEntity.ok(urlPublica);
	}

}
