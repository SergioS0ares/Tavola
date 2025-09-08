import {
  environment
} from "./chunk-ESXVDBVT.js";
import {
  HttpClient
} from "./chunk-IOJADCVY.js";
import {
  Injectable,
  setClassMetadata,
  ɵɵdefineInjectable,
  ɵɵinject
} from "./chunk-CO622P43.js";

// src/app/core/services/cardapio.service.ts
var CardapioService = class _CardapioService {
  constructor(http) {
    this.http = http;
    this.apiUrl = `${environment.apiUrl}/auth/cardapios`;
  }
  listarItens() {
    return this.http.get(`${this.apiUrl}`);
  }
  adicionarItem(item) {
    return this.http.post(`${this.apiUrl}/save`, item);
  }
  atualizarItem(id, item) {
    return this.http.put(`${this.apiUrl}/update/${id}`, item);
  }
  removerItem(id) {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
  listarItensPorRestaurante(idRestaurante) {
    return this.http.get(`${this.apiUrl}/disponiveis/${idRestaurante}`);
  }
  static {
    this.\u0275fac = function CardapioService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _CardapioService)(\u0275\u0275inject(HttpClient));
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _CardapioService, factory: _CardapioService.\u0275fac, providedIn: "root" });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CardapioService, [{
    type: Injectable,
    args: [{ providedIn: "root" }]
  }], () => [{ type: HttpClient }], null);
})();

export {
  CardapioService
};
//# sourceMappingURL=chunk-JOZUD3WC.js.map
