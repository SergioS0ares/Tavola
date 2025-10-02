package TavolaSoftware.TavolaApp.REST.dto.requests;

public class GarcomRequest {
    private String nome;
    private String senha;
    private String imagem; // <<< CAMPO ADICIONADO

    // Getters e Setters
    public String getNome() { return nome; }
    public void setNome(String nome) { this.nome = nome; }
    public String getSenha() { return senha; }
    public void setSenha(String senha) { this.senha = senha; }
    public String getFotoUrl() { return imagem; } // <<< GETTER E SETTER ADICIONADOS
    public void setFotoUrl(String fotoUrl) { this.imagem = fotoUrl; }
}