package TavolaSoftware.TavolaApp.REST.model;

import jakarta.persistence.CascadeType;
import jakarta.persistence.CollectionTable;
import jakarta.persistence.Column;
import jakarta.persistence.ElementCollection;
import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.JoinTable;
import jakarta.persistence.Lob; // Importar Lob para campos TEXT
import jakarta.persistence.ManyToMany;
import jakarta.persistence.MapsId;
import jakarta.persistence.OneToMany;
import jakarta.persistence.OneToOne;
import jakarta.persistence.Table;

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
    // O ID é mapeado a partir do ID do Usuario associado
    private UUID id;

    @OneToOne
    @MapsId // Esta anotação indica que a chave primária desta entidade (id) é também uma chave estrangeira para Usuario.
    @JoinColumn(name = "usuario_id") // Mapeia para a coluna usuario_id que será a PK e FK.
    private Usuario usuario;

    @OneToMany(mappedBy = "restaurante",
            cascade = CascadeType.ALL,
            orphanRemoval = true)
    private List<Mesas> mesas = new ArrayList<>();
    
    @ElementCollection(fetch = FetchType.LAZY)
    @CollectionTable(name = "restaurante_horarios_funcionamento",
                     joinColumns = @JoinColumn(name = "restaurante_id", referencedColumnName = "usuario_id"))
    private List<HorarioFuncionamento> horariosFuncionamento = new ArrayList<>();

    @Column(name = "establishment_cuisine_type") // Renomeado para maior clareza, antes "establishment_service"
    private String tipoCozinha = "Outro"; // Campo para tipo de cozinha já existia
    
    @Lob // Recomendado para campos TEXT longos, mais portável que columnDefinition
    @Column(name = "establishment_description") // <<< NOVO CAMPO: Descrição (Sobre)
    private String descricao;

    @ElementCollection(fetch = FetchType.LAZY)
    @CollectionTable(name = "restaurante_imagens_urls", joinColumns = @JoinColumn(name = "restaurante_id"))
    @Column(name = "imagem_url") // Cada URL de imagem será uma linha nesta tabela associada ao restaurante_id
    private List<String> imagens = new ArrayList<>(); // Alterado para ElementCollection para lista de URLs

    @OneToMany(mappedBy = "restaurante", cascade = CascadeType.ALL)
    private List<Cardapio> cardapio = new ArrayList<>();
    
    @Column(name = "establishment_average_score")
    private double mediaAvaliacao = 0;
    
    @Column(name = "establishment_total_reviews")
    private int totalDeAvaliacoes = 0;

    @Column(name = "establishment_id_imagem_repository") // Explicitando o nome da coluna
    private UUID idImagemRepository; // Este campo se refere a pasta que representará a pasta em que ficará armazenada as imagens de Restaurante
    
    @OneToMany(mappedBy = "restaurante", cascade = CascadeType.ALL, orphanRemoval = true)
    private List<Avaliacao> avaliacoes = new ArrayList<>();
    
    @ManyToMany(cascade = {CascadeType.PERSIST, CascadeType.MERGE})
    @JoinTable(
        name = "restaurante_servicos_associacao",
        joinColumns = @JoinColumn(name = "restaurante_id"),
        inverseJoinColumns = @JoinColumn(name = "servico_id")
    )
    private Set<Servico> servicos = new HashSet<>();


    // Getters e Setters para os campos existentes e novos

    public UUID getId() { return id; }
    public void setId(UUID id) { this.id = id; } // Setter para ID, usado por @MapsId

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

    // Getter e Setter para o novo campo descricao
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

    // Métodos delegados para informações do Usuario (conforme já existiam)
    public String getEmail() { return usuario != null ? usuario.getEmail() : null; }
    public String getNome() { return usuario != null ? usuario.getNome() : null; }
    public Endereco getEndereco() { return usuario != null ? usuario.getEndereco() : null; }
    public void setEndereco(Endereco endereco) { if (usuario != null) { usuario.setEndereco(endereco); } }
    public void setNome(String nome) { if (usuario != null) { usuario.setNome(nome); } }
}