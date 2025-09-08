import {
  Component,
  Input,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵprojection,
  ɵɵprojectionDef,
  ɵɵtext,
  ɵɵtextInterpolate
} from "./chunk-CO622P43.js";

// src/app/pages/acesso/default-login-layout/default-login-layout.component.ts
var _c0 = ["*"];
var DefaultLoginLayoutComponent = class _DefaultLoginLayoutComponent {
  constructor() {
    this.title = "";
    this.primaryBtnText = "";
    this.secondaryBtnText = "";
    this.disablePrimaryBtn = false;
  }
  static {
    this.\u0275fac = function DefaultLoginLayoutComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _DefaultLoginLayoutComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _DefaultLoginLayoutComponent, selectors: [["app-default-login-layout"]], inputs: { title: "title", primaryBtnText: "primaryBtnText", secondaryBtnText: "secondaryBtnText", disablePrimaryBtn: "disablePrimaryBtn" }, ngContentSelectors: _c0, decls: 8, vars: 1, consts: [[1, "main-section"], [1, "form-section"], ["src", "/assets/png/LogoTavolaSimples.png"], [1, "form-content"]], template: function DefaultLoginLayoutComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275projectionDef();
        \u0275\u0275elementStart(0, "main");
        \u0275\u0275element(1, "section", 0);
        \u0275\u0275elementStart(2, "section", 1);
        \u0275\u0275element(3, "img", 2);
        \u0275\u0275elementStart(4, "h2");
        \u0275\u0275text(5);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(6, "div", 3);
        \u0275\u0275projection(7);
        \u0275\u0275elementEnd()()();
      }
      if (rf & 2) {
        \u0275\u0275advance(5);
        \u0275\u0275textInterpolate(ctx.title);
      }
    }, styles: ["\n\nmain[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  align-items: stretch;\n  min-height: 100vh;\n  background-color: #3B221B;\n  overflow: hidden;\n}\nmain[_ngcontent-%COMP%]::-webkit-scrollbar {\n  width: 8px;\n}\nmain[_ngcontent-%COMP%]::-webkit-scrollbar-track {\n  background: #2a1812;\n  border-radius: 4px;\n}\nmain[_ngcontent-%COMP%]::-webkit-scrollbar-thumb {\n  background: #4e2e22;\n  border-radius: 4px;\n}\nmain[_ngcontent-%COMP%]::-webkit-scrollbar-thumb:hover {\n  background: #D1495B;\n}\nmain[_ngcontent-%COMP%]   section[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n}\nmain[_ngcontent-%COMP%]   .main-section[_ngcontent-%COMP%] {\n  flex: 1;\n  background: url(/assets/png/logo-tavola-inicial.png) center center/cover no-repeat;\n  min-height: 100vh;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  overflow: hidden;\n}\nmain[_ngcontent-%COMP%]   .main-section[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 80%;\n  height: auto;\n  max-width: 400px;\n  max-height: 80vh;\n  object-fit: contain;\n  object-position: center;\n  margin: 0 auto;\n  display: block;\n}\nmain[_ngcontent-%COMP%]   .form-section[_ngcontent-%COMP%] {\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n  padding: 32px;\n  background-color: #3B221B;\n  position: relative;\n  overflow-y: auto;\n  max-height: 100vh;\n}\nmain[_ngcontent-%COMP%]   .form-section[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  align-self: center;\n  width: 60px;\n  height: auto;\n  margin-bottom: 24px;\n}\nmain[_ngcontent-%COMP%]   .form-section[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  color: #F6BD38;\n  font-size: 24px;\n  font-weight: 600;\n  text-align: center;\n  margin-bottom: 32px;\n}\nmain[_ngcontent-%COMP%]   .form-section[_ngcontent-%COMP%]   .form-content[_ngcontent-%COMP%] {\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-start;\n  padding: 0 16px;\n  margin-bottom: 24px;\n  overflow: visible;\n}\nmain[_ngcontent-%COMP%]   .form-section[_ngcontent-%COMP%]   .btn-wrapper[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 16px;\n  padding: 16px;\n  background-color: #3B221B;\n  position: sticky;\n  bottom: 0;\n}\nmain[_ngcontent-%COMP%]   .form-section[_ngcontent-%COMP%]   .btn-wrapper[_ngcontent-%COMP%]   button.btn-primary[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 12px;\n  border-radius: 8px;\n  font-size: 16px;\n  font-weight: 500;\n  border: none;\n  cursor: pointer;\n  background-color: #F6BD38;\n  color: #3B221B;\n  transition: all 0.3s ease;\n}\nmain[_ngcontent-%COMP%]   .form-section[_ngcontent-%COMP%]   .btn-wrapper[_ngcontent-%COMP%]   button.btn-primary[_ngcontent-%COMP%]:hover {\n  background-color: rgb(244.8966346154, 180.9086538462, 31.6033653846);\n}\nmain[_ngcontent-%COMP%]   .form-section[_ngcontent-%COMP%]   .btn-wrapper[_ngcontent-%COMP%]   button.btn-primary[_ngcontent-%COMP%]:disabled {\n  background-color: rgba(246, 189, 56, 0.5);\n  cursor: not-allowed;\n}\nmain[_ngcontent-%COMP%]   .form-section[_ngcontent-%COMP%]   .btn-wrapper[_ngcontent-%COMP%]   .navigation-link[_ngcontent-%COMP%] {\n  color: #F6BD38;\n  text-decoration: none;\n  font-size: 14px;\n  cursor: pointer;\n  transition: all 0.3s ease;\n}\nmain[_ngcontent-%COMP%]   .form-section[_ngcontent-%COMP%]   .btn-wrapper[_ngcontent-%COMP%]   .navigation-link[_ngcontent-%COMP%]:hover {\n  color: rgb(248.2067307692, 205.1826923077, 104.7932692308);\n  text-decoration: underline;\n}\n@media (max-width: 1024px) {\n  main[_ngcontent-%COMP%] {\n    flex-direction: column;\n  }\n  main[_ngcontent-%COMP%]   .main-section[_ngcontent-%COMP%] {\n    display: none;\n  }\n  main[_ngcontent-%COMP%]   .form-section[_ngcontent-%COMP%] {\n    flex: 1;\n    width: 100%;\n    max-width: none;\n    padding: 24px 16px;\n  }\n}\nmat-error[_ngcontent-%COMP%] {\n  color: #D1495B !important;\n  font-size: 0.8rem;\n  font-weight: 500;\n  opacity: 1 !important;\n}\n/*# sourceMappingURL=default-login-layout.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DefaultLoginLayoutComponent, [{
    type: Component,
    args: [{ selector: "app-default-login-layout", standalone: true, imports: [], template: '<main>\r\n    <section class="main-section"></section>\r\n    <section class="form-section">\r\n        <img src="/assets/png/LogoTavolaSimples.png"/>\r\n        <h2>{{ title }}</h2>\r\n        <div class="form-content">\r\n            <ng-content></ng-content>\r\n        </div>\r\n    </section>\r\n</main>\r\n', styles: ["/* src/app/pages/acesso/default-login-layout/default-login-layout.component.scss */\nmain {\n  display: flex;\n  flex-direction: row;\n  align-items: stretch;\n  min-height: 100vh;\n  background-color: #3B221B;\n  overflow: hidden;\n}\nmain::-webkit-scrollbar {\n  width: 8px;\n}\nmain::-webkit-scrollbar-track {\n  background: #2a1812;\n  border-radius: 4px;\n}\nmain::-webkit-scrollbar-thumb {\n  background: #4e2e22;\n  border-radius: 4px;\n}\nmain::-webkit-scrollbar-thumb:hover {\n  background: #D1495B;\n}\nmain section {\n  display: flex;\n  flex-direction: column;\n}\nmain .main-section {\n  flex: 1;\n  background: url(/assets/png/logo-tavola-inicial.png) center center/cover no-repeat;\n  min-height: 100vh;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  overflow: hidden;\n}\nmain .main-section img {\n  width: 80%;\n  height: auto;\n  max-width: 400px;\n  max-height: 80vh;\n  object-fit: contain;\n  object-position: center;\n  margin: 0 auto;\n  display: block;\n}\nmain .form-section {\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n  padding: 32px;\n  background-color: #3B221B;\n  position: relative;\n  overflow-y: auto;\n  max-height: 100vh;\n}\nmain .form-section img {\n  align-self: center;\n  width: 60px;\n  height: auto;\n  margin-bottom: 24px;\n}\nmain .form-section h2 {\n  color: #F6BD38;\n  font-size: 24px;\n  font-weight: 600;\n  text-align: center;\n  margin-bottom: 32px;\n}\nmain .form-section .form-content {\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-start;\n  padding: 0 16px;\n  margin-bottom: 24px;\n  overflow: visible;\n}\nmain .form-section .btn-wrapper {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 16px;\n  padding: 16px;\n  background-color: #3B221B;\n  position: sticky;\n  bottom: 0;\n}\nmain .form-section .btn-wrapper button.btn-primary {\n  width: 100%;\n  padding: 12px;\n  border-radius: 8px;\n  font-size: 16px;\n  font-weight: 500;\n  border: none;\n  cursor: pointer;\n  background-color: #F6BD38;\n  color: #3B221B;\n  transition: all 0.3s ease;\n}\nmain .form-section .btn-wrapper button.btn-primary:hover {\n  background-color: rgb(244.8966346154, 180.9086538462, 31.6033653846);\n}\nmain .form-section .btn-wrapper button.btn-primary:disabled {\n  background-color: rgba(246, 189, 56, 0.5);\n  cursor: not-allowed;\n}\nmain .form-section .btn-wrapper .navigation-link {\n  color: #F6BD38;\n  text-decoration: none;\n  font-size: 14px;\n  cursor: pointer;\n  transition: all 0.3s ease;\n}\nmain .form-section .btn-wrapper .navigation-link:hover {\n  color: rgb(248.2067307692, 205.1826923077, 104.7932692308);\n  text-decoration: underline;\n}\n@media (max-width: 1024px) {\n  main {\n    flex-direction: column;\n  }\n  main .main-section {\n    display: none;\n  }\n  main .form-section {\n    flex: 1;\n    width: 100%;\n    max-width: none;\n    padding: 24px 16px;\n  }\n}\nmat-error {\n  color: #D1495B !important;\n  font-size: 0.8rem;\n  font-weight: 500;\n  opacity: 1 !important;\n}\n/*# sourceMappingURL=default-login-layout.component.css.map */\n"] }]
  }], null, { title: [{
    type: Input
  }], primaryBtnText: [{
    type: Input
  }], secondaryBtnText: [{
    type: Input
  }], disablePrimaryBtn: [{
    type: Input
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(DefaultLoginLayoutComponent, { className: "DefaultLoginLayoutComponent", filePath: "src/app/pages/acesso/default-login-layout/default-login-layout.component.ts", lineNumber: 10 });
})();

export {
  DefaultLoginLayoutComponent
};
//# sourceMappingURL=chunk-NH63UQ2U.js.map
