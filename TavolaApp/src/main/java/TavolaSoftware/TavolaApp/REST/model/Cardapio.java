package TavolaSoftware.TavolaApp.REST.model;

import java.util.Set;
import java.util.UUID;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.JoinTable;
import jakarta.persistence.Lob;
import jakarta.persistence.ManyToMany;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;

@Entity
@Table(name = "menu_establishment")
public class Cardapio {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "dish_id")
    private UUID id;

    @ManyToOne
    @JoinColumn(name = "categoria_id", nullable = false)
    private Categoria categoria;

    @Column(name = "dish_available")
    private boolean disponivel;

    @Column(name = "dish_name", nullable = false, length = 500)
    private String nome;

    @Column(name = "dish_value")
    private Double preco;

    @Column(name = "dish_image", length = 1000)
    private String imagem;

    @Lob
    @Column(name = "dish_description")
    private String descricao;

    @ManyToMany
    @JoinTable(
        name = "dish_tags",
        joinColumns = @JoinColumn(name = "dish_id"),
        inverseJoinColumns = @JoinColumn(name = "tag_id")
    )
    private Set<Tags> tags;

    @ManyToOne
    @JoinColumn(name = "establishment_id", nullable = false)
    private Restaurante restaurante;	 

    public UUID getId() {
        return id;
    }

    public void setId(UUID id) {
        this.id = id;
    }
    
    public Categoria getCategoria() {
    	return categoria;
    }
    
    public void setCategoria(Categoria categoria) {
    	this.categoria = categoria;
    }

    public String getNome() {
        return nome;
    }

    public void setNome(String nome) {
        this.nome = nome;
    }
    
    public double getPreco() {
    	return preco;
    }
    
    public void setPreco(double preco) {
    	this.preco = preco;
    }

    public String getImagem() {
        return imagem;
    }

    public void setImagem(String imagem) {
        this.imagem = imagem;
    }

    public String getDescricao() {
        return descricao;
    }

    public void setDescricao(String descricao) {
        this.descricao = descricao;
    }

    public Set<Tags> getTags() {
        return tags;
    }

    public void setTags(Set<Tags> tags) {
        this.tags = tags;
    }

    public Restaurante getRestaurante() {
        return restaurante;
    }

    public void setRestaurante(Restaurante restaurante) {
        this.restaurante = restaurante;
    }
    
    public boolean getDisponivel() {
    	return disponivel;
    }
    
    public void setDisponivel(boolean disponivel) {
    	this.disponivel = disponivel;
    }
}
