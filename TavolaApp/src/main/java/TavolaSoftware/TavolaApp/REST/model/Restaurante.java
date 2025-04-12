package TavolaSoftware.TavolaApp.REST.model;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Column;
import jakarta.persistence.ElementCollection;
import jakarta.persistence.Entity;
import jakarta.persistence.OneToMany;
import jakarta.persistence.Table;

import java.util.List;

import TavolaSoftware.TavolaApp.tools.Mesas;
import TavolaSoftware.TavolaApp.tools.Usuario;

@Entity
@Table(name = "establishment_table")
public class Restaurante extends Usuario {

    @ElementCollection
    private List<Mesas> mesas;

    @Column(name = "establishment_hour")
    private String horaFuncionamento;

    @OneToMany(mappedBy = "establishment", cascade = CascadeType.ALL)
    private List<Cardapio> cardapio;

    public List<Mesas> getMesas() {
        return mesas;
    }

    public void setMesas(List<Mesas> mesas) {
        this.mesas = mesas;
    }

    public String getHorarioFuncionamento() {
        return horaFuncionamento;
    }

    public void setHoraFuncionamento(String horaFuncionamento) {
        this.horaFuncionamento = horaFuncionamento;
    }

    public List<Cardapio> getCardapio() {
        return cardapio;
    }

    public void setCardapio(List<Cardapio> cardapio) {
        this.cardapio = cardapio;
    }
}
