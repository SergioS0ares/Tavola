import {
  NzIconDirective,
  NzIconModule
} from "./chunk-TIW6MRUB.js";
import {
  BehaviorSubject,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  Injectable,
  Input,
  NgModule,
  ReplaySubject,
  ViewEncapsulation,
  setClassMetadata,
  ɵɵNgOnChangesFeature,
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵdefineComponent,
  ɵɵdefineInjectable,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵtemplate
} from "./chunk-CO622P43.js";

// node_modules/ng-zorro-antd/fesm2022/ng-zorro-antd-core-form.mjs
function NzFormItemFeedbackIconComponent_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "nz-icon", 0);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("nzType", ctx_r0.iconType);
  }
}
var NzFormStatusService = class _NzFormStatusService {
  formStatusChanges = new ReplaySubject(1);
  static \u0275fac = function NzFormStatusService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _NzFormStatusService)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
    token: _NzFormStatusService,
    factory: _NzFormStatusService.\u0275fac
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzFormStatusService, [{
    type: Injectable
  }], null, null);
})();
var NzFormNoStatusService = class _NzFormNoStatusService {
  noFormStatus = new BehaviorSubject(false);
  static \u0275fac = function NzFormNoStatusService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _NzFormNoStatusService)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
    token: _NzFormNoStatusService,
    factory: _NzFormNoStatusService.\u0275fac
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzFormNoStatusService, [{
    type: Injectable
  }], null, null);
})();
var iconTypeMap = {
  error: "close-circle-fill",
  validating: "loading",
  success: "check-circle-fill",
  warning: "exclamation-circle-fill"
};
var NzFormItemFeedbackIconComponent = class _NzFormItemFeedbackIconComponent {
  cdr;
  status = "";
  constructor(cdr) {
    this.cdr = cdr;
  }
  iconType = null;
  ngOnChanges(_changes) {
    this.updateIcon();
  }
  updateIcon() {
    this.iconType = this.status ? iconTypeMap[this.status] : null;
    this.cdr.markForCheck();
  }
  static \u0275fac = function NzFormItemFeedbackIconComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _NzFormItemFeedbackIconComponent)(\u0275\u0275directiveInject(ChangeDetectorRef));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _NzFormItemFeedbackIconComponent,
    selectors: [["nz-form-item-feedback-icon"]],
    hostAttrs: [1, "ant-form-item-feedback-icon"],
    hostVars: 8,
    hostBindings: function NzFormItemFeedbackIconComponent_HostBindings(rf, ctx) {
      if (rf & 2) {
        \u0275\u0275classProp("ant-form-item-feedback-icon-error", ctx.status === "error")("ant-form-item-feedback-icon-warning", ctx.status === "warning")("ant-form-item-feedback-icon-success", ctx.status === "success")("ant-form-item-feedback-icon-validating", ctx.status === "validating");
      }
    },
    inputs: {
      status: "status"
    },
    exportAs: ["nzFormFeedbackIcon"],
    features: [\u0275\u0275NgOnChangesFeature],
    decls: 1,
    vars: 1,
    consts: [[3, "nzType"]],
    template: function NzFormItemFeedbackIconComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275template(0, NzFormItemFeedbackIconComponent_Conditional_0_Template, 1, 1, "nz-icon", 0);
      }
      if (rf & 2) {
        \u0275\u0275conditional(ctx.iconType ? 0 : -1);
      }
    },
    dependencies: [NzIconModule, NzIconDirective],
    encapsulation: 2,
    changeDetection: 0
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzFormItemFeedbackIconComponent, [{
    type: Component,
    args: [{
      selector: "nz-form-item-feedback-icon",
      exportAs: "nzFormFeedbackIcon",
      imports: [NzIconModule],
      preserveWhitespaces: false,
      encapsulation: ViewEncapsulation.None,
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: `
    @if (iconType) {
      <nz-icon [nzType]="iconType" />
    }
  `,
      host: {
        class: "ant-form-item-feedback-icon",
        "[class.ant-form-item-feedback-icon-error]": 'status==="error"',
        "[class.ant-form-item-feedback-icon-warning]": 'status==="warning"',
        "[class.ant-form-item-feedback-icon-success]": 'status==="success"',
        "[class.ant-form-item-feedback-icon-validating]": 'status==="validating"'
      }
    }]
  }], () => [{
    type: ChangeDetectorRef
  }], {
    status: [{
      type: Input
    }]
  });
})();
var NzFormPatchModule = class _NzFormPatchModule {
  static \u0275fac = function NzFormPatchModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _NzFormPatchModule)();
  };
  static \u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
    type: _NzFormPatchModule
  });
  static \u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({
    imports: [NzFormItemFeedbackIconComponent]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzFormPatchModule, [{
    type: NgModule,
    args: [{
      imports: [NzFormItemFeedbackIconComponent],
      exports: [NzFormItemFeedbackIconComponent]
    }]
  }], null, null);
})();

export {
  NzFormStatusService,
  NzFormNoStatusService,
  NzFormItemFeedbackIconComponent
};
//# sourceMappingURL=chunk-IHMVYCI2.js.map
