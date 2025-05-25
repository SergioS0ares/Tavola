import { Injectable } from "@angular/core"

@Injectable({
  providedIn: "root",
})
export class MapsService {
  constructor() {}

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
    const url = `https://www.google.com/maps/dir/${origem.lat},${origem.lng}/${destino.lat},${destino.lng}`
    window.open(url, "_blank")
  }
}
