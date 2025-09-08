import {
  HttpClient
} from "./chunk-IOJADCVY.js";
import {
  Injectable,
  Observable,
  __async,
  setClassMetadata,
  ɵɵdefineInjectable,
  ɵɵinject
} from "./chunk-CO622P43.js";

// src/app/core/services/maps.service.ts
var MapsService = class _MapsService {
  constructor(http) {
    this.http = http;
    this.googleMapsApiKey = "AIzaSyCUDeZfumwzHU8nU1iPvX2s6C0tAZYEaxQ";
    this.geocoder = new google.maps.Geocoder();
  }
  getCoordinatesFromAddress(address) {
    return new Observable((observer) => {
      this.geocoder.geocode({ address }, (results, status) => {
        if (status === google.maps.GeocoderStatus.OK && results && results[0]) {
          const location = results[0].geometry.location;
          observer.next({ lat: location.lat(), lng: location.lng() });
          observer.complete();
        } else {
          observer.error(`A geocodifica\xE7\xE3o falhou pelo seguinte motivo: ${status}`);
        }
      });
    });
  }
  mostrarRotaNoGoogleMaps(destino) {
    return __async(this, null, function* () {
      try {
        const origem = yield this.obterLocalizacaoAtual();
        this.abrirGoogleMapsComRota(origem, destino);
      } catch (error) {
        console.warn("N\xE3o foi poss\xEDvel obter a localiza\xE7\xE3o atual. Usando origem padr\xE3o (Goi\xE2nia).");
        const origemPadrao = { lat: -16.6869, lng: -49.2648 };
        this.abrirGoogleMapsComRota(origemPadrao, destino);
      }
    });
  }
  obterLocalizacaoAtual() {
    return new Promise((resolve, reject) => {
      if (!navigator.geolocation) {
        return reject("Geolocaliza\xE7\xE3o n\xE3o \xE9 suportada pelo navegador.");
      }
      navigator.geolocation.getCurrentPosition((position) => resolve({
        lat: position.coords.latitude,
        lng: position.coords.longitude
      }), () => reject("Erro ao obter localiza\xE7\xE3o."), { enableHighAccuracy: true, timeout: 1e4, maximumAge: 0 });
    });
  }
  // **MÉTODO CORRIGIDO PARA ABRIR O MAPS**
  abrirGoogleMapsComRota(origem, destino) {
    const url = `https://www.google.com/maps/dir/?api=1&origin=${origem.lat},${origem.lng}&destination=${destino.lat},${destino.lng}&travelmode=driving`;
    window.open(url, "_blank");
  }
  static {
    this.\u0275fac = function MapsService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _MapsService)(\u0275\u0275inject(HttpClient));
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _MapsService, factory: _MapsService.\u0275fac, providedIn: "root" });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MapsService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{ type: HttpClient }], null);
})();

export {
  MapsService
};
//# sourceMappingURL=chunk-TYB57TMG.js.map
