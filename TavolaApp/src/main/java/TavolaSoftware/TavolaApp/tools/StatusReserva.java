package TavolaSoftware.TavolaApp.tools;

public enum StatusReserva {
    PENDENTE,       // Reserva feita, aguardando confirmação (se aplicável) ou início
    CONFIRMADA,     // Reserva confirmada pelo restaurante (se houver fluxo de confirmação)
    ATIVA,          // Reserva está vigente para o dia/hora (uma simplificação de pendente/confirmada)
    CANCELADA_CLIENTE,
    CANCELADA_RESTAURANTE,
    CONCLUIDA,      // Cliente compareceu
    NAO_COMPARECEU  // Cliente não compareceu (No-show)
}