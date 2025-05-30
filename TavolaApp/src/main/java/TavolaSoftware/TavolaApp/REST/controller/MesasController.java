package TavolaSoftware.TavolaApp.REST.controller;

import java.util.List;
import java.util.UUID;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.*;

import TavolaSoftware.TavolaApp.REST.model.Restaurante;
import TavolaSoftware.TavolaApp.REST.service.MesasService;
import TavolaSoftware.TavolaApp.REST.service.RestauranteService;
import TavolaSoftware.TavolaApp.REST.model.Mesas;
import TavolaSoftware.TavolaApp.REST.dto.MesaResponse;
import TavolaSoftware.TavolaApp.tools.UploadUtils;

@RestController
@RequestMapping("/auth/mesas")
public class MesasController {

    @Autowired
    private MesasService serv;

    @Autowired
    private RestauranteService servRestaurante;

    @Autowired
    private UploadUtils uplUtil;

    // GET - self
    @GetMapping
    public ResponseEntity<List<MesaResponse>> findAll() {
        String email = (String) SecurityContextHolder.getContext().getAuthentication().getPrincipal();
        Restaurante restaurante = servRestaurante.getByEmail(email);
        List<Mesas> mesas = serv.getMesasByRestaurante(restaurante.getId());
        List<MesaResponse> response = mesas.stream()
            .map(MesaResponse::fromEntity)
            .collect(Collectors.toList());
        return ResponseEntity.ok(response);
    }

    // GET - byId
    @GetMapping("/{mesaId}")
    public ResponseEntity<MesaResponse> findById(@PathVariable UUID mesaId) {
        String email = (String) SecurityContextHolder.getContext().getAuthentication().getPrincipal();
        Restaurante restaurante = servRestaurante.getByEmail(email);
        Mesas mesa = serv.getMesaById(mesaId, restaurante.getId());
        return mesa != null ? ResponseEntity.ok(MesaResponse.fromEntity(mesa)) : ResponseEntity.notFound().build();
    }

    // POST
    @PostMapping
    public ResponseEntity<MesaResponse> save(@RequestBody Mesas mesa) {
        String email = (String) SecurityContextHolder.getContext().getAuthentication().getPrincipal();
        Restaurante restaurante = servRestaurante.getByEmail(email);
        
        mesa.setRestaurante(restaurante);
        Mesas savedMesa = serv.saveMesa(mesa, restaurante);
        
        if (mesa.getImagem() != null && !mesa.getImagem().isEmpty()) {
            try {
                uplUtil.processMesas(savedMesa, restaurante.getId());
                savedMesa = serv.saveMesa(savedMesa, restaurante);
            } catch (Exception e) {
                return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
            }
        }
        
        return ResponseEntity.ok(MesaResponse.fromEntity(savedMesa));
    }

    // PUT
    @PutMapping("/{mesaId}")
    public ResponseEntity<MesaResponse> updateMesa(@PathVariable UUID mesaId, @RequestBody Mesas mesa) {
        String email = (String) SecurityContextHolder.getContext().getAuthentication().getPrincipal();
        Restaurante restaurante = servRestaurante.getByEmail(email);
        
        mesa.setRestaurante(restaurante);
        Mesas existingMesa = serv.getMesaById(mesaId, restaurante.getId());
        if (existingMesa == null) {
            return ResponseEntity.notFound().build();
        }
        
        mesa.setId(mesaId);
        Mesas updatedMesa = serv.saveMesa(mesa, restaurante);
        
        if (mesa.getImagem() != null && !mesa.getImagem().isEmpty()) {
            try {
                uplUtil.processMesas(updatedMesa, restaurante.getId());
                updatedMesa = serv.saveMesa(updatedMesa, restaurante);
            } catch (Exception e) {
                return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
            }
        }
        
        return ResponseEntity.ok(MesaResponse.fromEntity(updatedMesa));
    }

    // DELETE
    @DeleteMapping("/{mesaId}")
    public ResponseEntity<Void> deleteMesa(@PathVariable UUID mesaId) {
        String email = (String) SecurityContextHolder.getContext().getAuthentication().getPrincipal();
        Restaurante restaurante = servRestaurante.getByEmail(email);
        Mesas mesa = serv.getMesaById(mesaId, restaurante.getId());
        if (mesa == null) {
            return ResponseEntity.notFound().build();
        }
        serv.saveMesa(null, restaurante); // Simulando a deleção
        return ResponseEntity.ok().build();
    }
}