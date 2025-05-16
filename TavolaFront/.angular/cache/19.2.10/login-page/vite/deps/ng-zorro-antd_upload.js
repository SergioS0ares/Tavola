import {
  NzButtonComponent,
  NzButtonModule
} from "./chunk-R4XY5SYD.js";
import {
  NzTransitionPatchDirective
} from "./chunk-NGENWOJK.js";
import "./chunk-TVS4NIJZ.js";
import {
  NzI18nService
} from "./chunk-7O7PMG5T.js";
import {
  NzToolTipModule,
  NzTooltipDirective
} from "./chunk-W4FJMXUG.js";
import "./chunk-3EUSGRYA.js";
import "./chunk-RMYNG7YU.js";
import "./chunk-ZHX7IHFU.js";
import "./chunk-TUVB6DY3.js";
import "./chunk-VIBAY5QN.js";
import {
  NzOutletModule,
  NzStringTemplateOutletDirective
} from "./chunk-476CEBE6.js";
import "./chunk-LUGXU7XJ.js";
import {
  NzIconDirective,
  NzIconModule
} from "./chunk-LTAGXNN6.js";
import "./chunk-2SJ2DHYL.js";
import {
  NzConfigService,
  WithConfig
} from "./chunk-NWJ3OULZ.js";
import "./chunk-AEU4L2X2.js";
import {
  fromEventOutsideAngular,
  isNotNil,
  numberAttributeWithZeroFallback,
  toBoolean,
  warn
} from "./chunk-P4LBK77D.js";
import "./chunk-XI4SCDOA.js";
import "./chunk-LSANO5Y7.js";
import "./chunk-HNME6OYI.js";
import "./chunk-SW2FAAQS.js";
import "./chunk-K3NI6N5J.js";
import "./chunk-QFQLV3Q2.js";
import "./chunk-MP5B2SRU.js";
import "./chunk-OHWI2S6G.js";
import "./chunk-SVVIGFXE.js";
import {
  ENTER
} from "./chunk-FISR3NYH.js";
import "./chunk-SZVPTXKJ.js";
import "./chunk-3KR6FGCK.js";
import "./chunk-UWI5G4WL.js";
import "./chunk-E2JSMR2W.js";
import "./chunk-B5GAWAR3.js";
import "./chunk-2T7SUEPR.js";
import {
  animate,
  style,
  transition,
  trigger
} from "./chunk-WY2VMIPC.js";
import "./chunk-SVFKJBYA.js";
import "./chunk-EJC5EH6D.js";
import "./chunk-IJ3KGSPX.js";
import {
  Directionality
} from "./chunk-LNXBDHQR.js";
import {
  Platform
} from "./chunk-NKWKSRGH.js";
import "./chunk-HPCFBG3Q.js";
import {
  HttpClient,
  HttpEventType,
  HttpHeaders,
  HttpRequest,
  HttpResponse
} from "./chunk-DI33GM5A.js";
import {
  NgTemplateOutlet
} from "./chunk-WZEHNUBQ.js";
import {
  DOCUMENT
} from "./chunk-3RG3NCTC.js";
import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ElementRef,
  EventEmitter,
  Input,
  NgModule,
  NgZone,
  Output,
  ViewChild,
  ViewEncapsulation,
  booleanAttribute,
  inject,
  numberAttribute,
  setClassMetadata,
  ɵɵNgOnChangesFeature,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵclassMap,
  ɵɵclassMapInterpolate1,
  ɵɵclassMapInterpolate2,
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵdefineComponent,
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
  ɵɵlistener,
  ɵɵloadQuery,
  ɵɵnamespaceSVG,
  ɵɵnextContext,
  ɵɵprojection,
  ɵɵprojectionDef,
  ɵɵproperty,
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
  ɵɵtemplate,
  ɵɵtemplateRefExtractor,
  ɵɵtext,
  ɵɵtextInterpolate1,
  ɵɵviewQuery
} from "./chunk-CR2THLZV.js";
import {
  fromEvent
} from "./chunk-QCX4XGGK.js";
import "./chunk-3LZ7TQJT.js";
import {
  Observable,
  Subject,
  Subscription,
  __esDecorate,
  __runInitializers,
  filter,
  map,
  of,
  switchMap,
  takeUntil,
  tap
} from "./chunk-3SRVZXQZ.js";
import {
  __objRest,
  __spreadValues
} from "./chunk-WDMUDEB6.js";

