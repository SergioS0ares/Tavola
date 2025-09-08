import {
  NzToolTipModule,
  NzTooltipDirective
} from "./chunk-G67UQEMG.js";
import {
  NzNoAnimationDirective
} from "./chunk-BNJ4MUQB.js";
import {
  NzI18nService,
  POSITION_MAP,
  getPlacementName
} from "./chunk-K7WFS432.js";
import {
  collapseMotion,
  slideMotion,
  zoomBigMotion
} from "./chunk-QJYZSRL2.js";
import {
  CdkConnectedOverlay,
  CdkOverlayOrigin,
  ConnectionPositionPair,
  Overlay,
  OverlayModule,
  TemplatePortal
} from "./chunk-RUUFL2BH.js";
import {
  NzAutosizeDirective,
  NzInputDirective,
  NzInputModule
} from "./chunk-M5EPCEBA.js";
import {
  NzBreakpointService,
  NzButtonGroupComponent,
  NzDestroyService,
  NzOutletModule,
  NzResizeService,
  NzStringTemplateOutletDirective,
  cancelRequestAnimationFrame,
  gridResponsiveMap,
  reqAnimFrame
} from "./chunk-WXYLYLSJ.js";
import {
  NzConfigService,
  NzIconDirective,
  NzIconModule,
  PREFIX,
  WithConfig,
  fromEventOutsideAngular,
  isNotNil,
  isStyleSupport,
  measure,
  numberAttributeWithZeroFallback
} from "./chunk-TIW6MRUB.js";
import {
  ActivatedRoute,
  NavigationEnd,
  PRIMARY_OUTLET,
  Router,
  RouterLink
} from "./chunk-5CK7YN5Y.js";
import {
  DOCUMENT,
  Directionality,
  ENTER,
  ESCAPE,
  MediaMatcher,
  NgTemplateOutlet,
  Platform,
  hasModifierKey
} from "./chunk-IOJADCVY.js";
import {
  BehaviorSubject,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ContentChildren,
  Directive,
  EMPTY,
  ElementRef,
  EventEmitter,
  Injectable,
  InjectionToken,
  Injector,
  Input,
  NgModule,
  NgZone,
  Output,
  Renderer2,
  ReplaySubject,
  Subject,
  Subscription,
  TemplateRef,
  ViewChild,
  ViewContainerRef,
  ViewEncapsulation,
  __esDecorate,
  __runInitializers,
  __spreadValues,
  afterNextRender,
  auditTime,
  booleanAttribute,
  combineLatest,
  distinctUntilChanged,
  filter,
  first,
  forwardRef,
  fromEvent,
  inject,
  map,
  merge,
  mergeMap,
  numberAttribute,
  setClassMetadata,
  startWith,
  switchMap,
  takeUntil,
  ɵɵNgOnChangesFeature,
  ɵɵProvidersFeature,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵclassMap,
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
  ɵɵelementContainerEnd,
  ɵɵelementContainerStart,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵinject,
  ɵɵlistener,
  ɵɵloadQuery,
  ɵɵnextContext,
  ɵɵprojection,
  ɵɵprojectionDef,
  ɵɵproperty,
  ɵɵpureFunction1,
  ɵɵqueryRefresh,
  ɵɵreference,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeUrl,
  ɵɵstyleMap,
  ɵɵstyleProp,
  ɵɵsyntheticHostProperty,
  ɵɵtemplate,
  ɵɵtemplateRefExtractor,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵviewQuery
} from "./chunk-CO622P43.js";

// node_modules/ng-zorro-antd/fesm2022/ng-zorro-antd-grid.mjs
var NzRowDirective = class _NzRowDirective {
  elementRef;
  renderer;
  mediaMatcher;
  ngZone;
  platform;
  breakpointService;
  directionality;
  nzAlign = null;
  nzJustify = null;
  nzGutter = null;
  actualGutter$ = new ReplaySubject(1);
  dir = "ltr";
  destroy$ = new Subject();
  getGutter() {
    const results = [null, null];
    const gutter = this.nzGutter || 0;
    const normalizedGutter = Array.isArray(gutter) ? gutter : [gutter, null];
    normalizedGutter.forEach((g, index) => {
      if (typeof g === "object" && g !== null) {
        results[index] = null;
        Object.keys(gridResponsiveMap).map((screen) => {
          const bp = screen;
          if (this.mediaMatcher.matchMedia(gridResponsiveMap[bp]).matches && g[bp]) {
            results[index] = g[bp];
          }
        });
      } else {
        results[index] = Number(g) || null;
      }
    });
    return results;
  }
  setGutterStyle() {
    const [horizontalGutter, verticalGutter] = this.getGutter();
    this.actualGutter$.next([horizontalGutter, verticalGutter]);
    const renderGutter = (name, gutter) => {
      const nativeElement = this.elementRef.nativeElement;
      if (gutter !== null) {
        this.renderer.setStyle(nativeElement, name, `-${gutter / 2}px`);
      }
    };
    renderGutter("margin-left", horizontalGutter);
    renderGutter("margin-right", horizontalGutter);
    renderGutter("margin-top", verticalGutter);
    renderGutter("margin-bottom", verticalGutter);
  }
  constructor(elementRef, renderer, mediaMatcher, ngZone, platform, breakpointService, directionality) {
    this.elementRef = elementRef;
    this.renderer = renderer;
    this.mediaMatcher = mediaMatcher;
    this.ngZone = ngZone;
    this.platform = platform;
    this.breakpointService = breakpointService;
    this.directionality = directionality;
  }
  ngOnInit() {
    this.dir = this.directionality.value;
    this.directionality.change?.pipe(takeUntil(this.destroy$)).subscribe((direction) => {
      this.dir = direction;
    });
    this.setGutterStyle();
  }
  ngOnChanges(changes) {
    if (changes.nzGutter) {
      this.setGutterStyle();
    }
  }
  ngAfterViewInit() {
    if (this.platform.isBrowser) {
      this.breakpointService.subscribe(gridResponsiveMap).pipe(takeUntil(this.destroy$)).subscribe(() => {
        this.setGutterStyle();
      });
    }
  }
  ngOnDestroy() {
    this.destroy$.next(true);
    this.destroy$.complete();
  }
  static \u0275fac = function NzRowDirective_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _NzRowDirective)(\u0275\u0275directiveInject(ElementRef), \u0275\u0275directiveInject(Renderer2), \u0275\u0275directiveInject(MediaMatcher), \u0275\u0275directiveInject(NgZone), \u0275\u0275directiveInject(Platform), \u0275\u0275directiveInject(NzBreakpointService), \u0275\u0275directiveInject(Directionality));
  };
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _NzRowDirective,
    selectors: [["", "nz-row", ""], ["nz-row"], ["nz-form-item"]],
    hostAttrs: [1, "ant-row"],
    hostVars: 20,
    hostBindings: function NzRowDirective_HostBindings(rf, ctx) {
      if (rf & 2) {
        \u0275\u0275classProp("ant-row-top", ctx.nzAlign === "top")("ant-row-middle", ctx.nzAlign === "middle")("ant-row-bottom", ctx.nzAlign === "bottom")("ant-row-start", ctx.nzJustify === "start")("ant-row-end", ctx.nzJustify === "end")("ant-row-center", ctx.nzJustify === "center")("ant-row-space-around", ctx.nzJustify === "space-around")("ant-row-space-between", ctx.nzJustify === "space-between")("ant-row-space-evenly", ctx.nzJustify === "space-evenly")("ant-row-rtl", ctx.dir === "rtl");
      }
    },
    inputs: {
      nzAlign: "nzAlign",
      nzJustify: "nzJustify",
      nzGutter: "nzGutter"
    },
    exportAs: ["nzRow"],
    features: [\u0275\u0275NgOnChangesFeature]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzRowDirective, [{
    type: Directive,
    args: [{
      selector: "[nz-row],nz-row,nz-form-item",
      exportAs: "nzRow",
      host: {
        class: "ant-row",
        "[class.ant-row-top]": `nzAlign === 'top'`,
        "[class.ant-row-middle]": `nzAlign === 'middle'`,
        "[class.ant-row-bottom]": `nzAlign === 'bottom'`,
        "[class.ant-row-start]": `nzJustify === 'start'`,
        "[class.ant-row-end]": `nzJustify === 'end'`,
        "[class.ant-row-center]": `nzJustify === 'center'`,
        "[class.ant-row-space-around]": `nzJustify === 'space-around'`,
        "[class.ant-row-space-between]": `nzJustify === 'space-between'`,
        "[class.ant-row-space-evenly]": `nzJustify === 'space-evenly'`,
        "[class.ant-row-rtl]": `dir === "rtl"`
      }
    }]
  }], () => [{
    type: ElementRef
  }, {
    type: Renderer2
  }, {
    type: MediaMatcher
  }, {
    type: NgZone
  }, {
    type: Platform
  }, {
    type: NzBreakpointService
  }, {
    type: Directionality
  }], {
    nzAlign: [{
      type: Input
    }],
    nzJustify: [{
      type: Input
    }],
    nzGutter: [{
      type: Input
    }]
  });
})();
var NzColDirective = class _NzColDirective {
  elementRef;
  renderer;
  directionality;
  classMap = {};
  destroy$ = new Subject();
  hostFlexStyle = null;
  dir = "ltr";
  nzFlex = null;
  nzSpan = null;
  nzOrder = null;
  nzOffset = null;
  nzPush = null;
  nzPull = null;
  nzXs = null;
  nzSm = null;
  nzMd = null;
  nzLg = null;
  nzXl = null;
  nzXXl = null;
  setHostClassMap() {
    const hostClassMap = __spreadValues({
      ["ant-col"]: true,
      [`ant-col-${this.nzSpan}`]: isNotNil(this.nzSpan),
      [`ant-col-order-${this.nzOrder}`]: isNotNil(this.nzOrder),
      [`ant-col-offset-${this.nzOffset}`]: isNotNil(this.nzOffset),
      [`ant-col-pull-${this.nzPull}`]: isNotNil(this.nzPull),
      [`ant-col-push-${this.nzPush}`]: isNotNil(this.nzPush),
      ["ant-col-rtl"]: this.dir === "rtl"
    }, this.generateClass());
    for (const i in this.classMap) {
      if (this.classMap.hasOwnProperty(i)) {
        this.renderer.removeClass(this.elementRef.nativeElement, i);
      }
    }
    this.classMap = __spreadValues({}, hostClassMap);
    for (const i in this.classMap) {
      if (this.classMap.hasOwnProperty(i) && this.classMap[i]) {
        this.renderer.addClass(this.elementRef.nativeElement, i);
      }
    }
  }
  setHostFlexStyle() {
    this.hostFlexStyle = this.parseFlex(this.nzFlex);
  }
  parseFlex(flex) {
    if (typeof flex === "number") {
      return `${flex} ${flex} auto`;
    } else if (typeof flex === "string") {
      if (/^\d+(\.\d+)?(px|em|rem|%)$/.test(flex)) {
        return `0 0 ${flex}`;
      }
    }
    return flex;
  }
  generateClass() {
    const listOfSizeInputName = ["nzXs", "nzSm", "nzMd", "nzLg", "nzXl", "nzXXl"];
    const listClassMap = {};
    listOfSizeInputName.forEach((name) => {
      const sizeName = name.replace("nz", "").toLowerCase();
      if (isNotNil(this[name])) {
        if (typeof this[name] === "number" || typeof this[name] === "string") {
          listClassMap[`ant-col-${sizeName}-${this[name]}`] = true;
        } else {
          const embedded = this[name];
          const prefixArray = ["span", "pull", "push", "offset", "order"];
          prefixArray.forEach((prefix) => {
            const prefixClass = prefix === "span" ? "-" : `-${prefix}-`;
            listClassMap[`ant-col-${sizeName}${prefixClass}${embedded[prefix]}`] = embedded && isNotNil(embedded[prefix]);
          });
        }
      }
    });
    return listClassMap;
  }
  nzRowDirective = inject(NzRowDirective, {
    host: true,
    optional: true
  });
  constructor(elementRef, renderer, directionality) {
    this.elementRef = elementRef;
    this.renderer = renderer;
    this.directionality = directionality;
  }
  ngOnInit() {
    this.dir = this.directionality.value;
    this.directionality.change?.pipe(takeUntil(this.destroy$)).subscribe((direction) => {
      this.dir = direction;
      this.setHostClassMap();
    });
    this.setHostClassMap();
    this.setHostFlexStyle();
  }
  ngOnChanges(changes) {
    this.setHostClassMap();
    const {
      nzFlex
    } = changes;
    if (nzFlex) {
      this.setHostFlexStyle();
    }
  }
  ngAfterViewInit() {
    if (this.nzRowDirective) {
      this.nzRowDirective.actualGutter$.pipe(takeUntil(this.destroy$)).subscribe(([horizontalGutter, verticalGutter]) => {
        const renderGutter = (name, gutter) => {
          const nativeElement = this.elementRef.nativeElement;
          if (gutter !== null) {
            this.renderer.setStyle(nativeElement, name, `${gutter / 2}px`);
          }
        };
        renderGutter("padding-left", horizontalGutter);
        renderGutter("padding-right", horizontalGutter);
        renderGutter("padding-top", verticalGutter);
        renderGutter("padding-bottom", verticalGutter);
      });
    }
  }
  ngOnDestroy() {
    this.destroy$.next(true);
    this.destroy$.complete();
  }
  static \u0275fac = function NzColDirective_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _NzColDirective)(\u0275\u0275directiveInject(ElementRef), \u0275\u0275directiveInject(Renderer2), \u0275\u0275directiveInject(Directionality));
  };
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _NzColDirective,
    selectors: [["", "nz-col", ""], ["nz-col"], ["nz-form-control"], ["nz-form-label"]],
    hostVars: 2,
    hostBindings: function NzColDirective_HostBindings(rf, ctx) {
      if (rf & 2) {
        \u0275\u0275styleProp("flex", ctx.hostFlexStyle);
      }
    },
    inputs: {
      nzFlex: "nzFlex",
      nzSpan: "nzSpan",
      nzOrder: "nzOrder",
      nzOffset: "nzOffset",
      nzPush: "nzPush",
      nzPull: "nzPull",
      nzXs: "nzXs",
      nzSm: "nzSm",
      nzMd: "nzMd",
      nzLg: "nzLg",
      nzXl: "nzXl",
      nzXXl: "nzXXl"
    },
    exportAs: ["nzCol"],
    features: [\u0275\u0275NgOnChangesFeature]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzColDirective, [{
    type: Directive,
    args: [{
      selector: "[nz-col],nz-col,nz-form-control,nz-form-label",
      exportAs: "nzCol",
      host: {
        "[style.flex]": "hostFlexStyle"
      }
    }]
  }], () => [{
    type: ElementRef
  }, {
    type: Renderer2
  }, {
    type: Directionality
  }], {
    nzFlex: [{
      type: Input
    }],
    nzSpan: [{
      type: Input
    }],
    nzOrder: [{
      type: Input
    }],
    nzOffset: [{
      type: Input
    }],
    nzPush: [{
      type: Input
    }],
    nzPull: [{
      type: Input
    }],
    nzXs: [{
      type: Input
    }],
    nzSm: [{
      type: Input
    }],
    nzMd: [{
      type: Input
    }],
    nzLg: [{
      type: Input
    }],
    nzXl: [{
      type: Input
    }],
    nzXXl: [{
      type: Input
    }]
  });
})();
var NzGridModule = class _NzGridModule {
  static \u0275fac = function NzGridModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _NzGridModule)();
  };
  static \u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
    type: _NzGridModule
  });
  static \u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({});
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzGridModule, [{
    type: NgModule,
    args: [{
      imports: [NzColDirective, NzRowDirective],
      exports: [NzColDirective, NzRowDirective]
    }]
  }], null, null);
})();

