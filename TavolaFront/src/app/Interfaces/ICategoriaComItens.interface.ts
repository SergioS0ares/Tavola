import { IItemCardapio } from "./Iitem-cardapio";

export interface ICategoriaComItens {
    id: string;
    nome: string;
    itens: IItemCardapio[];
  }