export interface IMesa {
  id: string;
  numero: string;
  tipo: "retangular" | "circular";
  area: string;
  vip: boolean;
  ocupada: boolean;
  reservaId?: string;
  capacidade?: number;
  cliente?: any; // Para uso opcional em dialogs
} 