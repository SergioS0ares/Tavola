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
@Table(name = "usuario_table")
public class Usuario {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "usuario_id")
    private UUID id;

    @Column(name = "nome_usuario", nullable = false)
    private String nome;

    @Embedded
    private Endereco endereco;

    @Column(name = "email_usuario", nullable = false, unique = true)
    private String email;

    @Column(name = "senha_usuario", nullable = false)
    private String senha;

    @Column(name = "tipo_usuario", nullable = false)
    private TipoUsuario tipo;

    @Column(name = "telefone_usuario") // <<< NOVO CAMPO: Telefone
    private String telefone;

    @Column(name = "imagem_usuario")
    private String imagem;

    @Column(name = "background_usuario")
    private String imagemBackground;

    @Column(name = "imagem_repositorio_usuario") // Explicitando o nome da coluna
    private UUID idImagem; // Este campo parece ser um identificador para uma imagem num repositório externo

    // Getters e Setters

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

    // Getter e Setter para o novo campo telefone
    public String getTelefone() { return telefone; }
    public void setTelefone(String telefone) { this.telefone = telefone; }

    public String getImagem() { return imagem; }
    public void setImagem(String imagem) { this.imagem = imagem; }

    public String getImagemBackground() { return imagemBackground; }
    public void setImagemBackground(String imagemBackground) { this.imagemBackground = imagemBackground; }
    
    public UUID getIdImagem() { return idImagem; }
    public void setIdImagem(UUID idImagem) { this.idImagem = idImagem; }
}