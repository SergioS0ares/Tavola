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

    @Column(name = "imagem_garcom")
    private String imagem; // Para o futuro

    @Column(name = "codigo_identidade", nullable = false)
    private String codigoIdentidade;

    @Column(name = "senha_garcom", nullable = false)
    private String senha; // Armazenaremos o hash da senha aqui

	public UUID getId() {
		return this.id;
	}

	public String getNome() {
		return this.nome;
	}

	public String getCodigoIdentidade() {
		return this.codigoIdentidade;
	}

    public String getImagem() {
    	return this.imagem;
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

	public String getSenha() {
		return this.senha;
	}

	public Restaurante getRestaurante() {
		return this.restaurante;	
	}

	public void setImagem(String imagem) {
		this.imagem = imagem;
	}
}