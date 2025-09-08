import {
  BehaviorSubject,
  Injectable,
  setClassMetadata,
  ɵɵdefineInjectable
} from "./chunk-CO622P43.js";

// src/app/core/services/global-spinner.service.ts
var GlobalSpinnerService = class _GlobalSpinnerService {
  constructor() {
    this.visibilidadeSubject = new BehaviorSubject(false);
    this.visibilidade$ = this.visibilidadeSubject.asObservable();
    this.progressoSubject = new BehaviorSubject(0);
    this.progresso$ = this.progressoSubject.asObservable();
  }
  mostrar(progressoInicial = 0) {
    this.visibilidadeSubject.next(true);
    this.progressoSubject.next(progressoInicial);
  }
  ocultar() {
    this.visibilidadeSubject.next(false);
    this.progressoSubject.next(0);
  }
  atualizarProgresso(progresso) {
    const progressoValidado = Math.max(0, Math.min(100, progresso));
    this.progressoSubject.next(progressoValidado);
  }
  static {
    this.\u0275fac = function GlobalSpinnerService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _GlobalSpinnerService)();
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _GlobalSpinnerService, factory: _GlobalSpinnerService.\u0275fac, providedIn: "root" });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(GlobalSpinnerService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [], null);
})();

export {
  GlobalSpinnerService
};
//# sourceMappingURL=chunk-XAACXT24.js.map
