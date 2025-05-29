package TavolaSoftware.TavolaApp.REST.controller;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.Base64;
@RestController
@RequestMapping("/auth/uploads")
public class UploadsController {
	
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
