package TavolaSoftware.TavolaApp.REST.controller;

import java.util.UUID;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import TavolaSoftware.TavolaApp.REST.model.Ambiente;
import TavolaSoftware.TavolaApp.REST.model.Restaurante;
import TavolaSoftware.TavolaApp.REST.service.AmbienteService;
import TavolaSoftware.TavolaApp.REST.service.RestauranteService;

//package...
@RestController
@RequestMapping("/auth/ambientes")
public class AmbienteController {
	
 @Autowired
 private AmbienteService ambienteService;
 
 @Autowired
 private RestauranteService restauranteService;

 // Endpoint para deletar um ambiente
 @DeleteMapping("/{id}")
 public ResponseEntity<Void> deleteAmbiente(@PathVariable UUID id) {
     String email = (String) SecurityContextHolder.getContext().getAuthentication().getPrincipal();
     Restaurante restaurante = restauranteService.getByEmail(email);

     // Verifica se o ambiente pertence ao restaurante logado antes de deletar (BOA PRÁTICA)
     Ambiente ambiente = ambienteService.findById(id);
     if (ambiente == null || !ambiente.getRestaurante().getId().equals(restaurante.getId())) {
         return ResponseEntity.status(HttpStatus.FORBIDDEN).build();
     }

     ambienteService.delete(id); // Apenas o ID do ambiente é necessário
     return ResponseEntity.noContent().build();
 }
 
 // Você adicionaria aqui os outros endpoints (GET, POST, PUT)
}











