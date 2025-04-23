import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { IItemCardapio } from '../Interfaces/Iitem-cardapio';

@Injectable({ providedIn: 'root' })
export class CardapioService {
  private mock: IItemCardapio[] = [
    { id: '1', nome: 'Risotto de Funghi', preco: 42.5, disponivel: true },
    { id: '2', nome: 'Salada Caesar',    preco: 28.0, disponivel: true },
  ];
  private itens$$ = new BehaviorSubject<IItemCardapio[]>(this.mock);

  listarItens(): Observable<IItemCardapio[]> {
    return this.itens$$.asObservable();
  }

  adicionarItem(item: Omit<IItemCardapio,'id'>): void {
    const novo = { ...item, id: this.gerarId() };
    this.itens$$.next([...this.itens$$.value, novo]);
  }

  atualizarItem(item: IItemCardapio): void {
    const lista = this.itens$$.value.map(i => i.id === item.id ? item : i);
    this.itens$$.next(lista);
  }

  removerItem(id: string): void {
    this.itens$$.next(this.itens$$.value.filter(i => i.id !== id));
  }

  enviarListaParaBackend(lista: IItemCardapio[]): Observable<{success: boolean}> {
    console.log('Enviando pro servidor:', lista);
    return of({ success: true });
  }

  private gerarId(): string {
    return Math.random().toString(36).slice(2, 9);
  }
}
