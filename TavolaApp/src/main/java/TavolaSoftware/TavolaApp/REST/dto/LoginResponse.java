package TavolaSoftware.TavolaApp.REST.dto;

import java.util.UUID;

public class LoginResponse {
    private String token;
    private String nome;
    private String tipoUsuario;
    private UUID id;
    private String email;
    
    // <<< NOVOS CAMPOS ADICIONADOS >>>
    private String imagem;
    private String imagemBackground;

    public LoginResponse(String token, String nome, String tipoUsuario, UUID id, String email, String imagem, String imagemBackground) {
        this.token = token;
        this.nome = nome;
        this.tipoUsuario = tipoUsuario;
        this.id = id;
        this.email = email;
        // <<< ATRIBUIÇÃO DOS NOVOS CAMPOS >>>
        this.imagem = imagem;
        this.imagemBackground = imagemBackground;
    }

    public String getToken() { return token; }
    public String getNome() { return nome; } // Corrigido de getName para getNome para seguir o padrão
    public String getTipoUsuario() { return tipoUsuario; }
    public UUID getId() { return id; }
    public String getEmail() { return email; }

    // <<< GETTERS PARA OS NOVOS CAMPOS >>>
    public String getImagem() { return imagem; }
    public String getImagemBackground() { return imagemBackground; }
}