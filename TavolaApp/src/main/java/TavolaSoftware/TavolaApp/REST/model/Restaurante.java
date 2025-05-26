package TavolaSoftware.TavolaApp.REST.model;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Column;
import jakarta.persistence.ElementCollection;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.MapsId;
import jakarta.persistence.OneToMany;
import jakarta.persistence.OneToOne;
import jakarta.persistence.Table;

import java.util.ArrayList;
import java.util.List;
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

    @OneToMany(mappedBy = "restaurante",
            cascade = CascadeType.ALL,
            orphanRemoval = true)
    private List<Mesas> mesas = new ArrayList<>();

    @ElementCollection
    private List<HorarioFuncionamento> horariosFuncionamento;

    @Column(name = "establishment_service")
    private String tipoCozinha = "Outro";
    
    @Column(name = "establishment_images", length = 1000)
    private List<String> imagens;

    @OneToMany(mappedBy = "restaurante", cascade = CascadeType.ALL)
    private List<Cardapio> cardapio;

    private UUID idImagem;

    // métodos de restaurante para retornar informações de usuario - coisa de register...
    
    public String getEmail() { return usuario.getEmail(); }
    
    public String getNome() { return usuario.getNome(); }
    
	public void setEndereco(Endereco endereco) { usuario.setEndereco(endereco); }

	public void setNome(String nome) { usuario.setNome(nome); }

	public Endereco getEndereco() { return usuario.getEndereco(); }
    
    // fim dos métodos de usuario

    public UUID getIdImagem(){
        return idImagem;
    }

    public void setIdImagem(UUID id){
        this.idImagem = id;
    }
	
	public void addMesa(Mesas mesa) {
        mesas.add(mesa);
        mesa.setRestaurante(this);
    }

	public UUID getId() {
		return id;
	}
	
	public void setID(UUID id) {
		this.id = id;
	}
    
    public Usuario getUsuario() {
    	return usuario;
    }
    
    public void setUsuario(Usuario usuario) {
    	this.usuario = usuario;
    }
    
    public List<Mesas> getMesas() { return mesas; }
    
    
    public void setMesas(List<Mesas> mesas) { 
        this.mesas = mesas;
        mesas.forEach(m -> m.setRestaurante(this));
    }

    public List<HorarioFuncionamento> getHoraFuncionamento() {
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

	public List<String> getImagem() {
		return imagens;
	}
	
	public void setImagem(List<String> imagens) {
		this.imagens = imagens;
	}
	
}
