package TavolaSoftware.TavolaApp.REST.controller;

import org.springframework.beans.factory.annotation.Autowired; // <<< IMPORTAR
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.Base64;
import java.util.List; // <<< IMPORTAR
import java.util.Map; // <<< IMPORTAR
import java.util.UUID; // <<< IMPORTAR

// <<< IMPORTAR O SERVIÇO DE MOCK >>>
import TavolaSoftware.TavolaApp.REST.service.MockDataService;
import TavolaSoftware.TavolaApp.REST.model.Cliente;
import TavolaSoftware.TavolaApp.REST.model.Restaurante;


@RestController
@RequestMapping("/auth/uploads")
public class MockDataController {
	
    @Autowired
    private MockDataService mockDataService;
	
	/**
	 * Endpoint de teste (existente)
	 */
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

    /**
     * [POST] /auth/uploads/mock/restaurante
     * Cria UM restaurante mock completo (Usuário, Restaurante, 3 Garçons, 2 Ambientes, 6 Mesas, 5 Pratos).
     * Chama 'createMockRestaurante'
     */
    @PostMapping("/mock/restaurante")
    public ResponseEntity<?> criarRestauranteMock() {
        try {
            Restaurante r = mockDataService.createMockRestaurante();
            return ResponseEntity.ok(Map.of(
                "mensagem", "Restaurante mock criado com sucesso!",
                "id", r.getId(),
                "nome", r.getNome(),
                "email", r.getEmail()
            ));
        } catch (Exception e) {
            e.printStackTrace();
            return ResponseEntity.status(500).body(Map.of("erro", "Falha ao criar restaurante mock: " + e.getMessage()));
        }
    }

    /**
     * [POST] /auth/uploads/mock/cliente
     * Cria UM cliente mock e gera reservas sequenciais para os restaurantes fornecidos.
     * Chama 'createMockCliente'
     */
    @PostMapping("/mock/cliente")
    public ResponseEntity<?> criarClienteMock(@RequestBody List<UUID> idsRestaurantes) {
        if (idsRestaurantes == null || idsRestaurantes.isEmpty()) {
            return ResponseEntity.badRequest().body(Map.of("erro", "É necessário fornecer uma lista de IDs de restaurantes no payload."));
        }
        
        try {
            Cliente c = mockDataService.createMockCliente(idsRestaurantes);
            return ResponseEntity.ok(Map.of(
                "mensagem", "Cliente mock e suas reservas foram criados com sucesso!",
                "id", c.getId(),
                "nome", c.getUsuario().getNome(),
                "email", c.getUsuario().getEmail()
            ));
        } catch (Exception e) {
            e.printStackTrace();
            return ResponseEntity.status(500).body(Map.of("erro", "Falha ao criar cliente mock: " + e.getMessage()));
        }
    }
}