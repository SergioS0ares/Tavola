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
@Table(name = "menu_table")
public class Cardapio {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private UUID id;

    @Column(name = "dish_name", nullable = false)
    private String name;

    @Column(name = "dish_value", nullable = false)
    private Double value;

    @Column(name = "dish_image")
    private String image;

    @Column(name = "dish_description")
    private String description;
    
    @Column(name = "dish_lactosefree")
    private boolean lactose = false;
    
    @Column(name = "dish_glutenfree")
    private boolean gluten = false;
    
    @Column(name = "dish_sugarfree")
    private boolean sugar = false;
    
    @Column(name = "dish_lowcarb")
    private boolean carb = false;

    @ManyToOne
    @JoinColumn(name = "establishment_id", nullable = false)
    private Restaurante establishment;

    // Getters e Setters

    public boolean getLactose() {
        return lactose;
    }
    
    public void setLactose(boolean bool) {
        this.lactose = bool;
    }
    
    public boolean getGluten() {
        return gluten;
    }
    
    public void setGluten(boolean bool) {
        this.gluten = bool;
    }
    
    public boolean getSugar() {
        return sugar;
    }
    
    public void setSugar(boolean bool) {
        this.sugar = bool;
    }
    
    public boolean getCarb() {
        return carb;
    }
    
    public void setCarb(boolean bool) {
        this.carb = bool;
    }
    
    public UUID getId() {
        return id;
    }

    public void setId(UUID id) {
        this.id = id;
    }

    public String getNome() {
        return name;
    }

    public void setNome(String nome) {
        this.name = nome;
    }

    public Double getValor() {
        return value;
    }

    public void setValor(Double valor) {
        this.value = valor;
    }

    public String getImage() {
        return image;
    }

    public void setImage(String image) {
        this.image = image;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String descricao) {
        this.description = descricao;
    }

    public Restaurante getEstablishment() {
        return establishment;
    }

    public void setEstablishment(Restaurante establisment) {
        this.establishment = establisment;
    }
}