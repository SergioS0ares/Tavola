// Crie este novo arquivo em REST/dto/responses/GarcomResponse.java
package TavolaSoftware.TavolaApp.REST.dto.responses;

import TavolaSoftware.TavolaApp.REST.model.Garcom;
import java.util.UUID;

public class GarcomResponse {
    private UUID id;
    private String nome;
    private String codigoIdentidade;
    private boolean ativo;
    private String fotoUrl;

    public GarcomResponse(Garcom garcom) {
        this.id = garcom.getId();
        this.nome = garcom.getNome();
        this.codigoIdentidade = garcom.getCodigoIdentidade();
        this.ativo = garcom.isAtivo();
        this.fotoUrl = garcom.getFotoUrl();
    }

    
}