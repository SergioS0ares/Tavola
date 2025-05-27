package TavolaSoftware.TavolaApp.REST.dto;

import TavolaSoftware.TavolaApp.REST.model.Restaurante;
import TavolaSoftware.TavolaApp.REST.model.Avaliacao; // Ou AvaliacaoResponseDTO se você criar
import TavolaSoftware.TavolaApp.tools.Endereco;

import java.util.List;
import java.util.ArrayList;
import java.util.stream.Collectors;

public class RestauranteResponse {

    private String nome;
    private Endereco localizacao;
    private String tipoCozinha;
    private List<String> imagens;
    private double mediaAvaliacao;
    private List<AvaliacaoResponse> avaliacoes; // Mantendo a sugestão de um DTO para Avaliacao

    // Construtor padrão
    public RestauranteResponse() {
    }

    // Construtor que aceita a entidade Restaurante (seu padrão)
    public RestauranteResponse(Restaurante restaurante) {
        if (restaurante.getUsuario() != null) {
            this.nome = restaurante.getNome();
            this.localizacao = restaurante.getEndereco();
        }
        this.tipoCozinha = restaurante.getTipoCozinha();
        this.imagens = restaurante.getImagem();
        this.mediaAvaliacao = restaurante.getMediaAvaliacao();

        if (restaurante.getAvaliacoes() != null) {
            this.avaliacoes = restaurante.getAvaliacoes().stream()
                                  .map(AvaliacaoResponse::new) // Agora usa o construtor de AvaliacaoResponseDTO
                                  .collect(Collectors.toList());
        } else {
            this.avaliacoes = new ArrayList<>();
        }
    }

    // Getters e Setters (como definidos anteriormente)

    public String getNome() {
        return nome;
    }

    public void setNome(String nome) {
        this.nome = nome;
    }

    public Endereco getLocalizacao() {
        return localizacao;
    }

    public void setLocalizacao(Endereco localizacao) {
        this.localizacao = localizacao;
    }

    public String getTipoCozinha() {
        return tipoCozinha;
    }

    public void setTipoCozinha(String tipoCozinha) {
        this.tipoCozinha = tipoCozinha;
    }

    public List<String> getImagens() {
        return imagens;
    }

    public void setImagens(List<String> imagens) {
        this.imagens = imagens;
    }

    public double getMediaAvaliacao() {
        return mediaAvaliacao;
    }

    public void setMediaAvaliacao(double mediaAvaliacao) {
        this.mediaAvaliacao = mediaAvaliacao;
    }

    public List<AvaliacaoResponse> getAvaliacoes() {
        return avaliacoes;
    }

    public void setAvaliacoes(List<AvaliacaoResponse> avaliacoes) {
        this.avaliacoes = avaliacoes;
    }
}