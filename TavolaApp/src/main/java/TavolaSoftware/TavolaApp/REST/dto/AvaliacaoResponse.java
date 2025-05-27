package TavolaSoftware.TavolaApp.REST.dto;

import TavolaSoftware.TavolaApp.REST.model.Avaliacao;

import java.util.UUID;

public class AvaliacaoResponse {

    private UUID id;
    private int score;
    private String comentario;
    private String clienteNome; // Nome do cliente que fez a avaliação

    // Construtor padrão
    public AvaliacaoResponse() {
    }

    // Construtor que aceita a entidade Avaliacao
    public AvaliacaoResponse(Avaliacao avaliacao) {
        this.id = avaliacao.getId(); //
        this.score = avaliacao.getScore(); //
        this.comentario = avaliacao.getComentario(); //

        // Pega o nome do cliente de forma segura
        if (avaliacao.getCliente() != null && avaliacao.getCliente().getUsuario() != null) {
            this.clienteNome = avaliacao.getCliente().getUsuario().getNome();
        } else {
            // Define um valor padrão ou lida com o caso de cliente/usuário nulo
            this.clienteNome = "Cliente anônimo";
        }
    }
    
    // Getters e Setters

    public UUID getId() {
        return id;
    }

    public void setId(UUID id) {
        this.id = id;
    }

    public int getScore() {
        return score;
    }

    public void setScore(int score) {
        this.score = score;
    }

    public String getComentario() {
        return comentario;
    }

    public void setComentario(String comentario) {
        this.comentario = comentario;
    }

    public String getClienteNome() {
        return clienteNome;
    }

    public void setClienteNome(String clienteNome) {
        this.clienteNome = clienteNome;
    }
}