package TavolaSoftware.TavolaApp.REST.dto;

import TavolaSoftware.TavolaApp.tools.Mesas;
import java.util.List;

public class MesaResponse {
    private String nome;
    private String descricao;
    private List<String> imagem;
    private int quantidadeTotal;
    private int quantidadeDisponivel;

    public MesaResponse() {}

    public MesaResponse(Mesas mesa) {
        this.nome = mesa.getNome();
        this.descricao = mesa.getDescricao();
        this.imagem = mesa.getImagem();
        this.quantidadeTotal = mesa.getQuantidadeTotal();
        this.quantidadeDisponivel = mesa.getQuantidadeDisponivel();
    }

    public String getNome() {
        return nome;
    }

    public void setNome(String nome) {
        this.nome = nome;
    }

    public String getDescricao() {
        return descricao;
    }

    public void setDescricao(String descricao) {
        this.descricao = descricao;
    }

    public List<String> getImagem() {
        return imagem;
    }

    public void setImagem(List<String> imagem) {
        this.imagem = imagem;
    }

    public int getQuantidadeTotal() {
        return quantidadeTotal;
    }

    public void setQuantidadeTotal(int quantidadeTotal) {
        this.quantidadeTotal = quantidadeTotal;
    }

    public int getQuantidadeDisponivel() {
        return quantidadeDisponivel;
    }

    public void setQuantidadeDisponivel(int quantidadeDisponivel) {
        this.quantidadeDisponivel = quantidadeDisponivel;
    }
}
