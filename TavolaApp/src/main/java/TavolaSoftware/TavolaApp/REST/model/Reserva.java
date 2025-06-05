package TavolaSoftware.TavolaApp.REST.model;

import java.time.LocalDate;
import java.time.LocalTime;
import java.util.UUID;

import TavolaSoftware.TavolaApp.tools.StatusReserva;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.EnumType; // <<< NOVO IMPORT
import jakarta.persistence.Enumerated; // <<< NOVO IMPORT
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;

@Entity
@Table(name = "histroy_table")
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

    @ManyToOne
    @JoinColumn(name = "mesa_id", nullable = true)
    private Mesas mesa;

    @Column(name = "quantidade_pessoas", nullable = false)
    private int quantidadePessoas;

    @Column(name = "observacoes", length = 500)
    private String observacoes;

    // <<< NOVO CAMPO: Status da Reserva >>>
    @Enumerated(EnumType.STRING) // Grava o nome do enum como string no banco
    @Column(name = "status", nullable = false)
    private StatusReserva status;


    public Reserva() {
        this.status = StatusReserva.ATIVA; // Define um status padrão ao criar uma nova reserva
    }

    // Getters e Setters (incluindo para o novo campo status)
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

    public LocalDate getDataReserva() {
        return dataReserva;
    }

    public void setDataReserva(LocalDate dataReserva) {
        this.dataReserva = dataReserva;
    }

    public LocalTime getHoraReserva() {
        return horaReserva;
    }

    public void setHoraReserva(LocalTime horaReserva) {
        this.horaReserva = horaReserva;
    }

    public Mesas getMesa() {
        return mesa;
    }

    public void setMesa(Mesas mesa) {
        this.mesa = mesa;
    }

    public int getQuantidadePessoas() {
        return quantidadePessoas;
    }

    public void setQuantidadePessoas(int quantidadePessoas) {
        this.quantidadePessoas = quantidadePessoas;
    }

    public String getObservacoes() {
        return observacoes;
    }

    public void setObservacoes(String observacoes) {
        this.observacoes = observacoes;
    }

    public StatusReserva getStatus() {
        return status;
    }

    public void setStatus(StatusReserva status) {
        this.status = status;
    }
}