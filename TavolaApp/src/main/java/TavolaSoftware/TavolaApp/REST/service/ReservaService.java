package TavolaSoftware.TavolaApp.REST.service;

import TavolaSoftware.TavolaApp.REST.dto.ReservaRequest;
import TavolaSoftware.TavolaApp.REST.dto.ReservaResponse;
import TavolaSoftware.TavolaApp.REST.model.Cliente;
import TavolaSoftware.TavolaApp.REST.model.Reserva;
import TavolaSoftware.TavolaApp.REST.model.Restaurante;
import TavolaSoftware.TavolaApp.REST.model.Usuario; // Para pegar o tipo de usuário
import TavolaSoftware.TavolaApp.REST.repository.ClienteRepository;
import TavolaSoftware.TavolaApp.REST.repository.ReservaRepository;
import TavolaSoftware.TavolaApp.REST.repository.RestauranteRepository;
import TavolaSoftware.TavolaApp.REST.repository.UsuarioRepository; // Para buscar o usuário
import TavolaSoftware.TavolaApp.tools.StatusReserva;
import TavolaSoftware.TavolaApp.tools.TipoUsuario; // Enum TipoUsuario

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.time.LocalDate;
import java.time.LocalTime;
import java.time.format.DateTimeFormatter;
import java.time.format.DateTimeParseException;
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
    private UsuarioRepository usuarioRepository; // Para verificar o tipo de usuário


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
        novaReserva.setStatus(StatusReserva.ATIVA); // Status inicial

        Reserva reservaSalva = reservaRepository.save(novaReserva);
        return new ReservaResponse(reservaSalva);
    }

    // Método para buscar uma reserva por ID
    public Optional<ReservaResponse> findById(UUID idReserva) {
        return reservaRepository.findById(idReserva).map(ReservaResponse::new);
    }
    
    // Métodos de listagem (já adaptados para ReservaResponse na sugestão anterior)
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
        // Adicionar lógica para ADMIN se necessário

        if (!podeCancelar) {
            throw new SecurityException("Usuário não tem permissão para cancelar esta reserva.");
        }

        if (reserva.getStatus() == StatusReserva.CANCELADA_CLIENTE || reserva.getStatus() == StatusReserva.CANCELADA_RESTAURANTE || reserva.getStatus() == StatusReserva.CONCLUIDA) {
            throw new IllegalStateException("Esta reserva não pode ser cancelada pois já está " + reserva.getStatus().toString().toLowerCase() + ".");
        }
        
        // Não permitir cancelamento de reservas muito próximas ao horário (ex: 2 horas antes) - opcional
        // if (LocalDateTime.of(reserva.getDataReserva(), reserva.getHoraReserva()).isBefore(LocalDateTime.now().plusHours(2))) {
        //     throw new IllegalStateException("Não é possível cancelar a reserva com menos de 2 horas de antecedência.");
        // }

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

        // Verifica permissão (cliente dono da reserva OU restaurante da reserva)
        boolean temPermissao = false;
        if (usuarioLogado.getTipo() == TipoUsuario.CLIENTE && reserva.getCliente().getUsuario().getEmail().equals(emailUsuarioLogado)) {
            temPermissao = true;
        } else if (usuarioLogado.getTipo() == TipoUsuario.RESTAURANTE && reserva.getRestaurante().getUsuario().getEmail().equals(emailUsuarioLogado)) {
            temPermissao = true;
        }

        if (!temPermissao) {
            throw new SecurityException("Usuário não tem permissão para atualizar esta reserva.");
        }

        if (reserva.getStatus() != StatusReserva.ATIVA && reserva.getStatus() != StatusReserva.PENDENTE && reserva.getStatus() != StatusReserva.CONFIRMADA) {
             throw new IllegalStateException("Apenas reservas ativas, pendentes ou confirmadas podem ser atualizadas. Status atual: " + reserva.getStatus());
        }

        // Validações dos dados do request
        LocalDate novaDataReserva = requestDto.getDataReserva() != null ? parseData(requestDto.getDataReserva()) : reserva.getDataReserva();
        LocalTime novaHoraReserva = requestDto.getHorarioReserva() != null ? parseHora(requestDto.getHorarioReserva()) : reserva.getHoraReserva();
        int novaQuantidadePessoas = requestDto.getQuantidadePessoasReserva() > 0 ? requestDto.getQuantidadePessoasReserva() : reserva.getQuantidadePessoas();

        // Apenas atualiza se houve mudança e valida
        if (requestDto.getDataReserva() != null || requestDto.getHorarioReserva() != null) {
            validarDataHoraReserva(novaDataReserva, novaHoraReserva); // Valida se a nova data/hora é no futuro
        }
        if (requestDto.getQuantidadePessoasReserva() > 0) {
            validarQuantidadePessoas(novaQuantidadePessoas);
        }

        // Atualiza os campos da reserva
        reserva.setDataReserva(novaDataReserva);
        reserva.setHoraReserva(novaHoraReserva);
        reserva.setQuantidadePessoas(novaQuantidadePessoas);

        if (requestDto.getComentariosPreferenciaReserva() != null) {
            reserva.setObservacoes(requestDto.getComentariosPreferenciaReserva());
        }
        
        // O ID do restaurante não deve ser alterado numa atualização de reserva. Se for preciso, é uma nova reserva.

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