import {
  overlayZIndexSetter
} from "./chunk-F6PDYWT6.js";
import "./chunk-THNKFP42.js";
import {
  NzIconDirective,
  NzIconModule
} from "./chunk-OPPET6GO.js";
import "./chunk-2SJ2DHYL.js";
import "./chunk-BQ76GOFF.js";
import {
  NzNoAnimationDirective
} from "./chunk-RMYNG7YU.js";
import {
  drawerMaskMotion
} from "./chunk-GVUQ4SW7.js";
import {
  NzOutletModule,
  NzStringTemplateOutletDirective
} from "./chunk-DKXAOBVB.js";
import {
  NzConfigService,
  WithConfig
} from "./chunk-OQEB3FQA.js";
import {
  isTemplateRef,
  toCssPixel
} from "./chunk-4OXNTDIN.js";
import "./chunk-5ZV73UG7.js";
import "./chunk-VIBAY5QN.js";
import "./chunk-ODPRINZA.js";
import "./chunk-NCBG67EV.js";
import "./chunk-IZBEIZLW.js";
import "./chunk-UEERIBQV.js";
import "./chunk-WY2VMIPC.js";
import "./chunk-EPNYPDVT.js";
import "./chunk-SW2FAAQS.js";
import {
  Overlay,
  OverlayConfig,
  OverlayKeyboardDispatcher
} from "./chunk-DWD24MB2.js";
import "./chunk-OIBNGD5S.js";
import {
  CdkPortalOutlet,
  ComponentPortal,
  PortalModule,
  TemplatePortal
} from "./chunk-2ET3CX5M.js";
import "./chunk-MP5B2SRU.js";
import "./chunk-OHWI2S6G.js";
import "./chunk-37JVYMH4.js";
import {
  FocusTrapFactory
} from "./chunk-CKIU65T3.js";
import "./chunk-52CXO2VH.js";
import {
  ESCAPE
} from "./chunk-V2OSAOCA.js";
import "./chunk-WZFLAKUS.js";
import "./chunk-7N4PRWGB.js";
import "./chunk-UWI5G4WL.js";
import {
  CdkScrollable
} from "./chunk-EDUYFCL7.js";
import "./chunk-EJC5EH6D.js";
import "./chunk-IJ3KGSPX.js";
import {
  Directionality
} from "./chunk-SLO47O37.js";
import "./chunk-E2JSMR2W.js";
import "./chunk-B5GAWAR3.js";
import "./chunk-USHARBCX.js";
import "./chunk-HPCFBG3Q.js";
import {
  NgTemplateOutlet
} from "./chunk-GAMILAFO.js";
import {
  DOCUMENT
} from "./chunk-O3MZQZIU.js";
import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ContentChild,
  Directive,
  EventEmitter,
  Injectable,
  InjectionToken,
  Injector,
  Input,
  NgModule,
  Output,
  Renderer2,
  TemplateRef,
  Type,
  ViewChild,
  ViewContainerRef,
  booleanAttribute,
  inject,
  setClassMetadata,
  ɵɵInheritDefinitionFeature,
  ɵɵNgOnChangesFeature,
  ɵɵadvance,
  ɵɵclassMapInterpolate1,
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵcontentQuery,
  ɵɵdefineComponent,
  ɵɵdefineDirective,
  ɵɵdefineInjectable,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementContainer,
  ɵɵelementContainerEnd,
  ɵɵelementContainerStart,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵinject,
  ɵɵlistener,
  ɵɵloadQuery,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵqueryRefresh,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵstyleMap,
  ɵɵstyleProp,
  ɵɵtemplate,
  ɵɵtemplateRefExtractor,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵviewQuery
} from "./chunk-CR2THLZV.js";
import "./chunk-QCX4XGGK.js";
import "./chunk-3LZ7TQJT.js";
import {
  Subject,
  __esDecorate,
  __runInitializers,
  takeUntil
} from "./chunk-3SRVZXQZ.js";
import {
  __objRest
} from "./chunk-WDMUDEB6.js";

