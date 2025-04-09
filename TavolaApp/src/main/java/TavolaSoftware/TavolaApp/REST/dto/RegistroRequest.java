package TavolaSoftware.TavolaApp.REST.dto;

import java.util.List;

import TavolaSoftware.TavolaApp.tools.Endereco;
import TavolaSoftware.TavolaApp.tools.Mesas;
import TavolaSoftware.TavolaApp.tools.TipoUsusario;

public class RegistroRequest {
    // Comum entre Client e Restaurant
    private String nome;
    private String email;
    private String senha;
    private Endereco endereco;
    private TipoUsusario tipo;

    // Só pra restaurant
    private List<Mesas> mesas;
    private String horaFuncionamento;

    // Getters e Setters
    public String getNome() { return nome; }
    public void setNome(String nome) { this.nome = nome; }

    public String getEmail() { return email; }
    public void setEmail(String email) { this.email = email; }

    public String getSenha() { return senha; }
    public void setSenha(String senha) { this.senha = senha; }

    public Endereco getEndereco() { return endereco; }
    public void setEndereco(Endereco endereco) { this.endereco = endereco; }

    public TipoUsusario getTipo() { return tipo; }
    public void setTipo(TipoUsusario tipo) { this.tipo = tipo; }

    public List<Mesas> getMesas() { return mesas; }
    public void setMesas(List<Mesas> mesas) { this.mesas = mesas; }

    public String getHoraFuncionamento() { return horaFuncionamento; }
    public void setHoraFuncionamento(String horaFuncionamento) { this.horaFuncionamento = horaFuncionamento; }
}
