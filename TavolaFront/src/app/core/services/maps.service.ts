// src/app/core/services/maps.service.ts
import { Injectable } from "@angular/core"
import { HttpClient } from "@angular/common/http" // Certifique-se de que HttpClient está injetado se for usar getCoordinatesFromAddress
import { Observable } from "rxjs"
import { map } from "rxjs/operators"

@Injectable({
  providedIn: "root",
})
export class MapsService {
  constructor(private http: HttpClient) {} // Mantenha HttpClient se usar getCoordinatesFromAddress

  // Adicione sua chave da API do Google Maps aqui
  private googleMapsApiKey = 'AIzaSyCUDeZfumwzHU8nU1iPvX2s6C0tAZYEaxQ';

  /**
   * Converte uma string de endereço em coordenadas de latitude e longitude usando a API de Geocoding do Google Maps.
   * @param address A string do endereço.
   * @returns Um Observable que emite um objeto com lat e lng, ou um erro se a geocodificação falhar.
   */
  getCoordinatesFromAddress(address: string): Observable<{ lat: number; lng: number }> {
    const url = `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURIComponent(address)}&key=${this.googleMapsApiKey}`;

    return this.http.get<any>(url).pipe(
      map(response => {
        if (response.results && response.results.length > 0) {
          const location = response.results[0].geometry.location;
          return { lat: location.lat, lng: location.lng };
        } else {
          throw new Error('Geocoding failed: No results found');
        }
      })
    );
  }

  /**
   * Abre o Google Maps com a rota da localização atual para o destino
   */
  async mostrarRotaNoGoogleMaps(destino: { lat: number; lng: number }): Promise<void> {
    try {
      // Tentar obter localização atual
      const origem = await this.obterLocalizacaoAtual()
      this.abrirGoogleMapsComRota(origem, destino)
    } catch (error) {
      // Se não conseguir obter localização, usar localização padrão de Goiânia
      const origemPadrao = { lat: -16.6869, lng: -49.2648 } // Goiânia
      this.abrirGoogleMapsComRota(origemPadrao, destino)
    }
  }

  /**
   * Obtém a localização atual do usuário
   */
  private async obterLocalizacaoAtual(): Promise<{ lat: number; lng: number }> {
    return new Promise((resolve, reject) => {
      if (!navigator.geolocation) {
        reject("Geolocalização não é suportada pelo navegador")
        return
      }

      navigator.geolocation.getCurrentPosition(
        (position) => {
          resolve({
            lat: position.coords.latitude,
            lng: position.coords.longitude,
          })
        },
        (error) => {
          reject("Erro ao obter localização")
        },
        {
          enableHighAccuracy: true,
          timeout: 5000,
          maximumAge: 60000,
        },
      )
    })
  }

  /**
   * Abre o Google Maps com a rota
   */
  private abrirGoogleMapsComRota(origem: { lat: number; lng: number }, destino: { lat: number; lng: number }): void {
    // Formato correto para abrir rotas no Google Maps
    const url = `https://www.google.com/maps/dir/?api=1&origin=${origem.lat},${origem.lng}&destination=${destino.lat},${destino.lng}&travelmode=driving`;
    window.open(url, "_blank")
  }
}