package TavolaSoftware.TavolaApp.REST.dto;

import TavolaSoftware.TavolaApp.REST.model.Restaurante;
import TavolaSoftware.TavolaApp.REST.model.Usuario;
import TavolaSoftware.TavolaApp.tools.Endereco; // Certifique-se que esta classe possui os campos esperados


public class ClienteHomeResponse {

    private String id;
    private String nome;
    private String tipoCozinha;
    private double avaliacao;
    private String imagem; // URL da imagem principal
    private Endereco endereco;

    // Construtor padrão
    public ClienteHomeResponse() {
    }

    // Construtor que aceita a entidade Restaurante
    public ClienteHomeResponse(Restaurante restaurante) {
        this.id = restaurante.getId() != null ? restaurante.getId().toString() : null;

        Usuario usuario = restaurante.getUsuario();
        if (usuario != null) {
            this.nome = usuario.getNome();
            this.endereco = usuario.getEndereco(); // Assumindo que a classe Endereco já tem os campos corretos
        }

        this.tipoCozinha = restaurante.getTipoCozinha();
        this.avaliacao = restaurante.getMediaAvaliacao();

        // Pega a primeira imagem da lista, se houver
        if (restaurante.getImagens() != null && !restaurante.getImagens().isEmpty()) {
            this.imagem = restaurante.getImagens().get(0);
        } else {
            this.imagem = null; // Ou uma URL de imagem placeholder, se preferir
        }
    }

    // Getters e Setters

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getNome() {
        return nome;
    }

    public void setNome(String nome) {
        this.nome = nome;
    }

    public String getTipoCozinha() {
        return tipoCozinha;
    }

    public void setTipoCozinha(String tipoCozinha) {
        this.tipoCozinha = tipoCozinha;
    }

    public double getAvaliacao() {
        return avaliacao;
    }

    public void setAvaliacao(double avaliacao) {
        this.avaliacao = avaliacao;
    }

    public String getImagem() {
        return imagem;
    }

    public void setImagem(String imagem) {
        this.imagem = imagem;
    }

    public Endereco getEndereco() {
        return endereco;
    }

    public void setEndereco(Endereco endereco) {
        this.endereco = endereco;
    }
}