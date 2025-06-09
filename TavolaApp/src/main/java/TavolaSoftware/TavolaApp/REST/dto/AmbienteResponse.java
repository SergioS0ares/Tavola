package TavolaSoftware.TavolaApp.REST.dto;

import TavolaSoftware.TavolaApp.REST.model.Ambiente;
import TavolaSoftware.TavolaApp.REST.model.Mesa;
import java.util.List;
import java.util.UUID;
import java.util.stream.Collectors;

public class AmbienteResponse {

    private UUID id;
    private String nome;
    private List<MesaSimpleResponse> mesas;

    // Construtor que converte a entidade Ambiente para o DTO de resposta
    public AmbienteResponse(Ambiente ambiente) {
        this.id = ambiente.getId();
        this.nome = ambiente.getNome();
        if (ambiente.getMesas() != null) {
            this.mesas = ambiente.getMesas().stream()
                               .map(MesaSimpleResponse::new)
                               .collect(Collectors.toList());
        }
    }

    // Getters e Setters
    public UUID getId() { return id; }
    public void setId(UUID id) { this.id = id; }
    public String getNome() { return nome; }
    public void setNome(String nome) { this.nome = nome; }
    public List<MesaSimpleResponse> getMesas() { return mesas; }
    public void setMesas(List<MesaSimpleResponse> mesas) { this.mesas = mesas; }

    /**
     * DTO interno para representar uma mesa de forma simplificada.
     */
    public static class MesaSimpleResponse {
        private UUID id;
        private String nome;
        private int capacidade;

        public MesaSimpleResponse(Mesa mesa) {
            this.id = mesa.getId();
            this.nome = mesa.getNome();
            this.capacidade = mesa.getCapacidade(); // Supondo que Mesa tem um getCapacidade()
        }

        // Getters e Setters
        public UUID getId() { return id; }
        public void setId(UUID id) { this.id = id; }
        public String getNome() { return nome; }
        public void setNome(String nome) { this.nome = nome; }
        public int getCapacidade() { return capacidade; }
        public void setCapacidade(int capacidade) { this.capacidade = capacidade; }
    }
}