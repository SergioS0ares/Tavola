// Crie este novo arquivo em REST/dto/requests/GarcomRequest.java
package TavolaSoftware.TavolaApp.REST.dto.requests;

public class GarcomRequest {
    private String nome;
    private String codigoIdentidade;
    private String senha;

    // Getters e Setters
    public String getNome() { return nome; }
    public void setNome(String nome) { this.nome = nome; }
    public String getCodigoIdentidade() { return codigoIdentidade; }
    public void setCodigoIdentidade(String codigoIdentidade) { this.codigoIdentidade = codigoIdentidade; }
    public String getSenha() { return senha; }
    public void setSenha(String senha) { this.senha = senha; }
}