// node_modules/ng-zorro-antd/fesm2022/ng-zorro-antd-menu.mjs
var _c0 = ["nz-menu-item", ""];
var _c1 = ["*"];
var _c2 = ["nz-submenu-inline-child", ""];
function NzSubmenuInlineChildComponent_ng_template_0_Template(rf, ctx) {
}
var _c3 = ["nz-submenu-none-inline-child", ""];
function NzSubmenuNoneInlineChildComponent_ng_template_1_Template(rf, ctx) {
}
var _c4 = ["nz-submenu-title", ""];
function NzSubMenuTitleComponent_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "nz-icon", 0);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("nzType", ctx_r0.nzIcon);
  }
}
function NzSubMenuTitleComponent_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "span", 4);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r0.nzTitle);
  }
}
function NzSubMenuTitleComponent_Conditional_3_Case_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "nz-icon", 5);
  }
}
function NzSubMenuTitleComponent_Conditional_3_Case_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "nz-icon", 6);
  }
}
function NzSubMenuTitleComponent_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 2);
    \u0275\u0275template(1, NzSubMenuTitleComponent_Conditional_3_Case_1_Template, 1, 0, "nz-icon", 5)(2, NzSubMenuTitleComponent_Conditional_3_Case_2_Template, 1, 0, "nz-icon", 6);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_1_0;
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275conditional((tmp_1_0 = ctx_r0.dir) === "rtl" ? 1 : 2);
  }
}
function NzSubMenuTitleComponent_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 3);
  }
}
var _c5 = ["nz-submenu", ""];
var _c6 = [[["", "title", ""]], "*"];
var _c7 = ["[title]", "*"];
function NzSubMenuComponent_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275projection(0);
  }
}
function NzSubMenuComponent_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "div", 3);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    const subMenuTemplate_r3 = \u0275\u0275reference(6);
    \u0275\u0275property("mode", ctx_r1.mode)("nzOpen", ctx_r1.nzOpen)("@.disabled", !!(ctx_r1.noAnimation == null ? null : ctx_r1.noAnimation.nzNoAnimation))("nzNoAnimation", ctx_r1.noAnimation == null ? null : ctx_r1.noAnimation.nzNoAnimation)("menuClass", ctx_r1.nzMenuClassName)("templateOutlet", subMenuTemplate_r3);
  }
}
function NzSubMenuComponent_Conditional_4_ng_template_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 6);
    \u0275\u0275listener("subMenuMouseState", function NzSubMenuComponent_Conditional_4_ng_template_0_Template_div_subMenuMouseState_0_listener($event) {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.setMouseEnterState($event));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    const subMenuTemplate_r3 = \u0275\u0275reference(6);
    \u0275\u0275property("theme", ctx_r1.theme)("mode", ctx_r1.mode)("nzOpen", ctx_r1.nzOpen)("position", ctx_r1.position)("nzDisabled", ctx_r1.nzDisabled)("isMenuInsideDropDown", ctx_r1.isMenuInsideDropDown)("nzTriggerSubMenuAction", ctx_r1.nzTriggerSubMenuAction)("templateOutlet", subMenuTemplate_r3)("menuClass", ctx_r1.nzMenuClassName)("@.disabled", !!(ctx_r1.noAnimation == null ? null : ctx_r1.noAnimation.nzNoAnimation))("nzNoAnimation", ctx_r1.noAnimation == null ? null : ctx_r1.noAnimation.nzNoAnimation);
  }
}
function NzSubMenuComponent_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275template(0, NzSubMenuComponent_Conditional_4_ng_template_0_Template, 1, 11, "ng-template", 5);
    \u0275\u0275listener("positionChange", function NzSubMenuComponent_Conditional_4_Template_ng_template_positionChange_0_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onPositionChange($event));
    })("overlayOutsideClick", function NzSubMenuComponent_Conditional_4_Template_ng_template_overlayOutsideClick_0_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.setMouseEnterState(false));
    });
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    const origin_r6 = \u0275\u0275reference(1);
    \u0275\u0275property("cdkConnectedOverlayPositions", ctx_r1.overlayPositions)("cdkConnectedOverlayOrigin", origin_r6)("cdkConnectedOverlayWidth", ctx_r1.triggerWidth)("cdkConnectedOverlayOpen", ctx_r1.nzOpen)("cdkConnectedOverlayTransformOriginOn", ".ant-menu-submenu");
  }
}
function NzSubMenuComponent_ng_template_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275projection(0, 1);
  }
}
var _c8 = ["titleElement"];
var _c9 = ["nz-menu-group", ""];
var _c10 = ["*", [["", "title", ""]]];
var _c11 = ["*", "[title]"];
function NzMenuGroupComponent_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275text(1);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.nzTitle);
  }
}
function NzMenuGroupComponent_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275projection(0, 1);
  }
}
var NzIsMenuInsideDropDownToken = new InjectionToken("NzIsInDropDownMenuToken");
var NzMenuServiceLocalToken = new InjectionToken("NzMenuServiceLocalToken");
var MenuService = class _MenuService {
  /** all descendant menu click **/
  descendantMenuItemClick$ = new Subject();
  /** child menu item click **/
  childMenuItemClick$ = new Subject();
  theme$ = new BehaviorSubject("light");
  mode$ = new BehaviorSubject("vertical");
  inlineIndent$ = new BehaviorSubject(24);
  isChildSubMenuOpen$ = new BehaviorSubject(false);
  onDescendantMenuItemClick(menu) {
    this.descendantMenuItemClick$.next(menu);
  }
  onChildMenuItemClick(menu) {
    this.childMenuItemClick$.next(menu);
  }
  setMode(mode) {
    this.mode$.next(mode);
  }
  setTheme(theme) {
    this.theme$.next(theme);
  }
  setInlineIndent(indent) {
    this.inlineIndent$.next(indent);
  }
  static \u0275fac = function MenuService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _MenuService)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
    token: _MenuService,
    factory: _MenuService.\u0275fac
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MenuService, [{
    type: Injectable
  }], null, null);
})();
var NzSubmenuService = class _NzSubmenuService {
  nzMenuService = inject(MenuService);
  mode$ = this.nzMenuService.mode$.pipe(map((mode) => {
    if (mode === "inline") {
      return "inline";
    } else if (mode === "vertical" || this.nzHostSubmenuService) {
      return "vertical";
    } else {
      return "horizontal";
    }
  }));
  level = 1;
  isMenuInsideDropDown = inject(NzIsMenuInsideDropDownToken);
  isCurrentSubMenuOpen$ = new BehaviorSubject(false);
  isChildSubMenuOpen$ = new BehaviorSubject(false);
  /** submenu title & overlay mouse enter status **/
  isMouseEnterTitleOrOverlay$ = new Subject();
  childMenuItemClick$ = new Subject();
  destroy$ = new Subject();
  nzHostSubmenuService = inject(_NzSubmenuService, {
    optional: true,
    skipSelf: true
  });
  /**
   * menu item inside submenu clicked
   *
   * @param menu
   */
  onChildMenuItemClick(menu) {
    this.childMenuItemClick$.next(menu);
  }
  setOpenStateWithoutDebounce(value) {
    this.isCurrentSubMenuOpen$.next(value);
  }
  setMouseEnterTitleOrOverlayState(value) {
    this.isMouseEnterTitleOrOverlay$.next(value);
  }
  constructor() {
    if (this.nzHostSubmenuService) {
      this.level = this.nzHostSubmenuService.level + 1;
    }
    const isClosedByMenuItemClick = this.childMenuItemClick$.pipe(mergeMap(() => this.mode$), filter((mode) => mode !== "inline" || this.isMenuInsideDropDown), map(() => false));
    const isCurrentSubmenuOpen$ = merge(this.isMouseEnterTitleOrOverlay$, isClosedByMenuItemClick);
    const isSubMenuOpenWithDebounce$ = combineLatest([this.isChildSubMenuOpen$, isCurrentSubmenuOpen$]).pipe(map(([isChildSubMenuOpen, isCurrentSubmenuOpen]) => isChildSubMenuOpen || isCurrentSubmenuOpen), auditTime(150), distinctUntilChanged(), takeUntil(this.destroy$));
    isSubMenuOpenWithDebounce$.pipe(distinctUntilChanged()).subscribe((data) => {
      this.setOpenStateWithoutDebounce(data);
      if (this.nzHostSubmenuService) {
        this.nzHostSubmenuService.isChildSubMenuOpen$.next(data);
      } else {
        this.nzMenuService.isChildSubMenuOpen$.next(data);
      }
    });
  }
  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }
  static \u0275fac = function NzSubmenuService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _NzSubmenuService)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
    token: _NzSubmenuService,
    factory: _NzSubmenuService.\u0275fac
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzSubmenuService, [{
    type: Injectable
  }], () => [], null);
})();
var NzMenuItemComponent = class _NzMenuItemComponent {
  nzMenuService;
  cdr;
  destroy$ = new Subject();
  nzSubmenuService = inject(NzSubmenuService, {
    optional: true
  });
  directionality = inject(Directionality);
  routerLink = inject(RouterLink, {
    optional: true
  });
  router = inject(Router, {
    optional: true
  });
  isMenuInsideDropDown = inject(NzIsMenuInsideDropDownToken);
  level = this.nzSubmenuService ? this.nzSubmenuService.level + 1 : 1;
  selected$ = new Subject();
  inlinePaddingLeft = null;
  dir = "ltr";
  nzPaddingLeft;
  nzDisabled = false;
  nzSelected = false;
  nzDanger = false;
  nzMatchRouterExact = false;
  nzMatchRouter = false;
  listOfRouterLink;
  /** clear all item selected status except this */
  clickMenuItem(e) {
    if (this.nzDisabled) {
      e.preventDefault();
      e.stopPropagation();
    } else {
      this.nzMenuService.onDescendantMenuItemClick(this);
      if (this.nzSubmenuService) {
        this.nzSubmenuService.onChildMenuItemClick(this);
      } else {
        this.nzMenuService.onChildMenuItemClick(this);
      }
    }
  }
  setSelectedState(value) {
    this.nzSelected = value;
    this.selected$.next(value);
  }
  updateRouterActive() {
    if (!this.listOfRouterLink || !this.router || !this.router.navigated || !this.nzMatchRouter) {
      return;
    }
    Promise.resolve().then(() => {
      const hasActiveLinks = this.hasActiveLinks();
      if (this.nzSelected !== hasActiveLinks) {
        this.nzSelected = hasActiveLinks;
        this.setSelectedState(this.nzSelected);
        this.cdr.markForCheck();
      }
    });
  }
  hasActiveLinks() {
    const isActiveCheckFn = this.isLinkActive(this.router);
    return this.routerLink && isActiveCheckFn(this.routerLink) || this.listOfRouterLink.some(isActiveCheckFn);
  }
  isLinkActive(router) {
    return (link) => router.isActive(link.urlTree || "", {
      paths: this.nzMatchRouterExact ? "exact" : "subset",
      queryParams: this.nzMatchRouterExact ? "exact" : "subset",
      fragment: "ignored",
      matrixParams: "ignored"
    });
  }
  constructor(nzMenuService, cdr) {
    this.nzMenuService = nzMenuService;
    this.cdr = cdr;
    if (this.router) {
      this.router.events.pipe(takeUntil(this.destroy$), filter((e) => e instanceof NavigationEnd)).subscribe(() => {
        this.updateRouterActive();
      });
    }
  }
  ngOnInit() {
    combineLatest([this.nzMenuService.mode$, this.nzMenuService.inlineIndent$]).pipe(takeUntil(this.destroy$)).subscribe(([mode, inlineIndent]) => {
      this.inlinePaddingLeft = mode === "inline" ? this.level * inlineIndent : null;
    });
    this.dir = this.directionality.value;
    this.directionality.change?.pipe(takeUntil(this.destroy$)).subscribe((direction) => {
      this.dir = direction;
    });
  }
  ngAfterContentInit() {
    this.listOfRouterLink.changes.pipe(takeUntil(this.destroy$)).subscribe(() => this.updateRouterActive());
    this.updateRouterActive();
  }
  ngOnChanges(changes) {
    if (changes.nzSelected) {
      this.setSelectedState(this.nzSelected);
    }
  }
  ngOnDestroy() {
    this.destroy$.next(true);
    this.destroy$.complete();
  }
  static \u0275fac = function NzMenuItemComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _NzMenuItemComponent)(\u0275\u0275directiveInject(MenuService), \u0275\u0275directiveInject(ChangeDetectorRef));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _NzMenuItemComponent,
    selectors: [["", "nz-menu-item", ""]],
    contentQueries: function NzMenuItemComponent_ContentQueries(rf, ctx, dirIndex) {
      if (rf & 1) {
        \u0275\u0275contentQuery(dirIndex, RouterLink, 5);
      }
      if (rf & 2) {
        let _t;
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.listOfRouterLink = _t);
      }
    },
    hostVars: 20,
    hostBindings: function NzMenuItemComponent_HostBindings(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275listener("click", function NzMenuItemComponent_click_HostBindingHandler($event) {
          return ctx.clickMenuItem($event);
        });
      }
      if (rf & 2) {
        \u0275\u0275styleProp("padding-left", ctx.dir === "rtl" ? null : ctx.nzPaddingLeft || ctx.inlinePaddingLeft, "px")("padding-right", ctx.dir === "rtl" ? ctx.nzPaddingLeft || ctx.inlinePaddingLeft : null, "px");
        \u0275\u0275classProp("ant-dropdown-menu-item", ctx.isMenuInsideDropDown)("ant-dropdown-menu-item-selected", ctx.isMenuInsideDropDown && ctx.nzSelected)("ant-dropdown-menu-item-danger", ctx.isMenuInsideDropDown && ctx.nzDanger)("ant-dropdown-menu-item-disabled", ctx.isMenuInsideDropDown && ctx.nzDisabled)("ant-menu-item", !ctx.isMenuInsideDropDown)("ant-menu-item-selected", !ctx.isMenuInsideDropDown && ctx.nzSelected)("ant-menu-item-danger", !ctx.isMenuInsideDropDown && ctx.nzDanger)("ant-menu-item-disabled", !ctx.isMenuInsideDropDown && ctx.nzDisabled);
      }
    },
    inputs: {
      nzPaddingLeft: [2, "nzPaddingLeft", "nzPaddingLeft", numberAttributeWithZeroFallback],
      nzDisabled: [2, "nzDisabled", "nzDisabled", booleanAttribute],
      nzSelected: [2, "nzSelected", "nzSelected", booleanAttribute],
      nzDanger: [2, "nzDanger", "nzDanger", booleanAttribute],
      nzMatchRouterExact: [2, "nzMatchRouterExact", "nzMatchRouterExact", booleanAttribute],
      nzMatchRouter: [2, "nzMatchRouter", "nzMatchRouter", booleanAttribute]
    },
    exportAs: ["nzMenuItem"],
    features: [\u0275\u0275NgOnChangesFeature],
    attrs: _c0,
    ngContentSelectors: _c1,
    decls: 2,
    vars: 0,
    consts: [[1, "ant-menu-title-content"]],
    template: function NzMenuItemComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275projectionDef();
        \u0275\u0275elementStart(0, "span", 0);
        \u0275\u0275projection(1);
        \u0275\u0275elementEnd();
      }
    },
    encapsulation: 2,
    changeDetection: 0
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzMenuItemComponent, [{
    type: Component,
    args: [{
      selector: "[nz-menu-item]",
      exportAs: "nzMenuItem",
      changeDetection: ChangeDetectionStrategy.OnPush,
      encapsulation: ViewEncapsulation.None,
      preserveWhitespaces: false,
      template: `
    <span class="ant-menu-title-content">
      <ng-content></ng-content>
    </span>
  `,
      host: {
        "[class.ant-dropdown-menu-item]": `isMenuInsideDropDown`,
        "[class.ant-dropdown-menu-item-selected]": `isMenuInsideDropDown && nzSelected`,
        "[class.ant-dropdown-menu-item-danger]": `isMenuInsideDropDown && nzDanger`,
        "[class.ant-dropdown-menu-item-disabled]": `isMenuInsideDropDown && nzDisabled`,
        "[class.ant-menu-item]": `!isMenuInsideDropDown`,
        "[class.ant-menu-item-selected]": `!isMenuInsideDropDown && nzSelected`,
        "[class.ant-menu-item-danger]": `!isMenuInsideDropDown && nzDanger`,
        "[class.ant-menu-item-disabled]": `!isMenuInsideDropDown && nzDisabled`,
        "[style.paddingLeft.px]": `dir === 'rtl' ? null : nzPaddingLeft || inlinePaddingLeft`,
        "[style.paddingRight.px]": `dir === 'rtl' ? nzPaddingLeft || inlinePaddingLeft : null`,
        "(click)": "clickMenuItem($event)"
      }
    }]
  }], () => [{
    type: MenuService
  }, {
    type: ChangeDetectorRef
  }], {
    nzPaddingLeft: [{
      type: Input,
      args: [{
        transform: numberAttributeWithZeroFallback
      }]
    }],
    nzDisabled: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    nzSelected: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    nzDanger: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    nzMatchRouterExact: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    nzMatchRouter: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    listOfRouterLink: [{
      type: ContentChildren,
      args: [RouterLink, {
        descendants: true
      }]
    }]
  });
})();
var NzSubmenuInlineChildComponent = class _NzSubmenuInlineChildComponent {
  elementRef;
  renderer;
  directionality;
  templateOutlet = null;
  menuClass = "";
  mode = "vertical";
  nzOpen = false;
  listOfCacheClassName = [];
  expandState = "collapsed";
  dir = "ltr";
  destroy$ = new Subject();
  constructor(elementRef, renderer, directionality) {
    this.elementRef = elementRef;
    this.renderer = renderer;
    this.directionality = directionality;
  }
  calcMotionState() {
    if (this.nzOpen) {
      this.expandState = "expanded";
    } else {
      this.expandState = "collapsed";
    }
  }
  ngOnInit() {
    this.calcMotionState();
    this.dir = this.directionality.value;
    this.directionality.change?.pipe(takeUntil(this.destroy$)).subscribe((direction) => {
      this.dir = direction;
    });
  }
  ngOnChanges(changes) {
    const {
      mode,
      nzOpen,
      menuClass
    } = changes;
    if (mode || nzOpen) {
      this.calcMotionState();
    }
    if (menuClass) {
      if (this.listOfCacheClassName.length) {
        this.listOfCacheClassName.filter((item) => !!item).forEach((className) => {
          this.renderer.removeClass(this.elementRef.nativeElement, className);
        });
      }
      if (this.menuClass) {
        this.listOfCacheClassName = this.menuClass.split(" ");
        this.listOfCacheClassName.filter((item) => !!item).forEach((className) => {
          this.renderer.addClass(this.elementRef.nativeElement, className);
        });
      }
    }
  }
  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }
  static \u0275fac = function NzSubmenuInlineChildComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _NzSubmenuInlineChildComponent)(\u0275\u0275directiveInject(ElementRef), \u0275\u0275directiveInject(Renderer2), \u0275\u0275directiveInject(Directionality));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _NzSubmenuInlineChildComponent,
    selectors: [["", "nz-submenu-inline-child", ""]],
    hostAttrs: [1, "ant-menu", "ant-menu-inline", "ant-menu-sub"],
    hostVars: 3,
    hostBindings: function NzSubmenuInlineChildComponent_HostBindings(rf, ctx) {
      if (rf & 2) {
        \u0275\u0275syntheticHostProperty("@collapseMotion", ctx.expandState);
        \u0275\u0275classProp("ant-menu-rtl", ctx.dir === "rtl");
      }
    },
    inputs: {
      templateOutlet: "templateOutlet",
      menuClass: "menuClass",
      mode: "mode",
      nzOpen: "nzOpen"
    },
    exportAs: ["nzSubmenuInlineChild"],
    features: [\u0275\u0275NgOnChangesFeature],
    attrs: _c2,
    decls: 1,
    vars: 1,
    consts: [[3, "ngTemplateOutlet"]],
    template: function NzSubmenuInlineChildComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275template(0, NzSubmenuInlineChildComponent_ng_template_0_Template, 0, 0, "ng-template", 0);
      }
      if (rf & 2) {
        \u0275\u0275property("ngTemplateOutlet", ctx.templateOutlet);
      }
    },
    dependencies: [NgTemplateOutlet],
    encapsulation: 2,
    data: {
      animation: [collapseMotion]
    },
    changeDetection: 0
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzSubmenuInlineChildComponent, [{
    type: Component,
    args: [{
      selector: "[nz-submenu-inline-child]",
      animations: [collapseMotion],
      exportAs: "nzSubmenuInlineChild",
      encapsulation: ViewEncapsulation.None,
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: ` <ng-template [ngTemplateOutlet]="templateOutlet"></ng-template> `,
      host: {
        class: "ant-menu ant-menu-inline ant-menu-sub",
        "[class.ant-menu-rtl]": `dir === 'rtl'`,
        "[@collapseMotion]": "expandState"
      },
      imports: [NgTemplateOutlet]
    }]
  }], () => [{
    type: ElementRef
  }, {
    type: Renderer2
  }, {
    type: Directionality
  }], {
    templateOutlet: [{
      type: Input
    }],
    menuClass: [{
      type: Input
    }],
    mode: [{
      type: Input
    }],
    nzOpen: [{
      type: Input
    }]
  });
})();
var NzSubmenuNoneInlineChildComponent = class _NzSubmenuNoneInlineChildComponent {
  directionality;
  menuClass = "";
  theme = "light";
  templateOutlet = null;
  isMenuInsideDropDown = false;
  mode = "vertical";
  nzTriggerSubMenuAction = "hover";
  position = "right";
  nzDisabled = false;
  nzOpen = false;
  subMenuMouseState = new EventEmitter();
  constructor(directionality) {
    this.directionality = directionality;
  }
  setMouseState(state) {
    if (!this.nzDisabled && this.nzTriggerSubMenuAction === "hover") {
      this.subMenuMouseState.next(state);
    }
  }
  expandState = "collapsed";
  dir = "ltr";
  destroy$ = new Subject();
  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }
  calcMotionState() {
    if (this.nzOpen) {
      if (this.mode === "horizontal") {
        this.expandState = "bottom";
      } else if (this.mode === "vertical") {
        this.expandState = "active";
      }
    } else {
      this.expandState = "collapsed";
    }
  }
  ngOnInit() {
    this.calcMotionState();
    this.dir = this.directionality.value;
    this.directionality.change?.pipe(takeUntil(this.destroy$)).subscribe((direction) => {
      this.dir = direction;
    });
  }
  ngOnChanges(changes) {
    const {
      mode,
      nzOpen
    } = changes;
    if (mode || nzOpen) {
      this.calcMotionState();
    }
  }
  static \u0275fac = function NzSubmenuNoneInlineChildComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _NzSubmenuNoneInlineChildComponent)(\u0275\u0275directiveInject(Directionality));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _NzSubmenuNoneInlineChildComponent,
    selectors: [["", "nz-submenu-none-inline-child", ""]],
    hostAttrs: [1, "ant-menu-submenu", "ant-menu-submenu-popup"],
    hostVars: 14,
    hostBindings: function NzSubmenuNoneInlineChildComponent_HostBindings(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275listener("mouseenter", function NzSubmenuNoneInlineChildComponent_mouseenter_HostBindingHandler() {
          return ctx.setMouseState(true);
        })("mouseleave", function NzSubmenuNoneInlineChildComponent_mouseleave_HostBindingHandler() {
          return ctx.setMouseState(false);
        });
      }
      if (rf & 2) {
        \u0275\u0275syntheticHostProperty("@slideMotion", ctx.expandState)("@zoomBigMotion", ctx.expandState);
        \u0275\u0275classProp("ant-menu-light", ctx.theme === "light")("ant-menu-dark", ctx.theme === "dark")("ant-menu-submenu-placement-bottom", ctx.mode === "horizontal")("ant-menu-submenu-placement-right", ctx.mode === "vertical" && ctx.position === "right")("ant-menu-submenu-placement-left", ctx.mode === "vertical" && ctx.position === "left")("ant-menu-submenu-rtl", ctx.dir === "rtl");
      }
    },
    inputs: {
      menuClass: "menuClass",
      theme: "theme",
      templateOutlet: "templateOutlet",
      isMenuInsideDropDown: "isMenuInsideDropDown",
      mode: "mode",
      nzTriggerSubMenuAction: "nzTriggerSubMenuAction",
      position: "position",
      nzDisabled: "nzDisabled",
      nzOpen: "nzOpen"
    },
    outputs: {
      subMenuMouseState: "subMenuMouseState"
    },
    exportAs: ["nzSubmenuNoneInlineChild"],
    features: [\u0275\u0275NgOnChangesFeature],
    attrs: _c3,
    decls: 2,
    vars: 17,
    consts: [[3, "ngTemplateOutlet"]],
    template: function NzSubmenuNoneInlineChildComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div");
        \u0275\u0275template(1, NzSubmenuNoneInlineChildComponent_ng_template_1_Template, 0, 0, "ng-template", 0);
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        \u0275\u0275classMap(ctx.menuClass);
        \u0275\u0275classProp("ant-dropdown-menu", ctx.isMenuInsideDropDown)("ant-menu", !ctx.isMenuInsideDropDown)("ant-dropdown-menu-vertical", ctx.isMenuInsideDropDown)("ant-menu-vertical", !ctx.isMenuInsideDropDown)("ant-dropdown-menu-sub", ctx.isMenuInsideDropDown)("ant-menu-sub", !ctx.isMenuInsideDropDown)("ant-menu-rtl", ctx.dir === "rtl");
        \u0275\u0275advance();
        \u0275\u0275property("ngTemplateOutlet", ctx.templateOutlet);
      }
    },
    dependencies: [NgTemplateOutlet],
    encapsulation: 2,
    data: {
      animation: [zoomBigMotion, slideMotion]
    },
    changeDetection: 0
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzSubmenuNoneInlineChildComponent, [{
    type: Component,
    args: [{
      selector: "[nz-submenu-none-inline-child]",
      exportAs: "nzSubmenuNoneInlineChild",
      encapsulation: ViewEncapsulation.None,
      animations: [zoomBigMotion, slideMotion],
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: `
    <div
      [class.ant-dropdown-menu]="isMenuInsideDropDown"
      [class.ant-menu]="!isMenuInsideDropDown"
      [class.ant-dropdown-menu-vertical]="isMenuInsideDropDown"
      [class.ant-menu-vertical]="!isMenuInsideDropDown"
      [class.ant-dropdown-menu-sub]="isMenuInsideDropDown"
      [class.ant-menu-sub]="!isMenuInsideDropDown"
      [class.ant-menu-rtl]="dir === 'rtl'"
      [class]="menuClass"
    >
      <ng-template [ngTemplateOutlet]="templateOutlet"></ng-template>
    </div>
  `,
      host: {
        class: "ant-menu-submenu ant-menu-submenu-popup",
        "[class.ant-menu-light]": "theme === 'light'",
        "[class.ant-menu-dark]": "theme === 'dark'",
        "[class.ant-menu-submenu-placement-bottom]": "mode === 'horizontal'",
        "[class.ant-menu-submenu-placement-right]": "mode === 'vertical' && position === 'right'",
        "[class.ant-menu-submenu-placement-left]": "mode === 'vertical' && position === 'left'",
        "[class.ant-menu-submenu-rtl]": 'dir ==="rtl"',
        "[@slideMotion]": "expandState",
        "[@zoomBigMotion]": "expandState",
        "(mouseenter)": "setMouseState(true)",
        "(mouseleave)": "setMouseState(false)"
      },
      imports: [NgTemplateOutlet]
    }]
  }], () => [{
    type: Directionality
  }], {
    menuClass: [{
      type: Input
    }],
    theme: [{
      type: Input
    }],
    templateOutlet: [{
      type: Input
    }],
    isMenuInsideDropDown: [{
      type: Input
    }],
    mode: [{
      type: Input
    }],
    nzTriggerSubMenuAction: [{
      type: Input
    }],
    position: [{
      type: Input
    }],
    nzDisabled: [{
      type: Input
    }],
    nzOpen: [{
      type: Input
    }],
    subMenuMouseState: [{
      type: Output
    }]
  });
})();
var NzSubMenuTitleComponent = class _NzSubMenuTitleComponent {
  cdr;
  directionality;
  nzIcon = null;
  nzTitle = null;
  isMenuInsideDropDown = false;
  nzDisabled = false;
  paddingLeft = null;
  mode = "vertical";
  nzTriggerSubMenuAction = "hover";
  toggleSubMenu = new EventEmitter();
  subMenuMouseState = new EventEmitter();
  dir = "ltr";
  destroy$ = new Subject();
  constructor(cdr, directionality) {
    this.cdr = cdr;
    this.directionality = directionality;
  }
  ngOnInit() {
    this.dir = this.directionality.value;
    this.directionality.change?.pipe(takeUntil(this.destroy$)).subscribe((direction) => {
      this.dir = direction;
      this.cdr.detectChanges();
    });
  }
  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }
  setMouseState(state) {
    if (!this.nzDisabled && this.nzTriggerSubMenuAction === "hover") {
      this.subMenuMouseState.next(state);
    }
  }
  clickTitle() {
    if ((this.mode === "inline" || this.nzTriggerSubMenuAction === "click") && !this.nzDisabled) {
      this.subMenuMouseState.next(true);
      this.toggleSubMenu.emit();
    }
  }
  static \u0275fac = function NzSubMenuTitleComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _NzSubMenuTitleComponent)(\u0275\u0275directiveInject(ChangeDetectorRef), \u0275\u0275directiveInject(Directionality));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _NzSubMenuTitleComponent,
    selectors: [["", "nz-submenu-title", ""]],
    hostVars: 8,
    hostBindings: function NzSubMenuTitleComponent_HostBindings(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275listener("click", function NzSubMenuTitleComponent_click_HostBindingHandler() {
          return ctx.clickTitle();
        })("mouseenter", function NzSubMenuTitleComponent_mouseenter_HostBindingHandler() {
          return ctx.setMouseState(true);
        })("mouseleave", function NzSubMenuTitleComponent_mouseleave_HostBindingHandler() {
          return ctx.setMouseState(false);
        });
      }
      if (rf & 2) {
        \u0275\u0275styleProp("padding-left", ctx.dir === "rtl" ? null : ctx.paddingLeft, "px")("padding-right", ctx.dir === "rtl" ? ctx.paddingLeft : null, "px");
        \u0275\u0275classProp("ant-dropdown-menu-submenu-title", ctx.isMenuInsideDropDown)("ant-menu-submenu-title", !ctx.isMenuInsideDropDown);
      }
    },
    inputs: {
      nzIcon: "nzIcon",
      nzTitle: "nzTitle",
      isMenuInsideDropDown: "isMenuInsideDropDown",
      nzDisabled: "nzDisabled",
      paddingLeft: "paddingLeft",
      mode: "mode",
      nzTriggerSubMenuAction: "nzTriggerSubMenuAction"
    },
    outputs: {
      toggleSubMenu: "toggleSubMenu",
      subMenuMouseState: "subMenuMouseState"
    },
    exportAs: ["nzSubmenuTitle"],
    attrs: _c4,
    ngContentSelectors: _c1,
    decls: 5,
    vars: 3,
    consts: [[3, "nzType"], [4, "nzStringTemplateOutlet"], [1, "ant-dropdown-menu-submenu-expand-icon"], [1, "ant-menu-submenu-arrow"], [1, "ant-menu-title-content"], ["nzType", "left", 1, "ant-dropdown-menu-submenu-arrow-icon"], ["nzType", "right", 1, "ant-dropdown-menu-submenu-arrow-icon"]],
    template: function NzSubMenuTitleComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275projectionDef();
        \u0275\u0275template(0, NzSubMenuTitleComponent_Conditional_0_Template, 1, 1, "nz-icon", 0)(1, NzSubMenuTitleComponent_ng_container_1_Template, 3, 1, "ng-container", 1);
        \u0275\u0275projection(2);
        \u0275\u0275template(3, NzSubMenuTitleComponent_Conditional_3_Template, 3, 1, "span", 2)(4, NzSubMenuTitleComponent_Conditional_4_Template, 1, 0, "span", 3);
      }
      if (rf & 2) {
        \u0275\u0275conditional(ctx.nzIcon ? 0 : -1);
        \u0275\u0275advance();
        \u0275\u0275property("nzStringTemplateOutlet", ctx.nzTitle);
        \u0275\u0275advance(2);
        \u0275\u0275conditional(ctx.isMenuInsideDropDown ? 3 : 4);
      }
    },
    dependencies: [NzIconModule, NzIconDirective, NzOutletModule, NzStringTemplateOutletDirective],
    encapsulation: 2,
    changeDetection: 0
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzSubMenuTitleComponent, [{
    type: Component,
    args: [{
      selector: "[nz-submenu-title]",
      exportAs: "nzSubmenuTitle",
      encapsulation: ViewEncapsulation.None,
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: `
    @if (nzIcon) {
      <nz-icon [nzType]="nzIcon" />
    }
    <ng-container *nzStringTemplateOutlet="nzTitle">
      <span class="ant-menu-title-content">{{ nzTitle }}</span>
    </ng-container>
    <ng-content />
    @if (isMenuInsideDropDown) {
      <span class="ant-dropdown-menu-submenu-expand-icon">
        @switch (dir) {
          @case ('rtl') {
            <nz-icon nzType="left" class="ant-dropdown-menu-submenu-arrow-icon" />
          }
          @default {
            <nz-icon nzType="right" class="ant-dropdown-menu-submenu-arrow-icon" />
          }
        }
      </span>
    } @else {
      <span class="ant-menu-submenu-arrow"></span>
    }
  `,
      host: {
        "[class.ant-dropdown-menu-submenu-title]": "isMenuInsideDropDown",
        "[class.ant-menu-submenu-title]": "!isMenuInsideDropDown",
        "[style.paddingLeft.px]": `dir === 'rtl' ? null : paddingLeft `,
        "[style.paddingRight.px]": `dir === 'rtl' ? paddingLeft : null`,
        "(click)": "clickTitle()",
        "(mouseenter)": "setMouseState(true)",
        "(mouseleave)": "setMouseState(false)"
      },
      imports: [NzIconModule, NzOutletModule]
    }]
  }], () => [{
    type: ChangeDetectorRef
  }, {
    type: Directionality
  }], {
    nzIcon: [{
      type: Input
    }],
    nzTitle: [{
      type: Input
    }],
    isMenuInsideDropDown: [{
      type: Input
    }],
    nzDisabled: [{
      type: Input
    }],
    paddingLeft: [{
      type: Input
    }],
    mode: [{
      type: Input
    }],
    nzTriggerSubMenuAction: [{
      type: Input
    }],
    toggleSubMenu: [{
      type: Output
    }],
    subMenuMouseState: [{
      type: Output
    }]
  });
})();
var listOfVerticalPositions = [POSITION_MAP.rightTop, POSITION_MAP.right, POSITION_MAP.rightBottom, POSITION_MAP.leftTop, POSITION_MAP.left, POSITION_MAP.leftBottom];
var listOfHorizontalPositions = [POSITION_MAP.bottomLeft, POSITION_MAP.bottomRight, POSITION_MAP.topRight, POSITION_MAP.topLeft];
var NzSubMenuComponent = class _NzSubMenuComponent {
  nzMenuService;
  cdr;
  platform;
  nzMenuClassName = "";
  nzPaddingLeft = null;
  nzTitle = null;
  nzIcon = null;
  nzTriggerSubMenuAction = "hover";
  nzOpen = false;
  nzDisabled = false;
  nzPlacement = "bottomLeft";
  nzOpenChange = new EventEmitter();
  cdkOverlayOrigin = null;
  // fix errors about circular dependency
  // Can't construct a query for the property ... since the query selector wasn't defined"
  listOfNzSubMenuComponent = null;
  listOfNzMenuItemDirective = null;
  nzSubmenuService = inject(NzSubmenuService);
  level = this.nzSubmenuService.level;
  destroy$ = new Subject();
  position = "right";
  triggerWidth = null;
  theme = "light";
  mode = "vertical";
  inlinePaddingLeft = null;
  overlayPositions = listOfVerticalPositions;
  isSelected = false;
  isActive = false;
  dir = "ltr";
  isMenuInsideDropDown = inject(NzIsMenuInsideDropDownToken);
  noAnimation = inject(NzNoAnimationDirective, {
    optional: true,
    host: true
  });
  directionality = inject(Directionality);
  /** set the submenu host open status directly **/
  setOpenStateWithoutDebounce(open) {
    this.nzSubmenuService.setOpenStateWithoutDebounce(open);
  }
  toggleSubMenu() {
    this.setOpenStateWithoutDebounce(!this.nzOpen);
  }
  setMouseEnterState(value) {
    this.isActive = value;
    if (this.mode !== "inline") {
      this.nzSubmenuService.setMouseEnterTitleOrOverlayState(value);
    }
  }
  setTriggerWidth() {
    if (this.mode === "horizontal" && this.platform.isBrowser && this.cdkOverlayOrigin && this.nzPlacement === "bottomLeft") {
      this.triggerWidth = this.cdkOverlayOrigin.nativeElement.getBoundingClientRect().width;
    }
  }
  onPositionChange(position) {
    const placement = getPlacementName(position);
    if (placement === "rightTop" || placement === "rightBottom" || placement === "right") {
      this.position = "right";
    } else if (placement === "leftTop" || placement === "leftBottom" || placement === "left") {
      this.position = "left";
    }
  }
  constructor(nzMenuService, cdr, platform) {
    this.nzMenuService = nzMenuService;
    this.cdr = cdr;
    this.platform = platform;
  }
  ngOnInit() {
    this.nzMenuService.theme$.pipe(takeUntil(this.destroy$)).subscribe((theme) => {
      this.theme = theme;
      this.cdr.markForCheck();
    });
    this.nzSubmenuService.mode$.pipe(takeUntil(this.destroy$)).subscribe((mode) => {
      this.mode = mode;
      if (mode === "horizontal") {
        this.overlayPositions = [POSITION_MAP[this.nzPlacement], ...listOfHorizontalPositions];
      } else if (mode === "vertical") {
        this.overlayPositions = listOfVerticalPositions;
      }
      this.cdr.markForCheck();
    });
    combineLatest([this.nzSubmenuService.mode$, this.nzMenuService.inlineIndent$]).pipe(takeUntil(this.destroy$)).subscribe(([mode, inlineIndent]) => {
      this.inlinePaddingLeft = mode === "inline" ? this.level * inlineIndent : null;
      this.cdr.markForCheck();
    });
    this.nzSubmenuService.isCurrentSubMenuOpen$.pipe(takeUntil(this.destroy$)).subscribe((open) => {
      this.isActive = open;
      if (open !== this.nzOpen) {
        this.setTriggerWidth();
        this.nzOpen = open;
        this.nzOpenChange.emit(this.nzOpen);
        this.cdr.markForCheck();
      }
    });
    this.dir = this.directionality.value;
    this.directionality.change?.pipe(takeUntil(this.destroy$)).subscribe((direction) => {
      this.dir = direction;
      this.cdr.markForCheck();
    });
  }
  ngAfterContentInit() {
    this.setTriggerWidth();
    const listOfNzMenuItemDirective = this.listOfNzMenuItemDirective;
    const changes = listOfNzMenuItemDirective.changes;
    const mergedObservable = merge(...[changes, ...listOfNzMenuItemDirective.map((menu) => menu.selected$)]);
    changes.pipe(startWith(listOfNzMenuItemDirective), switchMap(() => mergedObservable), startWith(true), map(() => listOfNzMenuItemDirective.some((e) => e.nzSelected)), takeUntil(this.destroy$)).subscribe((selected) => {
      this.isSelected = selected;
      this.cdr.markForCheck();
    });
  }
  ngOnChanges(changes) {
    const {
      nzOpen
    } = changes;
    if (nzOpen) {
      this.nzSubmenuService.setOpenStateWithoutDebounce(this.nzOpen);
      this.setTriggerWidth();
    }
  }
  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }
  static \u0275fac = function NzSubMenuComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _NzSubMenuComponent)(\u0275\u0275directiveInject(MenuService), \u0275\u0275directiveInject(ChangeDetectorRef), \u0275\u0275directiveInject(Platform));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _NzSubMenuComponent,
    selectors: [["", "nz-submenu", ""]],
    contentQueries: function NzSubMenuComponent_ContentQueries(rf, ctx, dirIndex) {
      if (rf & 1) {
        \u0275\u0275contentQuery(dirIndex, _NzSubMenuComponent, 5);
        \u0275\u0275contentQuery(dirIndex, NzMenuItemComponent, 5);
      }
      if (rf & 2) {
        let _t;
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.listOfNzSubMenuComponent = _t);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.listOfNzMenuItemDirective = _t);
      }
    },
    viewQuery: function NzSubMenuComponent_Query(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275viewQuery(CdkOverlayOrigin, 7, ElementRef);
      }
      if (rf & 2) {
        let _t;
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.cdkOverlayOrigin = _t.first);
      }
    },
    hostVars: 34,
    hostBindings: function NzSubMenuComponent_HostBindings(rf, ctx) {
      if (rf & 2) {
        \u0275\u0275classProp("ant-dropdown-menu-submenu", ctx.isMenuInsideDropDown)("ant-dropdown-menu-submenu-disabled", ctx.isMenuInsideDropDown && ctx.nzDisabled)("ant-dropdown-menu-submenu-open", ctx.isMenuInsideDropDown && ctx.nzOpen)("ant-dropdown-menu-submenu-selected", ctx.isMenuInsideDropDown && ctx.isSelected)("ant-dropdown-menu-submenu-vertical", ctx.isMenuInsideDropDown && ctx.mode === "vertical")("ant-dropdown-menu-submenu-horizontal", ctx.isMenuInsideDropDown && ctx.mode === "horizontal")("ant-dropdown-menu-submenu-inline", ctx.isMenuInsideDropDown && ctx.mode === "inline")("ant-dropdown-menu-submenu-active", ctx.isMenuInsideDropDown && ctx.isActive)("ant-menu-submenu", !ctx.isMenuInsideDropDown)("ant-menu-submenu-disabled", !ctx.isMenuInsideDropDown && ctx.nzDisabled)("ant-menu-submenu-open", !ctx.isMenuInsideDropDown && ctx.nzOpen)("ant-menu-submenu-selected", !ctx.isMenuInsideDropDown && ctx.isSelected)("ant-menu-submenu-vertical", !ctx.isMenuInsideDropDown && ctx.mode === "vertical")("ant-menu-submenu-horizontal", !ctx.isMenuInsideDropDown && ctx.mode === "horizontal")("ant-menu-submenu-inline", !ctx.isMenuInsideDropDown && ctx.mode === "inline")("ant-menu-submenu-active", !ctx.isMenuInsideDropDown && ctx.isActive)("ant-menu-submenu-rtl", ctx.dir === "rtl");
      }
    },
    inputs: {
      nzMenuClassName: "nzMenuClassName",
      nzPaddingLeft: "nzPaddingLeft",
      nzTitle: "nzTitle",
      nzIcon: "nzIcon",
      nzTriggerSubMenuAction: "nzTriggerSubMenuAction",
      nzOpen: [2, "nzOpen", "nzOpen", booleanAttribute],
      nzDisabled: [2, "nzDisabled", "nzDisabled", booleanAttribute],
      nzPlacement: "nzPlacement"
    },
    outputs: {
      nzOpenChange: "nzOpenChange"
    },
    exportAs: ["nzSubmenu"],
    features: [\u0275\u0275ProvidersFeature([NzSubmenuService]), \u0275\u0275NgOnChangesFeature],
    attrs: _c5,
    ngContentSelectors: _c7,
    decls: 7,
    vars: 9,
    consts: [["origin", "cdkOverlayOrigin"], ["subMenuTemplate", ""], ["nz-submenu-title", "", "cdkOverlayOrigin", "", 3, "subMenuMouseState", "toggleSubMenu", "nzIcon", "nzTitle", "mode", "nzDisabled", "isMenuInsideDropDown", "paddingLeft", "nzTriggerSubMenuAction"], ["nz-submenu-inline-child", "", 3, "mode", "nzOpen", "nzNoAnimation", "menuClass", "templateOutlet"], ["cdkConnectedOverlay", "", 3, "cdkConnectedOverlayPositions", "cdkConnectedOverlayOrigin", "cdkConnectedOverlayWidth", "cdkConnectedOverlayOpen", "cdkConnectedOverlayTransformOriginOn"], ["cdkConnectedOverlay", "", 3, "positionChange", "overlayOutsideClick", "cdkConnectedOverlayPositions", "cdkConnectedOverlayOrigin", "cdkConnectedOverlayWidth", "cdkConnectedOverlayOpen", "cdkConnectedOverlayTransformOriginOn"], ["nz-submenu-none-inline-child", "", 3, "subMenuMouseState", "theme", "mode", "nzOpen", "position", "nzDisabled", "isMenuInsideDropDown", "nzTriggerSubMenuAction", "templateOutlet", "menuClass", "nzNoAnimation"]],
    template: function NzSubMenuComponent_Template(rf, ctx) {
      if (rf & 1) {
        const _r1 = \u0275\u0275getCurrentView();
        \u0275\u0275projectionDef(_c6);
        \u0275\u0275elementStart(0, "div", 2, 0);
        \u0275\u0275listener("subMenuMouseState", function NzSubMenuComponent_Template_div_subMenuMouseState_0_listener($event) {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.setMouseEnterState($event));
        })("toggleSubMenu", function NzSubMenuComponent_Template_div_toggleSubMenu_0_listener() {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.toggleSubMenu());
        });
        \u0275\u0275template(2, NzSubMenuComponent_Conditional_2_Template, 1, 0);
        \u0275\u0275elementEnd();
        \u0275\u0275template(3, NzSubMenuComponent_Conditional_3_Template, 1, 6, "div", 3)(4, NzSubMenuComponent_Conditional_4_Template, 1, 5, null, 4)(5, NzSubMenuComponent_ng_template_5_Template, 1, 0, "ng-template", null, 1, \u0275\u0275templateRefExtractor);
      }
      if (rf & 2) {
        \u0275\u0275property("nzIcon", ctx.nzIcon)("nzTitle", ctx.nzTitle)("mode", ctx.mode)("nzDisabled", ctx.nzDisabled)("isMenuInsideDropDown", ctx.isMenuInsideDropDown)("paddingLeft", ctx.nzPaddingLeft || ctx.inlinePaddingLeft)("nzTriggerSubMenuAction", ctx.nzTriggerSubMenuAction);
        \u0275\u0275advance(2);
        \u0275\u0275conditional(!ctx.nzTitle ? 2 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.mode === "inline" ? 3 : 4);
      }
    },
    dependencies: [NzSubMenuTitleComponent, NzSubmenuInlineChildComponent, NzNoAnimationDirective, NzSubmenuNoneInlineChildComponent, OverlayModule, CdkConnectedOverlay, CdkOverlayOrigin],
    encapsulation: 2,
    changeDetection: 0
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzSubMenuComponent, [{
    type: Component,
    args: [{
      selector: "[nz-submenu]",
      exportAs: "nzSubmenu",
      providers: [NzSubmenuService],
      encapsulation: ViewEncapsulation.None,
      changeDetection: ChangeDetectionStrategy.OnPush,
      preserveWhitespaces: false,
      template: `
    <div
      nz-submenu-title
      cdkOverlayOrigin
      #origin="cdkOverlayOrigin"
      [nzIcon]="nzIcon"
      [nzTitle]="nzTitle"
      [mode]="mode"
      [nzDisabled]="nzDisabled"
      [isMenuInsideDropDown]="isMenuInsideDropDown"
      [paddingLeft]="nzPaddingLeft || inlinePaddingLeft"
      [nzTriggerSubMenuAction]="nzTriggerSubMenuAction"
      (subMenuMouseState)="setMouseEnterState($event)"
      (toggleSubMenu)="toggleSubMenu()"
    >
      @if (!nzTitle) {
        <ng-content select="[title]" />
      }
    </div>
    @if (mode === 'inline') {
      <div
        nz-submenu-inline-child
        [mode]="mode"
        [nzOpen]="nzOpen"
        [@.disabled]="!!noAnimation?.nzNoAnimation"
        [nzNoAnimation]="noAnimation?.nzNoAnimation"
        [menuClass]="nzMenuClassName"
        [templateOutlet]="subMenuTemplate"
      ></div>
    } @else {
      <ng-template
        cdkConnectedOverlay
        (positionChange)="onPositionChange($event)"
        [cdkConnectedOverlayPositions]="overlayPositions"
        [cdkConnectedOverlayOrigin]="origin"
        [cdkConnectedOverlayWidth]="triggerWidth!"
        [cdkConnectedOverlayOpen]="nzOpen"
        [cdkConnectedOverlayTransformOriginOn]="'.ant-menu-submenu'"
        (overlayOutsideClick)="setMouseEnterState(false)"
      >
        <div
          nz-submenu-none-inline-child
          [theme]="theme"
          [mode]="mode"
          [nzOpen]="nzOpen"
          [position]="position"
          [nzDisabled]="nzDisabled"
          [isMenuInsideDropDown]="isMenuInsideDropDown"
          [nzTriggerSubMenuAction]="nzTriggerSubMenuAction"
          [templateOutlet]="subMenuTemplate"
          [menuClass]="nzMenuClassName"
          [@.disabled]="!!noAnimation?.nzNoAnimation"
          [nzNoAnimation]="noAnimation?.nzNoAnimation"
          (subMenuMouseState)="setMouseEnterState($event)"
        ></div>
      </ng-template>
    }

    <ng-template #subMenuTemplate>
      <ng-content />
    </ng-template>
  `,
      host: {
        "[class.ant-dropdown-menu-submenu]": `isMenuInsideDropDown`,
        "[class.ant-dropdown-menu-submenu-disabled]": `isMenuInsideDropDown && nzDisabled`,
        "[class.ant-dropdown-menu-submenu-open]": `isMenuInsideDropDown && nzOpen`,
        "[class.ant-dropdown-menu-submenu-selected]": `isMenuInsideDropDown && isSelected`,
        "[class.ant-dropdown-menu-submenu-vertical]": `isMenuInsideDropDown && mode === 'vertical'`,
        "[class.ant-dropdown-menu-submenu-horizontal]": `isMenuInsideDropDown && mode === 'horizontal'`,
        "[class.ant-dropdown-menu-submenu-inline]": `isMenuInsideDropDown && mode === 'inline'`,
        "[class.ant-dropdown-menu-submenu-active]": `isMenuInsideDropDown && isActive`,
        "[class.ant-menu-submenu]": `!isMenuInsideDropDown`,
        "[class.ant-menu-submenu-disabled]": `!isMenuInsideDropDown && nzDisabled`,
        "[class.ant-menu-submenu-open]": `!isMenuInsideDropDown && nzOpen`,
        "[class.ant-menu-submenu-selected]": `!isMenuInsideDropDown && isSelected`,
        "[class.ant-menu-submenu-vertical]": `!isMenuInsideDropDown && mode === 'vertical'`,
        "[class.ant-menu-submenu-horizontal]": `!isMenuInsideDropDown && mode === 'horizontal'`,
        "[class.ant-menu-submenu-inline]": `!isMenuInsideDropDown && mode === 'inline'`,
        "[class.ant-menu-submenu-active]": `!isMenuInsideDropDown && isActive`,
        "[class.ant-menu-submenu-rtl]": `dir === 'rtl'`
      },
      imports: [NzSubMenuTitleComponent, NzSubmenuInlineChildComponent, NzNoAnimationDirective, NzSubmenuNoneInlineChildComponent, OverlayModule]
    }]
  }], () => [{
    type: MenuService
  }, {
    type: ChangeDetectorRef
  }, {
    type: Platform
  }], {
    nzMenuClassName: [{
      type: Input
    }],
    nzPaddingLeft: [{
      type: Input
    }],
    nzTitle: [{
      type: Input
    }],
    nzIcon: [{
      type: Input
    }],
    nzTriggerSubMenuAction: [{
      type: Input
    }],
    nzOpen: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    nzDisabled: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    nzPlacement: [{
      type: Input
    }],
    nzOpenChange: [{
      type: Output
    }],
    cdkOverlayOrigin: [{
      type: ViewChild,
      args: [CdkOverlayOrigin, {
        static: true,
        read: ElementRef
      }]
    }],
    listOfNzSubMenuComponent: [{
      type: ContentChildren,
      args: [forwardRef(() => NzSubMenuComponent), {
        descendants: true
      }]
    }],
    listOfNzMenuItemDirective: [{
      type: ContentChildren,
      args: [NzMenuItemComponent, {
        descendants: true
      }]
    }]
  });
})();
function MenuServiceFactory() {
  const serviceInsideDropDown = inject(MenuService, {
    skipSelf: true,
    optional: true
  });
  const serviceOutsideDropDown = inject(NzMenuServiceLocalToken);
  return serviceInsideDropDown ?? serviceOutsideDropDown;
}
function MenuDropDownTokenFactory() {
  const isMenuInsideDropDownToken = inject(NzIsMenuInsideDropDownToken, {
    skipSelf: true,
    optional: true
  });
  return isMenuInsideDropDownToken ?? false;
}
var NzMenuDirective = class _NzMenuDirective {
  nzMenuService;
  cdr;
  listOfNzMenuItemDirective;
  isMenuInsideDropDown = inject(NzIsMenuInsideDropDownToken);
  listOfNzSubMenuComponent;
  nzInlineIndent = 24;
  nzTheme = "light";
  nzMode = "vertical";
  nzInlineCollapsed = false;
  nzSelectable = !this.isMenuInsideDropDown;
  nzClick = new EventEmitter();
  actualMode = "vertical";
  dir = "ltr";
  inlineCollapsed$ = new BehaviorSubject(this.nzInlineCollapsed);
  mode$ = new BehaviorSubject(this.nzMode);
  destroy$ = new Subject();
  listOfOpenedNzSubMenuComponent = [];
  directionality = inject(Directionality);
  setInlineCollapsed(inlineCollapsed) {
    this.nzInlineCollapsed = inlineCollapsed;
    this.inlineCollapsed$.next(inlineCollapsed);
  }
  updateInlineCollapse() {
    if (this.listOfNzMenuItemDirective) {
      if (this.nzInlineCollapsed) {
        this.listOfOpenedNzSubMenuComponent = this.listOfNzSubMenuComponent.filter((submenu) => submenu.nzOpen);
        this.listOfNzSubMenuComponent.forEach((submenu) => submenu.setOpenStateWithoutDebounce(false));
      } else {
        this.listOfOpenedNzSubMenuComponent.forEach((submenu) => submenu.setOpenStateWithoutDebounce(true));
        this.listOfOpenedNzSubMenuComponent = [];
      }
    }
  }
  constructor(nzMenuService, cdr) {
    this.nzMenuService = nzMenuService;
    this.cdr = cdr;
  }
  ngOnInit() {
    combineLatest([this.inlineCollapsed$, this.mode$]).pipe(takeUntil(this.destroy$)).subscribe(([inlineCollapsed, mode]) => {
      this.actualMode = inlineCollapsed ? "vertical" : mode;
      this.nzMenuService.setMode(this.actualMode);
      this.cdr.markForCheck();
    });
    this.nzMenuService.descendantMenuItemClick$.pipe(takeUntil(this.destroy$)).subscribe((menu) => {
      this.nzClick.emit(menu);
      if (this.nzSelectable && !menu.nzMatchRouter) {
        this.listOfNzMenuItemDirective.forEach((item) => item.setSelectedState(item === menu));
      }
    });
    this.dir = this.directionality.value;
    this.directionality.change?.pipe(takeUntil(this.destroy$)).subscribe((direction) => {
      this.dir = direction;
      this.nzMenuService.setMode(this.actualMode);
      this.cdr.markForCheck();
    });
  }
  ngAfterContentInit() {
    this.inlineCollapsed$.pipe(takeUntil(this.destroy$)).subscribe(() => {
      this.updateInlineCollapse();
      this.cdr.markForCheck();
    });
  }
  ngOnChanges(changes) {
    const {
      nzInlineCollapsed,
      nzInlineIndent,
      nzTheme,
      nzMode
    } = changes;
    if (nzInlineCollapsed) {
      this.inlineCollapsed$.next(this.nzInlineCollapsed);
    }
    if (nzInlineIndent) {
      this.nzMenuService.setInlineIndent(this.nzInlineIndent);
    }
    if (nzTheme) {
      this.nzMenuService.setTheme(this.nzTheme);
    }
    if (nzMode) {
      this.mode$.next(this.nzMode);
      if (!changes.nzMode.isFirstChange() && this.listOfNzSubMenuComponent) {
        this.listOfNzSubMenuComponent.forEach((submenu) => submenu.setOpenStateWithoutDebounce(false));
      }
    }
  }
  ngOnDestroy() {
    this.destroy$.next(true);
    this.destroy$.complete();
  }
  static \u0275fac = function NzMenuDirective_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _NzMenuDirective)(\u0275\u0275directiveInject(MenuService), \u0275\u0275directiveInject(ChangeDetectorRef));
  };
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _NzMenuDirective,
    selectors: [["", "nz-menu", ""]],
    contentQueries: function NzMenuDirective_ContentQueries(rf, ctx, dirIndex) {
      if (rf & 1) {
        \u0275\u0275contentQuery(dirIndex, NzMenuItemComponent, 5);
        \u0275\u0275contentQuery(dirIndex, NzSubMenuComponent, 5);
      }
      if (rf & 2) {
        let _t;
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.listOfNzMenuItemDirective = _t);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.listOfNzSubMenuComponent = _t);
      }
    },
    hostVars: 34,
    hostBindings: function NzMenuDirective_HostBindings(rf, ctx) {
      if (rf & 2) {
        \u0275\u0275classProp("ant-dropdown-menu", ctx.isMenuInsideDropDown)("ant-dropdown-menu-root", ctx.isMenuInsideDropDown)("ant-dropdown-menu-light", ctx.isMenuInsideDropDown && ctx.nzTheme === "light")("ant-dropdown-menu-dark", ctx.isMenuInsideDropDown && ctx.nzTheme === "dark")("ant-dropdown-menu-vertical", ctx.isMenuInsideDropDown && ctx.actualMode === "vertical")("ant-dropdown-menu-horizontal", ctx.isMenuInsideDropDown && ctx.actualMode === "horizontal")("ant-dropdown-menu-inline", ctx.isMenuInsideDropDown && ctx.actualMode === "inline")("ant-dropdown-menu-inline-collapsed", ctx.isMenuInsideDropDown && ctx.nzInlineCollapsed)("ant-menu", !ctx.isMenuInsideDropDown)("ant-menu-root", !ctx.isMenuInsideDropDown)("ant-menu-light", !ctx.isMenuInsideDropDown && ctx.nzTheme === "light")("ant-menu-dark", !ctx.isMenuInsideDropDown && ctx.nzTheme === "dark")("ant-menu-vertical", !ctx.isMenuInsideDropDown && ctx.actualMode === "vertical")("ant-menu-horizontal", !ctx.isMenuInsideDropDown && ctx.actualMode === "horizontal")("ant-menu-inline", !ctx.isMenuInsideDropDown && ctx.actualMode === "inline")("ant-menu-inline-collapsed", !ctx.isMenuInsideDropDown && ctx.nzInlineCollapsed)("ant-menu-rtl", ctx.dir === "rtl");
      }
    },
    inputs: {
      nzInlineIndent: "nzInlineIndent",
      nzTheme: "nzTheme",
      nzMode: "nzMode",
      nzInlineCollapsed: [2, "nzInlineCollapsed", "nzInlineCollapsed", booleanAttribute],
      nzSelectable: [2, "nzSelectable", "nzSelectable", booleanAttribute]
    },
    outputs: {
      nzClick: "nzClick"
    },
    exportAs: ["nzMenu"],
    features: [\u0275\u0275ProvidersFeature([
      {
        provide: NzMenuServiceLocalToken,
        useClass: MenuService
      },
      /** use the top level service **/
      {
        provide: MenuService,
        useFactory: MenuServiceFactory
      },
      /** check if menu inside dropdown-menu component **/
      {
        provide: NzIsMenuInsideDropDownToken,
        useFactory: MenuDropDownTokenFactory
      }
    ]), \u0275\u0275NgOnChangesFeature]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzMenuDirective, [{
    type: Directive,
    args: [{
      selector: "[nz-menu]",
      exportAs: "nzMenu",
      providers: [
        {
          provide: NzMenuServiceLocalToken,
          useClass: MenuService
        },
        /** use the top level service **/
        {
          provide: MenuService,
          useFactory: MenuServiceFactory
        },
        /** check if menu inside dropdown-menu component **/
        {
          provide: NzIsMenuInsideDropDownToken,
          useFactory: MenuDropDownTokenFactory
        }
      ],
      host: {
        "[class.ant-dropdown-menu]": `isMenuInsideDropDown`,
        "[class.ant-dropdown-menu-root]": `isMenuInsideDropDown`,
        "[class.ant-dropdown-menu-light]": `isMenuInsideDropDown && nzTheme === 'light'`,
        "[class.ant-dropdown-menu-dark]": `isMenuInsideDropDown && nzTheme === 'dark'`,
        "[class.ant-dropdown-menu-vertical]": `isMenuInsideDropDown && actualMode === 'vertical'`,
        "[class.ant-dropdown-menu-horizontal]": `isMenuInsideDropDown && actualMode === 'horizontal'`,
        "[class.ant-dropdown-menu-inline]": `isMenuInsideDropDown && actualMode === 'inline'`,
        "[class.ant-dropdown-menu-inline-collapsed]": `isMenuInsideDropDown && nzInlineCollapsed`,
        "[class.ant-menu]": `!isMenuInsideDropDown`,
        "[class.ant-menu-root]": `!isMenuInsideDropDown`,
        "[class.ant-menu-light]": `!isMenuInsideDropDown && nzTheme === 'light'`,
        "[class.ant-menu-dark]": `!isMenuInsideDropDown && nzTheme === 'dark'`,
        "[class.ant-menu-vertical]": `!isMenuInsideDropDown && actualMode === 'vertical'`,
        "[class.ant-menu-horizontal]": `!isMenuInsideDropDown && actualMode === 'horizontal'`,
        "[class.ant-menu-inline]": `!isMenuInsideDropDown && actualMode === 'inline'`,
        "[class.ant-menu-inline-collapsed]": `!isMenuInsideDropDown && nzInlineCollapsed`,
        "[class.ant-menu-rtl]": `dir === 'rtl'`
      }
    }]
  }], () => [{
    type: MenuService
  }, {
    type: ChangeDetectorRef
  }], {
    listOfNzMenuItemDirective: [{
      type: ContentChildren,
      args: [NzMenuItemComponent, {
        descendants: true
      }]
    }],
    listOfNzSubMenuComponent: [{
      type: ContentChildren,
      args: [NzSubMenuComponent, {
        descendants: true
      }]
    }],
    nzInlineIndent: [{
      type: Input
    }],
    nzTheme: [{
      type: Input
    }],
    nzMode: [{
      type: Input
    }],
    nzInlineCollapsed: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    nzSelectable: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    nzClick: [{
      type: Output
    }]
  });
})();
function MenuGroupFactory() {
  const isMenuInsideDropDownToken = inject(NzIsMenuInsideDropDownToken, {
    optional: true,
    skipSelf: true
  });
  return isMenuInsideDropDownToken ?? false;
}
var NzMenuGroupComponent = class _NzMenuGroupComponent {
  elementRef;
  renderer;
  nzTitle;
  titleElement;
  isMenuInsideDropDown = inject(NzIsMenuInsideDropDownToken);
  constructor(elementRef, renderer) {
    this.elementRef = elementRef;
    this.renderer = renderer;
    const className = this.isMenuInsideDropDown ? "ant-dropdown-menu-item-group" : "ant-menu-item-group";
    this.renderer.addClass(elementRef.nativeElement, className);
  }
  ngAfterViewInit() {
    const ulElement = this.titleElement.nativeElement.nextElementSibling;
    if (ulElement) {
      const className = this.isMenuInsideDropDown ? "ant-dropdown-menu-item-group-list" : "ant-menu-item-group-list";
      this.renderer.addClass(ulElement, className);
    }
  }
  static \u0275fac = function NzMenuGroupComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _NzMenuGroupComponent)(\u0275\u0275directiveInject(ElementRef), \u0275\u0275directiveInject(Renderer2));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _NzMenuGroupComponent,
    selectors: [["", "nz-menu-group", ""]],
    viewQuery: function NzMenuGroupComponent_Query(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275viewQuery(_c8, 5);
      }
      if (rf & 2) {
        let _t;
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.titleElement = _t.first);
      }
    },
    inputs: {
      nzTitle: "nzTitle"
    },
    exportAs: ["nzMenuGroup"],
    features: [\u0275\u0275ProvidersFeature([
      /** check if menu inside dropdown-menu component **/
      {
        provide: NzIsMenuInsideDropDownToken,
        useFactory: MenuGroupFactory
      }
    ])],
    attrs: _c9,
    ngContentSelectors: _c11,
    decls: 5,
    vars: 6,
    consts: [["titleElement", ""], [4, "nzStringTemplateOutlet"]],
    template: function NzMenuGroupComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275projectionDef(_c10);
        \u0275\u0275elementStart(0, "div", null, 0);
        \u0275\u0275template(2, NzMenuGroupComponent_ng_container_2_Template, 2, 1, "ng-container", 1)(3, NzMenuGroupComponent_Conditional_3_Template, 1, 0);
        \u0275\u0275elementEnd();
        \u0275\u0275projection(4);
      }
      if (rf & 2) {
        \u0275\u0275classProp("ant-menu-item-group-title", !ctx.isMenuInsideDropDown)("ant-dropdown-menu-item-group-title", ctx.isMenuInsideDropDown);
        \u0275\u0275advance(2);
        \u0275\u0275property("nzStringTemplateOutlet", ctx.nzTitle);
        \u0275\u0275advance();
        \u0275\u0275conditional(!ctx.nzTitle ? 3 : -1);
      }
    },
    dependencies: [NzOutletModule, NzStringTemplateOutletDirective],
    encapsulation: 2,
    changeDetection: 0
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzMenuGroupComponent, [{
    type: Component,
    args: [{
      selector: "[nz-menu-group]",
      exportAs: "nzMenuGroup",
      changeDetection: ChangeDetectionStrategy.OnPush,
      providers: [
        /** check if menu inside dropdown-menu component **/
        {
          provide: NzIsMenuInsideDropDownToken,
          useFactory: MenuGroupFactory
        }
      ],
      encapsulation: ViewEncapsulation.None,
      template: `
    <div
      [class.ant-menu-item-group-title]="!isMenuInsideDropDown"
      [class.ant-dropdown-menu-item-group-title]="isMenuInsideDropDown"
      #titleElement
    >
      <ng-container *nzStringTemplateOutlet="nzTitle">{{ nzTitle }}</ng-container>
      @if (!nzTitle) {
        <ng-content select="[title]" />
      }
    </div>
    <ng-content></ng-content>
  `,
      preserveWhitespaces: false,
      imports: [NzOutletModule]
    }]
  }], () => [{
    type: ElementRef
  }, {
    type: Renderer2
  }], {
    nzTitle: [{
      type: Input
    }],
    titleElement: [{
      type: ViewChild,
      args: ["titleElement"]
    }]
  });
})();
var NzMenuDividerDirective = class _NzMenuDividerDirective {
  elementRef;
  constructor(elementRef) {
    this.elementRef = elementRef;
  }
  static \u0275fac = function NzMenuDividerDirective_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _NzMenuDividerDirective)(\u0275\u0275directiveInject(ElementRef));
  };
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _NzMenuDividerDirective,
    selectors: [["", "nz-menu-divider", ""]],
    hostAttrs: [1, "ant-dropdown-menu-item-divider"],
    exportAs: ["nzMenuDivider"]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzMenuDividerDirective, [{
    type: Directive,
    args: [{
      selector: "[nz-menu-divider]",
      exportAs: "nzMenuDivider",
      host: {
        class: "ant-dropdown-menu-item-divider"
      }
    }]
  }], () => [{
    type: ElementRef
  }], null);
})();
var NzMenuModule = class _NzMenuModule {
  static \u0275fac = function NzMenuModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _NzMenuModule)();
  };
  static \u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
    type: _NzMenuModule
  });
  static \u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({
    imports: [NzSubMenuComponent, NzMenuGroupComponent, NzSubMenuTitleComponent]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzMenuModule, [{
    type: NgModule,
    args: [{
      imports: [NzMenuDirective, NzMenuItemComponent, NzSubMenuComponent, NzMenuDividerDirective, NzMenuGroupComponent, NzSubMenuTitleComponent, NzSubmenuInlineChildComponent, NzSubmenuNoneInlineChildComponent],
      exports: [NzMenuDirective, NzMenuItemComponent, NzSubMenuComponent, NzMenuDividerDirective, NzMenuGroupComponent]
    }]
  }], null, null);
})();

