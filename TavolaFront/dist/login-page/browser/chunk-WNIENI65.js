import {
  NzIconDirective,
  NzIconModule,
  isPresetColor,
  isStatusColor,
  presetColors,
  statusColors
} from "./chunk-TIW6MRUB.js";
import {
  Directionality
} from "./chunk-IOJADCVY.js";
import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ElementRef,
  EventEmitter,
  Input,
  NgModule,
  Output,
  Renderer2,
  Subject,
  ViewEncapsulation,
  booleanAttribute,
  setClassMetadata,
  takeUntil,
  ɵɵNgOnChangesFeature,
  ɵɵadvance,
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵdefineComponent,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵdirectiveInject,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵprojection,
  ɵɵprojectionDef,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵstyleProp,
  ɵɵtemplate
} from "./chunk-CO622P43.js";

// node_modules/@angular/common/locales/pt.mjs
var u = void 0;
function plural(val) {
  const n = val, i = Math.floor(Math.abs(val)), v = val.toString().replace(/^[^.]*\.?/, "").length, e = parseInt(val.toString().replace(/^[^e]*(e([-+]?\d+))?/, "$2")) || 0;
  if (i === Math.floor(i) && i >= 0 && i <= 1) return 1;
  if (e === 0 && !(i === 0) && i % 1e6 === 0 && v === 0 || !(e >= 0 && e <= 5)) return 4;
  return 5;
}
var pt_default = ["pt", [["AM", "PM"], u, u], u, [["D", "S", "T", "Q", "Q", "S", "S"], ["dom.", "seg.", "ter.", "qua.", "qui.", "sex.", "s\xE1b."], ["domingo", "segunda-feira", "ter\xE7a-feira", "quarta-feira", "quinta-feira", "sexta-feira", "s\xE1bado"], ["dom.", "seg.", "ter.", "qua.", "qui.", "sex.", "s\xE1b."]], u, [["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"], ["jan.", "fev.", "mar.", "abr.", "mai.", "jun.", "jul.", "ago.", "set.", "out.", "nov.", "dez."], ["janeiro", "fevereiro", "mar\xE7o", "abril", "maio", "junho", "julho", "agosto", "setembro", "outubro", "novembro", "dezembro"]], u, [["a.C.", "d.C."], u, ["antes de Cristo", "depois de Cristo"]], 0, [6, 0], ["dd/MM/y", "d 'de' MMM 'de' y", "d 'de' MMMM 'de' y", "EEEE, d 'de' MMMM 'de' y"], ["HH:mm", "HH:mm:ss", "HH:mm:ss z", "HH:mm:ss zzzz"], ["{1} {0}", u, u, u], [",", ".", ";", "%", "+", "-", "E", "\xD7", "\u2030", "\u221E", "NaN", ":"], ["#,##0.###", "#,##0%", "\xA4\xA0#,##0.00", "#E0"], "BRL", "R$", "Real brasileiro", {
  "AUD": ["AU$", "$"],
  "BYN": [u, "\u0440."],
  "JPY": ["JP\xA5", "\xA5"],
  "PHP": [u, "\u20B1"],
  "PTE": ["Esc."],
  "RON": [u, "L"],
  "SYP": [u, "S\xA3"],
  "THB": ["\u0E3F"],
  "TWD": ["NT$"],
  "USD": ["US$", "$"]
}, "ltr", plural];

