package TavolaSoftware.TavolaApp.REST.model;

import jakarta.persistence.*;
import java.time.LocalDateTime;
import java.util.HashSet;
import java.util.Set;
import java.util.UUID;

/**
 * Representa a sessão de atendimento ATIVA em uma mesa específica.
 * Registra quais garçons estão atualmente responsáveis ou interagindo com a mesa.
 * Substitui a necessidade dos status de Pedido AGUARDANDO_ATENDIMENTO e ATENDIMENTO.
 */
@Entity
@Table(name = "atendimento_mesa")
public class AtendimentoMesa {

    @Id
    @GeneratedValue(strategy = GenerationType.UUID)
    private UUID id;

    // Relação OneToOne: Uma mesa só pode ter UM atendimento ativo por vez.
    @OneToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "mesa_id", nullable = false, unique = true)
    private Mesa mesa;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "restaurante_id", nullable = false)
    private Restaurante restaurante;

    /**
     * Garçons que estão ATUALMENTE atendendo ou registraram interação
     * com esta mesa nesta sessão.
     */
    @ManyToMany
    @JoinTable(
        name = "atendimento_mesa_garcons",
        joinColumns = @JoinColumn(name = "atendimento_id"),
        inverseJoinColumns = @JoinColumn(name = "garcom_id")
    )
    private Set<Garcom> garcons = new HashSet<>(); //

    @Column(name = "ativo", nullable = false)
    private boolean ativo = true; // Indica se a sessão de atendimento está em curso.

    @Column(name = "hora_inicio", nullable = false)
    private LocalDateTime horaInicio; // Momento em que o atendimento começou (primeiro garçom/chamado)

    // Hora de fim será preenchida quando a mesa for liberada (ativo=false)
    @Column(name = "hora_fim")
    private LocalDateTime horaFim;

    // Getters e Setters
    public UUID getId() { return id; }
    public void setId(UUID id) { this.id = id; }
    public Mesa getMesa() { return mesa; }
    public void setMesa(Mesa mesa) { this.mesa = mesa; }
    public Restaurante getRestaurante() { return restaurante; }
    public void setRestaurante(Restaurante restaurante) { this.restaurante = restaurante; }
    public Set<Garcom> getGarcons() { return garcons; }
    public void setGarcons(Set<Garcom> garcons) { this.garcons = garcons; }
    public boolean isAtivo() { return ativo; }
    public void setAtivo(boolean ativo) { this.ativo = ativo; }
    public LocalDateTime getHoraInicio() { return horaInicio; }
    public void setHoraInicio(LocalDateTime horaInicio) { this.horaInicio = horaInicio; }
    public LocalDateTime getHoraFim() { return horaFim; }
    public void setHoraFim(LocalDateTime horaFim) { this.horaFim = horaFim; }
}