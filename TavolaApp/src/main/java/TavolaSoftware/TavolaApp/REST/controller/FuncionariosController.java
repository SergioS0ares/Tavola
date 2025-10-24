package TavolaSoftware.TavolaApp.REST.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/auth/api/restaurantes/{idRestaurante}")
public class FuncionariosController {

	@GetMapping ("/mesas/{idAmbiente}?localDate={data}")
	public void b() {
		/*
		 * vamo fazer um get pro garçom poder pegar as mesas, as reservas delas na data, pra isso temos o id do 
		 * restaurante, a id do ambiente e esse PARAM de data pra dizer qual a data que estou procurando.
		 * */
	}
	
}