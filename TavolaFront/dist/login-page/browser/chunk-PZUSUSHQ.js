import {
  Injectable,
  setClassMetadata,
  ɵɵdefineInjectable
} from "./chunk-CO622P43.js";

// src/app/core/services/auth.service.ts
var AuthService = class _AuthService {
  constructor() {
    this.TOKEN_KEY = "token";
    this.USER_NAME_KEY = "nome";
    this.USER_TYPE_KEY = "tipoUsuario";
    this.RESTAURANTE_ID_KEY = "idRestaurante";
    this.USER_IMAGE_KEY = "imagemUsuario";
    this._token = null;
    this._perfil = null;
    this.BASE_IMAGE_URL = "http://localhost:8080";
    this._token = localStorage.getItem(this.TOKEN_KEY);
    const nome = localStorage.getItem(this.USER_NAME_KEY);
    const tipo = localStorage.getItem(this.USER_TYPE_KEY);
    const id = localStorage.getItem(this.RESTAURANTE_ID_KEY) || void 0;
    const imagem = localStorage.getItem(this.USER_IMAGE_KEY) || void 0;
    if (nome && tipo) {
      this._perfil = { nome, tipo, id, imagem };
    }
    console.log("[AuthService] Constructor - perfil inicial:", this._perfil);
  }
  setAuthData(token, nome, tipoUsuario, id, imagem) {
    this.setToken(token);
    this.setPerfil({ nome, tipo: tipoUsuario, id, imagem });
    localStorage.setItem(this.TOKEN_KEY, token);
    localStorage.setItem(this.USER_NAME_KEY, nome);
    localStorage.setItem(this.USER_TYPE_KEY, tipoUsuario);
    if (id && tipoUsuario === "RESTAURANTE") {
      localStorage.setItem(this.RESTAURANTE_ID_KEY, id);
    }
    if (imagem) {
      localStorage.setItem(this.USER_IMAGE_KEY, imagem);
    } else {
      localStorage.removeItem(this.USER_IMAGE_KEY);
    }
  }
  setToken(token) {
    this._token = token;
    localStorage.setItem(this.TOKEN_KEY, token);
  }
  getToken() {
    return localStorage.getItem(this.TOKEN_KEY);
  }
  setPerfil(perfil) {
    this._perfil = perfil;
    localStorage.setItem(this.USER_NAME_KEY, perfil.nome);
    localStorage.setItem(this.USER_TYPE_KEY, perfil.tipo);
    if (perfil.tipo === "RESTAURANTE" && perfil.id) {
      localStorage.setItem(this.RESTAURANTE_ID_KEY, perfil.id);
    }
    if (perfil.imagem) {
      localStorage.setItem(this.USER_IMAGE_KEY, perfil.imagem);
    } else {
      localStorage.removeItem(this.USER_IMAGE_KEY);
    }
  }
  get perfil() {
    if (this._perfil) {
      return this._perfil;
    }
    const nome = localStorage.getItem(this.USER_NAME_KEY);
    const tipo = localStorage.getItem(this.USER_TYPE_KEY);
    const id = localStorage.getItem(this.RESTAURANTE_ID_KEY) || void 0;
    const imagem = localStorage.getItem(this.USER_IMAGE_KEY) || void 0;
    if (nome && tipo && this.getToken()) {
      this._perfil = { nome, tipo, id, imagem };
      return this._perfil;
    }
    return null;
  }
  clearAuthData() {
    this._token = null;
    this._perfil = null;
    localStorage.removeItem(this.TOKEN_KEY);
    localStorage.removeItem(this.USER_NAME_KEY);
    localStorage.removeItem(this.USER_TYPE_KEY);
    localStorage.removeItem(this.RESTAURANTE_ID_KEY);
    localStorage.removeItem(this.USER_IMAGE_KEY);
  }
  hasRole(role) {
    return this.perfil?.tipo === role;
  }
  getAbsoluteImageUrl(relativePath) {
    if (relativePath) {
      return `${this.BASE_IMAGE_URL}${relativePath}`;
    }
    return "";
  }
  static {
    this.\u0275fac = function AuthService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _AuthService)();
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _AuthService, factory: _AuthService.\u0275fac, providedIn: "root" });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AuthService, [{
    type: Injectable,
    args: [{ providedIn: "root" }]
  }], () => [], null);
})();

export {
  AuthService
};
//# sourceMappingURL=chunk-PZUSUSHQ.js.map
