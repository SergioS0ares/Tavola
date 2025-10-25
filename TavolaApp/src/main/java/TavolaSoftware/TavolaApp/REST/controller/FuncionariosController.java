package TavolaSoftware.TavolaApp.REST.controller;

import java.time.LocalDate;
import java.util.List;
import java.util.Map;
import java.util.UUID;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.format.annotation.DateTimeFormat;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import TavolaSoftware.TavolaApp.REST.dto.responses.MesaComReservasResponse;
import TavolaSoftware.TavolaApp.REST.service.MesaService;
import jakarta.persistence.EntityNotFoundException;

@RestController
@RequestMapping("/auth/api/restaurantes/{idRestaurante}")
public class FuncionariosController {
	
	@Autowired
    private MesaService mesaService; // Injete o MesaService

	@GetMapping ("/ambientes/{idAmbiente}/mesas") // Rota mais clara
	public ResponseEntity<?> getMesasComReservas(
            @PathVariable UUID idRestaurante, // Já temos pela rota principal
            @PathVariable UUID idAmbiente,
            @RequestParam("data") @DateTimeFormat(iso = DateTimeFormat.ISO.DATE) LocalDate data // Recebe a data como parâmetro
    ) {
		/*
		 * vamo fazer um get pro garçom poder pegar as mesas, as reservas delas na data, pra isso temos o id do
		 * restaurante, a id do ambiente e esse PARAM de data pra dizer qual a data que estou procurando.
		 * */
        try {
            // A validação de segurança do restaurante vs ambiente é feita no service
            List<MesaComReservasResponse> mesasComReservas = mesaService.findMesasComReservasPorAmbienteEData(idAmbiente, data);
            return ResponseEntity.ok(mesasComReservas);
        } catch (EntityNotFoundException e) {
            return ResponseEntity.notFound().build();
        } catch (SecurityException e) {
            return ResponseEntity.status(403).body(Map.of("erro", e.getMessage()));
        } catch (Exception e) {
            return ResponseEntity.status(500).body(Map.of("erro", "Erro ao buscar mesas e reservas: " + e.getMessage()));
        }
	}
	
}