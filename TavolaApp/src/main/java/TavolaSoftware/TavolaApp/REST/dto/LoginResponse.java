package TavolaSoftware.TavolaApp.REST.dto;

import java.util.UUID;

public class LoginResponse {
    private String token;
    private String refreshToken;
    private String nome;
    private String tipoUsuario;
    private UUID id;
    private String email;

    public LoginResponse(String token, String refreshToken, String nome, String tipoUsuario, UUID id, String email) {
        this.token = token;
        this.refreshToken = refreshToken;
        this.nome = nome;
        this.tipoUsuario = tipoUsuario;
        this.id = id;
        this.email = email;
    }

    public String getToken() { return token; }
    public String getRefreshToken() { return refreshToken; }
    public String getName() { return nome; }
    public String getTipoUsuario() { return tipoUsuario; }
    public UUID getId() { return id; }
    public String getEmail() { return email; }
}