// node_modules/ng-zorro-antd/fesm2022/ng-zorro-antd-progress.mjs
var _c0 = (a0) => ({
  $implicit: a0
});
function NzProgressComponent_ng_template_0_Conditional_0_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "nz-icon", 3);
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext(3);
    ɵɵproperty("nzType", ctx_r0.icon);
  }
}
function NzProgressComponent_ng_template_0_Conditional_0_Conditional_2_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtext(1);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const formatter_r2 = ctx.$implicit;
    const ctx_r0 = ɵɵnextContext(4);
    ɵɵadvance();
    ɵɵtextInterpolate1(" ", formatter_r2(ctx_r0.nzPercent), " ");
  }
}
function NzProgressComponent_ng_template_0_Conditional_0_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, NzProgressComponent_ng_template_0_Conditional_0_Conditional_2_ng_container_0_Template, 2, 1, "ng-container", 4);
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext(3);
    ɵɵproperty("nzStringTemplateOutlet", ctx_r0.formatter)("nzStringTemplateOutletContext", ɵɵpureFunction1(2, _c0, ctx_r0.nzPercent));
  }
}
function NzProgressComponent_ng_template_0_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "span", 2);
    ɵɵtemplate(1, NzProgressComponent_ng_template_0_Conditional_0_Conditional_1_Template, 1, 1, "nz-icon", 3)(2, NzProgressComponent_ng_template_0_Conditional_0_Conditional_2_Template, 1, 4, "ng-container");
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext(2);
    ɵɵadvance();
    ɵɵconditional((ctx_r0.status === "exception" || ctx_r0.status === "success") && !ctx_r0.nzFormat ? 1 : 2);
  }
}
function NzProgressComponent_ng_template_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, NzProgressComponent_ng_template_0_Conditional_0_Template, 3, 1, "span", 2);
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵconditional(ctx_r0.nzShowInfo ? 0 : -1);
  }
}
function NzProgressComponent_Conditional_3_Conditional_1_For_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "div", 8);
  }
  if (rf & 2) {
    const step_r3 = ctx.$implicit;
    ɵɵstyleMap(step_r3);
  }
}
function NzProgressComponent_Conditional_3_Conditional_1_ng_template_3_Template(rf, ctx) {
}
function NzProgressComponent_Conditional_3_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 5);
    ɵɵrepeaterCreate(1, NzProgressComponent_Conditional_3_Conditional_1_For_2_Template, 1, 2, "div", 6, ɵɵrepeaterTrackByIndex);
    ɵɵtemplate(3, NzProgressComponent_Conditional_3_Conditional_1_ng_template_3_Template, 0, 0, "ng-template", 7);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext(2);
    const progressInfoTemplate_r4 = ɵɵreference(1);
    ɵɵadvance();
    ɵɵrepeater(ctx_r0.steps);
    ɵɵadvance(2);
    ɵɵproperty("ngTemplateOutlet", progressInfoTemplate_r4);
  }
}
function NzProgressComponent_Conditional_3_Conditional_2_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "div", 13);
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext(3);
    ɵɵstyleProp("width", ctx_r0.nzSuccessPercent, "%")("border-radius", ctx_r0.nzStrokeLinecap === "round" ? "100px" : "0")("height", ctx_r0.strokeWidth, "px");
  }
}
function NzProgressComponent_Conditional_3_Conditional_2_ng_template_4_Template(rf, ctx) {
}
function NzProgressComponent_Conditional_3_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 9)(1, "div", 10);
    ɵɵelement(2, "div", 11);
    ɵɵtemplate(3, NzProgressComponent_Conditional_3_Conditional_2_Conditional_3_Template, 1, 6, "div", 12);
    ɵɵelementEnd()();
    ɵɵtemplate(4, NzProgressComponent_Conditional_3_Conditional_2_ng_template_4_Template, 0, 0, "ng-template", 7);
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext(2);
    const progressInfoTemplate_r4 = ɵɵreference(1);
    ɵɵadvance(2);
    ɵɵstyleProp("width", ctx_r0.nzPercent, "%")("border-radius", ctx_r0.nzStrokeLinecap === "round" ? "100px" : "0")("background", !ctx_r0.isGradient ? ctx_r0.nzStrokeColor : null)("background-image", ctx_r0.isGradient ? ctx_r0.lineGradient : null)("height", ctx_r0.strokeWidth, "px");
    ɵɵadvance();
    ɵɵconditional(ctx_r0.nzSuccessPercent || ctx_r0.nzSuccessPercent === 0 ? 3 : -1);
    ɵɵadvance();
    ɵɵproperty("ngTemplateOutlet", progressInfoTemplate_r4);
  }
}
function NzProgressComponent_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div");
    ɵɵtemplate(1, NzProgressComponent_Conditional_3_Conditional_1_Template, 4, 1, "div", 5)(2, NzProgressComponent_Conditional_3_Conditional_2_Template, 5, 12);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵconditional(ctx_r0.isSteps ? 1 : 2);
  }
}
function NzProgressComponent_Conditional_4_Conditional_2_For_3_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵnamespaceSVG();
    ɵɵelement(0, "stop");
  }
  if (rf & 2) {
    const i_r5 = ctx.$implicit;
    ɵɵattribute("offset", i_r5.offset)("stop-color", i_r5.color);
  }
}
function NzProgressComponent_Conditional_4_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵnamespaceSVG();
    ɵɵelementStart(0, "defs")(1, "linearGradient", 17);
    ɵɵrepeaterCreate(2, NzProgressComponent_Conditional_4_Conditional_2_For_3_Template, 1, 2, ":svg:stop", null, ɵɵrepeaterTrackByIndex);
    ɵɵelementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext(2);
    ɵɵadvance();
    ɵɵproperty("id", "gradient-" + ctx_r0.gradientId);
    ɵɵadvance();
    ɵɵrepeater(ctx_r0.circleGradient);
  }
}
function NzProgressComponent_Conditional_4_For_5_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵnamespaceSVG();
    ɵɵelement(0, "path", 18);
  }
  if (rf & 2) {
    const p_r6 = ctx.$implicit;
    const ctx_r0 = ɵɵnextContext(2);
    ɵɵstyleMap(p_r6.strokePathStyle);
    ɵɵattribute("d", ctx_r0.pathString)("stroke-linecap", ctx_r0.nzStrokeLinecap)("stroke", p_r6.stroke)("stroke-width", ctx_r0.nzPercent ? ctx_r0.strokeWidth : 0);
  }
}
function NzProgressComponent_Conditional_4_ng_template_6_Template(rf, ctx) {
}
function NzProgressComponent_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 10);
    ɵɵnamespaceSVG();
    ɵɵelementStart(1, "svg", 14);
    ɵɵtemplate(2, NzProgressComponent_Conditional_4_Conditional_2_Template, 4, 1, ":svg:defs");
    ɵɵelement(3, "path", 15);
    ɵɵrepeaterCreate(4, NzProgressComponent_Conditional_4_For_5_Template, 1, 6, ":svg:path", 16, ɵɵrepeaterTrackByIndex);
    ɵɵelementEnd();
    ɵɵtemplate(6, NzProgressComponent_Conditional_4_ng_template_6_Template, 0, 0, "ng-template", 7);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    const progressInfoTemplate_r4 = ɵɵreference(1);
    ɵɵstyleProp("width", ctx_r0.nzWidth, "px")("height", ctx_r0.nzWidth, "px")("font-size", ctx_r0.nzWidth * 0.15 + 6, "px");
    ɵɵclassProp("ant-progress-circle-gradient", ctx_r0.isGradient);
    ɵɵadvance(2);
    ɵɵconditional(ctx_r0.isGradient ? 2 : -1);
    ɵɵadvance();
    ɵɵstyleMap(ctx_r0.trailPathStyle);
    ɵɵattribute("stroke-width", ctx_r0.strokeWidth)("d", ctx_r0.pathString);
    ɵɵadvance();
    ɵɵrepeater(ctx_r0.progressCirclePath);
    ɵɵadvance(2);
    ɵɵproperty("ngTemplateOutlet", progressInfoTemplate_r4);
  }
}
function stripPercentToNumber(percent) {
  return +percent.replace("%", "");
}
var sortGradient = (gradients) => {
  let tempArr = [];
  Object.keys(gradients).forEach((key) => {
    const value = gradients[key];
    const formatKey = stripPercentToNumber(key);
    if (!isNaN(formatKey)) {
      tempArr.push({
        key: formatKey,
        value
      });
    }
  });
  tempArr = tempArr.sort((a, b) => a.key - b.key);
  return tempArr;
};
var handleCircleGradient = (strokeColor) => sortGradient(strokeColor).map(({
  key,
  value
}) => ({
  offset: `${key}%`,
  color: value
}));
var handleLinearGradient = (strokeColor) => {
  const _a = strokeColor, {
    from = "#1890ff",
    to = "#1890ff",
    direction = "to right"
  } = _a, rest = __objRest(_a, [
    "from",
    "to",
    "direction"
  ]);
  if (Object.keys(rest).length !== 0) {
    const sortedGradients = sortGradient(rest).map(({
      key,
      value
    }) => `${value} ${key}%`).join(", ");
    return `linear-gradient(${direction}, ${sortedGradients})`;
  }
  return `linear-gradient(${direction}, ${from}, ${to})`;
};
var gradientIdSeed = 0;
var NZ_CONFIG_MODULE_NAME = "progress";
var statusIconNameMap = /* @__PURE__ */ new Map([["success", "check"], ["exception", "close"]]);
var statusColorMap = /* @__PURE__ */ new Map([["normal", "#108ee9"], ["exception", "#ff5500"], ["success", "#87d068"]]);
var defaultFormatter = (p) => `${p}%`;
var NzProgressComponent = (() => {
  let _nzShowInfo_decorators;
  let _nzShowInfo_initializers = [];
  let _nzShowInfo_extraInitializers = [];
  let _nzStrokeColor_decorators;
  let _nzStrokeColor_initializers = [];
  let _nzStrokeColor_extraInitializers = [];
  let _nzSize_decorators;
  let _nzSize_initializers = [];
  let _nzSize_extraInitializers = [];
  let _nzStrokeWidth_decorators;
  let _nzStrokeWidth_initializers = [];
  let _nzStrokeWidth_extraInitializers = [];
  let _nzGapDegree_decorators;
  let _nzGapDegree_initializers = [];
  let _nzGapDegree_extraInitializers = [];
  let _nzGapPosition_decorators;
  let _nzGapPosition_initializers = [];
  let _nzGapPosition_extraInitializers = [];
  let _nzStrokeLinecap_decorators;
  let _nzStrokeLinecap_initializers = [];
  let _nzStrokeLinecap_extraInitializers = [];
  return class NzProgressComponent2 {
    static {
      const _metadata = typeof Symbol === "function" && Symbol.metadata ? /* @__PURE__ */ Object.create(null) : void 0;
      _nzShowInfo_decorators = [WithConfig()];
      _nzStrokeColor_decorators = [WithConfig()];
      _nzSize_decorators = [WithConfig()];
      _nzStrokeWidth_decorators = [WithConfig()];
      _nzGapDegree_decorators = [WithConfig()];
      _nzGapPosition_decorators = [WithConfig()];
      _nzStrokeLinecap_decorators = [WithConfig()];
      __esDecorate(null, null, _nzShowInfo_decorators, {
        kind: "field",
        name: "nzShowInfo",
        static: false,
        private: false,
        access: {
          has: (obj) => "nzShowInfo" in obj,
          get: (obj) => obj.nzShowInfo,
          set: (obj, value) => {
            obj.nzShowInfo = value;
          }
        },
        metadata: _metadata
      }, _nzShowInfo_initializers, _nzShowInfo_extraInitializers);
      __esDecorate(null, null, _nzStrokeColor_decorators, {
        kind: "field",
        name: "nzStrokeColor",
        static: false,
        private: false,
        access: {
          has: (obj) => "nzStrokeColor" in obj,
          get: (obj) => obj.nzStrokeColor,
          set: (obj, value) => {
            obj.nzStrokeColor = value;
          }
        },
        metadata: _metadata
      }, _nzStrokeColor_initializers, _nzStrokeColor_extraInitializers);
      __esDecorate(null, null, _nzSize_decorators, {
        kind: "field",
        name: "nzSize",
        static: false,
        private: false,
        access: {
          has: (obj) => "nzSize" in obj,
          get: (obj) => obj.nzSize,
          set: (obj, value) => {
            obj.nzSize = value;
          }
        },
        metadata: _metadata
      }, _nzSize_initializers, _nzSize_extraInitializers);
      __esDecorate(null, null, _nzStrokeWidth_decorators, {
        kind: "field",
        name: "nzStrokeWidth",
        static: false,
        private: false,
        access: {
          has: (obj) => "nzStrokeWidth" in obj,
          get: (obj) => obj.nzStrokeWidth,
          set: (obj, value) => {
            obj.nzStrokeWidth = value;
          }
        },
        metadata: _metadata
      }, _nzStrokeWidth_initializers, _nzStrokeWidth_extraInitializers);
      __esDecorate(null, null, _nzGapDegree_decorators, {
        kind: "field",
        name: "nzGapDegree",
        static: false,
        private: false,
        access: {
          has: (obj) => "nzGapDegree" in obj,
          get: (obj) => obj.nzGapDegree,
          set: (obj, value) => {
            obj.nzGapDegree = value;
          }
        },
        metadata: _metadata
      }, _nzGapDegree_initializers, _nzGapDegree_extraInitializers);
      __esDecorate(null, null, _nzGapPosition_decorators, {
        kind: "field",
        name: "nzGapPosition",
        static: false,
        private: false,
        access: {
          has: (obj) => "nzGapPosition" in obj,
          get: (obj) => obj.nzGapPosition,
          set: (obj, value) => {
            obj.nzGapPosition = value;
          }
        },
        metadata: _metadata
      }, _nzGapPosition_initializers, _nzGapPosition_extraInitializers);
      __esDecorate(null, null, _nzStrokeLinecap_decorators, {
        kind: "field",
        name: "nzStrokeLinecap",
        static: false,
        private: false,
        access: {
          has: (obj) => "nzStrokeLinecap" in obj,
          get: (obj) => obj.nzStrokeLinecap,
          set: (obj, value) => {
            obj.nzStrokeLinecap = value;
          }
        },
        metadata: _metadata
      }, _nzStrokeLinecap_initializers, _nzStrokeLinecap_extraInitializers);
      if (_metadata) Object.defineProperty(this, Symbol.metadata, {
        enumerable: true,
        configurable: true,
        writable: true,
        value: _metadata
      });
    }
    cdr;
    nzConfigService;
    directionality;
    _nzModuleName = NZ_CONFIG_MODULE_NAME;
    nzShowInfo = __runInitializers(this, _nzShowInfo_initializers, true);
    nzWidth = (__runInitializers(this, _nzShowInfo_extraInitializers), 132);
    nzStrokeColor = __runInitializers(this, _nzStrokeColor_initializers, void 0);
    nzSize = (__runInitializers(this, _nzStrokeColor_extraInitializers), __runInitializers(this, _nzSize_initializers, "default"));
    nzFormat = __runInitializers(this, _nzSize_extraInitializers);
    nzSuccessPercent;
    nzPercent = 0;
    nzStrokeWidth = __runInitializers(this, _nzStrokeWidth_initializers, void 0);
    nzGapDegree = (__runInitializers(this, _nzStrokeWidth_extraInitializers), __runInitializers(this, _nzGapDegree_initializers, void 0));
    nzStatus = __runInitializers(this, _nzGapDegree_extraInitializers);
    nzType = "line";
    nzGapPosition = __runInitializers(this, _nzGapPosition_initializers, "top");
    nzStrokeLinecap = (__runInitializers(this, _nzGapPosition_extraInitializers), __runInitializers(this, _nzStrokeLinecap_initializers, "round"));
    nzSteps = (__runInitializers(this, _nzStrokeLinecap_extraInitializers), 0);
    steps = [];
    /** Gradient style when `nzType` is `line`. */
    lineGradient = null;
    /** If user uses gradient color. */
    isGradient = false;
    /** If the linear progress is a step progress. */
    isSteps = false;
    /**
     * Each progress whose `nzType` is circle or dashboard should have unique id to
     * define `<linearGradient>`.
     */
    gradientId = gradientIdSeed++;
    /** Paths to rendered in the template. */
    progressCirclePath = [];
    circleGradient;
    trailPathStyle = null;
    pathString;
    icon;
    dir = "ltr";
    get formatter() {
      return this.nzFormat || defaultFormatter;
    }
    get status() {
      return this.nzStatus || this.inferredStatus;
    }
    get strokeWidth() {
      return this.nzStrokeWidth || (this.nzType === "line" && this.nzSize !== "small" ? 8 : 6);
    }
    get isCircleStyle() {
      return this.nzType === "circle" || this.nzType === "dashboard";
    }
    cachedStatus = "normal";
    inferredStatus = "normal";
    destroy$ = new Subject();
    constructor(cdr, nzConfigService, directionality) {
      this.cdr = cdr;
      this.nzConfigService = nzConfigService;
      this.directionality = directionality;
    }
    ngOnChanges(changes) {
      const {
        nzSteps,
        nzGapPosition,
        nzStrokeLinecap,
        nzStrokeColor,
        nzGapDegree,
        nzType,
        nzStatus,
        nzPercent,
        nzSuccessPercent,
        nzStrokeWidth
      } = changes;
      if (nzStatus) {
        this.cachedStatus = this.nzStatus || this.cachedStatus;
      }
      if (nzPercent || nzSuccessPercent) {
        const fillAll = parseInt(this.nzPercent.toString(), 10) >= 100;
        if (fillAll) {
          if (isNotNil(this.nzSuccessPercent) && this.nzSuccessPercent >= 100 || this.nzSuccessPercent === void 0) {
            this.inferredStatus = "success";
          }
        } else {
          this.inferredStatus = this.cachedStatus;
        }
      }
      if (nzStatus || nzPercent || nzSuccessPercent || nzStrokeColor) {
        this.updateIcon();
      }
      if (nzStrokeColor) {
        this.setStrokeColor();
      }
      if (nzGapPosition || nzStrokeLinecap || nzGapDegree || nzType || nzPercent || nzStrokeColor || nzStrokeColor) {
        this.getCirclePaths();
      }
      if (nzPercent || nzSteps || nzStrokeWidth) {
        this.isSteps = this.nzSteps > 0;
        if (this.isSteps) {
          this.getSteps();
        }
      }
    }
    ngOnInit() {
      this.nzConfigService.getConfigChangeEventForComponent(NZ_CONFIG_MODULE_NAME).pipe(takeUntil(this.destroy$)).subscribe(() => {
        this.updateIcon();
        this.setStrokeColor();
        this.getCirclePaths();
      });
      this.directionality.change?.pipe(takeUntil(this.destroy$)).subscribe((direction) => {
        this.dir = direction;
        this.cdr.detectChanges();
      });
      this.dir = this.directionality.value;
    }
    ngOnDestroy() {
      this.destroy$.next();
      this.destroy$.complete();
    }
    updateIcon() {
      const ret = statusIconNameMap.get(this.status);
      this.icon = ret ? ret + (this.isCircleStyle ? "-o" : "-circle-fill") : "";
    }
    /**
     * Calculate step render configs.
     */
    getSteps() {
      const current = Math.floor(this.nzSteps * (this.nzPercent / 100));
      const stepWidth = this.nzSize === "small" ? 2 : 14;
      const steps = [];
      for (let i = 0; i < this.nzSteps; i++) {
        let color;
        if (i <= current - 1) {
          color = this.nzStrokeColor;
        }
        const stepStyle = {
          backgroundColor: `${color}`,
          width: `${stepWidth}px`,
          height: `${this.strokeWidth}px`
        };
        steps.push(stepStyle);
      }
      this.steps = steps;
    }
    /**
     * Calculate paths when the type is circle or dashboard.
     */
    getCirclePaths() {
      if (!this.isCircleStyle) {
        return;
      }
      const values = isNotNil(this.nzSuccessPercent) ? [this.nzSuccessPercent, this.nzPercent] : [this.nzPercent];
      const radius = 50 - this.strokeWidth / 2;
      const gapPosition = this.nzGapPosition || (this.nzType === "circle" ? "top" : "bottom");
      const len = Math.PI * 2 * radius;
      const gapDegree = this.nzGapDegree || (this.nzType === "circle" ? 0 : 75);
      let beginPositionX = 0;
      let beginPositionY = -radius;
      let endPositionX = 0;
      let endPositionY = radius * -2;
      switch (gapPosition) {
        case "left":
          beginPositionX = -radius;
          beginPositionY = 0;
          endPositionX = radius * 2;
          endPositionY = 0;
          break;
        case "right":
          beginPositionX = radius;
          beginPositionY = 0;
          endPositionX = radius * -2;
          endPositionY = 0;
          break;
        case "bottom":
          beginPositionY = radius;
          endPositionY = radius * 2;
          break;
        default:
      }
      this.pathString = `M 50,50 m ${beginPositionX},${beginPositionY}
       a ${radius},${radius} 0 1 1 ${endPositionX},${-endPositionY}
       a ${radius},${radius} 0 1 1 ${-endPositionX},${endPositionY}`;
      this.trailPathStyle = {
        strokeDasharray: `${len - gapDegree}px ${len}px`,
        strokeDashoffset: `-${gapDegree / 2}px`,
        transition: "stroke-dashoffset .3s ease 0s, stroke-dasharray .3s ease 0s, stroke .3s"
      };
      this.progressCirclePath = values.map((value, index) => {
        const isSuccessPercent = values.length === 2 && index === 0;
        return {
          stroke: this.isGradient && !isSuccessPercent ? `url(#gradient-${this.gradientId})` : null,
          strokePathStyle: {
            stroke: !this.isGradient ? isSuccessPercent ? statusColorMap.get("success") : this.nzStrokeColor : null,
            transition: "stroke-dashoffset .3s ease 0s, stroke-dasharray .3s ease 0s, stroke .3s, stroke-width .06s ease .3s",
            strokeDasharray: `${(value || 0) / 100 * (len - gapDegree)}px ${len}px`,
            strokeDashoffset: `-${gapDegree / 2}px`
          }
        };
      }).reverse();
    }
    setStrokeColor() {
      const color = this.nzStrokeColor;
      const isGradient = this.isGradient = !!color && typeof color !== "string";
      if (isGradient && !this.isCircleStyle) {
        this.lineGradient = handleLinearGradient(color);
      } else if (isGradient && this.isCircleStyle) {
        this.circleGradient = handleCircleGradient(this.nzStrokeColor);
      } else {
        this.lineGradient = null;
        this.circleGradient = [];
      }
    }
    static ɵfac = function NzProgressComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || NzProgressComponent2)(ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(NzConfigService), ɵɵdirectiveInject(Directionality));
    };
    static ɵcmp = ɵɵdefineComponent({
      type: NzProgressComponent2,
      selectors: [["nz-progress"]],
      inputs: {
        nzShowInfo: "nzShowInfo",
        nzWidth: "nzWidth",
        nzStrokeColor: "nzStrokeColor",
        nzSize: "nzSize",
        nzFormat: "nzFormat",
        nzSuccessPercent: [2, "nzSuccessPercent", "nzSuccessPercent", numberAttributeWithZeroFallback],
        nzPercent: [2, "nzPercent", "nzPercent", numberAttribute],
        nzStrokeWidth: [2, "nzStrokeWidth", "nzStrokeWidth", numberAttributeWithZeroFallback],
        nzGapDegree: [2, "nzGapDegree", "nzGapDegree", numberAttributeWithZeroFallback],
        nzStatus: "nzStatus",
        nzType: "nzType",
        nzGapPosition: "nzGapPosition",
        nzStrokeLinecap: "nzStrokeLinecap",
        nzSteps: [2, "nzSteps", "nzSteps", numberAttribute]
      },
      exportAs: ["nzProgress"],
      features: [ɵɵNgOnChangesFeature],
      decls: 5,
      vars: 18,
      consts: [["progressInfoTemplate", ""], [1, "ant-progress-inner", 3, "width", "height", "fontSize", "ant-progress-circle-gradient"], [1, "ant-progress-text"], [3, "nzType"], [4, "nzStringTemplateOutlet", "nzStringTemplateOutletContext"], [1, "ant-progress-steps-outer"], [1, "ant-progress-steps-item", 3, "style"], [3, "ngTemplateOutlet"], [1, "ant-progress-steps-item"], [1, "ant-progress-outer"], [1, "ant-progress-inner"], [1, "ant-progress-bg"], [1, "ant-progress-success-bg", 3, "width", "border-radius", "height"], [1, "ant-progress-success-bg"], ["viewBox", "0 0 100 100", 1, "ant-progress-circle"], ["stroke", "#f3f3f3", "fill-opacity", "0", 1, "ant-progress-circle-trail"], ["fill-opacity", "0", 1, "ant-progress-circle-path", 3, "style"], ["x1", "100%", "y1", "0%", "x2", "0%", "y2", "0%", 3, "id"], ["fill-opacity", "0", 1, "ant-progress-circle-path"]],
      template: function NzProgressComponent_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵtemplate(0, NzProgressComponent_ng_template_0_Template, 1, 1, "ng-template", null, 0, ɵɵtemplateRefExtractor);
          ɵɵelementStart(2, "div");
          ɵɵtemplate(3, NzProgressComponent_Conditional_3_Template, 3, 1, "div")(4, NzProgressComponent_Conditional_4_Template, 7, 14, "div", 1);
          ɵɵelementEnd();
        }
        if (rf & 2) {
          ɵɵadvance(2);
          ɵɵclassMap("ant-progress ant-progress-status-" + ctx.status);
          ɵɵclassProp("ant-progress-line", ctx.nzType === "line")("ant-progress-small", ctx.nzSize === "small")("ant-progress-default", ctx.nzSize === "default")("ant-progress-show-info", ctx.nzShowInfo)("ant-progress-circle", ctx.isCircleStyle)("ant-progress-steps", ctx.isSteps)("ant-progress-rtl", ctx.dir === "rtl");
          ɵɵadvance();
          ɵɵconditional(ctx.nzType === "line" ? 3 : -1);
          ɵɵadvance();
          ɵɵconditional(ctx.isCircleStyle ? 4 : -1);
        }
      },
      dependencies: [NzIconModule, NzIconDirective, NzOutletModule, NzStringTemplateOutletDirective, NgTemplateOutlet],
      encapsulation: 2,
      changeDetection: 0
    });
  };
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzProgressComponent, [{
    type: Component,
    args: [{
      changeDetection: ChangeDetectionStrategy.OnPush,
      encapsulation: ViewEncapsulation.None,
      selector: "nz-progress",
      exportAs: "nzProgress",
      preserveWhitespaces: false,
      imports: [NzIconModule, NzOutletModule, NgTemplateOutlet],
      template: `
    <ng-template #progressInfoTemplate>
      @if (nzShowInfo) {
        <span class="ant-progress-text">
          @if ((status === 'exception' || status === 'success') && !nzFormat) {
            <nz-icon [nzType]="icon" />
          } @else {
            <ng-container *nzStringTemplateOutlet="formatter; context: { $implicit: nzPercent }; let formatter">
              {{ formatter(nzPercent) }}
            </ng-container>
          }
        </span>
      }
    </ng-template>

    <div
      [class]="'ant-progress ant-progress-status-' + status"
      [class.ant-progress-line]="nzType === 'line'"
      [class.ant-progress-small]="nzSize === 'small'"
      [class.ant-progress-default]="nzSize === 'default'"
      [class.ant-progress-show-info]="nzShowInfo"
      [class.ant-progress-circle]="isCircleStyle"
      [class.ant-progress-steps]="isSteps"
      [class.ant-progress-rtl]="dir === 'rtl'"
    >
      @if (nzType === 'line') {
        <div>
          <!-- normal line style -->
          @if (isSteps) {
            <div class="ant-progress-steps-outer">
              @for (step of steps; track $index) {
                <div class="ant-progress-steps-item" [style]="step"></div>
              }
              <ng-template [ngTemplateOutlet]="progressInfoTemplate" />
            </div>
          } @else {
            <div class="ant-progress-outer">
              <div class="ant-progress-inner">
                <div
                  class="ant-progress-bg"
                  [style.width.%]="nzPercent"
                  [style.border-radius]="nzStrokeLinecap === 'round' ? '100px' : '0'"
                  [style.background]="!isGradient ? nzStrokeColor : null"
                  [style.background-image]="isGradient ? lineGradient : null"
                  [style.height.px]="strokeWidth"
                ></div>
                @if (nzSuccessPercent || nzSuccessPercent === 0) {
                  <div
                    class="ant-progress-success-bg"
                    [style.width.%]="nzSuccessPercent"
                    [style.border-radius]="nzStrokeLinecap === 'round' ? '100px' : '0'"
                    [style.height.px]="strokeWidth"
                  ></div>
                }
              </div>
            </div>
            <ng-template [ngTemplateOutlet]="progressInfoTemplate" />
          }
        </div>
      }
      <!-- line progress -->

      <!-- circle / dashboard progress -->

      @if (isCircleStyle) {
        <div
          [style.width.px]="this.nzWidth"
          [style.height.px]="this.nzWidth"
          [style.fontSize.px]="this.nzWidth * 0.15 + 6"
          class="ant-progress-inner"
          [class.ant-progress-circle-gradient]="isGradient"
        >
          <svg class="ant-progress-circle " viewBox="0 0 100 100">
            @if (isGradient) {
              <defs>
                <linearGradient [id]="'gradient-' + gradientId" x1="100%" y1="0%" x2="0%" y2="0%">
                  @for (i of circleGradient; track $index) {
                    <stop [attr.offset]="i.offset" [attr.stop-color]="i.color"></stop>
                  }
                </linearGradient>
              </defs>
            }

            <path
              class="ant-progress-circle-trail"
              stroke="#f3f3f3"
              fill-opacity="0"
              [attr.stroke-width]="strokeWidth"
              [attr.d]="pathString"
              [style]="trailPathStyle"
            ></path>
            @for (p of progressCirclePath; track $index) {
              <path
                class="ant-progress-circle-path"
                fill-opacity="0"
                [attr.d]="pathString"
                [attr.stroke-linecap]="nzStrokeLinecap"
                [attr.stroke]="p.stroke"
                [attr.stroke-width]="nzPercent ? strokeWidth : 0"
                [style]="p.strokePathStyle"
              ></path>
            }
          </svg>
          <ng-template [ngTemplateOutlet]="progressInfoTemplate" />
        </div>
      }
    </div>
  `
    }]
  }], () => [{
    type: ChangeDetectorRef
  }, {
    type: NzConfigService
  }, {
    type: Directionality
  }], {
    nzShowInfo: [{
      type: Input
    }],
    nzWidth: [{
      type: Input
    }],
    nzStrokeColor: [{
      type: Input
    }],
    nzSize: [{
      type: Input
    }],
    nzFormat: [{
      type: Input
    }],
    nzSuccessPercent: [{
      type: Input,
      args: [{
        transform: numberAttributeWithZeroFallback
      }]
    }],
    nzPercent: [{
      type: Input,
      args: [{
        transform: numberAttribute
      }]
    }],
    nzStrokeWidth: [{
      type: Input,
      args: [{
        transform: numberAttributeWithZeroFallback
      }]
    }],
    nzGapDegree: [{
      type: Input,
      args: [{
        transform: numberAttributeWithZeroFallback
      }]
    }],
    nzStatus: [{
      type: Input
    }],
    nzType: [{
      type: Input
    }],
    nzGapPosition: [{
      type: Input
    }],
    nzStrokeLinecap: [{
      type: Input
    }],
    nzSteps: [{
      type: Input,
      args: [{
        transform: numberAttribute
      }]
    }]
  });
})();
var NzProgressModule = class _NzProgressModule {
  static ɵfac = function NzProgressModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _NzProgressModule)();
  };
  static ɵmod = ɵɵdefineNgModule({
    type: _NzProgressModule,
    imports: [NzProgressComponent],
    exports: [NzProgressComponent]
  });
  static ɵinj = ɵɵdefineInjector({
    imports: [NzProgressComponent]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzProgressModule, [{
    type: NgModule,
    args: [{
      imports: [NzProgressComponent],
      exports: [NzProgressComponent]
    }]
  }], null, null);
})();

