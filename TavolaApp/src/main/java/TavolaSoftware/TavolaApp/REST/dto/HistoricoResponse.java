package TavolaSoftware.TavolaApp.REST.dto;

import TavolaSoftware.TavolaApp.REST.model.Reserva;
import TavolaSoftware.TavolaApp.REST.model.Restaurante;
import TavolaSoftware.TavolaApp.REST.model.Usuario;
import TavolaSoftware.TavolaApp.tools.HorarioFuncionamento;
import TavolaSoftware.TavolaApp.tools.StatusReserva;

import java.time.format.DateTimeFormatter;
import java.util.List;
import java.util.UUID;

public class HistoricoResponse {

    // --- Campos Comuns ---
    private UUID idReserva;
    private String data;
    private String horario;
    private int quantidadePessoas;
    private StatusReserva status;
    private String comentariosPreferenciaReserva;

    // --- Campos para Visão do CLIENTE ---
    private UUID idRestaurante;
    private String nomeRestaurante;
    private String imagemRestaurante;
    private String enderecoResumido;
    private List<HorarioFuncionamento> horariosFuncionamento; // Essencial para "Reservar Novamente"

    // --- Campos para Visão do RESTAURANTE ---
    private UUID idCliente;
    private String nomeCliente;
    private String imagemCliente;

    // Construtor para o histórico do CLIENTE
    public HistoricoResponse(Reserva reserva) {
        Restaurante restaurante = reserva.getRestaurante();
        this.idReserva = reserva.getId();
        this.data = reserva.getDataReserva().format(DateTimeFormatter.ISO_LOCAL_DATE);
        this.horario = reserva.getHoraReserva().format(DateTimeFormatter.ofPattern("HH:mm"));
        this.quantidadePessoas = reserva.getQuantidadePessoas();
        this.status = reserva.getStatus();
        this.comentariosPreferenciaReserva = reserva.getObservacoes();

        this.idRestaurante = restaurante.getId();
        this.nomeRestaurante = restaurante.getNome();
        this.enderecoResumido = restaurante.getEndereco() != null ? 
                                restaurante.getEndereco().getBairro() + ", " + restaurante.getEndereco().getCidade() : 
                                "Endereço não informado";
        
        // Pega a primeira imagem da lista como imagem principal
        this.imagemRestaurante = (restaurante.getImagens() != null && !restaurante.getImagens().isEmpty()) ? 
                                 restaurante.getImagens().get(0) : null;
        
        // Adiciona a informação crucial para o front-end
        this.horariosFuncionamento = restaurante.getHorariosFuncionamento();
    }

    // Construtor para o histórico do RESTAURANTE
    public HistoricoResponse(Reserva reserva, Usuario clienteUsuario) {
        this.idReserva = reserva.getId();
        this.data = reserva.getDataReserva().format(DateTimeFormatter.ISO_LOCAL_DATE);
        this.horario = reserva.getHoraReserva().format(DateTimeFormatter.ofPattern("HH:mm"));
        this.quantidadePessoas = reserva.getQuantidadePessoas();
        this.status = reserva.getStatus();
        this.comentariosPreferenciaReserva = reserva.getObservacoes();

        this.idCliente = clienteUsuario.getId();
        this.nomeCliente = clienteUsuario.getNome();
        this.imagemCliente = clienteUsuario.getImagem();
    }

    // Getters para todos os campos (essencial para a serialização JSON)
    public UUID getIdReserva() { return idReserva; }
    public String getData() { return data; }
    public String getHorario() { return horario; }
    public int getQuantidadePessoas() { return quantidadePessoas; }
    public StatusReserva getStatus() { return status; }
    public String getComentariosPreferenciaReserva() { return comentariosPreferenciaReserva; }
    public UUID getIdRestaurante() { return idRestaurante; }
    public String getNomeRestaurante() { return nomeRestaurante; }
    public String getImagemRestaurante() { return imagemRestaurante; }
    public String getEnderecoResumido() { return enderecoResumido; }
    public List<HorarioFuncionamento> getHorariosFuncionamento() { return horariosFuncionamento; }
    public UUID getIdCliente() { return idCliente; }
    public String getNomeCliente() { return nomeCliente; }
    public String getImagemCliente() { return imagemCliente; }
}