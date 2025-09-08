import {
  CardapioService
} from "./chunk-JOZUD3WC.js";
import {
  MatTooltip,
  MatTooltipModule
} from "./chunk-37HWEPK7.js";
import {
  MAT_DIALOG_DATA,
  MatDialog,
  MatDialogActions,
  MatDialogContent,
  MatDialogModule,
  MatDialogRef,
  MatDialogTitle
} from "./chunk-M3W73M7Y.js";
import {
  MatChipGrid,
  MatChipInput,
  MatChipOption,
  MatChipRemove,
  MatChipRow,
  MatChipsModule,
  require_sweetalert2_all
} from "./chunk-JMP7E2TJ.js";
import {
  MatCard,
  MatCardContent,
  MatCardImage,
  MatCardModule
} from "./chunk-6YAGKJBE.js";
import {
  GlobalSpinnerComponent
} from "./chunk-M3IXWULH.js";
import {
  _MatInternalFormField
} from "./chunk-OESMGJIM.js";
import {
  MatSelect,
  MatSelectModule
} from "./chunk-ILTVZJJ6.js";
import {
  MatMenu,
  MatMenuItem,
  MatMenuModule,
  MatMenuTrigger
} from "./chunk-223IUSYC.js";
import {
  MatButton,
  MatButtonModule,
  MatFabButton,
  MatIconButton
} from "./chunk-7M5C6ZGC.js";
import "./chunk-SBT7BDQG.js";
import {
  MatOption
} from "./chunk-7TJEGKW3.js";
import {
  environment
} from "./chunk-ESXVDBVT.js";
import "./chunk-XAACXT24.js";
import {
  MatError,
  MatFormField,
  MatFormFieldModule,
  MatHint,
  MatInput,
  MatInputModule,
  MatLabel
} from "./chunk-TFBPBZK4.js";
import {
  MatCommonModule,
  MatIcon,
  MatIconModule,
  MatRipple,
  _StructuralStylesLoader
} from "./chunk-WG6I7YZH.js";
import "./chunk-RUUFL2BH.js";
import {
  ToastrService
} from "./chunk-FTC7ZL3K.js";
import {
  CheckboxRequiredValidator,
  DefaultValueAccessor,
  FormControlName,
  FormGroupDirective,
  NG_VALIDATORS,
  NG_VALUE_ACCESSOR,
  NgControlStatus,
  NgControlStatusGroup,
  NonNullableFormBuilder,
  NumberValueAccessor,
  ReactiveFormsModule,
  Validators,
  ɵNgNoValidate
} from "./chunk-X4ULZSL7.js";
import {
  FocusMonitor
} from "./chunk-B6PCS4YX.js";
import "./chunk-X3P5AUPX.js";
import "./chunk-SM7NAYZH.js";
import {
  CommonModule,
  DecimalPipe,
  NgForOf,
  NgIf,
  _CdkPrivateStyleLoader,
  _IdGenerator
} from "./chunk-IOJADCVY.js";
import "./chunk-ZE3YZEND.js";
import {
  ANIMATION_MODULE_TYPE,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  Directive,
  ElementRef,
  EventEmitter,
  HostAttributeToken,
  InjectionToken,
  Input,
  NgModule,
  Output,
  ViewChild,
  ViewEncapsulation,
  __spreadProps,
  __spreadValues,
  __toESM,
  booleanAttribute,
  forwardRef,
  inject,
  numberAttribute,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵInheritDefinitionFeature,
  ɵɵNgOnChangesFeature,
  ɵɵProvidersFeature,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵclassMap,
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵdefineComponent,
  ɵɵdefineDirective,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵelement,
  ɵɵelementContainerEnd,
  ɵɵelementContainerStart,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵgetInheritedFactory,
  ɵɵhostProperty,
  ɵɵlistener,
  ɵɵloadQuery,
  ɵɵnamespaceSVG,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind2,
  ɵɵprojection,
  ɵɵprojectionDef,
  ɵɵproperty,
  ɵɵpropertyInterpolate,
  ɵɵpureFunction0,
  ɵɵqueryRefresh,
  ɵɵreference,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeUrl,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵviewQuery
} from "./chunk-CO622P43.js";

