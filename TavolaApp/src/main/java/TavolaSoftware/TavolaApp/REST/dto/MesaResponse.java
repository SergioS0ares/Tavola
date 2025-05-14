package TavolaSoftware.TavolaApp.REST.dto;

public class MesaResponse {
    private String nome;
    private String descricao;
    private String imagem;
    private int totalMesas;
    private int mesasDisponiveis;

    public MesaResponse() {}

    public MesaResponse(String nome, String descricao, String imagem, int totalMesas, int mesasDisponiveis) {
        this.nome = nome;
        this.descricao = descricao;
        this.imagem = imagem;
        this.totalMesas = totalMesas;
        this.mesasDisponiveis = mesasDisponiveis;
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

    public String getImagem() {
        return imagem;
    }

    public void setImagem(String imagem) {
        this.imagem = imagem;
    }

    public int getTotalMesas() {
        return totalMesas;
    }

    public void setTotalMesas(int totalMesas) {
        this.totalMesas = totalMesas;
    }

    public int getMesasDisponiveis() {
        return mesasDisponiveis;
    }

    public void setMesasDisponiveis(int mesasDisponiveis) {
        this.mesasDisponiveis = mesasDisponiveis;
    }
}
