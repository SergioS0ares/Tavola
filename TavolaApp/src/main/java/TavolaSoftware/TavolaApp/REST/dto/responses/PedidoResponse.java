package TavolaSoftware.TavolaApp.REST.dto.responses;

import TavolaSoftware.TavolaApp.REST.model.Pedido;
import TavolaSoftware.TavolaApp.tools.PedidoStatus;
import java.time.LocalDateTime;
import java.util.UUID;

// Este DTO representa um pedido para ser enviado via API ou WebSocket
public class PedidoResponse {
    private UUID id;
    private UUID mesaId;
    private String nomeGarcom;
    private LocalDateTime dataHora;
    private PedidoStatus status;

    public PedidoResponse(Pedido pedido) {
        this.id = pedido.getId();
        this.mesaId = (pedido.getMesa() != null) ? pedido.getMesa().getId() : null;
        this.nomeGarcom = (pedido.getGarcom() != null) ? pedido.getGarcom().getNome() : "N/A";
        this.dataHora = pedido.getDataHora();
        this.status = pedido.getStatus();
    }

    // Getters
    public UUID getId() { return id; }
    public UUID getMesaId() { return mesaId; }
    public String getNomeGarcom() { return nomeGarcom; }
    public LocalDateTime getDataHora() { return dataHora; }
    public PedidoStatus getStatus() { return status; }
}