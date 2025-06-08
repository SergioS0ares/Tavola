import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { environment } from '../../../environments/environment';
import { IRestaurante } from '../../Interfaces/IRestaurante.interface';
import { map } from 'rxjs/operators';

export interface IUpdateRestaurantePayload {
  tipoCozinha?: string;
  descricao?: string;
  horariosFuncionamento?: { diaSemana: string; abertura: string; fechamento: string }[];
  nomesServicos?: string[];
  imagens?: string[];
  
  // Campos de usuário para atualização de restaurante
  nomeUsuario?: string;
  emailUsuario?: string;
  senhaUsuario?: string;
  telefoneUsuario?: string;
  enderecoUsuario?: {
    cep: string;
    estado: string;
    cidade: string;
    bairro: string;
    rua: string;
    numero: string;
    complemento?: string;
  };
}

@Injectable({ providedIn: 'root' })
export class RestauranteService {
  private http = inject(HttpClient);
  // URL base da sua API, pode vir do environment
  private apiUrl = `${environment.apiUrl}/auth/restaurantes`;

  getRestaurantes(): Observable<IRestaurante[]> {
    return this.http.get<IRestaurante[]>(this.apiUrl);
  }

  findById(id: string): Observable<IRestaurante> {
    return this.http.get<IRestaurante>(`${this.apiUrl}/${id}`);
  }

  getRestaurantImages(id: string): Observable<string[]> {
    return of(['assets/jpg/restauranteModelo.jpg', 'assets/jpg/restauranteModelo.jpg', 'assets/jpg/restauranteModelo.jpg']);
  }

  criarReserva(reservaData: any): Observable<any> {
    console.log('Mock: Criando reserva com dados:', reservaData);
    return of({ success: true, message: 'Reserva mock criada com sucesso!' });
  }

  favoritarRestaurante(id: string) {
    return this.http.post(`${this.apiUrl.replace('/auth/restaurantes','/auth/clientes/favoritar')}/${id}`, {});
  }

  updateRestaurante(payload: IUpdateRestaurantePayload): Observable<any> {
    return this.http.put(`${this.apiUrl}/update`, payload);
  }

  deleteRestaurante(): Observable<any> {
    return this.http.delete(`${this.apiUrl}`);
  }
}