package TavolaSoftware.TavolaApp.REST.service;

import TavolaSoftware.TavolaApp.REST.dto.ReservaRequest;
import TavolaSoftware.TavolaApp.REST.dto.ReservaResponse;
import TavolaSoftware.TavolaApp.REST.model.Cliente;
import TavolaSoftware.TavolaApp.REST.model.Mesa; // <<< NOVO IMPORT
import TavolaSoftware.TavolaApp.REST.model.Reserva;
import TavolaSoftware.TavolaApp.REST.model.Restaurante;
import TavolaSoftware.TavolaApp.REST.model.Usuario;
import TavolaSoftware.TavolaApp.REST.repository.ClienteRepository;
import TavolaSoftware.TavolaApp.REST.repository.MesaRepository; // <<< NOVO IMPORT
import TavolaSoftware.TavolaApp.REST.repository.ReservaRepository;
import TavolaSoftware.TavolaApp.REST.repository.RestauranteRepository;
import TavolaSoftware.TavolaApp.REST.repository.UsuarioRepository;
import TavolaSoftware.TavolaApp.tools.StatusReserva;
import TavolaSoftware.TavolaApp.tools.TipoUsuario;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.time.LocalDate;
import java.time.LocalTime;
import java.time.format.DateTimeFormatter;
import java.time.format.DateTimeParseException;
import java.util.Collections;
import java.util.List;
import java.util.Optional;
import java.util.UUID;
import java.util.stream.Collectors;

@Service
public class ReservaService {

    @Autowired
    private ReservaRepository reservaRepository;

    @Autowired
    private ClienteRepository clienteRepository;

    @Autowired
    private RestauranteRepository restauranteRepository;

    @Autowired
    private UsuarioRepository usuarioRepository;

    @Autowired
    private MesaRepository mesaRepository; // <<< INJEÇÃO DO REPOSITÓRIO DE MESA

    private static final DateTimeFormatter DATE_FORMATTER = DateTimeFormatter.ISO_LOCAL_DATE; // yyyy-MM-dd
    private static final DateTimeFormatter TIME_FORMATTER = DateTimeFormatter.ofPattern("HH:mm");

    @Transactional
    public ReservaResponse criarReserva(ReservaRequest requestDto, String emailClienteLogado) {
        Cliente cliente = clienteRepository.findByUsuarioEmail(emailClienteLogado);
        if (cliente == null) {
            throw new RuntimeException("Cliente não encontrado com o email: " + emailClienteLogado);
        }

        Restaurante restaurante = restauranteRepository.findById(requestDto.getIdRestaurante())
                .orElseThrow(() -> new RuntimeException("Restaurante não encontrado com ID: " + requestDto.getIdRestaurante()));

        LocalDate dataReserva = parseData(requestDto.getDataReserva());
        LocalTime horaReserva = parseHora(requestDto.getHorarioReserva());
        
        validarDataHoraReserva(dataReserva, horaReserva);
        validarQuantidadePessoas(requestDto.getQuantidadePessoasReserva());
        
        Reserva novaReserva = new Reserva();
        novaReserva.setCliente(cliente);
        novaReserva.setRestaurante(restaurante);
        novaReserva.setDataReserva(dataReserva);
        novaReserva.setHoraReserva(horaReserva);
        novaReserva.setQuantidadePessoas(requestDto.getQuantidadePessoasReserva());
        novaReserva.setObservacoes(requestDto.getComentariosPreferenciaReserva());
        novaReserva.setStatus(StatusReserva.ATIVA);

        // <<< LÓGICA ATUALIZADA PARA ASSOCIAR MÚLTIPLAS MESAS >>>
        if (requestDto.getIdsMesas() != null && !requestDto.getIdsMesas().isEmpty()) {
            List<Mesa> mesasEncontradas = mesaRepository.findAllById(requestDto.getIdsMesas());
            if (mesasEncontradas.size() != requestDto.getIdsMesas().size()) {
                throw new RuntimeException("Uma ou mais mesas solicitadas para a reserva não foram encontradas.");
            }
            novaReserva.setMesas(mesasEncontradas);
        }

        Reserva reservaSalva = reservaRepository.save(novaReserva);
        return new ReservaResponse(reservaSalva);
    }

    public Optional<ReservaResponse> findById(UUID idReserva) {
        return reservaRepository.findById(idReserva).map(ReservaResponse::new);
    }
    
    public List<ReservaResponse> findAllByClienteOrdered(UUID clienteId, String ordem, int pagina, int tamanho) {
        Pageable pageable = PageRequest.of(pagina, tamanho);
        List<Reserva> reservas = reservaRepository.findAllByClienteOrdered(clienteId, ordem, pageable);
        return reservas.stream().map(ReservaResponse::new).collect(Collectors.toList());
    }

    public List<ReservaResponse> findAllByRestauranteOrdered(UUID restauranteId, String ordem, int pagina, int tamanho) {
        Pageable pageable = PageRequest.of(pagina, tamanho);
        List<Reserva> reservas = reservaRepository.findAllByRestauranteOrdered(restauranteId, ordem, pageable);
        return reservas.stream().map(ReservaResponse::new).collect(Collectors.toList());
    }

