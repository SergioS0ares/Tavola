package TavolaSoftware.TavolaApp.REST.model;

import TavolaSoftware.TavolaApp.tools.Endereco;
import TavolaSoftware.TavolaApp.tools.TipoUsuario;
import TavolaSoftware.TavolaApp.tools.Usuario;
import jakarta.persistence.Entity;
import jakarta.persistence.Table;

@Entity
@Table(name = "client_table")
public class Cliente extends Usuario {

    // Construtor padrão exigido pelo Hibernate
    public Cliente() {}

    // Construtor customizado
    public Cliente(String nome, String senha, String email, Endereco endereco) {
        this.setNome(nome);
        this.setSenha(senha);
        this.setEmail(email);
        this.setEndereco(endereco);
        this.setTipo(TipoUsuario.CLIENTE);
    }
}
