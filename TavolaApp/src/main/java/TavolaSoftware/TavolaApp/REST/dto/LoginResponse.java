package TavolaSoftware.TavolaApp.REST.dto;

public class LoginResponse {
    private String token;
    private String refreshToken;
    private String name;
    private String tipoUsuario;

    public LoginResponse(String token, String refreshToken, String name, String tipoUsuario) {
        this.token = token;
        this.refreshToken = refreshToken;
        this.name = name;
        this.tipoUsuario = tipoUsuario;
    }

    public String getToken() { return token; }
    public String getRefreshToken() { return refreshToken; }
    public String getName() { return name; }
    public String getTipoUsuario() { return tipoUsuario; }
}
