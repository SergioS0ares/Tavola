package TavolaSoftware.TavolaApp.REST.model;

import java.util.UUID;

import TavolaSoftware.TavolaApp.tools.Endereco;
import TavolaSoftware.TavolaApp.tools.TipoUsuario;
import jakarta.persistence.Column;
import jakarta.persistence.Embedded;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "user_table")
public class Usuario {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "user_id")
    private UUID id;

    @Column(name = "user_name", nullable = false)
    private String nome;

    @Embedded
    private Endereco endereco;

    @Column(name = "user_email", nullable = false, unique = true)
    private String email;

    @Column(name = "user_password", nullable = false)
    private String senha;

    @Column(name = "user_type", nullable = false)
    private TipoUsuario tipo;

    @Column(name = "user_image")
    private String imagem;

    @Column(name = "user_background_image")
    private String imagemBackground;

    private UUID idImagem;

    // Getters e Setters
    public UUID getIdImagem(){
        return idImagem;
    }

    public void setIdImagem(UUID id){
        this.idImagem = id;
    }

    public UUID getId() { return id; }
    public void setId(UUID id) { this.id = id; }

    public String getNome() { return nome; }
    public void setNome(String nome) { this.nome = nome; }

    public Endereco getEndereco() { return endereco; }
    public void setEndereco(Endereco endereco) { this.endereco = endereco; }

    public String getEmail() { return email; }
    public void setEmail(String email) { this.email = email; }

    public String getSenha() { return senha; }
    public void setSenha(String senha) { this.senha = senha; }

    public TipoUsuario getTipo() { return tipo; }
    public void setTipo(TipoUsuario tipo) { this.tipo = tipo; }

    public String getImagem() { return imagem; }
    public void setImagem(String imagem) { this.imagem = imagem; }

    public String getImagemBackground() { return imagemBackground; }
    public void setImagemBackground(String imagemBackground) { this.imagemBackground = imagemBackground; }
}
