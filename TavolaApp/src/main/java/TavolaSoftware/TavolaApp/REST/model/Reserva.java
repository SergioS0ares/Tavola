package TavolaSoftware.TavolaApp.REST.model;

import java.time.LocalDate;
import java.time.LocalTime;
import java.util.UUID;

import TavolaSoftware.TavolaApp.tools.StatusReserva;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;

@Entity
@Table(name = "histroy_table") // O ideal seria renomear esta tabela para "reservas" no futuro (history_table)
public class Reserva {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private UUID id;

    @ManyToOne
    @JoinColumn(name = "restaurante_id", nullable = false)
    private Restaurante restaurante;

    @ManyToOne
    @JoinColumn(name = "cliente_id", nullable = false)
    private Cliente cliente;

    @Column(name = "data_reserva", nullable = false)
    private LocalDate dataReserva;
    
    @Column(name = "hora_reserva", nullable = false)
    private LocalTime horaReserva;

    // A relação agora é com a mesa individual (Mesa), não com o agrupamento (Mesas)
    @ManyToOne
    @JoinColumn(name = "mesa_id", nullable = true)
    private Mesa mesa; // <<< MUDANÇA

    @Column(name = "quantidade_pessoas", nullable = false)
    private int quantidadePessoas;

    @Column(name = "observacoes", length = 500)
    private String observacoes;

    @Enumerated(EnumType.STRING)
    @Column(name = "status", nullable = false)
    private StatusReserva status;

    public Reserva() {
        this.status = StatusReserva.ATIVA;
    }

    // Getters e Setters

    // O getter e setter de 'mesa' agora usam o tipo correto 'Mesa'
    public Mesa getMesa() { // <<< MUDANÇA
        return mesa;
    }

    public void setMesa(Mesa mesa) { // <<< MUDANÇA
        this.mesa = mesa;
    }
    
    // ... O restante dos getters e setters permanece igual ...
    public UUID getId() { return id; }
    public void setId(UUID id) { this.id = id; }
    public Restaurante getRestaurante() { return restaurante; }
    public void setRestaurante(Restaurante restaurante) { this.restaurante = restaurante; }
    public Cliente getCliente() { return cliente; }
    public void setCliente(Cliente cliente) { this.cliente = cliente; }
    public LocalDate getDataReserva() { return dataReserva; }
    public void setDataReserva(LocalDate dataReserva) { this.dataReserva = dataReserva; }
    public LocalTime getHoraReserva() { return horaReserva; }
    public void setHoraReserva(LocalTime horaReserva) { this.horaReserva = horaReserva; }
    public int getQuantidadePessoas() { return quantidadePessoas; }
    public void setQuantidadePessoas(int quantidadePessoas) { this.quantidadePessoas = quantidadePessoas; }
    public String getObservacoes() { return observacoes; }
    public void setObservacoes(String observacoes) { this.observacoes = observacoes; }
    public StatusReserva getStatus() { return status; }
    public void setStatus(StatusReserva status) { this.status = status; }
}