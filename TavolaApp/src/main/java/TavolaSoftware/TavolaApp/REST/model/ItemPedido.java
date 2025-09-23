package TavolaSoftware.TavolaApp.REST.model;

import jakarta.persistence.*;
import java.util.UUID;

@Entity
@Table(name = "item_pedido_table")
public class ItemPedido {

    @Id
    @GeneratedValue(strategy = GenerationType.UUID)
    private UUID id;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "pedido_id", nullable = false)
    private Pedido pedido;

    @Column(name = "nome_produto", nullable = false)
    private String nomeProduto;

    @Column(name = "quantidade", nullable = false)
    private int quantidade;

    @Column(name = "observacoes")
    private String observacoes;

    // Getters e Setters...
}