// node_modules/@angular/material/fesm2022/slide-toggle.mjs
var _c0 = ["switch"];
var _c1 = ["*"];
function MatSlideToggle_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 10);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 12);
    \u0275\u0275element(2, "path", 13);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "svg", 14);
    \u0275\u0275element(4, "path", 15);
    \u0275\u0275elementEnd()();
  }
}
var MAT_SLIDE_TOGGLE_DEFAULT_OPTIONS = new InjectionToken("mat-slide-toggle-default-options", {
  providedIn: "root",
  factory: () => ({
    disableToggleValue: false,
    hideIcon: false,
    disabledInteractive: false
  })
});
var MAT_SLIDE_TOGGLE_VALUE_ACCESSOR = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => MatSlideToggle),
  multi: true
};
var MatSlideToggleChange = class {
  source;
  checked;
  constructor(source, checked) {
    this.source = source;
    this.checked = checked;
  }
};
var MatSlideToggle = class _MatSlideToggle {
  _elementRef = inject(ElementRef);
  _focusMonitor = inject(FocusMonitor);
  _changeDetectorRef = inject(ChangeDetectorRef);
  defaults = inject(MAT_SLIDE_TOGGLE_DEFAULT_OPTIONS);
  _onChange = (_) => {
  };
  _onTouched = () => {
  };
  _validatorOnChange = () => {
  };
  _uniqueId;
  _checked = false;
  _createChangeEvent(isChecked) {
    return new MatSlideToggleChange(this, isChecked);
  }
  /** Unique ID for the label element. */
  _labelId;
  /** Returns the unique id for the visual hidden button. */
  get buttonId() {
    return `${this.id || this._uniqueId}-button`;
  }
  /** Reference to the MDC switch element. */
  _switchElement;
  /** Focuses the slide-toggle. */
  focus() {
    this._switchElement.nativeElement.focus();
  }
  /** Whether noop animations are enabled. */
  _noopAnimations;
  /** Whether the slide toggle is currently focused. */
  _focused;
  /** Name value will be applied to the input element if present. */
  name = null;
  /** A unique id for the slide-toggle input. If none is supplied, it will be auto-generated. */
  id;
  /** Whether the label should appear after or before the slide-toggle. Defaults to 'after'. */
  labelPosition = "after";
  /** Used to set the aria-label attribute on the underlying input element. */
  ariaLabel = null;
  /** Used to set the aria-labelledby attribute on the underlying input element. */
  ariaLabelledby = null;
  /** Used to set the aria-describedby attribute on the underlying input element. */
  ariaDescribedby;
  /** Whether the slide-toggle is required. */
  required;
  // TODO(crisbeto): this should be a ThemePalette, but some internal apps were abusing
  // the lack of type checking previously and assigning random strings.
  /**
   * Theme color of the slide toggle. This API is supported in M2 themes only,
   * it has no effect in M3 themes. For color customization in M3, see https://material.angular.io/components/slide-toggle/styling.
   *
   * For information on applying color variants in M3, see
   * https://material.angular.io/guide/material-2-theming#optional-add-backwards-compatibility-styles-for-color-variants
   */
  color;
  /** Whether the slide toggle is disabled. */
  disabled = false;
  /** Whether the slide toggle has a ripple. */
  disableRipple = false;
  /** Tabindex of slide toggle. */
  tabIndex = 0;
  /** Whether the slide-toggle element is checked or not. */
  get checked() {
    return this._checked;
  }
  set checked(value) {
    this._checked = value;
    this._changeDetectorRef.markForCheck();
  }
  /** Whether to hide the icon inside of the slide toggle. */
  hideIcon;
  /** Whether the slide toggle should remain interactive when it is disabled. */
  disabledInteractive;
  /** An event will be dispatched each time the slide-toggle changes its value. */
  change = new EventEmitter();
  /**
   * An event will be dispatched each time the slide-toggle input is toggled.
   * This event is always emitted when the user toggles the slide toggle, but this does not mean
   * the slide toggle's value has changed.
   */
  toggleChange = new EventEmitter();
  /** Returns the unique id for the visual hidden input. */
  get inputId() {
    return `${this.id || this._uniqueId}-input`;
  }
  constructor() {
    inject(_CdkPrivateStyleLoader).load(_StructuralStylesLoader);
    const tabIndex = inject(new HostAttributeToken("tabindex"), {
      optional: true
    });
    const defaults = this.defaults;
    const animationMode = inject(ANIMATION_MODULE_TYPE, {
      optional: true
    });
    this.tabIndex = tabIndex == null ? 0 : parseInt(tabIndex) || 0;
    this.color = defaults.color || "accent";
    this._noopAnimations = animationMode === "NoopAnimations";
    this.id = this._uniqueId = inject(_IdGenerator).getId("mat-mdc-slide-toggle-");
    this.hideIcon = defaults.hideIcon ?? false;
    this.disabledInteractive = defaults.disabledInteractive ?? false;
    this._labelId = this._uniqueId + "-label";
  }
  ngAfterContentInit() {
    this._focusMonitor.monitor(this._elementRef, true).subscribe((focusOrigin) => {
      if (focusOrigin === "keyboard" || focusOrigin === "program") {
        this._focused = true;
        this._changeDetectorRef.markForCheck();
      } else if (!focusOrigin) {
        Promise.resolve().then(() => {
          this._focused = false;
          this._onTouched();
          this._changeDetectorRef.markForCheck();
        });
      }
    });
  }
  ngOnChanges(changes) {
    if (changes["required"]) {
      this._validatorOnChange();
    }
  }
  ngOnDestroy() {
    this._focusMonitor.stopMonitoring(this._elementRef);
  }
  /** Implemented as part of ControlValueAccessor. */
  writeValue(value) {
    this.checked = !!value;
  }
  /** Implemented as part of ControlValueAccessor. */
  registerOnChange(fn) {
    this._onChange = fn;
  }
  /** Implemented as part of ControlValueAccessor. */
  registerOnTouched(fn) {
    this._onTouched = fn;
  }
  /** Implemented as a part of Validator. */
  validate(control) {
    return this.required && control.value !== true ? {
      "required": true
    } : null;
  }
  /** Implemented as a part of Validator. */
  registerOnValidatorChange(fn) {
    this._validatorOnChange = fn;
  }
  /** Implemented as a part of ControlValueAccessor. */
  setDisabledState(isDisabled) {
    this.disabled = isDisabled;
    this._changeDetectorRef.markForCheck();
  }
  /** Toggles the checked state of the slide-toggle. */
  toggle() {
    this.checked = !this.checked;
    this._onChange(this.checked);
  }
  /**
   * Emits a change event on the `change` output. Also notifies the FormControl about the change.
   */
  _emitChangeEvent() {
    this._onChange(this.checked);
    this.change.emit(this._createChangeEvent(this.checked));
  }
  /** Method being called whenever the underlying button is clicked. */
  _handleClick() {
    if (!this.disabled) {
      this.toggleChange.emit();
      if (!this.defaults.disableToggleValue) {
        this.checked = !this.checked;
        this._onChange(this.checked);
        this.change.emit(new MatSlideToggleChange(this, this.checked));
      }
    }
  }
  _getAriaLabelledBy() {
    if (this.ariaLabelledby) {
      return this.ariaLabelledby;
    }
    return this.ariaLabel ? null : this._labelId;
  }
  static \u0275fac = function MatSlideToggle_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _MatSlideToggle)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _MatSlideToggle,
    selectors: [["mat-slide-toggle"]],
    viewQuery: function MatSlideToggle_Query(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275viewQuery(_c0, 5);
      }
      if (rf & 2) {
        let _t;
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx._switchElement = _t.first);
      }
    },
    hostAttrs: [1, "mat-mdc-slide-toggle"],
    hostVars: 13,
    hostBindings: function MatSlideToggle_HostBindings(rf, ctx) {
      if (rf & 2) {
        \u0275\u0275hostProperty("id", ctx.id);
        \u0275\u0275attribute("tabindex", null)("aria-label", null)("name", null)("aria-labelledby", null);
        \u0275\u0275classMap(ctx.color ? "mat-" + ctx.color : "");
        \u0275\u0275classProp("mat-mdc-slide-toggle-focused", ctx._focused)("mat-mdc-slide-toggle-checked", ctx.checked)("_mat-animation-noopable", ctx._noopAnimations);
      }
    },
    inputs: {
      name: "name",
      id: "id",
      labelPosition: "labelPosition",
      ariaLabel: [0, "aria-label", "ariaLabel"],
      ariaLabelledby: [0, "aria-labelledby", "ariaLabelledby"],
      ariaDescribedby: [0, "aria-describedby", "ariaDescribedby"],
      required: [2, "required", "required", booleanAttribute],
      color: "color",
      disabled: [2, "disabled", "disabled", booleanAttribute],
      disableRipple: [2, "disableRipple", "disableRipple", booleanAttribute],
      tabIndex: [2, "tabIndex", "tabIndex", (value) => value == null ? 0 : numberAttribute(value)],
      checked: [2, "checked", "checked", booleanAttribute],
      hideIcon: [2, "hideIcon", "hideIcon", booleanAttribute],
      disabledInteractive: [2, "disabledInteractive", "disabledInteractive", booleanAttribute]
    },
    outputs: {
      change: "change",
      toggleChange: "toggleChange"
    },
    exportAs: ["matSlideToggle"],
    features: [\u0275\u0275ProvidersFeature([MAT_SLIDE_TOGGLE_VALUE_ACCESSOR, {
      provide: NG_VALIDATORS,
      useExisting: _MatSlideToggle,
      multi: true
    }]), \u0275\u0275NgOnChangesFeature],
    ngContentSelectors: _c1,
    decls: 13,
    vars: 27,
    consts: [["switch", ""], ["mat-internal-form-field", "", 3, "labelPosition"], ["role", "switch", "type", "button", 1, "mdc-switch", 3, "click", "tabIndex", "disabled"], [1, "mdc-switch__track"], [1, "mdc-switch__handle-track"], [1, "mdc-switch__handle"], [1, "mdc-switch__shadow"], [1, "mdc-elevation-overlay"], [1, "mdc-switch__ripple"], ["mat-ripple", "", 1, "mat-mdc-slide-toggle-ripple", "mat-focus-indicator", 3, "matRippleTrigger", "matRippleDisabled", "matRippleCentered"], [1, "mdc-switch__icons"], [1, "mdc-label", 3, "click", "for"], ["viewBox", "0 0 24 24", "aria-hidden", "true", 1, "mdc-switch__icon", "mdc-switch__icon--on"], ["d", "M19.69,5.23L8.96,15.96l-4.23-4.23L2.96,13.5l6,6L21.46,7L19.69,5.23z"], ["viewBox", "0 0 24 24", "aria-hidden", "true", 1, "mdc-switch__icon", "mdc-switch__icon--off"], ["d", "M20 13H4v-2h16v2z"]],
    template: function MatSlideToggle_Template(rf, ctx) {
      if (rf & 1) {
        const _r1 = \u0275\u0275getCurrentView();
        \u0275\u0275projectionDef();
        \u0275\u0275elementStart(0, "div", 1)(1, "button", 2, 0);
        \u0275\u0275listener("click", function MatSlideToggle_Template_button_click_1_listener() {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx._handleClick());
        });
        \u0275\u0275element(3, "span", 3);
        \u0275\u0275elementStart(4, "span", 4)(5, "span", 5)(6, "span", 6);
        \u0275\u0275element(7, "span", 7);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(8, "span", 8);
        \u0275\u0275element(9, "span", 9);
        \u0275\u0275elementEnd();
        \u0275\u0275template(10, MatSlideToggle_Conditional_10_Template, 5, 0, "span", 10);
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(11, "label", 11);
        \u0275\u0275listener("click", function MatSlideToggle_Template_label_click_11_listener($event) {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView($event.stopPropagation());
        });
        \u0275\u0275projection(12);
        \u0275\u0275elementEnd()();
      }
      if (rf & 2) {
        const switch_r2 = \u0275\u0275reference(2);
        \u0275\u0275property("labelPosition", ctx.labelPosition);
        \u0275\u0275advance();
        \u0275\u0275classProp("mdc-switch--selected", ctx.checked)("mdc-switch--unselected", !ctx.checked)("mdc-switch--checked", ctx.checked)("mdc-switch--disabled", ctx.disabled)("mat-mdc-slide-toggle-disabled-interactive", ctx.disabledInteractive);
        \u0275\u0275property("tabIndex", ctx.disabled && !ctx.disabledInteractive ? -1 : ctx.tabIndex)("disabled", ctx.disabled && !ctx.disabledInteractive);
        \u0275\u0275attribute("id", ctx.buttonId)("name", ctx.name)("aria-label", ctx.ariaLabel)("aria-labelledby", ctx._getAriaLabelledBy())("aria-describedby", ctx.ariaDescribedby)("aria-required", ctx.required || null)("aria-checked", ctx.checked)("aria-disabled", ctx.disabled && ctx.disabledInteractive ? "true" : null);
        \u0275\u0275advance(8);
        \u0275\u0275property("matRippleTrigger", switch_r2)("matRippleDisabled", ctx.disableRipple || ctx.disabled)("matRippleCentered", true);
        \u0275\u0275advance();
        \u0275\u0275conditional(!ctx.hideIcon ? 10 : -1);
        \u0275\u0275advance();
        \u0275\u0275property("for", ctx.buttonId);
        \u0275\u0275attribute("id", ctx._labelId);
      }
    },
    dependencies: [MatRipple, _MatInternalFormField],
    styles: ['.mdc-switch{align-items:center;background:none;border:none;cursor:pointer;display:inline-flex;flex-shrink:0;margin:0;outline:none;overflow:visible;padding:0;position:relative;width:var(--mdc-switch-track-width, 52px)}.mdc-switch.mdc-switch--disabled{cursor:default;pointer-events:none}.mdc-switch.mat-mdc-slide-toggle-disabled-interactive{pointer-events:auto}.mdc-switch__track{overflow:hidden;position:relative;width:100%;height:var(--mdc-switch-track-height, 32px);border-radius:var(--mdc-switch-track-shape, var(--mat-sys-corner-full))}.mdc-switch--disabled.mdc-switch .mdc-switch__track{opacity:var(--mdc-switch-disabled-track-opacity, 0.12)}.mdc-switch__track::before,.mdc-switch__track::after{border:1px solid rgba(0,0,0,0);border-radius:inherit;box-sizing:border-box;content:"";height:100%;left:0;position:absolute;width:100%;border-width:var(--mat-switch-track-outline-width, 2px);border-color:var(--mat-switch-track-outline-color, var(--mat-sys-outline))}.mdc-switch--selected .mdc-switch__track::before,.mdc-switch--selected .mdc-switch__track::after{border-width:var(--mat-switch-selected-track-outline-width, 2px);border-color:var(--mat-switch-selected-track-outline-color, transparent)}.mdc-switch--disabled .mdc-switch__track::before,.mdc-switch--disabled .mdc-switch__track::after{border-width:var(--mat-switch-disabled-unselected-track-outline-width, 2px);border-color:var(--mat-switch-disabled-unselected-track-outline-color, var(--mat-sys-on-surface))}@media(forced-colors: active){.mdc-switch__track{border-color:currentColor}}.mdc-switch__track::before{transition:transform 75ms 0ms cubic-bezier(0, 0, 0.2, 1);transform:translateX(0);background:var(--mdc-switch-unselected-track-color, var(--mat-sys-surface-variant))}.mdc-switch--selected .mdc-switch__track::before{transition:transform 75ms 0ms cubic-bezier(0.4, 0, 0.6, 1);transform:translateX(100%)}[dir=rtl] .mdc-switch--selected .mdc-switch--selected .mdc-switch__track::before{transform:translateX(-100%)}.mdc-switch--selected .mdc-switch__track::before{opacity:var(--mat-switch-hidden-track-opacity, 0);transition:var(--mat-switch-hidden-track-transition, opacity 75ms)}.mdc-switch--unselected .mdc-switch__track::before{opacity:var(--mat-switch-visible-track-opacity, 1);transition:var(--mat-switch-visible-track-transition, opacity 75ms)}.mdc-switch:enabled:hover:not(:focus):not(:active) .mdc-switch__track::before{background:var(--mdc-switch-unselected-hover-track-color, var(--mat-sys-surface-variant))}.mdc-switch:enabled:focus:not(:active) .mdc-switch__track::before{background:var(--mdc-switch-unselected-focus-track-color, var(--mat-sys-surface-variant))}.mdc-switch:enabled:active .mdc-switch__track::before{background:var(--mdc-switch-unselected-pressed-track-color, var(--mat-sys-surface-variant))}.mat-mdc-slide-toggle-disabled-interactive.mdc-switch--disabled:hover:not(:focus):not(:active) .mdc-switch__track::before,.mat-mdc-slide-toggle-disabled-interactive.mdc-switch--disabled:focus:not(:active) .mdc-switch__track::before,.mat-mdc-slide-toggle-disabled-interactive.mdc-switch--disabled:active .mdc-switch__track::before,.mdc-switch.mdc-switch--disabled .mdc-switch__track::before{background:var(--mdc-switch-disabled-unselected-track-color, var(--mat-sys-surface-variant))}.mdc-switch__track::after{transform:translateX(-100%);background:var(--mdc-switch-selected-track-color, var(--mat-sys-primary))}[dir=rtl] .mdc-switch__track::after{transform:translateX(100%)}.mdc-switch--selected .mdc-switch__track::after{transform:translateX(0)}.mdc-switch--selected .mdc-switch__track::after{opacity:var(--mat-switch-visible-track-opacity, 1);transition:var(--mat-switch-visible-track-transition, opacity 75ms)}.mdc-switch--unselected .mdc-switch__track::after{opacity:var(--mat-switch-hidden-track-opacity, 0);transition:var(--mat-switch-hidden-track-transition, opacity 75ms)}.mdc-switch:enabled:hover:not(:focus):not(:active) .mdc-switch__track::after{background:var(--mdc-switch-selected-hover-track-color, var(--mat-sys-primary))}.mdc-switch:enabled:focus:not(:active) .mdc-switch__track::after{background:var(--mdc-switch-selected-focus-track-color, var(--mat-sys-primary))}.mdc-switch:enabled:active .mdc-switch__track::after{background:var(--mdc-switch-selected-pressed-track-color, var(--mat-sys-primary))}.mat-mdc-slide-toggle-disabled-interactive.mdc-switch--disabled:hover:not(:focus):not(:active) .mdc-switch__track::after,.mat-mdc-slide-toggle-disabled-interactive.mdc-switch--disabled:focus:not(:active) .mdc-switch__track::after,.mat-mdc-slide-toggle-disabled-interactive.mdc-switch--disabled:active .mdc-switch__track::after,.mdc-switch.mdc-switch--disabled .mdc-switch__track::after{background:var(--mdc-switch-disabled-selected-track-color, var(--mat-sys-on-surface))}.mdc-switch__handle-track{height:100%;pointer-events:none;position:absolute;top:0;transition:transform 75ms 0ms cubic-bezier(0.4, 0, 0.2, 1);left:0;right:auto;transform:translateX(0);width:calc(100% - var(--mdc-switch-handle-width))}[dir=rtl] .mdc-switch__handle-track{left:auto;right:0}.mdc-switch--selected .mdc-switch__handle-track{transform:translateX(100%)}[dir=rtl] .mdc-switch--selected .mdc-switch__handle-track{transform:translateX(-100%)}.mdc-switch__handle{display:flex;pointer-events:auto;position:absolute;top:50%;transform:translateY(-50%);left:0;right:auto;transition:width 75ms cubic-bezier(0.4, 0, 0.2, 1),height 75ms cubic-bezier(0.4, 0, 0.2, 1),margin 75ms cubic-bezier(0.4, 0, 0.2, 1);width:var(--mdc-switch-handle-width);height:var(--mdc-switch-handle-height);border-radius:var(--mdc-switch-handle-shape, var(--mat-sys-corner-full))}[dir=rtl] .mdc-switch__handle{left:auto;right:0}.mat-mdc-slide-toggle .mdc-switch--unselected .mdc-switch__handle{width:var(--mat-switch-unselected-handle-size, 16px);height:var(--mat-switch-unselected-handle-size, 16px);margin:var(--mat-switch-unselected-handle-horizontal-margin, 0 8px)}.mat-mdc-slide-toggle .mdc-switch--unselected .mdc-switch__handle:has(.mdc-switch__icons){margin:var(--mat-switch-unselected-with-icon-handle-horizontal-margin, 0 4px)}.mat-mdc-slide-toggle .mdc-switch--selected .mdc-switch__handle{width:var(--mat-switch-selected-handle-size, 24px);height:var(--mat-switch-selected-handle-size, 24px);margin:var(--mat-switch-selected-handle-horizontal-margin, 0 24px)}.mat-mdc-slide-toggle .mdc-switch--selected .mdc-switch__handle:has(.mdc-switch__icons){margin:var(--mat-switch-selected-with-icon-handle-horizontal-margin, 0 24px)}.mat-mdc-slide-toggle .mdc-switch__handle:has(.mdc-switch__icons){width:var(--mat-switch-with-icon-handle-size, 24px);height:var(--mat-switch-with-icon-handle-size, 24px)}.mat-mdc-slide-toggle .mdc-switch:active:not(.mdc-switch--disabled) .mdc-switch__handle{width:var(--mat-switch-pressed-handle-size, 28px);height:var(--mat-switch-pressed-handle-size, 28px)}.mat-mdc-slide-toggle .mdc-switch--selected:active:not(.mdc-switch--disabled) .mdc-switch__handle{margin:var(--mat-switch-selected-pressed-handle-horizontal-margin, 0 22px)}.mat-mdc-slide-toggle .mdc-switch--unselected:active:not(.mdc-switch--disabled) .mdc-switch__handle{margin:var(--mat-switch-unselected-pressed-handle-horizontal-margin, 0 2px)}.mdc-switch--disabled.mdc-switch--selected .mdc-switch__handle::after{opacity:var(--mat-switch-disabled-selected-handle-opacity, 1)}.mdc-switch--disabled.mdc-switch--unselected .mdc-switch__handle::after{opacity:var(--mat-switch-disabled-unselected-handle-opacity, 0.38)}.mdc-switch__handle::before,.mdc-switch__handle::after{border:1px solid rgba(0,0,0,0);border-radius:inherit;box-sizing:border-box;content:"";width:100%;height:100%;left:0;position:absolute;top:0;transition:background-color 75ms 0ms cubic-bezier(0.4, 0, 0.2, 1),border-color 75ms 0ms cubic-bezier(0.4, 0, 0.2, 1);z-index:-1}@media(forced-colors: active){.mdc-switch__handle::before,.mdc-switch__handle::after{border-color:currentColor}}.mdc-switch--selected:enabled .mdc-switch__handle::after{background:var(--mdc-switch-selected-handle-color, var(--mat-sys-on-primary))}.mdc-switch--selected:enabled:hover:not(:focus):not(:active) .mdc-switch__handle::after{background:var(--mdc-switch-selected-hover-handle-color, var(--mat-sys-primary-container))}.mdc-switch--selected:enabled:focus:not(:active) .mdc-switch__handle::after{background:var(--mdc-switch-selected-focus-handle-color, var(--mat-sys-primary-container))}.mdc-switch--selected:enabled:active .mdc-switch__handle::after{background:var(--mdc-switch-selected-pressed-handle-color, var(--mat-sys-primary-container))}.mat-mdc-slide-toggle-disabled-interactive.mdc-switch--disabled.mdc-switch--selected:hover:not(:focus):not(:active) .mdc-switch__handle::after,.mat-mdc-slide-toggle-disabled-interactive.mdc-switch--disabled.mdc-switch--selected:focus:not(:active) .mdc-switch__handle::after,.mat-mdc-slide-toggle-disabled-interactive.mdc-switch--disabled.mdc-switch--selected:active .mdc-switch__handle::after,.mdc-switch--selected.mdc-switch--disabled .mdc-switch__handle::after{background:var(--mdc-switch-disabled-selected-handle-color, var(--mat-sys-surface))}.mdc-switch--unselected:enabled .mdc-switch__handle::after{background:var(--mdc-switch-unselected-handle-color, var(--mat-sys-outline))}.mdc-switch--unselected:enabled:hover:not(:focus):not(:active) .mdc-switch__handle::after{background:var(--mdc-switch-unselected-hover-handle-color, var(--mat-sys-on-surface-variant))}.mdc-switch--unselected:enabled:focus:not(:active) .mdc-switch__handle::after{background:var(--mdc-switch-unselected-focus-handle-color, var(--mat-sys-on-surface-variant))}.mdc-switch--unselected:enabled:active .mdc-switch__handle::after{background:var(--mdc-switch-unselected-pressed-handle-color, var(--mat-sys-on-surface-variant))}.mdc-switch--unselected.mdc-switch--disabled .mdc-switch__handle::after{background:var(--mdc-switch-disabled-unselected-handle-color, var(--mat-sys-on-surface))}.mdc-switch__handle::before{background:var(--mdc-switch-handle-surface-color)}.mdc-switch__shadow{border-radius:inherit;bottom:0;left:0;position:absolute;right:0;top:0}.mdc-switch:enabled .mdc-switch__shadow{box-shadow:var(--mdc-switch-handle-elevation-shadow)}.mat-mdc-slide-toggle-disabled-interactive.mdc-switch--disabled:hover:not(:focus):not(:active) .mdc-switch__shadow,.mat-mdc-slide-toggle-disabled-interactive.mdc-switch--disabled:focus:not(:active) .mdc-switch__shadow,.mat-mdc-slide-toggle-disabled-interactive.mdc-switch--disabled:active .mdc-switch__shadow,.mdc-switch.mdc-switch--disabled .mdc-switch__shadow{box-shadow:var(--mdc-switch-disabled-handle-elevation-shadow)}.mdc-switch__ripple{left:50%;position:absolute;top:50%;transform:translate(-50%, -50%);z-index:-1;width:var(--mdc-switch-state-layer-size, 40px);height:var(--mdc-switch-state-layer-size, 40px)}.mdc-switch__ripple::after{content:"";opacity:0}.mdc-switch--disabled .mdc-switch__ripple::after{display:none}.mat-mdc-slide-toggle-disabled-interactive .mdc-switch__ripple::after{display:block}.mdc-switch:hover .mdc-switch__ripple::after{opacity:.04;transition:75ms opacity cubic-bezier(0, 0, 0.2, 1)}.mat-mdc-slide-toggle.mat-mdc-slide-toggle-focused .mdc-switch .mdc-switch__ripple::after{opacity:.12}.mat-mdc-slide-toggle-disabled-interactive.mdc-switch--disabled:enabled:focus .mdc-switch__ripple::after,.mat-mdc-slide-toggle-disabled-interactive.mdc-switch--disabled:enabled:active .mdc-switch__ripple::after,.mat-mdc-slide-toggle-disabled-interactive.mdc-switch--disabled:enabled:hover:not(:focus) .mdc-switch__ripple::after,.mdc-switch--unselected:enabled:hover:not(:focus) .mdc-switch__ripple::after{background:var(--mdc-switch-unselected-hover-state-layer-color, var(--mat-sys-on-surface))}.mdc-switch--unselected:enabled:focus .mdc-switch__ripple::after{background:var(--mdc-switch-unselected-focus-state-layer-color, var(--mat-sys-on-surface))}.mdc-switch--unselected:enabled:active .mdc-switch__ripple::after{background:var(--mdc-switch-unselected-pressed-state-layer-color, var(--mat-sys-on-surface));opacity:var(--mdc-switch-unselected-pressed-state-layer-opacity, var(--mat-sys-pressed-state-layer-opacity));transition:opacity 75ms linear}.mdc-switch--selected:enabled:hover:not(:focus) .mdc-switch__ripple::after{background:var(--mdc-switch-selected-hover-state-layer-color, var(--mat-sys-primary))}.mdc-switch--selected:enabled:focus .mdc-switch__ripple::after{background:var(--mdc-switch-selected-focus-state-layer-color, var(--mat-sys-primary))}.mdc-switch--selected:enabled:active .mdc-switch__ripple::after{background:var(--mdc-switch-selected-pressed-state-layer-color, var(--mat-sys-primary));opacity:var(--mdc-switch-selected-pressed-state-layer-opacity, var(--mat-sys-pressed-state-layer-opacity));transition:opacity 75ms linear}.mdc-switch__icons{position:relative;height:100%;width:100%;z-index:1;transform:translateZ(0)}.mdc-switch--disabled.mdc-switch--unselected .mdc-switch__icons{opacity:var(--mdc-switch-disabled-unselected-icon-opacity, 0.38)}.mdc-switch--disabled.mdc-switch--selected .mdc-switch__icons{opacity:var(--mdc-switch-disabled-selected-icon-opacity, 0.38)}.mdc-switch__icon{bottom:0;left:0;margin:auto;position:absolute;right:0;top:0;opacity:0;transition:opacity 30ms 0ms cubic-bezier(0.4, 0, 1, 1)}.mdc-switch--unselected .mdc-switch__icon{width:var(--mdc-switch-unselected-icon-size, 16px);height:var(--mdc-switch-unselected-icon-size, 16px);fill:var(--mdc-switch-unselected-icon-color, var(--mat-sys-surface-variant))}.mdc-switch--unselected.mdc-switch--disabled .mdc-switch__icon{fill:var(--mdc-switch-disabled-unselected-icon-color, var(--mat-sys-surface-variant))}.mdc-switch--selected .mdc-switch__icon{width:var(--mdc-switch-selected-icon-size, 16px);height:var(--mdc-switch-selected-icon-size, 16px);fill:var(--mdc-switch-selected-icon-color, var(--mat-sys-on-primary-container))}.mdc-switch--selected.mdc-switch--disabled .mdc-switch__icon{fill:var(--mdc-switch-disabled-selected-icon-color, var(--mat-sys-on-surface))}.mdc-switch--selected .mdc-switch__icon--on,.mdc-switch--unselected .mdc-switch__icon--off{opacity:1;transition:opacity 45ms 30ms cubic-bezier(0, 0, 0.2, 1)}.mat-mdc-slide-toggle{-webkit-user-select:none;user-select:none;display:inline-block;-webkit-tap-highlight-color:rgba(0,0,0,0);outline:0}.mat-mdc-slide-toggle .mat-mdc-slide-toggle-ripple,.mat-mdc-slide-toggle .mdc-switch__ripple::after{top:0;left:0;right:0;bottom:0;position:absolute;border-radius:50%;pointer-events:none}.mat-mdc-slide-toggle .mat-mdc-slide-toggle-ripple:not(:empty),.mat-mdc-slide-toggle .mdc-switch__ripple::after:not(:empty){transform:translateZ(0)}.mat-mdc-slide-toggle.mat-mdc-slide-toggle-focused .mat-focus-indicator::before{content:""}.mat-mdc-slide-toggle .mat-internal-form-field{color:var(--mat-switch-label-text-color, var(--mat-sys-on-surface));font-family:var(--mat-switch-label-text-font, var(--mat-sys-body-medium-font));line-height:var(--mat-switch-label-text-line-height, var(--mat-sys-body-medium-line-height));font-size:var(--mat-switch-label-text-size, var(--mat-sys-body-medium-size));letter-spacing:var(--mat-switch-label-text-tracking, var(--mat-sys-body-medium-tracking));font-weight:var(--mat-switch-label-text-weight, var(--mat-sys-body-medium-weight))}.mat-mdc-slide-toggle .mat-ripple-element{opacity:.12}.mat-mdc-slide-toggle .mat-focus-indicator::before{border-radius:50%}.mat-mdc-slide-toggle._mat-animation-noopable .mdc-switch__handle-track,.mat-mdc-slide-toggle._mat-animation-noopable .mdc-switch__icon,.mat-mdc-slide-toggle._mat-animation-noopable .mdc-switch__handle::before,.mat-mdc-slide-toggle._mat-animation-noopable .mdc-switch__handle::after,.mat-mdc-slide-toggle._mat-animation-noopable .mdc-switch__track::before,.mat-mdc-slide-toggle._mat-animation-noopable .mdc-switch__track::after{transition:none}.mat-mdc-slide-toggle .mdc-switch:enabled+.mdc-label{cursor:pointer}.mat-mdc-slide-toggle .mdc-switch--disabled+label{color:var(--mdc-switch-disabled-label-text-color)}\n'],
    encapsulation: 2,
    changeDetection: 0
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatSlideToggle, [{
    type: Component,
    args: [{
      selector: "mat-slide-toggle",
      host: {
        "class": "mat-mdc-slide-toggle",
        "[id]": "id",
        // Needs to be removed since it causes some a11y issues (see #21266).
        "[attr.tabindex]": "null",
        "[attr.aria-label]": "null",
        "[attr.name]": "null",
        "[attr.aria-labelledby]": "null",
        "[class.mat-mdc-slide-toggle-focused]": "_focused",
        "[class.mat-mdc-slide-toggle-checked]": "checked",
        "[class._mat-animation-noopable]": "_noopAnimations",
        "[class]": 'color ? "mat-" + color : ""'
      },
      exportAs: "matSlideToggle",
      encapsulation: ViewEncapsulation.None,
      changeDetection: ChangeDetectionStrategy.OnPush,
      providers: [MAT_SLIDE_TOGGLE_VALUE_ACCESSOR, {
        provide: NG_VALIDATORS,
        useExisting: MatSlideToggle,
        multi: true
      }],
      imports: [MatRipple, _MatInternalFormField],
      template: `<div mat-internal-form-field [labelPosition]="labelPosition">
  <button
    class="mdc-switch"
    role="switch"
    type="button"
    [class.mdc-switch--selected]="checked"
    [class.mdc-switch--unselected]="!checked"
    [class.mdc-switch--checked]="checked"
    [class.mdc-switch--disabled]="disabled"
    [class.mat-mdc-slide-toggle-disabled-interactive]="disabledInteractive"
    [tabIndex]="disabled && !disabledInteractive ? -1 : tabIndex"
    [disabled]="disabled && !disabledInteractive"
    [attr.id]="buttonId"
    [attr.name]="name"
    [attr.aria-label]="ariaLabel"
    [attr.aria-labelledby]="_getAriaLabelledBy()"
    [attr.aria-describedby]="ariaDescribedby"
    [attr.aria-required]="required || null"
    [attr.aria-checked]="checked"
    [attr.aria-disabled]="disabled && disabledInteractive ? 'true' : null"
    (click)="_handleClick()"
    #switch>
    <span class="mdc-switch__track"></span>
    <span class="mdc-switch__handle-track">
      <span class="mdc-switch__handle">
        <span class="mdc-switch__shadow">
          <span class="mdc-elevation-overlay"></span>
        </span>
        <span class="mdc-switch__ripple">
          <span class="mat-mdc-slide-toggle-ripple mat-focus-indicator" mat-ripple
            [matRippleTrigger]="switch"
            [matRippleDisabled]="disableRipple || disabled"
            [matRippleCentered]="true"></span>
        </span>
        @if (!hideIcon) {
          <span class="mdc-switch__icons">
            <svg
              class="mdc-switch__icon mdc-switch__icon--on"
              viewBox="0 0 24 24"
              aria-hidden="true">
              <path d="M19.69,5.23L8.96,15.96l-4.23-4.23L2.96,13.5l6,6L21.46,7L19.69,5.23z" />
            </svg>
            <svg
              class="mdc-switch__icon mdc-switch__icon--off"
              viewBox="0 0 24 24"
              aria-hidden="true">
              <path d="M20 13H4v-2h16v2z" />
            </svg>
          </span>
        }
      </span>
    </span>
  </button>

  <!--
    Clicking on the label will trigger another click event from the button.
    Stop propagation here so other listeners further up in the DOM don't execute twice.
  -->
  <label class="mdc-label" [for]="buttonId" [attr.id]="_labelId" (click)="$event.stopPropagation()">
    <ng-content></ng-content>
  </label>
</div>
`,
      styles: ['.mdc-switch{align-items:center;background:none;border:none;cursor:pointer;display:inline-flex;flex-shrink:0;margin:0;outline:none;overflow:visible;padding:0;position:relative;width:var(--mdc-switch-track-width, 52px)}.mdc-switch.mdc-switch--disabled{cursor:default;pointer-events:none}.mdc-switch.mat-mdc-slide-toggle-disabled-interactive{pointer-events:auto}.mdc-switch__track{overflow:hidden;position:relative;width:100%;height:var(--mdc-switch-track-height, 32px);border-radius:var(--mdc-switch-track-shape, var(--mat-sys-corner-full))}.mdc-switch--disabled.mdc-switch .mdc-switch__track{opacity:var(--mdc-switch-disabled-track-opacity, 0.12)}.mdc-switch__track::before,.mdc-switch__track::after{border:1px solid rgba(0,0,0,0);border-radius:inherit;box-sizing:border-box;content:"";height:100%;left:0;position:absolute;width:100%;border-width:var(--mat-switch-track-outline-width, 2px);border-color:var(--mat-switch-track-outline-color, var(--mat-sys-outline))}.mdc-switch--selected .mdc-switch__track::before,.mdc-switch--selected .mdc-switch__track::after{border-width:var(--mat-switch-selected-track-outline-width, 2px);border-color:var(--mat-switch-selected-track-outline-color, transparent)}.mdc-switch--disabled .mdc-switch__track::before,.mdc-switch--disabled .mdc-switch__track::after{border-width:var(--mat-switch-disabled-unselected-track-outline-width, 2px);border-color:var(--mat-switch-disabled-unselected-track-outline-color, var(--mat-sys-on-surface))}@media(forced-colors: active){.mdc-switch__track{border-color:currentColor}}.mdc-switch__track::before{transition:transform 75ms 0ms cubic-bezier(0, 0, 0.2, 1);transform:translateX(0);background:var(--mdc-switch-unselected-track-color, var(--mat-sys-surface-variant))}.mdc-switch--selected .mdc-switch__track::before{transition:transform 75ms 0ms cubic-bezier(0.4, 0, 0.6, 1);transform:translateX(100%)}[dir=rtl] .mdc-switch--selected .mdc-switch--selected .mdc-switch__track::before{transform:translateX(-100%)}.mdc-switch--selected .mdc-switch__track::before{opacity:var(--mat-switch-hidden-track-opacity, 0);transition:var(--mat-switch-hidden-track-transition, opacity 75ms)}.mdc-switch--unselected .mdc-switch__track::before{opacity:var(--mat-switch-visible-track-opacity, 1);transition:var(--mat-switch-visible-track-transition, opacity 75ms)}.mdc-switch:enabled:hover:not(:focus):not(:active) .mdc-switch__track::before{background:var(--mdc-switch-unselected-hover-track-color, var(--mat-sys-surface-variant))}.mdc-switch:enabled:focus:not(:active) .mdc-switch__track::before{background:var(--mdc-switch-unselected-focus-track-color, var(--mat-sys-surface-variant))}.mdc-switch:enabled:active .mdc-switch__track::before{background:var(--mdc-switch-unselected-pressed-track-color, var(--mat-sys-surface-variant))}.mat-mdc-slide-toggle-disabled-interactive.mdc-switch--disabled:hover:not(:focus):not(:active) .mdc-switch__track::before,.mat-mdc-slide-toggle-disabled-interactive.mdc-switch--disabled:focus:not(:active) .mdc-switch__track::before,.mat-mdc-slide-toggle-disabled-interactive.mdc-switch--disabled:active .mdc-switch__track::before,.mdc-switch.mdc-switch--disabled .mdc-switch__track::before{background:var(--mdc-switch-disabled-unselected-track-color, var(--mat-sys-surface-variant))}.mdc-switch__track::after{transform:translateX(-100%);background:var(--mdc-switch-selected-track-color, var(--mat-sys-primary))}[dir=rtl] .mdc-switch__track::after{transform:translateX(100%)}.mdc-switch--selected .mdc-switch__track::after{transform:translateX(0)}.mdc-switch--selected .mdc-switch__track::after{opacity:var(--mat-switch-visible-track-opacity, 1);transition:var(--mat-switch-visible-track-transition, opacity 75ms)}.mdc-switch--unselected .mdc-switch__track::after{opacity:var(--mat-switch-hidden-track-opacity, 0);transition:var(--mat-switch-hidden-track-transition, opacity 75ms)}.mdc-switch:enabled:hover:not(:focus):not(:active) .mdc-switch__track::after{background:var(--mdc-switch-selected-hover-track-color, var(--mat-sys-primary))}.mdc-switch:enabled:focus:not(:active) .mdc-switch__track::after{background:var(--mdc-switch-selected-focus-track-color, var(--mat-sys-primary))}.mdc-switch:enabled:active .mdc-switch__track::after{background:var(--mdc-switch-selected-pressed-track-color, var(--mat-sys-primary))}.mat-mdc-slide-toggle-disabled-interactive.mdc-switch--disabled:hover:not(:focus):not(:active) .mdc-switch__track::after,.mat-mdc-slide-toggle-disabled-interactive.mdc-switch--disabled:focus:not(:active) .mdc-switch__track::after,.mat-mdc-slide-toggle-disabled-interactive.mdc-switch--disabled:active .mdc-switch__track::after,.mdc-switch.mdc-switch--disabled .mdc-switch__track::after{background:var(--mdc-switch-disabled-selected-track-color, var(--mat-sys-on-surface))}.mdc-switch__handle-track{height:100%;pointer-events:none;position:absolute;top:0;transition:transform 75ms 0ms cubic-bezier(0.4, 0, 0.2, 1);left:0;right:auto;transform:translateX(0);width:calc(100% - var(--mdc-switch-handle-width))}[dir=rtl] .mdc-switch__handle-track{left:auto;right:0}.mdc-switch--selected .mdc-switch__handle-track{transform:translateX(100%)}[dir=rtl] .mdc-switch--selected .mdc-switch__handle-track{transform:translateX(-100%)}.mdc-switch__handle{display:flex;pointer-events:auto;position:absolute;top:50%;transform:translateY(-50%);left:0;right:auto;transition:width 75ms cubic-bezier(0.4, 0, 0.2, 1),height 75ms cubic-bezier(0.4, 0, 0.2, 1),margin 75ms cubic-bezier(0.4, 0, 0.2, 1);width:var(--mdc-switch-handle-width);height:var(--mdc-switch-handle-height);border-radius:var(--mdc-switch-handle-shape, var(--mat-sys-corner-full))}[dir=rtl] .mdc-switch__handle{left:auto;right:0}.mat-mdc-slide-toggle .mdc-switch--unselected .mdc-switch__handle{width:var(--mat-switch-unselected-handle-size, 16px);height:var(--mat-switch-unselected-handle-size, 16px);margin:var(--mat-switch-unselected-handle-horizontal-margin, 0 8px)}.mat-mdc-slide-toggle .mdc-switch--unselected .mdc-switch__handle:has(.mdc-switch__icons){margin:var(--mat-switch-unselected-with-icon-handle-horizontal-margin, 0 4px)}.mat-mdc-slide-toggle .mdc-switch--selected .mdc-switch__handle{width:var(--mat-switch-selected-handle-size, 24px);height:var(--mat-switch-selected-handle-size, 24px);margin:var(--mat-switch-selected-handle-horizontal-margin, 0 24px)}.mat-mdc-slide-toggle .mdc-switch--selected .mdc-switch__handle:has(.mdc-switch__icons){margin:var(--mat-switch-selected-with-icon-handle-horizontal-margin, 0 24px)}.mat-mdc-slide-toggle .mdc-switch__handle:has(.mdc-switch__icons){width:var(--mat-switch-with-icon-handle-size, 24px);height:var(--mat-switch-with-icon-handle-size, 24px)}.mat-mdc-slide-toggle .mdc-switch:active:not(.mdc-switch--disabled) .mdc-switch__handle{width:var(--mat-switch-pressed-handle-size, 28px);height:var(--mat-switch-pressed-handle-size, 28px)}.mat-mdc-slide-toggle .mdc-switch--selected:active:not(.mdc-switch--disabled) .mdc-switch__handle{margin:var(--mat-switch-selected-pressed-handle-horizontal-margin, 0 22px)}.mat-mdc-slide-toggle .mdc-switch--unselected:active:not(.mdc-switch--disabled) .mdc-switch__handle{margin:var(--mat-switch-unselected-pressed-handle-horizontal-margin, 0 2px)}.mdc-switch--disabled.mdc-switch--selected .mdc-switch__handle::after{opacity:var(--mat-switch-disabled-selected-handle-opacity, 1)}.mdc-switch--disabled.mdc-switch--unselected .mdc-switch__handle::after{opacity:var(--mat-switch-disabled-unselected-handle-opacity, 0.38)}.mdc-switch__handle::before,.mdc-switch__handle::after{border:1px solid rgba(0,0,0,0);border-radius:inherit;box-sizing:border-box;content:"";width:100%;height:100%;left:0;position:absolute;top:0;transition:background-color 75ms 0ms cubic-bezier(0.4, 0, 0.2, 1),border-color 75ms 0ms cubic-bezier(0.4, 0, 0.2, 1);z-index:-1}@media(forced-colors: active){.mdc-switch__handle::before,.mdc-switch__handle::after{border-color:currentColor}}.mdc-switch--selected:enabled .mdc-switch__handle::after{background:var(--mdc-switch-selected-handle-color, var(--mat-sys-on-primary))}.mdc-switch--selected:enabled:hover:not(:focus):not(:active) .mdc-switch__handle::after{background:var(--mdc-switch-selected-hover-handle-color, var(--mat-sys-primary-container))}.mdc-switch--selected:enabled:focus:not(:active) .mdc-switch__handle::after{background:var(--mdc-switch-selected-focus-handle-color, var(--mat-sys-primary-container))}.mdc-switch--selected:enabled:active .mdc-switch__handle::after{background:var(--mdc-switch-selected-pressed-handle-color, var(--mat-sys-primary-container))}.mat-mdc-slide-toggle-disabled-interactive.mdc-switch--disabled.mdc-switch--selected:hover:not(:focus):not(:active) .mdc-switch__handle::after,.mat-mdc-slide-toggle-disabled-interactive.mdc-switch--disabled.mdc-switch--selected:focus:not(:active) .mdc-switch__handle::after,.mat-mdc-slide-toggle-disabled-interactive.mdc-switch--disabled.mdc-switch--selected:active .mdc-switch__handle::after,.mdc-switch--selected.mdc-switch--disabled .mdc-switch__handle::after{background:var(--mdc-switch-disabled-selected-handle-color, var(--mat-sys-surface))}.mdc-switch--unselected:enabled .mdc-switch__handle::after{background:var(--mdc-switch-unselected-handle-color, var(--mat-sys-outline))}.mdc-switch--unselected:enabled:hover:not(:focus):not(:active) .mdc-switch__handle::after{background:var(--mdc-switch-unselected-hover-handle-color, var(--mat-sys-on-surface-variant))}.mdc-switch--unselected:enabled:focus:not(:active) .mdc-switch__handle::after{background:var(--mdc-switch-unselected-focus-handle-color, var(--mat-sys-on-surface-variant))}.mdc-switch--unselected:enabled:active .mdc-switch__handle::after{background:var(--mdc-switch-unselected-pressed-handle-color, var(--mat-sys-on-surface-variant))}.mdc-switch--unselected.mdc-switch--disabled .mdc-switch__handle::after{background:var(--mdc-switch-disabled-unselected-handle-color, var(--mat-sys-on-surface))}.mdc-switch__handle::before{background:var(--mdc-switch-handle-surface-color)}.mdc-switch__shadow{border-radius:inherit;bottom:0;left:0;position:absolute;right:0;top:0}.mdc-switch:enabled .mdc-switch__shadow{box-shadow:var(--mdc-switch-handle-elevation-shadow)}.mat-mdc-slide-toggle-disabled-interactive.mdc-switch--disabled:hover:not(:focus):not(:active) .mdc-switch__shadow,.mat-mdc-slide-toggle-disabled-interactive.mdc-switch--disabled:focus:not(:active) .mdc-switch__shadow,.mat-mdc-slide-toggle-disabled-interactive.mdc-switch--disabled:active .mdc-switch__shadow,.mdc-switch.mdc-switch--disabled .mdc-switch__shadow{box-shadow:var(--mdc-switch-disabled-handle-elevation-shadow)}.mdc-switch__ripple{left:50%;position:absolute;top:50%;transform:translate(-50%, -50%);z-index:-1;width:var(--mdc-switch-state-layer-size, 40px);height:var(--mdc-switch-state-layer-size, 40px)}.mdc-switch__ripple::after{content:"";opacity:0}.mdc-switch--disabled .mdc-switch__ripple::after{display:none}.mat-mdc-slide-toggle-disabled-interactive .mdc-switch__ripple::after{display:block}.mdc-switch:hover .mdc-switch__ripple::after{opacity:.04;transition:75ms opacity cubic-bezier(0, 0, 0.2, 1)}.mat-mdc-slide-toggle.mat-mdc-slide-toggle-focused .mdc-switch .mdc-switch__ripple::after{opacity:.12}.mat-mdc-slide-toggle-disabled-interactive.mdc-switch--disabled:enabled:focus .mdc-switch__ripple::after,.mat-mdc-slide-toggle-disabled-interactive.mdc-switch--disabled:enabled:active .mdc-switch__ripple::after,.mat-mdc-slide-toggle-disabled-interactive.mdc-switch--disabled:enabled:hover:not(:focus) .mdc-switch__ripple::after,.mdc-switch--unselected:enabled:hover:not(:focus) .mdc-switch__ripple::after{background:var(--mdc-switch-unselected-hover-state-layer-color, var(--mat-sys-on-surface))}.mdc-switch--unselected:enabled:focus .mdc-switch__ripple::after{background:var(--mdc-switch-unselected-focus-state-layer-color, var(--mat-sys-on-surface))}.mdc-switch--unselected:enabled:active .mdc-switch__ripple::after{background:var(--mdc-switch-unselected-pressed-state-layer-color, var(--mat-sys-on-surface));opacity:var(--mdc-switch-unselected-pressed-state-layer-opacity, var(--mat-sys-pressed-state-layer-opacity));transition:opacity 75ms linear}.mdc-switch--selected:enabled:hover:not(:focus) .mdc-switch__ripple::after{background:var(--mdc-switch-selected-hover-state-layer-color, var(--mat-sys-primary))}.mdc-switch--selected:enabled:focus .mdc-switch__ripple::after{background:var(--mdc-switch-selected-focus-state-layer-color, var(--mat-sys-primary))}.mdc-switch--selected:enabled:active .mdc-switch__ripple::after{background:var(--mdc-switch-selected-pressed-state-layer-color, var(--mat-sys-primary));opacity:var(--mdc-switch-selected-pressed-state-layer-opacity, var(--mat-sys-pressed-state-layer-opacity));transition:opacity 75ms linear}.mdc-switch__icons{position:relative;height:100%;width:100%;z-index:1;transform:translateZ(0)}.mdc-switch--disabled.mdc-switch--unselected .mdc-switch__icons{opacity:var(--mdc-switch-disabled-unselected-icon-opacity, 0.38)}.mdc-switch--disabled.mdc-switch--selected .mdc-switch__icons{opacity:var(--mdc-switch-disabled-selected-icon-opacity, 0.38)}.mdc-switch__icon{bottom:0;left:0;margin:auto;position:absolute;right:0;top:0;opacity:0;transition:opacity 30ms 0ms cubic-bezier(0.4, 0, 1, 1)}.mdc-switch--unselected .mdc-switch__icon{width:var(--mdc-switch-unselected-icon-size, 16px);height:var(--mdc-switch-unselected-icon-size, 16px);fill:var(--mdc-switch-unselected-icon-color, var(--mat-sys-surface-variant))}.mdc-switch--unselected.mdc-switch--disabled .mdc-switch__icon{fill:var(--mdc-switch-disabled-unselected-icon-color, var(--mat-sys-surface-variant))}.mdc-switch--selected .mdc-switch__icon{width:var(--mdc-switch-selected-icon-size, 16px);height:var(--mdc-switch-selected-icon-size, 16px);fill:var(--mdc-switch-selected-icon-color, var(--mat-sys-on-primary-container))}.mdc-switch--selected.mdc-switch--disabled .mdc-switch__icon{fill:var(--mdc-switch-disabled-selected-icon-color, var(--mat-sys-on-surface))}.mdc-switch--selected .mdc-switch__icon--on,.mdc-switch--unselected .mdc-switch__icon--off{opacity:1;transition:opacity 45ms 30ms cubic-bezier(0, 0, 0.2, 1)}.mat-mdc-slide-toggle{-webkit-user-select:none;user-select:none;display:inline-block;-webkit-tap-highlight-color:rgba(0,0,0,0);outline:0}.mat-mdc-slide-toggle .mat-mdc-slide-toggle-ripple,.mat-mdc-slide-toggle .mdc-switch__ripple::after{top:0;left:0;right:0;bottom:0;position:absolute;border-radius:50%;pointer-events:none}.mat-mdc-slide-toggle .mat-mdc-slide-toggle-ripple:not(:empty),.mat-mdc-slide-toggle .mdc-switch__ripple::after:not(:empty){transform:translateZ(0)}.mat-mdc-slide-toggle.mat-mdc-slide-toggle-focused .mat-focus-indicator::before{content:""}.mat-mdc-slide-toggle .mat-internal-form-field{color:var(--mat-switch-label-text-color, var(--mat-sys-on-surface));font-family:var(--mat-switch-label-text-font, var(--mat-sys-body-medium-font));line-height:var(--mat-switch-label-text-line-height, var(--mat-sys-body-medium-line-height));font-size:var(--mat-switch-label-text-size, var(--mat-sys-body-medium-size));letter-spacing:var(--mat-switch-label-text-tracking, var(--mat-sys-body-medium-tracking));font-weight:var(--mat-switch-label-text-weight, var(--mat-sys-body-medium-weight))}.mat-mdc-slide-toggle .mat-ripple-element{opacity:.12}.mat-mdc-slide-toggle .mat-focus-indicator::before{border-radius:50%}.mat-mdc-slide-toggle._mat-animation-noopable .mdc-switch__handle-track,.mat-mdc-slide-toggle._mat-animation-noopable .mdc-switch__icon,.mat-mdc-slide-toggle._mat-animation-noopable .mdc-switch__handle::before,.mat-mdc-slide-toggle._mat-animation-noopable .mdc-switch__handle::after,.mat-mdc-slide-toggle._mat-animation-noopable .mdc-switch__track::before,.mat-mdc-slide-toggle._mat-animation-noopable .mdc-switch__track::after{transition:none}.mat-mdc-slide-toggle .mdc-switch:enabled+.mdc-label{cursor:pointer}.mat-mdc-slide-toggle .mdc-switch--disabled+label{color:var(--mdc-switch-disabled-label-text-color)}\n']
    }]
  }], () => [], {
    _switchElement: [{
      type: ViewChild,
      args: ["switch"]
    }],
    name: [{
      type: Input
    }],
    id: [{
      type: Input
    }],
    labelPosition: [{
      type: Input
    }],
    ariaLabel: [{
      type: Input,
      args: ["aria-label"]
    }],
    ariaLabelledby: [{
      type: Input,
      args: ["aria-labelledby"]
    }],
    ariaDescribedby: [{
      type: Input,
      args: ["aria-describedby"]
    }],
    required: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    color: [{
      type: Input
    }],
    disabled: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    disableRipple: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    tabIndex: [{
      type: Input,
      args: [{
        transform: (value) => value == null ? 0 : numberAttribute(value)
      }]
    }],
    checked: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    hideIcon: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    disabledInteractive: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    change: [{
      type: Output
    }],
    toggleChange: [{
      type: Output
    }]
  });
})();
var MAT_SLIDE_TOGGLE_REQUIRED_VALIDATOR = {
  provide: NG_VALIDATORS,
  useExisting: forwardRef(() => MatSlideToggleRequiredValidator),
  multi: true
};
var MatSlideToggleRequiredValidator = class _MatSlideToggleRequiredValidator extends CheckboxRequiredValidator {
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275MatSlideToggleRequiredValidator_BaseFactory;
    return function MatSlideToggleRequiredValidator_Factory(__ngFactoryType__) {
      return (\u0275MatSlideToggleRequiredValidator_BaseFactory || (\u0275MatSlideToggleRequiredValidator_BaseFactory = \u0275\u0275getInheritedFactory(_MatSlideToggleRequiredValidator)))(__ngFactoryType__ || _MatSlideToggleRequiredValidator);
    };
  })();
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _MatSlideToggleRequiredValidator,
    selectors: [["mat-slide-toggle", "required", "", "formControlName", ""], ["mat-slide-toggle", "required", "", "formControl", ""], ["mat-slide-toggle", "required", "", "ngModel", ""]],
    features: [\u0275\u0275ProvidersFeature([MAT_SLIDE_TOGGLE_REQUIRED_VALIDATOR]), \u0275\u0275InheritDefinitionFeature]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatSlideToggleRequiredValidator, [{
    type: Directive,
    args: [{
      selector: `mat-slide-toggle[required][formControlName],
             mat-slide-toggle[required][formControl], mat-slide-toggle[required][ngModel]`,
      providers: [MAT_SLIDE_TOGGLE_REQUIRED_VALIDATOR]
    }]
  }], null, null);
})();
var _MatSlideToggleRequiredValidatorModule = class __MatSlideToggleRequiredValidatorModule {
  static \u0275fac = function _MatSlideToggleRequiredValidatorModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || __MatSlideToggleRequiredValidatorModule)();
  };
  static \u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
    type: __MatSlideToggleRequiredValidatorModule
  });
  static \u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({});
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(_MatSlideToggleRequiredValidatorModule, [{
    type: NgModule,
    args: [{
      imports: [MatSlideToggleRequiredValidator],
      exports: [MatSlideToggleRequiredValidator]
    }]
  }], null, null);
})();
var MatSlideToggleModule = class _MatSlideToggleModule {
  static \u0275fac = function MatSlideToggleModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _MatSlideToggleModule)();
  };
  static \u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
    type: _MatSlideToggleModule
  });
  static \u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({
    imports: [MatSlideToggle, MatCommonModule, MatCommonModule]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatSlideToggleModule, [{
    type: NgModule,
    args: [{
      imports: [MatSlideToggle, MatCommonModule],
      exports: [MatSlideToggle, MatCommonModule]
    }]
  }], null, null);
})();

