package TavolaSoftware.TavolaApp.REST.dto.requests;

import TavolaSoftware.TavolaApp.tools.StatusReserva;

/**
 * DTO (Data Transfer Object) para receber a requisição de mudança de status de uma reserva.
 */
public class StatusUpdateRequest {
    private StatusReserva status;

    // Construtores, Getters e Setters

    public StatusUpdateRequest() {
    }

    public StatusReserva getStatus() {
        return status;
    }

    public void setStatus(StatusReserva status) {
        this.status = status;
    }
}