// node_modules/ng-zorro-antd/fesm2022/ng-zorro-antd-dropdown.mjs
var _c02 = ["*"];
function NzDropdownMenuComponent_ng_template_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 0);
    \u0275\u0275listener("@slideMotion.done", function NzDropdownMenuComponent_ng_template_0_Template_div_animation_slideMotion_done_0_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onAnimationEvent($event));
    })("mouseenter", function NzDropdownMenuComponent_ng_template_0_Template_div_mouseenter_0_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.setMouseState(true));
    })("mouseleave", function NzDropdownMenuComponent_ng_template_0_Template_div_mouseleave_0_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.setMouseState(false));
    });
    \u0275\u0275projection(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275styleMap(ctx_r1.nzOverlayStyle);
    \u0275\u0275classMap(ctx_r1.nzOverlayClassName);
    \u0275\u0275classProp("ant-dropdown-rtl", ctx_r1.dir === "rtl");
    \u0275\u0275property("@slideMotion", void 0)("@.disabled", !!(ctx_r1.noAnimation == null ? null : ctx_r1.noAnimation.nzNoAnimation))("nzNoAnimation", ctx_r1.noAnimation == null ? null : ctx_r1.noAnimation.nzNoAnimation);
  }
}
var NZ_CONFIG_MODULE_NAME = "dropDown";
var listOfPositions = [POSITION_MAP.bottomLeft, POSITION_MAP.bottomRight, POSITION_MAP.topRight, POSITION_MAP.topLeft];
var NzDropDownDirective = (() => {
  let _nzBackdrop_decorators;
  let _nzBackdrop_initializers = [];
  let _nzBackdrop_extraInitializers = [];
  return class NzDropDownDirective2 {
    static {
      const _metadata = typeof Symbol === "function" && Symbol.metadata ? /* @__PURE__ */ Object.create(null) : void 0;
      _nzBackdrop_decorators = [WithConfig()];
      __esDecorate(null, null, _nzBackdrop_decorators, {
        kind: "field",
        name: "nzBackdrop",
        static: false,
        private: false,
        access: {
          has: (obj) => "nzBackdrop" in obj,
          get: (obj) => obj.nzBackdrop,
          set: (obj, value) => {
            obj.nzBackdrop = value;
          }
        },
        metadata: _metadata
      }, _nzBackdrop_initializers, _nzBackdrop_extraInitializers);
      if (_metadata) Object.defineProperty(this, Symbol.metadata, {
        enumerable: true,
        configurable: true,
        writable: true,
        value: _metadata
      });
    }
    nzConfigService;
    renderer;
    viewContainerRef;
    platform;
    _nzModuleName = NZ_CONFIG_MODULE_NAME;
    elementRef = inject(ElementRef);
    overlay = inject(Overlay);
    portal;
    overlayRef = null;
    destroy$ = new Subject();
    positionStrategy = this.overlay.position().flexibleConnectedTo(this.elementRef.nativeElement).withLockedPosition().withTransformOriginOn(".ant-dropdown");
    inputVisible$ = new BehaviorSubject(false);
    nzTrigger$ = new BehaviorSubject("hover");
    overlayClose$ = new Subject();
    nzDropdownMenu = null;
    nzTrigger = "hover";
    nzMatchWidthElement = null;
    nzBackdrop = __runInitializers(this, _nzBackdrop_initializers, false);
    nzClickHide = (__runInitializers(this, _nzBackdrop_extraInitializers), true);
    nzDisabled = false;
    nzVisible = false;
    nzOverlayClassName = "";
    nzOverlayStyle = {};
    nzPlacement = "bottomLeft";
    nzVisibleChange = new EventEmitter();
    setDropdownMenuValue(key, value) {
      if (this.nzDropdownMenu) {
        this.nzDropdownMenu.setValue(key, value);
      }
    }
    constructor(nzConfigService, renderer, viewContainerRef, platform) {
      this.nzConfigService = nzConfigService;
      this.renderer = renderer;
      this.viewContainerRef = viewContainerRef;
      this.platform = platform;
    }
    ngAfterViewInit() {
      if (this.nzDropdownMenu) {
        const nativeElement = this.elementRef.nativeElement;
        const hostMouseState$ = merge(fromEvent(nativeElement, "mouseenter").pipe(map(() => true)), fromEvent(nativeElement, "mouseleave").pipe(map(() => false)));
        const menuMouseState$ = this.nzDropdownMenu.mouseState$;
        const mergedMouseState$ = merge(menuMouseState$, hostMouseState$);
        const hostClickState$ = fromEvent(nativeElement, "click").pipe(map(() => !this.nzVisible));
        const visibleStateByTrigger$ = this.nzTrigger$.pipe(switchMap((trigger) => {
          if (trigger === "hover") {
            return mergedMouseState$;
          } else if (trigger === "click") {
            return hostClickState$;
          } else {
            return EMPTY;
          }
        }));
        const descendantMenuItemClick$ = this.nzDropdownMenu.descendantMenuItemClick$.pipe(filter(() => this.nzClickHide), map(() => false));
        const domTriggerVisible$ = merge(visibleStateByTrigger$, descendantMenuItemClick$, this.overlayClose$).pipe(filter(() => !this.nzDisabled));
        const visible$ = merge(this.inputVisible$, domTriggerVisible$);
        combineLatest([visible$, this.nzDropdownMenu.isChildSubMenuOpen$]).pipe(map(([visible, sub]) => visible || sub), auditTime(150), distinctUntilChanged(), filter(() => this.platform.isBrowser), takeUntil(this.destroy$)).subscribe((visible) => {
          const element = this.nzMatchWidthElement ? this.nzMatchWidthElement.nativeElement : nativeElement;
          const triggerWidth = element.getBoundingClientRect().width;
          if (this.nzVisible !== visible) {
            this.nzVisibleChange.emit(visible);
          }
          this.nzVisible = visible;
          if (visible) {
            if (!this.overlayRef) {
              this.overlayRef = this.overlay.create({
                positionStrategy: this.positionStrategy,
                minWidth: triggerWidth,
                disposeOnNavigation: true,
                hasBackdrop: this.nzBackdrop && this.nzTrigger === "click",
                scrollStrategy: this.overlay.scrollStrategies.reposition()
              });
              merge(this.overlayRef.backdropClick(), this.overlayRef.detachments(), this.overlayRef.outsidePointerEvents().pipe(filter((e) => !this.elementRef.nativeElement.contains(e.target))), this.overlayRef.keydownEvents().pipe(filter((e) => e.keyCode === ESCAPE && !hasModifierKey(e)))).pipe(takeUntil(this.destroy$)).subscribe(() => {
                this.overlayClose$.next(false);
              });
            } else {
              const overlayConfig = this.overlayRef.getConfig();
              overlayConfig.minWidth = triggerWidth;
            }
            this.positionStrategy.withPositions([POSITION_MAP[this.nzPlacement], ...listOfPositions]);
            if (!this.portal || this.portal.templateRef !== this.nzDropdownMenu.templateRef) {
              this.portal = new TemplatePortal(this.nzDropdownMenu.templateRef, this.viewContainerRef);
            }
            this.overlayRef.attach(this.portal);
          } else {
            if (this.overlayRef) {
              this.overlayRef.detach();
            }
          }
        });
        this.nzDropdownMenu.animationStateChange$.pipe(takeUntil(this.destroy$)).subscribe((event) => {
          if (event.toState === "void") {
            if (this.overlayRef) {
              this.overlayRef.dispose();
            }
            this.overlayRef = null;
          }
        });
      }
    }
    ngOnDestroy() {
      this.destroy$.next(true);
      this.destroy$.complete();
      if (this.overlayRef) {
        this.overlayRef.dispose();
        this.overlayRef = null;
      }
    }
    ngOnChanges(changes) {
      const {
        nzVisible,
        nzDisabled,
        nzOverlayClassName,
        nzOverlayStyle,
        nzTrigger
      } = changes;
      if (nzTrigger) {
        this.nzTrigger$.next(this.nzTrigger);
      }
      if (nzVisible) {
        this.inputVisible$.next(this.nzVisible);
      }
      if (nzDisabled) {
        const nativeElement = this.elementRef.nativeElement;
        if (this.nzDisabled) {
          this.renderer.setAttribute(nativeElement, "disabled", "");
          this.inputVisible$.next(false);
        } else {
          this.renderer.removeAttribute(nativeElement, "disabled");
        }
      }
      if (nzOverlayClassName) {
        this.setDropdownMenuValue("nzOverlayClassName", this.nzOverlayClassName);
      }
      if (nzOverlayStyle) {
        this.setDropdownMenuValue("nzOverlayStyle", this.nzOverlayStyle);
      }
    }
    static \u0275fac = function NzDropDownDirective_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || NzDropDownDirective2)(\u0275\u0275directiveInject(NzConfigService), \u0275\u0275directiveInject(Renderer2), \u0275\u0275directiveInject(ViewContainerRef), \u0275\u0275directiveInject(Platform));
    };
    static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
      type: NzDropDownDirective2,
      selectors: [["", "nz-dropdown", ""]],
      hostAttrs: [1, "ant-dropdown-trigger"],
      inputs: {
        nzDropdownMenu: "nzDropdownMenu",
        nzTrigger: "nzTrigger",
        nzMatchWidthElement: "nzMatchWidthElement",
        nzBackdrop: [2, "nzBackdrop", "nzBackdrop", booleanAttribute],
        nzClickHide: [2, "nzClickHide", "nzClickHide", booleanAttribute],
        nzDisabled: [2, "nzDisabled", "nzDisabled", booleanAttribute],
        nzVisible: [2, "nzVisible", "nzVisible", booleanAttribute],
        nzOverlayClassName: "nzOverlayClassName",
        nzOverlayStyle: "nzOverlayStyle",
        nzPlacement: "nzPlacement"
      },
      outputs: {
        nzVisibleChange: "nzVisibleChange"
      },
      exportAs: ["nzDropdown"],
      features: [\u0275\u0275NgOnChangesFeature]
    });
  };
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzDropDownDirective, [{
    type: Directive,
    args: [{
      selector: "[nz-dropdown]",
      exportAs: "nzDropdown",
      host: {
        class: "ant-dropdown-trigger"
      }
    }]
  }], () => [{
    type: NzConfigService
  }, {
    type: Renderer2
  }, {
    type: ViewContainerRef
  }, {
    type: Platform
  }], {
    nzDropdownMenu: [{
      type: Input
    }],
    nzTrigger: [{
      type: Input
    }],
    nzMatchWidthElement: [{
      type: Input
    }],
    nzBackdrop: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    nzClickHide: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    nzDisabled: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    nzVisible: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    nzOverlayClassName: [{
      type: Input
    }],
    nzOverlayStyle: [{
      type: Input
    }],
    nzPlacement: [{
      type: Input
    }],
    nzVisibleChange: [{
      type: Output
    }]
  });
})();
var NzContextMenuServiceModule = class _NzContextMenuServiceModule {
  static \u0275fac = function NzContextMenuServiceModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _NzContextMenuServiceModule)();
  };
  static \u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
    type: _NzContextMenuServiceModule
  });
  static \u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({});
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzContextMenuServiceModule, [{
    type: NgModule
  }], null, null);
})();
var NzDropDownADirective = class _NzDropDownADirective {
  static \u0275fac = function NzDropDownADirective_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _NzDropDownADirective)();
  };
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _NzDropDownADirective,
    selectors: [["a", "nz-dropdown", ""]],
    hostAttrs: [1, "ant-dropdown-link"]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzDropDownADirective, [{
    type: Directive,
    args: [{
      selector: "a[nz-dropdown]",
      host: {
        class: "ant-dropdown-link"
      }
    }]
  }], null, null);
})();
var NzDropdownButtonDirective = class _NzDropdownButtonDirective {
  renderer;
  elementRef;
  nzButtonGroupComponent = inject(NzButtonGroupComponent, {
    host: true,
    optional: true
  });
  constructor(renderer, elementRef) {
    this.renderer = renderer;
    this.elementRef = elementRef;
  }
  ngAfterViewInit() {
    const parentElement = this.renderer.parentNode(this.elementRef.nativeElement);
    if (this.nzButtonGroupComponent && parentElement) {
      this.renderer.addClass(parentElement, "ant-dropdown-button");
    }
  }
  static \u0275fac = function NzDropdownButtonDirective_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _NzDropdownButtonDirective)(\u0275\u0275directiveInject(Renderer2), \u0275\u0275directiveInject(ElementRef));
  };
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _NzDropdownButtonDirective,
    selectors: [["", "nz-button", "", "nz-dropdown", ""]]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzDropdownButtonDirective, [{
    type: Directive,
    args: [{
      selector: "[nz-button][nz-dropdown]"
    }]
  }], () => [{
    type: Renderer2
  }, {
    type: ElementRef
  }], null);
})();
var NzDropdownMenuComponent = class _NzDropdownMenuComponent {
  cdr;
  elementRef;
  renderer;
  viewContainerRef;
  directionality;
  mouseState$ = new BehaviorSubject(false);
  nzMenuService = inject(MenuService);
  isChildSubMenuOpen$ = this.nzMenuService.isChildSubMenuOpen$;
  descendantMenuItemClick$ = this.nzMenuService.descendantMenuItemClick$;
  animationStateChange$ = new EventEmitter();
  nzOverlayClassName = "";
  nzOverlayStyle = {};
  templateRef;
  dir = "ltr";
  destroy$ = new Subject();
  onAnimationEvent(event) {
    this.animationStateChange$.emit(event);
  }
  setMouseState(visible) {
    this.mouseState$.next(visible);
  }
  setValue(key, value) {
    this[key] = value;
    this.cdr.markForCheck();
  }
  noAnimation = inject(NzNoAnimationDirective, {
    host: true,
    optional: true
  });
  constructor(cdr, elementRef, renderer, viewContainerRef, directionality) {
    this.cdr = cdr;
    this.elementRef = elementRef;
    this.renderer = renderer;
    this.viewContainerRef = viewContainerRef;
    this.directionality = directionality;
  }
  ngOnInit() {
    this.directionality.change?.pipe(takeUntil(this.destroy$)).subscribe((direction) => {
      this.dir = direction;
      this.cdr.detectChanges();
    });
    this.dir = this.directionality.value;
  }
  ngAfterContentInit() {
    this.renderer.removeChild(this.renderer.parentNode(this.elementRef.nativeElement), this.elementRef.nativeElement);
  }
  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }
  static \u0275fac = function NzDropdownMenuComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _NzDropdownMenuComponent)(\u0275\u0275directiveInject(ChangeDetectorRef), \u0275\u0275directiveInject(ElementRef), \u0275\u0275directiveInject(Renderer2), \u0275\u0275directiveInject(ViewContainerRef), \u0275\u0275directiveInject(Directionality));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _NzDropdownMenuComponent,
    selectors: [["nz-dropdown-menu"]],
    viewQuery: function NzDropdownMenuComponent_Query(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275viewQuery(TemplateRef, 7);
      }
      if (rf & 2) {
        let _t;
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.templateRef = _t.first);
      }
    },
    exportAs: ["nzDropdownMenu"],
    features: [\u0275\u0275ProvidersFeature([
      MenuService,
      /** menu is inside dropdown-menu component **/
      {
        provide: NzIsMenuInsideDropDownToken,
        useValue: true
      }
    ])],
    ngContentSelectors: _c02,
    decls: 1,
    vars: 0,
    consts: [[1, "ant-dropdown", 3, "mouseenter", "mouseleave", "nzNoAnimation"]],
    template: function NzDropdownMenuComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275projectionDef();
        \u0275\u0275template(0, NzDropdownMenuComponent_ng_template_0_Template, 2, 9, "ng-template");
      }
    },
    dependencies: [NzNoAnimationDirective],
    encapsulation: 2,
    data: {
      animation: [slideMotion]
    },
    changeDetection: 0
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzDropdownMenuComponent, [{
    type: Component,
    args: [{
      selector: `nz-dropdown-menu`,
      exportAs: `nzDropdownMenu`,
      animations: [slideMotion],
      providers: [
        MenuService,
        /** menu is inside dropdown-menu component **/
        {
          provide: NzIsMenuInsideDropDownToken,
          useValue: true
        }
      ],
      template: `
    <ng-template>
      <div
        class="ant-dropdown"
        [class.ant-dropdown-rtl]="dir === 'rtl'"
        [class]="nzOverlayClassName"
        [style]="nzOverlayStyle"
        @slideMotion
        (@slideMotion.done)="onAnimationEvent($event)"
        [@.disabled]="!!noAnimation?.nzNoAnimation"
        [nzNoAnimation]="noAnimation?.nzNoAnimation"
        (mouseenter)="setMouseState(true)"
        (mouseleave)="setMouseState(false)"
      >
        <ng-content></ng-content>
      </div>
    </ng-template>
  `,
      preserveWhitespaces: false,
      encapsulation: ViewEncapsulation.None,
      changeDetection: ChangeDetectionStrategy.OnPush,
      imports: [NzNoAnimationDirective]
    }]
  }], () => [{
    type: ChangeDetectorRef
  }, {
    type: ElementRef
  }, {
    type: Renderer2
  }, {
    type: ViewContainerRef
  }, {
    type: Directionality
  }], {
    templateRef: [{
      type: ViewChild,
      args: [TemplateRef, {
        static: true
      }]
    }]
  });
})();
var NzDropDownModule = class _NzDropDownModule {
  static \u0275fac = function NzDropDownModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _NzDropDownModule)();
  };
  static \u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
    type: _NzDropDownModule
  });
  static \u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({
    imports: [NzContextMenuServiceModule, NzMenuModule]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzDropDownModule, [{
    type: NgModule,
    args: [{
      imports: [NzDropDownDirective, NzDropDownADirective, NzDropdownMenuComponent, NzDropdownButtonDirective, NzContextMenuServiceModule],
      exports: [NzMenuModule, NzDropDownDirective, NzDropDownADirective, NzDropdownMenuComponent, NzDropdownButtonDirective]
    }]
  }], null, null);
})();
var LIST_OF_POSITIONS = [new ConnectionPositionPair({
  originX: "start",
  originY: "top"
}, {
  overlayX: "start",
  overlayY: "top"
}), new ConnectionPositionPair({
  originX: "start",
  originY: "top"
}, {
  overlayX: "start",
  overlayY: "bottom"
}), new ConnectionPositionPair({
  originX: "start",
  originY: "top"
}, {
  overlayX: "end",
  overlayY: "bottom"
}), new ConnectionPositionPair({
  originX: "start",
  originY: "top"
}, {
  overlayX: "end",
  overlayY: "top"
})];
var NzContextMenuService = class _NzContextMenuService {
  ngZone;
  overlay;
  overlayRef = null;
  closeSubscription = Subscription.EMPTY;
  constructor(ngZone, overlay) {
    this.ngZone = ngZone;
    this.overlay = overlay;
  }
  create($event, nzDropdownMenuComponent) {
    this.close(true);
    const {
      x,
      y
    } = $event;
    if ($event instanceof MouseEvent) {
      $event.preventDefault();
    }
    const positionStrategy = this.overlay.position().flexibleConnectedTo({
      x,
      y
    }).withPositions(LIST_OF_POSITIONS).withTransformOriginOn(".ant-dropdown");
    this.overlayRef = this.overlay.create({
      positionStrategy,
      disposeOnNavigation: true,
      scrollStrategy: this.overlay.scrollStrategies.close()
    });
    this.closeSubscription = new Subscription();
    this.closeSubscription.add(nzDropdownMenuComponent.descendantMenuItemClick$.subscribe(() => this.close()));
    this.closeSubscription.add(merge(fromEventOutsideAngular(document, "click").pipe(
      filter((event) => !!this.overlayRef && !this.overlayRef.overlayElement.contains(event.target)),
      /** handle firefox contextmenu event **/
      filter((event) => event.button !== 2)
    ), fromEventOutsideAngular(document, "keydown").pipe(filter((event) => event.key === "Escape"))).pipe(first()).subscribe(() => this.ngZone.run(() => this.close())));
    return this.overlayRef.attach(new TemplatePortal(nzDropdownMenuComponent.templateRef, nzDropdownMenuComponent.viewContainerRef));
  }
  close(clear = false) {
    if (this.overlayRef) {
      this.overlayRef.detach();
      if (clear) {
        this.overlayRef.dispose();
      }
      this.overlayRef = null;
      this.closeSubscription.unsubscribe();
    }
  }
  static \u0275fac = function NzContextMenuService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _NzContextMenuService)(\u0275\u0275inject(NgZone), \u0275\u0275inject(Overlay));
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
    token: _NzContextMenuService,
    factory: _NzContextMenuService.\u0275fac,
    providedIn: NzContextMenuServiceModule
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzContextMenuService, [{
    type: Injectable,
    args: [{
      providedIn: NzContextMenuServiceModule
    }]
  }], () => [{
    type: NgZone
  }, {
    type: Overlay
  }], null);
})();

