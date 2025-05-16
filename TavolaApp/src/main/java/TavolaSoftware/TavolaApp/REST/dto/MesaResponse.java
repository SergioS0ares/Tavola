package TavolaSoftware.TavolaApp.REST.dto;

import TavolaSoftware.TavolaApp.REST.model.Mesas;
import java.util.List;
import java.util.UUID;
import java.util.stream.Collectors;

/**
 * DTO para responder dados de Mesas no API, evitando sobrecarga de dados do domínio.
 */
public class MesaResponse {
    private UUID id;
    private String nome;
    private String descricao;
    private int quantidadeTotal;
    private int quantidadeDisponivel;
    private int disponivel;
    private List<String> imagem;

    public MesaResponse() {}

    public static MesaResponse fromEntity(Mesas mesa) {
        if (mesa == null) {
            return null;
        }
        
        MesaResponse response = new MesaResponse();
        response.setId(mesa.getId());
        response.setNome(mesa.getNome());
        response.setDescricao(mesa.getDescricao());
        response.setQuantidadeTotal(mesa.getQuantidadeTotal());
        response.setQuantidadeDisponivel(mesa.getQuantidadeDisponivel());
        response.setDisponivel(mesa.isDisponivel());
        response.setImagens(mesa.getImagem() != null ? 
            mesa.getImagem().stream().collect(Collectors.toList()) : 
            List.of());
            
        return response;
    }

    // Getters and setters
    public UUID getId() { return id; }
    public void setId(UUID id) { this.id = id; }
    public String getNome() { return nome; }
    public void setNome(String nome) { this.nome = nome; }
    public String getDescricao() { return descricao; }
    public void setDescricao(String descricao) { this.descricao = descricao; }
    public int getQuantidadeTotal() { return quantidadeTotal; }
    public void setQuantidadeTotal(int quantidadeTotal) { this.quantidadeTotal = quantidadeTotal; }
    public int getQuantidadeDisponivel() { return quantidadeDisponivel; }
    public void setQuantidadeDisponivel(int quantidadeDisponivel) { this.quantidadeDisponivel = quantidadeDisponivel; }
    public int isDisponivel() { return disponivel; }
    public void setDisponivel(int disponivel) { this.disponivel = disponivel; }
    public List<String> getImagens() { return imagem; }
    public void setImagens(List<String> imagens) { this.imagem = imagens; }
}
