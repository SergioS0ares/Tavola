package TavolaSoftware.TavolaApp.REST.dto.responses;

import TavolaSoftware.TavolaApp.REST.model.Avaliacao;
import java.util.UUID;

public class AvaliacaoResponse {
    private String imagemCliente;
    private String nomeCliente;
    private int nota;
    private UUID idCliente;
    private String comentario;
    // Poderíamos adicionar sentimento, data, etc. se necessário

    public AvaliacaoResponse(Avaliacao avaliacao) {
        this.nota = avaliacao.getScore();
        this.comentario = avaliacao.getComentario();
        if (avaliacao.getCliente() != null && avaliacao.getCliente().getUsuario() != null) {
            this.idCliente = avaliacao.getCliente().getId();
            this.nomeCliente = avaliacao.getCliente().getUsuario().getNome();
            this.imagemCliente = avaliacao.getCliente().getUsuario().getImagem(); // Pega a imagem do Usuario
        } else {
            this.idCliente = null;
            this.nomeCliente = "Usuário Anônimo";
            this.imagemCliente = null; // Ou URL de imagem padrão
        }
    }

    // Getters
    public String getImagemCliente() { return imagemCliente; }
    public String getNomeCliente() { return nomeCliente; }
    public int getNota() { return nota; }
    public UUID getIdCliente() { return idCliente; }
    public String getComentario() { return comentario; }
}