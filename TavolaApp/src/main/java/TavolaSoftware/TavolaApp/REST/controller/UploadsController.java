package TavolaSoftware.TavolaApp.REST.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import TavolaSoftware.TavolaApp.REST.model.Restaurante;
import TavolaSoftware.TavolaApp.REST.model.Usuario;
import TavolaSoftware.TavolaApp.REST.service.RestauranteService;
import TavolaSoftware.TavolaApp.REST.service.UsuarioService;
import TavolaSoftware.TavolaApp.tools.UploadUtils;

import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.ArrayList;
import java.util.Base64;
import java.util.List;
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
	public ResponseEntity<String> uploadCardapio(@RequestBody String base64) throws IOException {
	    String email = (String) SecurityContextHolder.getContext().getAuthentication().getPrincipal();
	    Restaurante restaurante = servRestaurante.getByEmail(email);
	    UUID restauranteId = restaurante.getId();

	    if (!uploadUtils.isBase64Image(base64)) {
	        return ResponseEntity.badRequest().body("Formato inválido");
	    }

	    try {
	        uploadUtils.processCardapioImagem(base64, restauranteId, UUID.randomUUID());
	        return ResponseEntity.ok("/upl/cardapios/" + restauranteId + "/prato.jpg");
	    } catch (IOException e) {
	        return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
	            .body("Erro ao processar imagem: " + e.getMessage());
	    }
	}
	
	@PostMapping("/upload/mesa/{mesaId}")
	public ResponseEntity<String> uploadImagemMesa(@RequestBody String base64, @PathVariable UUID mesaId) throws IOException {
	    String email = (String) SecurityContextHolder.getContext().getAuthentication().getPrincipal();
	    Restaurante restaurante = servRestaurante.getByEmail(email);
	    UUID restauranteId = restaurante.getId();

	    if (!uploadUtils.isBase64Image(base64)) {
	        return ResponseEntity.badRequest().body("Formato inválido");
	    }

	    try {
	        String pasta = "upl/mesas/" + restauranteId + "/" + mesaId;
	        String nome = uploadUtils.processBase64(base64, pasta, "jpg");
	        return ResponseEntity.ok("/upl/mesas/" + restauranteId + "/" + mesaId + "/" + nome);
	    } catch (IOException e) {
	        return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
	            .body("Erro ao processar imagem: " + e.getMessage());
	    }
	}

	@PostMapping("/upload/restaurante")
	public ResponseEntity<String> uploadImagemRestaurante(@RequestBody String base64) throws IOException {
	    String email = (String) SecurityContextHolder.getContext().getAuthentication().getPrincipal();
	    Restaurante restaurante = servRestaurante.getByEmail(email);
	    UUID restauranteId = restaurante.getId();

	    if (!uploadUtils.isBase64Image(base64)) {
	        return ResponseEntity.badRequest().body("Formato inválido");
	    }

	    try {
	        List<String> imagens = new ArrayList<>();
	        imagens.add(base64);
	        uploadUtils.processRestauranteImagens(imagens, restauranteId);
	        return ResponseEntity.ok("/upl/restaurantes/" + restauranteId + "/" + uploadUtils.findNameByURL(imagens.get(0)));
	    } catch (IOException e) {
	        return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
	            .body("Erro ao processar imagem: " + e.getMessage());
	    }
	}

	@PostMapping("/upload/usuario/{tipo}")
	public ResponseEntity<String> uploadImagemUsuario(@RequestBody String base64, @PathVariable String tipo) throws IOException {
	    String email = (String) SecurityContextHolder.getContext().getAuthentication().getPrincipal();
	    UUID usuarioId = servUsuario.getIdByEmail(email);
	    Usuario usuario = servUsuario.getUsuarioByEmail(email);

	    if (!uploadUtils.isBase64Image(base64)) {
	        return ResponseEntity.badRequest().body("Formato inválido");
	    }

	    try {
	        uploadUtils.processUsuarioImagem(base64, usuarioId, tipo);
	        String nomePadrao = tipo.equalsIgnoreCase("background") ? "background.jpg" : "perfil.jpg";
	        String caminhoImagem = "/upl/usuarios/" + usuarioId + "/" + nomePadrao;
	        
	        // Atualiza o campo de imagem apropriado no usuário
	        if (tipo.equalsIgnoreCase("background")) {
	            usuario.setImagemBackground(caminhoImagem);
	        } else {
	            usuario.setImagem(caminhoImagem);
	        }
	        servUsuario.updateUsuario(usuario);
	        
	        return ResponseEntity.ok(caminhoImagem);
	    } catch (IOException e) {
	        return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
	            .body("Erro ao processar imagem: " + e.getMessage());
	    }
	}
	
	@PostMapping("/teste-base64")
	public ResponseEntity<String> testarImagemBase64(@RequestParam("imagem") MultipartFile imagem) {
	    try {
	        if (imagem.isEmpty()) {
	            return ResponseEntity.badRequest().body("Arquivo de imagem está vazio.");
	        }
	        byte[] bytes = imagem.getBytes();
	        String imagemBase64 = Base64.getEncoder().encodeToString(bytes);

	        return ResponseEntity.ok(imagemBase64);
	    } catch (IOException e) {
	        return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
	                .body("Erro ao processar a imagem: " + e.getMessage());
	    }
	}

}
