package TavolaSoftware.TavolaApp.REST.model;

import jakarta.persistence.*;
import java.util.HashSet;
import java.util.Set;
import java.util.UUID;

@Entity
@Table(name = "mesas")
public class Mesa {
    @Id
    @GeneratedValue(strategy = GenerationType.UUID)
    private UUID id;

    @Column(name = "nome", nullable = false, length = 50)
    private String nome;

    @Column(name = "tipo", length = 100)
    private String tipo;

    @Column(name = "capacidade", nullable = false)
    private int capacidade;

    @Column(name = "vip", nullable = false)
    private boolean vip;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "ambiente_id", nullable = false)
    private Ambiente ambiente;
    
    @OneToMany(mappedBy = "mesa", cascade = CascadeType.ALL, fetch = FetchType.LAZY)
    private Set<Reserva> reservas = new HashSet<>();

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
    public Set<Reserva> getReservas() { return reservas; }
    public void setReservas(Set<Reserva> reservas) { this.reservas = reservas; }
}