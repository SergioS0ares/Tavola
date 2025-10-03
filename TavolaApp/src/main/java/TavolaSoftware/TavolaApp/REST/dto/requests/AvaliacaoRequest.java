package TavolaSoftware.TavolaApp.REST.dto.requests;

//Classe DTO para receber os dados da avaliação
public class AvaliacaoRequest {
    private double score;
    private String comentario;

    public double getScore() {
        return score;
    }

    public void setScore(double score) {
        this.score = score;
    }

    public String getComentario() {
        return comentario;
    }

    public void setComentario(String comentario) {
        this.comentario = comentario;
    }
}