import {
  NzNoAnimationDirective
} from "./chunk-BNJ4MUQB.js";
import {
  CandyDate,
  DATE_PICKER_POSITION_MAP,
  DEFAULT_DATE_PICKER_POSITIONS,
  DateHelperService,
  NzConnectedOverlayDirective,
  NzI18nModule,
  NzI18nPipe,
  NzI18nService,
  NzOverlayModule,
  POSITION_MAP,
  cloneDate,
  getPlacementName,
  isValid,
  normalizeRangeValue,
  startOfQuarter,
  wrongSortOrder
} from "./chunk-K7WFS432.js";
import {
  environment
} from "./chunk-ESXVDBVT.js";
import {
  MatCommonModule
} from "./chunk-WG6I7YZH.js";
import {
  slideMotion,
  zoomBadgeMotion
} from "./chunk-QJYZSRL2.js";
import {
  CdkConnectedOverlay,
  CdkFixedSizeVirtualScroll,
  CdkOverlayOrigin,
  CdkPortalOutlet,
  CdkVirtualForOf,
  CdkVirtualScrollViewport,
  ComponentPortal,
  OverlayModule,
  PortalModule,
  TemplatePortal
} from "./chunk-RUUFL2BH.js";
import {
  NzFormItemFeedbackIconComponent,
  NzFormNoStatusService,
  NzFormStatusService
} from "./chunk-IHMVYCI2.js";
import {
  COMPOSITION_BUFFER_MODE,
  DefaultValueAccessor,
  FormsModule,
  NG_VALUE_ACCESSOR,
  NgControlStatus,
  NgModel
} from "./chunk-X4ULZSL7.js";
import {
  FocusMonitor
} from "./chunk-B6PCS4YX.js";
import {
  NZ_SPACE_COMPACT_ITEM_TYPE,
  NZ_SPACE_COMPACT_SIZE,
  NzButtonComponent,
  NzButtonModule,
  NzDestroyService,
  NzOutletModule,
  NzSpaceCompactItemDirective,
  NzStringTemplateOutletDirective,
  NzTransitionPatchDirective,
  NzWaveDirective,
  cancelRequestAnimationFrame,
  reqAnimFrame,
  takeUntilDestroyed
} from "./chunk-WXYLYLSJ.js";
import {
  NzConfigService,
  NzIconDirective,
  NzIconModule,
  WithConfig,
  fromEventOutsideAngular,
  getStatusClassNames,
  isNil,
  isNotNil,
  numberAttributeWithInfinityFallback,
  toBoolean,
  valueFunctionProp,
  warn
} from "./chunk-TIW6MRUB.js";
import {
  AsyncPipe,
  BACKSPACE,
  DOCUMENT,
  DOWN_ARROW,
  DecimalPipe,
  Directionality,
  ENTER,
  ESCAPE,
  HttpClient,
  NgTemplateOutlet,
  Platform,
  SPACE,
  TAB,
  UP_ARROW,
  _getEventTarget,
  coerceElement,
  isPlatformBrowser
} from "./chunk-IOJADCVY.js";
import {
  ANIMATION_MODULE_TYPE,
  BehaviorSubject,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ContentChild,
  ContentChildren,
  DestroyRef,
  Directive,
  ElementRef,
  EventEmitter,
  Injectable,
  InjectionToken,
  Injector,
  Input,
  NgModule,
  NgZone,
  Observable,
  Output,
  PLATFORM_ID,
  Renderer2,
  ReplaySubject,
  Subject,
  TemplateRef,
  Type,
  ViewChild,
  ViewChildren,
  ViewContainerRef,
  ViewEncapsulation,
  __esDecorate,
  __runInitializers,
  __spreadProps,
  __spreadValues,
  booleanAttribute,
  combineLatest,
  computed,
  distinctUntilChanged,
  forwardRef,
  inject,
  map,
  merge,
  numberAttribute,
  of,
  setClassMetadata,
  signal,
  startWith,
  switchMap,
  takeUntil,
  withLatestFrom,
  ɵɵHostDirectivesFeature,
  ɵɵInheritDefinitionFeature,
  ɵɵNgOnChangesFeature,
  ɵɵProvidersFeature,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵclassMap,
  ɵɵclassMapInterpolate1,
  ɵɵclassMapInterpolate2,
  ɵɵclassMapInterpolate4,
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
  ɵɵgetInheritedFactory,
  ɵɵinject,
  ɵɵlistener,
  ɵɵloadQuery,
  ɵɵnamespaceHTML,
  ɵɵnamespaceSVG,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵpipeBind2,
  ɵɵprojection,
  ɵɵprojectionDef,
  ɵɵproperty,
  ɵɵpropertyInterpolate,
  ɵɵpureFunction0,
  ɵɵpureFunction1,
  ɵɵqueryRefresh,
  ɵɵreference,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIdentity,
  ɵɵrepeaterTrackByIndex,
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
  ɵɵtextInterpolate2,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty,
  ɵɵviewQuery
} from "./chunk-CO622P43.js";

// node_modules/@angular/material/fesm2022/progress-spinner.mjs
var _c0 = ["determinateSpinner"];
function MatProgressSpinner_ng_template_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(0, "svg", 11);
    \u0275\u0275element(1, "circle", 12);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275attribute("viewBox", ctx_r0._viewBox());
    \u0275\u0275advance();
    \u0275\u0275styleProp("stroke-dasharray", ctx_r0._strokeCircumference(), "px")("stroke-dashoffset", ctx_r0._strokeCircumference() / 2, "px")("stroke-width", ctx_r0._circleStrokeWidth(), "%");
    \u0275\u0275attribute("r", ctx_r0._circleRadius());
  }
}
var MAT_PROGRESS_SPINNER_DEFAULT_OPTIONS = new InjectionToken("mat-progress-spinner-default-options", {
  providedIn: "root",
  factory: MAT_PROGRESS_SPINNER_DEFAULT_OPTIONS_FACTORY
});
function MAT_PROGRESS_SPINNER_DEFAULT_OPTIONS_FACTORY() {
  return {
    diameter: BASE_SIZE
  };
}
var BASE_SIZE = 100;
var BASE_STROKE_WIDTH = 10;
var MatProgressSpinner = class _MatProgressSpinner {
  _elementRef = inject(ElementRef);
  /** Whether the _mat-animation-noopable class should be applied, disabling animations.  */
  _noopAnimations;
  // TODO: should be typed as `ThemePalette` but internal apps pass in arbitrary strings.
  /**
   * Theme color of the progress spinner. This API is supported in M2 themes only, it
   * has no effect in M3 themes. For color customization in M3, see https://material.angular.io/components/progress-spinner/styling.
   *
   * For information on applying color variants in M3, see
   * https://material.angular.io/guide/material-2-theming#optional-add-backwards-compatibility-styles-for-color-variants
   */
  get color() {
    return this._color || this._defaultColor;
  }
  set color(value) {
    this._color = value;
  }
  _color;
  _defaultColor = "primary";
  /** The element of the determinate spinner. */
  _determinateCircle;
  constructor() {
    const animationMode = inject(ANIMATION_MODULE_TYPE, {
      optional: true
    });
    const defaults = inject(MAT_PROGRESS_SPINNER_DEFAULT_OPTIONS);
    this._noopAnimations = animationMode === "NoopAnimations" && !!defaults && !defaults._forceAnimations;
    this.mode = this._elementRef.nativeElement.nodeName.toLowerCase() === "mat-spinner" ? "indeterminate" : "determinate";
    if (defaults) {
      if (defaults.color) {
        this.color = this._defaultColor = defaults.color;
      }
      if (defaults.diameter) {
        this.diameter = defaults.diameter;
      }
      if (defaults.strokeWidth) {
        this.strokeWidth = defaults.strokeWidth;
      }
    }
  }
  /**
   * Mode of the progress bar.
   *
   * Input must be one of these values: determinate, indeterminate, buffer, query, defaults to
   * 'determinate'.
   * Mirrored to mode attribute.
   */
  mode;
  /** Value of the progress bar. Defaults to zero. Mirrored to aria-valuenow. */
  get value() {
    return this.mode === "determinate" ? this._value : 0;
  }
  set value(v) {
    this._value = Math.max(0, Math.min(100, v || 0));
  }
  _value = 0;
  /** The diameter of the progress spinner (will set width and height of svg). */
  get diameter() {
    return this._diameter;
  }
  set diameter(size) {
    this._diameter = size || 0;
  }
  _diameter = BASE_SIZE;
  /** Stroke width of the progress spinner. */
  get strokeWidth() {
    return this._strokeWidth ?? this.diameter / 10;
  }
  set strokeWidth(value) {
    this._strokeWidth = value || 0;
  }
  _strokeWidth;
  /** The radius of the spinner, adjusted for stroke width. */
  _circleRadius() {
    return (this.diameter - BASE_STROKE_WIDTH) / 2;
  }
  /** The view box of the spinner's svg element. */
  _viewBox() {
    const viewBox = this._circleRadius() * 2 + this.strokeWidth;
    return `0 0 ${viewBox} ${viewBox}`;
  }
  /** The stroke circumference of the svg circle. */
  _strokeCircumference() {
    return 2 * Math.PI * this._circleRadius();
  }
  /** The dash offset of the svg circle. */
  _strokeDashOffset() {
    if (this.mode === "determinate") {
      return this._strokeCircumference() * (100 - this._value) / 100;
    }
    return null;
  }
  /** Stroke width of the circle in percent. */
  _circleStrokeWidth() {
    return this.strokeWidth / this.diameter * 100;
  }
  static \u0275fac = function MatProgressSpinner_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _MatProgressSpinner)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _MatProgressSpinner,
    selectors: [["mat-progress-spinner"], ["mat-spinner"]],
    viewQuery: function MatProgressSpinner_Query(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275viewQuery(_c0, 5);
      }
      if (rf & 2) {
        let _t;
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx._determinateCircle = _t.first);
      }
    },
    hostAttrs: ["role", "progressbar", "tabindex", "-1", 1, "mat-mdc-progress-spinner", "mdc-circular-progress"],
    hostVars: 18,
    hostBindings: function MatProgressSpinner_HostBindings(rf, ctx) {
      if (rf & 2) {
        \u0275\u0275attribute("aria-valuemin", 0)("aria-valuemax", 100)("aria-valuenow", ctx.mode === "determinate" ? ctx.value : null)("mode", ctx.mode);
        \u0275\u0275classMap("mat-" + ctx.color);
        \u0275\u0275styleProp("width", ctx.diameter, "px")("height", ctx.diameter, "px")("--mdc-circular-progress-size", ctx.diameter + "px")("--mdc-circular-progress-active-indicator-width", ctx.diameter + "px");
        \u0275\u0275classProp("_mat-animation-noopable", ctx._noopAnimations)("mdc-circular-progress--indeterminate", ctx.mode === "indeterminate");
      }
    },
    inputs: {
      color: "color",
      mode: "mode",
      value: [2, "value", "value", numberAttribute],
      diameter: [2, "diameter", "diameter", numberAttribute],
      strokeWidth: [2, "strokeWidth", "strokeWidth", numberAttribute]
    },
    exportAs: ["matProgressSpinner"],
    decls: 14,
    vars: 11,
    consts: [["circle", ""], ["determinateSpinner", ""], ["aria-hidden", "true", 1, "mdc-circular-progress__determinate-container"], ["xmlns", "http://www.w3.org/2000/svg", "focusable", "false", 1, "mdc-circular-progress__determinate-circle-graphic"], ["cx", "50%", "cy", "50%", 1, "mdc-circular-progress__determinate-circle"], ["aria-hidden", "true", 1, "mdc-circular-progress__indeterminate-container"], [1, "mdc-circular-progress__spinner-layer"], [1, "mdc-circular-progress__circle-clipper", "mdc-circular-progress__circle-left"], [3, "ngTemplateOutlet"], [1, "mdc-circular-progress__gap-patch"], [1, "mdc-circular-progress__circle-clipper", "mdc-circular-progress__circle-right"], ["xmlns", "http://www.w3.org/2000/svg", "focusable", "false", 1, "mdc-circular-progress__indeterminate-circle-graphic"], ["cx", "50%", "cy", "50%"]],
    template: function MatProgressSpinner_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275template(0, MatProgressSpinner_ng_template_0_Template, 2, 8, "ng-template", null, 0, \u0275\u0275templateRefExtractor);
        \u0275\u0275elementStart(2, "div", 2, 1);
        \u0275\u0275namespaceSVG();
        \u0275\u0275elementStart(4, "svg", 3);
        \u0275\u0275element(5, "circle", 4);
        \u0275\u0275elementEnd()();
        \u0275\u0275namespaceHTML();
        \u0275\u0275elementStart(6, "div", 5)(7, "div", 6)(8, "div", 7);
        \u0275\u0275elementContainer(9, 8);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(10, "div", 9);
        \u0275\u0275elementContainer(11, 8);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(12, "div", 10);
        \u0275\u0275elementContainer(13, 8);
        \u0275\u0275elementEnd()()();
      }
      if (rf & 2) {
        const circle_r2 = \u0275\u0275reference(1);
        \u0275\u0275advance(4);
        \u0275\u0275attribute("viewBox", ctx._viewBox());
        \u0275\u0275advance();
        \u0275\u0275styleProp("stroke-dasharray", ctx._strokeCircumference(), "px")("stroke-dashoffset", ctx._strokeDashOffset(), "px")("stroke-width", ctx._circleStrokeWidth(), "%");
        \u0275\u0275attribute("r", ctx._circleRadius());
        \u0275\u0275advance(4);
        \u0275\u0275property("ngTemplateOutlet", circle_r2);
        \u0275\u0275advance(2);
        \u0275\u0275property("ngTemplateOutlet", circle_r2);
        \u0275\u0275advance(2);
        \u0275\u0275property("ngTemplateOutlet", circle_r2);
      }
    },
    dependencies: [NgTemplateOutlet],
    styles: [".mat-mdc-progress-spinner{display:block;overflow:hidden;line-height:0;position:relative;direction:ltr;transition:opacity 250ms cubic-bezier(0.4, 0, 0.6, 1)}.mat-mdc-progress-spinner circle{stroke-width:var(--mdc-circular-progress-active-indicator-width, 4px)}.mat-mdc-progress-spinner._mat-animation-noopable,.mat-mdc-progress-spinner._mat-animation-noopable .mdc-circular-progress__determinate-circle{transition:none !important}.mat-mdc-progress-spinner._mat-animation-noopable .mdc-circular-progress__indeterminate-circle-graphic,.mat-mdc-progress-spinner._mat-animation-noopable .mdc-circular-progress__spinner-layer,.mat-mdc-progress-spinner._mat-animation-noopable .mdc-circular-progress__indeterminate-container{animation:none !important}.mat-mdc-progress-spinner._mat-animation-noopable .mdc-circular-progress__indeterminate-container circle{stroke-dasharray:0 !important}@media(forced-colors: active){.mat-mdc-progress-spinner .mdc-circular-progress__indeterminate-circle-graphic,.mat-mdc-progress-spinner .mdc-circular-progress__determinate-circle{stroke:currentColor;stroke:CanvasText}}.mdc-circular-progress__determinate-container,.mdc-circular-progress__indeterminate-circle-graphic,.mdc-circular-progress__indeterminate-container,.mdc-circular-progress__spinner-layer{position:absolute;width:100%;height:100%}.mdc-circular-progress__determinate-container{transform:rotate(-90deg)}.mdc-circular-progress--indeterminate .mdc-circular-progress__determinate-container{opacity:0}.mdc-circular-progress__indeterminate-container{font-size:0;letter-spacing:0;white-space:nowrap;opacity:0}.mdc-circular-progress--indeterminate .mdc-circular-progress__indeterminate-container{opacity:1;animation:mdc-circular-progress-container-rotate 1568.2352941176ms linear infinite}.mdc-circular-progress__determinate-circle-graphic,.mdc-circular-progress__indeterminate-circle-graphic{fill:rgba(0,0,0,0)}.mat-mdc-progress-spinner .mdc-circular-progress__determinate-circle,.mat-mdc-progress-spinner .mdc-circular-progress__indeterminate-circle-graphic{stroke:var(--mdc-circular-progress-active-indicator-color, var(--mat-sys-primary))}@media(forced-colors: active){.mat-mdc-progress-spinner .mdc-circular-progress__determinate-circle,.mat-mdc-progress-spinner .mdc-circular-progress__indeterminate-circle-graphic{stroke:CanvasText}}.mdc-circular-progress__determinate-circle{transition:stroke-dashoffset 500ms cubic-bezier(0, 0, 0.2, 1)}.mdc-circular-progress__gap-patch{position:absolute;top:0;left:47.5%;box-sizing:border-box;width:5%;height:100%;overflow:hidden}.mdc-circular-progress__gap-patch .mdc-circular-progress__indeterminate-circle-graphic{left:-900%;width:2000%;transform:rotate(180deg)}.mdc-circular-progress__circle-clipper .mdc-circular-progress__indeterminate-circle-graphic{width:200%}.mdc-circular-progress__circle-right .mdc-circular-progress__indeterminate-circle-graphic{left:-100%}.mdc-circular-progress--indeterminate .mdc-circular-progress__circle-left .mdc-circular-progress__indeterminate-circle-graphic{animation:mdc-circular-progress-left-spin 1333ms cubic-bezier(0.4, 0, 0.2, 1) infinite both}.mdc-circular-progress--indeterminate .mdc-circular-progress__circle-right .mdc-circular-progress__indeterminate-circle-graphic{animation:mdc-circular-progress-right-spin 1333ms cubic-bezier(0.4, 0, 0.2, 1) infinite both}.mdc-circular-progress__circle-clipper{display:inline-flex;position:relative;width:50%;height:100%;overflow:hidden}.mdc-circular-progress--indeterminate .mdc-circular-progress__spinner-layer{animation:mdc-circular-progress-spinner-layer-rotate 5332ms cubic-bezier(0.4, 0, 0.2, 1) infinite both}@keyframes mdc-circular-progress-container-rotate{to{transform:rotate(360deg)}}@keyframes mdc-circular-progress-spinner-layer-rotate{12.5%{transform:rotate(135deg)}25%{transform:rotate(270deg)}37.5%{transform:rotate(405deg)}50%{transform:rotate(540deg)}62.5%{transform:rotate(675deg)}75%{transform:rotate(810deg)}87.5%{transform:rotate(945deg)}100%{transform:rotate(1080deg)}}@keyframes mdc-circular-progress-left-spin{from{transform:rotate(265deg)}50%{transform:rotate(130deg)}to{transform:rotate(265deg)}}@keyframes mdc-circular-progress-right-spin{from{transform:rotate(-265deg)}50%{transform:rotate(-130deg)}to{transform:rotate(-265deg)}}\n"],
    encapsulation: 2,
    changeDetection: 0
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatProgressSpinner, [{
    type: Component,
    args: [{
      selector: "mat-progress-spinner, mat-spinner",
      exportAs: "matProgressSpinner",
      host: {
        "role": "progressbar",
        "class": "mat-mdc-progress-spinner mdc-circular-progress",
        // set tab index to -1 so screen readers will read the aria-label
        // Note: there is a known issue with JAWS that does not read progressbar aria labels on FireFox
        "tabindex": "-1",
        "[class]": '"mat-" + color',
        "[class._mat-animation-noopable]": `_noopAnimations`,
        "[class.mdc-circular-progress--indeterminate]": 'mode === "indeterminate"',
        "[style.width.px]": "diameter",
        "[style.height.px]": "diameter",
        "[style.--mdc-circular-progress-size]": 'diameter + "px"',
        "[style.--mdc-circular-progress-active-indicator-width]": 'diameter + "px"',
        "[attr.aria-valuemin]": "0",
        "[attr.aria-valuemax]": "100",
        "[attr.aria-valuenow]": 'mode === "determinate" ? value : null',
        "[attr.mode]": "mode"
      },
      changeDetection: ChangeDetectionStrategy.OnPush,
      encapsulation: ViewEncapsulation.None,
      imports: [NgTemplateOutlet],
      template: '<ng-template #circle>\n  <svg [attr.viewBox]="_viewBox()" class="mdc-circular-progress__indeterminate-circle-graphic"\n       xmlns="http://www.w3.org/2000/svg" focusable="false">\n    <circle [attr.r]="_circleRadius()"\n            [style.stroke-dasharray.px]="_strokeCircumference()"\n            [style.stroke-dashoffset.px]="_strokeCircumference() / 2"\n            [style.stroke-width.%]="_circleStrokeWidth()"\n            cx="50%" cy="50%"/>\n  </svg>\n</ng-template>\n\n<!--\n  All children need to be hidden for screen readers in order to support ChromeVox.\n  More context in the issue: https://github.com/angular/components/issues/22165.\n-->\n<div class="mdc-circular-progress__determinate-container" aria-hidden="true" #determinateSpinner>\n  <svg [attr.viewBox]="_viewBox()" class="mdc-circular-progress__determinate-circle-graphic"\n       xmlns="http://www.w3.org/2000/svg" focusable="false">\n    <circle [attr.r]="_circleRadius()"\n            [style.stroke-dasharray.px]="_strokeCircumference()"\n            [style.stroke-dashoffset.px]="_strokeDashOffset()"\n            [style.stroke-width.%]="_circleStrokeWidth()"\n            class="mdc-circular-progress__determinate-circle"\n            cx="50%" cy="50%"/>\n  </svg>\n</div>\n<!--TODO: figure out why there are 3 separate svgs-->\n<div class="mdc-circular-progress__indeterminate-container" aria-hidden="true">\n  <div class="mdc-circular-progress__spinner-layer">\n    <div class="mdc-circular-progress__circle-clipper mdc-circular-progress__circle-left">\n      <ng-container [ngTemplateOutlet]="circle"></ng-container>\n    </div>\n    <div class="mdc-circular-progress__gap-patch">\n      <ng-container [ngTemplateOutlet]="circle"></ng-container>\n    </div>\n    <div class="mdc-circular-progress__circle-clipper mdc-circular-progress__circle-right">\n      <ng-container [ngTemplateOutlet]="circle"></ng-container>\n    </div>\n  </div>\n</div>\n',
      styles: [".mat-mdc-progress-spinner{display:block;overflow:hidden;line-height:0;position:relative;direction:ltr;transition:opacity 250ms cubic-bezier(0.4, 0, 0.6, 1)}.mat-mdc-progress-spinner circle{stroke-width:var(--mdc-circular-progress-active-indicator-width, 4px)}.mat-mdc-progress-spinner._mat-animation-noopable,.mat-mdc-progress-spinner._mat-animation-noopable .mdc-circular-progress__determinate-circle{transition:none !important}.mat-mdc-progress-spinner._mat-animation-noopable .mdc-circular-progress__indeterminate-circle-graphic,.mat-mdc-progress-spinner._mat-animation-noopable .mdc-circular-progress__spinner-layer,.mat-mdc-progress-spinner._mat-animation-noopable .mdc-circular-progress__indeterminate-container{animation:none !important}.mat-mdc-progress-spinner._mat-animation-noopable .mdc-circular-progress__indeterminate-container circle{stroke-dasharray:0 !important}@media(forced-colors: active){.mat-mdc-progress-spinner .mdc-circular-progress__indeterminate-circle-graphic,.mat-mdc-progress-spinner .mdc-circular-progress__determinate-circle{stroke:currentColor;stroke:CanvasText}}.mdc-circular-progress__determinate-container,.mdc-circular-progress__indeterminate-circle-graphic,.mdc-circular-progress__indeterminate-container,.mdc-circular-progress__spinner-layer{position:absolute;width:100%;height:100%}.mdc-circular-progress__determinate-container{transform:rotate(-90deg)}.mdc-circular-progress--indeterminate .mdc-circular-progress__determinate-container{opacity:0}.mdc-circular-progress__indeterminate-container{font-size:0;letter-spacing:0;white-space:nowrap;opacity:0}.mdc-circular-progress--indeterminate .mdc-circular-progress__indeterminate-container{opacity:1;animation:mdc-circular-progress-container-rotate 1568.2352941176ms linear infinite}.mdc-circular-progress__determinate-circle-graphic,.mdc-circular-progress__indeterminate-circle-graphic{fill:rgba(0,0,0,0)}.mat-mdc-progress-spinner .mdc-circular-progress__determinate-circle,.mat-mdc-progress-spinner .mdc-circular-progress__indeterminate-circle-graphic{stroke:var(--mdc-circular-progress-active-indicator-color, var(--mat-sys-primary))}@media(forced-colors: active){.mat-mdc-progress-spinner .mdc-circular-progress__determinate-circle,.mat-mdc-progress-spinner .mdc-circular-progress__indeterminate-circle-graphic{stroke:CanvasText}}.mdc-circular-progress__determinate-circle{transition:stroke-dashoffset 500ms cubic-bezier(0, 0, 0.2, 1)}.mdc-circular-progress__gap-patch{position:absolute;top:0;left:47.5%;box-sizing:border-box;width:5%;height:100%;overflow:hidden}.mdc-circular-progress__gap-patch .mdc-circular-progress__indeterminate-circle-graphic{left:-900%;width:2000%;transform:rotate(180deg)}.mdc-circular-progress__circle-clipper .mdc-circular-progress__indeterminate-circle-graphic{width:200%}.mdc-circular-progress__circle-right .mdc-circular-progress__indeterminate-circle-graphic{left:-100%}.mdc-circular-progress--indeterminate .mdc-circular-progress__circle-left .mdc-circular-progress__indeterminate-circle-graphic{animation:mdc-circular-progress-left-spin 1333ms cubic-bezier(0.4, 0, 0.2, 1) infinite both}.mdc-circular-progress--indeterminate .mdc-circular-progress__circle-right .mdc-circular-progress__indeterminate-circle-graphic{animation:mdc-circular-progress-right-spin 1333ms cubic-bezier(0.4, 0, 0.2, 1) infinite both}.mdc-circular-progress__circle-clipper{display:inline-flex;position:relative;width:50%;height:100%;overflow:hidden}.mdc-circular-progress--indeterminate .mdc-circular-progress__spinner-layer{animation:mdc-circular-progress-spinner-layer-rotate 5332ms cubic-bezier(0.4, 0, 0.2, 1) infinite both}@keyframes mdc-circular-progress-container-rotate{to{transform:rotate(360deg)}}@keyframes mdc-circular-progress-spinner-layer-rotate{12.5%{transform:rotate(135deg)}25%{transform:rotate(270deg)}37.5%{transform:rotate(405deg)}50%{transform:rotate(540deg)}62.5%{transform:rotate(675deg)}75%{transform:rotate(810deg)}87.5%{transform:rotate(945deg)}100%{transform:rotate(1080deg)}}@keyframes mdc-circular-progress-left-spin{from{transform:rotate(265deg)}50%{transform:rotate(130deg)}to{transform:rotate(265deg)}}@keyframes mdc-circular-progress-right-spin{from{transform:rotate(-265deg)}50%{transform:rotate(-130deg)}to{transform:rotate(-265deg)}}\n"]
    }]
  }], () => [], {
    color: [{
      type: Input
    }],
    _determinateCircle: [{
      type: ViewChild,
      args: ["determinateSpinner"]
    }],
    mode: [{
      type: Input
    }],
    value: [{
      type: Input,
      args: [{
        transform: numberAttribute
      }]
    }],
    diameter: [{
      type: Input,
      args: [{
        transform: numberAttribute
      }]
    }],
    strokeWidth: [{
      type: Input,
      args: [{
        transform: numberAttribute
      }]
    }]
  });
})();
var MatSpinner = MatProgressSpinner;
var MatProgressSpinnerModule = class _MatProgressSpinnerModule {
  static \u0275fac = function MatProgressSpinnerModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _MatProgressSpinnerModule)();
  };
  static \u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
    type: _MatProgressSpinnerModule
  });
  static \u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({
    imports: [MatCommonModule]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatProgressSpinnerModule, [{
    type: NgModule,
    args: [{
      imports: [MatProgressSpinner, MatSpinner],
      exports: [MatProgressSpinner, MatSpinner, MatCommonModule]
    }]
  }], null, null);
})();

// node_modules/ng-zorro-antd/fesm2022/ng-zorro-antd-time-picker.mjs
var _c02 = ["hourListElement"];
var _c1 = ["minuteListElement"];
var _c2 = ["secondListElement"];
var _c3 = ["use12HoursListElement"];
function NzTimePickerPanelComponent_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 4)(1, "div", 8);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r0.dateHelper.format(ctx_r0.time == null ? null : ctx_r0.time.value, ctx_r0.format) || "\xA0");
  }
}
function NzTimePickerPanelComponent_Conditional_2_For_3_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "li", 10);
    \u0275\u0275listener("click", function NzTimePickerPanelComponent_Conditional_2_For_3_Conditional_0_Template_li_click_0_listener() {
      \u0275\u0275restoreView(_r2);
      const hour_r3 = \u0275\u0275nextContext().$implicit;
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.selectHour(hour_r3));
    });
    \u0275\u0275elementStart(1, "div", 11);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "number");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const hour_r3 = \u0275\u0275nextContext().$implicit;
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275classProp("ant-picker-time-panel-cell-selected", ctx_r0.isSelectedHour(hour_r3))("ant-picker-time-panel-cell-disabled", hour_r3.disabled);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(3, 5, hour_r3.index, "2.0-0"));
  }
}
function NzTimePickerPanelComponent_Conditional_2_For_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, NzTimePickerPanelComponent_Conditional_2_For_3_Conditional_0_Template, 4, 8, "li", 9);
  }
  if (rf & 2) {
    const hour_r3 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275conditional(!(ctx_r0.nzHideDisabledOptions && hour_r3.disabled) ? 0 : -1);
  }
}
function NzTimePickerPanelComponent_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "ul", 6, 0);
    \u0275\u0275repeaterCreate(2, NzTimePickerPanelComponent_Conditional_2_For_3_Template, 1, 1, null, null, \u0275\u0275repeaterTrackByIndex);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275repeater(ctx_r0.hourRange);
  }
}
function NzTimePickerPanelComponent_Conditional_3_For_3_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "li", 10);
    \u0275\u0275listener("click", function NzTimePickerPanelComponent_Conditional_3_For_3_Conditional_0_Template_li_click_0_listener() {
      \u0275\u0275restoreView(_r4);
      const minute_r5 = \u0275\u0275nextContext().$implicit;
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.selectMinute(minute_r5));
    });
    \u0275\u0275elementStart(1, "div", 11);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "number");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const minute_r5 = \u0275\u0275nextContext().$implicit;
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275classProp("ant-picker-time-panel-cell-selected", ctx_r0.isSelectedMinute(minute_r5))("ant-picker-time-panel-cell-disabled", minute_r5.disabled);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(3, 5, minute_r5.index, "2.0-0"));
  }
}
function NzTimePickerPanelComponent_Conditional_3_For_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, NzTimePickerPanelComponent_Conditional_3_For_3_Conditional_0_Template, 4, 8, "li", 9);
  }
  if (rf & 2) {
    const minute_r5 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275conditional(!(ctx_r0.nzHideDisabledOptions && minute_r5.disabled) ? 0 : -1);
  }
}
function NzTimePickerPanelComponent_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "ul", 6, 1);
    \u0275\u0275repeaterCreate(2, NzTimePickerPanelComponent_Conditional_3_For_3_Template, 1, 1, null, null, \u0275\u0275repeaterTrackByIndex);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275repeater(ctx_r0.minuteRange);
  }
}
function NzTimePickerPanelComponent_Conditional_4_For_3_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "li", 10);
    \u0275\u0275listener("click", function NzTimePickerPanelComponent_Conditional_4_For_3_Conditional_0_Template_li_click_0_listener() {
      \u0275\u0275restoreView(_r6);
      const second_r7 = \u0275\u0275nextContext().$implicit;
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.selectSecond(second_r7));
    });
    \u0275\u0275elementStart(1, "div", 11);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "number");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const second_r7 = \u0275\u0275nextContext().$implicit;
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275classProp("ant-picker-time-panel-cell-selected", ctx_r0.isSelectedSecond(second_r7))("ant-picker-time-panel-cell-disabled", second_r7.disabled);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(3, 5, second_r7.index, "2.0-0"));
  }
}
function NzTimePickerPanelComponent_Conditional_4_For_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, NzTimePickerPanelComponent_Conditional_4_For_3_Conditional_0_Template, 4, 8, "li", 9);
  }
  if (rf & 2) {
    const second_r7 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275conditional(!(ctx_r0.nzHideDisabledOptions && second_r7.disabled) ? 0 : -1);
  }
}
function NzTimePickerPanelComponent_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "ul", 6, 2);
    \u0275\u0275repeaterCreate(2, NzTimePickerPanelComponent_Conditional_4_For_3_Template, 1, 1, null, null, \u0275\u0275repeaterTrackByIndex);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275repeater(ctx_r0.secondRange);
  }
}
function NzTimePickerPanelComponent_Conditional_5_For_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "li", 10);
    \u0275\u0275listener("click", function NzTimePickerPanelComponent_Conditional_5_For_3_Template_li_click_0_listener() {
      const range_r9 = \u0275\u0275restoreView(_r8).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.select12Hours(range_r9));
    });
    \u0275\u0275elementStart(1, "div", 11);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const range_r9 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275classProp("ant-picker-time-panel-cell-selected", ctx_r0.isSelected12Hours(range_r9));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(range_r9.value);
  }
}
function NzTimePickerPanelComponent_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "ul", 6, 3);
    \u0275\u0275repeaterCreate(2, NzTimePickerPanelComponent_Conditional_5_For_3_Template, 3, 3, "li", 12, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275repeater(ctx_r0.use12HoursRange);
  }
}
function NzTimePickerPanelComponent_Conditional_6_Conditional_1_ng_template_1_Template(rf, ctx) {
}
function NzTimePickerPanelComponent_Conditional_6_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 13);
    \u0275\u0275template(1, NzTimePickerPanelComponent_Conditional_6_Conditional_1_ng_template_1_Template, 0, 0, "ng-template", 19);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("ngTemplateOutlet", ctx_r0.nzAddOn);
  }
}
function NzTimePickerPanelComponent_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 7);
    \u0275\u0275template(1, NzTimePickerPanelComponent_Conditional_6_Conditional_1_Template, 2, 1, "div", 13);
    \u0275\u0275elementStart(2, "ul", 14)(3, "li", 15)(4, "a", 16);
    \u0275\u0275listener("click", function NzTimePickerPanelComponent_Conditional_6_Template_a_click_4_listener() {
      \u0275\u0275restoreView(_r10);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.onClickNow());
    });
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "nzI18n");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "li", 17)(8, "button", 18);
    \u0275\u0275listener("click", function NzTimePickerPanelComponent_Conditional_6_Template_button_click_8_listener() {
      \u0275\u0275restoreView(_r10);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.onClickOk());
    });
    \u0275\u0275text(9);
    \u0275\u0275pipe(10, "nzI18n");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.nzAddOn ? 1 : -1);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", ctx_r0.nzNowText || \u0275\u0275pipeBind1(6, 3, "Calendar.lang.now"), " ");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", ctx_r0.nzOkText || \u0275\u0275pipeBind1(10, 5, "Calendar.lang.ok"), " ");
  }
}
var _c4 = ["inputElement"];
function NzTimePickerComponent_ng_container_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275element(1, "nz-icon", 8);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const suffixIcon_r2 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("nzType", suffixIcon_r2);
  }
}
function NzTimePickerComponent_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "nz-form-item-feedback-icon", 5);
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275property("status", ctx_r2.status);
  }
}
function NzTimePickerComponent_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "span", 9);
    \u0275\u0275listener("click", function NzTimePickerComponent_Conditional_7_Template_span_click_0_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.onClickClearBtn($event));
    });
    \u0275\u0275element(1, "nz-icon", 10);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275attribute("aria-label", ctx_r2.nzClearText)("title", ctx_r2.nzClearText);
  }
}
function NzTimePickerComponent_ng_template_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 11)(1, "div", 12)(2, "div", 13)(3, "nz-time-picker-panel", 14);
    \u0275\u0275pipe(4, "async");
    \u0275\u0275twoWayListener("ngModelChange", function NzTimePickerComponent_ng_template_8_Template_nz_time_picker_panel_ngModelChange_3_listener($event) {
      \u0275\u0275restoreView(_r5);
      const ctx_r2 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r2.value, $event) || (ctx_r2.value = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("ngModelChange", function NzTimePickerComponent_ng_template_8_Template_nz_time_picker_panel_ngModelChange_3_listener($event) {
      \u0275\u0275restoreView(_r5);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.onPanelValueChange($event));
    })("closePanel", function NzTimePickerComponent_ng_template_8_Template_nz_time_picker_panel_closePanel_3_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.closePanel());
    });
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275property("@slideMotion", "enter");
    \u0275\u0275advance(3);
    \u0275\u0275classMap(ctx_r2.nzPopupClassName);
    \u0275\u0275property("format", ctx_r2.nzFormat)("nzHourStep", ctx_r2.nzHourStep)("nzMinuteStep", ctx_r2.nzMinuteStep)("nzSecondStep", ctx_r2.nzSecondStep)("nzDisabledHours", ctx_r2.nzDisabledHours)("nzDisabledMinutes", ctx_r2.nzDisabledMinutes)("nzDisabledSeconds", ctx_r2.nzDisabledSeconds)("nzPlaceHolder", ctx_r2.nzPlaceHolder || \u0275\u0275pipeBind1(4, 20, ctx_r2.i18nPlaceHolder$))("nzHideDisabledOptions", ctx_r2.nzHideDisabledOptions)("nzUse12Hours", ctx_r2.nzUse12Hours)("nzDefaultOpenValue", ctx_r2.nzDefaultOpenValue)("nzAddOn", ctx_r2.nzAddOn)("nzClearText", ctx_r2.nzClearText)("nzNowText", ctx_r2.nzNowText)("nzOkText", ctx_r2.nzOkText)("nzAllowEmpty", ctx_r2.nzAllowEmpty);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.value);
  }
}
var TimeHolder = class {
  selected12Hours = void 0;
  _value;
  _use12Hours = false;
  _defaultOpenValue;
  _changes = new Subject();
  setMinutes(value, disabled) {
    if (!disabled) {
      this.initValue();
      this.value.setMinutes(value);
      this.update();
    }
    return this;
  }
  setHours(value, disabled) {
    if (!disabled) {
      this.initValue();
      if (this._use12Hours) {
        if (this.selected12Hours === "PM" && value !== 12) {
          this.value.setHours(value + 12);
        } else if (this.selected12Hours === "AM" && value === 12) {
          this.value.setHours(0);
        } else {
          this.value.setHours(value);
        }
      } else {
        this.value.setHours(value);
      }
      this.update();
    }
    return this;
  }
  setSeconds(value, disabled) {
    if (!disabled) {
      this.initValue();
      this.value.setSeconds(value);
      this.update();
    }
    return this;
  }
  setUse12Hours(value) {
    this._use12Hours = value;
    return this;
  }
  get changes() {
    return this._changes.asObservable();
  }
  setValue(value, use12Hours) {
    if (isNotNil(use12Hours)) {
      this._use12Hours = use12Hours;
    }
    if (value !== this.value) {
      this._value = value;
      if (isNotNil(this.value)) {
        if (this._use12Hours && isNotNil(this.hours)) {
          this.selected12Hours = this.hours >= 12 ? "PM" : "AM";
        }
      } else {
        this._clear();
      }
    }
    return this;
  }
  initValue() {
    if (isNil(this.value)) {
      this.setValue(/* @__PURE__ */ new Date(), this._use12Hours);
    }
  }
  clear() {
    this._clear();
    this.update();
  }
  get isEmpty() {
    return !(isNotNil(this.hours) || isNotNil(this.minutes) || isNotNil(this.seconds));
  }
  _clear() {
    this._value = void 0;
    this.selected12Hours = void 0;
  }
  update() {
    if (this.isEmpty) {
      this._value = void 0;
    } else {
      if (isNotNil(this.hours)) {
        this.value.setHours(this.hours);
      }
      if (isNotNil(this.minutes)) {
        this.value.setMinutes(this.minutes);
      }
      if (isNotNil(this.seconds)) {
        this.value.setSeconds(this.seconds);
      }
      if (this._use12Hours) {
        if (this.selected12Hours === "PM" && this.hours < 12) {
          this.value.setHours(this.hours + 12);
        }
        if (this.selected12Hours === "AM" && this.hours >= 12) {
          this.value.setHours(this.hours - 12);
        }
      }
    }
    this.changed();
  }
  changed() {
    this._changes.next(this.value);
  }
  /**
   * @description
   * UI view hours
   * Get viewHours which is selected in `time-picker-panel` and its range is [12, 1, 2, ..., 11]
   */
  get viewHours() {
    return this._use12Hours && isNotNil(this.hours) ? this.calculateViewHour(this.hours) : this.hours;
  }
  setSelected12Hours(value) {
    if (value.toUpperCase() !== this.selected12Hours) {
      this.selected12Hours = value.toUpperCase();
      this.update();
    }
  }
  get value() {
    return this._value || this._defaultOpenValue;
  }
  get hours() {
    return this.value?.getHours();
  }
  get minutes() {
    return this.value?.getMinutes();
  }
  get seconds() {
    return this.value?.getSeconds();
  }
  setDefaultOpenValue(value) {
    this._defaultOpenValue = value;
    return this;
  }
  calculateViewHour(value) {
    const selected12Hours = this.selected12Hours;
    if (selected12Hours === "PM" && value > 12) {
      return value - 12;
    }
    if (selected12Hours === "AM" && value === 0) {
      return 12;
    }
    return value;
  }
};
function makeRange(length, step = 1, start = 0) {
  return new Array(Math.ceil(length / step)).fill(0).map((_, i) => (i + start) * step);
}
var NzTimePickerPanelComponent = class _NzTimePickerPanelComponent {
  ngZone;
  cdr;
  dateHelper;
  elementRef;
  _nzHourStep = 1;
  _nzMinuteStep = 1;
  _nzSecondStep = 1;
  unsubscribe$ = new Subject();
  onChange;
  onTouch;
  _format = "HH:mm:ss";
  _disabledHours = () => [];
  _disabledMinutes = () => [];
  _disabledSeconds = () => [];
  _allowEmpty = true;
  time = new TimeHolder();
  hourEnabled = true;
  minuteEnabled = true;
  secondEnabled = true;
  firstScrolled = false;
  enabledColumns = 3;
  hourRange;
  minuteRange;
  secondRange;
  use12HoursRange;
  hourListElement;
  minuteListElement;
  secondListElement;
  use12HoursListElement;
  nzInDatePicker = false;
  // If inside a date-picker, more diff works need to be done
  nzAddOn;
  nzHideDisabledOptions = false;
  nzClearText;
  nzNowText;
  nzOkText;
  nzPlaceHolder;
  nzUse12Hours = false;
  nzDefaultOpenValue;
  closePanel = new EventEmitter();
  set nzAllowEmpty(value) {
    this._allowEmpty = value;
  }
  get nzAllowEmpty() {
    return this._allowEmpty;
  }
  set nzDisabledHours(value) {
    this._disabledHours = value;
    if (this._disabledHours) {
      this.buildHours();
    }
  }
  get nzDisabledHours() {
    return this._disabledHours;
  }
  set nzDisabledMinutes(value) {
    if (isNotNil(value)) {
      this._disabledMinutes = value;
      this.buildMinutes();
    }
  }
  get nzDisabledMinutes() {
    return this._disabledMinutes;
  }
  set nzDisabledSeconds(value) {
    if (isNotNil(value)) {
      this._disabledSeconds = value;
      this.buildSeconds();
    }
  }
  get nzDisabledSeconds() {
    return this._disabledSeconds;
  }
  set format(value) {
    if (isNotNil(value)) {
      this._format = value;
      this.enabledColumns = 0;
      const charSet = new Set(value);
      this.hourEnabled = charSet.has("H") || charSet.has("h");
      this.minuteEnabled = charSet.has("m");
      this.secondEnabled = charSet.has("s");
      if (this.hourEnabled) {
        this.enabledColumns++;
      }
      if (this.minuteEnabled) {
        this.enabledColumns++;
      }
      if (this.secondEnabled) {
        this.enabledColumns++;
      }
      if (this.nzUse12Hours) {
        this.build12Hours();
      }
    }
  }
  get format() {
    return this._format;
  }
  set nzHourStep(value) {
    this._nzHourStep = value || 1;
    this.buildHours();
  }
  get nzHourStep() {
    return this._nzHourStep;
  }
  set nzMinuteStep(value) {
    this._nzMinuteStep = value || 1;
    this.buildMinutes();
  }
  get nzMinuteStep() {
    return this._nzMinuteStep;
  }
  set nzSecondStep(value) {
    this._nzSecondStep = value || 1;
    this.buildSeconds();
  }
  get nzSecondStep() {
    return this._nzSecondStep;
  }
  buildHours() {
    let hourRanges = 24;
    let disabledHours = this.nzDisabledHours?.();
    let startIndex = 0;
    if (this.nzUse12Hours) {
      hourRanges = 12;
      if (disabledHours) {
        if (this.time.selected12Hours === "PM") {
          disabledHours = disabledHours.filter((i) => i >= 12).map((i) => i > 12 ? i - 12 : i);
        } else {
          disabledHours = disabledHours.filter((i) => i < 12 || i === 24).map((i) => i === 24 || i === 0 ? 12 : i);
        }
      }
      startIndex = 1;
    }
    this.hourRange = makeRange(hourRanges, this.nzHourStep, startIndex).map((r) => ({
      index: r,
      disabled: !!disabledHours && disabledHours.indexOf(r) !== -1
    }));
    if (this.nzUse12Hours && this.hourRange[this.hourRange.length - 1].index === 12) {
      const temp = [...this.hourRange];
      temp.unshift(temp[temp.length - 1]);
      temp.splice(temp.length - 1, 1);
      this.hourRange = temp;
    }
  }
  buildMinutes() {
    this.minuteRange = makeRange(60, this.nzMinuteStep).map((r) => ({
      index: r,
      disabled: !!this.nzDisabledMinutes && this.nzDisabledMinutes(this.time.hours).indexOf(r) !== -1
    }));
  }
  buildSeconds() {
    this.secondRange = makeRange(60, this.nzSecondStep).map((r) => ({
      index: r,
      disabled: !!this.nzDisabledSeconds && this.nzDisabledSeconds(this.time.hours, this.time.minutes).indexOf(r) !== -1
    }));
  }
  build12Hours() {
    const isUpperFormat = this._format.includes("A");
    this.use12HoursRange = [{
      index: 0,
      value: isUpperFormat ? "AM" : "am"
    }, {
      index: 1,
      value: isUpperFormat ? "PM" : "pm"
    }];
  }
  buildTimes() {
    this.buildHours();
    this.buildMinutes();
    this.buildSeconds();
    this.build12Hours();
  }
  scrollToTime(delay = 0) {
    if (this.hourEnabled && this.hourListElement) {
      this.scrollToSelected(this.hourListElement.nativeElement, this.time.viewHours, delay, "hour");
    }
    if (this.minuteEnabled && this.minuteListElement) {
      this.scrollToSelected(this.minuteListElement.nativeElement, this.time.minutes, delay, "minute");
    }
    if (this.secondEnabled && this.secondListElement) {
      this.scrollToSelected(this.secondListElement.nativeElement, this.time.seconds, delay, "second");
    }
    if (this.nzUse12Hours && this.use12HoursListElement) {
      const selectedHours = this.time.selected12Hours;
      const index = selectedHours === "AM" ? 0 : 1;
      this.scrollToSelected(this.use12HoursListElement.nativeElement, index, delay, "12-hour");
    }
  }
  selectHour(hour) {
    this.time.setHours(hour.index, hour.disabled);
    if (this._disabledMinutes) {
      this.buildMinutes();
    }
    if (this._disabledSeconds || this._disabledMinutes) {
      this.buildSeconds();
    }
  }
  selectMinute(minute) {
    this.time.setMinutes(minute.index, minute.disabled);
    if (this._disabledSeconds) {
      this.buildSeconds();
    }
  }
  selectSecond(second) {
    this.time.setSeconds(second.index, second.disabled);
  }
  select12Hours(value) {
    this.time.setSelected12Hours(value.value);
    if (this._disabledHours) {
      this.buildHours();
    }
    if (this._disabledMinutes) {
      this.buildMinutes();
    }
    if (this._disabledSeconds) {
      this.buildSeconds();
    }
  }
  scrollToSelected(instance, index, duration = 0, unit) {
    if (!instance) {
      return;
    }
    const transIndex = this.translateIndex(index, unit);
    const currentOption = instance.children[transIndex] || instance.children[0];
    this.scrollTo(instance, currentOption.offsetTop, duration);
  }
  translateIndex(index, unit) {
    if (unit === "hour") {
      return this.calcIndex(this.nzDisabledHours?.(), this.hourRange.map((item) => item.index).indexOf(index));
    } else if (unit === "minute") {
      return this.calcIndex(this.nzDisabledMinutes?.(this.time.hours), this.minuteRange.map((item) => item.index).indexOf(index));
    } else if (unit === "second") {
      return this.calcIndex(this.nzDisabledSeconds?.(this.time.hours, this.time.minutes), this.secondRange.map((item) => item.index).indexOf(index));
    } else {
      return this.calcIndex([], this.use12HoursRange.map((item) => item.index).indexOf(index));
    }
  }
  scrollTo(element, to, duration) {
    if (duration <= 0) {
      element.scrollTop = to;
      return;
    }
    const difference = to - element.scrollTop;
    const perTick = difference / duration * 10;
    this.ngZone.runOutsideAngular(() => {
      reqAnimFrame(() => {
        element.scrollTop = element.scrollTop + perTick;
        if (element.scrollTop === to) {
          return;
        }
        this.scrollTo(element, to, duration - 10);
      });
    });
  }
  calcIndex(array, index) {
    if (array?.length && this.nzHideDisabledOptions) {
      return index - array.reduce((pre, value) => pre + (value < index ? 1 : 0), 0);
    } else {
      return index;
    }
  }
  changed() {
    if (this.onChange) {
      this.onChange(this.time.value);
    }
  }
  touched() {
    if (this.onTouch) {
      this.onTouch();
    }
  }
  timeDisabled(value) {
    const hour = value.getHours();
    const minute = value.getMinutes();
    const second = value.getSeconds();
    return (this.nzDisabledHours?.().indexOf(hour) ?? -1) > -1 || (this.nzDisabledMinutes?.(hour).indexOf(minute) ?? -1) > -1 || (this.nzDisabledSeconds?.(hour, minute).indexOf(second) ?? -1) > -1;
  }
  onClickNow() {
    const now = /* @__PURE__ */ new Date();
    if (this.timeDisabled(now)) {
      return;
    }
    this.time.setValue(now);
    this.changed();
    this.closePanel.emit();
  }
  onClickOk() {
    this.time.setValue(this.time.value, this.nzUse12Hours);
    this.changed();
    this.closePanel.emit();
  }
  isSelectedHour(hour) {
    return hour.index === this.time.viewHours;
  }
  isSelectedMinute(minute) {
    return minute.index === this.time.minutes;
  }
  isSelectedSecond(second) {
    return second.index === this.time.seconds;
  }
  isSelected12Hours(value) {
    return value.value.toUpperCase() === this.time.selected12Hours;
  }
  constructor(ngZone, cdr, dateHelper, elementRef) {
    this.ngZone = ngZone;
    this.cdr = cdr;
    this.dateHelper = dateHelper;
    this.elementRef = elementRef;
  }
  ngOnInit() {
    this.time.changes.pipe(takeUntil(this.unsubscribe$)).subscribe(() => {
      this.changed();
      this.touched();
      this.scrollToTime(120);
    });
    this.buildTimes();
    this.ngZone.runOutsideAngular(() => {
      setTimeout(() => {
        this.scrollToTime();
        this.firstScrolled = true;
      });
    });
    fromEventOutsideAngular(this.elementRef.nativeElement, "mousedown").pipe(takeUntil(this.unsubscribe$)).subscribe((event) => {
      event.preventDefault();
    });
  }
  ngOnDestroy() {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }
  ngOnChanges(changes) {
    const {
      nzUse12Hours,
      nzDefaultOpenValue
    } = changes;
    if (!nzUse12Hours?.previousValue && nzUse12Hours?.currentValue) {
      this.build12Hours();
      this.enabledColumns++;
    }
    if (nzDefaultOpenValue?.currentValue) {
      this.time.setDefaultOpenValue(this.nzDefaultOpenValue || /* @__PURE__ */ new Date());
    }
  }
  writeValue(value) {
    this.time.setValue(value, this.nzUse12Hours);
    this.buildTimes();
    if (value && this.firstScrolled) {
      this.scrollToTime(120);
    }
    this.cdr.markForCheck();
  }
  registerOnChange(fn) {
    this.onChange = fn;
  }
  registerOnTouched(fn) {
    this.onTouch = fn;
  }
  static \u0275fac = function NzTimePickerPanelComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _NzTimePickerPanelComponent)(\u0275\u0275directiveInject(NgZone), \u0275\u0275directiveInject(ChangeDetectorRef), \u0275\u0275directiveInject(DateHelperService), \u0275\u0275directiveInject(ElementRef));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _NzTimePickerPanelComponent,
    selectors: [["nz-time-picker-panel"]],
    viewQuery: function NzTimePickerPanelComponent_Query(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275viewQuery(_c02, 5);
        \u0275\u0275viewQuery(_c1, 5);
        \u0275\u0275viewQuery(_c2, 5);
        \u0275\u0275viewQuery(_c3, 5);
      }
      if (rf & 2) {
        let _t;
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.hourListElement = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.minuteListElement = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.secondListElement = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.use12HoursListElement = _t.first);
      }
    },
    hostAttrs: [1, "ant-picker-time-panel"],
    hostVars: 12,
    hostBindings: function NzTimePickerPanelComponent_HostBindings(rf, ctx) {
      if (rf & 2) {
        \u0275\u0275classProp("ant-picker-time-panel-column-0", ctx.enabledColumns === 0 && !ctx.nzInDatePicker)("ant-picker-time-panel-column-1", ctx.enabledColumns === 1 && !ctx.nzInDatePicker)("ant-picker-time-panel-column-2", ctx.enabledColumns === 2 && !ctx.nzInDatePicker)("ant-picker-time-panel-column-3", ctx.enabledColumns === 3 && !ctx.nzInDatePicker)("ant-picker-time-panel-narrow", ctx.enabledColumns < 3)("ant-picker-time-panel-placement-bottomLeft", !ctx.nzInDatePicker);
      }
    },
    inputs: {
      nzInDatePicker: [2, "nzInDatePicker", "nzInDatePicker", booleanAttribute],
      nzAddOn: "nzAddOn",
      nzHideDisabledOptions: "nzHideDisabledOptions",
      nzClearText: "nzClearText",
      nzNowText: "nzNowText",
      nzOkText: "nzOkText",
      nzPlaceHolder: "nzPlaceHolder",
      nzUse12Hours: [2, "nzUse12Hours", "nzUse12Hours", booleanAttribute],
      nzDefaultOpenValue: "nzDefaultOpenValue",
      nzAllowEmpty: [2, "nzAllowEmpty", "nzAllowEmpty", booleanAttribute],
      nzDisabledHours: "nzDisabledHours",
      nzDisabledMinutes: "nzDisabledMinutes",
      nzDisabledSeconds: "nzDisabledSeconds",
      format: "format",
      nzHourStep: [2, "nzHourStep", "nzHourStep", numberAttribute],
      nzMinuteStep: [2, "nzMinuteStep", "nzMinuteStep", numberAttribute],
      nzSecondStep: [2, "nzSecondStep", "nzSecondStep", numberAttribute]
    },
    outputs: {
      closePanel: "closePanel"
    },
    exportAs: ["nzTimePickerPanel"],
    features: [\u0275\u0275ProvidersFeature([{
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => _NzTimePickerPanelComponent),
      multi: true
    }]), \u0275\u0275NgOnChangesFeature],
    decls: 7,
    vars: 6,
    consts: [["hourListElement", ""], ["minuteListElement", ""], ["secondListElement", ""], ["use12HoursListElement", ""], [1, "ant-picker-header"], [1, "ant-picker-content"], [1, "ant-picker-time-panel-column", 2, "position", "relative"], [1, "ant-picker-footer"], [1, "ant-picker-header-view"], [1, "ant-picker-time-panel-cell", 3, "ant-picker-time-panel-cell-selected", "ant-picker-time-panel-cell-disabled"], [1, "ant-picker-time-panel-cell", 3, "click"], [1, "ant-picker-time-panel-cell-inner"], [1, "ant-picker-time-panel-cell", 3, "ant-picker-time-panel-cell-selected"], [1, "ant-picker-footer-extra"], [1, "ant-picker-ranges"], [1, "ant-picker-now"], [3, "click"], [1, "ant-picker-ok"], ["nz-button", "", "type", "button", "nzSize", "small", "nzType", "primary", 3, "click"], [3, "ngTemplateOutlet"]],
    template: function NzTimePickerPanelComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275template(0, NzTimePickerPanelComponent_Conditional_0_Template, 3, 1, "div", 4);
        \u0275\u0275elementStart(1, "div", 5);
        \u0275\u0275template(2, NzTimePickerPanelComponent_Conditional_2_Template, 4, 0, "ul", 6)(3, NzTimePickerPanelComponent_Conditional_3_Template, 4, 0, "ul", 6)(4, NzTimePickerPanelComponent_Conditional_4_Template, 4, 0, "ul", 6)(5, NzTimePickerPanelComponent_Conditional_5_Template, 4, 0, "ul", 6);
        \u0275\u0275elementEnd();
        \u0275\u0275template(6, NzTimePickerPanelComponent_Conditional_6_Template, 11, 7, "div", 7);
      }
      if (rf & 2) {
        \u0275\u0275conditional(ctx.nzInDatePicker ? 0 : -1);
        \u0275\u0275advance(2);
        \u0275\u0275conditional(ctx.hourEnabled ? 2 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.minuteEnabled ? 3 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.secondEnabled ? 4 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.nzUse12Hours ? 5 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(!ctx.nzInDatePicker ? 6 : -1);
      }
    },
    dependencies: [DecimalPipe, NgTemplateOutlet, NzI18nModule, NzI18nPipe, NzButtonModule, NzButtonComponent, NzTransitionPatchDirective, NzWaveDirective],
    encapsulation: 2,
    changeDetection: 0
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzTimePickerPanelComponent, [{
    type: Component,
    args: [{
      encapsulation: ViewEncapsulation.None,
      changeDetection: ChangeDetectionStrategy.OnPush,
      selector: "nz-time-picker-panel",
      exportAs: "nzTimePickerPanel",
      template: `
    @if (nzInDatePicker) {
      <div class="ant-picker-header">
        <div class="ant-picker-header-view">{{ dateHelper.format($any(time?.value), format) || '&nbsp;' }}</div>
      </div>
    }
    <div class="ant-picker-content">
      @if (hourEnabled) {
        <ul #hourListElement class="ant-picker-time-panel-column" style="position: relative;">
          @for (hour of hourRange; track $index) {
            @if (!(nzHideDisabledOptions && hour.disabled)) {
              <li
                class="ant-picker-time-panel-cell"
                (click)="selectHour(hour)"
                [class.ant-picker-time-panel-cell-selected]="isSelectedHour(hour)"
                [class.ant-picker-time-panel-cell-disabled]="hour.disabled"
              >
                <div class="ant-picker-time-panel-cell-inner">{{ hour.index | number: '2.0-0' }}</div>
              </li>
            }
          }
        </ul>
      }
      @if (minuteEnabled) {
        <ul #minuteListElement class="ant-picker-time-panel-column" style="position: relative;">
          @for (minute of minuteRange; track $index) {
            @if (!(nzHideDisabledOptions && minute.disabled)) {
              <li
                class="ant-picker-time-panel-cell"
                (click)="selectMinute(minute)"
                [class.ant-picker-time-panel-cell-selected]="isSelectedMinute(minute)"
                [class.ant-picker-time-panel-cell-disabled]="minute.disabled"
              >
                <div class="ant-picker-time-panel-cell-inner">{{ minute.index | number: '2.0-0' }}</div>
              </li>
            }
          }
        </ul>
      }
      @if (secondEnabled) {
        <ul #secondListElement class="ant-picker-time-panel-column" style="position: relative;">
          @for (second of secondRange; track $index) {
            @if (!(nzHideDisabledOptions && second.disabled)) {
              <li
                class="ant-picker-time-panel-cell"
                (click)="selectSecond(second)"
                [class.ant-picker-time-panel-cell-selected]="isSelectedSecond(second)"
                [class.ant-picker-time-panel-cell-disabled]="second.disabled"
              >
                <div class="ant-picker-time-panel-cell-inner">{{ second.index | number: '2.0-0' }}</div>
              </li>
            }
          }
        </ul>
      }
      @if (nzUse12Hours) {
        <ul #use12HoursListElement class="ant-picker-time-panel-column" style="position: relative;">
          @for (range of use12HoursRange; track range) {
            <li
              (click)="select12Hours(range)"
              class="ant-picker-time-panel-cell"
              [class.ant-picker-time-panel-cell-selected]="isSelected12Hours(range)"
            >
              <div class="ant-picker-time-panel-cell-inner">{{ range.value }}</div>
            </li>
          }
        </ul>
      }
    </div>
    @if (!nzInDatePicker) {
      <div class="ant-picker-footer">
        @if (nzAddOn) {
          <div class="ant-picker-footer-extra">
            <ng-template [ngTemplateOutlet]="nzAddOn"></ng-template>
          </div>
        }
        <ul class="ant-picker-ranges">
          <li class="ant-picker-now">
            <a (click)="onClickNow()">
              {{ nzNowText || ('Calendar.lang.now' | nzI18n) }}
            </a>
          </li>
          <li class="ant-picker-ok">
            <button nz-button type="button" nzSize="small" nzType="primary" (click)="onClickOk()">
              {{ nzOkText || ('Calendar.lang.ok' | nzI18n) }}
            </button>
          </li>
        </ul>
      </div>
    }
  `,
      host: {
        class: "ant-picker-time-panel",
        "[class.ant-picker-time-panel-column-0]": `enabledColumns === 0 && !nzInDatePicker`,
        "[class.ant-picker-time-panel-column-1]": `enabledColumns === 1 && !nzInDatePicker`,
        "[class.ant-picker-time-panel-column-2]": `enabledColumns === 2 && !nzInDatePicker`,
        "[class.ant-picker-time-panel-column-3]": `enabledColumns === 3 && !nzInDatePicker`,
        "[class.ant-picker-time-panel-narrow]": `enabledColumns < 3`,
        "[class.ant-picker-time-panel-placement-bottomLeft]": `!nzInDatePicker`
      },
      providers: [{
        provide: NG_VALUE_ACCESSOR,
        useExisting: forwardRef(() => NzTimePickerPanelComponent),
        multi: true
      }],
      imports: [DecimalPipe, NgTemplateOutlet, NzI18nModule, NzButtonModule]
    }]
  }], () => [{
    type: NgZone
  }, {
    type: ChangeDetectorRef
  }, {
    type: DateHelperService
  }, {
    type: ElementRef
  }], {
    hourListElement: [{
      type: ViewChild,
      args: ["hourListElement", {
        static: false
      }]
    }],
    minuteListElement: [{
      type: ViewChild,
      args: ["minuteListElement", {
        static: false
      }]
    }],
    secondListElement: [{
      type: ViewChild,
      args: ["secondListElement", {
        static: false
      }]
    }],
    use12HoursListElement: [{
      type: ViewChild,
      args: ["use12HoursListElement", {
        static: false
      }]
    }],
    nzInDatePicker: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    nzAddOn: [{
      type: Input
    }],
    nzHideDisabledOptions: [{
      type: Input
    }],
    nzClearText: [{
      type: Input
    }],
    nzNowText: [{
      type: Input
    }],
    nzOkText: [{
      type: Input
    }],
    nzPlaceHolder: [{
      type: Input
    }],
    nzUse12Hours: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    nzDefaultOpenValue: [{
      type: Input
    }],
    closePanel: [{
      type: Output
    }],
    nzAllowEmpty: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    nzDisabledHours: [{
      type: Input
    }],
    nzDisabledMinutes: [{
      type: Input
    }],
    nzDisabledSeconds: [{
      type: Input
    }],
    format: [{
      type: Input
    }],
    nzHourStep: [{
      type: Input,
      args: [{
        transform: numberAttribute
      }]
    }],
    nzMinuteStep: [{
      type: Input,
      args: [{
        transform: numberAttribute
      }]
    }],
    nzSecondStep: [{
      type: Input,
      args: [{
        transform: numberAttribute
      }]
    }]
  });
})();
var NZ_CONFIG_MODULE_NAME = "timePicker";
var NzTimePickerComponent = (() => {
  let _nzHourStep_decorators;
  let _nzHourStep_initializers = [];
  let _nzHourStep_extraInitializers = [];
  let _nzMinuteStep_decorators;
  let _nzMinuteStep_initializers = [];
  let _nzMinuteStep_extraInitializers = [];
  let _nzSecondStep_decorators;
  let _nzSecondStep_initializers = [];
  let _nzSecondStep_extraInitializers = [];
  let _nzClearText_decorators;
  let _nzClearText_initializers = [];
  let _nzClearText_extraInitializers = [];
  let _nzNowText_decorators;
  let _nzNowText_initializers = [];
  let _nzNowText_extraInitializers = [];
  let _nzOkText_decorators;
  let _nzOkText_initializers = [];
  let _nzOkText_extraInitializers = [];
  let _nzPopupClassName_decorators;
  let _nzPopupClassName_initializers = [];
  let _nzPopupClassName_extraInitializers = [];
  let _nzFormat_decorators;
  let _nzFormat_initializers = [];
  let _nzFormat_extraInitializers = [];
  let _nzUse12Hours_decorators;
  let _nzUse12Hours_initializers = [];
  let _nzUse12Hours_extraInitializers = [];
  let _nzSuffixIcon_decorators;
  let _nzSuffixIcon_initializers = [];
  let _nzSuffixIcon_extraInitializers = [];
  let _nzAllowEmpty_decorators;
  let _nzAllowEmpty_initializers = [];
  let _nzAllowEmpty_extraInitializers = [];
  let _nzBackdrop_decorators;
  let _nzBackdrop_initializers = [];
  let _nzBackdrop_extraInitializers = [];
  return class NzTimePickerComponent2 {
    static {
      const _metadata = typeof Symbol === "function" && Symbol.metadata ? /* @__PURE__ */ Object.create(null) : void 0;
      _nzHourStep_decorators = [WithConfig()];
      _nzMinuteStep_decorators = [WithConfig()];
      _nzSecondStep_decorators = [WithConfig()];
      _nzClearText_decorators = [WithConfig()];
      _nzNowText_decorators = [WithConfig()];
      _nzOkText_decorators = [WithConfig()];
      _nzPopupClassName_decorators = [WithConfig()];
      _nzFormat_decorators = [WithConfig()];
      _nzUse12Hours_decorators = [WithConfig()];
      _nzSuffixIcon_decorators = [WithConfig()];
      _nzAllowEmpty_decorators = [WithConfig()];
      _nzBackdrop_decorators = [WithConfig()];
      __esDecorate(null, null, _nzHourStep_decorators, {
        kind: "field",
        name: "nzHourStep",
        static: false,
        private: false,
        access: {
          has: (obj) => "nzHourStep" in obj,
          get: (obj) => obj.nzHourStep,
          set: (obj, value) => {
            obj.nzHourStep = value;
          }
        },
        metadata: _metadata
      }, _nzHourStep_initializers, _nzHourStep_extraInitializers);
      __esDecorate(null, null, _nzMinuteStep_decorators, {
        kind: "field",
        name: "nzMinuteStep",
        static: false,
        private: false,
        access: {
          has: (obj) => "nzMinuteStep" in obj,
          get: (obj) => obj.nzMinuteStep,
          set: (obj, value) => {
            obj.nzMinuteStep = value;
          }
        },
        metadata: _metadata
      }, _nzMinuteStep_initializers, _nzMinuteStep_extraInitializers);
      __esDecorate(null, null, _nzSecondStep_decorators, {
        kind: "field",
        name: "nzSecondStep",
        static: false,
        private: false,
        access: {
          has: (obj) => "nzSecondStep" in obj,
          get: (obj) => obj.nzSecondStep,
          set: (obj, value) => {
            obj.nzSecondStep = value;
          }
        },
        metadata: _metadata
      }, _nzSecondStep_initializers, _nzSecondStep_extraInitializers);
      __esDecorate(null, null, _nzClearText_decorators, {
        kind: "field",
        name: "nzClearText",
        static: false,
        private: false,
        access: {
          has: (obj) => "nzClearText" in obj,
          get: (obj) => obj.nzClearText,
          set: (obj, value) => {
            obj.nzClearText = value;
          }
        },
        metadata: _metadata
      }, _nzClearText_initializers, _nzClearText_extraInitializers);
      __esDecorate(null, null, _nzNowText_decorators, {
        kind: "field",
        name: "nzNowText",
        static: false,
        private: false,
        access: {
          has: (obj) => "nzNowText" in obj,
          get: (obj) => obj.nzNowText,
          set: (obj, value) => {
            obj.nzNowText = value;
          }
        },
        metadata: _metadata
      }, _nzNowText_initializers, _nzNowText_extraInitializers);
      __esDecorate(null, null, _nzOkText_decorators, {
        kind: "field",
        name: "nzOkText",
        static: false,
        private: false,
        access: {
          has: (obj) => "nzOkText" in obj,
          get: (obj) => obj.nzOkText,
          set: (obj, value) => {
            obj.nzOkText = value;
          }
        },
        metadata: _metadata
      }, _nzOkText_initializers, _nzOkText_extraInitializers);
      __esDecorate(null, null, _nzPopupClassName_decorators, {
        kind: "field",
        name: "nzPopupClassName",
        static: false,
        private: false,
        access: {
          has: (obj) => "nzPopupClassName" in obj,
          get: (obj) => obj.nzPopupClassName,
          set: (obj, value) => {
            obj.nzPopupClassName = value;
          }
        },
        metadata: _metadata
      }, _nzPopupClassName_initializers, _nzPopupClassName_extraInitializers);
      __esDecorate(null, null, _nzFormat_decorators, {
        kind: "field",
        name: "nzFormat",
        static: false,
        private: false,
        access: {
          has: (obj) => "nzFormat" in obj,
          get: (obj) => obj.nzFormat,
          set: (obj, value) => {
            obj.nzFormat = value;
          }
        },
        metadata: _metadata
      }, _nzFormat_initializers, _nzFormat_extraInitializers);
      __esDecorate(null, null, _nzUse12Hours_decorators, {
        kind: "field",
        name: "nzUse12Hours",
        static: false,
        private: false,
        access: {
          has: (obj) => "nzUse12Hours" in obj,
          get: (obj) => obj.nzUse12Hours,
          set: (obj, value) => {
            obj.nzUse12Hours = value;
          }
        },
        metadata: _metadata
      }, _nzUse12Hours_initializers, _nzUse12Hours_extraInitializers);
      __esDecorate(null, null, _nzSuffixIcon_decorators, {
        kind: "field",
        name: "nzSuffixIcon",
        static: false,
        private: false,
        access: {
          has: (obj) => "nzSuffixIcon" in obj,
          get: (obj) => obj.nzSuffixIcon,
          set: (obj, value) => {
            obj.nzSuffixIcon = value;
          }
        },
        metadata: _metadata
      }, _nzSuffixIcon_initializers, _nzSuffixIcon_extraInitializers);
      __esDecorate(null, null, _nzAllowEmpty_decorators, {
        kind: "field",
        name: "nzAllowEmpty",
        static: false,
        private: false,
        access: {
          has: (obj) => "nzAllowEmpty" in obj,
          get: (obj) => obj.nzAllowEmpty,
          set: (obj, value) => {
            obj.nzAllowEmpty = value;
          }
        },
        metadata: _metadata
      }, _nzAllowEmpty_initializers, _nzAllowEmpty_extraInitializers);
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
    i18n;
    element;
    renderer;
    cdr;
    dateHelper;
    platform;
    directionality;
    _nzModuleName = NZ_CONFIG_MODULE_NAME;
    _onChange;
    _onTouched;
    destroy$ = inject(NzDestroyService);
    isNzDisableFirstChange = true;
    isInit = false;
    focused = false;
    inputValue = "";
    value = null;
    preValue = null;
    inputSize;
    i18nPlaceHolder$ = of(void 0);
    overlayPositions = [{
      offsetY: 3,
      originX: "start",
      originY: "bottom",
      overlayX: "start",
      overlayY: "top"
    }, {
      offsetY: -3,
      originX: "start",
      originY: "top",
      overlayX: "start",
      overlayY: "bottom"
    }, {
      offsetY: 3,
      originX: "end",
      originY: "bottom",
      overlayX: "end",
      overlayY: "top"
    }, {
      offsetY: -3,
      originX: "end",
      originY: "top",
      overlayX: "end",
      overlayY: "bottom"
    }];
    dir = "ltr";
    // status
    prefixCls = "ant-picker";
    statusCls = {};
    status = "";
    hasFeedback = false;
    get origin() {
      return this.element;
    }
    inputRef;
    nzId = null;
    nzSize = "default";
    nzStatus = "";
    nzHourStep = __runInitializers(this, _nzHourStep_initializers, 1);
    nzMinuteStep = (__runInitializers(this, _nzHourStep_extraInitializers), __runInitializers(this, _nzMinuteStep_initializers, 1));
    nzSecondStep = (__runInitializers(this, _nzMinuteStep_extraInitializers), __runInitializers(this, _nzSecondStep_initializers, 1));
    nzClearText = (__runInitializers(this, _nzSecondStep_extraInitializers), __runInitializers(this, _nzClearText_initializers, "clear"));
    nzNowText = (__runInitializers(this, _nzClearText_extraInitializers), __runInitializers(this, _nzNowText_initializers, ""));
    nzOkText = (__runInitializers(this, _nzNowText_extraInitializers), __runInitializers(this, _nzOkText_initializers, ""));
    nzPopupClassName = (__runInitializers(this, _nzOkText_extraInitializers), __runInitializers(this, _nzPopupClassName_initializers, ""));
    nzPlaceHolder = (__runInitializers(this, _nzPopupClassName_extraInitializers), "");
    nzAddOn;
    nzDefaultOpenValue;
    nzDisabledHours;
    nzDisabledMinutes;
    nzDisabledSeconds;
    nzFormat = __runInitializers(this, _nzFormat_initializers, "HH:mm:ss");
    nzOpen = (__runInitializers(this, _nzFormat_extraInitializers), false);
    nzUse12Hours = __runInitializers(this, _nzUse12Hours_initializers, false);
    nzSuffixIcon = (__runInitializers(this, _nzUse12Hours_extraInitializers), __runInitializers(this, _nzSuffixIcon_initializers, "clock-circle"));
    nzOpenChange = (__runInitializers(this, _nzSuffixIcon_extraInitializers), new EventEmitter());
    nzHideDisabledOptions = false;
    nzAllowEmpty = __runInitializers(this, _nzAllowEmpty_initializers, true);
    nzDisabled = (__runInitializers(this, _nzAllowEmpty_extraInitializers), false);
    nzAutoFocus = false;
    nzBackdrop = __runInitializers(this, _nzBackdrop_initializers, false);
    nzBorderless = (__runInitializers(this, _nzBackdrop_extraInitializers), false);
    nzInputReadOnly = false;
    emitValue(value) {
      this.setValue(value, true);
      if (this._onChange) {
        this._onChange(this.value);
      }
      if (this._onTouched) {
        this._onTouched();
      }
    }
    setValue(value, syncPreValue = false) {
      if (syncPreValue) {
        this.preValue = isValid(value) ? new Date(value) : null;
      }
      this.value = isValid(value) ? new Date(value) : null;
      this.inputValue = this.dateHelper.format(value, this.nzFormat);
      this.cdr.markForCheck();
    }
    open() {
      if (this.nzDisabled || this.nzOpen) {
        return;
      }
      this.focus();
      this.nzOpen = true;
      this.nzOpenChange.emit(this.nzOpen);
    }
    close() {
      this.nzOpen = false;
      this.cdr.markForCheck();
      this.nzOpenChange.emit(this.nzOpen);
    }
    updateAutoFocus() {
      if (this.isInit && !this.nzDisabled) {
        if (this.nzAutoFocus) {
          this.renderer.setAttribute(this.inputRef.nativeElement, "autofocus", "autofocus");
        } else {
          this.renderer.removeAttribute(this.inputRef.nativeElement, "autofocus");
        }
      }
    }
    onClickClearBtn(event) {
      event.stopPropagation();
      this.emitValue(null);
    }
    onClickOutside(event) {
      const target = _getEventTarget(event);
      if (!this.element.nativeElement.contains(target)) {
        this.setCurrentValueAndClose();
      }
    }
    onFocus(value) {
      this.focused = value;
      if (!value) {
        if (this.checkTimeValid(this.value)) {
          this.setCurrentValueAndClose();
        } else {
          this.setValue(this.preValue);
          this.close();
        }
      }
    }
    focus() {
      if (this.inputRef.nativeElement) {
        this.inputRef.nativeElement.focus();
      }
    }
    blur() {
      if (this.inputRef.nativeElement) {
        this.inputRef.nativeElement.blur();
      }
    }
    onKeyupEsc() {
      this.setValue(this.preValue);
    }
    onKeyupEnter() {
      if (this.nzOpen && isValid(this.value)) {
        this.setCurrentValueAndClose();
      } else if (!this.nzOpen) {
        this.open();
      }
    }
    onInputChange(str) {
      if (!this.platform.TRIDENT && document.activeElement === this.inputRef.nativeElement) {
        this.open();
        this.parseTimeString(str);
      }
    }
    onPanelValueChange(value) {
      this.setValue(value);
      this.focus();
    }
    closePanel() {
      this.inputRef.nativeElement.blur();
    }
    setCurrentValueAndClose() {
      this.emitValue(this.value);
      this.close();
    }
    finalSize = computed(() => {
      if (this.compactSize) {
        return this.compactSize();
      }
      return this.size();
    });
    size = signal(this.nzSize);
    compactSize = inject(NZ_SPACE_COMPACT_SIZE, {
      optional: true
    });
    nzFormStatusService = inject(NzFormStatusService, {
      optional: true
    });
    nzFormNoStatusService = inject(NzFormNoStatusService, {
      optional: true
    });
    constructor(nzConfigService, i18n, element, renderer, cdr, dateHelper, platform, directionality) {
      this.nzConfigService = nzConfigService;
      this.i18n = i18n;
      this.element = element;
      this.renderer = renderer;
      this.cdr = cdr;
      this.dateHelper = dateHelper;
      this.platform = platform;
      this.directionality = directionality;
    }
    ngOnInit() {
      this.nzFormStatusService?.formStatusChanges.pipe(distinctUntilChanged((pre, cur) => {
        return pre.status === cur.status && pre.hasFeedback === cur.hasFeedback;
      }), withLatestFrom(this.nzFormNoStatusService ? this.nzFormNoStatusService.noFormStatus : of(false)), map(([{
        status,
        hasFeedback
      }, noStatus]) => ({
        status: noStatus ? "" : status,
        hasFeedback
      })), takeUntil(this.destroy$)).subscribe(({
        status,
        hasFeedback
      }) => {
        this.setStatusStyles(status, hasFeedback);
      });
      this.inputSize = Math.max(8, this.nzFormat.length) + 2;
      this.i18nPlaceHolder$ = this.i18n.localeChange.pipe(map((nzLocale) => nzLocale.TimePicker.placeholder));
      this.dir = this.directionality.value;
      this.directionality.change?.pipe(takeUntil(this.destroy$)).subscribe((direction) => {
        this.dir = direction;
      });
    }
    ngOnChanges({
      nzUse12Hours,
      nzFormat,
      nzDisabled,
      nzAutoFocus,
      nzStatus,
      nzSize
    }) {
      if (nzUse12Hours && !nzUse12Hours.previousValue && nzUse12Hours.currentValue && !nzFormat) {
        this.nzFormat = "h:mm:ss a";
      }
      if (nzDisabled) {
        const value = nzDisabled.currentValue;
        const input = this.inputRef.nativeElement;
        if (value) {
          this.renderer.setAttribute(input, "disabled", "");
        } else {
          this.renderer.removeAttribute(input, "disabled");
        }
      }
      if (nzAutoFocus) {
        this.updateAutoFocus();
      }
      if (nzStatus) {
        this.setStatusStyles(this.nzStatus, this.hasFeedback);
      }
      if (nzSize) {
        this.size.set(nzSize.currentValue);
      }
    }
    parseTimeString(str) {
      const value = this.dateHelper.parseTime(str, this.nzFormat) || null;
      if (isValid(value)) {
        this.value = value;
        this.cdr.markForCheck();
      }
    }
    ngAfterViewInit() {
      this.isInit = true;
      this.updateAutoFocus();
    }
    writeValue(time) {
      let result;
      if (time instanceof Date) {
        result = time;
      } else if (isNil(time)) {
        result = null;
      } else {
        warn('Non-Date type is not recommended for time-picker, use "Date" type.');
        result = new Date(time);
      }
      this.setValue(result, true);
    }
    registerOnChange(fn) {
      this._onChange = fn;
    }
    registerOnTouched(fn) {
      this._onTouched = fn;
    }
    setDisabledState(isDisabled) {
      this.nzDisabled = this.isNzDisableFirstChange && this.nzDisabled || isDisabled;
      this.isNzDisableFirstChange = false;
      this.cdr.markForCheck();
    }
    checkTimeValid(value) {
      if (!value) {
        return true;
      }
      const disabledHours = this.nzDisabledHours?.();
      const disabledMinutes = this.nzDisabledMinutes?.(value.getHours());
      const disabledSeconds = this.nzDisabledSeconds?.(value.getHours(), value.getMinutes());
      return !(disabledHours?.includes(value.getHours()) || disabledMinutes?.includes(value.getMinutes()) || disabledSeconds?.includes(value.getSeconds()));
    }
    setStatusStyles(status, hasFeedback) {
      this.status = status;
      this.hasFeedback = hasFeedback;
      this.cdr.markForCheck();
      this.statusCls = getStatusClassNames(this.prefixCls, status, hasFeedback);
      Object.keys(this.statusCls).forEach((status2) => {
        if (this.statusCls[status2]) {
          this.renderer.addClass(this.element.nativeElement, status2);
        } else {
          this.renderer.removeClass(this.element.nativeElement, status2);
        }
      });
    }
    static \u0275fac = function NzTimePickerComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || NzTimePickerComponent2)(\u0275\u0275directiveInject(NzConfigService), \u0275\u0275directiveInject(NzI18nService), \u0275\u0275directiveInject(ElementRef), \u0275\u0275directiveInject(Renderer2), \u0275\u0275directiveInject(ChangeDetectorRef), \u0275\u0275directiveInject(DateHelperService), \u0275\u0275directiveInject(Platform), \u0275\u0275directiveInject(Directionality));
    };
    static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
      type: NzTimePickerComponent2,
      selectors: [["nz-time-picker"]],
      viewQuery: function NzTimePickerComponent_Query(rf, ctx) {
        if (rf & 1) {
          \u0275\u0275viewQuery(_c4, 7);
        }
        if (rf & 2) {
          let _t;
          \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.inputRef = _t.first);
        }
      },
      hostAttrs: [1, "ant-picker"],
      hostVars: 12,
      hostBindings: function NzTimePickerComponent_HostBindings(rf, ctx) {
        if (rf & 1) {
          \u0275\u0275listener("click", function NzTimePickerComponent_click_HostBindingHandler() {
            return ctx.open();
          });
        }
        if (rf & 2) {
          \u0275\u0275classProp("ant-picker-large", ctx.finalSize() === "large")("ant-picker-small", ctx.finalSize() === "small")("ant-picker-disabled", ctx.nzDisabled)("ant-picker-focused", ctx.focused)("ant-picker-rtl", ctx.dir === "rtl")("ant-picker-borderless", ctx.nzBorderless);
        }
      },
      inputs: {
        nzId: "nzId",
        nzSize: "nzSize",
        nzStatus: "nzStatus",
        nzHourStep: "nzHourStep",
        nzMinuteStep: "nzMinuteStep",
        nzSecondStep: "nzSecondStep",
        nzClearText: "nzClearText",
        nzNowText: "nzNowText",
        nzOkText: "nzOkText",
        nzPopupClassName: "nzPopupClassName",
        nzPlaceHolder: "nzPlaceHolder",
        nzAddOn: "nzAddOn",
        nzDefaultOpenValue: "nzDefaultOpenValue",
        nzDisabledHours: "nzDisabledHours",
        nzDisabledMinutes: "nzDisabledMinutes",
        nzDisabledSeconds: "nzDisabledSeconds",
        nzFormat: "nzFormat",
        nzOpen: "nzOpen",
        nzUse12Hours: [2, "nzUse12Hours", "nzUse12Hours", booleanAttribute],
        nzSuffixIcon: "nzSuffixIcon",
        nzHideDisabledOptions: [2, "nzHideDisabledOptions", "nzHideDisabledOptions", booleanAttribute],
        nzAllowEmpty: [2, "nzAllowEmpty", "nzAllowEmpty", booleanAttribute],
        nzDisabled: [2, "nzDisabled", "nzDisabled", booleanAttribute],
        nzAutoFocus: [2, "nzAutoFocus", "nzAutoFocus", booleanAttribute],
        nzBackdrop: "nzBackdrop",
        nzBorderless: [2, "nzBorderless", "nzBorderless", booleanAttribute],
        nzInputReadOnly: [2, "nzInputReadOnly", "nzInputReadOnly", booleanAttribute]
      },
      outputs: {
        nzOpenChange: "nzOpenChange"
      },
      exportAs: ["nzTimePicker"],
      features: [\u0275\u0275ProvidersFeature([NzDestroyService, {
        provide: NG_VALUE_ACCESSOR,
        useExisting: forwardRef(() => NzTimePickerComponent2),
        multi: true
      }, {
        provide: NZ_SPACE_COMPACT_ITEM_TYPE,
        useValue: "picker"
      }]), \u0275\u0275HostDirectivesFeature([NzSpaceCompactItemDirective]), \u0275\u0275NgOnChangesFeature],
      decls: 9,
      vars: 16,
      consts: [["inputElement", ""], [1, "ant-picker-input"], ["type", "text", "autocomplete", "off", 3, "ngModelChange", "focus", "blur", "keyup.enter", "keyup.escape", "size", "placeholder", "ngModel", "disabled", "readOnly"], [1, "ant-picker-suffix"], [4, "nzStringTemplateOutlet"], [3, "status"], [1, "ant-picker-clear"], ["cdkConnectedOverlay", "", "nzConnectedOverlay", "", 3, "detach", "overlayOutsideClick", "cdkConnectedOverlayHasBackdrop", "cdkConnectedOverlayPositions", "cdkConnectedOverlayOrigin", "cdkConnectedOverlayOpen", "cdkConnectedOverlayTransformOriginOn"], [3, "nzType"], [1, "ant-picker-clear", 3, "click"], ["nzType", "close-circle", "nzTheme", "fill"], [1, "ant-picker-dropdown", 2, "position", "relative"], [1, "ant-picker-panel-container"], ["tabindex", "-1", 1, "ant-picker-panel"], [3, "ngModelChange", "closePanel", "format", "nzHourStep", "nzMinuteStep", "nzSecondStep", "nzDisabledHours", "nzDisabledMinutes", "nzDisabledSeconds", "nzPlaceHolder", "nzHideDisabledOptions", "nzUse12Hours", "nzDefaultOpenValue", "nzAddOn", "nzClearText", "nzNowText", "nzOkText", "nzAllowEmpty", "ngModel"]],
      template: function NzTimePickerComponent_Template(rf, ctx) {
        if (rf & 1) {
          const _r1 = \u0275\u0275getCurrentView();
          \u0275\u0275elementStart(0, "div", 1)(1, "input", 2, 0);
          \u0275\u0275pipe(3, "async");
          \u0275\u0275twoWayListener("ngModelChange", function NzTimePickerComponent_Template_input_ngModelChange_1_listener($event) {
            \u0275\u0275restoreView(_r1);
            \u0275\u0275twoWayBindingSet(ctx.inputValue, $event) || (ctx.inputValue = $event);
            return \u0275\u0275resetView($event);
          });
          \u0275\u0275listener("focus", function NzTimePickerComponent_Template_input_focus_1_listener() {
            \u0275\u0275restoreView(_r1);
            return \u0275\u0275resetView(ctx.onFocus(true));
          })("blur", function NzTimePickerComponent_Template_input_blur_1_listener() {
            \u0275\u0275restoreView(_r1);
            return \u0275\u0275resetView(ctx.onFocus(false));
          })("keyup.enter", function NzTimePickerComponent_Template_input_keyup_enter_1_listener() {
            \u0275\u0275restoreView(_r1);
            return \u0275\u0275resetView(ctx.onKeyupEnter());
          })("keyup.escape", function NzTimePickerComponent_Template_input_keyup_escape_1_listener() {
            \u0275\u0275restoreView(_r1);
            return \u0275\u0275resetView(ctx.onKeyupEsc());
          })("ngModelChange", function NzTimePickerComponent_Template_input_ngModelChange_1_listener($event) {
            \u0275\u0275restoreView(_r1);
            return \u0275\u0275resetView(ctx.onInputChange($event));
          });
          \u0275\u0275elementEnd();
          \u0275\u0275elementStart(4, "span", 3);
          \u0275\u0275template(5, NzTimePickerComponent_ng_container_5_Template, 2, 1, "ng-container", 4)(6, NzTimePickerComponent_Conditional_6_Template, 1, 1, "nz-form-item-feedback-icon", 5);
          \u0275\u0275elementEnd();
          \u0275\u0275template(7, NzTimePickerComponent_Conditional_7_Template, 2, 2, "span", 6);
          \u0275\u0275elementEnd();
          \u0275\u0275template(8, NzTimePickerComponent_ng_template_8_Template, 5, 22, "ng-template", 7);
          \u0275\u0275listener("detach", function NzTimePickerComponent_Template_ng_template_detach_8_listener() {
            \u0275\u0275restoreView(_r1);
            return \u0275\u0275resetView(ctx.close());
          })("overlayOutsideClick", function NzTimePickerComponent_Template_ng_template_overlayOutsideClick_8_listener($event) {
            \u0275\u0275restoreView(_r1);
            return \u0275\u0275resetView(ctx.onClickOutside($event));
          });
        }
        if (rf & 2) {
          \u0275\u0275advance();
          \u0275\u0275property("size", ctx.inputSize)("placeholder", ctx.nzPlaceHolder || \u0275\u0275pipeBind1(3, 14, ctx.i18nPlaceHolder$));
          \u0275\u0275twoWayProperty("ngModel", ctx.inputValue);
          \u0275\u0275property("disabled", ctx.nzDisabled)("readOnly", ctx.nzInputReadOnly);
          \u0275\u0275attribute("id", ctx.nzId);
          \u0275\u0275advance(4);
          \u0275\u0275property("nzStringTemplateOutlet", ctx.nzSuffixIcon);
          \u0275\u0275advance();
          \u0275\u0275conditional(ctx.hasFeedback && !!ctx.status ? 6 : -1);
          \u0275\u0275advance();
          \u0275\u0275conditional(ctx.nzAllowEmpty && !ctx.nzDisabled && ctx.value ? 7 : -1);
          \u0275\u0275advance();
          \u0275\u0275property("cdkConnectedOverlayHasBackdrop", ctx.nzBackdrop)("cdkConnectedOverlayPositions", ctx.overlayPositions)("cdkConnectedOverlayOrigin", ctx.origin)("cdkConnectedOverlayOpen", ctx.nzOpen)("cdkConnectedOverlayTransformOriginOn", ".ant-picker-dropdown");
        }
      },
      dependencies: [AsyncPipe, FormsModule, DefaultValueAccessor, NgControlStatus, NgModel, NzOutletModule, NzStringTemplateOutletDirective, NzIconModule, NzIconDirective, NzFormItemFeedbackIconComponent, NzTimePickerPanelComponent, NzOverlayModule, NzConnectedOverlayDirective, OverlayModule, CdkConnectedOverlay],
      encapsulation: 2,
      data: {
        animation: [slideMotion]
      },
      changeDetection: 0
    });
  };
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzTimePickerComponent, [{
    type: Component,
    args: [{
      encapsulation: ViewEncapsulation.None,
      changeDetection: ChangeDetectionStrategy.OnPush,
      selector: "nz-time-picker",
      exportAs: "nzTimePicker",
      template: `
    <div class="ant-picker-input">
      <input
        #inputElement
        [attr.id]="nzId"
        type="text"
        [size]="inputSize"
        autocomplete="off"
        [placeholder]="nzPlaceHolder || (i18nPlaceHolder$ | async)"
        [(ngModel)]="inputValue"
        [disabled]="nzDisabled"
        [readOnly]="nzInputReadOnly"
        (focus)="onFocus(true)"
        (blur)="onFocus(false)"
        (keyup.enter)="onKeyupEnter()"
        (keyup.escape)="onKeyupEsc()"
        (ngModelChange)="onInputChange($event)"
      />
      <span class="ant-picker-suffix">
        <ng-container *nzStringTemplateOutlet="nzSuffixIcon; let suffixIcon">
          <nz-icon [nzType]="suffixIcon" />
        </ng-container>
        @if (hasFeedback && !!status) {
          <nz-form-item-feedback-icon [status]="status"></nz-form-item-feedback-icon>
        }
      </span>
      @if (nzAllowEmpty && !nzDisabled && value) {
        <span class="ant-picker-clear" (click)="onClickClearBtn($event)">
          <nz-icon nzType="close-circle" nzTheme="fill" [attr.aria-label]="nzClearText" [attr.title]="nzClearText" />
        </span>
      }
    </div>

    <ng-template
      cdkConnectedOverlay
      nzConnectedOverlay
      [cdkConnectedOverlayHasBackdrop]="nzBackdrop"
      [cdkConnectedOverlayPositions]="overlayPositions"
      [cdkConnectedOverlayOrigin]="origin"
      [cdkConnectedOverlayOpen]="nzOpen"
      [cdkConnectedOverlayTransformOriginOn]="'.ant-picker-dropdown'"
      (detach)="close()"
      (overlayOutsideClick)="onClickOutside($event)"
    >
      <div [@slideMotion]="'enter'" class="ant-picker-dropdown" style="position: relative">
        <div class="ant-picker-panel-container">
          <div tabindex="-1" class="ant-picker-panel">
            <nz-time-picker-panel
              [class]="nzPopupClassName"
              [format]="nzFormat"
              [nzHourStep]="nzHourStep"
              [nzMinuteStep]="nzMinuteStep"
              [nzSecondStep]="nzSecondStep"
              [nzDisabledHours]="nzDisabledHours"
              [nzDisabledMinutes]="nzDisabledMinutes"
              [nzDisabledSeconds]="nzDisabledSeconds"
              [nzPlaceHolder]="nzPlaceHolder || (i18nPlaceHolder$ | async)"
              [nzHideDisabledOptions]="nzHideDisabledOptions"
              [nzUse12Hours]="nzUse12Hours"
              [nzDefaultOpenValue]="nzDefaultOpenValue"
              [nzAddOn]="nzAddOn"
              [nzClearText]="nzClearText"
              [nzNowText]="nzNowText"
              [nzOkText]="nzOkText"
              [nzAllowEmpty]="nzAllowEmpty"
              [(ngModel)]="value"
              (ngModelChange)="onPanelValueChange($event)"
              (closePanel)="closePanel()"
            ></nz-time-picker-panel>
          </div>
        </div>
      </div>
    </ng-template>
  `,
      host: {
        class: "ant-picker",
        "[class.ant-picker-large]": `finalSize() === 'large'`,
        "[class.ant-picker-small]": `finalSize() === 'small'`,
        "[class.ant-picker-disabled]": `nzDisabled`,
        "[class.ant-picker-focused]": `focused`,
        "[class.ant-picker-rtl]": `dir === 'rtl'`,
        "[class.ant-picker-borderless]": `nzBorderless`,
        "(click)": "open()"
      },
      hostDirectives: [NzSpaceCompactItemDirective],
      animations: [slideMotion],
      providers: [NzDestroyService, {
        provide: NG_VALUE_ACCESSOR,
        useExisting: forwardRef(() => NzTimePickerComponent),
        multi: true
      }, {
        provide: NZ_SPACE_COMPACT_ITEM_TYPE,
        useValue: "picker"
      }],
      imports: [AsyncPipe, FormsModule, NzOutletModule, NzIconModule, NzFormItemFeedbackIconComponent, NzTimePickerPanelComponent, NzOverlayModule, OverlayModule]
    }]
  }], () => [{
    type: NzConfigService
  }, {
    type: NzI18nService
  }, {
    type: ElementRef
  }, {
    type: Renderer2
  }, {
    type: ChangeDetectorRef
  }, {
    type: DateHelperService
  }, {
    type: Platform
  }, {
    type: Directionality
  }], {
    inputRef: [{
      type: ViewChild,
      args: ["inputElement", {
        static: true
      }]
    }],
    nzId: [{
      type: Input
    }],
    nzSize: [{
      type: Input
    }],
    nzStatus: [{
      type: Input
    }],
    nzHourStep: [{
      type: Input
    }],
    nzMinuteStep: [{
      type: Input
    }],
    nzSecondStep: [{
      type: Input
    }],
    nzClearText: [{
      type: Input
    }],
    nzNowText: [{
      type: Input
    }],
    nzOkText: [{
      type: Input
    }],
    nzPopupClassName: [{
      type: Input
    }],
    nzPlaceHolder: [{
      type: Input
    }],
    nzAddOn: [{
      type: Input
    }],
    nzDefaultOpenValue: [{
      type: Input
    }],
    nzDisabledHours: [{
      type: Input
    }],
    nzDisabledMinutes: [{
      type: Input
    }],
    nzDisabledSeconds: [{
      type: Input
    }],
    nzFormat: [{
      type: Input
    }],
    nzOpen: [{
      type: Input
    }],
    nzUse12Hours: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    nzSuffixIcon: [{
      type: Input
    }],
    nzOpenChange: [{
      type: Output
    }],
    nzHideDisabledOptions: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    nzAllowEmpty: [{
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
    nzAutoFocus: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    nzBackdrop: [{
      type: Input
    }],
    nzBorderless: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    nzInputReadOnly: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }]
  });
})();
var NzTimePickerModule = class _NzTimePickerModule {
  static \u0275fac = function NzTimePickerModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _NzTimePickerModule)();
  };
  static \u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
    type: _NzTimePickerModule
  });
  static \u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({
    imports: [NzTimePickerComponent, NzTimePickerPanelComponent]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzTimePickerModule, [{
    type: NgModule,
    args: [{
      imports: [NzTimePickerComponent, NzTimePickerPanelComponent],
      exports: [NzTimePickerPanelComponent, NzTimePickerComponent]
    }]
  }], null, null);
})();

// node_modules/ng-zorro-antd/fesm2022/ng-zorro-antd-cdk-resize-observer.mjs
var NzResizeObserverFactory = class _NzResizeObserverFactory {
  create(callback) {
    return typeof ResizeObserver === "undefined" ? null : new ResizeObserver(callback);
  }
  static \u0275fac = function NzResizeObserverFactory_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _NzResizeObserverFactory)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
    token: _NzResizeObserverFactory,
    factory: _NzResizeObserverFactory.\u0275fac,
    providedIn: "root"
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzResizeObserverFactory, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();
var NzResizeObserver = class _NzResizeObserver {
  nzResizeObserverFactory;
  /** Keeps track of the existing ResizeObservers so they can be reused. */
  observedElements = /* @__PURE__ */ new Map();
  constructor(nzResizeObserverFactory) {
    this.nzResizeObserverFactory = nzResizeObserverFactory;
  }
  ngOnDestroy() {
    this.observedElements.forEach((_, element) => this.cleanupObserver(element));
  }
  observe(elementOrRef) {
    const element = coerceElement(elementOrRef);
    return new Observable((observer) => {
      const stream = this.observeElement(element);
      const subscription = stream.subscribe(observer);
      return () => {
        subscription.unsubscribe();
        this.unobserveElement(element);
      };
    });
  }
  /**
   * Observes the given element by using the existing ResizeObserver if available, or creating a
   * new one if not.
   */
  observeElement(element) {
    if (!this.observedElements.has(element)) {
      const stream = new Subject();
      const observer = this.nzResizeObserverFactory.create((mutations) => stream.next(mutations));
      if (observer) {
        observer.observe(element);
      }
      this.observedElements.set(element, {
        observer,
        stream,
        count: 1
      });
    } else {
      this.observedElements.get(element).count++;
    }
    return this.observedElements.get(element).stream;
  }
  /**
   * Un-observes the given element and cleans up the underlying ResizeObserver if nobody else is
   * observing this element.
   */
  unobserveElement(element) {
    if (this.observedElements.has(element)) {
      this.observedElements.get(element).count--;
      if (!this.observedElements.get(element).count) {
        this.cleanupObserver(element);
      }
    }
  }
  /** Clean up the underlying ResizeObserver for the specified element. */
  cleanupObserver(element) {
    if (this.observedElements.has(element)) {
      const {
        observer,
        stream
      } = this.observedElements.get(element);
      if (observer) {
        observer.disconnect();
      }
      stream.complete();
      this.observedElements.delete(element);
    }
  }
  static \u0275fac = function NzResizeObserver_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _NzResizeObserver)(\u0275\u0275inject(NzResizeObserverFactory));
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
    token: _NzResizeObserver,
    factory: _NzResizeObserver.\u0275fac,
    providedIn: "root"
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzResizeObserver, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{
    type: NzResizeObserverFactory
  }], null);
})();
var NzResizeObserverDirective = class _NzResizeObserverDirective {
  nzResizeObserver;
  elementRef;
  nzResizeObserve = new EventEmitter();
  nzResizeObserverDisabled = false;
  currentSubscription = null;
  subscribe() {
    this.unsubscribe();
    this.currentSubscription = this.nzResizeObserver.observe(this.elementRef).subscribe(this.nzResizeObserve);
  }
  unsubscribe() {
    this.currentSubscription?.unsubscribe();
  }
  constructor(nzResizeObserver, elementRef) {
    this.nzResizeObserver = nzResizeObserver;
    this.elementRef = elementRef;
  }
  ngAfterContentInit() {
    if (!this.currentSubscription && !this.nzResizeObserverDisabled) {
      this.subscribe();
    }
  }
  ngOnDestroy() {
    this.unsubscribe();
  }
  ngOnChanges(changes) {
    const {
      nzResizeObserve
    } = changes;
    if (nzResizeObserve) {
      if (this.nzResizeObserverDisabled) {
        this.unsubscribe();
      } else {
        this.subscribe();
      }
    }
  }
  static \u0275fac = function NzResizeObserverDirective_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _NzResizeObserverDirective)(\u0275\u0275directiveInject(NzResizeObserver), \u0275\u0275directiveInject(ElementRef));
  };
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _NzResizeObserverDirective,
    selectors: [["", "nzResizeObserver", ""]],
    inputs: {
      nzResizeObserverDisabled: [2, "nzResizeObserverDisabled", "nzResizeObserverDisabled", booleanAttribute]
    },
    outputs: {
      nzResizeObserve: "nzResizeObserve"
    },
    features: [\u0275\u0275ProvidersFeature([NzResizeObserverFactory]), \u0275\u0275NgOnChangesFeature]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzResizeObserverDirective, [{
    type: Directive,
    args: [{
      selector: "[nzResizeObserver]",
      providers: [NzResizeObserverFactory]
    }]
  }], () => [{
    type: NzResizeObserver
  }, {
    type: ElementRef
  }], {
    nzResizeObserve: [{
      type: Output
    }],
    nzResizeObserverDisabled: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }]
  });
})();
var NzResizeObserverModule = class _NzResizeObserverModule {
  static \u0275fac = function NzResizeObserverModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _NzResizeObserverModule)();
  };
  static \u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
    type: _NzResizeObserverModule
  });
  static \u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({});
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzResizeObserverModule, [{
    type: NgModule,
    args: [{
      imports: [NzResizeObserverDirective],
      exports: [NzResizeObserverDirective]
    }]
  }], null, null);
})();

// node_modules/ng-zorro-antd/fesm2022/ng-zorro-antd-date-picker.mjs
function CalendarFooterComponent_Conditional_1_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275textInterpolate(ctx_r0.extraFooter);
  }
}
function CalendarFooterComponent_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div");
    \u0275\u0275template(1, CalendarFooterComponent_Conditional_1_ng_template_1_Template, 1, 1, "ng-template", 2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275classMapInterpolate1("", ctx_r0.prefixCls, "-footer-extra");
    \u0275\u0275advance();
    \u0275\u0275property("nzStringTemplateOutlet", ctx_r0.extraFooter);
  }
}
function CalendarFooterComponent_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "a", 3);
    \u0275\u0275listener("click", function CalendarFooterComponent_Conditional_2_Template_a_click_0_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.isTodayDisabled ? null : ctx_r0.onClickToday());
    });
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275classMapInterpolate2("", ctx_r0.prefixCls, "-today-btn ", ctx_r0.isTodayDisabled ? ctx_r0.prefixCls + "-today-btn-disabled" : "", "");
    \u0275\u0275propertyInterpolate("title", ctx_r0.todayTitle);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.locale.today, " ");
  }
}
function CalendarFooterComponent_Conditional_3_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0);
  }
}
function CalendarFooterComponent_Conditional_3_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "li")(1, "a", 5);
    \u0275\u0275listener("click", function CalendarFooterComponent_Conditional_3_Conditional_2_Template_a_click_1_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.isTodayDisabled ? null : ctx_r0.onClickToday());
    });
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275classMapInterpolate1("", ctx_r0.prefixCls, "-now");
    \u0275\u0275advance();
    \u0275\u0275classMapInterpolate1("", ctx_r0.prefixCls, "-now-btn");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.locale.now, " ");
  }
}
function CalendarFooterComponent_Conditional_3_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "li")(1, "button", 6);
    \u0275\u0275listener("click", function CalendarFooterComponent_Conditional_3_Conditional_3_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.okDisabled ? null : ctx_r0.clickOk.emit());
    });
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275classMapInterpolate1("", ctx_r0.prefixCls, "-ok");
    \u0275\u0275advance();
    \u0275\u0275property("disabled", ctx_r0.okDisabled);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.locale.ok, " ");
  }
}
function CalendarFooterComponent_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "ul");
    \u0275\u0275template(1, CalendarFooterComponent_Conditional_3_ng_container_1_Template, 1, 0, "ng-container", 4)(2, CalendarFooterComponent_Conditional_3_Conditional_2_Template, 3, 7, "li", 0)(3, CalendarFooterComponent_Conditional_3_Conditional_3_Template, 3, 5, "li", 0);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275classMapInterpolate1("", ctx_r0.prefixCls, "-ranges");
    \u0275\u0275advance();
    \u0275\u0275property("ngTemplateOutlet", ctx_r0.rangeQuickSelector);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.showNow ? 2 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.hasTimePicker ? 3 : -1);
  }
}
function _forTrack0($index, $item) {
  return this.trackBySelector($item);
}
function DecadeHeaderComponent_For_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 6);
    \u0275\u0275listener("click", function DecadeHeaderComponent_For_7_Template_button_click_0_listener() {
      const selector_r2 = \u0275\u0275restoreView(_r1).$implicit;
      return \u0275\u0275resetView(selector_r2.onClick());
    });
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const selector_r2 = ctx.$implicit;
    \u0275\u0275classMap(selector_r2.className);
    \u0275\u0275propertyInterpolate("title", selector_r2.title || null);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", selector_r2.label, " ");
  }
}
var _c03 = (a0) => ({
  $implicit: a0
});
var _forTrack1 = ($index, $item) => $item.trackByIndex;
function DecadeTableComponent_Conditional_1_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "th", 3);
  }
}
function DecadeTableComponent_Conditional_1_For_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 4);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const cell_r1 = ctx.$implicit;
    \u0275\u0275property("title", cell_r1.title);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", cell_r1.content, "");
  }
}
function DecadeTableComponent_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "thead")(1, "tr", 2);
    \u0275\u0275template(2, DecadeTableComponent_Conditional_1_Conditional_2_Template, 1, 0, "th", 3);
    \u0275\u0275repeaterCreate(3, DecadeTableComponent_Conditional_1_For_4_Template, 2, 2, "th", 4, \u0275\u0275repeaterTrackByIndex);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r1.showWeek ? 2 : -1);
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r1.headRow);
  }
}
function DecadeTableComponent_For_4_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 7);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const row_r3 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275classMapInterpolate1("", ctx_r1.prefixCls, "-cell-week");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", row_r3.weekNum, "");
  }
}
function DecadeTableComponent_For_4_For_3_Case_1_Conditional_0_ng_template_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
  }
  if (rf & 2) {
    const cell_r5 = \u0275\u0275nextContext(3).$implicit;
    \u0275\u0275textInterpolate1(" ", cell_r5.cellRender, " ");
  }
}
function DecadeTableComponent_For_4_For_3_Case_1_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, DecadeTableComponent_For_4_For_3_Case_1_Conditional_0_ng_template_0_Template, 1, 1, "ng-template", 10);
  }
  if (rf & 2) {
    const cell_r5 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275property("nzStringTemplateOutlet", cell_r5.cellRender)("nzStringTemplateOutletContext", \u0275\u0275pureFunction1(2, _c03, cell_r5.value));
  }
}
function DecadeTableComponent_For_4_For_3_Case_1_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const cell_r5 = \u0275\u0275nextContext(2).$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275classMapInterpolate1("", ctx_r1.prefixCls, "-cell-inner");
    \u0275\u0275attribute("aria-selected", cell_r5.isSelected)("aria-disabled", cell_r5.isDisabled);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", cell_r5.content, " ");
  }
}
function DecadeTableComponent_For_4_For_3_Case_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, DecadeTableComponent_For_4_For_3_Case_1_Conditional_0_Template, 1, 4, null, 10)(1, DecadeTableComponent_For_4_For_3_Case_1_Conditional_1_Template, 2, 6, "div", 11);
  }
  if (rf & 2) {
    const cell_r5 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275conditional(cell_r5.cellRender ? 0 : 1);
  }
}
function DecadeTableComponent_For_4_For_3_Case_2_Conditional_1_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275text(1);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const cell_r5 = \u0275\u0275nextContext(3).$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", cell_r5.fullCellRender, " ");
  }
}
function DecadeTableComponent_For_4_For_3_Case_2_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, DecadeTableComponent_For_4_For_3_Case_2_Conditional_1_ng_container_0_Template, 2, 1, "ng-container", 12);
  }
  if (rf & 2) {
    const cell_r5 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275property("nzStringTemplateOutlet", cell_r5.fullCellRender)("nzStringTemplateOutletContext", \u0275\u0275pureFunction1(2, _c03, cell_r5.value));
  }
}
function DecadeTableComponent_For_4_For_3_Case_2_Conditional_2_ng_container_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275text(1);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const cell_r5 = \u0275\u0275nextContext(3).$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", cell_r5.cellRender, " ");
  }
}
function DecadeTableComponent_For_4_For_3_Case_2_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "div");
    \u0275\u0275template(3, DecadeTableComponent_For_4_For_3_Case_2_Conditional_2_ng_container_3_Template, 2, 1, "ng-container", 12);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const cell_r5 = \u0275\u0275nextContext(2).$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275classMapInterpolate1("", ctx_r1.prefixCls, "-date-value");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(cell_r5.content);
    \u0275\u0275advance();
    \u0275\u0275classMapInterpolate1("", ctx_r1.prefixCls, "-date-content");
    \u0275\u0275advance();
    \u0275\u0275property("nzStringTemplateOutlet", cell_r5.cellRender)("nzStringTemplateOutletContext", \u0275\u0275pureFunction1(9, _c03, cell_r5.value));
  }
}
function DecadeTableComponent_For_4_For_3_Case_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div");
    \u0275\u0275template(1, DecadeTableComponent_For_4_For_3_Case_2_Conditional_1_Template, 1, 4, "ng-container")(2, DecadeTableComponent_For_4_For_3_Case_2_Conditional_2_Template, 4, 11);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const cell_r5 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275classMapInterpolate1("", ctx_r1.prefixCls, "-date ant-picker-cell-inner");
    \u0275\u0275classProp("ant-picker-calendar-date-today", cell_r5.isToday);
    \u0275\u0275advance();
    \u0275\u0275conditional(cell_r5.fullCellRender ? 1 : 2);
  }
}
function DecadeTableComponent_For_4_For_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "td", 8);
    \u0275\u0275listener("click", function DecadeTableComponent_For_4_For_3_Template_td_click_0_listener() {
      const cell_r5 = \u0275\u0275restoreView(_r4).$implicit;
      return \u0275\u0275resetView(cell_r5.isDisabled ? null : cell_r5.onClick());
    })("mouseenter", function DecadeTableComponent_For_4_For_3_Template_td_mouseenter_0_listener() {
      const cell_r5 = \u0275\u0275restoreView(_r4).$implicit;
      return \u0275\u0275resetView(cell_r5.onMouseEnter());
    });
    \u0275\u0275template(1, DecadeTableComponent_For_4_For_3_Case_1_Template, 2, 1)(2, DecadeTableComponent_For_4_For_3_Case_2_Template, 3, 6, "div", 9);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_22_0;
    const cell_r5 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275classMap(cell_r5.classMap);
    \u0275\u0275property("title", cell_r5.title);
    \u0275\u0275advance();
    \u0275\u0275conditional((tmp_22_0 = ctx_r1.prefixCls) === "ant-picker" ? 1 : tmp_22_0 === "ant-picker-calendar" ? 2 : -1);
  }
}
function DecadeTableComponent_For_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr", 2);
    \u0275\u0275template(1, DecadeTableComponent_For_4_Conditional_1_Template, 2, 4, "td", 5);
    \u0275\u0275repeaterCreate(2, DecadeTableComponent_For_4_For_3_Template, 3, 4, "td", 6, _forTrack1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const row_r3 = ctx.$implicit;
    \u0275\u0275classMap(row_r3.classMap);
    \u0275\u0275advance();
    \u0275\u0275conditional(row_r3.weekNum ? 1 : -1);
    \u0275\u0275advance();
    \u0275\u0275repeater(row_r3.dateCells);
  }
}
function YearHeaderComponent_For_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 6);
    \u0275\u0275listener("click", function YearHeaderComponent_For_7_Template_button_click_0_listener() {
      const selector_r2 = \u0275\u0275restoreView(_r1).$implicit;
      return \u0275\u0275resetView(selector_r2.onClick());
    });
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const selector_r2 = ctx.$implicit;
    \u0275\u0275classMap(selector_r2.className);
    \u0275\u0275propertyInterpolate("title", selector_r2.title || null);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", selector_r2.label, " ");
  }
}
function YearTableComponent_Conditional_1_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "th", 3);
  }
}
function YearTableComponent_Conditional_1_For_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 4);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const cell_r1 = ctx.$implicit;
    \u0275\u0275property("title", cell_r1.title);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", cell_r1.content, "");
  }
}
function YearTableComponent_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "thead")(1, "tr", 2);
    \u0275\u0275template(2, YearTableComponent_Conditional_1_Conditional_2_Template, 1, 0, "th", 3);
    \u0275\u0275repeaterCreate(3, YearTableComponent_Conditional_1_For_4_Template, 2, 2, "th", 4, \u0275\u0275repeaterTrackByIndex);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r1.showWeek ? 2 : -1);
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r1.headRow);
  }
}
function YearTableComponent_For_4_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 7);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const row_r3 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275classMapInterpolate1("", ctx_r1.prefixCls, "-cell-week");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", row_r3.weekNum, "");
  }
}
function YearTableComponent_For_4_For_3_Case_1_Conditional_0_ng_template_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
  }
  if (rf & 2) {
    const cell_r5 = \u0275\u0275nextContext(3).$implicit;
    \u0275\u0275textInterpolate1(" ", cell_r5.cellRender, " ");
  }
}
function YearTableComponent_For_4_For_3_Case_1_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, YearTableComponent_For_4_For_3_Case_1_Conditional_0_ng_template_0_Template, 1, 1, "ng-template", 10);
  }
  if (rf & 2) {
    const cell_r5 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275property("nzStringTemplateOutlet", cell_r5.cellRender)("nzStringTemplateOutletContext", \u0275\u0275pureFunction1(2, _c03, cell_r5.value));
  }
}
function YearTableComponent_For_4_For_3_Case_1_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const cell_r5 = \u0275\u0275nextContext(2).$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275classMapInterpolate1("", ctx_r1.prefixCls, "-cell-inner");
    \u0275\u0275attribute("aria-selected", cell_r5.isSelected)("aria-disabled", cell_r5.isDisabled);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", cell_r5.content, " ");
  }
}
function YearTableComponent_For_4_For_3_Case_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, YearTableComponent_For_4_For_3_Case_1_Conditional_0_Template, 1, 4, null, 10)(1, YearTableComponent_For_4_For_3_Case_1_Conditional_1_Template, 2, 6, "div", 11);
  }
  if (rf & 2) {
    const cell_r5 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275conditional(cell_r5.cellRender ? 0 : 1);
  }
}
function YearTableComponent_For_4_For_3_Case_2_Conditional_1_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275text(1);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const cell_r5 = \u0275\u0275nextContext(3).$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", cell_r5.fullCellRender, " ");
  }
}
function YearTableComponent_For_4_For_3_Case_2_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, YearTableComponent_For_4_For_3_Case_2_Conditional_1_ng_container_0_Template, 2, 1, "ng-container", 12);
  }
  if (rf & 2) {
    const cell_r5 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275property("nzStringTemplateOutlet", cell_r5.fullCellRender)("nzStringTemplateOutletContext", \u0275\u0275pureFunction1(2, _c03, cell_r5.value));
  }
}
function YearTableComponent_For_4_For_3_Case_2_Conditional_2_ng_container_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275text(1);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const cell_r5 = \u0275\u0275nextContext(3).$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", cell_r5.cellRender, " ");
  }
}
function YearTableComponent_For_4_For_3_Case_2_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "div");
    \u0275\u0275template(3, YearTableComponent_For_4_For_3_Case_2_Conditional_2_ng_container_3_Template, 2, 1, "ng-container", 12);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const cell_r5 = \u0275\u0275nextContext(2).$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275classMapInterpolate1("", ctx_r1.prefixCls, "-date-value");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(cell_r5.content);
    \u0275\u0275advance();
    \u0275\u0275classMapInterpolate1("", ctx_r1.prefixCls, "-date-content");
    \u0275\u0275advance();
    \u0275\u0275property("nzStringTemplateOutlet", cell_r5.cellRender)("nzStringTemplateOutletContext", \u0275\u0275pureFunction1(9, _c03, cell_r5.value));
  }
}
function YearTableComponent_For_4_For_3_Case_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div");
    \u0275\u0275template(1, YearTableComponent_For_4_For_3_Case_2_Conditional_1_Template, 1, 4, "ng-container")(2, YearTableComponent_For_4_For_3_Case_2_Conditional_2_Template, 4, 11);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const cell_r5 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275classMapInterpolate1("", ctx_r1.prefixCls, "-date ant-picker-cell-inner");
    \u0275\u0275classProp("ant-picker-calendar-date-today", cell_r5.isToday);
    \u0275\u0275advance();
    \u0275\u0275conditional(cell_r5.fullCellRender ? 1 : 2);
  }
}
function YearTableComponent_For_4_For_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "td", 8);
    \u0275\u0275listener("click", function YearTableComponent_For_4_For_3_Template_td_click_0_listener() {
      const cell_r5 = \u0275\u0275restoreView(_r4).$implicit;
      return \u0275\u0275resetView(cell_r5.isDisabled ? null : cell_r5.onClick());
    })("mouseenter", function YearTableComponent_For_4_For_3_Template_td_mouseenter_0_listener() {
      const cell_r5 = \u0275\u0275restoreView(_r4).$implicit;
      return \u0275\u0275resetView(cell_r5.onMouseEnter());
    });
    \u0275\u0275template(1, YearTableComponent_For_4_For_3_Case_1_Template, 2, 1)(2, YearTableComponent_For_4_For_3_Case_2_Template, 3, 6, "div", 9);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_22_0;
    const cell_r5 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275classMap(cell_r5.classMap);
    \u0275\u0275property("title", cell_r5.title);
    \u0275\u0275advance();
    \u0275\u0275conditional((tmp_22_0 = ctx_r1.prefixCls) === "ant-picker" ? 1 : tmp_22_0 === "ant-picker-calendar" ? 2 : -1);
  }
}
function YearTableComponent_For_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr", 2);
    \u0275\u0275template(1, YearTableComponent_For_4_Conditional_1_Template, 2, 4, "td", 5);
    \u0275\u0275repeaterCreate(2, YearTableComponent_For_4_For_3_Template, 3, 4, "td", 6, _forTrack1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const row_r3 = ctx.$implicit;
    \u0275\u0275classMap(row_r3.classMap);
    \u0275\u0275advance();
    \u0275\u0275conditional(row_r3.weekNum ? 1 : -1);
    \u0275\u0275advance();
    \u0275\u0275repeater(row_r3.dateCells);
  }
}
function QuarterHeaderComponent_For_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 6);
    \u0275\u0275listener("click", function QuarterHeaderComponent_For_7_Template_button_click_0_listener() {
      const selector_r2 = \u0275\u0275restoreView(_r1).$implicit;
      return \u0275\u0275resetView(selector_r2.onClick());
    });
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const selector_r2 = ctx.$implicit;
    \u0275\u0275classMap(selector_r2.className);
    \u0275\u0275propertyInterpolate("title", selector_r2.title || null);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", selector_r2.label, " ");
  }
}
function QuarterTableComponent_Conditional_1_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "th", 3);
  }
}
function QuarterTableComponent_Conditional_1_For_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 4);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const cell_r1 = ctx.$implicit;
    \u0275\u0275property("title", cell_r1.title);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", cell_r1.content, "");
  }
}
function QuarterTableComponent_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "thead")(1, "tr", 2);
    \u0275\u0275template(2, QuarterTableComponent_Conditional_1_Conditional_2_Template, 1, 0, "th", 3);
    \u0275\u0275repeaterCreate(3, QuarterTableComponent_Conditional_1_For_4_Template, 2, 2, "th", 4, \u0275\u0275repeaterTrackByIndex);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r1.showWeek ? 2 : -1);
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r1.headRow);
  }
}
function QuarterTableComponent_For_4_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 7);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const row_r3 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275classMapInterpolate1("", ctx_r1.prefixCls, "-cell-week");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", row_r3.weekNum, "");
  }
}
function QuarterTableComponent_For_4_For_3_Case_1_Conditional_0_ng_template_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
  }
  if (rf & 2) {
    const cell_r5 = \u0275\u0275nextContext(3).$implicit;
    \u0275\u0275textInterpolate1(" ", cell_r5.cellRender, " ");
  }
}
function QuarterTableComponent_For_4_For_3_Case_1_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, QuarterTableComponent_For_4_For_3_Case_1_Conditional_0_ng_template_0_Template, 1, 1, "ng-template", 10);
  }
  if (rf & 2) {
    const cell_r5 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275property("nzStringTemplateOutlet", cell_r5.cellRender)("nzStringTemplateOutletContext", \u0275\u0275pureFunction1(2, _c03, cell_r5.value));
  }
}
function QuarterTableComponent_For_4_For_3_Case_1_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const cell_r5 = \u0275\u0275nextContext(2).$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275classMapInterpolate1("", ctx_r1.prefixCls, "-cell-inner");
    \u0275\u0275attribute("aria-selected", cell_r5.isSelected)("aria-disabled", cell_r5.isDisabled);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", cell_r5.content, " ");
  }
}
function QuarterTableComponent_For_4_For_3_Case_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, QuarterTableComponent_For_4_For_3_Case_1_Conditional_0_Template, 1, 4, null, 10)(1, QuarterTableComponent_For_4_For_3_Case_1_Conditional_1_Template, 2, 6, "div", 11);
  }
  if (rf & 2) {
    const cell_r5 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275conditional(cell_r5.cellRender ? 0 : 1);
  }
}
function QuarterTableComponent_For_4_For_3_Case_2_Conditional_1_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275text(1);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const cell_r5 = \u0275\u0275nextContext(3).$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", cell_r5.fullCellRender, " ");
  }
}
function QuarterTableComponent_For_4_For_3_Case_2_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, QuarterTableComponent_For_4_For_3_Case_2_Conditional_1_ng_container_0_Template, 2, 1, "ng-container", 12);
  }
  if (rf & 2) {
    const cell_r5 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275property("nzStringTemplateOutlet", cell_r5.fullCellRender)("nzStringTemplateOutletContext", \u0275\u0275pureFunction1(2, _c03, cell_r5.value));
  }
}
function QuarterTableComponent_For_4_For_3_Case_2_Conditional_2_ng_container_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275text(1);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const cell_r5 = \u0275\u0275nextContext(3).$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", cell_r5.cellRender, " ");
  }
}
function QuarterTableComponent_For_4_For_3_Case_2_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "div");
    \u0275\u0275template(3, QuarterTableComponent_For_4_For_3_Case_2_Conditional_2_ng_container_3_Template, 2, 1, "ng-container", 12);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const cell_r5 = \u0275\u0275nextContext(2).$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275classMapInterpolate1("", ctx_r1.prefixCls, "-date-value");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(cell_r5.content);
    \u0275\u0275advance();
    \u0275\u0275classMapInterpolate1("", ctx_r1.prefixCls, "-date-content");
    \u0275\u0275advance();
    \u0275\u0275property("nzStringTemplateOutlet", cell_r5.cellRender)("nzStringTemplateOutletContext", \u0275\u0275pureFunction1(9, _c03, cell_r5.value));
  }
}
function QuarterTableComponent_For_4_For_3_Case_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div");
    \u0275\u0275template(1, QuarterTableComponent_For_4_For_3_Case_2_Conditional_1_Template, 1, 4, "ng-container")(2, QuarterTableComponent_For_4_For_3_Case_2_Conditional_2_Template, 4, 11);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const cell_r5 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275classMapInterpolate1("", ctx_r1.prefixCls, "-date ant-picker-cell-inner");
    \u0275\u0275classProp("ant-picker-calendar-date-today", cell_r5.isToday);
    \u0275\u0275advance();
    \u0275\u0275conditional(cell_r5.fullCellRender ? 1 : 2);
  }
}
function QuarterTableComponent_For_4_For_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "td", 8);
    \u0275\u0275listener("click", function QuarterTableComponent_For_4_For_3_Template_td_click_0_listener() {
      const cell_r5 = \u0275\u0275restoreView(_r4).$implicit;
      return \u0275\u0275resetView(cell_r5.isDisabled ? null : cell_r5.onClick());
    })("mouseenter", function QuarterTableComponent_For_4_For_3_Template_td_mouseenter_0_listener() {
      const cell_r5 = \u0275\u0275restoreView(_r4).$implicit;
      return \u0275\u0275resetView(cell_r5.onMouseEnter());
    });
    \u0275\u0275template(1, QuarterTableComponent_For_4_For_3_Case_1_Template, 2, 1)(2, QuarterTableComponent_For_4_For_3_Case_2_Template, 3, 6, "div", 9);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_22_0;
    const cell_r5 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275classMap(cell_r5.classMap);
    \u0275\u0275property("title", cell_r5.title);
    \u0275\u0275advance();
    \u0275\u0275conditional((tmp_22_0 = ctx_r1.prefixCls) === "ant-picker" ? 1 : tmp_22_0 === "ant-picker-calendar" ? 2 : -1);
  }
}
function QuarterTableComponent_For_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr", 2);
    \u0275\u0275template(1, QuarterTableComponent_For_4_Conditional_1_Template, 2, 4, "td", 5);
    \u0275\u0275repeaterCreate(2, QuarterTableComponent_For_4_For_3_Template, 3, 4, "td", 6, _forTrack1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const row_r3 = ctx.$implicit;
    \u0275\u0275classMap(row_r3.classMap);
    \u0275\u0275advance();
    \u0275\u0275conditional(row_r3.weekNum ? 1 : -1);
    \u0275\u0275advance();
    \u0275\u0275repeater(row_r3.dateCells);
  }
}
function MonthHeaderComponent_For_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 6);
    \u0275\u0275listener("click", function MonthHeaderComponent_For_7_Template_button_click_0_listener() {
      const selector_r2 = \u0275\u0275restoreView(_r1).$implicit;
      return \u0275\u0275resetView(selector_r2.onClick());
    });
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const selector_r2 = ctx.$implicit;
    \u0275\u0275classMap(selector_r2.className);
    \u0275\u0275propertyInterpolate("title", selector_r2.title || null);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", selector_r2.label, " ");
  }
}
function MonthTableComponent_Conditional_1_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "th", 3);
  }
}
function MonthTableComponent_Conditional_1_For_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 4);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const cell_r1 = ctx.$implicit;
    \u0275\u0275property("title", cell_r1.title);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", cell_r1.content, "");
  }
}
function MonthTableComponent_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "thead")(1, "tr", 2);
    \u0275\u0275template(2, MonthTableComponent_Conditional_1_Conditional_2_Template, 1, 0, "th", 3);
    \u0275\u0275repeaterCreate(3, MonthTableComponent_Conditional_1_For_4_Template, 2, 2, "th", 4, \u0275\u0275repeaterTrackByIndex);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r1.showWeek ? 2 : -1);
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r1.headRow);
  }
}
function MonthTableComponent_For_4_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 7);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const row_r3 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275classMapInterpolate1("", ctx_r1.prefixCls, "-cell-week");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", row_r3.weekNum, "");
  }
}
function MonthTableComponent_For_4_For_3_Case_1_Conditional_0_ng_template_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
  }
  if (rf & 2) {
    const cell_r5 = \u0275\u0275nextContext(3).$implicit;
    \u0275\u0275textInterpolate1(" ", cell_r5.cellRender, " ");
  }
}
function MonthTableComponent_For_4_For_3_Case_1_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, MonthTableComponent_For_4_For_3_Case_1_Conditional_0_ng_template_0_Template, 1, 1, "ng-template", 10);
  }
  if (rf & 2) {
    const cell_r5 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275property("nzStringTemplateOutlet", cell_r5.cellRender)("nzStringTemplateOutletContext", \u0275\u0275pureFunction1(2, _c03, cell_r5.value));
  }
}
function MonthTableComponent_For_4_For_3_Case_1_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const cell_r5 = \u0275\u0275nextContext(2).$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275classMapInterpolate1("", ctx_r1.prefixCls, "-cell-inner");
    \u0275\u0275attribute("aria-selected", cell_r5.isSelected)("aria-disabled", cell_r5.isDisabled);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", cell_r5.content, " ");
  }
}
function MonthTableComponent_For_4_For_3_Case_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, MonthTableComponent_For_4_For_3_Case_1_Conditional_0_Template, 1, 4, null, 10)(1, MonthTableComponent_For_4_For_3_Case_1_Conditional_1_Template, 2, 6, "div", 11);
  }
  if (rf & 2) {
    const cell_r5 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275conditional(cell_r5.cellRender ? 0 : 1);
  }
}
function MonthTableComponent_For_4_For_3_Case_2_Conditional_1_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275text(1);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const cell_r5 = \u0275\u0275nextContext(3).$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", cell_r5.fullCellRender, " ");
  }
}
function MonthTableComponent_For_4_For_3_Case_2_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, MonthTableComponent_For_4_For_3_Case_2_Conditional_1_ng_container_0_Template, 2, 1, "ng-container", 12);
  }
  if (rf & 2) {
    const cell_r5 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275property("nzStringTemplateOutlet", cell_r5.fullCellRender)("nzStringTemplateOutletContext", \u0275\u0275pureFunction1(2, _c03, cell_r5.value));
  }
}
function MonthTableComponent_For_4_For_3_Case_2_Conditional_2_ng_container_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275text(1);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const cell_r5 = \u0275\u0275nextContext(3).$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", cell_r5.cellRender, " ");
  }
}
function MonthTableComponent_For_4_For_3_Case_2_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "div");
    \u0275\u0275template(3, MonthTableComponent_For_4_For_3_Case_2_Conditional_2_ng_container_3_Template, 2, 1, "ng-container", 12);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const cell_r5 = \u0275\u0275nextContext(2).$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275classMapInterpolate1("", ctx_r1.prefixCls, "-date-value");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(cell_r5.content);
    \u0275\u0275advance();
    \u0275\u0275classMapInterpolate1("", ctx_r1.prefixCls, "-date-content");
    \u0275\u0275advance();
    \u0275\u0275property("nzStringTemplateOutlet", cell_r5.cellRender)("nzStringTemplateOutletContext", \u0275\u0275pureFunction1(9, _c03, cell_r5.value));
  }
}
function MonthTableComponent_For_4_For_3_Case_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div");
    \u0275\u0275template(1, MonthTableComponent_For_4_For_3_Case_2_Conditional_1_Template, 1, 4, "ng-container")(2, MonthTableComponent_For_4_For_3_Case_2_Conditional_2_Template, 4, 11);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const cell_r5 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275classMapInterpolate1("", ctx_r1.prefixCls, "-date ant-picker-cell-inner");
    \u0275\u0275classProp("ant-picker-calendar-date-today", cell_r5.isToday);
    \u0275\u0275advance();
    \u0275\u0275conditional(cell_r5.fullCellRender ? 1 : 2);
  }
}
function MonthTableComponent_For_4_For_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "td", 8);
    \u0275\u0275listener("click", function MonthTableComponent_For_4_For_3_Template_td_click_0_listener() {
      const cell_r5 = \u0275\u0275restoreView(_r4).$implicit;
      return \u0275\u0275resetView(cell_r5.isDisabled ? null : cell_r5.onClick());
    })("mouseenter", function MonthTableComponent_For_4_For_3_Template_td_mouseenter_0_listener() {
      const cell_r5 = \u0275\u0275restoreView(_r4).$implicit;
      return \u0275\u0275resetView(cell_r5.onMouseEnter());
    });
    \u0275\u0275template(1, MonthTableComponent_For_4_For_3_Case_1_Template, 2, 1)(2, MonthTableComponent_For_4_For_3_Case_2_Template, 3, 6, "div", 9);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_22_0;
    const cell_r5 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275classMap(cell_r5.classMap);
    \u0275\u0275property("title", cell_r5.title);
    \u0275\u0275advance();
    \u0275\u0275conditional((tmp_22_0 = ctx_r1.prefixCls) === "ant-picker" ? 1 : tmp_22_0 === "ant-picker-calendar" ? 2 : -1);
  }
}
function MonthTableComponent_For_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr", 2);
    \u0275\u0275template(1, MonthTableComponent_For_4_Conditional_1_Template, 2, 4, "td", 5);
    \u0275\u0275repeaterCreate(2, MonthTableComponent_For_4_For_3_Template, 3, 4, "td", 6, _forTrack1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const row_r3 = ctx.$implicit;
    \u0275\u0275classMap(row_r3.classMap);
    \u0275\u0275advance();
    \u0275\u0275conditional(row_r3.weekNum ? 1 : -1);
    \u0275\u0275advance();
    \u0275\u0275repeater(row_r3.dateCells);
  }
}
function DateHeaderComponent_For_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 6);
    \u0275\u0275listener("click", function DateHeaderComponent_For_7_Template_button_click_0_listener() {
      const selector_r2 = \u0275\u0275restoreView(_r1).$implicit;
      return \u0275\u0275resetView(selector_r2.onClick());
    });
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const selector_r2 = ctx.$implicit;
    \u0275\u0275classMap(selector_r2.className);
    \u0275\u0275propertyInterpolate("title", selector_r2.title || null);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", selector_r2.label, " ");
  }
}
function DateTableComponent_Conditional_1_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "th", 3);
  }
}
function DateTableComponent_Conditional_1_For_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 4);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const cell_r1 = ctx.$implicit;
    \u0275\u0275property("title", cell_r1.title);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", cell_r1.content, "");
  }
}
function DateTableComponent_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "thead")(1, "tr", 2);
    \u0275\u0275template(2, DateTableComponent_Conditional_1_Conditional_2_Template, 1, 0, "th", 3);
    \u0275\u0275repeaterCreate(3, DateTableComponent_Conditional_1_For_4_Template, 2, 2, "th", 4, \u0275\u0275repeaterTrackByIndex);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r1.showWeek ? 2 : -1);
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r1.headRow);
  }
}
function DateTableComponent_For_4_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 7);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const row_r3 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275classMapInterpolate1("", ctx_r1.prefixCls, "-cell-week");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", row_r3.weekNum, "");
  }
}
function DateTableComponent_For_4_For_3_Case_1_Conditional_0_ng_template_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
  }
  if (rf & 2) {
    const cell_r5 = \u0275\u0275nextContext(3).$implicit;
    \u0275\u0275textInterpolate1(" ", cell_r5.cellRender, " ");
  }
}
function DateTableComponent_For_4_For_3_Case_1_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, DateTableComponent_For_4_For_3_Case_1_Conditional_0_ng_template_0_Template, 1, 1, "ng-template", 10);
  }
  if (rf & 2) {
    const cell_r5 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275property("nzStringTemplateOutlet", cell_r5.cellRender)("nzStringTemplateOutletContext", \u0275\u0275pureFunction1(2, _c03, cell_r5.value));
  }
}
function DateTableComponent_For_4_For_3_Case_1_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const cell_r5 = \u0275\u0275nextContext(2).$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275classMapInterpolate1("", ctx_r1.prefixCls, "-cell-inner");
    \u0275\u0275attribute("aria-selected", cell_r5.isSelected)("aria-disabled", cell_r5.isDisabled);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", cell_r5.content, " ");
  }
}
function DateTableComponent_For_4_For_3_Case_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, DateTableComponent_For_4_For_3_Case_1_Conditional_0_Template, 1, 4, null, 10)(1, DateTableComponent_For_4_For_3_Case_1_Conditional_1_Template, 2, 6, "div", 11);
  }
  if (rf & 2) {
    const cell_r5 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275conditional(cell_r5.cellRender ? 0 : 1);
  }
}
function DateTableComponent_For_4_For_3_Case_2_Conditional_1_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275text(1);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const cell_r5 = \u0275\u0275nextContext(3).$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", cell_r5.fullCellRender, " ");
  }
}
function DateTableComponent_For_4_For_3_Case_2_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, DateTableComponent_For_4_For_3_Case_2_Conditional_1_ng_container_0_Template, 2, 1, "ng-container", 12);
  }
  if (rf & 2) {
    const cell_r5 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275property("nzStringTemplateOutlet", cell_r5.fullCellRender)("nzStringTemplateOutletContext", \u0275\u0275pureFunction1(2, _c03, cell_r5.value));
  }
}
function DateTableComponent_For_4_For_3_Case_2_Conditional_2_ng_container_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275text(1);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const cell_r5 = \u0275\u0275nextContext(3).$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", cell_r5.cellRender, " ");
  }
}
function DateTableComponent_For_4_For_3_Case_2_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "div");
    \u0275\u0275template(3, DateTableComponent_For_4_For_3_Case_2_Conditional_2_ng_container_3_Template, 2, 1, "ng-container", 12);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const cell_r5 = \u0275\u0275nextContext(2).$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275classMapInterpolate1("", ctx_r1.prefixCls, "-date-value");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(cell_r5.content);
    \u0275\u0275advance();
    \u0275\u0275classMapInterpolate1("", ctx_r1.prefixCls, "-date-content");
    \u0275\u0275advance();
    \u0275\u0275property("nzStringTemplateOutlet", cell_r5.cellRender)("nzStringTemplateOutletContext", \u0275\u0275pureFunction1(9, _c03, cell_r5.value));
  }
}
function DateTableComponent_For_4_For_3_Case_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div");
    \u0275\u0275template(1, DateTableComponent_For_4_For_3_Case_2_Conditional_1_Template, 1, 4, "ng-container")(2, DateTableComponent_For_4_For_3_Case_2_Conditional_2_Template, 4, 11);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const cell_r5 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275classMapInterpolate1("", ctx_r1.prefixCls, "-date ant-picker-cell-inner");
    \u0275\u0275classProp("ant-picker-calendar-date-today", cell_r5.isToday);
    \u0275\u0275advance();
    \u0275\u0275conditional(cell_r5.fullCellRender ? 1 : 2);
  }
}
function DateTableComponent_For_4_For_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "td", 8);
    \u0275\u0275listener("click", function DateTableComponent_For_4_For_3_Template_td_click_0_listener() {
      const cell_r5 = \u0275\u0275restoreView(_r4).$implicit;
      return \u0275\u0275resetView(cell_r5.isDisabled ? null : cell_r5.onClick());
    })("mouseenter", function DateTableComponent_For_4_For_3_Template_td_mouseenter_0_listener() {
      const cell_r5 = \u0275\u0275restoreView(_r4).$implicit;
      return \u0275\u0275resetView(cell_r5.onMouseEnter());
    });
    \u0275\u0275template(1, DateTableComponent_For_4_For_3_Case_1_Template, 2, 1)(2, DateTableComponent_For_4_For_3_Case_2_Template, 3, 6, "div", 9);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_22_0;
    const cell_r5 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275classMap(cell_r5.classMap);
    \u0275\u0275property("title", cell_r5.title);
    \u0275\u0275advance();
    \u0275\u0275conditional((tmp_22_0 = ctx_r1.prefixCls) === "ant-picker" ? 1 : tmp_22_0 === "ant-picker-calendar" ? 2 : -1);
  }
}
function DateTableComponent_For_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr", 2);
    \u0275\u0275template(1, DateTableComponent_For_4_Conditional_1_Template, 2, 4, "td", 5);
    \u0275\u0275repeaterCreate(2, DateTableComponent_For_4_For_3_Template, 3, 4, "td", 6, _forTrack1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const row_r3 = ctx.$implicit;
    \u0275\u0275classMap(row_r3.classMap);
    \u0275\u0275advance();
    \u0275\u0275conditional(row_r3.weekNum ? 1 : -1);
    \u0275\u0275advance();
    \u0275\u0275repeater(row_r3.dateCells);
  }
}
function InnerPopupComponent_Case_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "decade-header", 1);
    \u0275\u0275twoWayListener("valueChange", function InnerPopupComponent_Case_2_Template_decade_header_valueChange_0_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.activeDate, $event) || (ctx_r1.activeDate = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("panelChange", function InnerPopupComponent_Case_2_Template_decade_header_panelChange_0_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.panelChange.emit($event));
    })("valueChange", function InnerPopupComponent_Case_2_Template_decade_header_valueChange_0_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.headerChange.emit($event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(1, "div")(2, "decade-table", 2);
    \u0275\u0275listener("valueChange", function InnerPopupComponent_Case_2_Template_decade_table_valueChange_2_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onChooseDecade($event));
    });
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275twoWayProperty("value", ctx_r1.activeDate);
    \u0275\u0275property("locale", ctx_r1.locale)("showSuperPreBtn", ctx_r1.enablePrevNext("prev", "decade"))("showSuperNextBtn", ctx_r1.enablePrevNext("next", "decade"))("showNextBtn", false)("showPreBtn", false);
    \u0275\u0275advance();
    \u0275\u0275classMapInterpolate1("", ctx_r1.prefixCls, "-body");
    \u0275\u0275advance();
    \u0275\u0275property("activeDate", ctx_r1.activeDate)("value", ctx_r1.value)("locale", ctx_r1.locale)("disabledDate", ctx_r1.disabledDate);
  }
}
function InnerPopupComponent_Case_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "year-header", 1);
    \u0275\u0275twoWayListener("valueChange", function InnerPopupComponent_Case_3_Template_year_header_valueChange_0_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.activeDate, $event) || (ctx_r1.activeDate = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("panelChange", function InnerPopupComponent_Case_3_Template_year_header_panelChange_0_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.panelChange.emit($event));
    })("valueChange", function InnerPopupComponent_Case_3_Template_year_header_valueChange_0_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.headerChange.emit($event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(1, "div")(2, "year-table", 3);
    \u0275\u0275listener("valueChange", function InnerPopupComponent_Case_3_Template_year_table_valueChange_2_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onChooseYear($event));
    })("cellHover", function InnerPopupComponent_Case_3_Template_year_table_cellHover_2_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.cellHover.emit($event));
    });
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275twoWayProperty("value", ctx_r1.activeDate);
    \u0275\u0275property("locale", ctx_r1.locale)("showSuperPreBtn", ctx_r1.enablePrevNext("prev", "year"))("showSuperNextBtn", ctx_r1.enablePrevNext("next", "year"))("showNextBtn", false)("showPreBtn", false);
    \u0275\u0275advance();
    \u0275\u0275classMapInterpolate1("", ctx_r1.prefixCls, "-body");
    \u0275\u0275advance();
    \u0275\u0275property("activeDate", ctx_r1.activeDate)("value", ctx_r1.value)("locale", ctx_r1.locale)("disabledDate", ctx_r1.disabledDate)("selectedValue", ctx_r1.selectedValue)("hoverValue", ctx_r1.hoverValue);
  }
}
function InnerPopupComponent_Case_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "month-header", 1);
    \u0275\u0275twoWayListener("valueChange", function InnerPopupComponent_Case_4_Template_month_header_valueChange_0_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.activeDate, $event) || (ctx_r1.activeDate = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("panelChange", function InnerPopupComponent_Case_4_Template_month_header_panelChange_0_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.panelChange.emit($event));
    })("valueChange", function InnerPopupComponent_Case_4_Template_month_header_valueChange_0_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.headerChange.emit($event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(1, "div")(2, "month-table", 4);
    \u0275\u0275listener("valueChange", function InnerPopupComponent_Case_4_Template_month_table_valueChange_2_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onChooseMonth($event));
    })("cellHover", function InnerPopupComponent_Case_4_Template_month_table_cellHover_2_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.cellHover.emit($event));
    });
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275twoWayProperty("value", ctx_r1.activeDate);
    \u0275\u0275property("locale", ctx_r1.locale)("showSuperPreBtn", ctx_r1.enablePrevNext("prev", "month"))("showSuperNextBtn", ctx_r1.enablePrevNext("next", "month"))("showNextBtn", false)("showPreBtn", false);
    \u0275\u0275advance();
    \u0275\u0275classMapInterpolate1("", ctx_r1.prefixCls, "-body");
    \u0275\u0275advance();
    \u0275\u0275property("value", ctx_r1.value)("activeDate", ctx_r1.activeDate)("locale", ctx_r1.locale)("disabledDate", ctx_r1.disabledDate)("selectedValue", ctx_r1.selectedValue)("hoverValue", ctx_r1.hoverValue);
  }
}
function InnerPopupComponent_Case_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "quarter-header", 1);
    \u0275\u0275twoWayListener("valueChange", function InnerPopupComponent_Case_5_Template_quarter_header_valueChange_0_listener($event) {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.activeDate, $event) || (ctx_r1.activeDate = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("panelChange", function InnerPopupComponent_Case_5_Template_quarter_header_panelChange_0_listener($event) {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.panelChange.emit($event));
    })("valueChange", function InnerPopupComponent_Case_5_Template_quarter_header_valueChange_0_listener($event) {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.headerChange.emit($event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(1, "div")(2, "quarter-table", 5);
    \u0275\u0275listener("valueChange", function InnerPopupComponent_Case_5_Template_quarter_table_valueChange_2_listener($event) {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onChooseQuarter($event));
    })("cellHover", function InnerPopupComponent_Case_5_Template_quarter_table_cellHover_2_listener($event) {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.cellHover.emit($event));
    });
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275twoWayProperty("value", ctx_r1.activeDate);
    \u0275\u0275property("locale", ctx_r1.locale)("showSuperPreBtn", ctx_r1.enablePrevNext("prev", "month"))("showSuperNextBtn", ctx_r1.enablePrevNext("next", "month"))("showNextBtn", false)("showPreBtn", false);
    \u0275\u0275advance();
    \u0275\u0275classMapInterpolate1("", ctx_r1.prefixCls, "-body");
    \u0275\u0275advance();
    \u0275\u0275property("value", ctx_r1.value)("activeDate", ctx_r1.activeDate)("locale", ctx_r1.locale)("disabledDate", ctx_r1.disabledDate)("selectedValue", ctx_r1.selectedValue)("hoverValue", ctx_r1.hoverValue)("cellRender", ctx_r1.dateRender);
  }
}
function InnerPopupComponent_Case_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "date-header", 6);
    \u0275\u0275twoWayListener("valueChange", function InnerPopupComponent_Case_6_Template_date_header_valueChange_0_listener($event) {
      \u0275\u0275restoreView(_r6);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.activeDate, $event) || (ctx_r1.activeDate = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("panelChange", function InnerPopupComponent_Case_6_Template_date_header_panelChange_0_listener($event) {
      \u0275\u0275restoreView(_r6);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.panelChange.emit($event));
    })("valueChange", function InnerPopupComponent_Case_6_Template_date_header_valueChange_0_listener($event) {
      \u0275\u0275restoreView(_r6);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.headerChange.emit($event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(1, "div")(2, "date-table", 7);
    \u0275\u0275listener("valueChange", function InnerPopupComponent_Case_6_Template_date_table_valueChange_2_listener($event) {
      \u0275\u0275restoreView(_r6);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onSelectDate($event));
    })("cellHover", function InnerPopupComponent_Case_6_Template_date_table_cellHover_2_listener($event) {
      \u0275\u0275restoreView(_r6);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.cellHover.emit($event));
    });
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275twoWayProperty("value", ctx_r1.activeDate);
    \u0275\u0275property("locale", ctx_r1.locale)("showSuperPreBtn", ctx_r1.panelMode === "week" ? ctx_r1.enablePrevNext("prev", "week") : ctx_r1.enablePrevNext("prev", "date"))("showSuperNextBtn", ctx_r1.panelMode === "week" ? ctx_r1.enablePrevNext("next", "week") : ctx_r1.enablePrevNext("next", "date"))("showPreBtn", ctx_r1.panelMode === "week" ? ctx_r1.enablePrevNext("prev", "week") : ctx_r1.enablePrevNext("prev", "date"))("showNextBtn", ctx_r1.panelMode === "week" ? ctx_r1.enablePrevNext("next", "week") : ctx_r1.enablePrevNext("next", "date"));
    \u0275\u0275advance();
    \u0275\u0275classMapInterpolate1("", ctx_r1.prefixCls, "-body");
    \u0275\u0275advance();
    \u0275\u0275property("locale", ctx_r1.locale)("showWeek", ctx_r1.showWeek)("value", ctx_r1.value)("activeDate", ctx_r1.activeDate)("disabledDate", ctx_r1.disabledDate)("cellRender", ctx_r1.dateRender)("selectedValue", ctx_r1.selectedValue)("hoverValue", ctx_r1.hoverValue)("canSelectWeek", ctx_r1.panelMode === "week")("format", ctx_r1.format);
  }
}
function InnerPopupComponent_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "nz-time-picker-panel", 8);
    \u0275\u0275listener("ngModelChange", function InnerPopupComponent_Conditional_7_Template_nz_time_picker_panel_ngModelChange_0_listener($event) {
      \u0275\u0275restoreView(_r7);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onSelectTime($event));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("nzInDatePicker", true)("ngModel", ctx_r1.value == null ? null : ctx_r1.value.nativeDate)("format", ctx_r1.timeOptions.nzFormat)("nzHourStep", ctx_r1.timeOptions.nzHourStep)("nzMinuteStep", ctx_r1.timeOptions.nzMinuteStep)("nzSecondStep", ctx_r1.timeOptions.nzSecondStep)("nzDisabledHours", ctx_r1.timeOptions.nzDisabledHours)("nzDisabledMinutes", ctx_r1.timeOptions.nzDisabledMinutes)("nzDisabledSeconds", ctx_r1.timeOptions.nzDisabledSeconds)("nzHideDisabledOptions", !!ctx_r1.timeOptions.nzHideDisabledOptions)("nzDefaultOpenValue", ctx_r1.timeOptions.nzDefaultOpenValue)("nzUse12Hours", !!ctx_r1.timeOptions.nzUse12Hours)("nzAddOn", ctx_r1.timeOptions.nzAddOn);
  }
}
var _c12 = (a0) => ({
  partType: a0
});
var _c22 = () => ({
  partType: "left"
});
var _c32 = () => ({
  partType: "right"
});
function DateRangePopupComponent_Conditional_0_Conditional_4_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0);
  }
}
function DateRangePopupComponent_Conditional_0_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, DateRangePopupComponent_Conditional_0_Conditional_4_ng_container_0_Template, 1, 0, "ng-container", 5);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    const tplInnerPopup_r2 = \u0275\u0275reference(3);
    \u0275\u0275property("ngTemplateOutlet", tplInnerPopup_r2)("ngTemplateOutletContext", \u0275\u0275pureFunction1(2, _c12, ctx_r0.datePickerService.activeInput));
  }
}
function DateRangePopupComponent_Conditional_0_Conditional_5_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0);
  }
}
function DateRangePopupComponent_Conditional_0_Conditional_5_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0);
  }
}
function DateRangePopupComponent_Conditional_0_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, DateRangePopupComponent_Conditional_0_Conditional_5_ng_container_0_Template, 1, 0, "ng-container", 5)(1, DateRangePopupComponent_Conditional_0_Conditional_5_ng_container_1_Template, 1, 0, "ng-container", 5);
  }
  if (rf & 2) {
    \u0275\u0275nextContext(2);
    const tplInnerPopup_r2 = \u0275\u0275reference(3);
    \u0275\u0275property("ngTemplateOutlet", tplInnerPopup_r2)("ngTemplateOutletContext", \u0275\u0275pureFunction0(4, _c22));
    \u0275\u0275advance();
    \u0275\u0275property("ngTemplateOutlet", tplInnerPopup_r2)("ngTemplateOutletContext", \u0275\u0275pureFunction0(5, _c32));
  }
}
function DateRangePopupComponent_Conditional_0_ng_container_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0);
  }
}
function DateRangePopupComponent_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div");
    \u0275\u0275element(1, "div");
    \u0275\u0275elementStart(2, "div")(3, "div");
    \u0275\u0275template(4, DateRangePopupComponent_Conditional_0_Conditional_4_Template, 1, 4, "ng-container")(5, DateRangePopupComponent_Conditional_0_Conditional_5_Template, 2, 6);
    \u0275\u0275elementEnd();
    \u0275\u0275template(6, DateRangePopupComponent_Conditional_0_ng_container_6_Template, 1, 0, "ng-container", 4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    const tplFooter_r3 = \u0275\u0275reference(5);
    \u0275\u0275classMapInterpolate2("", ctx_r0.prefixCls, "-range-wrapper ", ctx_r0.prefixCls, "-date-range-wrapper");
    \u0275\u0275advance();
    \u0275\u0275styleMap(ctx_r0.arrowPosition);
    \u0275\u0275classMapInterpolate1("", ctx_r0.prefixCls, "-range-arrow");
    \u0275\u0275advance();
    \u0275\u0275classMapInterpolate2("", ctx_r0.prefixCls, "-panel-container ", ctx_r0.showWeek ? ctx_r0.prefixCls + "-week-number" : "", "");
    \u0275\u0275advance();
    \u0275\u0275classMapInterpolate1("", ctx_r0.prefixCls, "-panels");
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.hasTimePicker ? 4 : 5);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngTemplateOutlet", tplFooter_r3);
  }
}
function DateRangePopupComponent_Conditional_1_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0);
  }
}
function DateRangePopupComponent_Conditional_1_ng_container_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0);
  }
}
function DateRangePopupComponent_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div")(1, "div", 6);
    \u0275\u0275template(2, DateRangePopupComponent_Conditional_1_ng_container_2_Template, 1, 0, "ng-container", 4)(3, DateRangePopupComponent_Conditional_1_ng_container_3_Template, 1, 0, "ng-container", 4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    const tplInnerPopup_r2 = \u0275\u0275reference(3);
    const tplFooter_r3 = \u0275\u0275reference(5);
    \u0275\u0275classMapInterpolate4("", ctx_r0.prefixCls, "-panel-container ", ctx_r0.showWeek ? ctx_r0.prefixCls + "-week-number" : "", " ", ctx_r0.hasTimePicker ? ctx_r0.prefixCls + "-time" : "", " ", ctx_r0.isRange ? ctx_r0.prefixCls + "-range" : "", "");
    \u0275\u0275advance();
    \u0275\u0275classMapInterpolate1("", ctx_r0.prefixCls, "-panel");
    \u0275\u0275classProp("ant-picker-panel-rtl", ctx_r0.dir === "rtl");
    \u0275\u0275advance();
    \u0275\u0275property("ngTemplateOutlet", tplInnerPopup_r2);
    \u0275\u0275advance();
    \u0275\u0275property("ngTemplateOutlet", tplFooter_r3);
  }
}
function DateRangePopupComponent_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div")(1, "inner-popup", 7);
    \u0275\u0275listener("panelChange", function DateRangePopupComponent_ng_template_2_Template_inner_popup_panelChange_1_listener($event) {
      const partType_r5 = \u0275\u0275restoreView(_r4).partType;
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.onPanelModeChange($event, partType_r5));
    })("cellHover", function DateRangePopupComponent_ng_template_2_Template_inner_popup_cellHover_1_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.onCellHover($event));
    })("selectDate", function DateRangePopupComponent_ng_template_2_Template_inner_popup_selectDate_1_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.changeValueFromSelect($event, !ctx_r0.showTime));
    })("selectTime", function DateRangePopupComponent_ng_template_2_Template_inner_popup_selectTime_1_listener($event) {
      const partType_r5 = \u0275\u0275restoreView(_r4).partType;
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.onSelectTime($event, partType_r5));
    })("headerChange", function DateRangePopupComponent_ng_template_2_Template_inner_popup_headerChange_1_listener($event) {
      const partType_r5 = \u0275\u0275restoreView(_r4).partType;
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.onActiveDateChange($event, partType_r5));
    });
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const partType_r5 = ctx.partType;
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275classMapInterpolate1("", ctx_r0.prefixCls, "-panel");
    \u0275\u0275classProp("ant-picker-panel-rtl", ctx_r0.dir === "rtl");
    \u0275\u0275advance();
    \u0275\u0275property("showWeek", ctx_r0.showWeek)("endPanelMode", ctx_r0.getPanelMode(ctx_r0.endPanelMode, partType_r5))("partType", partType_r5)("locale", ctx_r0.locale)("showTimePicker", ctx_r0.hasTimePicker)("timeOptions", ctx_r0.getTimeOptions(partType_r5))("panelMode", ctx_r0.getPanelMode(ctx_r0.panelMode, partType_r5))("activeDate", ctx_r0.getActiveDate(partType_r5))("value", ctx_r0.getValue(partType_r5))("disabledDate", ctx_r0.disabledDate)("dateRender", ctx_r0.dateRender)("selectedValue", ctx_r0.datePickerService == null ? null : ctx_r0.datePickerService.value)("hoverValue", ctx_r0.hoverValue)("format", ctx_r0.format);
  }
}
function DateRangePopupComponent_ng_template_4_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "calendar-footer", 9);
    \u0275\u0275listener("clickOk", function DateRangePopupComponent_ng_template_4_Conditional_0_Template_calendar_footer_clickOk_0_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.onClickOk());
    })("clickToday", function DateRangePopupComponent_ng_template_4_Conditional_0_Template_calendar_footer_clickToday_0_listener($event) {
      \u0275\u0275restoreView(_r6);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.onClickToday($event));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    const tplRangeQuickSelector_r7 = \u0275\u0275reference(7);
    \u0275\u0275property("locale", ctx_r0.locale)("isRange", ctx_r0.isRange)("showToday", ctx_r0.showToday)("showNow", ctx_r0.showNow)("hasTimePicker", ctx_r0.hasTimePicker)("okDisabled", !ctx_r0.isAllowed(ctx_r0.datePickerService == null ? null : ctx_r0.datePickerService.value))("extraFooter", ctx_r0.extraFooter)("rangeQuickSelector", ctx_r0.ranges ? tplRangeQuickSelector_r7 : null);
  }
}
function DateRangePopupComponent_ng_template_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, DateRangePopupComponent_ng_template_4_Conditional_0_Template, 1, 8, "calendar-footer", 8);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275conditional(ctx_r0.hasFooter ? 0 : -1);
  }
}
function DateRangePopupComponent_ng_template_6_For_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "li", 10);
    \u0275\u0275listener("click", function DateRangePopupComponent_ng_template_6_For_1_Template_li_click_0_listener() {
      const name_r9 = \u0275\u0275restoreView(_r8).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.onClickPresetRange(ctx_r0.ranges[name_r9]));
    })("mouseenter", function DateRangePopupComponent_ng_template_6_For_1_Template_li_mouseenter_0_listener() {
      const name_r9 = \u0275\u0275restoreView(_r8).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.onHoverPresetRange(ctx_r0.ranges[name_r9]));
    })("mouseleave", function DateRangePopupComponent_ng_template_6_For_1_Template_li_mouseleave_0_listener() {
      \u0275\u0275restoreView(_r8);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.onPresetRangeMouseLeave());
    });
    \u0275\u0275elementStart(1, "span", 11);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const name_r9 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275classMapInterpolate1("", ctx_r0.prefixCls, "-preset");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(name_r9);
  }
}
function DateRangePopupComponent_ng_template_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275repeaterCreate(0, DateRangePopupComponent_ng_template_6_For_1_Template, 3, 4, "li", 3, \u0275\u0275repeaterTrackByIdentity);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275repeater(ctx_r0.getObjectKeys(ctx_r0.ranges));
  }
}
var _c42 = ["separatorElement"];
var _c5 = ["pickerInput"];
var _c6 = ["rangePickerInput"];
function NzDatePickerComponent_Conditional_0_Conditional_0_ng_container_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0);
  }
}
function NzDatePickerComponent_Conditional_0_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div")(1, "input", 9, 3);
    \u0275\u0275twoWayListener("ngModelChange", function NzDatePickerComponent_Conditional_0_Conditional_0_Template_input_ngModelChange_1_listener($event) {
      \u0275\u0275restoreView(_r2);
      const ctx_r2 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r2.inputValue, $event) || (ctx_r2.inputValue = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("focus", function NzDatePickerComponent_Conditional_0_Conditional_0_Template_input_focus_1_listener($event) {
      \u0275\u0275restoreView(_r2);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.onFocus($event));
    })("focusout", function NzDatePickerComponent_Conditional_0_Conditional_0_Template_input_focusout_1_listener($event) {
      \u0275\u0275restoreView(_r2);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.onFocusout($event));
    })("ngModelChange", function NzDatePickerComponent_Conditional_0_Conditional_0_Template_input_ngModelChange_1_listener($event) {
      \u0275\u0275restoreView(_r2);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.onInputChange($event));
    })("keyup.enter", function NzDatePickerComponent_Conditional_0_Conditional_0_Template_input_keyup_enter_1_listener($event) {
      \u0275\u0275restoreView(_r2);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.onKeyupEnter($event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275template(3, NzDatePickerComponent_Conditional_0_Conditional_0_ng_container_3_Template, 1, 0, "ng-container", 10);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    const tplRightRest_r4 = \u0275\u0275reference(5);
    \u0275\u0275classMapInterpolate1("", ctx_r2.prefixCls, "-input");
    \u0275\u0275advance();
    \u0275\u0275classProp("ant-input-disabled", ctx_r2.nzDisabled);
    \u0275\u0275propertyInterpolate("placeholder", ctx_r2.getPlaceholder());
    \u0275\u0275property("disabled", ctx_r2.nzDisabled)("readOnly", ctx_r2.nzInputReadOnly);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.inputValue);
    \u0275\u0275property("size", ctx_r2.inputSize);
    \u0275\u0275attribute("id", ctx_r2.nzId);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngTemplateOutlet", tplRightRest_r4);
  }
}
function NzDatePickerComponent_Conditional_0_Conditional_1_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0);
  }
}
function NzDatePickerComponent_Conditional_0_Conditional_1_ng_container_5_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(4);
    \u0275\u0275textInterpolate1(" ", ctx_r2.nzSeparator, " ");
  }
}
function NzDatePickerComponent_Conditional_0_Conditional_1_ng_container_5_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "nz-icon", 13);
  }
}
function NzDatePickerComponent_Conditional_0_Conditional_1_ng_container_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, NzDatePickerComponent_Conditional_0_Conditional_1_ng_container_5_Conditional_1_Template, 1, 1)(2, NzDatePickerComponent_Conditional_0_Conditional_1_ng_container_5_Conditional_2_Template, 1, 0, "nz-icon", 13);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r2.nzSeparator ? 1 : 2);
  }
}
function NzDatePickerComponent_Conditional_0_Conditional_1_ng_container_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0);
  }
}
function NzDatePickerComponent_Conditional_0_Conditional_1_ng_container_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0);
  }
}
function NzDatePickerComponent_Conditional_0_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div");
    \u0275\u0275template(1, NzDatePickerComponent_Conditional_0_Conditional_1_ng_container_1_Template, 1, 0, "ng-container", 11);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "div", null, 4)(4, "span");
    \u0275\u0275template(5, NzDatePickerComponent_Conditional_0_Conditional_1_ng_container_5_Template, 3, 1, "ng-container", 12);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div");
    \u0275\u0275template(7, NzDatePickerComponent_Conditional_0_Conditional_1_ng_container_7_Template, 1, 0, "ng-container", 11);
    \u0275\u0275elementEnd();
    \u0275\u0275template(8, NzDatePickerComponent_Conditional_0_Conditional_1_ng_container_8_Template, 1, 0, "ng-container", 10);
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    const tplRangeInput_r5 = \u0275\u0275reference(3);
    const tplRightRest_r4 = \u0275\u0275reference(5);
    \u0275\u0275classMapInterpolate1("", ctx_r2.prefixCls, "-input");
    \u0275\u0275advance();
    \u0275\u0275property("ngTemplateOutlet", tplRangeInput_r5)("ngTemplateOutletContext", \u0275\u0275pureFunction0(18, _c22));
    \u0275\u0275advance();
    \u0275\u0275classMapInterpolate1("", ctx_r2.prefixCls, "-range-separator");
    \u0275\u0275advance(2);
    \u0275\u0275classMapInterpolate1("", ctx_r2.prefixCls, "-separator");
    \u0275\u0275advance();
    \u0275\u0275property("nzStringTemplateOutlet", ctx_r2.nzSeparator);
    \u0275\u0275advance();
    \u0275\u0275classMapInterpolate1("", ctx_r2.prefixCls, "-input");
    \u0275\u0275advance();
    \u0275\u0275property("ngTemplateOutlet", tplRangeInput_r5)("ngTemplateOutletContext", \u0275\u0275pureFunction0(19, _c32));
    \u0275\u0275advance();
    \u0275\u0275property("ngTemplateOutlet", tplRightRest_r4);
  }
}
function NzDatePickerComponent_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, NzDatePickerComponent_Conditional_0_Conditional_0_Template, 4, 12, "div", 8)(1, NzDatePickerComponent_Conditional_0_Conditional_1_Template, 9, 20);
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275conditional(!ctx_r2.isRange ? 0 : 1);
  }
}
function NzDatePickerComponent_Conditional_1_ng_template_0_Template(rf, ctx) {
}
function NzDatePickerComponent_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, NzDatePickerComponent_Conditional_1_ng_template_0_Template, 0, 0, "ng-template", 6);
  }
  if (rf & 2) {
    \u0275\u0275nextContext();
    const inlineMode_r6 = \u0275\u0275reference(7);
    \u0275\u0275property("ngTemplateOutlet", inlineMode_r6);
  }
}
function NzDatePickerComponent_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "input", 14, 5);
    \u0275\u0275listener("click", function NzDatePickerComponent_ng_template_2_Template_input_click_0_listener($event) {
      \u0275\u0275restoreView(_r7);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.onClickInputBox($event));
    })("focusout", function NzDatePickerComponent_ng_template_2_Template_input_focusout_0_listener($event) {
      \u0275\u0275restoreView(_r7);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.onFocusout($event));
    })("focus", function NzDatePickerComponent_ng_template_2_Template_input_focus_0_listener($event) {
      const partType_r8 = \u0275\u0275restoreView(_r7).partType;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.onFocus($event, partType_r8));
    })("keyup.enter", function NzDatePickerComponent_ng_template_2_Template_input_keyup_enter_0_listener($event) {
      \u0275\u0275restoreView(_r7);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.onKeyupEnter($event));
    });
    \u0275\u0275twoWayListener("ngModelChange", function NzDatePickerComponent_ng_template_2_Template_input_ngModelChange_0_listener($event) {
      const partType_r8 = \u0275\u0275restoreView(_r7).partType;
      const ctx_r2 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r2.inputValue[ctx_r2.datePickerService.getActiveIndex(partType_r8)], $event) || (ctx_r2.inputValue[ctx_r2.datePickerService.getActiveIndex(partType_r8)] = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("ngModelChange", function NzDatePickerComponent_ng_template_2_Template_input_ngModelChange_0_listener($event) {
      \u0275\u0275restoreView(_r7);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.onInputChange($event));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const partType_r8 = ctx.partType;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275propertyInterpolate("placeholder", ctx_r2.getPlaceholder(partType_r8));
    \u0275\u0275property("disabled", ctx_r2.nzDisabled)("readOnly", ctx_r2.nzInputReadOnly)("size", ctx_r2.inputSize);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.inputValue[ctx_r2.datePickerService.getActiveIndex(partType_r8)]);
    \u0275\u0275attribute("id", ctx_r2.nzId);
  }
}
function NzDatePickerComponent_ng_template_4_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "span", 16);
    \u0275\u0275listener("click", function NzDatePickerComponent_ng_template_4_Conditional_1_Template_span_click_0_listener($event) {
      \u0275\u0275restoreView(_r9);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.onClickClear($event));
    });
    \u0275\u0275element(1, "nz-icon", 17);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275classMapInterpolate1("", ctx_r2.prefixCls, "-clear");
  }
}
function NzDatePickerComponent_ng_template_4_ng_container_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275element(1, "nz-icon", 18);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const suffixIcon_r10 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("nzType", suffixIcon_r10);
  }
}
function NzDatePickerComponent_ng_template_4_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "nz-form-item-feedback-icon", 15);
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275property("status", ctx_r2.status);
  }
}
function NzDatePickerComponent_ng_template_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "div");
    \u0275\u0275template(1, NzDatePickerComponent_ng_template_4_Conditional_1_Template, 2, 3, "span", 8);
    \u0275\u0275elementStart(2, "span");
    \u0275\u0275template(3, NzDatePickerComponent_ng_template_4_ng_container_3_Template, 2, 1, "ng-container", 12)(4, NzDatePickerComponent_ng_template_4_Conditional_4_Template, 1, 1, "nz-form-item-feedback-icon", 15);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275styleMap(ctx_r2.activeBarStyle);
    \u0275\u0275classMapInterpolate1("", ctx_r2.prefixCls, "-active-bar");
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r2.showClear ? 1 : -1);
    \u0275\u0275advance();
    \u0275\u0275classMapInterpolate1("", ctx_r2.prefixCls, "-suffix");
    \u0275\u0275advance();
    \u0275\u0275property("nzStringTemplateOutlet", ctx_r2.nzSuffixIcon);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r2.hasFeedback && !!ctx_r2.status ? 4 : -1);
  }
}
function NzDatePickerComponent_ng_template_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div")(1, "date-range-popup", 19);
    \u0275\u0275listener("panelModeChange", function NzDatePickerComponent_ng_template_6_Template_date_range_popup_panelModeChange_1_listener($event) {
      \u0275\u0275restoreView(_r11);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.onPanelModeChange($event));
    })("calendarChange", function NzDatePickerComponent_ng_template_6_Template_date_range_popup_calendarChange_1_listener($event) {
      \u0275\u0275restoreView(_r11);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.onCalendarChange($event));
    })("resultOk", function NzDatePickerComponent_ng_template_6_Template_date_range_popup_resultOk_1_listener() {
      \u0275\u0275restoreView(_r11);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.onResultOk());
    });
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275styleMap(ctx_r2.nzPopupStyle);
    \u0275\u0275classMapInterpolate2("", ctx_r2.prefixCls, "-dropdown ", ctx_r2.nzDropdownClassName, "");
    \u0275\u0275classProp("ant-picker-dropdown-rtl", ctx_r2.dir === "rtl")("ant-picker-dropdown-placement-bottomLeft", ctx_r2.currentPositionY === "bottom" && ctx_r2.currentPositionX === "start")("ant-picker-dropdown-placement-topLeft", ctx_r2.currentPositionY === "top" && ctx_r2.currentPositionX === "start")("ant-picker-dropdown-placement-bottomRight", ctx_r2.currentPositionY === "bottom" && ctx_r2.currentPositionX === "end")("ant-picker-dropdown-placement-topRight", ctx_r2.currentPositionY === "top" && ctx_r2.currentPositionX === "end")("ant-picker-dropdown-range", ctx_r2.isRange)("ant-picker-active-left", ctx_r2.datePickerService.activeInput === "left")("ant-picker-active-right", ctx_r2.datePickerService.activeInput === "right");
    \u0275\u0275advance();
    \u0275\u0275property("isRange", ctx_r2.isRange)("inline", ctx_r2.nzInline)("defaultPickerValue", ctx_r2.nzDefaultPickerValue)("showWeek", ctx_r2.nzShowWeekNumber || ctx_r2.nzMode === "week")("panelMode", ctx_r2.panelMode)("locale", ctx_r2.nzLocale == null ? null : ctx_r2.nzLocale.lang)("showToday", ctx_r2.nzMode === "date" && ctx_r2.nzShowToday && !ctx_r2.isRange && !ctx_r2.nzShowTime)("showNow", ctx_r2.nzMode === "date" && ctx_r2.nzShowNow && !ctx_r2.isRange && !!ctx_r2.nzShowTime)("showTime", ctx_r2.nzShowTime)("dateRender", ctx_r2.nzDateRender)("disabledDate", ctx_r2.nzDisabledDate)("disabledTime", ctx_r2.nzDisabledTime)("extraFooter", ctx_r2.extraFooter)("ranges", ctx_r2.nzRanges)("dir", ctx_r2.dir)("format", ctx_r2.nzFormat);
  }
}
function NzDatePickerComponent_ng_template_8_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0);
  }
}
function NzDatePickerComponent_ng_template_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 20);
    \u0275\u0275template(1, NzDatePickerComponent_ng_template_8_ng_container_1_Template, 1, 0, "ng-container", 10);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    const inlineMode_r6 = \u0275\u0275reference(7);
    \u0275\u0275styleProp("position", "relative");
    \u0275\u0275property("nzNoAnimation", !!(ctx_r2.noAnimation == null ? null : ctx_r2.noAnimation.nzNoAnimation))("@slideMotion", "enter");
    \u0275\u0275advance();
    \u0275\u0275property("ngTemplateOutlet", inlineMode_r6);
  }
}
var PREFIX_CLASS = "ant-picker";
var defaultDisabledTime = {
  nzDisabledHours() {
    return [];
  },
  nzDisabledMinutes() {
    return [];
  },
  nzDisabledSeconds() {
    return [];
  }
};
function getTimeConfig(value, disabledTime) {
  let disabledTimeConfig = disabledTime ? disabledTime(value && value.nativeDate) : {};
  disabledTimeConfig = __spreadValues(__spreadValues({}, defaultDisabledTime), disabledTimeConfig);
  return disabledTimeConfig;
}
function isTimeValidByConfig(value, disabledTimeConfig) {
  let invalidTime = false;
  if (value) {
    const hour = value.getHours();
    const minutes = value.getMinutes();
    const seconds = value.getSeconds();
    const disabledHours = disabledTimeConfig.nzDisabledHours();
    if (disabledHours.indexOf(hour) === -1) {
      const disabledMinutes = disabledTimeConfig.nzDisabledMinutes(hour);
      if (disabledMinutes.indexOf(minutes) === -1) {
        const disabledSeconds = disabledTimeConfig.nzDisabledSeconds(hour, minutes);
        invalidTime = disabledSeconds.indexOf(seconds) !== -1;
      } else {
        invalidTime = true;
      }
    } else {
      invalidTime = true;
    }
  }
  return !invalidTime;
}
function isTimeValid(value, disabledTime) {
  const disabledTimeConfig = getTimeConfig(value, disabledTime);
  return isTimeValidByConfig(value, disabledTimeConfig);
}
function isAllowedDate(value, disabledDate, disabledTime) {
  if (!value) {
    return false;
  }
  if (disabledDate) {
    if (disabledDate(value.nativeDate)) {
      return false;
    }
  }
  if (disabledTime) {
    if (!isTimeValid(value, disabledTime)) {
      return false;
    }
  }
  return true;
}
function transCompatFormat(format) {
  return format && format.replace(/Y/g, "y").replace(/D/g, "d");
}
var CalendarFooterComponent = class _CalendarFooterComponent {
  dateHelper;
  locale;
  showToday = false;
  showNow = false;
  hasTimePicker = false;
  isRange = false;
  okDisabled = false;
  disabledDate;
  extraFooter;
  rangeQuickSelector = null;
  clickOk = new EventEmitter();
  clickToday = new EventEmitter();
  prefixCls = PREFIX_CLASS;
  isTodayDisabled = false;
  todayTitle = "";
  constructor(dateHelper) {
    this.dateHelper = dateHelper;
  }
  ngOnChanges(changes) {
    const now = /* @__PURE__ */ new Date();
    if (changes.disabledDate) {
      this.isTodayDisabled = !!(this.disabledDate && this.disabledDate(now));
    }
    if (changes.locale) {
      const dateFormat = transCompatFormat(this.locale.dateFormat);
      this.todayTitle = this.dateHelper.format(now, dateFormat);
    }
  }
  onClickToday() {
    const now = new CandyDate();
    this.clickToday.emit(now.clone());
  }
  static \u0275fac = function CalendarFooterComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _CalendarFooterComponent)(\u0275\u0275directiveInject(DateHelperService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _CalendarFooterComponent,
    selectors: [["calendar-footer"]],
    inputs: {
      locale: "locale",
      showToday: [2, "showToday", "showToday", booleanAttribute],
      showNow: [2, "showNow", "showNow", booleanAttribute],
      hasTimePicker: [2, "hasTimePicker", "hasTimePicker", booleanAttribute],
      isRange: [2, "isRange", "isRange", booleanAttribute],
      okDisabled: [2, "okDisabled", "okDisabled", booleanAttribute],
      disabledDate: "disabledDate",
      extraFooter: "extraFooter",
      rangeQuickSelector: "rangeQuickSelector"
    },
    outputs: {
      clickOk: "clickOk",
      clickToday: "clickToday"
    },
    exportAs: ["calendarFooter"],
    features: [\u0275\u0275NgOnChangesFeature],
    decls: 4,
    vars: 6,
    consts: [[3, "class"], ["role", "button", 3, "class", "title"], [3, "nzStringTemplateOutlet"], ["role", "button", 3, "click", "title"], [4, "ngTemplateOutlet"], [3, "click"], ["nz-button", "", "type", "button", "nzType", "primary", "nzSize", "small", 3, "click", "disabled"]],
    template: function CalendarFooterComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div");
        \u0275\u0275template(1, CalendarFooterComponent_Conditional_1_Template, 2, 4, "div", 0)(2, CalendarFooterComponent_Conditional_2_Template, 2, 6, "a", 1)(3, CalendarFooterComponent_Conditional_3_Template, 4, 6, "ul", 0);
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        \u0275\u0275classMapInterpolate1("", ctx.prefixCls, "-footer");
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.extraFooter ? 1 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.showToday ? 2 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.hasTimePicker || ctx.rangeQuickSelector ? 3 : -1);
      }
    },
    dependencies: [NgTemplateOutlet, NzButtonModule, NzButtonComponent, NzTransitionPatchDirective, NzWaveDirective, NzStringTemplateOutletDirective],
    encapsulation: 2,
    changeDetection: 0
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CalendarFooterComponent, [{
    type: Component,
    args: [{
      // eslint-disable-next-line @angular-eslint/component-selector
      selector: "calendar-footer",
      exportAs: "calendarFooter",
      imports: [NgTemplateOutlet, NzButtonModule, NzStringTemplateOutletDirective],
      template: `
    <div class="{{ prefixCls }}-footer">
      @if (extraFooter) {
        <div class="{{ prefixCls }}-footer-extra">
          <ng-template [nzStringTemplateOutlet]="extraFooter">{{ extraFooter }}</ng-template>
        </div>
      }

      @if (showToday) {
        <a
          class="{{ prefixCls }}-today-btn {{ isTodayDisabled ? prefixCls + '-today-btn-disabled' : '' }}"
          role="button"
          (click)="isTodayDisabled ? null : onClickToday()"
          title="{{ todayTitle }}"
        >
          {{ locale.today }}
        </a>
      }

      @if (hasTimePicker || rangeQuickSelector) {
        <ul class="{{ prefixCls }}-ranges">
          <ng-container *ngTemplateOutlet="rangeQuickSelector" />
          @if (showNow) {
            <li class="{{ prefixCls }}-now">
              <a class="{{ prefixCls }}-now-btn" (click)="isTodayDisabled ? null : onClickToday()">
                {{ locale.now }}
              </a>
            </li>
          }

          @if (hasTimePicker) {
            <li class="{{ prefixCls }}-ok">
              <button
                nz-button
                type="button"
                nzType="primary"
                nzSize="small"
                [disabled]="okDisabled"
                (click)="okDisabled ? null : clickOk.emit()"
              >
                {{ locale.ok }}
              </button>
            </li>
          }
        </ul>
      }
    </div>
  `,
      encapsulation: ViewEncapsulation.None,
      changeDetection: ChangeDetectionStrategy.OnPush
    }]
  }], () => [{
    type: DateHelperService
  }], {
    locale: [{
      type: Input
    }],
    showToday: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    showNow: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    hasTimePicker: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    isRange: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    okDisabled: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    disabledDate: [{
      type: Input
    }],
    extraFooter: [{
      type: Input
    }],
    rangeQuickSelector: [{
      type: Input
    }],
    clickOk: [{
      type: Output
    }],
    clickToday: [{
      type: Output
    }]
  });
})();
var DatePickerService = class _DatePickerService {
  initialValue;
  value;
  activeDate;
  activeInput = "left";
  arrowLeft = 0;
  isRange = false;
  valueChange$ = new ReplaySubject(1);
  emitValue$ = new Subject();
  inputPartChange$ = new Subject();
  initValue(reset = false) {
    if (reset) {
      this.initialValue = this.isRange ? [] : null;
    }
    this.setValue(this.initialValue);
  }
  hasValue(value = this.value) {
    if (Array.isArray(value)) {
      return !!value[0] || !!value[1];
    } else {
      return !!value;
    }
  }
  makeValue(value) {
    if (this.isRange) {
      return value ? value.map((val) => new CandyDate(val)) : [];
    } else {
      return value ? new CandyDate(value) : null;
    }
  }
  setActiveDate(value, hasTimePicker = false, mode = "month") {
    const parentPanels = {
      date: "month",
      month: "year",
      quarter: "year",
      year: "decade"
    };
    if (this.isRange) {
      this.activeDate = normalizeRangeValue(value, hasTimePicker, parentPanels[mode], this.activeInput);
    } else {
      this.activeDate = cloneDate(value);
    }
  }
  setValue(value) {
    this.value = value;
    this.valueChange$.next(this.value);
  }
  getActiveIndex(part = this.activeInput) {
    return {
      left: 0,
      right: 1
    }[part];
  }
  ngOnDestroy() {
    this.valueChange$.complete();
    this.emitValue$.complete();
    this.inputPartChange$.complete();
  }
  static \u0275fac = function DatePickerService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _DatePickerService)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
    token: _DatePickerService,
    factory: _DatePickerService.\u0275fac
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DatePickerService, [{
    type: Injectable
  }], null, null);
})();
var AbstractPanelHeader = class _AbstractPanelHeader {
  prefixCls = `ant-picker-header`;
  selectors = [];
  mode;
  value;
  locale;
  showSuperPreBtn = true;
  showSuperNextBtn = true;
  showPreBtn = true;
  showNextBtn = true;
  panelChange = new EventEmitter();
  valueChange = new EventEmitter();
  superPreviousTitle() {
    return this.locale.previousYear;
  }
  previousTitle() {
    return this.locale.previousMonth;
  }
  superNextTitle() {
    return this.locale.nextYear;
  }
  nextTitle() {
    return this.locale.nextMonth;
  }
  superPrevious() {
    this.changeValue(this.value.addYears(-1));
  }
  superNext() {
    this.changeValue(this.value.addYears(1));
  }
  previous() {
    this.changeValue(this.value.addMonths(-1));
  }
  next() {
    this.changeValue(this.value.addMonths(1));
  }
  changeValue(value) {
    if (this.value !== value) {
      this.value = value;
      this.valueChange.emit(this.value);
      this.changeMode(this.mode);
      this.render();
    }
  }
  changeMode(mode) {
    this.panelChange.emit({
      mode,
      date: this.value.nativeDate
    });
  }
  render() {
    if (this.value) {
      this.selectors = this.getSelectors();
    }
  }
  ngOnInit() {
    if (!this.value) {
      this.value = new CandyDate();
    }
    this.selectors = this.getSelectors();
  }
  ngOnChanges(changes) {
    if (changes.value || changes.locale) {
      this.render();
    }
  }
  trackBySelector(selector) {
    return `${selector.title}-${selector.label}`;
  }
  static \u0275fac = function AbstractPanelHeader_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AbstractPanelHeader)();
  };
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _AbstractPanelHeader,
    inputs: {
      value: "value",
      locale: "locale",
      showSuperPreBtn: [2, "showSuperPreBtn", "showSuperPreBtn", booleanAttribute],
      showSuperNextBtn: [2, "showSuperNextBtn", "showSuperNextBtn", booleanAttribute],
      showPreBtn: [2, "showPreBtn", "showPreBtn", booleanAttribute],
      showNextBtn: [2, "showNextBtn", "showNextBtn", booleanAttribute]
    },
    outputs: {
      panelChange: "panelChange",
      valueChange: "valueChange"
    },
    features: [\u0275\u0275NgOnChangesFeature]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AbstractPanelHeader, [{
    type: Directive
  }], null, {
    value: [{
      type: Input
    }],
    locale: [{
      type: Input
    }],
    showSuperPreBtn: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    showSuperNextBtn: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    showPreBtn: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    showNextBtn: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    panelChange: [{
      type: Output
    }],
    valueChange: [{
      type: Output
    }]
  });
})();
var DecadeHeaderComponent = class _DecadeHeaderComponent extends AbstractPanelHeader {
  previous() {
  }
  next() {
  }
  mode = "decade";
  get startYear() {
    return parseInt(`${this.value.getYear() / 100}`, 10) * 100;
  }
  get endYear() {
    return this.startYear + 99;
  }
  superPrevious() {
    this.changeValue(this.value.addYears(-100));
  }
  superNext() {
    this.changeValue(this.value.addYears(100));
  }
  getSelectors() {
    return [{
      className: `${this.prefixCls}-decade-btn`,
      title: "",
      onClick: () => {
      },
      label: `${this.startYear}-${this.endYear}`
    }];
  }
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275DecadeHeaderComponent_BaseFactory;
    return function DecadeHeaderComponent_Factory(__ngFactoryType__) {
      return (\u0275DecadeHeaderComponent_BaseFactory || (\u0275DecadeHeaderComponent_BaseFactory = \u0275\u0275getInheritedFactory(_DecadeHeaderComponent)))(__ngFactoryType__ || _DecadeHeaderComponent);
    };
  })();
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _DecadeHeaderComponent,
    selectors: [["decade-header"]],
    exportAs: ["decadeHeader"],
    features: [\u0275\u0275InheritDefinitionFeature],
    decls: 12,
    vars: 30,
    consts: [["role", "button", "type", "button", "tabindex", "-1", 3, "click", "title"], [1, "ant-picker-super-prev-icon"], [1, "ant-picker-prev-icon"], ["role", "button", "type", "button", 3, "class", "title"], [1, "ant-picker-next-icon"], [1, "ant-picker-super-next-icon"], ["role", "button", "type", "button", 3, "click", "title"]],
    template: function DecadeHeaderComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div")(1, "button", 0);
        \u0275\u0275listener("click", function DecadeHeaderComponent_Template_button_click_1_listener() {
          return ctx.superPrevious();
        });
        \u0275\u0275element(2, "span", 1);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(3, "button", 0);
        \u0275\u0275listener("click", function DecadeHeaderComponent_Template_button_click_3_listener() {
          return ctx.previous();
        });
        \u0275\u0275element(4, "span", 2);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(5, "div");
        \u0275\u0275repeaterCreate(6, DecadeHeaderComponent_For_7_Template, 2, 5, "button", 3, _forTrack0, true);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(8, "button", 0);
        \u0275\u0275listener("click", function DecadeHeaderComponent_Template_button_click_8_listener() {
          return ctx.next();
        });
        \u0275\u0275element(9, "span", 4);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(10, "button", 0);
        \u0275\u0275listener("click", function DecadeHeaderComponent_Template_button_click_10_listener() {
          return ctx.superNext();
        });
        \u0275\u0275element(11, "span", 5);
        \u0275\u0275elementEnd()();
      }
      if (rf & 2) {
        \u0275\u0275classMap(ctx.prefixCls);
        \u0275\u0275advance();
        \u0275\u0275classMapInterpolate1("", ctx.prefixCls, "-super-prev-btn");
        \u0275\u0275styleProp("visibility", ctx.showSuperPreBtn ? "visible" : "hidden");
        \u0275\u0275propertyInterpolate("title", ctx.superPreviousTitle());
        \u0275\u0275advance(2);
        \u0275\u0275classMapInterpolate1("", ctx.prefixCls, "-prev-btn");
        \u0275\u0275styleProp("visibility", ctx.showPreBtn ? "visible" : "hidden");
        \u0275\u0275propertyInterpolate("title", ctx.previousTitle());
        \u0275\u0275advance(2);
        \u0275\u0275classMapInterpolate1("", ctx.prefixCls, "-view");
        \u0275\u0275advance();
        \u0275\u0275repeater(ctx.selectors);
        \u0275\u0275advance(2);
        \u0275\u0275classMapInterpolate1("", ctx.prefixCls, "-next-btn");
        \u0275\u0275styleProp("visibility", ctx.showNextBtn ? "visible" : "hidden");
        \u0275\u0275propertyInterpolate("title", ctx.nextTitle());
        \u0275\u0275advance(2);
        \u0275\u0275classMapInterpolate1("", ctx.prefixCls, "-super-next-btn");
        \u0275\u0275styleProp("visibility", ctx.showSuperNextBtn ? "visible" : "hidden");
        \u0275\u0275propertyInterpolate("title", ctx.superNextTitle());
      }
    },
    encapsulation: 2,
    changeDetection: 0
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DecadeHeaderComponent, [{
    type: Component,
    args: [{
      encapsulation: ViewEncapsulation.None,
      changeDetection: ChangeDetectionStrategy.OnPush,
      selector: "decade-header",
      exportAs: "decadeHeader",
      template: `<div class="{{ prefixCls }}">
  <button
    [style.visibility]="showSuperPreBtn ? 'visible' : 'hidden'"
    class="{{ prefixCls }}-super-prev-btn"
    role="button"
    type="button"
    tabindex="-1"
    title="{{ superPreviousTitle() }}"
    (click)="superPrevious()"
  >
    <span class="ant-picker-super-prev-icon"></span>
  </button>
  <button
    [style.visibility]="showPreBtn ? 'visible' : 'hidden'"
    class="{{ prefixCls }}-prev-btn"
    role="button"
    type="button"
    title="{{ previousTitle() }}"
    tabindex="-1"
    (click)="previous()"
  >
    <span class="ant-picker-prev-icon"></span>
  </button>

  <div class="{{ prefixCls }}-view">
    @for (selector of selectors; track trackBySelector(selector)) {
      <button
        class="{{ selector.className }}"
        role="button"
        type="button"
        title="{{ selector.title || null }}"
        (click)="selector.onClick()"
      >
        {{ selector.label }}
      </button>
    }
  </div>
  <button
    [style.visibility]="showNextBtn ? 'visible' : 'hidden'"
    class="{{ prefixCls }}-next-btn"
    role="button"
    type="button"
    tabindex="-1"
    title="{{ nextTitle() }}"
    (click)="next()"
  >
    <span class="ant-picker-next-icon"></span>
  </button>
  <button
    [style.visibility]="showSuperNextBtn ? 'visible' : 'hidden'"
    class="{{ prefixCls }}-super-next-btn"
    role="button"
    type="button"
    tabindex="-1"
    title="{{ superNextTitle() }}"
    (click)="superNext()"
  >
    <span class="ant-picker-super-next-icon"></span>
  </button>
</div>
`
    }]
  }], null, null);
})();
var AbstractTable = class _AbstractTable {
  headRow = [];
  bodyRows = [];
  MAX_ROW = 6;
  MAX_COL = 7;
  prefixCls = "ant-picker";
  value;
  locale;
  activeDate = new CandyDate();
  showWeek = false;
  selectedValue = [];
  // Range ONLY
  hoverValue = [];
  // Range ONLY
  disabledDate;
  cellRender;
  fullCellRender;
  canSelectWeek = false;
  valueChange = new EventEmitter();
  cellHover = new EventEmitter();
  // Emitted when hover on a day by mouse enter
  render() {
    if (this.activeDate) {
      this.headRow = this.makeHeadRow();
      this.bodyRows = this.makeBodyRows();
    }
  }
  hasRangeValue() {
    return this.selectedValue?.length > 0 || this.hoverValue?.length > 0;
  }
  getClassMap(cell) {
    return {
      [`ant-picker-cell`]: true,
      [`ant-picker-cell-in-view`]: true,
      [`ant-picker-cell-selected`]: cell.isSelected,
      [`ant-picker-cell-disabled`]: cell.isDisabled,
      [`ant-picker-cell-in-range`]: !!cell.isInSelectedRange,
      [`ant-picker-cell-range-start`]: !!cell.isSelectedStart,
      [`ant-picker-cell-range-end`]: !!cell.isSelectedEnd,
      [`ant-picker-cell-range-start-single`]: !!cell.isStartSingle,
      [`ant-picker-cell-range-end-single`]: !!cell.isEndSingle,
      [`ant-picker-cell-range-hover`]: !!cell.isInHoverRange,
      [`ant-picker-cell-range-hover-start`]: !!cell.isHoverStart,
      [`ant-picker-cell-range-hover-end`]: !!cell.isHoverEnd,
      [`ant-picker-cell-range-hover-edge-start`]: !!cell.isFirstCellInPanel,
      [`ant-picker-cell-range-hover-edge-end`]: !!cell.isLastCellInPanel,
      [`ant-picker-cell-range-start-near-hover`]: !!cell.isRangeStartNearHover,
      [`ant-picker-cell-range-end-near-hover`]: !!cell.isRangeEndNearHover
    };
  }
  ngOnInit() {
    this.render();
  }
  ngOnChanges(changes) {
    if (changes.activeDate && !changes.activeDate.currentValue) {
      this.activeDate = new CandyDate();
    }
    if (changes.disabledDate || changes.locale || changes.showWeek || changes.selectWeek || this.isDateRealChange(changes.activeDate) || this.isDateRealChange(changes.value) || this.isDateRealChange(changes.selectedValue) || this.isDateRealChange(changes.hoverValue)) {
      this.render();
    }
  }
  isDateRealChange(change) {
    if (change) {
      const previousValue = change.previousValue;
      const currentValue = change.currentValue;
      if (Array.isArray(currentValue)) {
        return !Array.isArray(previousValue) || currentValue.length !== previousValue.length || currentValue.some((value, index) => {
          const previousCandyDate = previousValue[index];
          return previousCandyDate instanceof CandyDate ? previousCandyDate.isSameDay(value) : previousCandyDate !== value;
        });
      } else {
        return !this.isSameDate(previousValue, currentValue);
      }
    }
    return false;
  }
  isSameDate(left, right) {
    return !left && !right || left && right && right.isSameDay(left);
  }
  static \u0275fac = function AbstractTable_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AbstractTable)();
  };
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _AbstractTable,
    inputs: {
      prefixCls: "prefixCls",
      value: "value",
      locale: "locale",
      activeDate: "activeDate",
      showWeek: [2, "showWeek", "showWeek", booleanAttribute],
      selectedValue: "selectedValue",
      hoverValue: "hoverValue",
      disabledDate: "disabledDate",
      cellRender: "cellRender",
      fullCellRender: "fullCellRender",
      canSelectWeek: [2, "canSelectWeek", "canSelectWeek", booleanAttribute]
    },
    outputs: {
      valueChange: "valueChange",
      cellHover: "cellHover"
    },
    features: [\u0275\u0275NgOnChangesFeature]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AbstractTable, [{
    type: Directive
  }], null, {
    prefixCls: [{
      type: Input
    }],
    value: [{
      type: Input
    }],
    locale: [{
      type: Input
    }],
    activeDate: [{
      type: Input
    }],
    showWeek: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    selectedValue: [{
      type: Input
    }],
    hoverValue: [{
      type: Input
    }],
    disabledDate: [{
      type: Input
    }],
    cellRender: [{
      type: Input
    }],
    fullCellRender: [{
      type: Input
    }],
    canSelectWeek: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    valueChange: [{
      type: Output
    }],
    cellHover: [{
      type: Output
    }]
  });
})();
var MAX_ROW = 4;
var MAX_COL = 3;
var DecadeTableComponent = class _DecadeTableComponent extends AbstractTable {
  get startYear() {
    return parseInt(`${this.activeDate.getYear() / 100}`, 10) * 100;
  }
  get endYear() {
    return this.startYear + 99;
  }
  makeHeadRow() {
    return [];
  }
  makeBodyRows() {
    const decades = [];
    const currentYear = this.value && this.value.getYear();
    const startYear = this.startYear;
    const endYear = this.endYear;
    const previousYear = startYear - 10;
    let index = 0;
    for (let rowIndex = 0; rowIndex < MAX_ROW; rowIndex++) {
      const row = {
        dateCells: [],
        trackByIndex: rowIndex
      };
      for (let colIndex = 0; colIndex < MAX_COL; colIndex++) {
        const start = previousYear + index * 10;
        const end = previousYear + index * 10 + 9;
        const content = `${start}-${end}`;
        const cell = {
          trackByIndex: colIndex,
          value: this.activeDate.setYear(start).nativeDate,
          content,
          title: content,
          isDisabled: false,
          isSelected: currentYear >= start && currentYear <= end,
          isLowerThanStart: end < startYear,
          isBiggerThanEnd: start > endYear,
          classMap: {},
          onClick() {
          },
          onMouseEnter() {
          }
        };
        cell.classMap = this.getClassMap(cell);
        cell.onClick = () => this.chooseDecade(start);
        index++;
        row.dateCells.push(cell);
      }
      decades.push(row);
    }
    return decades;
  }
  getClassMap(cell) {
    return {
      [`${this.prefixCls}-cell`]: true,
      [`${this.prefixCls}-cell-in-view`]: !cell.isBiggerThanEnd && !cell.isLowerThanStart,
      [`${this.prefixCls}-cell-selected`]: cell.isSelected,
      [`${this.prefixCls}-cell-disabled`]: cell.isDisabled
    };
  }
  chooseDecade(year) {
    this.value = this.activeDate.setYear(year);
    this.valueChange.emit(this.value);
  }
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275DecadeTableComponent_BaseFactory;
    return function DecadeTableComponent_Factory(__ngFactoryType__) {
      return (\u0275DecadeTableComponent_BaseFactory || (\u0275DecadeTableComponent_BaseFactory = \u0275\u0275getInheritedFactory(_DecadeTableComponent)))(__ngFactoryType__ || _DecadeTableComponent);
    };
  })();
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _DecadeTableComponent,
    selectors: [["decade-table"]],
    exportAs: ["decadeTable"],
    features: [\u0275\u0275InheritDefinitionFeature],
    decls: 5,
    vars: 1,
    consts: [["cellspacing", "0", "role", "grid", 1, "ant-picker-content"], ["role", "row", 3, "class"], ["role", "row"], ["role", "columnheader"], ["role", "columnheader", 3, "title"], ["role", "gridcell", 3, "class"], ["role", "gridcell", 3, "title", "class"], ["role", "gridcell"], ["role", "gridcell", 3, "click", "mouseenter", "title"], [3, "class", "ant-picker-calendar-date-today"], [3, "nzStringTemplateOutlet", "nzStringTemplateOutletContext"], [3, "class"], [4, "nzStringTemplateOutlet", "nzStringTemplateOutletContext"]],
    template: function DecadeTableComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "table", 0);
        \u0275\u0275template(1, DecadeTableComponent_Conditional_1_Template, 5, 1, "thead");
        \u0275\u0275elementStart(2, "tbody");
        \u0275\u0275repeaterCreate(3, DecadeTableComponent_For_4_Template, 4, 3, "tr", 1, _forTrack1);
        \u0275\u0275elementEnd()();
      }
      if (rf & 2) {
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.headRow && ctx.headRow.length > 0 ? 1 : -1);
        \u0275\u0275advance(2);
        \u0275\u0275repeater(ctx.bodyRows);
      }
    },
    dependencies: [NzStringTemplateOutletDirective],
    encapsulation: 2,
    changeDetection: 0
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DecadeTableComponent, [{
    type: Component,
    args: [{
      encapsulation: ViewEncapsulation.None,
      changeDetection: ChangeDetectionStrategy.OnPush,
      selector: "decade-table",
      exportAs: "decadeTable",
      imports: [NzStringTemplateOutletDirective],
      template: `<table class="ant-picker-content" cellspacing="0" role="grid">
  @if (headRow && headRow.length > 0) {
    <thead>
      <tr role="row">
        @if (showWeek) {
          <th role="columnheader"></th>
        }
        @for (cell of headRow; track $index) {
          <th role="columnheader" [title]="cell.title"> {{ cell.content }}</th>
        }
      </tr>
    </thead>
  }

  <tbody>
    @for (row of bodyRows; track row.trackByIndex) {
      <tr [class]="row.classMap!" role="row">
        @if (row.weekNum) {
          <td role="gridcell" class="{{ prefixCls }}-cell-week"> {{ row.weekNum }}</td>
        }
        @for (cell of row.dateCells; track cell.trackByIndex) {
          <td
            [title]="cell.title"
            role="gridcell"
            [class]="cell.classMap!"
            (click)="cell.isDisabled ? null : cell.onClick()"
            (mouseenter)="cell.onMouseEnter()"
          >
            @switch (prefixCls) {
              @case ('ant-picker') {
                @if (cell.cellRender) {
                  <ng-template
                    [nzStringTemplateOutlet]="cell.cellRender"
                    [nzStringTemplateOutletContext]="{ $implicit: cell.value }"
                  >
                    {{ cell.cellRender }}
                  </ng-template>
                } @else {
                  <div
                    class="{{ prefixCls }}-cell-inner"
                    [attr.aria-selected]="cell.isSelected"
                    [attr.aria-disabled]="cell.isDisabled"
                  >
                    {{ cell.content }}
                  </div>
                }
              }
              @case ('ant-picker-calendar') {
                <div
                  class="{{ prefixCls }}-date ant-picker-cell-inner"
                  [class.ant-picker-calendar-date-today]="cell.isToday"
                >
                  @if (cell.fullCellRender) {
                    <ng-container *nzStringTemplateOutlet="cell.fullCellRender; context: { $implicit: cell.value }">
                      {{ cell.fullCellRender }}
                    </ng-container>
                  } @else {
                    <div class="{{ prefixCls }}-date-value">{{ cell.content }}</div>
                    <div class="{{ prefixCls }}-date-content">
                      <ng-container *nzStringTemplateOutlet="cell.cellRender; context: { $implicit: cell.value }">
                        {{ cell.cellRender }}
                      </ng-container>
                    </div>
                  }
                </div>
              }
            }
          </td>
        }
      </tr>
    }
  </tbody>
</table>
`
    }]
  }], null, null);
})();
var YearHeaderComponent = class _YearHeaderComponent extends AbstractPanelHeader {
  mode = "year";
  get startYear() {
    return parseInt(`${this.value.getYear() / 10}`, 10) * 10;
  }
  get endYear() {
    return this.startYear + 9;
  }
  superPrevious() {
    this.changeValue(this.value.addYears(-10));
  }
  superNext() {
    this.changeValue(this.value.addYears(10));
  }
  getSelectors() {
    return [{
      className: `${this.prefixCls}-year-btn`,
      title: "",
      onClick: () => {
        this.mode = "decade";
        this.changeMode("decade");
      },
      label: `${this.startYear}-${this.endYear}`
    }];
  }
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275YearHeaderComponent_BaseFactory;
    return function YearHeaderComponent_Factory(__ngFactoryType__) {
      return (\u0275YearHeaderComponent_BaseFactory || (\u0275YearHeaderComponent_BaseFactory = \u0275\u0275getInheritedFactory(_YearHeaderComponent)))(__ngFactoryType__ || _YearHeaderComponent);
    };
  })();
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _YearHeaderComponent,
    selectors: [["year-header"]],
    exportAs: ["yearHeader"],
    features: [\u0275\u0275InheritDefinitionFeature],
    decls: 12,
    vars: 30,
    consts: [["role", "button", "type", "button", "tabindex", "-1", 3, "click", "title"], [1, "ant-picker-super-prev-icon"], [1, "ant-picker-prev-icon"], ["role", "button", "type", "button", 3, "class", "title"], [1, "ant-picker-next-icon"], [1, "ant-picker-super-next-icon"], ["role", "button", "type", "button", 3, "click", "title"]],
    template: function YearHeaderComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div")(1, "button", 0);
        \u0275\u0275listener("click", function YearHeaderComponent_Template_button_click_1_listener() {
          return ctx.superPrevious();
        });
        \u0275\u0275element(2, "span", 1);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(3, "button", 0);
        \u0275\u0275listener("click", function YearHeaderComponent_Template_button_click_3_listener() {
          return ctx.previous();
        });
        \u0275\u0275element(4, "span", 2);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(5, "div");
        \u0275\u0275repeaterCreate(6, YearHeaderComponent_For_7_Template, 2, 5, "button", 3, _forTrack0, true);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(8, "button", 0);
        \u0275\u0275listener("click", function YearHeaderComponent_Template_button_click_8_listener() {
          return ctx.next();
        });
        \u0275\u0275element(9, "span", 4);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(10, "button", 0);
        \u0275\u0275listener("click", function YearHeaderComponent_Template_button_click_10_listener() {
          return ctx.superNext();
        });
        \u0275\u0275element(11, "span", 5);
        \u0275\u0275elementEnd()();
      }
      if (rf & 2) {
        \u0275\u0275classMap(ctx.prefixCls);
        \u0275\u0275advance();
        \u0275\u0275classMapInterpolate1("", ctx.prefixCls, "-super-prev-btn");
        \u0275\u0275styleProp("visibility", ctx.showSuperPreBtn ? "visible" : "hidden");
        \u0275\u0275propertyInterpolate("title", ctx.superPreviousTitle());
        \u0275\u0275advance(2);
        \u0275\u0275classMapInterpolate1("", ctx.prefixCls, "-prev-btn");
        \u0275\u0275styleProp("visibility", ctx.showPreBtn ? "visible" : "hidden");
        \u0275\u0275propertyInterpolate("title", ctx.previousTitle());
        \u0275\u0275advance(2);
        \u0275\u0275classMapInterpolate1("", ctx.prefixCls, "-view");
        \u0275\u0275advance();
        \u0275\u0275repeater(ctx.selectors);
        \u0275\u0275advance(2);
        \u0275\u0275classMapInterpolate1("", ctx.prefixCls, "-next-btn");
        \u0275\u0275styleProp("visibility", ctx.showNextBtn ? "visible" : "hidden");
        \u0275\u0275propertyInterpolate("title", ctx.nextTitle());
        \u0275\u0275advance(2);
        \u0275\u0275classMapInterpolate1("", ctx.prefixCls, "-super-next-btn");
        \u0275\u0275styleProp("visibility", ctx.showSuperNextBtn ? "visible" : "hidden");
        \u0275\u0275propertyInterpolate("title", ctx.superNextTitle());
      }
    },
    encapsulation: 2,
    changeDetection: 0
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(YearHeaderComponent, [{
    type: Component,
    args: [{
      encapsulation: ViewEncapsulation.None,
      changeDetection: ChangeDetectionStrategy.OnPush,
      selector: "year-header",
      exportAs: "yearHeader",
      template: `<div class="{{ prefixCls }}">
  <button
    [style.visibility]="showSuperPreBtn ? 'visible' : 'hidden'"
    class="{{ prefixCls }}-super-prev-btn"
    role="button"
    type="button"
    tabindex="-1"
    title="{{ superPreviousTitle() }}"
    (click)="superPrevious()"
  >
    <span class="ant-picker-super-prev-icon"></span>
  </button>
  <button
    [style.visibility]="showPreBtn ? 'visible' : 'hidden'"
    class="{{ prefixCls }}-prev-btn"
    role="button"
    type="button"
    title="{{ previousTitle() }}"
    tabindex="-1"
    (click)="previous()"
  >
    <span class="ant-picker-prev-icon"></span>
  </button>

  <div class="{{ prefixCls }}-view">
    @for (selector of selectors; track trackBySelector(selector)) {
      <button
        class="{{ selector.className }}"
        role="button"
        type="button"
        title="{{ selector.title || null }}"
        (click)="selector.onClick()"
      >
        {{ selector.label }}
      </button>
    }
  </div>
  <button
    [style.visibility]="showNextBtn ? 'visible' : 'hidden'"
    class="{{ prefixCls }}-next-btn"
    role="button"
    type="button"
    tabindex="-1"
    title="{{ nextTitle() }}"
    (click)="next()"
  >
    <span class="ant-picker-next-icon"></span>
  </button>
  <button
    [style.visibility]="showSuperNextBtn ? 'visible' : 'hidden'"
    class="{{ prefixCls }}-super-next-btn"
    role="button"
    type="button"
    tabindex="-1"
    title="{{ superNextTitle() }}"
    (click)="superNext()"
  >
    <span class="ant-picker-super-next-icon"></span>
  </button>
</div>
`
    }]
  }], null, null);
})();
var YearTableComponent = class _YearTableComponent extends AbstractTable {
  dateHelper;
  MAX_ROW = 4;
  MAX_COL = 3;
  constructor(dateHelper) {
    super();
    this.dateHelper = dateHelper;
  }
  makeHeadRow() {
    return [];
  }
  makeBodyRows() {
    const currentYear = this.activeDate && this.activeDate.getYear();
    const startYear = parseInt(`${currentYear / 10}`, 10) * 10;
    const endYear = startYear + 9;
    const previousYear = startYear - 1;
    const years = [];
    let yearValue = 0;
    for (let rowIndex = 0; rowIndex < this.MAX_ROW; rowIndex++) {
      const row = {
        dateCells: [],
        trackByIndex: rowIndex
      };
      for (let colIndex = 0; colIndex < this.MAX_COL; colIndex++) {
        const yearNum = previousYear + yearValue;
        const year = this.activeDate.setYear(yearNum);
        const content = this.dateHelper.format(year.nativeDate, "yyyy");
        const isDisabled = this.isDisabledYear(year);
        const cell = {
          trackByIndex: colIndex,
          value: year.nativeDate,
          isDisabled,
          isSameDecade: yearNum >= startYear && yearNum <= endYear,
          isSelected: yearNum === (this.value && this.value.getYear()),
          content,
          title: content,
          classMap: {},
          isLastCellInPanel: year.getYear() === endYear,
          isFirstCellInPanel: year.getYear() === startYear,
          cellRender: valueFunctionProp(this.cellRender, year),
          // Customized content
          fullCellRender: valueFunctionProp(this.fullCellRender, year),
          onClick: () => this.chooseYear(cell.value.getFullYear()),
          // don't use yearValue here,
          onMouseEnter: () => this.cellHover.emit(year)
        };
        this.addCellProperty(cell, year);
        row.dateCells.push(cell);
        yearValue++;
      }
      years.push(row);
    }
    return years;
  }
  getClassMap(cell) {
    return __spreadProps(__spreadValues({}, super.getClassMap(cell)), {
      [`ant-picker-cell-in-view`]: !!cell.isSameDecade
    });
  }
  isDisabledYear(year) {
    if (!this.disabledDate) {
      return false;
    }
    const firstOfMonth = year.setMonth(0).setDate(1);
    for (let date = firstOfMonth; date.getYear() === year.getYear(); date = date.addDays(1)) {
      if (!this.disabledDate(date.nativeDate)) {
        return false;
      }
    }
    return true;
  }
  addCellProperty(cell, year) {
    if (this.hasRangeValue()) {
      const [startHover, endHover] = this.hoverValue;
      const [startSelected, endSelected] = this.selectedValue;
      if (startSelected?.isSameYear(year)) {
        cell.isSelectedStart = true;
        cell.isSelected = true;
      }
      if (endSelected?.isSameYear(year)) {
        cell.isSelectedEnd = true;
        cell.isSelected = true;
      }
      if (startHover && endHover) {
        cell.isHoverStart = startHover.isSameYear(year);
        cell.isHoverEnd = endHover.isSameYear(year);
        cell.isInHoverRange = startHover.isBeforeYear(year) && year.isBeforeYear(endHover);
      }
      cell.isStartSingle = startSelected && !endSelected;
      cell.isEndSingle = !startSelected && endSelected;
      cell.isInSelectedRange = startSelected?.isBeforeYear(year) && year?.isBeforeYear(endSelected);
      cell.isRangeStartNearHover = startSelected && cell.isInHoverRange;
      cell.isRangeEndNearHover = endSelected && cell.isInHoverRange;
    } else if (year.isSameYear(this.value)) {
      cell.isSelected = true;
    }
    cell.classMap = this.getClassMap(cell);
  }
  chooseYear(year) {
    this.value = this.activeDate.setYear(year);
    this.valueChange.emit(this.value);
    this.render();
  }
  static \u0275fac = function YearTableComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _YearTableComponent)(\u0275\u0275directiveInject(DateHelperService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _YearTableComponent,
    selectors: [["year-table"]],
    exportAs: ["yearTable"],
    features: [\u0275\u0275InheritDefinitionFeature],
    decls: 5,
    vars: 1,
    consts: [["cellspacing", "0", "role", "grid", 1, "ant-picker-content"], ["role", "row", 3, "class"], ["role", "row"], ["role", "columnheader"], ["role", "columnheader", 3, "title"], ["role", "gridcell", 3, "class"], ["role", "gridcell", 3, "title", "class"], ["role", "gridcell"], ["role", "gridcell", 3, "click", "mouseenter", "title"], [3, "class", "ant-picker-calendar-date-today"], [3, "nzStringTemplateOutlet", "nzStringTemplateOutletContext"], [3, "class"], [4, "nzStringTemplateOutlet", "nzStringTemplateOutletContext"]],
    template: function YearTableComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "table", 0);
        \u0275\u0275template(1, YearTableComponent_Conditional_1_Template, 5, 1, "thead");
        \u0275\u0275elementStart(2, "tbody");
        \u0275\u0275repeaterCreate(3, YearTableComponent_For_4_Template, 4, 3, "tr", 1, _forTrack1);
        \u0275\u0275elementEnd()();
      }
      if (rf & 2) {
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.headRow && ctx.headRow.length > 0 ? 1 : -1);
        \u0275\u0275advance(2);
        \u0275\u0275repeater(ctx.bodyRows);
      }
    },
    dependencies: [NzStringTemplateOutletDirective],
    encapsulation: 2,
    changeDetection: 0
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(YearTableComponent, [{
    type: Component,
    args: [{
      encapsulation: ViewEncapsulation.None,
      changeDetection: ChangeDetectionStrategy.OnPush,
      selector: "year-table",
      exportAs: "yearTable",
      imports: [NzStringTemplateOutletDirective],
      template: `<table class="ant-picker-content" cellspacing="0" role="grid">
  @if (headRow && headRow.length > 0) {
    <thead>
      <tr role="row">
        @if (showWeek) {
          <th role="columnheader"></th>
        }
        @for (cell of headRow; track $index) {
          <th role="columnheader" [title]="cell.title"> {{ cell.content }}</th>
        }
      </tr>
    </thead>
  }

  <tbody>
    @for (row of bodyRows; track row.trackByIndex) {
      <tr [class]="row.classMap!" role="row">
        @if (row.weekNum) {
          <td role="gridcell" class="{{ prefixCls }}-cell-week"> {{ row.weekNum }}</td>
        }
        @for (cell of row.dateCells; track cell.trackByIndex) {
          <td
            [title]="cell.title"
            role="gridcell"
            [class]="cell.classMap!"
            (click)="cell.isDisabled ? null : cell.onClick()"
            (mouseenter)="cell.onMouseEnter()"
          >
            @switch (prefixCls) {
              @case ('ant-picker') {
                @if (cell.cellRender) {
                  <ng-template
                    [nzStringTemplateOutlet]="cell.cellRender"
                    [nzStringTemplateOutletContext]="{ $implicit: cell.value }"
                  >
                    {{ cell.cellRender }}
                  </ng-template>
                } @else {
                  <div
                    class="{{ prefixCls }}-cell-inner"
                    [attr.aria-selected]="cell.isSelected"
                    [attr.aria-disabled]="cell.isDisabled"
                  >
                    {{ cell.content }}
                  </div>
                }
              }
              @case ('ant-picker-calendar') {
                <div
                  class="{{ prefixCls }}-date ant-picker-cell-inner"
                  [class.ant-picker-calendar-date-today]="cell.isToday"
                >
                  @if (cell.fullCellRender) {
                    <ng-container *nzStringTemplateOutlet="cell.fullCellRender; context: { $implicit: cell.value }">
                      {{ cell.fullCellRender }}
                    </ng-container>
                  } @else {
                    <div class="{{ prefixCls }}-date-value">{{ cell.content }}</div>
                    <div class="{{ prefixCls }}-date-content">
                      <ng-container *nzStringTemplateOutlet="cell.cellRender; context: { $implicit: cell.value }">
                        {{ cell.cellRender }}
                      </ng-container>
                    </div>
                  }
                </div>
              }
            }
          </td>
        }
      </tr>
    }
  </tbody>
</table>
`
    }]
  }], () => [{
    type: DateHelperService
  }], null);
})();
var QuarterHeaderComponent = class _QuarterHeaderComponent extends AbstractPanelHeader {
  dateHelper;
  mode = "quarter";
  constructor(dateHelper) {
    super();
    this.dateHelper = dateHelper;
  }
  getSelectors() {
    return [{
      className: `${this.prefixCls}-quarter-btn`,
      title: this.locale.yearSelect,
      onClick: () => {
        this.mode = "year";
        this.changeMode("year");
      },
      label: this.dateHelper.format(this.value.nativeDate, transCompatFormat(this.locale.yearFormat))
    }];
  }
  static \u0275fac = function QuarterHeaderComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _QuarterHeaderComponent)(\u0275\u0275directiveInject(DateHelperService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _QuarterHeaderComponent,
    selectors: [["quarter-header"]],
    exportAs: ["quarterHeader"],
    features: [\u0275\u0275InheritDefinitionFeature],
    decls: 12,
    vars: 30,
    consts: [["role", "button", "type", "button", "tabindex", "-1", 3, "click", "title"], [1, "ant-picker-super-prev-icon"], [1, "ant-picker-prev-icon"], ["role", "button", "type", "button", 3, "class", "title"], [1, "ant-picker-next-icon"], [1, "ant-picker-super-next-icon"], ["role", "button", "type", "button", 3, "click", "title"]],
    template: function QuarterHeaderComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div")(1, "button", 0);
        \u0275\u0275listener("click", function QuarterHeaderComponent_Template_button_click_1_listener() {
          return ctx.superPrevious();
        });
        \u0275\u0275element(2, "span", 1);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(3, "button", 0);
        \u0275\u0275listener("click", function QuarterHeaderComponent_Template_button_click_3_listener() {
          return ctx.previous();
        });
        \u0275\u0275element(4, "span", 2);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(5, "div");
        \u0275\u0275repeaterCreate(6, QuarterHeaderComponent_For_7_Template, 2, 5, "button", 3, _forTrack0, true);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(8, "button", 0);
        \u0275\u0275listener("click", function QuarterHeaderComponent_Template_button_click_8_listener() {
          return ctx.next();
        });
        \u0275\u0275element(9, "span", 4);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(10, "button", 0);
        \u0275\u0275listener("click", function QuarterHeaderComponent_Template_button_click_10_listener() {
          return ctx.superNext();
        });
        \u0275\u0275element(11, "span", 5);
        \u0275\u0275elementEnd()();
      }
      if (rf & 2) {
        \u0275\u0275classMap(ctx.prefixCls);
        \u0275\u0275advance();
        \u0275\u0275classMapInterpolate1("", ctx.prefixCls, "-super-prev-btn");
        \u0275\u0275styleProp("visibility", ctx.showSuperPreBtn ? "visible" : "hidden");
        \u0275\u0275propertyInterpolate("title", ctx.superPreviousTitle());
        \u0275\u0275advance(2);
        \u0275\u0275classMapInterpolate1("", ctx.prefixCls, "-prev-btn");
        \u0275\u0275styleProp("visibility", ctx.showPreBtn ? "visible" : "hidden");
        \u0275\u0275propertyInterpolate("title", ctx.previousTitle());
        \u0275\u0275advance(2);
        \u0275\u0275classMapInterpolate1("", ctx.prefixCls, "-view");
        \u0275\u0275advance();
        \u0275\u0275repeater(ctx.selectors);
        \u0275\u0275advance(2);
        \u0275\u0275classMapInterpolate1("", ctx.prefixCls, "-next-btn");
        \u0275\u0275styleProp("visibility", ctx.showNextBtn ? "visible" : "hidden");
        \u0275\u0275propertyInterpolate("title", ctx.nextTitle());
        \u0275\u0275advance(2);
        \u0275\u0275classMapInterpolate1("", ctx.prefixCls, "-super-next-btn");
        \u0275\u0275styleProp("visibility", ctx.showSuperNextBtn ? "visible" : "hidden");
        \u0275\u0275propertyInterpolate("title", ctx.superNextTitle());
      }
    },
    encapsulation: 2,
    changeDetection: 0
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(QuarterHeaderComponent, [{
    type: Component,
    args: [{
      encapsulation: ViewEncapsulation.None,
      changeDetection: ChangeDetectionStrategy.OnPush,
      selector: "quarter-header",
      exportAs: "quarterHeader",
      template: `<div class="{{ prefixCls }}">
  <button
    [style.visibility]="showSuperPreBtn ? 'visible' : 'hidden'"
    class="{{ prefixCls }}-super-prev-btn"
    role="button"
    type="button"
    tabindex="-1"
    title="{{ superPreviousTitle() }}"
    (click)="superPrevious()"
  >
    <span class="ant-picker-super-prev-icon"></span>
  </button>
  <button
    [style.visibility]="showPreBtn ? 'visible' : 'hidden'"
    class="{{ prefixCls }}-prev-btn"
    role="button"
    type="button"
    title="{{ previousTitle() }}"
    tabindex="-1"
    (click)="previous()"
  >
    <span class="ant-picker-prev-icon"></span>
  </button>

  <div class="{{ prefixCls }}-view">
    @for (selector of selectors; track trackBySelector(selector)) {
      <button
        class="{{ selector.className }}"
        role="button"
        type="button"
        title="{{ selector.title || null }}"
        (click)="selector.onClick()"
      >
        {{ selector.label }}
      </button>
    }
  </div>
  <button
    [style.visibility]="showNextBtn ? 'visible' : 'hidden'"
    class="{{ prefixCls }}-next-btn"
    role="button"
    type="button"
    tabindex="-1"
    title="{{ nextTitle() }}"
    (click)="next()"
  >
    <span class="ant-picker-next-icon"></span>
  </button>
  <button
    [style.visibility]="showSuperNextBtn ? 'visible' : 'hidden'"
    class="{{ prefixCls }}-super-next-btn"
    role="button"
    type="button"
    tabindex="-1"
    title="{{ superNextTitle() }}"
    (click)="superNext()"
  >
    <span class="ant-picker-super-next-icon"></span>
  </button>
</div>
`
    }]
  }], () => [{
    type: DateHelperService
  }], null);
})();
var QuarterTableComponent = class _QuarterTableComponent extends AbstractTable {
  dateHelper;
  MAX_ROW = 1;
  MAX_COL = 4;
  constructor(dateHelper) {
    super();
    this.dateHelper = dateHelper;
  }
  changeValueFromInside(value) {
    this.activeDate = value.clone();
    this.valueChange.emit(this.activeDate);
    if (!this.activeDate.isSameQuarter(this.value)) {
      this.render();
    }
  }
  makeHeadRow() {
    return [];
  }
  makeBodyRows() {
    const dateCells = [];
    const months = [{
      dateCells,
      trackByIndex: 0
    }];
    let quarterValue = 1;
    for (let colIndex = 1; colIndex <= this.MAX_COL; colIndex++, quarterValue++) {
      const date = this.activeDate.setQuarter(quarterValue);
      const isDisabled = this.isDisabledQuarter(date);
      const content = this.dateHelper.format(date.nativeDate, "[Q]Q");
      const cell = {
        trackByIndex: colIndex,
        value: date.nativeDate,
        isDisabled,
        isSelected: date.isSameQuarter(this.value),
        content,
        title: content,
        classMap: {},
        cellRender: valueFunctionProp(this.cellRender, date),
        fullCellRender: valueFunctionProp(this.fullCellRender, date),
        onClick: () => this.changeValueFromInside(date),
        onMouseEnter: () => this.cellHover.emit(date)
      };
      this.addCellProperty(cell, date);
      dateCells.push(cell);
    }
    return months;
  }
  isDisabledQuarter(quarter) {
    if (!this.disabledDate) {
      return false;
    }
    const firstDayOfQuarter = new CandyDate(startOfQuarter(quarter.nativeDate));
    for (let date = firstDayOfQuarter; date.getQuarter() === quarter.getQuarter(); date = date.addMonths(1)) {
      if (!this.disabledDate(date.nativeDate)) {
        return false;
      }
    }
    return true;
  }
  addCellProperty(cell, month) {
    if (this.hasRangeValue()) {
      const [startHover, endHover] = this.hoverValue;
      const [startSelected, endSelected] = this.selectedValue;
      if (startSelected?.isSameQuarter(month)) {
        cell.isSelectedStart = true;
        cell.isSelected = true;
      }
      if (endSelected?.isSameQuarter(month)) {
        cell.isSelectedEnd = true;
        cell.isSelected = true;
      }
      if (startHover && endHover) {
        cell.isHoverStart = startHover.isSameQuarter(month);
        cell.isHoverEnd = endHover.isSameQuarter(month);
        cell.isLastCellInPanel = month.getQuarter() === 4;
        cell.isFirstCellInPanel = month.getQuarter() === 1;
        cell.isInHoverRange = startHover.isBeforeQuarter(month) && month.isBeforeQuarter(endHover);
      }
      cell.isStartSingle = startSelected && !endSelected;
      cell.isEndSingle = !startSelected && endSelected;
      cell.isInSelectedRange = startSelected?.isBeforeQuarter(month) && month?.isBeforeQuarter(endSelected);
      cell.isRangeStartNearHover = startSelected && cell.isInHoverRange;
      cell.isRangeEndNearHover = endSelected && cell.isInHoverRange;
    } else if (month.isSameQuarter(this.value)) {
      cell.isSelected = true;
    }
    cell.classMap = this.getClassMap(cell);
  }
  static \u0275fac = function QuarterTableComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _QuarterTableComponent)(\u0275\u0275directiveInject(DateHelperService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _QuarterTableComponent,
    selectors: [["quarter-table"]],
    exportAs: ["quarterTable"],
    features: [\u0275\u0275InheritDefinitionFeature],
    decls: 5,
    vars: 1,
    consts: [["cellspacing", "0", "role", "grid", 1, "ant-picker-content"], ["role", "row", 3, "class"], ["role", "row"], ["role", "columnheader"], ["role", "columnheader", 3, "title"], ["role", "gridcell", 3, "class"], ["role", "gridcell", 3, "title", "class"], ["role", "gridcell"], ["role", "gridcell", 3, "click", "mouseenter", "title"], [3, "class", "ant-picker-calendar-date-today"], [3, "nzStringTemplateOutlet", "nzStringTemplateOutletContext"], [3, "class"], [4, "nzStringTemplateOutlet", "nzStringTemplateOutletContext"]],
    template: function QuarterTableComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "table", 0);
        \u0275\u0275template(1, QuarterTableComponent_Conditional_1_Template, 5, 1, "thead");
        \u0275\u0275elementStart(2, "tbody");
        \u0275\u0275repeaterCreate(3, QuarterTableComponent_For_4_Template, 4, 3, "tr", 1, _forTrack1);
        \u0275\u0275elementEnd()();
      }
      if (rf & 2) {
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.headRow && ctx.headRow.length > 0 ? 1 : -1);
        \u0275\u0275advance(2);
        \u0275\u0275repeater(ctx.bodyRows);
      }
    },
    dependencies: [NzStringTemplateOutletDirective],
    encapsulation: 2,
    changeDetection: 0
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(QuarterTableComponent, [{
    type: Component,
    args: [{
      encapsulation: ViewEncapsulation.None,
      changeDetection: ChangeDetectionStrategy.OnPush,
      selector: "quarter-table",
      exportAs: "quarterTable",
      imports: [NzStringTemplateOutletDirective],
      template: `<table class="ant-picker-content" cellspacing="0" role="grid">
  @if (headRow && headRow.length > 0) {
    <thead>
      <tr role="row">
        @if (showWeek) {
          <th role="columnheader"></th>
        }
        @for (cell of headRow; track $index) {
          <th role="columnheader" [title]="cell.title"> {{ cell.content }}</th>
        }
      </tr>
    </thead>
  }

  <tbody>
    @for (row of bodyRows; track row.trackByIndex) {
      <tr [class]="row.classMap!" role="row">
        @if (row.weekNum) {
          <td role="gridcell" class="{{ prefixCls }}-cell-week"> {{ row.weekNum }}</td>
        }
        @for (cell of row.dateCells; track cell.trackByIndex) {
          <td
            [title]="cell.title"
            role="gridcell"
            [class]="cell.classMap!"
            (click)="cell.isDisabled ? null : cell.onClick()"
            (mouseenter)="cell.onMouseEnter()"
          >
            @switch (prefixCls) {
              @case ('ant-picker') {
                @if (cell.cellRender) {
                  <ng-template
                    [nzStringTemplateOutlet]="cell.cellRender"
                    [nzStringTemplateOutletContext]="{ $implicit: cell.value }"
                  >
                    {{ cell.cellRender }}
                  </ng-template>
                } @else {
                  <div
                    class="{{ prefixCls }}-cell-inner"
                    [attr.aria-selected]="cell.isSelected"
                    [attr.aria-disabled]="cell.isDisabled"
                  >
                    {{ cell.content }}
                  </div>
                }
              }
              @case ('ant-picker-calendar') {
                <div
                  class="{{ prefixCls }}-date ant-picker-cell-inner"
                  [class.ant-picker-calendar-date-today]="cell.isToday"
                >
                  @if (cell.fullCellRender) {
                    <ng-container *nzStringTemplateOutlet="cell.fullCellRender; context: { $implicit: cell.value }">
                      {{ cell.fullCellRender }}
                    </ng-container>
                  } @else {
                    <div class="{{ prefixCls }}-date-value">{{ cell.content }}</div>
                    <div class="{{ prefixCls }}-date-content">
                      <ng-container *nzStringTemplateOutlet="cell.cellRender; context: { $implicit: cell.value }">
                        {{ cell.cellRender }}
                      </ng-container>
                    </div>
                  }
                </div>
              }
            }
          </td>
        }
      </tr>
    }
  </tbody>
</table>
`
    }]
  }], () => [{
    type: DateHelperService
  }], null);
})();
var MonthHeaderComponent = class _MonthHeaderComponent extends AbstractPanelHeader {
  dateHelper;
  mode = "month";
  constructor(dateHelper) {
    super();
    this.dateHelper = dateHelper;
  }
  getSelectors() {
    return [{
      className: `${this.prefixCls}-month-btn`,
      title: this.locale.yearSelect,
      onClick: () => {
        this.mode = "year";
        this.changeMode("year");
      },
      label: this.dateHelper.format(this.value.nativeDate, transCompatFormat(this.locale.yearFormat))
    }];
  }
  static \u0275fac = function MonthHeaderComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _MonthHeaderComponent)(\u0275\u0275directiveInject(DateHelperService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _MonthHeaderComponent,
    selectors: [["month-header"]],
    exportAs: ["monthHeader"],
    features: [\u0275\u0275InheritDefinitionFeature],
    decls: 12,
    vars: 30,
    consts: [["role", "button", "type", "button", "tabindex", "-1", 3, "click", "title"], [1, "ant-picker-super-prev-icon"], [1, "ant-picker-prev-icon"], ["role", "button", "type", "button", 3, "class", "title"], [1, "ant-picker-next-icon"], [1, "ant-picker-super-next-icon"], ["role", "button", "type", "button", 3, "click", "title"]],
    template: function MonthHeaderComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div")(1, "button", 0);
        \u0275\u0275listener("click", function MonthHeaderComponent_Template_button_click_1_listener() {
          return ctx.superPrevious();
        });
        \u0275\u0275element(2, "span", 1);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(3, "button", 0);
        \u0275\u0275listener("click", function MonthHeaderComponent_Template_button_click_3_listener() {
          return ctx.previous();
        });
        \u0275\u0275element(4, "span", 2);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(5, "div");
        \u0275\u0275repeaterCreate(6, MonthHeaderComponent_For_7_Template, 2, 5, "button", 3, _forTrack0, true);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(8, "button", 0);
        \u0275\u0275listener("click", function MonthHeaderComponent_Template_button_click_8_listener() {
          return ctx.next();
        });
        \u0275\u0275element(9, "span", 4);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(10, "button", 0);
        \u0275\u0275listener("click", function MonthHeaderComponent_Template_button_click_10_listener() {
          return ctx.superNext();
        });
        \u0275\u0275element(11, "span", 5);
        \u0275\u0275elementEnd()();
      }
      if (rf & 2) {
        \u0275\u0275classMap(ctx.prefixCls);
        \u0275\u0275advance();
        \u0275\u0275classMapInterpolate1("", ctx.prefixCls, "-super-prev-btn");
        \u0275\u0275styleProp("visibility", ctx.showSuperPreBtn ? "visible" : "hidden");
        \u0275\u0275propertyInterpolate("title", ctx.superPreviousTitle());
        \u0275\u0275advance(2);
        \u0275\u0275classMapInterpolate1("", ctx.prefixCls, "-prev-btn");
        \u0275\u0275styleProp("visibility", ctx.showPreBtn ? "visible" : "hidden");
        \u0275\u0275propertyInterpolate("title", ctx.previousTitle());
        \u0275\u0275advance(2);
        \u0275\u0275classMapInterpolate1("", ctx.prefixCls, "-view");
        \u0275\u0275advance();
        \u0275\u0275repeater(ctx.selectors);
        \u0275\u0275advance(2);
        \u0275\u0275classMapInterpolate1("", ctx.prefixCls, "-next-btn");
        \u0275\u0275styleProp("visibility", ctx.showNextBtn ? "visible" : "hidden");
        \u0275\u0275propertyInterpolate("title", ctx.nextTitle());
        \u0275\u0275advance(2);
        \u0275\u0275classMapInterpolate1("", ctx.prefixCls, "-super-next-btn");
        \u0275\u0275styleProp("visibility", ctx.showSuperNextBtn ? "visible" : "hidden");
        \u0275\u0275propertyInterpolate("title", ctx.superNextTitle());
      }
    },
    encapsulation: 2,
    changeDetection: 0
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MonthHeaderComponent, [{
    type: Component,
    args: [{
      encapsulation: ViewEncapsulation.None,
      changeDetection: ChangeDetectionStrategy.OnPush,
      selector: "month-header",
      exportAs: "monthHeader",
      template: `<div class="{{ prefixCls }}">
  <button
    [style.visibility]="showSuperPreBtn ? 'visible' : 'hidden'"
    class="{{ prefixCls }}-super-prev-btn"
    role="button"
    type="button"
    tabindex="-1"
    title="{{ superPreviousTitle() }}"
    (click)="superPrevious()"
  >
    <span class="ant-picker-super-prev-icon"></span>
  </button>
  <button
    [style.visibility]="showPreBtn ? 'visible' : 'hidden'"
    class="{{ prefixCls }}-prev-btn"
    role="button"
    type="button"
    title="{{ previousTitle() }}"
    tabindex="-1"
    (click)="previous()"
  >
    <span class="ant-picker-prev-icon"></span>
  </button>

  <div class="{{ prefixCls }}-view">
    @for (selector of selectors; track trackBySelector(selector)) {
      <button
        class="{{ selector.className }}"
        role="button"
        type="button"
        title="{{ selector.title || null }}"
        (click)="selector.onClick()"
      >
        {{ selector.label }}
      </button>
    }
  </div>
  <button
    [style.visibility]="showNextBtn ? 'visible' : 'hidden'"
    class="{{ prefixCls }}-next-btn"
    role="button"
    type="button"
    tabindex="-1"
    title="{{ nextTitle() }}"
    (click)="next()"
  >
    <span class="ant-picker-next-icon"></span>
  </button>
  <button
    [style.visibility]="showSuperNextBtn ? 'visible' : 'hidden'"
    class="{{ prefixCls }}-super-next-btn"
    role="button"
    type="button"
    tabindex="-1"
    title="{{ superNextTitle() }}"
    (click)="superNext()"
  >
    <span class="ant-picker-super-next-icon"></span>
  </button>
</div>
`
    }]
  }], () => [{
    type: DateHelperService
  }], null);
})();
var MonthTableComponent = class _MonthTableComponent extends AbstractTable {
  MAX_ROW = 4;
  MAX_COL = 3;
  dateHelper = inject(DateHelperService);
  makeHeadRow() {
    return [];
  }
  makeBodyRows() {
    const months = [];
    let monthValue = 0;
    for (let rowIndex = 0; rowIndex < this.MAX_ROW; rowIndex++) {
      const row = {
        dateCells: [],
        trackByIndex: rowIndex
      };
      for (let colIndex = 0; colIndex < this.MAX_COL; colIndex++) {
        const month = this.activeDate.setMonth(monthValue);
        const isDisabled = this.isDisabledMonth(month);
        const content = this.dateHelper.format(month.nativeDate, "MMM");
        const cell = {
          trackByIndex: colIndex,
          value: month.nativeDate,
          isDisabled,
          isSelected: month.isSameMonth(this.value),
          content,
          title: content,
          classMap: {},
          cellRender: valueFunctionProp(this.cellRender, month),
          // Customized content
          fullCellRender: valueFunctionProp(this.fullCellRender, month),
          onClick: () => this.chooseMonth(cell.value.getMonth()),
          // don't use monthValue here,
          onMouseEnter: () => this.cellHover.emit(month)
        };
        this.addCellProperty(cell, month);
        row.dateCells.push(cell);
        monthValue++;
      }
      months.push(row);
    }
    return months;
  }
  isDisabledMonth(month) {
    if (!this.disabledDate) {
      return false;
    }
    const firstOfMonth = month.setDate(1);
    for (let date = firstOfMonth; date.getMonth() === month.getMonth(); date = date.addDays(1)) {
      if (!this.disabledDate(date.nativeDate)) {
        return false;
      }
    }
    return true;
  }
  addCellProperty(cell, month) {
    if (this.hasRangeValue()) {
      const [startHover, endHover] = this.hoverValue;
      const [startSelected, endSelected] = this.selectedValue;
      if (startSelected?.isSameMonth(month)) {
        cell.isSelectedStart = true;
        cell.isSelected = true;
      }
      if (endSelected?.isSameMonth(month)) {
        cell.isSelectedEnd = true;
        cell.isSelected = true;
      }
      if (startHover && endHover) {
        cell.isHoverStart = startHover.isSameMonth(month);
        cell.isHoverEnd = endHover.isSameMonth(month);
        cell.isLastCellInPanel = month.getMonth() === 11;
        cell.isFirstCellInPanel = month.getMonth() === 0;
        cell.isInHoverRange = startHover.isBeforeMonth(month) && month.isBeforeMonth(endHover);
      }
      cell.isStartSingle = startSelected && !endSelected;
      cell.isEndSingle = !startSelected && endSelected;
      cell.isInSelectedRange = startSelected?.isBeforeMonth(month) && month?.isBeforeMonth(endSelected);
      cell.isRangeStartNearHover = startSelected && cell.isInHoverRange;
      cell.isRangeEndNearHover = endSelected && cell.isInHoverRange;
    } else if (month.isSameMonth(this.value)) {
      cell.isSelected = true;
    }
    cell.classMap = this.getClassMap(cell);
  }
  chooseMonth(month) {
    this.value = this.activeDate.setMonth(month);
    this.valueChange.emit(this.value);
  }
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275MonthTableComponent_BaseFactory;
    return function MonthTableComponent_Factory(__ngFactoryType__) {
      return (\u0275MonthTableComponent_BaseFactory || (\u0275MonthTableComponent_BaseFactory = \u0275\u0275getInheritedFactory(_MonthTableComponent)))(__ngFactoryType__ || _MonthTableComponent);
    };
  })();
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _MonthTableComponent,
    selectors: [["month-table"]],
    exportAs: ["monthTable"],
    features: [\u0275\u0275InheritDefinitionFeature],
    decls: 5,
    vars: 1,
    consts: [["cellspacing", "0", "role", "grid", 1, "ant-picker-content"], ["role", "row", 3, "class"], ["role", "row"], ["role", "columnheader"], ["role", "columnheader", 3, "title"], ["role", "gridcell", 3, "class"], ["role", "gridcell", 3, "title", "class"], ["role", "gridcell"], ["role", "gridcell", 3, "click", "mouseenter", "title"], [3, "class", "ant-picker-calendar-date-today"], [3, "nzStringTemplateOutlet", "nzStringTemplateOutletContext"], [3, "class"], [4, "nzStringTemplateOutlet", "nzStringTemplateOutletContext"]],
    template: function MonthTableComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "table", 0);
        \u0275\u0275template(1, MonthTableComponent_Conditional_1_Template, 5, 1, "thead");
        \u0275\u0275elementStart(2, "tbody");
        \u0275\u0275repeaterCreate(3, MonthTableComponent_For_4_Template, 4, 3, "tr", 1, _forTrack1);
        \u0275\u0275elementEnd()();
      }
      if (rf & 2) {
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.headRow && ctx.headRow.length > 0 ? 1 : -1);
        \u0275\u0275advance(2);
        \u0275\u0275repeater(ctx.bodyRows);
      }
    },
    dependencies: [NzStringTemplateOutletDirective],
    encapsulation: 2,
    changeDetection: 0
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MonthTableComponent, [{
    type: Component,
    args: [{
      encapsulation: ViewEncapsulation.None,
      changeDetection: ChangeDetectionStrategy.OnPush,
      selector: "month-table",
      exportAs: "monthTable",
      imports: [NzStringTemplateOutletDirective],
      template: `<table class="ant-picker-content" cellspacing="0" role="grid">
  @if (headRow && headRow.length > 0) {
    <thead>
      <tr role="row">
        @if (showWeek) {
          <th role="columnheader"></th>
        }
        @for (cell of headRow; track $index) {
          <th role="columnheader" [title]="cell.title"> {{ cell.content }}</th>
        }
      </tr>
    </thead>
  }

  <tbody>
    @for (row of bodyRows; track row.trackByIndex) {
      <tr [class]="row.classMap!" role="row">
        @if (row.weekNum) {
          <td role="gridcell" class="{{ prefixCls }}-cell-week"> {{ row.weekNum }}</td>
        }
        @for (cell of row.dateCells; track cell.trackByIndex) {
          <td
            [title]="cell.title"
            role="gridcell"
            [class]="cell.classMap!"
            (click)="cell.isDisabled ? null : cell.onClick()"
            (mouseenter)="cell.onMouseEnter()"
          >
            @switch (prefixCls) {
              @case ('ant-picker') {
                @if (cell.cellRender) {
                  <ng-template
                    [nzStringTemplateOutlet]="cell.cellRender"
                    [nzStringTemplateOutletContext]="{ $implicit: cell.value }"
                  >
                    {{ cell.cellRender }}
                  </ng-template>
                } @else {
                  <div
                    class="{{ prefixCls }}-cell-inner"
                    [attr.aria-selected]="cell.isSelected"
                    [attr.aria-disabled]="cell.isDisabled"
                  >
                    {{ cell.content }}
                  </div>
                }
              }
              @case ('ant-picker-calendar') {
                <div
                  class="{{ prefixCls }}-date ant-picker-cell-inner"
                  [class.ant-picker-calendar-date-today]="cell.isToday"
                >
                  @if (cell.fullCellRender) {
                    <ng-container *nzStringTemplateOutlet="cell.fullCellRender; context: { $implicit: cell.value }">
                      {{ cell.fullCellRender }}
                    </ng-container>
                  } @else {
                    <div class="{{ prefixCls }}-date-value">{{ cell.content }}</div>
                    <div class="{{ prefixCls }}-date-content">
                      <ng-container *nzStringTemplateOutlet="cell.cellRender; context: { $implicit: cell.value }">
                        {{ cell.cellRender }}
                      </ng-container>
                    </div>
                  }
                </div>
              }
            }
          </td>
        }
      </tr>
    }
  </tbody>
</table>
`
    }]
  }], null, null);
})();
var DateHeaderComponent = class _DateHeaderComponent extends AbstractPanelHeader {
  dateHelper;
  mode = "date";
  constructor(dateHelper) {
    super();
    this.dateHelper = dateHelper;
  }
  getSelectors() {
    return [{
      className: `${this.prefixCls}-year-btn`,
      title: this.locale.yearSelect,
      onClick: () => {
        this.mode = "year";
        this.changeMode("year");
      },
      label: this.dateHelper.format(this.value.nativeDate, transCompatFormat(this.locale.yearFormat))
    }, {
      className: `${this.prefixCls}-month-btn`,
      title: this.locale.monthSelect,
      onClick: () => {
        this.mode = "month";
        this.changeMode("month");
      },
      label: this.dateHelper.format(this.value.nativeDate, this.locale.monthFormat || "MMM")
    }];
  }
  static \u0275fac = function DateHeaderComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _DateHeaderComponent)(\u0275\u0275directiveInject(DateHelperService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _DateHeaderComponent,
    selectors: [["date-header"]],
    exportAs: ["dateHeader"],
    features: [\u0275\u0275InheritDefinitionFeature],
    decls: 12,
    vars: 30,
    consts: [["role", "button", "type", "button", "tabindex", "-1", 3, "click", "title"], [1, "ant-picker-super-prev-icon"], [1, "ant-picker-prev-icon"], ["role", "button", "type", "button", 3, "class", "title"], [1, "ant-picker-next-icon"], [1, "ant-picker-super-next-icon"], ["role", "button", "type", "button", 3, "click", "title"]],
    template: function DateHeaderComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div")(1, "button", 0);
        \u0275\u0275listener("click", function DateHeaderComponent_Template_button_click_1_listener() {
          return ctx.superPrevious();
        });
        \u0275\u0275element(2, "span", 1);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(3, "button", 0);
        \u0275\u0275listener("click", function DateHeaderComponent_Template_button_click_3_listener() {
          return ctx.previous();
        });
        \u0275\u0275element(4, "span", 2);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(5, "div");
        \u0275\u0275repeaterCreate(6, DateHeaderComponent_For_7_Template, 2, 5, "button", 3, _forTrack0, true);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(8, "button", 0);
        \u0275\u0275listener("click", function DateHeaderComponent_Template_button_click_8_listener() {
          return ctx.next();
        });
        \u0275\u0275element(9, "span", 4);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(10, "button", 0);
        \u0275\u0275listener("click", function DateHeaderComponent_Template_button_click_10_listener() {
          return ctx.superNext();
        });
        \u0275\u0275element(11, "span", 5);
        \u0275\u0275elementEnd()();
      }
      if (rf & 2) {
        \u0275\u0275classMap(ctx.prefixCls);
        \u0275\u0275advance();
        \u0275\u0275classMapInterpolate1("", ctx.prefixCls, "-super-prev-btn");
        \u0275\u0275styleProp("visibility", ctx.showSuperPreBtn ? "visible" : "hidden");
        \u0275\u0275propertyInterpolate("title", ctx.superPreviousTitle());
        \u0275\u0275advance(2);
        \u0275\u0275classMapInterpolate1("", ctx.prefixCls, "-prev-btn");
        \u0275\u0275styleProp("visibility", ctx.showPreBtn ? "visible" : "hidden");
        \u0275\u0275propertyInterpolate("title", ctx.previousTitle());
        \u0275\u0275advance(2);
        \u0275\u0275classMapInterpolate1("", ctx.prefixCls, "-view");
        \u0275\u0275advance();
        \u0275\u0275repeater(ctx.selectors);
        \u0275\u0275advance(2);
        \u0275\u0275classMapInterpolate1("", ctx.prefixCls, "-next-btn");
        \u0275\u0275styleProp("visibility", ctx.showNextBtn ? "visible" : "hidden");
        \u0275\u0275propertyInterpolate("title", ctx.nextTitle());
        \u0275\u0275advance(2);
        \u0275\u0275classMapInterpolate1("", ctx.prefixCls, "-super-next-btn");
        \u0275\u0275styleProp("visibility", ctx.showSuperNextBtn ? "visible" : "hidden");
        \u0275\u0275propertyInterpolate("title", ctx.superNextTitle());
      }
    },
    encapsulation: 2,
    changeDetection: 0
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DateHeaderComponent, [{
    type: Component,
    args: [{
      encapsulation: ViewEncapsulation.None,
      changeDetection: ChangeDetectionStrategy.OnPush,
      selector: "date-header",
      exportAs: "dateHeader",
      template: `<div class="{{ prefixCls }}">
  <button
    [style.visibility]="showSuperPreBtn ? 'visible' : 'hidden'"
    class="{{ prefixCls }}-super-prev-btn"
    role="button"
    type="button"
    tabindex="-1"
    title="{{ superPreviousTitle() }}"
    (click)="superPrevious()"
  >
    <span class="ant-picker-super-prev-icon"></span>
  </button>
  <button
    [style.visibility]="showPreBtn ? 'visible' : 'hidden'"
    class="{{ prefixCls }}-prev-btn"
    role="button"
    type="button"
    title="{{ previousTitle() }}"
    tabindex="-1"
    (click)="previous()"
  >
    <span class="ant-picker-prev-icon"></span>
  </button>

  <div class="{{ prefixCls }}-view">
    @for (selector of selectors; track trackBySelector(selector)) {
      <button
        class="{{ selector.className }}"
        role="button"
        type="button"
        title="{{ selector.title || null }}"
        (click)="selector.onClick()"
      >
        {{ selector.label }}
      </button>
    }
  </div>
  <button
    [style.visibility]="showNextBtn ? 'visible' : 'hidden'"
    class="{{ prefixCls }}-next-btn"
    role="button"
    type="button"
    tabindex="-1"
    title="{{ nextTitle() }}"
    (click)="next()"
  >
    <span class="ant-picker-next-icon"></span>
  </button>
  <button
    [style.visibility]="showSuperNextBtn ? 'visible' : 'hidden'"
    class="{{ prefixCls }}-super-next-btn"
    role="button"
    type="button"
    tabindex="-1"
    title="{{ superNextTitle() }}"
    (click)="superNext()"
  >
    <span class="ant-picker-super-next-icon"></span>
  </button>
</div>
`
    }]
  }], () => [{
    type: DateHelperService
  }], null);
})();
var DateTableComponent = class _DateTableComponent extends AbstractTable {
  format;
  i18n = inject(NzI18nService);
  dateHelper = inject(DateHelperService);
  changeValueFromInside(value) {
    this.activeDate = this.activeDate.setYear(value.getYear()).setMonth(value.getMonth()).setDate(value.getDate());
    this.valueChange.emit(this.activeDate);
    if (!this.activeDate.isSameMonth(this.value)) {
      this.render();
    }
  }
  makeHeadRow() {
    const weekDays = [];
    const start = this.activeDate.calendarStart({
      weekStartsOn: this.dateHelper.getFirstDayOfWeek()
    });
    for (let colIndex = 0; colIndex < this.MAX_COL; colIndex++) {
      const day = start.addDays(colIndex);
      weekDays.push({
        trackByIndex: null,
        value: day.nativeDate,
        title: this.dateHelper.format(day.nativeDate, "E"),
        // eg. Tue
        content: this.dateHelper.format(day.nativeDate, this.getVeryShortWeekFormat()),
        // eg. Tu,
        isSelected: false,
        isDisabled: false,
        onClick() {
        },
        onMouseEnter() {
        }
      });
    }
    return weekDays;
  }
  getVeryShortWeekFormat() {
    return this.i18n.getLocaleId().toLowerCase().indexOf("zh") === 0 ? "EEEEE" : "EEEEEE";
  }
  makeBodyRows() {
    const weekRows = [];
    const firstDayOfMonth = this.activeDate.calendarStart({
      weekStartsOn: this.dateHelper.getFirstDayOfWeek()
    });
    for (let week = 0; week < this.MAX_ROW; week++) {
      const weekStart = firstDayOfMonth.addDays(week * 7);
      const row = {
        isActive: false,
        dateCells: [],
        trackByIndex: week
      };
      for (let day = 0; day < 7; day++) {
        const date = weekStart.addDays(day);
        const dateFormat = transCompatFormat(this.format ?? this.i18n.getLocaleData("DatePicker.lang.dateFormat", "YYYY-MM-DD"));
        const title = this.dateHelper.format(date.nativeDate, dateFormat);
        const label = this.dateHelper.format(date.nativeDate, "dd");
        const cell = {
          trackByIndex: day,
          value: date.nativeDate,
          label,
          isSelected: false,
          isDisabled: false,
          isToday: false,
          title,
          cellRender: valueFunctionProp(this.cellRender, date),
          // Customized content
          fullCellRender: valueFunctionProp(this.fullCellRender, date),
          content: `${date.getDate()}`,
          onClick: () => this.changeValueFromInside(date),
          onMouseEnter: () => this.cellHover.emit(date)
        };
        this.addCellProperty(cell, date);
        if (this.showWeek && !row.weekNum) {
          row.weekNum = this.dateHelper.getISOWeek(date.nativeDate);
        }
        if (date.isSameDay(this.value)) {
          row.isActive = date.isSameDay(this.value);
        }
        row.dateCells.push(cell);
      }
      row.classMap = {
        [`ant-picker-week-panel-row`]: this.canSelectWeek,
        [`ant-picker-week-panel-row-selected`]: this.canSelectWeek && row.isActive
      };
      weekRows.push(row);
    }
    return weekRows;
  }
  addCellProperty(cell, date) {
    if (this.hasRangeValue() && !this.canSelectWeek) {
      const [startHover, endHover] = this.hoverValue;
      const [startSelected, endSelected] = this.selectedValue;
      if (startSelected?.isSameDay(date)) {
        cell.isSelectedStart = true;
        cell.isSelected = true;
      }
      if (endSelected?.isSameDay(date)) {
        cell.isSelectedEnd = true;
        cell.isSelected = true;
      }
      if (startHover && endHover) {
        cell.isHoverStart = startHover.isSameDay(date);
        cell.isHoverEnd = endHover.isSameDay(date);
        cell.isLastCellInPanel = date.isLastDayOfMonth();
        cell.isFirstCellInPanel = date.isFirstDayOfMonth();
        cell.isInHoverRange = startHover.isBeforeDay(date) && date.isBeforeDay(endHover);
      }
      cell.isStartSingle = startSelected && !endSelected;
      cell.isEndSingle = !startSelected && endSelected;
      cell.isInSelectedRange = startSelected?.isBeforeDay(date) && date.isBeforeDay(endSelected);
      cell.isRangeStartNearHover = startSelected && cell.isInHoverRange;
      cell.isRangeEndNearHover = endSelected && cell.isInHoverRange;
    }
    cell.isToday = date.isToday();
    cell.isSelected = date.isSameDay(this.value);
    cell.isDisabled = !!this.disabledDate?.(date.nativeDate);
    cell.classMap = this.getClassMap(cell);
  }
  getClassMap(cell) {
    const date = new CandyDate(cell.value);
    return __spreadProps(__spreadValues({}, super.getClassMap(cell)), {
      [`ant-picker-cell-today`]: !!cell.isToday,
      [`ant-picker-cell-in-view`]: date.isSameMonth(this.activeDate)
    });
  }
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275DateTableComponent_BaseFactory;
    return function DateTableComponent_Factory(__ngFactoryType__) {
      return (\u0275DateTableComponent_BaseFactory || (\u0275DateTableComponent_BaseFactory = \u0275\u0275getInheritedFactory(_DateTableComponent)))(__ngFactoryType__ || _DateTableComponent);
    };
  })();
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _DateTableComponent,
    selectors: [["date-table"]],
    inputs: {
      format: "format"
    },
    exportAs: ["dateTable"],
    features: [\u0275\u0275InheritDefinitionFeature],
    decls: 5,
    vars: 1,
    consts: [["cellspacing", "0", "role", "grid", 1, "ant-picker-content"], ["role", "row", 3, "class"], ["role", "row"], ["role", "columnheader"], ["role", "columnheader", 3, "title"], ["role", "gridcell", 3, "class"], ["role", "gridcell", 3, "title", "class"], ["role", "gridcell"], ["role", "gridcell", 3, "click", "mouseenter", "title"], [3, "class", "ant-picker-calendar-date-today"], [3, "nzStringTemplateOutlet", "nzStringTemplateOutletContext"], [3, "class"], [4, "nzStringTemplateOutlet", "nzStringTemplateOutletContext"]],
    template: function DateTableComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "table", 0);
        \u0275\u0275template(1, DateTableComponent_Conditional_1_Template, 5, 1, "thead");
        \u0275\u0275elementStart(2, "tbody");
        \u0275\u0275repeaterCreate(3, DateTableComponent_For_4_Template, 4, 3, "tr", 1, _forTrack1);
        \u0275\u0275elementEnd()();
      }
      if (rf & 2) {
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.headRow && ctx.headRow.length > 0 ? 1 : -1);
        \u0275\u0275advance(2);
        \u0275\u0275repeater(ctx.bodyRows);
      }
    },
    dependencies: [NzStringTemplateOutletDirective],
    encapsulation: 2,
    changeDetection: 0
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DateTableComponent, [{
    type: Component,
    args: [{
      encapsulation: ViewEncapsulation.None,
      changeDetection: ChangeDetectionStrategy.OnPush,
      selector: "date-table",
      exportAs: "dateTable",
      imports: [NzStringTemplateOutletDirective],
      template: `<table class="ant-picker-content" cellspacing="0" role="grid">
  @if (headRow && headRow.length > 0) {
    <thead>
      <tr role="row">
        @if (showWeek) {
          <th role="columnheader"></th>
        }
        @for (cell of headRow; track $index) {
          <th role="columnheader" [title]="cell.title"> {{ cell.content }}</th>
        }
      </tr>
    </thead>
  }

  <tbody>
    @for (row of bodyRows; track row.trackByIndex) {
      <tr [class]="row.classMap!" role="row">
        @if (row.weekNum) {
          <td role="gridcell" class="{{ prefixCls }}-cell-week"> {{ row.weekNum }}</td>
        }
        @for (cell of row.dateCells; track cell.trackByIndex) {
          <td
            [title]="cell.title"
            role="gridcell"
            [class]="cell.classMap!"
            (click)="cell.isDisabled ? null : cell.onClick()"
            (mouseenter)="cell.onMouseEnter()"
          >
            @switch (prefixCls) {
              @case ('ant-picker') {
                @if (cell.cellRender) {
                  <ng-template
                    [nzStringTemplateOutlet]="cell.cellRender"
                    [nzStringTemplateOutletContext]="{ $implicit: cell.value }"
                  >
                    {{ cell.cellRender }}
                  </ng-template>
                } @else {
                  <div
                    class="{{ prefixCls }}-cell-inner"
                    [attr.aria-selected]="cell.isSelected"
                    [attr.aria-disabled]="cell.isDisabled"
                  >
                    {{ cell.content }}
                  </div>
                }
              }
              @case ('ant-picker-calendar') {
                <div
                  class="{{ prefixCls }}-date ant-picker-cell-inner"
                  [class.ant-picker-calendar-date-today]="cell.isToday"
                >
                  @if (cell.fullCellRender) {
                    <ng-container *nzStringTemplateOutlet="cell.fullCellRender; context: { $implicit: cell.value }">
                      {{ cell.fullCellRender }}
                    </ng-container>
                  } @else {
                    <div class="{{ prefixCls }}-date-value">{{ cell.content }}</div>
                    <div class="{{ prefixCls }}-date-content">
                      <ng-container *nzStringTemplateOutlet="cell.cellRender; context: { $implicit: cell.value }">
                        {{ cell.cellRender }}
                      </ng-container>
                    </div>
                  }
                </div>
              }
            }
          </td>
        }
      </tr>
    }
  </tbody>
</table>
`
    }]
  }], null, {
    format: [{
      type: Input
    }]
  });
})();
var LibPackerModule = class _LibPackerModule {
  static \u0275fac = function LibPackerModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _LibPackerModule)();
  };
  static \u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
    type: _LibPackerModule
  });
  static \u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({});
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(LibPackerModule, [{
    type: NgModule,
    args: [{
      imports: [DateHeaderComponent, DateTableComponent, DecadeHeaderComponent, DecadeTableComponent, MonthHeaderComponent, MonthTableComponent, YearHeaderComponent, YearTableComponent, QuarterHeaderComponent, QuarterTableComponent],
      exports: [DateHeaderComponent, DateTableComponent, DecadeHeaderComponent, DecadeTableComponent, MonthHeaderComponent, MonthTableComponent, YearHeaderComponent, YearTableComponent, QuarterHeaderComponent, QuarterTableComponent]
    }]
  }], null, null);
})();
var InnerPopupComponent = class _InnerPopupComponent {
  activeDate;
  endPanelMode;
  panelMode;
  showWeek;
  locale;
  showTimePicker;
  timeOptions;
  disabledDate;
  dateRender;
  selectedValue;
  // Range ONLY
  hoverValue;
  // Range ONLY
  value;
  partType;
  format;
  panelChange = new EventEmitter();
  // TODO: name is not proper
  headerChange = new EventEmitter();
  // Emitted when user changed the header's value
  selectDate = new EventEmitter();
  // Emitted when the date is selected by click the date panel
  selectTime = new EventEmitter();
  cellHover = new EventEmitter();
  // Emitted when hover on a day by mouse enter
  prefixCls = PREFIX_CLASS;
  /**
   * Hide "next" arrow in left panel,
   * hide "prev" arrow in right panel
   *
   * @param direction
   * @param panelMode
   */
  enablePrevNext(direction, panelMode) {
    return !(!this.showTimePicker && panelMode === this.endPanelMode && (this.partType === "left" && direction === "next" || this.partType === "right" && direction === "prev"));
  }
  onSelectTime(date) {
    this.selectTime.emit(new CandyDate(date));
  }
  // The value real changed to outside
  onSelectDate(date) {
    const value = date instanceof CandyDate ? date : new CandyDate(date);
    const timeValue = this.timeOptions && this.timeOptions.nzDefaultOpenValue;
    if (!this.value && timeValue) {
      value.setHms(timeValue.getHours(), timeValue.getMinutes(), timeValue.getSeconds());
    }
    this.selectDate.emit(value);
  }
  onChooseMonth(value) {
    this.activeDate = this.activeDate.setMonth(value.getMonth());
    if (this.endPanelMode === "month") {
      this.value = value;
      this.selectDate.emit(value);
    } else {
      this.headerChange.emit(value);
      this.panelChange.emit({
        mode: this.endPanelMode,
        date: value.nativeDate
      });
    }
  }
  onChooseQuarter(value) {
    this.activeDate = this.activeDate.setQuarter(value.getQuarter());
    this.value = value;
    this.selectDate.emit(value);
  }
  onChooseYear(value) {
    this.activeDate = this.activeDate.setYear(value.getYear());
    if (this.endPanelMode === "year") {
      this.value = value;
      this.selectDate.emit(value);
    } else {
      this.headerChange.emit(value);
      this.panelChange.emit({
        mode: this.endPanelMode,
        date: value.nativeDate
      });
    }
  }
  onChooseDecade(value) {
    this.activeDate = this.activeDate.setYear(value.getYear());
    if (this.endPanelMode === "decade") {
      this.value = value;
      this.selectDate.emit(value);
    } else {
      this.headerChange.emit(value);
      this.panelChange.emit({
        mode: "year",
        date: value.nativeDate
      });
    }
  }
  ngOnChanges(changes) {
    if (changes.activeDate && !changes.activeDate.currentValue) {
      this.activeDate = new CandyDate();
    }
    if (changes.panelMode && changes.panelMode.currentValue === "time") {
      this.panelMode = "date";
    }
  }
  static \u0275fac = function InnerPopupComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _InnerPopupComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _InnerPopupComponent,
    selectors: [["inner-popup"]],
    inputs: {
      activeDate: "activeDate",
      endPanelMode: "endPanelMode",
      panelMode: "panelMode",
      showWeek: [2, "showWeek", "showWeek", booleanAttribute],
      locale: "locale",
      showTimePicker: [2, "showTimePicker", "showTimePicker", booleanAttribute],
      timeOptions: "timeOptions",
      disabledDate: "disabledDate",
      dateRender: "dateRender",
      selectedValue: "selectedValue",
      hoverValue: "hoverValue",
      value: "value",
      partType: "partType",
      format: "format"
    },
    outputs: {
      panelChange: "panelChange",
      headerChange: "headerChange",
      selectDate: "selectDate",
      selectTime: "selectTime",
      cellHover: "cellHover"
    },
    exportAs: ["innerPopup"],
    features: [\u0275\u0275NgOnChangesFeature],
    decls: 8,
    vars: 8,
    consts: [[3, "nzInDatePicker", "ngModel", "format", "nzHourStep", "nzMinuteStep", "nzSecondStep", "nzDisabledHours", "nzDisabledMinutes", "nzDisabledSeconds", "nzHideDisabledOptions", "nzDefaultOpenValue", "nzUse12Hours", "nzAddOn"], [3, "valueChange", "panelChange", "value", "locale", "showSuperPreBtn", "showSuperNextBtn", "showNextBtn", "showPreBtn"], [3, "valueChange", "activeDate", "value", "locale", "disabledDate"], [3, "valueChange", "cellHover", "activeDate", "value", "locale", "disabledDate", "selectedValue", "hoverValue"], [3, "valueChange", "cellHover", "value", "activeDate", "locale", "disabledDate", "selectedValue", "hoverValue"], [3, "valueChange", "cellHover", "value", "activeDate", "locale", "disabledDate", "selectedValue", "hoverValue", "cellRender"], [3, "valueChange", "panelChange", "value", "locale", "showSuperPreBtn", "showSuperNextBtn", "showPreBtn", "showNextBtn"], [3, "valueChange", "cellHover", "locale", "showWeek", "value", "activeDate", "disabledDate", "cellRender", "selectedValue", "hoverValue", "canSelectWeek", "format"], [3, "ngModelChange", "nzInDatePicker", "ngModel", "format", "nzHourStep", "nzMinuteStep", "nzSecondStep", "nzDisabledHours", "nzDisabledMinutes", "nzDisabledSeconds", "nzHideDisabledOptions", "nzDefaultOpenValue", "nzUse12Hours", "nzAddOn"]],
    template: function InnerPopupComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div")(1, "div");
        \u0275\u0275template(2, InnerPopupComponent_Case_2_Template, 3, 13)(3, InnerPopupComponent_Case_3_Template, 3, 15)(4, InnerPopupComponent_Case_4_Template, 3, 15)(5, InnerPopupComponent_Case_5_Template, 3, 16)(6, InnerPopupComponent_Case_6_Template, 3, 19);
        \u0275\u0275elementEnd();
        \u0275\u0275template(7, InnerPopupComponent_Conditional_7_Template, 1, 13, "nz-time-picker-panel", 0);
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        let tmp_2_0;
        \u0275\u0275classProp("ant-picker-datetime-panel", ctx.showTimePicker);
        \u0275\u0275advance();
        \u0275\u0275classMapInterpolate2("", ctx.prefixCls, "-", ctx.panelMode, "-panel");
        \u0275\u0275advance();
        \u0275\u0275conditional((tmp_2_0 = ctx.panelMode) === "decade" ? 2 : tmp_2_0 === "year" ? 3 : tmp_2_0 === "month" ? 4 : tmp_2_0 === "quarter" ? 5 : 6);
        \u0275\u0275advance(5);
        \u0275\u0275conditional(ctx.showTimePicker && ctx.timeOptions ? 7 : -1);
      }
    },
    dependencies: [LibPackerModule, DateHeaderComponent, DateTableComponent, DecadeHeaderComponent, DecadeTableComponent, MonthHeaderComponent, MonthTableComponent, YearHeaderComponent, YearTableComponent, QuarterHeaderComponent, QuarterTableComponent, NzTimePickerModule, NzTimePickerPanelComponent, FormsModule, NgControlStatus, NgModel],
    encapsulation: 2,
    changeDetection: 0
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(InnerPopupComponent, [{
    type: Component,
    args: [{
      // eslint-disable-next-line @angular-eslint/component-selector
      selector: "inner-popup",
      exportAs: "innerPopup",
      encapsulation: ViewEncapsulation.None,
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: `
    <div [class.ant-picker-datetime-panel]="showTimePicker">
      <div class="{{ prefixCls }}-{{ panelMode }}-panel">
        @switch (panelMode) {
          @case ('decade') {
            <decade-header
              [(value)]="activeDate"
              [locale]="locale"
              [showSuperPreBtn]="enablePrevNext('prev', 'decade')"
              [showSuperNextBtn]="enablePrevNext('next', 'decade')"
              [showNextBtn]="false"
              [showPreBtn]="false"
              (panelChange)="panelChange.emit($event)"
              (valueChange)="headerChange.emit($event)"
            />
            <div class="{{ prefixCls }}-body">
              <decade-table
                [activeDate]="activeDate"
                [value]="value"
                [locale]="locale"
                (valueChange)="onChooseDecade($event)"
                [disabledDate]="disabledDate"
              />
            </div>
          }
          @case ('year') {
            <year-header
              [(value)]="activeDate"
              [locale]="locale"
              [showSuperPreBtn]="enablePrevNext('prev', 'year')"
              [showSuperNextBtn]="enablePrevNext('next', 'year')"
              [showNextBtn]="false"
              [showPreBtn]="false"
              (panelChange)="panelChange.emit($event)"
              (valueChange)="headerChange.emit($event)"
            />
            <div class="{{ prefixCls }}-body">
              <year-table
                [activeDate]="activeDate"
                [value]="value"
                [locale]="locale"
                [disabledDate]="disabledDate"
                [selectedValue]="selectedValue"
                [hoverValue]="hoverValue"
                (valueChange)="onChooseYear($event)"
                (cellHover)="cellHover.emit($event)"
              />
            </div>
          }
          @case ('month') {
            <month-header
              [(value)]="activeDate"
              [locale]="locale"
              [showSuperPreBtn]="enablePrevNext('prev', 'month')"
              [showSuperNextBtn]="enablePrevNext('next', 'month')"
              [showNextBtn]="false"
              [showPreBtn]="false"
              (panelChange)="panelChange.emit($event)"
              (valueChange)="headerChange.emit($event)"
            />
            <div class="{{ prefixCls }}-body">
              <month-table
                [value]="value"
                [activeDate]="activeDate"
                [locale]="locale"
                [disabledDate]="disabledDate"
                [selectedValue]="selectedValue"
                [hoverValue]="hoverValue"
                (valueChange)="onChooseMonth($event)"
                (cellHover)="cellHover.emit($event)"
              />
            </div>
          }
          @case ('quarter') {
            <quarter-header
              [(value)]="activeDate"
              [locale]="locale"
              [showSuperPreBtn]="enablePrevNext('prev', 'month')"
              [showSuperNextBtn]="enablePrevNext('next', 'month')"
              [showNextBtn]="false"
              [showPreBtn]="false"
              (panelChange)="panelChange.emit($event)"
              (valueChange)="headerChange.emit($event)"
            />
            <div class="{{ prefixCls }}-body">
              <quarter-table
                [value]="value"
                [activeDate]="activeDate"
                [locale]="locale"
                [disabledDate]="disabledDate"
                [selectedValue]="selectedValue"
                [hoverValue]="hoverValue"
                (valueChange)="onChooseQuarter($event)"
                (cellHover)="cellHover.emit($event)"
                [cellRender]="dateRender"
              />
            </div>
          }
          @default {
            <date-header
              [(value)]="activeDate"
              [locale]="locale"
              [showSuperPreBtn]="panelMode === 'week' ? enablePrevNext('prev', 'week') : enablePrevNext('prev', 'date')"
              [showSuperNextBtn]="
                panelMode === 'week' ? enablePrevNext('next', 'week') : enablePrevNext('next', 'date')
              "
              [showPreBtn]="panelMode === 'week' ? enablePrevNext('prev', 'week') : enablePrevNext('prev', 'date')"
              [showNextBtn]="panelMode === 'week' ? enablePrevNext('next', 'week') : enablePrevNext('next', 'date')"
              (panelChange)="panelChange.emit($event)"
              (valueChange)="headerChange.emit($event)"
            />
            <div class="{{ prefixCls }}-body">
              <date-table
                [locale]="locale"
                [showWeek]="showWeek"
                [value]="value"
                [activeDate]="activeDate"
                [disabledDate]="disabledDate"
                [cellRender]="dateRender"
                [selectedValue]="selectedValue"
                [hoverValue]="hoverValue"
                [canSelectWeek]="panelMode === 'week'"
                [format]="format"
                (valueChange)="onSelectDate($event)"
                (cellHover)="cellHover.emit($event)"
              />
            </div>
          }
        }
      </div>
      @if (showTimePicker && timeOptions) {
        <nz-time-picker-panel
          [nzInDatePicker]="true"
          [ngModel]="value?.nativeDate"
          (ngModelChange)="onSelectTime($event)"
          [format]="$any(timeOptions.nzFormat)"
          [nzHourStep]="$any(timeOptions.nzHourStep)"
          [nzMinuteStep]="$any(timeOptions.nzMinuteStep)"
          [nzSecondStep]="$any(timeOptions.nzSecondStep)"
          [nzDisabledHours]="$any(timeOptions.nzDisabledHours)"
          [nzDisabledMinutes]="$any(timeOptions.nzDisabledMinutes)"
          [nzDisabledSeconds]="$any(timeOptions.nzDisabledSeconds)"
          [nzHideDisabledOptions]="!!timeOptions.nzHideDisabledOptions"
          [nzDefaultOpenValue]="$any(timeOptions.nzDefaultOpenValue)"
          [nzUse12Hours]="!!timeOptions.nzUse12Hours"
          [nzAddOn]="$any(timeOptions.nzAddOn)"
        />
      }
    </div>
  `,
      imports: [LibPackerModule, NzTimePickerModule, FormsModule]
    }]
  }], null, {
    activeDate: [{
      type: Input
    }],
    endPanelMode: [{
      type: Input
    }],
    panelMode: [{
      type: Input
    }],
    showWeek: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    locale: [{
      type: Input
    }],
    showTimePicker: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    timeOptions: [{
      type: Input
    }],
    disabledDate: [{
      type: Input
    }],
    dateRender: [{
      type: Input
    }],
    selectedValue: [{
      type: Input
    }],
    hoverValue: [{
      type: Input
    }],
    value: [{
      type: Input
    }],
    partType: [{
      type: Input
    }],
    format: [{
      type: Input
    }],
    panelChange: [{
      type: Output
    }],
    headerChange: [{
      type: Output
    }],
    selectDate: [{
      type: Output
    }],
    selectTime: [{
      type: Output
    }],
    cellHover: [{
      type: Output
    }]
  });
})();
var DateRangePopupComponent = class _DateRangePopupComponent {
  datePickerService;
  cdr;
  host;
  isRange;
  inline = false;
  showWeek;
  locale;
  disabledDate;
  disabledTime;
  // This will lead to rebuild time options
  showToday;
  showNow;
  showTime;
  extraFooter;
  ranges;
  dateRender;
  panelMode;
  defaultPickerValue;
  dir = "ltr";
  format;
  panelModeChange = new EventEmitter();
  calendarChange = new EventEmitter();
  resultOk = new EventEmitter();
  // Emitted when done with date selecting
  prefixCls = PREFIX_CLASS;
  endPanelMode = "date";
  timeOptions = null;
  hoverValue = [];
  // Range ONLY
  checkedPartArr = [false, false];
  destroy$ = new Subject();
  get hasTimePicker() {
    return !!this.showTime;
  }
  get hasFooter() {
    return this.showToday || this.hasTimePicker || !!this.extraFooter || !!this.ranges;
  }
  get arrowPosition() {
    return this.dir === "rtl" ? {
      right: `${this.datePickerService?.arrowLeft}px`
    } : {
      left: `${this.datePickerService?.arrowLeft}px`
    };
  }
  constructor(datePickerService, cdr, host) {
    this.datePickerService = datePickerService;
    this.cdr = cdr;
    this.host = host;
  }
  ngOnInit() {
    merge(this.datePickerService.valueChange$, this.datePickerService.inputPartChange$).pipe(takeUntil(this.destroy$)).subscribe(() => {
      this.updateActiveDate();
      this.cdr.markForCheck();
    });
    fromEventOutsideAngular(this.host.nativeElement, "mousedown").pipe(takeUntil(this.destroy$)).subscribe((event) => event.preventDefault());
  }
  ngOnChanges(changes) {
    if (changes.showTime || changes.disabledTime) {
      if (this.showTime) {
        this.buildTimeOptions();
      }
    }
    if (changes.panelMode) {
      this.endPanelMode = this.panelMode;
    }
    if (changes.defaultPickerValue) {
      this.updateActiveDate();
    }
  }
  ngOnDestroy() {
    this.destroy$.next(true);
    this.destroy$.complete();
  }
  updateActiveDate() {
    const activeDate = this.datePickerService.hasValue() ? this.datePickerService.value : this.datePickerService.makeValue(this.defaultPickerValue);
    this.datePickerService.setActiveDate(activeDate, this.hasTimePicker, this.getPanelMode(this.endPanelMode));
  }
  onClickOk() {
    const inputIndex = {
      left: 0,
      right: 1
    }[this.datePickerService.activeInput];
    const value = this.isRange ? this.datePickerService.value[inputIndex] : this.datePickerService.value;
    this.changeValueFromSelect(value);
    this.resultOk.emit();
  }
  onClickToday(value) {
    this.changeValueFromSelect(value, !this.showTime);
  }
  onCellHover(value) {
    if (!this.isRange) {
      return;
    }
    const otherInputIndex = {
      left: 1,
      right: 0
    }[this.datePickerService.activeInput];
    const base = this.datePickerService.value[otherInputIndex];
    if (base) {
      if (base.isBeforeDay(value)) {
        this.hoverValue = [base, value];
      } else {
        this.hoverValue = [value, base];
      }
    }
  }
  onPanelModeChange(panelChangeEvent, partType) {
    if (this.isRange) {
      const index = this.datePickerService.getActiveIndex(partType);
      if (index === 0) {
        this.panelMode = [panelChangeEvent.mode, this.panelMode[1]];
      } else {
        this.panelMode = [this.panelMode[0], panelChangeEvent.mode];
      }
      this.panelModeChange.emit({
        mode: this.panelMode,
        date: this.datePickerService.activeDate.map((d) => d.nativeDate)
      });
    } else {
      this.panelMode = panelChangeEvent.mode;
      this.panelModeChange.emit({
        mode: this.panelMode,
        date: panelChangeEvent.date
      });
    }
  }
  onActiveDateChange(value, partType) {
    if (this.isRange) {
      const activeDate = [];
      activeDate[this.datePickerService.getActiveIndex(partType)] = value;
      this.datePickerService.setActiveDate(activeDate, this.hasTimePicker, this.getPanelMode(this.endPanelMode, partType));
    } else {
      this.datePickerService.setActiveDate(value);
    }
  }
  onSelectTime(value, partType) {
    if (this.isRange) {
      const newValue = cloneDate(this.datePickerService.value);
      const index = this.datePickerService.getActiveIndex(partType);
      newValue[index] = this.overrideHms(value, newValue[index]);
      this.datePickerService.setValue(newValue);
    } else {
      const newValue = this.overrideHms(value, this.datePickerService.value);
      this.datePickerService.setValue(newValue);
    }
    this.datePickerService.inputPartChange$.next(null);
    this.buildTimeOptions();
  }
  changeValueFromSelect(value, emitValue = true) {
    if (this.isRange) {
      const selectedValue = cloneDate(this.datePickerService.value);
      const checkedPart = this.datePickerService.activeInput;
      let nextPart = checkedPart;
      selectedValue[this.datePickerService.getActiveIndex(checkedPart)] = value;
      this.checkedPartArr[this.datePickerService.getActiveIndex(checkedPart)] = true;
      this.hoverValue = selectedValue;
      if (emitValue) {
        if (this.inline) {
          nextPart = this.reversedPart(checkedPart);
          if (nextPart === "right") {
            selectedValue[this.datePickerService.getActiveIndex(nextPart)] = null;
            this.checkedPartArr[this.datePickerService.getActiveIndex(nextPart)] = false;
          }
          this.datePickerService.setValue(selectedValue);
          this.calendarChange.emit(selectedValue);
          if (this.isBothAllowed(selectedValue) && this.checkedPartArr[0] && this.checkedPartArr[1]) {
            this.clearHoverValue();
            this.datePickerService.emitValue$.next();
          }
        } else {
          if (wrongSortOrder(selectedValue)) {
            nextPart = this.reversedPart(checkedPart);
            selectedValue[this.datePickerService.getActiveIndex(nextPart)] = null;
            this.checkedPartArr[this.datePickerService.getActiveIndex(nextPart)] = false;
          }
          this.datePickerService.setValue(selectedValue);
          if (this.isBothAllowed(selectedValue) && this.checkedPartArr[0] && this.checkedPartArr[1]) {
            this.calendarChange.emit(selectedValue);
            this.clearHoverValue();
            this.datePickerService.emitValue$.next();
          } else if (this.isAllowed(selectedValue)) {
            nextPart = this.reversedPart(checkedPart);
            this.calendarChange.emit([value.clone()]);
          }
        }
      } else {
        this.datePickerService.setValue(selectedValue);
      }
      this.datePickerService.inputPartChange$.next(nextPart);
    } else {
      this.datePickerService.setValue(value);
      this.datePickerService.inputPartChange$.next(null);
      if (emitValue && this.isAllowed(value)) {
        this.datePickerService.emitValue$.next();
      }
    }
    this.buildTimeOptions();
  }
  reversedPart(part) {
    return part === "left" ? "right" : "left";
  }
  getPanelMode(panelMode, partType) {
    if (this.isRange) {
      return panelMode[this.datePickerService.getActiveIndex(partType)];
    } else {
      return panelMode;
    }
  }
  // Get single value or part value of a range
  getValue(partType) {
    if (this.isRange) {
      return (this.datePickerService.value || [])[this.datePickerService.getActiveIndex(partType)];
    } else {
      return this.datePickerService.value;
    }
  }
  getActiveDate(partType) {
    if (this.isRange) {
      return this.datePickerService.activeDate[this.datePickerService.getActiveIndex(partType)];
    } else {
      return this.datePickerService.activeDate;
    }
  }
  disabledStartTime = (value) => this.disabledTime && this.disabledTime(value, "start");
  disabledEndTime = (value) => this.disabledTime && this.disabledTime(value, "end");
  isOneAllowed(selectedValue) {
    const index = this.datePickerService.getActiveIndex();
    const disabledTimeArr = [this.disabledStartTime, this.disabledEndTime];
    return isAllowedDate(selectedValue[index], this.disabledDate, disabledTimeArr[index]);
  }
  isBothAllowed(selectedValue) {
    return isAllowedDate(selectedValue[0], this.disabledDate, this.disabledStartTime) && isAllowedDate(selectedValue[1], this.disabledDate, this.disabledEndTime);
  }
  isAllowed(value, isBoth = false) {
    if (this.isRange) {
      return isBoth ? this.isBothAllowed(value) : this.isOneAllowed(value);
    } else {
      return isAllowedDate(value, this.disabledDate, this.disabledTime);
    }
  }
  getTimeOptions(partType) {
    if (this.showTime && this.timeOptions) {
      return this.timeOptions instanceof Array ? this.timeOptions[this.datePickerService.getActiveIndex(partType)] : this.timeOptions;
    }
    return null;
  }
  onClickPresetRange(val) {
    const value = typeof val === "function" ? val() : val;
    if (value) {
      this.datePickerService.setValue([new CandyDate(value[0]), new CandyDate(value[1])]);
      this.datePickerService.emitValue$.next();
    }
  }
  onPresetRangeMouseLeave() {
    this.clearHoverValue();
  }
  onHoverPresetRange(val) {
    if (typeof val !== "function") {
      this.hoverValue = [new CandyDate(val[0]), new CandyDate(val[1])];
    }
  }
  getObjectKeys(obj) {
    return obj ? Object.keys(obj) : [];
  }
  show(partType) {
    const hide = this.showTime && this.isRange && this.datePickerService.activeInput !== partType;
    return !hide;
  }
  clearHoverValue() {
    this.hoverValue = [];
  }
  buildTimeOptions() {
    if (this.showTime) {
      const showTime = typeof this.showTime === "object" ? this.showTime : {};
      if (this.isRange) {
        const value = this.datePickerService.value;
        this.timeOptions = [this.overrideTimeOptions(showTime, value[0], "start"), this.overrideTimeOptions(showTime, value[1], "end")];
      } else {
        this.timeOptions = this.overrideTimeOptions(showTime, this.datePickerService.value);
      }
    } else {
      this.timeOptions = null;
    }
  }
  overrideTimeOptions(origin, value, partial) {
    let disabledTimeFn;
    if (partial) {
      disabledTimeFn = partial === "start" ? this.disabledStartTime : this.disabledEndTime;
    } else {
      disabledTimeFn = this.disabledTime;
    }
    return __spreadValues(__spreadValues({}, origin), getTimeConfig(value, disabledTimeFn));
  }
  overrideHms(newValue, oldValue) {
    newValue = newValue || new CandyDate();
    oldValue = oldValue || new CandyDate();
    return oldValue.setHms(newValue.getHours(), newValue.getMinutes(), newValue.getSeconds());
  }
  static \u0275fac = function DateRangePopupComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _DateRangePopupComponent)(\u0275\u0275directiveInject(DatePickerService), \u0275\u0275directiveInject(ChangeDetectorRef), \u0275\u0275directiveInject(ElementRef));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _DateRangePopupComponent,
    selectors: [["date-range-popup"]],
    inputs: {
      isRange: [2, "isRange", "isRange", booleanAttribute],
      inline: [2, "inline", "inline", booleanAttribute],
      showWeek: [2, "showWeek", "showWeek", booleanAttribute],
      locale: "locale",
      disabledDate: "disabledDate",
      disabledTime: "disabledTime",
      showToday: [2, "showToday", "showToday", booleanAttribute],
      showNow: [2, "showNow", "showNow", booleanAttribute],
      showTime: "showTime",
      extraFooter: "extraFooter",
      ranges: "ranges",
      dateRender: "dateRender",
      panelMode: "panelMode",
      defaultPickerValue: "defaultPickerValue",
      dir: "dir",
      format: "format"
    },
    outputs: {
      panelModeChange: "panelModeChange",
      calendarChange: "calendarChange",
      resultOk: "resultOk"
    },
    exportAs: ["dateRangePopup"],
    features: [\u0275\u0275NgOnChangesFeature],
    decls: 8,
    vars: 1,
    consts: [["tplInnerPopup", ""], ["tplFooter", ""], ["tplRangeQuickSelector", ""], [3, "class"], [4, "ngTemplateOutlet"], [4, "ngTemplateOutlet", "ngTemplateOutletContext"], ["tabindex", "-1"], [3, "panelChange", "cellHover", "selectDate", "selectTime", "headerChange", "showWeek", "endPanelMode", "partType", "locale", "showTimePicker", "timeOptions", "panelMode", "activeDate", "value", "disabledDate", "dateRender", "selectedValue", "hoverValue", "format"], [3, "locale", "isRange", "showToday", "showNow", "hasTimePicker", "okDisabled", "extraFooter", "rangeQuickSelector"], [3, "clickOk", "clickToday", "locale", "isRange", "showToday", "showNow", "hasTimePicker", "okDisabled", "extraFooter", "rangeQuickSelector"], [3, "click", "mouseenter", "mouseleave"], [1, "ant-tag", "ant-tag-blue"]],
    template: function DateRangePopupComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275template(0, DateRangePopupComponent_Conditional_0_Template, 7, 18, "div", 3)(1, DateRangePopupComponent_Conditional_1_Template, 4, 13, "div", 3)(2, DateRangePopupComponent_ng_template_2_Template, 2, 19, "ng-template", null, 0, \u0275\u0275templateRefExtractor)(4, DateRangePopupComponent_ng_template_4_Template, 1, 1, "ng-template", null, 1, \u0275\u0275templateRefExtractor)(6, DateRangePopupComponent_ng_template_6_Template, 2, 0, "ng-template", null, 2, \u0275\u0275templateRefExtractor);
      }
      if (rf & 2) {
        \u0275\u0275conditional(ctx.isRange ? 0 : 1);
      }
    },
    dependencies: [InnerPopupComponent, NgTemplateOutlet, CalendarFooterComponent],
    encapsulation: 2,
    changeDetection: 0
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DateRangePopupComponent, [{
    type: Component,
    args: [{
      encapsulation: ViewEncapsulation.None,
      changeDetection: ChangeDetectionStrategy.OnPush,
      // eslint-disable-next-line @angular-eslint/component-selector
      selector: "date-range-popup",
      exportAs: "dateRangePopup",
      template: `
    @if (isRange) {
      <div class="{{ prefixCls }}-range-wrapper {{ prefixCls }}-date-range-wrapper">
        <div class="{{ prefixCls }}-range-arrow" [style]="arrowPosition"></div>
        <div class="{{ prefixCls }}-panel-container {{ showWeek ? prefixCls + '-week-number' : '' }}">
          <div class="{{ prefixCls }}-panels">
            @if (hasTimePicker) {
              <ng-container *ngTemplateOutlet="tplInnerPopup; context: { partType: datePickerService.activeInput }" />
            } @else {
              <ng-container *ngTemplateOutlet="tplInnerPopup; context: { partType: 'left' }" />
              <ng-container *ngTemplateOutlet="tplInnerPopup; context: { partType: 'right' }" />
            }
          </div>
          <ng-container *ngTemplateOutlet="tplFooter" />
        </div>
      </div>
    } @else {
      <div
        class="{{ prefixCls }}-panel-container {{ showWeek ? prefixCls + '-week-number' : '' }} {{
          hasTimePicker ? prefixCls + '-time' : ''
        }} {{ isRange ? prefixCls + '-range' : '' }}"
      >
        <div class="{{ prefixCls }}-panel" [class.ant-picker-panel-rtl]="dir === 'rtl'" tabindex="-1">
          <!-- Single ONLY -->
          <ng-container *ngTemplateOutlet="tplInnerPopup" />
          <ng-container *ngTemplateOutlet="tplFooter" />
        </div>
      </div>
    }

    <ng-template #tplInnerPopup let-partType="partType">
      <div class="{{ prefixCls }}-panel" [class.ant-picker-panel-rtl]="dir === 'rtl'">
        <!-- TODO(@wenqi73) [selectedValue] [hoverValue] types-->
        <inner-popup
          [showWeek]="showWeek"
          [endPanelMode]="getPanelMode(endPanelMode, partType)"
          [partType]="partType"
          [locale]="locale!"
          [showTimePicker]="hasTimePicker"
          [timeOptions]="getTimeOptions(partType)"
          [panelMode]="getPanelMode(panelMode, partType)"
          (panelChange)="onPanelModeChange($event, partType)"
          [activeDate]="getActiveDate(partType)"
          [value]="getValue(partType)"
          [disabledDate]="disabledDate"
          [dateRender]="dateRender"
          [selectedValue]="$any(datePickerService?.value)"
          [hoverValue]="$any(hoverValue)"
          [format]="format"
          (cellHover)="onCellHover($event)"
          (selectDate)="changeValueFromSelect($event, !showTime)"
          (selectTime)="onSelectTime($event, partType)"
          (headerChange)="onActiveDateChange($event, partType)"
        />
      </div>
    </ng-template>

    <ng-template #tplFooter>
      @if (hasFooter) {
        <calendar-footer
          [locale]="locale!"
          [isRange]="isRange"
          [showToday]="showToday"
          [showNow]="showNow"
          [hasTimePicker]="hasTimePicker"
          [okDisabled]="!isAllowed($any(datePickerService?.value))"
          [extraFooter]="extraFooter"
          [rangeQuickSelector]="ranges ? tplRangeQuickSelector : null"
          (clickOk)="onClickOk()"
          (clickToday)="onClickToday($event)"
        />
      }
    </ng-template>

    <!-- Range ONLY: Range Quick Selector -->
    <ng-template #tplRangeQuickSelector>
      @for (name of getObjectKeys(ranges); track name) {
        <li
          class="{{ prefixCls }}-preset"
          (click)="onClickPresetRange(ranges![name])"
          (mouseenter)="onHoverPresetRange(ranges![name])"
          (mouseleave)="onPresetRangeMouseLeave()"
        >
          <span class="ant-tag ant-tag-blue">{{ name }}</span>
        </li>
      }
    </ng-template>
  `,
      imports: [InnerPopupComponent, NgTemplateOutlet, CalendarFooterComponent]
    }]
  }], () => [{
    type: DatePickerService
  }, {
    type: ChangeDetectorRef
  }, {
    type: ElementRef
  }], {
    isRange: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    inline: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    showWeek: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    locale: [{
      type: Input
    }],
    disabledDate: [{
      type: Input
    }],
    disabledTime: [{
      type: Input
    }],
    showToday: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    showNow: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    showTime: [{
      type: Input
    }],
    extraFooter: [{
      type: Input
    }],
    ranges: [{
      type: Input
    }],
    dateRender: [{
      type: Input
    }],
    panelMode: [{
      type: Input
    }],
    defaultPickerValue: [{
      type: Input
    }],
    dir: [{
      type: Input
    }],
    format: [{
      type: Input
    }],
    panelModeChange: [{
      type: Output
    }],
    calendarChange: [{
      type: Output
    }],
    resultOk: [{
      type: Output
    }]
  });
})();
var POPUP_STYLE_PATCH = {
  position: "relative"
};
var NZ_CONFIG_MODULE_NAME2 = "datePicker";
var NzDatePickerComponent = (() => {
  let _nzSeparator_decorators;
  let _nzSeparator_initializers = [];
  let _nzSeparator_extraInitializers = [];
  let _nzSuffixIcon_decorators;
  let _nzSuffixIcon_initializers = [];
  let _nzSuffixIcon_extraInitializers = [];
  let _nzBackdrop_decorators;
  let _nzBackdrop_initializers = [];
  let _nzBackdrop_extraInitializers = [];
  return class NzDatePickerComponent2 {
    static {
      const _metadata = typeof Symbol === "function" && Symbol.metadata ? /* @__PURE__ */ Object.create(null) : void 0;
      _nzSeparator_decorators = [WithConfig()];
      _nzSuffixIcon_decorators = [WithConfig()];
      _nzBackdrop_decorators = [WithConfig()];
      __esDecorate(null, null, _nzSeparator_decorators, {
        kind: "field",
        name: "nzSeparator",
        static: false,
        private: false,
        access: {
          has: (obj) => "nzSeparator" in obj,
          get: (obj) => obj.nzSeparator,
          set: (obj, value) => {
            obj.nzSeparator = value;
          }
        },
        metadata: _metadata
      }, _nzSeparator_initializers, _nzSeparator_extraInitializers);
      __esDecorate(null, null, _nzSuffixIcon_decorators, {
        kind: "field",
        name: "nzSuffixIcon",
        static: false,
        private: false,
        access: {
          has: (obj) => "nzSuffixIcon" in obj,
          get: (obj) => obj.nzSuffixIcon,
          set: (obj, value) => {
            obj.nzSuffixIcon = value;
          }
        },
        metadata: _metadata
      }, _nzSuffixIcon_initializers, _nzSuffixIcon_extraInitializers);
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
    datePickerService;
    i18n;
    cdr;
    renderer;
    elementRef;
    dateHelper;
    nzResizeObserver;
    platform;
    destroy$;
    directionality;
    _nzModuleName = NZ_CONFIG_MODULE_NAME2;
    static ngAcceptInputType_nzShowTime;
    static ngAcceptInputType_nzMode;
    isRange = false;
    // Indicate whether the value is a range value
    extraFooter;
    dir = "ltr";
    // status
    statusCls = {};
    status = "";
    hasFeedback = false;
    panelMode = "date";
    isCustomPlaceHolder = false;
    isCustomFormat = false;
    showTime = false;
    isNzDisableFirstChange = true;
    // --- Common API
    nzAllowClear = true;
    nzAutoFocus = false;
    nzDisabled = false;
    nzBorderless = false;
    nzInputReadOnly = false;
    nzInline = false;
    nzOpen;
    nzDisabledDate;
    nzLocale;
    nzPlaceHolder = "";
    nzPopupStyle = POPUP_STYLE_PATCH;
    nzDropdownClassName;
    nzSize = "default";
    nzStatus = "";
    nzFormat;
    nzDateRender;
    nzDisabledTime;
    nzRenderExtraFooter;
    nzShowToday = true;
    nzMode = "date";
    nzShowNow = true;
    nzRanges;
    nzDefaultPickerValue = null;
    nzSeparator = __runInitializers(this, _nzSeparator_initializers, void 0);
    nzSuffixIcon = (__runInitializers(this, _nzSeparator_extraInitializers), __runInitializers(this, _nzSuffixIcon_initializers, "calendar"));
    nzBackdrop = (__runInitializers(this, _nzSuffixIcon_extraInitializers), __runInitializers(this, _nzBackdrop_initializers, false));
    nzId = (__runInitializers(this, _nzBackdrop_extraInitializers), null);
    nzPlacement = "bottomLeft";
    nzShowWeekNumber = false;
    nzOnPanelChange = new EventEmitter();
    nzOnCalendarChange = new EventEmitter();
    nzOnOk = new EventEmitter();
    nzOnOpenChange = new EventEmitter();
    get nzShowTime() {
      return this.showTime;
    }
    set nzShowTime(value) {
      this.showTime = typeof value === "object" ? value : toBoolean(value);
    }
    // ------------------------------------------------------------------------
    // Input API Start
    // ------------------------------------------------------------------------
    cdkConnectedOverlay;
    panel;
    separatorElement;
    pickerInput;
    rangePickerInputs;
    get origin() {
      return this.elementRef;
    }
    inputSize = 12;
    inputWidth;
    prefixCls = PREFIX_CLASS;
    inputValue;
    activeBarStyle = {};
    overlayOpen = false;
    // Available when "nzOpen" = undefined
    overlayPositions = [...DEFAULT_DATE_PICKER_POSITIONS];
    currentPositionX = "start";
    currentPositionY = "bottom";
    get realOpenState() {
      return this.isOpenHandledByUser() ? !!this.nzOpen : this.overlayOpen;
    }
    finalSize = computed(() => {
      if (this.compactSize) {
        return this.compactSize();
      }
      return this.size();
    });
    size = signal(this.nzSize);
    compactSize = inject(NZ_SPACE_COMPACT_SIZE, {
      optional: true
    });
    document = inject(DOCUMENT);
    ngAfterViewInit() {
      if (this.nzAutoFocus) {
        this.focus();
      }
      if (this.isRange && this.platform.isBrowser) {
        this.nzResizeObserver.observe(this.elementRef).pipe(takeUntil(this.destroy$)).subscribe(() => {
          this.updateInputWidthAndArrowLeft();
        });
      }
      this.datePickerService.inputPartChange$.pipe(takeUntil(this.destroy$)).subscribe((partType) => {
        if (partType) {
          this.datePickerService.activeInput = partType;
        }
        this.focus();
        this.updateInputWidthAndArrowLeft();
      });
      if (this.platform.isBrowser) {
        fromEventOutsideAngular(this.elementRef.nativeElement, "mousedown").pipe(takeUntil(this.destroy$)).subscribe((event) => {
          if (event.target.tagName.toLowerCase() !== "input") {
            event.preventDefault();
          }
        });
      }
    }
    updateInputWidthAndArrowLeft() {
      this.inputWidth = this.rangePickerInputs?.first?.nativeElement.offsetWidth || 0;
      const baseStyle = {
        position: "absolute",
        width: `${this.inputWidth}px`
      };
      this.datePickerService.arrowLeft = this.datePickerService.activeInput === "left" ? 0 : this.inputWidth + this.separatorElement?.nativeElement.offsetWidth || 0;
      if (this.dir === "rtl") {
        this.activeBarStyle = __spreadProps(__spreadValues({}, baseStyle), {
          right: `${this.datePickerService.arrowLeft}px`
        });
      } else {
        this.activeBarStyle = __spreadProps(__spreadValues({}, baseStyle), {
          left: `${this.datePickerService.arrowLeft}px`
        });
      }
      this.cdr.markForCheck();
    }
    getInput(partType) {
      if (this.nzInline) {
        return void 0;
      }
      return this.isRange ? partType === "left" ? this.rangePickerInputs?.first.nativeElement : this.rangePickerInputs?.last.nativeElement : this.pickerInput.nativeElement;
    }
    focus() {
      const activeInputElement = this.getInput(this.datePickerService.activeInput);
      if (this.document.activeElement !== activeInputElement) {
        activeInputElement?.focus();
      }
    }
    onFocus(event, partType) {
      event.preventDefault();
      if (partType) {
        this.datePickerService.inputPartChange$.next(partType);
      }
      this.renderClass(true);
    }
    // blur event has not the relatedTarget in IE11, use focusout instead.
    onFocusout(event) {
      event.preventDefault();
      this.onTouchedFn();
      if (!this.elementRef.nativeElement.contains(event.relatedTarget)) {
        this.checkAndClose();
      }
      this.renderClass(false);
    }
    // Show overlay content
    open() {
      if (this.nzInline) {
        return;
      }
      if (!this.realOpenState && !this.nzDisabled) {
        this.updateInputWidthAndArrowLeft();
        this.overlayOpen = true;
        this.nzOnOpenChange.emit(true);
        this.focus();
        this.cdr.markForCheck();
      }
    }
    close() {
      if (this.nzInline) {
        return;
      }
      if (this.realOpenState) {
        this.overlayOpen = false;
        this.nzOnOpenChange.emit(false);
      }
    }
    get showClear() {
      return !this.nzDisabled && !this.isEmptyValue(this.datePickerService.value) && this.nzAllowClear;
    }
    checkAndClose() {
      if (!this.realOpenState) {
        return;
      }
      if (this.panel.isAllowed(this.datePickerService.value, true)) {
        if (Array.isArray(this.datePickerService.value) && wrongSortOrder(this.datePickerService.value)) {
          const index = this.datePickerService.getActiveIndex();
          const value = this.datePickerService.value[index];
          this.panel.changeValueFromSelect(value, true);
          return;
        }
        this.updateInputValue();
        this.datePickerService.emitValue$.next();
      } else {
        this.datePickerService.setValue(this.datePickerService.initialValue);
        this.close();
      }
    }
    onClickInputBox(event) {
      event.stopPropagation();
      this.focus();
      if (!this.isOpenHandledByUser()) {
        this.open();
      }
    }
    onOverlayKeydown(event) {
      if (event.keyCode === ESCAPE) {
        this.datePickerService.initValue();
      }
    }
    // NOTE: A issue here, the first time position change, the animation will not be triggered.
    // Because the overlay's "positionChange" event is emitted after the content's full shown up.
    // All other components like "nz-dropdown" which depends on overlay also has the same issue.
    // See: https://github.com/NG-ZORRO/ng-zorro-antd/issues/1429
    onPositionChange(position) {
      this.currentPositionX = position.connectionPair.originX;
      this.currentPositionY = position.connectionPair.originY;
      this.cdr.detectChanges();
    }
    onClickClear(event) {
      event.preventDefault();
      event.stopPropagation();
      this.datePickerService.initValue(true);
      this.datePickerService.emitValue$.next();
    }
    updateInputValue() {
      const newValue = this.datePickerService.value;
      if (this.isRange) {
        this.inputValue = newValue ? newValue.map((v) => this.formatValue(v)) : ["", ""];
      } else {
        this.inputValue = this.formatValue(newValue);
      }
      this.cdr.markForCheck();
    }
    formatValue(value) {
      return this.dateHelper.format(value && value.nativeDate, this.nzFormat);
    }
    onInputChange(value, isEnter = false) {
      if (!this.platform.TRIDENT && this.document.activeElement === this.getInput(this.datePickerService.activeInput) && !this.realOpenState) {
        this.open();
        return;
      }
      const date = this.checkValidDate(value);
      if (date && this.realOpenState) {
        this.panel.changeValueFromSelect(date, isEnter);
      }
    }
    onKeyupEnter(event) {
      this.onInputChange(event.target.value, true);
    }
    checkValidDate(value) {
      const date = new CandyDate(this.dateHelper.parseDate(value, this.nzFormat));
      if (!date.isValid() || value !== this.dateHelper.format(date.nativeDate, this.nzFormat)) {
        return null;
      }
      return date;
    }
    getPlaceholder(partType) {
      return this.isRange ? this.nzPlaceHolder[this.datePickerService.getActiveIndex(partType)] : this.nzPlaceHolder;
    }
    isEmptyValue(value) {
      if (value === null) {
        return true;
      } else if (this.isRange) {
        return !value || !Array.isArray(value) || value.every((val) => !val);
      } else {
        return !value;
      }
    }
    // Whether open state is permanently controlled by user himself
    isOpenHandledByUser() {
      return this.nzOpen !== void 0;
    }
    noAnimation = inject(NzNoAnimationDirective, {
      host: true,
      optional: true
    });
    nzFormStatusService = inject(NzFormStatusService, {
      optional: true
    });
    nzFormNoStatusService = inject(NzFormNoStatusService, {
      optional: true
    });
    // ------------------------------------------------------------------------
    // Input API End
    // ------------------------------------------------------------------------
    constructor(nzConfigService, datePickerService, i18n, cdr, renderer, elementRef, dateHelper, nzResizeObserver, platform, destroy$, directionality) {
      this.nzConfigService = nzConfigService;
      this.datePickerService = datePickerService;
      this.i18n = i18n;
      this.cdr = cdr;
      this.renderer = renderer;
      this.elementRef = elementRef;
      this.dateHelper = dateHelper;
      this.nzResizeObserver = nzResizeObserver;
      this.platform = platform;
      this.destroy$ = destroy$;
      this.directionality = directionality;
    }
    ngOnInit() {
      this.nzFormStatusService?.formStatusChanges.pipe(distinctUntilChanged((pre, cur) => {
        return pre.status === cur.status && pre.hasFeedback === cur.hasFeedback;
      }), withLatestFrom(this.nzFormNoStatusService ? this.nzFormNoStatusService.noFormStatus : of(false)), map(([{
        status,
        hasFeedback
      }, noStatus]) => ({
        status: noStatus ? "" : status,
        hasFeedback
      })), takeUntil(this.destroy$)).subscribe(({
        status,
        hasFeedback
      }) => {
        this.setStatusStyles(status, hasFeedback);
      });
      if (!this.nzLocale) {
        this.i18n.localeChange.pipe(takeUntil(this.destroy$)).subscribe(() => this.setLocale());
      }
      this.datePickerService.isRange = this.isRange;
      this.datePickerService.initValue(true);
      this.datePickerService.emitValue$.pipe(takeUntil(this.destroy$)).subscribe(() => {
        const granularityComparison = this.showTime ? "second" : "day";
        const value = this.datePickerService.value;
        const datePickerPreviousValue = this.datePickerService.initialValue;
        if (!this.isRange && value?.isSame(datePickerPreviousValue?.nativeDate, granularityComparison)) {
          this.onTouchedFn();
          return this.close();
        }
        if (this.isRange) {
          const [previousStartDate, previousEndDate] = datePickerPreviousValue;
          const [currentStartDate, currentEndDate] = value;
          if (previousStartDate?.isSame(currentStartDate?.nativeDate, granularityComparison) && previousEndDate?.isSame(currentEndDate?.nativeDate, granularityComparison)) {
            this.onTouchedFn();
            return this.close();
          }
        }
        this.datePickerService.initialValue = cloneDate(value);
        if (this.isRange) {
          const vAsRange = value;
          if (vAsRange.length) {
            this.onChangeFn([vAsRange[0]?.nativeDate ?? null, vAsRange[1]?.nativeDate ?? null]);
          } else {
            this.onChangeFn([]);
          }
        } else {
          if (value) {
            this.onChangeFn(value.nativeDate);
          } else {
            this.onChangeFn(null);
          }
        }
        this.onTouchedFn();
        this.close();
      });
      this.directionality.change?.pipe(takeUntil(this.destroy$)).subscribe((direction) => {
        this.dir = direction;
        this.cdr.detectChanges();
      });
      this.dir = this.directionality.value;
      this.inputValue = this.isRange ? ["", ""] : "";
      this.setModeAndFormat();
      this.datePickerService.valueChange$.pipe(takeUntil(this.destroy$)).subscribe(() => {
        this.updateInputValue();
      });
    }
    ngOnChanges({
      nzStatus,
      nzPlacement,
      nzPopupStyle,
      nzPlaceHolder,
      nzLocale,
      nzFormat,
      nzRenderExtraFooter,
      nzMode,
      nzSize
    }) {
      if (nzPopupStyle) {
        this.nzPopupStyle = this.nzPopupStyle ? __spreadValues(__spreadValues({}, this.nzPopupStyle), POPUP_STYLE_PATCH) : POPUP_STYLE_PATCH;
      }
      if (nzPlaceHolder?.currentValue) {
        this.isCustomPlaceHolder = true;
      }
      if (nzFormat?.currentValue) {
        this.isCustomFormat = true;
      }
      if (nzLocale) {
        this.setDefaultPlaceHolder();
      }
      if (nzRenderExtraFooter) {
        this.extraFooter = valueFunctionProp(this.nzRenderExtraFooter);
      }
      if (nzMode) {
        this.setDefaultPlaceHolder();
        this.setModeAndFormat();
      }
      if (nzStatus) {
        this.setStatusStyles(this.nzStatus, this.hasFeedback);
      }
      if (nzPlacement) {
        this.setPlacement(this.nzPlacement);
      }
      if (nzSize) {
        this.size.set(nzSize.currentValue);
      }
    }
    setModeAndFormat() {
      const inputFormats = {
        year: "yyyy",
        quarter: "yyyy-[Q]Q",
        month: "yyyy-MM",
        week: "YYYY-ww",
        date: this.nzShowTime ? "yyyy-MM-dd HH:mm:ss" : "yyyy-MM-dd"
      };
      if (!this.nzMode) {
        this.nzMode = "date";
      }
      this.panelMode = this.isRange ? [this.nzMode, this.nzMode] : this.nzMode;
      if (!this.isCustomFormat) {
        this.nzFormat = inputFormats[this.nzMode];
      }
      this.inputSize = Math.max(10, this.nzFormat.length) + 2;
      this.updateInputValue();
    }
    /**
     * Triggered when overlayOpen changes (different with realOpenState)
     *
     * @param open The overlayOpen in picker component
     */
    onOpenChange(open) {
      this.nzOnOpenChange.emit(open);
    }
    // ------------------------------------------------------------------------
    // | Control value accessor implements
    // ------------------------------------------------------------------------
    // NOTE: onChangeFn/onTouchedFn will not be assigned if user not use as ngModel
    onChangeFn = () => void 0;
    onTouchedFn = () => void 0;
    writeValue(value) {
      this.setValue(value);
      this.cdr.markForCheck();
    }
    registerOnChange(fn) {
      this.onChangeFn = fn;
    }
    registerOnTouched(fn) {
      this.onTouchedFn = fn;
    }
    setDisabledState(isDisabled) {
      this.nzDisabled = this.isNzDisableFirstChange && this.nzDisabled || isDisabled;
      this.cdr.markForCheck();
      this.isNzDisableFirstChange = false;
    }
    // ------------------------------------------------------------------------
    // | Internal methods
    // ------------------------------------------------------------------------
    // Reload locale from i18n with side effects
    setLocale() {
      this.nzLocale = this.i18n.getLocaleData("DatePicker", {});
      this.setDefaultPlaceHolder();
      this.cdr.markForCheck();
    }
    setDefaultPlaceHolder() {
      if (!this.isCustomPlaceHolder && this.nzLocale) {
        const defaultPlaceholder = {
          year: this.getPropertyOfLocale("yearPlaceholder"),
          quarter: this.getPropertyOfLocale("quarterPlaceholder"),
          month: this.getPropertyOfLocale("monthPlaceholder"),
          week: this.getPropertyOfLocale("weekPlaceholder"),
          date: this.getPropertyOfLocale("placeholder")
        };
        const defaultRangePlaceholder = {
          year: this.getPropertyOfLocale("rangeYearPlaceholder"),
          quarter: this.getPropertyOfLocale("rangeQuarterPlaceholder"),
          month: this.getPropertyOfLocale("rangeMonthPlaceholder"),
          week: this.getPropertyOfLocale("rangeWeekPlaceholder"),
          date: this.getPropertyOfLocale("rangePlaceholder")
        };
        this.nzPlaceHolder = this.isRange ? defaultRangePlaceholder[this.nzMode] : defaultPlaceholder[this.nzMode];
      }
    }
    getPropertyOfLocale(type) {
      return this.nzLocale.lang[type] || this.i18n.getLocaleData(`DatePicker.lang.${type}`);
    }
    // Safe way of setting value with default
    setValue(value) {
      const newValue = this.datePickerService.makeValue(value);
      this.datePickerService.setValue(newValue);
      this.datePickerService.initialValue = cloneDate(newValue);
      this.cdr.detectChanges();
    }
    renderClass(value) {
      if (value) {
        this.renderer.addClass(this.elementRef.nativeElement, "ant-picker-focused");
      } else {
        this.renderer.removeClass(this.elementRef.nativeElement, "ant-picker-focused");
      }
    }
    onPanelModeChange(panelChange) {
      this.nzOnPanelChange.emit(panelChange);
    }
    // Emit nzOnCalendarChange when select date by nz-range-picker
    onCalendarChange(value) {
      if (this.isRange && Array.isArray(value)) {
        const rangeValue = value.filter((x) => x instanceof CandyDate).map((x) => x.nativeDate);
        this.nzOnCalendarChange.emit(rangeValue);
      }
    }
    onResultOk() {
      if (this.isRange) {
        const value = this.datePickerService.value;
        if (value.length) {
          this.nzOnOk.emit([value[0]?.nativeDate || null, value[1]?.nativeDate || null]);
        } else {
          this.nzOnOk.emit([]);
        }
      } else {
        if (this.datePickerService.value) {
          this.nzOnOk.emit(this.datePickerService.value.nativeDate);
        } else {
          this.nzOnOk.emit(null);
        }
      }
    }
    // status
    setStatusStyles(status, hasFeedback) {
      this.status = status;
      this.hasFeedback = hasFeedback;
      this.cdr.markForCheck();
      this.statusCls = getStatusClassNames(this.prefixCls, status, hasFeedback);
      Object.keys(this.statusCls).forEach((status2) => {
        if (this.statusCls[status2]) {
          this.renderer.addClass(this.elementRef.nativeElement, status2);
        } else {
          this.renderer.removeClass(this.elementRef.nativeElement, status2);
        }
      });
    }
    setPlacement(placement) {
      const position = DATE_PICKER_POSITION_MAP[placement];
      this.overlayPositions = [position, ...DEFAULT_DATE_PICKER_POSITIONS];
      this.currentPositionX = position.originX;
      this.currentPositionY = position.originY;
    }
    static \u0275fac = function NzDatePickerComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || NzDatePickerComponent2)(\u0275\u0275directiveInject(NzConfigService), \u0275\u0275directiveInject(DatePickerService), \u0275\u0275directiveInject(NzI18nService), \u0275\u0275directiveInject(ChangeDetectorRef), \u0275\u0275directiveInject(Renderer2), \u0275\u0275directiveInject(ElementRef), \u0275\u0275directiveInject(DateHelperService), \u0275\u0275directiveInject(NzResizeObserver), \u0275\u0275directiveInject(Platform), \u0275\u0275directiveInject(NzDestroyService), \u0275\u0275directiveInject(Directionality));
    };
    static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
      type: NzDatePickerComponent2,
      selectors: [["nz-date-picker"], ["nz-week-picker"], ["nz-month-picker"], ["nz-quarter-picker"], ["nz-year-picker"], ["nz-range-picker"]],
      viewQuery: function NzDatePickerComponent_Query(rf, ctx) {
        if (rf & 1) {
          \u0275\u0275viewQuery(CdkConnectedOverlay, 5);
          \u0275\u0275viewQuery(DateRangePopupComponent, 5);
          \u0275\u0275viewQuery(_c42, 5);
          \u0275\u0275viewQuery(_c5, 5);
          \u0275\u0275viewQuery(_c6, 5);
        }
        if (rf & 2) {
          let _t;
          \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.cdkConnectedOverlay = _t.first);
          \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.panel = _t.first);
          \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.separatorElement = _t.first);
          \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.pickerInput = _t.first);
          \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.rangePickerInputs = _t);
        }
      },
      hostVars: 16,
      hostBindings: function NzDatePickerComponent_HostBindings(rf, ctx) {
        if (rf & 1) {
          \u0275\u0275listener("click", function NzDatePickerComponent_click_HostBindingHandler($event) {
            return ctx.onClickInputBox($event);
          });
        }
        if (rf & 2) {
          \u0275\u0275classProp("ant-picker", true)("ant-picker-range", ctx.isRange)("ant-picker-large", ctx.finalSize() === "large")("ant-picker-small", ctx.finalSize() === "small")("ant-picker-disabled", ctx.nzDisabled)("ant-picker-rtl", ctx.dir === "rtl")("ant-picker-borderless", ctx.nzBorderless)("ant-picker-inline", ctx.nzInline);
        }
      },
      inputs: {
        nzAllowClear: [2, "nzAllowClear", "nzAllowClear", booleanAttribute],
        nzAutoFocus: [2, "nzAutoFocus", "nzAutoFocus", booleanAttribute],
        nzDisabled: [2, "nzDisabled", "nzDisabled", booleanAttribute],
        nzBorderless: [2, "nzBorderless", "nzBorderless", booleanAttribute],
        nzInputReadOnly: [2, "nzInputReadOnly", "nzInputReadOnly", booleanAttribute],
        nzInline: [2, "nzInline", "nzInline", booleanAttribute],
        nzOpen: [2, "nzOpen", "nzOpen", booleanAttribute],
        nzDisabledDate: "nzDisabledDate",
        nzLocale: "nzLocale",
        nzPlaceHolder: "nzPlaceHolder",
        nzPopupStyle: "nzPopupStyle",
        nzDropdownClassName: "nzDropdownClassName",
        nzSize: "nzSize",
        nzStatus: "nzStatus",
        nzFormat: "nzFormat",
        nzDateRender: "nzDateRender",
        nzDisabledTime: "nzDisabledTime",
        nzRenderExtraFooter: "nzRenderExtraFooter",
        nzShowToday: [2, "nzShowToday", "nzShowToday", booleanAttribute],
        nzMode: "nzMode",
        nzShowNow: [2, "nzShowNow", "nzShowNow", booleanAttribute],
        nzRanges: "nzRanges",
        nzDefaultPickerValue: "nzDefaultPickerValue",
        nzSeparator: "nzSeparator",
        nzSuffixIcon: "nzSuffixIcon",
        nzBackdrop: "nzBackdrop",
        nzId: "nzId",
        nzPlacement: "nzPlacement",
        nzShowWeekNumber: [2, "nzShowWeekNumber", "nzShowWeekNumber", booleanAttribute],
        nzShowTime: "nzShowTime"
      },
      outputs: {
        nzOnPanelChange: "nzOnPanelChange",
        nzOnCalendarChange: "nzOnCalendarChange",
        nzOnOk: "nzOnOk",
        nzOnOpenChange: "nzOnOpenChange"
      },
      exportAs: ["nzDatePicker"],
      features: [\u0275\u0275ProvidersFeature([NzDestroyService, DatePickerService, {
        provide: NZ_SPACE_COMPACT_ITEM_TYPE,
        useValue: "picker"
      }, {
        provide: NG_VALUE_ACCESSOR,
        multi: true,
        useExisting: forwardRef(() => NzDatePickerComponent2)
      }]), \u0275\u0275HostDirectivesFeature([NzSpaceCompactItemDirective]), \u0275\u0275NgOnChangesFeature],
      decls: 9,
      vars: 6,
      consts: [["tplRangeInput", ""], ["tplRightRest", ""], ["inlineMode", ""], ["pickerInput", ""], ["separatorElement", ""], ["rangePickerInput", ""], [3, "ngTemplateOutlet"], ["cdkConnectedOverlay", "", "nzConnectedOverlay", "", 3, "positionChange", "detach", "overlayKeydown", "cdkConnectedOverlayHasBackdrop", "cdkConnectedOverlayOrigin", "cdkConnectedOverlayOpen", "cdkConnectedOverlayPositions", "cdkConnectedOverlayTransformOriginOn"], [3, "class"], ["autocomplete", "off", 3, "ngModelChange", "focus", "focusout", "keyup.enter", "disabled", "readOnly", "ngModel", "placeholder", "size"], [4, "ngTemplateOutlet"], [4, "ngTemplateOutlet", "ngTemplateOutletContext"], [4, "nzStringTemplateOutlet"], ["nzType", "swap-right", "nzTheme", "outline"], ["autocomplete", "off", 3, "click", "focusout", "focus", "keyup.enter", "ngModelChange", "disabled", "readOnly", "size", "ngModel", "placeholder"], [3, "status"], [3, "click"], ["nzType", "close-circle", "nzTheme", "fill"], [3, "nzType"], [3, "panelModeChange", "calendarChange", "resultOk", "isRange", "inline", "defaultPickerValue", "showWeek", "panelMode", "locale", "showToday", "showNow", "showTime", "dateRender", "disabledDate", "disabledTime", "extraFooter", "ranges", "dir", "format"], [1, "ant-picker-wrapper", 3, "nzNoAnimation"]],
      template: function NzDatePickerComponent_Template(rf, ctx) {
        if (rf & 1) {
          const _r1 = \u0275\u0275getCurrentView();
          \u0275\u0275template(0, NzDatePickerComponent_Conditional_0_Template, 2, 1)(1, NzDatePickerComponent_Conditional_1_Template, 1, 1, null, 6)(2, NzDatePickerComponent_ng_template_2_Template, 2, 6, "ng-template", null, 0, \u0275\u0275templateRefExtractor)(4, NzDatePickerComponent_ng_template_4_Template, 5, 11, "ng-template", null, 1, \u0275\u0275templateRefExtractor)(6, NzDatePickerComponent_ng_template_6_Template, 2, 38, "ng-template", null, 2, \u0275\u0275templateRefExtractor)(8, NzDatePickerComponent_ng_template_8_Template, 2, 5, "ng-template", 7);
          \u0275\u0275listener("positionChange", function NzDatePickerComponent_Template_ng_template_positionChange_8_listener($event) {
            \u0275\u0275restoreView(_r1);
            return \u0275\u0275resetView(ctx.onPositionChange($event));
          })("detach", function NzDatePickerComponent_Template_ng_template_detach_8_listener() {
            \u0275\u0275restoreView(_r1);
            return \u0275\u0275resetView(ctx.close());
          })("overlayKeydown", function NzDatePickerComponent_Template_ng_template_overlayKeydown_8_listener($event) {
            \u0275\u0275restoreView(_r1);
            return \u0275\u0275resetView(ctx.onOverlayKeydown($event));
          });
        }
        if (rf & 2) {
          \u0275\u0275conditional(!ctx.nzInline ? 0 : 1);
          \u0275\u0275advance(8);
          \u0275\u0275property("cdkConnectedOverlayHasBackdrop", ctx.nzBackdrop)("cdkConnectedOverlayOrigin", ctx.origin)("cdkConnectedOverlayOpen", ctx.realOpenState)("cdkConnectedOverlayPositions", ctx.overlayPositions)("cdkConnectedOverlayTransformOriginOn", ".ant-picker-wrapper");
        }
      },
      dependencies: [FormsModule, DefaultValueAccessor, NgControlStatus, NgModel, NgTemplateOutlet, NzOutletModule, NzStringTemplateOutletDirective, NzIconModule, NzIconDirective, NzFormItemFeedbackIconComponent, DateRangePopupComponent, CdkConnectedOverlay, NzOverlayModule, NzConnectedOverlayDirective, NzNoAnimationDirective],
      encapsulation: 2,
      data: {
        animation: [slideMotion]
      },
      changeDetection: 0
    });
  };
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzDatePickerComponent, [{
    type: Component,
    args: [{
      encapsulation: ViewEncapsulation.None,
      changeDetection: ChangeDetectionStrategy.OnPush,
      selector: "nz-date-picker,nz-week-picker,nz-month-picker,nz-quarter-picker,nz-year-picker,nz-range-picker",
      exportAs: "nzDatePicker",
      template: `
    @if (!nzInline) {
      @if (!isRange) {
        <div class="{{ prefixCls }}-input">
          <input
            #pickerInput
            [attr.id]="nzId"
            [class.ant-input-disabled]="nzDisabled"
            [disabled]="nzDisabled"
            [readOnly]="nzInputReadOnly"
            [(ngModel)]="inputValue"
            placeholder="{{ getPlaceholder() }}"
            [size]="inputSize"
            autocomplete="off"
            (focus)="onFocus($event)"
            (focusout)="onFocusout($event)"
            (ngModelChange)="onInputChange($event)"
            (keyup.enter)="onKeyupEnter($event)"
          />
          <ng-container *ngTemplateOutlet="tplRightRest" />
        </div>
      } @else {
        <div class="{{ prefixCls }}-input">
          <ng-container *ngTemplateOutlet="tplRangeInput; context: { partType: 'left' }" />
        </div>
        <div #separatorElement class="{{ prefixCls }}-range-separator">
          <span class="{{ prefixCls }}-separator">
            <ng-container *nzStringTemplateOutlet="nzSeparator; let separator">
              @if (nzSeparator) {
                {{ nzSeparator }}
              } @else {
                <nz-icon nzType="swap-right" nzTheme="outline" />
              }
            </ng-container>
          </span>
        </div>
        <div class="{{ prefixCls }}-input">
          <ng-container *ngTemplateOutlet="tplRangeInput; context: { partType: 'right' }" />
        </div>
        <ng-container *ngTemplateOutlet="tplRightRest" />
      }
    } @else {
      <ng-template [ngTemplateOutlet]="inlineMode" />
    }
    <!-- Input for Range ONLY -->
    <ng-template #tplRangeInput let-partType="partType">
      <input
        #rangePickerInput
        [attr.id]="nzId"
        [disabled]="nzDisabled"
        [readOnly]="nzInputReadOnly"
        [size]="inputSize"
        autocomplete="off"
        (click)="onClickInputBox($event)"
        (focusout)="onFocusout($event)"
        (focus)="onFocus($event, partType)"
        (keyup.enter)="onKeyupEnter($event)"
        [(ngModel)]="inputValue[datePickerService.getActiveIndex(partType)]"
        (ngModelChange)="onInputChange($event)"
        placeholder="{{ getPlaceholder(partType) }}"
      />
    </ng-template>

    <!-- Right operator icons -->
    <ng-template #tplRightRest>
      <div class="{{ prefixCls }}-active-bar" [style]="activeBarStyle"></div>
      @if (showClear) {
        <span class="{{ prefixCls }}-clear" (click)="onClickClear($event)">
          <nz-icon nzType="close-circle" nzTheme="fill" />
        </span>
      }

      <span class="{{ prefixCls }}-suffix">
        <ng-container *nzStringTemplateOutlet="nzSuffixIcon; let suffixIcon">
          <nz-icon [nzType]="suffixIcon" />
        </ng-container>
        @if (hasFeedback && !!status) {
          <nz-form-item-feedback-icon [status]="status" />
        }
      </span>
    </ng-template>

    <ng-template #inlineMode>
      <div
        class="{{ prefixCls }}-dropdown {{ nzDropdownClassName }}"
        [class.ant-picker-dropdown-rtl]="dir === 'rtl'"
        [class.ant-picker-dropdown-placement-bottomLeft]="currentPositionY === 'bottom' && currentPositionX === 'start'"
        [class.ant-picker-dropdown-placement-topLeft]="currentPositionY === 'top' && currentPositionX === 'start'"
        [class.ant-picker-dropdown-placement-bottomRight]="currentPositionY === 'bottom' && currentPositionX === 'end'"
        [class.ant-picker-dropdown-placement-topRight]="currentPositionY === 'top' && currentPositionX === 'end'"
        [class.ant-picker-dropdown-range]="isRange"
        [class.ant-picker-active-left]="datePickerService.activeInput === 'left'"
        [class.ant-picker-active-right]="datePickerService.activeInput === 'right'"
        [style]="nzPopupStyle"
      >
        <date-range-popup
          [isRange]="isRange"
          [inline]="nzInline"
          [defaultPickerValue]="nzDefaultPickerValue"
          [showWeek]="nzShowWeekNumber || nzMode === 'week'"
          [panelMode]="panelMode"
          (panelModeChange)="onPanelModeChange($event)"
          (calendarChange)="onCalendarChange($event)"
          [locale]="nzLocale?.lang!"
          [showToday]="nzMode === 'date' && nzShowToday && !isRange && !nzShowTime"
          [showNow]="nzMode === 'date' && nzShowNow && !isRange && !!nzShowTime"
          [showTime]="nzShowTime"
          [dateRender]="nzDateRender"
          [disabledDate]="nzDisabledDate"
          [disabledTime]="nzDisabledTime"
          [extraFooter]="extraFooter"
          [ranges]="nzRanges"
          [dir]="dir"
          [format]="nzFormat"
          (resultOk)="onResultOk()"
        />
      </div>
    </ng-template>

    <!-- Overlay -->
    <ng-template
      cdkConnectedOverlay
      nzConnectedOverlay
      [cdkConnectedOverlayHasBackdrop]="nzBackdrop"
      [cdkConnectedOverlayOrigin]="origin"
      [cdkConnectedOverlayOpen]="realOpenState"
      [cdkConnectedOverlayPositions]="overlayPositions"
      [cdkConnectedOverlayTransformOriginOn]="'.ant-picker-wrapper'"
      (positionChange)="onPositionChange($event)"
      (detach)="close()"
      (overlayKeydown)="onOverlayKeydown($event)"
    >
      <div
        class="ant-picker-wrapper"
        [nzNoAnimation]="!!noAnimation?.nzNoAnimation"
        [@slideMotion]="'enter'"
        [style.position]="'relative'"
      >
        <ng-container *ngTemplateOutlet="inlineMode"></ng-container>
      </div>
    </ng-template>
  `,
      host: {
        "[class.ant-picker]": `true`,
        "[class.ant-picker-range]": `isRange`,
        "[class.ant-picker-large]": `finalSize() === 'large'`,
        "[class.ant-picker-small]": `finalSize() === 'small'`,
        "[class.ant-picker-disabled]": `nzDisabled`,
        "[class.ant-picker-rtl]": `dir === 'rtl'`,
        "[class.ant-picker-borderless]": `nzBorderless`,
        "[class.ant-picker-inline]": `nzInline`,
        "(click)": "onClickInputBox($event)"
      },
      hostDirectives: [NzSpaceCompactItemDirective],
      providers: [NzDestroyService, DatePickerService, {
        provide: NZ_SPACE_COMPACT_ITEM_TYPE,
        useValue: "picker"
      }, {
        provide: NG_VALUE_ACCESSOR,
        multi: true,
        useExisting: forwardRef(() => NzDatePickerComponent)
      }],
      animations: [slideMotion],
      imports: [FormsModule, NgTemplateOutlet, NzOutletModule, NzIconModule, NzFormItemFeedbackIconComponent, DateRangePopupComponent, CdkConnectedOverlay, NzOverlayModule, NzNoAnimationDirective]
    }]
  }], () => [{
    type: NzConfigService
  }, {
    type: DatePickerService
  }, {
    type: NzI18nService
  }, {
    type: ChangeDetectorRef
  }, {
    type: Renderer2
  }, {
    type: ElementRef
  }, {
    type: DateHelperService
  }, {
    type: NzResizeObserver
  }, {
    type: Platform
  }, {
    type: NzDestroyService
  }, {
    type: Directionality
  }], {
    nzAllowClear: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    nzAutoFocus: [{
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
    nzBorderless: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    nzInputReadOnly: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    nzInline: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    nzOpen: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    nzDisabledDate: [{
      type: Input
    }],
    nzLocale: [{
      type: Input
    }],
    nzPlaceHolder: [{
      type: Input
    }],
    nzPopupStyle: [{
      type: Input
    }],
    nzDropdownClassName: [{
      type: Input
    }],
    nzSize: [{
      type: Input
    }],
    nzStatus: [{
      type: Input
    }],
    nzFormat: [{
      type: Input
    }],
    nzDateRender: [{
      type: Input
    }],
    nzDisabledTime: [{
      type: Input
    }],
    nzRenderExtraFooter: [{
      type: Input
    }],
    nzShowToday: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    nzMode: [{
      type: Input
    }],
    nzShowNow: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    nzRanges: [{
      type: Input
    }],
    nzDefaultPickerValue: [{
      type: Input
    }],
    nzSeparator: [{
      type: Input
    }],
    nzSuffixIcon: [{
      type: Input
    }],
    nzBackdrop: [{
      type: Input
    }],
    nzId: [{
      type: Input
    }],
    nzPlacement: [{
      type: Input
    }],
    nzShowWeekNumber: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    nzOnPanelChange: [{
      type: Output
    }],
    nzOnCalendarChange: [{
      type: Output
    }],
    nzOnOk: [{
      type: Output
    }],
    nzOnOpenChange: [{
      type: Output
    }],
    nzShowTime: [{
      type: Input
    }],
    cdkConnectedOverlay: [{
      type: ViewChild,
      args: [CdkConnectedOverlay, {
        static: false
      }]
    }],
    panel: [{
      type: ViewChild,
      args: [DateRangePopupComponent, {
        static: false
      }]
    }],
    separatorElement: [{
      type: ViewChild,
      args: ["separatorElement", {
        static: false
      }]
    }],
    pickerInput: [{
      type: ViewChild,
      args: ["pickerInput", {
        static: false
      }]
    }],
    rangePickerInputs: [{
      type: ViewChildren,
      args: ["rangePickerInput"]
    }]
  });
})();
var NzMonthPickerComponent = class _NzMonthPickerComponent {
  datePicker = inject(NzDatePickerComponent, {
    host: true
  });
  constructor() {
    this.datePicker.nzMode = "month";
  }
  static \u0275fac = function NzMonthPickerComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _NzMonthPickerComponent)();
  };
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _NzMonthPickerComponent,
    selectors: [["nz-month-picker"]],
    exportAs: ["nzMonthPicker"]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzMonthPickerComponent, [{
    type: Directive,
    args: [{
      selector: "nz-month-picker",
      exportAs: "nzMonthPicker"
    }]
  }], () => [], null);
})();
var NzQuarterPickerComponent = class _NzQuarterPickerComponent {
  datePicker = inject(NzDatePickerComponent, {
    host: true
  });
  constructor() {
    this.datePicker.nzMode = "quarter";
  }
  static \u0275fac = function NzQuarterPickerComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _NzQuarterPickerComponent)();
  };
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _NzQuarterPickerComponent,
    selectors: [["nz-quarter-picker"]],
    exportAs: ["nzQuarterPicker"]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzQuarterPickerComponent, [{
    type: Directive,
    args: [{
      selector: "nz-quarter-picker",
      exportAs: "nzQuarterPicker"
    }]
  }], () => [], null);
})();
var NzRangePickerComponent = class _NzRangePickerComponent {
  datePicker = inject(NzDatePickerComponent, {
    host: true
  });
  constructor() {
    this.datePicker.isRange = true;
  }
  static \u0275fac = function NzRangePickerComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _NzRangePickerComponent)();
  };
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _NzRangePickerComponent,
    selectors: [["nz-range-picker"]],
    exportAs: ["nzRangePicker"]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzRangePickerComponent, [{
    type: Directive,
    args: [{
      selector: "nz-range-picker",
      exportAs: "nzRangePicker"
    }]
  }], () => [], null);
})();
var NzWeekPickerComponent = class _NzWeekPickerComponent {
  datePicker = inject(NzDatePickerComponent, {
    host: true
  });
  constructor() {
    this.datePicker.nzMode = "week";
  }
  static \u0275fac = function NzWeekPickerComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _NzWeekPickerComponent)();
  };
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _NzWeekPickerComponent,
    selectors: [["nz-week-picker"]],
    exportAs: ["nzWeekPicker"]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzWeekPickerComponent, [{
    type: Directive,
    args: [{
      selector: "nz-week-picker",
      exportAs: "nzWeekPicker"
    }]
  }], () => [], null);
})();
var NzYearPickerComponent = class _NzYearPickerComponent {
  datePicker = inject(NzDatePickerComponent, {
    host: true
  });
  constructor() {
    this.datePicker.nzMode = "year";
  }
  static \u0275fac = function NzYearPickerComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _NzYearPickerComponent)();
  };
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _NzYearPickerComponent,
    selectors: [["nz-year-picker"]],
    exportAs: ["nzYearPicker"]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzYearPickerComponent, [{
    type: Directive,
    args: [{
      selector: "nz-year-picker",
      exportAs: "nzYearPicker"
    }]
  }], () => [], null);
})();
var NzDatePickerModule = class _NzDatePickerModule {
  static \u0275fac = function NzDatePickerModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _NzDatePickerModule)();
  };
  static \u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
    type: _NzDatePickerModule
  });
  static \u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({
    imports: [NzDatePickerComponent, CalendarFooterComponent, InnerPopupComponent, DateRangePopupComponent]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzDatePickerModule, [{
    type: NgModule,
    args: [{
      imports: [NzDatePickerComponent, NzMonthPickerComponent, NzYearPickerComponent, NzWeekPickerComponent, NzRangePickerComponent, CalendarFooterComponent, InnerPopupComponent, DateRangePopupComponent, NzQuarterPickerComponent],
      exports: [NzDatePickerComponent, NzRangePickerComponent, NzMonthPickerComponent, NzYearPickerComponent, NzWeekPickerComponent, NzQuarterPickerComponent]
    }]
  }], null, null);
})();

// node_modules/ng-zorro-antd/fesm2022/ng-zorro-antd-empty.mjs
function NzEmptyComponent_Conditional_1_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275element(1, "img", 4);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("src", ctx_r0.nzNotFoundImage, \u0275\u0275sanitizeUrl)("alt", ctx_r0.isContentString ? ctx_r0.nzNotFoundContent : "empty");
  }
}
function NzEmptyComponent_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, NzEmptyComponent_Conditional_1_ng_container_0_Template, 2, 2, "ng-container", 3);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("nzStringTemplateOutlet", ctx_r0.nzNotFoundImage);
  }
}
function NzEmptyComponent_Conditional_2_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "nz-empty-simple");
  }
}
function NzEmptyComponent_Conditional_2_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "nz-empty-default");
  }
}
function NzEmptyComponent_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, NzEmptyComponent_Conditional_2_Conditional_0_Template, 1, 0, "nz-empty-simple")(1, NzEmptyComponent_Conditional_2_Conditional_1_Template, 1, 0, "nz-empty-default");
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275conditional(ctx_r0.nzNotFoundImage === "simple" ? 0 : 1);
  }
}
function NzEmptyComponent_Conditional_3_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275text(1);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.isContentString ? ctx_r0.nzNotFoundContent : ctx_r0.locale["description"], " ");
  }
}
function NzEmptyComponent_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 1);
    \u0275\u0275template(1, NzEmptyComponent_Conditional_3_ng_container_1_Template, 2, 1, "ng-container", 3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("nzStringTemplateOutlet", ctx_r0.nzNotFoundContent);
  }
}
function NzEmptyComponent_Conditional_4_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275text(1);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.nzNotFoundFooter, " ");
  }
}
function NzEmptyComponent_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 2);
    \u0275\u0275template(1, NzEmptyComponent_Conditional_4_ng_container_1_Template, 2, 1, "ng-container", 3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("nzStringTemplateOutlet", ctx_r0.nzNotFoundFooter);
  }
}
function NzEmbedEmptyComponent_Conditional_0_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275textInterpolate1(" ", ctx_r0.content, " ");
  }
}
function NzEmbedEmptyComponent_Conditional_0_Conditional_1_ng_template_0_Template(rf, ctx) {
}
function NzEmbedEmptyComponent_Conditional_0_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, NzEmbedEmptyComponent_Conditional_0_Conditional_1_ng_template_0_Template, 0, 0, "ng-template", 0);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275property("cdkPortalOutlet", ctx_r0.contentPortal);
  }
}
function NzEmbedEmptyComponent_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, NzEmbedEmptyComponent_Conditional_0_Conditional_0_Template, 1, 1)(1, NzEmbedEmptyComponent_Conditional_0_Conditional_1_Template, 1, 1, null, 0);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275conditional(ctx_r0.contentType === "string" ? 0 : 1);
  }
}
function NzEmbedEmptyComponent_Conditional_1_Conditional_0_Case_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "nz-empty", 1);
  }
}
function NzEmbedEmptyComponent_Conditional_1_Conditional_0_Case_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "nz-empty", 2);
  }
}
function NzEmbedEmptyComponent_Conditional_1_Conditional_0_Case_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "nz-empty");
  }
}
function NzEmbedEmptyComponent_Conditional_1_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, NzEmbedEmptyComponent_Conditional_1_Conditional_0_Case_0_Template, 1, 0, "nz-empty", 1)(1, NzEmbedEmptyComponent_Conditional_1_Conditional_0_Case_1_Template, 1, 0, "nz-empty", 2)(2, NzEmbedEmptyComponent_Conditional_1_Conditional_0_Case_2_Template, 1, 0, "nz-empty");
  }
  if (rf & 2) {
    let tmp_2_0;
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275conditional((tmp_2_0 = ctx_r0.size) === "normal" ? 0 : tmp_2_0 === "small" ? 1 : 2);
  }
}
function NzEmbedEmptyComponent_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, NzEmbedEmptyComponent_Conditional_1_Conditional_0_Template, 3, 1);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275conditional(ctx_r0.specificContent !== null ? 0 : -1);
  }
}
var NZ_EMPTY_COMPONENT_NAME = new InjectionToken("nz-empty-component-name");
var NzEmptyDefaultComponent = class _NzEmptyDefaultComponent {
  static \u0275fac = function NzEmptyDefaultComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _NzEmptyDefaultComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _NzEmptyDefaultComponent,
    selectors: [["nz-empty-default"]],
    exportAs: ["nzEmptyDefault"],
    decls: 12,
    vars: 0,
    consts: [["width", "184", "height", "152", "viewBox", "0 0 184 152", "xmlns", "http://www.w3.org/2000/svg", 1, "ant-empty-img-default"], ["fill", "none", "fill-rule", "evenodd"], ["transform", "translate(24 31.67)"], ["cx", "67.797", "cy", "106.89", "rx", "67.797", "ry", "12.668", 1, "ant-empty-img-default-ellipse"], ["d", "M122.034 69.674L98.109 40.229c-1.148-1.386-2.826-2.225-4.593-2.225h-51.44c-1.766 0-3.444.839-4.592 2.225L13.56 69.674v15.383h108.475V69.674z", 1, "ant-empty-img-default-path-1"], ["d", "M101.537 86.214L80.63 61.102c-1.001-1.207-2.507-1.867-4.048-1.867H31.724c-1.54 0-3.047.66-4.048 1.867L6.769 86.214v13.792h94.768V86.214z", "transform", "translate(13.56)", 1, "ant-empty-img-default-path-2"], ["d", "M33.83 0h67.933a4 4 0 0 1 4 4v93.344a4 4 0 0 1-4 4H33.83a4 4 0 0 1-4-4V4a4 4 0 0 1 4-4z", 1, "ant-empty-img-default-path-3"], ["d", "M42.678 9.953h50.237a2 2 0 0 1 2 2V36.91a2 2 0 0 1-2 2H42.678a2 2 0 0 1-2-2V11.953a2 2 0 0 1 2-2zM42.94 49.767h49.713a2.262 2.262 0 1 1 0 4.524H42.94a2.262 2.262 0 0 1 0-4.524zM42.94 61.53h49.713a2.262 2.262 0 1 1 0 4.525H42.94a2.262 2.262 0 0 1 0-4.525zM121.813 105.032c-.775 3.071-3.497 5.36-6.735 5.36H20.515c-3.238 0-5.96-2.29-6.734-5.36a7.309 7.309 0 0 1-.222-1.79V69.675h26.318c2.907 0 5.25 2.448 5.25 5.42v.04c0 2.971 2.37 5.37 5.277 5.37h34.785c2.907 0 5.277-2.421 5.277-5.393V75.1c0-2.972 2.343-5.426 5.25-5.426h26.318v33.569c0 .617-.077 1.216-.221 1.789z", 1, "ant-empty-img-default-path-4"], ["d", "M149.121 33.292l-6.83 2.65a1 1 0 0 1-1.317-1.23l1.937-6.207c-2.589-2.944-4.109-6.534-4.109-10.408C138.802 8.102 148.92 0 161.402 0 173.881 0 184 8.102 184 18.097c0 9.995-10.118 18.097-22.599 18.097-4.528 0-8.744-1.066-12.28-2.902z", 1, "ant-empty-img-default-path-5"], ["transform", "translate(149.65 15.383)", 1, "ant-empty-img-default-g"], ["cx", "20.654", "cy", "3.167", "rx", "2.849", "ry", "2.815"], ["d", "M5.698 5.63H0L2.898.704zM9.259.704h4.985V5.63H9.259z"]],
    template: function NzEmptyDefaultComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275namespaceSVG();
        \u0275\u0275elementStart(0, "svg", 0)(1, "g", 1)(2, "g", 2);
        \u0275\u0275element(3, "ellipse", 3)(4, "path", 4)(5, "path", 5)(6, "path", 6)(7, "path", 7);
        \u0275\u0275elementEnd();
        \u0275\u0275element(8, "path", 8);
        \u0275\u0275elementStart(9, "g", 9);
        \u0275\u0275element(10, "ellipse", 10)(11, "path", 11);
        \u0275\u0275elementEnd()()();
      }
    },
    encapsulation: 2,
    changeDetection: 0
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzEmptyDefaultComponent, [{
    type: Component,
    args: [{
      changeDetection: ChangeDetectionStrategy.OnPush,
      encapsulation: ViewEncapsulation.None,
      selector: "nz-empty-default",
      exportAs: "nzEmptyDefault",
      template: `
    <svg
      class="ant-empty-img-default"
      width="184"
      height="152"
      viewBox="0 0 184 152"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g fill="none" fill-rule="evenodd">
        <g transform="translate(24 31.67)">
          <ellipse class="ant-empty-img-default-ellipse" cx="67.797" cy="106.89" rx="67.797" ry="12.668" />
          <path
            class="ant-empty-img-default-path-1"
            d="M122.034 69.674L98.109 40.229c-1.148-1.386-2.826-2.225-4.593-2.225h-51.44c-1.766 0-3.444.839-4.592 2.225L13.56 69.674v15.383h108.475V69.674z"
          />
          <path
            class="ant-empty-img-default-path-2"
            d="M101.537 86.214L80.63 61.102c-1.001-1.207-2.507-1.867-4.048-1.867H31.724c-1.54 0-3.047.66-4.048 1.867L6.769 86.214v13.792h94.768V86.214z"
            transform="translate(13.56)"
          />
          <path
            class="ant-empty-img-default-path-3"
            d="M33.83 0h67.933a4 4 0 0 1 4 4v93.344a4 4 0 0 1-4 4H33.83a4 4 0 0 1-4-4V4a4 4 0 0 1 4-4z"
          />
          <path
            class="ant-empty-img-default-path-4"
            d="M42.678 9.953h50.237a2 2 0 0 1 2 2V36.91a2 2 0 0 1-2 2H42.678a2 2 0 0 1-2-2V11.953a2 2 0 0 1 2-2zM42.94 49.767h49.713a2.262 2.262 0 1 1 0 4.524H42.94a2.262 2.262 0 0 1 0-4.524zM42.94 61.53h49.713a2.262 2.262 0 1 1 0 4.525H42.94a2.262 2.262 0 0 1 0-4.525zM121.813 105.032c-.775 3.071-3.497 5.36-6.735 5.36H20.515c-3.238 0-5.96-2.29-6.734-5.36a7.309 7.309 0 0 1-.222-1.79V69.675h26.318c2.907 0 5.25 2.448 5.25 5.42v.04c0 2.971 2.37 5.37 5.277 5.37h34.785c2.907 0 5.277-2.421 5.277-5.393V75.1c0-2.972 2.343-5.426 5.25-5.426h26.318v33.569c0 .617-.077 1.216-.221 1.789z"
          />
        </g>
        <path
          class="ant-empty-img-default-path-5"
          d="M149.121 33.292l-6.83 2.65a1 1 0 0 1-1.317-1.23l1.937-6.207c-2.589-2.944-4.109-6.534-4.109-10.408C138.802 8.102 148.92 0 161.402 0 173.881 0 184 8.102 184 18.097c0 9.995-10.118 18.097-22.599 18.097-4.528 0-8.744-1.066-12.28-2.902z"
        />
        <g class="ant-empty-img-default-g" transform="translate(149.65 15.383)">
          <ellipse cx="20.654" cy="3.167" rx="2.849" ry="2.815" />
          <path d="M5.698 5.63H0L2.898.704zM9.259.704h4.985V5.63H9.259z" />
        </g>
      </g>
    </svg>
  `
    }]
  }], null, null);
})();
var NzEmptySimpleComponent = class _NzEmptySimpleComponent {
  static \u0275fac = function NzEmptySimpleComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _NzEmptySimpleComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _NzEmptySimpleComponent,
    selectors: [["nz-empty-simple"]],
    exportAs: ["nzEmptySimple"],
    decls: 6,
    vars: 0,
    consts: [["width", "64", "height", "41", "viewBox", "0 0 64 41", "xmlns", "http://www.w3.org/2000/svg", 1, "ant-empty-img-simple"], ["transform", "translate(0 1)", "fill", "none", "fill-rule", "evenodd"], ["cx", "32", "cy", "33", "rx", "32", "ry", "7", 1, "ant-empty-img-simple-ellipse"], ["fill-rule", "nonzero", 1, "ant-empty-img-simple-g"], ["d", "M55 12.76L44.854 1.258C44.367.474 43.656 0 42.907 0H21.093c-.749 0-1.46.474-1.947 1.257L9 12.761V22h46v-9.24z"], ["d", "M41.613 15.931c0-1.605.994-2.93 2.227-2.931H55v18.137C55 33.26 53.68 35 52.05 35h-40.1C10.32 35 9 33.259 9 31.137V13h11.16c1.233 0 2.227 1.323 2.227 2.928v.022c0 1.605 1.005 2.901 2.237 2.901h14.752c1.232 0 2.237-1.308 2.237-2.913v-.007z", 1, "ant-empty-img-simple-path"]],
    template: function NzEmptySimpleComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275namespaceSVG();
        \u0275\u0275elementStart(0, "svg", 0)(1, "g", 1);
        \u0275\u0275element(2, "ellipse", 2);
        \u0275\u0275elementStart(3, "g", 3);
        \u0275\u0275element(4, "path", 4)(5, "path", 5);
        \u0275\u0275elementEnd()()();
      }
    },
    encapsulation: 2,
    changeDetection: 0
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzEmptySimpleComponent, [{
    type: Component,
    args: [{
      changeDetection: ChangeDetectionStrategy.OnPush,
      encapsulation: ViewEncapsulation.None,
      selector: "nz-empty-simple",
      exportAs: "nzEmptySimple",
      template: `
    <svg class="ant-empty-img-simple" width="64" height="41" viewBox="0 0 64 41" xmlns="http://www.w3.org/2000/svg">
      <g transform="translate(0 1)" fill="none" fill-rule="evenodd">
        <ellipse class="ant-empty-img-simple-ellipse" cx="32" cy="33" rx="32" ry="7" />
        <g class="ant-empty-img-simple-g" fill-rule="nonzero">
          <path
            d="M55 12.76L44.854 1.258C44.367.474 43.656 0 42.907 0H21.093c-.749 0-1.46.474-1.947 1.257L9 12.761V22h46v-9.24z"
          />
          <path
            d="M41.613 15.931c0-1.605.994-2.93 2.227-2.931H55v18.137C55 33.26 53.68 35 52.05 35h-40.1C10.32 35 9 33.259 9 31.137V13h11.16c1.233 0 2.227 1.323 2.227 2.928v.022c0 1.605 1.005 2.901 2.237 2.901h14.752c1.232 0 2.237-1.308 2.237-2.913v-.007z"
            class="ant-empty-img-simple-path"
          />
        </g>
      </g>
    </svg>
  `
    }]
  }], null, null);
})();
var NzEmptyDefaultImages = ["default", "simple"];
var NzEmptyComponent = class _NzEmptyComponent {
  i18n;
  cdr;
  nzNotFoundImage = "default";
  nzNotFoundContent;
  nzNotFoundFooter;
  isContentString = false;
  isImageBuildIn = true;
  locale;
  destroy$ = new Subject();
  constructor(i18n, cdr) {
    this.i18n = i18n;
    this.cdr = cdr;
  }
  ngOnChanges(changes) {
    const {
      nzNotFoundContent,
      nzNotFoundImage
    } = changes;
    if (nzNotFoundContent) {
      const content = nzNotFoundContent.currentValue;
      this.isContentString = typeof content === "string";
    }
    if (nzNotFoundImage) {
      const image = nzNotFoundImage.currentValue || "default";
      this.isImageBuildIn = NzEmptyDefaultImages.findIndex((i) => i === image) > -1;
    }
  }
  ngOnInit() {
    this.i18n.localeChange.pipe(takeUntil(this.destroy$)).subscribe(() => {
      this.locale = this.i18n.getLocaleData("Empty");
      this.cdr.markForCheck();
    });
  }
  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }
  static \u0275fac = function NzEmptyComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _NzEmptyComponent)(\u0275\u0275directiveInject(NzI18nService), \u0275\u0275directiveInject(ChangeDetectorRef));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _NzEmptyComponent,
    selectors: [["nz-empty"]],
    hostAttrs: [1, "ant-empty"],
    inputs: {
      nzNotFoundImage: "nzNotFoundImage",
      nzNotFoundContent: "nzNotFoundContent",
      nzNotFoundFooter: "nzNotFoundFooter"
    },
    exportAs: ["nzEmpty"],
    features: [\u0275\u0275NgOnChangesFeature],
    decls: 5,
    vars: 3,
    consts: [[1, "ant-empty-image"], [1, "ant-empty-description"], [1, "ant-empty-footer"], [4, "nzStringTemplateOutlet"], [3, "src", "alt"]],
    template: function NzEmptyComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0);
        \u0275\u0275template(1, NzEmptyComponent_Conditional_1_Template, 1, 1, "ng-container")(2, NzEmptyComponent_Conditional_2_Template, 2, 1);
        \u0275\u0275elementEnd();
        \u0275\u0275template(3, NzEmptyComponent_Conditional_3_Template, 2, 1, "p", 1)(4, NzEmptyComponent_Conditional_4_Template, 2, 1, "div", 2);
      }
      if (rf & 2) {
        \u0275\u0275advance();
        \u0275\u0275conditional(!ctx.isImageBuildIn ? 1 : 2);
        \u0275\u0275advance(2);
        \u0275\u0275conditional(ctx.nzNotFoundContent !== null ? 3 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.nzNotFoundFooter ? 4 : -1);
      }
    },
    dependencies: [NzOutletModule, NzStringTemplateOutletDirective, NzEmptyDefaultComponent, NzEmptySimpleComponent],
    encapsulation: 2,
    changeDetection: 0
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzEmptyComponent, [{
    type: Component,
    args: [{
      changeDetection: ChangeDetectionStrategy.OnPush,
      encapsulation: ViewEncapsulation.None,
      selector: "nz-empty",
      exportAs: "nzEmpty",
      template: `
    <div class="ant-empty-image">
      @if (!isImageBuildIn) {
        <ng-container *nzStringTemplateOutlet="nzNotFoundImage">
          <img [src]="nzNotFoundImage" [alt]="isContentString ? nzNotFoundContent : 'empty'" />
        </ng-container>
      } @else {
        @if (nzNotFoundImage === 'simple') {
          <nz-empty-simple />
        } @else {
          <nz-empty-default />
        }
      }
    </div>
    @if (nzNotFoundContent !== null) {
      <p class="ant-empty-description">
        <ng-container *nzStringTemplateOutlet="nzNotFoundContent">
          {{ isContentString ? nzNotFoundContent : locale['description'] }}
        </ng-container>
      </p>
    }

    @if (nzNotFoundFooter) {
      <div class="ant-empty-footer">
        <ng-container *nzStringTemplateOutlet="nzNotFoundFooter">
          {{ nzNotFoundFooter }}
        </ng-container>
      </div>
    }
  `,
      host: {
        class: "ant-empty"
      },
      imports: [NzOutletModule, NzEmptyDefaultComponent, NzEmptySimpleComponent]
    }]
  }], () => [{
    type: NzI18nService
  }, {
    type: ChangeDetectorRef
  }], {
    nzNotFoundImage: [{
      type: Input
    }],
    nzNotFoundContent: [{
      type: Input
    }],
    nzNotFoundFooter: [{
      type: Input
    }]
  });
})();
function getEmptySize(componentName) {
  switch (componentName) {
    case "table":
    case "list":
      return "normal";
    case "select":
    case "tree-select":
    case "cascader":
    case "transfer":
      return "small";
    default:
      return "";
  }
}
var NzEmbedEmptyComponent = class _NzEmbedEmptyComponent {
  configService;
  viewContainerRef;
  cdr;
  injector;
  nzComponentName;
  specificContent;
  content;
  contentType = "string";
  contentPortal;
  size = "";
  destroy$ = new Subject();
  constructor(configService, viewContainerRef, cdr, injector) {
    this.configService = configService;
    this.viewContainerRef = viewContainerRef;
    this.cdr = cdr;
    this.injector = injector;
  }
  ngOnChanges(changes) {
    if (changes.nzComponentName) {
      this.size = getEmptySize(changes.nzComponentName.currentValue);
    }
    if (changes.specificContent && !changes.specificContent.isFirstChange()) {
      this.content = changes.specificContent.currentValue;
      this.renderEmpty();
    }
  }
  ngOnInit() {
    this.subscribeDefaultEmptyContentChange();
  }
  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }
  renderEmpty() {
    const content = this.content;
    if (typeof content === "string") {
      this.contentType = "string";
    } else if (content instanceof TemplateRef) {
      const context = {
        $implicit: this.nzComponentName
      };
      this.contentType = "template";
      this.contentPortal = new TemplatePortal(content, this.viewContainerRef, context);
    } else if (content instanceof Type) {
      const injector = Injector.create({
        parent: this.injector,
        providers: [{
          provide: NZ_EMPTY_COMPONENT_NAME,
          useValue: this.nzComponentName
        }]
      });
      this.contentType = "component";
      this.contentPortal = new ComponentPortal(content, this.viewContainerRef, injector);
    } else {
      this.contentType = "string";
      this.contentPortal = void 0;
    }
    this.cdr.detectChanges();
  }
  subscribeDefaultEmptyContentChange() {
    this.configService.getConfigChangeEventForComponent("empty").pipe(startWith(true), takeUntil(this.destroy$)).subscribe(() => {
      this.content = this.specificContent || this.getUserDefaultEmptyContent();
      this.renderEmpty();
    });
  }
  getUserDefaultEmptyContent() {
    return (this.configService.getConfigForComponent("empty") || {}).nzDefaultEmptyContent;
  }
  static \u0275fac = function NzEmbedEmptyComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _NzEmbedEmptyComponent)(\u0275\u0275directiveInject(NzConfigService), \u0275\u0275directiveInject(ViewContainerRef), \u0275\u0275directiveInject(ChangeDetectorRef), \u0275\u0275directiveInject(Injector));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _NzEmbedEmptyComponent,
    selectors: [["nz-embed-empty"]],
    inputs: {
      nzComponentName: "nzComponentName",
      specificContent: "specificContent"
    },
    exportAs: ["nzEmbedEmpty"],
    features: [\u0275\u0275NgOnChangesFeature],
    decls: 2,
    vars: 1,
    consts: [[3, "cdkPortalOutlet"], ["nzNotFoundImage", "simple", 1, "ant-empty-normal"], ["nzNotFoundImage", "simple", 1, "ant-empty-small"]],
    template: function NzEmbedEmptyComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275template(0, NzEmbedEmptyComponent_Conditional_0_Template, 2, 1)(1, NzEmbedEmptyComponent_Conditional_1_Template, 1, 1);
      }
      if (rf & 2) {
        \u0275\u0275conditional(ctx.content ? 0 : 1);
      }
    },
    dependencies: [NzEmptyComponent, PortalModule, CdkPortalOutlet],
    encapsulation: 2,
    changeDetection: 0
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzEmbedEmptyComponent, [{
    type: Component,
    args: [{
      changeDetection: ChangeDetectionStrategy.OnPush,
      encapsulation: ViewEncapsulation.None,
      selector: "nz-embed-empty",
      exportAs: "nzEmbedEmpty",
      template: `
    @if (content) {
      @if (contentType === 'string') {
        {{ content }}
      } @else {
        <ng-template [cdkPortalOutlet]="contentPortal" />
      }
    } @else {
      @if (specificContent !== null) {
        @switch (size) {
          @case ('normal') {
            <nz-empty class="ant-empty-normal" nzNotFoundImage="simple" />
          }
          @case ('small') {
            <nz-empty class="ant-empty-small" nzNotFoundImage="simple" />
          }
          @default {
            <nz-empty />
          }
        }
      }
    }
  `,
      imports: [NzEmptyComponent, PortalModule]
    }]
  }], () => [{
    type: NzConfigService
  }, {
    type: ViewContainerRef
  }, {
    type: ChangeDetectorRef
  }, {
    type: Injector
  }], {
    nzComponentName: [{
      type: Input
    }],
    specificContent: [{
      type: Input
    }]
  });
})();
var NzEmptyModule = class _NzEmptyModule {
  static \u0275fac = function NzEmptyModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _NzEmptyModule)();
  };
  static \u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
    type: _NzEmptyModule
  });
  static \u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({
    imports: [NzEmptyComponent, NzEmbedEmptyComponent]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzEmptyModule, [{
    type: NgModule,
    args: [{
      imports: [NzEmptyComponent, NzEmbedEmptyComponent, NzEmptyDefaultComponent, NzEmptySimpleComponent],
      exports: [NzEmptyComponent, NzEmbedEmptyComponent]
    }]
  }], null, null);
})();

// node_modules/ng-zorro-antd/fesm2022/ng-zorro-antd-select.mjs
var _c04 = ["*"];
function NzOptionItemGroupComponent_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275text(1);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.nzLabel);
  }
}
function NzOptionItemComponent_Conditional_1_ng_template_0_Template(rf, ctx) {
}
function NzOptionItemComponent_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, NzOptionItemComponent_Conditional_1_ng_template_0_Template, 0, 0, "ng-template", 1);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("ngTemplateOutlet", ctx_r0.template);
  }
}
function NzOptionItemComponent_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275textInterpolate1(" ", ctx_r0.label, " ");
  }
}
function NzOptionItemComponent_Conditional_3_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "nz-icon", 3);
  }
}
function NzOptionItemComponent_Conditional_3_Conditional_2_ng_template_0_Template(rf, ctx) {
}
function NzOptionItemComponent_Conditional_3_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, NzOptionItemComponent_Conditional_3_Conditional_2_ng_template_0_Template, 0, 0, "ng-template", 1);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275property("ngTemplateOutlet", ctx_r0.icon);
  }
}
function NzOptionItemComponent_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 2);
    \u0275\u0275template(1, NzOptionItemComponent_Conditional_3_Conditional_1_Template, 1, 0, "nz-icon", 3)(2, NzOptionItemComponent_Conditional_3_Conditional_2_Template, 1, 1, null, 1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275conditional(!ctx_r0.icon ? 1 : 2);
  }
}
function NzOptionContainerComponent_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 0);
    \u0275\u0275element(1, "nz-embed-empty", 4);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("specificContent", ctx_r0.notFoundContent);
  }
}
function NzOptionContainerComponent_ng_template_3_Case_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "nz-option-item-group", 5);
  }
  if (rf & 2) {
    let tmp_3_0;
    const item_r2 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275property("nzLabel", (tmp_3_0 = item_r2.groupLabel) !== null && tmp_3_0 !== void 0 ? tmp_3_0 : null);
  }
}
function NzOptionContainerComponent_ng_template_3_Case_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "nz-option-item", 7);
    \u0275\u0275listener("itemHover", function NzOptionContainerComponent_ng_template_3_Case_1_Template_nz_option_item_itemHover_0_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.onItemHover($event));
    })("itemClick", function NzOptionContainerComponent_ng_template_3_Case_1_Template_nz_option_item_itemClick_0_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.onItemClick($event));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_5_0;
    const item_r2 = \u0275\u0275nextContext().$implicit;
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("icon", ctx_r0.menuItemSelectedIcon)("customContent", item_r2.nzCustomContent)("template", (tmp_5_0 = item_r2.template) !== null && tmp_5_0 !== void 0 ? tmp_5_0 : null)("grouped", !!item_r2.groupLabel)("disabled", item_r2.nzDisabled || ctx_r0.isMaxMultipleCountReached && !ctx_r0.listOfSelectedValue.includes(item_r2["nzValue"]))("showState", ctx_r0.mode === "tags" || ctx_r0.mode === "multiple")("title", item_r2.nzTitle)("label", item_r2.nzLabel)("compareWith", ctx_r0.compareWith)("activatedValue", ctx_r0.activatedValue)("listOfSelectedValue", ctx_r0.listOfSelectedValue)("value", item_r2.nzValue);
  }
}
function NzOptionContainerComponent_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, NzOptionContainerComponent_ng_template_3_Case_0_Template, 1, 1, "nz-option-item-group", 5)(1, NzOptionContainerComponent_ng_template_3_Case_1_Template, 1, 12, "nz-option-item", 6);
  }
  if (rf & 2) {
    let tmp_2_0;
    const item_r2 = ctx.$implicit;
    \u0275\u0275conditional((tmp_2_0 = item_r2.type) === "group" ? 0 : tmp_2_0 === "item" ? 1 : -1);
  }
}
function NzOptionContainerComponent_ng_template_4_Template(rf, ctx) {
}
function NzOptionComponent_ng_template_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275projection(0);
  }
}
function NzSelectArrowComponent_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2("", ctx_r0.listOfValue.length, " / ", ctx_r0.nzMaxMultipleCount, "");
  }
}
function NzSelectArrowComponent_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "nz-icon", 0);
  }
}
function NzSelectArrowComponent_Conditional_2_Conditional_0_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "nz-icon", 2);
  }
}
function NzSelectArrowComponent_Conditional_2_Conditional_0_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "nz-icon", 3);
  }
}
function NzSelectArrowComponent_Conditional_2_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, NzSelectArrowComponent_Conditional_2_Conditional_0_Conditional_0_Template, 1, 0, "nz-icon", 2)(1, NzSelectArrowComponent_Conditional_2_Conditional_0_Conditional_1_Template, 1, 0, "nz-icon", 3);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275conditional(ctx_r0.search ? 0 : 1);
  }
}
function NzSelectArrowComponent_Conditional_2_Conditional_1_ng_container_0_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "nz-icon", 4);
  }
  if (rf & 2) {
    const suffixIcon_r2 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275property("nzType", suffixIcon_r2);
  }
}
function NzSelectArrowComponent_Conditional_2_Conditional_1_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, NzSelectArrowComponent_Conditional_2_Conditional_1_ng_container_0_Conditional_1_Template, 1, 1, "nz-icon", 4);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const suffixIcon_r2 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275conditional(suffixIcon_r2 ? 1 : -1);
  }
}
function NzSelectArrowComponent_Conditional_2_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, NzSelectArrowComponent_Conditional_2_Conditional_1_ng_container_0_Template, 2, 1, "ng-container", 1);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275property("nzStringTemplateOutlet", ctx_r0.suffixIcon);
  }
}
function NzSelectArrowComponent_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, NzSelectArrowComponent_Conditional_2_Conditional_0_Template, 2, 1)(1, NzSelectArrowComponent_Conditional_2_Conditional_1_Template, 1, 1, "ng-container");
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275conditional(ctx_r0.showArrow && !ctx_r0.suffixIcon ? 0 : 1);
  }
}
function NzSelectArrowComponent_ng_container_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275text(1);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.feedbackIcon);
  }
}
function NzSelectClearComponent_Conditional_0_ng_template_0_Template(rf, ctx) {
}
function NzSelectClearComponent_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, NzSelectClearComponent_Conditional_0_ng_template_0_Template, 0, 0, "ng-template", 0);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("ngTemplateOutlet", ctx_r0.clearIcon);
  }
}
function NzSelectClearComponent_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "nz-icon", 1);
  }
}
function NzSelectItemComponent_ng_container_0_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 2);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.label);
  }
}
function NzSelectItemComponent_ng_container_0_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275textInterpolate1(" ", ctx_r0.label, " ");
  }
}
function NzSelectItemComponent_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, NzSelectItemComponent_ng_container_0_Conditional_1_Template, 2, 1, "div", 2)(2, NzSelectItemComponent_ng_container_0_Conditional_2_Template, 1, 1);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.deletable ? 1 : 2);
  }
}
function NzSelectItemComponent_Conditional_1_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "nz-icon", 4);
  }
}
function NzSelectItemComponent_Conditional_1_Conditional_2_ng_template_0_Template(rf, ctx) {
}
function NzSelectItemComponent_Conditional_1_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, NzSelectItemComponent_Conditional_1_Conditional_2_ng_template_0_Template, 0, 0, "ng-template", 5);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275property("ngTemplateOutlet", ctx_r0.removeIcon);
  }
}
function NzSelectItemComponent_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "span", 3);
    \u0275\u0275listener("click", function NzSelectItemComponent_Conditional_1_Template_span_click_0_listener($event) {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.onDelete($event));
    });
    \u0275\u0275template(1, NzSelectItemComponent_Conditional_1_Conditional_1_Template, 1, 0, "nz-icon", 4)(2, NzSelectItemComponent_Conditional_1_Conditional_2_Template, 1, 1, null, 5);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275conditional(!ctx_r0.removeIcon ? 1 : 2);
  }
}
function NzSelectPlaceholderComponent_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275text(1);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.placeholder, " ");
  }
}
var _c13 = ["inputElement"];
var _c23 = ["mirrorElement"];
function NzSelectSearchComponent_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 3, 1);
  }
}
var _forTrack02 = ($index, $item) => $item.nzValue;
function NzSelectTopControlComponent_Case_0_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "nz-select-item", 2);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("deletable", false)("disabled", false)("removeIcon", ctx_r1.removeIcon)("label", ctx_r1.listOfTopItem[0].nzLabel)("contentTemplateOutlet", ctx_r1.customTemplate)("contentTemplateOutletContext", ctx_r1.listOfTopItem[0]);
  }
}
function NzSelectTopControlComponent_Case_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "nz-select-search", 1);
    \u0275\u0275listener("isComposingChange", function NzSelectTopControlComponent_Case_0_Template_nz_select_search_isComposingChange_0_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.isComposingChange($event));
    })("valueChange", function NzSelectTopControlComponent_Case_0_Template_nz_select_search_valueChange_0_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onInputValueChange($event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275template(1, NzSelectTopControlComponent_Case_0_Conditional_1_Template, 1, 6, "nz-select-item", 2);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("nzId", ctx_r1.nzId)("disabled", ctx_r1.disabled)("value", ctx_r1.inputValue)("showInput", ctx_r1.showSearch)("mirrorSync", false)("autofocus", ctx_r1.autofocus)("focusTrigger", ctx_r1.open);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.isShowSingleLabel ? 1 : -1);
  }
}
function NzSelectTopControlComponent_Case_1_For_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "nz-select-item", 5);
    \u0275\u0275listener("delete", function NzSelectTopControlComponent_Case_1_For_1_Template_nz_select_item_delete_0_listener() {
      const item_r5 = \u0275\u0275restoreView(_r4).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.onDeleteItem(item_r5.contentTemplateOutletContext));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const item_r5 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("removeIcon", ctx_r1.removeIcon)("label", item_r5.nzLabel)("disabled", item_r5.nzDisabled || ctx_r1.disabled)("contentTemplateOutlet", item_r5.contentTemplateOutlet)("deletable", true)("contentTemplateOutletContext", item_r5.contentTemplateOutletContext);
  }
}
function NzSelectTopControlComponent_Case_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275repeaterCreate(0, NzSelectTopControlComponent_Case_1_For_1_Template, 1, 6, "nz-select-item", 3, _forTrack02);
    \u0275\u0275elementStart(2, "nz-select-search", 4);
    \u0275\u0275listener("isComposingChange", function NzSelectTopControlComponent_Case_1_Template_nz_select_search_isComposingChange_2_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.isComposingChange($event));
    })("valueChange", function NzSelectTopControlComponent_Case_1_Template_nz_select_search_valueChange_2_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onInputValueChange($event));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275repeater(ctx_r1.listOfSlicedItem);
    \u0275\u0275advance(2);
    \u0275\u0275property("nzId", ctx_r1.nzId)("disabled", ctx_r1.disabled)("value", ctx_r1.inputValue)("autofocus", ctx_r1.autofocus)("showInput", true)("mirrorSync", true)("focusTrigger", ctx_r1.open);
  }
}
function NzSelectTopControlComponent_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "nz-select-placeholder", 0);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("placeholder", ctx_r1.placeHolder);
  }
}
function NzSelectComponent_Conditional_2_ng_template_1_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "nz-form-item-feedback-icon", 6);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275property("status", ctx_r1.status);
  }
}
function NzSelectComponent_Conditional_2_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, NzSelectComponent_Conditional_2_ng_template_1_Conditional_0_Template, 1, 1, "nz-form-item-feedback-icon", 6);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275conditional(ctx_r1.hasFeedback && !!ctx_r1.status ? 0 : -1);
  }
}
function NzSelectComponent_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "nz-select-arrow", 3);
    \u0275\u0275template(1, NzSelectComponent_Conditional_2_ng_template_1_Template, 1, 1, "ng-template", null, 1, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const feedbackIconTpl_r3 = \u0275\u0275reference(2);
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("showArrow", ctx_r1.nzShowArrow)("loading", ctx_r1.nzLoading)("search", ctx_r1.nzOpen && ctx_r1.nzShowSearch)("suffixIcon", ctx_r1.nzSuffixIcon)("feedbackIcon", feedbackIconTpl_r3)("nzMaxMultipleCount", ctx_r1.nzMaxMultipleCount)("listOfValue", ctx_r1.listOfValue)("isMaxMultipleCountSet", ctx_r1.isMaxMultipleCountSet);
  }
}
function NzSelectComponent_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "nz-select-clear", 7);
    \u0275\u0275listener("clear", function NzSelectComponent_Conditional_3_Template_nz_select_clear_clear_0_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onClearSelection());
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("clearIcon", ctx_r1.nzClearIcon);
  }
}
function NzSelectComponent_ng_template_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "nz-option-container", 8);
    \u0275\u0275listener("keydown", function NzSelectComponent_ng_template_4_Template_nz_option_container_keydown_0_listener($event) {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onKeyDown($event));
    })("itemClick", function NzSelectComponent_ng_template_4_Template_nz_option_container_itemClick_0_listener($event) {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onItemClick($event));
    })("scrollToBottom", function NzSelectComponent_ng_template_4_Template_nz_option_container_scrollToBottom_0_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.nzScrollToBottom.emit());
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275styleMap(ctx_r1.nzDropdownStyle);
    \u0275\u0275classProp("ant-select-dropdown-placement-bottomLeft", ctx_r1.dropdownPosition === "bottomLeft")("ant-select-dropdown-placement-topLeft", ctx_r1.dropdownPosition === "topLeft")("ant-select-dropdown-placement-bottomRight", ctx_r1.dropdownPosition === "bottomRight")("ant-select-dropdown-placement-topRight", ctx_r1.dropdownPosition === "topRight");
    \u0275\u0275property("itemSize", ctx_r1.nzOptionHeightPx)("maxItemLength", ctx_r1.nzOptionOverflowSize)("matchWidth", ctx_r1.nzDropdownMatchSelectWidth)("@slideMotion", "enter")("@.disabled", !!(ctx_r1.noAnimation == null ? null : ctx_r1.noAnimation.nzNoAnimation))("nzNoAnimation", ctx_r1.noAnimation == null ? null : ctx_r1.noAnimation.nzNoAnimation)("listOfContainerItem", ctx_r1.listOfContainerItem)("menuItemSelectedIcon", ctx_r1.nzMenuItemSelectedIcon)("notFoundContent", ctx_r1.nzNotFoundContent)("activatedValue", ctx_r1.activatedValue)("listOfSelectedValue", ctx_r1.listOfValue)("dropdownRender", ctx_r1.nzDropdownRender)("compareWith", ctx_r1.compareWith)("mode", ctx_r1.nzMode)("isMaxMultipleCountReached", ctx_r1.isMaxMultipleCountReached);
  }
}
var NzOptionGroupComponent = class _NzOptionGroupComponent {
  nzLabel = null;
  changes = new Subject();
  ngOnChanges() {
    this.changes.next();
  }
  static \u0275fac = function NzOptionGroupComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _NzOptionGroupComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _NzOptionGroupComponent,
    selectors: [["nz-option-group"]],
    inputs: {
      nzLabel: "nzLabel"
    },
    exportAs: ["nzOptionGroup"],
    features: [\u0275\u0275NgOnChangesFeature],
    ngContentSelectors: _c04,
    decls: 1,
    vars: 0,
    template: function NzOptionGroupComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275projectionDef();
        \u0275\u0275projection(0);
      }
    },
    encapsulation: 2,
    changeDetection: 0
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzOptionGroupComponent, [{
    type: Component,
    args: [{
      selector: "nz-option-group",
      exportAs: "nzOptionGroup",
      template: `<ng-content></ng-content>`,
      encapsulation: ViewEncapsulation.None,
      changeDetection: ChangeDetectionStrategy.OnPush
    }]
  }], null, {
    nzLabel: [{
      type: Input
    }]
  });
})();
var NzOptionItemGroupComponent = class _NzOptionItemGroupComponent {
  nzLabel = null;
  static \u0275fac = function NzOptionItemGroupComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _NzOptionItemGroupComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _NzOptionItemGroupComponent,
    selectors: [["nz-option-item-group"]],
    hostAttrs: [1, "ant-select-item", "ant-select-item-group"],
    inputs: {
      nzLabel: "nzLabel"
    },
    decls: 1,
    vars: 1,
    consts: [[4, "nzStringTemplateOutlet"]],
    template: function NzOptionItemGroupComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275template(0, NzOptionItemGroupComponent_ng_container_0_Template, 2, 1, "ng-container", 0);
      }
      if (rf & 2) {
        \u0275\u0275property("nzStringTemplateOutlet", ctx.nzLabel);
      }
    },
    dependencies: [NzOutletModule, NzStringTemplateOutletDirective],
    encapsulation: 2,
    changeDetection: 0
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzOptionItemGroupComponent, [{
    type: Component,
    args: [{
      selector: "nz-option-item-group",
      template: ` <ng-container *nzStringTemplateOutlet="nzLabel">{{ nzLabel }}</ng-container> `,
      changeDetection: ChangeDetectionStrategy.OnPush,
      encapsulation: ViewEncapsulation.None,
      host: {
        class: "ant-select-item ant-select-item-group"
      },
      imports: [NzOutletModule]
    }]
  }], null, {
    nzLabel: [{
      type: Input
    }]
  });
})();
var NzOptionItemComponent = class _NzOptionItemComponent {
  elementRef;
  ngZone;
  destroy$;
  selected = false;
  activated = false;
  grouped = false;
  customContent = false;
  template = null;
  disabled = false;
  showState = false;
  title;
  label = null;
  value = null;
  activatedValue = null;
  listOfSelectedValue = [];
  icon = null;
  compareWith;
  itemClick = new EventEmitter();
  itemHover = new EventEmitter();
  constructor(elementRef, ngZone, destroy$) {
    this.elementRef = elementRef;
    this.ngZone = ngZone;
    this.destroy$ = destroy$;
  }
  ngOnChanges(changes) {
    const {
      value,
      activatedValue,
      listOfSelectedValue
    } = changes;
    if (value || listOfSelectedValue) {
      this.selected = this.listOfSelectedValue.some((v) => this.compareWith(v, this.value));
    }
    if (value || activatedValue) {
      this.activated = this.compareWith(this.activatedValue, this.value);
    }
  }
  ngOnInit() {
    fromEventOutsideAngular(this.elementRef.nativeElement, "click").pipe(takeUntil(this.destroy$)).subscribe(() => {
      if (!this.disabled) {
        this.ngZone.run(() => this.itemClick.emit(this.value));
      }
    });
    fromEventOutsideAngular(this.elementRef.nativeElement, "mouseenter").pipe(takeUntil(this.destroy$)).subscribe(() => {
      if (!this.disabled) {
        this.ngZone.run(() => this.itemHover.emit(this.value));
      }
    });
  }
  static \u0275fac = function NzOptionItemComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _NzOptionItemComponent)(\u0275\u0275directiveInject(ElementRef), \u0275\u0275directiveInject(NgZone), \u0275\u0275directiveInject(NzDestroyService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _NzOptionItemComponent,
    selectors: [["nz-option-item"]],
    hostAttrs: [1, "ant-select-item", "ant-select-item-option"],
    hostVars: 9,
    hostBindings: function NzOptionItemComponent_HostBindings(rf, ctx) {
      if (rf & 2) {
        \u0275\u0275attribute("title", ctx.title);
        \u0275\u0275classProp("ant-select-item-option-grouped", ctx.grouped)("ant-select-item-option-selected", ctx.selected && !ctx.disabled)("ant-select-item-option-disabled", ctx.disabled)("ant-select-item-option-active", ctx.activated && !ctx.disabled);
      }
    },
    inputs: {
      grouped: "grouped",
      customContent: [2, "customContent", "customContent", booleanAttribute],
      template: "template",
      disabled: "disabled",
      showState: "showState",
      title: "title",
      label: "label",
      value: "value",
      activatedValue: "activatedValue",
      listOfSelectedValue: "listOfSelectedValue",
      icon: "icon",
      compareWith: "compareWith"
    },
    outputs: {
      itemClick: "itemClick",
      itemHover: "itemHover"
    },
    features: [\u0275\u0275ProvidersFeature([NzDestroyService]), \u0275\u0275NgOnChangesFeature],
    decls: 4,
    vars: 2,
    consts: [[1, "ant-select-item-option-content"], [3, "ngTemplateOutlet"], ["unselectable", "on", 1, "ant-select-item-option-state"], ["nzType", "check", 1, "ant-select-selected-icon"]],
    template: function NzOptionItemComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0);
        \u0275\u0275template(1, NzOptionItemComponent_Conditional_1_Template, 1, 1, null, 1)(2, NzOptionItemComponent_Conditional_2_Template, 1, 1);
        \u0275\u0275elementEnd();
        \u0275\u0275template(3, NzOptionItemComponent_Conditional_3_Template, 3, 1, "div", 2);
      }
      if (rf & 2) {
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.customContent ? 1 : 2);
        \u0275\u0275advance(2);
        \u0275\u0275conditional(ctx.showState && ctx.selected ? 3 : -1);
      }
    },
    dependencies: [NgTemplateOutlet, NzIconModule, NzIconDirective],
    encapsulation: 2,
    changeDetection: 0
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzOptionItemComponent, [{
    type: Component,
    args: [{
      selector: "nz-option-item",
      template: `
    <div class="ant-select-item-option-content">
      @if (customContent) {
        <ng-template [ngTemplateOutlet]="template"></ng-template>
      } @else {
        {{ label }}
      }
    </div>
    @if (showState && selected) {
      <div class="ant-select-item-option-state" unselectable="on">
        @if (!icon) {
          <nz-icon nzType="check" class="ant-select-selected-icon" />
        } @else {
          <ng-template [ngTemplateOutlet]="icon"></ng-template>
        }
      </div>
    }
  `,
      changeDetection: ChangeDetectionStrategy.OnPush,
      encapsulation: ViewEncapsulation.None,
      host: {
        class: "ant-select-item ant-select-item-option",
        "[attr.title]": "title",
        "[class.ant-select-item-option-grouped]": "grouped",
        "[class.ant-select-item-option-selected]": "selected && !disabled",
        "[class.ant-select-item-option-disabled]": "disabled",
        "[class.ant-select-item-option-active]": "activated && !disabled"
      },
      providers: [NzDestroyService],
      imports: [NgTemplateOutlet, NzIconModule]
    }]
  }], () => [{
    type: ElementRef
  }, {
    type: NgZone
  }, {
    type: NzDestroyService
  }], {
    grouped: [{
      type: Input
    }],
    customContent: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    template: [{
      type: Input
    }],
    disabled: [{
      type: Input
    }],
    showState: [{
      type: Input
    }],
    title: [{
      type: Input
    }],
    label: [{
      type: Input
    }],
    value: [{
      type: Input
    }],
    activatedValue: [{
      type: Input
    }],
    listOfSelectedValue: [{
      type: Input
    }],
    icon: [{
      type: Input
    }],
    compareWith: [{
      type: Input
    }],
    itemClick: [{
      type: Output
    }],
    itemHover: [{
      type: Output
    }]
  });
})();
var NzOptionContainerComponent = class _NzOptionContainerComponent {
  notFoundContent = void 0;
  menuItemSelectedIcon = null;
  dropdownRender = null;
  activatedValue = null;
  listOfSelectedValue = [];
  compareWith;
  mode = "default";
  matchWidth = true;
  itemSize = 32;
  maxItemLength = 8;
  isMaxMultipleCountReached = false;
  listOfContainerItem = [];
  itemClick = new EventEmitter();
  scrollToBottom = new EventEmitter();
  cdkVirtualScrollViewport;
  scrolledIndex = 0;
  ngZone = inject(NgZone);
  platformId = inject(PLATFORM_ID);
  onItemClick(value) {
    this.itemClick.emit(value);
  }
  onItemHover(value) {
    this.activatedValue = value;
  }
  trackValue(_index, option) {
    return option.key;
  }
  onScrolledIndexChange(index) {
    this.scrolledIndex = index;
    if (index === this.listOfContainerItem.length - this.maxItemLength - 1) {
      this.scrollToBottom.emit();
    }
  }
  scrollToActivatedValue() {
    const index = this.listOfContainerItem.findIndex((item) => this.compareWith(item.key, this.activatedValue));
    if (index < this.scrolledIndex || index >= this.scrolledIndex + this.maxItemLength) {
      this.cdkVirtualScrollViewport.scrollToIndex(index || 0);
    }
  }
  ngOnChanges(changes) {
    const {
      listOfContainerItem,
      activatedValue
    } = changes;
    if (listOfContainerItem || activatedValue) {
      this.scrollToActivatedValue();
    }
  }
  ngAfterViewInit() {
    if (isPlatformBrowser(this.platformId)) {
      this.ngZone.runOutsideAngular(() => setTimeout(() => this.scrollToActivatedValue()));
    }
  }
  static \u0275fac = function NzOptionContainerComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _NzOptionContainerComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _NzOptionContainerComponent,
    selectors: [["nz-option-container"]],
    viewQuery: function NzOptionContainerComponent_Query(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275viewQuery(CdkVirtualScrollViewport, 7);
      }
      if (rf & 2) {
        let _t;
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.cdkVirtualScrollViewport = _t.first);
      }
    },
    hostAttrs: [1, "ant-select-dropdown"],
    inputs: {
      notFoundContent: "notFoundContent",
      menuItemSelectedIcon: "menuItemSelectedIcon",
      dropdownRender: "dropdownRender",
      activatedValue: "activatedValue",
      listOfSelectedValue: "listOfSelectedValue",
      compareWith: "compareWith",
      mode: "mode",
      matchWidth: "matchWidth",
      itemSize: "itemSize",
      maxItemLength: "maxItemLength",
      isMaxMultipleCountReached: "isMaxMultipleCountReached",
      listOfContainerItem: "listOfContainerItem"
    },
    outputs: {
      itemClick: "itemClick",
      scrollToBottom: "scrollToBottom"
    },
    exportAs: ["nzOptionContainer"],
    features: [\u0275\u0275NgOnChangesFeature],
    decls: 5,
    vars: 14,
    consts: [[1, "ant-select-item-empty"], [3, "scrolledIndexChange", "itemSize", "maxBufferPx", "minBufferPx"], ["cdkVirtualFor", "", 3, "cdkVirtualForOf", "cdkVirtualForTrackBy", "cdkVirtualForTemplateCacheSize"], [3, "ngTemplateOutlet"], ["nzComponentName", "select", 3, "specificContent"], [3, "nzLabel"], [3, "icon", "customContent", "template", "grouped", "disabled", "showState", "title", "label", "compareWith", "activatedValue", "listOfSelectedValue", "value"], [3, "itemHover", "itemClick", "icon", "customContent", "template", "grouped", "disabled", "showState", "title", "label", "compareWith", "activatedValue", "listOfSelectedValue", "value"]],
    template: function NzOptionContainerComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div");
        \u0275\u0275template(1, NzOptionContainerComponent_Conditional_1_Template, 2, 1, "div", 0);
        \u0275\u0275elementStart(2, "cdk-virtual-scroll-viewport", 1);
        \u0275\u0275listener("scrolledIndexChange", function NzOptionContainerComponent_Template_cdk_virtual_scroll_viewport_scrolledIndexChange_2_listener($event) {
          return ctx.onScrolledIndexChange($event);
        });
        \u0275\u0275template(3, NzOptionContainerComponent_ng_template_3_Template, 2, 1, "ng-template", 2);
        \u0275\u0275elementEnd();
        \u0275\u0275template(4, NzOptionContainerComponent_ng_template_4_Template, 0, 0, "ng-template", 3);
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.listOfContainerItem.length === 0 ? 1 : -1);
        \u0275\u0275advance();
        \u0275\u0275styleProp("height", ctx.listOfContainerItem.length * ctx.itemSize, "px")("max-height", ctx.itemSize * ctx.maxItemLength, "px");
        \u0275\u0275classProp("full-width", !ctx.matchWidth);
        \u0275\u0275property("itemSize", ctx.itemSize)("maxBufferPx", ctx.itemSize * ctx.maxItemLength)("minBufferPx", ctx.itemSize * ctx.maxItemLength);
        \u0275\u0275advance();
        \u0275\u0275property("cdkVirtualForOf", ctx.listOfContainerItem)("cdkVirtualForTrackBy", ctx.trackValue)("cdkVirtualForTemplateCacheSize", 0);
        \u0275\u0275advance();
        \u0275\u0275property("ngTemplateOutlet", ctx.dropdownRender);
      }
    },
    dependencies: [NzEmptyModule, NzEmbedEmptyComponent, NzOptionItemGroupComponent, NzOptionItemComponent, NgTemplateOutlet, OverlayModule, CdkFixedSizeVirtualScroll, CdkVirtualForOf, CdkVirtualScrollViewport, NzOverlayModule],
    encapsulation: 2,
    changeDetection: 0
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzOptionContainerComponent, [{
    type: Component,
    args: [{
      selector: "nz-option-container",
      exportAs: "nzOptionContainer",
      changeDetection: ChangeDetectionStrategy.OnPush,
      encapsulation: ViewEncapsulation.None,
      preserveWhitespaces: false,
      template: `
    <div>
      @if (listOfContainerItem.length === 0) {
        <div class="ant-select-item-empty">
          <nz-embed-empty nzComponentName="select" [specificContent]="notFoundContent!"></nz-embed-empty>
        </div>
      }
      <cdk-virtual-scroll-viewport
        [class.full-width]="!matchWidth"
        [itemSize]="itemSize"
        [maxBufferPx]="itemSize * maxItemLength"
        [minBufferPx]="itemSize * maxItemLength"
        (scrolledIndexChange)="onScrolledIndexChange($event)"
        [style.height.px]="listOfContainerItem.length * itemSize"
        [style.max-height.px]="itemSize * maxItemLength"
      >
        <ng-template
          cdkVirtualFor
          [cdkVirtualForOf]="listOfContainerItem"
          [cdkVirtualForTrackBy]="trackValue"
          [cdkVirtualForTemplateCacheSize]="0"
          let-item
        >
          @switch (item.type) {
            @case ('group') {
              <nz-option-item-group [nzLabel]="item.groupLabel ?? null"></nz-option-item-group>
            }
            @case ('item') {
              <nz-option-item
                [icon]="menuItemSelectedIcon"
                [customContent]="item.nzCustomContent"
                [template]="item.template ?? null"
                [grouped]="!!item.groupLabel"
                [disabled]="
                  item.nzDisabled || (isMaxMultipleCountReached && !listOfSelectedValue.includes(item['nzValue']))
                "
                [showState]="mode === 'tags' || mode === 'multiple'"
                [title]="item.nzTitle"
                [label]="item.nzLabel"
                [compareWith]="compareWith"
                [activatedValue]="activatedValue"
                [listOfSelectedValue]="listOfSelectedValue"
                [value]="item.nzValue"
                (itemHover)="onItemHover($event)"
                (itemClick)="onItemClick($event)"
              ></nz-option-item>
            }
          }
        </ng-template>
      </cdk-virtual-scroll-viewport>
      <ng-template [ngTemplateOutlet]="dropdownRender"></ng-template>
    </div>
  `,
      host: {
        class: "ant-select-dropdown"
      },
      imports: [NzEmptyModule, NzOptionItemGroupComponent, NzOptionItemComponent, NgTemplateOutlet, OverlayModule, NzOverlayModule]
    }]
  }], null, {
    notFoundContent: [{
      type: Input
    }],
    menuItemSelectedIcon: [{
      type: Input
    }],
    dropdownRender: [{
      type: Input
    }],
    activatedValue: [{
      type: Input
    }],
    listOfSelectedValue: [{
      type: Input
    }],
    compareWith: [{
      type: Input
    }],
    mode: [{
      type: Input
    }],
    matchWidth: [{
      type: Input
    }],
    itemSize: [{
      type: Input
    }],
    maxItemLength: [{
      type: Input
    }],
    isMaxMultipleCountReached: [{
      type: Input
    }],
    listOfContainerItem: [{
      type: Input
    }],
    itemClick: [{
      type: Output
    }],
    scrollToBottom: [{
      type: Output
    }],
    cdkVirtualScrollViewport: [{
      type: ViewChild,
      args: [CdkVirtualScrollViewport, {
        static: true
      }]
    }]
  });
})();
var NzOptionComponent = class _NzOptionComponent {
  destroy$;
  changes = new Subject();
  groupLabel = null;
  template;
  nzTitle;
  nzLabel = null;
  nzValue = null;
  nzKey;
  nzDisabled = false;
  nzHide = false;
  nzCustomContent = false;
  nzOptionGroupComponent = inject(NzOptionGroupComponent, {
    optional: true
  });
  constructor(destroy$) {
    this.destroy$ = destroy$;
  }
  ngOnInit() {
    if (this.nzOptionGroupComponent) {
      this.nzOptionGroupComponent.changes.pipe(startWith(true), takeUntil(this.destroy$)).subscribe(() => {
        this.groupLabel = this.nzOptionGroupComponent?.nzLabel;
      });
    }
  }
  ngOnChanges() {
    this.changes.next();
  }
  static \u0275fac = function NzOptionComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _NzOptionComponent)(\u0275\u0275directiveInject(NzDestroyService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _NzOptionComponent,
    selectors: [["nz-option"]],
    viewQuery: function NzOptionComponent_Query(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275viewQuery(TemplateRef, 7);
      }
      if (rf & 2) {
        let _t;
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.template = _t.first);
      }
    },
    inputs: {
      nzTitle: "nzTitle",
      nzLabel: "nzLabel",
      nzValue: "nzValue",
      nzKey: "nzKey",
      nzDisabled: [2, "nzDisabled", "nzDisabled", booleanAttribute],
      nzHide: [2, "nzHide", "nzHide", booleanAttribute],
      nzCustomContent: [2, "nzCustomContent", "nzCustomContent", booleanAttribute]
    },
    exportAs: ["nzOption"],
    features: [\u0275\u0275ProvidersFeature([NzDestroyService]), \u0275\u0275NgOnChangesFeature],
    ngContentSelectors: _c04,
    decls: 1,
    vars: 0,
    template: function NzOptionComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275projectionDef();
        \u0275\u0275template(0, NzOptionComponent_ng_template_0_Template, 1, 0, "ng-template");
      }
    },
    encapsulation: 2,
    changeDetection: 0
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzOptionComponent, [{
    type: Component,
    args: [{
      selector: "nz-option",
      exportAs: "nzOption",
      encapsulation: ViewEncapsulation.None,
      changeDetection: ChangeDetectionStrategy.OnPush,
      providers: [NzDestroyService],
      template: `
    <ng-template>
      <ng-content></ng-content>
    </ng-template>
  `
    }]
  }], () => [{
    type: NzDestroyService
  }], {
    template: [{
      type: ViewChild,
      args: [TemplateRef, {
        static: true
      }]
    }],
    nzTitle: [{
      type: Input
    }],
    nzLabel: [{
      type: Input
    }],
    nzValue: [{
      type: Input
    }],
    nzKey: [{
      type: Input
    }],
    nzDisabled: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    nzHide: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    nzCustomContent: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }]
  });
})();
var NzSelectArrowComponent = class _NzSelectArrowComponent {
  listOfValue = [];
  loading = false;
  search = false;
  showArrow = false;
  isMaxMultipleCountSet = false;
  suffixIcon = null;
  feedbackIcon = null;
  nzMaxMultipleCount = Infinity;
  static \u0275fac = function NzSelectArrowComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _NzSelectArrowComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _NzSelectArrowComponent,
    selectors: [["nz-select-arrow"]],
    hostAttrs: [1, "ant-select-arrow"],
    hostVars: 2,
    hostBindings: function NzSelectArrowComponent_HostBindings(rf, ctx) {
      if (rf & 2) {
        \u0275\u0275classProp("ant-select-arrow-loading", ctx.loading);
      }
    },
    inputs: {
      listOfValue: "listOfValue",
      loading: "loading",
      search: "search",
      showArrow: "showArrow",
      isMaxMultipleCountSet: "isMaxMultipleCountSet",
      suffixIcon: "suffixIcon",
      feedbackIcon: "feedbackIcon",
      nzMaxMultipleCount: [2, "nzMaxMultipleCount", "nzMaxMultipleCount", numberAttributeWithInfinityFallback]
    },
    decls: 4,
    vars: 3,
    consts: [["nzType", "loading"], [4, "nzStringTemplateOutlet"], ["nzType", "search"], ["nzType", "down"], [3, "nzType"]],
    template: function NzSelectArrowComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275template(0, NzSelectArrowComponent_Conditional_0_Template, 2, 2, "span")(1, NzSelectArrowComponent_Conditional_1_Template, 1, 0, "nz-icon", 0)(2, NzSelectArrowComponent_Conditional_2_Template, 2, 1)(3, NzSelectArrowComponent_ng_container_3_Template, 2, 1, "ng-container", 1);
      }
      if (rf & 2) {
        \u0275\u0275conditional(ctx.isMaxMultipleCountSet ? 0 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.loading ? 1 : 2);
        \u0275\u0275advance(2);
        \u0275\u0275property("nzStringTemplateOutlet", ctx.feedbackIcon);
      }
    },
    dependencies: [NzIconModule, NzIconDirective, NzOutletModule, NzStringTemplateOutletDirective],
    encapsulation: 2,
    changeDetection: 0
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzSelectArrowComponent, [{
    type: Component,
    args: [{
      selector: "nz-select-arrow",
      encapsulation: ViewEncapsulation.None,
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: `
    @if (isMaxMultipleCountSet) {
      <span>{{ listOfValue.length }} / {{ nzMaxMultipleCount }}</span>
    }
    @if (loading) {
      <nz-icon nzType="loading" />
    } @else {
      @if (showArrow && !suffixIcon) {
        @if (search) {
          <nz-icon nzType="search" />
        } @else {
          <nz-icon nzType="down" />
        }
      } @else {
        <ng-container *nzStringTemplateOutlet="suffixIcon; let suffixIcon">
          @if (suffixIcon) {
            <nz-icon [nzType]="suffixIcon" />
          }
        </ng-container>
      }
    }
    <ng-container *nzStringTemplateOutlet="feedbackIcon">{{ feedbackIcon }}</ng-container>
  `,
      host: {
        class: "ant-select-arrow",
        "[class.ant-select-arrow-loading]": "loading"
      },
      imports: [NzIconModule, NzOutletModule]
    }]
  }], null, {
    listOfValue: [{
      type: Input
    }],
    loading: [{
      type: Input
    }],
    search: [{
      type: Input
    }],
    showArrow: [{
      type: Input
    }],
    isMaxMultipleCountSet: [{
      type: Input
    }],
    suffixIcon: [{
      type: Input
    }],
    feedbackIcon: [{
      type: Input
    }],
    nzMaxMultipleCount: [{
      type: Input,
      args: [{
        transform: numberAttributeWithInfinityFallback
      }]
    }]
  });
})();
var NzSelectClearComponent = class _NzSelectClearComponent {
  clearIcon = null;
  clear = new EventEmitter();
  onClick(e) {
    e.preventDefault();
    e.stopPropagation();
    this.clear.emit(e);
  }
  static \u0275fac = function NzSelectClearComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _NzSelectClearComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _NzSelectClearComponent,
    selectors: [["nz-select-clear"]],
    hostAttrs: [1, "ant-select-clear"],
    hostBindings: function NzSelectClearComponent_HostBindings(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275listener("click", function NzSelectClearComponent_click_HostBindingHandler($event) {
          return ctx.onClick($event);
        });
      }
    },
    inputs: {
      clearIcon: "clearIcon"
    },
    outputs: {
      clear: "clear"
    },
    decls: 2,
    vars: 1,
    consts: [[3, "ngTemplateOutlet"], ["nzType", "close-circle", "nzTheme", "fill", 1, "ant-select-close-icon"]],
    template: function NzSelectClearComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275template(0, NzSelectClearComponent_Conditional_0_Template, 1, 1, null, 0)(1, NzSelectClearComponent_Conditional_1_Template, 1, 0, "nz-icon", 1);
      }
      if (rf & 2) {
        \u0275\u0275conditional(ctx.clearIcon ? 0 : 1);
      }
    },
    dependencies: [NgTemplateOutlet, NzIconModule, NzIconDirective],
    encapsulation: 2,
    changeDetection: 0
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzSelectClearComponent, [{
    type: Component,
    args: [{
      selector: "nz-select-clear",
      encapsulation: ViewEncapsulation.None,
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: `
    @if (clearIcon) {
      <ng-template [ngTemplateOutlet]="clearIcon"></ng-template>
    } @else {
      <nz-icon nzType="close-circle" nzTheme="fill" class="ant-select-close-icon" />
    }
  `,
      host: {
        class: "ant-select-clear",
        "(click)": "onClick($event)"
      },
      imports: [NgTemplateOutlet, NzIconModule]
    }]
  }], null, {
    clearIcon: [{
      type: Input
    }],
    clear: [{
      type: Output
    }]
  });
})();
var NzSelectItemComponent = class _NzSelectItemComponent {
  disabled = false;
  label = null;
  deletable = false;
  removeIcon = null;
  contentTemplateOutletContext = null;
  contentTemplateOutlet = null;
  delete = new EventEmitter();
  get templateOutletContext() {
    return __spreadValues({
      $implicit: this.contentTemplateOutletContext
    }, this.contentTemplateOutletContext);
  }
  onDelete(e) {
    e.preventDefault();
    e.stopPropagation();
    if (!this.disabled) {
      this.delete.next(e);
    }
  }
  static \u0275fac = function NzSelectItemComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _NzSelectItemComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _NzSelectItemComponent,
    selectors: [["nz-select-item"]],
    hostAttrs: [1, "ant-select-selection-item"],
    hostVars: 3,
    hostBindings: function NzSelectItemComponent_HostBindings(rf, ctx) {
      if (rf & 2) {
        \u0275\u0275attribute("title", ctx.label);
        \u0275\u0275classProp("ant-select-selection-item-disabled", ctx.disabled);
      }
    },
    inputs: {
      disabled: "disabled",
      label: "label",
      deletable: "deletable",
      removeIcon: "removeIcon",
      contentTemplateOutletContext: "contentTemplateOutletContext",
      contentTemplateOutlet: "contentTemplateOutlet"
    },
    outputs: {
      delete: "delete"
    },
    decls: 2,
    vars: 3,
    consts: [[4, "nzStringTemplateOutlet", "nzStringTemplateOutletContext"], [1, "ant-select-selection-item-remove"], [1, "ant-select-selection-item-content"], [1, "ant-select-selection-item-remove", 3, "click"], ["nzType", "close"], [3, "ngTemplateOutlet"]],
    template: function NzSelectItemComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275template(0, NzSelectItemComponent_ng_container_0_Template, 3, 1, "ng-container", 0)(1, NzSelectItemComponent_Conditional_1_Template, 3, 1, "span", 1);
      }
      if (rf & 2) {
        \u0275\u0275property("nzStringTemplateOutlet", ctx.contentTemplateOutlet)("nzStringTemplateOutletContext", ctx.templateOutletContext);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.deletable && !ctx.disabled ? 1 : -1);
      }
    },
    dependencies: [NgTemplateOutlet, NzOutletModule, NzStringTemplateOutletDirective, NzIconModule, NzIconDirective],
    encapsulation: 2,
    changeDetection: 0
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzSelectItemComponent, [{
    type: Component,
    args: [{
      selector: "nz-select-item",
      encapsulation: ViewEncapsulation.None,
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: `
    <ng-container *nzStringTemplateOutlet="contentTemplateOutlet; context: templateOutletContext">
      @if (deletable) {
        <div class="ant-select-selection-item-content">{{ label }}</div>
      } @else {
        {{ label }}
      }
    </ng-container>
    @if (deletable && !disabled) {
      <span class="ant-select-selection-item-remove" (click)="onDelete($event)">
        @if (!removeIcon) {
          <nz-icon nzType="close" />
        } @else {
          <ng-template [ngTemplateOutlet]="removeIcon"></ng-template>
        }
      </span>
    }
  `,
      host: {
        class: "ant-select-selection-item",
        "[attr.title]": "label",
        "[class.ant-select-selection-item-disabled]": "disabled"
      },
      imports: [NgTemplateOutlet, NzOutletModule, NzIconModule]
    }]
  }], null, {
    disabled: [{
      type: Input
    }],
    label: [{
      type: Input
    }],
    deletable: [{
      type: Input
    }],
    removeIcon: [{
      type: Input
    }],
    contentTemplateOutletContext: [{
      type: Input
    }],
    contentTemplateOutlet: [{
      type: Input
    }],
    delete: [{
      type: Output
    }]
  });
})();
var NzSelectPlaceholderComponent = class _NzSelectPlaceholderComponent {
  placeholder = null;
  static \u0275fac = function NzSelectPlaceholderComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _NzSelectPlaceholderComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _NzSelectPlaceholderComponent,
    selectors: [["nz-select-placeholder"]],
    hostAttrs: [1, "ant-select-selection-placeholder"],
    inputs: {
      placeholder: "placeholder"
    },
    decls: 1,
    vars: 1,
    consts: [[4, "nzStringTemplateOutlet"]],
    template: function NzSelectPlaceholderComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275template(0, NzSelectPlaceholderComponent_ng_container_0_Template, 2, 1, "ng-container", 0);
      }
      if (rf & 2) {
        \u0275\u0275property("nzStringTemplateOutlet", ctx.placeholder);
      }
    },
    dependencies: [NzOutletModule, NzStringTemplateOutletDirective],
    encapsulation: 2,
    changeDetection: 0
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzSelectPlaceholderComponent, [{
    type: Component,
    args: [{
      selector: "nz-select-placeholder",
      encapsulation: ViewEncapsulation.None,
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: `
    <ng-container *nzStringTemplateOutlet="placeholder">
      {{ placeholder }}
    </ng-container>
  `,
      host: {
        class: "ant-select-selection-placeholder"
      },
      imports: [NzOutletModule]
    }]
  }], null, {
    placeholder: [{
      type: Input
    }]
  });
})();
var NzSelectSearchComponent = class _NzSelectSearchComponent {
  elementRef;
  renderer;
  focusMonitor;
  nzId = null;
  disabled = false;
  mirrorSync = false;
  showInput = true;
  focusTrigger = false;
  value = "";
  autofocus = false;
  valueChange = new EventEmitter();
  isComposingChange = new EventEmitter();
  inputElement;
  mirrorElement;
  setCompositionState(isComposing) {
    this.isComposingChange.next(isComposing);
  }
  onValueChange(value) {
    this.value = value;
    this.valueChange.next(value);
    if (this.mirrorSync) {
      this.syncMirrorWidth();
    }
  }
  clearInputValue() {
    const inputDOM = this.inputElement.nativeElement;
    inputDOM.value = "";
    this.onValueChange("");
  }
  syncMirrorWidth() {
    reqAnimFrame(() => {
      const mirrorDOM = this.mirrorElement.nativeElement;
      const hostDOM = this.elementRef.nativeElement;
      const inputDOM = this.inputElement.nativeElement;
      this.renderer.removeStyle(hostDOM, "width");
      this.renderer.setProperty(mirrorDOM, "textContent", `${inputDOM.value}\xA0`);
      this.renderer.setStyle(hostDOM, "width", `${mirrorDOM.scrollWidth}px`);
    });
  }
  focus() {
    this.focusMonitor.focusVia(this.inputElement, "keyboard");
  }
  blur() {
    this.inputElement.nativeElement.blur();
  }
  constructor(elementRef, renderer, focusMonitor) {
    this.elementRef = elementRef;
    this.renderer = renderer;
    this.focusMonitor = focusMonitor;
  }
  ngOnChanges(changes) {
    const inputDOM = this.inputElement.nativeElement;
    const {
      focusTrigger,
      showInput
    } = changes;
    if (showInput) {
      if (this.showInput) {
        this.renderer.removeAttribute(inputDOM, "readonly");
      } else {
        this.renderer.setAttribute(inputDOM, "readonly", "readonly");
      }
    }
    if (focusTrigger && focusTrigger.currentValue === true && focusTrigger.previousValue === false) {
      inputDOM.focus();
    }
  }
  ngAfterViewInit() {
    if (this.mirrorSync) {
      this.syncMirrorWidth();
    }
    if (this.autofocus) {
      this.focus();
    }
  }
  static \u0275fac = function NzSelectSearchComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _NzSelectSearchComponent)(\u0275\u0275directiveInject(ElementRef), \u0275\u0275directiveInject(Renderer2), \u0275\u0275directiveInject(FocusMonitor));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _NzSelectSearchComponent,
    selectors: [["nz-select-search"]],
    viewQuery: function NzSelectSearchComponent_Query(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275viewQuery(_c13, 7);
        \u0275\u0275viewQuery(_c23, 5);
      }
      if (rf & 2) {
        let _t;
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.inputElement = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.mirrorElement = _t.first);
      }
    },
    hostAttrs: [1, "ant-select-selection-search"],
    inputs: {
      nzId: "nzId",
      disabled: "disabled",
      mirrorSync: "mirrorSync",
      showInput: "showInput",
      focusTrigger: "focusTrigger",
      value: "value",
      autofocus: "autofocus"
    },
    outputs: {
      valueChange: "valueChange",
      isComposingChange: "isComposingChange"
    },
    features: [\u0275\u0275ProvidersFeature([{
      provide: COMPOSITION_BUFFER_MODE,
      useValue: false
    }]), \u0275\u0275NgOnChangesFeature],
    decls: 3,
    vars: 7,
    consts: [["inputElement", ""], ["mirrorElement", ""], ["autocomplete", "off", 1, "ant-select-selection-search-input", 3, "ngModelChange", "compositionstart", "compositionend", "ngModel", "disabled"], [1, "ant-select-selection-search-mirror"]],
    template: function NzSelectSearchComponent_Template(rf, ctx) {
      if (rf & 1) {
        const _r1 = \u0275\u0275getCurrentView();
        \u0275\u0275elementStart(0, "input", 2, 0);
        \u0275\u0275listener("ngModelChange", function NzSelectSearchComponent_Template_input_ngModelChange_0_listener($event) {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.onValueChange($event));
        })("compositionstart", function NzSelectSearchComponent_Template_input_compositionstart_0_listener() {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.setCompositionState(true));
        })("compositionend", function NzSelectSearchComponent_Template_input_compositionend_0_listener() {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.setCompositionState(false));
        });
        \u0275\u0275elementEnd();
        \u0275\u0275template(2, NzSelectSearchComponent_Conditional_2_Template, 2, 0, "span", 3);
      }
      if (rf & 2) {
        \u0275\u0275styleProp("opacity", ctx.showInput ? null : 0);
        \u0275\u0275property("ngModel", ctx.value)("disabled", ctx.disabled);
        \u0275\u0275attribute("id", ctx.nzId)("autofocus", ctx.autofocus ? "autofocus" : null);
        \u0275\u0275advance(2);
        \u0275\u0275conditional(ctx.mirrorSync ? 2 : -1);
      }
    },
    dependencies: [FormsModule, DefaultValueAccessor, NgControlStatus, NgModel],
    encapsulation: 2,
    changeDetection: 0
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzSelectSearchComponent, [{
    type: Component,
    args: [{
      selector: "nz-select-search",
      encapsulation: ViewEncapsulation.None,
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: `
    <input
      #inputElement
      [attr.id]="nzId"
      autocomplete="off"
      class="ant-select-selection-search-input"
      [ngModel]="value"
      [attr.autofocus]="autofocus ? 'autofocus' : null"
      [disabled]="disabled"
      [style.opacity]="showInput ? null : 0"
      (ngModelChange)="onValueChange($event)"
      (compositionstart)="setCompositionState(true)"
      (compositionend)="setCompositionState(false)"
    />
    @if (mirrorSync) {
      <span #mirrorElement class="ant-select-selection-search-mirror"></span>
    }
  `,
      host: {
        class: "ant-select-selection-search"
      },
      providers: [{
        provide: COMPOSITION_BUFFER_MODE,
        useValue: false
      }],
      imports: [FormsModule]
    }]
  }], () => [{
    type: ElementRef
  }, {
    type: Renderer2
  }, {
    type: FocusMonitor
  }], {
    nzId: [{
      type: Input
    }],
    disabled: [{
      type: Input
    }],
    mirrorSync: [{
      type: Input
    }],
    showInput: [{
      type: Input
    }],
    focusTrigger: [{
      type: Input
    }],
    value: [{
      type: Input
    }],
    autofocus: [{
      type: Input
    }],
    valueChange: [{
      type: Output
    }],
    isComposingChange: [{
      type: Output
    }],
    inputElement: [{
      type: ViewChild,
      args: ["inputElement", {
        static: true
      }]
    }],
    mirrorElement: [{
      type: ViewChild,
      args: ["mirrorElement", {
        static: false
      }]
    }]
  });
})();
var NzSelectTopControlComponent = class _NzSelectTopControlComponent {
  nzId = null;
  showSearch = false;
  placeHolder = null;
  open = false;
  maxTagCount = Infinity;
  autofocus = false;
  disabled = false;
  mode = "default";
  customTemplate = null;
  maxTagPlaceholder = null;
  removeIcon = null;
  listOfTopItem = [];
  tokenSeparators = [];
  tokenize = new EventEmitter();
  inputValueChange = new EventEmitter();
  deleteItem = new EventEmitter();
  nzSelectSearchComponent;
  listOfSlicedItem = [];
  isShowPlaceholder = true;
  isShowSingleLabel = false;
  isComposing = false;
  inputValue = null;
  updateTemplateVariable() {
    const isSelectedValueEmpty = this.listOfTopItem.length === 0;
    this.isShowPlaceholder = isSelectedValueEmpty && !this.isComposing && !this.inputValue;
    this.isShowSingleLabel = !isSelectedValueEmpty && !this.isComposing && !this.inputValue;
  }
  isComposingChange(isComposing) {
    this.isComposing = isComposing;
    this.updateTemplateVariable();
  }
  onInputValueChange(value) {
    if (value !== this.inputValue) {
      this.inputValue = value;
      this.updateTemplateVariable();
      this.inputValueChange.emit(value);
      this.tokenSeparate(value, this.tokenSeparators);
    }
  }
  tokenSeparate(inputValue, tokenSeparators) {
    const includesSeparators = (str, separators) => {
      for (let i = 0; i < separators.length; ++i) {
        if (str.lastIndexOf(separators[i]) > 0) {
          return true;
        }
      }
      return false;
    };
    const splitBySeparators = (str, separators) => {
      const reg = new RegExp(`[${separators.join()}]`);
      const array = str.split(reg).filter((token) => token);
      return [...new Set(array)];
    };
    if (inputValue && inputValue.length && tokenSeparators.length && this.mode !== "default" && includesSeparators(inputValue, tokenSeparators)) {
      const listOfLabel = splitBySeparators(inputValue, tokenSeparators);
      this.tokenize.next(listOfLabel);
    }
  }
  clearInputValue() {
    if (this.nzSelectSearchComponent) {
      this.nzSelectSearchComponent.clearInputValue();
    }
  }
  focus() {
    if (this.nzSelectSearchComponent) {
      this.nzSelectSearchComponent.focus();
    }
  }
  blur() {
    if (this.nzSelectSearchComponent) {
      this.nzSelectSearchComponent.blur();
    }
  }
  onDeleteItem(item) {
    if (!this.disabled && !item.nzDisabled) {
      this.deleteItem.next(item);
    }
  }
  destroyRef = inject(DestroyRef);
  elementRef = inject(ElementRef);
  ngZone = inject(NgZone);
  noAnimation = inject(NzNoAnimationDirective, {
    host: true,
    optional: true
  });
  ngOnChanges(changes) {
    const {
      listOfTopItem,
      maxTagCount,
      customTemplate,
      maxTagPlaceholder
    } = changes;
    if (listOfTopItem) {
      this.updateTemplateVariable();
    }
    if (listOfTopItem || maxTagCount || customTemplate || maxTagPlaceholder) {
      const listOfSlicedItem = this.listOfTopItem.slice(0, this.maxTagCount).map((o) => ({
        nzLabel: o.nzLabel,
        nzValue: o.nzValue,
        nzDisabled: o.nzDisabled,
        contentTemplateOutlet: this.customTemplate,
        contentTemplateOutletContext: o
      }));
      if (this.listOfTopItem.length > this.maxTagCount) {
        const exceededLabel = `+ ${this.listOfTopItem.length - this.maxTagCount} ...`;
        const listOfSelectedValue = this.listOfTopItem.map((item) => item.nzValue);
        const exceededItem = {
          nzLabel: exceededLabel,
          nzValue: "$$__nz_exceeded_item",
          nzDisabled: true,
          contentTemplateOutlet: this.maxTagPlaceholder,
          contentTemplateOutletContext: listOfSelectedValue.slice(this.maxTagCount)
        };
        listOfSlicedItem.push(exceededItem);
      }
      this.listOfSlicedItem = listOfSlicedItem;
    }
  }
  ngOnInit() {
    fromEventOutsideAngular(this.elementRef.nativeElement, "click").pipe(takeUntilDestroyed(this.destroyRef)).subscribe((event) => {
      if (event.target !== this.nzSelectSearchComponent.inputElement.nativeElement) {
        this.nzSelectSearchComponent.focus();
      }
    });
    fromEventOutsideAngular(this.elementRef.nativeElement, "keydown").pipe(takeUntilDestroyed(this.destroyRef)).subscribe((event) => {
      if (event.target instanceof HTMLInputElement) {
        const inputValue = event.target.value;
        if (event.keyCode === BACKSPACE && this.mode !== "default" && !inputValue && this.listOfTopItem.length > 0) {
          event.preventDefault();
          this.ngZone.run(() => this.onDeleteItem(this.listOfTopItem[this.listOfTopItem.length - 1]));
        }
      }
    });
  }
  static \u0275fac = function NzSelectTopControlComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _NzSelectTopControlComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _NzSelectTopControlComponent,
    selectors: [["nz-select-top-control"]],
    viewQuery: function NzSelectTopControlComponent_Query(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275viewQuery(NzSelectSearchComponent, 5);
      }
      if (rf & 2) {
        let _t;
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.nzSelectSearchComponent = _t.first);
      }
    },
    hostAttrs: [1, "ant-select-selector"],
    inputs: {
      nzId: "nzId",
      showSearch: "showSearch",
      placeHolder: "placeHolder",
      open: "open",
      maxTagCount: [2, "maxTagCount", "maxTagCount", numberAttribute],
      autofocus: "autofocus",
      disabled: "disabled",
      mode: "mode",
      customTemplate: "customTemplate",
      maxTagPlaceholder: "maxTagPlaceholder",
      removeIcon: "removeIcon",
      listOfTopItem: "listOfTopItem",
      tokenSeparators: "tokenSeparators"
    },
    outputs: {
      tokenize: "tokenize",
      inputValueChange: "inputValueChange",
      deleteItem: "deleteItem"
    },
    exportAs: ["nzSelectTopControl"],
    features: [\u0275\u0275NgOnChangesFeature],
    decls: 3,
    vars: 2,
    consts: [[3, "placeholder"], [3, "isComposingChange", "valueChange", "nzId", "disabled", "value", "showInput", "mirrorSync", "autofocus", "focusTrigger"], [3, "deletable", "disabled", "removeIcon", "label", "contentTemplateOutlet", "contentTemplateOutletContext"], [3, "removeIcon", "label", "disabled", "contentTemplateOutlet", "deletable", "contentTemplateOutletContext"], [3, "isComposingChange", "valueChange", "nzId", "disabled", "value", "autofocus", "showInput", "mirrorSync", "focusTrigger"], [3, "delete", "removeIcon", "label", "disabled", "contentTemplateOutlet", "deletable", "contentTemplateOutletContext"]],
    template: function NzSelectTopControlComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275template(0, NzSelectTopControlComponent_Case_0_Template, 2, 8)(1, NzSelectTopControlComponent_Case_1_Template, 3, 7)(2, NzSelectTopControlComponent_Conditional_2_Template, 1, 1, "nz-select-placeholder", 0);
      }
      if (rf & 2) {
        let tmp_0_0;
        \u0275\u0275conditional((tmp_0_0 = ctx.mode) === "default" ? 0 : 1);
        \u0275\u0275advance(2);
        \u0275\u0275conditional(ctx.isShowPlaceholder ? 2 : -1);
      }
    },
    dependencies: [NzSelectSearchComponent, NzSelectItemComponent, NzSelectPlaceholderComponent],
    encapsulation: 2,
    changeDetection: 0
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzSelectTopControlComponent, [{
    type: Component,
    args: [{
      selector: "nz-select-top-control",
      exportAs: "nzSelectTopControl",
      preserveWhitespaces: false,
      changeDetection: ChangeDetectionStrategy.OnPush,
      encapsulation: ViewEncapsulation.None,
      template: `
    <!--single mode-->
    @switch (mode) {
      @case ('default') {
        <nz-select-search
          [nzId]="nzId"
          [disabled]="disabled"
          [value]="inputValue!"
          [showInput]="showSearch"
          [mirrorSync]="false"
          [autofocus]="autofocus"
          [focusTrigger]="open"
          (isComposingChange)="isComposingChange($event)"
          (valueChange)="onInputValueChange($event)"
        ></nz-select-search>
        @if (isShowSingleLabel) {
          <nz-select-item
            [deletable]="false"
            [disabled]="false"
            [removeIcon]="removeIcon"
            [label]="listOfTopItem[0].nzLabel"
            [contentTemplateOutlet]="customTemplate"
            [contentTemplateOutletContext]="listOfTopItem[0]"
          ></nz-select-item>
        }
      }
      @default {
        <!--multiple or tags mode-->
        @for (item of listOfSlicedItem; track item.nzValue) {
          <nz-select-item
            [removeIcon]="removeIcon"
            [label]="item.nzLabel"
            [disabled]="item.nzDisabled || disabled"
            [contentTemplateOutlet]="item.contentTemplateOutlet"
            [deletable]="true"
            [contentTemplateOutletContext]="item.contentTemplateOutletContext"
            (delete)="onDeleteItem(item.contentTemplateOutletContext)"
          ></nz-select-item>
        }
        <nz-select-search
          [nzId]="nzId"
          [disabled]="disabled"
          [value]="inputValue!"
          [autofocus]="autofocus"
          [showInput]="true"
          [mirrorSync]="true"
          [focusTrigger]="open"
          (isComposingChange)="isComposingChange($event)"
          (valueChange)="onInputValueChange($event)"
        ></nz-select-search>
      }
    }
    @if (isShowPlaceholder) {
      <nz-select-placeholder [placeholder]="placeHolder"></nz-select-placeholder>
    }
  `,
      host: {
        class: "ant-select-selector"
      },
      imports: [NzSelectSearchComponent, NzSelectItemComponent, NzSelectPlaceholderComponent]
    }]
  }], null, {
    nzId: [{
      type: Input
    }],
    showSearch: [{
      type: Input
    }],
    placeHolder: [{
      type: Input
    }],
    open: [{
      type: Input
    }],
    maxTagCount: [{
      type: Input,
      args: [{
        transform: numberAttribute
      }]
    }],
    autofocus: [{
      type: Input
    }],
    disabled: [{
      type: Input
    }],
    mode: [{
      type: Input
    }],
    customTemplate: [{
      type: Input
    }],
    maxTagPlaceholder: [{
      type: Input
    }],
    removeIcon: [{
      type: Input
    }],
    listOfTopItem: [{
      type: Input
    }],
    tokenSeparators: [{
      type: Input
    }],
    tokenize: [{
      type: Output
    }],
    inputValueChange: [{
      type: Output
    }],
    deleteItem: [{
      type: Output
    }],
    nzSelectSearchComponent: [{
      type: ViewChild,
      args: [NzSelectSearchComponent]
    }]
  });
})();
var defaultFilterOption = (searchValue, item) => {
  if (item && item.nzLabel) {
    return item.nzLabel.toString().toLowerCase().indexOf(searchValue.toLowerCase()) > -1;
  } else {
    return false;
  }
};
var NZ_CONFIG_MODULE_NAME3 = "select";
var NzSelectComponent = (() => {
  let _nzOptionHeightPx_decorators;
  let _nzOptionHeightPx_initializers = [];
  let _nzOptionHeightPx_extraInitializers = [];
  let _nzSuffixIcon_decorators;
  let _nzSuffixIcon_initializers = [];
  let _nzSuffixIcon_extraInitializers = [];
  let _nzBorderless_decorators;
  let _nzBorderless_initializers = [];
  let _nzBorderless_extraInitializers = [];
  let _nzBackdrop_decorators;
  let _nzBackdrop_initializers = [];
  let _nzBackdrop_extraInitializers = [];
  return class NzSelectComponent2 {
    static {
      const _metadata = typeof Symbol === "function" && Symbol.metadata ? /* @__PURE__ */ Object.create(null) : void 0;
      _nzOptionHeightPx_decorators = [WithConfig()];
      _nzSuffixIcon_decorators = [WithConfig()];
      _nzBorderless_decorators = [WithConfig()];
      _nzBackdrop_decorators = [WithConfig()];
      __esDecorate(null, null, _nzOptionHeightPx_decorators, {
        kind: "field",
        name: "nzOptionHeightPx",
        static: false,
        private: false,
        access: {
          has: (obj) => "nzOptionHeightPx" in obj,
          get: (obj) => obj.nzOptionHeightPx,
          set: (obj, value) => {
            obj.nzOptionHeightPx = value;
          }
        },
        metadata: _metadata
      }, _nzOptionHeightPx_initializers, _nzOptionHeightPx_extraInitializers);
      __esDecorate(null, null, _nzSuffixIcon_decorators, {
        kind: "field",
        name: "nzSuffixIcon",
        static: false,
        private: false,
        access: {
          has: (obj) => "nzSuffixIcon" in obj,
          get: (obj) => obj.nzSuffixIcon,
          set: (obj, value) => {
            obj.nzSuffixIcon = value;
          }
        },
        metadata: _metadata
      }, _nzSuffixIcon_initializers, _nzSuffixIcon_extraInitializers);
      __esDecorate(null, null, _nzBorderless_decorators, {
        kind: "field",
        name: "nzBorderless",
        static: false,
        private: false,
        access: {
          has: (obj) => "nzBorderless" in obj,
          get: (obj) => obj.nzBorderless,
          set: (obj, value) => {
            obj.nzBorderless = value;
          }
        },
        metadata: _metadata
      }, _nzBorderless_initializers, _nzBorderless_extraInitializers);
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
    ngZone;
    destroy$;
    nzConfigService;
    cdr;
    host;
    renderer;
    platform;
    focusMonitor;
    directionality;
    _nzModuleName = NZ_CONFIG_MODULE_NAME3;
    nzId = null;
    nzSize = "default";
    nzStatus = "";
    nzOptionHeightPx = __runInitializers(this, _nzOptionHeightPx_initializers, 32);
    nzOptionOverflowSize = (__runInitializers(this, _nzOptionHeightPx_extraInitializers), 8);
    nzDropdownClassName = null;
    nzDropdownMatchSelectWidth = true;
    nzDropdownStyle = null;
    nzNotFoundContent = void 0;
    nzPlaceHolder = null;
    nzPlacement = null;
    nzMaxTagCount = Infinity;
    nzDropdownRender = null;
    nzCustomTemplate = null;
    nzSuffixIcon = __runInitializers(this, _nzSuffixIcon_initializers, null);
    nzClearIcon = (__runInitializers(this, _nzSuffixIcon_extraInitializers), null);
    nzRemoveIcon = null;
    nzMenuItemSelectedIcon = null;
    nzTokenSeparators = [];
    nzMaxTagPlaceholder = null;
    nzMaxMultipleCount = Infinity;
    nzMode = "default";
    nzFilterOption = defaultFilterOption;
    compareWith = (o1, o2) => o1 === o2;
    nzAllowClear = false;
    nzBorderless = __runInitializers(this, _nzBorderless_initializers, false);
    nzShowSearch = (__runInitializers(this, _nzBorderless_extraInitializers), false);
    nzLoading = false;
    nzAutoFocus = false;
    nzAutoClearSearchValue = true;
    nzServerSearch = false;
    nzDisabled = false;
    nzOpen = false;
    nzSelectOnTab = false;
    nzBackdrop = __runInitializers(this, _nzBackdrop_initializers, false);
    nzOptions = (__runInitializers(this, _nzBackdrop_extraInitializers), []);
    set nzShowArrow(value) {
      this._nzShowArrow = value;
    }
    get nzShowArrow() {
      return this._nzShowArrow === void 0 ? this.nzMode === "default" : this._nzShowArrow;
    }
    get isMultiple() {
      return this.nzMode === "multiple" || this.nzMode === "tags";
    }
    get isMaxMultipleCountSet() {
      return this.isMultiple && this.nzMaxMultipleCount !== Infinity;
    }
    get isMaxMultipleCountReached() {
      return this.nzMaxMultipleCount !== Infinity && this.listOfValue.length === this.nzMaxMultipleCount;
    }
    nzOnSearch = new EventEmitter();
    nzScrollToBottom = new EventEmitter();
    nzOpenChange = new EventEmitter();
    nzBlur = new EventEmitter();
    nzFocus = new EventEmitter();
    originElement;
    cdkConnectedOverlay;
    nzSelectTopControlComponent;
    listOfNzOptionComponent;
    listOfNzOptionGroupComponent;
    nzOptionGroupComponentElement;
    nzSelectTopControlComponentElement;
    finalSize = computed(() => {
      if (this.compactSize) {
        return this.compactSize();
      }
      return this.size();
    });
    size = signal(this.nzSize);
    compactSize = inject(NZ_SPACE_COMPACT_SIZE, {
      optional: true
    });
    listOfValue$ = new BehaviorSubject([]);
    listOfTemplateItem$ = new BehaviorSubject([]);
    listOfTagAndTemplateItem = [];
    searchValue = "";
    isReactiveDriven = false;
    value;
    _nzShowArrow;
    requestId = -1;
    isNzDisableFirstChange = true;
    onChange = () => {
    };
    onTouched = () => {
    };
    dropdownPosition = "bottomLeft";
    triggerWidth = null;
    listOfContainerItem = [];
    listOfTopItem = [];
    activatedValue = null;
    listOfValue = [];
    focused = false;
    dir = "ltr";
    positions = [];
    // status
    prefixCls = "ant-select";
    statusCls = {};
    status = "";
    hasFeedback = false;
    generateTagItem(value) {
      return {
        nzValue: value,
        nzLabel: value,
        type: "item"
      };
    }
    onItemClick(value) {
      this.activatedValue = value;
      if (this.nzMode === "default") {
        if (this.listOfValue.length === 0 || !this.compareWith(this.listOfValue[0], value)) {
          this.updateListOfValue([value]);
        }
        this.setOpenState(false);
      } else {
        const targetIndex = this.listOfValue.findIndex((o) => this.compareWith(o, value));
        if (targetIndex !== -1) {
          const listOfValueAfterRemoved = this.listOfValue.filter((_, i) => i !== targetIndex);
          this.updateListOfValue(listOfValueAfterRemoved);
        } else if (this.listOfValue.length < this.nzMaxMultipleCount) {
          const listOfValueAfterAdded = [...this.listOfValue, value];
          this.updateListOfValue(listOfValueAfterAdded);
        }
        this.focus();
        if (this.nzAutoClearSearchValue) {
          this.clearInput();
        }
      }
    }
    onItemDelete(item) {
      const listOfSelectedValue = this.listOfValue.filter((v) => !this.compareWith(v, item.nzValue));
      this.updateListOfValue(listOfSelectedValue);
      this.clearInput();
    }
    updateListOfContainerItem() {
      let listOfContainerItem = this.listOfTagAndTemplateItem.filter((item) => !item.nzHide).filter((item) => {
        if (!this.nzServerSearch && this.searchValue) {
          return this.nzFilterOption(this.searchValue, item);
        } else {
          return true;
        }
      });
      if (this.nzMode === "tags" && this.searchValue) {
        const matchedItem = this.listOfTagAndTemplateItem.find((item) => item.nzLabel === this.searchValue);
        if (!matchedItem) {
          const tagItem = this.generateTagItem(this.searchValue);
          listOfContainerItem = [tagItem, ...listOfContainerItem];
          this.activatedValue = tagItem.nzValue;
        } else {
          this.activatedValue = matchedItem.nzValue;
        }
      }
      const activatedItem = listOfContainerItem.find((item) => item.nzLabel === this.searchValue) || listOfContainerItem.find((item) => this.compareWith(item.nzValue, this.activatedValue)) || listOfContainerItem.find((item) => this.compareWith(item.nzValue, this.listOfValue[0])) || listOfContainerItem[0];
      this.activatedValue = activatedItem && activatedItem.nzValue || null;
      let listOfGroupLabel = [];
      if (this.isReactiveDriven) {
        listOfGroupLabel = [...new Set(this.nzOptions.filter((o) => o.groupLabel).map((o) => o.groupLabel))];
      } else {
        if (this.listOfNzOptionGroupComponent) {
          listOfGroupLabel = this.listOfNzOptionGroupComponent.map((o) => o.nzLabel);
        }
      }
      listOfGroupLabel.forEach((label) => {
        const index = listOfContainerItem.findIndex((item) => label === item.groupLabel);
        if (index > -1) {
          const groupItem = {
            groupLabel: label,
            type: "group",
            key: label
          };
          listOfContainerItem.splice(index, 0, groupItem);
        }
      });
      this.listOfContainerItem = [...listOfContainerItem];
      this.updateCdkConnectedOverlayPositions();
    }
    clearInput() {
      this.nzSelectTopControlComponent.clearInputValue();
    }
    updateListOfValue(listOfValue) {
      const covertListToModel = (list, mode) => {
        if (mode === "default") {
          if (list.length > 0) {
            return list[0];
          } else {
            return null;
          }
        } else {
          return list;
        }
      };
      const model = covertListToModel(listOfValue, this.nzMode);
      if (this.value !== model) {
        this.listOfValue = listOfValue;
        this.listOfValue$.next(listOfValue);
        this.value = model;
        this.onChange(this.value);
      }
    }
    onTokenSeparate(listOfLabel) {
      const listOfMatchedValue = this.listOfTagAndTemplateItem.filter((item) => listOfLabel.findIndex((label) => label === item.nzLabel) !== -1).map((item) => item.nzValue).filter((item) => this.listOfValue.findIndex((v) => this.compareWith(v, item)) === -1);
      const limitWithinMaxCount = (value) => this.isMaxMultipleCountSet ? value.slice(0, this.nzMaxMultipleCount) : value;
      if (this.nzMode === "multiple") {
        const updateValue = limitWithinMaxCount([...this.listOfValue, ...listOfMatchedValue]);
        this.updateListOfValue(updateValue);
      } else if (this.nzMode === "tags") {
        const listOfUnMatchedLabel = listOfLabel.filter((label) => this.listOfTagAndTemplateItem.findIndex((item) => item.nzLabel === label) === -1);
        const updateValue = limitWithinMaxCount([...this.listOfValue, ...listOfMatchedValue, ...listOfUnMatchedLabel]);
        this.updateListOfValue(updateValue);
      }
      this.clearInput();
    }
    onKeyDown(e) {
      if (this.nzDisabled) {
        return;
      }
      const listOfFilteredOptionNotDisabled = this.listOfContainerItem.filter((item) => item.type === "item").filter((item) => !item.nzDisabled);
      const activatedIndex = listOfFilteredOptionNotDisabled.findIndex((item) => this.compareWith(item.nzValue, this.activatedValue));
      switch (e.keyCode) {
        case UP_ARROW:
          e.preventDefault();
          if (this.nzOpen && listOfFilteredOptionNotDisabled.length > 0) {
            const preIndex = activatedIndex > 0 ? activatedIndex - 1 : listOfFilteredOptionNotDisabled.length - 1;
            this.activatedValue = listOfFilteredOptionNotDisabled[preIndex].nzValue;
          }
          break;
        case DOWN_ARROW:
          e.preventDefault();
          if (this.nzOpen && listOfFilteredOptionNotDisabled.length > 0) {
            const nextIndex = activatedIndex < listOfFilteredOptionNotDisabled.length - 1 ? activatedIndex + 1 : 0;
            this.activatedValue = listOfFilteredOptionNotDisabled[nextIndex].nzValue;
          } else {
            this.setOpenState(true);
          }
          break;
        case ENTER:
          e.preventDefault();
          if (this.nzOpen) {
            if (isNotNil(this.activatedValue) && activatedIndex !== -1) {
              this.onItemClick(this.activatedValue);
            }
          } else {
            this.setOpenState(true);
          }
          break;
        case SPACE:
          if (!this.nzOpen) {
            this.setOpenState(true);
            e.preventDefault();
          }
          break;
        case TAB:
          if (this.nzSelectOnTab) {
            if (this.nzOpen) {
              e.preventDefault();
              if (isNotNil(this.activatedValue)) {
                this.onItemClick(this.activatedValue);
              }
            }
          } else {
            this.setOpenState(false);
          }
          break;
        case ESCAPE:
          break;
        default:
          if (!this.nzOpen) {
            this.setOpenState(true);
          }
      }
    }
    setOpenState(value) {
      if (this.nzOpen !== value) {
        this.nzOpen = value;
        this.nzOpenChange.emit(value);
        this.onOpenChange();
        this.cdr.markForCheck();
      }
    }
    onOpenChange() {
      this.updateCdkConnectedOverlayStatus();
      if (this.nzAutoClearSearchValue) {
        this.clearInput();
      }
    }
    onInputValueChange(value) {
      this.searchValue = value;
      this.updateListOfContainerItem();
      this.nzOnSearch.emit(value);
      this.updateCdkConnectedOverlayPositions();
    }
    onClearSelection() {
      this.updateListOfValue([]);
    }
    onClickOutside(event) {
      const target = _getEventTarget(event);
      if (!this.host.nativeElement.contains(target)) {
        this.setOpenState(false);
      }
    }
    focus() {
      this.nzSelectTopControlComponent.focus();
    }
    blur() {
      this.nzSelectTopControlComponent.blur();
    }
    onPositionChange(position) {
      const placement = getPlacementName(position);
      this.dropdownPosition = placement;
    }
    updateCdkConnectedOverlayStatus() {
      if (this.platform.isBrowser && this.originElement.nativeElement) {
        const triggerWidth = this.triggerWidth;
        cancelRequestAnimationFrame(this.requestId);
        this.requestId = reqAnimFrame(() => {
          this.triggerWidth = this.originElement.nativeElement.getBoundingClientRect().width;
          if (triggerWidth !== this.triggerWidth) {
            this.cdr.detectChanges();
          }
        });
      }
    }
    updateCdkConnectedOverlayPositions() {
      reqAnimFrame(() => {
        this.cdkConnectedOverlay?.overlayRef?.updatePosition();
      });
    }
    noAnimation = inject(NzNoAnimationDirective, {
      host: true,
      optional: true
    });
    nzFormStatusService = inject(NzFormStatusService, {
      optional: true
    });
    nzFormNoStatusService = inject(NzFormNoStatusService, {
      optional: true
    });
    constructor(ngZone, destroy$, nzConfigService, cdr, host, renderer, platform, focusMonitor, directionality) {
      this.ngZone = ngZone;
      this.destroy$ = destroy$;
      this.nzConfigService = nzConfigService;
      this.cdr = cdr;
      this.host = host;
      this.renderer = renderer;
      this.platform = platform;
      this.focusMonitor = focusMonitor;
      this.directionality = directionality;
    }
    writeValue(modelValue) {
      if (this.value !== modelValue) {
        this.value = modelValue;
        const covertModelToList = (model, mode) => {
          if (model === null || model === void 0) {
            return [];
          } else if (mode === "default") {
            return [model];
          } else {
            return model;
          }
        };
        const listOfValue = covertModelToList(modelValue, this.nzMode);
        this.listOfValue = listOfValue;
        this.listOfValue$.next(listOfValue);
        this.cdr.markForCheck();
      }
    }
    registerOnChange(fn) {
      this.onChange = fn;
    }
    registerOnTouched(fn) {
      this.onTouched = fn;
    }
    setDisabledState(disabled) {
      this.nzDisabled = this.isNzDisableFirstChange && this.nzDisabled || disabled;
      this.isNzDisableFirstChange = false;
      if (this.nzDisabled) {
        this.setOpenState(false);
      }
      this.cdr.markForCheck();
    }
    ngOnChanges({
      nzOpen,
      nzDisabled,
      nzOptions,
      nzStatus,
      nzPlacement,
      nzSize
    }) {
      if (nzOpen) {
        this.onOpenChange();
      }
      if (nzDisabled && this.nzDisabled) {
        this.setOpenState(false);
      }
      if (nzOptions) {
        this.isReactiveDriven = true;
        const listOfOptions = this.nzOptions || [];
        const listOfTransformedItem = listOfOptions.map((item) => {
          return {
            template: item.label instanceof TemplateRef ? item.label : null,
            nzTitle: this.getTitle(item.title, item.label),
            nzLabel: typeof item.label === "string" || typeof item.label === "number" ? item.label : null,
            nzValue: item.value,
            nzDisabled: item.disabled || false,
            nzHide: item.hide || false,
            nzCustomContent: item.label instanceof TemplateRef,
            groupLabel: item.groupLabel || null,
            type: "item",
            key: item.key === void 0 ? item.value : item.key
          };
        });
        this.listOfTemplateItem$.next(listOfTransformedItem);
      }
      if (nzStatus) {
        this.setStatusStyles(this.nzStatus, this.hasFeedback);
      }
      if (nzPlacement) {
        const {
          currentValue
        } = nzPlacement;
        this.dropdownPosition = currentValue;
        const listOfPlacement = ["bottomLeft", "topLeft", "bottomRight", "topRight"];
        if (currentValue && listOfPlacement.includes(currentValue)) {
          this.positions = [POSITION_MAP[currentValue]];
        } else {
          this.positions = listOfPlacement.map((e) => POSITION_MAP[e]);
        }
      }
      if (nzSize) {
        this.size.set(nzSize.currentValue);
      }
    }
    ngOnInit() {
      this.nzFormStatusService?.formStatusChanges.pipe(distinctUntilChanged((pre, cur) => {
        return pre.status === cur.status && pre.hasFeedback === cur.hasFeedback;
      }), withLatestFrom(this.nzFormNoStatusService ? this.nzFormNoStatusService.noFormStatus : of(false)), map(([{
        status,
        hasFeedback
      }, noStatus]) => ({
        status: noStatus ? "" : status,
        hasFeedback
      })), takeUntil(this.destroy$)).subscribe(({
        status,
        hasFeedback
      }) => {
        this.setStatusStyles(status, hasFeedback);
      });
      this.focusMonitor.monitor(this.host, true).pipe(takeUntil(this.destroy$)).subscribe((focusOrigin) => {
        if (!focusOrigin) {
          this.focused = false;
          this.cdr.markForCheck();
          this.nzBlur.emit();
          Promise.resolve().then(() => {
            this.onTouched();
          });
        } else {
          this.focused = true;
          this.cdr.markForCheck();
          this.nzFocus.emit();
        }
      });
      combineLatest([this.listOfValue$, this.listOfTemplateItem$]).pipe(takeUntil(this.destroy$)).subscribe(([listOfSelectedValue, listOfTemplateItem]) => {
        const listOfTagItem = listOfSelectedValue.filter(() => this.nzMode === "tags").filter((value) => listOfTemplateItem.findIndex((o) => this.compareWith(o.nzValue, value)) === -1).map((value) => this.listOfTopItem.find((o) => this.compareWith(o.nzValue, value)) || this.generateTagItem(value));
        this.listOfTagAndTemplateItem = [...listOfTemplateItem, ...listOfTagItem];
        this.listOfTopItem = this.listOfValue.map((v) => [...this.listOfTagAndTemplateItem, ...this.listOfTopItem].find((item) => this.compareWith(v, item.nzValue))).filter((item) => !!item);
        this.updateListOfContainerItem();
      });
      this.directionality.change?.pipe(takeUntil(this.destroy$)).subscribe((direction) => {
        this.dir = direction;
        this.cdr.detectChanges();
      });
      this.nzConfigService.getConfigChangeEventForComponent("select").pipe(takeUntil(this.destroy$)).subscribe(() => {
        this.size.set(this.nzSize);
        this.cdr.markForCheck();
      });
      this.dir = this.directionality.value;
      fromEventOutsideAngular(this.host.nativeElement, "click").pipe(takeUntil(this.destroy$)).subscribe(() => {
        if (this.nzOpen && this.nzShowSearch || this.nzDisabled) {
          return;
        }
        this.ngZone.run(() => this.setOpenState(!this.nzOpen));
      });
      this.cdkConnectedOverlay.overlayKeydown.pipe(takeUntil(this.destroy$)).subscribe((event) => {
        if (event.keyCode === ESCAPE) {
          this.setOpenState(false);
        }
      });
    }
    ngAfterContentInit() {
      if (!this.isReactiveDriven) {
        merge(this.listOfNzOptionGroupComponent.changes, this.listOfNzOptionComponent.changes).pipe(startWith(true), switchMap(() => merge(...[this.listOfNzOptionComponent.changes, this.listOfNzOptionGroupComponent.changes, ...this.listOfNzOptionComponent.map((option) => option.changes), ...this.listOfNzOptionGroupComponent.map((option) => option.changes)]).pipe(startWith(true))), takeUntil(this.destroy$)).subscribe(() => {
          const listOfOptionInterface = this.listOfNzOptionComponent.toArray().map((item) => {
            const {
              template,
              nzLabel,
              nzValue,
              nzKey,
              nzDisabled,
              nzHide,
              nzCustomContent,
              groupLabel
            } = item;
            return {
              template,
              nzLabel,
              nzValue,
              nzDisabled,
              nzHide,
              nzCustomContent,
              groupLabel,
              nzTitle: this.getTitle(item.nzTitle, item.nzLabel),
              type: "item",
              key: nzKey === void 0 ? nzValue : nzKey
            };
          });
          this.listOfTemplateItem$.next(listOfOptionInterface);
          this.cdr.markForCheck();
        });
      }
    }
    ngOnDestroy() {
      cancelRequestAnimationFrame(this.requestId);
      this.focusMonitor.stopMonitoring(this.host);
    }
    setStatusStyles(status, hasFeedback) {
      this.status = status;
      this.hasFeedback = hasFeedback;
      this.cdr.markForCheck();
      this.statusCls = getStatusClassNames(this.prefixCls, status, hasFeedback);
      Object.keys(this.statusCls).forEach((status2) => {
        if (this.statusCls[status2]) {
          this.renderer.addClass(this.host.nativeElement, status2);
        } else {
          this.renderer.removeClass(this.host.nativeElement, status2);
        }
      });
    }
    getTitle(title, label) {
      let rawTitle = void 0;
      if (title === void 0) {
        if (typeof label === "string" || typeof label === "number") {
          rawTitle = label.toString();
        }
      } else if (typeof title === "string" || typeof title === "number") {
        rawTitle = title.toString();
      }
      return rawTitle;
    }
    static \u0275fac = function NzSelectComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || NzSelectComponent2)(\u0275\u0275directiveInject(NgZone), \u0275\u0275directiveInject(NzDestroyService), \u0275\u0275directiveInject(NzConfigService), \u0275\u0275directiveInject(ChangeDetectorRef), \u0275\u0275directiveInject(ElementRef), \u0275\u0275directiveInject(Renderer2), \u0275\u0275directiveInject(Platform), \u0275\u0275directiveInject(FocusMonitor), \u0275\u0275directiveInject(Directionality));
    };
    static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
      type: NzSelectComponent2,
      selectors: [["nz-select"]],
      contentQueries: function NzSelectComponent_ContentQueries(rf, ctx, dirIndex) {
        if (rf & 1) {
          \u0275\u0275contentQuery(dirIndex, NzOptionComponent, 5);
          \u0275\u0275contentQuery(dirIndex, NzOptionGroupComponent, 5);
        }
        if (rf & 2) {
          let _t;
          \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.listOfNzOptionComponent = _t);
          \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.listOfNzOptionGroupComponent = _t);
        }
      },
      viewQuery: function NzSelectComponent_Query(rf, ctx) {
        if (rf & 1) {
          \u0275\u0275viewQuery(CdkOverlayOrigin, 7, ElementRef);
          \u0275\u0275viewQuery(CdkConnectedOverlay, 7);
          \u0275\u0275viewQuery(NzSelectTopControlComponent, 7);
          \u0275\u0275viewQuery(NzOptionGroupComponent, 7, ElementRef);
          \u0275\u0275viewQuery(NzSelectTopControlComponent, 7, ElementRef);
        }
        if (rf & 2) {
          let _t;
          \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.originElement = _t.first);
          \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.cdkConnectedOverlay = _t.first);
          \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.nzSelectTopControlComponent = _t.first);
          \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.nzOptionGroupComponentElement = _t.first);
          \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.nzSelectTopControlComponentElement = _t.first);
        }
      },
      hostAttrs: [1, "ant-select"],
      hostVars: 26,
      hostBindings: function NzSelectComponent_HostBindings(rf, ctx) {
        if (rf & 2) {
          \u0275\u0275classProp("ant-select-in-form-item", !!ctx.nzFormStatusService)("ant-select-lg", ctx.finalSize() === "large")("ant-select-sm", ctx.finalSize() === "small")("ant-select-show-arrow", ctx.nzShowArrow)("ant-select-disabled", ctx.nzDisabled)("ant-select-show-search", (ctx.nzShowSearch || ctx.nzMode !== "default") && !ctx.nzDisabled)("ant-select-allow-clear", ctx.nzAllowClear)("ant-select-borderless", ctx.nzBorderless)("ant-select-open", ctx.nzOpen)("ant-select-focused", ctx.nzOpen || ctx.focused)("ant-select-single", ctx.nzMode === "default")("ant-select-multiple", ctx.nzMode !== "default")("ant-select-rtl", ctx.dir === "rtl");
        }
      },
      inputs: {
        nzId: "nzId",
        nzSize: "nzSize",
        nzStatus: "nzStatus",
        nzOptionHeightPx: "nzOptionHeightPx",
        nzOptionOverflowSize: "nzOptionOverflowSize",
        nzDropdownClassName: "nzDropdownClassName",
        nzDropdownMatchSelectWidth: "nzDropdownMatchSelectWidth",
        nzDropdownStyle: "nzDropdownStyle",
        nzNotFoundContent: "nzNotFoundContent",
        nzPlaceHolder: "nzPlaceHolder",
        nzPlacement: "nzPlacement",
        nzMaxTagCount: "nzMaxTagCount",
        nzDropdownRender: "nzDropdownRender",
        nzCustomTemplate: "nzCustomTemplate",
        nzSuffixIcon: "nzSuffixIcon",
        nzClearIcon: "nzClearIcon",
        nzRemoveIcon: "nzRemoveIcon",
        nzMenuItemSelectedIcon: "nzMenuItemSelectedIcon",
        nzTokenSeparators: "nzTokenSeparators",
        nzMaxTagPlaceholder: "nzMaxTagPlaceholder",
        nzMaxMultipleCount: [2, "nzMaxMultipleCount", "nzMaxMultipleCount", numberAttributeWithInfinityFallback],
        nzMode: "nzMode",
        nzFilterOption: "nzFilterOption",
        compareWith: "compareWith",
        nzAllowClear: [2, "nzAllowClear", "nzAllowClear", booleanAttribute],
        nzBorderless: [2, "nzBorderless", "nzBorderless", booleanAttribute],
        nzShowSearch: [2, "nzShowSearch", "nzShowSearch", booleanAttribute],
        nzLoading: [2, "nzLoading", "nzLoading", booleanAttribute],
        nzAutoFocus: [2, "nzAutoFocus", "nzAutoFocus", booleanAttribute],
        nzAutoClearSearchValue: [2, "nzAutoClearSearchValue", "nzAutoClearSearchValue", booleanAttribute],
        nzServerSearch: [2, "nzServerSearch", "nzServerSearch", booleanAttribute],
        nzDisabled: [2, "nzDisabled", "nzDisabled", booleanAttribute],
        nzOpen: [2, "nzOpen", "nzOpen", booleanAttribute],
        nzSelectOnTab: [2, "nzSelectOnTab", "nzSelectOnTab", booleanAttribute],
        nzBackdrop: [2, "nzBackdrop", "nzBackdrop", booleanAttribute],
        nzOptions: "nzOptions",
        nzShowArrow: [2, "nzShowArrow", "nzShowArrow", booleanAttribute]
      },
      outputs: {
        nzOnSearch: "nzOnSearch",
        nzScrollToBottom: "nzScrollToBottom",
        nzOpenChange: "nzOpenChange",
        nzBlur: "nzBlur",
        nzFocus: "nzFocus"
      },
      exportAs: ["nzSelect"],
      features: [\u0275\u0275ProvidersFeature([NzDestroyService, {
        provide: NG_VALUE_ACCESSOR,
        useExisting: forwardRef(() => NzSelectComponent2),
        multi: true
      }, {
        provide: NZ_SPACE_COMPACT_ITEM_TYPE,
        useValue: "select"
      }]), \u0275\u0275HostDirectivesFeature([NzSpaceCompactItemDirective]), \u0275\u0275NgOnChangesFeature],
      decls: 5,
      vars: 25,
      consts: [["origin", "cdkOverlayOrigin"], ["feedbackIconTpl", ""], ["cdkOverlayOrigin", "", 3, "inputValueChange", "tokenize", "deleteItem", "keydown", "nzId", "open", "disabled", "mode", "nzNoAnimation", "maxTagPlaceholder", "removeIcon", "placeHolder", "maxTagCount", "customTemplate", "tokenSeparators", "showSearch", "autofocus", "listOfTopItem"], [3, "showArrow", "loading", "search", "suffixIcon", "feedbackIcon", "nzMaxMultipleCount", "listOfValue", "isMaxMultipleCountSet"], [3, "clearIcon"], ["cdkConnectedOverlay", "", "nzConnectedOverlay", "", 3, "overlayOutsideClick", "detach", "positionChange", "cdkConnectedOverlayHasBackdrop", "cdkConnectedOverlayMinWidth", "cdkConnectedOverlayWidth", "cdkConnectedOverlayOrigin", "cdkConnectedOverlayTransformOriginOn", "cdkConnectedOverlayPanelClass", "cdkConnectedOverlayOpen", "cdkConnectedOverlayPositions"], [3, "status"], [3, "clear", "clearIcon"], [3, "keydown", "itemClick", "scrollToBottom", "itemSize", "maxItemLength", "matchWidth", "nzNoAnimation", "listOfContainerItem", "menuItemSelectedIcon", "notFoundContent", "activatedValue", "listOfSelectedValue", "dropdownRender", "compareWith", "mode", "isMaxMultipleCountReached"]],
      template: function NzSelectComponent_Template(rf, ctx) {
        if (rf & 1) {
          const _r1 = \u0275\u0275getCurrentView();
          \u0275\u0275elementStart(0, "nz-select-top-control", 2, 0);
          \u0275\u0275listener("inputValueChange", function NzSelectComponent_Template_nz_select_top_control_inputValueChange_0_listener($event) {
            \u0275\u0275restoreView(_r1);
            return \u0275\u0275resetView(ctx.onInputValueChange($event));
          })("tokenize", function NzSelectComponent_Template_nz_select_top_control_tokenize_0_listener($event) {
            \u0275\u0275restoreView(_r1);
            return \u0275\u0275resetView(ctx.onTokenSeparate($event));
          })("deleteItem", function NzSelectComponent_Template_nz_select_top_control_deleteItem_0_listener($event) {
            \u0275\u0275restoreView(_r1);
            return \u0275\u0275resetView(ctx.onItemDelete($event));
          })("keydown", function NzSelectComponent_Template_nz_select_top_control_keydown_0_listener($event) {
            \u0275\u0275restoreView(_r1);
            return \u0275\u0275resetView(ctx.onKeyDown($event));
          });
          \u0275\u0275elementEnd();
          \u0275\u0275template(2, NzSelectComponent_Conditional_2_Template, 3, 8, "nz-select-arrow", 3)(3, NzSelectComponent_Conditional_3_Template, 1, 1, "nz-select-clear", 4)(4, NzSelectComponent_ng_template_4_Template, 1, 25, "ng-template", 5);
          \u0275\u0275listener("overlayOutsideClick", function NzSelectComponent_Template_ng_template_overlayOutsideClick_4_listener($event) {
            \u0275\u0275restoreView(_r1);
            return \u0275\u0275resetView(ctx.onClickOutside($event));
          })("detach", function NzSelectComponent_Template_ng_template_detach_4_listener() {
            \u0275\u0275restoreView(_r1);
            return \u0275\u0275resetView(ctx.setOpenState(false));
          })("positionChange", function NzSelectComponent_Template_ng_template_positionChange_4_listener($event) {
            \u0275\u0275restoreView(_r1);
            return \u0275\u0275resetView(ctx.onPositionChange($event));
          });
        }
        if (rf & 2) {
          const origin_r6 = \u0275\u0275reference(1);
          \u0275\u0275property("nzId", ctx.nzId)("open", ctx.nzOpen)("disabled", ctx.nzDisabled)("mode", ctx.nzMode)("@.disabled", !!(ctx.noAnimation == null ? null : ctx.noAnimation.nzNoAnimation))("nzNoAnimation", ctx.noAnimation == null ? null : ctx.noAnimation.nzNoAnimation)("maxTagPlaceholder", ctx.nzMaxTagPlaceholder)("removeIcon", ctx.nzRemoveIcon)("placeHolder", ctx.nzPlaceHolder)("maxTagCount", ctx.nzMaxTagCount)("customTemplate", ctx.nzCustomTemplate)("tokenSeparators", ctx.nzTokenSeparators)("showSearch", ctx.nzShowSearch)("autofocus", ctx.nzAutoFocus)("listOfTopItem", ctx.listOfTopItem);
          \u0275\u0275advance(2);
          \u0275\u0275conditional(ctx.nzShowArrow || ctx.hasFeedback && !!ctx.status || ctx.isMaxMultipleCountSet ? 2 : -1);
          \u0275\u0275advance();
          \u0275\u0275conditional(ctx.nzAllowClear && !ctx.nzDisabled && ctx.listOfValue.length ? 3 : -1);
          \u0275\u0275advance();
          \u0275\u0275property("cdkConnectedOverlayHasBackdrop", ctx.nzBackdrop)("cdkConnectedOverlayMinWidth", ctx.nzDropdownMatchSelectWidth ? null : ctx.triggerWidth)("cdkConnectedOverlayWidth", ctx.nzDropdownMatchSelectWidth ? ctx.triggerWidth : null)("cdkConnectedOverlayOrigin", origin_r6)("cdkConnectedOverlayTransformOriginOn", ".ant-select-dropdown")("cdkConnectedOverlayPanelClass", ctx.nzDropdownClassName)("cdkConnectedOverlayOpen", ctx.nzOpen)("cdkConnectedOverlayPositions", ctx.positions);
        }
      },
      dependencies: [NzSelectTopControlComponent, CdkOverlayOrigin, NzNoAnimationDirective, NzSelectArrowComponent, NzFormItemFeedbackIconComponent, NzSelectClearComponent, CdkConnectedOverlay, NzOverlayModule, NzConnectedOverlayDirective, NzOptionContainerComponent],
      encapsulation: 2,
      data: {
        animation: [slideMotion]
      },
      changeDetection: 0
    });
  };
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzSelectComponent, [{
    type: Component,
    args: [{
      selector: "nz-select",
      exportAs: "nzSelect",
      preserveWhitespaces: false,
      providers: [NzDestroyService, {
        provide: NG_VALUE_ACCESSOR,
        useExisting: forwardRef(() => NzSelectComponent),
        multi: true
      }, {
        provide: NZ_SPACE_COMPACT_ITEM_TYPE,
        useValue: "select"
      }],
      changeDetection: ChangeDetectionStrategy.OnPush,
      encapsulation: ViewEncapsulation.None,
      animations: [slideMotion],
      template: `
    <nz-select-top-control
      cdkOverlayOrigin
      #origin="cdkOverlayOrigin"
      [nzId]="nzId"
      [open]="nzOpen"
      [disabled]="nzDisabled"
      [mode]="nzMode"
      [@.disabled]="!!noAnimation?.nzNoAnimation"
      [nzNoAnimation]="noAnimation?.nzNoAnimation"
      [maxTagPlaceholder]="nzMaxTagPlaceholder"
      [removeIcon]="nzRemoveIcon"
      [placeHolder]="nzPlaceHolder"
      [maxTagCount]="nzMaxTagCount"
      [customTemplate]="nzCustomTemplate"
      [tokenSeparators]="nzTokenSeparators"
      [showSearch]="nzShowSearch"
      [autofocus]="nzAutoFocus"
      [listOfTopItem]="listOfTopItem"
      (inputValueChange)="onInputValueChange($event)"
      (tokenize)="onTokenSeparate($event)"
      (deleteItem)="onItemDelete($event)"
      (keydown)="onKeyDown($event)"
    ></nz-select-top-control>
    @if (nzShowArrow || (hasFeedback && !!status) || isMaxMultipleCountSet) {
      <nz-select-arrow
        [showArrow]="nzShowArrow"
        [loading]="nzLoading"
        [search]="nzOpen && nzShowSearch"
        [suffixIcon]="nzSuffixIcon"
        [feedbackIcon]="feedbackIconTpl"
        [nzMaxMultipleCount]="nzMaxMultipleCount"
        [listOfValue]="listOfValue"
        [isMaxMultipleCountSet]="isMaxMultipleCountSet"
      >
        <ng-template #feedbackIconTpl>
          @if (hasFeedback && !!status) {
            <nz-form-item-feedback-icon [status]="status"></nz-form-item-feedback-icon>
          }
        </ng-template>
      </nz-select-arrow>
    }

    @if (nzAllowClear && !nzDisabled && listOfValue.length) {
      <nz-select-clear [clearIcon]="nzClearIcon" (clear)="onClearSelection()"></nz-select-clear>
    }
    <ng-template
      cdkConnectedOverlay
      nzConnectedOverlay
      [cdkConnectedOverlayHasBackdrop]="nzBackdrop"
      [cdkConnectedOverlayMinWidth]="$any(nzDropdownMatchSelectWidth ? null : triggerWidth)"
      [cdkConnectedOverlayWidth]="$any(nzDropdownMatchSelectWidth ? triggerWidth : null)"
      [cdkConnectedOverlayOrigin]="origin"
      [cdkConnectedOverlayTransformOriginOn]="'.ant-select-dropdown'"
      [cdkConnectedOverlayPanelClass]="nzDropdownClassName!"
      [cdkConnectedOverlayOpen]="nzOpen"
      [cdkConnectedOverlayPositions]="positions"
      (overlayOutsideClick)="onClickOutside($event)"
      (detach)="setOpenState(false)"
      (positionChange)="onPositionChange($event)"
    >
      <nz-option-container
        [style]="nzDropdownStyle"
        [itemSize]="nzOptionHeightPx"
        [maxItemLength]="nzOptionOverflowSize"
        [matchWidth]="nzDropdownMatchSelectWidth"
        [class.ant-select-dropdown-placement-bottomLeft]="dropdownPosition === 'bottomLeft'"
        [class.ant-select-dropdown-placement-topLeft]="dropdownPosition === 'topLeft'"
        [class.ant-select-dropdown-placement-bottomRight]="dropdownPosition === 'bottomRight'"
        [class.ant-select-dropdown-placement-topRight]="dropdownPosition === 'topRight'"
        [@slideMotion]="'enter'"
        [@.disabled]="!!noAnimation?.nzNoAnimation"
        [nzNoAnimation]="noAnimation?.nzNoAnimation"
        [listOfContainerItem]="listOfContainerItem"
        [menuItemSelectedIcon]="nzMenuItemSelectedIcon"
        [notFoundContent]="nzNotFoundContent"
        [activatedValue]="activatedValue"
        [listOfSelectedValue]="listOfValue"
        [dropdownRender]="nzDropdownRender"
        [compareWith]="compareWith"
        [mode]="nzMode"
        [isMaxMultipleCountReached]="isMaxMultipleCountReached"
        (keydown)="onKeyDown($event)"
        (itemClick)="onItemClick($event)"
        (scrollToBottom)="nzScrollToBottom.emit()"
      ></nz-option-container>
    </ng-template>
  `,
      host: {
        class: "ant-select",
        "[class.ant-select-in-form-item]": "!!nzFormStatusService",
        "[class.ant-select-lg]": 'finalSize() === "large"',
        "[class.ant-select-sm]": 'finalSize() === "small"',
        "[class.ant-select-show-arrow]": `nzShowArrow`,
        "[class.ant-select-disabled]": "nzDisabled",
        "[class.ant-select-show-search]": `(nzShowSearch || nzMode !== 'default') && !nzDisabled`,
        "[class.ant-select-allow-clear]": "nzAllowClear",
        "[class.ant-select-borderless]": "nzBorderless",
        "[class.ant-select-open]": "nzOpen",
        "[class.ant-select-focused]": "nzOpen || focused",
        "[class.ant-select-single]": `nzMode === 'default'`,
        "[class.ant-select-multiple]": `nzMode !== 'default'`,
        "[class.ant-select-rtl]": `dir === 'rtl'`
      },
      hostDirectives: [NzSpaceCompactItemDirective],
      imports: [NzSelectTopControlComponent, CdkOverlayOrigin, NzNoAnimationDirective, NzSelectArrowComponent, NzFormItemFeedbackIconComponent, NzSelectClearComponent, CdkConnectedOverlay, NzOverlayModule, NzOptionContainerComponent]
    }]
  }], () => [{
    type: NgZone
  }, {
    type: NzDestroyService
  }, {
    type: NzConfigService
  }, {
    type: ChangeDetectorRef
  }, {
    type: ElementRef
  }, {
    type: Renderer2
  }, {
    type: Platform
  }, {
    type: FocusMonitor
  }, {
    type: Directionality
  }], {
    nzId: [{
      type: Input
    }],
    nzSize: [{
      type: Input
    }],
    nzStatus: [{
      type: Input
    }],
    nzOptionHeightPx: [{
      type: Input
    }],
    nzOptionOverflowSize: [{
      type: Input
    }],
    nzDropdownClassName: [{
      type: Input
    }],
    nzDropdownMatchSelectWidth: [{
      type: Input
    }],
    nzDropdownStyle: [{
      type: Input
    }],
    nzNotFoundContent: [{
      type: Input
    }],
    nzPlaceHolder: [{
      type: Input
    }],
    nzPlacement: [{
      type: Input
    }],
    nzMaxTagCount: [{
      type: Input
    }],
    nzDropdownRender: [{
      type: Input
    }],
    nzCustomTemplate: [{
      type: Input
    }],
    nzSuffixIcon: [{
      type: Input
    }],
    nzClearIcon: [{
      type: Input
    }],
    nzRemoveIcon: [{
      type: Input
    }],
    nzMenuItemSelectedIcon: [{
      type: Input
    }],
    nzTokenSeparators: [{
      type: Input
    }],
    nzMaxTagPlaceholder: [{
      type: Input
    }],
    nzMaxMultipleCount: [{
      type: Input,
      args: [{
        transform: numberAttributeWithInfinityFallback
      }]
    }],
    nzMode: [{
      type: Input
    }],
    nzFilterOption: [{
      type: Input
    }],
    compareWith: [{
      type: Input
    }],
    nzAllowClear: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    nzBorderless: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    nzShowSearch: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    nzLoading: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    nzAutoFocus: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    nzAutoClearSearchValue: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    nzServerSearch: [{
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
    nzOpen: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    nzSelectOnTab: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    nzBackdrop: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    nzOptions: [{
      type: Input
    }],
    nzShowArrow: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    nzOnSearch: [{
      type: Output
    }],
    nzScrollToBottom: [{
      type: Output
    }],
    nzOpenChange: [{
      type: Output
    }],
    nzBlur: [{
      type: Output
    }],
    nzFocus: [{
      type: Output
    }],
    originElement: [{
      type: ViewChild,
      args: [CdkOverlayOrigin, {
        static: true,
        read: ElementRef
      }]
    }],
    cdkConnectedOverlay: [{
      type: ViewChild,
      args: [CdkConnectedOverlay, {
        static: true
      }]
    }],
    nzSelectTopControlComponent: [{
      type: ViewChild,
      args: [NzSelectTopControlComponent, {
        static: true
      }]
    }],
    listOfNzOptionComponent: [{
      type: ContentChildren,
      args: [NzOptionComponent, {
        descendants: true
      }]
    }],
    listOfNzOptionGroupComponent: [{
      type: ContentChildren,
      args: [NzOptionGroupComponent, {
        descendants: true
      }]
    }],
    nzOptionGroupComponentElement: [{
      type: ViewChild,
      args: [NzOptionGroupComponent, {
        static: true,
        read: ElementRef
      }]
    }],
    nzSelectTopControlComponentElement: [{
      type: ViewChild,
      args: [NzSelectTopControlComponent, {
        static: true,
        read: ElementRef
      }]
    }]
  });
})();
var NzSelectModule = class _NzSelectModule {
  static \u0275fac = function NzSelectModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _NzSelectModule)();
  };
  static \u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
    type: _NzSelectModule
  });
  static \u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({
    imports: [NzSelectComponent, NzOptionContainerComponent, NzOptionItemComponent, NzSelectTopControlComponent, NzSelectSearchComponent, NzSelectItemComponent, NzSelectClearComponent, NzSelectArrowComponent, NzSelectPlaceholderComponent, NzOptionItemGroupComponent]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzSelectModule, [{
    type: NgModule,
    args: [{
      imports: [NzOptionComponent, NzSelectComponent, NzOptionContainerComponent, NzOptionGroupComponent, NzOptionItemComponent, NzSelectTopControlComponent, NzSelectSearchComponent, NzSelectItemComponent, NzSelectClearComponent, NzSelectArrowComponent, NzSelectPlaceholderComponent, NzOptionItemGroupComponent],
      exports: [NzOptionComponent, NzSelectComponent, NzOptionGroupComponent, NzSelectArrowComponent, NzSelectClearComponent, NzSelectItemComponent, NzSelectPlaceholderComponent, NzSelectSearchComponent]
    }]
  }], null, null);
})();

// node_modules/ng-zorro-antd/fesm2022/ng-zorro-antd-radio.mjs
var _c05 = ["*"];
var _c14 = ["inputElement"];
var _c24 = ["nz-radio", ""];
var NzRadioService = class _NzRadioService {
  selected$ = new ReplaySubject(1);
  touched$ = new Subject();
  disabled$ = new ReplaySubject(1);
  name$ = new ReplaySubject(1);
  touch() {
    this.touched$.next();
  }
  select(value) {
    this.selected$.next(value);
  }
  setDisabled(value) {
    this.disabled$.next(value);
  }
  setName(value) {
    this.name$.next(value);
  }
  static \u0275fac = function NzRadioService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _NzRadioService)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
    token: _NzRadioService,
    factory: _NzRadioService.\u0275fac
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzRadioService, [{
    type: Injectable
  }], null, null);
})();
var NzRadioGroupComponent = class _NzRadioGroupComponent {
  cdr;
  nzRadioService;
  directionality;
  value = null;
  destroy$ = new Subject();
  isNzDisableFirstChange = true;
  onChange = () => {
  };
  onTouched = () => {
  };
  nzDisabled = false;
  nzButtonStyle = "outline";
  nzSize = "default";
  nzName = null;
  dir = "ltr";
  constructor(cdr, nzRadioService, directionality) {
    this.cdr = cdr;
    this.nzRadioService = nzRadioService;
    this.directionality = directionality;
  }
  ngOnInit() {
    this.nzRadioService.selected$.pipe(takeUntil(this.destroy$)).subscribe((value) => {
      if (this.value !== value) {
        this.value = value;
        this.onChange(this.value);
      }
    });
    this.nzRadioService.touched$.pipe(takeUntil(this.destroy$)).subscribe(() => {
      Promise.resolve().then(() => this.onTouched());
    });
    this.directionality.change?.pipe(takeUntil(this.destroy$)).subscribe((direction) => {
      this.dir = direction;
      this.cdr.detectChanges();
    });
    this.dir = this.directionality.value;
  }
  ngOnChanges(changes) {
    const {
      nzDisabled,
      nzName
    } = changes;
    if (nzDisabled) {
      this.nzRadioService.setDisabled(this.nzDisabled);
    }
    if (nzName) {
      this.nzRadioService.setName(this.nzName);
    }
  }
  ngOnDestroy() {
    this.destroy$.next(true);
    this.destroy$.complete();
  }
  writeValue(value) {
    this.value = value;
    this.nzRadioService.select(value);
    this.cdr.markForCheck();
  }
  registerOnChange(fn) {
    this.onChange = fn;
  }
  registerOnTouched(fn) {
    this.onTouched = fn;
  }
  setDisabledState(isDisabled) {
    this.nzDisabled = this.isNzDisableFirstChange && this.nzDisabled || isDisabled;
    this.isNzDisableFirstChange = false;
    this.nzRadioService.setDisabled(this.nzDisabled);
    this.cdr.markForCheck();
  }
  static \u0275fac = function NzRadioGroupComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _NzRadioGroupComponent)(\u0275\u0275directiveInject(ChangeDetectorRef), \u0275\u0275directiveInject(NzRadioService), \u0275\u0275directiveInject(Directionality));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _NzRadioGroupComponent,
    selectors: [["nz-radio-group"]],
    hostAttrs: [1, "ant-radio-group"],
    hostVars: 8,
    hostBindings: function NzRadioGroupComponent_HostBindings(rf, ctx) {
      if (rf & 2) {
        \u0275\u0275classProp("ant-radio-group-large", ctx.nzSize === "large")("ant-radio-group-small", ctx.nzSize === "small")("ant-radio-group-solid", ctx.nzButtonStyle === "solid")("ant-radio-group-rtl", ctx.dir === "rtl");
      }
    },
    inputs: {
      nzDisabled: [2, "nzDisabled", "nzDisabled", booleanAttribute],
      nzButtonStyle: "nzButtonStyle",
      nzSize: "nzSize",
      nzName: "nzName"
    },
    exportAs: ["nzRadioGroup"],
    features: [\u0275\u0275ProvidersFeature([NzRadioService, {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => _NzRadioGroupComponent),
      multi: true
    }]), \u0275\u0275NgOnChangesFeature],
    ngContentSelectors: _c05,
    decls: 1,
    vars: 0,
    template: function NzRadioGroupComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275projectionDef();
        \u0275\u0275projection(0);
      }
    },
    encapsulation: 2,
    changeDetection: 0
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzRadioGroupComponent, [{
    type: Component,
    args: [{
      selector: "nz-radio-group",
      exportAs: "nzRadioGroup",
      preserveWhitespaces: false,
      template: ` <ng-content></ng-content> `,
      encapsulation: ViewEncapsulation.None,
      changeDetection: ChangeDetectionStrategy.OnPush,
      providers: [NzRadioService, {
        provide: NG_VALUE_ACCESSOR,
        useExisting: forwardRef(() => NzRadioGroupComponent),
        multi: true
      }],
      host: {
        class: "ant-radio-group",
        "[class.ant-radio-group-large]": `nzSize === 'large'`,
        "[class.ant-radio-group-small]": `nzSize === 'small'`,
        "[class.ant-radio-group-solid]": `nzButtonStyle === 'solid'`,
        "[class.ant-radio-group-rtl]": `dir === 'rtl'`
      }
    }]
  }], () => [{
    type: ChangeDetectorRef
  }, {
    type: NzRadioService
  }, {
    type: Directionality
  }], {
    nzDisabled: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    nzButtonStyle: [{
      type: Input
    }],
    nzSize: [{
      type: Input
    }],
    nzName: [{
      type: Input
    }]
  });
})();
var NzRadioComponent = class _NzRadioComponent {
  ngZone;
  elementRef;
  cdr;
  focusMonitor;
  isNgModel = false;
  destroy$ = new Subject();
  isNzDisableFirstChange = true;
  directionality = inject(Directionality);
  nzRadioService = inject(NzRadioService, {
    optional: true
  });
  nzFormStatusService = inject(NzFormStatusService, {
    optional: true
  });
  isChecked = false;
  name = null;
  onChange = () => {
  };
  onTouched = () => {
  };
  inputElement;
  nzValue = null;
  nzDisabled = false;
  nzAutoFocus = false;
  isRadioButton = false;
  dir = "ltr";
  focus() {
    this.focusMonitor.focusVia(this.inputElement, "keyboard");
  }
  blur() {
    this.inputElement.nativeElement.blur();
  }
  constructor(ngZone, elementRef, cdr, focusMonitor) {
    this.ngZone = ngZone;
    this.elementRef = elementRef;
    this.cdr = cdr;
    this.focusMonitor = focusMonitor;
  }
  setDisabledState(disabled) {
    this.nzDisabled = this.isNzDisableFirstChange && this.nzDisabled || disabled;
    this.isNzDisableFirstChange = false;
    this.cdr.markForCheck();
  }
  writeValue(value) {
    this.isChecked = value;
    this.cdr.markForCheck();
  }
  registerOnChange(fn) {
    this.isNgModel = true;
    this.onChange = fn;
  }
  registerOnTouched(fn) {
    this.onTouched = fn;
  }
  ngOnInit() {
    if (this.nzRadioService) {
      this.nzRadioService.name$.pipe(takeUntil(this.destroy$)).subscribe((name) => {
        this.name = name;
        this.cdr.markForCheck();
      });
      this.nzRadioService.disabled$.pipe(takeUntil(this.destroy$)).subscribe((disabled) => {
        this.nzDisabled = this.isNzDisableFirstChange && this.nzDisabled || disabled;
        this.isNzDisableFirstChange = false;
        this.cdr.markForCheck();
      });
      this.nzRadioService.selected$.pipe(takeUntil(this.destroy$)).subscribe((value) => {
        const isChecked = this.isChecked;
        this.isChecked = this.nzValue === value;
        if (this.isNgModel && isChecked !== this.isChecked && // We're only intereted if `isChecked` has been changed to `false` value to emit `false` to the ascendant form,
        // since we already emit `true` within the `setupClickListener`.
        this.isChecked === false) {
          this.onChange(false);
        }
        this.cdr.markForCheck();
      });
    }
    this.focusMonitor.monitor(this.elementRef, true).pipe(takeUntil(this.destroy$)).subscribe((focusOrigin) => {
      if (!focusOrigin) {
        Promise.resolve().then(() => this.onTouched());
        if (this.nzRadioService) {
          this.nzRadioService.touch();
        }
      }
    });
    this.directionality.change.pipe(takeUntil(this.destroy$)).subscribe((direction) => {
      this.dir = direction;
      this.cdr.detectChanges();
    });
    this.dir = this.directionality.value;
    this.setupClickListener();
  }
  ngAfterViewInit() {
    if (this.nzAutoFocus) {
      this.focus();
    }
  }
  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
    this.focusMonitor.stopMonitoring(this.elementRef);
  }
  setupClickListener() {
    fromEventOutsideAngular(this.elementRef.nativeElement, "click").pipe(takeUntil(this.destroy$)).subscribe((event) => {
      event.stopPropagation();
      event.preventDefault();
      if (this.nzDisabled || this.isChecked) {
        return;
      }
      this.ngZone.run(() => {
        this.focus();
        this.nzRadioService?.select(this.nzValue);
        if (this.isNgModel) {
          this.isChecked = true;
          this.onChange(true);
        }
        this.cdr.markForCheck();
      });
    });
  }
  static \u0275fac = function NzRadioComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _NzRadioComponent)(\u0275\u0275directiveInject(NgZone), \u0275\u0275directiveInject(ElementRef), \u0275\u0275directiveInject(ChangeDetectorRef), \u0275\u0275directiveInject(FocusMonitor));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _NzRadioComponent,
    selectors: [["", "nz-radio", ""], ["", "nz-radio-button", ""]],
    viewQuery: function NzRadioComponent_Query(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275viewQuery(_c14, 7);
      }
      if (rf & 2) {
        let _t;
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.inputElement = _t.first);
      }
    },
    hostVars: 18,
    hostBindings: function NzRadioComponent_HostBindings(rf, ctx) {
      if (rf & 2) {
        \u0275\u0275classProp("ant-radio-wrapper-in-form-item", !!ctx.nzFormStatusService)("ant-radio-wrapper", !ctx.isRadioButton)("ant-radio-button-wrapper", ctx.isRadioButton)("ant-radio-wrapper-checked", ctx.isChecked && !ctx.isRadioButton)("ant-radio-button-wrapper-checked", ctx.isChecked && ctx.isRadioButton)("ant-radio-wrapper-disabled", ctx.nzDisabled && !ctx.isRadioButton)("ant-radio-button-wrapper-disabled", ctx.nzDisabled && ctx.isRadioButton)("ant-radio-wrapper-rtl", !ctx.isRadioButton && ctx.dir === "rtl")("ant-radio-button-wrapper-rtl", ctx.isRadioButton && ctx.dir === "rtl");
      }
    },
    inputs: {
      nzValue: "nzValue",
      nzDisabled: [2, "nzDisabled", "nzDisabled", booleanAttribute],
      nzAutoFocus: [2, "nzAutoFocus", "nzAutoFocus", booleanAttribute],
      isRadioButton: [2, "nz-radio-button", "isRadioButton", booleanAttribute]
    },
    exportAs: ["nzRadio"],
    features: [\u0275\u0275ProvidersFeature([{
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => _NzRadioComponent),
      multi: true
    }])],
    attrs: _c24,
    ngContentSelectors: _c05,
    decls: 6,
    vars: 24,
    consts: [["inputElement", ""], ["type", "radio", 3, "disabled", "checked"]],
    template: function NzRadioComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275projectionDef();
        \u0275\u0275elementStart(0, "span");
        \u0275\u0275element(1, "input", 1, 0)(3, "span");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(4, "span");
        \u0275\u0275projection(5);
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        \u0275\u0275classProp("ant-radio", !ctx.isRadioButton)("ant-radio-checked", ctx.isChecked && !ctx.isRadioButton)("ant-radio-disabled", ctx.nzDisabled && !ctx.isRadioButton)("ant-radio-button", ctx.isRadioButton)("ant-radio-button-checked", ctx.isChecked && ctx.isRadioButton)("ant-radio-button-disabled", ctx.nzDisabled && ctx.isRadioButton);
        \u0275\u0275advance();
        \u0275\u0275classProp("ant-radio-input", !ctx.isRadioButton)("ant-radio-button-input", ctx.isRadioButton);
        \u0275\u0275property("disabled", ctx.nzDisabled)("checked", ctx.isChecked);
        \u0275\u0275attribute("autofocus", ctx.nzAutoFocus ? "autofocus" : null)("name", ctx.name);
        \u0275\u0275advance(2);
        \u0275\u0275classProp("ant-radio-inner", !ctx.isRadioButton)("ant-radio-button-inner", ctx.isRadioButton);
      }
    },
    encapsulation: 2,
    changeDetection: 0
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzRadioComponent, [{
    type: Component,
    args: [{
      selector: "[nz-radio],[nz-radio-button]",
      exportAs: "nzRadio",
      preserveWhitespaces: false,
      template: `
    <span
      [class.ant-radio]="!isRadioButton"
      [class.ant-radio-checked]="isChecked && !isRadioButton"
      [class.ant-radio-disabled]="nzDisabled && !isRadioButton"
      [class.ant-radio-button]="isRadioButton"
      [class.ant-radio-button-checked]="isChecked && isRadioButton"
      [class.ant-radio-button-disabled]="nzDisabled && isRadioButton"
    >
      <input
        #inputElement
        type="radio"
        [attr.autofocus]="nzAutoFocus ? 'autofocus' : null"
        [class.ant-radio-input]="!isRadioButton"
        [class.ant-radio-button-input]="isRadioButton"
        [disabled]="nzDisabled"
        [checked]="isChecked"
        [attr.name]="name"
      />
      <span [class.ant-radio-inner]="!isRadioButton" [class.ant-radio-button-inner]="isRadioButton"></span>
    </span>
    <span><ng-content></ng-content></span>
  `,
      encapsulation: ViewEncapsulation.None,
      changeDetection: ChangeDetectionStrategy.OnPush,
      providers: [{
        provide: NG_VALUE_ACCESSOR,
        useExisting: forwardRef(() => NzRadioComponent),
        multi: true
      }],
      host: {
        "[class.ant-radio-wrapper-in-form-item]": "!!nzFormStatusService",
        "[class.ant-radio-wrapper]": "!isRadioButton",
        "[class.ant-radio-button-wrapper]": "isRadioButton",
        "[class.ant-radio-wrapper-checked]": "isChecked && !isRadioButton",
        "[class.ant-radio-button-wrapper-checked]": "isChecked && isRadioButton",
        "[class.ant-radio-wrapper-disabled]": "nzDisabled && !isRadioButton",
        "[class.ant-radio-button-wrapper-disabled]": "nzDisabled && isRadioButton",
        "[class.ant-radio-wrapper-rtl]": `!isRadioButton && dir === 'rtl'`,
        "[class.ant-radio-button-wrapper-rtl]": `isRadioButton && dir === 'rtl'`
      }
    }]
  }], () => [{
    type: NgZone
  }, {
    type: ElementRef
  }, {
    type: ChangeDetectorRef
  }, {
    type: FocusMonitor
  }], {
    inputElement: [{
      type: ViewChild,
      args: ["inputElement", {
        static: true
      }]
    }],
    nzValue: [{
      type: Input
    }],
    nzDisabled: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    nzAutoFocus: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    isRadioButton: [{
      type: Input,
      args: [{
        alias: "nz-radio-button",
        transform: booleanAttribute
      }]
    }]
  });
})();
var NzRadioModule = class _NzRadioModule {
  static \u0275fac = function NzRadioModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _NzRadioModule)();
  };
  static \u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
    type: _NzRadioModule
  });
  static \u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({});
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzRadioModule, [{
    type: NgModule,
    args: [{
      imports: [NzRadioComponent, NzRadioGroupComponent],
      exports: [NzRadioComponent, NzRadioGroupComponent]
    }]
  }], null, null);
})();

// node_modules/ng-zorro-antd/fesm2022/ng-zorro-antd-calendar.mjs
var _forTrack03 = ($index, $item) => $item.value;
function NzCalendarHeaderComponent_Conditional_0_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275text(1);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.nzCustomHeader);
  }
}
function NzCalendarHeaderComponent_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, NzCalendarHeaderComponent_Conditional_0_ng_container_0_Template, 2, 1, "ng-container", 1);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("nzStringTemplateOutlet", ctx_r0.nzCustomHeader);
  }
}
function NzCalendarHeaderComponent_Conditional_1_For_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "nz-option", 3);
  }
  if (rf & 2) {
    const year_r3 = ctx.$implicit;
    \u0275\u0275property("nzLabel", year_r3.label)("nzValue", year_r3.value);
  }
}
function NzCalendarHeaderComponent_Conditional_1_Conditional_4_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "nz-option", 3);
  }
  if (rf & 2) {
    const month_r5 = ctx.$implicit;
    \u0275\u0275property("nzLabel", month_r5.label)("nzValue", month_r5.value);
  }
}
function NzCalendarHeaderComponent_Conditional_1_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "nz-select", 8);
    \u0275\u0275listener("ngModelChange", function NzCalendarHeaderComponent_Conditional_1_Conditional_4_Template_nz_select_ngModelChange_0_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.monthChange.emit($event));
    });
    \u0275\u0275repeaterCreate(1, NzCalendarHeaderComponent_Conditional_1_Conditional_4_For_2_Template, 1, 2, "nz-option", 3, _forTrack03);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275property("nzSize", ctx_r0.size)("nzDropdownMatchSelectWidth", false)("ngModel", ctx_r0.activeMonth);
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r0.months);
  }
}
function NzCalendarHeaderComponent_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 0)(1, "nz-select", 2);
    \u0275\u0275listener("ngModelChange", function NzCalendarHeaderComponent_Conditional_1_Template_nz_select_ngModelChange_1_listener($event) {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.updateYear($event));
    });
    \u0275\u0275repeaterCreate(2, NzCalendarHeaderComponent_Conditional_1_For_3_Template, 1, 2, "nz-option", 3, _forTrack03);
    \u0275\u0275elementEnd();
    \u0275\u0275template(4, NzCalendarHeaderComponent_Conditional_1_Conditional_4_Template, 3, 3, "nz-select", 4);
    \u0275\u0275elementStart(5, "nz-radio-group", 5);
    \u0275\u0275twoWayListener("ngModelChange", function NzCalendarHeaderComponent_Conditional_1_Template_nz_radio_group_ngModelChange_5_listener($event) {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r0.mode, $event) || (ctx_r0.mode = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("ngModelChange", function NzCalendarHeaderComponent_Conditional_1_Template_nz_radio_group_ngModelChange_5_listener($event) {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.modeChange.emit($event));
    });
    \u0275\u0275elementStart(6, "label", 6);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "label", 7);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("nzSize", ctx_r0.size)("nzDropdownMatchSelectWidth", false)("ngModel", ctx_r0.activeYear);
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r0.years);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r0.mode === "month" ? 4 : -1);
    \u0275\u0275advance();
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.mode);
    \u0275\u0275property("nzSize", ctx_r0.size);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r0.monthTypeText);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r0.yearTypeText);
  }
}
function NzCalendarComponent_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "date-table", 5);
    \u0275\u0275listener("valueChange", function NzCalendarComponent_Conditional_4_Template_date_table_valueChange_0_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onDateSelect($event));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("prefixCls", ctx_r1.prefixCls)("value", ctx_r1.activeDate)("activeDate", ctx_r1.activeDate)("cellRender", ctx_r1.dateCell)("fullCellRender", ctx_r1.dateFullCell)("disabledDate", ctx_r1.nzDisabledDate);
  }
}
function NzCalendarComponent_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "month-table", 6);
    \u0275\u0275listener("valueChange", function NzCalendarComponent_Conditional_5_Template_month_table_valueChange_0_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onDateSelect($event));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("prefixCls", ctx_r1.prefixCls)("value", ctx_r1.activeDate)("activeDate", ctx_r1.activeDate)("cellRender", ctx_r1.monthCell)("fullCellRender", ctx_r1.monthFullCell);
  }
}
var NzDateCellDirective = class _NzDateCellDirective {
  static \u0275fac = function NzDateCellDirective_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _NzDateCellDirective)();
  };
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _NzDateCellDirective,
    selectors: [["", "nzDateCell", ""]],
    exportAs: ["nzDateCell"]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzDateCellDirective, [{
    type: Directive,
    args: [{
      selector: "[nzDateCell]",
      exportAs: "nzDateCell"
    }]
  }], null, null);
})();
var NzMonthCellDirective = class _NzMonthCellDirective {
  static \u0275fac = function NzMonthCellDirective_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _NzMonthCellDirective)();
  };
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _NzMonthCellDirective,
    selectors: [["", "nzMonthCell", ""]],
    exportAs: ["nzMonthCell"]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzMonthCellDirective, [{
    type: Directive,
    args: [{
      selector: "[nzMonthCell]",
      exportAs: "nzMonthCell"
    }]
  }], null, null);
})();
var NzDateFullCellDirective = class _NzDateFullCellDirective {
  static \u0275fac = function NzDateFullCellDirective_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _NzDateFullCellDirective)();
  };
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _NzDateFullCellDirective,
    selectors: [["", "nzDateFullCell", ""]],
    exportAs: ["nzDateFullCell"]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzDateFullCellDirective, [{
    type: Directive,
    args: [{
      selector: "[nzDateFullCell]",
      exportAs: "nzDateFullCell"
    }]
  }], null, null);
})();
var NzMonthFullCellDirective = class _NzMonthFullCellDirective {
  static \u0275fac = function NzMonthFullCellDirective_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _NzMonthFullCellDirective)();
  };
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _NzMonthFullCellDirective,
    selectors: [["", "nzMonthFullCell", ""]],
    exportAs: ["nzMonthFullCell"]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzMonthFullCellDirective, [{
    type: Directive,
    args: [{
      selector: "[nzMonthFullCell]",
      exportAs: "nzMonthFullCell"
    }]
  }], null, null);
})();
var NzCalendarHeaderComponent = class _NzCalendarHeaderComponent {
  i18n;
  dateHelper;
  mode = "month";
  fullscreen = true;
  activeDate = new CandyDate();
  nzCustomHeader;
  modeChange = new EventEmitter();
  yearChange = new EventEmitter();
  monthChange = new EventEmitter();
  // @Output() readonly valueChange: EventEmitter<CandyDate> = new EventEmitter();
  yearOffset = 10;
  yearTotal = 20;
  years = [];
  months = [];
  get activeYear() {
    return this.activeDate.getYear();
  }
  get activeMonth() {
    return this.activeDate.getMonth();
  }
  get size() {
    return this.fullscreen ? "default" : "small";
  }
  get yearTypeText() {
    return this.i18n.getLocale().Calendar.lang.year;
  }
  get monthTypeText() {
    return this.i18n.getLocale().Calendar.lang.month;
  }
  constructor(i18n, dateHelper) {
    this.i18n = i18n;
    this.dateHelper = dateHelper;
  }
  ngOnInit() {
    this.setUpYears();
    this.setUpMonths();
  }
  ngOnChanges(changes) {
    if (changes["activeDate"]) {
      const previousActiveDate = changes["activeDate"].previousValue;
      const currentActiveDate = changes["activeDate"].currentValue;
      if (previousActiveDate?.getYear() !== currentActiveDate?.getYear()) {
        this.setUpYears();
      }
    }
  }
  updateYear(year) {
    this.yearChange.emit(year);
    this.setUpYears(year);
  }
  setUpYears(year) {
    const start = (year || this.activeYear) - this.yearOffset;
    const end = start + this.yearTotal;
    this.years = [];
    for (let i = start; i < end; i++) {
      this.years.push({
        label: `${i}`,
        value: i
      });
    }
  }
  setUpMonths() {
    this.months = [];
    for (let i = 0; i < 12; i++) {
      const dateInMonth = this.activeDate.setMonth(i);
      const monthText = this.dateHelper.format(dateInMonth.nativeDate, "MMM");
      this.months.push({
        label: monthText,
        value: i
      });
    }
  }
  static \u0275fac = function NzCalendarHeaderComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _NzCalendarHeaderComponent)(\u0275\u0275directiveInject(NzI18nService), \u0275\u0275directiveInject(DateHelperService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _NzCalendarHeaderComponent,
    selectors: [["nz-calendar-header"]],
    hostAttrs: [1, "ant-fullcalendar-header"],
    hostVars: 2,
    hostBindings: function NzCalendarHeaderComponent_HostBindings(rf, ctx) {
      if (rf & 2) {
        \u0275\u0275styleProp("display", "block");
      }
    },
    inputs: {
      mode: "mode",
      fullscreen: [2, "fullscreen", "fullscreen", booleanAttribute],
      activeDate: "activeDate",
      nzCustomHeader: "nzCustomHeader"
    },
    outputs: {
      modeChange: "modeChange",
      yearChange: "yearChange",
      monthChange: "monthChange"
    },
    exportAs: ["nzCalendarHeader"],
    features: [\u0275\u0275NgOnChangesFeature],
    decls: 2,
    vars: 1,
    consts: [[1, "ant-picker-calendar-header"], [4, "nzStringTemplateOutlet"], [1, "ant-picker-calendar-year-select", 3, "ngModelChange", "nzSize", "nzDropdownMatchSelectWidth", "ngModel"], [3, "nzLabel", "nzValue"], [1, "ant-picker-calendar-month-select", 3, "nzSize", "nzDropdownMatchSelectWidth", "ngModel"], [1, "ant-picker-calendar-mode-switch", 3, "ngModelChange", "ngModel", "nzSize"], ["nz-radio-button", "", "nzValue", "month"], ["nz-radio-button", "", "nzValue", "year"], [1, "ant-picker-calendar-month-select", 3, "ngModelChange", "nzSize", "nzDropdownMatchSelectWidth", "ngModel"]],
    template: function NzCalendarHeaderComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275template(0, NzCalendarHeaderComponent_Conditional_0_Template, 1, 1, "ng-container")(1, NzCalendarHeaderComponent_Conditional_1_Template, 10, 8, "div", 0);
      }
      if (rf & 2) {
        \u0275\u0275conditional(ctx.nzCustomHeader ? 0 : 1);
      }
    },
    dependencies: [NzSelectModule, NzOptionComponent, NzSelectComponent, FormsModule, NgControlStatus, NgModel, NzRadioModule, NzRadioComponent, NzRadioGroupComponent, NzStringTemplateOutletDirective],
    encapsulation: 2,
    changeDetection: 0
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzCalendarHeaderComponent, [{
    type: Component,
    args: [{
      encapsulation: ViewEncapsulation.None,
      changeDetection: ChangeDetectionStrategy.OnPush,
      selector: "nz-calendar-header",
      exportAs: "nzCalendarHeader",
      template: `
    @if (nzCustomHeader) {
      <ng-container *nzStringTemplateOutlet="nzCustomHeader">{{ nzCustomHeader }}</ng-container>
    } @else {
      <div class="ant-picker-calendar-header">
        <nz-select
          class="ant-picker-calendar-year-select"
          [nzSize]="size"
          [nzDropdownMatchSelectWidth]="false"
          [ngModel]="activeYear"
          (ngModelChange)="updateYear($event)"
        >
          @for (year of years; track year.value) {
            <nz-option [nzLabel]="year.label" [nzValue]="year.value" />
          }
        </nz-select>

        @if (mode === 'month') {
          <nz-select
            class="ant-picker-calendar-month-select"
            [nzSize]="size"
            [nzDropdownMatchSelectWidth]="false"
            [ngModel]="activeMonth"
            (ngModelChange)="monthChange.emit($event)"
          >
            @for (month of months; track month.value) {
              <nz-option [nzLabel]="month.label" [nzValue]="month.value" />
            }
          </nz-select>
        }

        <nz-radio-group
          class="ant-picker-calendar-mode-switch"
          [(ngModel)]="mode"
          (ngModelChange)="modeChange.emit($event)"
          [nzSize]="size"
        >
          <label nz-radio-button nzValue="month">{{ monthTypeText }}</label>
          <label nz-radio-button nzValue="year">{{ yearTypeText }}</label>
        </nz-radio-group>
      </div>
    }
  `,
      host: {
        class: "ant-fullcalendar-header",
        "[style.display]": `'block'`
      },
      imports: [NzSelectModule, FormsModule, NzRadioModule, NzStringTemplateOutletDirective]
    }]
  }], () => [{
    type: NzI18nService
  }, {
    type: DateHelperService
  }], {
    mode: [{
      type: Input
    }],
    fullscreen: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    activeDate: [{
      type: Input
    }],
    nzCustomHeader: [{
      type: Input
    }],
    modeChange: [{
      type: Output
    }],
    yearChange: [{
      type: Output
    }],
    monthChange: [{
      type: Output
    }]
  });
})();
var NzCalendarComponent = class _NzCalendarComponent {
  cdr;
  directionality;
  activeDate = new CandyDate();
  prefixCls = "ant-picker-calendar";
  destroy$ = new Subject();
  dir = "ltr";
  onChangeFn = () => {
  };
  onTouchFn = () => {
  };
  nzMode = "month";
  nzValue;
  nzDisabledDate;
  nzModeChange = new EventEmitter();
  nzPanelChange = new EventEmitter();
  nzSelectChange = new EventEmitter();
  nzValueChange = new EventEmitter();
  /**
   * Cannot use @Input and @ContentChild on one variable
   * because { static: false } will make @Input property get delayed
   **/
  nzDateCell;
  nzDateCellChild;
  get dateCell() {
    return this.nzDateCell || this.nzDateCellChild;
  }
  nzDateFullCell;
  nzDateFullCellChild;
  get dateFullCell() {
    return this.nzDateFullCell || this.nzDateFullCellChild;
  }
  nzMonthCell;
  nzMonthCellChild;
  get monthCell() {
    return this.nzMonthCell || this.nzMonthCellChild;
  }
  nzMonthFullCell;
  nzMonthFullCellChild;
  get monthFullCell() {
    return this.nzMonthFullCell || this.nzMonthFullCellChild;
  }
  nzCustomHeader;
  nzFullscreen = true;
  constructor(cdr, directionality) {
    this.cdr = cdr;
    this.directionality = directionality;
  }
  ngOnInit() {
    this.dir = this.directionality.value;
    this.directionality.change?.pipe(takeUntil(this.destroy$)).subscribe(() => {
      this.dir = this.directionality.value;
    });
  }
  onModeChange(mode) {
    this.nzModeChange.emit(mode);
    this.nzPanelChange.emit({
      date: this.activeDate.nativeDate,
      mode
    });
  }
  onYearSelect(year) {
    const date = this.activeDate.setYear(year);
    this.updateDate(date);
  }
  onMonthSelect(month) {
    const date = this.activeDate.setMonth(month);
    this.updateDate(date);
  }
  onDateSelect(date) {
    this.updateDate(date);
  }
  writeValue(value) {
    this.updateDate(new CandyDate(value), false);
    this.cdr.markForCheck();
  }
  registerOnChange(fn) {
    this.onChangeFn = fn;
  }
  registerOnTouched(fn) {
    this.onTouchFn = fn;
  }
  updateDate(date, touched = true) {
    this.activeDate = date;
    if (touched) {
      this.onChangeFn(date.nativeDate);
      this.onTouchFn();
      this.nzSelectChange.emit(date.nativeDate);
      this.nzValueChange.emit(date.nativeDate);
    }
  }
  ngOnChanges(changes) {
    if (changes.nzValue) {
      this.updateDate(new CandyDate(this.nzValue), false);
    }
  }
  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }
  static \u0275fac = function NzCalendarComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _NzCalendarComponent)(\u0275\u0275directiveInject(ChangeDetectorRef), \u0275\u0275directiveInject(Directionality));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _NzCalendarComponent,
    selectors: [["nz-calendar"]],
    contentQueries: function NzCalendarComponent_ContentQueries(rf, ctx, dirIndex) {
      if (rf & 1) {
        \u0275\u0275contentQuery(dirIndex, NzDateCellDirective, 5, TemplateRef);
        \u0275\u0275contentQuery(dirIndex, NzDateFullCellDirective, 5, TemplateRef);
        \u0275\u0275contentQuery(dirIndex, NzMonthCellDirective, 5, TemplateRef);
        \u0275\u0275contentQuery(dirIndex, NzMonthFullCellDirective, 5, TemplateRef);
      }
      if (rf & 2) {
        let _t;
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.nzDateCellChild = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.nzDateFullCellChild = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.nzMonthCellChild = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.nzMonthFullCellChild = _t.first);
      }
    },
    hostAttrs: [1, "ant-picker-calendar"],
    hostVars: 6,
    hostBindings: function NzCalendarComponent_HostBindings(rf, ctx) {
      if (rf & 2) {
        \u0275\u0275classProp("ant-picker-calendar-full", ctx.nzFullscreen)("ant-picker-calendar-mini", !ctx.nzFullscreen)("ant-picker-calendar-rtl", ctx.dir === "rtl");
      }
    },
    inputs: {
      nzMode: "nzMode",
      nzValue: "nzValue",
      nzDisabledDate: "nzDisabledDate",
      nzDateCell: "nzDateCell",
      nzDateFullCell: "nzDateFullCell",
      nzMonthCell: "nzMonthCell",
      nzMonthFullCell: "nzMonthFullCell",
      nzCustomHeader: "nzCustomHeader",
      nzFullscreen: [2, "nzFullscreen", "nzFullscreen", booleanAttribute]
    },
    outputs: {
      nzModeChange: "nzModeChange",
      nzPanelChange: "nzPanelChange",
      nzSelectChange: "nzSelectChange",
      nzValueChange: "nzValueChange"
    },
    exportAs: ["nzCalendar"],
    features: [\u0275\u0275ProvidersFeature([{
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => _NzCalendarComponent),
      multi: true
    }]), \u0275\u0275NgOnChangesFeature],
    decls: 6,
    vars: 8,
    consts: [[3, "modeChange", "yearChange", "monthChange", "fullscreen", "activeDate", "nzCustomHeader", "mode"], [1, "ant-picker-panel"], [1, "ant-picker-body"], [3, "prefixCls", "value", "activeDate", "cellRender", "fullCellRender", "disabledDate"], [3, "prefixCls", "value", "activeDate", "cellRender", "fullCellRender"], [3, "valueChange", "prefixCls", "value", "activeDate", "cellRender", "fullCellRender", "disabledDate"], [3, "valueChange", "prefixCls", "value", "activeDate", "cellRender", "fullCellRender"]],
    template: function NzCalendarComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "nz-calendar-header", 0);
        \u0275\u0275twoWayListener("modeChange", function NzCalendarComponent_Template_nz_calendar_header_modeChange_0_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.nzMode, $event) || (ctx.nzMode = $event);
          return $event;
        });
        \u0275\u0275listener("modeChange", function NzCalendarComponent_Template_nz_calendar_header_modeChange_0_listener($event) {
          return ctx.onModeChange($event);
        })("yearChange", function NzCalendarComponent_Template_nz_calendar_header_yearChange_0_listener($event) {
          return ctx.onYearSelect($event);
        })("monthChange", function NzCalendarComponent_Template_nz_calendar_header_monthChange_0_listener($event) {
          return ctx.onMonthSelect($event);
        });
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(1, "div", 1)(2, "div")(3, "div", 2);
        \u0275\u0275template(4, NzCalendarComponent_Conditional_4_Template, 1, 6, "date-table", 3)(5, NzCalendarComponent_Conditional_5_Template, 1, 5, "month-table", 4);
        \u0275\u0275elementEnd()()();
      }
      if (rf & 2) {
        \u0275\u0275property("fullscreen", ctx.nzFullscreen)("activeDate", ctx.activeDate)("nzCustomHeader", ctx.nzCustomHeader);
        \u0275\u0275twoWayProperty("mode", ctx.nzMode);
        \u0275\u0275advance(2);
        \u0275\u0275classMapInterpolate1("ant-picker-", ctx.nzMode === "month" ? "date" : "month", "-panel");
        \u0275\u0275advance(2);
        \u0275\u0275conditional(ctx.nzMode === "month" ? 4 : 5);
      }
    },
    dependencies: [NzCalendarHeaderComponent, LibPackerModule, DateTableComponent, MonthTableComponent],
    encapsulation: 2,
    changeDetection: 0
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzCalendarComponent, [{
    type: Component,
    args: [{
      encapsulation: ViewEncapsulation.None,
      changeDetection: ChangeDetectionStrategy.OnPush,
      selector: "nz-calendar",
      exportAs: "nzCalendar",
      template: `
    <nz-calendar-header
      [fullscreen]="nzFullscreen"
      [activeDate]="activeDate"
      [nzCustomHeader]="nzCustomHeader"
      [(mode)]="nzMode"
      (modeChange)="onModeChange($event)"
      (yearChange)="onYearSelect($event)"
      (monthChange)="onMonthSelect($event)"
    ></nz-calendar-header>

    <div class="ant-picker-panel">
      <div class="ant-picker-{{ nzMode === 'month' ? 'date' : 'month' }}-panel">
        <div class="ant-picker-body">
          @if (nzMode === 'month') {
            <!--  TODO(@wenqi73) [cellRender] [fullCellRender] -->
            <date-table
              [prefixCls]="prefixCls"
              [value]="activeDate"
              [activeDate]="activeDate"
              [cellRender]="$any(dateCell)"
              [fullCellRender]="$any(dateFullCell)"
              [disabledDate]="nzDisabledDate"
              (valueChange)="onDateSelect($event)"
            ></date-table>
          } @else {
            <month-table
              [prefixCls]="prefixCls"
              [value]="activeDate"
              [activeDate]="activeDate"
              [cellRender]="$any(monthCell)"
              [fullCellRender]="$any(monthFullCell)"
              (valueChange)="onDateSelect($event)"
            ></month-table>
          }
        </div>
      </div>
    </div>
  `,
      host: {
        class: "ant-picker-calendar",
        "[class.ant-picker-calendar-full]": "nzFullscreen",
        "[class.ant-picker-calendar-mini]": "!nzFullscreen",
        "[class.ant-picker-calendar-rtl]": `dir === 'rtl'`
      },
      providers: [{
        provide: NG_VALUE_ACCESSOR,
        useExisting: forwardRef(() => NzCalendarComponent),
        multi: true
      }],
      imports: [NzCalendarHeaderComponent, LibPackerModule]
    }]
  }], () => [{
    type: ChangeDetectorRef
  }, {
    type: Directionality
  }], {
    nzMode: [{
      type: Input
    }],
    nzValue: [{
      type: Input
    }],
    nzDisabledDate: [{
      type: Input
    }],
    nzModeChange: [{
      type: Output
    }],
    nzPanelChange: [{
      type: Output
    }],
    nzSelectChange: [{
      type: Output
    }],
    nzValueChange: [{
      type: Output
    }],
    nzDateCell: [{
      type: Input
    }],
    nzDateCellChild: [{
      type: ContentChild,
      args: [NzDateCellDirective, {
        static: false,
        read: TemplateRef
      }]
    }],
    nzDateFullCell: [{
      type: Input
    }],
    nzDateFullCellChild: [{
      type: ContentChild,
      args: [NzDateFullCellDirective, {
        static: false,
        read: TemplateRef
      }]
    }],
    nzMonthCell: [{
      type: Input
    }],
    nzMonthCellChild: [{
      type: ContentChild,
      args: [NzMonthCellDirective, {
        static: false,
        read: TemplateRef
      }]
    }],
    nzMonthFullCell: [{
      type: Input
    }],
    nzMonthFullCellChild: [{
      type: ContentChild,
      args: [NzMonthFullCellDirective, {
        static: false,
        read: TemplateRef
      }]
    }],
    nzCustomHeader: [{
      type: Input
    }],
    nzFullscreen: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }]
  });
})();
var NzCalendarModule = class _NzCalendarModule {
  static \u0275fac = function NzCalendarModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _NzCalendarModule)();
  };
  static \u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
    type: _NzCalendarModule
  });
  static \u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({
    imports: [NzCalendarHeaderComponent, NzCalendarComponent]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzCalendarModule, [{
    type: NgModule,
    args: [{
      imports: [NzCalendarHeaderComponent, NzCalendarComponent, NzDateCellDirective, NzDateFullCellDirective, NzMonthCellDirective, NzMonthFullCellDirective],
      exports: [NzCalendarComponent, NzDateCellDirective, NzDateFullCellDirective, NzMonthCellDirective, NzMonthFullCellDirective]
    }]
  }], null, null);
})();

// node_modules/ng-zorro-antd/fesm2022/ng-zorro-antd-badge.mjs
function NzBadgeSupComponent_Conditional_0_For_1_Conditional_1_For_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 3);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const p_r1 = ctx.$implicit;
    const \u0275$index_2_r2 = \u0275\u0275nextContext(2).$index;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275classProp("current", p_r1 === ctx_r2.countArray[\u0275$index_2_r2]);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", p_r1, " ");
  }
}
function NzBadgeSupComponent_Conditional_0_For_1_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275repeaterCreate(0, NzBadgeSupComponent_Conditional_0_For_1_Conditional_1_For_1_Template, 2, 3, "p", 2, \u0275\u0275repeaterTrackByIdentity);
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275repeater(ctx_r2.countSingleArray);
  }
}
function NzBadgeSupComponent_Conditional_0_For_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 1);
    \u0275\u0275template(1, NzBadgeSupComponent_Conditional_0_For_1_Conditional_1_Template, 2, 0);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const \u0275$index_2_r2 = ctx.$index;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275styleProp("transform", "translateY(" + -ctx_r2.countArray[\u0275$index_2_r2] * 100 + "%)");
    \u0275\u0275property("nzNoAnimation", ctx_r2.noAnimation);
    \u0275\u0275advance();
    \u0275\u0275conditional(!ctx_r2.nzDot && ctx_r2.countArray[\u0275$index_2_r2] !== void 0 ? 1 : -1);
  }
}
function NzBadgeSupComponent_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275repeaterCreate(0, NzBadgeSupComponent_Conditional_0_For_1_Template, 2, 4, "span", 0, \u0275\u0275repeaterTrackByIdentity);
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275repeater(ctx_r2.maxNumberArray);
  }
}
function NzBadgeSupComponent_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275textInterpolate1(" ", ctx_r2.nzOverflowCount, "+ ");
  }
}
var _c06 = ["*"];
function NzBadgeComponent_Conditional_0_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275text(1);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.nzText);
  }
}
function NzBadgeComponent_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span");
    \u0275\u0275elementStart(1, "span", 1);
    \u0275\u0275template(2, NzBadgeComponent_Conditional_0_ng_container_2_Template, 2, 1, "ng-container", 0);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275styleMap(ctx_r0.nzStyle);
    \u0275\u0275classMapInterpolate1("ant-badge-status-dot ant-badge-status-", ctx_r0.nzStatus || ctx_r0.presetColor, "");
    \u0275\u0275styleProp("background", !ctx_r0.presetColor && ctx_r0.nzColor);
    \u0275\u0275advance(2);
    \u0275\u0275property("nzStringTemplateOutlet", ctx_r0.nzText);
  }
}
function NzBadgeComponent_ng_container_2_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "nz-badge-sup", 2);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275property("nzOffset", ctx_r0.nzOffset)("nzSize", ctx_r0.nzSize)("nzTitle", ctx_r0.nzTitle)("nzStyle", ctx_r0.nzStyle)("nzDot", ctx_r0.nzDot)("nzOverflowCount", ctx_r0.nzOverflowCount)("disableAnimation", !!(ctx_r0.nzStandalone || ctx_r0.nzStatus || ctx_r0.nzColor || (ctx_r0.noAnimation == null ? null : ctx_r0.noAnimation.nzNoAnimation)))("nzCount", ctx_r0.nzCount)("noAnimation", !!(ctx_r0.noAnimation == null ? null : ctx_r0.noAnimation.nzNoAnimation));
  }
}
function NzBadgeComponent_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, NzBadgeComponent_ng_container_2_Conditional_1_Template, 1, 9, "nz-badge-sup", 2);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.showSup ? 1 : -1);
  }
}
function NzRibbonComponent_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "span", 3);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r0.nzText);
  }
}
var NzBadgeSupComponent = class _NzBadgeSupComponent {
  nzOffset;
  nzTitle;
  nzStyle = null;
  nzDot = false;
  nzOverflowCount = 99;
  disableAnimation = false;
  nzCount;
  noAnimation = false;
  nzSize = "default";
  maxNumberArray = [];
  countArray = [];
  count = 0;
  countSingleArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  generateMaxNumberArray() {
    this.maxNumberArray = this.nzOverflowCount.toString().split("").map((value, index) => `${value}-${index}`);
  }
  ngOnInit() {
    this.generateMaxNumberArray();
  }
  ngOnChanges(changes) {
    const {
      nzOverflowCount,
      nzCount
    } = changes;
    if (nzCount && typeof nzCount.currentValue === "number") {
      this.count = Math.max(0, nzCount.currentValue);
      this.countArray = this.count.toString().split("").map((item) => +item);
    }
    if (nzOverflowCount) {
      this.generateMaxNumberArray();
    }
  }
  static \u0275fac = function NzBadgeSupComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _NzBadgeSupComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _NzBadgeSupComponent,
    selectors: [["nz-badge-sup"]],
    hostAttrs: [1, "ant-scroll-number"],
    hostVars: 17,
    hostBindings: function NzBadgeSupComponent_HostBindings(rf, ctx) {
      if (rf & 2) {
        \u0275\u0275syntheticHostProperty("@.disabled", ctx.disableAnimation)("@zoomBadgeMotion", void 0);
        \u0275\u0275attribute("title", ctx.nzTitle === null ? "" : ctx.nzTitle || ctx.nzCount);
        \u0275\u0275styleMap(ctx.nzStyle);
        \u0275\u0275styleProp("right", ctx.nzOffset && ctx.nzOffset[0] ? -ctx.nzOffset[0] : null, "px")("margin-top", ctx.nzOffset && ctx.nzOffset[1] ? ctx.nzOffset[1] : null, "px");
        \u0275\u0275classProp("ant-badge-count", !ctx.nzDot)("ant-badge-count-sm", ctx.nzSize === "small")("ant-badge-dot", ctx.nzDot)("ant-badge-multiple-words", ctx.countArray.length >= 2);
      }
    },
    inputs: {
      nzOffset: "nzOffset",
      nzTitle: "nzTitle",
      nzStyle: "nzStyle",
      nzDot: "nzDot",
      nzOverflowCount: [2, "nzOverflowCount", "nzOverflowCount", numberAttribute],
      disableAnimation: "disableAnimation",
      nzCount: "nzCount",
      noAnimation: "noAnimation",
      nzSize: "nzSize"
    },
    exportAs: ["nzBadgeSup"],
    features: [\u0275\u0275NgOnChangesFeature],
    decls: 2,
    vars: 1,
    consts: [[1, "ant-scroll-number-only", 3, "nzNoAnimation", "transform"], [1, "ant-scroll-number-only", 3, "nzNoAnimation"], [1, "ant-scroll-number-only-unit", 3, "current"], [1, "ant-scroll-number-only-unit"]],
    template: function NzBadgeSupComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275template(0, NzBadgeSupComponent_Conditional_0_Template, 2, 0)(1, NzBadgeSupComponent_Conditional_1_Template, 1, 1);
      }
      if (rf & 2) {
        \u0275\u0275conditional(ctx.count <= ctx.nzOverflowCount ? 0 : 1);
      }
    },
    dependencies: [NzNoAnimationDirective],
    encapsulation: 2,
    data: {
      animation: [zoomBadgeMotion]
    },
    changeDetection: 0
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzBadgeSupComponent, [{
    type: Component,
    args: [{
      selector: "nz-badge-sup",
      exportAs: "nzBadgeSup",
      preserveWhitespaces: false,
      encapsulation: ViewEncapsulation.None,
      changeDetection: ChangeDetectionStrategy.OnPush,
      animations: [zoomBadgeMotion],
      imports: [NzNoAnimationDirective],
      template: `
    @if (count <= nzOverflowCount) {
      @for (n of maxNumberArray; track n; let i = $index) {
        <span
          [nzNoAnimation]="noAnimation"
          class="ant-scroll-number-only"
          [style.transform]="'translateY(' + -countArray[i] * 100 + '%)'"
        >
          @if (!nzDot && countArray[i] !== undefined) {
            @for (p of countSingleArray; track p) {
              <p class="ant-scroll-number-only-unit" [class.current]="p === countArray[i]">
                {{ p }}
              </p>
            }
          }
        </span>
      }
    } @else {
      {{ nzOverflowCount }}+
    }
  `,
      host: {
        class: "ant-scroll-number",
        "[@.disabled]": `disableAnimation`,
        "[@zoomBadgeMotion]": "",
        "[attr.title]": `nzTitle === null ? '' : nzTitle || nzCount`,
        "[style]": `nzStyle`,
        "[style.right.px]": `nzOffset && nzOffset[0] ? -nzOffset[0] : null`,
        "[style.margin-top.px]": `nzOffset && nzOffset[1] ? nzOffset[1] : null`,
        "[class.ant-badge-count]": `!nzDot`,
        "[class.ant-badge-count-sm]": `nzSize === 'small'`,
        "[class.ant-badge-dot]": `nzDot`,
        "[class.ant-badge-multiple-words]": `countArray.length >= 2`
      }
    }]
  }], null, {
    nzOffset: [{
      type: Input
    }],
    nzTitle: [{
      type: Input
    }],
    nzStyle: [{
      type: Input
    }],
    nzDot: [{
      type: Input
    }],
    nzOverflowCount: [{
      type: Input,
      args: [{
        transform: numberAttribute
      }]
    }],
    disableAnimation: [{
      type: Input
    }],
    nzCount: [{
      type: Input
    }],
    noAnimation: [{
      type: Input
    }],
    nzSize: [{
      type: Input
    }]
  });
})();
var badgePresetColors = ["pink", "red", "yellow", "orange", "cyan", "green", "blue", "purple", "geekblue", "magenta", "volcano", "gold", "lime"];
var NZ_CONFIG_MODULE_NAME4 = "badge";
var NzBadgeComponent = (() => {
  let _nzOverflowCount_decorators;
  let _nzOverflowCount_initializers = [];
  let _nzOverflowCount_extraInitializers = [];
  let _nzColor_decorators;
  let _nzColor_initializers = [];
  let _nzColor_extraInitializers = [];
  return class NzBadgeComponent2 {
    static {
      const _metadata = typeof Symbol === "function" && Symbol.metadata ? /* @__PURE__ */ Object.create(null) : void 0;
      _nzOverflowCount_decorators = [WithConfig()];
      _nzColor_decorators = [WithConfig()];
      __esDecorate(null, null, _nzOverflowCount_decorators, {
        kind: "field",
        name: "nzOverflowCount",
        static: false,
        private: false,
        access: {
          has: (obj) => "nzOverflowCount" in obj,
          get: (obj) => obj.nzOverflowCount,
          set: (obj, value) => {
            obj.nzOverflowCount = value;
          }
        },
        metadata: _metadata
      }, _nzOverflowCount_initializers, _nzOverflowCount_extraInitializers);
      __esDecorate(null, null, _nzColor_decorators, {
        kind: "field",
        name: "nzColor",
        static: false,
        private: false,
        access: {
          has: (obj) => "nzColor" in obj,
          get: (obj) => obj.nzColor,
          set: (obj, value) => {
            obj.nzColor = value;
          }
        },
        metadata: _metadata
      }, _nzColor_initializers, _nzColor_extraInitializers);
      if (_metadata) Object.defineProperty(this, Symbol.metadata, {
        enumerable: true,
        configurable: true,
        writable: true,
        value: _metadata
      });
    }
    nzConfigService;
    renderer;
    cdr;
    elementRef;
    directionality;
    _nzModuleName = NZ_CONFIG_MODULE_NAME4;
    showSup = false;
    presetColor = null;
    dir = "ltr";
    destroy$ = new Subject();
    nzShowZero = false;
    nzShowDot = true;
    nzStandalone = false;
    nzDot = false;
    nzOverflowCount = __runInitializers(this, _nzOverflowCount_initializers, 99);
    nzColor = (__runInitializers(this, _nzOverflowCount_extraInitializers), __runInitializers(this, _nzColor_initializers, void 0));
    nzStyle = (__runInitializers(this, _nzColor_extraInitializers), null);
    nzText = null;
    nzTitle;
    nzStatus;
    nzCount;
    nzOffset;
    nzSize = "default";
    noAnimation = inject(NzNoAnimationDirective, {
      host: true,
      optional: true
    });
    constructor(nzConfigService, renderer, cdr, elementRef, directionality) {
      this.nzConfigService = nzConfigService;
      this.renderer = renderer;
      this.cdr = cdr;
      this.elementRef = elementRef;
      this.directionality = directionality;
    }
    ngOnInit() {
      this.directionality.change?.pipe(takeUntil(this.destroy$)).subscribe((direction) => {
        this.dir = direction;
        this.prepareBadgeForRtl();
        this.cdr.detectChanges();
      });
      this.dir = this.directionality.value;
      this.prepareBadgeForRtl();
    }
    ngOnChanges(changes) {
      const {
        nzColor,
        nzShowDot,
        nzDot,
        nzCount,
        nzShowZero
      } = changes;
      if (nzColor) {
        this.presetColor = this.nzColor && badgePresetColors.indexOf(this.nzColor) !== -1 ? this.nzColor : null;
      }
      if (nzShowDot || nzDot || nzCount || nzShowZero) {
        this.showSup = this.nzShowDot && this.nzDot || typeof this.nzCount === "number" && this.nzCount > 0 || typeof this.nzCount === "number" && this.nzCount <= 0 && this.nzShowZero;
      }
    }
    prepareBadgeForRtl() {
      if (this.isRtlLayout) {
        this.renderer.addClass(this.elementRef.nativeElement, "ant-badge-rtl");
      } else {
        this.renderer.removeClass(this.elementRef.nativeElement, "ant-badge-rtl");
      }
    }
    get isRtlLayout() {
      return this.dir === "rtl";
    }
    ngOnDestroy() {
      this.destroy$.next();
      this.destroy$.complete();
    }
    static \u0275fac = function NzBadgeComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || NzBadgeComponent2)(\u0275\u0275directiveInject(NzConfigService), \u0275\u0275directiveInject(Renderer2), \u0275\u0275directiveInject(ChangeDetectorRef), \u0275\u0275directiveInject(ElementRef), \u0275\u0275directiveInject(Directionality));
    };
    static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
      type: NzBadgeComponent2,
      selectors: [["nz-badge"]],
      hostAttrs: [1, "ant-badge"],
      hostVars: 4,
      hostBindings: function NzBadgeComponent_HostBindings(rf, ctx) {
        if (rf & 2) {
          \u0275\u0275classProp("ant-badge-status", ctx.nzStatus)("ant-badge-not-a-wrapper", !!(ctx.nzStandalone || ctx.nzStatus || ctx.nzColor));
        }
      },
      inputs: {
        nzShowZero: [2, "nzShowZero", "nzShowZero", booleanAttribute],
        nzShowDot: [2, "nzShowDot", "nzShowDot", booleanAttribute],
        nzStandalone: [2, "nzStandalone", "nzStandalone", booleanAttribute],
        nzDot: [2, "nzDot", "nzDot", booleanAttribute],
        nzOverflowCount: "nzOverflowCount",
        nzColor: "nzColor",
        nzStyle: "nzStyle",
        nzText: "nzText",
        nzTitle: "nzTitle",
        nzStatus: "nzStatus",
        nzCount: "nzCount",
        nzOffset: "nzOffset",
        nzSize: "nzSize"
      },
      exportAs: ["nzBadge"],
      features: [\u0275\u0275NgOnChangesFeature],
      ngContentSelectors: _c06,
      decls: 3,
      vars: 2,
      consts: [[4, "nzStringTemplateOutlet"], [1, "ant-badge-status-text"], [3, "nzOffset", "nzSize", "nzTitle", "nzStyle", "nzDot", "nzOverflowCount", "disableAnimation", "nzCount", "noAnimation"]],
      template: function NzBadgeComponent_Template(rf, ctx) {
        if (rf & 1) {
          \u0275\u0275projectionDef();
          \u0275\u0275template(0, NzBadgeComponent_Conditional_0_Template, 3, 8);
          \u0275\u0275projection(1);
          \u0275\u0275template(2, NzBadgeComponent_ng_container_2_Template, 2, 1, "ng-container", 0);
        }
        if (rf & 2) {
          \u0275\u0275conditional(ctx.nzStatus || ctx.nzColor ? 0 : -1);
          \u0275\u0275advance(2);
          \u0275\u0275property("nzStringTemplateOutlet", ctx.nzCount);
        }
      },
      dependencies: [NzBadgeSupComponent, NzOutletModule, NzStringTemplateOutletDirective],
      encapsulation: 2,
      data: {
        animation: [zoomBadgeMotion]
      },
      changeDetection: 0
    });
  };
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzBadgeComponent, [{
    type: Component,
    args: [{
      selector: "nz-badge",
      exportAs: "nzBadge",
      preserveWhitespaces: false,
      encapsulation: ViewEncapsulation.None,
      changeDetection: ChangeDetectionStrategy.OnPush,
      animations: [zoomBadgeMotion],
      imports: [NzBadgeSupComponent, NzOutletModule],
      template: `
    @if (nzStatus || nzColor) {
      <span
        class="ant-badge-status-dot ant-badge-status-{{ nzStatus || presetColor }}"
        [style.background]="!presetColor && nzColor"
        [style]="nzStyle"
      ></span>
      <span class="ant-badge-status-text">
        <ng-container *nzStringTemplateOutlet="nzText">{{ nzText }}</ng-container>
      </span>
    }
    <ng-content />
    <ng-container *nzStringTemplateOutlet="nzCount">
      @if (showSup) {
        <nz-badge-sup
          [nzOffset]="nzOffset"
          [nzSize]="nzSize"
          [nzTitle]="nzTitle"
          [nzStyle]="nzStyle"
          [nzDot]="nzDot"
          [nzOverflowCount]="nzOverflowCount"
          [disableAnimation]="!!(nzStandalone || nzStatus || nzColor || noAnimation?.nzNoAnimation)"
          [nzCount]="nzCount"
          [noAnimation]="!!noAnimation?.nzNoAnimation"
        />
      }
    </ng-container>
  `,
      host: {
        class: "ant-badge",
        "[class.ant-badge-status]": "nzStatus",
        "[class.ant-badge-not-a-wrapper]": "!!(nzStandalone || nzStatus || nzColor)"
      }
    }]
  }], () => [{
    type: NzConfigService
  }, {
    type: Renderer2
  }, {
    type: ChangeDetectorRef
  }, {
    type: ElementRef
  }, {
    type: Directionality
  }], {
    nzShowZero: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    nzShowDot: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    nzStandalone: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    nzDot: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    nzOverflowCount: [{
      type: Input
    }],
    nzColor: [{
      type: Input
    }],
    nzStyle: [{
      type: Input
    }],
    nzText: [{
      type: Input
    }],
    nzTitle: [{
      type: Input
    }],
    nzStatus: [{
      type: Input
    }],
    nzCount: [{
      type: Input
    }],
    nzOffset: [{
      type: Input
    }],
    nzSize: [{
      type: Input
    }]
  });
})();
var NzRibbonComponent = class _NzRibbonComponent {
  nzColor;
  nzPlacement = "end";
  nzText = null;
  presetColor = null;
  ngOnChanges(changes) {
    const {
      nzColor
    } = changes;
    if (nzColor) {
      this.presetColor = this.nzColor && badgePresetColors.indexOf(this.nzColor) !== -1 ? this.nzColor : null;
    }
  }
  static \u0275fac = function NzRibbonComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _NzRibbonComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _NzRibbonComponent,
    selectors: [["nz-ribbon"]],
    hostAttrs: [1, "ant-ribbon-wrapper"],
    inputs: {
      nzColor: "nzColor",
      nzPlacement: "nzPlacement",
      nzText: "nzText"
    },
    exportAs: ["nzRibbon"],
    features: [\u0275\u0275NgOnChangesFeature],
    ngContentSelectors: _c06,
    decls: 4,
    vars: 11,
    consts: [[1, "ant-ribbon"], [4, "nzStringTemplateOutlet"], [1, "ant-ribbon-corner"], [1, "ant-ribbon-text"]],
    template: function NzRibbonComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275projectionDef();
        \u0275\u0275projection(0);
        \u0275\u0275elementStart(1, "div", 0);
        \u0275\u0275template(2, NzRibbonComponent_ng_container_2_Template, 3, 1, "ng-container", 1);
        \u0275\u0275element(3, "div", 2);
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        \u0275\u0275advance();
        \u0275\u0275classMap(ctx.presetColor && "ant-ribbon-color-" + ctx.presetColor);
        \u0275\u0275styleProp("background-color", !ctx.presetColor && ctx.nzColor);
        \u0275\u0275classProp("ant-ribbon-placement-end", ctx.nzPlacement === "end")("ant-ribbon-placement-start", ctx.nzPlacement === "start");
        \u0275\u0275advance();
        \u0275\u0275property("nzStringTemplateOutlet", ctx.nzText);
        \u0275\u0275advance();
        \u0275\u0275styleProp("color", !ctx.presetColor && ctx.nzColor);
      }
    },
    dependencies: [NzOutletModule, NzStringTemplateOutletDirective],
    encapsulation: 2,
    changeDetection: 0
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzRibbonComponent, [{
    type: Component,
    args: [{
      selector: "nz-ribbon",
      exportAs: "nzRibbon",
      preserveWhitespaces: false,
      encapsulation: ViewEncapsulation.None,
      changeDetection: ChangeDetectionStrategy.OnPush,
      imports: [NzOutletModule],
      template: `
    <ng-content></ng-content>
    <div
      class="ant-ribbon"
      [class]="presetColor && 'ant-ribbon-color-' + presetColor"
      [class.ant-ribbon-placement-end]="nzPlacement === 'end'"
      [class.ant-ribbon-placement-start]="nzPlacement === 'start'"
      [style.background-color]="!presetColor && nzColor"
    >
      <ng-container *nzStringTemplateOutlet="nzText">
        <span class="ant-ribbon-text">{{ nzText }}</span>
      </ng-container>
      <div class="ant-ribbon-corner" [style.color]="!presetColor && nzColor"></div>
    </div>
  `,
      host: {
        class: "ant-ribbon-wrapper"
      }
    }]
  }], null, {
    nzColor: [{
      type: Input
    }],
    nzPlacement: [{
      type: Input
    }],
    nzText: [{
      type: Input
    }]
  });
})();
var NzBadgeModule = class _NzBadgeModule {
  static \u0275fac = function NzBadgeModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _NzBadgeModule)();
  };
  static \u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
    type: _NzBadgeModule
  });
  static \u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({
    imports: [NzBadgeComponent, NzRibbonComponent]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzBadgeModule, [{
    type: NgModule,
    args: [{
      exports: [NzBadgeComponent, NzRibbonComponent],
      imports: [NzBadgeComponent, NzRibbonComponent]
    }]
  }], null, null);
})();

// src/app/core/services/reservas.service.ts
var ReservasService = class _ReservasService {
  constructor(http) {
    this.http = http;
    this.apiUrl = `${environment.apiUrl}/auth/reservas`;
  }
  postCriarReserva(payload) {
    return this.http.post(`${this.apiUrl}/save`, payload);
  }
  getReservasPorRestaurante(idRestaurante, data) {
    return this.http.get(`${this.apiUrl}/restaurante/${idRestaurante}?data=${data}`);
  }
  getReservasParaCalendario(idRestaurante, data) {
    return this.http.get(`${this.apiUrl}/restaurante/${idRestaurante}/calendario?data=${data}`);
  }
  putAtualizarStatusReserva(idReserva, status) {
    return this.http.put(`${this.apiUrl}/${idReserva}/status`, { status });
  }
  putCancelarReserva(idReserva) {
    return this.http.put(`${this.apiUrl}/${idReserva}/cancel`, {});
  }
  putAtualizarReserva(idReserva, payload) {
    return this.http.put(`${this.apiUrl}/${idReserva}/update`, payload);
  }
  getReservasListaEspera(idRestaurante) {
    return this.http.get(`${this.apiUrl}/restaurante/${idRestaurante}/lista-espera`);
  }
  static {
    this.\u0275fac = function ReservasService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ReservasService)(\u0275\u0275inject(HttpClient));
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _ReservasService, factory: _ReservasService.\u0275fac, providedIn: "root" });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ReservasService, [{
    type: Injectable,
    args: [{ providedIn: "root" }]
  }], () => [{ type: HttpClient }], null);
})();

export {
  MatProgressSpinner,
  MatProgressSpinnerModule,
  NzResizeObserver,
  NzDatePickerComponent,
  NzDatePickerModule,
  NzEmptyComponent,
  NzEmptyModule,
  NzSelectModule,
  NzDateCellDirective,
  NzCalendarComponent,
  NzCalendarModule,
  NzBadgeComponent,
  NzBadgeModule,
  ReservasService
};
//# sourceMappingURL=chunk-WBSMWDUO.js.map