// src/app/pages/cadastro-cardapio/dialog-item-cardapio/dialog-item-cardapio.component.ts
var import_sweetalert2 = __toESM(require_sweetalert2_all());
var _c02 = () => [13, 188];
function DialogItemCardapioComponent_mat_option_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 32);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const categoria_r2 = ctx.$implicit;
    \u0275\u0275property("value", categoria_r2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", categoria_r2.nome, " ");
  }
}
function DialogItemCardapioComponent_img_33_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 33);
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275property("src", ctx_r3.preview, \u0275\u0275sanitizeUrl);
  }
}
function DialogItemCardapioComponent_mat_error_34_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error");
    \u0275\u0275text(1, " Imagem \xE9 obrigat\xF3ria ");
    \u0275\u0275elementEnd();
  }
}
function DialogItemCardapioComponent_mat_chip_row_56_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "mat-chip-row", 34);
    \u0275\u0275listener("removed", function DialogItemCardapioComponent_mat_chip_row_56_Template_mat_chip_row_removed_0_listener() {
      const tag_r6 = \u0275\u0275restoreView(_r5).$implicit;
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.removeTag(tag_r6));
    });
    \u0275\u0275text(1);
    \u0275\u0275elementStart(2, "button", 35)(3, "mat-icon");
    \u0275\u0275text(4, "cancel");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const tag_r6 = ctx.$implicit;
    \u0275\u0275property("removable", true);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", tag_r6, " ");
  }
}
var DialogItemCardapioComponent = class _DialogItemCardapioComponent {
  constructor() {
    this.fb = inject(NonNullableFormBuilder);
    this.service = inject(CardapioService);
    this.dialogRef = inject(MatDialogRef);
    this.data = inject(MAT_DIALOG_DATA);
    this.categorias = [
      { id: "1", nome: "Entradas" },
      { id: "2", nome: "Acompanhamento" },
      { id: "3", nome: "Pratos Principais" },
      { id: "4", nome: "Sobremesas" },
      { id: "5", nome: "Bebidas" }
    ];
    this.form = this.fb.group({
      nome: ["", Validators.required],
      descricao: [""],
      preco: [0, [Validators.required, Validators.min(0.01)]],
      disponivel: [true],
      categoriaInput: [null, Validators.required],
      tempoPreparo: [10],
      tags: [[]],
      imagemBase64: ["", Validators.required],
      ordem: [0]
    });
    if (this.data.modo === "editar" && this.data.item) {
      const categoria = this.categorias.find((c) => c.nome === this.data.item?.categoria.nome);
      this.form.patchValue(__spreadProps(__spreadValues({}, this.data.item), {
        categoriaInput: categoria,
        tags: this.data.item.tags.map((t) => t.tag),
        imagemBase64: this.data.item.imagem
      }));
      this.preview = this.data.item.imagem;
    }
  }
  /** Getter para o FormControl de tags */
  get tagsControl() {
    return this.form.get("tags");
  }
  /** Lê arquivo de imagem e converte em Base64 */
  onFileSelected(event) {
    const input = event.target;
    if (!input.files?.length)
      return;
    const file = input.files[0];
    if (file.size > 5 * 1024 * 1024) {
      import_sweetalert2.default.fire({
        title: "Arquivo muito grande",
        text: "Por favor, selecione uma imagem menor que 5MB",
        icon: "error",
        confirmButtonColor: "#F6BD38"
      });
      return;
    }
    const reader = new FileReader();
    reader.onload = () => {
      this.preview = reader.result;
      this.form.patchValue({ imagemBase64: this.preview });
      this.form.get("imagemBase64")?.markAsTouched();
    };
    reader.readAsDataURL(file);
  }
  /** Adiciona uma nova tag */
  addTag(event) {
    const value = event.value?.trim();
    if (value) {
      const tags = [...this.tagsControl.value, value];
      this.tagsControl.setValue(tags);
    }
    event.chipInput?.clear();
  }
  /** Remove uma tag existente */
  removeTag(tag) {
    const tags = this.form.get("tags")?.value;
    const index = tags.indexOf(tag);
    if (index >= 0) {
      tags.splice(index, 1);
      this.form.get("tags")?.setValue(tags);
    }
  }
  /** Adiciona uma tag de exemplo */
  addExampleTag(tag) {
    const currentTags = this.form.get("tags")?.value || [];
    if (!currentTags.includes(tag)) {
      this.form.patchValue({
        tags: [...currentTags, tag]
      });
    }
  }
  /** Manipula a seleção de categoria */
  onCategoriaSelected(event) {
    const categoria = event.option.value;
    this.form.patchValue({ categoriaInput: categoria });
  }
  /** Salva criando ou atualizando via serviço */
  salvar() {
    if (this.form.invalid)
      return;
    const formValue = this.form.value;
    const categoria = formValue.categoriaInput;
    const itemToSave = {
      nome: formValue.nome,
      descricao: formValue.descricao || "",
      preco: formValue.preco,
      disponivel: formValue.disponivel,
      imagem: formValue.imagemBase64 || "",
      categoria: { nome: categoria.nome },
      tags: formValue.tags?.map((tag) => ({ tag })) || []
    };
    if (this.data.modo === "criar") {
      this.service.adicionarItem(itemToSave).subscribe({
        next: (res) => {
          if (res && res.id) {
            this.dialogRef.close(res);
          }
        },
        error: () => {
          import_sweetalert2.default.fire({
            title: "Erro!",
            text: "N\xE3o foi poss\xEDvel adicionar o item.",
            icon: "error",
            confirmButtonColor: "#F6BD38"
          });
        }
      });
    } else if (this.data.item?.id) {
      this.service.atualizarItem(this.data.item.id, itemToSave).subscribe({
        next: (res) => {
          this.dialogRef.close(res);
        },
        error: () => {
          import_sweetalert2.default.fire({
            title: "Erro!",
            text: "N\xE3o foi poss\xEDvel atualizar o item.",
            icon: "error",
            confirmButtonColor: "#F6BD38"
          });
        }
      });
    }
  }
  /** Fecha o diálogo sem salvar */
  cancelar() {
    this.dialogRef.close(false);
  }
  static {
    this.\u0275fac = function DialogItemCardapioComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _DialogItemCardapioComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _DialogItemCardapioComponent, selectors: [["app-dialog-item-cardapio"]], decls: 65, vars: 12, consts: [["uploadInput", ""], ["chipGrid", ""], [1, "dialog-content"], ["mat-dialog-title", ""], [1, "dialog-form", 3, "formGroup"], ["appearance", "outline", 1, "full-width"], ["formControlName", "categoriaInput"], [3, "value", 4, "ngFor", "ngForOf"], ["matInput", "", "formControlName", "nome", "placeholder", "Ex: Risotto de Funghi, Salm\xE3o Grelhado, etc."], ["matInput", "", "formControlName", "descricao", "rows", "3", "placeholder", "Ex: Risotto cremoso preparado com mix de cogumelos frescos, finalizado com parmes\xE3o e azeite trufado"], ["appearance", "outline"], ["matInput", "", "type", "number", "formControlName", "preco", "placeholder", "0.00"], [1, "upload-section"], [1, "upload-label"], [1, "required"], [1, "upload-content"], ["mat-stroked-button", "", "color", "accent", 3, "click"], ["type", "file", "hidden", "", "accept", "image/*", 3, "change"], ["class", "preview-img", 3, "src", 4, "ngIf"], [4, "ngIf"], [1, "toggle-row"], [1, "toggle-label"], ["formControlName", "disponivel", "color", "primary"], [1, "tags-section"], [1, "tags-label"], [1, "example-tags"], ["color", "primary", 3, "click"], [3, "removable", "removed", 4, "ngFor", "ngForOf"], ["placeholder", "Nova tag...", 3, "matChipInputTokenEnd", "matChipInputFor", "matChipInputSeparatorKeyCodes"], ["align", "end", 1, "dialog-actions"], ["mat-stroked-button", "", "color", "warn", 3, "click"], ["mat-flat-button", "", "color", "primary", 3, "click", "disabled"], [3, "value"], [1, "preview-img", 3, "src"], [3, "removed", "removable"], ["matChipRemove", ""]], template: function DialogItemCardapioComponent_Template(rf, ctx) {
      if (rf & 1) {
        const _r1 = \u0275\u0275getCurrentView();
        \u0275\u0275elementStart(0, "mat-dialog-content", 2)(1, "h2", 3);
        \u0275\u0275text(2);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(3, "form", 4)(4, "mat-form-field", 5)(5, "mat-label");
        \u0275\u0275text(6, "Categoria");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(7, "mat-select", 6);
        \u0275\u0275template(8, DialogItemCardapioComponent_mat_option_8_Template, 2, 2, "mat-option", 7);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(9, "mat-form-field", 5)(10, "mat-label");
        \u0275\u0275text(11, "Nome do prato");
        \u0275\u0275elementEnd();
        \u0275\u0275element(12, "input", 8);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(13, "mat-form-field", 5)(14, "mat-label");
        \u0275\u0275text(15, "Descri\xE7\xE3o");
        \u0275\u0275elementEnd();
        \u0275\u0275element(16, "textarea", 9);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(17, "mat-form-field", 10)(18, "mat-label");
        \u0275\u0275text(19, "Pre\xE7o (R$)");
        \u0275\u0275elementEnd();
        \u0275\u0275element(20, "input", 11);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(21, "div", 12)(22, "label", 13);
        \u0275\u0275text(23, " Imagem do prato ");
        \u0275\u0275elementStart(24, "span", 14);
        \u0275\u0275text(25, "*");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(26, "div", 15)(27, "button", 16);
        \u0275\u0275listener("click", function DialogItemCardapioComponent_Template_button_click_27_listener() {
          \u0275\u0275restoreView(_r1);
          const uploadInput_r3 = \u0275\u0275reference(32);
          return \u0275\u0275resetView(uploadInput_r3.click());
        });
        \u0275\u0275elementStart(28, "mat-icon");
        \u0275\u0275text(29, "upload");
        \u0275\u0275elementEnd();
        \u0275\u0275text(30, " Enviar imagem ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(31, "input", 17, 0);
        \u0275\u0275listener("change", function DialogItemCardapioComponent_Template_input_change_31_listener($event) {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.onFileSelected($event));
        });
        \u0275\u0275elementEnd();
        \u0275\u0275template(33, DialogItemCardapioComponent_img_33_Template, 1, 1, "img", 18)(34, DialogItemCardapioComponent_mat_error_34_Template, 2, 0, "mat-error", 19);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(35, "div", 20)(36, "span", 21);
        \u0275\u0275text(37, "Dispon\xEDvel");
        \u0275\u0275elementEnd();
        \u0275\u0275element(38, "mat-slide-toggle", 22);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(39, "div", 23)(40, "label", 24);
        \u0275\u0275text(41, "Tags populares:");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(42, "div", 25)(43, "mat-chip-option", 26);
        \u0275\u0275listener("click", function DialogItemCardapioComponent_Template_mat_chip_option_click_43_listener() {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.addExampleTag("Vegano"));
        });
        \u0275\u0275text(44, "Vegano");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(45, "mat-chip-option", 26);
        \u0275\u0275listener("click", function DialogItemCardapioComponent_Template_mat_chip_option_click_45_listener() {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.addExampleTag("Vegetariano"));
        });
        \u0275\u0275text(46, "Vegetariano");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(47, "mat-chip-option", 26);
        \u0275\u0275listener("click", function DialogItemCardapioComponent_Template_mat_chip_option_click_47_listener() {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.addExampleTag("Sem Gl\xFAten"));
        });
        \u0275\u0275text(48, "Sem Gl\xFAten");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(49, "mat-chip-option", 26);
        \u0275\u0275listener("click", function DialogItemCardapioComponent_Template_mat_chip_option_click_49_listener() {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.addExampleTag("Apimentado"));
        });
        \u0275\u0275text(50, "Apimentado");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(51, "mat-form-field", 5)(52, "mat-label");
        \u0275\u0275text(53, "Tags do prato");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(54, "mat-chip-grid", null, 1);
        \u0275\u0275template(56, DialogItemCardapioComponent_mat_chip_row_56_Template, 5, 2, "mat-chip-row", 27);
        \u0275\u0275elementStart(57, "input", 28);
        \u0275\u0275listener("matChipInputTokenEnd", function DialogItemCardapioComponent_Template_input_matChipInputTokenEnd_57_listener($event) {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.addTag($event));
        });
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(58, "mat-hint");
        \u0275\u0275text(59, "Pressione Enter ou v\xEDrgula para adicionar");
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(60, "mat-dialog-actions", 29)(61, "button", 30);
        \u0275\u0275listener("click", function DialogItemCardapioComponent_Template_button_click_61_listener() {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.cancelar());
        });
        \u0275\u0275text(62, "Cancelar");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(63, "button", 31);
        \u0275\u0275listener("click", function DialogItemCardapioComponent_Template_button_click_63_listener() {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.salvar());
        });
        \u0275\u0275text(64, "Salvar");
        \u0275\u0275elementEnd()();
      }
      if (rf & 2) {
        let tmp_5_0;
        let tmp_7_0;
        let tmp_8_0;
        const chipGrid_r7 = \u0275\u0275reference(55);
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate1(" ", ctx.data.modo === "criar" ? "Adicionar Item" : "Editar Item", " ");
        \u0275\u0275advance();
        \u0275\u0275property("formGroup", ctx.form);
        \u0275\u0275advance(5);
        \u0275\u0275property("ngForOf", ctx.categorias);
        \u0275\u0275advance(18);
        \u0275\u0275classProp("has-error", ((tmp_5_0 = ctx.form.get("imagemBase64")) == null ? null : tmp_5_0.touched) && ((tmp_5_0 = ctx.form.get("imagemBase64")) == null ? null : tmp_5_0.invalid));
        \u0275\u0275advance(7);
        \u0275\u0275property("ngIf", ctx.preview);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ((tmp_7_0 = ctx.form.get("imagemBase64")) == null ? null : tmp_7_0.touched) && ((tmp_7_0 = ctx.form.get("imagemBase64")) == null ? null : tmp_7_0.invalid));
        \u0275\u0275advance(22);
        \u0275\u0275property("ngForOf", (tmp_8_0 = ctx.form.get("tags")) == null ? null : tmp_8_0.value);
        \u0275\u0275advance();
        \u0275\u0275property("matChipInputFor", chipGrid_r7)("matChipInputSeparatorKeyCodes", \u0275\u0275pureFunction0(11, _c02));
        \u0275\u0275advance(6);
        \u0275\u0275property("disabled", ctx.form.invalid);
      }
    }, dependencies: [CommonModule, NgForOf, NgIf, ReactiveFormsModule, \u0275NgNoValidate, DefaultValueAccessor, NumberValueAccessor, NgControlStatus, NgControlStatusGroup, FormGroupDirective, FormControlName, MatFormFieldModule, MatFormField, MatLabel, MatHint, MatError, MatInputModule, MatInput, MatSelectModule, MatSelect, MatOption, MatSlideToggleModule, MatSlideToggle, MatButtonModule, MatButton, MatChipsModule, MatChipGrid, MatChipInput, MatChipOption, MatChipRemove, MatChipRow, MatDialogModule, MatDialogTitle, MatDialogActions, MatDialogContent, MatIconModule, MatIcon], styles: ["\n\n.dialog-content[_ngcontent-%COMP%] {\n  background: #FFFFFF;\n  padding: 20px;\n  border-radius: 12px 12px 0 0;\n  max-height: 80vh;\n  overflow-y: auto;\n  min-width: 500px;\n}\n.dialog-content[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  color: #3B221B;\n  font-size: 24px;\n  margin: 0 0 24px 0;\n}\n.dialog-form[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 16px;\n}\n.full-width[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.example-tags[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 8px;\n  flex-wrap: wrap;\n  margin-bottom: 16px;\n}\n.image-upload[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n  margin: 16px 0;\n}\n.image-upload[_ngcontent-%COMP%]   .upload-button[_ngcontent-%COMP%] {\n  align-self: flex-start;\n}\n.image-upload[_ngcontent-%COMP%]   .preview-image[_ngcontent-%COMP%] {\n  max-width: 200px;\n  max-height: 200px;\n  object-fit: cover;\n  border-radius: 4px;\n}\nmat-dialog-actions[_ngcontent-%COMP%] {\n  padding: 16px 0 0;\n  margin: 0;\n}\n.upload-section[_ngcontent-%COMP%]   .upload-label[_ngcontent-%COMP%] {\n  display: block;\n  color: #3B221B;\n  margin-bottom: 8px;\n  font-size: 14px;\n}\n.upload-section[_ngcontent-%COMP%]   .upload-label[_ngcontent-%COMP%]   .required[_ngcontent-%COMP%] {\n  color: #DA4A24;\n}\n.upload-section[_ngcontent-%COMP%]   .upload-content[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 16px;\n  margin: 8px 0;\n  padding: 8px;\n  border: 1px dashed rgba(59, 34, 27, 0.2);\n  border-radius: 8px;\n  transition: all 0.3s ease;\n}\n.upload-section[_ngcontent-%COMP%]   .upload-content.has-error[_ngcontent-%COMP%] {\n  border-color: #DA4A24;\n  background-color: rgba(218, 74, 36, 0.05);\n}\n.upload-section[_ngcontent-%COMP%]   .upload-content[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  background-color: #F6BD38;\n  color: #3B221B;\n  border: none;\n}\n.upload-section[_ngcontent-%COMP%]   .upload-content[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover {\n  background-color: rgb(244.8966346154, 180.9086538462, 31.6033653846);\n}\n.upload-section[_ngcontent-%COMP%]   .upload-content[_ngcontent-%COMP%]   .preview-img[_ngcontent-%COMP%] {\n  width: 64px;\n  height: 64px;\n  object-fit: cover;\n  border-radius: 8px;\n  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);\n  background-color: #5C7028;\n}\n.upload-section[_ngcontent-%COMP%]   .upload-content[_ngcontent-%COMP%]   mat-error[_ngcontent-%COMP%] {\n  color: #DA4A24;\n  font-size: 12px;\n}\n.toggle-row[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  margin: 8px 0;\n}\n.toggle-row[_ngcontent-%COMP%]   .toggle-label[_ngcontent-%COMP%] {\n  color: #3B221B;\n  font-size: 14px;\n}\n.tags-section[_ngcontent-%COMP%]   .tags-label[_ngcontent-%COMP%] {\n  display: block;\n  color: #3B221B;\n  margin-bottom: 8px;\n  font-size: 14px;\n}\n  .mdc-text-field--outlined {\n  --mdc-outlined-text-field-outline-color: rgba(59, 34, 27, 0.2);\n  --mdc-outlined-text-field-focus-outline-color: #DA4A24;\n  --mdc-outlined-text-field-hover-outline-color: rgba(59, 34, 27, 0.4);\n  --mdc-outlined-text-field-label-text-color: rgba(59, 34, 27, 0.6);\n  --mdc-outlined-text-field-focus-label-text-color: #DA4A24;\n}\n  .mat-mdc-input-element, \n  .mat-mdc-select-value-text, \n  .mdc-floating-label {\n  color: #3B221B !important;\n}\n  .mat-mdc-chip-option.mdc-evolution-chip--selected {\n  background-color: #F6BD38 !important;\n}\n  .mat-mdc-chip-option.mdc-evolution-chip--selected .mdc-evolution-chip__text-label {\n  color: #3B221B !important;\n}\n  .mat-mdc-chip-row {\n  background-color: #F6BD38 !important;\n}\n  .mat-mdc-chip-row .mdc-evolution-chip__text-label {\n  color: #3B221B !important;\n}\n  .mat-mdc-chip-row .mat-mdc-chip-remove {\n  color: #3B221B;\n}\n  .mat-mdc-chip-row:hover {\n  background-color: rgb(244.8966346154, 180.9086538462, 31.6033653846) !important;\n}\n  .mat-mdc-slide-toggle .mdc-switch {\n  --mdc-switch-selected-focus-state-layer-color: rgba(246, 189, 56, 0.2);\n  --mdc-switch-selected-pressed-state-layer-color: rgba(246, 189, 56, 0.2);\n  --mdc-switch-selected-hover-state-layer-color: rgba(246, 189, 56, 0.2);\n  --mdc-switch-unselected-focus-state-layer-color: rgba(59, 34, 27, 0.2);\n  --mdc-switch-unselected-pressed-state-layer-color: rgba(59, 34, 27, 0.2);\n  --mdc-switch-unselected-hover-state-layer-color: rgba(59, 34, 27, 0.2);\n  --mdc-switch-selected-track-color: #F6BD38;\n  --mdc-switch-selected-handle-color: #DA4A24;\n  --mdc-switch-unselected-track-color: rgba(59, 34, 27, 0.2);\n  --mdc-switch-unselected-handle-color: #3B221B;\n  --mdc-switch-selected-focus-track-color: #F6BD38;\n  --mdc-switch-selected-hover-track-color: #F6BD38;\n  --mdc-switch-selected-pressed-track-color: #F6BD38;\n}\n  .mat-mdc-autocomplete-panel {\n  background-color: #FFFFFF !important;\n  border: 1px solid rgba(246, 189, 56, 0.3);\n}\n  .mat-mdc-autocomplete-panel .mat-mdc-option {\n  color: #3B221B !important;\n}\n  .mat-mdc-autocomplete-panel .mat-mdc-option:hover {\n  background-color: rgba(246, 189, 56, 0.1) !important;\n}\n  .mat-mdc-autocomplete-panel .mat-mdc-option.nova-categoria {\n  border-top: 1px solid rgba(246, 189, 56, 0.3);\n}\n  .mat-mdc-autocomplete-panel .mat-mdc-option.nova-categoria .mat-icon {\n  margin-right: 8px;\n  color: #DA4A24;\n}\n  .mat-mdc-form-field-appearance-outline .mdc-notched-outline__leading, \n  .mat-mdc-form-field-appearance-outline .mdc-notched-outline__notch, \n  .mat-mdc-form-field-appearance-outline .mdc-notched-outline__trailing {\n  border-color: rgba(59, 34, 27, 0.2) !important;\n}\n  .mat-mdc-form-field-appearance-outline:hover .mdc-notched-outline__leading, \n  .mat-mdc-form-field-appearance-outline:hover .mdc-notched-outline__notch, \n  .mat-mdc-form-field-appearance-outline:hover .mdc-notched-outline__trailing {\n  border-color: #F6BD38 !important;\n}\n  .mat-mdc-option.mdc-list-item--selected {\n  background-color: rgba(246, 189, 56, 0.1) !important;\n}\n  .mat-mdc-option:hover {\n  background-color: rgba(246, 189, 56, 0.05) !important;\n}\n  .mat-mdc-input-element, \n  .mat-mdc-select-value-text, \n  .mdc-floating-label, \n  .mat-mdc-form-field-label, \n  .mat-mdc-form-field-infix::placeholder {\n  color: #3B221B !important;\n  opacity: 1 !important;\n}\n  .mat-mdc-form-field-appearance-outline .mdc-notched-outline__leading, \n  .mat-mdc-form-field-appearance-outline .mdc-notched-outline__notch, \n  .mat-mdc-form-field-appearance-outline .mdc-notched-outline__trailing {\n  border-color: #3B221B !important;\n}\n  .mat-mdc-form-field-appearance-outline.mat-focused .mdc-notched-outline__leading, \n  .mat-mdc-form-field-appearance-outline.mat-focused .mdc-notched-outline__notch, \n  .mat-mdc-form-field-appearance-outline.mat-focused .mdc-notched-outline__trailing {\n  border-color: #3B221B !important;\n}\n  .mat-mdc-form-field-appearance-outline:hover .mdc-notched-outline__leading, \n  .mat-mdc-form-field-appearance-outline:hover .mdc-notched-outline__notch, \n  .mat-mdc-form-field-appearance-outline:hover .mdc-notched-outline__trailing {\n  border-color: #3B221B !important;\n}\n  .mat-mdc-form-field-label, \n  .mdc-floating-label {\n  color: #3B221B !important;\n}\n  .mat-mdc-form-field-label.mdc-floating-label--float-above {\n  color: #3B221B !important;\n}\n.dialog-actions[_ngcontent-%COMP%] {\n  padding: 16px 24px;\n  background: #FFFFFF;\n  border-radius: 0 0 12px 12px;\n  gap: 8px;\n}\n.dialog-actions[_ngcontent-%COMP%]   button[color=primary][_ngcontent-%COMP%] {\n  background-color: #F6BD38;\n  color: #3B221B;\n}\n.dialog-actions[_ngcontent-%COMP%]   button[color=primary][_ngcontent-%COMP%]:hover {\n  background-color: rgb(244.8966346154, 180.9086538462, 31.6033653846);\n}\n.dialog-actions[_ngcontent-%COMP%]   button[color=primary][disabled][_ngcontent-%COMP%] {\n  background-color: rgba(246, 189, 56, 0.5);\n  color: rgba(59, 34, 27, 0.5);\n}\n.dialog-actions[_ngcontent-%COMP%]   button[color=warn][_ngcontent-%COMP%] {\n  color: #DA4A24;\n  border-color: #DA4A24;\n}\n.dialog-actions[_ngcontent-%COMP%]   button[color=warn][_ngcontent-%COMP%]:hover {\n  background-color: rgba(218, 74, 36, 0.1);\n}\n[_nghost-%COMP%]   .mat-mdc-form-field[_ngcontent-%COMP%] {\n  width: 100%;\n}\n  .mat-mdc-form-field-label, \n  .mdc-floating-label, \n  .mat-mdc-input-element, \n  .mat-mdc-select-value-text, \n  .mat-mdc-form-field-infix::placeholder {\n  color: #3B221B !important;\n  opacity: 1 !important;\n}\n/*# sourceMappingURL=dialog-item-cardapio.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DialogItemCardapioComponent, [{
    type: Component,
    args: [{ selector: "app-dialog-item-cardapio", standalone: true, imports: [
      CommonModule,
      ReactiveFormsModule,
      MatFormFieldModule,
      MatInputModule,
      MatSelectModule,
      MatSlideToggleModule,
      MatButtonModule,
      MatChipsModule,
      MatDialogModule,
      MatIconModule
    ], template: `<mat-dialog-content class="dialog-content">\r
  <h2 mat-dialog-title>\r
    {{ data.modo === 'criar' ? 'Adicionar Item' : 'Editar Item' }}\r
  </h2>\r
\r
  <form [formGroup]="form" class="dialog-form">\r
    <mat-form-field appearance="outline" class="full-width">\r
      <mat-label>Categoria</mat-label>\r
      <mat-select formControlName="categoriaInput">\r
        <mat-option *ngFor="let categoria of categorias" [value]="categoria">\r
          {{ categoria.nome }}\r
        </mat-option>\r
      </mat-select>\r
    </mat-form-field>\r
\r
    <mat-form-field appearance="outline" class="full-width">\r
      <mat-label>Nome do prato</mat-label>\r
      <input matInput \r
             formControlName="nome" \r
             placeholder="Ex: Risotto de Funghi, Salm\xE3o Grelhado, etc." />\r
    </mat-form-field>\r
\r
    <mat-form-field appearance="outline" class="full-width">\r
      <mat-label>Descri\xE7\xE3o</mat-label>\r
      <textarea matInput \r
                formControlName="descricao" \r
                rows="3" \r
                placeholder="Ex: Risotto cremoso preparado com mix de cogumelos frescos, finalizado com parmes\xE3o e azeite trufado"></textarea>\r
    </mat-form-field>\r
\r
    <mat-form-field appearance="outline">\r
      <mat-label>Pre\xE7o (R$)</mat-label>\r
      <input matInput \r
             type="number" \r
             formControlName="preco" \r
             placeholder="0.00" />\r
    </mat-form-field>\r
\r
    <div class="upload-section">\r
      <label class="upload-label">\r
        Imagem do prato <span class="required">*</span>\r
      </label>\r
      <div class="upload-content" [class.has-error]="form.get('imagemBase64')?.touched && form.get('imagemBase64')?.invalid">\r
        <button mat-stroked-button color="accent" (click)="uploadInput.click()">\r
          <mat-icon>upload</mat-icon> Enviar imagem\r
        </button>\r
        <input #uploadInput type="file" hidden (change)="onFileSelected($event)" accept="image/*" />\r
        <img *ngIf="preview" [src]="preview" class="preview-img" />\r
        <mat-error *ngIf="form.get('imagemBase64')?.touched && form.get('imagemBase64')?.invalid">\r
          Imagem \xE9 obrigat\xF3ria\r
        </mat-error>\r
      </div>\r
    </div>\r
\r
    <div class="toggle-row">\r
      <span class="toggle-label">Dispon\xEDvel</span>\r
      <mat-slide-toggle formControlName="disponivel" color="primary">\r
      </mat-slide-toggle>\r
    </div>\r
\r
    <div class="tags-section">\r
      <label class="tags-label">Tags populares:</label>\r
      <div class="example-tags">\r
        <mat-chip-option (click)="addExampleTag('Vegano')" color="primary">Vegano</mat-chip-option>\r
        <mat-chip-option (click)="addExampleTag('Vegetariano')" color="primary">Vegetariano</mat-chip-option>\r
        <mat-chip-option (click)="addExampleTag('Sem Gl\xFAten')" color="primary">Sem Gl\xFAten</mat-chip-option>\r
        <mat-chip-option (click)="addExampleTag('Apimentado')" color="primary">Apimentado</mat-chip-option>\r
      </div>\r
    </div>\r
\r
    <mat-form-field appearance="outline" class="full-width">\r
      <mat-label>Tags do prato</mat-label>\r
      <mat-chip-grid #chipGrid>\r
        <mat-chip-row\r
          *ngFor="let tag of form.get('tags')?.value"\r
          [removable]="true"\r
          (removed)="removeTag(tag)">\r
          {{tag}}\r
          <button matChipRemove>\r
            <mat-icon>cancel</mat-icon>\r
          </button>\r
        </mat-chip-row>\r
        <input\r
          placeholder="Nova tag..."\r
          [matChipInputFor]="chipGrid"\r
          [matChipInputSeparatorKeyCodes]="[13, 188]"\r
          (matChipInputTokenEnd)="addTag($event)"/>\r
      </mat-chip-grid>\r
      <mat-hint>Pressione Enter ou v\xEDrgula para adicionar</mat-hint>\r
    </mat-form-field>\r
  </form>\r
</mat-dialog-content>\r
\r
<mat-dialog-actions align="end" class="dialog-actions">\r
  <button mat-stroked-button color="warn" (click)="cancelar()">Cancelar</button>\r
  <button mat-flat-button color="primary" [disabled]="form.invalid" (click)="salvar()">Salvar</button>\r
</mat-dialog-actions>\r
`, styles: ["/* src/app/pages/cadastro-cardapio/dialog-item-cardapio/dialog-item-cardapio.component.scss */\n.dialog-content {\n  background: #FFFFFF;\n  padding: 20px;\n  border-radius: 12px 12px 0 0;\n  max-height: 80vh;\n  overflow-y: auto;\n  min-width: 500px;\n}\n.dialog-content h2 {\n  color: #3B221B;\n  font-size: 24px;\n  margin: 0 0 24px 0;\n}\n.dialog-form {\n  display: flex;\n  flex-direction: column;\n  gap: 16px;\n}\n.full-width {\n  width: 100%;\n}\n.example-tags {\n  display: flex;\n  gap: 8px;\n  flex-wrap: wrap;\n  margin-bottom: 16px;\n}\n.image-upload {\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n  margin: 16px 0;\n}\n.image-upload .upload-button {\n  align-self: flex-start;\n}\n.image-upload .preview-image {\n  max-width: 200px;\n  max-height: 200px;\n  object-fit: cover;\n  border-radius: 4px;\n}\nmat-dialog-actions {\n  padding: 16px 0 0;\n  margin: 0;\n}\n.upload-section .upload-label {\n  display: block;\n  color: #3B221B;\n  margin-bottom: 8px;\n  font-size: 14px;\n}\n.upload-section .upload-label .required {\n  color: #DA4A24;\n}\n.upload-section .upload-content {\n  display: flex;\n  align-items: center;\n  gap: 16px;\n  margin: 8px 0;\n  padding: 8px;\n  border: 1px dashed rgba(59, 34, 27, 0.2);\n  border-radius: 8px;\n  transition: all 0.3s ease;\n}\n.upload-section .upload-content.has-error {\n  border-color: #DA4A24;\n  background-color: rgba(218, 74, 36, 0.05);\n}\n.upload-section .upload-content button {\n  background-color: #F6BD38;\n  color: #3B221B;\n  border: none;\n}\n.upload-section .upload-content button:hover {\n  background-color: rgb(244.8966346154, 180.9086538462, 31.6033653846);\n}\n.upload-section .upload-content .preview-img {\n  width: 64px;\n  height: 64px;\n  object-fit: cover;\n  border-radius: 8px;\n  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);\n  background-color: #5C7028;\n}\n.upload-section .upload-content mat-error {\n  color: #DA4A24;\n  font-size: 12px;\n}\n.toggle-row {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  margin: 8px 0;\n}\n.toggle-row .toggle-label {\n  color: #3B221B;\n  font-size: 14px;\n}\n.tags-section .tags-label {\n  display: block;\n  color: #3B221B;\n  margin-bottom: 8px;\n  font-size: 14px;\n}\n::ng-deep .mdc-text-field--outlined {\n  --mdc-outlined-text-field-outline-color: rgba(59, 34, 27, 0.2);\n  --mdc-outlined-text-field-focus-outline-color: #DA4A24;\n  --mdc-outlined-text-field-hover-outline-color: rgba(59, 34, 27, 0.4);\n  --mdc-outlined-text-field-label-text-color: rgba(59, 34, 27, 0.6);\n  --mdc-outlined-text-field-focus-label-text-color: #DA4A24;\n}\n::ng-deep .mat-mdc-input-element,\n::ng-deep .mat-mdc-select-value-text,\n::ng-deep .mdc-floating-label {\n  color: #3B221B !important;\n}\n::ng-deep .mat-mdc-chip-option.mdc-evolution-chip--selected {\n  background-color: #F6BD38 !important;\n}\n::ng-deep .mat-mdc-chip-option.mdc-evolution-chip--selected .mdc-evolution-chip__text-label {\n  color: #3B221B !important;\n}\n::ng-deep .mat-mdc-chip-row {\n  background-color: #F6BD38 !important;\n}\n::ng-deep .mat-mdc-chip-row .mdc-evolution-chip__text-label {\n  color: #3B221B !important;\n}\n::ng-deep .mat-mdc-chip-row .mat-mdc-chip-remove {\n  color: #3B221B;\n}\n::ng-deep .mat-mdc-chip-row:hover {\n  background-color: rgb(244.8966346154, 180.9086538462, 31.6033653846) !important;\n}\n::ng-deep .mat-mdc-slide-toggle .mdc-switch {\n  --mdc-switch-selected-focus-state-layer-color: rgba(246, 189, 56, 0.2);\n  --mdc-switch-selected-pressed-state-layer-color: rgba(246, 189, 56, 0.2);\n  --mdc-switch-selected-hover-state-layer-color: rgba(246, 189, 56, 0.2);\n  --mdc-switch-unselected-focus-state-layer-color: rgba(59, 34, 27, 0.2);\n  --mdc-switch-unselected-pressed-state-layer-color: rgba(59, 34, 27, 0.2);\n  --mdc-switch-unselected-hover-state-layer-color: rgba(59, 34, 27, 0.2);\n  --mdc-switch-selected-track-color: #F6BD38;\n  --mdc-switch-selected-handle-color: #DA4A24;\n  --mdc-switch-unselected-track-color: rgba(59, 34, 27, 0.2);\n  --mdc-switch-unselected-handle-color: #3B221B;\n  --mdc-switch-selected-focus-track-color: #F6BD38;\n  --mdc-switch-selected-hover-track-color: #F6BD38;\n  --mdc-switch-selected-pressed-track-color: #F6BD38;\n}\n::ng-deep .mat-mdc-autocomplete-panel {\n  background-color: #FFFFFF !important;\n  border: 1px solid rgba(246, 189, 56, 0.3);\n}\n::ng-deep .mat-mdc-autocomplete-panel .mat-mdc-option {\n  color: #3B221B !important;\n}\n::ng-deep .mat-mdc-autocomplete-panel .mat-mdc-option:hover {\n  background-color: rgba(246, 189, 56, 0.1) !important;\n}\n::ng-deep .mat-mdc-autocomplete-panel .mat-mdc-option.nova-categoria {\n  border-top: 1px solid rgba(246, 189, 56, 0.3);\n}\n::ng-deep .mat-mdc-autocomplete-panel .mat-mdc-option.nova-categoria .mat-icon {\n  margin-right: 8px;\n  color: #DA4A24;\n}\n::ng-deep .mat-mdc-form-field-appearance-outline .mdc-notched-outline__leading,\n::ng-deep .mat-mdc-form-field-appearance-outline .mdc-notched-outline__notch,\n::ng-deep .mat-mdc-form-field-appearance-outline .mdc-notched-outline__trailing {\n  border-color: rgba(59, 34, 27, 0.2) !important;\n}\n::ng-deep .mat-mdc-form-field-appearance-outline:hover .mdc-notched-outline__leading,\n::ng-deep .mat-mdc-form-field-appearance-outline:hover .mdc-notched-outline__notch,\n::ng-deep .mat-mdc-form-field-appearance-outline:hover .mdc-notched-outline__trailing {\n  border-color: #F6BD38 !important;\n}\n::ng-deep .mat-mdc-option.mdc-list-item--selected {\n  background-color: rgba(246, 189, 56, 0.1) !important;\n}\n::ng-deep .mat-mdc-option:hover {\n  background-color: rgba(246, 189, 56, 0.05) !important;\n}\n::ng-deep .mat-mdc-input-element,\n::ng-deep .mat-mdc-select-value-text,\n::ng-deep .mdc-floating-label,\n::ng-deep .mat-mdc-form-field-label,\n::ng-deep .mat-mdc-form-field-infix::placeholder {\n  color: #3B221B !important;\n  opacity: 1 !important;\n}\n::ng-deep .mat-mdc-form-field-appearance-outline .mdc-notched-outline__leading,\n::ng-deep .mat-mdc-form-field-appearance-outline .mdc-notched-outline__notch,\n::ng-deep .mat-mdc-form-field-appearance-outline .mdc-notched-outline__trailing {\n  border-color: #3B221B !important;\n}\n::ng-deep .mat-mdc-form-field-appearance-outline.mat-focused .mdc-notched-outline__leading,\n::ng-deep .mat-mdc-form-field-appearance-outline.mat-focused .mdc-notched-outline__notch,\n::ng-deep .mat-mdc-form-field-appearance-outline.mat-focused .mdc-notched-outline__trailing {\n  border-color: #3B221B !important;\n}\n::ng-deep .mat-mdc-form-field-appearance-outline:hover .mdc-notched-outline__leading,\n::ng-deep .mat-mdc-form-field-appearance-outline:hover .mdc-notched-outline__notch,\n::ng-deep .mat-mdc-form-field-appearance-outline:hover .mdc-notched-outline__trailing {\n  border-color: #3B221B !important;\n}\n::ng-deep .mat-mdc-form-field-label,\n::ng-deep .mdc-floating-label {\n  color: #3B221B !important;\n}\n::ng-deep .mat-mdc-form-field-label.mdc-floating-label--float-above {\n  color: #3B221B !important;\n}\n.dialog-actions {\n  padding: 16px 24px;\n  background: #FFFFFF;\n  border-radius: 0 0 12px 12px;\n  gap: 8px;\n}\n.dialog-actions button[color=primary] {\n  background-color: #F6BD38;\n  color: #3B221B;\n}\n.dialog-actions button[color=primary]:hover {\n  background-color: rgb(244.8966346154, 180.9086538462, 31.6033653846);\n}\n.dialog-actions button[color=primary][disabled] {\n  background-color: rgba(246, 189, 56, 0.5);\n  color: rgba(59, 34, 27, 0.5);\n}\n.dialog-actions button[color=warn] {\n  color: #DA4A24;\n  border-color: #DA4A24;\n}\n.dialog-actions button[color=warn]:hover {\n  background-color: rgba(218, 74, 36, 0.1);\n}\n:host .mat-mdc-form-field {\n  width: 100%;\n}\n::ng-deep .mat-mdc-form-field-label,\n::ng-deep .mdc-floating-label,\n::ng-deep .mat-mdc-input-element,\n::ng-deep .mat-mdc-select-value-text,\n::ng-deep .mat-mdc-form-field-infix::placeholder {\n  color: #3B221B !important;\n  opacity: 1 !important;\n}\n/*# sourceMappingURL=dialog-item-cardapio.component.css.map */\n"] }]
  }], () => [], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(DialogItemCardapioComponent, { className: "DialogItemCardapioComponent", filePath: "src/app/pages/cadastro-cardapio/dialog-item-cardapio/dialog-item-cardapio.component.ts", lineNumber: 44 });
})();

