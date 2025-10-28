package TavolaSoftware.TavolaApp.REST.model;

import java.util.ArrayList;
import java.util.List;
import java.util.UUID;

import TavolaSoftware.TavolaApp.tools.MesaStatus;
import jakarta.persistence.CascadeType;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToMany;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.OneToOne;
import jakarta.persistence.Table;

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
    
    @OneToOne(mappedBy = "mesa", cascade = CascadeType.ALL, fetch = FetchType.LAZY, orphanRemoval = true)
    private AtendimentoMesa atendimentoAtivo;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "ambiente_id", nullable = false)
    private Ambiente ambiente;

    @ManyToMany(mappedBy = "mesas") // "mappedBy" diz ao Hibernate que a tabela de ligação já foi definida em Reserva.java
    private List<Reserva> reservas = new ArrayList<>();
    
    @Enumerated(EnumType.STRING)
    @Column(name = "status_mesa", nullable = false)
    private MesaStatus status = MesaStatus.LIVRE;

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
    public MesaStatus getStatus() { return status; }
    public void setStatus(MesaStatus status) { this.status = status;}
	public String getNumero() {return nome;}
	public AtendimentoMesa getAtendimentoAtivo() { return atendimentoAtivo; }
    public void setAtendimentoAtivo(AtendimentoMesa atendimentoAtivo) { this.atendimentoAtivo = atendimentoAtivo; }
}