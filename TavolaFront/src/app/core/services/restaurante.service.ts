import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class RestauranteService {
  private restaurantes = [
    { id: '1', nome: 'L\'Osteria Paris Chatelet', tipo: 'Italiano', avaliacao: 8.0, imagem: 'assets/jpg/restauranteOsso.jpg' },
    { id: '2', nome: 'Café Terry', tipo: 'Francês', avaliacao: 5.0, imagem: 'assets/jpg/restauranteOsso.jpg' },
    { id: '3', nome: 'Les Rupins', tipo: 'Francês', avaliacao: 3.8, imagem: 'assets/jpg/restauranteOsso.jpg' },
    { id: '4', nome: 'L\'Imperatif', tipo: 'Francês', avaliacao: 2.2, imagem: 'assets/jpg/restauranteOsso.jpg' }
  ];

  findById(id: string): Observable<any> {
    const restaurante = this.restaurantes.find(r => r.id === id);
    return of(restaurante);
  }
}
