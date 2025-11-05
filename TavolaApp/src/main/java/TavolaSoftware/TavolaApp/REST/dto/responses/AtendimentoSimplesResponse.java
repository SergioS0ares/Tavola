package TavolaSoftware.TavolaApp.REST.dto.responses;

import TavolaSoftware.TavolaApp.REST.model.AtendimentoMesa;
import java.time.LocalDateTime;
import java.util.Set;
import java.util.UUID;
import java.util.stream.Collectors;

// DTO leve para representar um atendimento dentro do dashboard
public class AtendimentoSimplesResponse {
    private UUID id;
    private UUID mesaId;
    private boolean ativo;
    private LocalDateTime horaInicio;
    private String nomeCliente;
    private Set<UUID> garconsIds;

    public AtendimentoSimplesResponse(AtendimentoMesa atendimento) {
        this.id = atendimento.getId();
        this.mesaId = atendimento.getMesa().getId();
        this.ativo = atendimento.isAtivo();
        this.horaInicio = atendimento.getHoraInicio();
        this.nomeCliente = atendimento.getNomeCliente();
        this.garconsIds = atendimento.getGarcons().stream()
                            .map(g -> g.getId())
                            .collect(Collectors.toSet());
    }

    // Getters e Setters
    public UUID getId() { return id; }
    public void setId(UUID id) { this.id = id; }
    public UUID getMesaId() { return mesaId; }
    public void setMesaId(UUID mesaId) { this.mesaId = mesaId; }
    public boolean isAtivo() { return ativo; }
    public void setAtivo(boolean ativo) { this.ativo = ativo; }
    public LocalDateTime getHoraInicio() { return horaInicio; }
    public void setHoraInicio(LocalDateTime horaInicio) { this.horaInicio = horaInicio; }
    public String getNomeCliente() { return nomeCliente; }
    public void setNomeCliente(String nomeCliente) { this.nomeCliente = nomeCliente; }
    public Set<UUID> getGarconsIds() { return garconsIds; }
    public void setGarconsIds(Set<UUID> garconsIds) { this.garconsIds = garconsIds; }
}