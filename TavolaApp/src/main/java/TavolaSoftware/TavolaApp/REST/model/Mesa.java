package TavolaSoftware.TavolaApp.REST.model;

import jakarta.persistence.*;

import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;
import java.util.Set;
import java.util.UUID;

@Entity
@Table(name = "restaurante_mesas")
public class Mesa {
    @Id
    @GeneratedValue(strategy = GenerationType.UUID)
    @Column (name = "mesa_id")
    private UUID id;

    @Column(name = "nome_mesa", nullable = false, length = 50)
    private String nome;

    @Column(name = "tipo_mesa", length = 100)
    private String tipo;

    @Column(name = "capacidade_mesa", nullable = false)
    private int capacidade;

    @Column(name = "vip_mesa", nullable = false)
    private boolean vip;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "ambiente_id", nullable = false)
    private Ambiente ambiente;

    @ManyToMany(mappedBy = "mesas") // "mappedBy" diz ao Hibernate que a tabela de ligação já foi definida em Reserva.java
    private List<Reserva> reservas = new ArrayList<>();

    // Getters e Setters
    public UUID getId() { return id; }
    public void setId(UUID id) { this.id = id; }
    public String getNome() { return nome; }
    public void setNome(String nome) { this.nome = nome; }
    public String getTipo() { return tipo; }
    public void setTipo(String tipo) { this.tipo = tipo; }
    public int getCapacidade() { return capacidade; }
    public void setCapacidade(int capacidade) { this.capacidade = capacidade; }
    public boolean isVip() { return vip; }
    public void setVip(boolean vip) { this.vip = vip; }
    public Ambiente getAmbiente() { return ambiente; }
    public void setAmbiente(Ambiente ambiente) { this.ambiente = ambiente; }
    public List<Reserva> getReservas() { return reservas; }
    public void setReservas(List<Reserva> reservas) { this.reservas = reservas; }
}