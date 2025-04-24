package TavolaSoftware.TavolaApp.REST.model;

import java.util.Set;
import java.util.UUID;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.ManyToMany;
import jakarta.persistence.Table;
import jakarta.persistence.UniqueConstraint;

@Entity
@Table(name = "tags", uniqueConstraints = @UniqueConstraint(columnNames = "tag_name"))
public class Tags {
    
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private UUID id;

    @Column(name = "tag_name", nullable = false, unique = true)
    private String tag;

    @ManyToMany(mappedBy = "tags")
    private Set<Cardapio> cardapios;

    public Tags() {}

    public Tags(String tag) {
        this.tag = tag;
    }
    
    public UUID getId() {
        return id;
    }

    public void setId(UUID id) {
        this.id = id;
    }

    public String getTag() {
        return tag;
    }

    public void setTag(String tag) {
        this.tag = tag;
    }

    public Set<Cardapio> getCardapios() {
        return cardapios;
    }

    public void setCardapios(Set<Cardapio> cardapios) {
        this.cardapios = cardapios;
    }
}
