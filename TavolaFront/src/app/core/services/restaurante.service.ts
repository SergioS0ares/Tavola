import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of, BehaviorSubject } from 'rxjs';
import { environment } from '../../../environments/environment';
import { IRestaurante } from '../../Interfaces/IRestaurante.interface';
import { map, tap } from 'rxjs/operators';

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

  // NEW: BehaviorSubjects for centralized data
  private _allRestaurants = new BehaviorSubject<IRestaurante[]>([]);
  public allRestaurants$: Observable<IRestaurante[]> = this._allRestaurants.asObservable();

  private _allCities = new BehaviorSubject<string[]>([]);
  public allCities$: Observable<string[]> = this._allCities.asObservable();

  private _allCuisines = new BehaviorSubject<string[]>([]);
  public allCuisines$: Observable<string[]> = this._allCuisines.asObservable();

  constructor() {
    // Initial fetch of restaurants to populate subjects
    // This ensures data is loaded when the service is instantiated
    this.getRestaurantes().subscribe(); 
  }

  // Helper to process restaurant data and update subjects
  private processAndSetRestaurantData(restaurants: IRestaurante[]): void {
    this._allRestaurants.next(restaurants);

    const citiesSet = new Set<string>();
    const cuisinesSet = new Set<string>();

    restaurants.forEach(r => {
      if (r.endereco?.cidade) { 
        citiesSet.add(r.endereco.cidade); // Only city, as per user request
      }
      if (r.tipoCozinha) {
        cuisinesSet.add(r.tipoCozinha);
      }
    });

    this._allCities.next(Array.from(citiesSet).sort());
    // Adjusted to only emit fetched cuisines
    this._allCuisines.next(Array.from(cuisinesSet).sort());
  }

  getRestaurantes(): Observable<IRestaurante[]> {
    // Use tap to update BehaviorSubject after fetching
    return this.http.get<IRestaurante[]>(this.apiUrl).pipe(
      tap(restaurants => this.processAndSetRestaurantData(restaurants))
    );
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

  getRestaurantesPorCidade(cidade: string): Observable<IRestaurante[]> {
    return this.http.get<IRestaurante[]>(`${this.apiUrl}/por-cidade?cidade=${cidade}`);
  }

  getPesquisarRestaurantes(termo: string, pagina: number = 0, tamanho: number = 10): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/pesquisar?termo=${termo}&pagina=${pagina}&tamanho=${tamanho}`);
  }
}