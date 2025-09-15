package TavolaSoftware.TavolaApp.REST.dto.responses;

import TavolaSoftware.TavolaApp.REST.model.Mesa;
import java.util.UUID;

/**
 * DTO para enviar dados de uma Mesa como resposta da API.
 */
public class MesaResponse {
    private UUID id;
    private String nome;
    private String tipo;
    private int capacidade;
    private boolean vip;
    private UUID ambienteId;

    public static MesaResponse fromEntity(Mesa mesa) {
        if (mesa == null) {
            return null;
        }
        
        MesaResponse response = new MesaResponse();
        response.id = mesa.getId();
        response.nome = mesa.getNome();
        response.tipo = mesa.getTipo();
        response.capacidade = mesa.getCapacidade();
        response.vip = mesa.isVip();
        if (mesa.getAmbiente() != null) {
            response.ambienteId = mesa.getAmbiente().getId();
        }
        
        return response;
    }

    // Getters para todos os campos
    public UUID getId() { return id; }
    public String getNome() { return nome; }
    public String getTipo() { return tipo; }
    public int getCapacidade() { return capacidade; }
    public boolean isVip() { return vip; }
    public UUID getAmbienteId() { return ambienteId; }
}