// node_modules/ng-zorro-antd/fesm2022/ng-zorro-antd-drawer.mjs
var _c0 = ["drawerTemplate"];
function NzDrawerComponent_ng_template_0_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "div", 9);
    ɵɵlistener("click", function NzDrawerComponent_ng_template_0_Conditional_1_Template_div_click_0_listener() {
      ɵɵrestoreView(_r1);
      const ctx_r1 = ɵɵnextContext(2);
      return ɵɵresetView(ctx_r1.maskClick());
    });
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext(2);
    ɵɵstyleMap(ctx_r1.nzMaskStyle);
    ɵɵproperty("@drawerMaskMotion", void 0);
  }
}
function NzDrawerComponent_ng_template_0_Conditional_5_Conditional_2_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵelement(1, "nz-icon", 17);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const closeIcon_r4 = ctx.$implicit;
    ɵɵadvance();
    ɵɵproperty("nzType", closeIcon_r4);
  }
}
function NzDrawerComponent_ng_template_0_Conditional_5_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "button", 15);
    ɵɵlistener("click", function NzDrawerComponent_ng_template_0_Conditional_5_Conditional_2_Template_button_click_0_listener() {
      ɵɵrestoreView(_r3);
      const ctx_r1 = ɵɵnextContext(3);
      return ɵɵresetView(ctx_r1.closeClick());
    });
    ɵɵtemplate(1, NzDrawerComponent_ng_template_0_Conditional_5_Conditional_2_ng_container_1_Template, 2, 1, "ng-container", 16);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext(3);
    ɵɵadvance();
    ɵɵproperty("nzStringTemplateOutlet", ctx_r1.nzCloseIcon);
  }
}
function NzDrawerComponent_ng_template_0_Conditional_5_Conditional_3_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtext(1);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext(4);
    ɵɵadvance();
    ɵɵtextInterpolate(ctx_r1.nzTitle);
  }
}
function NzDrawerComponent_ng_template_0_Conditional_5_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 13);
    ɵɵtemplate(1, NzDrawerComponent_ng_template_0_Conditional_5_Conditional_3_ng_container_1_Template, 2, 1, "ng-container", 16);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext(3);
    ɵɵadvance();
    ɵɵproperty("nzStringTemplateOutlet", ctx_r1.nzTitle);
  }
}
function NzDrawerComponent_ng_template_0_Conditional_5_Conditional_4_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtext(1);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext(4);
    ɵɵadvance();
    ɵɵtextInterpolate(ctx_r1.nzExtra);
  }
}
function NzDrawerComponent_ng_template_0_Conditional_5_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 14);
    ɵɵtemplate(1, NzDrawerComponent_ng_template_0_Conditional_5_Conditional_4_ng_container_1_Template, 2, 1, "ng-container", 16);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext(3);
    ɵɵadvance();
    ɵɵproperty("nzStringTemplateOutlet", ctx_r1.nzExtra);
  }
}
function NzDrawerComponent_ng_template_0_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 10)(1, "div", 11);
    ɵɵtemplate(2, NzDrawerComponent_ng_template_0_Conditional_5_Conditional_2_Template, 2, 1, "button", 12)(3, NzDrawerComponent_ng_template_0_Conditional_5_Conditional_3_Template, 2, 1, "div", 13);
    ɵɵelementEnd();
    ɵɵtemplate(4, NzDrawerComponent_ng_template_0_Conditional_5_Conditional_4_Template, 2, 1, "div", 14);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext(2);
    ɵɵclassProp("ant-drawer-header-close-only", !ctx_r1.nzTitle);
    ɵɵadvance(2);
    ɵɵconditional(ctx_r1.nzClosable ? 2 : -1);
    ɵɵadvance();
    ɵɵconditional(ctx_r1.nzTitle ? 3 : -1);
    ɵɵadvance();
    ɵɵconditional(ctx_r1.nzExtra ? 4 : -1);
  }
}
function NzDrawerComponent_ng_template_0_ng_template_7_Template(rf, ctx) {
}
function NzDrawerComponent_ng_template_0_Conditional_8_Conditional_0_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainer(0);
  }
}
function NzDrawerComponent_ng_template_0_Conditional_8_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, NzDrawerComponent_ng_template_0_Conditional_8_Conditional_0_ng_container_0_Template, 1, 0, "ng-container", 18);
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext(3);
    ɵɵproperty("ngTemplateOutlet", ctx_r1.nzContent)("ngTemplateOutletContext", ctx_r1.templateContext);
  }
}
function NzDrawerComponent_ng_template_0_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, NzDrawerComponent_ng_template_0_Conditional_8_Conditional_0_Template, 1, 2, "ng-container");
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext(2);
    ɵɵconditional(ctx_r1.isTemplateRef(ctx_r1.nzContent) ? 0 : -1);
  }
}
function NzDrawerComponent_ng_template_0_Conditional_9_Conditional_0_ng_template_0_Template(rf, ctx) {
}
function NzDrawerComponent_ng_template_0_Conditional_9_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, NzDrawerComponent_ng_template_0_Conditional_9_Conditional_0_ng_template_0_Template, 0, 0, "ng-template", 19);
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext(3);
    ɵɵproperty("ngTemplateOutlet", ctx_r1.contentFromContentChild);
  }
}
function NzDrawerComponent_ng_template_0_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, NzDrawerComponent_ng_template_0_Conditional_9_Conditional_0_Template, 1, 1, null, 19);
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext(2);
    ɵɵconditional(ctx_r1.contentFromContentChild && (ctx_r1.isOpen || ctx_r1.inAnimation) ? 0 : -1);
  }
}
function NzDrawerComponent_ng_template_0_Conditional_10_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtext(1);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext(3);
    ɵɵadvance();
    ɵɵtextInterpolate(ctx_r1.nzFooter);
  }
}
function NzDrawerComponent_ng_template_0_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 8);
    ɵɵtemplate(1, NzDrawerComponent_ng_template_0_Conditional_10_ng_container_1_Template, 2, 1, "ng-container", 16);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext(2);
    ɵɵadvance();
    ɵɵproperty("nzStringTemplateOutlet", ctx_r1.nzFooter);
  }
}
function NzDrawerComponent_ng_template_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 1);
    ɵɵtemplate(1, NzDrawerComponent_ng_template_0_Conditional_1_Template, 1, 3, "div", 2);
    ɵɵelementStart(2, "div")(3, "div", 3)(4, "div", 4);
    ɵɵtemplate(5, NzDrawerComponent_ng_template_0_Conditional_5_Template, 5, 5, "div", 5);
    ɵɵelementStart(6, "div", 6);
    ɵɵtemplate(7, NzDrawerComponent_ng_template_0_ng_template_7_Template, 0, 0, "ng-template", 7)(8, NzDrawerComponent_ng_template_0_Conditional_8_Template, 1, 1)(9, NzDrawerComponent_ng_template_0_Conditional_9_Template, 1, 1);
    ɵɵelementEnd();
    ɵɵtemplate(10, NzDrawerComponent_ng_template_0_Conditional_10_Template, 2, 1, "div", 8);
    ɵɵelementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    ɵɵstyleProp("transform", ctx_r1.offsetTransform)("transition", ctx_r1.placementChanging ? "none" : null)("z-index", ctx_r1.nzZIndex);
    ɵɵclassProp("ant-drawer-rtl", ctx_r1.dir === "rtl")("ant-drawer-open", ctx_r1.isOpen)("no-mask", !ctx_r1.nzMask)("ant-drawer-top", ctx_r1.nzPlacement === "top")("ant-drawer-bottom", ctx_r1.nzPlacement === "bottom")("ant-drawer-right", ctx_r1.nzPlacement === "right")("ant-drawer-left", ctx_r1.nzPlacement === "left");
    ɵɵproperty("nzNoAnimation", ctx_r1.nzNoAnimation);
    ɵɵadvance();
    ɵɵconditional(ctx_r1.nzMask && ctx_r1.isOpen ? 1 : -1);
    ɵɵadvance();
    ɵɵclassMapInterpolate1("ant-drawer-content-wrapper ", ctx_r1.nzWrapClassName, "");
    ɵɵstyleProp("width", ctx_r1.width)("height", ctx_r1.height)("transform", ctx_r1.transform)("transition", ctx_r1.placementChanging ? "none" : null);
    ɵɵadvance(2);
    ɵɵstyleProp("height", ctx_r1.isLeftOrRight ? "100%" : null);
    ɵɵadvance();
    ɵɵconditional(ctx_r1.nzTitle || ctx_r1.nzClosable ? 5 : -1);
    ɵɵadvance();
    ɵɵstyleMap(ctx_r1.nzBodyStyle);
    ɵɵadvance(2);
    ɵɵconditional(ctx_r1.nzContent ? 8 : 9);
    ɵɵadvance(2);
    ɵɵconditional(ctx_r1.nzFooter ? 10 : -1);
  }
}
var NzDrawerContentDirective = class _NzDrawerContentDirective {
  templateRef;
  constructor(templateRef) {
    this.templateRef = templateRef;
  }
  static ɵfac = function NzDrawerContentDirective_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _NzDrawerContentDirective)(ɵɵdirectiveInject(TemplateRef));
  };
  static ɵdir = ɵɵdefineDirective({
    type: _NzDrawerContentDirective,
    selectors: [["", "nzDrawerContent", ""]],
    exportAs: ["nzDrawerContent"]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzDrawerContentDirective, [{
    type: Directive,
    args: [{
      selector: "[nzDrawerContent]",
      exportAs: "nzDrawerContent"
    }]
  }], () => [{
    type: TemplateRef
  }], null);
})();
var DRAWER_DEFAULT_SIZE = 378;
var DRAWER_LARGE_SIZE = 736;
var NZ_DRAWER_DATA = new InjectionToken("NZ_DRAWER_DATA");
var NzDrawerRef = class {
};
var DRAWER_ANIMATE_DURATION = 300;
var NZ_CONFIG_MODULE_NAME = "drawer";
var NzDrawerComponent = (() => {
  let _classSuper = NzDrawerRef;
  let _nzMaskClosable_decorators;
  let _nzMaskClosable_initializers = [];
  let _nzMaskClosable_extraInitializers = [];
  let _nzMask_decorators;
  let _nzMask_initializers = [];
  let _nzMask_extraInitializers = [];
  let _nzCloseOnNavigation_decorators;
  let _nzCloseOnNavigation_initializers = [];
  let _nzCloseOnNavigation_extraInitializers = [];
  let _nzDirection_decorators;
  let _nzDirection_initializers = [];
  let _nzDirection_extraInitializers = [];
  return class NzDrawerComponent2 extends _classSuper {
    static {
      const _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(_classSuper[Symbol.metadata] ?? null) : void 0;
      _nzMaskClosable_decorators = [WithConfig()];
      _nzMask_decorators = [WithConfig()];
      _nzCloseOnNavigation_decorators = [WithConfig()];
      _nzDirection_decorators = [WithConfig()];
      __esDecorate(null, null, _nzMaskClosable_decorators, {
        kind: "field",
        name: "nzMaskClosable",
        static: false,
        private: false,
        access: {
          has: (obj) => "nzMaskClosable" in obj,
          get: (obj) => obj.nzMaskClosable,
          set: (obj, value) => {
            obj.nzMaskClosable = value;
          }
        },
        metadata: _metadata
      }, _nzMaskClosable_initializers, _nzMaskClosable_extraInitializers);
      __esDecorate(null, null, _nzMask_decorators, {
        kind: "field",
        name: "nzMask",
        static: false,
        private: false,
        access: {
          has: (obj) => "nzMask" in obj,
          get: (obj) => obj.nzMask,
          set: (obj, value) => {
            obj.nzMask = value;
          }
        },
        metadata: _metadata
      }, _nzMask_initializers, _nzMask_extraInitializers);
      __esDecorate(null, null, _nzCloseOnNavigation_decorators, {
        kind: "field",
        name: "nzCloseOnNavigation",
        static: false,
        private: false,
        access: {
          has: (obj) => "nzCloseOnNavigation" in obj,
          get: (obj) => obj.nzCloseOnNavigation,
          set: (obj, value) => {
            obj.nzCloseOnNavigation = value;
          }
        },
        metadata: _metadata
      }, _nzCloseOnNavigation_initializers, _nzCloseOnNavigation_extraInitializers);
      __esDecorate(null, null, _nzDirection_decorators, {
        kind: "field",
        name: "nzDirection",
        static: false,
        private: false,
        access: {
          has: (obj) => "nzDirection" in obj,
          get: (obj) => obj.nzDirection,
          set: (obj, value) => {
            obj.nzDirection = value;
          }
        },
        metadata: _metadata
      }, _nzDirection_initializers, _nzDirection_extraInitializers);
      if (_metadata) Object.defineProperty(this, Symbol.metadata, {
        enumerable: true,
        configurable: true,
        writable: true,
        value: _metadata
      });
    }
    cdr;
    nzConfigService;
    renderer;
    overlay;
    injector;
    changeDetectorRef;
    focusTrapFactory;
    viewContainerRef;
    overlayKeyboardDispatcher;
    directionality;
    _nzModuleName = NZ_CONFIG_MODULE_NAME;
    nzContent;
    nzCloseIcon = "close";
    nzClosable = true;
    nzMaskClosable = __runInitializers(this, _nzMaskClosable_initializers, true);
    nzMask = (__runInitializers(this, _nzMaskClosable_extraInitializers), __runInitializers(this, _nzMask_initializers, true));
    nzCloseOnNavigation = (__runInitializers(this, _nzMask_extraInitializers), __runInitializers(this, _nzCloseOnNavigation_initializers, true));
    nzNoAnimation = (__runInitializers(this, _nzCloseOnNavigation_extraInitializers), false);
    nzKeyboard = true;
    nzTitle;
    nzExtra;
    nzFooter;
    nzPlacement = "right";
    nzSize = "default";
    nzMaskStyle = {};
    nzBodyStyle = {};
    nzWrapClassName;
    nzWidth;
    nzHeight;
    nzZIndex = 1e3;
    nzOffsetX = 0;
    nzOffsetY = 0;
    componentInstance = null;
    componentRef = null;
    set nzVisible(value) {
      this.isOpen = value;
    }
    get nzVisible() {
      return this.isOpen;
    }
    nzOnViewInit = new EventEmitter();
    nzOnClose = new EventEmitter();
    nzVisibleChange = new EventEmitter();
    drawerTemplate;
    bodyPortalOutlet;
    contentFromContentChild;
    destroy$ = new Subject();
    previouslyFocusedElement;
    placementChanging = false;
    placementChangeTimeoutId;
    nzContentParams;
    // only service
    nzData;
    overlayRef;
    portal;
    focusTrap;
    isOpen = false;
    inAnimation = false;
    templateContext = {
      $implicit: void 0,
      drawerRef: this
    };
    isTemplateRef = isTemplateRef;
    get offsetTransform() {
      if (!this.isOpen || this.nzOffsetX + this.nzOffsetY === 0) {
        return null;
      }
      switch (this.nzPlacement) {
        case "left":
          return `translateX(${this.nzOffsetX}px)`;
        case "right":
          return `translateX(-${this.nzOffsetX}px)`;
        case "top":
          return `translateY(${this.nzOffsetY}px)`;
        case "bottom":
          return `translateY(-${this.nzOffsetY}px)`;
      }
    }
    get transform() {
      if (this.isOpen) {
        return null;
      }
      switch (this.nzPlacement) {
        case "left":
          return `translateX(-100%)`;
        case "right":
          return `translateX(100%)`;
        case "top":
          return `translateY(-100%)`;
        case "bottom":
          return `translateY(100%)`;
      }
    }
    get width() {
      if (this.isLeftOrRight) {
        const defaultWidth = this.nzSize === "large" ? DRAWER_LARGE_SIZE : DRAWER_DEFAULT_SIZE;
        return this.nzWidth === void 0 ? toCssPixel(defaultWidth) : toCssPixel(this.nzWidth);
      }
      return null;
    }
    get height() {
      if (!this.isLeftOrRight) {
        const defaultHeight = this.nzSize === "large" ? DRAWER_LARGE_SIZE : DRAWER_DEFAULT_SIZE;
        return this.nzHeight === void 0 ? toCssPixel(defaultHeight) : toCssPixel(this.nzHeight);
      }
      return null;
    }
    get isLeftOrRight() {
      return this.nzPlacement === "left" || this.nzPlacement === "right";
    }
    nzAfterOpen = new Subject();
    nzAfterClose = new Subject();
    get afterOpen() {
      return this.nzAfterOpen.asObservable();
    }
    get afterClose() {
      return this.nzAfterClose.asObservable();
    }
    get isNzContentTemplateRef() {
      return isTemplateRef(this.nzContent);
    }
    // from service config
    nzDirection = __runInitializers(this, _nzDirection_initializers, void 0);
    dir = (__runInitializers(this, _nzDirection_extraInitializers), "ltr");
    document = inject(DOCUMENT);
    constructor(cdr, nzConfigService, renderer, overlay, injector, changeDetectorRef, focusTrapFactory, viewContainerRef, overlayKeyboardDispatcher, directionality) {
      super();
      this.cdr = cdr;
      this.nzConfigService = nzConfigService;
      this.renderer = renderer;
      this.overlay = overlay;
      this.injector = injector;
      this.changeDetectorRef = changeDetectorRef;
      this.focusTrapFactory = focusTrapFactory;
      this.viewContainerRef = viewContainerRef;
      this.overlayKeyboardDispatcher = overlayKeyboardDispatcher;
      this.directionality = directionality;
    }
    ngOnInit() {
      this.directionality.change?.pipe(takeUntil(this.destroy$)).subscribe((direction) => {
        this.dir = direction;
        this.cdr.detectChanges();
      });
      this.dir = this.nzDirection || this.directionality.value;
      this.attachOverlay();
      this.updateOverlayStyle();
      this.updateBodyOverflow();
      this.templateContext = {
        $implicit: this.nzData || this.nzContentParams,
        drawerRef: this
      };
      this.changeDetectorRef.detectChanges();
    }
    ngAfterViewInit() {
      this.attachBodyContent();
      if (this.nzOnViewInit.observers.length) {
        setTimeout(() => {
          this.nzOnViewInit.emit();
        });
      }
    }
    ngOnChanges(changes) {
      const {
        nzPlacement,
        nzVisible
      } = changes;
      if (nzVisible) {
        const value = changes.nzVisible.currentValue;
        if (value) {
          this.open();
        } else {
          this.close();
        }
      }
      if (nzPlacement && !nzPlacement.isFirstChange()) {
        this.triggerPlacementChangeCycleOnce();
      }
    }
    ngOnDestroy() {
      this.destroy$.next();
      this.destroy$.complete();
      clearTimeout(this.placementChangeTimeoutId);
      this.disposeOverlay();
    }
    getAnimationDuration() {
      return this.nzNoAnimation ? 0 : DRAWER_ANIMATE_DURATION;
    }
    // Disable the transition animation temporarily when the placement changing
    triggerPlacementChangeCycleOnce() {
      if (!this.nzNoAnimation) {
        this.placementChanging = true;
        this.changeDetectorRef.markForCheck();
        clearTimeout(this.placementChangeTimeoutId);
        this.placementChangeTimeoutId = setTimeout(() => {
          this.placementChanging = false;
          this.changeDetectorRef.markForCheck();
        }, this.getAnimationDuration());
      }
    }
    close(result) {
      this.isOpen = false;
      this.inAnimation = true;
      this.nzVisibleChange.emit(false);
      this.updateOverlayStyle();
      this.overlayKeyboardDispatcher.remove(this.overlayRef);
      this.changeDetectorRef.detectChanges();
      setTimeout(() => {
        this.updateBodyOverflow();
        this.restoreFocus();
        this.inAnimation = false;
        this.nzAfterClose.next(result);
        this.nzAfterClose.complete();
        this.componentInstance = null;
        this.componentRef = null;
      }, this.getAnimationDuration());
    }
    open() {
      this.attachOverlay();
      this.isOpen = true;
      this.inAnimation = true;
      this.nzVisibleChange.emit(true);
      this.overlayKeyboardDispatcher.add(this.overlayRef);
      this.updateOverlayStyle();
      this.updateBodyOverflow();
      this.savePreviouslyFocusedElement();
      this.trapFocus();
      this.changeDetectorRef.detectChanges();
      setTimeout(() => {
        this.inAnimation = false;
        this.changeDetectorRef.detectChanges();
        this.nzAfterOpen.next();
      }, this.getAnimationDuration());
    }
    getContentComponent() {
      return this.componentInstance;
    }
    getContentComponentRef() {
      return this.componentRef;
    }
    closeClick() {
      this.nzOnClose.emit();
    }
    maskClick() {
      if (this.nzMaskClosable && this.nzMask) {
        this.nzOnClose.emit();
      }
    }
    attachBodyContent() {
      this.bodyPortalOutlet.dispose();
      if (this.nzContent instanceof Type) {
        const childInjector = Injector.create({
          parent: this.injector,
          providers: [{
            provide: NzDrawerRef,
            useValue: this
          }, {
            provide: NZ_DRAWER_DATA,
            useValue: this.nzData
          }]
        });
        const componentPortal = new ComponentPortal(this.nzContent, null, childInjector);
        this.componentRef = this.bodyPortalOutlet.attachComponentPortal(componentPortal);
        this.componentInstance = this.componentRef.instance;
        Object.assign(this.componentRef.instance, this.nzData || this.nzContentParams);
        this.componentRef.changeDetectorRef.detectChanges();
      }
    }
    attachOverlay() {
      if (!this.overlayRef) {
        this.portal = new TemplatePortal(this.drawerTemplate, this.viewContainerRef);
        this.overlayRef = this.overlay.create(this.getOverlayConfig());
        overlayZIndexSetter(this.overlayRef, this.nzZIndex);
      }
      if (this.overlayRef && !this.overlayRef.hasAttached()) {
        this.overlayRef.attach(this.portal);
        this.overlayRef.keydownEvents().pipe(takeUntil(this.destroy$)).subscribe((event) => {
          if (event.keyCode === ESCAPE && this.isOpen && this.nzKeyboard) {
            this.nzOnClose.emit();
          }
        });
        this.overlayRef.detachments().pipe(takeUntil(this.destroy$)).subscribe(() => {
          this.close();
          this.disposeOverlay();
        });
      }
    }
    disposeOverlay() {
      this.overlayRef?.dispose();
      this.overlayRef = null;
    }
    getOverlayConfig() {
      return new OverlayConfig({
        disposeOnNavigation: this.nzCloseOnNavigation,
        positionStrategy: this.overlay.position().global(),
        scrollStrategy: this.overlay.scrollStrategies.block()
      });
    }
    updateOverlayStyle() {
      if (this.overlayRef && this.overlayRef.overlayElement) {
        this.renderer.setStyle(this.overlayRef.overlayElement, "pointer-events", this.isOpen ? "auto" : "none");
      }
    }
    updateBodyOverflow() {
      if (this.overlayRef) {
        if (this.isOpen) {
          this.overlayRef.getConfig().scrollStrategy.enable();
        } else {
          this.overlayRef.getConfig().scrollStrategy.disable();
        }
      }
    }
    savePreviouslyFocusedElement() {
      if (this.document && !this.previouslyFocusedElement) {
        this.previouslyFocusedElement = this.document.activeElement;
        if (this.previouslyFocusedElement && typeof this.previouslyFocusedElement.blur === "function") {
          this.previouslyFocusedElement.blur();
        }
      }
    }
    trapFocus() {
      if (!this.focusTrap && this.overlayRef && this.overlayRef.overlayElement) {
        this.focusTrap = this.focusTrapFactory.create(this.overlayRef.overlayElement);
        this.focusTrap.focusInitialElement();
      }
    }
    restoreFocus() {
      if (this.previouslyFocusedElement && typeof this.previouslyFocusedElement.focus === "function") {
        this.previouslyFocusedElement.focus();
        this.previouslyFocusedElement = void 0;
      }
      if (this.focusTrap) {
        this.focusTrap.destroy();
      }
    }
    static ɵfac = function NzDrawerComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || NzDrawerComponent2)(ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(NzConfigService), ɵɵdirectiveInject(Renderer2), ɵɵdirectiveInject(Overlay), ɵɵdirectiveInject(Injector), ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(FocusTrapFactory), ɵɵdirectiveInject(ViewContainerRef), ɵɵdirectiveInject(OverlayKeyboardDispatcher), ɵɵdirectiveInject(Directionality));
    };
    static ɵcmp = ɵɵdefineComponent({
      type: NzDrawerComponent2,
      selectors: [["nz-drawer"]],
      contentQueries: function NzDrawerComponent_ContentQueries(rf, ctx, dirIndex) {
        if (rf & 1) {
          ɵɵcontentQuery(dirIndex, NzDrawerContentDirective, 7, TemplateRef);
        }
        if (rf & 2) {
          let _t;
          ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.contentFromContentChild = _t.first);
        }
      },
      viewQuery: function NzDrawerComponent_Query(rf, ctx) {
        if (rf & 1) {
          ɵɵviewQuery(_c0, 7);
          ɵɵviewQuery(CdkPortalOutlet, 5);
        }
        if (rf & 2) {
          let _t;
          ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.drawerTemplate = _t.first);
          ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.bodyPortalOutlet = _t.first);
        }
      },
      inputs: {
        nzContent: "nzContent",
        nzCloseIcon: "nzCloseIcon",
        nzClosable: [2, "nzClosable", "nzClosable", booleanAttribute],
        nzMaskClosable: [2, "nzMaskClosable", "nzMaskClosable", booleanAttribute],
        nzMask: [2, "nzMask", "nzMask", booleanAttribute],
        nzCloseOnNavigation: [2, "nzCloseOnNavigation", "nzCloseOnNavigation", booleanAttribute],
        nzNoAnimation: [2, "nzNoAnimation", "nzNoAnimation", booleanAttribute],
        nzKeyboard: [2, "nzKeyboard", "nzKeyboard", booleanAttribute],
        nzTitle: "nzTitle",
        nzExtra: "nzExtra",
        nzFooter: "nzFooter",
        nzPlacement: "nzPlacement",
        nzSize: "nzSize",
        nzMaskStyle: "nzMaskStyle",
        nzBodyStyle: "nzBodyStyle",
        nzWrapClassName: "nzWrapClassName",
        nzWidth: "nzWidth",
        nzHeight: "nzHeight",
        nzZIndex: "nzZIndex",
        nzOffsetX: "nzOffsetX",
        nzOffsetY: "nzOffsetY",
        nzVisible: [2, "nzVisible", "nzVisible", booleanAttribute]
      },
      outputs: {
        nzOnViewInit: "nzOnViewInit",
        nzOnClose: "nzOnClose",
        nzVisibleChange: "nzVisibleChange"
      },
      exportAs: ["nzDrawer"],
      features: [ɵɵInheritDefinitionFeature, ɵɵNgOnChangesFeature],
      decls: 2,
      vars: 0,
      consts: [["drawerTemplate", ""], [1, "ant-drawer", 3, "nzNoAnimation"], [1, "ant-drawer-mask", 3, "style"], [1, "ant-drawer-content"], [1, "ant-drawer-wrapper-body"], [1, "ant-drawer-header", 3, "ant-drawer-header-close-only"], ["cdkScrollable", "", 1, "ant-drawer-body"], ["cdkPortalOutlet", ""], [1, "ant-drawer-footer"], [1, "ant-drawer-mask", 3, "click"], [1, "ant-drawer-header"], [1, "ant-drawer-header-title"], ["aria-label", "Close", 1, "ant-drawer-close"], [1, "ant-drawer-title"], [1, "ant-drawer-extra"], ["aria-label", "Close", 1, "ant-drawer-close", 3, "click"], [4, "nzStringTemplateOutlet"], [3, "nzType"], [4, "ngTemplateOutlet", "ngTemplateOutletContext"], [3, "ngTemplateOutlet"]],
      template: function NzDrawerComponent_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵtemplate(0, NzDrawerComponent_ng_template_0_Template, 11, 40, "ng-template", null, 0, ɵɵtemplateRefExtractor);
        }
      },
      dependencies: [NzNoAnimationDirective, NzOutletModule, NzStringTemplateOutletDirective, NzIconModule, NzIconDirective, PortalModule, CdkPortalOutlet, NgTemplateOutlet, CdkScrollable],
      encapsulation: 2,
      data: {
        animation: [drawerMaskMotion]
      },
      changeDetection: 0
    });
  };
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzDrawerComponent, [{
    type: Component,
    args: [{
      selector: "nz-drawer",
      exportAs: "nzDrawer",
      template: `
    <ng-template #drawerTemplate>
      <div
        class="ant-drawer"
        [nzNoAnimation]="nzNoAnimation"
        [class.ant-drawer-rtl]="dir === 'rtl'"
        [class.ant-drawer-open]="isOpen"
        [class.no-mask]="!nzMask"
        [class.ant-drawer-top]="nzPlacement === 'top'"
        [class.ant-drawer-bottom]="nzPlacement === 'bottom'"
        [class.ant-drawer-right]="nzPlacement === 'right'"
        [class.ant-drawer-left]="nzPlacement === 'left'"
        [style.transform]="offsetTransform"
        [style.transition]="placementChanging ? 'none' : null"
        [style.zIndex]="nzZIndex"
      >
        @if (nzMask && isOpen) {
          <div @drawerMaskMotion class="ant-drawer-mask" (click)="maskClick()" [style]="nzMaskStyle"></div>
        }
        <div
          class="ant-drawer-content-wrapper {{ nzWrapClassName }}"
          [style.width]="width"
          [style.height]="height"
          [style.transform]="transform"
          [style.transition]="placementChanging ? 'none' : null"
        >
          <div class="ant-drawer-content">
            <div class="ant-drawer-wrapper-body" [style.height]="isLeftOrRight ? '100%' : null">
              @if (nzTitle || nzClosable) {
                <div class="ant-drawer-header" [class.ant-drawer-header-close-only]="!nzTitle">
                  <div class="ant-drawer-header-title">
                    @if (nzClosable) {
                      <button (click)="closeClick()" aria-label="Close" class="ant-drawer-close">
                        <ng-container *nzStringTemplateOutlet="nzCloseIcon; let closeIcon">
                          <nz-icon [nzType]="closeIcon" />
                        </ng-container>
                      </button>
                    }

                    @if (nzTitle) {
                      <div class="ant-drawer-title">
                        <ng-container *nzStringTemplateOutlet="nzTitle">{{ nzTitle }}</ng-container>
                      </div>
                    }
                  </div>
                  @if (nzExtra) {
                    <div class="ant-drawer-extra">
                      <ng-container *nzStringTemplateOutlet="nzExtra">{{ nzExtra }}</ng-container>
                    </div>
                  }
                </div>
              }
              <div class="ant-drawer-body" [style]="nzBodyStyle" cdkScrollable>
                <ng-template cdkPortalOutlet />
                @if (nzContent) {
                  @if (isTemplateRef(nzContent)) {
                    <ng-container *ngTemplateOutlet="nzContent; context: templateContext" />
                  }
                } @else {
                  @if (contentFromContentChild && (isOpen || inAnimation)) {
                    <ng-template [ngTemplateOutlet]="contentFromContentChild" />
                  }
                }
              </div>
              @if (nzFooter) {
                <div class="ant-drawer-footer">
                  <ng-container *nzStringTemplateOutlet="nzFooter">{{ nzFooter }}</ng-container>
                </div>
              }
            </div>
          </div>
        </div>
      </div>
    </ng-template>
  `,
      preserveWhitespaces: false,
      changeDetection: ChangeDetectionStrategy.OnPush,
      animations: [drawerMaskMotion],
      imports: [NzNoAnimationDirective, NzOutletModule, NzIconModule, PortalModule, NgTemplateOutlet, CdkScrollable]
    }]
  }], () => [{
    type: ChangeDetectorRef
  }, {
    type: NzConfigService
  }, {
    type: Renderer2
  }, {
    type: Overlay
  }, {
    type: Injector
  }, {
    type: ChangeDetectorRef
  }, {
    type: FocusTrapFactory
  }, {
    type: ViewContainerRef
  }, {
    type: OverlayKeyboardDispatcher
  }, {
    type: Directionality
  }], {
    nzContent: [{
      type: Input
    }],
    nzCloseIcon: [{
      type: Input
    }],
    nzClosable: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    nzMaskClosable: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    nzMask: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    nzCloseOnNavigation: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    nzNoAnimation: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    nzKeyboard: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    nzTitle: [{
      type: Input
    }],
    nzExtra: [{
      type: Input
    }],
    nzFooter: [{
      type: Input
    }],
    nzPlacement: [{
      type: Input
    }],
    nzSize: [{
      type: Input
    }],
    nzMaskStyle: [{
      type: Input
    }],
    nzBodyStyle: [{
      type: Input
    }],
    nzWrapClassName: [{
      type: Input
    }],
    nzWidth: [{
      type: Input
    }],
    nzHeight: [{
      type: Input
    }],
    nzZIndex: [{
      type: Input
    }],
    nzOffsetX: [{
      type: Input
    }],
    nzOffsetY: [{
      type: Input
    }],
    nzVisible: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    nzOnViewInit: [{
      type: Output
    }],
    nzOnClose: [{
      type: Output
    }],
    nzVisibleChange: [{
      type: Output
    }],
    drawerTemplate: [{
      type: ViewChild,
      args: ["drawerTemplate", {
        static: true
      }]
    }],
    bodyPortalOutlet: [{
      type: ViewChild,
      args: [CdkPortalOutlet, {
        static: false
      }]
    }],
    contentFromContentChild: [{
      type: ContentChild,
      args: [NzDrawerContentDirective, {
        static: true,
        read: TemplateRef
      }]
    }],
    nzDirection: []
  });
})();
var DrawerBuilderForService = class {
  overlay;
  options;
  drawerRef;
  overlayRef;
  unsubscribe$ = new Subject();
  constructor(overlay, options) {
    this.overlay = overlay;
    this.options = options;
    const _a = this.options, {
      nzOnCancel
    } = _a, componentOption = __objRest(_a, [
      "nzOnCancel"
    ]);
    this.overlayRef = this.overlay.create();
    this.drawerRef = this.overlayRef.attach(new ComponentPortal(NzDrawerComponent)).instance;
    this.updateOptions(componentOption);
    this.drawerRef.savePreviouslyFocusedElement();
    this.drawerRef.nzOnViewInit.pipe(takeUntil(this.unsubscribe$)).subscribe(() => {
      this.drawerRef.open();
    });
    this.drawerRef.nzOnClose.subscribe(() => {
      if (nzOnCancel) {
        nzOnCancel().then((canClose) => {
          if (canClose !== false) {
            this.drawerRef.close();
          }
        });
      } else {
        this.drawerRef.close();
      }
    });
    this.drawerRef.afterClose.pipe(takeUntil(this.unsubscribe$)).subscribe(() => {
      this.overlayRef.dispose();
      this.drawerRef = null;
      this.unsubscribe$.next();
      this.unsubscribe$.complete();
    });
  }
  getInstance() {
    return this.drawerRef;
  }
  updateOptions(options) {
    Object.assign(this.drawerRef, options);
  }
};
var NzDrawerService = class _NzDrawerService {
  overlay;
  constructor(overlay) {
    this.overlay = overlay;
  }
  create(options) {
    return new DrawerBuilderForService(this.overlay, options).getInstance();
  }
  static ɵfac = function NzDrawerService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _NzDrawerService)(ɵɵinject(Overlay));
  };
  static ɵprov = ɵɵdefineInjectable({
    token: _NzDrawerService,
    factory: _NzDrawerService.ɵfac
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzDrawerService, [{
    type: Injectable
  }], () => [{
    type: Overlay
  }], null);
})();
var NzDrawerModule = class _NzDrawerModule {
  static ɵfac = function NzDrawerModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _NzDrawerModule)();
  };
  static ɵmod = ɵɵdefineNgModule({
    type: _NzDrawerModule,
    imports: [NzDrawerComponent, NzDrawerContentDirective],
    exports: [NzDrawerComponent, NzDrawerContentDirective]
  });
  static ɵinj = ɵɵdefineInjector({
    providers: [NzDrawerService],
    imports: [NzDrawerComponent]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzDrawerModule, [{
    type: NgModule,
    args: [{
      imports: [NzDrawerComponent, NzDrawerContentDirective],
      providers: [NzDrawerService],
      exports: [NzDrawerComponent, NzDrawerContentDirective]
    }]
  }], null, null);
})();
export {
  DRAWER_ANIMATE_DURATION,
  DRAWER_DEFAULT_SIZE,
  DRAWER_LARGE_SIZE,
  DrawerBuilderForService,
  NZ_DRAWER_DATA,
  NzDrawerComponent,
  NzDrawerContentDirective,
  NzDrawerModule,
  NzDrawerRef,
  NzDrawerService
};
//# sourceMappingURL=ng-zorro-antd_drawer.js.map
