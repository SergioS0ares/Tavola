package TavolaSoftware.TavolaApp.REST.dto.responses;

import java.util.List;
import java.util.ArrayList; // <<< NOVO IMPORT

import TavolaSoftware.TavolaApp.REST.model.Restaurante;
import TavolaSoftware.TavolaApp.REST.model.Usuario;
import TavolaSoftware.TavolaApp.tools.Endereco;

public class ClienteHomeResponse {

    private String id;
    private String nome;
    private String tipoCozinha;
    private double mediaAvaliacao;
    private List<String> imagem; // O tipo List<String> está correto
    private int totalAvaliacao; // Agora este campo será preenchido
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
            this.endereco = usuario.getEndereco();
        }

        this.tipoCozinha = restaurante.getTipoCozinha();
        this.mediaAvaliacao = restaurante.getMediaAvaliacao();

        // <<< CORREÇÃO 1: Preenchendo o total de avaliações >>>
        // Pegamos o total de avaliações do objeto Restaurante.
        this.totalAvaliacao = restaurante.getTotalDeAvaliacoes();

        // <<< CORREÇÃO 2: Lógica para a lista de imagens >>>
        // Inicializamos a lista de imagens.
        this.imagem = new ArrayList<>();
        // Verificamos se o restaurante possui imagens.
        if (restaurante.getImagens() != null && !restaurante.getImagens().isEmpty()) {
            // Adicionamos apenas a primeira imagem da lista (a imagem principal).
            // Isso satisfaz o tipo List<String> e a necessidade do front-end.
            this.imagem.add(restaurante.getImagens().get(0));
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

    // <<< CORREÇÃO 3: Renomeando os getters e setters para consistência >>>
    public double getMediaAvaliacao() {
        return mediaAvaliacao;
    }

    public void setMediaAvaliacao(double mediaAvaliacao) {
        this.mediaAvaliacao = mediaAvaliacao;
    }

    // <<< CORREÇÃO 4: Getters e setters corretos para a lista de imagens >>>
    public List<String> getImagem() {
        return imagem;
    }

    public void setImagem(List<String> imagem) {
        this.imagem = imagem;
    }

    public int getTotalAvaliacao() {
        return totalAvaliacao;
    }

    public void setTotalAvaliacao(int totalAvaliacao) {
        this.totalAvaliacao = totalAvaliacao;
    }

    public Endereco getEndereco() {
        return endereco;
    }

    public void setEndereco(Endereco endereco) {
        this.endereco = endereco;
    }
}