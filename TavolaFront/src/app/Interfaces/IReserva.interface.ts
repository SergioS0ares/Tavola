export interface IReserva {
  id: string;
  clienteId: string;
  clienteNome: string;
  mesaIds: string[];
  data: Date;
  horario: string;
  periodo: "Almoço" | "Jantar";
  pessoas: number;
  status: "confirmada" | "pendente" | "cancelada" | "finalizada" | "ausente" | "espera";
  preferencias: string;
  oferta?: string;
  desconto?: string;
} 