// node_modules/ng-zorro-antd/fesm2022/ng-zorro-antd-breadcrumb.mjs
var _c03 = ["*"];
function NzBreadCrumbItemComponent_Conditional_0_ng_template_1_Template(rf, ctx) {
}
function NzBreadCrumbItemComponent_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 1);
    \u0275\u0275template(1, NzBreadCrumbItemComponent_Conditional_0_ng_template_1_Template, 0, 0, "ng-template", 2);
    \u0275\u0275element(2, "nz-icon", 3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    const noMenuTpl_r2 = \u0275\u0275reference(4);
    \u0275\u0275property("nzDropdownMenu", ctx_r0.nzOverlay);
    \u0275\u0275advance();
    \u0275\u0275property("ngTemplateOutlet", noMenuTpl_r2);
  }
}
function NzBreadCrumbItemComponent_Conditional_1_ng_template_0_Template(rf, ctx) {
}
function NzBreadCrumbItemComponent_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, NzBreadCrumbItemComponent_Conditional_1_ng_template_0_Template, 0, 0, "ng-template", 2);
  }
  if (rf & 2) {
    \u0275\u0275nextContext();
    const noMenuTpl_r2 = \u0275\u0275reference(4);
    \u0275\u0275property("ngTemplateOutlet", noMenuTpl_r2);
  }
}
function NzBreadCrumbItemComponent_Conditional_2_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275text(1);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.nzBreadCrumbComponent.nzSeparator, " ");
  }
}
function NzBreadCrumbItemComponent_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "nz-breadcrumb-separator");
    \u0275\u0275template(1, NzBreadCrumbItemComponent_Conditional_2_ng_container_1_Template, 2, 1, "ng-container", 4);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("nzStringTemplateOutlet", ctx_r0.nzBreadCrumbComponent.nzSeparator);
  }
}
function NzBreadCrumbItemComponent_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 5);
    \u0275\u0275projection(1);
    \u0275\u0275elementEnd();
  }
}
var _forTrack0 = ($index, $item) => $item.url;
function NzBreadCrumbComponent_Conditional_1_For_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "nz-breadcrumb-item")(1, "a", 0);
    \u0275\u0275listener("click", function NzBreadCrumbComponent_Conditional_1_For_1_Template_a_click_1_listener($event) {
      const breadcrumb_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.navigate(breadcrumb_r2.url, $event));
    });
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const breadcrumb_r2 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275attribute("href", breadcrumb_r2.url, \u0275\u0275sanitizeUrl);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(breadcrumb_r2.label);
  }
}
function NzBreadCrumbComponent_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275repeaterCreate(0, NzBreadCrumbComponent_Conditional_1_For_1_Template, 3, 2, "nz-breadcrumb-item", null, _forTrack0);
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275repeater(ctx_r2.breadcrumbs);
  }
}
var NzBreadCrumbSeparatorComponent = class _NzBreadCrumbSeparatorComponent {
  static \u0275fac = function NzBreadCrumbSeparatorComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _NzBreadCrumbSeparatorComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _NzBreadCrumbSeparatorComponent,
    selectors: [["nz-breadcrumb-separator"]],
    hostAttrs: [1, "ant-breadcrumb-separator"],
    exportAs: ["nzBreadcrumbSeparator"],
    ngContentSelectors: _c03,
    decls: 1,
    vars: 0,
    template: function NzBreadCrumbSeparatorComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275projectionDef();
        \u0275\u0275projection(0);
      }
    },
    encapsulation: 2
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzBreadCrumbSeparatorComponent, [{
    type: Component,
    args: [{
      selector: "nz-breadcrumb-separator",
      exportAs: "nzBreadcrumbSeparator",
      template: `<ng-content></ng-content>`,
      host: {
        class: "ant-breadcrumb-separator"
      }
    }]
  }], null, null);
})();
var NzBreadcrumb = class {
};
var NzBreadCrumbItemComponent = class _NzBreadCrumbItemComponent {
  nzBreadCrumbComponent;
  /**
   * Dropdown content of a breadcrumb item.
   */
  nzOverlay;
  constructor(nzBreadCrumbComponent) {
    this.nzBreadCrumbComponent = nzBreadCrumbComponent;
  }
  static \u0275fac = function NzBreadCrumbItemComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _NzBreadCrumbItemComponent)(\u0275\u0275directiveInject(NzBreadcrumb));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _NzBreadCrumbItemComponent,
    selectors: [["nz-breadcrumb-item"]],
    inputs: {
      nzOverlay: "nzOverlay"
    },
    exportAs: ["nzBreadcrumbItem"],
    ngContentSelectors: _c03,
    decls: 5,
    vars: 2,
    consts: [["noMenuTpl", ""], ["nz-dropdown", "", 1, "ant-breadcrumb-overlay-link", 3, "nzDropdownMenu"], [3, "ngTemplateOutlet"], ["nzType", "down"], [4, "nzStringTemplateOutlet"], [1, "ant-breadcrumb-link"]],
    template: function NzBreadCrumbItemComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275projectionDef();
        \u0275\u0275template(0, NzBreadCrumbItemComponent_Conditional_0_Template, 3, 2, "span", 1)(1, NzBreadCrumbItemComponent_Conditional_1_Template, 1, 1, null, 2)(2, NzBreadCrumbItemComponent_Conditional_2_Template, 2, 1, "nz-breadcrumb-separator")(3, NzBreadCrumbItemComponent_ng_template_3_Template, 2, 0, "ng-template", null, 0, \u0275\u0275templateRefExtractor);
      }
      if (rf & 2) {
        \u0275\u0275conditional(!!ctx.nzOverlay ? 0 : 1);
        \u0275\u0275advance(2);
        \u0275\u0275conditional(ctx.nzBreadCrumbComponent.nzSeparator ? 2 : -1);
      }
    },
    dependencies: [NgTemplateOutlet, NzBreadCrumbSeparatorComponent, NzDropDownModule, NzDropDownDirective, NzIconModule, NzIconDirective, NzOutletModule, NzStringTemplateOutletDirective],
    encapsulation: 2,
    changeDetection: 0
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzBreadCrumbItemComponent, [{
    type: Component,
    args: [{
      changeDetection: ChangeDetectionStrategy.OnPush,
      encapsulation: ViewEncapsulation.None,
      selector: "nz-breadcrumb-item",
      exportAs: "nzBreadcrumbItem",
      preserveWhitespaces: false,
      imports: [NgTemplateOutlet, NzBreadCrumbSeparatorComponent, NzDropDownModule, NzIconModule, NzOutletModule],
      template: `
    @if (!!nzOverlay) {
      <span class="ant-breadcrumb-overlay-link" nz-dropdown [nzDropdownMenu]="nzOverlay">
        <ng-template [ngTemplateOutlet]="noMenuTpl"></ng-template>
        <nz-icon nzType="down" />
      </span>
    } @else {
      <ng-template [ngTemplateOutlet]="noMenuTpl" />
    }

    @if (nzBreadCrumbComponent.nzSeparator) {
      <nz-breadcrumb-separator>
        <ng-container *nzStringTemplateOutlet="nzBreadCrumbComponent.nzSeparator">
          {{ nzBreadCrumbComponent.nzSeparator }}
        </ng-container>
      </nz-breadcrumb-separator>
    }

    <ng-template #noMenuTpl>
      <span class="ant-breadcrumb-link">
        <ng-content />
      </span>
    </ng-template>
  `
    }]
  }], () => [{
    type: NzBreadcrumb
  }], {
    nzOverlay: [{
      type: Input
    }]
  });
})();
var NzBreadCrumbComponent = class _NzBreadCrumbComponent {
  injector;
  cdr;
  elementRef;
  renderer;
  directionality;
  nzAutoGenerate = false;
  nzSeparator = "/";
  nzRouteLabel = "breadcrumb";
  nzRouteLabelFn = (label) => label;
  nzRouteFn = (route) => route;
  breadcrumbs = [];
  dir = "ltr";
  destroy$ = new Subject();
  constructor(injector, cdr, elementRef, renderer, directionality) {
    this.injector = injector;
    this.cdr = cdr;
    this.elementRef = elementRef;
    this.renderer = renderer;
    this.directionality = directionality;
  }
  ngOnInit() {
    if (this.nzAutoGenerate) {
      this.registerRouterChange();
    }
    this.directionality.change?.pipe(takeUntil(this.destroy$)).subscribe((direction) => {
      this.dir = direction;
      this.prepareComponentForRtl();
      this.cdr.detectChanges();
    });
    this.dir = this.directionality.value;
    this.prepareComponentForRtl();
  }
  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }
  navigate(url, e) {
    e.preventDefault();
    this.injector.get(Router).navigateByUrl(url);
  }
  registerRouterChange() {
    try {
      const router = this.injector.get(Router);
      const activatedRoute = this.injector.get(ActivatedRoute);
      router.events.pipe(
        filter((e) => e instanceof NavigationEnd),
        takeUntil(this.destroy$),
        startWith(true)
        // trigger initial render
      ).subscribe(() => {
        this.breadcrumbs = this.getBreadcrumbs(activatedRoute.root);
        this.cdr.markForCheck();
      });
    } catch {
      throw new Error(`${PREFIX} You should import RouterModule if you want to use 'NzAutoGenerate'.`);
    }
  }
  getBreadcrumbs(route, url = "", breadcrumbs = []) {
    const children = route.children;
    if (children.length === 0) {
      return breadcrumbs;
    }
    for (const child of children) {
      if (child.outlet === PRIMARY_OUTLET) {
        const routeUrl = child.snapshot.url.map((segment) => segment.path).filter((path) => path).join("/");
        const nextUrl = routeUrl ? `${url}/${routeUrl}` : url;
        const breadcrumbLabel = this.nzRouteLabelFn(child.snapshot.data[this.nzRouteLabel]);
        const shapedUrl = this.nzRouteFn(nextUrl);
        if (routeUrl && breadcrumbLabel) {
          const breadcrumb = {
            label: breadcrumbLabel,
            params: child.snapshot.params,
            url: shapedUrl
          };
          breadcrumbs.push(breadcrumb);
        }
        return this.getBreadcrumbs(child, nextUrl, breadcrumbs);
      }
    }
    return breadcrumbs;
  }
  prepareComponentForRtl() {
    if (this.dir === "rtl") {
      this.renderer.addClass(this.elementRef.nativeElement, "ant-breadcrumb-rtl");
    } else {
      this.renderer.removeClass(this.elementRef.nativeElement, "ant-breadcrumb-rtl");
    }
  }
  static \u0275fac = function NzBreadCrumbComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _NzBreadCrumbComponent)(\u0275\u0275directiveInject(Injector), \u0275\u0275directiveInject(ChangeDetectorRef), \u0275\u0275directiveInject(ElementRef), \u0275\u0275directiveInject(Renderer2), \u0275\u0275directiveInject(Directionality));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _NzBreadCrumbComponent,
    selectors: [["nz-breadcrumb"]],
    hostAttrs: [1, "ant-breadcrumb"],
    inputs: {
      nzAutoGenerate: [2, "nzAutoGenerate", "nzAutoGenerate", booleanAttribute],
      nzSeparator: "nzSeparator",
      nzRouteLabel: "nzRouteLabel",
      nzRouteLabelFn: "nzRouteLabelFn",
      nzRouteFn: "nzRouteFn"
    },
    exportAs: ["nzBreadcrumb"],
    features: [\u0275\u0275ProvidersFeature([{
      provide: NzBreadcrumb,
      useExisting: forwardRef(() => _NzBreadCrumbComponent)
    }])],
    ngContentSelectors: _c03,
    decls: 2,
    vars: 1,
    consts: [[3, "click"]],
    template: function NzBreadCrumbComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275projectionDef();
        \u0275\u0275projection(0);
        \u0275\u0275template(1, NzBreadCrumbComponent_Conditional_1_Template, 2, 0);
      }
      if (rf & 2) {
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.nzAutoGenerate && ctx.breadcrumbs.length ? 1 : -1);
      }
    },
    dependencies: [NzBreadCrumbItemComponent],
    encapsulation: 2,
    changeDetection: 0
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzBreadCrumbComponent, [{
    type: Component,
    args: [{
      changeDetection: ChangeDetectionStrategy.OnPush,
      encapsulation: ViewEncapsulation.None,
      selector: "nz-breadcrumb",
      exportAs: "nzBreadcrumb",
      preserveWhitespaces: false,
      providers: [{
        provide: NzBreadcrumb,
        useExisting: forwardRef(() => NzBreadCrumbComponent)
      }],
      imports: [NzBreadCrumbItemComponent],
      template: `
    <ng-content />
    @if (nzAutoGenerate && breadcrumbs.length) {
      @for (breadcrumb of breadcrumbs; track breadcrumb.url) {
        <nz-breadcrumb-item>
          <a [attr.href]="breadcrumb.url" (click)="navigate(breadcrumb.url, $event)">{{ breadcrumb.label }}</a>
        </nz-breadcrumb-item>
      }
    }
  `,
      host: {
        class: "ant-breadcrumb"
      }
    }]
  }], () => [{
    type: Injector
  }, {
    type: ChangeDetectorRef
  }, {
    type: ElementRef
  }, {
    type: Renderer2
  }, {
    type: Directionality
  }], {
    nzAutoGenerate: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    nzSeparator: [{
      type: Input
    }],
    nzRouteLabel: [{
      type: Input
    }],
    nzRouteLabelFn: [{
      type: Input
    }],
    nzRouteFn: [{
      type: Input
    }]
  });
})();
var NzBreadCrumbModule = class _NzBreadCrumbModule {
  static \u0275fac = function NzBreadCrumbModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _NzBreadCrumbModule)();
  };
  static \u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
    type: _NzBreadCrumbModule
  });
  static \u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({
    imports: [NzBreadCrumbComponent, NzBreadCrumbItemComponent]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzBreadCrumbModule, [{
    type: NgModule,
    args: [{
      imports: [NzBreadCrumbComponent, NzBreadCrumbItemComponent, NzBreadCrumbSeparatorComponent],
      exports: [NzBreadCrumbComponent, NzBreadCrumbItemComponent, NzBreadCrumbSeparatorComponent]
    }]
  }], null, null);
})();

