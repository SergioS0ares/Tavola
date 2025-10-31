import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';

export interface DadosAvaliacao {
  nota: number;
  comentario: string;
}

export interface AvaliacaoPayload {
  score: number;
  comentario: string;
}

@Injectable({
  providedIn: 'root'
})
export class AvaliacaoService {
  private apiUrl = `${environment.apiUrl}/auth/clientes/avaliar`;

  constructor(private http: HttpClient) {}

  /**
   * Envia uma avaliação para o backend
   */
  enviarAvaliacao(idReserva: string, dados: DadosAvaliacao): Observable<any> {
    const payload: AvaliacaoPayload = {
      score: dados.nota,
      comentario: dados.comentario
    };

    return this.http.post<any>(`${this.apiUrl}/${idReserva}`, payload);
  }
}
