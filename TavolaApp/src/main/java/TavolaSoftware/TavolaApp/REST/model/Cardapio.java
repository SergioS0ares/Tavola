package TavolaSoftware.TavolaApp.REST.model;

import java.util.UUID;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;

@Entity
@Table(name = "menu_establishment")
public class Cardapio {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private UUID id;

    @Column(name = "dish_name", nullable = false)
    private String nome;

    @Column(name = "dish_value", nullable = false)
    private Double valor;

    @Column(name = "dish_image")
    private String imagem;

    @Column(name = "dish_description")
    private String descricao;

    @Column(name = "dish_lactosefree")
    private boolean semLactose = false;

    @Column(name = "dish_glutenfree")
    private boolean semGluten = false;

    @Column(name = "dish_sugarfree")
    private boolean semAcucar = false;

    @Column(name = "dish_lowcarb")
    private boolean lowCarb = false;

    @ManyToOne
    @JoinColumn(name = "establishment_id", nullable = false)
    private Restaurante restaurante;

    public UUID getId() {
        return id;
    }

    public void setId(UUID id) {
        this.id = id;
    }

    public String getNome() {
        return nome;
    }

    public void setNome(String nome) {
        this.nome = nome;
    }

    public Double getValor() {
        return valor;
    }

    public void setValor(Double valor) {
        this.valor = valor;
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

    public boolean isSemLactose() {
        return semLactose;
    }

    public void setSemLactose(boolean semLactose) {
        this.semLactose = semLactose;
    }

    public boolean isSemGluten() {
        return semGluten;
    }

    public void setSemGluten(boolean semGluten) {
        this.semGluten = semGluten;
    }

    public boolean isSemAcucar() {
        return semAcucar;
    }

    public void setSemAcucar(boolean semAcucar) {
        this.semAcucar = semAcucar;
    }

    public boolean isLowCarb() {
        return lowCarb;
    }

    public void setLowCarb(boolean lowCarb) {
        this.lowCarb = lowCarb;
    }

    public Restaurante getRestaurante() {
        return restaurante;
    }

    public void setRestaurante(Restaurante restaurante) {
        this.restaurante = restaurante;
    }
}
