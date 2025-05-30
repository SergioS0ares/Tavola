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
import jakarta.persistence.UniqueConstraint; // Importe esta classe

@Entity
@Table(name = "reviewscore_table", uniqueConstraints = {
    @UniqueConstraint(columnNames = {"cliente_id", "restaurante_id"}) // Garante que a combinação cliente-restaurante seja única
})
public class Avaliacao {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private UUID id; // Essa será sua id

    @ManyToOne // Muitas avaliações para um restaurante
    @JoinColumn(name = "restaurante_id", nullable = false) // Coluna da chave estrangeira para Restaurante
    private Restaurante restaurante;

    @ManyToOne // Muitas avaliações para um cliente
    @JoinColumn(name = "cliente_id", nullable = false) // Coluna da chave estrangeira para Cliente
    private Cliente cliente;

    @Column(nullable = false)
    private int score;

    @Column(length = 500)
    private String comentario;

    // Construtores (vazio e com todos os campos)
    public Avaliacao() {}

    public Avaliacao(Restaurante restaurante, Cliente cliente, int score, String comentario) {
        this.restaurante = restaurante;
        this.cliente = cliente;
        this.score = score;
        this.comentario = comentario;
    }

    // Getters e Setters
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

    public Cliente getCliente() {
        return cliente;
    }

    public void setCliente(Cliente cliente) {
        this.cliente = cliente;
    }

    public int getScore() {
        return score;
    }

    public void setScore(int score) {
        this.score = score;
    }

    public String getComentario() {
        return comentario;
    }

    public void setComentario(String comentario) {
        this.comentario = comentario;
    }
}