package TavolaSoftware.TavolaApp.REST.dto;

import TavolaSoftware.TavolaApp.REST.model.Avaliacao;
import TavolaSoftware.TavolaApp.REST.model.Restaurante;
import TavolaSoftware.TavolaApp.REST.model.Usuario; // Importar Usuario
import TavolaSoftware.TavolaApp.tools.Endereco;
import TavolaSoftware.TavolaApp.tools.HorarioFuncionamento; // Para o DTO de Horário

import java.util.List;
import java.util.ArrayList;
import java.util.Set;
import java.util.UUID;
import java.util.stream.Collectors;

public class RestauranteResponse {

    private UUID id; // Adicionado para identificar o restaurante
    private String nome;
    private String email; // Do usuário associado
    private Endereco endereco; // Do usuário associado
    private String tipoCozinha;
    private List<String> imagens;
    private double mediaAvaliacao;
    private int totalDeAvaliacoes;
    private List<SimpleAvaliacaoResponse> avaliacoes;
    private List<HorarioFuncionamentoDTO> horariosFuncionamento; // DTO para Horário
    private Set<String> servicos; // Nomes dos serviços

    // Construtor padrão
    public RestauranteResponse() {
    }

    // Construtor que aceita a entidade Restaurante
    public RestauranteResponse(Restaurante restaurante) {
        this.id = restaurante.getId();
        if (restaurante.getUsuario() != null) {
            Usuario usuario = restaurante.getUsuario();
            this.nome = usuario.getNome();
            this.email = usuario.getEmail();
            this.endereco = usuario.getEndereco();
        }
        this.tipoCozinha = restaurante.getTipoCozinha();
        this.imagens = restaurante.getImagem() != null ? new ArrayList<>(restaurante.getImagem()) : new ArrayList<>();
        this.mediaAvaliacao = restaurante.getMediaAvaliacao();
        this.totalDeAvaliacoes = restaurante.getTotalDeAvaliacoes(); // Popular o novo campo

        if (restaurante.getAvaliacoes() != null) {
            this.avaliacoes = restaurante.getAvaliacoes().stream()
                                  .map(SimpleAvaliacaoResponse::new)
                                  .collect(Collectors.toList());
        } else {
            this.avaliacoes = new ArrayList<>();
        }

        if (restaurante.getHoraFuncionamento() != null) {
            this.horariosFuncionamento = restaurante.getHoraFuncionamento().stream()
                                            .map(HorarioFuncionamentoDTO::new)
                                            .collect(Collectors.toList());
        } else {
            this.horariosFuncionamento = new ArrayList<>();
        }
        
        if (restaurante.getServicos() != null) {
            this.servicos = restaurante.getServicos().stream()
                                .map(servico -> servico.getNome()) // Supondo que Servico tem getNome()
                                .collect(Collectors.toSet());
        } else {
            this.servicos = Set.of();
        }
    }

    // Classe estática interna para representar a avaliação de forma simples
    public static class SimpleAvaliacaoResponse {
        private int score;
        private String comentario;
        private String nomeCliente; // Para identificar quem avaliou

        public SimpleAvaliacaoResponse(Avaliacao avaliacao) {
            this.score = avaliacao.getScore(); //
            this.comentario = avaliacao.getComentario(); //
            if (avaliacao.getCliente() != null && avaliacao.getCliente().getUsuario() != null) {
                this.nomeCliente = avaliacao.getCliente().getUsuario().getNome(); //
            } else {
                this.nomeCliente = "Anônimo";
            }
        }

        // Getters
        public int getScore() { return score; }
        public String getComentario() { return comentario; }
        public String getNomeCliente() { return nomeCliente; }
    }
    
    // Classe estática interna para HorarioFuncionamento
    public static class HorarioFuncionamentoDTO {
        private String diaSemana;
        private String abertura;
        private String fechamento;

        public HorarioFuncionamentoDTO(HorarioFuncionamento hf) {
            this.diaSemana = hf.getDiaSemana();
            this.abertura = hf.getAbertura();
            this.fechamento = hf.getFechamento();
        }
        
        // Getters
        public String getDiaSemana() { return diaSemana; }
        public String getAbertura() { return abertura; }
        public String getFechamento() { return fechamento; }
    }


    // Getters e Setters para RestauranteResponse
    public int getTotalDeAvaliacoes() {
        return totalDeAvaliacoes;
    }

    public void setTotalDeAvaliacoes(int totalDeAvaliacoes) {
        this.totalDeAvaliacoes = totalDeAvaliacoes;
    }
    
    public UUID getId() { return id; }
    public void setId(UUID id) { this.id = id; }

    public String getNome() { return nome; }
    public void setNome(String nome) { this.nome = nome; }

    public String getEmail() { return email; }
    public void setEmail(String email) { this.email = email; }

    public Endereco getEndereco() { return endereco; }
    public void setEndereco(Endereco endereco) { this.endereco = endereco; }

    public String getTipoCozinha() { return tipoCozinha; }
    public void setTipoCozinha(String tipoCozinha) { this.tipoCozinha = tipoCozinha; }

    public List<String> getImagens() { return imagens; }
    public void setImagens(List<String> imagens) { this.imagens = imagens; }

    public double getMediaAvaliacao() { return mediaAvaliacao; }
    public void setMediaAvaliacao(double mediaAvaliacao) { this.mediaAvaliacao = mediaAvaliacao; }

    public List<SimpleAvaliacaoResponse> getAvaliacoes() { return avaliacoes; }
    public void setAvaliacoes(List<SimpleAvaliacaoResponse> avaliacoes) { this.avaliacoes = avaliacoes; }

    public List<HorarioFuncionamentoDTO> getHorariosFuncionamento() { return horariosFuncionamento; }
    public void setHorariosFuncionamento(List<HorarioFuncionamentoDTO> horariosFuncionamento) { this.horariosFuncionamento = horariosFuncionamento; }

    public Set<String> getServicos() { return servicos; }
    public void setServicos(Set<String> servicos) { this.servicos = servicos; }
}