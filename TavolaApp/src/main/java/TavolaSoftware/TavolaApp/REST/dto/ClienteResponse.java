package TavolaSoftware.TavolaApp.REST.dto;

import TavolaSoftware.TavolaApp.REST.model.Cliente;
import TavolaSoftware.TavolaApp.REST.model.Usuario;
import TavolaSoftware.TavolaApp.tools.Endereco;

import java.util.UUID;

public class ClienteResponse {
    private UUID id;
    private String nome;
    private String email;
    private String telefone; // <<< NOVO CAMPO
    private Endereco endereco;
    private String imagemPerfil;
    private String imagemBackground;

    public ClienteResponse(Cliente cliente) {
        this.id = cliente.getId();
        Usuario usuario = cliente.getUsuario();
        if (usuario != null) {
            this.nome = usuario.getNome();
            this.email = usuario.getEmail();
            this.telefone = usuario.getTelefone(); // <<< ADICIONADO AQUI
            this.endereco = usuario.getEndereco();
            this.imagemPerfil = usuario.getImagem();
            this.imagemBackground = usuario.getImagemBackground();
        }
    }

    // Getters
    public UUID getId() { return id; }
    public String getNome() { return nome; }
    public String getEmail() { return email; }
    public String getTelefone() { return telefone; } // <<< GETTER NOVO
    public Endereco getEndereco() { return endereco; }
    public String getImagemPerfil() { return imagemPerfil; }
    public String getImagemBackground() { return imagemBackground; }

    // Setters
    public void setId(UUID id) { this.id = id; }
    public void setNome(String nome) { this.nome = nome; }
    public void setEmail(String email) { this.email = email; }
    public void setTelefone(String telefone) { this.telefone = telefone; } // <<< SETTER NOVO
    public void setEndereco(Endereco endereco) { this.endereco = endereco; }
    public void setImagemPerfil(String imagemPerfil) { this.imagemPerfil = imagemPerfil; }
    public void setImagemBackground(String imagemBackground) { this.imagemBackground = imagemBackground; }
}