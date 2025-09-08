import {
  environment
} from "./chunk-ESXVDBVT.js";
import {
  HttpClient
} from "./chunk-IOJADCVY.js";
import {
  BehaviorSubject,
  Injectable,
  inject,
  of,
  setClassMetadata,
  tap,
  ɵɵdefineInjectable
} from "./chunk-CO622P43.js";

// src/app/core/services/restaurante.service.ts
var RestauranteService = class _RestauranteService {
  constructor() {
    this.http = inject(HttpClient);
    this.apiUrl = `${environment.apiUrl}/auth/restaurantes`;
    this._allRestaurants = new BehaviorSubject([]);
    this.allRestaurants$ = this._allRestaurants.asObservable();
    this._allCities = new BehaviorSubject([]);
    this.allCities$ = this._allCities.asObservable();
    this._allCuisines = new BehaviorSubject([]);
    this.allCuisines$ = this._allCuisines.asObservable();
    this.getRestaurantes().subscribe();
  }
  // Helper to process restaurant data and update subjects
  processAndSetRestaurantData(restaurants) {
    this._allRestaurants.next(restaurants);
    const citiesSet = /* @__PURE__ */ new Set();
    const cuisinesSet = /* @__PURE__ */ new Set();
    restaurants.forEach((r) => {
      if (r.endereco?.cidade) {
        citiesSet.add(r.endereco.cidade);
      }
      if (r.tipoCozinha) {
        cuisinesSet.add(r.tipoCozinha);
      }
    });
    this._allCities.next(Array.from(citiesSet).sort());
    this._allCuisines.next(Array.from(cuisinesSet).sort());
  }
  getRestaurantes() {
    return this.http.get(this.apiUrl).pipe(tap((restaurants) => this.processAndSetRestaurantData(restaurants)));
  }
  findById(id) {
    return this.http.get(`${this.apiUrl}/${id}`);
  }
  getRestaurantImages(id) {
    return of(["assets/jpg/restauranteModelo.jpg", "assets/jpg/restauranteModelo.jpg", "assets/jpg/restauranteModelo.jpg"]);
  }
  criarReserva(reservaData) {
    console.log("Mock: Criando reserva com dados:", reservaData);
    return of({ success: true, message: "Reserva mock criada com sucesso!" });
  }
  favoritarRestaurante(id) {
    return this.http.post(`${this.apiUrl.replace("/auth/restaurantes", "/auth/clientes/favoritar")}/${id}`, {});
  }
  updateRestaurante(payload) {
    return this.http.put(`${this.apiUrl}/update`, payload);
  }
  deleteRestaurante() {
    return this.http.delete(`${this.apiUrl}`);
  }
  getRestaurantesPorCidade(cidade) {
    return this.http.get(`${this.apiUrl}/por-cidade?cidade=${cidade}`);
  }
  getPesquisarRestaurantes(termo, pagina = 0, tamanho = 10) {
    return this.http.get(`${this.apiUrl}/pesquisar?termo=${termo}&pagina=${pagina}&tamanho=${tamanho}`);
  }
  static {
    this.\u0275fac = function RestauranteService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _RestauranteService)();
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _RestauranteService, factory: _RestauranteService.\u0275fac, providedIn: "root" });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(RestauranteService, [{
    type: Injectable,
    args: [{ providedIn: "root" }]
  }], () => [], null);
})();

export {
  RestauranteService
};
//# sourceMappingURL=chunk-2QDEYY6F.js.map
