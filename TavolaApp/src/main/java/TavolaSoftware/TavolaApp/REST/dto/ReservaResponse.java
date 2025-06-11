package TavolaSoftware.TavolaApp.REST.dto;

import TavolaSoftware.TavolaApp.REST.model.Mesa;
import TavolaSoftware.TavolaApp.REST.model.Reserva;
import TavolaSoftware.TavolaApp.REST.model.Usuario; // <<< NOVO IMPORT
import TavolaSoftware.TavolaApp.tools.StatusReserva;

import java.time.LocalDate;
import java.time.LocalTime;
import java.util.List;
import java.util.UUID;
import java.util.stream.Collectors;

public class ReservaResponse {
    private UUID id;
    private LocalDate data;
    private LocalTime hora;
    private int pessoas;
    private String observacoes;
    private StatusReserva status;
    
    // Dados do Restaurante
    private UUID idRestaurante;
    private String restaurante;

    // Dados do Cliente (Enriquecidos)
    private UUID idCliente;
    private String cliente; // Nome do cliente
    private String emailCliente; // <<< NOVO CAMPO
    private String telefoneCliente; // <<< NOVO CAMPO
    private String imagemPerfilCliente; // <<< NOVO CAMPO
    
    // Dados das Mesas
    private List<String> nomesMesas;

    public ReservaResponse() {}

    public ReservaResponse(Reserva reserva) {
        this.id = reserva.getId();
        this.data = reserva.getDataReserva();
        this.hora = reserva.getHoraReserva();
        this.pessoas = reserva.getQuantidadePessoas();
        this.status = reserva.getStatus();
        this.observacoes = reserva.getObservacoes();

        // Mapeando dados do Cliente
        if (reserva.getCliente() != null) {
            this.idCliente = reserva.getCliente().getId();
            Usuario usuarioCliente = reserva.getCliente().getUsuario();
            if (usuarioCliente != null) {
                this.cliente = usuarioCliente.getNome();
                this.emailCliente = usuarioCliente.getEmail(); // <<< MAPEAMENTO
                this.telefoneCliente = usuarioCliente.getTelefone(); // <<< MAPEAMENTO
                this.imagemPerfilCliente = usuarioCliente.getImagem(); // <<< MAPEAMENTO (Assumindo que Usuario tem getImagemPerfil())
            }
        }

        // Mapeando dados do Restaurante
        if (reserva.getRestaurante() != null && reserva.getRestaurante().getUsuario() != null) {
            this.restaurante = reserva.getRestaurante().getUsuario().getNome();
            this.idRestaurante = reserva.getRestaurante().getId();
        }
        
        // Mapeando Mesas
        if (reserva.getMesas() != null && !reserva.getMesas().isEmpty()) {
            this.nomesMesas = reserva.getMesas().stream()
                                     .map(Mesa::getNome)
                                     .collect(Collectors.toList());
        }
    }

    // Adicione os Getters e Setters para os novos campos
    public String getEmailCliente() { return emailCliente; }
    public void setEmailCliente(String emailCliente) { this.emailCliente = emailCliente; }
    public String getTelefoneCliente() { return telefoneCliente; }
    public void setTelefoneCliente(String telefoneCliente) { this.telefoneCliente = telefoneCliente; }
    public String getImagemPerfilCliente() { return imagemPerfilCliente; }
    public void setImagemPerfilCliente(String imagemPerfilCliente) { this.imagemPerfilCliente = imagemPerfilCliente; }
    
    // ... (Getters e Setters existentes permanecem aqui) ...
    public UUID getId() { return id; }
    public void setId(UUID id) { this.id = id; }
    public LocalDate getData() { return data; }
    public void setData(LocalDate data) { this.data = data; }
    public LocalTime getHora() { return hora; }
    public void setHora(LocalTime hora) { this.hora = hora; }
    public int getPessoas() { return pessoas; }
    public void setPessoas(int pessoas) { this.pessoas = pessoas; }
    public String getCliente() { return cliente; }
    public void setCliente(String cliente) { this.cliente = cliente; }
    public String getRestaurante() { return restaurante; }
    public void setRestaurante(String restaurante) { this.restaurante = restaurante; }
    public String getObservacoes() { return observacoes; }
    public void setObservacoes(String observacoes) { this.observacoes = observacoes; }
    public UUID getIdCliente() { return idCliente; }
    public void setIdCliente(UUID idCliente) { this.idCliente = idCliente; }
    public UUID getIdRestaurante() { return idRestaurante; }
    public void setIdRestaurante(UUID idRestaurante) { this.idRestaurante = idRestaurante; }
    public List<String> getNomesMesas() { return nomesMesas; }
    public void setNomesMesas(List<String> nomesMesas) { this.nomesMesas = nomesMesas; }
    public StatusReserva getStatus() { return status; }
    public void setStatus(StatusReserva status) { this.status = status; }
}