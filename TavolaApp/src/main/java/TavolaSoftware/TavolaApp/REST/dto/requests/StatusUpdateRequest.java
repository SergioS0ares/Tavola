package TavolaSoftware.TavolaApp.REST.dto.requests;

public class StatusUpdateRequest {
    private String novoStatus;

    // Construtor
    public StatusUpdateRequest() {}

    // Getter
    public String getNovoStatus() {
        return novoStatus;
    }

    // Setter
    public void setNovoStatus(String novoStatus) {
        this.novoStatus = novoStatus;
    }
}	