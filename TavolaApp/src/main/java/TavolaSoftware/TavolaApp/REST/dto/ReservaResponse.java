package TavolaSoftware.TavolaApp.REST.dto;

import java.util.UUID;
import java.time.LocalDate;
import java.time.LocalTime;

public class ReservaResponse {
    private UUID id;
    private LocalDate data;
    private LocalTime hora;
    private int pessoas;
    private String cliente;
    private String restaurante;

    public ReservaResponse() {}

    public ReservaResponse(UUID id, LocalDate data, LocalTime hora, int quantidadePessoas, String nomeCliente, String nomeRestaurante) {
        this.id = id;
        this.data = data;
        this.hora = hora;
        this.pessoas = quantidadePessoas;
        this.cliente = nomeCliente;
        this.restaurante = nomeRestaurante;
    }

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

    public int getQuantidadePessoas() {
        return pessoas;
    }

    public void setQuantidadePessoas(int quantidadePessoas) {
        this.pessoas = quantidadePessoas;
    }

    public String getNomeCliente() {
        return cliente;
    }

    public void setNomeCliente(String nomeCliente) {
        this.cliente = nomeCliente;
    }

    public String getNomeRestaurante() {
        return restaurante;
    }

    public void setNomeRestaurante(String nomeRestaurante) {
        this.restaurante = nomeRestaurante;
    }
}