    @Transactional
    public ReservaResponse cancelarReserva(UUID idReserva, String emailUsuarioLogado) {
        Reserva reserva = reservaRepository.findById(idReserva)
                .orElseThrow(() -> new RuntimeException("Reserva não encontrada com ID: " + idReserva));

        Usuario usuarioLogado = usuarioRepository.findByEmail(emailUsuarioLogado);
        if (usuarioLogado == null) {
            throw new RuntimeException("Usuário não autenticado.");
        }

        boolean podeCancelar = false;
        StatusReserva novoStatus = reserva.getStatus();

        if (usuarioLogado.getTipo() == TipoUsuario.CLIENTE && reserva.getCliente().getUsuario().getEmail().equals(emailUsuarioLogado)) {
            podeCancelar = true;
            novoStatus = StatusReserva.CANCELADA_CLIENTE;
        } else if (usuarioLogado.getTipo() == TipoUsuario.RESTAURANTE && reserva.getRestaurante().getUsuario().getEmail().equals(emailUsuarioLogado)) {
            podeCancelar = true;
            novoStatus = StatusReserva.CANCELADA_RESTAURANTE;
        }

        if (!podeCancelar) {
            throw new SecurityException("Usuário não tem permissão para cancelar esta reserva.");
        }

        if (reserva.getStatus() == StatusReserva.CANCELADA_CLIENTE || reserva.getStatus() == StatusReserva.CANCELADA_RESTAURANTE || reserva.getStatus() == StatusReserva.CONCLUIDA) {
            throw new IllegalStateException("Esta reserva não pode ser cancelada pois já está " + reserva.getStatus().toString().toLowerCase() + ".");
        }
        
        reserva.setStatus(novoStatus);
        Reserva reservaSalva = reservaRepository.save(reserva);
        return new ReservaResponse(reservaSalva);
    }

    @Transactional
    public ReservaResponse atualizarReserva(UUID idReserva, ReservaRequest requestDto, String emailUsuarioLogado) {
        Reserva reserva = reservaRepository.findById(idReserva)
                .orElseThrow(() -> new RuntimeException("Reserva não encontrada com ID: " + idReserva));

        Usuario usuarioLogado = usuarioRepository.findByEmail(emailUsuarioLogado);
        if (usuarioLogado == null) {
            throw new RuntimeException("Usuário não autenticado.");
        }

        boolean temPermissao = (usuarioLogado.getTipo() == TipoUsuario.CLIENTE && reserva.getCliente().getUsuario().getEmail().equals(emailUsuarioLogado)) ||
                               (usuarioLogado.getTipo() == TipoUsuario.RESTAURANTE && reserva.getRestaurante().getUsuario().getEmail().equals(emailUsuarioLogado));

        if (!temPermissao) {
            throw new SecurityException("Usuário não tem permissão para atualizar esta reserva.");
        }

        if (reserva.getStatus() != StatusReserva.ATIVA && reserva.getStatus() != StatusReserva.PENDENTE && reserva.getStatus() != StatusReserva.CONFIRMADA) {
             throw new IllegalStateException("Apenas reservas ativas, pendentes ou confirmadas podem ser atualizadas. Status atual: " + reserva.getStatus());
        }

        if (requestDto.getDataReserva() != null) {
            reserva.setDataReserva(parseData(requestDto.getDataReserva()));
        }
        if (requestDto.getHorarioReserva() != null) {
            reserva.setHoraReserva(parseHora(requestDto.getHorarioReserva()));
        }
        if (requestDto.getQuantidadePessoasReserva() > 0) {
            reserva.setQuantidadePessoas(requestDto.getQuantidadePessoasReserva());
        }
        if (requestDto.getComentariosPreferenciaReserva() != null) {
            reserva.setObservacoes(requestDto.getComentariosPreferenciaReserva());
        }

        // <<< LÓGICA ATUALIZADA PARA ASSOCIAR MÚLTIPLAS MESAS NA ATUALIZAÇÃO >>>
        if (requestDto.getIdsMesas() != null) {
            if (requestDto.getIdsMesas().isEmpty()) {
                reserva.setMesas(Collections.emptyList()); // Permite remover todas as mesas
            } else {
                List<Mesa> mesasEncontradas = mesaRepository.findAllById(requestDto.getIdsMesas());
                if (mesasEncontradas.size() != requestDto.getIdsMesas().size()) {
                    throw new RuntimeException("Uma ou mais mesas solicitadas para a atualização não foram encontradas.");
                }
                reserva.setMesas(mesasEncontradas);
            }
        }

        validarDataHoraReserva(reserva.getDataReserva(), reserva.getHoraReserva());
        validarQuantidadePessoas(reserva.getQuantidadePessoas());

        Reserva reservaAtualizada = reservaRepository.save(reserva);
        return new ReservaResponse(reservaAtualizada);
    }

    // Métodos utilitários de validação (privados)
    private LocalDate parseData(String dataStr) {
        try {
            return LocalDate.parse(dataStr, DATE_FORMATTER);
        } catch (DateTimeParseException e) {
            throw new IllegalArgumentException("Formato de data inválido. Use yyyy-MM-dd.", e);
        }
    }

    private LocalTime parseHora(String horaStr) {
        try {
            return LocalTime.parse(horaStr, TIME_FORMATTER);
        } catch (DateTimeParseException e) {
            throw new IllegalArgumentException("Formato de horário inválido. Use HH:mm.", e);
        }
    }
    
    private void validarDataHoraReserva(LocalDate data, LocalTime hora) {
        if (data.isBefore(LocalDate.now()) || (data.isEqual(LocalDate.now()) && hora.isBefore(LocalTime.now()))) {
            throw new IllegalArgumentException("Não é possível fazer ou alterar reservas para datas ou horários passados.");
        }
    }

    private void validarQuantidadePessoas(int qtd) {
        if (qtd <= 0) {
            throw new IllegalArgumentException("Quantidade de pessoas deve ser maior que zero.");
        }
    }
}