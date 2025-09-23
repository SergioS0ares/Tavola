package TavolaSoftware.TavolaApp.REST.model;

import jakarta.persistence.*;
import java.util.UUID;

@Entity
@Table(name = "garcom_table")
public class Garcom {

    @Id
    @GeneratedValue(strategy = GenerationType.UUID)
    private UUID id;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "restaurante_id", nullable = false)
    private Restaurante restaurante;

    @Column(name = "nome_garcom", nullable = false)
    private String nome;

    @Column(name = "foto_url")
    private String fotoUrl; // Para o futuro

    @Column(name = "codigo_identidade", nullable = false)
    private String codigoIdentidade;

    @Column(name = "senha_garcom", nullable = false)
    private String senha; // Armazenaremos o hash da senha aqui

    @Column(name = "ativo", nullable = false)
    private boolean ativo = true;

	public UUID getId() {
		return this.id;
	}

	public String getNome() {
		return this.nome;
	}

	public String getCodigoIdentidade() {
		return this.codigoIdentidade;
	}

	public boolean isAtivo() {
		return this.ativo;
	}

    public String getFotoUrl() {
    	return this.fotoUrl;
    }

	public void setNome(String nome2) {
		this.nome = nome2;		
	}

	public void setCodigoIdentidade(String codigoIdentidade2) {
		this.codigoIdentidade = codigoIdentidade2;
	}

	public void setSenha(String encode) {
		this.senha = encode;
	}

	public void setRestaurante(Restaurante restaurante2) {
		this.restaurante = restaurante2;
	}

	public void setAtivo(boolean b) {
		this.ativo = b;
	}

	public String getSenha() {
		return this.senha;
	}
}