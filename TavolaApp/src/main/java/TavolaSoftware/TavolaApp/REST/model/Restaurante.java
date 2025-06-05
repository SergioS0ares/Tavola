package TavolaSoftware.TavolaApp.REST.model;

import jakarta.persistence.*; // Import genérico
import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;
import java.util.Set;
import java.util.UUID;
import TavolaSoftware.TavolaApp.tools.Endereco;
import TavolaSoftware.TavolaApp.tools.HorarioFuncionamento;

@Entity
@Table(name = "establishment_table")
public class Restaurante {

    @Id
    private UUID id; // OK, vem do Usuario via @MapsId

    @OneToOne
    @MapsId
    @JoinColumn(name = "usuario_id") // OK
    private Usuario usuario;

    @OneToMany(mappedBy = "restaurante", cascade = CascadeType.ALL, orphanRemoval = true)
    private List<Mesas> mesas = new ArrayList<>(); // OK

    @ElementCollection(fetch = FetchType.LAZY)
    @CollectionTable(name = "restaurante_horarios_funcionamento",
                     joinColumns = @JoinColumn(name = "restaurante_id", referencedColumnName = "usuario_id")) // OK
    private List<HorarioFuncionamento> horariosFuncionamento = new ArrayList<>();

    @Column(name = "establishment_cuisine_type") // OK, seu tipoCozinha
    private String tipoCozinha = "Outro";
    
    @Lob
    @Column(name = "establishment_description") // OK, sua descrição
    private String descricao;

    @ElementCollection(fetch = FetchType.LAZY)
    @CollectionTable(name = "restaurante_imagens_urls", 
                     joinColumns = @JoinColumn(name = "restaurante_id", referencedColumnName = "usuario_id")) // << PEQUENO AJUSTE AQUI
    @Column(name = "imagem_url")
    private List<String> imagens = new ArrayList<>();

    @OneToMany(mappedBy = "restaurante", cascade = CascadeType.ALL)
    private List<Cardapio> cardapio = new ArrayList<>(); // OK

    @Column(name = "establishment_average_score") // OK
    private double mediaAvaliacao = 0;
    
    @Column(name = "establishment_total_reviews") // OK
    private int totalDeAvaliacoes = 0;

    @Column(name = "establishment_id_imagem_repository") // OK
    private UUID idImagemRepository;
    
    @OneToMany(mappedBy = "restaurante", cascade = CascadeType.ALL, orphanRemoval = true)
    private List<Avaliacao> avaliacoes = new ArrayList<>(); // OK
    
    @ManyToMany(cascade = {CascadeType.PERSIST, CascadeType.MERGE})
    @JoinTable(
        name = "restaurante_servicos_associacao", // OK
        joinColumns = @JoinColumn(name = "restaurante_id", referencedColumnName = "usuario_id"), // << PEQUENO AJUSTE AQUI
        inverseJoinColumns = @JoinColumn(name = "servico_id") // OK
    )
    private Set<Servico> servicos = new HashSet<>();

    // Getters e Setters (como você os tem)
    // ... (seus getters e setters estão bons, incluindo os delegados para Usuario) ...
    public UUID getId() { return id; }
    public void setId(UUID id) { this.id = id; }

    public Usuario getUsuario() { return usuario; }
    public void setUsuario(Usuario usuario) { this.usuario = usuario; }
    
    public List<Mesas> getMesas() { return mesas; }
    public void setMesas(List<Mesas> mesas) { 
        this.mesas.clear();
        if (mesas != null) {
            this.mesas.addAll(mesas);
            this.mesas.forEach(m -> m.setRestaurante(this));
        }
    }

    public List<HorarioFuncionamento> getHorariosFuncionamento() { return horariosFuncionamento; }
    public void setHorariosFuncionamento(List<HorarioFuncionamento> horariosFuncionamento) { this.horariosFuncionamento = horariosFuncionamento; }

    public String getTipoCozinha() { return tipoCozinha; }
    public void setTipoCozinha(String tipoCozinha) { this.tipoCozinha = tipoCozinha; }

    public String getDescricao() { return descricao; }
    public void setDescricao(String descricao) { this.descricao = descricao; }

    public List<String> getImagens() { return imagens; }
    public void setImagens(List<String> imagens) { this.imagens = imagens; }

    public List<Cardapio> getCardapio() { return cardapio; }
    public void setCardapio(List<Cardapio> cardapio) { this.cardapio = cardapio; }

    public double getMediaAvaliacao() { return mediaAvaliacao; }
    public void setMediaAvaliacao(double mediaAvaliacao) { this.mediaAvaliacao = mediaAvaliacao; }

    public int getTotalDeAvaliacoes() { return totalDeAvaliacoes; }
    public void setTotalDeAvaliacoes(int totalDeAvaliacoes) { this.totalDeAvaliacoes = totalDeAvaliacoes; }

    public UUID getIdImagemRepository() { return idImagemRepository; }
    public void setIdImagemRepository(UUID idImagemRepository) { this.idImagemRepository = idImagemRepository; }

    public List<Avaliacao> getAvaliacoes() { return avaliacoes; }
    public void setAvaliacoes(List<Avaliacao> avaliacoes) {
        this.avaliacoes.clear();
        if (avaliacoes != null) {
            this.avaliacoes.addAll(avaliacoes);
            this.avaliacoes.forEach(a -> a.setRestaurante(this));
        }
    }
    
    public void addAvaliacao(Avaliacao avaliacao) {
        if (this.avaliacoes == null) {
            this.avaliacoes = new ArrayList<>();
        }
        this.avaliacoes.add(avaliacao);
        avaliacao.setRestaurante(this);
    }
    
    public void addMesa(Mesas mesa) {
        if (this.mesas == null) {
            this.mesas = new ArrayList<>();
        }
        this.mesas.add(mesa);
        mesa.setRestaurante(this);
    }

    public Set<Servico> getServicos() { return servicos; }
    public void setServicos(Set<Servico> servicos) { this.servicos = servicos; }

    // Métodos delegados
    public String getEmail() { return usuario != null ? usuario.getEmail() : null; }
    public String getNome() { return usuario != null ? usuario.getNome() : null; }
    public Endereco getEndereco() { return usuario != null ? usuario.getEndereco() : null; }
    public void setEndereco(Endereco endereco) { if (usuario != null) { usuario.setEndereco(endereco); } }
    public void setNome(String nome) { if (usuario != null) { usuario.setNome(nome); } }
}