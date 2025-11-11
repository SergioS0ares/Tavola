import { IMesa } from './IMesa.interface';
import { IReserva } from './IReserva.interface';

export interface IMesaDashboard {
  mesa: IMesa;
  reservas: IReserva[];
  atendimentos: IAtendimentoDashboard[];
}

export interface IAtendimentoDashboard {
  id: string;
  garcomId?: string;
  inicioAtendimento?: Date | string;
  fimAtendimento?: Date | string;
  status: string;
}

export interface IAmbienteDashboard {
  id: string;
  nome: string;
  mesas: IMesaDashboard[];
}
