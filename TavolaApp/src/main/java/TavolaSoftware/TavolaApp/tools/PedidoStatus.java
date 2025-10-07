package TavolaSoftware.TavolaApp.tools;

public enum PedidoStatus {
    AGUARDANDO_ATENDIMENTO, // O cliente chamou o garçom, mas ainda não fez um pedido
    PENDENTE,               // O cliente fez um pedido de item, aguardando ação
    EM_PREPARO,             // Status futuro para a Cozinha usar
    PRONTO,                 // Status futuro para a Cozinha usar
    ENTREGUE,               // O garçom entregou o item/atendeu ao chamado
    CANCELADO;              // O pedido/chamado foi cancelado
}