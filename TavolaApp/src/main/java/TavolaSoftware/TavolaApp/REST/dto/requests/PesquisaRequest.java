package TavolaSoftware.TavolaApp.REST.dto.requests;

import java.util.List;

public class PesquisaRequest {

    private String termo;
    private boolean cidadeLocal; // true para buscar apenas na cidade do usuário
    private String horarioAberto; // Formato "HH:mm-HH:mm", ex: "19:00-22:00"
    private Double notaMinima;
    private List<String> servicos;

    // Getters e Setters
    public String getTermo() { return termo; }
    public void setTermo(String termo) { this.termo = termo; }
    public boolean isCidadeLocal() { return cidadeLocal; }
    public void setCidadeLocal(boolean cidadeLocal) { this.cidadeLocal = cidadeLocal; }
    public String getHorarioAberto() { return horarioAberto; }
    public void setHorarioAberto(String horarioAberto) { this.horarioAberto = horarioAberto; }
    public Double getNotaMinima() { return notaMinima; }
    public void setNotaMinima(Double notaMinima) { this.notaMinima = notaMinima; }
    public List<String> getServicos() { return servicos; }
    public void setServicos(List<String> servicos) { this.servicos = servicos; }
}