// src/app/pages/cadastro-cardapio/cadastro-cardapio.component.ts
var import_sweetalert22 = __toESM(require_sweetalert2_all());
function CadastroCardapioComponent_span_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 8);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.mensagemSucesso);
  }
}
function CadastroCardapioComponent_ng_container_11_div_1_mat_card_4_span_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 28);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const tag_r3 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", tag_r3.tag || tag_r3, " ");
  }
}
function CadastroCardapioComponent_ng_container_11_div_1_mat_card_4_span_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 29);
    \u0275\u0275text(1, "Indispon\xEDvel");
    \u0275\u0275elementEnd();
  }
}
function CadastroCardapioComponent_ng_container_11_div_1_mat_card_4_p_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 30);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const item_r4 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(item_r4.descricao);
  }
}
function CadastroCardapioComponent_ng_container_11_div_1_mat_card_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "mat-card", 14)(1, "div", 15);
    \u0275\u0275element(2, "img", 16);
    \u0275\u0275elementStart(3, "div", 17);
    \u0275\u0275template(4, CadastroCardapioComponent_ng_container_11_div_1_mat_card_4_span_4_Template, 2, 1, "span", 18);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 19);
    \u0275\u0275template(6, CadastroCardapioComponent_ng_container_11_div_1_mat_card_4_span_6_Template, 2, 0, "span", 20);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "mat-card-content")(8, "div", 21)(9, "h3");
    \u0275\u0275text(10);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "mat-slide-toggle", 22);
    \u0275\u0275listener("change", function CadastroCardapioComponent_ng_container_11_div_1_mat_card_4_Template_mat_slide_toggle_change_11_listener() {
      const item_r4 = \u0275\u0275restoreView(_r2).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r0.toggleDisponibilidade(item_r4));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275template(12, CadastroCardapioComponent_ng_container_11_div_1_mat_card_4_p_12_Template, 2, 1, "p", 23);
    \u0275\u0275elementStart(13, "div", 24)(14, "p", 25);
    \u0275\u0275text(15);
    \u0275\u0275pipe(16, "number");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(17, "button", 26)(18, "mat-icon");
    \u0275\u0275text(19, "more_vert");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(20, "mat-menu", null, 0)(22, "button", 27);
    \u0275\u0275listener("click", function CadastroCardapioComponent_ng_container_11_div_1_mat_card_4_Template_button_click_22_listener() {
      const item_r4 = \u0275\u0275restoreView(_r2).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r0.editar(item_r4));
    });
    \u0275\u0275elementStart(23, "mat-icon");
    \u0275\u0275text(24, "edit");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "span");
    \u0275\u0275text(26, "Editar");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(27, "button", 27);
    \u0275\u0275listener("click", function CadastroCardapioComponent_ng_container_11_div_1_mat_card_4_Template_button_click_27_listener() {
      const item_r4 = \u0275\u0275restoreView(_r2).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r0.confirmarRemocao(item_r4));
    });
    \u0275\u0275elementStart(28, "mat-icon");
    \u0275\u0275text(29, "delete");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(30, "span");
    \u0275\u0275text(31, "Remover");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const item_r4 = ctx.$implicit;
    const menu_r5 = \u0275\u0275reference(21);
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275classProp("indisponivel", !item_r4.disponivel);
    \u0275\u0275advance(2);
    \u0275\u0275propertyInterpolate("alt", item_r4.nome);
    \u0275\u0275property("src", item_r4.imagem || ctx_r0.defaultImg, \u0275\u0275sanitizeUrl);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", item_r4.tags);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", !item_r4.disponivel);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(item_r4.nome);
    \u0275\u0275advance();
    \u0275\u0275property("checked", item_r4.disponivel)("matTooltip", item_r4.disponivel ? "Item dispon\xEDvel" : "Item indispon\xEDvel");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", item_r4.descricao);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("R$ ", \u0275\u0275pipeBind2(16, 12, item_r4.preco, "1.2-2"), "");
    \u0275\u0275advance(2);
    \u0275\u0275property("matMenuTriggerFor", menu_r5);
  }
}
function CadastroCardapioComponent_ng_container_11_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 10)(1, "h3", 11);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 12);
    \u0275\u0275template(4, CadastroCardapioComponent_ng_container_11_div_1_mat_card_4_Template, 32, 15, "mat-card", 13);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const categoria_r6 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(categoria_r6.nome);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", categoria_r6.itens);
  }
}
function CadastroCardapioComponent_ng_container_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, CadastroCardapioComponent_ng_container_11_div_1_Template, 5, 2, "div", 9);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const categoria_r6 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", categoria_r6.itens.length > 0);
  }
}
var CadastroCardapioComponent = class _CadastroCardapioComponent {
  constructor() {
    this.service = inject(CardapioService);
    this.dialog = inject(MatDialog);
    this.toastr = inject(ToastrService);
    this.itens = [];
    this.defaultImg = "assets/png/placeholder.png";
    this.isLoading = false;
    this.categorias = [
      { id: "1", nome: "Entradas" },
      { id: "2", nome: "Acompanhamento" },
      { id: "3", nome: "Pratos Principais" },
      { id: "4", nome: "Sobremesas" },
      { id: "5", nome: "Bebidas" }
    ];
    this.categoriasComItens = [];
    this.mensagemSucesso = "";
  }
  ngOnInit() {
    this.carregarItens();
  }
  carregarItens() {
    this.service.listarItens().subscribe({
      next: (itens) => {
        this.itens = itens.map((item) => __spreadProps(__spreadValues({}, item), {
          categoria: typeof item.categoria === "string" ? { nome: item.categoria } : item.categoria,
          tags: (item.tags || []).map((t) => typeof t === "string" ? { tag: t } : t),
          imagem: item.imagem && !item.imagem.startsWith("http") ? `${environment.apiUrl}${item.imagem}` : item.imagem
        }));
        this.atualizarCategoriasComItens();
      },
      error: (erro) => {
        console.warn("Nenhum item carregado ou erro no backend:", erro);
        this.itens = [];
        this.atualizarCategoriasComItens();
      }
    });
  }
  atualizarCategoriasComItens() {
    this.categoriasComItens = this.categorias.map((cat) => __spreadProps(__spreadValues({}, cat), {
      itens: this.itens.filter((item) => item.categoria && item.categoria.nome === cat.nome)
    }));
  }
  atualizarItens(novoItens) {
    this.itens = novoItens;
    this.atualizarCategoriasComItens();
  }
  adicionar() {
    const dialogRef = this.dialog.open(DialogItemCardapioComponent, {
      width: "600px",
      data: { modo: "criar" }
    });
    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        const novoItem = __spreadProps(__spreadValues({}, result), {
          categoria: typeof result.categoria === "string" ? { nome: result.categoria } : result.categoria,
          tags: (result.tags || []).map((t) => typeof t === "string" ? { tag: t } : t)
        });
        this.itens.push(novoItem);
        this.atualizarCategoriasComItens();
        this.toastr.success("Item adicionado com sucesso!");
      }
    });
  }
  editar(item) {
    const dialogRef = this.dialog.open(DialogItemCardapioComponent, {
      width: "600px",
      data: { modo: "editar", item }
    });
    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.carregarItens();
      }
    });
  }
  toggleDisponibilidade(item) {
    if (!item.id)
      return;
    const itemAtualizado = __spreadProps(__spreadValues({}, item), { disponivel: !item.disponivel });
    this.service.atualizarItem(item.id, itemAtualizado).subscribe({
      next: () => {
        this.carregarItens();
        this.toastr.success("Disponibilidade atualizada!");
      },
      error: () => {
        this.toastr.error("N\xE3o foi poss\xEDvel atualizar a disponibilidade.");
      }
    });
  }
  confirmarRemocao(item) {
    if (!item.id) {
      import_sweetalert22.default.fire({
        title: "Erro!",
        text: "Item inv\xE1lido para remo\xE7\xE3o.",
        icon: "error",
        confirmButtonColor: "#F6BD38"
      });
      return;
    }
    import_sweetalert22.default.fire({
      title: "Tem certeza?",
      text: `Deseja remover "${item.nome}" do card\xE1pio?`,
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#DA4A24",
      cancelButtonColor: "#3B221B",
      confirmButtonText: "Sim, remover",
      cancelButtonText: "Cancelar"
    }).then((result) => {
      if (result.isConfirmed) {
        this.service.removerItem(item.id).subscribe({
          next: () => {
            this.carregarItens();
            import_sweetalert22.default.fire({
              title: "Removido!",
              text: "Item removido com sucesso.",
              icon: "success",
              confirmButtonColor: "#F6BD38"
            });
          },
          error: (erro) => {
            console.error("Erro ao remover item:", erro);
            import_sweetalert22.default.fire({
              title: "Erro!",
              text: "N\xE3o foi poss\xEDvel remover o item.",
              icon: "error",
              confirmButtonColor: "#F6BD38"
            });
          }
        });
      }
    });
  }
  static {
    this.\u0275fac = function CadastroCardapioComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _CadastroCardapioComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _CadastroCardapioComponent, selectors: [["app-cadastro-cardapio"]], decls: 12, vars: 2, consts: [["menu", "matMenu"], [1, "container-rounded"], [1, "top-bar"], [1, "title-section"], [1, "menu-icon"], ["mat-fab", "", "color", "primary", "aria-label", "Adicionar item", "matTooltip", "Adicionar novo item ao card\xE1pio", "matTooltipClass", "tavola-tooltip", 1, "fab-add", 3, "click"], ["class", "mensagem-sucesso", 4, "ngIf"], [4, "ngFor", "ngForOf"], [1, "mensagem-sucesso"], ["class", "categoria-section", 4, "ngIf"], [1, "categoria-section"], [1, "categoria-titulo"], [1, "grid"], ["class", "card-item", 3, "indisponivel", 4, "ngFor", "ngForOf"], [1, "card-item"], [1, "card-image"], ["mat-card-image", "", 3, "src", "alt"], [1, "card-tags"], ["class", "tag", 4, "ngFor", "ngForOf"], [1, "status-badges"], ["class", "badge indisponivel", 4, "ngIf"], [1, "card-header"], ["color", "primary", "matTooltipClass", "tavola-tooltip", 3, "change", "checked", "matTooltip"], ["class", "descricao", 4, "ngIf"], [1, "card-footer"], [1, "preco"], ["mat-icon-button", "", "matTooltip", "Mais op\xE7\xF5es", "matTooltipClass", "tavola-tooltip", 1, "more-button", 3, "matMenuTriggerFor"], ["mat-menu-item", "", 3, "click"], [1, "tag"], [1, "badge", "indisponivel"], [1, "descricao"]], template: function CadastroCardapioComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 1)(1, "div", 2)(2, "div", 3)(3, "mat-icon", 4);
        \u0275\u0275text(4, "restaurant_menu");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(5, "h2");
        \u0275\u0275text(6, "Cadastro de Card\xE1pio");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(7, "button", 5);
        \u0275\u0275listener("click", function CadastroCardapioComponent_Template_button_click_7_listener() {
          return ctx.adicionar();
        });
        \u0275\u0275elementStart(8, "mat-icon");
        \u0275\u0275text(9, "add");
        \u0275\u0275elementEnd()()();
        \u0275\u0275template(10, CadastroCardapioComponent_span_10_Template, 2, 1, "span", 6)(11, CadastroCardapioComponent_ng_container_11_Template, 2, 1, "ng-container", 7);
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        \u0275\u0275advance(10);
        \u0275\u0275property("ngIf", ctx.mensagemSucesso);
        \u0275\u0275advance();
        \u0275\u0275property("ngForOf", ctx.categoriasComItens);
      }
    }, dependencies: [
      CommonModule,
      NgForOf,
      NgIf,
      DecimalPipe,
      MatCardModule,
      MatCard,
      MatCardContent,
      MatCardImage,
      MatIconModule,
      MatIcon,
      MatButtonModule,
      MatIconButton,
      MatFabButton,
      MatMenuModule,
      MatMenu,
      MatMenuItem,
      MatMenuTrigger,
      MatDialogModule,
      MatSlideToggleModule,
      MatSlideToggle,
      MatTooltipModule,
      MatTooltip
    ], styles: ["\n\n[_nghost-%COMP%] {\n  display: block;\n  background: #ebe8e2;\n  min-height: 100vh;\n}\n.top-bar[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 16px 24px;\n}\n.top-bar[_ngcontent-%COMP%]   .title-section[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n}\n.top-bar[_ngcontent-%COMP%]   .title-section[_ngcontent-%COMP%]   .menu-icon[_ngcontent-%COMP%] {\n  color: #DA4A24;\n  font-size: 28px;\n  width: 28px;\n  height: 28px;\n}\n.top-bar[_ngcontent-%COMP%]   .title-section[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  color: #3B221B;\n  font-size: 24px;\n  margin: 0;\n}\n.fab-add[_ngcontent-%COMP%] {\n  background-color: #F6BD38 !important;\n  color: #3B221B !important;\n  border-radius: 8px !important;\n  width: 48px !important;\n  height: 48px !important;\n  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);\n}\n.fab-add[_ngcontent-%COMP%]:hover {\n  background-color: rgb(244.8966346154, 180.9086538462, 31.6033653846) !important;\n}\n.grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));\n  gap: 24px;\n  padding: 0 24px 24px;\n}\n.card-item[_ngcontent-%COMP%] {\n  background: #FFF;\n  border-radius: 16px;\n  overflow: hidden;\n  transition: transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out;\n  border: 1px solid rgba(59, 34, 27, 0.1);\n  position: relative;\n}\n.card-item[_ngcontent-%COMP%]:hover {\n  transform: translateY(-4px);\n  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.15);\n}\n.card-item.indisponivel[_ngcontent-%COMP%] {\n  opacity: 0.8;\n  border: 1px solid rgba(218, 74, 36, 0.3);\n}\n.card-item[_ngcontent-%COMP%]   .card-image[_ngcontent-%COMP%] {\n  position: relative;\n}\n.card-item[_ngcontent-%COMP%]   .card-image[_ngcontent-%COMP%]   img[mat-card-image][_ngcontent-%COMP%] {\n  width: 100%;\n  height: 180px;\n  object-fit: cover;\n  background-color: #5C7028;\n}\n.card-item[_ngcontent-%COMP%]   .card-image[_ngcontent-%COMP%]   .status-badges[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 8px;\n  left: 8px;\n  display: flex;\n  gap: 8px;\n}\n.card-item[_ngcontent-%COMP%]   .card-image[_ngcontent-%COMP%]   .status-badges[_ngcontent-%COMP%]   .badge[_ngcontent-%COMP%] {\n  padding: 4px 8px;\n  border-radius: 4px;\n  font-size: 12px;\n  font-weight: 500;\n}\n.card-item[_ngcontent-%COMP%]   .card-image[_ngcontent-%COMP%]   .status-badges[_ngcontent-%COMP%]   .badge.indisponivel[_ngcontent-%COMP%] {\n  background: rgba(218, 74, 36, 0.9);\n  color: #FFF;\n}\n.card-item[_ngcontent-%COMP%]   .card-image[_ngcontent-%COMP%]   .status-badges[_ngcontent-%COMP%]   .badge.novo[_ngcontent-%COMP%] {\n  background: rgba(92, 112, 40, 0.9);\n  color: #FFF;\n}\n.card-item[_ngcontent-%COMP%]   .card-image[_ngcontent-%COMP%]   .card-tags[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: 8px;\n  left: 8px;\n  display: flex;\n  gap: 8px;\n  flex-wrap: wrap;\n}\n.card-item[_ngcontent-%COMP%]   .card-image[_ngcontent-%COMP%]   .card-tags[_ngcontent-%COMP%]   .tag[_ngcontent-%COMP%] {\n  background: rgba(246, 189, 56, 0.9);\n  color: #3B221B;\n  padding: 4px 8px;\n  border-radius: 4px;\n  font-size: 12px;\n  font-weight: 500;\n}\n.card-item[_ngcontent-%COMP%]   .more-button[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 8px;\n  right: 8px;\n  background: rgba(255, 255, 255, 0.9);\n  color: #3B221B;\n}\n.card-item[_ngcontent-%COMP%]   mat-card-content[_ngcontent-%COMP%] {\n  padding: 16px;\n}\n.card-item[_ngcontent-%COMP%]   mat-card-content[_ngcontent-%COMP%]   .card-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 12px;\n}\n.card-item[_ngcontent-%COMP%]   mat-card-content[_ngcontent-%COMP%]   .card-header[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 18px;\n  color: #3B221B;\n  font-weight: 600;\n}\n.card-item[_ngcontent-%COMP%]   mat-card-content[_ngcontent-%COMP%]   .card-header[_ngcontent-%COMP%]   mat-slide-toggle[_ngcontent-%COMP%]     .mdc-switch {\n  --mdc-switch-selected-focus-state-layer-color: rgba(246, 189, 56, 0.2);\n  --mdc-switch-selected-pressed-state-layer-color: rgba(246, 189, 56, 0.2);\n  --mdc-switch-selected-hover-state-layer-color: rgba(246, 189, 56, 0.2);\n  --mdc-switch-unselected-focus-state-layer-color: rgba(59, 34, 27, 0.2);\n  --mdc-switch-unselected-pressed-state-layer-color: rgba(59, 34, 27, 0.2);\n  --mdc-switch-unselected-hover-state-layer-color: rgba(59, 34, 27, 0.2);\n  --mdc-switch-selected-track-color: #F6BD38;\n  --mdc-switch-selected-handle-color: #DA4A24;\n  --mdc-switch-unselected-track-color: rgba(59, 34, 27, 0.2);\n  --mdc-switch-unselected-handle-color: #3B221B;\n  --mdc-switch-selected-focus-track-color: #F6BD38;\n  --mdc-switch-selected-hover-track-color: #F6BD38;\n  --mdc-switch-selected-pressed-track-color: #F6BD38;\n}\n.card-item[_ngcontent-%COMP%]   mat-card-content[_ngcontent-%COMP%]   .descricao[_ngcontent-%COMP%] {\n  color: rgba(59, 34, 27, 0.7);\n  font-size: 14px;\n  margin: 0 0 16px;\n  line-height: 1.4;\n  display: -webkit-box;\n  -webkit-line-clamp: 2;\n  -webkit-box-orient: vertical;\n  overflow: hidden;\n}\n.card-item[_ngcontent-%COMP%]   mat-card-content[_ngcontent-%COMP%]   .card-footer[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-end;\n  align-items: center;\n}\n.card-item[_ngcontent-%COMP%]   mat-card-content[_ngcontent-%COMP%]   .card-footer[_ngcontent-%COMP%]   .preco[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 20px;\n  font-weight: bold;\n  color: #DA4A24;\n}\n.categoria-section[_ngcontent-%COMP%] {\n  margin: 2rem 0;\n}\n.categoria-section[_ngcontent-%COMP%]   .categoria-titulo[_ngcontent-%COMP%] {\n  color: #3B221B;\n  font-size: 1.5rem;\n  margin-bottom: 1rem;\n  padding-left: 1rem;\n  border-left: 4px solid #F6BD38;\n}\n.container-rounded[_ngcontent-%COMP%] {\n  background-color: #fff;\n  border-radius: 16px;\n  padding: 20px;\n  margin: 20px;\n  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);\n}\n.mensagem-sucesso[_ngcontent-%COMP%] {\n  color: #388e3c;\n  font-weight: 600;\n  margin-left: 24px;\n  font-size: 1.1rem;\n}\n/*# sourceMappingURL=cadastro-cardapio.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CadastroCardapioComponent, [{
    type: Component,
    args: [{ selector: "app-cadastro-cardapio", standalone: true, imports: [
      CommonModule,
      MatCardModule,
      MatIconModule,
      MatButtonModule,
      MatMenuModule,
      MatDialogModule,
      MatSlideToggleModule,
      MatTooltipModule,
      DialogItemCardapioComponent,
      GlobalSpinnerComponent
    ], template: `<!-- topo -->\r
<div class="container-rounded">\r
  <div class="top-bar">\r
    <div class="title-section">\r
      <mat-icon class="menu-icon">restaurant_menu</mat-icon>\r
      <h2>Cadastro de Card\xE1pio</h2>\r
    </div>\r
    <button\r
      mat-fab\r
      color="primary"\r
      class="fab-add"\r
      aria-label="Adicionar item"\r
      matTooltip="Adicionar novo item ao card\xE1pio"\r
      matTooltipClass="tavola-tooltip"\r
      (click)="adicionar()">\r
      <mat-icon>add</mat-icon>\r
    </button>\r
  </div>\r
\r
  <span *ngIf="mensagemSucesso" class="mensagem-sucesso">{{ mensagemSucesso }}</span>\r
\r
  <!-- grid de cards agrupados por categoria -->\r
  <ng-container *ngFor="let categoria of categoriasComItens">\r
    <div class="categoria-section" *ngIf="categoria.itens.length > 0">\r
      <h3 class="categoria-titulo">{{ categoria.nome }}</h3>\r
      <div class="grid">\r
        <mat-card *ngFor="let item of categoria.itens" class="card-item" [class.indisponivel]="!item.disponivel">\r
          <div class="card-image">\r
            <img mat-card-image [src]="item.imagem || defaultImg" alt="{{ item.nome }}" />\r
            <div class="card-tags">\r
              <span *ngFor="let tag of item.tags" class="tag">\r
                {{ tag.tag || tag }}\r
              </span>\r
            </div>\r
            <div class="status-badges">\r
              <span class="badge indisponivel" *ngIf="!item.disponivel">Indispon\xEDvel</span>\r
            </div>\r
          </div>\r
          <mat-card-content>\r
            <div class="card-header">\r
              <h3>{{ item.nome }}</h3>\r
              <mat-slide-toggle\r
                [checked]="item.disponivel"\r
                (change)="toggleDisponibilidade(item)"\r
                color="primary"\r
                [matTooltip]="item.disponivel ? 'Item dispon\xEDvel' : 'Item indispon\xEDvel'"\r
                matTooltipClass="tavola-tooltip">\r
              </mat-slide-toggle>\r
            </div>\r
            <p class="descricao" *ngIf="item.descricao">{{ item.descricao }}</p>\r
            <div class="card-footer">\r
              <p class="preco">R$ {{ item.preco | number:'1.2-2' }}</p>\r
            </div>\r
          </mat-card-content>\r
          <button mat-icon-button class="more-button" [matMenuTriggerFor]="menu" matTooltip="Mais op\xE7\xF5es"\r
          matTooltipClass="tavola-tooltip">\r
            <mat-icon>more_vert</mat-icon>\r
          </button>\r
          <mat-menu #menu="matMenu">\r
            <button mat-menu-item (click)="editar(item)">\r
              <mat-icon>edit</mat-icon><span>Editar</span>\r
            </button>\r
            <button mat-menu-item (click)="confirmarRemocao(item)">\r
              <mat-icon>delete</mat-icon><span>Remover</span>\r
            </button>\r
          </mat-menu>\r
        </mat-card>\r
      </div>\r
    </div>\r
  </ng-container>\r
</div>\r
`, styles: ["/* src/app/pages/cadastro-cardapio/cadastro-cardapio.component.scss */\n:host {\n  display: block;\n  background: #ebe8e2;\n  min-height: 100vh;\n}\n.top-bar {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 16px 24px;\n}\n.top-bar .title-section {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n}\n.top-bar .title-section .menu-icon {\n  color: #DA4A24;\n  font-size: 28px;\n  width: 28px;\n  height: 28px;\n}\n.top-bar .title-section h2 {\n  color: #3B221B;\n  font-size: 24px;\n  margin: 0;\n}\n.fab-add {\n  background-color: #F6BD38 !important;\n  color: #3B221B !important;\n  border-radius: 8px !important;\n  width: 48px !important;\n  height: 48px !important;\n  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);\n}\n.fab-add:hover {\n  background-color: rgb(244.8966346154, 180.9086538462, 31.6033653846) !important;\n}\n.grid {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));\n  gap: 24px;\n  padding: 0 24px 24px;\n}\n.card-item {\n  background: #FFF;\n  border-radius: 16px;\n  overflow: hidden;\n  transition: transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out;\n  border: 1px solid rgba(59, 34, 27, 0.1);\n  position: relative;\n}\n.card-item:hover {\n  transform: translateY(-4px);\n  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.15);\n}\n.card-item.indisponivel {\n  opacity: 0.8;\n  border: 1px solid rgba(218, 74, 36, 0.3);\n}\n.card-item .card-image {\n  position: relative;\n}\n.card-item .card-image img[mat-card-image] {\n  width: 100%;\n  height: 180px;\n  object-fit: cover;\n  background-color: #5C7028;\n}\n.card-item .card-image .status-badges {\n  position: absolute;\n  top: 8px;\n  left: 8px;\n  display: flex;\n  gap: 8px;\n}\n.card-item .card-image .status-badges .badge {\n  padding: 4px 8px;\n  border-radius: 4px;\n  font-size: 12px;\n  font-weight: 500;\n}\n.card-item .card-image .status-badges .badge.indisponivel {\n  background: rgba(218, 74, 36, 0.9);\n  color: #FFF;\n}\n.card-item .card-image .status-badges .badge.novo {\n  background: rgba(92, 112, 40, 0.9);\n  color: #FFF;\n}\n.card-item .card-image .card-tags {\n  position: absolute;\n  bottom: 8px;\n  left: 8px;\n  display: flex;\n  gap: 8px;\n  flex-wrap: wrap;\n}\n.card-item .card-image .card-tags .tag {\n  background: rgba(246, 189, 56, 0.9);\n  color: #3B221B;\n  padding: 4px 8px;\n  border-radius: 4px;\n  font-size: 12px;\n  font-weight: 500;\n}\n.card-item .more-button {\n  position: absolute;\n  top: 8px;\n  right: 8px;\n  background: rgba(255, 255, 255, 0.9);\n  color: #3B221B;\n}\n.card-item mat-card-content {\n  padding: 16px;\n}\n.card-item mat-card-content .card-header {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 12px;\n}\n.card-item mat-card-content .card-header h3 {\n  margin: 0;\n  font-size: 18px;\n  color: #3B221B;\n  font-weight: 600;\n}\n.card-item mat-card-content .card-header mat-slide-toggle ::ng-deep .mdc-switch {\n  --mdc-switch-selected-focus-state-layer-color: rgba(246, 189, 56, 0.2);\n  --mdc-switch-selected-pressed-state-layer-color: rgba(246, 189, 56, 0.2);\n  --mdc-switch-selected-hover-state-layer-color: rgba(246, 189, 56, 0.2);\n  --mdc-switch-unselected-focus-state-layer-color: rgba(59, 34, 27, 0.2);\n  --mdc-switch-unselected-pressed-state-layer-color: rgba(59, 34, 27, 0.2);\n  --mdc-switch-unselected-hover-state-layer-color: rgba(59, 34, 27, 0.2);\n  --mdc-switch-selected-track-color: #F6BD38;\n  --mdc-switch-selected-handle-color: #DA4A24;\n  --mdc-switch-unselected-track-color: rgba(59, 34, 27, 0.2);\n  --mdc-switch-unselected-handle-color: #3B221B;\n  --mdc-switch-selected-focus-track-color: #F6BD38;\n  --mdc-switch-selected-hover-track-color: #F6BD38;\n  --mdc-switch-selected-pressed-track-color: #F6BD38;\n}\n.card-item mat-card-content .descricao {\n  color: rgba(59, 34, 27, 0.7);\n  font-size: 14px;\n  margin: 0 0 16px;\n  line-height: 1.4;\n  display: -webkit-box;\n  -webkit-line-clamp: 2;\n  -webkit-box-orient: vertical;\n  overflow: hidden;\n}\n.card-item mat-card-content .card-footer {\n  display: flex;\n  justify-content: flex-end;\n  align-items: center;\n}\n.card-item mat-card-content .card-footer .preco {\n  margin: 0;\n  font-size: 20px;\n  font-weight: bold;\n  color: #DA4A24;\n}\n.categoria-section {\n  margin: 2rem 0;\n}\n.categoria-section .categoria-titulo {\n  color: #3B221B;\n  font-size: 1.5rem;\n  margin-bottom: 1rem;\n  padding-left: 1rem;\n  border-left: 4px solid #F6BD38;\n}\n.container-rounded {\n  background-color: #fff;\n  border-radius: 16px;\n  padding: 20px;\n  margin: 20px;\n  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);\n}\n.mensagem-sucesso {\n  color: #388e3c;\n  font-weight: 600;\n  margin-left: 24px;\n  font-size: 1.1rem;\n}\n/*# sourceMappingURL=cadastro-cardapio.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(CadastroCardapioComponent, { className: "CadastroCardapioComponent", filePath: "src/app/pages/cadastro-cardapio/cadastro-cardapio.component.ts", lineNumber: 37 });
})();
export {
  CadastroCardapioComponent
};
//# sourceMappingURL=chunk-RM53WYZM.js.map
