export interface IReservaHistorico {
    idReserva: string;
    idRestaurante: string;
    nomeRestaurante: string;
    imagemRestaurante: string | null;
    enderecoResumido: string;
    data: string;
    horario: string;
    quantidadePessoas: number;
    status: 'CONFIRMADA' | 'CONCLUÍDA' | 'CANCELADA';
    comentariosPreferenciaReserva?: string;
  }