// node_modules/ng-zorro-antd/fesm2022/ng-zorro-antd-core-trans-button.mjs
var NzTransButtonDirective = class _NzTransButtonDirective {
  static \u0275fac = function NzTransButtonDirective_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _NzTransButtonDirective)();
  };
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _NzTransButtonDirective,
    selectors: [["button", "nz-trans-button", ""]],
    hostVars: 8,
    hostBindings: function NzTransButtonDirective_HostBindings(rf, ctx) {
      if (rf & 2) {
        \u0275\u0275styleProp("border", "0")("background", "transparent")("padding", "0")("line-height", "inherit");
      }
    }
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzTransButtonDirective, [{
    type: Directive,
    args: [{
      selector: "button[nz-trans-button]",
      host: {
        "[style.border]": '"0"',
        "[style.background]": '"transparent"',
        "[style.padding]": '"0"',
        "[style.line-height]": '"inherit"'
      }
    }]
  }], null, null);
})();
var NzTransButtonModule = class _NzTransButtonModule {
  static \u0275fac = function NzTransButtonModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _NzTransButtonModule)();
  };
  static \u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
    type: _NzTransButtonModule
  });
  static \u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({});
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzTransButtonModule, [{
    type: NgModule,
    args: [{
      imports: [NzTransButtonDirective],
      exports: [NzTransButtonDirective]
    }]
  }], null, null);
})();

