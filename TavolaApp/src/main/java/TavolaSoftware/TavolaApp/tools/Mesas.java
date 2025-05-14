package TavolaSoftware.TavolaApp.tools;

import java.util.UUID;

import jakarta.persistence.Embeddable;

@Embeddable
public class Mesas {
    private String imagem; // base64
    private String nome; // Ex: "Principal"
    private String descricao; // visível para cliente
    private int quantidadeTotal;
    private int quantidadeDisponivel;
    private int disponivel;

    // Getters e Setters

	public int isDisponivel() {
		return disponivel;
	}
	public void setDisponivel(int disponivel) {
		this.disponivel = disponivel;
	}

	public String getDescricao() {
		return descricao;
	}
	public void setDescricao(String descricao) {
		this.descricao = descricao;
	}

	public String getImagem() {
		return imagem;
	}
	public void setImagem(String imagem) {
		this.imagem = imagem;
	}

	public String getNome() {
		return nome;
	}
	public void setNome(String nome) {
		this.nome = nome;
	}
	
	public int getQuantidadeTotal() {
		return quantidadeTotal;
	}
	
	public int getQuantidadeDisponivel() {
		return quantidadeDisponivel;
	}
	
	public void setQuantidadeDisponivel(int quant) {
		quantidadeDisponivel = quant;
	}
	
	public void setQuantidadeTotal(int quant) {
		quantidadeTotal = quant;
	}
}
