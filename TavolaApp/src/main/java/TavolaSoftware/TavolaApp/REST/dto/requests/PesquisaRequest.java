package TavolaSoftware.TavolaApp.REST.dto.requests;

import TavolaSoftware.TavolaApp.tools.DiaDaSemana;
import java.util.List;

public class PesquisaRequest {

    private String termo;
    private String cidade; // <-- NOVO CAMPO para a cidade
    private Double notaMinima;
    private List<String> servicos;
    private DiaDaSemana diaSemana; // <-- NOVO CAMPO para o dia da semana TEM QUE SER EM CAIXA ALTA

    // Getters e Setters para os campos novos e existentes
    public String getTermo() { return termo; }
    public void setTermo(String termo) { this.termo = termo; }

    public String getCidade() { return cidade; }
    public void setCidade(String cidade) { this.cidade = cidade; }

    public Double getNotaMinima() { return notaMinima; }
    public void setNotaMinima(Double notaMinima) { this.notaMinima = notaMinima; }

    public List<String> getServicos() { return servicos; }
    public void setServicos(List<String> servicos) { this.servicos = servicos; }

    public DiaDaSemana getDiaSemana() { return diaSemana; }
    public void setDiaSemana(DiaDaSemana diaSemana) { this.diaSemana = diaSemana; }
}