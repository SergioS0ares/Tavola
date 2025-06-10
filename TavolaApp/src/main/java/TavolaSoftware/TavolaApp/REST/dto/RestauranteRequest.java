package TavolaSoftware.TavolaApp.REST.dto;

import TavolaSoftware.TavolaApp.tools.Endereco;
import TavolaSoftware.TavolaApp.tools.HorarioFuncionamento;

import java.util.List;
import java.util.Set;

public class RestauranteRequest {
    // Campos do Usuario associado
    private String nomeUsuario;
    private String emailUsuario;
    private String senhaUsuario;
    private Endereco enderecoUsuario;
    private String telefoneUsuario; // <<< NOVO CAMPO

    // Campos específicos do Restaurante
    private String tipoCozinha;
    private String descricao; // <<< NOVO CAMPO
    private List<String> imagens;
    private List<HorarioFuncionamento> horariosFuncionamento;
    private Set<String> nomesServicos;

    // Getters e Setters para TODOS os campos...
    public String getNomeUsuario() { return nomeUsuario; }
    public void setNomeUsuario(String nomeUsuario) { this.nomeUsuario = nomeUsuario; }

    public String getEmailUsuario() { return emailUsuario; }
    public void setEmailUsuario(String emailUsuario) { this.emailUsuario = emailUsuario; }

    public String getSenhaUsuario() { return senhaUsuario; }
    public void setSenhaUsuario(String senhaUsuario) { this.senhaUsuario = senhaUsuario; }

    public Endereco getEnderecoUsuario() { return enderecoUsuario; }
    public void setEnderecoUsuario(Endereco enderecoUsuario) { this.enderecoUsuario = enderecoUsuario; }

    public String getTelefoneUsuario() { return telefoneUsuario; } // <<< GETTER
    public void setTelefoneUsuario(String telefoneUsuario) { this.telefoneUsuario = telefoneUsuario; } // <<< SETTER

    public String getTipoCozinha() { return tipoCozinha; }
    public void setTipoCozinha(String tipoCozinha) { this.tipoCozinha = tipoCozinha; }

    public String getDescricao() { return descricao; } // <<< GETTER
    public void setDescricao(String descricao) { this.descricao = descricao; } // <<< SETTER

    public List<String> getImagens() { return imagens; }
    public void setImagens(List<String> imagens) { this.imagens = imagens; }

    public List<HorarioFuncionamento> getHorariosFuncionamento() { return horariosFuncionamento; }
    public void setHorariosFuncionamento(List<HorarioFuncionamento> horariosFuncionamento) { this.horariosFuncionamento = horariosFuncionamento; }

    public Set<String> getNomesServicos() { return nomesServicos; }
    public void setNomesServicos(Set<String> nomesServicos) { this.nomesServicos = nomesServicos; }
}