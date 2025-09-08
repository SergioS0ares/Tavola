import {
  environment
} from "./chunk-ESXVDBVT.js";
import {
  HttpClient
} from "./chunk-IOJADCVY.js";
import {
  Injectable,
  inject,
  setClassMetadata,
  ɵɵdefineInjectable
} from "./chunk-CO622P43.js";

// src/app/core/services/cliente.service.ts
var ClienteService = class _ClienteService {
  constructor() {
    this.http = inject(HttpClient);
    this.apiUrl = `${environment.apiUrl}/auth/clientes`;
  }
  getCliente() {
    return this.http.get(`${this.apiUrl}/get`);
  }
  updateCliente(payload) {
    return this.http.put(`${this.apiUrl}/self/update`, payload);
  }
  deleteCliente() {
    return this.http.delete(`${this.apiUrl}/delete`);
  }
  static {
    this.\u0275fac = function ClienteService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ClienteService)();
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _ClienteService, factory: _ClienteService.\u0275fac, providedIn: "root" });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ClienteService, [{
    type: Injectable,
    args: [{ providedIn: "root" }]
  }], null, null);
})();

export {
  ClienteService
};
//# sourceMappingURL=chunk-GDVRRMUL.js.map
