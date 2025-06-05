package TavolaSoftware.TavolaApp.REST.dto;

import TavolaSoftware.TavolaApp.REST.model.Reserva;
import TavolaSoftware.TavolaApp.tools.StatusReserva;

import java.time.LocalDate;
import java.time.LocalTime;
import java.util.UUID;

public class ReservaResponse {
    private UUID id;
    private LocalDate data;
    private LocalTime hora;
    private int pessoas;
    private String cliente;
    private String restaurante;
    private String observacoes;
    private UUID idCliente;
    private UUID idRestaurante;
    private String nomeMesa;
    private StatusReserva status; // <<< NOVO CAMPO

    public ReservaResponse() {}

    // Construtor para uso geral (opcional, se o construtor de entidade for suficiente)
    public ReservaResponse(UUID id, LocalDate data, LocalTime hora, int quantidadePessoas, String nomeCliente, String nomeRestaurante, String observacoes, UUID idCliente, UUID idRestaurante, String nomeMesa, StatusReserva status) {
        this.id = id;
        this.data = data;
        this.hora = hora;
        this.pessoas = quantidadePessoas;
        this.cliente = nomeCliente;
        this.restaurante = nomeRestaurante;
        this.observacoes = observacoes;
        this.idCliente = idCliente;
        this.idRestaurante = idRestaurante;
        this.nomeMesa = nomeMesa;
        this.status = status;
    }

    public ReservaResponse(Reserva reserva) {
        this.id = reserva.getId();
        this.data = reserva.getDataReserva();
        this.hora = reserva.getHoraReserva();
        this.pessoas = reserva.getQuantidadePessoas();
        if (reserva.getCliente() != null && reserva.getCliente().getUsuario() != null) {
            this.cliente = reserva.getCliente().getUsuario().getNome();
            this.idCliente = reserva.getCliente().getId();
        }
        if (reserva.getRestaurante() != null && reserva.getRestaurante().getUsuario() != null) {
            this.restaurante = reserva.getRestaurante().getUsuario().getNome(); // Nome do usuário do restaurante
            this.idRestaurante = reserva.getRestaurante().getId();
        }
        this.observacoes = reserva.getObservacoes();
        if (reserva.getMesa() != null) {
            this.nomeMesa = reserva.getMesa().getNome();
        } else {
            this.nomeMesa = null;
        }
        this.status = reserva.getStatus(); // <<< ADICIONADO MAPEAMENTO DO STATUS
    }

    // Getters e Setters (incluindo para status)

    public UUID getId() {
        return id;
    }

    public void setId(UUID id) {
        this.id = id;
    }

    public LocalDate getData() {
        return data;
    }

    public void setData(LocalDate data) {
        this.data = data;
    }

    public LocalTime getHora() {
        return hora;
    }

    public void setHora(LocalTime hora) {
        this.hora = hora;
    }

    public int getPessoas() {
        return pessoas;
    }

    public void setPessoas(int pessoas) {
        this.pessoas = pessoas;
    }

    public String getCliente() {
        return cliente;
    }

    public void setCliente(String cliente) {
        this.cliente = cliente;
    }

    public String getRestaurante() {
        return restaurante;
    }

    public void setRestaurante(String restaurante) {
        this.restaurante = restaurante;
    }

    public String getObservacoes() {
        return observacoes;
    }

    public void setObservacoes(String observacoes) {
        this.observacoes = observacoes;
    }

    public UUID getIdCliente() {
        return idCliente;
    }

    public void setIdCliente(UUID idCliente) {
        this.idCliente = idCliente;
    }

    public UUID getIdRestaurante() {
        return idRestaurante;
    }

    public void setIdRestaurante(UUID idRestaurante) {
        this.idRestaurante = idRestaurante;
    }
    
    public String getNomeMesa() {
        return nomeMesa;
    }

    public void setNomeMesa(String nomeMesa) {
        this.nomeMesa = nomeMesa;
    }

    public StatusReserva getStatus() {
        return status;
    }

    public void setStatus(StatusReserva status) {
        this.status = status;
    }
}