import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class RestauranteService {
  private restaurantes = [
    { id: '1', nome: 'L\'Osteria Paris Chatelet', tipo: 'Italiano', avaliacao: 8.0, imagem: 'assets/jpg/restauranteOsso.jpg', endereco: 'Rua Fictícia, 123', cidade: 'Paris', estado: 'França', cep: '12345', coordenadas: { latitude: 48.8566, longitude: 2.3522 } },
    { id: '2', nome: 'Café Terry', tipo: 'Francês', avaliacao: 5.0, imagem: 'assets/jpg/restauranteOsso.jpg', endereco: 'Avenida Imaginária, 456', cidade: 'Paris', estado: 'França', cep: '67890', coordenadas: { latitude: 48.8584, longitude: 2.2945 } },
    { id: '3', nome: 'Les Rupins', tipo: 'Francês', avaliacao: 3.8, imagem: 'assets/jpg/restauranteOsso.jpg', endereco: 'Praça Inexistente, 789', cidade: 'Paris', estado: 'França', cep: '13579', coordenadas: { latitude: 48.8738, longitude: 2.2950 } },
    { id: '4', nome: 'L\'Imperatif', tipo: 'Francês', avaliacao: 2.2, imagem: 'assets/jpg/restauranteOsso.jpg', endereco: 'Travessa Falsa, 101', cidade: 'Paris', estado: 'França', cep: '24680', coordenadas: { latitude: 48.8667, longitude: 2.3565 } }
  ];

  findById(id: string): Observable<any> {
    const restaurante = this.restaurantes.find(r => r.id === id);
    return of(restaurante);
  }

  getRestaurantImages(id: string): Observable<string[]> {
    return of(['assets/jpg/restauranteModelo.jpg', 'assets/jpg/restauranteModelo.jpg', 'assets/jpg/restauranteModelo.jpg']);
  }

  criarReserva(reservaData: any): Observable<any> {
    console.log('Mock: Criando reserva com dados:', reservaData);
    return of({ success: true, message: 'Reserva mock criada com sucesso!' });
  }
}
