package TavolaSoftware.TavolaApp.REST.dto;

import java.util.List;

import TavolaSoftware.TavolaApp.REST.model.Mesas;
import TavolaSoftware.TavolaApp.tools.Endereco;
import TavolaSoftware.TavolaApp.tools.HorarioFuncionamento;
import TavolaSoftware.TavolaApp.tools.TipoUsuario;

public class RegistroRequest {
    // Comum entre Client e Restaurant
    private String nome;
    private String email;
    private String senha;
    private Endereco endereco;
    private TipoUsuario tipo;

    // Só pra restaurant
    private List<Mesas> mesas;
    private List<HorarioFuncionamento> horaFuncionamento;
    private Integer quantidadeMesas;

    // Getters e Setters
    public Integer getQuantidadeMesas() { return quantidadeMesas; }
    public void setQuantidadeMesas(Integer quantidadeMesas) { this.quantidadeMesas = quantidadeMesas; }
    
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

    public List<Mesas> getMesas() { return mesas; }
    public void setMesas(List<Mesas> mesas) { this.mesas = mesas; }

    public List<HorarioFuncionamento> getHoraFuncionamento() { return horaFuncionamento; }
    public void setHoraFuncionamento(List<HorarioFuncionamento> horaFuncionamento) { this.horaFuncionamento = horaFuncionamento; }
}
