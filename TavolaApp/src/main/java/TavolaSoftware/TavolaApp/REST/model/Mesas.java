package TavolaSoftware.TavolaApp.REST.model;

import java.util.ArrayList;
import java.util.List;
import java.util.UUID;

import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;
import jakarta.persistence.ElementCollection;
import jakarta.persistence.CollectionTable;
import jakarta.persistence.Column;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.Lob;

@Entity
@Table(name = "mesas_table")
public class Mesas {
    @Id
    @GeneratedValue(strategy = GenerationType.UUID)
    private UUID id;

    @ManyToOne(fetch = FetchType.LAZY, optional = false)
    @JoinColumn(name = "restaurante_id", nullable = false)
    private Restaurante restaurante;
    
    @ElementCollection(fetch = FetchType.EAGER)
    @CollectionTable(
        name = "mesas_imagens",
        joinColumns = @JoinColumn(name = "mesas_id")
    )
    @Column(name = "imagem", length = 1000)
    private List<String> imagens = new ArrayList<String>();



    @Column(name = "mesa_nome", nullable = false, length = 1000)
    private String nome; // Ex: "Principal"

    @Column(name = "mesa_descricao", columnDefinition = "TEXT")
    private String descricao; // visível para cliente

    @Column(name = "mesa_quantidade_total", nullable = false)
    private int quantidadeTotal;

    @Column(name = "mesa_quantidade_disponivel", nullable = false)
    private int quantidadeDisponivel;

    @Column(name = "mesa_disponivel", nullable = false)
    private int disponivel;

    private UUID idImagem;

    // Getters e Setters

    public UUID getIdImagem() {
        return idImagem;
    }

    public void setIdImagem(UUID idImagem) {
        this.idImagem = idImagem;
    }

    public UUID getId() {
        return id;
    }

    public void setId(UUID id) {
        this.id = id;
    }

    public Restaurante getRestaurante() {
        return restaurante;
    }

    public void setRestaurante(Restaurante restaurante) {
        this.restaurante = restaurante;
    }

    public int isDisponivel() {
        return disponivel;
    }
    public void setDisponivel(int disponivel) {
        this.disponivel = disponivel;
    }

    public String getDescricao() {
        return descricao;
    }
    public void setDescricao(String descricao) {
        this.descricao = descricao;
    }

    public List<String> getImagem() {
        return imagens;
    }
    public void setImagem(List<String> imagens) {
        this.imagens = imagens;
    }

    public String getNome() {
        return nome;
    }
    public void setNome(String nome) {
        this.nome = nome;
    }
    
    public int getQuantidadeTotal() {
        return quantidadeTotal;
    }
    
    public int getQuantidadeDisponivel() {
        return quantidadeDisponivel;
    }
    
    public void setQuantidadeDisponivel(int quant) {
        quantidadeDisponivel = quant;
    }
    
    public void setQuantidadeTotal(int quant) {
        quantidadeTotal = quant;
    }
} 