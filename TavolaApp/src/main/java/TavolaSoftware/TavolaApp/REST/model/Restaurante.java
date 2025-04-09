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
    private List<Mesas> tables;

    @Column(name = "establishment_hour")
    private String hour;

    @OneToMany(mappedBy = "establishment", cascade = CascadeType.ALL)
    private List<Cardapio> menu;

    // Getters e Setters
    public List<Mesas> getTables() {
        return tables;
    }

    public void setTables(List<Mesas> tables) {
        this.tables = tables;
    }

    public String getHour() {
        return hour;
    }

    public void setHour(String hour) {
        this.hour = hour;
    }

    public List<Cardapio> getMenu() {
        return menu;
    }

    public void setMenu(List<Cardapio> menu) {
        this.menu = menu;
    }
}
