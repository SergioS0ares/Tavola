import { Injectable } from '@angular/core';
import { Observable, of, delay } from 'rxjs';

export interface AvaliacaoPendente {
  idReserva: string;
  nomeRestaurante: string;
  dataReserva: string;
}

export interface DadosAvaliacao {
  nota: number;
  comentario: string;
}

@Injectable({
  providedIn: 'root'
})
export class AvaliacaoService {

  constructor() { }

  /**
   * Busca avaliações pendentes (mock)
   * Retorna uma lista simulada de avaliações pendentes
   */
  getAvaliacoesPendentes(): Observable<AvaliacaoPendente[]> {
    // Mock de dados - simula 2-3 avaliações pendentes
    const avaliacoesMock: AvaliacaoPendente[] = [
      {
        idReserva: 'reserva-001',
        nomeRestaurante: 'Restaurante Sabor & Arte',
        dataReserva: '2024-01-15'
      },
      {
        idReserva: 'reserva-002', 
        nomeRestaurante: 'Cantina Italiana',
        dataReserva: '2024-01-18'
      },
      {
        idReserva: 'reserva-003',
        nomeRestaurante: 'Sushi Master',
        dataReserva: '2024-01-20'
      }
    ];

    // Simula delay de rede de 500ms
    return of(avaliacoesMock).pipe(delay(500));
  }

  /**
   * Envia uma avaliação (mock)
   * Simula o envio de uma avaliação para o backend
   */
  enviarAvaliacao(idReserva: string, dados: DadosAvaliacao): Observable<{ success: boolean; message: string }> {
    // Mock de resposta de sucesso
    const response = {
      success: true,
      message: 'Avaliação enviada com sucesso!'
    };

    // Simula delay de rede de 800ms
    return of(response).pipe(delay(800));
  }
}
