import {
  LoginService
} from "./chunk-SEAVMKBC.js";
import {
  MatButtonModule
} from "./chunk-7M5C6ZGC.js";
import {
  AuthService
} from "./chunk-PZUSUSHQ.js";
import {
  MatError,
  MatFormField,
  MatFormFieldModule,
  MatInput,
  MatInputModule,
  MatLabel,
  MatPrefix
} from "./chunk-TFBPBZK4.js";
import {
  MatIcon,
  MatIconModule
} from "./chunk-WG6I7YZH.js";
import {
  ToastrService
} from "./chunk-FTC7ZL3K.js";
import {
  DefaultValueAccessor,
  FormControl,
  FormControlName,
  FormGroup,
  FormGroupDirective,
  NgControlStatus,
  NgControlStatusGroup,
  ReactiveFormsModule,
  Validators,
  ɵNgNoValidate
} from "./chunk-X4ULZSL7.js";
import "./chunk-B6PCS4YX.js";
import {
  DefaultLoginLayoutComponent
} from "./chunk-NH63UQ2U.js";
import {
  NzIconDirective,
  NzIconModule
} from "./chunk-TIW6MRUB.js";
import "./chunk-SM7NAYZH.js";
import {
  Router
} from "./chunk-5CK7YN5Y.js";
import {
  CommonModule,
  NgIf
} from "./chunk-IOJADCVY.js";
import "./chunk-ZE3YZEND.js";
import {
  Component,
  inject,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵProvidersFeature,
  ɵɵadvance,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵlistener,
  ɵɵproperty,
  ɵɵtemplate,
  ɵɵtext
} from "./chunk-CO622P43.js";

