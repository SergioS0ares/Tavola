package TavolaSoftware.TavolaApp.REST.controller;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.nio.file.*;
import java.util.UUID;

@RestController
@RequestMapping("/auth/uploads")
public class UploadsController {

    @PostMapping("/{tipo}/{subpasta}/{usuarioId}")
    public ResponseEntity<String> uploadImagem(
            @PathVariable String tipo,          
            @PathVariable String subpasta,      
            @PathVariable String usuarioId,     
            @RequestParam("file") MultipartFile file) throws IOException {

        // Gera nome de imagem única
        String nomeImagem = UUID.randomUUID().toString() + "-" + file.getOriginalFilename();

        // Caminho completo: upl/tipo/subpasta/usuarioId/nomeImagem
        Path destino = Paths.get("upl", tipo, subpasta, usuarioId, nomeImagem);
        Files.createDirectories(destino.getParent()); // Cria as pastas se necessário
        Files.write(destino, file.getBytes());

        // Caminho público retornado
        String caminhoAcessivel = "/upl/" + tipo + "/" + subpasta + "/" + usuarioId + "/" + nomeImagem;
        return ResponseEntity.ok(caminhoAcessivel);
    }
}
