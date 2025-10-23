package TavolaSoftware.TavolaApp.REST.dto.responses;

import java.util.List;
import java.util.ArrayList;

import TavolaSoftware.TavolaApp.REST.model.Restaurante;
import TavolaSoftware.TavolaApp.REST.model.Usuario;
import TavolaSoftware.TavolaApp.tools.Endereco;

public class ClienteHomeResponse {

    private String id;
    private String nome;
    private String tipoCozinha;
    private double mediaAvaliacao;
    
    // --- CAMPO ALTERADO ---
    // Removemos a lista de imagens e usamos um campo dedicado para a imagem principal
    private String imagemPrincipal; // Era List<String> imagem
    
    private int totalAvaliacao;
    private Endereco endereco;

    public ClienteHomeResponse() {
    }

    public ClienteHomeResponse(Restaurante restaurante) {
        this.id = restaurante.getId() != null ? restaurante.getId().toString() : null;

        Usuario usuario = restaurante.getUsuario();
        if (usuario != null) {
            this.nome = usuario.getNome();
            this.endereco = usuario.getEndereco();
        }

        this.tipoCozinha = restaurante.getTipoCozinha();
        this.mediaAvaliacao = restaurante.getMediaAvaliacao();
        this.totalAvaliacao = restaurante.getTotalDeAvaliacoes();

        // --- LÓGICA DE CONSTRUÇÃO ATUALIZADA ---
        // Agora pegamos o nome do arquivo do novo campo 'imagemPrincipal'
        // A URL completa (com /upl/...) será montada no Service
        this.imagemPrincipal = restaurante.getImagemPrincipal(); 
        
        // A lógica antiga (pegar .get(0) da galeria) foi removida.
    }

    // Getters e Setters

    public String getId() { return id; }
    public void setId(String id) { this.id = id; }

    public String getNome() { return nome; }
    public void setNome(String nome) { this.nome = nome; }

    public String getTipoCozinha() { return tipoCozinha; }
    public void setTipoCozinha(String tipoCozinha) { this.tipoCozinha = tipoCozinha; }

    public double getMediaAvaliacao() { return mediaAvaliacao; }
    public void setMediaAvaliacao(double mediaAvaliacao) { this.mediaAvaliacao = mediaAvaliacao; }

    // --- MÉTODOS ATUALIZADOS ---
    public String getImagemPrincipal() {
        return imagemPrincipal;
    }
    public void setImagemPrincipal(String imagemPrincipal) {
        this.imagemPrincipal = imagemPrincipal;
    }
    // --- FIM DA ATUALIZAÇÃO ---

    public int getTotalAvaliacao() { return totalAvaliacao; }
    public void setTotalAvaliacao(int totalAvaliacao) { this.totalAvaliacao = totalAvaliacao; }

    public Endereco getEndereco() { return endereco; }
    public void setEndereco(Endereco endereco) { this.endereco = endereco; }
}