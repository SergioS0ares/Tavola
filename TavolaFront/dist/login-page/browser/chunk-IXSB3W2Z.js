import {
  NzInputOtpComponent
} from "./chunk-M5EPCEBA.js";
import "./chunk-IHMVYCI2.js";
import {
  ToastrService
} from "./chunk-FTC7ZL3K.js";
import {
  FormsModule,
  NgControlStatus,
  NgModel
} from "./chunk-X4ULZSL7.js";
import "./chunk-B6PCS4YX.js";
import {
  NzButtonComponent,
  NzButtonModule,
  NzTransitionPatchDirective
} from "./chunk-WXYLYLSJ.js";
import "./chunk-3I5GT2UP.js";
import {
  DefaultLoginLayoutComponent
} from "./chunk-NH63UQ2U.js";
import {
  NzIconDirective,
  NzIconModule
} from "./chunk-TIW6MRUB.js";
import "./chunk-X3P5AUPX.js";
import "./chunk-SM7NAYZH.js";
import {
  ActivatedRoute,
  Router
} from "./chunk-5CK7YN5Y.js";
import {
  CommonModule,
  NgClass,
  NgIf
} from "./chunk-IOJADCVY.js";
import "./chunk-ZE3YZEND.js";
import {
  Component,
  inject,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵclassProp,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-CO622P43.js";

// src/app/pages/acesso/confirmar-codigo/confirmar-codigo.component.ts
function ConfirmarCodigoComponent_div_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 19);
    \u0275\u0275element(1, "i", 20);
    \u0275\u0275elementEnd();
  }
}
function ConfirmarCodigoComponent_div_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 21)(1, "div", 22);
    \u0275\u0275element(2, "i", 23);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p", 24);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngClass", ctx_r0.statusType);
    \u0275\u0275advance();
    \u0275\u0275property("nzType", ctx_r0.getStatusIcon())("nzTheme", ctx_r0.statusType === "error" ? "fill" : "outline");
    \u0275\u0275advance();
    \u0275\u0275property("ngClass", ctx_r0.statusType);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.statusMessage);
  }
}
function ConfirmarCodigoComponent_div_26_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 25)(1, "button", 26);
    \u0275\u0275listener("click", function ConfirmarCodigoComponent_div_26_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.reenviarCodigo());
    });
    \u0275\u0275element(2, "i", 27);
    \u0275\u0275text(3, " Reenviar c\xF3digo ");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("nzLoading", ctx_r0.reenviando);
  }
}
var ConfirmarCodigoComponent = class _ConfirmarCodigoComponent {
  constructor() {
    this.idUsuario = "";
    this.codigo = "";
    this.carregando = false;
    this.reenviando = false;
    this.hasError = false;
    this.statusMessage = "";
    this.statusType = "info";
    this.router = inject(Router);
    this.route = inject(ActivatedRoute);
    this.toastr = inject(ToastrService);
  }
  ngOnInit() {
    this.idUsuario = this.route.snapshot.params["id"];
    if (!this.idUsuario) {
      this.toastr.warning("Sess\xE3o inv\xE1lida. Redirecionando para login...");
      this.router.navigate(["/login"]);
    }
  }
  onCodigoChange() {
    this.hasError = false;
    this.statusMessage = "";
    if (this.codigo.length === 6) {
      this.statusMessage = "C\xF3digo completo! Clique em verificar.";
      this.statusType = "success";
    } else if (this.codigo.length > 0) {
      this.statusMessage = `${this.codigo.length}/6 d\xEDgitos inseridos`;
      this.statusType = "info";
    }
  }
  verificarCodigo() {
    if (!this.isCodigoCompleto()) {
      this.hasError = true;
      this.statusMessage = "Por favor, digite o c\xF3digo completo de 6 d\xEDgitos.";
      this.statusType = "error";
      this.toastr.error("Por favor, digite o c\xF3digo completo de 6 d\xEDgitos.");
      return;
    }
    this.carregando = true;
    this.statusMessage = "Verificando c\xF3digo...";
    this.statusType = "info";
    setTimeout(() => {
      if (this.codigo === "123456") {
        this.statusMessage = "C\xF3digo verificado com sucesso!";
        this.statusType = "success";
        this.toastr.success("Conta verificada com sucesso!");
        setTimeout(() => {
          this.router.navigate(["/home"]);
        }, 1e3);
      } else {
        this.hasError = true;
        this.statusMessage = "C\xF3digo inv\xE1lido ou expirado.";
        this.statusType = "error";
        this.toastr.error("C\xF3digo inv\xE1lido ou expirado. Tente novamente.");
        this.limparCodigo();
      }
      this.carregando = false;
    }, 1500);
  }
  reenviarCodigo() {
    this.reenviando = true;
    this.statusMessage = "Reenviando c\xF3digo...";
    this.statusType = "info";
    setTimeout(() => {
      this.reenviando = false;
      this.statusMessage = "Novo c\xF3digo enviado para seu e-mail!";
      this.statusType = "success";
      this.toastr.success("Novo c\xF3digo enviado!");
      setTimeout(() => {
        this.statusMessage = "";
      }, 3e3);
    }, 2e3);
  }
  voltarVerificacao() {
    this.router.navigate(["/verificacao-email"]);
  }
  isCodigoCompleto() {
    return this.codigo.length === 6;
  }
  getStatusIcon() {
    switch (this.statusType) {
      case "success":
        return "check-circle";
      case "error":
        return "close-circle";
      default:
        return "info-circle";
    }
  }
  limparCodigo() {
    this.codigo = "";
    this.hasError = false;
    this.statusMessage = "";
  }
  static {
    this.\u0275fac = function ConfirmarCodigoComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ConfirmarCodigoComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ConfirmarCodigoComponent, selectors: [["app-confirmar-codigo"]], decls: 27, vars: 12, consts: [["title", "Digite o c\xF3digo de verifica\xE7\xE3o", "primaryBtnText", "Verificar C\xF3digo", "secondaryBtnText", "N\xE3o recebeu o c\xF3digo?", 3, "submit", "navigate", "disablePrimaryBtn"], [1, "codigo-content"], [1, "header-icon"], [1, "icon-container"], ["nz-icon", "", "nzType", "safety-certificate", "nzTheme", "outline"], ["class", "loading-spinner", 4, "ngIf"], [1, "content-header"], [1, "main-title"], [1, "description"], [1, "codigo-inputs-wrapper"], [3, "ngModelChange", "nzLength", "ngModel"], ["class", "status-feedback", 4, "ngIf"], [1, "help-section"], [1, "help-text"], [1, "timer-text"], ["nz-icon", "", "nzType", "clock-circle", "nzTheme", "outline"], [1, "highlight"], [1, "instruction-text"], ["class", "resend-section", 4, "ngIf"], [1, "loading-spinner"], ["nz-icon", "", "nzType", "loading", "nzSpin", ""], [1, "status-feedback"], [1, "status-icon", 3, "ngClass"], ["nz-icon", "", 3, "nzType", "nzTheme"], [1, "status-text", 3, "ngClass"], [1, "resend-section"], ["nz-button", "", "nzType", "link", "nzSize", "small", 1, "resend-btn", 3, "click", "nzLoading"], ["nz-icon", "", "nzType", "reload", "nzTheme", "outline"]], template: function ConfirmarCodigoComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "app-default-login-layout", 0);
        \u0275\u0275listener("submit", function ConfirmarCodigoComponent_Template_app_default_login_layout_submit_0_listener() {
          return ctx.verificarCodigo();
        })("navigate", function ConfirmarCodigoComponent_Template_app_default_login_layout_navigate_0_listener() {
          return ctx.voltarVerificacao();
        });
        \u0275\u0275elementStart(1, "div", 1)(2, "div", 2)(3, "div", 3);
        \u0275\u0275element(4, "i", 4);
        \u0275\u0275template(5, ConfirmarCodigoComponent_div_5_Template, 2, 0, "div", 5);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(6, "div", 6)(7, "h3", 7);
        \u0275\u0275text(8, "Verifica\xE7\xE3o de Seguran\xE7a");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(9, "p", 8);
        \u0275\u0275text(10, " Insira o c\xF3digo de ");
        \u0275\u0275elementStart(11, "strong");
        \u0275\u0275text(12, "6 d\xEDgitos");
        \u0275\u0275elementEnd();
        \u0275\u0275text(13, " que enviamos para seu e-mail ");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(14, "div", 9)(15, "nz-input-otp", 10);
        \u0275\u0275twoWayListener("ngModelChange", function ConfirmarCodigoComponent_Template_nz_input_otp_ngModelChange_15_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.codigo, $event) || (ctx.codigo = $event);
          return $event;
        });
        \u0275\u0275listener("ngModelChange", function ConfirmarCodigoComponent_Template_nz_input_otp_ngModelChange_15_listener() {
          return ctx.onCodigoChange();
        });
        \u0275\u0275elementEnd()();
        \u0275\u0275template(16, ConfirmarCodigoComponent_div_16_Template, 5, 5, "div", 11);
        \u0275\u0275elementStart(17, "div", 12)(18, "div", 13)(19, "p", 14);
        \u0275\u0275element(20, "i", 15);
        \u0275\u0275text(21, " O c\xF3digo expira em ");
        \u0275\u0275elementStart(22, "span", 16);
        \u0275\u0275text(23, "10 minutos");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(24, "p", 17);
        \u0275\u0275text(25, " Certifique-se de digit\xE1-lo corretamente ");
        \u0275\u0275elementEnd()();
        \u0275\u0275template(26, ConfirmarCodigoComponent_div_26_Template, 4, 1, "div", 18);
        \u0275\u0275elementEnd()()();
      }
      if (rf & 2) {
        \u0275\u0275property("disablePrimaryBtn", !ctx.isCodigoCompleto() || ctx.carregando);
        \u0275\u0275advance(2);
        \u0275\u0275classProp("loading", ctx.carregando);
        \u0275\u0275advance(3);
        \u0275\u0275property("ngIf", ctx.carregando);
        \u0275\u0275advance(9);
        \u0275\u0275classProp("error", ctx.hasError)("success", ctx.isCodigoCompleto());
        \u0275\u0275advance();
        \u0275\u0275property("nzLength", 6);
        \u0275\u0275twoWayProperty("ngModel", ctx.codigo);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.statusMessage);
        \u0275\u0275advance(10);
        \u0275\u0275property("ngIf", !ctx.carregando);
      }
    }, dependencies: [
      CommonModule,
      NgClass,
      NgIf,
      FormsModule,
      NgControlStatus,
      NgModel,
      // NG-ZORRO MODULES
      NzButtonModule,
      NzButtonComponent,
      NzTransitionPatchDirective,
      NzIconModule,
      NzIconDirective,
      NzInputOtpComponent,
      // SEU COMPONENTE
      DefaultLoginLayoutComponent
    ], styles: ["\n\n.codigo-content[_ngcontent-%COMP%] {\n  text-align: center;\n  width: 100%;\n  padding: 0 1rem 2rem;\n  max-width: 480px;\n  margin: 0 auto;\n}\n.codigo-content[_ngcontent-%COMP%]   .header-icon[_ngcontent-%COMP%] {\n  margin-bottom: 2rem;\n  position: relative;\n}\n.codigo-content[_ngcontent-%COMP%]   .header-icon[_ngcontent-%COMP%]   .icon-container[_ngcontent-%COMP%] {\n  position: relative;\n  display: inline-block;\n}\n.codigo-content[_ngcontent-%COMP%]   .header-icon[_ngcontent-%COMP%]   .icon-container[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 3.5rem;\n  color: #F6BD38;\n  transition: all 0.3s ease;\n  filter: drop-shadow(0 4px 8px rgba(246, 189, 56, 0.3));\n}\n.codigo-content[_ngcontent-%COMP%]   .header-icon[_ngcontent-%COMP%]   .icon-container[_ngcontent-%COMP%]   .loading-spinner[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n}\n.codigo-content[_ngcontent-%COMP%]   .header-icon[_ngcontent-%COMP%]   .icon-container[_ngcontent-%COMP%]   .loading-spinner[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 2rem;\n  color: #F6BD38;\n  animation: _ngcontent-%COMP%_pulse 2s infinite;\n}\n.codigo-content[_ngcontent-%COMP%]   .header-icon.loading[_ngcontent-%COMP%]   .icon-container[_ngcontent-%COMP%]    > i[_ngcontent-%COMP%]:first-child {\n  opacity: 0.3;\n  transform: scale(0.9);\n}\n.codigo-content[_ngcontent-%COMP%]   .content-header[_ngcontent-%COMP%] {\n  margin-bottom: 2.5rem;\n}\n.codigo-content[_ngcontent-%COMP%]   .content-header[_ngcontent-%COMP%]   .main-title[_ngcontent-%COMP%] {\n  color: #F6BD38;\n  font-size: 1.5rem;\n  font-weight: 700;\n  margin-bottom: 0.75rem;\n  letter-spacing: -0.02em;\n}\n.codigo-content[_ngcontent-%COMP%]   .content-header[_ngcontent-%COMP%]   .description[_ngcontent-%COMP%] {\n  color: #E8E8E8;\n  font-size: 1rem;\n  line-height: 1.6;\n  margin: 0;\n}\n.codigo-content[_ngcontent-%COMP%]   .content-header[_ngcontent-%COMP%]   .description[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  color: #F6BD38;\n  font-weight: 600;\n}\n.codigo-content[_ngcontent-%COMP%]   .codigo-inputs-wrapper[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  margin: 2.5rem 0;\n  padding: 1.5rem;\n  border-radius: 16px;\n  background: rgba(90, 74, 63, 0.3);\n  border: 2px solid transparent;\n  transition: all 0.4s ease;\n}\n.codigo-content[_ngcontent-%COMP%]   .codigo-inputs-wrapper.success[_ngcontent-%COMP%] {\n  border-color: #52c41a;\n  background: rgba(82, 196, 26, 0.1);\n  box-shadow: 0 0 0 4px rgba(82, 196, 26, 0.1);\n}\n.codigo-content[_ngcontent-%COMP%]   .codigo-inputs-wrapper.error[_ngcontent-%COMP%] {\n  border-color: #ff4d4f;\n  background: rgba(255, 77, 79, 0.1);\n  box-shadow: 0 0 0 4px rgba(255, 77, 79, 0.1);\n  animation: _ngcontent-%COMP%_shake 0.5s ease-in-out;\n}\n.codigo-content[_ngcontent-%COMP%]   .codigo-inputs-wrapper[_ngcontent-%COMP%]     .ant-input-otp {\n  gap: 0.75rem;\n}\n.codigo-content[_ngcontent-%COMP%]   .codigo-inputs-wrapper[_ngcontent-%COMP%]     .ant-input-otp-input {\n  width: 56px !important;\n  height: 64px !important;\n  font-size: 1.75rem !important;\n  font-weight: 700 !important;\n  border: 2px solid #666 !important;\n  border-radius: 12px !important;\n  background: #5A4A3F !important;\n  color: #F6BD38 !important;\n  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1) !important;\n  text-align: center !important;\n}\n.codigo-content[_ngcontent-%COMP%]   .codigo-inputs-wrapper[_ngcontent-%COMP%]     .ant-input-otp-input:focus, \n.codigo-content[_ngcontent-%COMP%]   .codigo-inputs-wrapper[_ngcontent-%COMP%]     .ant-input-otp-input.ant-input-otp-input-active {\n  border-color: #F6BD38 !important;\n  box-shadow: 0 0 0 3px rgba(246, 189, 56, 0.25) !important;\n  transform: translateY(-2px) scale(1.05);\n  background: #6B5A4F !important;\n}\n.codigo-content[_ngcontent-%COMP%]   .codigo-inputs-wrapper[_ngcontent-%COMP%]     .ant-input-otp-input:disabled {\n  opacity: 0.6 !important;\n  cursor: not-allowed !important;\n}\n.codigo-content[_ngcontent-%COMP%]   .status-feedback[_ngcontent-%COMP%] {\n  margin: 1.5rem 0;\n  padding: 1rem;\n  border-radius: 12px;\n  background: rgba(90, 74, 63, 0.2);\n  border-left: 4px solid transparent;\n  display: flex;\n  align-items: center;\n  gap: 0.75rem;\n  transition: all 0.3s ease;\n}\n.codigo-content[_ngcontent-%COMP%]   .status-feedback[_ngcontent-%COMP%]   .status-icon[_ngcontent-%COMP%] {\n  font-size: 1.25rem;\n}\n.codigo-content[_ngcontent-%COMP%]   .status-feedback[_ngcontent-%COMP%]   .status-icon.success[_ngcontent-%COMP%] {\n  color: #52c41a;\n}\n.codigo-content[_ngcontent-%COMP%]   .status-feedback[_ngcontent-%COMP%]   .status-icon.error[_ngcontent-%COMP%] {\n  color: #ff4d4f;\n}\n.codigo-content[_ngcontent-%COMP%]   .status-feedback[_ngcontent-%COMP%]   .status-icon.info[_ngcontent-%COMP%] {\n  color: #F6BD38;\n}\n.codigo-content[_ngcontent-%COMP%]   .status-feedback[_ngcontent-%COMP%]   .status-text[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 0.9rem;\n  font-weight: 500;\n}\n.codigo-content[_ngcontent-%COMP%]   .status-feedback[_ngcontent-%COMP%]   .status-text.success[_ngcontent-%COMP%] {\n  color: #52c41a;\n}\n.codigo-content[_ngcontent-%COMP%]   .status-feedback[_ngcontent-%COMP%]   .status-text.error[_ngcontent-%COMP%] {\n  color: #ff4d4f;\n}\n.codigo-content[_ngcontent-%COMP%]   .status-feedback[_ngcontent-%COMP%]   .status-text.info[_ngcontent-%COMP%] {\n  color: #E8E8E8;\n}\n.codigo-content[_ngcontent-%COMP%]   .help-section[_ngcontent-%COMP%] {\n  margin-top: 2rem;\n}\n.codigo-content[_ngcontent-%COMP%]   .help-section[_ngcontent-%COMP%]   .help-text[_ngcontent-%COMP%] {\n  margin-bottom: 1.5rem;\n}\n.codigo-content[_ngcontent-%COMP%]   .help-section[_ngcontent-%COMP%]   .help-text[_ngcontent-%COMP%]   .timer-text[_ngcontent-%COMP%] {\n  color: #C0C0C0;\n  font-size: 0.9rem;\n  margin-bottom: 0.5rem;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 0.5rem;\n}\n.codigo-content[_ngcontent-%COMP%]   .help-section[_ngcontent-%COMP%]   .help-text[_ngcontent-%COMP%]   .timer-text[_ngcontent-%COMP%]   .highlight[_ngcontent-%COMP%] {\n  color: #F6BD38;\n  font-weight: 600;\n}\n.codigo-content[_ngcontent-%COMP%]   .help-section[_ngcontent-%COMP%]   .help-text[_ngcontent-%COMP%]   .timer-text[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  color: #F6BD38;\n}\n.codigo-content[_ngcontent-%COMP%]   .help-section[_ngcontent-%COMP%]   .help-text[_ngcontent-%COMP%]   .instruction-text[_ngcontent-%COMP%] {\n  color: #A0A0A0;\n  font-size: 0.85rem;\n  margin: 0;\n}\n.codigo-content[_ngcontent-%COMP%]   .help-section[_ngcontent-%COMP%]   .resend-section[_ngcontent-%COMP%]   .resend-btn[_ngcontent-%COMP%] {\n  color: #F6BD38 !important;\n  border-color: transparent !important;\n  font-size: 0.9rem;\n  font-weight: 500;\n  padding: 0.5rem 1rem;\n  height: auto;\n  display: inline-flex;\n  align-items: center;\n  gap: 0.5rem;\n  transition: all 0.3s ease;\n}\n.codigo-content[_ngcontent-%COMP%]   .help-section[_ngcontent-%COMP%]   .resend-section[_ngcontent-%COMP%]   .resend-btn[_ngcontent-%COMP%]:hover {\n  color: rgb(248.2067307692, 205.1826923077, 104.7932692308) !important;\n  background: rgba(246, 189, 56, 0.1) !important;\n  transform: translateY(-1px);\n}\n.codigo-content[_ngcontent-%COMP%]   .help-section[_ngcontent-%COMP%]   .resend-section[_ngcontent-%COMP%]   .resend-btn[_ngcontent-%COMP%]:focus {\n  box-shadow: 0 0 0 2px rgba(246, 189, 56, 0.2) !important;\n}\n@keyframes _ngcontent-%COMP%_pulse {\n  0%, 100% {\n    opacity: 1;\n  }\n  50% {\n    opacity: 0.5;\n  }\n}\n@keyframes _ngcontent-%COMP%_shake {\n  0%, 100% {\n    transform: translateX(0);\n  }\n  10%, 30%, 50%, 70%, 90% {\n    transform: translateX(-4px);\n  }\n  20%, 40%, 60%, 80% {\n    transform: translateX(4px);\n  }\n}\n@media (max-width: 768px) {\n  .codigo-content[_ngcontent-%COMP%] {\n    padding: 0 0.5rem 1.5rem;\n  }\n  .codigo-content[_ngcontent-%COMP%]   .content-header[_ngcontent-%COMP%]   .main-title[_ngcontent-%COMP%] {\n    font-size: 1.25rem;\n  }\n  .codigo-content[_ngcontent-%COMP%]   .codigo-inputs-wrapper[_ngcontent-%COMP%] {\n    padding: 1rem;\n    margin: 2rem 0;\n  }\n  .codigo-content[_ngcontent-%COMP%]   .codigo-inputs-wrapper[_ngcontent-%COMP%]     .ant-input-otp {\n    gap: 0.5rem;\n  }\n  .codigo-content[_ngcontent-%COMP%]   .codigo-inputs-wrapper[_ngcontent-%COMP%]     .ant-input-otp-input {\n    width: 48px !important;\n    height: 56px !important;\n    font-size: 1.5rem !important;\n  }\n}\n@media (max-width: 480px) {\n  .codigo-content[_ngcontent-%COMP%]   .codigo-inputs-wrapper[_ngcontent-%COMP%]     .ant-input-otp {\n    gap: 0.25rem;\n  }\n  .codigo-content[_ngcontent-%COMP%]   .codigo-inputs-wrapper[_ngcontent-%COMP%]     .ant-input-otp-input {\n    width: 42px !important;\n    height: 50px !important;\n    font-size: 1.25rem !important;\n  }\n}\n/*# sourceMappingURL=confirmar-codigo.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ConfirmarCodigoComponent, [{
    type: Component,
    args: [{ selector: "app-confirmar-codigo", standalone: true, imports: [
      CommonModule,
      FormsModule,
      // NG-ZORRO MODULES
      NzButtonModule,
      NzIconModule,
      NzInputOtpComponent,
      // SEU COMPONENTE
      DefaultLoginLayoutComponent
    ], template: `<app-default-login-layout \r
  title="Digite o c\xF3digo de verifica\xE7\xE3o"\r
  primaryBtnText="Verificar C\xF3digo"\r
  secondaryBtnText="N\xE3o recebeu o c\xF3digo?"\r
  [disablePrimaryBtn]="!isCodigoCompleto() || carregando"\r
  (submit)="verificarCodigo()"\r
  (navigate)="voltarVerificacao()">\r
  \r
  <div class="codigo-content">\r
    <!-- Melhorado o \xEDcone com anima\xE7\xE3o e melhor posicionamento -->\r
    <div class="header-icon" [class.loading]="carregando">\r
      <div class="icon-container">\r
        <i nz-icon nzType="safety-certificate" nzTheme="outline"></i>\r
        <div class="loading-spinner" *ngIf="carregando">\r
          <i nz-icon nzType="loading" nzSpin></i>\r
        </div>\r
      </div>\r
    </div>\r
    \r
    <!-- Melhorada a tipografia e hierarquia visual -->\r
    <div class="content-header">\r
      <h3 class="main-title">Verifica\xE7\xE3o de Seguran\xE7a</h3>\r
      <p class="description">\r
        Insira o c\xF3digo de <strong>6 d\xEDgitos</strong> que enviamos para seu e-mail\r
      </p>\r
    </div>\r
\r
    <!-- Melhorado o wrapper dos inputs com melhor espa\xE7amento -->\r
    <div class="codigo-inputs-wrapper" [class.error]="hasError" [class.success]="isCodigoCompleto()">\r
      <nz-input-otp \r
        [nzLength]="6" \r
        [(ngModel)]="codigo"\r
        (ngModelChange)="onCodigoChange()">\r
      </nz-input-otp>\r
    </div>\r
    \r
    <!-- Adicionado feedback visual para estados -->\r
    <div class="status-feedback" *ngIf="statusMessage">\r
      <div class="status-icon" [ngClass]="statusType">\r
        <i nz-icon [nzType]="getStatusIcon()" [nzTheme]="statusType === 'error' ? 'fill' : 'outline'"></i>\r
      </div>\r
      <p class="status-text" [ngClass]="statusType">{{ statusMessage }}</p>\r
    </div>\r
    \r
    <!-- Melhorado o texto de ajuda com melhor hierarquia -->\r
    <div class="help-section">\r
      <div class="help-text">\r
        <p class="timer-text">\r
          <i nz-icon nzType="clock-circle" nzTheme="outline"></i>\r
          O c\xF3digo expira em <span class="highlight">10 minutos</span>\r
        </p>\r
        <p class="instruction-text">\r
          Certifique-se de digit\xE1-lo corretamente\r
        </p>\r
      </div>\r
      \r
      <!-- Adicionado bot\xE3o para reenviar c\xF3digo -->\r
      <div class="resend-section" *ngIf="!carregando">\r
        <button \r
          nz-button \r
          nzType="link" \r
          nzSize="small"\r
          class="resend-btn"\r
          (click)="reenviarCodigo()"\r
          [nzLoading]="reenviando">\r
          <i nz-icon nzType="reload" nzTheme="outline"></i>\r
          Reenviar c\xF3digo\r
        </button>\r
      </div>\r
    </div>\r
  </div>\r
</app-default-login-layout>`, styles: ["/* src/app/pages/acesso/confirmar-codigo/confirmar-codigo.component.scss */\n.codigo-content {\n  text-align: center;\n  width: 100%;\n  padding: 0 1rem 2rem;\n  max-width: 480px;\n  margin: 0 auto;\n}\n.codigo-content .header-icon {\n  margin-bottom: 2rem;\n  position: relative;\n}\n.codigo-content .header-icon .icon-container {\n  position: relative;\n  display: inline-block;\n}\n.codigo-content .header-icon .icon-container i {\n  font-size: 3.5rem;\n  color: #F6BD38;\n  transition: all 0.3s ease;\n  filter: drop-shadow(0 4px 8px rgba(246, 189, 56, 0.3));\n}\n.codigo-content .header-icon .icon-container .loading-spinner {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n}\n.codigo-content .header-icon .icon-container .loading-spinner i {\n  font-size: 2rem;\n  color: #F6BD38;\n  animation: pulse 2s infinite;\n}\n.codigo-content .header-icon.loading .icon-container > i:first-child {\n  opacity: 0.3;\n  transform: scale(0.9);\n}\n.codigo-content .content-header {\n  margin-bottom: 2.5rem;\n}\n.codigo-content .content-header .main-title {\n  color: #F6BD38;\n  font-size: 1.5rem;\n  font-weight: 700;\n  margin-bottom: 0.75rem;\n  letter-spacing: -0.02em;\n}\n.codigo-content .content-header .description {\n  color: #E8E8E8;\n  font-size: 1rem;\n  line-height: 1.6;\n  margin: 0;\n}\n.codigo-content .content-header .description strong {\n  color: #F6BD38;\n  font-weight: 600;\n}\n.codigo-content .codigo-inputs-wrapper {\n  display: flex;\n  justify-content: center;\n  margin: 2.5rem 0;\n  padding: 1.5rem;\n  border-radius: 16px;\n  background: rgba(90, 74, 63, 0.3);\n  border: 2px solid transparent;\n  transition: all 0.4s ease;\n}\n.codigo-content .codigo-inputs-wrapper.success {\n  border-color: #52c41a;\n  background: rgba(82, 196, 26, 0.1);\n  box-shadow: 0 0 0 4px rgba(82, 196, 26, 0.1);\n}\n.codigo-content .codigo-inputs-wrapper.error {\n  border-color: #ff4d4f;\n  background: rgba(255, 77, 79, 0.1);\n  box-shadow: 0 0 0 4px rgba(255, 77, 79, 0.1);\n  animation: shake 0.5s ease-in-out;\n}\n.codigo-content .codigo-inputs-wrapper ::ng-deep .ant-input-otp {\n  gap: 0.75rem;\n}\n.codigo-content .codigo-inputs-wrapper ::ng-deep .ant-input-otp-input {\n  width: 56px !important;\n  height: 64px !important;\n  font-size: 1.75rem !important;\n  font-weight: 700 !important;\n  border: 2px solid #666 !important;\n  border-radius: 12px !important;\n  background: #5A4A3F !important;\n  color: #F6BD38 !important;\n  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1) !important;\n  text-align: center !important;\n}\n.codigo-content .codigo-inputs-wrapper ::ng-deep .ant-input-otp-input:focus,\n.codigo-content .codigo-inputs-wrapper ::ng-deep .ant-input-otp-input.ant-input-otp-input-active {\n  border-color: #F6BD38 !important;\n  box-shadow: 0 0 0 3px rgba(246, 189, 56, 0.25) !important;\n  transform: translateY(-2px) scale(1.05);\n  background: #6B5A4F !important;\n}\n.codigo-content .codigo-inputs-wrapper ::ng-deep .ant-input-otp-input:disabled {\n  opacity: 0.6 !important;\n  cursor: not-allowed !important;\n}\n.codigo-content .status-feedback {\n  margin: 1.5rem 0;\n  padding: 1rem;\n  border-radius: 12px;\n  background: rgba(90, 74, 63, 0.2);\n  border-left: 4px solid transparent;\n  display: flex;\n  align-items: center;\n  gap: 0.75rem;\n  transition: all 0.3s ease;\n}\n.codigo-content .status-feedback .status-icon {\n  font-size: 1.25rem;\n}\n.codigo-content .status-feedback .status-icon.success {\n  color: #52c41a;\n}\n.codigo-content .status-feedback .status-icon.error {\n  color: #ff4d4f;\n}\n.codigo-content .status-feedback .status-icon.info {\n  color: #F6BD38;\n}\n.codigo-content .status-feedback .status-text {\n  margin: 0;\n  font-size: 0.9rem;\n  font-weight: 500;\n}\n.codigo-content .status-feedback .status-text.success {\n  color: #52c41a;\n}\n.codigo-content .status-feedback .status-text.error {\n  color: #ff4d4f;\n}\n.codigo-content .status-feedback .status-text.info {\n  color: #E8E8E8;\n}\n.codigo-content .help-section {\n  margin-top: 2rem;\n}\n.codigo-content .help-section .help-text {\n  margin-bottom: 1.5rem;\n}\n.codigo-content .help-section .help-text .timer-text {\n  color: #C0C0C0;\n  font-size: 0.9rem;\n  margin-bottom: 0.5rem;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 0.5rem;\n}\n.codigo-content .help-section .help-text .timer-text .highlight {\n  color: #F6BD38;\n  font-weight: 600;\n}\n.codigo-content .help-section .help-text .timer-text i {\n  color: #F6BD38;\n}\n.codigo-content .help-section .help-text .instruction-text {\n  color: #A0A0A0;\n  font-size: 0.85rem;\n  margin: 0;\n}\n.codigo-content .help-section .resend-section .resend-btn {\n  color: #F6BD38 !important;\n  border-color: transparent !important;\n  font-size: 0.9rem;\n  font-weight: 500;\n  padding: 0.5rem 1rem;\n  height: auto;\n  display: inline-flex;\n  align-items: center;\n  gap: 0.5rem;\n  transition: all 0.3s ease;\n}\n.codigo-content .help-section .resend-section .resend-btn:hover {\n  color: rgb(248.2067307692, 205.1826923077, 104.7932692308) !important;\n  background: rgba(246, 189, 56, 0.1) !important;\n  transform: translateY(-1px);\n}\n.codigo-content .help-section .resend-section .resend-btn:focus {\n  box-shadow: 0 0 0 2px rgba(246, 189, 56, 0.2) !important;\n}\n@keyframes pulse {\n  0%, 100% {\n    opacity: 1;\n  }\n  50% {\n    opacity: 0.5;\n  }\n}\n@keyframes shake {\n  0%, 100% {\n    transform: translateX(0);\n  }\n  10%, 30%, 50%, 70%, 90% {\n    transform: translateX(-4px);\n  }\n  20%, 40%, 60%, 80% {\n    transform: translateX(4px);\n  }\n}\n@media (max-width: 768px) {\n  .codigo-content {\n    padding: 0 0.5rem 1.5rem;\n  }\n  .codigo-content .content-header .main-title {\n    font-size: 1.25rem;\n  }\n  .codigo-content .codigo-inputs-wrapper {\n    padding: 1rem;\n    margin: 2rem 0;\n  }\n  .codigo-content .codigo-inputs-wrapper ::ng-deep .ant-input-otp {\n    gap: 0.5rem;\n  }\n  .codigo-content .codigo-inputs-wrapper ::ng-deep .ant-input-otp-input {\n    width: 48px !important;\n    height: 56px !important;\n    font-size: 1.5rem !important;\n  }\n}\n@media (max-width: 480px) {\n  .codigo-content .codigo-inputs-wrapper ::ng-deep .ant-input-otp {\n    gap: 0.25rem;\n  }\n  .codigo-content .codigo-inputs-wrapper ::ng-deep .ant-input-otp-input {\n    width: 42px !important;\n    height: 50px !important;\n    font-size: 1.25rem !important;\n  }\n}\n/*# sourceMappingURL=confirmar-codigo.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ConfirmarCodigoComponent, { className: "ConfirmarCodigoComponent", filePath: "src/app/pages/acesso/confirmar-codigo/confirmar-codigo.component.ts", lineNumber: 31 });
})();
export {
  ConfirmarCodigoComponent
};
//# sourceMappingURL=chunk-IXSB3W2Z.js.map