// node_modules/@angular/cdk/fesm2022/clipboard.mjs
var PendingCopy = class {
  _document;
  _textarea;
  constructor(text, _document) {
    this._document = _document;
    const textarea = this._textarea = this._document.createElement("textarea");
    const styles = textarea.style;
    styles.position = "fixed";
    styles.top = styles.opacity = "0";
    styles.left = "-999em";
    textarea.setAttribute("aria-hidden", "true");
    textarea.value = text;
    textarea.readOnly = true;
    (this._document.fullscreenElement || this._document.body).appendChild(textarea);
  }
  /** Finishes copying the text. */
  copy() {
    const textarea = this._textarea;
    let successful = false;
    try {
      if (textarea) {
        const currentFocus = this._document.activeElement;
        textarea.select();
        textarea.setSelectionRange(0, textarea.value.length);
        successful = this._document.execCommand("copy");
        if (currentFocus) {
          currentFocus.focus();
        }
      }
    } catch {
    }
    return successful;
  }
  /** Cleans up DOM changes used to perform the copy operation. */
  destroy() {
    const textarea = this._textarea;
    if (textarea) {
      textarea.remove();
      this._textarea = void 0;
    }
  }
};
var Clipboard = class _Clipboard {
  _document = inject(DOCUMENT);
  constructor() {
  }
  /**
   * Copies the provided text into the user's clipboard.
   *
   * @param text The string to copy.
   * @returns Whether the operation was successful.
   */
  copy(text) {
    const pendingCopy = this.beginCopy(text);
    const successful = pendingCopy.copy();
    pendingCopy.destroy();
    return successful;
  }
  /**
   * Prepares a string to be copied later. This is useful for large strings
   * which take too long to successfully render and be copied in the same tick.
   *
   * The caller must call `destroy` on the returned `PendingCopy`.
   *
   * @param text The string to copy.
   * @returns the pending copy operation.
   */
  beginCopy(text) {
    return new PendingCopy(text, this._document);
  }
  static \u0275fac = function Clipboard_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _Clipboard)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
    token: _Clipboard,
    factory: _Clipboard.\u0275fac,
    providedIn: "root"
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Clipboard, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [], null);
})();
var CDK_COPY_TO_CLIPBOARD_CONFIG = new InjectionToken("CDK_COPY_TO_CLIPBOARD_CONFIG");
var CdkCopyToClipboard = class _CdkCopyToClipboard {
  _clipboard = inject(Clipboard);
  _ngZone = inject(NgZone);
  /** Content to be copied. */
  text = "";
  /**
   * How many times to attempt to copy the text. This may be necessary for longer text, because
   * the browser needs time to fill an intermediate textarea element and copy the content.
   */
  attempts = 1;
  /**
   * Emits when some text is copied to the clipboard. The
   * emitted value indicates whether copying was successful.
   */
  copied = new EventEmitter();
  /** Copies that are currently being attempted. */
  _pending = /* @__PURE__ */ new Set();
  /** Whether the directive has been destroyed. */
  _destroyed;
  /** Timeout for the current copy attempt. */
  _currentTimeout;
  constructor() {
    const config = inject(CDK_COPY_TO_CLIPBOARD_CONFIG, {
      optional: true
    });
    if (config && config.attempts != null) {
      this.attempts = config.attempts;
    }
  }
  /** Copies the current text to the clipboard. */
  copy(attempts = this.attempts) {
    if (attempts > 1) {
      let remainingAttempts = attempts;
      const pending = this._clipboard.beginCopy(this.text);
      this._pending.add(pending);
      const attempt = () => {
        const successful = pending.copy();
        if (!successful && --remainingAttempts && !this._destroyed) {
          this._currentTimeout = this._ngZone.runOutsideAngular(() => setTimeout(attempt, 1));
        } else {
          this._currentTimeout = null;
          this._pending.delete(pending);
          pending.destroy();
          this.copied.emit(successful);
        }
      };
      attempt();
    } else {
      this.copied.emit(this._clipboard.copy(this.text));
    }
  }
  ngOnDestroy() {
    if (this._currentTimeout) {
      clearTimeout(this._currentTimeout);
    }
    this._pending.forEach((copy) => copy.destroy());
    this._pending.clear();
    this._destroyed = true;
  }
  static \u0275fac = function CdkCopyToClipboard_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _CdkCopyToClipboard)();
  };
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _CdkCopyToClipboard,
    selectors: [["", "cdkCopyToClipboard", ""]],
    hostBindings: function CdkCopyToClipboard_HostBindings(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275listener("click", function CdkCopyToClipboard_click_HostBindingHandler() {
          return ctx.copy();
        });
      }
    },
    inputs: {
      text: [0, "cdkCopyToClipboard", "text"],
      attempts: [0, "cdkCopyToClipboardAttempts", "attempts"]
    },
    outputs: {
      copied: "cdkCopyToClipboardCopied"
    }
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CdkCopyToClipboard, [{
    type: Directive,
    args: [{
      selector: "[cdkCopyToClipboard]",
      host: {
        "(click)": "copy()"
      }
    }]
  }], () => [], {
    text: [{
      type: Input,
      args: ["cdkCopyToClipboard"]
    }],
    attempts: [{
      type: Input,
      args: ["cdkCopyToClipboardAttempts"]
    }],
    copied: [{
      type: Output,
      args: ["cdkCopyToClipboardCopied"]
    }]
  });
})();
var ClipboardModule = class _ClipboardModule {
  static \u0275fac = function ClipboardModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ClipboardModule)();
  };
  static \u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
    type: _ClipboardModule
  });
  static \u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({});
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ClipboardModule, [{
    type: NgModule,
    args: [{
      imports: [CdkCopyToClipboard],
      exports: [CdkCopyToClipboard]
    }]
  }], null, null);
})();

