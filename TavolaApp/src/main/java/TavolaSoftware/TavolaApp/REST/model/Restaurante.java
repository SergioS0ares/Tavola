package TavolaSoftware.TavolaApp.REST.model;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.OneToMany;
import jakarta.persistence.Table;

import java.util.List;
import java.util.UUID;

import TavolaSoftware.TavolaApp.tools.Endereco;
import TavolaSoftware.TavolaApp.tools.Mesas;

@Entity
@Table(name = "establishment_table")
public class Restaurante {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private UUID id;

    @Column(name = "establishment_name", nullable = false)
    private String name;

    @Column(name = "establishment_adress", nullable = false)
    private Endereco adress;

    @OneToMany(mappedBy = "restaurante", cascade = CascadeType.ALL)
    private List<Cardapio> menu;

    @Column(name = "establishment_tables")
    private Mesas tables;

    @Column(name = "establishment_hour")
    private String hour;

    public UUID getId() {
        return id;
    }

    public void setId(UUID id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public Endereco getAdress() {
        return adress;
    }

    public void setAdress(Endereco adress) {
        this.adress = adress;
    }

    public List<Cardapio> getMenu() {
        return menu;
    }

    public void setMenu(List<Cardapio> menu) {
        this.menu = menu;
    }

    public Mesas getTables() {
        return tables;
    }

    public void setTables(Mesas tables) {
        this.tables = tables;
    }

    public String getHour() {
        return hour;
    }

    public void setHour(String hour) {
        this.hour = hour;
    }
}