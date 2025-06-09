package TavolaSoftware.TavolaApp.REST.dto;

/**
 * DTO para receber dados de criação ou atualização de uma Mesa.
 */
public class MesaRequest {
    private String nome; // "10A", "VIP Lounge Gold", etc.
    private String tipo; // "circular", "retangular"
    private int capacidade;
    private boolean vip;

    // Getters
    public String getNome() {
        return nome;
    }

    public String getTipo() {
        return tipo;
    }

    public int getCapacidade() {
        return capacidade;
    }

    public boolean isVip() {
        return vip;
    }
}