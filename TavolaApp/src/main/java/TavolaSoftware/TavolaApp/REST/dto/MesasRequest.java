package TavolaSoftware.TavolaApp.REST.dto;

import java.util.List;

public class MesasRequest {
    private String nome;
    private String descricao;
    private int quantidadeTotal;
    private int quantidadeDisponivel;
    private int disponivel;
    private List<String> imagem;
    
	public String getNome() {
		return nome;
	}

	public String getDescricao() {
		return descricao;
	}

	public int getQuantidadeTotal() {
		return quantidadeTotal;
	}
    
	public int getQuantidadeDisponivel() {
		return quantidadeDisponivel; 
	}
	
	public int getDisponivel() {
		return disponivel;
	}
	
	public List<String> getImagem(){
		return imagem;
	}
}
