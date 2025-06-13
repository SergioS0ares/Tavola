export interface IReserva {
  id: string;
  clienteId: string;
  cliente: string;
  mesaIds: string[];
  data: Date;
  horario: string;
  periodo: "Almoço" | "Jantar";
  pessoas: number;
  status: "confirmada" | "pendente" | "cancelada" | "finalizada" | "ausente" | "espera";
  preferencias: string;
  restaurante: string;
  emailCliente: string;
  telefoneCliente: string;
  imagemPerfilCliente: string | null;
  nomesMesas: string[] | null;
} 