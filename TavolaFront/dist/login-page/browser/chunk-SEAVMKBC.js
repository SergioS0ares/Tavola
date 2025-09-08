import {
  AuthService
} from "./chunk-PZUSUSHQ.js";
import {
  HttpClient
} from "./chunk-IOJADCVY.js";
import {
  Injectable,
  setClassMetadata,
  tap,
  ɵɵdefineInjectable,
  ɵɵinject
} from "./chunk-CO622P43.js";

// src/app/core/services/login.service.ts
var LoginService = class _LoginService {
  constructor(httpClient, auth) {
    this.httpClient = httpClient;
    this.auth = auth;
    this.apiUrl = "http://localhost:8080/auth";
  }
  login(email, senha) {
    return this.httpClient.post(`${this.apiUrl}/login`, { email, senha }, { withCredentials: true }).pipe(tap((value) => {
      this.auth.setToken(value.token);
      this.auth.setPerfil({ tipo: value.tipoUsuario, nome: value.nome, imagem: value.imagem });
    }));
  }
  signup(data) {
    return this.httpClient.post(`${this.apiUrl}/register`, data, { withCredentials: true }).pipe(tap((value) => {
      this.auth.setToken(value.token);
      this.auth.setPerfil({ tipo: value.tipoUsuario, nome: value.nome, imagem: value.imagem });
    }));
  }
  refreshToken() {
    console.log("[LoginService] calling /auth/refresh");
    return this.httpClient.post(`${this.apiUrl}/refresh`, {}, { withCredentials: true }).pipe(tap((res) => {
      console.log("[LoginService] refresh response received:", res);
      this.auth.setToken(res.token);
      this.auth.setPerfil({ tipo: res.tipoUsuario, nome: res.nome, imagem: res.imagem });
    }));
  }
  static {
    this.\u0275fac = function LoginService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _LoginService)(\u0275\u0275inject(HttpClient), \u0275\u0275inject(AuthService));
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _LoginService, factory: _LoginService.\u0275fac, providedIn: "root" });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(LoginService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{ type: HttpClient }, { type: AuthService }], null);
})();

export {
  LoginService
};
//# sourceMappingURL=chunk-SEAVMKBC.js.map