// src/app/pages/acesso/login/login.component.ts
function LoginComponent_mat_error_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error");
    \u0275\u0275text(1, " Insira um email v\xE1lido com um dom\xEDnio (ex: .com) ");
    \u0275\u0275elementEnd();
  }
}
function LoginComponent_mat_error_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error");
    \u0275\u0275text(1, " Email inv\xE1lido ");
    \u0275\u0275elementEnd();
  }
}
function LoginComponent_mat_error_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error");
    \u0275\u0275text(1, " Este campo \xE9 obrigat\xF3rio ");
    \u0275\u0275elementEnd();
  }
}
function LoginComponent_mat_error_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error");
    \u0275\u0275text(1, " Este campo \xE9 obrigat\xF3rio ");
    \u0275\u0275elementEnd();
  }
}
function LoginComponent_span_24_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 17);
    \u0275\u0275text(1, "Funcionalidade ainda n\xE3o implementada.");
    \u0275\u0275elementEnd();
  }
}
function LoginComponent_div_25_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 18)(1, "mat-icon");
    \u0275\u0275text(2, "error");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3, " N\xE3o foi poss\xEDvel acessar sua conta. Verifique seu e-mail e senha e tente novamente. ");
    \u0275\u0275elementEnd();
  }
}
var LoginComponent = class _LoginComponent {
  constructor() {
    this.showForgotInfo = false;
    this.showLoginError = false;
    this.router = inject(Router);
    this.loginService = inject(LoginService);
    this.toastService = inject(ToastrService);
    this.authService = inject(AuthService);
    this.loginForm = new FormGroup({
      email: new FormControl("", {
        nonNullable: true,
        validators: [Validators.required, Validators.email]
      }),
      senha: new FormControl("", {
        nonNullable: true,
        validators: [Validators.required]
      })
    });
  }
  emailWithTLDValidator(control) {
    const value = control.value;
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
    if (value && !regex.test(value)) {
      return { emailTLD: true };
    }
    return null;
  }
  realizarLogin() {
    if (this.loginForm.invalid) {
      this.loginForm.markAllAsTouched();
      return;
    }
    const email = this.loginForm.get("email")?.value;
    const senha = this.loginForm.get("senha")?.value;
    if (email && senha) {
      this.loginService.login(email, senha).subscribe({
        next: (res) => {
          this.showLoginError = false;
          this.toastService.success("Login feito com sucesso!");
          if (res.tipoUsuario === "RESTAURANTE") {
            this.authService.setAuthData(res.token, res.nome, res.tipoUsuario, res.id, res.imagem);
            this.router.navigate(["reserva"]);
          } else {
            this.router.navigate(["home"]);
          }
        },
        error: (err) => {
          this.showLoginError = true;
          const errorMessage = err.error?.message || "N\xE3o foi poss\xEDvel acessar sua conta. Verifique seu e-mail e senha e tente novamente.";
          this.toastService.error(errorMessage);
        }
      });
    } else {
      this.showLoginError = true;
      this.toastService.error("Email ou senha inv\xE1lidos.");
    }
  }
  irParaCadastro() {
    this.router.navigate(["signup"]);
  }
  forgotPassword() {
    this.showForgotInfo = true;
    this.toastService.info("Funcionalidade de recupera\xE7\xE3o de senha ainda n\xE3o implementada.");
  }
  static {
    this.\u0275fac = function LoginComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _LoginComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _LoginComponent, selectors: [["app-login"]], features: [\u0275\u0275ProvidersFeature([])], decls: 33, vars: 8, consts: [[1, "form-section"], [1, "login-form", 3, "ngSubmit", "formGroup"], ["appearance", "outline", 1, "largura-total"], ["matPrefix", ""], [1, "input-icon"], ["matInput", "", "placeholder", "Seu e-mail", "formControlName", "email", "type", "email"], [4, "ngIf"], ["matInput", "", "placeholder", "Sua senha", "formControlName", "senha", "type", "password"], [1, "forgot-password"], ["href", "#", 3, "click"], ["class", "not-ready", 4, "ngIf"], ["class", "login-error-card", 4, "ngIf"], [1, "actions"], ["type", "submit", 1, "primary-action", 3, "disabled"], ["nz-icon", "", "nzType", "login", "nzTheme", "outline"], ["type", "button", 1, "secondary-action", 3, "click"], ["nz-icon", "", "nzType", "user-add", "nzTheme", "outline"], [1, "not-ready"], [1, "login-error-card"]], template: function LoginComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "app-default-login-layout")(1, "div", 0)(2, "form", 1);
        \u0275\u0275listener("ngSubmit", function LoginComponent_Template_form_ngSubmit_2_listener() {
          return ctx.realizarLogin();
        });
        \u0275\u0275elementStart(3, "mat-form-field", 2)(4, "mat-label");
        \u0275\u0275text(5, "E-mail");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(6, "span", 3)(7, "mat-icon", 4);
        \u0275\u0275text(8, "email");
        \u0275\u0275elementEnd()();
        \u0275\u0275element(9, "input", 5);
        \u0275\u0275template(10, LoginComponent_mat_error_10_Template, 2, 0, "mat-error", 6)(11, LoginComponent_mat_error_11_Template, 2, 0, "mat-error", 6)(12, LoginComponent_mat_error_12_Template, 2, 0, "mat-error", 6);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(13, "mat-form-field", 2)(14, "mat-label");
        \u0275\u0275text(15, "Senha");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(16, "span", 3)(17, "mat-icon", 4);
        \u0275\u0275text(18, "lock");
        \u0275\u0275elementEnd()();
        \u0275\u0275element(19, "input", 7);
        \u0275\u0275template(20, LoginComponent_mat_error_20_Template, 2, 0, "mat-error", 6);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(21, "div", 8)(22, "a", 9);
        \u0275\u0275listener("click", function LoginComponent_Template_a_click_22_listener($event) {
          ctx.forgotPassword();
          return $event.preventDefault();
        });
        \u0275\u0275text(23, "Esqueci minha senha");
        \u0275\u0275elementEnd();
        \u0275\u0275template(24, LoginComponent_span_24_Template, 2, 0, "span", 10);
        \u0275\u0275elementEnd();
        \u0275\u0275template(25, LoginComponent_div_25_Template, 4, 0, "div", 11);
        \u0275\u0275elementStart(26, "div", 12)(27, "button", 13);
        \u0275\u0275element(28, "i", 14);
        \u0275\u0275text(29, " Entrar ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(30, "button", 15);
        \u0275\u0275listener("click", function LoginComponent_Template_button_click_30_listener() {
          return ctx.irParaCadastro();
        });
        \u0275\u0275element(31, "i", 16);
        \u0275\u0275text(32, " Criar Conta ");
        \u0275\u0275elementEnd()()()()();
      }
      if (rf & 2) {
        let tmp_1_0;
        let tmp_2_0;
        let tmp_3_0;
        let tmp_4_0;
        \u0275\u0275advance(2);
        \u0275\u0275property("formGroup", ctx.loginForm);
        \u0275\u0275advance(8);
        \u0275\u0275property("ngIf", (tmp_1_0 = ctx.loginForm.get("email")) == null ? null : tmp_1_0.hasError("emailTLD"));
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ((tmp_2_0 = ctx.loginForm.get("email")) == null ? null : tmp_2_0.hasError("email")) && !((tmp_2_0 = ctx.loginForm.get("email")) == null ? null : tmp_2_0.hasError("emailTLD")));
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ((tmp_3_0 = ctx.loginForm.get("email")) == null ? null : tmp_3_0.hasError("required")) && !((tmp_3_0 = ctx.loginForm.get("email")) == null ? null : tmp_3_0.hasError("emailTLD")) && !((tmp_3_0 = ctx.loginForm.get("email")) == null ? null : tmp_3_0.hasError("email")));
        \u0275\u0275advance(8);
        \u0275\u0275property("ngIf", (tmp_4_0 = ctx.loginForm.get("senha")) == null ? null : tmp_4_0.hasError("required"));
        \u0275\u0275advance(4);
        \u0275\u0275property("ngIf", ctx.showForgotInfo);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.showLoginError);
        \u0275\u0275advance(2);
        \u0275\u0275property("disabled", !ctx.loginForm.valid);
      }
    }, dependencies: [
      CommonModule,
      NgIf,
      DefaultLoginLayoutComponent,
      ReactiveFormsModule,
      \u0275NgNoValidate,
      DefaultValueAccessor,
      NgControlStatus,
      NgControlStatusGroup,
      FormGroupDirective,
      FormControlName,
      MatFormFieldModule,
      MatFormField,
      MatLabel,
      MatError,
      MatPrefix,
      MatInputModule,
      MatInput,
      MatIconModule,
      MatIcon,
      MatButtonModule,
      NzIconModule,
      NzIconDirective
    ], styles: ["\n\n.form-section[_ngcontent-%COMP%] {\n  background: rgba(255, 255, 255, 0.05);\n  border-radius: 8px;\n  padding: 32px;\n  margin: 0 auto;\n  width: 100%;\n  max-width: 500px;\n}\n.login-form[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 16px;\n  width: 100%;\n  margin: 0 auto;\n}\n.login-form[_ngcontent-%COMP%]     .mat-mdc-text-field-wrapper {\n  width: 100%;\n  z-index: 0;\n}\n.login-form[_ngcontent-%COMP%]     .mat-mdc-form-field {\n  width: 100%;\n}\n.signup-tabs[_ngcontent-%COMP%] {\n  margin-top: -24px;\n}\n.signup-tabs[_ngcontent-%COMP%]     .mat-mdc-tab-header {\n  margin-bottom: 24px;\n  border-bottom: 1px solid rgba(255, 255, 255, 0.12);\n}\n.signup-tabs[_ngcontent-%COMP%]     .mat-mdc-tab-header .mat-mdc-tab {\n  color: rgba(255, 255, 255, 0.6);\n  min-height: 48px;\n}\n.signup-tabs[_ngcontent-%COMP%]     .mat-mdc-tab-header .mat-mdc-tab.mdc-tab--active {\n  color: #F6BD38;\n}\n.signup-tabs[_ngcontent-%COMP%]     .mat-mdc-tab-header .mat-mdc-tab .mdc-tab-indicator__content--underline {\n  border-color: #F6BD38;\n}\n.signup-tabs[_ngcontent-%COMP%]     .mat-mdc-tab-body-wrapper {\n  height: calc(100vh - 250px);\n  overflow-y: auto;\n}\n.signup-tabs[_ngcontent-%COMP%]     .mat-mdc-tab-body-wrapper::-webkit-scrollbar {\n  width: 8px;\n}\n.signup-tabs[_ngcontent-%COMP%]     .mat-mdc-tab-body-wrapper::-webkit-scrollbar-track {\n  background: rgba(29, 87, 196, 0.1);\n  border-radius: 4px;\n}\n.signup-tabs[_ngcontent-%COMP%]     .mat-mdc-tab-body-wrapper::-webkit-scrollbar-thumb {\n  background: rgba(18, 116, 31, 0.2);\n  border-radius: 4px;\n}\n.signup-tabs[_ngcontent-%COMP%]     .mat-mdc-tab-body-wrapper::-webkit-scrollbar-thumb:hover {\n  background: rgba(16, 211, 74, 0.3);\n}\n.signup-form[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 32px;\n  padding: 0 16px;\n  max-width: 800px;\n  margin: 0 auto;\n}\n.signup-form[_ngcontent-%COMP%]   .form-section[_ngcontent-%COMP%] {\n  background: rgba(255, 255, 255, 0.05);\n  border-radius: 8px;\n  padding: 24px;\n  margin-bottom: 16px;\n}\n.signup-form[_ngcontent-%COMP%]   .form-section[_ngcontent-%COMP%]   .section-title[_ngcontent-%COMP%] {\n  color: #F6BD38;\n  font-size: 18px;\n  font-weight: 600;\n  margin-bottom: 24px;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n  border-left: 4px solid #F6BD38;\n  padding-left: 12px;\n}\n.signup-form[_ngcontent-%COMP%]   .form-section[_ngcontent-%COMP%]   .form-row[_ngcontent-%COMP%] {\n  margin-bottom: 16px;\n}\n.signup-form[_ngcontent-%COMP%]   .form-section[_ngcontent-%COMP%]   .form-row.two-columns[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 16px;\n}\n.signup-form[_ngcontent-%COMP%]   .form-section[_ngcontent-%COMP%]   .form-row[_ngcontent-%COMP%]:last-child {\n  margin-bottom: 0;\n}\n.signup-form[_ngcontent-%COMP%]   .form-section[_ngcontent-%COMP%]   .form-row.full-width[_ngcontent-%COMP%] {\n  grid-column: 1/-1;\n}\nmat-form-field.largura-total[_ngcontent-%COMP%], \n.login-form[_ngcontent-%COMP%]   mat-form-field[_ngcontent-%COMP%] {\n  width: 100%;\n  min-width: 200px;\n}\n  .mat-mdc-form-field {\n  width: 100%;\n}\n  .mat-mdc-form-field .mat-mdc-input-element, \n  .mat-mdc-form-field .mat-mdc-select-value-text, \n  .mat-mdc-form-field .mdc-floating-label, \n  .mat-mdc-form-field .mat-mdc-select-arrow {\n  color: white !important;\n}\n  .mat-mdc-form-field .mat-mdc-input-element:hover, \n  .mat-mdc-form-field .mat-mdc-input-element:focus {\n  color: white !important;\n}\n  .mat-mdc-form-field .mdc-text-field--outlined {\n  --mdc-outlined-text-field-label-text-color: rgba(255, 255, 255, 0.6);\n  --mdc-outlined-text-field-outline-color: rgba(255, 255, 255, 0.3);\n  --mdc-outlined-text-field-hover-outline-color: #F6BD38;\n  --mdc-outlined-text-field-focus-outline-color: #F6BD38;\n}\n  .mat-mdc-form-field .mdc-text-field--focused:not(.mdc-text-field--disabled) .mdc-floating-label {\n  color: #F6BD38 !important;\n}\n  .mat-mdc-form-field textarea {\n  min-height: 100px;\n}\nmat-error[_ngcontent-%COMP%] {\n  color: #D1495B !important;\n  font-size: 0.8rem;\n  font-weight: 500;\n  opacity: 1 !important;\n}\n.mat-mdc-form-field-error[_ngcontent-%COMP%] {\n  color: #D1495B !important;\n}\n.input-icon[_ngcontent-%COMP%] {\n  margin-left: 8px;\n  margin-right: 8px;\n  width: 24px;\n  height: 24px;\n  color: white;\n}\n.forgot-password[_ngcontent-%COMP%] {\n  margin-top: 8px;\n  text-align: right;\n}\n.forgot-password[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #F6BD38;\n  text-decoration: none;\n  font-size: 14px;\n}\n.forgot-password[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  text-decoration: underline;\n}\n.forgot-password[_ngcontent-%COMP%]   .not-ready[_ngcontent-%COMP%] {\n  display: block;\n  color: #D1495B;\n  font-size: 13px;\n  margin-top: 4px;\n}\n.horarios-grid[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 16px;\n}\n.horarios-grid[_ngcontent-%COMP%]   .horario-row[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 16px;\n}\n.horarios-grid[_ngcontent-%COMP%]   .horario-row[_ngcontent-%COMP%]   .dia-semana[_ngcontent-%COMP%] {\n  min-width: 120px;\n  color: white;\n}\n.horarios-grid[_ngcontent-%COMP%]   .horario-row[_ngcontent-%COMP%]   .horarios-inputs[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 16px;\n  flex: 1;\n}\n@media (max-width: 768px) {\n  .signup-form[_ngcontent-%COMP%] {\n    padding: 0;\n  }\n  .signup-form[_ngcontent-%COMP%]   .form-section[_ngcontent-%COMP%] {\n    padding: 16px;\n  }\n  .signup-form[_ngcontent-%COMP%]   .form-section[_ngcontent-%COMP%]   .form-row.two-columns[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  .horarios-grid[_ngcontent-%COMP%]   .horario-row[_ngcontent-%COMP%] {\n    flex-direction: column;\n    align-items: flex-start;\n  }\n  .horarios-grid[_ngcontent-%COMP%]   .horario-row[_ngcontent-%COMP%]   .dia-semana[_ngcontent-%COMP%] {\n    min-width: auto;\n  }\n  .horarios-grid[_ngcontent-%COMP%]   .horario-row[_ngcontent-%COMP%]   .horarios-inputs[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n}\n@media (max-width: 600px) {\n  .login-form[_ngcontent-%COMP%] {\n    max-width: 100%;\n    padding: 0 8px;\n  }\n}\n.signup-link[_ngcontent-%COMP%] {\n  margin-top: 16px;\n  text-align: center;\n}\n.signup-link[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #DA4A24;\n  text-decoration: none;\n  font-weight: 500;\n}\n.signup-link[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  text-decoration: underline;\n}\n.login-error-card[_ngcontent-%COMP%] {\n  background: #D1495B;\n  color: #fff;\n  border-radius: 8px;\n  padding: 18px 24px;\n  margin: 18px auto 0 auto;\n  max-width: 500px;\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  font-size: 1.1rem;\n  font-weight: 600;\n  box-shadow: 0 2px 8px rgba(209, 73, 91, 0.08);\n}\n.login-error-card[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  color: #fff;\n  font-size: 2rem;\n}\n.actions[_ngcontent-%COMP%] {\n  margin-top: 1.5rem;\n  display: flex;\n  flex-direction: column;\n  gap: 1rem;\n}\n.actions[_ngcontent-%COMP%]   .primary-action[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 50px;\n  background:\n    linear-gradient(\n      135deg,\n      #F6BD38 0%,\n      #FDD835 100%);\n  border: none;\n  color: #4A3429;\n  font-weight: 600;\n  font-size: 1rem;\n  border-radius: 8px;\n  transition: all 0.3s ease;\n  cursor: pointer;\n}\n.actions[_ngcontent-%COMP%]   .primary-action[_ngcontent-%COMP%]:hover:not(:disabled) {\n  transform: translateY(-2px);\n  box-shadow: 0 8px 25px rgba(246, 189, 56, 0.4);\n}\n.actions[_ngcontent-%COMP%]   .primary-action[_ngcontent-%COMP%]:disabled {\n  opacity: 0.6;\n  cursor: not-allowed;\n  transform: none;\n}\n.actions[_ngcontent-%COMP%]   .primary-action[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  margin-right: 0.5rem;\n}\n.actions[_ngcontent-%COMP%]   .secondary-action[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 45px;\n  border: 1px solid rgba(246, 189, 56, 0.3);\n  color: #F6BD38;\n  background: transparent;\n  font-weight: 500;\n  border-radius: 8px;\n  transition: all 0.3s ease;\n  cursor: pointer;\n}\n.actions[_ngcontent-%COMP%]   .secondary-action[_ngcontent-%COMP%]:hover {\n  background: rgba(246, 189, 56, 0.1);\n  border-color: #F6BD38;\n}\n.actions[_ngcontent-%COMP%]   .secondary-action[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  margin-right: 0.5rem;\n}\n/*# sourceMappingURL=login.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(LoginComponent, [{
    type: Component,
    args: [{ selector: "app-login", standalone: true, imports: [
      CommonModule,
      DefaultLoginLayoutComponent,
      ReactiveFormsModule,
      MatFormFieldModule,
      MatInputModule,
      MatIconModule,
      MatButtonModule,
      NzIconModule
    ], providers: [], template: `<app-default-login-layout>\r
\r
    <div class="form-section">\r
        <form [formGroup]="loginForm" class="login-form" (ngSubmit)="realizarLogin()">\r
            <!-- Campo E-mail -->\r
            <mat-form-field class="largura-total" appearance="outline" >\r
                <mat-label>E-mail</mat-label>\r
                <span matPrefix>\r
                    <mat-icon class="input-icon">email</mat-icon>\r
                </span>\r
                <input matInput placeholder="Seu e-mail" formControlName="email" type="email">\r
\r
                <!-- Priorizar o erro do TLD antes do erro padr\xE3o -->\r
                <mat-error *ngIf="loginForm.get('email')?.hasError('emailTLD')">\r
                    Insira um email v\xE1lido com um dom\xEDnio (ex: .com)\r
                </mat-error>\r
                <mat-error *ngIf="loginForm.get('email')?.hasError('email') && !loginForm.get('email')?.hasError('emailTLD')">\r
                    Email inv\xE1lido\r
                </mat-error>\r
                <mat-error *ngIf="loginForm.get('email')?.hasError('required') && !loginForm.get('email')?.hasError('emailTLD') && !loginForm.get('email')?.hasError('email')">\r
                    Este campo \xE9 obrigat\xF3rio\r
                </mat-error>\r
            </mat-form-field>\r
\r
            <!-- Campo Senha -->\r
            <mat-form-field class="largura-total" appearance="outline">\r
                <mat-label>Senha</mat-label>\r
                <span matPrefix>\r
                    <mat-icon class="input-icon">lock</mat-icon>\r
                </span>\r
                <input matInput placeholder="Sua senha" formControlName="senha" type="password">\r
                <mat-error *ngIf="loginForm.get('senha')?.hasError('required')">\r
                    Este campo \xE9 obrigat\xF3rio\r
                </mat-error>\r
            </mat-form-field>\r
            <!-- Link Esqueci Minha Senha -->\r
            <div class="forgot-password">\r
                <a href="#" (click)="forgotPassword(); $event.preventDefault();">Esqueci minha senha</a>\r
                <span *ngIf="showForgotInfo" class="not-ready">Funcionalidade ainda n\xE3o implementada.</span>\r
            </div>\r
            <div *ngIf="showLoginError" class="login-error-card">\r
                <mat-icon>error</mat-icon>\r
                N\xE3o foi poss\xEDvel acessar sua conta. Verifique seu e-mail e senha e tente novamente.\r
            </div>\r
            <div class="actions">\r
                <button \r
                  type="submit" \r
                  class="primary-action" \r
                  [disabled]="!loginForm.valid">\r
                  <i nz-icon nzType="login" nzTheme="outline"></i>\r
                  Entrar\r
                </button>\r
                \r
                <button \r
                  type="button"\r
                  class="secondary-action" \r
                  (click)="irParaCadastro()">\r
                  <i nz-icon nzType="user-add" nzTheme="outline"></i>\r
                  Criar Conta\r
                </button>\r
            </div>\r
        </form>\r
    </div>\r
</app-default-login-layout>\r
`, styles: ["/* src/app/pages/acesso/login/login.component.scss */\n.form-section {\n  background: rgba(255, 255, 255, 0.05);\n  border-radius: 8px;\n  padding: 32px;\n  margin: 0 auto;\n  width: 100%;\n  max-width: 500px;\n}\n.login-form {\n  display: flex;\n  flex-direction: column;\n  gap: 16px;\n  width: 100%;\n  margin: 0 auto;\n}\n.login-form ::ng-deep .mat-mdc-text-field-wrapper {\n  width: 100%;\n  z-index: 0;\n}\n.login-form ::ng-deep .mat-mdc-form-field {\n  width: 100%;\n}\n.signup-tabs {\n  margin-top: -24px;\n}\n.signup-tabs ::ng-deep .mat-mdc-tab-header {\n  margin-bottom: 24px;\n  border-bottom: 1px solid rgba(255, 255, 255, 0.12);\n}\n.signup-tabs ::ng-deep .mat-mdc-tab-header .mat-mdc-tab {\n  color: rgba(255, 255, 255, 0.6);\n  min-height: 48px;\n}\n.signup-tabs ::ng-deep .mat-mdc-tab-header .mat-mdc-tab.mdc-tab--active {\n  color: #F6BD38;\n}\n.signup-tabs ::ng-deep .mat-mdc-tab-header .mat-mdc-tab .mdc-tab-indicator__content--underline {\n  border-color: #F6BD38;\n}\n.signup-tabs ::ng-deep .mat-mdc-tab-body-wrapper {\n  height: calc(100vh - 250px);\n  overflow-y: auto;\n}\n.signup-tabs ::ng-deep .mat-mdc-tab-body-wrapper::-webkit-scrollbar {\n  width: 8px;\n}\n.signup-tabs ::ng-deep .mat-mdc-tab-body-wrapper::-webkit-scrollbar-track {\n  background: rgba(29, 87, 196, 0.1);\n  border-radius: 4px;\n}\n.signup-tabs ::ng-deep .mat-mdc-tab-body-wrapper::-webkit-scrollbar-thumb {\n  background: rgba(18, 116, 31, 0.2);\n  border-radius: 4px;\n}\n.signup-tabs ::ng-deep .mat-mdc-tab-body-wrapper::-webkit-scrollbar-thumb:hover {\n  background: rgba(16, 211, 74, 0.3);\n}\n.signup-form {\n  display: flex;\n  flex-direction: column;\n  gap: 32px;\n  padding: 0 16px;\n  max-width: 800px;\n  margin: 0 auto;\n}\n.signup-form .form-section {\n  background: rgba(255, 255, 255, 0.05);\n  border-radius: 8px;\n  padding: 24px;\n  margin-bottom: 16px;\n}\n.signup-form .form-section .section-title {\n  color: #F6BD38;\n  font-size: 18px;\n  font-weight: 600;\n  margin-bottom: 24px;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n  border-left: 4px solid #F6BD38;\n  padding-left: 12px;\n}\n.signup-form .form-section .form-row {\n  margin-bottom: 16px;\n}\n.signup-form .form-section .form-row.two-columns {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 16px;\n}\n.signup-form .form-section .form-row:last-child {\n  margin-bottom: 0;\n}\n.signup-form .form-section .form-row.full-width {\n  grid-column: 1/-1;\n}\nmat-form-field.largura-total,\n.login-form mat-form-field {\n  width: 100%;\n  min-width: 200px;\n}\n::ng-deep .mat-mdc-form-field {\n  width: 100%;\n}\n::ng-deep .mat-mdc-form-field .mat-mdc-input-element,\n::ng-deep .mat-mdc-form-field .mat-mdc-select-value-text,\n::ng-deep .mat-mdc-form-field .mdc-floating-label,\n::ng-deep .mat-mdc-form-field .mat-mdc-select-arrow {\n  color: white !important;\n}\n::ng-deep .mat-mdc-form-field .mat-mdc-input-element:hover,\n::ng-deep .mat-mdc-form-field .mat-mdc-input-element:focus {\n  color: white !important;\n}\n::ng-deep .mat-mdc-form-field .mdc-text-field--outlined {\n  --mdc-outlined-text-field-label-text-color: rgba(255, 255, 255, 0.6);\n  --mdc-outlined-text-field-outline-color: rgba(255, 255, 255, 0.3);\n  --mdc-outlined-text-field-hover-outline-color: #F6BD38;\n  --mdc-outlined-text-field-focus-outline-color: #F6BD38;\n}\n::ng-deep .mat-mdc-form-field .mdc-text-field--focused:not(.mdc-text-field--disabled) .mdc-floating-label {\n  color: #F6BD38 !important;\n}\n::ng-deep .mat-mdc-form-field textarea {\n  min-height: 100px;\n}\nmat-error {\n  color: #D1495B !important;\n  font-size: 0.8rem;\n  font-weight: 500;\n  opacity: 1 !important;\n}\n.mat-mdc-form-field-error {\n  color: #D1495B !important;\n}\n.input-icon {\n  margin-left: 8px;\n  margin-right: 8px;\n  width: 24px;\n  height: 24px;\n  color: white;\n}\n.forgot-password {\n  margin-top: 8px;\n  text-align: right;\n}\n.forgot-password a {\n  color: #F6BD38;\n  text-decoration: none;\n  font-size: 14px;\n}\n.forgot-password a:hover {\n  text-decoration: underline;\n}\n.forgot-password .not-ready {\n  display: block;\n  color: #D1495B;\n  font-size: 13px;\n  margin-top: 4px;\n}\n.horarios-grid {\n  display: flex;\n  flex-direction: column;\n  gap: 16px;\n}\n.horarios-grid .horario-row {\n  display: flex;\n  align-items: center;\n  gap: 16px;\n}\n.horarios-grid .horario-row .dia-semana {\n  min-width: 120px;\n  color: white;\n}\n.horarios-grid .horario-row .horarios-inputs {\n  display: flex;\n  gap: 16px;\n  flex: 1;\n}\n@media (max-width: 768px) {\n  .signup-form {\n    padding: 0;\n  }\n  .signup-form .form-section {\n    padding: 16px;\n  }\n  .signup-form .form-section .form-row.two-columns {\n    grid-template-columns: 1fr;\n  }\n  .horarios-grid .horario-row {\n    flex-direction: column;\n    align-items: flex-start;\n  }\n  .horarios-grid .horario-row .dia-semana {\n    min-width: auto;\n  }\n  .horarios-grid .horario-row .horarios-inputs {\n    width: 100%;\n  }\n}\n@media (max-width: 600px) {\n  .login-form {\n    max-width: 100%;\n    padding: 0 8px;\n  }\n}\n.signup-link {\n  margin-top: 16px;\n  text-align: center;\n}\n.signup-link a {\n  color: #DA4A24;\n  text-decoration: none;\n  font-weight: 500;\n}\n.signup-link a:hover {\n  text-decoration: underline;\n}\n.login-error-card {\n  background: #D1495B;\n  color: #fff;\n  border-radius: 8px;\n  padding: 18px 24px;\n  margin: 18px auto 0 auto;\n  max-width: 500px;\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  font-size: 1.1rem;\n  font-weight: 600;\n  box-shadow: 0 2px 8px rgba(209, 73, 91, 0.08);\n}\n.login-error-card mat-icon {\n  color: #fff;\n  font-size: 2rem;\n}\n.actions {\n  margin-top: 1.5rem;\n  display: flex;\n  flex-direction: column;\n  gap: 1rem;\n}\n.actions .primary-action {\n  width: 100%;\n  height: 50px;\n  background:\n    linear-gradient(\n      135deg,\n      #F6BD38 0%,\n      #FDD835 100%);\n  border: none;\n  color: #4A3429;\n  font-weight: 600;\n  font-size: 1rem;\n  border-radius: 8px;\n  transition: all 0.3s ease;\n  cursor: pointer;\n}\n.actions .primary-action:hover:not(:disabled) {\n  transform: translateY(-2px);\n  box-shadow: 0 8px 25px rgba(246, 189, 56, 0.4);\n}\n.actions .primary-action:disabled {\n  opacity: 0.6;\n  cursor: not-allowed;\n  transform: none;\n}\n.actions .primary-action i {\n  margin-right: 0.5rem;\n}\n.actions .secondary-action {\n  width: 100%;\n  height: 45px;\n  border: 1px solid rgba(246, 189, 56, 0.3);\n  color: #F6BD38;\n  background: transparent;\n  font-weight: 500;\n  border-radius: 8px;\n  transition: all 0.3s ease;\n  cursor: pointer;\n}\n.actions .secondary-action:hover {\n  background: rgba(246, 189, 56, 0.1);\n  border-color: #F6BD38;\n}\n.actions .secondary-action i {\n  margin-right: 0.5rem;\n}\n/*# sourceMappingURL=login.component.css.map */\n"] }]
  }], () => [], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(LoginComponent, { className: "LoginComponent", filePath: "src/app/pages/acesso/login/login.component.ts", lineNumber: 33 });
})();
export {
  LoginComponent
};
//# sourceMappingURL=chunk-HJOYFR66.js.map
