import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({ providedIn: 'root' })
export class RestauranteService {
  private apiUrl = 'http://localhost:8080/auth/restaurantes';

  constructor(private http: HttpClient) {}

  getRestaurantes(): Observable<any[]> {
    return new Observable(observer => {
      this.http.get<any[]>(this.apiUrl).subscribe({
        next: (restaurantes) => {
          // Garante imagem default se não houver
          const result = restaurantes.map(r => {
            const e = r.endereco || {};
            const enderecoFormatado = `${e.rua || ''}, ${e.numero || ''}, ${e.bairro || ''}, ${e.cidade || ''} - ${e.estado || ''}, ${e.cep || ''}`.replace(/(, )+/g, ', ').replace(/^, |, $/g, '').trim();
            return {
              ...r,
              imagem: r.imagem && r.imagem.length > 0 ? r.imagem : 'assets/jpg/restauranteOsso.jpg',
              avaliacao: r.mediaAvaliacao ?? 0,
              enderecoFormatado
            };
          });
          observer.next(result);
          observer.complete();
        },
        error: (err) => observer.error(err)
      });
    });
  }

  findById(id: string): Observable<any> {
    // Para manter compatibilidade, busca todos e filtra
    return new Observable(observer => {
      this.getRestaurantes().subscribe({
        next: (restaurantes) => {
          const restaurante = restaurantes.find(r => r.id === id);
          observer.next(restaurante);
          observer.complete();
        },
        error: (err) => observer.error(err)
      });
    });
  }

  getRestaurantImages(id: string): Observable<string[]> {
    return new Observable(observer => {
      observer.next(['assets/jpg/restauranteModelo.jpg', 'assets/jpg/restauranteModelo.jpg', 'assets/jpg/restauranteModelo.jpg']);
      observer.complete();
    });
  }

  criarReserva(reservaData: any): Observable<any> {
    return new Observable(observer => {
      observer.next({ success: true, message: 'Reserva mock criada com sucesso!' });
      observer.complete();
    });
  }
}