// node_modules/ng-zorro-antd/fesm2022/ng-zorro-antd-upload.mjs
var _c02 = ["file"];
var _c1 = ["nz-upload-btn", ""];
var _c2 = ["*"];
var _c3 = (a0) => ({
  $implicit: a0
});
var _c4 = () => ({
  opacity: 0.5,
  "pointer-events": "none"
});
function NzUploadListComponent_For_1_ng_template_2_Case_0_ng_template_1_Template(rf, ctx) {
}
function NzUploadListComponent_For_1_ng_template_2_Case_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 16);
    ɵɵtemplate(1, NzUploadListComponent_For_1_ng_template_2_Case_0_ng_template_1_Template, 0, 0, "ng-template", 17);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const file_r1 = ɵɵnextContext(2).$implicit;
    const iconNode_r2 = ɵɵreference(5);
    ɵɵclassProp("ant-upload-list-item-file", !file_r1.isUploading);
    ɵɵadvance();
    ɵɵproperty("ngTemplateOutlet", iconNode_r2)("ngTemplateOutletContext", ɵɵpureFunction1(4, _c3, file_r1));
  }
}
function NzUploadListComponent_For_1_ng_template_2_Case_1_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "img", 19);
  }
  if (rf & 2) {
    const file_r1 = ɵɵnextContext(3).$implicit;
    ɵɵproperty("src", file_r1.thumbUrl || file_r1.url, ɵɵsanitizeUrl);
    ɵɵattribute("alt", file_r1.name);
  }
}
function NzUploadListComponent_For_1_ng_template_2_Case_1_Conditional_2_ng_template_0_Template(rf, ctx) {
}
function NzUploadListComponent_For_1_ng_template_2_Case_1_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, NzUploadListComponent_For_1_ng_template_2_Case_1_Conditional_2_ng_template_0_Template, 0, 0, "ng-template", 17);
  }
  if (rf & 2) {
    const file_r1 = ɵɵnextContext(3).$implicit;
    const iconNode_r2 = ɵɵreference(5);
    ɵɵproperty("ngTemplateOutlet", iconNode_r2)("ngTemplateOutletContext", ɵɵpureFunction1(2, _c3, file_r1));
  }
}
function NzUploadListComponent_For_1_ng_template_2_Case_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "a", 18);
    ɵɵlistener("click", function NzUploadListComponent_For_1_ng_template_2_Case_1_Template_a_click_0_listener($event) {
      ɵɵrestoreView(_r3);
      const file_r1 = ɵɵnextContext(2).$implicit;
      const ctx_r3 = ɵɵnextContext();
      return ɵɵresetView(ctx_r3.handlePreview(file_r1, $event));
    });
    ɵɵtemplate(1, NzUploadListComponent_For_1_ng_template_2_Case_1_Conditional_1_Template, 1, 2, "img", 19)(2, NzUploadListComponent_For_1_ng_template_2_Case_1_Conditional_2_Template, 1, 4, null, 17);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const file_r1 = ɵɵnextContext(2).$implicit;
    ɵɵclassProp("ant-upload-list-item-file", !file_r1.isImageUrl);
    ɵɵproperty("href", file_r1.url || file_r1.thumbUrl, ɵɵsanitizeUrl);
    ɵɵadvance();
    ɵɵconditional(file_r1.isImageUrl ? 1 : 2);
  }
}
function NzUploadListComponent_For_1_ng_template_2_Case_2_ng_template_1_Template(rf, ctx) {
}
function NzUploadListComponent_For_1_ng_template_2_Case_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 15);
    ɵɵtemplate(1, NzUploadListComponent_For_1_ng_template_2_Case_2_ng_template_1_Template, 0, 0, "ng-template", 17);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const file_r1 = ɵɵnextContext(2).$implicit;
    const iconNode_r2 = ɵɵreference(5);
    ɵɵadvance();
    ɵɵproperty("ngTemplateOutlet", iconNode_r2)("ngTemplateOutletContext", ɵɵpureFunction1(2, _c3, file_r1));
  }
}
function NzUploadListComponent_For_1_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, NzUploadListComponent_For_1_ng_template_2_Case_0_Template, 2, 6, "div", 13)(1, NzUploadListComponent_For_1_ng_template_2_Case_1_Template, 3, 4, "a", 14)(2, NzUploadListComponent_For_1_ng_template_2_Case_2_Template, 2, 4, "div", 15);
  }
  if (rf & 2) {
    let tmp_17_0;
    const file_r1 = ɵɵnextContext().$implicit;
    ɵɵconditional((tmp_17_0 = file_r1.iconType) === "uploading" ? 0 : tmp_17_0 === "thumbnail" ? 1 : 2);
  }
}
function NzUploadListComponent_For_1_ng_template_4_Conditional_0_Case_0_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "nz-icon", 21);
  }
}
function NzUploadListComponent_For_1_ng_template_4_Conditional_0_Case_0_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "nz-icon", 22);
  }
  if (rf & 2) {
    const file_r5 = ɵɵnextContext(3).$implicit;
    ɵɵproperty("nzType", file_r5.isImageUrl ? "picture" : "file");
  }
}
function NzUploadListComponent_For_1_ng_template_4_Conditional_0_Case_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, NzUploadListComponent_For_1_ng_template_4_Conditional_0_Case_0_Conditional_0_Template, 1, 0, "nz-icon", 21)(1, NzUploadListComponent_For_1_ng_template_4_Conditional_0_Case_0_Conditional_1_Template, 1, 1, "nz-icon", 22);
  }
  if (rf & 2) {
    const file_r5 = ɵɵnextContext(2).$implicit;
    ɵɵconditional(file_r5.isUploading ? 0 : 1);
  }
}
function NzUploadListComponent_For_1_ng_template_4_Conditional_0_Case_1_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtext(0);
  }
  if (rf & 2) {
    const ctx_r3 = ɵɵnextContext(5);
    ɵɵtextInterpolate1(" ", ctx_r3.locale.uploading, " ");
  }
}
function NzUploadListComponent_For_1_ng_template_4_Conditional_0_Case_1_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "nz-icon", 22);
  }
  if (rf & 2) {
    const file_r5 = ɵɵnextContext(3).$implicit;
    ɵɵproperty("nzType", file_r5.isImageUrl ? "picture" : "file");
  }
}
function NzUploadListComponent_For_1_ng_template_4_Conditional_0_Case_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, NzUploadListComponent_For_1_ng_template_4_Conditional_0_Case_1_Conditional_0_Template, 1, 1)(1, NzUploadListComponent_For_1_ng_template_4_Conditional_0_Case_1_Conditional_1_Template, 1, 1, "nz-icon", 22);
  }
  if (rf & 2) {
    const file_r5 = ɵɵnextContext(2).$implicit;
    ɵɵconditional(file_r5.isUploading ? 0 : 1);
  }
}
function NzUploadListComponent_For_1_ng_template_4_Conditional_0_Case_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "nz-icon", 20);
  }
  if (rf & 2) {
    const file_r5 = ɵɵnextContext(2).$implicit;
    ɵɵproperty("nzType", file_r5.isUploading ? "loading" : "paper-clip");
  }
}
function NzUploadListComponent_For_1_ng_template_4_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, NzUploadListComponent_For_1_ng_template_4_Conditional_0_Case_0_Template, 2, 1)(1, NzUploadListComponent_For_1_ng_template_4_Conditional_0_Case_1_Template, 2, 1)(2, NzUploadListComponent_For_1_ng_template_4_Conditional_0_Case_2_Template, 1, 1, "nz-icon", 20);
  }
  if (rf & 2) {
    let tmp_19_0;
    const ctx_r3 = ɵɵnextContext(3);
    ɵɵconditional((tmp_19_0 = ctx_r3.listType) === "picture" ? 0 : tmp_19_0 === "picture-card" ? 1 : 2);
  }
}
function NzUploadListComponent_For_1_ng_template_4_Conditional_1_ng_template_0_Template(rf, ctx) {
}
function NzUploadListComponent_For_1_ng_template_4_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, NzUploadListComponent_For_1_ng_template_4_Conditional_1_ng_template_0_Template, 0, 0, "ng-template", 17);
  }
  if (rf & 2) {
    const file_r5 = ɵɵnextContext().$implicit;
    const ctx_r3 = ɵɵnextContext(2);
    ɵɵproperty("ngTemplateOutlet", ctx_r3.iconRender)("ngTemplateOutletContext", ɵɵpureFunction1(2, _c3, file_r5));
  }
}
function NzUploadListComponent_For_1_ng_template_4_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, NzUploadListComponent_For_1_ng_template_4_Conditional_0_Template, 3, 1)(1, NzUploadListComponent_For_1_ng_template_4_Conditional_1_Template, 1, 4, null, 17);
  }
  if (rf & 2) {
    const ctx_r3 = ɵɵnextContext(2);
    ɵɵconditional(!ctx_r3.iconRender ? 0 : 1);
  }
}
function NzUploadListComponent_For_1_ng_template_6_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "button", 24);
    ɵɵlistener("click", function NzUploadListComponent_For_1_ng_template_6_Conditional_0_Template_button_click_0_listener($event) {
      ɵɵrestoreView(_r6);
      const file_r1 = ɵɵnextContext(2).$implicit;
      const ctx_r3 = ɵɵnextContext();
      return ɵɵresetView(ctx_r3.handleRemove(file_r1, $event));
    });
    ɵɵelement(1, "nz-icon", 25);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r3 = ɵɵnextContext(3);
    ɵɵattribute("title", ctx_r3.locale.removeFile);
  }
}
function NzUploadListComponent_For_1_ng_template_6_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, NzUploadListComponent_For_1_ng_template_6_Conditional_0_Template, 2, 1, "button", 23);
  }
  if (rf & 2) {
    const ctx_r3 = ɵɵnextContext(2);
    ɵɵconditional(ctx_r3.icons.showRemoveIcon ? 0 : -1);
  }
}
function NzUploadListComponent_For_1_ng_template_8_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "button", 24);
    ɵɵlistener("click", function NzUploadListComponent_For_1_ng_template_8_Conditional_0_Template_button_click_0_listener() {
      ɵɵrestoreView(_r7);
      const file_r1 = ɵɵnextContext(2).$implicit;
      const ctx_r3 = ɵɵnextContext();
      return ɵɵresetView(ctx_r3.handleDownload(file_r1));
    });
    ɵɵelement(1, "nz-icon", 26);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r3 = ɵɵnextContext(3);
    ɵɵattribute("title", ctx_r3.locale.downloadFile);
  }
}
function NzUploadListComponent_For_1_ng_template_8_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, NzUploadListComponent_For_1_ng_template_8_Conditional_0_Template, 2, 1, "button", 23);
  }
  if (rf & 2) {
    const file_r1 = ɵɵnextContext().$implicit;
    ɵɵconditional(file_r1.showDownload ? 0 : -1);
  }
}
function NzUploadListComponent_For_1_ng_template_10_Conditional_0_ng_template_1_Template(rf, ctx) {
}
function NzUploadListComponent_For_1_ng_template_10_Conditional_0_ng_template_2_Template(rf, ctx) {
}
function NzUploadListComponent_For_1_ng_template_10_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "span");
    ɵɵtemplate(1, NzUploadListComponent_For_1_ng_template_10_Conditional_0_ng_template_1_Template, 0, 0, "ng-template", 10)(2, NzUploadListComponent_For_1_ng_template_10_Conditional_0_ng_template_2_Template, 0, 0, "ng-template", 10);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    ɵɵnextContext(2);
    const removeIcon_r8 = ɵɵreference(7);
    const downloadIcon_r9 = ɵɵreference(9);
    const ctx_r3 = ɵɵnextContext();
    ɵɵclassMapInterpolate1("ant-upload-list-item-card-actions ", ctx_r3.listType === "picture" ? "picture" : "", "");
    ɵɵadvance();
    ɵɵproperty("ngTemplateOutlet", downloadIcon_r9);
    ɵɵadvance();
    ɵɵproperty("ngTemplateOutlet", removeIcon_r8);
  }
}
function NzUploadListComponent_For_1_ng_template_10_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, NzUploadListComponent_For_1_ng_template_10_Conditional_0_Template, 3, 5, "span", 6);
  }
  if (rf & 2) {
    const ctx_r3 = ɵɵnextContext(2);
    ɵɵconditional(ctx_r3.listType !== "picture-card" ? 0 : -1);
  }
}
function NzUploadListComponent_For_1_ng_template_12_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "a", 29);
    ɵɵlistener("click", function NzUploadListComponent_For_1_ng_template_12_Conditional_0_Template_a_click_0_listener($event) {
      ɵɵrestoreView(_r10);
      const file_r1 = ɵɵnextContext(2).$implicit;
      const ctx_r3 = ɵɵnextContext();
      return ɵɵresetView(ctx_r3.handlePreview(file_r1, $event));
    });
    ɵɵtext(1);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const file_r1 = ɵɵnextContext(2).$implicit;
    ɵɵproperty("href", file_r1.url, ɵɵsanitizeUrl);
    ɵɵattribute("title", file_r1.name)("download", file_r1.linkProps && file_r1.linkProps.download);
    ɵɵadvance();
    ɵɵtextInterpolate1(" ", file_r1.name, " ");
  }
}
function NzUploadListComponent_For_1_ng_template_12_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "span", 30);
    ɵɵlistener("click", function NzUploadListComponent_For_1_ng_template_12_Conditional_1_Template_span_click_0_listener($event) {
      ɵɵrestoreView(_r11);
      const file_r1 = ɵɵnextContext(2).$implicit;
      const ctx_r3 = ɵɵnextContext();
      return ɵɵresetView(ctx_r3.handlePreview(file_r1, $event));
    });
    ɵɵtext(1);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const file_r1 = ɵɵnextContext(2).$implicit;
    ɵɵattribute("title", file_r1.name);
    ɵɵadvance();
    ɵɵtextInterpolate1(" ", file_r1.name, " ");
  }
}
function NzUploadListComponent_For_1_ng_template_12_ng_template_2_Template(rf, ctx) {
}
function NzUploadListComponent_For_1_ng_template_12_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, NzUploadListComponent_For_1_ng_template_12_Conditional_0_Template, 2, 4, "a", 27)(1, NzUploadListComponent_For_1_ng_template_12_Conditional_1_Template, 2, 2, "span", 28)(2, NzUploadListComponent_For_1_ng_template_12_ng_template_2_Template, 0, 0, "ng-template", 10);
  }
  if (rf & 2) {
    const file_r1 = ɵɵnextContext().$implicit;
    const downloadOrDelete_r12 = ɵɵreference(11);
    ɵɵconditional(file_r1.url ? 0 : 1);
    ɵɵadvance(2);
    ɵɵproperty("ngTemplateOutlet", downloadOrDelete_r12);
  }
}
function NzUploadListComponent_For_1_ng_template_16_Template(rf, ctx) {
}
function NzUploadListComponent_For_1_ng_template_17_Template(rf, ctx) {
}
function NzUploadListComponent_For_1_Conditional_18_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r13 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "a", 32);
    ɵɵlistener("click", function NzUploadListComponent_For_1_Conditional_18_Conditional_1_Template_a_click_0_listener($event) {
      ɵɵrestoreView(_r13);
      const file_r1 = ɵɵnextContext(2).$implicit;
      const ctx_r3 = ɵɵnextContext();
      return ɵɵresetView(ctx_r3.handlePreview(file_r1, $event));
    });
    ɵɵelement(1, "nz-icon", 33);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const file_r1 = ɵɵnextContext(2).$implicit;
    const ctx_r3 = ɵɵnextContext();
    ɵɵstyleMap(!(file_r1.url || file_r1.thumbUrl) ? ɵɵpureFunction0(4, _c4) : null);
    ɵɵproperty("href", file_r1.url || file_r1.thumbUrl, ɵɵsanitizeUrl);
    ɵɵattribute("title", ctx_r3.locale.previewFile);
  }
}
function NzUploadListComponent_For_1_Conditional_18_Conditional_2_ng_template_0_Template(rf, ctx) {
}
function NzUploadListComponent_For_1_Conditional_18_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, NzUploadListComponent_For_1_Conditional_18_Conditional_2_ng_template_0_Template, 0, 0, "ng-template", 10);
  }
  if (rf & 2) {
    ɵɵnextContext(2);
    const downloadIcon_r9 = ɵɵreference(9);
    ɵɵproperty("ngTemplateOutlet", downloadIcon_r9);
  }
}
function NzUploadListComponent_For_1_Conditional_18_ng_template_3_Template(rf, ctx) {
}
function NzUploadListComponent_For_1_Conditional_18_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "span", 11);
    ɵɵtemplate(1, NzUploadListComponent_For_1_Conditional_18_Conditional_1_Template, 2, 5, "a", 31)(2, NzUploadListComponent_For_1_Conditional_18_Conditional_2_Template, 1, 1, null, 10)(3, NzUploadListComponent_For_1_Conditional_18_ng_template_3_Template, 0, 0, "ng-template", 10);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const file_r1 = ɵɵnextContext().$implicit;
    const removeIcon_r8 = ɵɵreference(7);
    const ctx_r3 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵconditional(ctx_r3.icons.showPreviewIcon ? 1 : -1);
    ɵɵadvance();
    ɵɵconditional(file_r1.status === "done" ? 2 : -1);
    ɵɵadvance();
    ɵɵproperty("ngTemplateOutlet", removeIcon_r8);
  }
}
function NzUploadListComponent_For_1_Conditional_19_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 12);
    ɵɵelement(1, "nz-progress", 34);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const file_r1 = ɵɵnextContext().$implicit;
    ɵɵadvance();
    ɵɵproperty("nzPercent", file_r1.percent)("nzShowInfo", false)("nzStrokeWidth", 2);
  }
}
function NzUploadListComponent_For_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div")(1, "div", 7);
    ɵɵtemplate(2, NzUploadListComponent_For_1_ng_template_2_Template, 3, 1, "ng-template", null, 0, ɵɵtemplateRefExtractor)(4, NzUploadListComponent_For_1_ng_template_4_Template, 2, 1, "ng-template", null, 1, ɵɵtemplateRefExtractor)(6, NzUploadListComponent_For_1_ng_template_6_Template, 1, 1, "ng-template", null, 2, ɵɵtemplateRefExtractor)(8, NzUploadListComponent_For_1_ng_template_8_Template, 1, 1, "ng-template", null, 3, ɵɵtemplateRefExtractor)(10, NzUploadListComponent_For_1_ng_template_10_Template, 1, 1, "ng-template", null, 4, ɵɵtemplateRefExtractor)(12, NzUploadListComponent_For_1_ng_template_12_Template, 3, 2, "ng-template", null, 5, ɵɵtemplateRefExtractor);
    ɵɵelementStart(14, "div", 8)(15, "span", 9);
    ɵɵtemplate(16, NzUploadListComponent_For_1_ng_template_16_Template, 0, 0, "ng-template", 10)(17, NzUploadListComponent_For_1_ng_template_17_Template, 0, 0, "ng-template", 10);
    ɵɵelementEnd()();
    ɵɵtemplate(18, NzUploadListComponent_For_1_Conditional_18_Template, 4, 3, "span", 11)(19, NzUploadListComponent_For_1_Conditional_19_Template, 2, 3, "div", 12);
    ɵɵelementEnd()();
  }
  if (rf & 2) {
    const file_r1 = ctx.$implicit;
    const icon_r14 = ɵɵreference(3);
    const preview_r15 = ɵɵreference(13);
    const ctx_r3 = ɵɵnextContext();
    ɵɵclassMapInterpolate1("ant-upload-list-", ctx_r3.listType, "-container");
    ɵɵadvance();
    ɵɵclassMapInterpolate2("ant-upload-list-item ant-upload-list-item-", file_r1.status, " ant-upload-list-item-list-type-", ctx_r3.listType, "");
    ɵɵproperty("@itemState", void 0)("nzTooltipTitle", file_r1.status === "error" ? file_r1.message : null);
    ɵɵattribute("data-key", file_r1.key);
    ɵɵadvance(15);
    ɵɵproperty("ngTemplateOutlet", icon_r14);
    ɵɵadvance();
    ɵɵproperty("ngTemplateOutlet", preview_r15);
    ɵɵadvance();
    ɵɵconditional(ctx_r3.listType === "picture-card" && !file_r1.isUploading ? 18 : -1);
    ɵɵadvance();
    ɵɵconditional(file_r1.isUploading ? 19 : -1);
  }
}
var _c5 = ["uploadComp"];
var _c6 = ["listComp"];
var _c7 = () => [];
function NzUploadComponent_ng_template_0_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "nz-upload-list", 6, 3);
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext(2);
    ɵɵstyleProp("display", ctx_r0.nzShowUploadList ? "" : "none");
    ɵɵproperty("locale", ctx_r0.locale)("listType", ctx_r0.nzListType)("items", ctx_r0.nzFileList || ɵɵpureFunction0(13, _c7))("icons", ctx_r0.nzShowUploadList)("iconRender", ctx_r0.nzIconRender)("previewFile", ctx_r0.nzPreviewFile)("previewIsImage", ctx_r0.nzPreviewIsImage)("onPreview", ctx_r0.nzPreview)("onRemove", ctx_r0.onRemove)("onDownload", ctx_r0.nzDownload)("dir", ctx_r0.dir);
  }
}
function NzUploadComponent_ng_template_0_Conditional_1_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainer(0);
  }
}
function NzUploadComponent_ng_template_0_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, NzUploadComponent_ng_template_0_Conditional_1_ng_container_0_Template, 1, 0, "ng-container", 7);
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext(2);
    ɵɵproperty("ngTemplateOutlet", ctx_r0.nzFileListRender)("ngTemplateOutletContext", ɵɵpureFunction1(2, _c3, ctx_r0.nzFileList));
  }
}
function NzUploadComponent_ng_template_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, NzUploadComponent_ng_template_0_Conditional_0_Template, 2, 14, "nz-upload-list", 5)(1, NzUploadComponent_ng_template_0_Conditional_1_Template, 1, 4, "ng-container");
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵconditional(ctx_r0.locale && !ctx_r0.nzFileListRender ? 0 : -1);
    ɵɵadvance();
    ɵɵconditional(ctx_r0.nzFileListRender ? 1 : -1);
  }
}
function NzUploadComponent_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵprojection(0);
  }
}
function NzUploadComponent_ng_template_4_ng_template_3_Template(rf, ctx) {
}
function NzUploadComponent_ng_template_4_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div")(1, "div", 8, 4);
    ɵɵtemplate(3, NzUploadComponent_ng_template_4_ng_template_3_Template, 0, 0, "ng-template", 9);
    ɵɵelementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    const con_r2 = ɵɵreference(3);
    ɵɵclassMap(ctx_r0.classList);
    ɵɵstyleProp("display", ctx_r0.nzShowButton ? "" : "none");
    ɵɵadvance();
    ɵɵproperty("options", ctx_r0._btnOptions);
    ɵɵadvance(2);
    ɵɵproperty("ngTemplateOutlet", con_r2);
  }
}
function NzUploadComponent_Conditional_6_ng_template_4_Template(rf, ctx) {
}
function NzUploadComponent_Conditional_6_ng_template_5_Template(rf, ctx) {
}
function NzUploadComponent_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "div", 10);
    ɵɵlistener("drop", function NzUploadComponent_Conditional_6_Template_div_drop_0_listener($event) {
      ɵɵrestoreView(_r3);
      const ctx_r0 = ɵɵnextContext();
      return ɵɵresetView(ctx_r0.fileDrop($event));
    })("dragover", function NzUploadComponent_Conditional_6_Template_div_dragover_0_listener($event) {
      ɵɵrestoreView(_r3);
      const ctx_r0 = ɵɵnextContext();
      return ɵɵresetView(ctx_r0.fileDrop($event));
    })("dragleave", function NzUploadComponent_Conditional_6_Template_div_dragleave_0_listener($event) {
      ɵɵrestoreView(_r3);
      const ctx_r0 = ɵɵnextContext();
      return ɵɵresetView(ctx_r0.fileDrop($event));
    });
    ɵɵelementStart(1, "div", 11, 4)(3, "div", 12);
    ɵɵtemplate(4, NzUploadComponent_Conditional_6_ng_template_4_Template, 0, 0, "ng-template", 9);
    ɵɵelementEnd()()();
    ɵɵtemplate(5, NzUploadComponent_Conditional_6_ng_template_5_Template, 0, 0, "ng-template", 9);
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    const list_r4 = ɵɵreference(1);
    const con_r2 = ɵɵreference(3);
    ɵɵclassMap(ctx_r0.classList);
    ɵɵadvance();
    ɵɵproperty("options", ctx_r0._btnOptions);
    ɵɵadvance(3);
    ɵɵproperty("ngTemplateOutlet", con_r2);
    ɵɵadvance();
    ɵɵproperty("ngTemplateOutlet", list_r4);
  }
}
function NzUploadComponent_Conditional_7_Conditional_0_ng_template_0_Template(rf, ctx) {
}
function NzUploadComponent_Conditional_7_Conditional_0_ng_template_1_Template(rf, ctx) {
}
function NzUploadComponent_Conditional_7_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, NzUploadComponent_Conditional_7_Conditional_0_ng_template_0_Template, 0, 0, "ng-template", 9)(1, NzUploadComponent_Conditional_7_Conditional_0_ng_template_1_Template, 0, 0, "ng-template", 9);
  }
  if (rf & 2) {
    ɵɵnextContext(2);
    const list_r4 = ɵɵreference(1);
    const btn_r5 = ɵɵreference(5);
    ɵɵproperty("ngTemplateOutlet", list_r4);
    ɵɵadvance();
    ɵɵproperty("ngTemplateOutlet", btn_r5);
  }
}
function NzUploadComponent_Conditional_7_Conditional_1_ng_template_0_Template(rf, ctx) {
}
function NzUploadComponent_Conditional_7_Conditional_1_ng_template_1_Template(rf, ctx) {
}
function NzUploadComponent_Conditional_7_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, NzUploadComponent_Conditional_7_Conditional_1_ng_template_0_Template, 0, 0, "ng-template", 9)(1, NzUploadComponent_Conditional_7_Conditional_1_ng_template_1_Template, 0, 0, "ng-template", 9);
  }
  if (rf & 2) {
    ɵɵnextContext(2);
    const list_r4 = ɵɵreference(1);
    const btn_r5 = ɵɵreference(5);
    ɵɵproperty("ngTemplateOutlet", btn_r5);
    ɵɵadvance();
    ɵɵproperty("ngTemplateOutlet", list_r4);
  }
}
function NzUploadComponent_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, NzUploadComponent_Conditional_7_Conditional_0_Template, 2, 2)(1, NzUploadComponent_Conditional_7_Conditional_1_Template, 2, 2);
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵconditional(ctx_r0.nzListType === "picture-card" ? 0 : 1);
  }
}
var NzUploadBtnComponent = class _NzUploadBtnComponent {
  elementRef;
  reqs = {};
  destroy = false;
  destroy$ = new Subject();
  file;
  options;
  onClick() {
    if (this.options.disabled || !this.options.openFileDialogOnClick) {
      return;
    }
    this.file.nativeElement.click();
  }
  // skip safari bug
  onFileDrop(e) {
    if (this.options.disabled || e.type === "dragover") {
      e.preventDefault();
      return;
    }
    if (this.options.directory) {
      this.traverseFileTree(e.dataTransfer.items);
    } else {
      const files = Array.prototype.slice.call(e.dataTransfer.files).filter((file) => this.attrAccept(file, this.options.accept));
      if (files.length) {
        this.uploadFiles(files);
      }
    }
    e.preventDefault();
  }
  onChange(e) {
    if (this.options.disabled) {
      return;
    }
    const hie = e.target;
    this.uploadFiles(hie.files);
    hie.value = "";
  }
  traverseFileTree(files) {
    const _traverseFileTree = (item, path) => {
      if (item.isFile) {
        item.file((file) => {
          if (this.attrAccept(file, this.options.accept)) {
            this.uploadFiles([file]);
          }
        });
      } else if (item.isDirectory) {
        const dirReader = item.createReader();
        dirReader.readEntries((entries) => {
          for (const entrieItem of entries) {
            _traverseFileTree(entrieItem, `${path}${item.name}/`);
          }
        });
      }
    };
    for (const file of files) {
      _traverseFileTree(file.webkitGetAsEntry(), "");
    }
  }
  attrAccept(file, acceptedFiles) {
    if (file && acceptedFiles) {
      const acceptedFilesArray = Array.isArray(acceptedFiles) ? acceptedFiles : acceptedFiles.split(",");
      const fileName = `${file.name}`;
      const mimeType = `${file.type}`;
      const baseMimeType = mimeType.replace(/\/.*$/, "");
      return acceptedFilesArray.some((type) => {
        const validType = type.trim();
        if (validType.charAt(0) === ".") {
          return fileName.toLowerCase().indexOf(validType.toLowerCase(), fileName.toLowerCase().length - validType.toLowerCase().length) !== -1;
        } else if (/\/\*$/.test(validType)) {
          return baseMimeType === validType.replace(/\/.*$/, "");
        }
        return mimeType === validType;
      });
    }
    return true;
  }
  attachUid(file) {
    if (!file.uid) {
      file.uid = Math.random().toString(36).substring(2);
    }
    return file;
  }
  uploadFiles(fileList) {
    let filters$ = of(Array.prototype.slice.call(fileList));
    if (this.options.filters) {
      this.options.filters.forEach((f) => {
        filters$ = filters$.pipe(switchMap((list) => {
          const fnRes = f.fn(list);
          return fnRes instanceof Observable ? fnRes : of(fnRes);
        }));
      });
    }
    filters$.subscribe({
      next: (list) => {
        list.forEach((file) => {
          this.attachUid(file);
          this.upload(file, list);
        });
      },
      error: (e) => {
        warn(`Unhandled upload filter error`, e);
      }
    });
  }
  upload(file, fileList) {
    if (!this.options.beforeUpload) {
      return this.post(file);
    }
    const before = this.options.beforeUpload(file, fileList);
    if (before instanceof Observable) {
      before.subscribe({
        next: (processedFile) => {
          const processedFileType = Object.prototype.toString.call(processedFile);
          if (processedFileType === "[object File]" || processedFileType === "[object Blob]") {
            this.attachUid(processedFile);
            this.post(processedFile);
          } else if (processedFile) {
            this.post(file);
          }
        },
        error: (e) => {
          warn(`Unhandled upload beforeUpload error`, e);
        }
      });
    } else if (before) {
      return this.post(file);
    }
  }
  post(file) {
    if (this.destroy) {
      return;
    }
    let process$ = of(file);
    let transformedFile;
    const opt = this.options;
    const {
      uid
    } = file;
    const {
      action,
      data,
      headers,
      transformFile
    } = opt;
    const args = {
      action: typeof action === "string" ? action : "",
      name: opt.name,
      headers,
      file,
      postFile: file,
      data,
      withCredentials: opt.withCredentials,
      onProgress: opt.onProgress ? (e) => {
        opt.onProgress(e, file);
      } : void 0,
      onSuccess: (ret, xhr) => {
        this.clean(uid);
        opt.onSuccess(ret, file, xhr);
      },
      onError: (xhr) => {
        this.clean(uid);
        opt.onError(xhr, file);
      }
    };
    if (typeof action === "function") {
      const actionResult = action(file);
      if (actionResult instanceof Observable) {
        process$ = process$.pipe(switchMap(() => actionResult), map((res) => {
          args.action = res;
          return file;
        }));
      } else {
        args.action = actionResult;
      }
    }
    if (typeof transformFile === "function") {
      const transformResult = transformFile(file);
      process$ = process$.pipe(switchMap(() => transformResult instanceof Observable ? transformResult : of(transformResult)), tap((newFile) => transformedFile = newFile));
    }
    if (typeof data === "function") {
      const dataResult = data(file);
      if (dataResult instanceof Observable) {
        process$ = process$.pipe(switchMap(() => dataResult), map((res) => {
          args.data = res;
          return transformedFile ?? file;
        }));
      } else {
        args.data = dataResult;
      }
    }
    if (typeof headers === "function") {
      const headersResult = headers(file);
      if (headersResult instanceof Observable) {
        process$ = process$.pipe(switchMap(() => headersResult), map((res) => {
          args.headers = res;
          return transformedFile ?? file;
        }));
      } else {
        args.headers = headersResult;
      }
    }
    process$.subscribe((newFile) => {
      args.postFile = newFile;
      const req$ = (opt.customRequest || this.xhr).call(this, args);
      if (!(req$ instanceof Subscription)) {
        warn(`Must return Subscription type in '[nzCustomRequest]' property`);
      }
      this.reqs[uid] = req$;
      opt.onStart(file);
    });
  }
  xhr(args) {
    const formData = new FormData();
    if (args.data) {
      Object.keys(args.data).map((key) => {
        formData.append(key, args.data[key]);
      });
    }
    formData.append(args.name, args.postFile);
    if (!args.headers) {
      args.headers = {};
    }
    if (args.headers["X-Requested-With"] !== null) {
      args.headers["X-Requested-With"] = `XMLHttpRequest`;
    } else {
      delete args.headers["X-Requested-With"];
    }
    const req = new HttpRequest("POST", args.action, formData, {
      reportProgress: true,
      withCredentials: args.withCredentials,
      headers: new HttpHeaders(args.headers)
    });
    return this.http.request(req).subscribe({
      next: (event) => {
        if (event.type === HttpEventType.UploadProgress) {
          if (event.total > 0) {
            event.percent = event.loaded / event.total * 100;
          }
          args.onProgress(event, args.file);
        } else if (event instanceof HttpResponse) {
          args.onSuccess(event.body, args.file, event);
        }
      },
      error: (err) => {
        this.abort(args.file);
        args.onError(err, args.file);
      }
    });
  }
  clean(uid) {
    const req$ = this.reqs[uid];
    if (req$ instanceof Subscription) {
      req$.unsubscribe();
    }
    delete this.reqs[uid];
  }
  abort(file) {
    if (file) {
      this.clean(file && file.uid);
    } else {
      Object.keys(this.reqs).forEach((uid) => this.clean(uid));
    }
  }
  http = inject(HttpClient, {
    optional: true
  });
  constructor(elementRef) {
    this.elementRef = elementRef;
    if (!this.http) {
      throw new Error(`Not found 'HttpClient', You can configure 'HttpClient' with 'provideHttpClient()' in your root module.`);
    }
  }
  ngOnInit() {
    fromEventOutsideAngular(this.elementRef.nativeElement, "click").pipe(takeUntil(this.destroy$)).subscribe(() => this.onClick());
    fromEventOutsideAngular(this.elementRef.nativeElement, "keydown").pipe(takeUntil(this.destroy$)).subscribe((event) => {
      if (this.options.disabled) {
        return;
      }
      if (event.key === "Enter" || event.keyCode === ENTER) {
        this.onClick();
      }
    });
  }
  ngOnDestroy() {
    this.destroy = true;
    this.destroy$.next();
    this.abort();
  }
  static ɵfac = function NzUploadBtnComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _NzUploadBtnComponent)(ɵɵdirectiveInject(ElementRef));
  };
  static ɵcmp = ɵɵdefineComponent({
    type: _NzUploadBtnComponent,
    selectors: [["", "nz-upload-btn", ""]],
    viewQuery: function NzUploadBtnComponent_Query(rf, ctx) {
      if (rf & 1) {
        ɵɵviewQuery(_c02, 7);
      }
      if (rf & 2) {
        let _t;
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.file = _t.first);
      }
    },
    hostAttrs: [1, "ant-upload"],
    hostVars: 4,
    hostBindings: function NzUploadBtnComponent_HostBindings(rf, ctx) {
      if (rf & 1) {
        ɵɵlistener("drop", function NzUploadBtnComponent_drop_HostBindingHandler($event) {
          return ctx.onFileDrop($event);
        })("dragover", function NzUploadBtnComponent_dragover_HostBindingHandler($event) {
          return ctx.onFileDrop($event);
        });
      }
      if (rf & 2) {
        ɵɵattribute("tabindex", "0")("role", "button");
        ɵɵclassProp("ant-upload-disabled", ctx.options.disabled);
      }
    },
    inputs: {
      options: "options"
    },
    exportAs: ["nzUploadBtn"],
    attrs: _c1,
    ngContentSelectors: _c2,
    decls: 3,
    vars: 6,
    consts: [["file", ""], ["type", "file", 3, "change", "multiple"]],
    template: function NzUploadBtnComponent_Template(rf, ctx) {
      if (rf & 1) {
        const _r1 = ɵɵgetCurrentView();
        ɵɵprojectionDef();
        ɵɵelementStart(0, "input", 1, 0);
        ɵɵlistener("change", function NzUploadBtnComponent_Template_input_change_0_listener($event) {
          ɵɵrestoreView(_r1);
          return ɵɵresetView(ctx.onChange($event));
        });
        ɵɵelementEnd();
        ɵɵprojection(2);
      }
      if (rf & 2) {
        ɵɵstyleProp("display", "none");
        ɵɵproperty("multiple", ctx.options.multiple);
        ɵɵattribute("accept", ctx.options.accept)("directory", ctx.options.directory ? "directory" : null)("webkitdirectory", ctx.options.directory ? "webkitdirectory" : null);
      }
    },
    encapsulation: 2
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzUploadBtnComponent, [{
    type: Component,
    args: [{
      selector: "[nz-upload-btn]",
      exportAs: "nzUploadBtn",
      host: {
        class: "ant-upload",
        "[attr.tabindex]": '"0"',
        "[attr.role]": '"button"',
        "[class.ant-upload-disabled]": "options.disabled",
        "(drop)": "onFileDrop($event)",
        "(dragover)": "onFileDrop($event)"
      },
      preserveWhitespaces: false,
      encapsulation: ViewEncapsulation.None,
      template: `<!--
  We explicitly bind \`style.display\` to avoid using an inline style
  attribute property (which is not allowed when CSP \`unsafe-inline\`
  is not specified).
-->
<input
  type="file"
  #file
  (change)="onChange($event)"
  [attr.accept]="options.accept"
  [attr.directory]="options.directory ? 'directory' : null"
  [attr.webkitdirectory]="options.directory ? 'webkitdirectory' : null"
  [multiple]="options.multiple"
  [style.display]="'none'"
/>
<ng-content></ng-content>
`
    }]
  }], () => [{
    type: ElementRef
  }], {
    file: [{
      type: ViewChild,
      args: ["file", {
        static: true
      }]
    }],
    options: [{
      type: Input
    }]
  });
})();
var isImageFileType = (type) => !!type && type.indexOf("image/") === 0;
var MEASURE_SIZE = 200;
var NzUploadListComponent = class _NzUploadListComponent {
  cdr;
  ngZone;
  platform;
  list = [];
  get showPic() {
    return this.listType === "picture" || this.listType === "picture-card";
  }
  locale = {};
  listType;
  set items(list) {
    this.list = list;
  }
  icons;
  onPreview;
  onRemove;
  onDownload;
  previewFile;
  previewIsImage;
  iconRender = null;
  dir = "ltr";
  document = inject(DOCUMENT);
  destroy$ = new Subject();
  genErr(file) {
    if (file.response && typeof file.response === "string") {
      return file.response;
    }
    return file.error && file.error.statusText || this.locale.uploadError;
  }
  extname(url) {
    const temp = url.split("/");
    const filename = temp[temp.length - 1];
    const filenameWithoutSuffix = filename.split(/#|\?/)[0];
    return (/\.[^./\\]*$/.exec(filenameWithoutSuffix) || [""])[0];
  }
  isImageUrl(file) {
    if (isImageFileType(file.type)) {
      return true;
    }
    const url = file.thumbUrl || file.url || "";
    if (!url) {
      return false;
    }
    const extension = this.extname(url);
    if (/^data:image\//.test(url) || /(webp|svg|png|gif|jpg|jpeg|jfif|bmp|dpg)$/i.test(extension)) {
      return true;
    } else if (/^data:/.test(url)) {
      return false;
    } else if (extension) {
      return false;
    }
    return true;
  }
  getIconType(file) {
    if (!this.showPic) {
      return "";
    }
    if (file.isUploading || !file.thumbUrl && !file.url) {
      return "uploading";
    } else {
      return "thumbnail";
    }
  }
  previewImage(file) {
    if (!isImageFileType(file.type) || !this.platform.isBrowser) {
      return of("");
    }
    const canvas = this.document.createElement("canvas");
    canvas.width = MEASURE_SIZE;
    canvas.height = MEASURE_SIZE;
    canvas.style.cssText = `position: fixed; left: 0; top: 0; width: ${MEASURE_SIZE}px; height: ${MEASURE_SIZE}px; z-index: 9999; display: none;`;
    this.document.body.appendChild(canvas);
    const ctx = canvas.getContext("2d");
    const img = new Image();
    const objectUrl = URL.createObjectURL(file);
    img.src = objectUrl;
    return fromEvent(img, "load").pipe(map(() => {
      const {
        width,
        height
      } = img;
      let drawWidth = MEASURE_SIZE;
      let drawHeight = MEASURE_SIZE;
      let offsetX = 0;
      let offsetY = 0;
      if (width < height) {
        drawHeight = height * (MEASURE_SIZE / width);
        offsetY = -(drawHeight - drawWidth) / 2;
      } else {
        drawWidth = width * (MEASURE_SIZE / height);
        offsetX = -(drawWidth - drawHeight) / 2;
      }
      try {
        ctx.drawImage(img, offsetX, offsetY, drawWidth, drawHeight);
      } catch {
      }
      const dataURL = canvas.toDataURL();
      this.document.body.removeChild(canvas);
      URL.revokeObjectURL(objectUrl);
      return dataURL;
    }));
  }
  genThumb() {
    if (!this.platform.isBrowser) {
      return;
    }
    const win = window;
    if (!this.showPic || typeof document === "undefined" || typeof win === "undefined" || !win.FileReader || !win.File) {
      return;
    }
    this.list.filter((file) => file.originFileObj instanceof File && file.thumbUrl === void 0).forEach((file) => {
      file.thumbUrl = "";
      const dataUrl$ = (this.previewFile ? this.previewFile(file) : this.previewImage(file.originFileObj)).pipe(takeUntil(this.destroy$));
      this.ngZone.runOutsideAngular(() => {
        dataUrl$.subscribe((dataUrl) => {
          this.ngZone.run(() => {
            file.thumbUrl = dataUrl;
            this.detectChanges();
          });
        });
      });
    });
  }
  showDownload(file) {
    return !!(this.icons.showDownloadIcon && file.status === "done");
  }
  fixData() {
    this.list.forEach((file) => {
      file.isUploading = file.status === "uploading";
      file.message = this.genErr(file);
      file.linkProps = typeof file.linkProps === "string" ? JSON.parse(file.linkProps) : file.linkProps;
      file.isImageUrl = this.previewIsImage ? this.previewIsImage(file) : this.isImageUrl(file);
      file.iconType = this.getIconType(file);
      file.showDownload = this.showDownload(file);
    });
  }
  handlePreview(file, e) {
    if (!this.onPreview) {
      return;
    }
    e.preventDefault();
    return this.onPreview(file);
  }
  handleRemove(file, e) {
    e.preventDefault();
    if (this.onRemove) {
      this.onRemove(file);
    }
    return;
  }
  handleDownload(file) {
    if (typeof this.onDownload === "function") {
      this.onDownload(file);
    } else if (file.url) {
      window.open(file.url);
    }
  }
  // #endregion
  constructor(cdr, ngZone, platform) {
    this.cdr = cdr;
    this.ngZone = ngZone;
    this.platform = platform;
  }
  detectChanges() {
    this.fixData();
    this.cdr.detectChanges();
  }
  ngOnChanges() {
    this.fixData();
    this.genThumb();
  }
  ngOnDestroy() {
    this.destroy$.next();
  }
  static ɵfac = function NzUploadListComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _NzUploadListComponent)(ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(NgZone), ɵɵdirectiveInject(Platform));
  };
  static ɵcmp = ɵɵdefineComponent({
    type: _NzUploadListComponent,
    selectors: [["nz-upload-list"]],
    hostAttrs: [1, "ant-upload-list"],
    hostVars: 8,
    hostBindings: function NzUploadListComponent_HostBindings(rf, ctx) {
      if (rf & 2) {
        ɵɵclassProp("ant-upload-list-rtl", ctx.dir === "rtl")("ant-upload-list-text", ctx.listType === "text")("ant-upload-list-picture", ctx.listType === "picture")("ant-upload-list-picture-card", ctx.listType === "picture-card");
      }
    },
    inputs: {
      locale: "locale",
      listType: "listType",
      items: "items",
      icons: "icons",
      onPreview: "onPreview",
      onRemove: "onRemove",
      onDownload: "onDownload",
      previewFile: "previewFile",
      previewIsImage: "previewIsImage",
      iconRender: "iconRender",
      dir: "dir"
    },
    exportAs: ["nzUploadList"],
    features: [ɵɵNgOnChangesFeature],
    decls: 2,
    vars: 0,
    consts: [["icon", ""], ["iconNode", ""], ["removeIcon", ""], ["downloadIcon", ""], ["downloadOrDelete", ""], ["preview", ""], [3, "class"], ["nz-tooltip", "", 3, "nzTooltipTitle"], [1, "ant-upload-list-item-info"], [1, "ant-upload-span"], [3, "ngTemplateOutlet"], [1, "ant-upload-list-item-actions"], [1, "ant-upload-list-item-progress"], [1, "ant-upload-list-item-thumbnail", 3, "ant-upload-list-item-file"], ["target", "_blank", "rel", "noopener noreferrer", 1, "ant-upload-list-item-thumbnail", 3, "ant-upload-list-item-file", "href"], [1, "ant-upload-text-icon"], [1, "ant-upload-list-item-thumbnail"], [3, "ngTemplateOutlet", "ngTemplateOutletContext"], ["target", "_blank", "rel", "noopener noreferrer", 1, "ant-upload-list-item-thumbnail", 3, "click", "href"], [1, "ant-upload-list-item-image", 3, "src"], [3, "nzType"], ["nzType", "loading"], ["nzTheme", "twotone", 3, "nzType"], ["type", "button", "nz-button", "", "nzType", "text", "nzSize", "small", 1, "ant-upload-list-item-card-actions-btn"], ["type", "button", "nz-button", "", "nzType", "text", "nzSize", "small", 1, "ant-upload-list-item-card-actions-btn", 3, "click"], ["nzType", "delete"], ["nzType", "download"], ["target", "_blank", "rel", "noopener noreferrer", 1, "ant-upload-list-item-name", 3, "href"], [1, "ant-upload-list-item-name"], ["target", "_blank", "rel", "noopener noreferrer", 1, "ant-upload-list-item-name", 3, "click", "href"], [1, "ant-upload-list-item-name", 3, "click"], ["target", "_blank", "rel", "noopener noreferrer", 3, "href", "style"], ["target", "_blank", "rel", "noopener noreferrer", 3, "click", "href"], ["nzType", "eye"], ["nzType", "line", 3, "nzPercent", "nzShowInfo", "nzStrokeWidth"]],
    template: function NzUploadListComponent_Template(rf, ctx) {
      if (rf & 1) {
        ɵɵrepeaterCreate(0, NzUploadListComponent_For_1_Template, 20, 14, "div", 6, ɵɵrepeaterTrackByIdentity);
      }
      if (rf & 2) {
        ɵɵrepeater(ctx.list);
      }
    },
    dependencies: [NzToolTipModule, NzTooltipDirective, NgTemplateOutlet, NzIconModule, NzIconDirective, NzButtonModule, NzButtonComponent, NzTransitionPatchDirective, NzProgressModule, NzProgressComponent],
    encapsulation: 2,
    data: {
      animation: [trigger("itemState", [transition(":enter", [style({
        height: "0",
        width: "0",
        opacity: 0
      }), animate(150, style({
        height: "*",
        width: "*",
        opacity: 1
      }))]), transition(":leave", [animate(150, style({
        height: "0",
        width: "0",
        opacity: 0
      }))])])]
    },
    changeDetection: 0
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzUploadListComponent, [{
    type: Component,
    args: [{
      selector: "nz-upload-list",
      exportAs: "nzUploadList",
      animations: [trigger("itemState", [transition(":enter", [style({
        height: "0",
        width: "0",
        opacity: 0
      }), animate(150, style({
        height: "*",
        width: "*",
        opacity: 1
      }))]), transition(":leave", [animate(150, style({
        height: "0",
        width: "0",
        opacity: 0
      }))])])],
      host: {
        class: "ant-upload-list",
        "[class.ant-upload-list-rtl]": `dir === 'rtl'`,
        "[class.ant-upload-list-text]": `listType === 'text'`,
        "[class.ant-upload-list-picture]": `listType === 'picture'`,
        "[class.ant-upload-list-picture-card]": `listType === 'picture-card'`
      },
      preserveWhitespaces: false,
      encapsulation: ViewEncapsulation.None,
      changeDetection: ChangeDetectionStrategy.OnPush,
      imports: [NzToolTipModule, NgTemplateOutlet, NzIconModule, NzButtonModule, NzProgressModule],
      template: `@for (file of list; track file) {
  <div class="ant-upload-list-{{ listType }}-container">
    <div
      class="ant-upload-list-item ant-upload-list-item-{{ file.status }} ant-upload-list-item-list-type-{{ listType }}"
      [attr.data-key]="file.key"
      @itemState
      nz-tooltip
      [nzTooltipTitle]="file.status === 'error' ? file.message : null"
    >
      <ng-template #icon>
        @switch (file.iconType) {
          @case ('uploading') {
            <div class="ant-upload-list-item-thumbnail" [class.ant-upload-list-item-file]="!file.isUploading">
              <ng-template [ngTemplateOutlet]="iconNode" [ngTemplateOutletContext]="{ $implicit: file }"></ng-template>
            </div>
          }
          @case ('thumbnail') {
            <a
              class="ant-upload-list-item-thumbnail"
              [class.ant-upload-list-item-file]="!file.isImageUrl"
              target="_blank"
              rel="noopener noreferrer"
              [href]="file.url || file.thumbUrl"
              (click)="handlePreview(file, $event)"
            >
              @if (file.isImageUrl) {
                <img class="ant-upload-list-item-image" [src]="file.thumbUrl || file.url" [attr.alt]="file.name" />
              } @else {
                <ng-template
                  [ngTemplateOutlet]="iconNode"
                  [ngTemplateOutletContext]="{ $implicit: file }"
                ></ng-template>
              }
            </a>
          }
          @default {
            <div class="ant-upload-text-icon">
              <ng-template [ngTemplateOutlet]="iconNode" [ngTemplateOutletContext]="{ $implicit: file }"></ng-template>
            </div>
          }
        }
      </ng-template>

      <ng-template #iconNode let-file>
        @if (!iconRender) {
          @switch (listType) {
            @case ('picture') {
              @if (file.isUploading) {
                <nz-icon nzType="loading" />
              } @else {
                <nz-icon [nzType]="file.isImageUrl ? 'picture' : 'file'" nzTheme="twotone" />
              }
            }
            @case ('picture-card') {
              @if (file.isUploading) {
                {{ locale.uploading }}
              } @else {
                <nz-icon [nzType]="file.isImageUrl ? 'picture' : 'file'" nzTheme="twotone" />
              }
            }
            @default {
              <nz-icon [nzType]="file.isUploading ? 'loading' : 'paper-clip'" />
            }
          }
        } @else {
          <ng-template [ngTemplateOutlet]="iconRender" [ngTemplateOutletContext]="{ $implicit: file }"></ng-template>
        }
      </ng-template>

      <ng-template #removeIcon>
        @if (icons.showRemoveIcon) {
          <button
            type="button"
            nz-button
            nzType="text"
            nzSize="small"
            (click)="handleRemove(file, $event)"
            [attr.title]="locale.removeFile"
            class="ant-upload-list-item-card-actions-btn"
          >
            <nz-icon nzType="delete" />
          </button>
        }
      </ng-template>

      <ng-template #downloadIcon>
        @if (file.showDownload) {
          <button
            type="button"
            nz-button
            nzType="text"
            nzSize="small"
            (click)="handleDownload(file)"
            [attr.title]="locale.downloadFile"
            class="ant-upload-list-item-card-actions-btn"
          >
            <nz-icon nzType="download" />
          </button>
        }
      </ng-template>

      <ng-template #downloadOrDelete>
        @if (listType !== 'picture-card') {
          <span class="ant-upload-list-item-card-actions {{ listType === 'picture' ? 'picture' : '' }}">
            <ng-template [ngTemplateOutlet]="downloadIcon"></ng-template>
            <ng-template [ngTemplateOutlet]="removeIcon"></ng-template>
          </span>
        }
      </ng-template>

      <ng-template #preview>
        @if (file.url) {
          <a
            target="_blank"
            rel="noopener noreferrer"
            class="ant-upload-list-item-name"
            [attr.title]="file.name"
            [href]="file.url"
            [attr.download]="file.linkProps && file.linkProps.download"
            (click)="handlePreview(file, $event)"
          >
            {{ file.name }}
          </a>
        } @else {
          <span class="ant-upload-list-item-name" [attr.title]="file.name" (click)="handlePreview(file, $event)">
            {{ file.name }}
          </span>
        }
        <ng-template [ngTemplateOutlet]="downloadOrDelete"></ng-template>
      </ng-template>

      <div class="ant-upload-list-item-info">
        <span class="ant-upload-span">
          <ng-template [ngTemplateOutlet]="icon"></ng-template>
          <ng-template [ngTemplateOutlet]="preview"></ng-template>
        </span>
      </div>
      @if (listType === 'picture-card' && !file.isUploading) {
        <span class="ant-upload-list-item-actions">
          @if (icons.showPreviewIcon) {
            <a
              [href]="file.url || file.thumbUrl"
              target="_blank"
              rel="noopener noreferrer"
              [attr.title]="locale.previewFile"
              [style]="!(file.url || file.thumbUrl) ? { opacity: 0.5, 'pointer-events': 'none' } : null"
              (click)="handlePreview(file, $event)"
            >
              <nz-icon nzType="eye" />
            </a>
          }
          @if (file.status === 'done') {
            <ng-template [ngTemplateOutlet]="downloadIcon"></ng-template>
          }
          <ng-template [ngTemplateOutlet]="removeIcon"></ng-template>
        </span>
      }
      @if (file.isUploading) {
        <div class="ant-upload-list-item-progress">
          <nz-progress [nzPercent]="file.percent!" nzType="line" [nzShowInfo]="false" [nzStrokeWidth]="2"></nz-progress>
        </div>
      }
    </div>
  </div>
}
`
    }]
  }], () => [{
    type: ChangeDetectorRef
  }, {
    type: NgZone
  }, {
    type: Platform
  }], {
    locale: [{
      type: Input
    }],
    listType: [{
      type: Input
    }],
    items: [{
      type: Input
    }],
    icons: [{
      type: Input
    }],
    onPreview: [{
      type: Input
    }],
    onRemove: [{
      type: Input
    }],
    onDownload: [{
      type: Input
    }],
    previewFile: [{
      type: Input
    }],
    previewIsImage: [{
      type: Input
    }],
    iconRender: [{
      type: Input
    }],
    dir: [{
      type: Input
    }]
  });
})();
var NzUploadComponent = class _NzUploadComponent {
  cdr;
  i18n;
  directionality;
  static ngAcceptInputType_nzShowUploadList;
  destroy$ = new Subject();
  uploadComp;
  listComp;
  locale;
  dir = "ltr";
  // #region fields
  nzType = "select";
  nzLimit = 0;
  nzSize = 0;
  nzFileType;
  nzAccept;
  nzAction;
  nzDirectory = false;
  nzOpenFileDialogOnClick = true;
  nzBeforeUpload;
  nzCustomRequest;
  nzData;
  nzFilter = [];
  nzFileList = [];
  nzDisabled = false;
  nzHeaders;
  nzListType = "text";
  nzMultiple = false;
  nzName = "file";
  _showUploadList = true;
  document = inject(DOCUMENT);
  set nzShowUploadList(value) {
    this._showUploadList = typeof value === "boolean" ? toBoolean(value) : value;
  }
  get nzShowUploadList() {
    return this._showUploadList;
  }
  nzShowButton = true;
  nzWithCredentials = false;
  nzRemove;
  nzPreview;
  nzPreviewFile;
  nzPreviewIsImage;
  nzTransformFile;
  nzDownload;
  nzIconRender = null;
  nzFileListRender = null;
  nzChange = new EventEmitter();
  nzFileListChange = new EventEmitter();
  _btnOptions;
  zipOptions() {
    if (typeof this.nzShowUploadList === "boolean" && this.nzShowUploadList) {
      this.nzShowUploadList = {
        showPreviewIcon: true,
        showRemoveIcon: true,
        showDownloadIcon: true
      };
    }
    const filters = this.nzFilter.slice();
    if (this.nzMultiple && this.nzLimit > 0 && filters.findIndex((w) => w.name === "limit") === -1) {
      filters.push({
        name: "limit",
        fn: (fileList) => fileList.slice(-this.nzLimit)
      });
    }
    if (this.nzSize > 0 && filters.findIndex((w) => w.name === "size") === -1) {
      filters.push({
        name: "size",
        fn: (fileList) => fileList.filter((w) => w.size / 1024 <= this.nzSize)
      });
    }
    if (this.nzFileType && this.nzFileType.length > 0 && filters.findIndex((w) => w.name === "type") === -1) {
      const types = this.nzFileType.split(",");
      filters.push({
        name: "type",
        fn: (fileList) => fileList.filter((w) => ~types.indexOf(w.type))
      });
    }
    this._btnOptions = {
      disabled: this.nzDisabled,
      accept: this.nzAccept,
      action: this.nzAction,
      directory: this.nzDirectory,
      openFileDialogOnClick: this.nzOpenFileDialogOnClick,
      beforeUpload: this.nzBeforeUpload,
      customRequest: this.nzCustomRequest,
      data: this.nzData,
      headers: this.nzHeaders,
      name: this.nzName,
      multiple: this.nzMultiple,
      withCredentials: this.nzWithCredentials,
      filters,
      transformFile: this.nzTransformFile,
      onStart: this.onStart,
      onProgress: this.onProgress,
      onSuccess: this.onSuccess,
      onError: this.onError
    };
    return this;
  }
  platform = inject(Platform);
  // #endregion
  constructor(cdr, i18n, directionality) {
    this.cdr = cdr;
    this.i18n = i18n;
    this.directionality = directionality;
  }
  // #region upload
  fileToObject(file) {
    return {
      lastModified: file.lastModified,
      lastModifiedDate: file.lastModifiedDate,
      name: file.filename || file.name,
      size: file.size,
      type: file.type,
      uid: file.uid,
      response: file.response,
      error: file.error,
      percent: 0,
      originFileObj: file
    };
  }
  getFileItem(file, fileList) {
    return fileList.filter((item) => item.uid === file.uid)[0];
  }
  removeFileItem(file, fileList) {
    return fileList.filter((item) => item.uid !== file.uid);
  }
  onStart = (file) => {
    if (!this.nzFileList) {
      this.nzFileList = [];
    }
    const targetItem = this.fileToObject(file);
    targetItem.status = "uploading";
    this.nzFileList = this.nzFileList.concat(targetItem);
    this.nzFileListChange.emit(this.nzFileList);
    this.nzChange.emit({
      file: targetItem,
      fileList: this.nzFileList,
      type: "start"
    });
    this.detectChangesList();
  };
  onProgress = (e, file) => {
    const fileList = this.nzFileList;
    const targetItem = this.getFileItem(file, fileList);
    targetItem.percent = e.percent;
    this.nzChange.emit({
      event: e,
      file: __spreadValues({}, targetItem),
      fileList: this.nzFileList,
      type: "progress"
    });
    this.detectChangesList();
  };
  onSuccess = (res, file) => {
    const fileList = this.nzFileList;
    const targetItem = this.getFileItem(file, fileList);
    targetItem.status = "done";
    targetItem.response = res;
    this.nzChange.emit({
      file: __spreadValues({}, targetItem),
      fileList,
      type: "success"
    });
    this.detectChangesList();
  };
  onError = (err, file) => {
    const fileList = this.nzFileList;
    const targetItem = this.getFileItem(file, fileList);
    targetItem.error = err;
    targetItem.status = "error";
    this.nzChange.emit({
      file: __spreadValues({}, targetItem),
      fileList,
      type: "error"
    });
    this.detectChangesList();
  };
  // #endregion
  // #region drag
  dragState;
  // skip safari bug
  fileDrop(e) {
    if (e.type === this.dragState) {
      return;
    }
    this.dragState = e.type;
    this.setClassMap();
  }
  // #endregion
  // #region list
  detectChangesList() {
    this.cdr.detectChanges();
    this.listComp?.detectChanges();
  }
  onRemove = (file) => {
    this.uploadComp.abort(file);
    file.status = "removed";
    const fnRes = typeof this.nzRemove === "function" ? this.nzRemove(file) : this.nzRemove == null ? true : this.nzRemove;
    (fnRes instanceof Observable ? fnRes : of(fnRes)).pipe(filter((res) => res)).subscribe(() => {
      this.nzFileList = this.removeFileItem(file, this.nzFileList);
      this.nzChange.emit({
        file,
        fileList: this.nzFileList,
        type: "removed"
      });
      this.nzFileListChange.emit(this.nzFileList);
      this.cdr.detectChanges();
    });
  };
  // #endregion
  // #region styles
  prefixCls = "ant-upload";
  classList = [];
  setClassMap() {
    let subCls = [];
    if (this.nzType === "drag") {
      if (this.nzFileList.some((file) => file.status === "uploading")) {
        subCls.push(`${this.prefixCls}-drag-uploading`);
      }
      if (this.dragState === "dragover") {
        subCls.push(`${this.prefixCls}-drag-hover`);
      }
    } else {
      subCls = [`${this.prefixCls}-select-${this.nzListType}`];
    }
    this.classList = [this.prefixCls, `${this.prefixCls}-${this.nzType}`, ...subCls, this.nzDisabled && `${this.prefixCls}-disabled` || "", this.dir === "rtl" && `${this.prefixCls}-rtl` || ""].filter((item) => !!item);
    this.cdr.detectChanges();
  }
  // #endregion
  ngOnInit() {
    this.dir = this.directionality.value;
    this.directionality.change?.pipe(takeUntil(this.destroy$)).subscribe((direction) => {
      this.dir = direction;
      this.setClassMap();
      this.cdr.detectChanges();
    });
    this.i18n.localeChange.pipe(takeUntil(this.destroy$)).subscribe(() => {
      this.locale = this.i18n.getLocaleData("Upload");
      this.detectChangesList();
    });
  }
  ngAfterViewInit() {
    if (this.platform.FIREFOX) {
      fromEventOutsideAngular(this.document.body, "drop").pipe(takeUntil(this.destroy$)).subscribe((event) => {
        event.preventDefault();
        event.stopPropagation();
      });
    }
  }
  ngOnChanges() {
    this.zipOptions().setClassMap();
  }
  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }
  static ɵfac = function NzUploadComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _NzUploadComponent)(ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(NzI18nService), ɵɵdirectiveInject(Directionality));
  };
  static ɵcmp = ɵɵdefineComponent({
    type: _NzUploadComponent,
    selectors: [["nz-upload"]],
    viewQuery: function NzUploadComponent_Query(rf, ctx) {
      if (rf & 1) {
        ɵɵviewQuery(_c5, 5);
        ɵɵviewQuery(_c6, 5);
      }
      if (rf & 2) {
        let _t;
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.uploadComp = _t.first);
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.listComp = _t.first);
      }
    },
    hostVars: 2,
    hostBindings: function NzUploadComponent_HostBindings(rf, ctx) {
      if (rf & 2) {
        ɵɵclassProp("ant-upload-picture-card-wrapper", ctx.nzListType === "picture-card");
      }
    },
    inputs: {
      nzType: "nzType",
      nzLimit: [2, "nzLimit", "nzLimit", numberAttribute],
      nzSize: [2, "nzSize", "nzSize", numberAttribute],
      nzFileType: "nzFileType",
      nzAccept: "nzAccept",
      nzAction: "nzAction",
      nzDirectory: [2, "nzDirectory", "nzDirectory", booleanAttribute],
      nzOpenFileDialogOnClick: [2, "nzOpenFileDialogOnClick", "nzOpenFileDialogOnClick", booleanAttribute],
      nzBeforeUpload: "nzBeforeUpload",
      nzCustomRequest: "nzCustomRequest",
      nzData: "nzData",
      nzFilter: "nzFilter",
      nzFileList: "nzFileList",
      nzDisabled: [2, "nzDisabled", "nzDisabled", booleanAttribute],
      nzHeaders: "nzHeaders",
      nzListType: "nzListType",
      nzMultiple: [2, "nzMultiple", "nzMultiple", booleanAttribute],
      nzName: "nzName",
      nzShowUploadList: "nzShowUploadList",
      nzShowButton: [2, "nzShowButton", "nzShowButton", booleanAttribute],
      nzWithCredentials: [2, "nzWithCredentials", "nzWithCredentials", booleanAttribute],
      nzRemove: "nzRemove",
      nzPreview: "nzPreview",
      nzPreviewFile: "nzPreviewFile",
      nzPreviewIsImage: "nzPreviewIsImage",
      nzTransformFile: "nzTransformFile",
      nzDownload: "nzDownload",
      nzIconRender: "nzIconRender",
      nzFileListRender: "nzFileListRender"
    },
    outputs: {
      nzChange: "nzChange",
      nzFileListChange: "nzFileListChange"
    },
    exportAs: ["nzUpload"],
    features: [ɵɵNgOnChangesFeature],
    ngContentSelectors: _c2,
    decls: 8,
    vars: 1,
    consts: [["list", ""], ["con", ""], ["btn", ""], ["listComp", ""], ["uploadComp", ""], [3, "display", "locale", "listType", "items", "icons", "iconRender", "previewFile", "previewIsImage", "onPreview", "onRemove", "onDownload", "dir"], [3, "locale", "listType", "items", "icons", "iconRender", "previewFile", "previewIsImage", "onPreview", "onRemove", "onDownload", "dir"], [4, "ngTemplateOutlet", "ngTemplateOutletContext"], ["nz-upload-btn", "", 3, "options"], [3, "ngTemplateOutlet"], [3, "drop", "dragover", "dragleave"], ["nz-upload-btn", "", 1, "ant-upload-btn", 3, "options"], [1, "ant-upload-drag-container"]],
    template: function NzUploadComponent_Template(rf, ctx) {
      if (rf & 1) {
        ɵɵprojectionDef();
        ɵɵtemplate(0, NzUploadComponent_ng_template_0_Template, 2, 2, "ng-template", null, 0, ɵɵtemplateRefExtractor)(2, NzUploadComponent_ng_template_2_Template, 1, 0, "ng-template", null, 1, ɵɵtemplateRefExtractor)(4, NzUploadComponent_ng_template_4_Template, 4, 6, "ng-template", null, 2, ɵɵtemplateRefExtractor)(6, NzUploadComponent_Conditional_6_Template, 6, 5)(7, NzUploadComponent_Conditional_7_Template, 2, 1);
      }
      if (rf & 2) {
        ɵɵadvance(6);
        ɵɵconditional(ctx.nzType === "drag" ? 6 : 7);
      }
    },
    dependencies: [NzUploadListComponent, NgTemplateOutlet, NzUploadBtnComponent],
    encapsulation: 2,
    changeDetection: 0
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzUploadComponent, [{
    type: Component,
    args: [{
      selector: "nz-upload",
      exportAs: "nzUpload",
      preserveWhitespaces: false,
      encapsulation: ViewEncapsulation.None,
      changeDetection: ChangeDetectionStrategy.OnPush,
      host: {
        "[class.ant-upload-picture-card-wrapper]": 'nzListType === "picture-card"'
      },
      imports: [NzUploadListComponent, NgTemplateOutlet, NzUploadBtnComponent],
      template: `<ng-template #list>
  @if (locale && !nzFileListRender) {
    <nz-upload-list
      #listComp
      [style.display]="nzShowUploadList ? '' : 'none'"
      [locale]="locale"
      [listType]="nzListType"
      [items]="nzFileList || []"
      [icons]="$any(nzShowUploadList)"
      [iconRender]="nzIconRender"
      [previewFile]="nzPreviewFile"
      [previewIsImage]="nzPreviewIsImage"
      [onPreview]="nzPreview"
      [onRemove]="onRemove"
      [onDownload]="nzDownload"
      [dir]="dir"
    ></nz-upload-list>
  }
  @if (nzFileListRender) {
    <ng-container *ngTemplateOutlet="nzFileListRender; context: { $implicit: nzFileList }"></ng-container>
  }
</ng-template>
<ng-template #con><ng-content></ng-content></ng-template>
<ng-template #btn>
  <div [class]="classList" [style.display]="nzShowButton ? '' : 'none'">
    <div nz-upload-btn #uploadComp [options]="_btnOptions!">
      <ng-template [ngTemplateOutlet]="con"></ng-template>
    </div>
  </div>
</ng-template>
@if (nzType === 'drag') {
  <div [class]="classList" (drop)="fileDrop($event)" (dragover)="fileDrop($event)" (dragleave)="fileDrop($event)">
    <div nz-upload-btn #uploadComp [options]="_btnOptions!" class="ant-upload-btn">
      <div class="ant-upload-drag-container">
        <ng-template [ngTemplateOutlet]="con"></ng-template>
      </div>
    </div>
  </div>
  <ng-template [ngTemplateOutlet]="list"></ng-template>
} @else {
  @if (nzListType === 'picture-card') {
    <ng-template [ngTemplateOutlet]="list"></ng-template>
    <ng-template [ngTemplateOutlet]="btn"></ng-template>
  } @else {
    <ng-template [ngTemplateOutlet]="btn"></ng-template>
    <ng-template [ngTemplateOutlet]="list"></ng-template>
  }
}
`
    }]
  }], () => [{
    type: ChangeDetectorRef
  }, {
    type: NzI18nService
  }, {
    type: Directionality
  }], {
    uploadComp: [{
      type: ViewChild,
      args: ["uploadComp", {
        static: false
      }]
    }],
    listComp: [{
      type: ViewChild,
      args: ["listComp", {
        static: false
      }]
    }],
    nzType: [{
      type: Input
    }],
    nzLimit: [{
      type: Input,
      args: [{
        transform: numberAttribute
      }]
    }],
    nzSize: [{
      type: Input,
      args: [{
        transform: numberAttribute
      }]
    }],
    nzFileType: [{
      type: Input
    }],
    nzAccept: [{
      type: Input
    }],
    nzAction: [{
      type: Input
    }],
    nzDirectory: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    nzOpenFileDialogOnClick: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    nzBeforeUpload: [{
      type: Input
    }],
    nzCustomRequest: [{
      type: Input
    }],
    nzData: [{
      type: Input
    }],
    nzFilter: [{
      type: Input
    }],
    nzFileList: [{
      type: Input
    }],
    nzDisabled: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    nzHeaders: [{
      type: Input
    }],
    nzListType: [{
      type: Input
    }],
    nzMultiple: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    nzName: [{
      type: Input
    }],
    nzShowUploadList: [{
      type: Input
    }],
    nzShowButton: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    nzWithCredentials: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    nzRemove: [{
      type: Input
    }],
    nzPreview: [{
      type: Input
    }],
    nzPreviewFile: [{
      type: Input
    }],
    nzPreviewIsImage: [{
      type: Input
    }],
    nzTransformFile: [{
      type: Input
    }],
    nzDownload: [{
      type: Input
    }],
    nzIconRender: [{
      type: Input
    }],
    nzFileListRender: [{
      type: Input
    }],
    nzChange: [{
      type: Output
    }],
    nzFileListChange: [{
      type: Output
    }]
  });
})();
var NzUploadModule = class _NzUploadModule {
  static ɵfac = function NzUploadModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _NzUploadModule)();
  };
  static ɵmod = ɵɵdefineNgModule({
    type: _NzUploadModule,
    imports: [NzUploadComponent, NzUploadBtnComponent, NzUploadListComponent],
    exports: [NzUploadComponent]
  });
  static ɵinj = ɵɵdefineInjector({
    imports: [NzUploadComponent, NzUploadListComponent]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzUploadModule, [{
    type: NgModule,
    args: [{
      imports: [NzUploadComponent, NzUploadBtnComponent, NzUploadListComponent],
      exports: [NzUploadComponent]
    }]
  }], null, null);
})();
export {
  NzUploadBtnComponent,
  NzUploadComponent,
  NzUploadListComponent,
  NzUploadModule
};
//# sourceMappingURL=ng-zorro-antd_upload.js.map
