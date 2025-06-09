import { IMesa } from './IMesa.interface';
import { ICliente } from './ICliente.interface';

export interface IDialogGerenciarMesasData {
  modo: 'criar' | 'editar';
  mesa?: IMesa | null;
  areas: string[];
  clientesDoDia: ICliente[];
} 