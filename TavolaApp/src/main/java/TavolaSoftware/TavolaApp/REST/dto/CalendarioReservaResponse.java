package TavolaSoftware.TavolaApp.REST.dto;

import TavolaSoftware.TavolaApp.REST.model.Reserva;

public class CalendarioReservaResponse {
    private String data;
    private String clienteNome;
    private int pessoas;
    private String status;

    public CalendarioReservaResponse(Reserva reserva) {
        if (reserva.getDataReserva() != null) {
            this.data = reserva.getDataReserva().atStartOfDay().toString(); // Formato ISO
        }
        if (reserva.getCliente() != null && reserva.getCliente().getUsuario() != null) {
            this.clienteNome = reserva.getCliente().getUsuario().getNome();
        }
        this.pessoas = reserva.getQuantidadePessoas();
        if (reserva.getStatus() != null) {
            this.status = reserva.getStatus().name().toLowerCase();
        }
    }
    
}