// node_modules/ng-zorro-antd/fesm2022/ng-zorro-antd-tag.mjs
var _c0 = ["*"];
function NzTagComponent_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "nz-icon", 1);
    \u0275\u0275listener("click", function NzTagComponent_Conditional_1_Template_nz_icon_click_0_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeTag($event));
    });
    \u0275\u0275elementEnd();
  }
}
var NzTagComponent = class _NzTagComponent {
  cdr;
  renderer;
  elementRef;
  directionality;
  isPresetColor = false;
  nzMode = "default";
  nzColor;
  nzChecked = false;
  nzBordered = true;
  nzOnClose = new EventEmitter();
  nzCheckedChange = new EventEmitter();
  dir = "ltr";
  destroy$ = new Subject();
  constructor(cdr, renderer, elementRef, directionality) {
    this.cdr = cdr;
    this.renderer = renderer;
    this.elementRef = elementRef;
    this.directionality = directionality;
  }
  updateCheckedStatus() {
    if (this.nzMode === "checkable") {
      this.nzChecked = !this.nzChecked;
      this.nzCheckedChange.emit(this.nzChecked);
    }
  }
  closeTag(e) {
    this.nzOnClose.emit(e);
    if (!e.defaultPrevented) {
      this.renderer.removeChild(this.renderer.parentNode(this.elementRef.nativeElement), this.elementRef.nativeElement);
    }
  }
  clearPresetColor() {
    const hostElement = this.elementRef.nativeElement;
    const regexp = new RegExp(`(ant-tag-(?:${[...presetColors, ...statusColors].join("|")}))`, "g");
    const classname = hostElement.classList.toString();
    const matches = [];
    let match = regexp.exec(classname);
    while (match !== null) {
      matches.push(match[1]);
      match = regexp.exec(classname);
    }
    hostElement.classList.remove(...matches);
  }
  setPresetColor() {
    const hostElement = this.elementRef.nativeElement;
    this.clearPresetColor();
    if (!this.nzColor) {
      this.isPresetColor = false;
    } else {
      this.isPresetColor = isPresetColor(this.nzColor) || isStatusColor(this.nzColor);
    }
    if (this.isPresetColor) {
      hostElement.classList.add(`ant-tag-${this.nzColor}`);
    }
  }
  ngOnInit() {
    this.directionality.change?.pipe(takeUntil(this.destroy$)).subscribe((direction) => {
      this.dir = direction;
      this.cdr.detectChanges();
    });
    this.dir = this.directionality.value;
  }
  ngOnChanges(changes) {
    const {
      nzColor
    } = changes;
    if (nzColor) {
      this.setPresetColor();
    }
  }
  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }
  static \u0275fac = function NzTagComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _NzTagComponent)(\u0275\u0275directiveInject(ChangeDetectorRef), \u0275\u0275directiveInject(Renderer2), \u0275\u0275directiveInject(ElementRef), \u0275\u0275directiveInject(Directionality));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _NzTagComponent,
    selectors: [["nz-tag"]],
    hostAttrs: [1, "ant-tag"],
    hostVars: 12,
    hostBindings: function NzTagComponent_HostBindings(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275listener("click", function NzTagComponent_click_HostBindingHandler() {
          return ctx.updateCheckedStatus();
        });
      }
      if (rf & 2) {
        \u0275\u0275styleProp("background-color", ctx.isPresetColor ? "" : ctx.nzColor);
        \u0275\u0275classProp("ant-tag-has-color", ctx.nzColor && !ctx.isPresetColor)("ant-tag-checkable", ctx.nzMode === "checkable")("ant-tag-checkable-checked", ctx.nzChecked)("ant-tag-rtl", ctx.dir === "rtl")("ant-tag-borderless", !ctx.nzBordered);
      }
    },
    inputs: {
      nzMode: "nzMode",
      nzColor: "nzColor",
      nzChecked: [2, "nzChecked", "nzChecked", booleanAttribute],
      nzBordered: [2, "nzBordered", "nzBordered", booleanAttribute]
    },
    outputs: {
      nzOnClose: "nzOnClose",
      nzCheckedChange: "nzCheckedChange"
    },
    exportAs: ["nzTag"],
    features: [\u0275\u0275NgOnChangesFeature],
    ngContentSelectors: _c0,
    decls: 2,
    vars: 1,
    consts: [["nzType", "close", "tabindex", "-1", 1, "ant-tag-close-icon"], ["nzType", "close", "tabindex", "-1", 1, "ant-tag-close-icon", 3, "click"]],
    template: function NzTagComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275projectionDef();
        \u0275\u0275projection(0);
        \u0275\u0275template(1, NzTagComponent_Conditional_1_Template, 1, 0, "nz-icon", 0);
      }
      if (rf & 2) {
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.nzMode === "closeable" ? 1 : -1);
      }
    },
    dependencies: [NzIconModule, NzIconDirective],
    encapsulation: 2,
    changeDetection: 0
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzTagComponent, [{
    type: Component,
    args: [{
      selector: "nz-tag",
      exportAs: "nzTag",
      preserveWhitespaces: false,
      template: `
    <ng-content></ng-content>
    @if (nzMode === 'closeable') {
      <nz-icon nzType="close" class="ant-tag-close-icon" tabindex="-1" (click)="closeTag($event)" />
    }
  `,
      changeDetection: ChangeDetectionStrategy.OnPush,
      encapsulation: ViewEncapsulation.None,
      host: {
        class: "ant-tag",
        "[style.background-color]": `isPresetColor ? '' : nzColor`,
        "[class.ant-tag-has-color]": `nzColor && !isPresetColor`,
        "[class.ant-tag-checkable]": `nzMode === 'checkable'`,
        "[class.ant-tag-checkable-checked]": `nzChecked`,
        "[class.ant-tag-rtl]": `dir === 'rtl'`,
        "[class.ant-tag-borderless]": `!nzBordered`,
        "(click)": "updateCheckedStatus()"
      },
      imports: [NzIconModule]
    }]
  }], () => [{
    type: ChangeDetectorRef
  }, {
    type: Renderer2
  }, {
    type: ElementRef
  }, {
    type: Directionality
  }], {
    nzMode: [{
      type: Input
    }],
    nzColor: [{
      type: Input
    }],
    nzChecked: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    nzBordered: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    nzOnClose: [{
      type: Output
    }],
    nzCheckedChange: [{
      type: Output
    }]
  });
})();
var NzTagModule = class _NzTagModule {
  static \u0275fac = function NzTagModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _NzTagModule)();
  };
  static \u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
    type: _NzTagModule
  });
  static \u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({
    imports: [NzTagComponent]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzTagModule, [{
    type: NgModule,
    args: [{
      imports: [NzTagComponent],
      exports: [NzTagComponent]
    }]
  }], null, null);
})();

export {
  pt_default,
  NzTagModule
};
/*! Bundled license information:

@angular/common/locales/pt.mjs:
  (**
   * @license
   * Copyright Google LLC All Rights Reserved.
   *
   * Use of this source code is governed by an MIT-style license that can be
   * found in the LICENSE file at https://angular.dev/license
   *)
*/
//# sourceMappingURL=chunk-WNIENI65.js.map
