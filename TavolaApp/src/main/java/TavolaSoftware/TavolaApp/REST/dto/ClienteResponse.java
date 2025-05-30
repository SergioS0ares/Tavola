package TavolaSoftware.TavolaApp.REST.dto;

import TavolaSoftware.TavolaApp.REST.model.Cliente;
import TavolaSoftware.TavolaApp.REST.model.Usuario;
import TavolaSoftware.TavolaApp.tools.Endereco;

import java.util.UUID;

public class ClienteResponse {
    private UUID id; // ID do Cliente
    private String nome;
    private String email;
    private Endereco endereco;
    private String imagemPerfil; // URL da imagem de perfil do usuário
    private String imagemBackground; // URL da imagem de background do usuário

    public ClienteResponse(Cliente cliente) {
        this.id = cliente.getId();
        Usuario usuario = cliente.getUsuario();
        if (usuario != null) {
            this.nome = usuario.getNome();
            this.email = usuario.getEmail();
            this.endereco = usuario.getEndereco();
            this.imagemPerfil = usuario.getImagem();
            this.imagemBackground = usuario.getImagemBackground();
            // A senha NÃO é incluída
        }
    }

    // Getters
    public UUID getId() {
        return id;
    }

    public String getNome() {
        return nome;
    }

    public String getEmail() {
        return email;
    }

    public Endereco getEndereco() {
        return endereco;
    }

    public String getImagemPerfil() {
        return imagemPerfil;
    }

    public String getImagemBackground() {
        return imagemBackground;
    }

    // Setters (geralmente não são necessários para DTOs de resposta, mas podem ser úteis em alguns casos)
    public void setId(UUID id) {
        this.id = id;
    }

    public void setNome(String nome) {
        this.nome = nome;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public void setEndereco(Endereco endereco) {
        this.endereco = endereco;
    }

    public void setImagemPerfil(String imagemPerfil) {
        this.imagemPerfil = imagemPerfil;
    }

    public void setImagemBackground(String imagemBackground) {
        this.imagemBackground = imagemBackground;
    }
}