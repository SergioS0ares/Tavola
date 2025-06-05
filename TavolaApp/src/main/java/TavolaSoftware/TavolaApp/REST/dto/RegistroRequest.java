package TavolaSoftware.TavolaApp.REST.dto;

import TavolaSoftware.TavolaApp.tools.Endereco;
import TavolaSoftware.TavolaApp.tools.HorarioFuncionamento;
import TavolaSoftware.TavolaApp.tools.TipoUsuario;
import TavolaSoftware.TavolaApp.REST.model.Mesas; // Se você envia a lista de Mesas completa

import java.util.List;
import java.util.Set;

public class RegistroRequest {
    // Campos do Usuario
    private String nome;
    private String email;
    private String senha;
    private Endereco endereco;
    private TipoUsuario tipo;
    private String telefone; // <<< NOVO CAMPO

    // Campos específicos do Restaurante (usados se tipo == RESTAURANTE)
    private String tipoCozinha; // <<< NOVO/CONFIRMADO CAMPO
    private String descricao;   // <<< NOVO CAMPO
    private Integer quantidadeMesas; // Já existia na sua lógica do AccessController
    private List<Mesas> mesas; // Se você permitir enviar a lista de mesas detalhada
    private List<HorarioFuncionamento> horaFuncionamento; // Já existia
    private Set<String> nomesServicos; // <<< NOVO/CONFIRMADO CAMPO

    // Getters e Setters para TODOS os campos (incluindo os novos)

    public String getNome() { return nome; }
    public void setNome(String nome) { this.nome = nome; }

    public String getEmail() { return email; }
    public void setEmail(String email) { this.email = email; }

    public String getSenha() { return senha; }
    public void setSenha(String senha) { this.senha = senha; }

    public Endereco getEndereco() { return endereco; }
    public void setEndereco(Endereco endereco) { this.endereco = endereco; }

    public TipoUsuario getTipo() { return tipo; }
    public void setTipo(TipoUsuario tipo) { this.tipo = tipo; }

    public String getTelefone() { return telefone; } // <<< GETTER
    public void setTelefone(String telefone) { this.telefone = telefone; } // <<< SETTER

    public String getTipoCozinha() { return tipoCozinha; } // <<< GETTER
    public void setTipoCozinha(String tipoCozinha) { this.tipoCozinha = tipoCozinha; } // <<< SETTER

    public String getDescricao() { return descricao; } // <<< GETTER
    public void setDescricao(String descricao) { this.descricao = descricao; } // <<< SETTER

    public Integer getQuantidadeMesas() { return quantidadeMesas; }
    public void setQuantidadeMesas(Integer quantidadeMesas) { this.quantidadeMesas = quantidadeMesas; }
    
    public List<Mesas> getMesas() { return mesas; }
    public void setMesas(List<Mesas> mesas) { this.mesas = mesas; }

    public List<HorarioFuncionamento> getHoraFuncionamento() { return horaFuncionamento; }
    public void setHoraFuncionamento(List<HorarioFuncionamento> horaFuncionamento) { this.horaFuncionamento = horaFuncionamento; }

    public Set<String> getNomesServicos() { return nomesServicos; } // <<< GETTER
    public void setNomesServicos(Set<String> nomesServicos) { this.nomesServicos = nomesServicos; } // <<< SETTER
}