// node_modules/ng-zorro-antd/fesm2022/ng-zorro-antd-typography.mjs
function NzTextCopyComponent_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275element(1, "nz-icon", 2);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const icon_r1 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("nzType", icon_r1);
  }
}
var _c04 = ["textarea"];
function NzTextEditComponent_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "textarea", 2, 0);
    \u0275\u0275listener("blur", function NzTextEditComponent_Conditional_0_Template_textarea_blur_0_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.confirm());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "button", 3);
    \u0275\u0275listener("click", function NzTextEditComponent_Conditional_0_Template_button_click_2_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.confirm());
    });
    \u0275\u0275element(3, "nz-icon", 4);
    \u0275\u0275elementEnd();
  }
}
function NzTextEditComponent_Conditional_1_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275element(1, "nz-icon", 7);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const icon_r4 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("nzType", icon_r4);
  }
}
function NzTextEditComponent_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 5);
    \u0275\u0275listener("click", function NzTextEditComponent_Conditional_1_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onClick());
    });
    \u0275\u0275template(1, NzTextEditComponent_Conditional_1_ng_container_1_Template, 2, 1, "ng-container", 6);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("nzTooltipTitle", ctx_r1.tooltip === null ? null : ctx_r1.tooltip || (ctx_r1.locale == null ? null : ctx_r1.locale.edit));
    \u0275\u0275advance();
    \u0275\u0275property("nzStringTemplateOutlet", ctx_r1.icon);
  }
}
var _c12 = ["ellipsisContainer"];
var _c22 = ["expandable"];
var _c32 = ["contentTemplate"];
var _c42 = ["*"];
var _c52 = (a0) => ({
  content: a0
});
function NzTypographyComponent_ng_template_0_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275projection(0);
  }
}
function NzTypographyComponent_ng_template_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, NzTypographyComponent_ng_template_0_Conditional_0_Template, 1, 0);
    \u0275\u0275text(1);
  }
  if (rf & 2) {
    const content_r1 = ctx.content;
    \u0275\u0275conditional(!content_r1 ? 0 : -1);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", content_r1, " ");
  }
}
function NzTypographyComponent_Conditional_2_Conditional_0_ng_template_0_Template(rf, ctx) {
}
function NzTypographyComponent_Conditional_2_Conditional_0_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275textInterpolate1(" ", ctx_r1.nzSuffix, " ");
  }
}
function NzTypographyComponent_Conditional_2_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, NzTypographyComponent_Conditional_2_Conditional_0_ng_template_0_Template, 0, 0, "ng-template", 5)(1, NzTypographyComponent_Conditional_2_Conditional_0_Conditional_1_Template, 1, 1);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    const contentTemplate_r3 = \u0275\u0275reference(1);
    \u0275\u0275property("ngTemplateOutlet", contentTemplate_r3)("ngTemplateOutletContext", \u0275\u0275pureFunction1(3, _c52, ctx_r1.nzContent));
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.nzSuffix ? 1 : -1);
  }
}
function NzTypographyComponent_Conditional_2_Conditional_1_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275textInterpolate1(" ", ctx_r1.ellipsisStr, " ");
  }
}
function NzTypographyComponent_Conditional_2_Conditional_1_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275textInterpolate1(" ", ctx_r1.nzSuffix, " ");
  }
}
function NzTypographyComponent_Conditional_2_Conditional_1_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "a", 7, 2);
    \u0275\u0275listener("click", function NzTypographyComponent_Conditional_2_Conditional_1_Conditional_4_Template_a_click_0_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.onExpand());
    });
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r1.locale == null ? null : ctx_r1.locale.expand, " ");
  }
}
function NzTypographyComponent_Conditional_2_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", null, 1);
    \u0275\u0275template(2, NzTypographyComponent_Conditional_2_Conditional_1_Conditional_2_Template, 1, 1)(3, NzTypographyComponent_Conditional_2_Conditional_1_Conditional_3_Template, 1, 1)(4, NzTypographyComponent_Conditional_2_Conditional_1_Conditional_4_Template, 3, 1, "a", 6);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r1.isEllipsis ? 2 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.nzSuffix ? 3 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.nzExpandable && ctx_r1.isEllipsis ? 4 : -1);
  }
}
function NzTypographyComponent_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, NzTypographyComponent_Conditional_2_Conditional_0_Template, 2, 5)(1, NzTypographyComponent_Conditional_2_Conditional_1_Template, 5, 3);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275conditional(ctx_r1.expanded || !ctx_r1.hasOperationsWithEllipsis && ctx_r1.nzEllipsisRows === 1 && !ctx_r1.hasEllipsisObservers || ctx_r1.canCssEllipsis || ctx_r1.nzSuffix && ctx_r1.expanded ? 0 : 1);
  }
}
function NzTypographyComponent_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "nz-text-edit", 8);
    \u0275\u0275listener("endEditing", function NzTypographyComponent_Conditional_3_Template_nz_text_edit_endEditing_0_listener($event) {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onEndEditing($event));
    })("startEditing", function NzTypographyComponent_Conditional_3_Template_nz_text_edit_startEditing_0_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onStartEditing());
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("text", ctx_r1.nzContent)("icon", ctx_r1.nzEditIcon)("tooltip", ctx_r1.nzEditTooltip);
  }
}
function NzTypographyComponent_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "nz-text-copy", 9);
    \u0275\u0275listener("textCopy", function NzTypographyComponent_Conditional_4_Template_nz_text_copy_textCopy_0_listener($event) {
      \u0275\u0275restoreView(_r6);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onTextCopy($event));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("text", ctx_r1.copyText)("tooltips", ctx_r1.nzCopyTooltips)("icons", ctx_r1.nzCopyIcons);
  }
}
var NzTextCopyComponent = class _NzTextCopyComponent {
  cdr;
  clipboard;
  i18n;
  copied = false;
  copyId;
  locale;
  nativeElement = inject(ElementRef).nativeElement;
  copyTooltip = null;
  copedTooltip = null;
  copyIcon = "copy";
  copedIcon = "check";
  destroy$ = new Subject();
  text;
  tooltips;
  icons = ["copy", "check"];
  textCopy = new EventEmitter();
  constructor(cdr, clipboard, i18n) {
    this.cdr = cdr;
    this.clipboard = clipboard;
    this.i18n = i18n;
  }
  ngOnInit() {
    this.i18n.localeChange.pipe(takeUntil(this.destroy$)).subscribe(() => {
      this.locale = this.i18n.getLocaleData("Text");
      this.updateTooltips();
      this.cdr.markForCheck();
    });
  }
  ngOnChanges(changes) {
    const {
      tooltips,
      icons
    } = changes;
    if (tooltips) {
      this.updateTooltips();
    }
    if (icons) {
      this.updateIcons();
    }
  }
  ngOnDestroy() {
    clearTimeout(this.copyId);
    this.destroy$.next(true);
    this.destroy$.complete();
  }
  onClick() {
    if (this.copied) {
      return;
    }
    this.copied = true;
    this.cdr.detectChanges();
    const text = this.text;
    this.textCopy.emit(text);
    this.clipboard.copy(text);
    this.onCopied();
  }
  onCopied() {
    clearTimeout(this.copyId);
    this.copyId = setTimeout(() => {
      this.copied = false;
      this.cdr.detectChanges();
    }, 3e3);
  }
  updateTooltips() {
    if (this.tooltips === null) {
      this.copedTooltip = null;
      this.copyTooltip = null;
    } else if (Array.isArray(this.tooltips)) {
      const [copyTooltip, copedTooltip] = this.tooltips;
      this.copyTooltip = copyTooltip || this.locale?.copy;
      this.copedTooltip = copedTooltip || this.locale?.copied;
    } else {
      this.copyTooltip = this.locale?.copy;
      this.copedTooltip = this.locale?.copied;
    }
    this.cdr.markForCheck();
  }
  updateIcons() {
    const [copyIcon, copedIcon] = this.icons;
    this.copyIcon = copyIcon;
    this.copedIcon = copedIcon;
    this.cdr.markForCheck();
  }
  static \u0275fac = function NzTextCopyComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _NzTextCopyComponent)(\u0275\u0275directiveInject(ChangeDetectorRef), \u0275\u0275directiveInject(Clipboard), \u0275\u0275directiveInject(NzI18nService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _NzTextCopyComponent,
    selectors: [["nz-text-copy"]],
    inputs: {
      text: "text",
      tooltips: "tooltips",
      icons: "icons"
    },
    outputs: {
      textCopy: "textCopy"
    },
    exportAs: ["nzTextCopy"],
    features: [\u0275\u0275NgOnChangesFeature],
    decls: 2,
    vars: 4,
    consts: [["type", "button", "nz-tooltip", "", "nz-trans-button", "", 1, "ant-typography-copy", 3, "click", "nzTooltipTitle"], [4, "nzStringTemplateOutlet"], [3, "nzType"]],
    template: function NzTextCopyComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "button", 0);
        \u0275\u0275listener("click", function NzTextCopyComponent_Template_button_click_0_listener() {
          return ctx.onClick();
        });
        \u0275\u0275template(1, NzTextCopyComponent_ng_container_1_Template, 2, 1, "ng-container", 1);
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        \u0275\u0275classProp("ant-typography-copy-success", ctx.copied);
        \u0275\u0275property("nzTooltipTitle", ctx.copied ? ctx.copedTooltip : ctx.copyTooltip);
        \u0275\u0275advance();
        \u0275\u0275property("nzStringTemplateOutlet", ctx.copied ? ctx.copedIcon : ctx.copyIcon);
      }
    },
    dependencies: [NzToolTipModule, NzTooltipDirective, NzTransButtonModule, NzTransButtonDirective, NzIconModule, NzIconDirective, NzOutletModule, NzStringTemplateOutletDirective],
    encapsulation: 2,
    changeDetection: 0
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzTextCopyComponent, [{
    type: Component,
    args: [{
      selector: "nz-text-copy",
      exportAs: "nzTextCopy",
      template: `
    <button
      type="button"
      nz-tooltip
      nz-trans-button
      [nzTooltipTitle]="copied ? copedTooltip : copyTooltip"
      class="ant-typography-copy"
      [class.ant-typography-copy-success]="copied"
      (click)="onClick()"
    >
      <ng-container *nzStringTemplateOutlet="copied ? copedIcon : copyIcon; let icon">
        <nz-icon [nzType]="icon" />
      </ng-container>
    </button>
  `,
      changeDetection: ChangeDetectionStrategy.OnPush,
      encapsulation: ViewEncapsulation.None,
      preserveWhitespaces: false,
      imports: [NzToolTipModule, NzTransButtonModule, NzIconModule, NzOutletModule]
    }]
  }], () => [{
    type: ChangeDetectorRef
  }, {
    type: Clipboard
  }, {
    type: NzI18nService
  }], {
    text: [{
      type: Input
    }],
    tooltips: [{
      type: Input
    }],
    icons: [{
      type: Input
    }],
    textCopy: [{
      type: Output
    }]
  });
})();
var NzTextEditComponent = class _NzTextEditComponent {
  ngZone;
  cdr;
  i18n;
  destroy$;
  editing = false;
  locale;
  text;
  icon = "edit";
  tooltip;
  startEditing = new EventEmitter();
  endEditing = new EventEmitter(true);
  set textarea(textarea) {
    this.textarea$.next(textarea);
  }
  autosizeDirective;
  beforeText;
  currentText;
  nativeElement = inject(ElementRef).nativeElement;
  // We could've saved the textarea within some private property (e.g. `_textarea`) and have a getter,
  // but having subject makes the code more reactive and cancellable (e.g. event listeners will be
  // automatically removed and re-added through the `switchMap` below).
  textarea$ = new BehaviorSubject(null);
  injector = inject(Injector);
  constructor(ngZone, cdr, i18n, destroy$) {
    this.ngZone = ngZone;
    this.cdr = cdr;
    this.i18n = i18n;
    this.destroy$ = destroy$;
  }
  ngOnInit() {
    this.i18n.localeChange.pipe(takeUntil(this.destroy$)).subscribe(() => {
      this.locale = this.i18n.getLocaleData("Text");
      this.cdr.markForCheck();
    });
    this.textarea$.pipe(switchMap((textarea) => fromEventOutsideAngular(textarea?.nativeElement, "keydown")), takeUntil(this.destroy$)).subscribe((event) => {
      if (event.keyCode !== ESCAPE && event.keyCode !== ENTER) {
        return;
      }
      this.ngZone.run(() => {
        if (event.keyCode === ESCAPE) {
          this.onCancel();
        } else {
          this.onEnter(event);
        }
        this.cdr.markForCheck();
      });
    });
    this.textarea$.pipe(switchMap((textarea) => fromEventOutsideAngular(textarea?.nativeElement, "input")), takeUntil(this.destroy$)).subscribe((event) => {
      this.currentText = event.target.value;
    });
  }
  onClick() {
    this.beforeText = this.text;
    this.currentText = this.beforeText;
    this.editing = true;
    this.startEditing.emit();
    this.focusAndSetValue();
  }
  confirm() {
    this.editing = false;
    this.endEditing.emit(this.currentText);
  }
  onEnter(event) {
    event.stopPropagation();
    event.preventDefault();
    this.confirm();
  }
  onCancel() {
    this.currentText = this.beforeText;
    this.confirm();
  }
  focusAndSetValue() {
    const {
      injector
    } = this;
    afterNextRender(() => {
      this.textarea$.pipe(
        // It may still not be available, so we need to wait until view queries
        // are executed during the change detection. It's safer to wait until
        // the query runs and the textarea is set on the behavior subject.
        first((textarea) => textarea != null),
        takeUntil(this.destroy$)
      ).subscribe((textarea) => {
        textarea.nativeElement.focus();
        textarea.nativeElement.value = this.currentText || "";
        this.autosizeDirective.resizeToFitContent();
        this.cdr.markForCheck();
      });
    }, {
      injector
    });
  }
  static \u0275fac = function NzTextEditComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _NzTextEditComponent)(\u0275\u0275directiveInject(NgZone), \u0275\u0275directiveInject(ChangeDetectorRef), \u0275\u0275directiveInject(NzI18nService), \u0275\u0275directiveInject(NzDestroyService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _NzTextEditComponent,
    selectors: [["nz-text-edit"]],
    viewQuery: function NzTextEditComponent_Query(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275viewQuery(_c04, 5);
        \u0275\u0275viewQuery(NzAutosizeDirective, 5);
      }
      if (rf & 2) {
        let _t;
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.textarea = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.autosizeDirective = _t.first);
      }
    },
    inputs: {
      text: "text",
      icon: "icon",
      tooltip: "tooltip"
    },
    outputs: {
      startEditing: "startEditing",
      endEditing: "endEditing"
    },
    exportAs: ["nzTextEdit"],
    features: [\u0275\u0275ProvidersFeature([NzDestroyService])],
    decls: 2,
    vars: 1,
    consts: [["textarea", ""], ["nz-tooltip", "", "nz-trans-button", "", 1, "ant-typography-edit", 3, "nzTooltipTitle"], ["nz-input", "", "nzAutosize", "", 3, "blur"], ["nz-trans-button", "", 1, "ant-typography-edit-content-confirm", 3, "click"], ["nzType", "enter"], ["nz-tooltip", "", "nz-trans-button", "", 1, "ant-typography-edit", 3, "click", "nzTooltipTitle"], [4, "nzStringTemplateOutlet"], [3, "nzType"]],
    template: function NzTextEditComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275template(0, NzTextEditComponent_Conditional_0_Template, 4, 0)(1, NzTextEditComponent_Conditional_1_Template, 2, 2, "button", 1);
      }
      if (rf & 2) {
        \u0275\u0275conditional(ctx.editing ? 0 : 1);
      }
    },
    dependencies: [NzInputModule, NzInputDirective, NzAutosizeDirective, NzTransButtonModule, NzTransButtonDirective, NzIconModule, NzIconDirective, NzToolTipModule, NzTooltipDirective, NzOutletModule, NzStringTemplateOutletDirective],
    encapsulation: 2,
    changeDetection: 0
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzTextEditComponent, [{
    type: Component,
    args: [{
      selector: "nz-text-edit",
      exportAs: "nzTextEdit",
      template: `
    @if (editing) {
      <textarea #textarea nz-input nzAutosize (blur)="confirm()"></textarea>
      <button nz-trans-button class="ant-typography-edit-content-confirm" (click)="confirm()">
        <nz-icon nzType="enter" />
      </button>
    } @else {
      <button
        nz-tooltip
        nz-trans-button
        class="ant-typography-edit"
        [nzTooltipTitle]="tooltip === null ? null : tooltip || locale?.edit"
        (click)="onClick()"
      >
        <ng-container *nzStringTemplateOutlet="icon; let icon">
          <nz-icon [nzType]="icon" />
        </ng-container>
      </button>
    }
  `,
      changeDetection: ChangeDetectionStrategy.OnPush,
      encapsulation: ViewEncapsulation.None,
      preserveWhitespaces: false,
      providers: [NzDestroyService],
      imports: [NzInputModule, NzTransButtonModule, NzIconModule, NzToolTipModule, NzOutletModule]
    }]
  }], () => [{
    type: NgZone
  }, {
    type: ChangeDetectorRef
  }, {
    type: NzI18nService
  }, {
    type: NzDestroyService
  }], {
    text: [{
      type: Input
    }],
    icon: [{
      type: Input
    }],
    tooltip: [{
      type: Input
    }],
    startEditing: [{
      type: Output
    }],
    endEditing: [{
      type: Output
    }],
    textarea: [{
      type: ViewChild,
      args: ["textarea", {
        static: false
      }]
    }],
    autosizeDirective: [{
      type: ViewChild,
      args: [NzAutosizeDirective, {
        static: false
      }]
    }]
  });
})();
var NZ_CONFIG_MODULE_NAME2 = "typography";
var EXPAND_ELEMENT_CLASSNAME = "ant-typography-expand";
var NzTypographyComponent = (() => {
  let _nzCopyTooltips_decorators;
  let _nzCopyTooltips_initializers = [];
  let _nzCopyTooltips_extraInitializers = [];
  let _nzCopyIcons_decorators;
  let _nzCopyIcons_initializers = [];
  let _nzCopyIcons_extraInitializers = [];
  let _nzEditTooltip_decorators;
  let _nzEditTooltip_initializers = [];
  let _nzEditTooltip_extraInitializers = [];
  let _nzEditIcon_decorators;
  let _nzEditIcon_initializers = [];
  let _nzEditIcon_extraInitializers = [];
  let _nzEllipsisRows_decorators;
  let _nzEllipsisRows_initializers = [];
  let _nzEllipsisRows_extraInitializers = [];
  return class NzTypographyComponent2 {
    static {
      const _metadata = typeof Symbol === "function" && Symbol.metadata ? /* @__PURE__ */ Object.create(null) : void 0;
      _nzCopyTooltips_decorators = [WithConfig()];
      _nzCopyIcons_decorators = [WithConfig()];
      _nzEditTooltip_decorators = [WithConfig()];
      _nzEditIcon_decorators = [WithConfig()];
      _nzEllipsisRows_decorators = [WithConfig()];
      __esDecorate(null, null, _nzCopyTooltips_decorators, {
        kind: "field",
        name: "nzCopyTooltips",
        static: false,
        private: false,
        access: {
          has: (obj) => "nzCopyTooltips" in obj,
          get: (obj) => obj.nzCopyTooltips,
          set: (obj, value) => {
            obj.nzCopyTooltips = value;
          }
        },
        metadata: _metadata
      }, _nzCopyTooltips_initializers, _nzCopyTooltips_extraInitializers);
      __esDecorate(null, null, _nzCopyIcons_decorators, {
        kind: "field",
        name: "nzCopyIcons",
        static: false,
        private: false,
        access: {
          has: (obj) => "nzCopyIcons" in obj,
          get: (obj) => obj.nzCopyIcons,
          set: (obj, value) => {
            obj.nzCopyIcons = value;
          }
        },
        metadata: _metadata
      }, _nzCopyIcons_initializers, _nzCopyIcons_extraInitializers);
      __esDecorate(null, null, _nzEditTooltip_decorators, {
        kind: "field",
        name: "nzEditTooltip",
        static: false,
        private: false,
        access: {
          has: (obj) => "nzEditTooltip" in obj,
          get: (obj) => obj.nzEditTooltip,
          set: (obj, value) => {
            obj.nzEditTooltip = value;
          }
        },
        metadata: _metadata
      }, _nzEditTooltip_initializers, _nzEditTooltip_extraInitializers);
      __esDecorate(null, null, _nzEditIcon_decorators, {
        kind: "field",
        name: "nzEditIcon",
        static: false,
        private: false,
        access: {
          has: (obj) => "nzEditIcon" in obj,
          get: (obj) => obj.nzEditIcon,
          set: (obj, value) => {
            obj.nzEditIcon = value;
          }
        },
        metadata: _metadata
      }, _nzEditIcon_initializers, _nzEditIcon_extraInitializers);
      __esDecorate(null, null, _nzEllipsisRows_decorators, {
        kind: "field",
        name: "nzEllipsisRows",
        static: false,
        private: false,
        access: {
          has: (obj) => "nzEllipsisRows" in obj,
          get: (obj) => obj.nzEllipsisRows,
          set: (obj, value) => {
            obj.nzEllipsisRows = value;
          }
        },
        metadata: _metadata
      }, _nzEllipsisRows_initializers, _nzEllipsisRows_extraInitializers);
      if (_metadata) Object.defineProperty(this, Symbol.metadata, {
        enumerable: true,
        configurable: true,
        writable: true,
        value: _metadata
      });
    }
    nzConfigService;
    host;
    cdr;
    viewContainerRef;
    renderer;
    platform;
    i18n;
    resizeService;
    directionality;
    _nzModuleName = NZ_CONFIG_MODULE_NAME2;
    nzCopyable = false;
    nzEditable = false;
    nzDisabled = false;
    nzExpandable = false;
    nzEllipsis = false;
    nzCopyTooltips = __runInitializers(this, _nzCopyTooltips_initializers, void 0);
    nzCopyIcons = (__runInitializers(this, _nzCopyTooltips_extraInitializers), __runInitializers(this, _nzCopyIcons_initializers, ["copy", "check"]));
    nzEditTooltip = (__runInitializers(this, _nzCopyIcons_extraInitializers), __runInitializers(this, _nzEditTooltip_initializers, void 0));
    nzEditIcon = (__runInitializers(this, _nzEditTooltip_extraInitializers), __runInitializers(this, _nzEditIcon_initializers, "edit"));
    nzContent = __runInitializers(this, _nzEditIcon_extraInitializers);
    nzEllipsisRows = __runInitializers(this, _nzEllipsisRows_initializers, 1);
    nzType = __runInitializers(this, _nzEllipsisRows_extraInitializers);
    nzCopyText;
    nzSuffix;
    nzContentChange = new EventEmitter();
    nzCopy = new EventEmitter();
    nzExpandChange = new EventEmitter();
    // This is not a two-way binding output with {@link nzEllipsis}
    nzOnEllipsis = new EventEmitter();
    textEditRef;
    textCopyRef;
    ellipsisContainer;
    expandableBtn;
    contentTemplate;
    locale;
    document = inject(DOCUMENT);
    expandableBtnElementCache = null;
    editing = false;
    ellipsisText;
    cssEllipsis = false;
    isEllipsis = true;
    expanded = false;
    ellipsisStr = "...";
    dir = "ltr";
    get hasEllipsisObservers() {
      return this.nzOnEllipsis.observers.length > 0;
    }
    get canCssEllipsis() {
      return this.nzEllipsis && this.cssEllipsis && !this.expanded && !this.hasEllipsisObservers;
    }
    get hasOperationsWithEllipsis() {
      return (this.nzCopyable || this.nzEditable || this.nzExpandable) && this.nzEllipsis;
    }
    viewInit = false;
    rfaId = -1;
    destroy$ = new Subject();
    windowResizeSubscription = Subscription.EMPTY;
    get copyText() {
      return typeof this.nzCopyText === "string" ? this.nzCopyText : this.nzContent;
    }
    constructor(nzConfigService, host, cdr, viewContainerRef, renderer, platform, i18n, resizeService, directionality) {
      this.nzConfigService = nzConfigService;
      this.host = host;
      this.cdr = cdr;
      this.viewContainerRef = viewContainerRef;
      this.renderer = renderer;
      this.platform = platform;
      this.i18n = i18n;
      this.resizeService = resizeService;
      this.directionality = directionality;
    }
    onTextCopy(text) {
      this.nzCopy.emit(text);
    }
    onStartEditing() {
      this.editing = true;
    }
    onEndEditing(text) {
      this.editing = false;
      this.nzContentChange.emit(text);
      if (this.nzContent === text) {
        this.renderOnNextFrame();
      }
      this.cdr.markForCheck();
    }
    onExpand() {
      this.isEllipsis = false;
      this.expanded = true;
      this.nzExpandChange.emit();
      this.nzOnEllipsis.emit(false);
    }
    canUseCSSEllipsis() {
      if (this.nzEditable || this.nzCopyable || this.nzExpandable || this.nzSuffix) {
        return false;
      }
      if (this.hasEllipsisObservers) {
        return false;
      }
      if (this.nzEllipsisRows === 1) {
        return isStyleSupport("textOverflow");
      } else {
        return isStyleSupport("webkitLineClamp");
      }
    }
    renderOnNextFrame() {
      cancelRequestAnimationFrame(this.rfaId);
      if (!this.viewInit || !this.nzEllipsis || this.nzEllipsisRows < 0 || this.expanded || !this.platform.isBrowser) {
        return;
      }
      this.rfaId = reqAnimFrame(() => {
        this.syncEllipsis();
      });
    }
    getOriginContentViewRef() {
      const viewRef = this.viewContainerRef.createEmbeddedView(this.contentTemplate, {
        content: this.nzContent
      });
      viewRef.detectChanges();
      return {
        viewRef,
        removeView: () => {
          this.viewContainerRef.remove(this.viewContainerRef.indexOf(viewRef));
        }
      };
    }
    syncEllipsis() {
      if (this.cssEllipsis) {
        return;
      }
      const {
        viewRef,
        removeView
      } = this.getOriginContentViewRef();
      const fixedNodes = [this.textCopyRef, this.textEditRef].filter((e) => e && e.nativeElement).map((e) => e.nativeElement);
      const expandableBtnElement = this.getExpandableBtnElement();
      if (expandableBtnElement) {
        fixedNodes.push(expandableBtnElement);
      }
      const {
        contentNodes,
        text,
        ellipsis
      } = measure(this.host.nativeElement, this.nzEllipsisRows, viewRef.rootNodes, fixedNodes, this.ellipsisStr, this.nzSuffix);
      removeView();
      this.ellipsisText = text;
      if (ellipsis !== this.isEllipsis) {
        this.isEllipsis = ellipsis;
        this.nzOnEllipsis.emit(ellipsis);
      }
      const ellipsisContainerNativeElement = this.ellipsisContainer.nativeElement;
      while (ellipsisContainerNativeElement.firstChild) {
        this.renderer.removeChild(ellipsisContainerNativeElement, ellipsisContainerNativeElement.firstChild);
      }
      contentNodes.forEach((n) => {
        this.renderer.appendChild(ellipsisContainerNativeElement, n.cloneNode(true));
      });
      this.cdr.markForCheck();
    }
    // Need to create the element for calculation size before view init
    getExpandableBtnElement() {
      if (this.nzExpandable) {
        const expandText = this.locale ? this.locale.expand : "";
        const cache = this.expandableBtnElementCache;
        if (!cache || cache.innerText === expandText) {
          const el = this.document.createElement("a");
          el.className = EXPAND_ELEMENT_CLASSNAME;
          el.innerText = expandText;
          this.expandableBtnElementCache = el;
        }
        return this.expandableBtnElementCache;
      } else {
        this.expandableBtnElementCache = null;
        return null;
      }
    }
    renderAndSubscribeWindowResize() {
      if (this.platform.isBrowser) {
        this.windowResizeSubscription.unsubscribe();
        this.cssEllipsis = this.canUseCSSEllipsis();
        this.renderOnNextFrame();
        this.windowResizeSubscription = this.resizeService.subscribe().pipe(takeUntil(this.destroy$)).subscribe(() => this.renderOnNextFrame());
      }
    }
    ngOnInit() {
      this.i18n.localeChange.pipe(takeUntil(this.destroy$)).subscribe(() => {
        this.locale = this.i18n.getLocaleData("Text");
        this.cdr.markForCheck();
      });
      this.directionality.change?.pipe(takeUntil(this.destroy$)).subscribe((direction) => {
        this.dir = direction;
        this.cdr.detectChanges();
      });
      this.dir = this.directionality.value;
    }
    ngAfterViewInit() {
      this.viewInit = true;
      this.renderAndSubscribeWindowResize();
    }
    ngOnChanges(changes) {
      const {
        nzCopyable,
        nzEditable,
        nzExpandable,
        nzEllipsis,
        nzContent,
        nzEllipsisRows,
        nzSuffix
      } = changes;
      if (nzCopyable || nzEditable || nzExpandable || nzEllipsis || nzContent || nzEllipsisRows || nzSuffix) {
        if (this.nzEllipsis) {
          if (this.expanded) {
            this.windowResizeSubscription.unsubscribe();
          } else {
            this.renderAndSubscribeWindowResize();
          }
        }
      }
    }
    ngOnDestroy() {
      this.destroy$.next(true);
      this.destroy$.complete();
      this.expandableBtnElementCache = null;
      this.windowResizeSubscription.unsubscribe();
    }
    static \u0275fac = function NzTypographyComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || NzTypographyComponent2)(\u0275\u0275directiveInject(NzConfigService), \u0275\u0275directiveInject(ElementRef), \u0275\u0275directiveInject(ChangeDetectorRef), \u0275\u0275directiveInject(ViewContainerRef), \u0275\u0275directiveInject(Renderer2), \u0275\u0275directiveInject(Platform), \u0275\u0275directiveInject(NzI18nService), \u0275\u0275directiveInject(NzResizeService), \u0275\u0275directiveInject(Directionality));
    };
    static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
      type: NzTypographyComponent2,
      selectors: [["nz-typography"], ["", "nz-typography", ""], ["p", "nz-paragraph", ""], ["span", "nz-text", ""], ["h1", "nz-title", ""], ["h2", "nz-title", ""], ["h3", "nz-title", ""], ["h4", "nz-title", ""]],
      viewQuery: function NzTypographyComponent_Query(rf, ctx) {
        if (rf & 1) {
          \u0275\u0275viewQuery(NzTextEditComponent, 5);
          \u0275\u0275viewQuery(NzTextCopyComponent, 5);
          \u0275\u0275viewQuery(_c12, 5);
          \u0275\u0275viewQuery(_c22, 5);
          \u0275\u0275viewQuery(_c32, 5);
        }
        if (rf & 2) {
          let _t;
          \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.textEditRef = _t.first);
          \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.textCopyRef = _t.first);
          \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.ellipsisContainer = _t.first);
          \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.expandableBtn = _t.first);
          \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.contentTemplate = _t.first);
        }
      },
      hostVars: 26,
      hostBindings: function NzTypographyComponent_HostBindings(rf, ctx) {
        if (rf & 2) {
          \u0275\u0275styleProp("-webkit-line-clamp", ctx.canCssEllipsis && ctx.nzEllipsisRows > 1 ? ctx.nzEllipsisRows : null);
          \u0275\u0275classProp("ant-typography", !ctx.editing)("ant-typography-rtl", ctx.dir === "rtl")("ant-typography-edit-content", ctx.editing)("ant-typography-secondary", ctx.nzType === "secondary")("ant-typography-warning", ctx.nzType === "warning")("ant-typography-danger", ctx.nzType === "danger")("ant-typography-success", ctx.nzType === "success")("ant-typography-disabled", ctx.nzDisabled)("ant-typography-ellipsis", ctx.nzEllipsis && !ctx.expanded)("ant-typography-single-line", ctx.nzEllipsis && ctx.nzEllipsisRows === 1)("ant-typography-ellipsis-single-line", ctx.canCssEllipsis && ctx.nzEllipsisRows === 1)("ant-typography-ellipsis-multiple-line", ctx.canCssEllipsis && ctx.nzEllipsisRows > 1);
        }
      },
      inputs: {
        nzCopyable: [2, "nzCopyable", "nzCopyable", booleanAttribute],
        nzEditable: [2, "nzEditable", "nzEditable", booleanAttribute],
        nzDisabled: [2, "nzDisabled", "nzDisabled", booleanAttribute],
        nzExpandable: [2, "nzExpandable", "nzExpandable", booleanAttribute],
        nzEllipsis: [2, "nzEllipsis", "nzEllipsis", booleanAttribute],
        nzCopyTooltips: "nzCopyTooltips",
        nzCopyIcons: "nzCopyIcons",
        nzEditTooltip: "nzEditTooltip",
        nzEditIcon: "nzEditIcon",
        nzContent: "nzContent",
        nzEllipsisRows: [2, "nzEllipsisRows", "nzEllipsisRows", numberAttribute],
        nzType: "nzType",
        nzCopyText: "nzCopyText",
        nzSuffix: "nzSuffix"
      },
      outputs: {
        nzContentChange: "nzContentChange",
        nzCopy: "nzCopy",
        nzExpandChange: "nzExpandChange",
        nzOnEllipsis: "nzOnEllipsis"
      },
      exportAs: ["nzTypography"],
      features: [\u0275\u0275NgOnChangesFeature],
      ngContentSelectors: _c42,
      decls: 5,
      vars: 3,
      consts: [["contentTemplate", ""], ["ellipsisContainer", ""], ["expandable", ""], [3, "text", "icon", "tooltip"], [3, "text", "tooltips", "icons"], [3, "ngTemplateOutlet", "ngTemplateOutletContext"], [1, "ant-typography-expand"], [1, "ant-typography-expand", 3, "click"], [3, "endEditing", "startEditing", "text", "icon", "tooltip"], [3, "textCopy", "text", "tooltips", "icons"]],
      template: function NzTypographyComponent_Template(rf, ctx) {
        if (rf & 1) {
          \u0275\u0275projectionDef();
          \u0275\u0275template(0, NzTypographyComponent_ng_template_0_Template, 2, 2, "ng-template", null, 0, \u0275\u0275templateRefExtractor)(2, NzTypographyComponent_Conditional_2_Template, 2, 1)(3, NzTypographyComponent_Conditional_3_Template, 1, 3, "nz-text-edit", 3)(4, NzTypographyComponent_Conditional_4_Template, 1, 3, "nz-text-copy", 4);
        }
        if (rf & 2) {
          \u0275\u0275advance(2);
          \u0275\u0275conditional(!ctx.editing ? 2 : -1);
          \u0275\u0275advance();
          \u0275\u0275conditional(ctx.nzEditable ? 3 : -1);
          \u0275\u0275advance();
          \u0275\u0275conditional(ctx.nzCopyable && !ctx.editing ? 4 : -1);
        }
      },
      dependencies: [NgTemplateOutlet, NzTextEditComponent, NzTextCopyComponent],
      encapsulation: 2,
      changeDetection: 0
    });
  };
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzTypographyComponent, [{
    type: Component,
    args: [{
      selector: `
  nz-typography,
  [nz-typography],
  p[nz-paragraph],
  span[nz-text],
  h1[nz-title], h2[nz-title], h3[nz-title], h4[nz-title]
  `,
      exportAs: "nzTypography",
      template: `
    <ng-template #contentTemplate let-content="content">
      @if (!content) {
        <ng-content></ng-content>
      }
      {{ content }}
    </ng-template>
    @if (!editing) {
      @if (
        expanded ||
        (!hasOperationsWithEllipsis && nzEllipsisRows === 1 && !hasEllipsisObservers) ||
        canCssEllipsis ||
        (nzSuffix && expanded)
      ) {
        <ng-template
          [ngTemplateOutlet]="contentTemplate"
          [ngTemplateOutletContext]="{ content: nzContent }"
        ></ng-template>
        @if (nzSuffix) {
          {{ nzSuffix }}
        }
      } @else {
        <span #ellipsisContainer></span>
        @if (isEllipsis) {
          {{ ellipsisStr }}
        }
        @if (nzSuffix) {
          {{ nzSuffix }}
        }
        @if (nzExpandable && isEllipsis) {
          <a #expandable class="ant-typography-expand" (click)="onExpand()">
            {{ locale?.expand }}
          </a>
        }
      }
    }

    @if (nzEditable) {
      <nz-text-edit
        [text]="nzContent"
        [icon]="nzEditIcon"
        [tooltip]="nzEditTooltip"
        (endEditing)="onEndEditing($event)"
        (startEditing)="onStartEditing()"
      ></nz-text-edit>
    }

    @if (nzCopyable && !editing) {
      <nz-text-copy
        [text]="copyText"
        [tooltips]="nzCopyTooltips"
        [icons]="nzCopyIcons"
        (textCopy)="onTextCopy($event)"
      ></nz-text-copy>
    }
  `,
      changeDetection: ChangeDetectionStrategy.OnPush,
      encapsulation: ViewEncapsulation.None,
      preserveWhitespaces: false,
      host: {
        "[class.ant-typography]": "!editing",
        "[class.ant-typography-rtl]": 'dir === "rtl"',
        "[class.ant-typography-edit-content]": "editing",
        "[class.ant-typography-secondary]": 'nzType === "secondary"',
        "[class.ant-typography-warning]": 'nzType === "warning"',
        "[class.ant-typography-danger]": 'nzType === "danger"',
        "[class.ant-typography-success]": 'nzType === "success"',
        "[class.ant-typography-disabled]": "nzDisabled",
        "[class.ant-typography-ellipsis]": "nzEllipsis && !expanded",
        "[class.ant-typography-single-line]": "nzEllipsis && nzEllipsisRows === 1",
        "[class.ant-typography-ellipsis-single-line]": "canCssEllipsis && nzEllipsisRows === 1",
        "[class.ant-typography-ellipsis-multiple-line]": "canCssEllipsis && nzEllipsisRows > 1",
        "[style.-webkit-line-clamp]": "(canCssEllipsis && nzEllipsisRows > 1) ? nzEllipsisRows : null"
      },
      imports: [NgTemplateOutlet, NzTextEditComponent, NzTextCopyComponent]
    }]
  }], () => [{
    type: NzConfigService
  }, {
    type: ElementRef
  }, {
    type: ChangeDetectorRef
  }, {
    type: ViewContainerRef
  }, {
    type: Renderer2
  }, {
    type: Platform
  }, {
    type: NzI18nService
  }, {
    type: NzResizeService
  }, {
    type: Directionality
  }], {
    nzCopyable: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    nzEditable: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    nzDisabled: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    nzExpandable: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    nzEllipsis: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    nzCopyTooltips: [{
      type: Input
    }],
    nzCopyIcons: [{
      type: Input
    }],
    nzEditTooltip: [{
      type: Input
    }],
    nzEditIcon: [{
      type: Input
    }],
    nzContent: [{
      type: Input
    }],
    nzEllipsisRows: [{
      type: Input,
      args: [{
        transform: numberAttribute
      }]
    }],
    nzType: [{
      type: Input
    }],
    nzCopyText: [{
      type: Input
    }],
    nzSuffix: [{
      type: Input
    }],
    nzContentChange: [{
      type: Output
    }],
    nzCopy: [{
      type: Output
    }],
    nzExpandChange: [{
      type: Output
    }],
    nzOnEllipsis: [{
      type: Output
    }],
    textEditRef: [{
      type: ViewChild,
      args: [NzTextEditComponent, {
        static: false
      }]
    }],
    textCopyRef: [{
      type: ViewChild,
      args: [NzTextCopyComponent, {
        static: false
      }]
    }],
    ellipsisContainer: [{
      type: ViewChild,
      args: ["ellipsisContainer", {
        static: false
      }]
    }],
    expandableBtn: [{
      type: ViewChild,
      args: ["expandable", {
        static: false
      }]
    }],
    contentTemplate: [{
      type: ViewChild,
      args: ["contentTemplate", {
        static: false
      }]
    }]
  });
})();
var NzTypographyModule = class _NzTypographyModule {
  static \u0275fac = function NzTypographyModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _NzTypographyModule)();
  };
  static \u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
    type: _NzTypographyModule
  });
  static \u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({
    imports: [NzTypographyComponent, NzTextCopyComponent, NzTextEditComponent]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzTypographyModule, [{
    type: NgModule,
    args: [{
      imports: [NzTypographyComponent, NzTextCopyComponent, NzTextEditComponent],
      exports: [NzTypographyComponent, NzTextCopyComponent, NzTextEditComponent]
    }]
  }], null, null);
})();

export {
  NzGridModule,
  NzMenuItemComponent,
  NzMenuDirective,
  NzMenuModule,
  NzDropDownDirective,
  NzDropdownMenuComponent,
  NzBreadCrumbItemComponent,
  NzBreadCrumbComponent,
  NzBreadCrumbModule,
  NzTypographyModule
};
//# sourceMappingURL=chunk-OUZASSRG.js.map
