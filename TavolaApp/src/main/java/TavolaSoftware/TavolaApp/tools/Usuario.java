package TavolaSoftware.TavolaApp.tools;

import java.util.UUID;

public abstract class Usuario {

	private UUID userId;
	
	private String nome;
	
	private Endereco adress;
	
	private String email;
	
	private String password;
	
	private TipoUsusario type;
	
	// _-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_- //
	
	public void gerenciarConta() {}
	
	public void realizarReserva() {}
	
	public void visualizarSugestoes() {}
}
