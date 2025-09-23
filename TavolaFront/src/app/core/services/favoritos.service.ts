import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';

export interface IFavorito {
  idRestaurante: string;
  nomeRestaurante: string;
  imagemRestaurante: string | null;
  enderecoResumido: string;
  tipoCozinha: string;
  mediaAvaliacao: number;
  totalDeAvaliacoes: number;
  valorMedioPorPessoa: number;
}

@Injectable({ providedIn: 'root' })
export class FavoritosService {
  private apiUrl = `${environment.apiUrl}/auth/clientes`;

  constructor(private http: HttpClient) {}

  getFavoritos(): Observable<IFavorito[]> {
    return this.http.get<IFavorito[]>(`${this.apiUrl}/favoritos`);
  }
}
