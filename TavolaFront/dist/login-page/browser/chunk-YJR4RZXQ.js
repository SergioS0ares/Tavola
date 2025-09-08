import {
  NzModalComponent,
  NzModalContentDirective,
  NzModalModule
} from "./chunk-5CDHZQHO.js";
import {
  MatChipsModule,
  require_sweetalert2_all
} from "./chunk-JMP7E2TJ.js";
import {
  MatCard,
  MatCardModule
} from "./chunk-6YAGKJBE.js";
import {
  NzImageDirective,
  NzImageGroupComponent,
  NzImageModule
} from "./chunk-XUYENL7J.js";
import "./chunk-OO7IWOFT.js";
import {
  GlobalSpinnerComponent
} from "./chunk-M3IXWULH.js";
import "./chunk-K7WFS432.js";
import {
  MatDivider,
  MatDividerModule
} from "./chunk-GDD6UY2N.js";
import {
  MatSelect,
  MatSelectModule
} from "./chunk-ILTVZJJ6.js";
import {
  MatButton,
  MatButtonModule,
  MatIconButton
} from "./chunk-7M5C6ZGC.js";
import {
  AuthService
} from "./chunk-PZUSUSHQ.js";
import {
  MatAutocompleteModule
} from "./chunk-SBT7BDQG.js";
import {
  RestauranteService
} from "./chunk-2QDEYY6F.js";
import {
  MatOption
} from "./chunk-7TJEGKW3.js";
import {
  environment
} from "./chunk-ESXVDBVT.js";
import "./chunk-XAACXT24.js";
import {
  MatFormField,
  MatFormFieldModule,
  MatInput,
  MatInputModule,
  MatLabel
} from "./chunk-TFBPBZK4.js";
import {
  MatIcon,
  MatIconModule
} from "./chunk-WG6I7YZH.js";
import "./chunk-QJYZSRL2.js";
import "./chunk-RUUFL2BH.js";
import {
  ToastrService
} from "./chunk-FTC7ZL3K.js";
import {
  DefaultValueAccessor,
  FormArrayName,
  FormBuilder,
  FormControlName,
  FormGroupDirective,
  FormGroupName,
  NgControlStatus,
  NgControlStatusGroup,
  ReactiveFormsModule,
  Validators,
  ɵNgNoValidate
} from "./chunk-X4ULZSL7.js";
import "./chunk-B6PCS4YX.js";
import "./chunk-WXYLYLSJ.js";
import "./chunk-3I5GT2UP.js";
import "./chunk-TIW6MRUB.js";
import "./chunk-X3P5AUPX.js";
import "./chunk-SM7NAYZH.js";
import {
  CommonModule,
  NgForOf,
  NgIf
} from "./chunk-IOJADCVY.js";
import "./chunk-ZE3YZEND.js";
import {
  ChangeDetectorRef,
  Component,
  __toESM,
  inject,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementContainerEnd,
  ɵɵelementContainerStart,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵreference,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-CO622P43.js";

// src/app/pages/meu-restaurante/meu-restaurante.component.ts
var import_sweetalert2 = __toESM(require_sweetalert2_all());
var _c0 = () => ({ padding: "24px" });
function MeuRestauranteComponent_form_6_mat_option_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 30);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const tipo_r2 = ctx.$implicit;
    \u0275\u0275property("value", tipo_r2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(tipo_r2);
  }
}
function MeuRestauranteComponent_form_6_div_30_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 31)(1, "nz-image-group")(2, "div", 32);
    \u0275\u0275element(3, "img", 33);
    \u0275\u0275elementStart(4, "div", 34)(5, "div", 35);
    \u0275\u0275text(6, "Principal");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "button", 36);
    \u0275\u0275listener("click", function MeuRestauranteComponent_form_6_div_30_Template_button_click_7_listener($event) {
      \u0275\u0275restoreView(_r5);
      const ctx_r3 = \u0275\u0275nextContext(2);
      ctx_r3.removerImagemPrincipal();
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275elementStart(8, "mat-icon");
    \u0275\u0275text(9, "close");
    \u0275\u0275elementEnd()()()()()();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275property("nzSrc", ctx_r3.imagemPrincipal.url);
  }
}
function MeuRestauranteComponent_form_6_div_45_div_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 43);
    \u0275\u0275element(1, "img", 44);
    \u0275\u0275elementStart(2, "button", 45);
    \u0275\u0275listener("click", function MeuRestauranteComponent_form_6_div_45_div_3_Template_button_click_2_listener($event) {
      \u0275\u0275restoreView(_r7);
      const ctx_r3 = \u0275\u0275nextContext(3);
      ctx_r3.removerImagem(ctx_r3.previews.indexOf(ctx_r3.galeriaPreviews[0]));
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275elementStart(3, "mat-icon");
    \u0275\u0275text(4, "close");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275property("nzSrc", ctx_r3.galeriaPreviews[0].url);
  }
}
function MeuRestauranteComponent_form_6_div_45_div_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 46);
    \u0275\u0275element(1, "img", 44);
    \u0275\u0275elementStart(2, "button", 45);
    \u0275\u0275listener("click", function MeuRestauranteComponent_form_6_div_45_div_4_Template_button_click_2_listener($event) {
      \u0275\u0275restoreView(_r8);
      const ctx_r3 = \u0275\u0275nextContext(3);
      ctx_r3.removerImagem(ctx_r3.previews.indexOf(ctx_r3.galeriaPreviews[1]));
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275elementStart(3, "mat-icon");
    \u0275\u0275text(4, "close");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275property("nzSrc", ctx_r3.galeriaPreviews[1].url);
  }
}
function MeuRestauranteComponent_form_6_div_45_div_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 47);
    \u0275\u0275element(1, "img", 44);
    \u0275\u0275elementStart(2, "button", 45);
    \u0275\u0275listener("click", function MeuRestauranteComponent_form_6_div_45_div_5_Template_button_click_2_listener($event) {
      \u0275\u0275restoreView(_r9);
      const ctx_r3 = \u0275\u0275nextContext(3);
      ctx_r3.removerImagem(ctx_r3.previews.indexOf(ctx_r3.galeriaPreviews[2]));
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275elementStart(3, "mat-icon");
    \u0275\u0275text(4, "close");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275property("nzSrc", ctx_r3.galeriaPreviews[2].url);
  }
}
function MeuRestauranteComponent_form_6_div_45_div_6_div_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 50);
    \u0275\u0275listener("click", function MeuRestauranteComponent_form_6_div_45_div_6_div_2_Template_div_click_0_listener($event) {
      \u0275\u0275restoreView(_r11);
      const ctx_r3 = \u0275\u0275nextContext(4);
      ctx_r3.openGallery();
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275elementStart(1, "span");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext(4);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("Veja outras ", ctx_r3.galeriaPreviews.length - 4, " fotos");
  }
}
function MeuRestauranteComponent_form_6_div_45_div_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 48);
    \u0275\u0275element(1, "img", 44);
    \u0275\u0275template(2, MeuRestauranteComponent_form_6_div_45_div_6_div_2_Template, 3, 1, "div", 49);
    \u0275\u0275elementStart(3, "button", 45);
    \u0275\u0275listener("click", function MeuRestauranteComponent_form_6_div_45_div_6_Template_button_click_3_listener($event) {
      \u0275\u0275restoreView(_r10);
      const ctx_r3 = \u0275\u0275nextContext(3);
      ctx_r3.removerImagem(ctx_r3.previews.indexOf(ctx_r3.galeriaPreviews[3]));
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275elementStart(4, "mat-icon");
    \u0275\u0275text(5, "close");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275property("nzSrc", ctx_r3.galeriaPreviews[3].url);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r3.galeriaPreviews.length > 4);
  }
}
function MeuRestauranteComponent_form_6_div_45_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 37)(1, "nz-image-group")(2, "div", 38);
    \u0275\u0275template(3, MeuRestauranteComponent_form_6_div_45_div_3_Template, 5, 1, "div", 39)(4, MeuRestauranteComponent_form_6_div_45_div_4_Template, 5, 1, "div", 40)(5, MeuRestauranteComponent_form_6_div_45_div_5_Template, 5, 1, "div", 41)(6, MeuRestauranteComponent_form_6_div_45_div_6_Template, 6, 2, "div", 42);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", ctx_r3.galeriaPreviews[0]);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r3.galeriaPreviews[1]);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r3.galeriaPreviews[2]);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r3.galeriaPreviews[3]);
  }
}
function MeuRestauranteComponent_form_6_div_52_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 51)(1, "mat-form-field", 52)(2, "mat-label");
    \u0275\u0275text(3, "Dia da Semana");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "mat-select", 53)(5, "mat-option", 54);
    \u0275\u0275text(6, "Segunda-feira");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "mat-option", 55);
    \u0275\u0275text(8, "Ter\xE7a-feira");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "mat-option", 56);
    \u0275\u0275text(10, "Quarta-feira");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "mat-option", 57);
    \u0275\u0275text(12, "Quinta-feira");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "mat-option", 58);
    \u0275\u0275text(14, "Sexta-feira");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "mat-option", 59);
    \u0275\u0275text(16, "S\xE1bado");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "mat-option", 60);
    \u0275\u0275text(18, "Domingo");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(19, "div", 61)(20, "mat-form-field", 12)(21, "mat-label");
    \u0275\u0275text(22, "Abertura");
    \u0275\u0275elementEnd();
    \u0275\u0275element(23, "input", 62);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "mat-form-field", 12)(25, "mat-label");
    \u0275\u0275text(26, "Fechamento");
    \u0275\u0275elementEnd();
    \u0275\u0275element(27, "input", 63);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(28, "button", 64);
    \u0275\u0275listener("click", function MeuRestauranteComponent_form_6_div_52_Template_button_click_28_listener() {
      const i_r13 = \u0275\u0275restoreView(_r12).index;
      const ctx_r3 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r3.removeHorario(i_r13));
    });
    \u0275\u0275elementStart(29, "mat-icon");
    \u0275\u0275text(30, "delete");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const i_r13 = ctx.index;
    \u0275\u0275property("formGroupName", i_r13);
  }
}
function MeuRestauranteComponent_form_6_mat_option_67_mat_icon_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-icon");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const servico_r14 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(servico_r14.icone);
  }
}
function MeuRestauranteComponent_form_6_mat_option_67_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 30);
    \u0275\u0275template(1, MeuRestauranteComponent_form_6_mat_option_67_mat_icon_1_Template, 2, 1, "mat-icon", 65);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const servico_r14 = ctx.$implicit;
    \u0275\u0275property("value", servico_r14.nome);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", servico_r14.icone);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", servico_r14.nome, " ");
  }
}
function MeuRestauranteComponent_form_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "form", 8)(1, "mat-card", 9)(2, "div", 10)(3, "h3");
    \u0275\u0275text(4, "Informa\xE7\xF5es Gerais");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(5, "mat-divider");
    \u0275\u0275elementStart(6, "div", 11)(7, "mat-form-field", 12)(8, "mat-label");
    \u0275\u0275text(9, "Tipo de Cozinha");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "mat-select", 13);
    \u0275\u0275template(11, MeuRestauranteComponent_form_6_mat_option_11_Template, 2, 2, "mat-option", 14);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(12, "mat-form-field", 12)(13, "mat-label");
    \u0275\u0275text(14, "Descri\xE7\xE3o do Restaurante");
    \u0275\u0275elementEnd();
    \u0275\u0275element(15, "textarea", 15);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(16, "mat-card", 9)(17, "div", 10)(18, "h3");
    \u0275\u0275text(19, "Imagem Principal (para a home)");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(20, "mat-divider");
    \u0275\u0275elementStart(21, "div", 11)(22, "div", 16)(23, "div", 17)(24, "button", 18);
    \u0275\u0275listener("click", function MeuRestauranteComponent_form_6_Template_button_click_24_listener() {
      \u0275\u0275restoreView(_r1);
      const principalUploadInput_r3 = \u0275\u0275reference(29);
      return \u0275\u0275resetView(principalUploadInput_r3.click());
    });
    \u0275\u0275elementStart(25, "mat-icon");
    \u0275\u0275text(26, "upload");
    \u0275\u0275elementEnd();
    \u0275\u0275text(27, " Enviar imagem principal ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(28, "input", 19, 0);
    \u0275\u0275listener("change", function MeuRestauranteComponent_form_6_Template_input_change_28_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.onFileSelected($event, "principal"));
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275template(30, MeuRestauranteComponent_form_6_div_30_Template, 10, 1, "div", 20);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(31, "mat-card", 9)(32, "div", 10)(33, "h3");
    \u0275\u0275text(34, "Galeria de Fotos (para a p\xE1gina do restaurante)");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(35, "mat-divider");
    \u0275\u0275elementStart(36, "div", 11)(37, "div", 16)(38, "div", 17)(39, "button", 18);
    \u0275\u0275listener("click", function MeuRestauranteComponent_form_6_Template_button_click_39_listener() {
      \u0275\u0275restoreView(_r1);
      const galeriaUploadInput_r6 = \u0275\u0275reference(44);
      return \u0275\u0275resetView(galeriaUploadInput_r6.click());
    });
    \u0275\u0275elementStart(40, "mat-icon");
    \u0275\u0275text(41, "add_a_photo");
    \u0275\u0275elementEnd();
    \u0275\u0275text(42, " Adicionar \xE0 galeria ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(43, "input", 21, 1);
    \u0275\u0275listener("change", function MeuRestauranteComponent_form_6_Template_input_change_43_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.onFileSelected($event, "galeria"));
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275template(45, MeuRestauranteComponent_form_6_div_45_Template, 7, 4, "div", 22);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(46, "mat-card", 9)(47, "div", 10)(48, "h3");
    \u0275\u0275text(49, "Hor\xE1rios de Funcionamento");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(50, "mat-divider");
    \u0275\u0275elementStart(51, "div", 23);
    \u0275\u0275template(52, MeuRestauranteComponent_form_6_div_52_Template, 31, 1, "div", 24);
    \u0275\u0275elementStart(53, "button", 25);
    \u0275\u0275listener("click", function MeuRestauranteComponent_form_6_Template_button_click_53_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.addHorario());
    });
    \u0275\u0275elementStart(54, "mat-icon");
    \u0275\u0275text(55, "add");
    \u0275\u0275elementEnd();
    \u0275\u0275text(56, " Adicionar Hor\xE1rio ");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(57, "mat-card", 9)(58, "div", 10)(59, "h3");
    \u0275\u0275text(60, "Servi\xE7os Oferecidos");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(61, "mat-divider");
    \u0275\u0275elementStart(62, "div", 11)(63, "mat-form-field", 12)(64, "mat-label");
    \u0275\u0275text(65, "Selecione os servi\xE7os");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(66, "mat-select", 26);
    \u0275\u0275template(67, MeuRestauranteComponent_form_6_mat_option_67_Template, 3, 3, "mat-option", 14);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(68, "div", 27)(69, "button", 28);
    \u0275\u0275text(70, "Cancelar");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(71, "button", 29);
    \u0275\u0275listener("click", function MeuRestauranteComponent_form_6_Template_button_click_71_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.salvarAlteracoes());
    });
    \u0275\u0275elementStart(72, "mat-icon");
    \u0275\u0275text(73, "save");
    \u0275\u0275elementEnd();
    \u0275\u0275text(74, " Salvar Altera\xE7\xF5es ");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275property("formGroup", ctx_r3.restauranteForm);
    \u0275\u0275advance(11);
    \u0275\u0275property("ngForOf", ctx_r3.tiposCozinha);
    \u0275\u0275advance(19);
    \u0275\u0275property("ngIf", ctx_r3.imagemPrincipal);
    \u0275\u0275advance(15);
    \u0275\u0275property("ngIf", ctx_r3.galeriaPreviews.length > 0);
    \u0275\u0275advance(7);
    \u0275\u0275property("ngForOf", ctx_r3.horariosFormArray.controls);
    \u0275\u0275advance(15);
    \u0275\u0275property("ngForOf", ctx_r3.todosServicos);
  }
}
function MeuRestauranteComponent_div_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 66);
    \u0275\u0275element(1, "app-global-spinner");
    \u0275\u0275elementEnd();
  }
}
function MeuRestauranteComponent_ng_container_9_div_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 70);
    \u0275\u0275element(1, "img", 71);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const preview_r15 = ctx.$implicit;
    const i_r16 = ctx.index;
    \u0275\u0275advance();
    \u0275\u0275property("nzSrc", preview_r15.url)("alt", "Foto " + (i_r16 + 1));
  }
}
function MeuRestauranteComponent_ng_container_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "div", 67)(2, "nz-image-group")(3, "div", 68);
    \u0275\u0275template(4, MeuRestauranteComponent_ng_container_9_div_4_Template, 2, 2, "div", 69);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275property("ngForOf", ctx_r3.galeriaPreviews);
  }
}
var MeuRestauranteComponent = class _MeuRestauranteComponent {
  constructor() {
    this.isLoading = true;
    this.isGalleryVisible = false;
    this.tiposCozinha = [
      "Italiana",
      "Brasileira",
      "Japonesa",
      "Hamburgueria",
      "Chinesa",
      "Mexicana",
      "\xC1rabe",
      "Francesa",
      "Indiana",
      "Outros"
    ];
    this.todosServicos = [
      { nome: "Wi-Fi gratuito", icone: "wifi" },
      { nome: "Aceita cart\xF5es", icone: "credit_card" },
      { nome: "Acess\xEDvel para cadeirantes", icone: "accessible" },
      { nome: "Estacionamento", icone: "local_parking" },
      { nome: "Ideal para crian\xE7as", icone: "child_friendly" },
      { nome: "M\xFAsica ao vivo", icone: "music_note" },
      { nome: "Permite animais", icone: "pets" },
      { nome: "Valet (servi\xE7o de manobrista)", icone: "hail" },
      { nome: "Ar-condicionado", icone: "ac_unit" },
      { nome: "Bar completo", icone: "local_bar" },
      { nome: "\xC1rea externa", icone: "deck" }
    ];
    this.imagensBase64 = [];
    this.previews = [];
    this.auth = inject(AuthService);
    this.fb = inject(FormBuilder);
    this.restauranteService = inject(RestauranteService);
    this.cdr = inject(ChangeDetectorRef);
    this.toastr = inject(ToastrService);
  }
  ngOnInit() {
    this.iniciarFormulario();
    this.carregarDadosDoRestaurante();
  }
  iniciarFormulario() {
    this.restauranteForm = this.fb.group({
      tipoCozinha: ["", Validators.required],
      descricao: ["", Validators.required],
      servicos: [[]],
      horariosFuncionamento: this.fb.array([])
    });
  }
  carregarDadosDoRestaurante() {
    const idRestaurante = this.auth.perfil?.id;
    if (!idRestaurante) {
      this.toastr.error("ID do restaurante n\xE3o encontrado. Fa\xE7a login novamente.");
      this.isLoading = false;
      return;
    }
    this.restauranteService.findById(idRestaurante).subscribe({
      next: (data) => {
        this.restauranteForm.patchValue({
          tipoCozinha: data.tipoCozinha,
          descricao: data.descricao,
          servicos: data.servicos || []
        });
        const horariosArray = this.restauranteForm.get("horariosFuncionamento");
        horariosArray.clear();
        data.horariosFuncionamento?.forEach((h) => horariosArray.push(this.criarGrupoHorario(h)));
        this.imagensBase64 = (data.imagens || []).map((img) => img.startsWith("data:") ? img : this.getCorretedImageUrl(img));
        this.atualizarPreviews();
        this.isLoading = false;
      },
      error: () => {
        this.toastr.error("Erro ao carregar os dados do restaurante.");
        this.isLoading = false;
      }
    });
  }
  get horariosFormArray() {
    return this.restauranteForm.get("horariosFuncionamento");
  }
  criarGrupoHorario(horario) {
    return this.fb.group({
      diaSemana: [horario?.diaSemana || "", Validators.required],
      abertura: [horario?.abertura || "", Validators.required],
      fechamento: [horario?.fechamento || "", Validators.required]
    });
  }
  addHorario() {
    this.horariosFormArray.push(this.criarGrupoHorario());
  }
  removeHorario(index) {
    this.horariosFormArray.removeAt(index);
  }
  onFileSelected(event, tipo) {
    const input = event.target;
    if (input.files && input.files.length > 0) {
      Array.from(input.files).forEach((file) => {
        const reader = new FileReader();
        reader.onload = () => {
          const base64String = reader.result;
          const finalString = "data:image/jpeg;base64," + base64String.split(",")[1];
          if (tipo === "principal") {
            if (this.imagensBase64.length > 0) {
              this.imagensBase64.shift();
            }
            this.imagensBase64.unshift(finalString);
          } else {
            this.imagensBase64.push(finalString);
          }
          this.atualizarPreviews();
        };
        reader.readAsDataURL(file);
      });
    }
  }
  removerImagem(index) {
    this.imagensBase64.splice(index, 1);
    this.atualizarPreviews();
  }
  get imagemPrincipal() {
    const principal = this.previews.find((p) => p.tipo === "principal");
    return principal || null;
  }
  // Método para remover imagem principal
  removerImagemPrincipal() {
    const principalIndex = this.previews.findIndex((p) => p.tipo === "principal");
    if (principalIndex !== -1) {
      this.imagensBase64.splice(principalIndex, 1);
      this.atualizarPreviews();
    }
  }
  atualizarPreviews() {
    this.previews = this.imagensBase64.map((imgBase64OrUrl, index) => ({
      url: imgBase64OrUrl.startsWith("data:") ? imgBase64OrUrl : this.getCorretedImageUrl(imgBase64OrUrl),
      tipo: index === 0 ? "principal" : "galeria"
      // Primeira imagem é sempre principal
    }));
    this.cdr.detectChanges();
  }
  isPrincipalImage(imgString) {
    return this.imagensBase64.length > 0 && this.imagensBase64[0] === imgString;
  }
  getCorretedImageUrl(path) {
    if (!path)
      return "";
    if (path.startsWith("http"))
      return path;
    return `${environment.apiUrl}${path}`;
  }
  salvarAlteracoes() {
    if (this.restauranteForm.invalid) {
      this.toastr.error("Por favor, preencha todos os campos obrigat\xF3rios.");
      return;
    }
    const formValue = this.restauranteForm.getRawValue();
    console.log("formValue.servicos antes do mapeamento:", formValue.servicos);
    const servicosNomes = formValue.servicos;
    console.log("servicosNomes ap\xF3s o mapeamento:", servicosNomes);
    const payload = {
      tipoCozinha: formValue.tipoCozinha,
      descricao: formValue.descricao,
      horariosFuncionamento: formValue.horariosFuncionamento,
      nomesServicos: servicosNomes,
      imagens: this.imagensBase64
    };
    import_sweetalert2.default.fire({
      title: "Confirmar altera\xE7\xF5es?",
      text: "Os dados do seu restaurante ser\xE3o atualizados.",
      icon: "question",
      showCancelButton: true,
      confirmButtonColor: "#F6BD38",
      cancelButtonColor: "#3B221B",
      confirmButtonText: "Sim, salvar!",
      cancelButtonText: "Cancelar"
    }).then((result) => {
      if (result.isConfirmed) {
        this.restauranteService.updateRestaurante(payload).subscribe({
          next: () => {
            import_sweetalert2.default.fire("Sucesso!", "Seu restaurante foi atualizado.", "success");
          },
          error: () => {
            import_sweetalert2.default.fire("Erro!", "N\xE3o foi poss\xEDvel atualizar os dados.", "error");
          }
        });
      }
    });
  }
  openGallery() {
    this.isGalleryVisible = true;
  }
  closeGallery() {
    this.isGalleryVisible = false;
  }
  // Placeholder toggle methods for HTML consistency
  toggleEditInfo() {
    console.log("Toggle Edit Info clicked");
  }
  toggleEditHorarios() {
    console.log("Toggle Edit Horarios clicked");
  }
  toggleEditServicos() {
    console.log("Toggle Edit Servicos clicked");
  }
  get galeriaPreviews() {
    return this.previews.filter((p) => p.tipo === "galeria");
  }
  static {
    this.\u0275fac = function MeuRestauranteComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _MeuRestauranteComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _MeuRestauranteComponent, selectors: [["app-meu-restaurante"]], decls: 10, vars: 6, consts: [["principalUploadInput", ""], ["galeriaUploadInput", ""], [1, "configuracoes-container"], [1, "page-header"], [3, "formGroup", 4, "ngIf"], ["class", "loading-spinner", 4, "ngIf"], ["nzTitle", "Galeria de Fotos", "nzWidth", "90%", "nzCentered", "", 3, "nzVisibleChange", "nzOnCancel", "nzVisible", "nzFooter", "nzBodyStyle"], [4, "nzModalContent"], [3, "formGroup"], [1, "info-card"], [1, "card-header"], [1, "card-content"], ["appearance", "outline"], ["formControlName", "tipoCozinha"], [3, "value", 4, "ngFor", "ngForOf"], ["matInput", "", "formControlName", "descricao", "rows", "5", "placeholder", "Conte um pouco sobre a hist\xF3ria, o ambiente e os pratos do seu restaurante..."], [1, "upload-section"], [1, "upload-content"], ["mat-stroked-button", "", "color", "accent", 3, "click"], ["type", "file", "hidden", "", "accept", "image/*", 3, "change"], ["class", "home-style-card", 4, "ngIf"], ["type", "file", "hidden", "", "accept", "image/*", "multiple", "", 3, "change"], ["class", "photo-gallery", 4, "ngIf"], ["formArrayName", "horariosFuncionamento", 1, "card-content"], ["class", "horario-item", 3, "formGroupName", 4, "ngFor", "ngForOf"], ["mat-stroked-button", "", 1, "add-horario-btn", 3, "click"], ["formControlName", "servicos", "multiple", ""], [1, "form-actions"], ["mat-stroked-button", "", "color", "warn"], ["mat-raised-button", "", 1, "save-btn", 3, "click"], [3, "value"], [1, "home-style-card"], [1, "restaurant-card"], ["nz-image", "", "alt", "Imagem principal do restaurante", 1, "restaurant-image", 3, "nzSrc"], [1, "image-overlay"], [1, "photo-tag"], ["mat-icon-button", "", 1, "remove-main-img-btn", 3, "click"], [1, "photo-gallery"], [1, "gallery-grid-irregular"], ["class", "main-photo", 4, "ngIf"], ["class", "medium-photo", 4, "ngIf"], ["class", "small-photo-top", 4, "ngIf"], ["class", "small-photo-bottom", 4, "ngIf"], [1, "main-photo"], ["nz-image", "", "alt", "Foto do restaurante", 1, "gallery-image", 3, "nzSrc"], ["mat-icon-button", "", 1, "remove-img-btn", 3, "click"], [1, "medium-photo"], [1, "small-photo-top"], [1, "small-photo-bottom"], ["class", "more-overlay", 3, "click", 4, "ngIf"], [1, "more-overlay", 3, "click"], [1, "horario-item", 3, "formGroupName"], ["appearance", "outline", 1, "dia-semana-field"], ["formControlName", "diaSemana"], ["value", "SEGUNDA"], ["value", "TERCA"], ["value", "QUARTA"], ["value", "QUINTA"], ["value", "SEXTA"], ["value", "SABADO"], ["value", "DOMINGO"], [1, "horario-inputs"], ["matInput", "", "formControlName", "abertura", "type", "time"], ["matInput", "", "formControlName", "fechamento", "type", "time"], ["mat-icon-button", "", "color", "warn", 1, "remove-horario-btn", 3, "click"], [4, "ngIf"], [1, "loading-spinner"], [1, "full-gallery"], [1, "gallery-grid-modal"], ["class", "gallery-item", 4, "ngFor", "ngForOf"], [1, "gallery-item"], ["nz-image", "", 1, "modal-gallery-image", 3, "nzSrc", "alt"]], template: function MeuRestauranteComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 2)(1, "div", 3)(2, "h1");
        \u0275\u0275text(3, "Meu Restaurante");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(4, "p");
        \u0275\u0275text(5, "Gerencie as informa\xE7\xF5es p\xFAblicas do seu restaurante que os clientes ver\xE3o.");
        \u0275\u0275elementEnd()();
        \u0275\u0275template(6, MeuRestauranteComponent_form_6_Template, 75, 6, "form", 4)(7, MeuRestauranteComponent_div_7_Template, 2, 0, "div", 5);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(8, "nz-modal", 6);
        \u0275\u0275twoWayListener("nzVisibleChange", function MeuRestauranteComponent_Template_nz_modal_nzVisibleChange_8_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.isGalleryVisible, $event) || (ctx.isGalleryVisible = $event);
          return $event;
        });
        \u0275\u0275listener("nzOnCancel", function MeuRestauranteComponent_Template_nz_modal_nzOnCancel_8_listener() {
          return ctx.closeGallery();
        });
        \u0275\u0275template(9, MeuRestauranteComponent_ng_container_9_Template, 5, 1, "ng-container", 7);
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        \u0275\u0275advance(6);
        \u0275\u0275property("ngIf", !ctx.isLoading);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.isLoading);
        \u0275\u0275advance();
        \u0275\u0275twoWayProperty("nzVisible", ctx.isGalleryVisible);
        \u0275\u0275property("nzFooter", null)("nzBodyStyle", \u0275\u0275pureFunction0(5, _c0));
      }
    }, dependencies: [
      CommonModule,
      NgForOf,
      NgIf,
      ReactiveFormsModule,
      \u0275NgNoValidate,
      DefaultValueAccessor,
      NgControlStatus,
      NgControlStatusGroup,
      FormGroupDirective,
      FormControlName,
      FormGroupName,
      FormArrayName,
      MatFormFieldModule,
      MatFormField,
      MatLabel,
      MatInputModule,
      MatInput,
      MatSelectModule,
      MatSelect,
      MatOption,
      MatIconModule,
      MatIcon,
      MatButtonModule,
      MatButton,
      MatIconButton,
      MatChipsModule,
      MatAutocompleteModule,
      MatCardModule,
      MatCard,
      MatDividerModule,
      MatDivider,
      // NG-Zorro imports
      NzModalModule,
      NzModalComponent,
      NzModalContentDirective,
      NzImageModule,
      NzImageDirective,
      NzImageGroupComponent,
      GlobalSpinnerComponent
    ], styles: ['@charset "UTF-8";\n\n\n\n.configuracoes-container[_ngcontent-%COMP%] {\n  max-width: 800px;\n  margin: 40px auto;\n  padding: 0 16px;\n}\n.page-header[_ngcontent-%COMP%] {\n  margin-bottom: 24px;\n}\n.page-header[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-size: 28px;\n  font-weight: 500;\n  color: #333333;\n  margin: 0;\n}\n.page-header[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 16px;\n  color: rgba(59, 34, 27, 0.7);\n  margin: 0;\n}\nmat-card[_ngcontent-%COMP%] {\n  border-radius: 16px;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);\n  margin-bottom: 24px;\n  border: 1px solid transparent;\n  background-color: white;\n  overflow: hidden;\n  transition: border-color 0.3s ease;\n}\nmat-card[_ngcontent-%COMP%]:hover {\n  border-color: #F6BD38;\n}\n  .mat-mdc-card:hover {\n  background-color: white !important;\n}\n.info-card[_ngcontent-%COMP%] {\n  padding: 0;\n}\n.info-card[_ngcontent-%COMP%]   .card-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 16px 24px;\n  background:\n    linear-gradient(\n      135deg,\n      #F6BD38 0%,\n      #f4b942 100%);\n}\n.info-card[_ngcontent-%COMP%]   .card-header[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 18px;\n  font-weight: 600;\n  margin: 0;\n  color: #3B221B;\n}\n.info-card[_ngcontent-%COMP%]   .card-header[_ngcontent-%COMP%]   .edit-icon[_ngcontent-%COMP%] {\n  color: #3B221B;\n}\n.info-card[_ngcontent-%COMP%]   .card-content[_ngcontent-%COMP%] {\n  padding: 24px;\n  background: white;\n}\n.info-card[_ngcontent-%COMP%]   .card-content[_ngcontent-%COMP%]   mat-form-field[_ngcontent-%COMP%] {\n  width: 100%;\n  margin-bottom: 16px;\n}\n.gallery-section[_ngcontent-%COMP%]   .gallery-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));\n  gap: 16px;\n  border-radius: 16px;\n  overflow: hidden;\n}\n.gallery-section[_ngcontent-%COMP%]   .gallery-grid[_ngcontent-%COMP%]   .main-photo[_ngcontent-%COMP%], \n.gallery-section[_ngcontent-%COMP%]   .gallery-grid[_ngcontent-%COMP%]   .medium-photo[_ngcontent-%COMP%], \n.gallery-section[_ngcontent-%COMP%]   .gallery-grid[_ngcontent-%COMP%]   .small-photo-top[_ngcontent-%COMP%], \n.gallery-section[_ngcontent-%COMP%]   .gallery-grid[_ngcontent-%COMP%]   .small-photo-bottom[_ngcontent-%COMP%], \n.gallery-section[_ngcontent-%COMP%]   .gallery-grid[_ngcontent-%COMP%]   .gallery-item[_ngcontent-%COMP%] {\n  position: relative;\n  border-radius: 16px;\n  overflow: hidden;\n  height: 200px;\n}\n.gallery-section[_ngcontent-%COMP%]   .gallery-grid[_ngcontent-%COMP%]   .main-photo[_ngcontent-%COMP%]   img[_ngcontent-%COMP%], \n.gallery-section[_ngcontent-%COMP%]   .gallery-grid[_ngcontent-%COMP%]   .medium-photo[_ngcontent-%COMP%]   img[_ngcontent-%COMP%], \n.gallery-section[_ngcontent-%COMP%]   .gallery-grid[_ngcontent-%COMP%]   .small-photo-top[_ngcontent-%COMP%]   img[_ngcontent-%COMP%], \n.gallery-section[_ngcontent-%COMP%]   .gallery-grid[_ngcontent-%COMP%]   .small-photo-bottom[_ngcontent-%COMP%]   img[_ngcontent-%COMP%], \n.gallery-section[_ngcontent-%COMP%]   .gallery-grid[_ngcontent-%COMP%]   .gallery-item[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n  cursor: pointer;\n  transition: transform 0.3s ease;\n}\n.gallery-section[_ngcontent-%COMP%]   .gallery-grid[_ngcontent-%COMP%]   .main-photo[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]:hover, \n.gallery-section[_ngcontent-%COMP%]   .gallery-grid[_ngcontent-%COMP%]   .medium-photo[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]:hover, \n.gallery-section[_ngcontent-%COMP%]   .gallery-grid[_ngcontent-%COMP%]   .small-photo-top[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]:hover, \n.gallery-section[_ngcontent-%COMP%]   .gallery-grid[_ngcontent-%COMP%]   .small-photo-bottom[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]:hover, \n.gallery-section[_ngcontent-%COMP%]   .gallery-grid[_ngcontent-%COMP%]   .gallery-item[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]:hover {\n  transform: scale(1.05);\n}\n.gallery-section[_ngcontent-%COMP%]   .gallery-grid[_ngcontent-%COMP%]   .main-photo[_ngcontent-%COMP%]   .photo-tag[_ngcontent-%COMP%], \n.gallery-section[_ngcontent-%COMP%]   .gallery-grid[_ngcontent-%COMP%]   .medium-photo[_ngcontent-%COMP%]   .photo-tag[_ngcontent-%COMP%], \n.gallery-section[_ngcontent-%COMP%]   .gallery-grid[_ngcontent-%COMP%]   .small-photo-top[_ngcontent-%COMP%]   .photo-tag[_ngcontent-%COMP%], \n.gallery-section[_ngcontent-%COMP%]   .gallery-grid[_ngcontent-%COMP%]   .small-photo-bottom[_ngcontent-%COMP%]   .photo-tag[_ngcontent-%COMP%], \n.gallery-section[_ngcontent-%COMP%]   .gallery-grid[_ngcontent-%COMP%]   .gallery-item[_ngcontent-%COMP%]   .photo-tag[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 12px;\n  left: 12px;\n  background: #F6BD38;\n  color: #3B221B;\n  padding: 4px 12px;\n  border-radius: 20px;\n  font-size: 12px;\n  font-weight: 600;\n  z-index: 1;\n}\n.gallery-section[_ngcontent-%COMP%]   .gallery-grid[_ngcontent-%COMP%]   .main-photo[_ngcontent-%COMP%]   .remove-img-btn[_ngcontent-%COMP%], \n.gallery-section[_ngcontent-%COMP%]   .gallery-grid[_ngcontent-%COMP%]   .medium-photo[_ngcontent-%COMP%]   .remove-img-btn[_ngcontent-%COMP%], \n.gallery-section[_ngcontent-%COMP%]   .gallery-grid[_ngcontent-%COMP%]   .small-photo-top[_ngcontent-%COMP%]   .remove-img-btn[_ngcontent-%COMP%], \n.gallery-section[_ngcontent-%COMP%]   .gallery-grid[_ngcontent-%COMP%]   .small-photo-bottom[_ngcontent-%COMP%]   .remove-img-btn[_ngcontent-%COMP%], \n.gallery-section[_ngcontent-%COMP%]   .gallery-grid[_ngcontent-%COMP%]   .gallery-item[_ngcontent-%COMP%]   .remove-img-btn[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 8px;\n  right: 8px;\n  background: white;\n  color: #DA4A24;\n  border-radius: 50%;\n  height: 32px;\n  width: 32px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);\n  z-index: 1;\n}\n.gallery-section[_ngcontent-%COMP%]   .gallery-grid[_ngcontent-%COMP%]   .main-photo[_ngcontent-%COMP%]   .remove-img-btn[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%], \n.gallery-section[_ngcontent-%COMP%]   .gallery-grid[_ngcontent-%COMP%]   .medium-photo[_ngcontent-%COMP%]   .remove-img-btn[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%], \n.gallery-section[_ngcontent-%COMP%]   .gallery-grid[_ngcontent-%COMP%]   .small-photo-top[_ngcontent-%COMP%]   .remove-img-btn[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%], \n.gallery-section[_ngcontent-%COMP%]   .gallery-grid[_ngcontent-%COMP%]   .small-photo-bottom[_ngcontent-%COMP%]   .remove-img-btn[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%], \n.gallery-section[_ngcontent-%COMP%]   .gallery-grid[_ngcontent-%COMP%]   .gallery-item[_ngcontent-%COMP%]   .remove-img-btn[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 18px;\n  height: 18px;\n  width: 18px;\n}\n.gallery-section[_ngcontent-%COMP%]   .gallery-grid[_ngcontent-%COMP%]   .main-photo[_ngcontent-%COMP%]   .remove-img-btn[_ngcontent-%COMP%]:hover, \n.gallery-section[_ngcontent-%COMP%]   .gallery-grid[_ngcontent-%COMP%]   .medium-photo[_ngcontent-%COMP%]   .remove-img-btn[_ngcontent-%COMP%]:hover, \n.gallery-section[_ngcontent-%COMP%]   .gallery-grid[_ngcontent-%COMP%]   .small-photo-top[_ngcontent-%COMP%]   .remove-img-btn[_ngcontent-%COMP%]:hover, \n.gallery-section[_ngcontent-%COMP%]   .gallery-grid[_ngcontent-%COMP%]   .small-photo-bottom[_ngcontent-%COMP%]   .remove-img-btn[_ngcontent-%COMP%]:hover, \n.gallery-section[_ngcontent-%COMP%]   .gallery-grid[_ngcontent-%COMP%]   .gallery-item[_ngcontent-%COMP%]   .remove-img-btn[_ngcontent-%COMP%]:hover {\n  background-color: #DA4A24;\n  color: white;\n}\n.gallery-section[_ngcontent-%COMP%]   .gallery-grid[_ngcontent-%COMP%]   .more-photos[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n.gallery-section[_ngcontent-%COMP%]   .gallery-grid[_ngcontent-%COMP%]   .more-photos[_ngcontent-%COMP%]   .more-overlay[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background: rgba(0, 0, 0, 0.7);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: white;\n  font-weight: 600;\n  font-size: 14px;\n  text-align: center;\n  transition: background 0.3s ease;\n}\n.gallery-section[_ngcontent-%COMP%]   .gallery-grid[_ngcontent-%COMP%]   .more-photos[_ngcontent-%COMP%]   .more-overlay[_ngcontent-%COMP%]:hover {\n  background: rgba(0, 0, 0, 0.8);\n}\n.main-image-preview[_ngcontent-%COMP%] {\n  position: relative;\n  width: 100%;\n  height: 200px;\n  border-radius: 16px;\n  overflow: hidden;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);\n}\n.main-image-preview[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n  border-radius: 16px;\n}\n.main-image-preview[_ngcontent-%COMP%]   .photo-tag[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 12px;\n  left: 12px;\n  background: #F6BD38;\n  color: #3B221B;\n  padding: 4px 12px;\n  border-radius: 20px;\n  font-size: 12px;\n  font-weight: 600;\n  z-index: 1;\n}\n.main-image-preview[_ngcontent-%COMP%]   .remove-main-img-btn[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 8px;\n  right: 8px;\n  background: white;\n  color: #DA4A24;\n  border-radius: 50%;\n  height: 32px;\n  width: 32px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);\n  z-index: 1;\n}\n.main-image-preview[_ngcontent-%COMP%]   .remove-main-img-btn[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 18px;\n  height: 18px;\n  width: 18px;\n}\n.main-image-preview[_ngcontent-%COMP%]   .remove-main-img-btn[_ngcontent-%COMP%]:hover {\n  background-color: #DA4A24;\n  color: white;\n}\n.home-style-card[_ngcontent-%COMP%] {\n  margin-top: 16px;\n}\n.home-style-card[_ngcontent-%COMP%]   .restaurant-card[_ngcontent-%COMP%] {\n  position: relative;\n  border-radius: 16px;\n  overflow: hidden;\n  height: 300px;\n  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);\n  cursor: pointer;\n}\n.home-style-card[_ngcontent-%COMP%]   .restaurant-card[_ngcontent-%COMP%]   .restaurant-image[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n  transition: transform 0.3s ease;\n}\n.home-style-card[_ngcontent-%COMP%]   .restaurant-card[_ngcontent-%COMP%]   .restaurant-image[_ngcontent-%COMP%]:hover {\n  transform: scale(1.02);\n}\n.home-style-card[_ngcontent-%COMP%]   .restaurant-card[_ngcontent-%COMP%]   .image-overlay[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  pointer-events: none;\n}\n.home-style-card[_ngcontent-%COMP%]   .restaurant-card[_ngcontent-%COMP%]   .image-overlay[_ngcontent-%COMP%]   .photo-tag[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 12px;\n  left: 12px;\n  background: #F6BD38;\n  color: #3B221B;\n  padding: 6px 12px;\n  border-radius: 20px;\n  font-size: 12px;\n  font-weight: 600;\n  z-index: 2;\n  pointer-events: none;\n}\n.home-style-card[_ngcontent-%COMP%]   .restaurant-card[_ngcontent-%COMP%]   .image-overlay[_ngcontent-%COMP%]   .remove-main-img-btn[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 12px;\n  right: 12px;\n  background: white;\n  color: #DA4A24;\n  border-radius: 50%;\n  height: 32px;\n  width: 32px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);\n  z-index: 2;\n  pointer-events: all;\n}\n.home-style-card[_ngcontent-%COMP%]   .restaurant-card[_ngcontent-%COMP%]   .image-overlay[_ngcontent-%COMP%]   .remove-main-img-btn[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 18px;\n  height: 18px;\n  width: 18px;\n}\n.home-style-card[_ngcontent-%COMP%]   .restaurant-card[_ngcontent-%COMP%]   .image-overlay[_ngcontent-%COMP%]   .remove-main-img-btn[_ngcontent-%COMP%]:hover {\n  background-color: #DA4A24;\n  color: white;\n}\n.photo-gallery[_ngcontent-%COMP%] {\n  margin-top: 16px;\n}\n.photo-gallery[_ngcontent-%COMP%]   .gallery-grid-irregular[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 2fr 1fr 1fr;\n  grid-template-rows: 1fr 1fr;\n  gap: 8px;\n  height: 400px;\n}\n.photo-gallery[_ngcontent-%COMP%]   .gallery-grid-irregular[_ngcontent-%COMP%]   .main-photo[_ngcontent-%COMP%] {\n  grid-column: 1;\n  grid-row: 1/span 2;\n  position: relative;\n  border-radius: 16px;\n  overflow: hidden;\n  cursor: pointer;\n}\n.photo-gallery[_ngcontent-%COMP%]   .gallery-grid-irregular[_ngcontent-%COMP%]   .main-photo[_ngcontent-%COMP%]   .gallery-image[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n  transition: transform 0.3s ease;\n}\n.photo-gallery[_ngcontent-%COMP%]   .gallery-grid-irregular[_ngcontent-%COMP%]   .main-photo[_ngcontent-%COMP%]   .gallery-image[_ngcontent-%COMP%]:hover {\n  transform: scale(1.05);\n}\n.photo-gallery[_ngcontent-%COMP%]   .gallery-grid-irregular[_ngcontent-%COMP%]   .medium-photo[_ngcontent-%COMP%] {\n  grid-column: 2;\n  grid-row: 1/span 2;\n  position: relative;\n  border-radius: 16px;\n  overflow: hidden;\n  cursor: pointer;\n}\n.photo-gallery[_ngcontent-%COMP%]   .gallery-grid-irregular[_ngcontent-%COMP%]   .medium-photo[_ngcontent-%COMP%]   .gallery-image[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n  transition: transform 0.3s ease;\n}\n.photo-gallery[_ngcontent-%COMP%]   .gallery-grid-irregular[_ngcontent-%COMP%]   .medium-photo[_ngcontent-%COMP%]   .gallery-image[_ngcontent-%COMP%]:hover {\n  transform: scale(1.05);\n}\n.photo-gallery[_ngcontent-%COMP%]   .gallery-grid-irregular[_ngcontent-%COMP%]   .small-photo-top[_ngcontent-%COMP%] {\n  grid-column: 3;\n  grid-row: 1;\n  position: relative;\n  border-radius: 16px;\n  overflow: hidden;\n  cursor: pointer;\n}\n.photo-gallery[_ngcontent-%COMP%]   .gallery-grid-irregular[_ngcontent-%COMP%]   .small-photo-top[_ngcontent-%COMP%]   .gallery-image[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n  transition: transform 0.3s ease;\n}\n.photo-gallery[_ngcontent-%COMP%]   .gallery-grid-irregular[_ngcontent-%COMP%]   .small-photo-top[_ngcontent-%COMP%]   .gallery-image[_ngcontent-%COMP%]:hover {\n  transform: scale(1.05);\n}\n.photo-gallery[_ngcontent-%COMP%]   .gallery-grid-irregular[_ngcontent-%COMP%]   .small-photo-bottom[_ngcontent-%COMP%] {\n  grid-column: 3;\n  grid-row: 2;\n  position: relative;\n  border-radius: 16px;\n  overflow: hidden;\n  cursor: pointer;\n}\n.photo-gallery[_ngcontent-%COMP%]   .gallery-grid-irregular[_ngcontent-%COMP%]   .small-photo-bottom[_ngcontent-%COMP%]   .gallery-image[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n  transition: transform 0.3s ease;\n}\n.photo-gallery[_ngcontent-%COMP%]   .gallery-grid-irregular[_ngcontent-%COMP%]   .small-photo-bottom[_ngcontent-%COMP%]   .gallery-image[_ngcontent-%COMP%]:hover {\n  transform: scale(1.05);\n}\n.photo-gallery[_ngcontent-%COMP%]   .gallery-grid-irregular[_ngcontent-%COMP%]   .small-photo-bottom[_ngcontent-%COMP%]   .more-overlay[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background: rgba(0, 0, 0, 0.7);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: white;\n  font-weight: 600;\n  font-size: 14px;\n  text-align: center;\n  transition: background 0.3s ease;\n  z-index: 1;\n}\n.photo-gallery[_ngcontent-%COMP%]   .gallery-grid-irregular[_ngcontent-%COMP%]   .small-photo-bottom[_ngcontent-%COMP%]   .more-overlay[_ngcontent-%COMP%]:hover {\n  background: rgba(0, 0, 0, 0.8);\n}\n.photo-gallery[_ngcontent-%COMP%]   .gallery-grid-irregular[_ngcontent-%COMP%]   .remove-img-btn[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 8px;\n  right: 8px;\n  background: white;\n  color: #DA4A24;\n  border-radius: 50%;\n  height: 28px;\n  width: 28px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);\n  z-index: 2;\n}\n.photo-gallery[_ngcontent-%COMP%]   .gallery-grid-irregular[_ngcontent-%COMP%]   .remove-img-btn[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 16px;\n  height: 16px;\n  width: 16px;\n}\n.photo-gallery[_ngcontent-%COMP%]   .gallery-grid-irregular[_ngcontent-%COMP%]   .remove-img-btn[_ngcontent-%COMP%]:hover {\n  background-color: #DA4A24;\n  color: white;\n}\n.full-gallery[_ngcontent-%COMP%]   .gallery-grid-modal[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  gap: 16px;\n}\n.full-gallery[_ngcontent-%COMP%]   .gallery-grid-modal[_ngcontent-%COMP%]   .gallery-item[_ngcontent-%COMP%] {\n  border-radius: 16px;\n  overflow: hidden;\n  aspect-ratio: 4/3;\n}\n.full-gallery[_ngcontent-%COMP%]   .gallery-grid-modal[_ngcontent-%COMP%]   .gallery-item[_ngcontent-%COMP%]   .modal-gallery-image[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n  cursor: pointer;\n  transition: transform 0.3s ease;\n}\n.full-gallery[_ngcontent-%COMP%]   .gallery-grid-modal[_ngcontent-%COMP%]   .gallery-item[_ngcontent-%COMP%]   .modal-gallery-image[_ngcontent-%COMP%]:hover {\n  transform: scale(1.02);\n}\n@media (max-width: 768px) {\n  .photo-gallery[_ngcontent-%COMP%]   .gallery-grid-irregular[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr 1fr;\n    grid-template-rows: 1fr 1fr 1fr;\n    height: 600px;\n  }\n  .photo-gallery[_ngcontent-%COMP%]   .gallery-grid-irregular[_ngcontent-%COMP%]   .main-photo[_ngcontent-%COMP%] {\n    grid-column: 1/span 2;\n    grid-row: 1;\n  }\n  .photo-gallery[_ngcontent-%COMP%]   .gallery-grid-irregular[_ngcontent-%COMP%]   .medium-photo[_ngcontent-%COMP%] {\n    grid-column: 1;\n    grid-row: 2;\n  }\n  .photo-gallery[_ngcontent-%COMP%]   .gallery-grid-irregular[_ngcontent-%COMP%]   .small-photo-top[_ngcontent-%COMP%] {\n    grid-column: 2;\n    grid-row: 2;\n  }\n  .photo-gallery[_ngcontent-%COMP%]   .gallery-grid-irregular[_ngcontent-%COMP%]   .small-photo-bottom[_ngcontent-%COMP%] {\n    grid-column: 1/span 2;\n    grid-row: 3;\n  }\n  .full-gallery[_ngcontent-%COMP%]   .gallery-grid-modal[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(2, 1fr);\n  }\n}\n@media (max-width: 480px) {\n  .full-gallery[_ngcontent-%COMP%]   .gallery-grid-modal[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\n.gallery-section[_ngcontent-%COMP%]   .gallery-grid[_ngcontent-%COMP%] {\n  grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));\n}\n@media (min-width: 768px) {\n  .gallery-section[_ngcontent-%COMP%]   .gallery-grid[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(3, 1fr);\n  }\n}\n.upload-section[_ngcontent-%COMP%] {\n  margin-bottom: 24px;\n}\n.upload-section[_ngcontent-%COMP%]   .upload-label[_ngcontent-%COMP%] {\n  display: block;\n  color: #3B221B;\n  margin-bottom: 12px;\n  font-size: 16px;\n  font-weight: 600;\n}\n.upload-section[_ngcontent-%COMP%]   .upload-content[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 16px;\n  padding: 20px;\n  border: 2px dashed #F6BD38;\n  border-radius: 12px;\n  background: #FFF9E6;\n  transition: all 0.3s ease;\n}\n.upload-section[_ngcontent-%COMP%]   .upload-content[_ngcontent-%COMP%]:hover {\n  border-color: #f4b942;\n  background: #FFF6D6;\n}\n.upload-section[_ngcontent-%COMP%]   .upload-content[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  background: #F6BD38;\n  color: #3B221B;\n  border: none;\n  font-weight: 600;\n}\n.upload-section[_ngcontent-%COMP%]   .upload-content[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover {\n  background: #f4b942;\n}\n.horario-item[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 16px;\n  align-items: center;\n  margin-bottom: 16px;\n  padding: 16px;\n  background: #FAFAFA;\n  border-radius: 12px;\n  border: 1px solid #f0f0f0;\n}\n.horario-item[_ngcontent-%COMP%]   .dia-semana-field[_ngcontent-%COMP%] {\n  flex: 1;\n}\n.horario-item[_ngcontent-%COMP%]   .horario-inputs[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 16px;\n  flex: 2;\n}\n.horario-item[_ngcontent-%COMP%]   .remove-horario-btn[_ngcontent-%COMP%] {\n  color: #DA4A24;\n  background: white;\n  border: 1px solid #DA4A24;\n  border-radius: 8px;\n}\n.horario-item[_ngcontent-%COMP%]   .remove-horario-btn[_ngcontent-%COMP%]:hover {\n  background: #DA4A24;\n  color: white;\n}\n.add-horario-btn[_ngcontent-%COMP%] {\n  background: white;\n  color: #F6BD38;\n  border: 2px dashed rgba(59, 34, 27, 0.4);\n  border-radius: 12px;\n  padding: 12px 24px;\n  font-weight: 600;\n}\n.add-horario-btn[_ngcontent-%COMP%]:hover {\n  background: rgba(59, 34, 27, 0.05);\n  border-color: rgba(59, 34, 27, 0.6);\n}\n.form-actions[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  gap: 16px;\n  margin-top: 32px;\n  padding-top: 24px;\n  border-top: 1px solid #f0f0f0;\n}\n.save-btn[_ngcontent-%COMP%] {\n  background: #F6BD38 !important;\n  color: #3B221B !important;\n  font-weight: 600 !important;\n  padding: 12px 32px !important;\n  border-radius: 12px !important;\n  font-size: 16px !important;\n}\n.save-btn[_ngcontent-%COMP%]:hover {\n  background: #f4b942 !important;\n}\n.loading-spinner[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  padding: 60px;\n  color: #3B221B;\n}\n.gallery-modal[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background: rgba(0, 0, 0, 0.8);\n  z-index: 1000;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 20px;\n}\n.gallery-modal[_ngcontent-%COMP%]   .gallery-modal-content[_ngcontent-%COMP%] {\n  background: white;\n  border-radius: 16px;\n  padding: 24px;\n  max-width: 90%;\n  max-height: 90%;\n  overflow-y: auto;\n  cursor: default;\n}\n.gallery-modal[_ngcontent-%COMP%]   .gallery-modal-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 20px;\n}\n.gallery-modal[_ngcontent-%COMP%]   .gallery-modal-header[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin: 0;\n  color: #3B221B;\n}\n.gallery-modal[_ngcontent-%COMP%]   .gallery-modal-header[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  color: #3B221B;\n}\n.gallery-modal[_ngcontent-%COMP%]   .gallery-grid-modal[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));\n  gap: 16px;\n}\n.gallery-modal[_ngcontent-%COMP%]   .gallery-grid-modal[_ngcontent-%COMP%]   .gallery-item[_ngcontent-%COMP%] {\n  border-radius: 12px;\n  overflow: hidden;\n  aspect-ratio: 4/3;\n}\n.gallery-modal[_ngcontent-%COMP%]   .gallery-grid-modal[_ngcontent-%COMP%]   .gallery-item[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n  cursor: pointer;\n  transition: transform 0.3s ease;\n}\n.gallery-modal[_ngcontent-%COMP%]   .gallery-grid-modal[_ngcontent-%COMP%]   .gallery-item[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]:hover {\n  transform: scale(1.05);\n}\n@media (max-width: 768px) {\n  .configuracoes-container[_ngcontent-%COMP%] {\n    margin: 12px;\n    padding: 20px;\n    border-radius: 16px;\n  }\n  .gallery-section[_ngcontent-%COMP%]   .gallery-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n    height: auto;\n  }\n  .horario-item[_ngcontent-%COMP%] {\n    flex-direction: column;\n    align-items: stretch;\n  }\n  .horario-item[_ngcontent-%COMP%]   .horario-inputs[_ngcontent-%COMP%] {\n    flex-direction: column;\n  }\n}\n/*# sourceMappingURL=meu-restaurante.component.css.map */'] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MeuRestauranteComponent, [{
    type: Component,
    args: [{ selector: "app-meu-restaurante", standalone: true, imports: [
      CommonModule,
      ReactiveFormsModule,
      MatFormFieldModule,
      MatInputModule,
      MatSelectModule,
      MatIconModule,
      MatButtonModule,
      MatChipsModule,
      MatAutocompleteModule,
      MatCardModule,
      MatDividerModule,
      // NG-Zorro imports
      NzModalModule,
      NzImageModule,
      GlobalSpinnerComponent
    ], template: `<div class="configuracoes-container">\r
  <!-- Cabe\xE7alho da P\xE1gina -->\r
  <div class="page-header">\r
    <h1>Meu Restaurante</h1>\r
    <p>Gerencie as informa\xE7\xF5es p\xFAblicas do seu restaurante que os clientes ver\xE3o.</p>\r
  </div>\r
\r
  <form [formGroup]="restauranteForm" *ngIf="!isLoading">\r
    <!-- Se\xE7\xE3o de Informa\xE7\xF5es Gerais -->\r
    <mat-card class="info-card">\r
      <div class="card-header">\r
        <h3>Informa\xE7\xF5es Gerais</h3>\r
      </div>\r
      <mat-divider></mat-divider>\r
      <div class="card-content">\r
        <mat-form-field appearance="outline">\r
          <mat-label>Tipo de Cozinha</mat-label>\r
          <mat-select formControlName="tipoCozinha">\r
            <mat-option *ngFor="let tipo of tiposCozinha" [value]="tipo">{{ tipo }}</mat-option>\r
          </mat-select>\r
        </mat-form-field>\r
\r
        <mat-form-field appearance="outline">\r
          <mat-label>Descri\xE7\xE3o do Restaurante</mat-label>\r
          <textarea matInput formControlName="descricao" rows="5" placeholder="Conte um pouco sobre a hist\xF3ria, o ambiente e os pratos do seu restaurante..."></textarea>\r
        </mat-form-field>\r
      </div>\r
    </mat-card>\r
\r
    <!-- Se\xE7\xE3o de Imagem Principal -->\r
    <mat-card class="info-card">\r
      <div class="card-header">\r
        <h3>Imagem Principal (para a home)</h3>\r
      </div>\r
      <mat-divider></mat-divider>\r
      <div class="card-content">\r
        <div class="upload-section">\r
          <div class="upload-content">\r
            <button mat-stroked-button color="accent" (click)="principalUploadInput.click()">\r
              <mat-icon>upload</mat-icon> Enviar imagem principal\r
            </button>\r
            <input #principalUploadInput type="file" hidden (change)="onFileSelected($event, 'principal')" accept="image/*" />\r
          </div>\r
        </div>\r
        \r
        <!-- Card estilo home com nz-image -->\r
        <div class="home-style-card" *ngIf="imagemPrincipal">\r
          <nz-image-group>\r
            <div class="restaurant-card">\r
              <img nz-image [nzSrc]="imagemPrincipal.url" alt="Imagem principal do restaurante" class="restaurant-image">\r
              <div class="image-overlay">\r
                <div class="photo-tag">Principal</div>\r
                <button mat-icon-button class="remove-main-img-btn" (click)="removerImagemPrincipal(); $event.stopPropagation()">\r
                  <mat-icon>close</mat-icon>\r
                </button>\r
              </div>\r
            </div>\r
          </nz-image-group>\r
        </div>\r
      </div>\r
    </mat-card>\r
\r
    <!-- Se\xE7\xE3o de Galeria de Fotos -->\r
    <mat-card class="info-card">\r
      <div class="card-header">\r
        <h3>Galeria de Fotos (para a p\xE1gina do restaurante)</h3>\r
      </div>\r
      <mat-divider></mat-divider>\r
      <div class="card-content">\r
        <div class="upload-section">\r
          <div class="upload-content">\r
            <button mat-stroked-button color="accent" (click)="galeriaUploadInput.click()">\r
              <mat-icon>add_a_photo</mat-icon> Adicionar \xE0 galeria\r
            </button>\r
            <input #galeriaUploadInput type="file" hidden (change)="onFileSelected($event, 'galeria')" accept="image/*" multiple />\r
          </div>\r
        </div>\r
        \r
        <!-- Galeria estilo home irregular -->\r
        <div class="photo-gallery" *ngIf="galeriaPreviews.length > 0">\r
          <nz-image-group>\r
            <div class="gallery-grid-irregular">\r
              <!-- Foto Principal (Grande) -->\r
              <div class="main-photo" *ngIf="galeriaPreviews[0]">\r
                <img nz-image [nzSrc]="galeriaPreviews[0].url" alt="Foto do restaurante" class="gallery-image">\r
                <button mat-icon-button class="remove-img-btn" (click)="removerImagem(previews.indexOf(galeriaPreviews[0])); $event.stopPropagation()">\r
                  <mat-icon>close</mat-icon>\r
                </button>\r
              </div>\r
              \r
              <!-- Foto M\xE9dia -->\r
              <div class="medium-photo" *ngIf="galeriaPreviews[1]">\r
                <img nz-image [nzSrc]="galeriaPreviews[1].url" alt="Foto do restaurante" class="gallery-image">\r
                <button mat-icon-button class="remove-img-btn" (click)="removerImagem(previews.indexOf(galeriaPreviews[1])); $event.stopPropagation()">\r
                  <mat-icon>close</mat-icon>\r
                </button>\r
              </div>\r
              \r
              <!-- Foto Pequena Superior -->\r
              <div class="small-photo-top" *ngIf="galeriaPreviews[2]">\r
                <img nz-image [nzSrc]="galeriaPreviews[2].url" alt="Foto do restaurante" class="gallery-image">\r
                <button mat-icon-button class="remove-img-btn" (click)="removerImagem(previews.indexOf(galeriaPreviews[2])); $event.stopPropagation()">\r
                  <mat-icon>close</mat-icon>\r
                </button>\r
              </div>\r
              \r
              <!-- Foto Pequena Inferior ou Bot\xE3o Ver Mais -->\r
              <div class="small-photo-bottom" *ngIf="galeriaPreviews[3]">\r
                <img nz-image [nzSrc]="galeriaPreviews[3].url" alt="Foto do restaurante" class="gallery-image">\r
                <div class="more-overlay" *ngIf="galeriaPreviews.length > 4" (click)="openGallery(); $event.stopPropagation()">\r
                  <span>Veja outras {{ galeriaPreviews.length - 4 }} fotos</span>\r
                </div>\r
                <button mat-icon-button class="remove-img-btn" (click)="removerImagem(previews.indexOf(galeriaPreviews[3])); $event.stopPropagation()">\r
                  <mat-icon>close</mat-icon>\r
                </button>\r
              </div>\r
            </div>\r
          </nz-image-group>\r
        </div>\r
      </div>\r
    </mat-card>\r
\r
    <!-- Se\xE7\xE3o de Hor\xE1rios de Funcionamento -->\r
    <mat-card class="info-card">\r
      <div class="card-header">\r
        <h3>Hor\xE1rios de Funcionamento</h3>\r
      </div>\r
      <mat-divider></mat-divider>\r
      <div class="card-content" formArrayName="horariosFuncionamento">\r
        <div *ngFor="let horario of horariosFormArray.controls; let i = index" [formGroupName]="i" class="horario-item">\r
          <mat-form-field appearance="outline" class="dia-semana-field">\r
            <mat-label>Dia da Semana</mat-label>\r
            <mat-select formControlName="diaSemana">\r
              <mat-option value="SEGUNDA">Segunda-feira</mat-option>\r
              <mat-option value="TERCA">Ter\xE7a-feira</mat-option>\r
              <mat-option value="QUARTA">Quarta-feira</mat-option>\r
              <mat-option value="QUINTA">Quinta-feira</mat-option>\r
              <mat-option value="SEXTA">Sexta-feira</mat-option>\r
              <mat-option value="SABADO">S\xE1bado</mat-option>\r
              <mat-option value="DOMINGO">Domingo</mat-option>\r
            </mat-select>\r
          </mat-form-field>\r
\r
          <div class="horario-inputs">\r
            <mat-form-field appearance="outline">\r
              <mat-label>Abertura</mat-label>\r
              <input matInput formControlName="abertura" type="time">\r
            </mat-form-field>\r
            <mat-form-field appearance="outline">\r
              <mat-label>Fechamento</mat-label>\r
              <input matInput formControlName="fechamento" type="time">\r
            </mat-form-field>\r
          </div>\r
\r
          <button mat-icon-button color="warn" class="remove-horario-btn" (click)="removeHorario(i)">\r
            <mat-icon>delete</mat-icon>\r
          </button>\r
        </div>\r
        <button mat-stroked-button class="add-horario-btn" (click)="addHorario()">\r
          <mat-icon>add</mat-icon> Adicionar Hor\xE1rio\r
        </button>\r
      </div>\r
    </mat-card>\r
\r
    <!-- Se\xE7\xE3o de Servi\xE7os -->\r
    <mat-card class="info-card">\r
      <div class="card-header">\r
        <h3>Servi\xE7os Oferecidos</h3>\r
      </div>\r
      <mat-divider></mat-divider>\r
      <div class="card-content">\r
        <mat-form-field appearance="outline">\r
          <mat-label>Selecione os servi\xE7os</mat-label>\r
          <mat-select formControlName="servicos" multiple>\r
            <mat-option *ngFor="let servico of todosServicos" [value]="servico.nome">\r
              <mat-icon *ngIf="servico.icone">{{ servico.icone }}</mat-icon>\r
              {{ servico.nome }}\r
            </mat-option>\r
          </mat-select>\r
        </mat-form-field>\r
      </div>\r
    </mat-card>\r
\r
    <!-- A\xE7\xF5es Finais -->\r
    <div class="form-actions">\r
      <button mat-stroked-button color="warn">Cancelar</button>\r
      <button mat-raised-button class="save-btn" (click)="salvarAlteracoes()">\r
        <mat-icon>save</mat-icon>\r
        Salvar Altera\xE7\xF5es\r
      </button>\r
    </div>\r
  </form>\r
\r
  <div *ngIf="isLoading" class="loading-spinner">\r
    <app-global-spinner></app-global-spinner>\r
  </div>\r
</div>\r
\r
<!-- Modal de Galeria Completa estilo NZ-Image -->\r
<nz-modal\r
  [(nzVisible)]="isGalleryVisible"\r
  nzTitle="Galeria de Fotos"\r
  [nzFooter]="null"\r
  (nzOnCancel)="closeGallery()"\r
  nzWidth="90%"\r
  nzCentered\r
  [nzBodyStyle]="{ padding: '24px' }"\r
>\r
  <ng-container *nzModalContent>\r
    <div class="full-gallery">\r
      <nz-image-group>\r
        <div class="gallery-grid-modal">\r
          <div class="gallery-item" *ngFor="let preview of galeriaPreviews; let i = index">\r
            <img nz-image [nzSrc]="preview.url" [alt]="'Foto ' + (i + 1)" class="modal-gallery-image">\r
          </div>\r
        </div>\r
      </nz-image-group>\r
    </div>\r
  </ng-container>\r
</nz-modal>\r
`, styles: ['@charset "UTF-8";\n\n/* src/app/pages/meu-restaurante/meu-restaurante.component.scss */\n.configuracoes-container {\n  max-width: 800px;\n  margin: 40px auto;\n  padding: 0 16px;\n}\n.page-header {\n  margin-bottom: 24px;\n}\n.page-header h1 {\n  font-size: 28px;\n  font-weight: 500;\n  color: #333333;\n  margin: 0;\n}\n.page-header p {\n  font-size: 16px;\n  color: rgba(59, 34, 27, 0.7);\n  margin: 0;\n}\nmat-card {\n  border-radius: 16px;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);\n  margin-bottom: 24px;\n  border: 1px solid transparent;\n  background-color: white;\n  overflow: hidden;\n  transition: border-color 0.3s ease;\n}\nmat-card:hover {\n  border-color: #F6BD38;\n}\n::ng-deep .mat-mdc-card:hover {\n  background-color: white !important;\n}\n.info-card {\n  padding: 0;\n}\n.info-card .card-header {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 16px 24px;\n  background:\n    linear-gradient(\n      135deg,\n      #F6BD38 0%,\n      #f4b942 100%);\n}\n.info-card .card-header h3 {\n  font-size: 18px;\n  font-weight: 600;\n  margin: 0;\n  color: #3B221B;\n}\n.info-card .card-header .edit-icon {\n  color: #3B221B;\n}\n.info-card .card-content {\n  padding: 24px;\n  background: white;\n}\n.info-card .card-content mat-form-field {\n  width: 100%;\n  margin-bottom: 16px;\n}\n.gallery-section .gallery-grid {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));\n  gap: 16px;\n  border-radius: 16px;\n  overflow: hidden;\n}\n.gallery-section .gallery-grid .main-photo,\n.gallery-section .gallery-grid .medium-photo,\n.gallery-section .gallery-grid .small-photo-top,\n.gallery-section .gallery-grid .small-photo-bottom,\n.gallery-section .gallery-grid .gallery-item {\n  position: relative;\n  border-radius: 16px;\n  overflow: hidden;\n  height: 200px;\n}\n.gallery-section .gallery-grid .main-photo img,\n.gallery-section .gallery-grid .medium-photo img,\n.gallery-section .gallery-grid .small-photo-top img,\n.gallery-section .gallery-grid .small-photo-bottom img,\n.gallery-section .gallery-grid .gallery-item img {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n  cursor: pointer;\n  transition: transform 0.3s ease;\n}\n.gallery-section .gallery-grid .main-photo img:hover,\n.gallery-section .gallery-grid .medium-photo img:hover,\n.gallery-section .gallery-grid .small-photo-top img:hover,\n.gallery-section .gallery-grid .small-photo-bottom img:hover,\n.gallery-section .gallery-grid .gallery-item img:hover {\n  transform: scale(1.05);\n}\n.gallery-section .gallery-grid .main-photo .photo-tag,\n.gallery-section .gallery-grid .medium-photo .photo-tag,\n.gallery-section .gallery-grid .small-photo-top .photo-tag,\n.gallery-section .gallery-grid .small-photo-bottom .photo-tag,\n.gallery-section .gallery-grid .gallery-item .photo-tag {\n  position: absolute;\n  top: 12px;\n  left: 12px;\n  background: #F6BD38;\n  color: #3B221B;\n  padding: 4px 12px;\n  border-radius: 20px;\n  font-size: 12px;\n  font-weight: 600;\n  z-index: 1;\n}\n.gallery-section .gallery-grid .main-photo .remove-img-btn,\n.gallery-section .gallery-grid .medium-photo .remove-img-btn,\n.gallery-section .gallery-grid .small-photo-top .remove-img-btn,\n.gallery-section .gallery-grid .small-photo-bottom .remove-img-btn,\n.gallery-section .gallery-grid .gallery-item .remove-img-btn {\n  position: absolute;\n  top: 8px;\n  right: 8px;\n  background: white;\n  color: #DA4A24;\n  border-radius: 50%;\n  height: 32px;\n  width: 32px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);\n  z-index: 1;\n}\n.gallery-section .gallery-grid .main-photo .remove-img-btn mat-icon,\n.gallery-section .gallery-grid .medium-photo .remove-img-btn mat-icon,\n.gallery-section .gallery-grid .small-photo-top .remove-img-btn mat-icon,\n.gallery-section .gallery-grid .small-photo-bottom .remove-img-btn mat-icon,\n.gallery-section .gallery-grid .gallery-item .remove-img-btn mat-icon {\n  font-size: 18px;\n  height: 18px;\n  width: 18px;\n}\n.gallery-section .gallery-grid .main-photo .remove-img-btn:hover,\n.gallery-section .gallery-grid .medium-photo .remove-img-btn:hover,\n.gallery-section .gallery-grid .small-photo-top .remove-img-btn:hover,\n.gallery-section .gallery-grid .small-photo-bottom .remove-img-btn:hover,\n.gallery-section .gallery-grid .gallery-item .remove-img-btn:hover {\n  background-color: #DA4A24;\n  color: white;\n}\n.gallery-section .gallery-grid .more-photos {\n  cursor: pointer;\n}\n.gallery-section .gallery-grid .more-photos .more-overlay {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background: rgba(0, 0, 0, 0.7);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: white;\n  font-weight: 600;\n  font-size: 14px;\n  text-align: center;\n  transition: background 0.3s ease;\n}\n.gallery-section .gallery-grid .more-photos .more-overlay:hover {\n  background: rgba(0, 0, 0, 0.8);\n}\n.main-image-preview {\n  position: relative;\n  width: 100%;\n  height: 200px;\n  border-radius: 16px;\n  overflow: hidden;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);\n}\n.main-image-preview img {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n  border-radius: 16px;\n}\n.main-image-preview .photo-tag {\n  position: absolute;\n  top: 12px;\n  left: 12px;\n  background: #F6BD38;\n  color: #3B221B;\n  padding: 4px 12px;\n  border-radius: 20px;\n  font-size: 12px;\n  font-weight: 600;\n  z-index: 1;\n}\n.main-image-preview .remove-main-img-btn {\n  position: absolute;\n  top: 8px;\n  right: 8px;\n  background: white;\n  color: #DA4A24;\n  border-radius: 50%;\n  height: 32px;\n  width: 32px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);\n  z-index: 1;\n}\n.main-image-preview .remove-main-img-btn mat-icon {\n  font-size: 18px;\n  height: 18px;\n  width: 18px;\n}\n.main-image-preview .remove-main-img-btn:hover {\n  background-color: #DA4A24;\n  color: white;\n}\n.home-style-card {\n  margin-top: 16px;\n}\n.home-style-card .restaurant-card {\n  position: relative;\n  border-radius: 16px;\n  overflow: hidden;\n  height: 300px;\n  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);\n  cursor: pointer;\n}\n.home-style-card .restaurant-card .restaurant-image {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n  transition: transform 0.3s ease;\n}\n.home-style-card .restaurant-card .restaurant-image:hover {\n  transform: scale(1.02);\n}\n.home-style-card .restaurant-card .image-overlay {\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  pointer-events: none;\n}\n.home-style-card .restaurant-card .image-overlay .photo-tag {\n  position: absolute;\n  top: 12px;\n  left: 12px;\n  background: #F6BD38;\n  color: #3B221B;\n  padding: 6px 12px;\n  border-radius: 20px;\n  font-size: 12px;\n  font-weight: 600;\n  z-index: 2;\n  pointer-events: none;\n}\n.home-style-card .restaurant-card .image-overlay .remove-main-img-btn {\n  position: absolute;\n  top: 12px;\n  right: 12px;\n  background: white;\n  color: #DA4A24;\n  border-radius: 50%;\n  height: 32px;\n  width: 32px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);\n  z-index: 2;\n  pointer-events: all;\n}\n.home-style-card .restaurant-card .image-overlay .remove-main-img-btn mat-icon {\n  font-size: 18px;\n  height: 18px;\n  width: 18px;\n}\n.home-style-card .restaurant-card .image-overlay .remove-main-img-btn:hover {\n  background-color: #DA4A24;\n  color: white;\n}\n.photo-gallery {\n  margin-top: 16px;\n}\n.photo-gallery .gallery-grid-irregular {\n  display: grid;\n  grid-template-columns: 2fr 1fr 1fr;\n  grid-template-rows: 1fr 1fr;\n  gap: 8px;\n  height: 400px;\n}\n.photo-gallery .gallery-grid-irregular .main-photo {\n  grid-column: 1;\n  grid-row: 1/span 2;\n  position: relative;\n  border-radius: 16px;\n  overflow: hidden;\n  cursor: pointer;\n}\n.photo-gallery .gallery-grid-irregular .main-photo .gallery-image {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n  transition: transform 0.3s ease;\n}\n.photo-gallery .gallery-grid-irregular .main-photo .gallery-image:hover {\n  transform: scale(1.05);\n}\n.photo-gallery .gallery-grid-irregular .medium-photo {\n  grid-column: 2;\n  grid-row: 1/span 2;\n  position: relative;\n  border-radius: 16px;\n  overflow: hidden;\n  cursor: pointer;\n}\n.photo-gallery .gallery-grid-irregular .medium-photo .gallery-image {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n  transition: transform 0.3s ease;\n}\n.photo-gallery .gallery-grid-irregular .medium-photo .gallery-image:hover {\n  transform: scale(1.05);\n}\n.photo-gallery .gallery-grid-irregular .small-photo-top {\n  grid-column: 3;\n  grid-row: 1;\n  position: relative;\n  border-radius: 16px;\n  overflow: hidden;\n  cursor: pointer;\n}\n.photo-gallery .gallery-grid-irregular .small-photo-top .gallery-image {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n  transition: transform 0.3s ease;\n}\n.photo-gallery .gallery-grid-irregular .small-photo-top .gallery-image:hover {\n  transform: scale(1.05);\n}\n.photo-gallery .gallery-grid-irregular .small-photo-bottom {\n  grid-column: 3;\n  grid-row: 2;\n  position: relative;\n  border-radius: 16px;\n  overflow: hidden;\n  cursor: pointer;\n}\n.photo-gallery .gallery-grid-irregular .small-photo-bottom .gallery-image {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n  transition: transform 0.3s ease;\n}\n.photo-gallery .gallery-grid-irregular .small-photo-bottom .gallery-image:hover {\n  transform: scale(1.05);\n}\n.photo-gallery .gallery-grid-irregular .small-photo-bottom .more-overlay {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background: rgba(0, 0, 0, 0.7);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: white;\n  font-weight: 600;\n  font-size: 14px;\n  text-align: center;\n  transition: background 0.3s ease;\n  z-index: 1;\n}\n.photo-gallery .gallery-grid-irregular .small-photo-bottom .more-overlay:hover {\n  background: rgba(0, 0, 0, 0.8);\n}\n.photo-gallery .gallery-grid-irregular .remove-img-btn {\n  position: absolute;\n  top: 8px;\n  right: 8px;\n  background: white;\n  color: #DA4A24;\n  border-radius: 50%;\n  height: 28px;\n  width: 28px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);\n  z-index: 2;\n}\n.photo-gallery .gallery-grid-irregular .remove-img-btn mat-icon {\n  font-size: 16px;\n  height: 16px;\n  width: 16px;\n}\n.photo-gallery .gallery-grid-irregular .remove-img-btn:hover {\n  background-color: #DA4A24;\n  color: white;\n}\n.full-gallery .gallery-grid-modal {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  gap: 16px;\n}\n.full-gallery .gallery-grid-modal .gallery-item {\n  border-radius: 16px;\n  overflow: hidden;\n  aspect-ratio: 4/3;\n}\n.full-gallery .gallery-grid-modal .gallery-item .modal-gallery-image {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n  cursor: pointer;\n  transition: transform 0.3s ease;\n}\n.full-gallery .gallery-grid-modal .gallery-item .modal-gallery-image:hover {\n  transform: scale(1.02);\n}\n@media (max-width: 768px) {\n  .photo-gallery .gallery-grid-irregular {\n    grid-template-columns: 1fr 1fr;\n    grid-template-rows: 1fr 1fr 1fr;\n    height: 600px;\n  }\n  .photo-gallery .gallery-grid-irregular .main-photo {\n    grid-column: 1/span 2;\n    grid-row: 1;\n  }\n  .photo-gallery .gallery-grid-irregular .medium-photo {\n    grid-column: 1;\n    grid-row: 2;\n  }\n  .photo-gallery .gallery-grid-irregular .small-photo-top {\n    grid-column: 2;\n    grid-row: 2;\n  }\n  .photo-gallery .gallery-grid-irregular .small-photo-bottom {\n    grid-column: 1/span 2;\n    grid-row: 3;\n  }\n  .full-gallery .gallery-grid-modal {\n    grid-template-columns: repeat(2, 1fr);\n  }\n}\n@media (max-width: 480px) {\n  .full-gallery .gallery-grid-modal {\n    grid-template-columns: 1fr;\n  }\n}\n.gallery-section .gallery-grid {\n  grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));\n}\n@media (min-width: 768px) {\n  .gallery-section .gallery-grid {\n    grid-template-columns: repeat(3, 1fr);\n  }\n}\n.upload-section {\n  margin-bottom: 24px;\n}\n.upload-section .upload-label {\n  display: block;\n  color: #3B221B;\n  margin-bottom: 12px;\n  font-size: 16px;\n  font-weight: 600;\n}\n.upload-section .upload-content {\n  display: flex;\n  align-items: center;\n  gap: 16px;\n  padding: 20px;\n  border: 2px dashed #F6BD38;\n  border-radius: 12px;\n  background: #FFF9E6;\n  transition: all 0.3s ease;\n}\n.upload-section .upload-content:hover {\n  border-color: #f4b942;\n  background: #FFF6D6;\n}\n.upload-section .upload-content button {\n  background: #F6BD38;\n  color: #3B221B;\n  border: none;\n  font-weight: 600;\n}\n.upload-section .upload-content button:hover {\n  background: #f4b942;\n}\n.horario-item {\n  display: flex;\n  gap: 16px;\n  align-items: center;\n  margin-bottom: 16px;\n  padding: 16px;\n  background: #FAFAFA;\n  border-radius: 12px;\n  border: 1px solid #f0f0f0;\n}\n.horario-item .dia-semana-field {\n  flex: 1;\n}\n.horario-item .horario-inputs {\n  display: flex;\n  gap: 16px;\n  flex: 2;\n}\n.horario-item .remove-horario-btn {\n  color: #DA4A24;\n  background: white;\n  border: 1px solid #DA4A24;\n  border-radius: 8px;\n}\n.horario-item .remove-horario-btn:hover {\n  background: #DA4A24;\n  color: white;\n}\n.add-horario-btn {\n  background: white;\n  color: #F6BD38;\n  border: 2px dashed rgba(59, 34, 27, 0.4);\n  border-radius: 12px;\n  padding: 12px 24px;\n  font-weight: 600;\n}\n.add-horario-btn:hover {\n  background: rgba(59, 34, 27, 0.05);\n  border-color: rgba(59, 34, 27, 0.6);\n}\n.form-actions {\n  display: flex;\n  justify-content: center;\n  gap: 16px;\n  margin-top: 32px;\n  padding-top: 24px;\n  border-top: 1px solid #f0f0f0;\n}\n.save-btn {\n  background: #F6BD38 !important;\n  color: #3B221B !important;\n  font-weight: 600 !important;\n  padding: 12px 32px !important;\n  border-radius: 12px !important;\n  font-size: 16px !important;\n}\n.save-btn:hover {\n  background: #f4b942 !important;\n}\n.loading-spinner {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  padding: 60px;\n  color: #3B221B;\n}\n.gallery-modal {\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background: rgba(0, 0, 0, 0.8);\n  z-index: 1000;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 20px;\n}\n.gallery-modal .gallery-modal-content {\n  background: white;\n  border-radius: 16px;\n  padding: 24px;\n  max-width: 90%;\n  max-height: 90%;\n  overflow-y: auto;\n  cursor: default;\n}\n.gallery-modal .gallery-modal-header {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 20px;\n}\n.gallery-modal .gallery-modal-header h3 {\n  margin: 0;\n  color: #3B221B;\n}\n.gallery-modal .gallery-modal-header button {\n  color: #3B221B;\n}\n.gallery-modal .gallery-grid-modal {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));\n  gap: 16px;\n}\n.gallery-modal .gallery-grid-modal .gallery-item {\n  border-radius: 12px;\n  overflow: hidden;\n  aspect-ratio: 4/3;\n}\n.gallery-modal .gallery-grid-modal .gallery-item img {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n  cursor: pointer;\n  transition: transform 0.3s ease;\n}\n.gallery-modal .gallery-grid-modal .gallery-item img:hover {\n  transform: scale(1.05);\n}\n@media (max-width: 768px) {\n  .configuracoes-container {\n    margin: 12px;\n    padding: 20px;\n    border-radius: 16px;\n  }\n  .gallery-section .gallery-grid {\n    grid-template-columns: 1fr;\n    height: auto;\n  }\n  .horario-item {\n    flex-direction: column;\n    align-items: stretch;\n  }\n  .horario-item .horario-inputs {\n    flex-direction: column;\n  }\n}\n/*# sourceMappingURL=meu-restaurante.component.css.map */\n'] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(MeuRestauranteComponent, { className: "MeuRestauranteComponent", filePath: "src/app/pages/meu-restaurante/meu-restaurante.component.ts", lineNumber: 47 });
})();
export {
  MeuRestauranteComponent
};
//# sourceMappingURL=chunk-YJR4RZXQ.js.map
