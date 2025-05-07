package TavolaSoftware.TavolaApp.REST.model;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Column;
import jakarta.persistence.ElementCollection;
import jakarta.persistence.Entity;
import jakarta.persistence.OneToMany;
import jakarta.persistence.Table;

import java.util.List;

import TavolaSoftware.TavolaApp.tools.HorarioFuncionamento;
import TavolaSoftware.TavolaApp.tools.Mesas;
import TavolaSoftware.TavolaApp.tools.Usuario;

@Entity
@Table(name = "establishment_table")
public class Restaurante extends Usuario {

    @ElementCollection
    private List<Mesas> mesas;

    @ElementCollection
    private List<HorarioFuncionamento> horariosFuncionamento;

    @Column(name = "establishment_foodtype", nullable = false)
    private String tipoCozinha = "Outro"; // Valor padrão para evitar erro de migração

    @OneToMany(mappedBy = "restaurante", cascade = CascadeType.ALL)
    private List<Cardapio> cardapio;

    public List<Mesas> getMesas() {
        return mesas;
    }

    public void setMesas(List<Mesas> mesas) {
        this.mesas = mesas;
    }

    public List<HorarioFuncionamento> getHorarioFuncionamento() {
        return horariosFuncionamento;
    }

    public void setHoraFuncionamento(List<HorarioFuncionamento> horaFuncionamento) {
        this.horariosFuncionamento = horaFuncionamento;
    }

    public List<Cardapio> getCardapio() {
        return cardapio;
    }

    public void setCardapio(List<Cardapio> cardapio) {
        this.cardapio = cardapio;
    }

    public String getTipoCozinha() {
        return tipoCozinha;
    }

    public void setTipoCozinha(String tipoCozinha) {
        this.tipoCozinha = tipoCozinha;
    }
}
