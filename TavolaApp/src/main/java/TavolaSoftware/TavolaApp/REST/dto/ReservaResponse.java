package TavolaSoftware.TavolaApp.REST.dto;

import TavolaSoftware.TavolaApp.REST.model.Mesa;
import TavolaSoftware.TavolaApp.REST.model.Reserva;
import TavolaSoftware.TavolaApp.tools.StatusReserva;

import java.time.LocalDate;
import java.time.LocalTime;
import java.util.List;
import java.util.UUID;
import java.util.stream.Collectors;

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
    private List<String> nomesMesas; // <<< CAMPO ATUALIZADO
    private StatusReserva status;

    public ReservaResponse() {}

    public ReservaResponse(Reserva reserva) {
        this.id = reserva.getId();
        this.data = reserva.getDataReserva();
        this.hora = reserva.getHoraReserva();
        this.pessoas = reserva.getQuantidadePessoas();
        this.status = reserva.getStatus();
        this.observacoes = reserva.getObservacoes();

        if (reserva.getCliente() != null && reserva.getCliente().getUsuario() != null) {
            this.cliente = reserva.getCliente().getUsuario().getNome();
            this.idCliente = reserva.getCliente().getId();
        }
        if (reserva.getRestaurante() != null && reserva.getRestaurante().getUsuario() != null) {
            this.restaurante = reserva.getRestaurante().getUsuario().getNome();
            this.idRestaurante = reserva.getRestaurante().getId();
        }
        
        // <<< LÓGICA ATUALIZADA PARA LISTA DE MESAS >>>
        if (reserva.getMesas() != null && !reserva.getMesas().isEmpty()) {
            this.nomesMesas = reserva.getMesas().stream()
                                     .map(Mesa::getNome) // Supondo que Mesa tem um getNome()
                                     .collect(Collectors.toList());
        }
    }

    // Getters e Setters

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

    public List<String> getNomesMesas() {
        return nomesMesas;
    }

    public void setNomesMesas(List<String> nomesMesas) {
        this.nomesMesas = nomesMesas;
    }

    public StatusReserva getStatus() {
        return status;
    }

    public void setStatus(StatusReserva status) {
        this.status = status;
    }
}