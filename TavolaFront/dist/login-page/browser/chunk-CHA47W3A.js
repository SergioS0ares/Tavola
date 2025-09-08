import {
  MatCard,
  MatCardActions,
  MatCardContent,
  MatCardHeader,
  MatCardImage,
  MatCardModule,
  MatCardSubtitle,
  MatCardTitle
} from "./chunk-6YAGKJBE.js";
import {
  MatAnchor,
  MatButton,
  MatButtonModule
} from "./chunk-7M5C6ZGC.js";
import {
  AuthService
} from "./chunk-PZUSUSHQ.js";
import {
  GlobalSpinnerService
} from "./chunk-XAACXT24.js";
import {
  MatIcon,
  MatIconModule
} from "./chunk-WG6I7YZH.js";
import "./chunk-B6PCS4YX.js";
import {
  Router,
  RouterLink,
  RouterModule
} from "./chunk-5CK7YN5Y.js";
import {
  CommonModule,
  DatePipe,
  NgClass,
  NgForOf,
  NgIf
} from "./chunk-IOJADCVY.js";
import {
  Component,
  delay,
  finalize,
  inject,
  of,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵProvidersFeature,
  ɵɵadvance,
  ɵɵclassProp,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind2,
  ɵɵproperty,
  ɵɵpropertyInterpolate1,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeUrl,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-CO622P43.js";

// src/app/pages/historico-reservas/historico-reservas.component.ts
function HistoricoReservasComponent_div_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 7)(1, "div", 8)(2, "mat-icon");
    \u0275\u0275text(3, "restaurant_menu");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "h3");
    \u0275\u0275text(5, "Sua linha do tempo ainda n\xE3o tem hist\xF3rias para contar");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "p");
    \u0275\u0275text(7, "Que tal come\xE7ar sua jornada gastron\xF4mica?");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "a", 9)(9, "mat-icon");
    \u0275\u0275text(10, "add");
    \u0275\u0275elementEnd();
    \u0275\u0275text(11, " Fazer a primeira reserva ");
    \u0275\u0275elementEnd()();
  }
}
function HistoricoReservasComponent_div_12_div_1_li_8_div_47_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 34)(1, "div", 35)(2, "mat-icon");
    \u0275\u0275text(3, "chat_bubble_outline");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "strong");
    \u0275\u0275text(5, "Suas Prefer\xEAncias");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div", 36)(7, "p");
    \u0275\u0275text(8);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const reserva_r2 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate1('"', reserva_r2.comentariosPreferenciaReserva, '"');
  }
}
function HistoricoReservasComponent_div_12_div_1_li_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "li", 17)(1, "div", 18)(2, "mat-icon");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "mat-card", 19)(5, "div", 20);
    \u0275\u0275element(6, "img", 21);
    \u0275\u0275elementStart(7, "div", 22)(8, "mat-icon");
    \u0275\u0275text(9);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "span");
    \u0275\u0275text(11);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(12, "mat-card-header", 23)(13, "div", 24)(14, "mat-card-title");
    \u0275\u0275text(15);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "mat-card-subtitle")(17, "mat-icon");
    \u0275\u0275text(18, "location_on");
    \u0275\u0275elementEnd();
    \u0275\u0275text(19);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(20, "mat-card-content")(21, "div", 25)(22, "div", 26)(23, "mat-icon");
    \u0275\u0275text(24, "event");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "div", 27)(26, "span", 28);
    \u0275\u0275text(27, "Data");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(28, "span", 29);
    \u0275\u0275text(29);
    \u0275\u0275pipe(30, "date");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(31, "div", 26)(32, "mat-icon");
    \u0275\u0275text(33, "schedule");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(34, "div", 27)(35, "span", 28);
    \u0275\u0275text(36, "Hor\xE1rio");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(37, "span", 29);
    \u0275\u0275text(38);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(39, "div", 26)(40, "mat-icon");
    \u0275\u0275text(41, "group");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(42, "div", 27)(43, "span", 28);
    \u0275\u0275text(44, "Pessoas");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(45, "span", 29);
    \u0275\u0275text(46);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275template(47, HistoricoReservasComponent_div_12_div_1_li_8_div_47_Template, 9, 1, "div", 30);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(48, "mat-card-actions", 31)(49, "button", 32);
    \u0275\u0275listener("click", function HistoricoReservasComponent_div_12_div_1_li_8_Template_button_click_49_listener() {
      const reserva_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r2.verRestaurante(reserva_r2.idRestaurante));
    });
    \u0275\u0275elementStart(50, "mat-icon");
    \u0275\u0275text(51, "visibility");
    \u0275\u0275elementEnd();
    \u0275\u0275text(52, " Ver Restaurante ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(53, "button", 33);
    \u0275\u0275listener("click", function HistoricoReservasComponent_div_12_div_1_li_8_Template_button_click_53_listener() {
      const reserva_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r2.reservarNovamente(reserva_r2.idRestaurante));
    });
    \u0275\u0275elementStart(54, "mat-icon");
    \u0275\u0275text(55, "refresh");
    \u0275\u0275elementEnd();
    \u0275\u0275text(56, " Reservar Novamente ");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const reserva_r2 = ctx.$implicit;
    const isLast_r4 = ctx.last;
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275classProp("last-item", isLast_r4);
    \u0275\u0275advance();
    \u0275\u0275property("ngClass", "badge-" + reserva_r2.status.toLowerCase());
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r2.getIconePorStatus(reserva_r2.status));
    \u0275\u0275advance();
    \u0275\u0275property("ngClass", "status-border-" + reserva_r2.status.toLowerCase());
    \u0275\u0275advance(2);
    \u0275\u0275propertyInterpolate1("alt", "Foto de ", reserva_r2.nomeRestaurante, "");
    \u0275\u0275property("src", ctx_r2.getImagemUrl(reserva_r2.imagemRestaurante), \u0275\u0275sanitizeUrl);
    \u0275\u0275advance();
    \u0275\u0275property("ngClass", "status-" + reserva_r2.status.toLowerCase());
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r2.getIconePorStatus(reserva_r2.status));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r2.getStatusText(reserva_r2.status));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(reserva_r2.nomeRestaurante);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", reserva_r2.enderecoResumido, " ");
    \u0275\u0275advance(10);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(30, 17, reserva_r2.data, "dd/MM/yyyy"));
    \u0275\u0275advance(9);
    \u0275\u0275textInterpolate(reserva_r2.horario);
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate(reserva_r2.quantidadePessoas);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", reserva_r2.comentariosPreferenciaReserva);
  }
}
function HistoricoReservasComponent_div_12_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 12)(1, "div", 13)(2, "div", 14)(3, "mat-icon");
    \u0275\u0275text(4, "calendar_month");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "span");
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(7, "ul", 15);
    \u0275\u0275template(8, HistoricoReservasComponent_div_12_div_1_li_8_Template, 57, 20, "li", 16);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const grupo_r5 = ctx.$implicit;
    const isFirst_r6 = ctx.first;
    \u0275\u0275classProp("first-group", isFirst_r6);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(grupo_r5.mesAno);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", grupo_r5.reservas);
  }
}
function HistoricoReservasComponent_div_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 10);
    \u0275\u0275template(1, HistoricoReservasComponent_div_12_div_1_Template, 9, 4, "div", 11);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r2.historicoAgrupado);
  }
}
var mockHistoricoReservas = [
  {
    idReserva: "1",
    idRestaurante: "rest1",
    nomeRestaurante: "Cantina da Nona",
    imagemRestaurante: "assets/jpg/restauranteModelo.jpg",
    enderecoResumido: "Setor Bueno, Goi\xE2nia",
    data: "2025-08-20",
    horario: "20:30",
    quantidadePessoas: 2,
    status: "CONCLU\xCDDA",
    comentariosPreferenciaReserva: "Mesa perto da janela, por favor. \xC9 uma comemora\xE7\xE3o de anivers\xE1rio."
  },
  {
    idReserva: "2",
    idRestaurante: "rest2",
    nomeRestaurante: "Sushi Prime",
    imagemRestaurante: "assets/jpg/restauranteModelo.jpg",
    enderecoResumido: "Jardim Goi\xE1s, Goi\xE2nia",
    data: "2025-08-15",
    horario: "19:00",
    quantidadePessoas: 4,
    status: "CONCLU\xCDDA"
  },
  {
    idReserva: "3",
    idRestaurante: "rest3",
    nomeRestaurante: "Steak House Imperial",
    imagemRestaurante: "assets/jpg/restauranteModelo.jpg",
    enderecoResumido: "Setor Marista, Goi\xE2nia",
    data: "2025-07-28",
    horario: "21:00",
    quantidadePessoas: 3,
    status: "CANCELADA"
  },
  {
    idReserva: "4",
    idRestaurante: "rest1",
    nomeRestaurante: "Cantina da Nona",
    imagemRestaurante: "assets/jpg/restauranteModelo.jpg",
    enderecoResumido: "Setor Bueno, Goi\xE2nia",
    data: "2025-09-10",
    horario: "12:00",
    quantidadePessoas: 5,
    status: "CONFIRMADA",
    comentariosPreferenciaReserva: "Precisaremos de uma cadeira de beb\xEA."
  }
];
var HistoricoReservasComponent = class _HistoricoReservasComponent {
  constructor() {
    this.authService = inject(AuthService);
    this.router = inject(Router);
    this.datePipe = inject(DatePipe);
    this.spinnerService = inject(GlobalSpinnerService);
    this.historicoAgrupado = [];
  }
  ngOnInit() {
    this.spinnerService.mostrar();
    of(mockHistoricoReservas).pipe(delay(1500), finalize(() => this.spinnerService.ocultar())).subscribe({
      next: (data) => {
        this.historicoAgrupado = this.agruparReservasPorMes(data);
      },
      error: (err) => {
        console.error("Erro ao buscar hist\xF3rico de reservas:", err);
      }
    });
  }
  agruparReservasPorMes(reservas) {
    if (!reservas || reservas.length === 0) {
      return [];
    }
    const sortedReservas = reservas.sort((a, b) => new Date(b.data).getTime() - new Date(a.data).getTime());
    const grupos = {};
    for (const reserva of sortedReservas) {
      const mesAno = this.datePipe.transform(reserva.data, "MMMM 'de' yyyy", "pt-BR");
      const chave = mesAno.charAt(0).toUpperCase() + mesAno.slice(1);
      if (!grupos[chave]) {
        grupos[chave] = [];
      }
      grupos[chave].push(reserva);
    }
    return Object.keys(grupos).map((chave) => ({
      mesAno: chave,
      reservas: grupos[chave]
    }));
  }
  getIconePorStatus(status) {
    switch (status) {
      case "CONCLU\xCDDA":
        return "check_circle";
      case "CONFIRMADA":
        return "schedule";
      case "CANCELADA":
        return "cancel";
      default:
        return "circle";
    }
  }
  getStatusText(status) {
    switch (status) {
      case "CONCLU\xCDDA":
        return "Conclu\xEDda";
      case "CONFIRMADA":
        return "Confirmada";
      case "CANCELADA":
        return "Cancelada";
      default:
        return status;
    }
  }
  getImagemUrl(path) {
    if (path && path.startsWith("assets/")) {
      return path;
    }
    return this.authService.getAbsoluteImageUrl(path);
  }
  verRestaurante(idRestaurante) {
    if (idRestaurante) {
      this.router.navigate(["/restaurante", idRestaurante]);
    }
  }
  reservarNovamente(idRestaurante) {
    if (idRestaurante) {
      this.router.navigate(["/restaurante", idRestaurante]);
    }
  }
  static {
    this.\u0275fac = function HistoricoReservasComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _HistoricoReservasComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _HistoricoReservasComponent, selectors: [["app-historico-reservas"]], features: [\u0275\u0275ProvidersFeature([DatePipe])], decls: 13, vars: 2, consts: [[1, "historico-container"], [1, "page-header"], [1, "header-content"], [1, "header-icon"], [1, "header-text"], ["class", "sem-reservas", 4, "ngIf"], ["class", "timeline-wrapper", 4, "ngIf"], [1, "sem-reservas"], [1, "empty-state-icon"], ["mat-flat-button", "", "color", "primary", "routerLink", "/home", 1, "cta-button"], [1, "timeline-wrapper"], ["class", "timeline-group", 3, "first-group", 4, "ngFor", "ngForOf"], [1, "timeline-group"], [1, "timeline-month-header"], [1, "month-badge"], [1, "timeline"], ["class", "timeline-item", 3, "last-item", 4, "ngFor", "ngForOf"], [1, "timeline-item"], [1, "timeline-badge", 3, "ngClass"], [1, "reserva-card", 3, "ngClass"], [1, "card-header-image"], ["mat-card-image", "", 1, "restaurante-imagem", 3, "src", "alt"], [1, "status-badge", 3, "ngClass"], [1, "enhanced-header"], [1, "restaurant-info"], [1, "info-reserva"], [1, "info-item"], [1, "info-text"], [1, "label"], [1, "value"], ["class", "comentarios-section", 4, "ngIf"], [1, "card-actions"], ["mat-stroked-button", "", 1, "action-btn", "secondary", 3, "click"], ["mat-flat-button", "", "color", "primary", 1, "action-btn", "primary", 3, "click"], [1, "comentarios-section"], [1, "comentario-header"], [1, "comentario-content"]], template: function HistoricoReservasComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "mat-icon");
        \u0275\u0275text(5, "timeline");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(6, "div", 4)(7, "h1");
        \u0275\u0275text(8, "Minha Linha do Tempo");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(9, "p");
        \u0275\u0275text(10, "Sua jornada gastron\xF4mica atrav\xE9s do Tavola, reserva por reserva.");
        \u0275\u0275elementEnd()()()();
        \u0275\u0275template(11, HistoricoReservasComponent_div_11_Template, 12, 0, "div", 5)(12, HistoricoReservasComponent_div_12_Template, 2, 1, "div", 6);
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        \u0275\u0275advance(11);
        \u0275\u0275property("ngIf", ctx.historicoAgrupado.length === 0);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.historicoAgrupado.length > 0);
      }
    }, dependencies: [CommonModule, NgClass, NgForOf, NgIf, DatePipe, RouterModule, RouterLink, MatCardModule, MatCard, MatCardActions, MatCardContent, MatCardHeader, MatCardImage, MatCardSubtitle, MatCardTitle, MatIconModule, MatIcon, MatButtonModule, MatAnchor, MatButton], styles: ['\n\n.historico-container[_ngcontent-%COMP%] {\n  padding: 24px;\n  max-width: 1000px;\n  margin: auto;\n  font-family: "Poppins", sans-serif;\n  min-height: 100vh;\n  background:\n    linear-gradient(\n      135deg,\n      rgba(139, 69, 19, 0.02) 0%,\n      rgba(255, 248, 220, 0.05) 100%);\n}\n.page-header[_ngcontent-%COMP%] {\n  margin-bottom: 40px;\n}\n.page-header[_ngcontent-%COMP%]   .header-content[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 20px;\n  padding: 24px;\n  background: white;\n  border-radius: 16px;\n  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);\n  border: 1px solid rgba(139, 69, 19, 0.1);\n}\n.page-header[_ngcontent-%COMP%]   .header-icon[_ngcontent-%COMP%] {\n  width: 60px;\n  height: 60px;\n  background:\n    linear-gradient(\n      135deg,\n      #F6BD38,\n      #f4a261);\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.page-header[_ngcontent-%COMP%]   .header-icon[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 28px;\n  width: 28px;\n  height: 28px;\n  color: white;\n}\n.page-header[_ngcontent-%COMP%]   .header-text[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  color: #3B221B;\n  font-weight: 700;\n  font-size: 28px;\n  margin: 0 0 8px 0;\n}\n.page-header[_ngcontent-%COMP%]   .header-text[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: rgba(59, 34, 27, 0.7);\n  font-size: 16px;\n  margin: 0;\n  line-height: 1.5;\n}\n.sem-reservas[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 60px 40px;\n  background: white;\n  border-radius: 20px;\n  border: 2px dashed rgba(139, 69, 19, 0.2);\n  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.06);\n}\n.sem-reservas[_ngcontent-%COMP%]   .empty-state-icon[_ngcontent-%COMP%] {\n  width: 100px;\n  height: 100px;\n  background:\n    linear-gradient(\n      135deg,\n      rgba(139, 69, 19, 0.1),\n      rgba(244, 162, 97, 0.1));\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  margin: 0 auto 24px;\n}\n.sem-reservas[_ngcontent-%COMP%]   .empty-state-icon[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 48px;\n  width: 48px;\n  height: 48px;\n  color: #F6BD38;\n}\n.sem-reservas[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 24px;\n  font-weight: 600;\n  color: #3B221B;\n  margin: 0 0 12px 0;\n}\n.sem-reservas[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 16px;\n  color: rgba(59, 34, 27, 0.7);\n  margin: 0 0 32px 0;\n}\n.sem-reservas[_ngcontent-%COMP%]   .cta-button[_ngcontent-%COMP%] {\n  padding: 12px 32px;\n  font-size: 16px;\n  font-weight: 600;\n  border-radius: 25px;\n}\n.sem-reservas[_ngcontent-%COMP%]   .cta-button[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  margin-right: 8px;\n}\n.timeline-wrapper[_ngcontent-%COMP%] {\n  max-width: 900px;\n  margin: 0 auto;\n}\n.timeline-group[_ngcontent-%COMP%] {\n  margin-bottom: 48px;\n}\n.timeline-group.first-group[_ngcontent-%COMP%]   .timeline-month-header[_ngcontent-%COMP%] {\n  margin-top: 0;\n}\n.timeline-month-header[_ngcontent-%COMP%] {\n  margin: 48px 0 32px 0;\n  display: flex;\n  justify-content: center;\n}\n.timeline-month-header[_ngcontent-%COMP%]   .month-badge[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  background: white;\n  padding: 16px 32px;\n  border-radius: 50px;\n  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.1);\n  border: 2px solid #F6BD38;\n}\n.timeline-month-header[_ngcontent-%COMP%]   .month-badge[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  color: #F6BD38;\n  font-size: 24px;\n  width: 24px;\n  height: 24px;\n}\n.timeline-month-header[_ngcontent-%COMP%]   .month-badge[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: 18px;\n  font-weight: 600;\n  color: #3B221B;\n  text-transform: capitalize;\n}\n.timeline[_ngcontent-%COMP%] {\n  list-style-type: none;\n  padding: 0;\n  position: relative;\n}\n.timeline[_ngcontent-%COMP%]::before {\n  content: "";\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 24px;\n  width: 3px;\n  background:\n    linear-gradient(\n      to bottom,\n      #F6BD38,\n      rgba(139, 69, 19, 0.3));\n  border-radius: 2px;\n  z-index: 1;\n}\n.timeline-item[_ngcontent-%COMP%] {\n  position: relative;\n  margin-bottom: 40px;\n  animation: _ngcontent-%COMP%_fadeInUp 0.6s ease-out;\n}\n.timeline-item.last-item[_ngcontent-%COMP%] {\n  margin-bottom: 0;\n}\n@keyframes _ngcontent-%COMP%_fadeInUp {\n  from {\n    opacity: 0;\n    transform: translateY(30px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n.timeline-badge[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 20px;\n  left: 0;\n  width: 48px;\n  height: 48px;\n  border-radius: 50%;\n  background: white;\n  border: 3px solid;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  z-index: 2;\n  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);\n  transition: transform 0.3s ease;\n}\n.timeline-badge[_ngcontent-%COMP%]:hover {\n  transform: scale(1.1);\n}\n.timeline-badge.badge-concluida[_ngcontent-%COMP%] {\n  border-color: #4CAF50;\n  background:\n    linear-gradient(\n      135deg,\n      #4CAF50,\n      #4ade80);\n}\n.timeline-badge.badge-concluida[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  color: white;\n}\n.timeline-badge.badge-confirmada[_ngcontent-%COMP%] {\n  border-color: #F6BD38;\n  background:\n    linear-gradient(\n      135deg,\n      #F6BD38,\n      #f4a261);\n}\n.timeline-badge.badge-confirmada[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  color: white;\n}\n.timeline-badge.badge-cancelada[_ngcontent-%COMP%] {\n  border-color: #D1495B;\n  background:\n    linear-gradient(\n      135deg,\n      #D1495B,\n      #f87171);\n}\n.timeline-badge.badge-cancelada[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  color: white;\n}\n.timeline-badge[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 20px;\n  width: 20px;\n  height: 20px;\n}\n.reserva-card[_ngcontent-%COMP%] {\n  margin-left: 72px;\n  position: relative;\n  border-radius: 16px;\n  overflow: hidden;\n  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.08);\n  border: 1px solid rgba(139, 69, 19, 0.1);\n  transition: all 0.3s ease;\n  background: white;\n}\n.reserva-card[_ngcontent-%COMP%]:hover {\n  transform: translateY(-4px);\n  box-shadow: 0 16px 48px rgba(0, 0, 0, 0.12);\n}\n.reserva-card[_ngcontent-%COMP%]::before {\n  content: "";\n  position: absolute;\n  top: 28px;\n  left: -12px;\n  width: 0;\n  height: 0;\n  border-style: solid;\n  border-width: 10px 12px 10px 0;\n  border-color: transparent white transparent transparent;\n  z-index: 1;\n}\n.reserva-card.status-border-concluida[_ngcontent-%COMP%] {\n  border-left: 4px solid #4CAF50;\n}\n.reserva-card.status-border-confirmada[_ngcontent-%COMP%] {\n  border-left: 4px solid #F6BD38;\n}\n.reserva-card.status-border-cancelada[_ngcontent-%COMP%] {\n  border-left: 4px solid #D1495B;\n}\n.card-header-image[_ngcontent-%COMP%] {\n  position: relative;\n}\n.card-header-image[_ngcontent-%COMP%]   .restaurante-imagem[_ngcontent-%COMP%] {\n  height: 200px;\n  width: 100%;\n  object-fit: cover;\n  background-color: #5C7028;\n}\n.card-header-image[_ngcontent-%COMP%]   .status-badge[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 16px;\n  right: 16px;\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  padding: 8px 16px;\n  border-radius: 20px;\n  font-size: 12px;\n  font-weight: 600;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n  -webkit-backdrop-filter: blur(10px);\n  backdrop-filter: blur(10px);\n}\n.card-header-image[_ngcontent-%COMP%]   .status-badge.status-concluida[_ngcontent-%COMP%] {\n  background: rgba(34, 197, 94, 0.9);\n  color: white;\n}\n.card-header-image[_ngcontent-%COMP%]   .status-badge.status-confirmada[_ngcontent-%COMP%] {\n  background: rgba(245, 158, 11, 0.9);\n  color: white;\n}\n.card-header-image[_ngcontent-%COMP%]   .status-badge.status-cancelada[_ngcontent-%COMP%] {\n  background: rgba(239, 68, 68, 0.9);\n  color: white;\n}\n.card-header-image[_ngcontent-%COMP%]   .status-badge[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 16px;\n  width: 16px;\n  height: 16px;\n}\n.enhanced-header[_ngcontent-%COMP%] {\n  padding: 20px 24px 16px;\n}\n.enhanced-header[_ngcontent-%COMP%]   .restaurant-info[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.enhanced-header[_ngcontent-%COMP%]   .restaurant-info[_ngcontent-%COMP%]   mat-card-title[_ngcontent-%COMP%] {\n  font-size: 22px;\n  font-weight: 700;\n  color: #3B221B;\n  margin-bottom: 8px;\n}\n.enhanced-header[_ngcontent-%COMP%]   .restaurant-info[_ngcontent-%COMP%]   mat-card-subtitle[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  color: rgba(59, 34, 27, 0.7);\n  font-size: 14px;\n}\n.enhanced-header[_ngcontent-%COMP%]   .restaurant-info[_ngcontent-%COMP%]   mat-card-subtitle[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 16px;\n  width: 16px;\n  height: 16px;\n}\nmat-card-content[_ngcontent-%COMP%] {\n  padding: 0 24px 20px;\n}\n.info-reserva[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));\n  gap: 20px;\n  margin-bottom: 20px;\n}\n.info-reserva[_ngcontent-%COMP%]   .info-item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  padding: 12px;\n  background: rgba(139, 69, 19, 0.04);\n  border-radius: 12px;\n  border: 1px solid rgba(139, 69, 19, 0.1);\n}\n.info-reserva[_ngcontent-%COMP%]   .info-item[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 20px;\n  width: 20px;\n  height: 20px;\n  color: #F6BD38;\n}\n.info-reserva[_ngcontent-%COMP%]   .info-item[_ngcontent-%COMP%]   .info-text[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n}\n.info-reserva[_ngcontent-%COMP%]   .info-item[_ngcontent-%COMP%]   .info-text[_ngcontent-%COMP%]   .label[_ngcontent-%COMP%] {\n  font-size: 11px;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n  color: rgba(59, 34, 27, 0.7);\n  font-weight: 500;\n}\n.info-reserva[_ngcontent-%COMP%]   .info-item[_ngcontent-%COMP%]   .info-text[_ngcontent-%COMP%]   .value[_ngcontent-%COMP%] {\n  font-size: 14px;\n  font-weight: 600;\n  color: #3B221B;\n  margin-top: 2px;\n}\n.comentarios-section[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      rgba(255, 248, 220, 0.8),\n      rgba(245, 158, 11, 0.1));\n  border-radius: 12px;\n  border: 1px solid rgba(245, 158, 11, 0.2);\n  padding: 16px;\n}\n.comentarios-section[_ngcontent-%COMP%]   .comentario-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  margin-bottom: 12px;\n}\n.comentarios-section[_ngcontent-%COMP%]   .comentario-header[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  color: #F6BD38;\n  font-size: 18px;\n  width: 18px;\n  height: 18px;\n}\n.comentarios-section[_ngcontent-%COMP%]   .comentario-header[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  font-weight: 600;\n  color: #3B221B;\n  font-size: 14px;\n}\n.comentarios-section[_ngcontent-%COMP%]   .comentario-content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n  font-style: italic;\n  color: rgba(59, 34, 27, 0.7);\n  line-height: 1.6;\n  font-size: 14px;\n  padding-left: 28px;\n}\n.card-actions[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-end;\n  gap: 12px;\n  padding: 0 24px 24px;\n}\n.card-actions[_ngcontent-%COMP%]   .action-btn[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding: 10px 20px;\n  border-radius: 25px;\n  font-weight: 500;\n  transition: all 0.3s ease;\n}\n.card-actions[_ngcontent-%COMP%]   .action-btn.secondary[_ngcontent-%COMP%] {\n  border-color: rgba(139, 69, 19, 0.3);\n  color: rgba(59, 34, 27, 0.7);\n}\n.card-actions[_ngcontent-%COMP%]   .action-btn.secondary[_ngcontent-%COMP%]:hover {\n  background: rgba(139, 69, 19, 0.05);\n  border-color: #F6BD38;\n}\n.card-actions[_ngcontent-%COMP%]   .action-btn.primary[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #F6BD38,\n      #f4a261);\n}\n.card-actions[_ngcontent-%COMP%]   .action-btn.primary[_ngcontent-%COMP%]:hover {\n  transform: translateY(-1px);\n  box-shadow: 0 4px 12px rgba(245, 158, 11, 0.3);\n}\n.card-actions[_ngcontent-%COMP%]   .action-btn[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 18px;\n  width: 18px;\n  height: 18px;\n}\n@media (max-width: 768px) {\n  .historico-container[_ngcontent-%COMP%] {\n    padding: 16px;\n  }\n  .page-header[_ngcontent-%COMP%]   .header-content[_ngcontent-%COMP%] {\n    flex-direction: column;\n    text-align: center;\n    gap: 16px;\n  }\n  .timeline[_ngcontent-%COMP%]::before {\n    left: 20px;\n  }\n  .timeline-badge[_ngcontent-%COMP%] {\n    width: 40px;\n    height: 40px;\n    left: 0;\n  }\n  .reserva-card[_ngcontent-%COMP%] {\n    margin-left: 60px;\n  }\n  .reserva-card[_ngcontent-%COMP%]::before {\n    left: -10px;\n    border-width: 8px 10px 8px 0;\n  }\n  .info-reserva[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n    gap: 12px;\n  }\n  .card-actions[_ngcontent-%COMP%] {\n    flex-direction: column;\n  }\n  .card-actions[_ngcontent-%COMP%]   .action-btn[_ngcontent-%COMP%] {\n    width: 100%;\n    justify-content: center;\n  }\n}\n/*# sourceMappingURL=historico-reservas.component.css.map */'] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(HistoricoReservasComponent, [{
    type: Component,
    args: [{ selector: "app-historico-reservas", standalone: true, imports: [CommonModule, RouterModule, MatCardModule, MatIconModule, MatButtonModule], providers: [DatePipe], template: `<div class="historico-container">\r
    <div class="page-header">\r
      <div class="header-content">\r
        <div class="header-icon">\r
          <mat-icon>timeline</mat-icon>\r
        </div>\r
        <div class="header-text">\r
          <h1>Minha Linha do Tempo</h1>\r
          <p>Sua jornada gastron\xF4mica atrav\xE9s do Tavola, reserva por reserva.</p>\r
        </div>\r
      </div>\r
    </div>\r
  \r
    <div *ngIf="historicoAgrupado.length === 0" class="sem-reservas">\r
      <div class="empty-state-icon">\r
        <mat-icon>restaurant_menu</mat-icon>\r
      </div>\r
      <h3>Sua linha do tempo ainda n\xE3o tem hist\xF3rias para contar</h3>\r
      <p>Que tal come\xE7ar sua jornada gastron\xF4mica?</p>\r
      <a mat-flat-button color="primary" routerLink="/home" class="cta-button">\r
        <mat-icon>add</mat-icon>\r
        Fazer a primeira reserva\r
      </a>\r
    </div>\r
  \r
    <div *ngIf="historicoAgrupado.length > 0" class="timeline-wrapper">\r
      <div *ngFor="let grupo of historicoAgrupado; let isFirst = first" class="timeline-group" \r
           [class.first-group]="isFirst">\r
        \r
        <div class="timeline-month-header">\r
          <div class="month-badge">\r
            <mat-icon>calendar_month</mat-icon>\r
            <span>{{ grupo.mesAno }}</span>\r
          </div>\r
        </div>\r
  \r
        <ul class="timeline">\r
          <li *ngFor="let reserva of grupo.reservas; let isLast = last" \r
              class="timeline-item" \r
              [class.last-item]="isLast">\r
            \r
            <div class="timeline-badge" [ngClass]="'badge-' + reserva.status.toLowerCase()">\r
              <mat-icon>{{ getIconePorStatus(reserva.status) }}</mat-icon>\r
            </div>\r
  \r
            <mat-card class="reserva-card" [ngClass]="'status-border-' + reserva.status.toLowerCase()">\r
              \r
              <div class="card-header-image">\r
                <img mat-card-image \r
                     class="restaurante-imagem" \r
                     [src]="getImagemUrl(reserva.imagemRestaurante)" \r
                     alt="Foto de {{ reserva.nomeRestaurante }}">\r
                \r
                <div class="status-badge" [ngClass]="'status-' + reserva.status.toLowerCase()">\r
                  <mat-icon>{{ getIconePorStatus(reserva.status) }}</mat-icon>\r
                  <span>{{ getStatusText(reserva.status) }}</span>\r
                </div>\r
              </div>\r
              \r
              <mat-card-header class="enhanced-header">\r
                <div class="restaurant-info">\r
                  <mat-card-title>{{ reserva.nomeRestaurante }}</mat-card-title>\r
                  <mat-card-subtitle>\r
                    <mat-icon>location_on</mat-icon>\r
                    {{ reserva.enderecoResumido }}\r
                  </mat-card-subtitle>\r
                </div>\r
              </mat-card-header>\r
  \r
              <mat-card-content>\r
                <div class="info-reserva">\r
                  <div class="info-item">\r
                    <mat-icon>event</mat-icon>\r
                    <div class="info-text">\r
                      <span class="label">Data</span>\r
                      <span class="value">{{ reserva.data | date:'dd/MM/yyyy' }}</span>\r
                    </div>\r
                  </div>\r
                  \r
                  <div class="info-item">\r
                    <mat-icon>schedule</mat-icon>\r
                    <div class="info-text">\r
                      <span class="label">Hor\xE1rio</span>\r
                      <span class="value">{{ reserva.horario }}</span>\r
                    </div>\r
                  </div>\r
                  \r
                  <div class="info-item">\r
                    <mat-icon>group</mat-icon>\r
                    <div class="info-text">\r
                      <span class="label">Pessoas</span>\r
                      <span class="value">{{ reserva.quantidadePessoas }}</span>\r
                    </div>\r
                  </div>\r
                </div>\r
  \r
                <div *ngIf="reserva.comentariosPreferenciaReserva" class="comentarios-section">\r
                  <div class="comentario-header">\r
                    <mat-icon>chat_bubble_outline</mat-icon>\r
                    <strong>Suas Prefer\xEAncias</strong>\r
                  </div>\r
                  <div class="comentario-content">\r
                    <p>"{{ reserva.comentariosPreferenciaReserva }}"</p>\r
                  </div>\r
                </div>\r
              </mat-card-content>\r
              \r
              <mat-card-actions class="card-actions">\r
                <button mat-stroked-button (click)="verRestaurante(reserva.idRestaurante)" class="action-btn secondary">\r
                  <mat-icon>visibility</mat-icon>\r
                  Ver Restaurante\r
                </button>\r
                <button mat-flat-button color="primary" (click)="reservarNovamente(reserva.idRestaurante)" class="action-btn primary">\r
                  <mat-icon>refresh</mat-icon>\r
                  Reservar Novamente\r
                </button>\r
              </mat-card-actions>\r
            </mat-card>\r
          </li>\r
        </ul>\r
      </div>\r
    </div>\r
  </div>\r
  `, styles: ['/* src/app/pages/historico-reservas/historico-reservas.component.scss */\n.historico-container {\n  padding: 24px;\n  max-width: 1000px;\n  margin: auto;\n  font-family: "Poppins", sans-serif;\n  min-height: 100vh;\n  background:\n    linear-gradient(\n      135deg,\n      rgba(139, 69, 19, 0.02) 0%,\n      rgba(255, 248, 220, 0.05) 100%);\n}\n.page-header {\n  margin-bottom: 40px;\n}\n.page-header .header-content {\n  display: flex;\n  align-items: center;\n  gap: 20px;\n  padding: 24px;\n  background: white;\n  border-radius: 16px;\n  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);\n  border: 1px solid rgba(139, 69, 19, 0.1);\n}\n.page-header .header-icon {\n  width: 60px;\n  height: 60px;\n  background:\n    linear-gradient(\n      135deg,\n      #F6BD38,\n      #f4a261);\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.page-header .header-icon mat-icon {\n  font-size: 28px;\n  width: 28px;\n  height: 28px;\n  color: white;\n}\n.page-header .header-text h1 {\n  color: #3B221B;\n  font-weight: 700;\n  font-size: 28px;\n  margin: 0 0 8px 0;\n}\n.page-header .header-text p {\n  color: rgba(59, 34, 27, 0.7);\n  font-size: 16px;\n  margin: 0;\n  line-height: 1.5;\n}\n.sem-reservas {\n  text-align: center;\n  padding: 60px 40px;\n  background: white;\n  border-radius: 20px;\n  border: 2px dashed rgba(139, 69, 19, 0.2);\n  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.06);\n}\n.sem-reservas .empty-state-icon {\n  width: 100px;\n  height: 100px;\n  background:\n    linear-gradient(\n      135deg,\n      rgba(139, 69, 19, 0.1),\n      rgba(244, 162, 97, 0.1));\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  margin: 0 auto 24px;\n}\n.sem-reservas .empty-state-icon mat-icon {\n  font-size: 48px;\n  width: 48px;\n  height: 48px;\n  color: #F6BD38;\n}\n.sem-reservas h3 {\n  font-size: 24px;\n  font-weight: 600;\n  color: #3B221B;\n  margin: 0 0 12px 0;\n}\n.sem-reservas p {\n  font-size: 16px;\n  color: rgba(59, 34, 27, 0.7);\n  margin: 0 0 32px 0;\n}\n.sem-reservas .cta-button {\n  padding: 12px 32px;\n  font-size: 16px;\n  font-weight: 600;\n  border-radius: 25px;\n}\n.sem-reservas .cta-button mat-icon {\n  margin-right: 8px;\n}\n.timeline-wrapper {\n  max-width: 900px;\n  margin: 0 auto;\n}\n.timeline-group {\n  margin-bottom: 48px;\n}\n.timeline-group.first-group .timeline-month-header {\n  margin-top: 0;\n}\n.timeline-month-header {\n  margin: 48px 0 32px 0;\n  display: flex;\n  justify-content: center;\n}\n.timeline-month-header .month-badge {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  background: white;\n  padding: 16px 32px;\n  border-radius: 50px;\n  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.1);\n  border: 2px solid #F6BD38;\n}\n.timeline-month-header .month-badge mat-icon {\n  color: #F6BD38;\n  font-size: 24px;\n  width: 24px;\n  height: 24px;\n}\n.timeline-month-header .month-badge span {\n  font-size: 18px;\n  font-weight: 600;\n  color: #3B221B;\n  text-transform: capitalize;\n}\n.timeline {\n  list-style-type: none;\n  padding: 0;\n  position: relative;\n}\n.timeline::before {\n  content: "";\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 24px;\n  width: 3px;\n  background:\n    linear-gradient(\n      to bottom,\n      #F6BD38,\n      rgba(139, 69, 19, 0.3));\n  border-radius: 2px;\n  z-index: 1;\n}\n.timeline-item {\n  position: relative;\n  margin-bottom: 40px;\n  animation: fadeInUp 0.6s ease-out;\n}\n.timeline-item.last-item {\n  margin-bottom: 0;\n}\n@keyframes fadeInUp {\n  from {\n    opacity: 0;\n    transform: translateY(30px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n.timeline-badge {\n  position: absolute;\n  top: 20px;\n  left: 0;\n  width: 48px;\n  height: 48px;\n  border-radius: 50%;\n  background: white;\n  border: 3px solid;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  z-index: 2;\n  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);\n  transition: transform 0.3s ease;\n}\n.timeline-badge:hover {\n  transform: scale(1.1);\n}\n.timeline-badge.badge-concluida {\n  border-color: #4CAF50;\n  background:\n    linear-gradient(\n      135deg,\n      #4CAF50,\n      #4ade80);\n}\n.timeline-badge.badge-concluida mat-icon {\n  color: white;\n}\n.timeline-badge.badge-confirmada {\n  border-color: #F6BD38;\n  background:\n    linear-gradient(\n      135deg,\n      #F6BD38,\n      #f4a261);\n}\n.timeline-badge.badge-confirmada mat-icon {\n  color: white;\n}\n.timeline-badge.badge-cancelada {\n  border-color: #D1495B;\n  background:\n    linear-gradient(\n      135deg,\n      #D1495B,\n      #f87171);\n}\n.timeline-badge.badge-cancelada mat-icon {\n  color: white;\n}\n.timeline-badge mat-icon {\n  font-size: 20px;\n  width: 20px;\n  height: 20px;\n}\n.reserva-card {\n  margin-left: 72px;\n  position: relative;\n  border-radius: 16px;\n  overflow: hidden;\n  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.08);\n  border: 1px solid rgba(139, 69, 19, 0.1);\n  transition: all 0.3s ease;\n  background: white;\n}\n.reserva-card:hover {\n  transform: translateY(-4px);\n  box-shadow: 0 16px 48px rgba(0, 0, 0, 0.12);\n}\n.reserva-card::before {\n  content: "";\n  position: absolute;\n  top: 28px;\n  left: -12px;\n  width: 0;\n  height: 0;\n  border-style: solid;\n  border-width: 10px 12px 10px 0;\n  border-color: transparent white transparent transparent;\n  z-index: 1;\n}\n.reserva-card.status-border-concluida {\n  border-left: 4px solid #4CAF50;\n}\n.reserva-card.status-border-confirmada {\n  border-left: 4px solid #F6BD38;\n}\n.reserva-card.status-border-cancelada {\n  border-left: 4px solid #D1495B;\n}\n.card-header-image {\n  position: relative;\n}\n.card-header-image .restaurante-imagem {\n  height: 200px;\n  width: 100%;\n  object-fit: cover;\n  background-color: #5C7028;\n}\n.card-header-image .status-badge {\n  position: absolute;\n  top: 16px;\n  right: 16px;\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  padding: 8px 16px;\n  border-radius: 20px;\n  font-size: 12px;\n  font-weight: 600;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n  -webkit-backdrop-filter: blur(10px);\n  backdrop-filter: blur(10px);\n}\n.card-header-image .status-badge.status-concluida {\n  background: rgba(34, 197, 94, 0.9);\n  color: white;\n}\n.card-header-image .status-badge.status-confirmada {\n  background: rgba(245, 158, 11, 0.9);\n  color: white;\n}\n.card-header-image .status-badge.status-cancelada {\n  background: rgba(239, 68, 68, 0.9);\n  color: white;\n}\n.card-header-image .status-badge mat-icon {\n  font-size: 16px;\n  width: 16px;\n  height: 16px;\n}\n.enhanced-header {\n  padding: 20px 24px 16px;\n}\n.enhanced-header .restaurant-info {\n  width: 100%;\n}\n.enhanced-header .restaurant-info mat-card-title {\n  font-size: 22px;\n  font-weight: 700;\n  color: #3B221B;\n  margin-bottom: 8px;\n}\n.enhanced-header .restaurant-info mat-card-subtitle {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  color: rgba(59, 34, 27, 0.7);\n  font-size: 14px;\n}\n.enhanced-header .restaurant-info mat-card-subtitle mat-icon {\n  font-size: 16px;\n  width: 16px;\n  height: 16px;\n}\nmat-card-content {\n  padding: 0 24px 20px;\n}\n.info-reserva {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));\n  gap: 20px;\n  margin-bottom: 20px;\n}\n.info-reserva .info-item {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  padding: 12px;\n  background: rgba(139, 69, 19, 0.04);\n  border-radius: 12px;\n  border: 1px solid rgba(139, 69, 19, 0.1);\n}\n.info-reserva .info-item mat-icon {\n  font-size: 20px;\n  width: 20px;\n  height: 20px;\n  color: #F6BD38;\n}\n.info-reserva .info-item .info-text {\n  display: flex;\n  flex-direction: column;\n}\n.info-reserva .info-item .info-text .label {\n  font-size: 11px;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n  color: rgba(59, 34, 27, 0.7);\n  font-weight: 500;\n}\n.info-reserva .info-item .info-text .value {\n  font-size: 14px;\n  font-weight: 600;\n  color: #3B221B;\n  margin-top: 2px;\n}\n.comentarios-section {\n  background:\n    linear-gradient(\n      135deg,\n      rgba(255, 248, 220, 0.8),\n      rgba(245, 158, 11, 0.1));\n  border-radius: 12px;\n  border: 1px solid rgba(245, 158, 11, 0.2);\n  padding: 16px;\n}\n.comentarios-section .comentario-header {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  margin-bottom: 12px;\n}\n.comentarios-section .comentario-header mat-icon {\n  color: #F6BD38;\n  font-size: 18px;\n  width: 18px;\n  height: 18px;\n}\n.comentarios-section .comentario-header strong {\n  font-weight: 600;\n  color: #3B221B;\n  font-size: 14px;\n}\n.comentarios-section .comentario-content p {\n  margin: 0;\n  font-style: italic;\n  color: rgba(59, 34, 27, 0.7);\n  line-height: 1.6;\n  font-size: 14px;\n  padding-left: 28px;\n}\n.card-actions {\n  display: flex;\n  justify-content: flex-end;\n  gap: 12px;\n  padding: 0 24px 24px;\n}\n.card-actions .action-btn {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding: 10px 20px;\n  border-radius: 25px;\n  font-weight: 500;\n  transition: all 0.3s ease;\n}\n.card-actions .action-btn.secondary {\n  border-color: rgba(139, 69, 19, 0.3);\n  color: rgba(59, 34, 27, 0.7);\n}\n.card-actions .action-btn.secondary:hover {\n  background: rgba(139, 69, 19, 0.05);\n  border-color: #F6BD38;\n}\n.card-actions .action-btn.primary {\n  background:\n    linear-gradient(\n      135deg,\n      #F6BD38,\n      #f4a261);\n}\n.card-actions .action-btn.primary:hover {\n  transform: translateY(-1px);\n  box-shadow: 0 4px 12px rgba(245, 158, 11, 0.3);\n}\n.card-actions .action-btn mat-icon {\n  font-size: 18px;\n  width: 18px;\n  height: 18px;\n}\n@media (max-width: 768px) {\n  .historico-container {\n    padding: 16px;\n  }\n  .page-header .header-content {\n    flex-direction: column;\n    text-align: center;\n    gap: 16px;\n  }\n  .timeline::before {\n    left: 20px;\n  }\n  .timeline-badge {\n    width: 40px;\n    height: 40px;\n    left: 0;\n  }\n  .reserva-card {\n    margin-left: 60px;\n  }\n  .reserva-card::before {\n    left: -10px;\n    border-width: 8px 10px 8px 0;\n  }\n  .info-reserva {\n    grid-template-columns: 1fr;\n    gap: 12px;\n  }\n  .card-actions {\n    flex-direction: column;\n  }\n  .card-actions .action-btn {\n    width: 100%;\n    justify-content: center;\n  }\n}\n/*# sourceMappingURL=historico-reservas.component.css.map */\n'] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(HistoricoReservasComponent, { className: "HistoricoReservasComponent", filePath: "src/app/pages/historico-reservas/historico-reservas.component.ts", lineNumber: 75 });
})();
export {
  HistoricoReservasComponent
};
//# sourceMappingURL=chunk-CHA47W3A.js.map
