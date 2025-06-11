package TavolaSoftware.TavolaApp.REST.dto;

import TavolaSoftware.TavolaApp.REST.model.Mesa;
import TavolaSoftware.TavolaApp.REST.model.Reserva;
import TavolaSoftware.TavolaApp.REST.model.Usuario;
import TavolaSoftware.TavolaApp.tools.StatusReserva;

import java.time.LocalDate;
import java.time.LocalTime;
import java.time.format.DateTimeFormatter;
import java.util.List;
import java.util.UUID;
import java.util.stream.Collectors;

public class ListaEsperaResponse {
    private UUID id;
    private UUID clienteId;
    private String clienteNome;
    private List<UUID> mesaIds;
    private String data; // Formato ISO
    private String horario;
    private String periodo;
    private int pessoas;
    private String status;
    private String preferencias;
    private String imagemperfil;

    public ListaEsperaResponse(Reserva reserva) {
        this.id = reserva.getId();
        this.pessoas = reserva.getQuantidadePessoas();
        this.preferencias = reserva.getObservacoes();
        
        if (reserva.getCliente() != null) {
            this.clienteId = reserva.getCliente().getId();
            Usuario usuarioCliente = reserva.getCliente().getUsuario();
            if (usuarioCliente != null) {
                this.clienteNome = usuarioCliente.getNome();
                this.imagemperfil = usuarioCliente.getImagem();
            }
        }

        if (reserva.getMesas() != null) {
            this.mesaIds = reserva.getMesas().stream().map(Mesa::getId).collect(Collectors.toList());
        }

        if (reserva.getDataReserva() != null) {
            this.data = reserva.getDataReserva().atStartOfDay().toString(); // Converte para formato ISO
        }
        
        if (reserva.getHoraReserva() != null) {
            this.horario = reserva.getHoraReserva().format(DateTimeFormatter.ofPattern("HH:mm"));
            int hora = reserva.getHoraReserva().getHour();
            if (hora >= 11 && hora < 15) {
                this.periodo = "Almoço";
            } else if (hora >= 18 && hora < 24) {
                this.periodo = "Jantar";
            } else {
                this.periodo = "Outro";
            }
        }
        
        if (reserva.getStatus() != null) {
            this.status = reserva.getStatus().name().toLowerCase();
        }
    }

    // Getters e Setters para todos os campos...
}