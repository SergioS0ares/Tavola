package TavolaSoftware.TavolaApp.REST.model;

import jakarta.persistence.*;
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
    private UUID id;

    @OneToOne
    @MapsId
    @JoinColumn(name = "usuario_id")
    private Usuario usuario;

    // A relação agora é com Ambiente, não mais com a antiga classe Mesas
    @OneToMany(mappedBy = "restaurante", cascade = CascadeType.ALL, orphanRemoval = true)
    private List<Ambiente> ambientes = new ArrayList<>(); // <<< MUDANÇA

    @ElementCollection(fetch = FetchType.LAZY)
    @CollectionTable(name = "restaurante_horarios_funcionamento",
                     joinColumns = @JoinColumn(name = "restaurante_id", referencedColumnName = "usuario_id"))
    private List<HorarioFuncionamento> horariosFuncionamento = new ArrayList<>();

    @Column(name = "establishment_cuisine_type")
    private String tipoCozinha = "Outro";
    
    @Lob
    @Column(name = "establishment_description")
    private String descricao;

    @ElementCollection(fetch = FetchType.LAZY)
    @CollectionTable(name = "restaurante_imagens_urls", 
                     joinColumns = @JoinColumn(name = "restaurante_id", referencedColumnName = "usuario_id"))
    @Column(name = "imagem_url")
    private List<String> imagens = new ArrayList<>();

    @OneToMany(mappedBy = "restaurante", cascade = CascadeType.ALL)
    private List<Cardapio> cardapio = new ArrayList<>();

    @Column(name = "establishment_average_score")
    private double mediaAvaliacao = 0;
    
    @Column(name = "establishment_total_reviews")
    private int totalDeAvaliacoes = 0;

    @Column(name = "establishment_id_imagem_repository")
    private UUID idImagemRepository;
    
    @OneToMany(mappedBy = "restaurante", cascade = CascadeType.ALL, orphanRemoval = true)
    private List<Avaliacao> avaliacoes = new ArrayList<>();
    
    @ManyToMany(cascade = {CascadeType.PERSIST, CascadeType.MERGE})
    @JoinTable(
        name = "restaurante_servicos_associacao",
        joinColumns = @JoinColumn(name = "restaurante_id", referencedColumnName = "usuario_id"),
        inverseJoinColumns = @JoinColumn(name = "servico_id")
    )
    private Set<Servico> servicos = new HashSet<>();

    // Getters e Setters
    
    public UUID getId() { return id; }
    public void setId(UUID id) { this.id = id; }

    public Usuario getUsuario() { return usuario; }
    public void setUsuario(Usuario usuario) { this.usuario = usuario; }
    
    // Getter e Setter para a lista de ambientes
    public List<Ambiente> getAmbientes() { return ambientes; } // <<< MUDANÇA
    public void setAmbientes(List<Ambiente> ambientes) {  // <<< MUDANÇA
        this.ambientes.clear();
        if (ambientes != null) {
            this.ambientes.addAll(ambientes);
            this.ambientes.forEach(a -> a.setRestaurante(this));
        }
    }

    // Método de ajuda para adicionar um ambiente
    public void addAmbiente(Ambiente ambiente) { // <<< MUDANÇA
        if (this.ambientes == null) {
            this.ambientes = new ArrayList<>();
        }
        this.ambientes.add(ambiente);
        ambiente.setRestaurante(this);
    }
    
    // ... O restante dos getters e setters permanece igual ...
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
    public void setAvaliacoes(List<Avaliacao> avaliacoes) { /* ... */ }
    public void addAvaliacao(Avaliacao avaliacao) { /* ... */ }
    public Set<Servico> getServicos() { return servicos; }
    public void setServicos(Set<Servico> servicos) { this.servicos = servicos; }
    public String getEmail() { return usuario != null ? usuario.getEmail() : null; }
    public String getNome() { return usuario != null ? usuario.getNome() : null; }
    public Endereco getEndereco() { return usuario != null ? usuario.getEndereco() : null; }
    public void setEndereco(Endereco endereco) { if (usuario != null) { usuario.setEndereco(endereco); } }
    public void setNome(String nome) { if (usuario != null) { usuario.setNome(nome); } }
}