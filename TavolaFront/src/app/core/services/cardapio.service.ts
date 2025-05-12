import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, tap } from 'rxjs';
import { IItemCardapio } from '../../Interfaces/IItem-cardapio';
import { environment } from '../../../environments/environment';

@Injectable({ providedIn: 'root' })
export class CardapioService {
  private apiUrl = `${environment.apiUrl}/auth/cardapios`;

  constructor(private http: HttpClient) {}

  listarItens(): Observable<IItemCardapio[]> {
    return this.http.get<IItemCardapio[]>(`${this.apiUrl}/restaurante`);
  }

  listarDisponiveis(): Observable<IItemCardapio[]> {
    return this.http.get<IItemCardapio[]>(`${this.apiUrl}/disponiveis`);
  }

  buscarPorId(id: string): Observable<IItemCardapio> {
    return this.http.get<IItemCardapio>(`${this.apiUrl}/${id}`);
  }

  adicionarItem(item: Omit<IItemCardapio, 'id'>): Observable<IItemCardapio> {
    return this.http.post<IItemCardapio>(`${this.apiUrl}/save`, item);
  }

  adicionarMultiplosItens(itens: Omit<IItemCardapio, 'id'>[]): Observable<IItemCardapio[]> {
    return this.http.post<IItemCardapio[]>(`${this.apiUrl}/save/multi`, itens);
  }

  atualizarItem(id: string, item: IItemCardapio): Observable<IItemCardapio> {
    return this.http.put<IItemCardapio>(`${this.apiUrl}/update/${id}`, item);
  }

  removerItem(id: string): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
