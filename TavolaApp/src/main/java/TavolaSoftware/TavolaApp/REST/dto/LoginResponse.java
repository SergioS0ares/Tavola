package TavolaSoftware.TavolaApp.REST.dto;

public class LoginResponse {
    private String token;
    private String refreshToken;
    private String nome;
    private String tipoUsuario;

    public LoginResponse(String token, String refreshToken, String nome, String tipoUsuario) {
        this.token = token;
        this.refreshToken = refreshToken;
        this.nome = nome;
        this.tipoUsuario = tipoUsuario;
    }

    public String getToken() { return token; }
    public String getRefreshToken() { return refreshToken; }
    public String getName() { return nome; }
    public String getTipoUsuario() { return tipoUsuario; }
}
// coisas escritas aqui, não definem o quão cansado estou de escrever!