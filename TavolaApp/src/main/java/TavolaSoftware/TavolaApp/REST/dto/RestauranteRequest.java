package TavolaSoftware.TavolaApp.REST.dto;

import TavolaSoftware.TavolaApp.tools.Endereco;
import TavolaSoftware.TavolaApp.tools.HorarioFuncionamento; // Garanta que esta classe tenha getters

import java.util.List;
import java.util.Set;

public class RestauranteRequest {
    // Campos do Usuario associado
    private String nomeUsuario; // Nome para o Usuario
    private String emailUsuario; // Email para o Usuario
    private String senhaUsuario; // Senha para o Usuario (obrigatório na criação, opcional na atualização)
    private Endereco enderecoUsuario; // Endereço para o Usuario

    // Campos específicos do Restaurante
    private String tipoCozinha;
    private List<String> imagens; // Lista de strings Base64 para novas imagens ou URLs de imagens existentes
    private List<HorarioFuncionamento> horariosFuncionamento; // Lista de objetos HorarioFuncionamento
    private Set<String> nomesServicos; // Apenas os nomes dos serviços a serem associados/atualizados

    // Getters
    public String getNomeUsuario() {
        return nomeUsuario;
    }

    public String getEmailUsuario() {
        return emailUsuario;
    }

    public String getSenhaUsuario() {
        return senhaUsuario;
    }

    public Endereco getEnderecoUsuario() {
        return enderecoUsuario;
    }

    public String getTipoCozinha() {
        return tipoCozinha;
    }

    public List<String> getImagens() {
        return imagens;
    }

    public List<HorarioFuncionamento> getHorariosFuncionamento() {
        return horariosFuncionamento;
    }

    public Set<String> getNomesServicos() {
        return nomesServicos;
    }

    // Setters
    public void setNomeUsuario(String nomeUsuario) {
        this.nomeUsuario = nomeUsuario;
    }

    public void setEmailUsuario(String emailUsuario) {
        this.emailUsuario = emailUsuario;
    }

    public void setSenhaUsuario(String senhaUsuario) {
        this.senhaUsuario = senhaUsuario;
    }

    public void setEnderecoUsuario(Endereco enderecoUsuario) {
        this.enderecoUsuario = enderecoUsuario;
    }

    public void setTipoCozinha(String tipoCozinha) {
        this.tipoCozinha = tipoCozinha;
    }

    public void setImagens(List<String> imagens) {
        this.imagens = imagens;
    }

    public void setHorariosFuncionamento(List<HorarioFuncionamento> horariosFuncionamento) {
        this.horariosFuncionamento = horariosFuncionamento;
    }

    public void setNomesServicos(Set<String> nomesServicos) {
        this.nomesServicos = nomesServicos;
    }
}
