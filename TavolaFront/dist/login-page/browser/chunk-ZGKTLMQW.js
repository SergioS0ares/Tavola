import {
  MatCheckboxModule
} from "./chunk-APRTGTFA.js";
import {
  MatTab,
  MatTabGroup,
  MatTabsModule
} from "./chunk-EFDL6RU7.js";
import {
  _MatInternalFormField
} from "./chunk-OESMGJIM.js";
import {
  MatDividerModule
} from "./chunk-GDD6UY2N.js";
import {
  MatSelect,
  MatSelectModule,
  UniqueSelectionDispatcher
} from "./chunk-ILTVZJJ6.js";
import {
  NgxMaskDirective
} from "./chunk-DJ5CI4CU.js";
import {
  LoginService
} from "./chunk-SEAVMKBC.js";
import {
  LayoutPrincipalComponent
} from "./chunk-U4WSNX3A.js";
import "./chunk-223IUSYC.js";
import {
  MatButton,
  MatButtonModule,
  MatIconButton
} from "./chunk-7M5C6ZGC.js";
import {
  AuthService
} from "./chunk-PZUSUSHQ.js";
import "./chunk-DFDXVFE4.js";
import "./chunk-TYB57TMG.js";
import "./chunk-SBT7BDQG.js";
import "./chunk-2QDEYY6F.js";
import {
  MatOption
} from "./chunk-7TJEGKW3.js";
import "./chunk-ESXVDBVT.js";
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
  MatRippleModule,
  _StructuralStylesLoader
} from "./chunk-WG6I7YZH.js";
import "./chunk-RUUFL2BH.js";
import {
  ToastrService
} from "./chunk-FTC7ZL3K.js";
import {
  DefaultValueAccessor,
  FormArrayName,
  FormBuilder,
  FormControl,
  FormControlName,
  FormGroup,
  FormGroupDirective,
  FormGroupName,
  MaxLengthValidator,
  MinValidator,
  NG_VALUE_ACCESSOR,
  NgControlStatus,
  NgControlStatusGroup,
  NumberValueAccessor,
  ReactiveFormsModule,
  Validators,
  ɵNgNoValidate
} from "./chunk-X4ULZSL7.js";
import {
  FocusMonitor
} from "./chunk-B6PCS4YX.js";
import {
  DefaultLoginLayoutComponent
} from "./chunk-NH63UQ2U.js";
import {
  NzIconDirective,
  NzIconModule
} from "./chunk-TIW6MRUB.js";
import "./chunk-X3P5AUPX.js";
import "./chunk-SM7NAYZH.js";
import {
  Router
} from "./chunk-5CK7YN5Y.js";
import {
  CommonModule,
  HttpClient,
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
  ContentChildren,
  Directive,
  ElementRef,
  EventEmitter,
  HostAttributeToken,
  InjectionToken,
  Injector,
  Input,
  NgModule,
  NgZone,
  Output,
  Renderer2,
  ViewChild,
  ViewEncapsulation,
  __spreadValues,
  afterNextRender,
  booleanAttribute,
  forwardRef,
  inject,
  numberAttribute,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵProvidersFeature,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵclassProp,
  ɵɵcontentQuery,
  ɵɵdefineComponent,
  ɵɵdefineDirective,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵloadQuery,
  ɵɵnextContext,
  ɵɵprojection,
  ɵɵprojectionDef,
  ɵɵproperty,
  ɵɵqueryRefresh,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty,
  ɵɵviewQuery
} from "./chunk-CO622P43.js";

// node_modules/@angular/material/fesm2022/radio.mjs
var _c0 = ["input"];
var _c1 = ["formField"];
var _c2 = ["*"];
var MatRadioChange = class {
  source;
  value;
  constructor(source, value) {
    this.source = source;
    this.value = value;
  }
};
var MAT_RADIO_GROUP_CONTROL_VALUE_ACCESSOR = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => MatRadioGroup),
  multi: true
};
var MAT_RADIO_GROUP = new InjectionToken("MatRadioGroup");
var MAT_RADIO_DEFAULT_OPTIONS = new InjectionToken("mat-radio-default-options", {
  providedIn: "root",
  factory: MAT_RADIO_DEFAULT_OPTIONS_FACTORY
});
function MAT_RADIO_DEFAULT_OPTIONS_FACTORY() {
  return {
    color: "accent",
    disabledInteractive: false
  };
}
var MatRadioGroup = class _MatRadioGroup {
  _changeDetector = inject(ChangeDetectorRef);
  /** Selected value for the radio group. */
  _value = null;
  /** The HTML name attribute applied to radio buttons in this group. */
  _name = inject(_IdGenerator).getId("mat-radio-group-");
  /** The currently selected radio button. Should match value. */
  _selected = null;
  /** Whether the `value` has been set to its initial value. */
  _isInitialized = false;
  /** Whether the labels should appear after or before the radio-buttons. Defaults to 'after' */
  _labelPosition = "after";
  /** Whether the radio group is disabled. */
  _disabled = false;
  /** Whether the radio group is required. */
  _required = false;
  /** Subscription to changes in amount of radio buttons. */
  _buttonChanges;
  /** The method to be called in order to update ngModel */
  _controlValueAccessorChangeFn = () => {
  };
  /**
   * onTouch function registered via registerOnTouch (ControlValueAccessor).
   * @docs-private
   */
  onTouched = () => {
  };
  /**
   * Event emitted when the group value changes.
   * Change events are only emitted when the value changes due to user interaction with
   * a radio button (the same behavior as `<input type-"radio">`).
   */
  change = new EventEmitter();
  /** Child radio buttons. */
  _radios;
  /**
   * Theme color of the radio buttons in the group. This API is supported in M2
   * themes only, it has no effect in M3 themes. For color customization in M3, see https://material.angular.io/components/radio/styling.
   *
   * For information on applying color variants in M3, see
   * https://material.angular.io/guide/material-2-theming#optional-add-backwards-compatibility-styles-for-color-variants
   */
  color;
  /** Name of the radio button group. All radio buttons inside this group will use this name. */
  get name() {
    return this._name;
  }
  set name(value) {
    this._name = value;
    this._updateRadioButtonNames();
  }
  /** Whether the labels should appear after or before the radio-buttons. Defaults to 'after' */
  get labelPosition() {
    return this._labelPosition;
  }
  set labelPosition(v) {
    this._labelPosition = v === "before" ? "before" : "after";
    this._markRadiosForCheck();
  }
  /**
   * Value for the radio-group. Should equal the value of the selected radio button if there is
   * a corresponding radio button with a matching value. If there is not such a corresponding
   * radio button, this value persists to be applied in case a new radio button is added with a
   * matching value.
   */
  get value() {
    return this._value;
  }
  set value(newValue) {
    if (this._value !== newValue) {
      this._value = newValue;
      this._updateSelectedRadioFromValue();
      this._checkSelectedRadioButton();
    }
  }
  _checkSelectedRadioButton() {
    if (this._selected && !this._selected.checked) {
      this._selected.checked = true;
    }
  }
  /**
   * The currently selected radio button. If set to a new radio button, the radio group value
   * will be updated to match the new selected button.
   */
  get selected() {
    return this._selected;
  }
  set selected(selected) {
    this._selected = selected;
    this.value = selected ? selected.value : null;
    this._checkSelectedRadioButton();
  }
  /** Whether the radio group is disabled */
  get disabled() {
    return this._disabled;
  }
  set disabled(value) {
    this._disabled = value;
    this._markRadiosForCheck();
  }
  /** Whether the radio group is required */
  get required() {
    return this._required;
  }
  set required(value) {
    this._required = value;
    this._markRadiosForCheck();
  }
  /** Whether buttons in the group should be interactive while they're disabled. */
  get disabledInteractive() {
    return this._disabledInteractive;
  }
  set disabledInteractive(value) {
    this._disabledInteractive = value;
    this._markRadiosForCheck();
  }
  _disabledInteractive = false;
  constructor() {
  }
  /**
   * Initialize properties once content children are available.
   * This allows us to propagate relevant attributes to associated buttons.
   */
  ngAfterContentInit() {
    this._isInitialized = true;
    this._buttonChanges = this._radios.changes.subscribe(() => {
      if (this.selected && !this._radios.find((radio) => radio === this.selected)) {
        this._selected = null;
      }
    });
  }
  ngOnDestroy() {
    this._buttonChanges?.unsubscribe();
  }
  /**
   * Mark this group as being "touched" (for ngModel). Meant to be called by the contained
   * radio buttons upon their blur.
   */
  _touch() {
    if (this.onTouched) {
      this.onTouched();
    }
  }
  _updateRadioButtonNames() {
    if (this._radios) {
      this._radios.forEach((radio) => {
        radio.name = this.name;
        radio._markForCheck();
      });
    }
  }
  /** Updates the `selected` radio button from the internal _value state. */
  _updateSelectedRadioFromValue() {
    const isAlreadySelected = this._selected !== null && this._selected.value === this._value;
    if (this._radios && !isAlreadySelected) {
      this._selected = null;
      this._radios.forEach((radio) => {
        radio.checked = this.value === radio.value;
        if (radio.checked) {
          this._selected = radio;
        }
      });
    }
  }
  /** Dispatch change event with current selection and group value. */
  _emitChangeEvent() {
    if (this._isInitialized) {
      this.change.emit(new MatRadioChange(this._selected, this._value));
    }
  }
  _markRadiosForCheck() {
    if (this._radios) {
      this._radios.forEach((radio) => radio._markForCheck());
    }
  }
  /**
   * Sets the model value. Implemented as part of ControlValueAccessor.
   * @param value
   */
  writeValue(value) {
    this.value = value;
    this._changeDetector.markForCheck();
  }
  /**
   * Registers a callback to be triggered when the model value changes.
   * Implemented as part of ControlValueAccessor.
   * @param fn Callback to be registered.
   */
  registerOnChange(fn) {
    this._controlValueAccessorChangeFn = fn;
  }
  /**
   * Registers a callback to be triggered when the control is touched.
   * Implemented as part of ControlValueAccessor.
   * @param fn Callback to be registered.
   */
  registerOnTouched(fn) {
    this.onTouched = fn;
  }
  /**
   * Sets the disabled state of the control. Implemented as a part of ControlValueAccessor.
   * @param isDisabled Whether the control should be disabled.
   */
  setDisabledState(isDisabled) {
    this.disabled = isDisabled;
    this._changeDetector.markForCheck();
  }
  static \u0275fac = function MatRadioGroup_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _MatRadioGroup)();
  };
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _MatRadioGroup,
    selectors: [["mat-radio-group"]],
    contentQueries: function MatRadioGroup_ContentQueries(rf, ctx, dirIndex) {
      if (rf & 1) {
        \u0275\u0275contentQuery(dirIndex, MatRadioButton, 5);
      }
      if (rf & 2) {
        let _t;
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx._radios = _t);
      }
    },
    hostAttrs: ["role", "radiogroup", 1, "mat-mdc-radio-group"],
    inputs: {
      color: "color",
      name: "name",
      labelPosition: "labelPosition",
      value: "value",
      selected: "selected",
      disabled: [2, "disabled", "disabled", booleanAttribute],
      required: [2, "required", "required", booleanAttribute],
      disabledInteractive: [2, "disabledInteractive", "disabledInteractive", booleanAttribute]
    },
    outputs: {
      change: "change"
    },
    exportAs: ["matRadioGroup"],
    features: [\u0275\u0275ProvidersFeature([MAT_RADIO_GROUP_CONTROL_VALUE_ACCESSOR, {
      provide: MAT_RADIO_GROUP,
      useExisting: _MatRadioGroup
    }])]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatRadioGroup, [{
    type: Directive,
    args: [{
      selector: "mat-radio-group",
      exportAs: "matRadioGroup",
      providers: [MAT_RADIO_GROUP_CONTROL_VALUE_ACCESSOR, {
        provide: MAT_RADIO_GROUP,
        useExisting: MatRadioGroup
      }],
      host: {
        "role": "radiogroup",
        "class": "mat-mdc-radio-group"
      }
    }]
  }], () => [], {
    change: [{
      type: Output
    }],
    _radios: [{
      type: ContentChildren,
      args: [forwardRef(() => MatRadioButton), {
        descendants: true
      }]
    }],
    color: [{
      type: Input
    }],
    name: [{
      type: Input
    }],
    labelPosition: [{
      type: Input
    }],
    value: [{
      type: Input
    }],
    selected: [{
      type: Input
    }],
    disabled: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    required: [{
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
    }]
  });
})();
var MatRadioButton = class _MatRadioButton {
  _elementRef = inject(ElementRef);
  _changeDetector = inject(ChangeDetectorRef);
  _focusMonitor = inject(FocusMonitor);
  _radioDispatcher = inject(UniqueSelectionDispatcher);
  _defaultOptions = inject(MAT_RADIO_DEFAULT_OPTIONS, {
    optional: true
  });
  _ngZone = inject(NgZone);
  _renderer = inject(Renderer2);
  _uniqueId = inject(_IdGenerator).getId("mat-radio-");
  _cleanupClick;
  /** The unique ID for the radio button. */
  id = this._uniqueId;
  /** Analog to HTML 'name' attribute used to group radios for unique selection. */
  name;
  /** Used to set the 'aria-label' attribute on the underlying input element. */
  ariaLabel;
  /** The 'aria-labelledby' attribute takes precedence as the element's text alternative. */
  ariaLabelledby;
  /** The 'aria-describedby' attribute is read after the element's label and field type. */
  ariaDescribedby;
  /** Whether ripples are disabled inside the radio button */
  disableRipple = false;
  /** Tabindex of the radio button. */
  tabIndex = 0;
  /** Whether this radio button is checked. */
  get checked() {
    return this._checked;
  }
  set checked(value) {
    if (this._checked !== value) {
      this._checked = value;
      if (value && this.radioGroup && this.radioGroup.value !== this.value) {
        this.radioGroup.selected = this;
      } else if (!value && this.radioGroup && this.radioGroup.value === this.value) {
        this.radioGroup.selected = null;
      }
      if (value) {
        this._radioDispatcher.notify(this.id, this.name);
      }
      this._changeDetector.markForCheck();
    }
  }
  /** The value of this radio button. */
  get value() {
    return this._value;
  }
  set value(value) {
    if (this._value !== value) {
      this._value = value;
      if (this.radioGroup !== null) {
        if (!this.checked) {
          this.checked = this.radioGroup.value === value;
        }
        if (this.checked) {
          this.radioGroup.selected = this;
        }
      }
    }
  }
  /** Whether the label should appear after or before the radio button. Defaults to 'after' */
  get labelPosition() {
    return this._labelPosition || this.radioGroup && this.radioGroup.labelPosition || "after";
  }
  set labelPosition(value) {
    this._labelPosition = value;
  }
  _labelPosition;
  /** Whether the radio button is disabled. */
  get disabled() {
    return this._disabled || this.radioGroup !== null && this.radioGroup.disabled;
  }
  set disabled(value) {
    this._setDisabled(value);
  }
  /** Whether the radio button is required. */
  get required() {
    return this._required || this.radioGroup && this.radioGroup.required;
  }
  set required(value) {
    this._required = value;
  }
  /**
   * Theme color of the radio button. This API is supported in M2 themes only, it
   * has no effect in M3 themes. For color customization in M3, see https://material.angular.io/components/radio/styling.
   *
   * For information on applying color variants in M3, see
   * https://material.angular.io/guide/material-2-theming#optional-add-backwards-compatibility-styles-for-color-variants
   */
  get color() {
    return this._color || this.radioGroup && this.radioGroup.color || this._defaultOptions && this._defaultOptions.color || "accent";
  }
  set color(newValue) {
    this._color = newValue;
  }
  _color;
  /** Whether the radio button should remain interactive when it is disabled. */
  get disabledInteractive() {
    return this._disabledInteractive || this.radioGroup !== null && this.radioGroup.disabledInteractive;
  }
  set disabledInteractive(value) {
    this._disabledInteractive = value;
  }
  _disabledInteractive;
  /**
   * Event emitted when the checked state of this radio button changes.
   * Change events are only emitted when the value changes due to user interaction with
   * the radio button (the same behavior as `<input type-"radio">`).
   */
  change = new EventEmitter();
  /** The parent radio group. May or may not be present. */
  radioGroup;
  /** ID of the native input element inside `<mat-radio-button>` */
  get inputId() {
    return `${this.id || this._uniqueId}-input`;
  }
  /** Whether this radio is checked. */
  _checked = false;
  /** Whether this radio is disabled. */
  _disabled;
  /** Whether this radio is required. */
  _required;
  /** Value assigned to this radio. */
  _value = null;
  /** Unregister function for _radioDispatcher */
  _removeUniqueSelectionListener = () => {
  };
  /** Previous value of the input's tabindex. */
  _previousTabIndex;
  /** The native `<input type=radio>` element */
  _inputElement;
  /** Trigger elements for the ripple events. */
  _rippleTrigger;
  /** Whether animations are disabled. */
  _noopAnimations;
  _injector = inject(Injector);
  constructor() {
    inject(_CdkPrivateStyleLoader).load(_StructuralStylesLoader);
    const radioGroup = inject(MAT_RADIO_GROUP, {
      optional: true
    });
    const animationMode = inject(ANIMATION_MODULE_TYPE, {
      optional: true
    });
    const tabIndex = inject(new HostAttributeToken("tabindex"), {
      optional: true
    });
    this.radioGroup = radioGroup;
    this._noopAnimations = animationMode === "NoopAnimations";
    this._disabledInteractive = this._defaultOptions?.disabledInteractive ?? false;
    if (tabIndex) {
      this.tabIndex = numberAttribute(tabIndex, 0);
    }
  }
  /** Focuses the radio button. */
  focus(options, origin) {
    if (origin) {
      this._focusMonitor.focusVia(this._inputElement, origin, options);
    } else {
      this._inputElement.nativeElement.focus(options);
    }
  }
  /**
   * Marks the radio button as needing checking for change detection.
   * This method is exposed because the parent radio group will directly
   * update bound properties of the radio button.
   */
  _markForCheck() {
    this._changeDetector.markForCheck();
  }
  ngOnInit() {
    if (this.radioGroup) {
      this.checked = this.radioGroup.value === this._value;
      if (this.checked) {
        this.radioGroup.selected = this;
      }
      this.name = this.radioGroup.name;
    }
    this._removeUniqueSelectionListener = this._radioDispatcher.listen((id, name) => {
      if (id !== this.id && name === this.name) {
        this.checked = false;
      }
    });
  }
  ngDoCheck() {
    this._updateTabIndex();
  }
  ngAfterViewInit() {
    this._updateTabIndex();
    this._focusMonitor.monitor(this._elementRef, true).subscribe((focusOrigin) => {
      if (!focusOrigin && this.radioGroup) {
        this.radioGroup._touch();
      }
    });
    this._ngZone.runOutsideAngular(() => {
      this._cleanupClick = this._renderer.listen(this._inputElement.nativeElement, "click", this._onInputClick);
    });
  }
  ngOnDestroy() {
    this._cleanupClick?.();
    this._focusMonitor.stopMonitoring(this._elementRef);
    this._removeUniqueSelectionListener();
  }
  /** Dispatch change event with current value. */
  _emitChangeEvent() {
    this.change.emit(new MatRadioChange(this, this._value));
  }
  _isRippleDisabled() {
    return this.disableRipple || this.disabled;
  }
  /** Triggered when the radio button receives an interaction from the user. */
  _onInputInteraction(event) {
    event.stopPropagation();
    if (!this.checked && !this.disabled) {
      const groupValueChanged = this.radioGroup && this.value !== this.radioGroup.value;
      this.checked = true;
      this._emitChangeEvent();
      if (this.radioGroup) {
        this.radioGroup._controlValueAccessorChangeFn(this.value);
        if (groupValueChanged) {
          this.radioGroup._emitChangeEvent();
        }
      }
    }
  }
  /** Triggered when the user clicks on the touch target. */
  _onTouchTargetClick(event) {
    this._onInputInteraction(event);
    if (!this.disabled || this.disabledInteractive) {
      this._inputElement?.nativeElement.focus();
    }
  }
  /** Sets the disabled state and marks for check if a change occurred. */
  _setDisabled(value) {
    if (this._disabled !== value) {
      this._disabled = value;
      this._changeDetector.markForCheck();
    }
  }
  /** Called when the input is clicked. */
  _onInputClick = (event) => {
    if (this.disabled && this.disabledInteractive) {
      event.preventDefault();
    }
  };
  /** Gets the tabindex for the underlying input element. */
  _updateTabIndex() {
    const group = this.radioGroup;
    let value;
    if (!group || !group.selected || this.disabled) {
      value = this.tabIndex;
    } else {
      value = group.selected === this ? this.tabIndex : -1;
    }
    if (value !== this._previousTabIndex) {
      const input = this._inputElement?.nativeElement;
      if (input) {
        input.setAttribute("tabindex", value + "");
        this._previousTabIndex = value;
        afterNextRender(() => {
          queueMicrotask(() => {
            if (group && group.selected && group.selected !== this && document.activeElement === input) {
              group.selected?._inputElement.nativeElement.focus();
              if (document.activeElement === input) {
                this._inputElement.nativeElement.blur();
              }
            }
          });
        }, {
          injector: this._injector
        });
      }
    }
  }
  static \u0275fac = function MatRadioButton_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _MatRadioButton)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _MatRadioButton,
    selectors: [["mat-radio-button"]],
    viewQuery: function MatRadioButton_Query(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275viewQuery(_c0, 5);
        \u0275\u0275viewQuery(_c1, 7, ElementRef);
      }
      if (rf & 2) {
        let _t;
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx._inputElement = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx._rippleTrigger = _t.first);
      }
    },
    hostAttrs: [1, "mat-mdc-radio-button"],
    hostVars: 19,
    hostBindings: function MatRadioButton_HostBindings(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275listener("focus", function MatRadioButton_focus_HostBindingHandler() {
          return ctx._inputElement.nativeElement.focus();
        });
      }
      if (rf & 2) {
        \u0275\u0275attribute("id", ctx.id)("tabindex", null)("aria-label", null)("aria-labelledby", null)("aria-describedby", null);
        \u0275\u0275classProp("mat-primary", ctx.color === "primary")("mat-accent", ctx.color === "accent")("mat-warn", ctx.color === "warn")("mat-mdc-radio-checked", ctx.checked)("mat-mdc-radio-disabled", ctx.disabled)("mat-mdc-radio-disabled-interactive", ctx.disabledInteractive)("_mat-animation-noopable", ctx._noopAnimations);
      }
    },
    inputs: {
      id: "id",
      name: "name",
      ariaLabel: [0, "aria-label", "ariaLabel"],
      ariaLabelledby: [0, "aria-labelledby", "ariaLabelledby"],
      ariaDescribedby: [0, "aria-describedby", "ariaDescribedby"],
      disableRipple: [2, "disableRipple", "disableRipple", booleanAttribute],
      tabIndex: [2, "tabIndex", "tabIndex", (value) => value == null ? 0 : numberAttribute(value)],
      checked: [2, "checked", "checked", booleanAttribute],
      value: "value",
      labelPosition: "labelPosition",
      disabled: [2, "disabled", "disabled", booleanAttribute],
      required: [2, "required", "required", booleanAttribute],
      color: "color",
      disabledInteractive: [2, "disabledInteractive", "disabledInteractive", booleanAttribute]
    },
    outputs: {
      change: "change"
    },
    exportAs: ["matRadioButton"],
    ngContentSelectors: _c2,
    decls: 13,
    vars: 17,
    consts: [["formField", ""], ["input", ""], ["mat-internal-form-field", "", 3, "labelPosition"], [1, "mdc-radio"], [1, "mat-mdc-radio-touch-target", 3, "click"], ["type", "radio", 1, "mdc-radio__native-control", 3, "change", "id", "checked", "disabled", "required"], [1, "mdc-radio__background"], [1, "mdc-radio__outer-circle"], [1, "mdc-radio__inner-circle"], ["mat-ripple", "", 1, "mat-radio-ripple", "mat-focus-indicator", 3, "matRippleTrigger", "matRippleDisabled", "matRippleCentered"], [1, "mat-ripple-element", "mat-radio-persistent-ripple"], [1, "mdc-label", 3, "for"]],
    template: function MatRadioButton_Template(rf, ctx) {
      if (rf & 1) {
        const _r1 = \u0275\u0275getCurrentView();
        \u0275\u0275projectionDef();
        \u0275\u0275elementStart(0, "div", 2, 0)(2, "div", 3)(3, "div", 4);
        \u0275\u0275listener("click", function MatRadioButton_Template_div_click_3_listener($event) {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx._onTouchTargetClick($event));
        });
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(4, "input", 5, 1);
        \u0275\u0275listener("change", function MatRadioButton_Template_input_change_4_listener($event) {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx._onInputInteraction($event));
        });
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(6, "div", 6);
        \u0275\u0275element(7, "div", 7)(8, "div", 8);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(9, "div", 9);
        \u0275\u0275element(10, "div", 10);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(11, "label", 11);
        \u0275\u0275projection(12);
        \u0275\u0275elementEnd()();
      }
      if (rf & 2) {
        \u0275\u0275property("labelPosition", ctx.labelPosition);
        \u0275\u0275advance(2);
        \u0275\u0275classProp("mdc-radio--disabled", ctx.disabled);
        \u0275\u0275advance(2);
        \u0275\u0275property("id", ctx.inputId)("checked", ctx.checked)("disabled", ctx.disabled && !ctx.disabledInteractive)("required", ctx.required);
        \u0275\u0275attribute("name", ctx.name)("value", ctx.value)("aria-label", ctx.ariaLabel)("aria-labelledby", ctx.ariaLabelledby)("aria-describedby", ctx.ariaDescribedby)("aria-disabled", ctx.disabled && ctx.disabledInteractive ? "true" : null);
        \u0275\u0275advance(5);
        \u0275\u0275property("matRippleTrigger", ctx._rippleTrigger.nativeElement)("matRippleDisabled", ctx._isRippleDisabled())("matRippleCentered", true);
        \u0275\u0275advance(2);
        \u0275\u0275property("for", ctx.inputId);
      }
    },
    dependencies: [MatRipple, _MatInternalFormField],
    styles: ['.mat-mdc-radio-button{-webkit-tap-highlight-color:rgba(0,0,0,0)}.mat-mdc-radio-button .mdc-radio{display:inline-block;position:relative;flex:0 0 auto;box-sizing:content-box;width:20px;height:20px;cursor:pointer;will-change:opacity,transform,border-color,color;padding:calc((var(--mdc-radio-state-layer-size, 40px) - 20px)/2)}.mat-mdc-radio-button .mdc-radio:hover>.mdc-radio__native-control:not([disabled]):not(:focus)~.mdc-radio__background::before{opacity:.04;transform:scale(1)}.mat-mdc-radio-button .mdc-radio:hover>.mdc-radio__native-control:not([disabled])~.mdc-radio__background>.mdc-radio__outer-circle{border-color:var(--mdc-radio-unselected-hover-icon-color, var(--mat-sys-on-surface))}.mat-mdc-radio-button .mdc-radio:hover>.mdc-radio__native-control:enabled:checked+.mdc-radio__background>.mdc-radio__outer-circle,.mat-mdc-radio-button .mdc-radio:hover>.mdc-radio__native-control:enabled:checked+.mdc-radio__background>.mdc-radio__inner-circle{border-color:var(--mdc-radio-selected-hover-icon-color, var(--mat-sys-primary))}.mat-mdc-radio-button .mdc-radio:active>.mdc-radio__native-control:enabled:not(:checked)+.mdc-radio__background>.mdc-radio__outer-circle{border-color:var(--mdc-radio-unselected-pressed-icon-color, var(--mat-sys-on-surface))}.mat-mdc-radio-button .mdc-radio:active>.mdc-radio__native-control:enabled:checked+.mdc-radio__background>.mdc-radio__outer-circle,.mat-mdc-radio-button .mdc-radio:active>.mdc-radio__native-control:enabled:checked+.mdc-radio__background>.mdc-radio__inner-circle{border-color:var(--mdc-radio-selected-pressed-icon-color, var(--mat-sys-primary))}.mat-mdc-radio-button .mdc-radio__background{display:inline-block;position:relative;box-sizing:border-box;width:20px;height:20px}.mat-mdc-radio-button .mdc-radio__background::before{position:absolute;transform:scale(0, 0);border-radius:50%;opacity:0;pointer-events:none;content:"";transition:opacity 90ms cubic-bezier(0.4, 0, 0.6, 1),transform 90ms cubic-bezier(0.4, 0, 0.6, 1);width:var(--mdc-radio-state-layer-size, 40px);height:var(--mdc-radio-state-layer-size, 40px);top:calc(-1*(var(--mdc-radio-state-layer-size, 40px) - 20px)/2);left:calc(-1*(var(--mdc-radio-state-layer-size, 40px) - 20px)/2)}.mat-mdc-radio-button .mdc-radio__outer-circle{position:absolute;top:0;left:0;box-sizing:border-box;width:100%;height:100%;border-width:2px;border-style:solid;border-radius:50%;transition:border-color 90ms cubic-bezier(0.4, 0, 0.6, 1)}.mat-mdc-radio-button .mdc-radio__inner-circle{position:absolute;top:0;left:0;box-sizing:border-box;width:100%;height:100%;transform:scale(0, 0);border-width:10px;border-style:solid;border-radius:50%;transition:transform 90ms cubic-bezier(0.4, 0, 0.6, 1),border-color 90ms cubic-bezier(0.4, 0, 0.6, 1)}.mat-mdc-radio-button .mdc-radio__native-control{position:absolute;margin:0;padding:0;opacity:0;top:0;right:0;left:0;cursor:inherit;z-index:1;width:var(--mdc-radio-state-layer-size, 40px);height:var(--mdc-radio-state-layer-size, 40px)}.mat-mdc-radio-button .mdc-radio__native-control:checked+.mdc-radio__background,.mat-mdc-radio-button .mdc-radio__native-control:disabled+.mdc-radio__background{transition:opacity 90ms cubic-bezier(0, 0, 0.2, 1),transform 90ms cubic-bezier(0, 0, 0.2, 1)}.mat-mdc-radio-button .mdc-radio__native-control:checked+.mdc-radio__background>.mdc-radio__outer-circle,.mat-mdc-radio-button .mdc-radio__native-control:disabled+.mdc-radio__background>.mdc-radio__outer-circle{transition:border-color 90ms cubic-bezier(0, 0, 0.2, 1)}.mat-mdc-radio-button .mdc-radio__native-control:checked+.mdc-radio__background>.mdc-radio__inner-circle,.mat-mdc-radio-button .mdc-radio__native-control:disabled+.mdc-radio__background>.mdc-radio__inner-circle{transition:transform 90ms cubic-bezier(0, 0, 0.2, 1),border-color 90ms cubic-bezier(0, 0, 0.2, 1)}.mat-mdc-radio-button .mdc-radio__native-control:focus+.mdc-radio__background::before{transform:scale(1);opacity:.12;transition:opacity 90ms cubic-bezier(0, 0, 0.2, 1),transform 90ms cubic-bezier(0, 0, 0.2, 1)}.mat-mdc-radio-button .mdc-radio__native-control:disabled:not(:checked)+.mdc-radio__background>.mdc-radio__outer-circle{border-color:var(--mdc-radio-disabled-unselected-icon-color, var(--mat-sys-on-surface));opacity:var(--mdc-radio-disabled-unselected-icon-opacity, 0.38)}.mat-mdc-radio-button .mdc-radio__native-control:disabled+.mdc-radio__background{cursor:default}.mat-mdc-radio-button .mdc-radio__native-control:disabled+.mdc-radio__background>.mdc-radio__inner-circle,.mat-mdc-radio-button .mdc-radio__native-control:disabled+.mdc-radio__background>.mdc-radio__outer-circle{border-color:var(--mdc-radio-disabled-selected-icon-color, var(--mat-sys-on-surface));opacity:var(--mdc-radio-disabled-selected-icon-opacity, 0.38)}.mat-mdc-radio-button .mdc-radio__native-control:enabled:not(:checked)+.mdc-radio__background>.mdc-radio__outer-circle{border-color:var(--mdc-radio-unselected-icon-color, var(--mat-sys-on-surface-variant))}.mat-mdc-radio-button .mdc-radio__native-control:enabled:checked+.mdc-radio__background>.mdc-radio__outer-circle,.mat-mdc-radio-button .mdc-radio__native-control:enabled:checked+.mdc-radio__background>.mdc-radio__inner-circle{border-color:var(--mdc-radio-selected-icon-color, var(--mat-sys-primary))}.mat-mdc-radio-button .mdc-radio__native-control:enabled:focus:checked+.mdc-radio__background>.mdc-radio__inner-circle,.mat-mdc-radio-button .mdc-radio__native-control:enabled:focus:checked+.mdc-radio__background>.mdc-radio__outer-circle{border-color:var(--mdc-radio-selected-focus-icon-color, var(--mat-sys-primary))}.mat-mdc-radio-button .mdc-radio__native-control:checked+.mdc-radio__background>.mdc-radio__inner-circle{transform:scale(0.5);transition:transform 90ms cubic-bezier(0, 0, 0.2, 1),border-color 90ms cubic-bezier(0, 0, 0.2, 1)}.mat-mdc-radio-button.mat-mdc-radio-disabled-interactive .mdc-radio--disabled{pointer-events:auto}.mat-mdc-radio-button.mat-mdc-radio-disabled-interactive .mdc-radio--disabled .mdc-radio__native-control:not(:checked)+.mdc-radio__background>.mdc-radio__outer-circle{border-color:var(--mdc-radio-disabled-unselected-icon-color, var(--mat-sys-on-surface));opacity:var(--mdc-radio-disabled-unselected-icon-opacity, 0.38)}.mat-mdc-radio-button.mat-mdc-radio-disabled-interactive .mdc-radio--disabled:hover .mdc-radio__native-control:checked+.mdc-radio__background>.mdc-radio__inner-circle,.mat-mdc-radio-button.mat-mdc-radio-disabled-interactive .mdc-radio--disabled:hover .mdc-radio__native-control:checked+.mdc-radio__background>.mdc-radio__outer-circle,.mat-mdc-radio-button.mat-mdc-radio-disabled-interactive .mdc-radio--disabled .mdc-radio__native-control:checked:focus+.mdc-radio__background>.mdc-radio__inner-circle,.mat-mdc-radio-button.mat-mdc-radio-disabled-interactive .mdc-radio--disabled .mdc-radio__native-control:checked:focus+.mdc-radio__background>.mdc-radio__outer-circle,.mat-mdc-radio-button.mat-mdc-radio-disabled-interactive .mdc-radio--disabled .mdc-radio__native-control+.mdc-radio__background>.mdc-radio__inner-circle,.mat-mdc-radio-button.mat-mdc-radio-disabled-interactive .mdc-radio--disabled .mdc-radio__native-control+.mdc-radio__background>.mdc-radio__outer-circle{border-color:var(--mdc-radio-disabled-selected-icon-color, var(--mat-sys-on-surface));opacity:var(--mdc-radio-disabled-selected-icon-opacity, 0.38)}.mat-mdc-radio-button._mat-animation-noopable .mdc-radio__background::before,.mat-mdc-radio-button._mat-animation-noopable .mdc-radio__outer-circle,.mat-mdc-radio-button._mat-animation-noopable .mdc-radio__inner-circle{transition:none !important}.mat-mdc-radio-button .mdc-radio__background::before{background-color:var(--mat-radio-ripple-color, var(--mat-sys-on-surface))}.mat-mdc-radio-button.mat-mdc-radio-checked .mat-ripple-element,.mat-mdc-radio-button.mat-mdc-radio-checked .mdc-radio__background::before{background-color:var(--mat-radio-checked-ripple-color, var(--mat-sys-primary))}.mat-mdc-radio-button.mat-mdc-radio-disabled-interactive .mdc-radio--disabled .mat-ripple-element,.mat-mdc-radio-button.mat-mdc-radio-disabled-interactive .mdc-radio--disabled .mdc-radio__background::before{background-color:var(--mat-radio-ripple-color, var(--mat-sys-on-surface))}.mat-mdc-radio-button .mat-internal-form-field{color:var(--mat-radio-label-text-color, var(--mat-sys-on-surface));font-family:var(--mat-radio-label-text-font, var(--mat-sys-body-medium-font));line-height:var(--mat-radio-label-text-line-height, var(--mat-sys-body-medium-line-height));font-size:var(--mat-radio-label-text-size, var(--mat-sys-body-medium-size));letter-spacing:var(--mat-radio-label-text-tracking, var(--mat-sys-body-medium-tracking));font-weight:var(--mat-radio-label-text-weight, var(--mat-sys-body-medium-weight))}.mat-mdc-radio-button .mdc-radio--disabled+label{color:var(--mat-radio-disabled-label-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent))}.mat-mdc-radio-button .mat-radio-ripple{top:0;left:0;right:0;bottom:0;position:absolute;pointer-events:none;border-radius:50%}.mat-mdc-radio-button .mat-radio-ripple>.mat-ripple-element{opacity:.14}.mat-mdc-radio-button .mat-radio-ripple::before{border-radius:50%}.mat-mdc-radio-button .mdc-radio>.mdc-radio__native-control:focus:enabled:not(:checked)~.mdc-radio__background>.mdc-radio__outer-circle{border-color:var(--mdc-radio-unselected-focus-icon-color, var(--mat-sys-on-surface))}.mat-mdc-radio-button.cdk-focused .mat-focus-indicator::before{content:""}.mat-mdc-radio-disabled{cursor:default;pointer-events:none}.mat-mdc-radio-disabled.mat-mdc-radio-disabled-interactive{pointer-events:auto}.mat-mdc-radio-touch-target{position:absolute;top:50%;left:50%;height:48px;width:48px;transform:translate(-50%, -50%);display:var(--mat-radio-touch-target-display, block)}[dir=rtl] .mat-mdc-radio-touch-target{left:auto;right:50%;transform:translate(50%, -50%)}\n'],
    encapsulation: 2,
    changeDetection: 0
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatRadioButton, [{
    type: Component,
    args: [{
      selector: "mat-radio-button",
      host: {
        "class": "mat-mdc-radio-button",
        "[attr.id]": "id",
        "[class.mat-primary]": 'color === "primary"',
        "[class.mat-accent]": 'color === "accent"',
        "[class.mat-warn]": 'color === "warn"',
        "[class.mat-mdc-radio-checked]": "checked",
        "[class.mat-mdc-radio-disabled]": "disabled",
        "[class.mat-mdc-radio-disabled-interactive]": "disabledInteractive",
        "[class._mat-animation-noopable]": "_noopAnimations",
        // Needs to be removed since it causes some a11y issues (see #21266).
        "[attr.tabindex]": "null",
        "[attr.aria-label]": "null",
        "[attr.aria-labelledby]": "null",
        "[attr.aria-describedby]": "null",
        // Note: under normal conditions focus shouldn't land on this element, however it may be
        // programmatically set, for example inside of a focus trap, in this case we want to forward
        // the focus to the native element.
        "(focus)": "_inputElement.nativeElement.focus()"
      },
      exportAs: "matRadioButton",
      encapsulation: ViewEncapsulation.None,
      changeDetection: ChangeDetectionStrategy.OnPush,
      imports: [MatRipple, _MatInternalFormField],
      template: `<div mat-internal-form-field [labelPosition]="labelPosition" #formField>
  <div class="mdc-radio" [class.mdc-radio--disabled]="disabled">
    <!-- Render this element first so the input is on top. -->
    <div class="mat-mdc-radio-touch-target" (click)="_onTouchTargetClick($event)"></div>
    <input #input class="mdc-radio__native-control" type="radio"
           [id]="inputId"
           [checked]="checked"
           [disabled]="disabled && !disabledInteractive"
           [attr.name]="name"
           [attr.value]="value"
           [required]="required"
           [attr.aria-label]="ariaLabel"
           [attr.aria-labelledby]="ariaLabelledby"
           [attr.aria-describedby]="ariaDescribedby"
           [attr.aria-disabled]="disabled && disabledInteractive ? 'true' : null"
           (change)="_onInputInteraction($event)">
    <div class="mdc-radio__background">
      <div class="mdc-radio__outer-circle"></div>
      <div class="mdc-radio__inner-circle"></div>
    </div>
    <div mat-ripple class="mat-radio-ripple mat-focus-indicator"
         [matRippleTrigger]="_rippleTrigger.nativeElement"
         [matRippleDisabled]="_isRippleDisabled()"
         [matRippleCentered]="true">
      <div class="mat-ripple-element mat-radio-persistent-ripple"></div>
    </div>
  </div>
  <label class="mdc-label" [for]="inputId">
    <ng-content></ng-content>
  </label>
</div>
`,
      styles: ['.mat-mdc-radio-button{-webkit-tap-highlight-color:rgba(0,0,0,0)}.mat-mdc-radio-button .mdc-radio{display:inline-block;position:relative;flex:0 0 auto;box-sizing:content-box;width:20px;height:20px;cursor:pointer;will-change:opacity,transform,border-color,color;padding:calc((var(--mdc-radio-state-layer-size, 40px) - 20px)/2)}.mat-mdc-radio-button .mdc-radio:hover>.mdc-radio__native-control:not([disabled]):not(:focus)~.mdc-radio__background::before{opacity:.04;transform:scale(1)}.mat-mdc-radio-button .mdc-radio:hover>.mdc-radio__native-control:not([disabled])~.mdc-radio__background>.mdc-radio__outer-circle{border-color:var(--mdc-radio-unselected-hover-icon-color, var(--mat-sys-on-surface))}.mat-mdc-radio-button .mdc-radio:hover>.mdc-radio__native-control:enabled:checked+.mdc-radio__background>.mdc-radio__outer-circle,.mat-mdc-radio-button .mdc-radio:hover>.mdc-radio__native-control:enabled:checked+.mdc-radio__background>.mdc-radio__inner-circle{border-color:var(--mdc-radio-selected-hover-icon-color, var(--mat-sys-primary))}.mat-mdc-radio-button .mdc-radio:active>.mdc-radio__native-control:enabled:not(:checked)+.mdc-radio__background>.mdc-radio__outer-circle{border-color:var(--mdc-radio-unselected-pressed-icon-color, var(--mat-sys-on-surface))}.mat-mdc-radio-button .mdc-radio:active>.mdc-radio__native-control:enabled:checked+.mdc-radio__background>.mdc-radio__outer-circle,.mat-mdc-radio-button .mdc-radio:active>.mdc-radio__native-control:enabled:checked+.mdc-radio__background>.mdc-radio__inner-circle{border-color:var(--mdc-radio-selected-pressed-icon-color, var(--mat-sys-primary))}.mat-mdc-radio-button .mdc-radio__background{display:inline-block;position:relative;box-sizing:border-box;width:20px;height:20px}.mat-mdc-radio-button .mdc-radio__background::before{position:absolute;transform:scale(0, 0);border-radius:50%;opacity:0;pointer-events:none;content:"";transition:opacity 90ms cubic-bezier(0.4, 0, 0.6, 1),transform 90ms cubic-bezier(0.4, 0, 0.6, 1);width:var(--mdc-radio-state-layer-size, 40px);height:var(--mdc-radio-state-layer-size, 40px);top:calc(-1*(var(--mdc-radio-state-layer-size, 40px) - 20px)/2);left:calc(-1*(var(--mdc-radio-state-layer-size, 40px) - 20px)/2)}.mat-mdc-radio-button .mdc-radio__outer-circle{position:absolute;top:0;left:0;box-sizing:border-box;width:100%;height:100%;border-width:2px;border-style:solid;border-radius:50%;transition:border-color 90ms cubic-bezier(0.4, 0, 0.6, 1)}.mat-mdc-radio-button .mdc-radio__inner-circle{position:absolute;top:0;left:0;box-sizing:border-box;width:100%;height:100%;transform:scale(0, 0);border-width:10px;border-style:solid;border-radius:50%;transition:transform 90ms cubic-bezier(0.4, 0, 0.6, 1),border-color 90ms cubic-bezier(0.4, 0, 0.6, 1)}.mat-mdc-radio-button .mdc-radio__native-control{position:absolute;margin:0;padding:0;opacity:0;top:0;right:0;left:0;cursor:inherit;z-index:1;width:var(--mdc-radio-state-layer-size, 40px);height:var(--mdc-radio-state-layer-size, 40px)}.mat-mdc-radio-button .mdc-radio__native-control:checked+.mdc-radio__background,.mat-mdc-radio-button .mdc-radio__native-control:disabled+.mdc-radio__background{transition:opacity 90ms cubic-bezier(0, 0, 0.2, 1),transform 90ms cubic-bezier(0, 0, 0.2, 1)}.mat-mdc-radio-button .mdc-radio__native-control:checked+.mdc-radio__background>.mdc-radio__outer-circle,.mat-mdc-radio-button .mdc-radio__native-control:disabled+.mdc-radio__background>.mdc-radio__outer-circle{transition:border-color 90ms cubic-bezier(0, 0, 0.2, 1)}.mat-mdc-radio-button .mdc-radio__native-control:checked+.mdc-radio__background>.mdc-radio__inner-circle,.mat-mdc-radio-button .mdc-radio__native-control:disabled+.mdc-radio__background>.mdc-radio__inner-circle{transition:transform 90ms cubic-bezier(0, 0, 0.2, 1),border-color 90ms cubic-bezier(0, 0, 0.2, 1)}.mat-mdc-radio-button .mdc-radio__native-control:focus+.mdc-radio__background::before{transform:scale(1);opacity:.12;transition:opacity 90ms cubic-bezier(0, 0, 0.2, 1),transform 90ms cubic-bezier(0, 0, 0.2, 1)}.mat-mdc-radio-button .mdc-radio__native-control:disabled:not(:checked)+.mdc-radio__background>.mdc-radio__outer-circle{border-color:var(--mdc-radio-disabled-unselected-icon-color, var(--mat-sys-on-surface));opacity:var(--mdc-radio-disabled-unselected-icon-opacity, 0.38)}.mat-mdc-radio-button .mdc-radio__native-control:disabled+.mdc-radio__background{cursor:default}.mat-mdc-radio-button .mdc-radio__native-control:disabled+.mdc-radio__background>.mdc-radio__inner-circle,.mat-mdc-radio-button .mdc-radio__native-control:disabled+.mdc-radio__background>.mdc-radio__outer-circle{border-color:var(--mdc-radio-disabled-selected-icon-color, var(--mat-sys-on-surface));opacity:var(--mdc-radio-disabled-selected-icon-opacity, 0.38)}.mat-mdc-radio-button .mdc-radio__native-control:enabled:not(:checked)+.mdc-radio__background>.mdc-radio__outer-circle{border-color:var(--mdc-radio-unselected-icon-color, var(--mat-sys-on-surface-variant))}.mat-mdc-radio-button .mdc-radio__native-control:enabled:checked+.mdc-radio__background>.mdc-radio__outer-circle,.mat-mdc-radio-button .mdc-radio__native-control:enabled:checked+.mdc-radio__background>.mdc-radio__inner-circle{border-color:var(--mdc-radio-selected-icon-color, var(--mat-sys-primary))}.mat-mdc-radio-button .mdc-radio__native-control:enabled:focus:checked+.mdc-radio__background>.mdc-radio__inner-circle,.mat-mdc-radio-button .mdc-radio__native-control:enabled:focus:checked+.mdc-radio__background>.mdc-radio__outer-circle{border-color:var(--mdc-radio-selected-focus-icon-color, var(--mat-sys-primary))}.mat-mdc-radio-button .mdc-radio__native-control:checked+.mdc-radio__background>.mdc-radio__inner-circle{transform:scale(0.5);transition:transform 90ms cubic-bezier(0, 0, 0.2, 1),border-color 90ms cubic-bezier(0, 0, 0.2, 1)}.mat-mdc-radio-button.mat-mdc-radio-disabled-interactive .mdc-radio--disabled{pointer-events:auto}.mat-mdc-radio-button.mat-mdc-radio-disabled-interactive .mdc-radio--disabled .mdc-radio__native-control:not(:checked)+.mdc-radio__background>.mdc-radio__outer-circle{border-color:var(--mdc-radio-disabled-unselected-icon-color, var(--mat-sys-on-surface));opacity:var(--mdc-radio-disabled-unselected-icon-opacity, 0.38)}.mat-mdc-radio-button.mat-mdc-radio-disabled-interactive .mdc-radio--disabled:hover .mdc-radio__native-control:checked+.mdc-radio__background>.mdc-radio__inner-circle,.mat-mdc-radio-button.mat-mdc-radio-disabled-interactive .mdc-radio--disabled:hover .mdc-radio__native-control:checked+.mdc-radio__background>.mdc-radio__outer-circle,.mat-mdc-radio-button.mat-mdc-radio-disabled-interactive .mdc-radio--disabled .mdc-radio__native-control:checked:focus+.mdc-radio__background>.mdc-radio__inner-circle,.mat-mdc-radio-button.mat-mdc-radio-disabled-interactive .mdc-radio--disabled .mdc-radio__native-control:checked:focus+.mdc-radio__background>.mdc-radio__outer-circle,.mat-mdc-radio-button.mat-mdc-radio-disabled-interactive .mdc-radio--disabled .mdc-radio__native-control+.mdc-radio__background>.mdc-radio__inner-circle,.mat-mdc-radio-button.mat-mdc-radio-disabled-interactive .mdc-radio--disabled .mdc-radio__native-control+.mdc-radio__background>.mdc-radio__outer-circle{border-color:var(--mdc-radio-disabled-selected-icon-color, var(--mat-sys-on-surface));opacity:var(--mdc-radio-disabled-selected-icon-opacity, 0.38)}.mat-mdc-radio-button._mat-animation-noopable .mdc-radio__background::before,.mat-mdc-radio-button._mat-animation-noopable .mdc-radio__outer-circle,.mat-mdc-radio-button._mat-animation-noopable .mdc-radio__inner-circle{transition:none !important}.mat-mdc-radio-button .mdc-radio__background::before{background-color:var(--mat-radio-ripple-color, var(--mat-sys-on-surface))}.mat-mdc-radio-button.mat-mdc-radio-checked .mat-ripple-element,.mat-mdc-radio-button.mat-mdc-radio-checked .mdc-radio__background::before{background-color:var(--mat-radio-checked-ripple-color, var(--mat-sys-primary))}.mat-mdc-radio-button.mat-mdc-radio-disabled-interactive .mdc-radio--disabled .mat-ripple-element,.mat-mdc-radio-button.mat-mdc-radio-disabled-interactive .mdc-radio--disabled .mdc-radio__background::before{background-color:var(--mat-radio-ripple-color, var(--mat-sys-on-surface))}.mat-mdc-radio-button .mat-internal-form-field{color:var(--mat-radio-label-text-color, var(--mat-sys-on-surface));font-family:var(--mat-radio-label-text-font, var(--mat-sys-body-medium-font));line-height:var(--mat-radio-label-text-line-height, var(--mat-sys-body-medium-line-height));font-size:var(--mat-radio-label-text-size, var(--mat-sys-body-medium-size));letter-spacing:var(--mat-radio-label-text-tracking, var(--mat-sys-body-medium-tracking));font-weight:var(--mat-radio-label-text-weight, var(--mat-sys-body-medium-weight))}.mat-mdc-radio-button .mdc-radio--disabled+label{color:var(--mat-radio-disabled-label-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent))}.mat-mdc-radio-button .mat-radio-ripple{top:0;left:0;right:0;bottom:0;position:absolute;pointer-events:none;border-radius:50%}.mat-mdc-radio-button .mat-radio-ripple>.mat-ripple-element{opacity:.14}.mat-mdc-radio-button .mat-radio-ripple::before{border-radius:50%}.mat-mdc-radio-button .mdc-radio>.mdc-radio__native-control:focus:enabled:not(:checked)~.mdc-radio__background>.mdc-radio__outer-circle{border-color:var(--mdc-radio-unselected-focus-icon-color, var(--mat-sys-on-surface))}.mat-mdc-radio-button.cdk-focused .mat-focus-indicator::before{content:""}.mat-mdc-radio-disabled{cursor:default;pointer-events:none}.mat-mdc-radio-disabled.mat-mdc-radio-disabled-interactive{pointer-events:auto}.mat-mdc-radio-touch-target{position:absolute;top:50%;left:50%;height:48px;width:48px;transform:translate(-50%, -50%);display:var(--mat-radio-touch-target-display, block)}[dir=rtl] .mat-mdc-radio-touch-target{left:auto;right:50%;transform:translate(50%, -50%)}\n']
    }]
  }], () => [], {
    id: [{
      type: Input
    }],
    name: [{
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
    value: [{
      type: Input
    }],
    labelPosition: [{
      type: Input
    }],
    disabled: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
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
    disabledInteractive: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    change: [{
      type: Output
    }],
    _inputElement: [{
      type: ViewChild,
      args: ["input"]
    }],
    _rippleTrigger: [{
      type: ViewChild,
      args: ["formField", {
        read: ElementRef,
        static: true
      }]
    }]
  });
})();
var MatRadioModule = class _MatRadioModule {
  static \u0275fac = function MatRadioModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _MatRadioModule)();
  };
  static \u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
    type: _MatRadioModule
  });
  static \u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({
    imports: [MatCommonModule, MatRippleModule, MatRadioButton, MatCommonModule]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatRadioModule, [{
    type: NgModule,
    args: [{
      imports: [MatCommonModule, MatRippleModule, MatRadioGroup, MatRadioButton],
      exports: [MatCommonModule, MatRadioGroup, MatRadioButton]
    }]
  }], null, null);
})();

// src/app/pages/acesso/signup/signup.component.ts
function SignUpComponent_mat_error_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error");
    \u0275\u0275text(1, " Este campo \xE9 obrigat\xF3rio ");
    \u0275\u0275elementEnd();
  }
}
function SignUpComponent_mat_error_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error");
    \u0275\u0275text(1, " Este campo \xE9 obrigat\xF3rio ");
    \u0275\u0275elementEnd();
  }
}
function SignUpComponent_mat_error_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error");
    \u0275\u0275text(1, " E-mail inv\xE1lido ");
    \u0275\u0275elementEnd();
  }
}
function SignUpComponent_mat_error_25_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error");
    \u0275\u0275text(1, " Este campo \xE9 obrigat\xF3rio ");
    \u0275\u0275elementEnd();
  }
}
function SignUpComponent_mat_error_31_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error");
    \u0275\u0275text(1, " Este campo \xE9 obrigat\xF3rio ");
    \u0275\u0275elementEnd();
  }
}
function SignUpComponent_mat_error_32_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error");
    \u0275\u0275text(1, " A senha deve ter no m\xEDnimo 8 caracteres ");
    \u0275\u0275elementEnd();
  }
}
function SignUpComponent_mat_error_33_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error");
    \u0275\u0275text(1, " A senha deve conter ao menos um caractere especial ");
    \u0275\u0275elementEnd();
  }
}
function SignUpComponent_mat_error_39_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error");
    \u0275\u0275text(1, " Este campo \xE9 obrigat\xF3rio ");
    \u0275\u0275elementEnd();
  }
}
function SignUpComponent_mat_error_40_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error");
    \u0275\u0275text(1, " As senhas n\xE3o coincidem ");
    \u0275\u0275elementEnd();
  }
}
function SignUpComponent_mat_error_49_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error");
    \u0275\u0275text(1, " Este campo \xE9 obrigat\xF3rio ");
    \u0275\u0275elementEnd();
  }
}
function SignUpComponent_mat_error_54_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error");
    \u0275\u0275text(1, " Este campo \xE9 obrigat\xF3rio ");
    \u0275\u0275elementEnd();
  }
}
function SignUpComponent_mat_error_60_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error");
    \u0275\u0275text(1, " Este campo \xE9 obrigat\xF3rio ");
    \u0275\u0275elementEnd();
  }
}
function SignUpComponent_mat_error_65_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error");
    \u0275\u0275text(1, " Este campo \xE9 obrigat\xF3rio ");
    \u0275\u0275elementEnd();
  }
}
function SignUpComponent_mat_error_71_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error");
    \u0275\u0275text(1, " Este campo \xE9 obrigat\xF3rio ");
    \u0275\u0275elementEnd();
  }
}
function SignUpComponent_mat_error_76_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error");
    \u0275\u0275text(1, " Este campo \xE9 obrigat\xF3rio ");
    \u0275\u0275elementEnd();
  }
}
function SignUpComponent_mat_error_99_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error");
    \u0275\u0275text(1, " Este campo \xE9 obrigat\xF3rio ");
    \u0275\u0275elementEnd();
  }
}
function SignUpComponent_mat_error_105_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error");
    \u0275\u0275text(1, " Este campo \xE9 obrigat\xF3rio ");
    \u0275\u0275elementEnd();
  }
}
function SignUpComponent_mat_error_106_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error");
    \u0275\u0275text(1, " E-mail inv\xE1lido ");
    \u0275\u0275elementEnd();
  }
}
function SignUpComponent_mat_error_112_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error");
    \u0275\u0275text(1, " Este campo \xE9 obrigat\xF3rio ");
    \u0275\u0275elementEnd();
  }
}
function SignUpComponent_mat_error_113_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error");
    \u0275\u0275text(1, " A senha deve ter no m\xEDnimo 8 caracteres ");
    \u0275\u0275elementEnd();
  }
}
function SignUpComponent_mat_error_114_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error");
    \u0275\u0275text(1, " A senha deve conter ao menos um caractere especial ");
    \u0275\u0275elementEnd();
  }
}
function SignUpComponent_mat_error_120_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error");
    \u0275\u0275text(1, " Este campo \xE9 obrigat\xF3rio ");
    \u0275\u0275elementEnd();
  }
}
function SignUpComponent_mat_error_121_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error");
    \u0275\u0275text(1, " As senhas n\xE3o coincidem ");
    \u0275\u0275elementEnd();
  }
}
function SignUpComponent_mat_error_131_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error");
    \u0275\u0275text(1, " Este campo \xE9 obrigat\xF3rio ");
    \u0275\u0275elementEnd();
  }
}
function SignUpComponent_mat_error_136_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error");
    \u0275\u0275text(1, " Este campo \xE9 obrigat\xF3rio ");
    \u0275\u0275elementEnd();
  }
}
function SignUpComponent_mat_error_142_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error");
    \u0275\u0275text(1, " Este campo \xE9 obrigat\xF3rio ");
    \u0275\u0275elementEnd();
  }
}
function SignUpComponent_mat_error_147_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error");
    \u0275\u0275text(1, " Este campo \xE9 obrigat\xF3rio ");
    \u0275\u0275elementEnd();
  }
}
function SignUpComponent_mat_error_153_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error");
    \u0275\u0275text(1, " Este campo \xE9 obrigat\xF3rio ");
    \u0275\u0275elementEnd();
  }
}
function SignUpComponent_mat_error_158_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error");
    \u0275\u0275text(1, " Este campo \xE9 obrigat\xF3rio ");
    \u0275\u0275elementEnd();
  }
}
function SignUpComponent_mat_option_172_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 40);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const tipo_r1 = ctx.$implicit;
    \u0275\u0275property("value", tipo_r1);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(tipo_r1);
  }
}
function SignUpComponent_mat_error_173_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error");
    \u0275\u0275text(1, " Este campo \xE9 obrigat\xF3rio ");
    \u0275\u0275elementEnd();
  }
}
function SignUpComponent_mat_error_179_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error");
    \u0275\u0275text(1, " Este campo \xE9 obrigat\xF3rio ");
    \u0275\u0275elementEnd();
  }
}
function SignUpComponent_mat_error_180_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error");
    \u0275\u0275text(1, " Deve ter pelo menos 1 mesa ");
    \u0275\u0275elementEnd();
  }
}
function SignUpComponent_mat_error_185_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error");
    \u0275\u0275text(1, " Este campo \xE9 obrigat\xF3rio ");
    \u0275\u0275elementEnd();
  }
}
function SignUpComponent_mat_error_193_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error");
    \u0275\u0275text(1, " Este campo \xE9 obrigat\xF3rio ");
    \u0275\u0275elementEnd();
  }
}
function SignUpComponent_mat_error_194_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error");
    \u0275\u0275text(1, " M\xE1ximo de 500 caracteres ");
    \u0275\u0275elementEnd();
  }
}
function SignUpComponent_div_199_mat_option_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 40);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const dia_r2 = ctx.$implicit;
    \u0275\u0275property("value", dia_r2.value);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(dia_r2.label);
  }
}
function SignUpComponent_div_199_button_14_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 46);
    \u0275\u0275listener("click", function SignUpComponent_div_199_button_14_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r3);
      const i_r4 = \u0275\u0275nextContext().index;
      const ctx_r4 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r4.removeHorario(i_r4));
    });
    \u0275\u0275elementStart(1, "mat-icon");
    \u0275\u0275text(2, "delete");
    \u0275\u0275elementEnd()();
  }
}
function SignUpComponent_div_199_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 41)(1, "mat-form-field", 14)(2, "mat-label");
    \u0275\u0275text(3, "Dia da Semana");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "mat-select", 42);
    \u0275\u0275template(5, SignUpComponent_div_199_mat_option_5_Template, 2, 2, "mat-option", 32);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "mat-form-field", 14)(7, "mat-label");
    \u0275\u0275text(8, "Abertura");
    \u0275\u0275elementEnd();
    \u0275\u0275element(9, "input", 43);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "mat-form-field", 14)(11, "mat-label");
    \u0275\u0275text(12, "Fechamento");
    \u0275\u0275elementEnd();
    \u0275\u0275element(13, "input", 44);
    \u0275\u0275elementEnd();
    \u0275\u0275template(14, SignUpComponent_div_199_button_14_Template, 3, 0, "button", 45);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const i_r4 = ctx.index;
    const ctx_r4 = \u0275\u0275nextContext();
    \u0275\u0275property("formGroupName", i_r4);
    \u0275\u0275advance(5);
    \u0275\u0275property("ngForOf", ctx_r4.diasSemana);
    \u0275\u0275advance(9);
    \u0275\u0275property("ngIf", ctx_r4.horaFuncionamento.length > 1);
  }
}
var SignUpComponent = class _SignUpComponent {
  constructor() {
    this.selectedTabIndex = 0;
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
    this.diasSemana = [
      { label: "Domingo", value: "DOMINGO" },
      { label: "Segunda", value: "SEGUNDA" },
      { label: "Ter\xE7a", value: "TERCA" },
      { label: "Quarta", value: "QUARTA" },
      { label: "Quinta", value: "QUINTA" },
      { label: "Sexta", value: "SEXTA" },
      { label: "S\xE1bado", value: "SABADO" }
    ];
    this.router = inject(Router);
    this.loginService = inject(LoginService);
    this.toastService = inject(ToastrService);
    this.http = inject(HttpClient);
    this.fb = inject(FormBuilder);
    this.authService = inject(AuthService);
    this.mensagemCepInvalido = "";
    this.mensagemCepInvalidoRestaurante = "";
    this.validadorSenhaForte = (control) => {
      const valor = control.value;
      if (!valor)
        return null;
      const erros = {};
      if (valor.length < 8) {
        erros["minCaracteres"] = true;
      } else if (!/[!@#$%^&*(),.?":{}|<>]/.test(valor)) {
        erros["semCaractereEspecial"] = true;
      }
      return Object.keys(erros).length ? erros : null;
    };
    this.passwordMatchValidator = (group) => {
      const password = group.get("senha")?.value;
      const passwordConfirm = group.get("passwordConfirm");
      if (password !== passwordConfirm?.value) {
        passwordConfirm?.setErrors({ passwordMismatch: true });
      } else {
        const currentErrors = __spreadValues({}, passwordConfirm?.errors);
        delete currentErrors["passwordMismatch"];
        passwordConfirm?.setErrors(Object.keys(currentErrors).length ? currentErrors : null);
      }
      return null;
    };
    this.clienteForm = new FormGroup({
      nome: new FormControl("", { nonNullable: true, validators: [Validators.required] }),
      email: new FormControl("", { nonNullable: true, validators: [Validators.required, Validators.email] }),
      senha: new FormControl("", { nonNullable: true, validators: [Validators.required, this.validadorSenhaForte] }),
      passwordConfirm: new FormControl("", { nonNullable: true, validators: [Validators.required] }),
      tipo: new FormControl("CLIENTE", { nonNullable: true, validators: [Validators.required] }),
      cep: new FormControl("", { nonNullable: true, validators: [Validators.required] }),
      estado: new FormControl("", { nonNullable: true, validators: [Validators.required] }),
      cidade: new FormControl("", { nonNullable: true, validators: [Validators.required] }),
      bairro: new FormControl("", { nonNullable: true, validators: [Validators.required] }),
      rua: new FormControl("", { nonNullable: true, validators: [Validators.required] }),
      numero: new FormControl("", { nonNullable: true, validators: [Validators.required] }),
      complemento: new FormControl("", { nonNullable: true }),
      telefone: new FormControl("", { nonNullable: true, validators: [Validators.required] })
    }, { validators: this.passwordMatchValidator });
    this.restauranteForm = this.fb.group({
      nomeCompleto: ["", Validators.required],
      email: ["", [Validators.required, Validators.email]],
      senha: ["", [Validators.required, this.validadorSenhaForte]],
      passwordConfirm: ["", Validators.required],
      endereco: this.fb.group({
        cep: ["", Validators.required],
        estado: ["", Validators.required],
        cidade: ["", Validators.required],
        bairro: ["", Validators.required],
        rua: ["", Validators.required],
        numero: ["", Validators.required],
        complemento: [""]
      }),
      tipoCozinha: ["", Validators.required],
      telefone: ["", Validators.required],
      descricao: ["", [Validators.required, Validators.maxLength(500)]],
      quantidadeMesas: [1, [Validators.required, Validators.min(1)]],
      horaFuncionamento: this.fb.array([], Validators.required)
      // CORREÇÃO: Usamos a mesma função validadora para ambos os forms
    }, { validators: this.passwordMatchValidator });
  }
  get horaFuncionamento() {
    return this.restauranteForm.get("horaFuncionamento");
  }
  get enderecoFormGroup() {
    return this.restauranteForm.get("endereco");
  }
  // A função 'passwordMatchValidatorRestaurante' era redundante e foi removida.
  buscarCepGenerico(formGroup, mensagemProperty) {
    const isRestaurante = !!formGroup.get("endereco.cep");
    const cepControl = isRestaurante ? formGroup.get("endereco.cep") : formGroup.get("cep");
    const cep = cepControl?.value || "";
    if (!cep || cep.replace(/\D/g, "").length !== 8)
      return;
    this.http.get(`https://viacep.com.br/ws/${cep.replace(/\D/g, "")}/json/`).subscribe({
      next: (res) => {
        if (res.erro) {
          this[mensagemProperty] = "CEP n\xE3o encontrado.";
          return;
        }
        this[mensagemProperty] = "";
        const addressData = {
          estado: res.uf,
          cidade: res.localidade,
          bairro: res.bairro,
          rua: res.logradouro
        };
        formGroup.patchValue(isRestaurante ? { endereco: addressData } : addressData);
      },
      error: () => {
        this[mensagemProperty] = "Erro ao buscar CEP.";
      }
    });
  }
  cadastrarCliente() {
    if (this.clienteForm.invalid) {
      this.clienteForm.markAllAsTouched();
      return;
    }
    const formValue = this.clienteForm.getRawValue();
    const payload = {
      nome: formValue.nome,
      email: formValue.email,
      senha: formValue.senha,
      telefone: formValue.telefone,
      endereco: {
        pais: "Brasil",
        cep: formValue.cep,
        estado: formValue.estado,
        cidade: formValue.cidade,
        bairro: formValue.bairro,
        rua: formValue.rua,
        numero: formValue.numero,
        complemento: formValue.complemento
      },
      tipo: "CLIENTE"
    };
    this.loginService.signup(payload).subscribe({
      next: (res) => {
        this.authService.setAuthData(res.token, res.nome, res.tipoUsuario, res.imagem);
        this.toastService.success("Cadastro realizado com sucesso!");
        this.router.navigate(["verificacao-email"]);
      },
      error: (err) => {
        const errorMessage = err.error?.message || "Erro inesperado! Tente novamente mais tarde";
        this.toastService.error(errorMessage);
      }
    });
  }
  cadastrarRestaurante() {
    if (this.restauranteForm.invalid) {
      this.restauranteForm.markAllAsTouched();
      return;
    }
    const form = this.restauranteForm.getRawValue();
    const horaFuncionamento = form.horaFuncionamento.filter((h) => h.diaSemana && h.abertura && h.fechamento).map((h) => ({
      diaSemana: h.diaSemana,
      abertura: h.abertura,
      fechamento: h.fechamento
    }));
    const payload = {
      nome: form.nomeCompleto,
      email: form.email,
      senha: form.senha,
      tipo: "RESTAURANTE",
      tipoCozinha: form.tipoCozinha,
      quantidadeMesas: form.quantidadeMesas,
      telefone: form.telefone,
      descricao: form.descricao,
      endereco: {
        cep: form.endereco.cep,
        pais: "Brasil",
        estado: form.endereco.estado,
        cidade: form.endereco.cidade,
        bairro: form.endereco.bairro,
        rua: form.endereco.rua,
        numero: form.endereco.numero,
        complemento: form.endereco.complemento
      },
      horaFuncionamento
    };
    this.loginService.signup(payload).subscribe({
      next: (res) => {
        this.authService.setAuthData(res.token, res.nome, res.tipoUsuario, res.id, res.imagem);
        this.toastService.success("Cadastro realizado com sucesso!");
        this.router.navigate(["verificacao-email"]);
      },
      error: (err) => {
        const errorMessage = err.error?.message || "Erro inesperado! Tente novamente mais tarde";
        this.toastService.error(errorMessage);
      }
    });
  }
  submitForm() {
    if (this.selectedTabIndex === 0) {
      this.cadastrarCliente();
    } else {
      this.cadastrarRestaurante();
    }
  }
  addHorario() {
    this.horaFuncionamento.push(this.fb.group({
      diaSemana: ["", Validators.required],
      abertura: ["", Validators.required],
      fechamento: ["", Validators.required]
    }));
  }
  removeHorario(index) {
    this.horaFuncionamento.removeAt(index);
  }
  isCurrentFormValid() {
    return this.selectedTabIndex === 0 ? this.clienteForm.valid : this.restauranteForm.valid;
  }
  irParaLogin() {
    this.router.navigate(["/login"]);
  }
  static {
    this.\u0275fac = function SignUpComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _SignUpComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SignUpComponent, selectors: [["app-signup"]], features: [\u0275\u0275ProvidersFeature([])], decls: 211, vars: 43, consts: [["mat-stretch-tabs", "false", "mat-align-tabs", "center", 1, "signup-tabs", 3, "selectedIndexChange", "selectedIndex"], ["label", "Cliente"], [1, "signup-form", 3, "ngSubmit", "formGroup"], [1, "form-section"], [1, "section-title"], [1, "form-row"], ["appearance", "outline", 1, "full-width"], ["matInput", "", "formControlName", "nome", "type", "text"], [4, "ngIf"], ["matInput", "", "formControlName", "email", "type", "email"], ["matInput", "", "formControlName", "telefone", "mask", "(00) 00000-0000"], ["matInput", "", "formControlName", "senha", "type", "password"], ["matInput", "", "formControlName", "passwordConfirm", "type", "password"], [1, "form-row", "two-columns"], ["appearance", "outline"], ["matInput", "", "formControlName", "cep", "mask", "00000-000", 3, "blur"], ["matInput", "", "formControlName", "estado"], ["matInput", "", "formControlName", "cidade"], ["matInput", "", "formControlName", "bairro"], ["matInput", "", "formControlName", "rua"], ["matInput", "", "formControlName", "numero"], ["matInput", "", "formControlName", "complemento"], [1, "actions"], ["type", "submit", 1, "primary-action", 3, "disabled"], ["nz-icon", "", "nzType", "user-add", "nzTheme", "outline"], ["type", "button", 1, "secondary-action", 3, "click"], ["nz-icon", "", "nzType", "login", "nzTheme", "outline"], ["label", "Restaurante"], ["matInput", "", "formControlName", "nomeCompleto"], ["formGroupName", "endereco"], [1, "form-row", "full-width"], ["formControlName", "tipoCozinha"], [3, "value", 4, "ngFor", "ngForOf"], ["matInput", "", "type", "number", "formControlName", "quantidadeMesas", "min", "1"], ["matInput", "", "formControlName", "descricao", "rows", "3", "maxlength", "500"], ["align", "end"], ["formArrayName", "horaFuncionamento"], ["class", "horario-row-flex", 3, "formGroupName", 4, "ngFor", "ngForOf"], ["mat-stroked-button", "", "color", "primary", "type", "button", 1, "add-horario-btn", 3, "click"], ["nz-icon", "", "nzType", "shop", "nzTheme", "outline"], [3, "value"], [1, "horario-row-flex", 3, "formGroupName"], ["formControlName", "diaSemana"], ["matInput", "", "type", "time", "formControlName", "abertura"], ["matInput", "", "type", "time", "formControlName", "fechamento"], ["mat-icon-button", "", "color", "warn", 3, "click", 4, "ngIf"], ["mat-icon-button", "", "color", "warn", 3, "click"]], template: function SignUpComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "app-default-login-layout")(1, "mat-tab-group", 0);
        \u0275\u0275twoWayListener("selectedIndexChange", function SignUpComponent_Template_mat_tab_group_selectedIndexChange_1_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.selectedTabIndex, $event) || (ctx.selectedTabIndex = $event);
          return $event;
        });
        \u0275\u0275elementStart(2, "mat-tab", 1)(3, "form", 2);
        \u0275\u0275listener("ngSubmit", function SignUpComponent_Template_form_ngSubmit_3_listener() {
          return ctx.cadastrarCliente();
        });
        \u0275\u0275elementStart(4, "div", 3)(5, "h3", 4);
        \u0275\u0275text(6, "Informa\xE7\xF5es da Conta");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(7, "div", 5)(8, "mat-form-field", 6)(9, "mat-label");
        \u0275\u0275text(10, "Nome Completo");
        \u0275\u0275elementEnd();
        \u0275\u0275element(11, "input", 7);
        \u0275\u0275template(12, SignUpComponent_mat_error_12_Template, 2, 0, "mat-error", 8);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(13, "div", 5)(14, "mat-form-field", 6)(15, "mat-label");
        \u0275\u0275text(16, "E-mail");
        \u0275\u0275elementEnd();
        \u0275\u0275element(17, "input", 9);
        \u0275\u0275template(18, SignUpComponent_mat_error_18_Template, 2, 0, "mat-error", 8)(19, SignUpComponent_mat_error_19_Template, 2, 0, "mat-error", 8);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(20, "div", 5)(21, "mat-form-field", 6)(22, "mat-label");
        \u0275\u0275text(23, "Telefone");
        \u0275\u0275elementEnd();
        \u0275\u0275element(24, "input", 10);
        \u0275\u0275template(25, SignUpComponent_mat_error_25_Template, 2, 0, "mat-error", 8);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(26, "div", 5)(27, "mat-form-field", 6)(28, "mat-label");
        \u0275\u0275text(29, "Senha");
        \u0275\u0275elementEnd();
        \u0275\u0275element(30, "input", 11);
        \u0275\u0275template(31, SignUpComponent_mat_error_31_Template, 2, 0, "mat-error", 8)(32, SignUpComponent_mat_error_32_Template, 2, 0, "mat-error", 8)(33, SignUpComponent_mat_error_33_Template, 2, 0, "mat-error", 8);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(34, "div", 5)(35, "mat-form-field", 6)(36, "mat-label");
        \u0275\u0275text(37, "Confirme sua senha");
        \u0275\u0275elementEnd();
        \u0275\u0275element(38, "input", 12);
        \u0275\u0275template(39, SignUpComponent_mat_error_39_Template, 2, 0, "mat-error", 8)(40, SignUpComponent_mat_error_40_Template, 2, 0, "mat-error", 8);
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(41, "div", 3)(42, "h3", 4);
        \u0275\u0275text(43, "Endere\xE7o");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(44, "div", 13)(45, "mat-form-field", 14)(46, "mat-label");
        \u0275\u0275text(47, "CEP");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(48, "input", 15);
        \u0275\u0275listener("blur", function SignUpComponent_Template_input_blur_48_listener() {
          return ctx.buscarCepGenerico(ctx.clienteForm, "mensagemCepInvalido");
        });
        \u0275\u0275elementEnd();
        \u0275\u0275template(49, SignUpComponent_mat_error_49_Template, 2, 0, "mat-error", 8);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(50, "mat-form-field", 14)(51, "mat-label");
        \u0275\u0275text(52, "Estado");
        \u0275\u0275elementEnd();
        \u0275\u0275element(53, "input", 16);
        \u0275\u0275template(54, SignUpComponent_mat_error_54_Template, 2, 0, "mat-error", 8);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(55, "div", 13)(56, "mat-form-field", 14)(57, "mat-label");
        \u0275\u0275text(58, "Cidade");
        \u0275\u0275elementEnd();
        \u0275\u0275element(59, "input", 17);
        \u0275\u0275template(60, SignUpComponent_mat_error_60_Template, 2, 0, "mat-error", 8);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(61, "mat-form-field", 14)(62, "mat-label");
        \u0275\u0275text(63, "Bairro");
        \u0275\u0275elementEnd();
        \u0275\u0275element(64, "input", 18);
        \u0275\u0275template(65, SignUpComponent_mat_error_65_Template, 2, 0, "mat-error", 8);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(66, "div", 13)(67, "mat-form-field", 14)(68, "mat-label");
        \u0275\u0275text(69, "Rua");
        \u0275\u0275elementEnd();
        \u0275\u0275element(70, "input", 19);
        \u0275\u0275template(71, SignUpComponent_mat_error_71_Template, 2, 0, "mat-error", 8);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(72, "mat-form-field", 14)(73, "mat-label");
        \u0275\u0275text(74, "N\xFAmero");
        \u0275\u0275elementEnd();
        \u0275\u0275element(75, "input", 20);
        \u0275\u0275template(76, SignUpComponent_mat_error_76_Template, 2, 0, "mat-error", 8);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(77, "div", 5)(78, "mat-form-field", 6)(79, "mat-label");
        \u0275\u0275text(80, "Complemento");
        \u0275\u0275elementEnd();
        \u0275\u0275element(81, "input", 21);
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(82, "div", 22)(83, "button", 23);
        \u0275\u0275element(84, "i", 24);
        \u0275\u0275text(85, " Cadastrar Cliente ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(86, "button", 25);
        \u0275\u0275listener("click", function SignUpComponent_Template_button_click_86_listener() {
          return ctx.irParaLogin();
        });
        \u0275\u0275element(87, "i", 26);
        \u0275\u0275text(88, " J\xE1 tenho uma conta ");
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(89, "mat-tab", 27)(90, "form", 2);
        \u0275\u0275listener("ngSubmit", function SignUpComponent_Template_form_ngSubmit_90_listener() {
          return ctx.cadastrarRestaurante();
        });
        \u0275\u0275elementStart(91, "div", 3)(92, "h3", 4);
        \u0275\u0275text(93, "Informa\xE7\xF5es da Conta");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(94, "div", 5)(95, "mat-form-field", 6)(96, "mat-label");
        \u0275\u0275text(97, "Nome do Restaurante");
        \u0275\u0275elementEnd();
        \u0275\u0275element(98, "input", 28);
        \u0275\u0275template(99, SignUpComponent_mat_error_99_Template, 2, 0, "mat-error", 8);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(100, "div", 5)(101, "mat-form-field", 6)(102, "mat-label");
        \u0275\u0275text(103, "E-mail");
        \u0275\u0275elementEnd();
        \u0275\u0275element(104, "input", 9);
        \u0275\u0275template(105, SignUpComponent_mat_error_105_Template, 2, 0, "mat-error", 8)(106, SignUpComponent_mat_error_106_Template, 2, 0, "mat-error", 8);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(107, "div", 5)(108, "mat-form-field", 6)(109, "mat-label");
        \u0275\u0275text(110, "Senha");
        \u0275\u0275elementEnd();
        \u0275\u0275element(111, "input", 11);
        \u0275\u0275template(112, SignUpComponent_mat_error_112_Template, 2, 0, "mat-error", 8)(113, SignUpComponent_mat_error_113_Template, 2, 0, "mat-error", 8)(114, SignUpComponent_mat_error_114_Template, 2, 0, "mat-error", 8);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(115, "div", 5)(116, "mat-form-field", 6)(117, "mat-label");
        \u0275\u0275text(118, "Confirme sua senha");
        \u0275\u0275elementEnd();
        \u0275\u0275element(119, "input", 12);
        \u0275\u0275template(120, SignUpComponent_mat_error_120_Template, 2, 0, "mat-error", 8)(121, SignUpComponent_mat_error_121_Template, 2, 0, "mat-error", 8);
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(122, "div", 3)(123, "h3", 4);
        \u0275\u0275text(124, "Endere\xE7o");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(125, "div", 29)(126, "div", 13)(127, "mat-form-field", 14)(128, "mat-label");
        \u0275\u0275text(129, "CEP");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(130, "input", 15);
        \u0275\u0275listener("blur", function SignUpComponent_Template_input_blur_130_listener() {
          return ctx.buscarCepGenerico(ctx.enderecoFormGroup, "mensagemCepInvalidoRestaurante");
        });
        \u0275\u0275elementEnd();
        \u0275\u0275template(131, SignUpComponent_mat_error_131_Template, 2, 0, "mat-error", 8);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(132, "mat-form-field", 14)(133, "mat-label");
        \u0275\u0275text(134, "Estado");
        \u0275\u0275elementEnd();
        \u0275\u0275element(135, "input", 16);
        \u0275\u0275template(136, SignUpComponent_mat_error_136_Template, 2, 0, "mat-error", 8);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(137, "div", 13)(138, "mat-form-field", 14)(139, "mat-label");
        \u0275\u0275text(140, "Cidade");
        \u0275\u0275elementEnd();
        \u0275\u0275element(141, "input", 17);
        \u0275\u0275template(142, SignUpComponent_mat_error_142_Template, 2, 0, "mat-error", 8);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(143, "mat-form-field", 14)(144, "mat-label");
        \u0275\u0275text(145, "Bairro");
        \u0275\u0275elementEnd();
        \u0275\u0275element(146, "input", 18);
        \u0275\u0275template(147, SignUpComponent_mat_error_147_Template, 2, 0, "mat-error", 8);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(148, "div", 13)(149, "mat-form-field", 14)(150, "mat-label");
        \u0275\u0275text(151, "Rua");
        \u0275\u0275elementEnd();
        \u0275\u0275element(152, "input", 19);
        \u0275\u0275template(153, SignUpComponent_mat_error_153_Template, 2, 0, "mat-error", 8);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(154, "mat-form-field", 14)(155, "mat-label");
        \u0275\u0275text(156, "N\xFAmero");
        \u0275\u0275elementEnd();
        \u0275\u0275element(157, "input", 20);
        \u0275\u0275template(158, SignUpComponent_mat_error_158_Template, 2, 0, "mat-error", 8);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(159, "div", 5)(160, "mat-form-field", 6)(161, "mat-label");
        \u0275\u0275text(162, "Complemento");
        \u0275\u0275elementEnd();
        \u0275\u0275element(163, "input", 21);
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(164, "div", 3)(165, "h3", 4);
        \u0275\u0275text(166, "Informa\xE7\xF5es do Restaurante");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(167, "div", 30)(168, "mat-form-field", 14)(169, "mat-label");
        \u0275\u0275text(170, "Tipo de Cozinha");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(171, "mat-select", 31);
        \u0275\u0275template(172, SignUpComponent_mat_option_172_Template, 2, 2, "mat-option", 32);
        \u0275\u0275elementEnd();
        \u0275\u0275template(173, SignUpComponent_mat_error_173_Template, 2, 0, "mat-error", 8);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(174, "div", 13)(175, "mat-form-field", 14)(176, "mat-label");
        \u0275\u0275text(177, "Quantidade de Mesas");
        \u0275\u0275elementEnd();
        \u0275\u0275element(178, "input", 33);
        \u0275\u0275template(179, SignUpComponent_mat_error_179_Template, 2, 0, "mat-error", 8)(180, SignUpComponent_mat_error_180_Template, 2, 0, "mat-error", 8);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(181, "mat-form-field", 14)(182, "mat-label");
        \u0275\u0275text(183, "Telefone");
        \u0275\u0275elementEnd();
        \u0275\u0275element(184, "input", 10);
        \u0275\u0275template(185, SignUpComponent_mat_error_185_Template, 2, 0, "mat-error", 8);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(186, "div", 5)(187, "mat-form-field", 6)(188, "mat-label");
        \u0275\u0275text(189, "Descri\xE7\xE3o");
        \u0275\u0275elementEnd();
        \u0275\u0275element(190, "textarea", 34);
        \u0275\u0275elementStart(191, "mat-hint", 35);
        \u0275\u0275text(192);
        \u0275\u0275elementEnd();
        \u0275\u0275template(193, SignUpComponent_mat_error_193_Template, 2, 0, "mat-error", 8)(194, SignUpComponent_mat_error_194_Template, 2, 0, "mat-error", 8);
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(195, "div", 3)(196, "h3", 4);
        \u0275\u0275text(197, "Hor\xE1rio de Funcionamento");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(198, "div", 36);
        \u0275\u0275template(199, SignUpComponent_div_199_Template, 15, 3, "div", 37);
        \u0275\u0275elementStart(200, "button", 38);
        \u0275\u0275listener("click", function SignUpComponent_Template_button_click_200_listener() {
          return ctx.addHorario();
        });
        \u0275\u0275elementStart(201, "mat-icon");
        \u0275\u0275text(202, "add");
        \u0275\u0275elementEnd();
        \u0275\u0275text(203, " Adicionar Hor\xE1rio ");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(204, "div", 22)(205, "button", 23);
        \u0275\u0275element(206, "i", 39);
        \u0275\u0275text(207, " Cadastrar Restaurante ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(208, "button", 25);
        \u0275\u0275listener("click", function SignUpComponent_Template_button_click_208_listener() {
          return ctx.irParaLogin();
        });
        \u0275\u0275element(209, "i", 26);
        \u0275\u0275text(210, " J\xE1 tenho uma conta ");
        \u0275\u0275elementEnd()()()()()();
      }
      if (rf & 2) {
        let tmp_2_0;
        let tmp_3_0;
        let tmp_4_0;
        let tmp_5_0;
        let tmp_6_0;
        let tmp_7_0;
        let tmp_8_0;
        let tmp_9_0;
        let tmp_10_0;
        let tmp_11_0;
        let tmp_12_0;
        let tmp_13_0;
        let tmp_14_0;
        let tmp_15_0;
        let tmp_16_0;
        let tmp_19_0;
        let tmp_20_0;
        let tmp_21_0;
        let tmp_22_0;
        let tmp_23_0;
        let tmp_24_0;
        let tmp_25_0;
        let tmp_26_0;
        let tmp_27_0;
        let tmp_28_0;
        let tmp_29_0;
        let tmp_30_0;
        let tmp_31_0;
        let tmp_32_0;
        let tmp_34_0;
        let tmp_35_0;
        let tmp_36_0;
        let tmp_37_0;
        let tmp_38_0;
        let tmp_39_0;
        let tmp_40_0;
        \u0275\u0275advance();
        \u0275\u0275twoWayProperty("selectedIndex", ctx.selectedTabIndex);
        \u0275\u0275advance(2);
        \u0275\u0275property("formGroup", ctx.clienteForm);
        \u0275\u0275advance(9);
        \u0275\u0275property("ngIf", (tmp_2_0 = ctx.clienteForm.get("nome")) == null ? null : tmp_2_0.hasError("required"));
        \u0275\u0275advance(6);
        \u0275\u0275property("ngIf", (tmp_3_0 = ctx.clienteForm.get("email")) == null ? null : tmp_3_0.hasError("required"));
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", (tmp_4_0 = ctx.clienteForm.get("email")) == null ? null : tmp_4_0.hasError("email"));
        \u0275\u0275advance(6);
        \u0275\u0275property("ngIf", (tmp_5_0 = ctx.clienteForm.get("telefone")) == null ? null : tmp_5_0.hasError("required"));
        \u0275\u0275advance(6);
        \u0275\u0275property("ngIf", (tmp_6_0 = ctx.clienteForm.get("senha")) == null ? null : tmp_6_0.hasError("required"));
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", (tmp_7_0 = ctx.clienteForm.get("senha")) == null ? null : tmp_7_0.hasError("minCaracteres"));
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", (tmp_8_0 = ctx.clienteForm.get("senha")) == null ? null : tmp_8_0.hasError("semCaractereEspecial"));
        \u0275\u0275advance(6);
        \u0275\u0275property("ngIf", (tmp_9_0 = ctx.clienteForm.get("passwordConfirm")) == null ? null : tmp_9_0.hasError("required"));
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", (tmp_10_0 = ctx.clienteForm.get("passwordConfirm")) == null ? null : tmp_10_0.hasError("passwordMismatch"));
        \u0275\u0275advance(9);
        \u0275\u0275property("ngIf", (tmp_11_0 = ctx.clienteForm.get("cep")) == null ? null : tmp_11_0.hasError("required"));
        \u0275\u0275advance(5);
        \u0275\u0275property("ngIf", (tmp_12_0 = ctx.clienteForm.get("estado")) == null ? null : tmp_12_0.hasError("required"));
        \u0275\u0275advance(6);
        \u0275\u0275property("ngIf", (tmp_13_0 = ctx.clienteForm.get("cidade")) == null ? null : tmp_13_0.hasError("required"));
        \u0275\u0275advance(5);
        \u0275\u0275property("ngIf", (tmp_14_0 = ctx.clienteForm.get("bairro")) == null ? null : tmp_14_0.hasError("required"));
        \u0275\u0275advance(6);
        \u0275\u0275property("ngIf", (tmp_15_0 = ctx.clienteForm.get("rua")) == null ? null : tmp_15_0.hasError("required"));
        \u0275\u0275advance(5);
        \u0275\u0275property("ngIf", (tmp_16_0 = ctx.clienteForm.get("numero")) == null ? null : tmp_16_0.hasError("required"));
        \u0275\u0275advance(7);
        \u0275\u0275property("disabled", !ctx.clienteForm.valid);
        \u0275\u0275advance(7);
        \u0275\u0275property("formGroup", ctx.restauranteForm);
        \u0275\u0275advance(9);
        \u0275\u0275property("ngIf", (tmp_19_0 = ctx.restauranteForm.get("nomeCompleto")) == null ? null : tmp_19_0.hasError("required"));
        \u0275\u0275advance(6);
        \u0275\u0275property("ngIf", (tmp_20_0 = ctx.restauranteForm.get("email")) == null ? null : tmp_20_0.hasError("required"));
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", (tmp_21_0 = ctx.restauranteForm.get("email")) == null ? null : tmp_21_0.hasError("email"));
        \u0275\u0275advance(6);
        \u0275\u0275property("ngIf", (tmp_22_0 = ctx.restauranteForm.get("senha")) == null ? null : tmp_22_0.hasError("required"));
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", (tmp_23_0 = ctx.restauranteForm.get("senha")) == null ? null : tmp_23_0.hasError("minCaracteres"));
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", (tmp_24_0 = ctx.restauranteForm.get("senha")) == null ? null : tmp_24_0.hasError("semCaractereEspecial"));
        \u0275\u0275advance(6);
        \u0275\u0275property("ngIf", (tmp_25_0 = ctx.restauranteForm.get("passwordConfirm")) == null ? null : tmp_25_0.hasError("required"));
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", (tmp_26_0 = ctx.restauranteForm.get("passwordConfirm")) == null ? null : tmp_26_0.hasError("passwordMismatch"));
        \u0275\u0275advance(10);
        \u0275\u0275property("ngIf", (tmp_27_0 = ctx.restauranteForm.get("endereco.cep")) == null ? null : tmp_27_0.hasError("required"));
        \u0275\u0275advance(5);
        \u0275\u0275property("ngIf", (tmp_28_0 = ctx.restauranteForm.get("endereco.estado")) == null ? null : tmp_28_0.hasError("required"));
        \u0275\u0275advance(6);
        \u0275\u0275property("ngIf", (tmp_29_0 = ctx.restauranteForm.get("endereco.cidade")) == null ? null : tmp_29_0.hasError("required"));
        \u0275\u0275advance(5);
        \u0275\u0275property("ngIf", (tmp_30_0 = ctx.restauranteForm.get("endereco.bairro")) == null ? null : tmp_30_0.hasError("required"));
        \u0275\u0275advance(6);
        \u0275\u0275property("ngIf", (tmp_31_0 = ctx.restauranteForm.get("endereco.rua")) == null ? null : tmp_31_0.hasError("required"));
        \u0275\u0275advance(5);
        \u0275\u0275property("ngIf", (tmp_32_0 = ctx.restauranteForm.get("endereco.numero")) == null ? null : tmp_32_0.hasError("required"));
        \u0275\u0275advance(14);
        \u0275\u0275property("ngForOf", ctx.tiposCozinha);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", (tmp_34_0 = ctx.restauranteForm.get("tipoCozinha")) == null ? null : tmp_34_0.hasError("required"));
        \u0275\u0275advance(6);
        \u0275\u0275property("ngIf", (tmp_35_0 = ctx.restauranteForm.get("quantidadeMesas")) == null ? null : tmp_35_0.hasError("required"));
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", (tmp_36_0 = ctx.restauranteForm.get("quantidadeMesas")) == null ? null : tmp_36_0.hasError("min"));
        \u0275\u0275advance(5);
        \u0275\u0275property("ngIf", (tmp_37_0 = ctx.restauranteForm.get("telefone")) == null ? null : tmp_37_0.hasError("required"));
        \u0275\u0275advance(7);
        \u0275\u0275textInterpolate1("", ((tmp_38_0 = ctx.restauranteForm.get("descricao")) == null ? null : tmp_38_0.value == null ? null : tmp_38_0.value.length) || 0, "/500");
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", (tmp_39_0 = ctx.restauranteForm.get("descricao")) == null ? null : tmp_39_0.hasError("required"));
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", (tmp_40_0 = ctx.restauranteForm.get("descricao")) == null ? null : tmp_40_0.hasError("maxlength"));
        \u0275\u0275advance(5);
        \u0275\u0275property("ngForOf", ctx.horaFuncionamento.controls);
        \u0275\u0275advance(6);
        \u0275\u0275property("disabled", !ctx.restauranteForm.valid);
      }
    }, dependencies: [
      CommonModule,
      NgForOf,
      NgIf,
      DefaultLoginLayoutComponent,
      ReactiveFormsModule,
      \u0275NgNoValidate,
      DefaultValueAccessor,
      NumberValueAccessor,
      NgControlStatus,
      NgControlStatusGroup,
      MaxLengthValidator,
      MinValidator,
      FormGroupDirective,
      FormControlName,
      FormGroupName,
      FormArrayName,
      MatFormFieldModule,
      MatFormField,
      MatLabel,
      MatHint,
      MatError,
      MatInputModule,
      MatInput,
      MatIconModule,
      MatIcon,
      MatButtonModule,
      MatButton,
      MatIconButton,
      MatDividerModule,
      MatSelectModule,
      MatSelect,
      MatOption,
      MatRadioModule,
      MatTabsModule,
      MatTab,
      MatTabGroup,
      MatCheckboxModule,
      NgxMaskDirective,
      NzIconModule,
      NzIconDirective
    ], styles: ["\n\n[_nghost-%COMP%] {\n  display: block;\n  width: 100%;\n  height: 100vh;\n  overflow-y: auto;\n  background-color: #3B221B;\n}\n[_nghost-%COMP%]::-webkit-scrollbar {\n  width: 8px;\n}\n[_nghost-%COMP%]::-webkit-scrollbar-track {\n  background: #2a1812;\n  border-radius: 4px;\n}\n[_nghost-%COMP%]::-webkit-scrollbar-thumb {\n  background: #4e2e22;\n  border-radius: 4px;\n}\n[_nghost-%COMP%]::-webkit-scrollbar-thumb:hover {\n  background: #D1495B;\n}\n.signup-tabs[_ngcontent-%COMP%] {\n  margin-top: -24px;\n  padding-bottom: 80px;\n}\n.signup-tabs[_ngcontent-%COMP%]     .mat-mdc-tab-header {\n  margin-bottom: 24px;\n  border-bottom: 1px solid rgba(255, 255, 255, 0.12);\n  position: sticky;\n  top: 0;\n  background: transparent;\n  z-index: 1;\n}\n.signup-tabs[_ngcontent-%COMP%]     .mat-mdc-tab-header .mat-mdc-tab {\n  color: rgba(255, 255, 255, 0.6);\n  min-height: 48px;\n}\n.signup-tabs[_ngcontent-%COMP%]     .mat-mdc-tab-header .mat-mdc-tab .mdc-tab__text-label {\n  transition: color 0.2s;\n}\n.signup-tabs[_ngcontent-%COMP%]     .mat-mdc-tab-header .mat-mdc-tab.mdc-tab--active .mdc-tab__text-label {\n  color: #D1495B !important;\n}\n.signup-tabs[_ngcontent-%COMP%]     .mat-mdc-tab-header .mat-mdc-tab .mdc-tab-indicator__content--underline {\n  border-color: #D1495B;\n}\n.signup-tabs[_ngcontent-%COMP%]     .mat-mdc-tab-body-wrapper {\n  height: auto;\n  overflow: visible;\n}\n.signup-form[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 32px;\n  padding: 0 16px;\n  max-width: 800px;\n  margin: 0 auto;\n}\n.signup-form[_ngcontent-%COMP%]   .form-section[_ngcontent-%COMP%] {\n  background: rgba(255, 255, 255, 0.05);\n  border-radius: 8px;\n  padding: 24px;\n  margin-bottom: 16px;\n}\n.signup-form[_ngcontent-%COMP%]   .form-section[_ngcontent-%COMP%]   .section-title[_ngcontent-%COMP%] {\n  color: #F6BD38;\n  font-size: 18px;\n  font-weight: 600;\n  margin-bottom: 24px;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n  border-left: 4px solid #F6BD38;\n  padding-left: 12px;\n}\n.signup-form[_ngcontent-%COMP%]   .form-section[_ngcontent-%COMP%]   .form-row[_ngcontent-%COMP%] {\n  margin-bottom: 16px;\n}\n.signup-form[_ngcontent-%COMP%]   .form-section[_ngcontent-%COMP%]   .form-row.two-columns[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 16px;\n}\n.signup-form[_ngcontent-%COMP%]   .form-section[_ngcontent-%COMP%]   .form-row[_ngcontent-%COMP%]:last-child {\n  margin-bottom: 0;\n}\n.signup-form[_ngcontent-%COMP%]   .form-section[_ngcontent-%COMP%]   .form-row.full-width[_ngcontent-%COMP%] {\n  grid-column: 1/-1;\n}\n  .mat-mdc-form-field {\n  width: 100%;\n}\n  .mat-mdc-form-field .mat-mdc-input-element, \n  .mat-mdc-form-field .mat-mdc-select-value-text, \n  .mat-mdc-form-field .mdc-floating-label, \n  .mat-mdc-form-field .mat-mdc-select-arrow {\n  color: white !important;\n}\n  .mat-mdc-form-field .mat-mdc-input-element:hover, \n  .mat-mdc-form-field .mat-mdc-input-element:focus {\n  color: white !important;\n}\n  .mat-mdc-form-field .mdc-text-field--outlined {\n  --mdc-outlined-text-field-label-text-color: rgba(255, 255, 255, 0.6);\n  --mdc-outlined-text-field-outline-color: rgba(255, 255, 255, 0.3);\n  --mdc-outlined-text-field-hover-outline-color: #F6BD38;\n  --mdc-outlined-text-field-focus-outline-color: #F6BD38;\n}\n  .mat-mdc-form-field .mdc-text-field--focused:not(.mdc-text-field--disabled) .mdc-floating-label {\n  color: #F6BD38 !important;\n}\n  .mat-mdc-form-field textarea {\n  min-height: 100px;\n}\n  .mat-mdc-checkbox {\n  --mdc-checkbox-selected-checkmark-color: #fff;\n  --mdc-checkbox-selected-focus-icon-color: #F6BD38;\n  --mdc-checkbox-selected-hover-icon-color: #F6BD38;\n  --mdc-checkbox-selected-icon-color: #F6BD38;\n  --mdc-checkbox-selected-pressed-icon-color: #F6BD38;\n  --mdc-checkbox-unselected-focus-icon-color: #D1495B;\n  --mdc-checkbox-unselected-hover-icon-color: #D1495B;\n  --mdc-checkbox-unselected-icon-color: #D1495B;\n  --mdc-checkbox-unselected-pressed-icon-color: #D1495B;\n}\n.horarios-grid[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 16px;\n}\n.horarios-grid[_ngcontent-%COMP%]   .horario-row[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 16px;\n}\n.horarios-grid[_ngcontent-%COMP%]   .horario-row[_ngcontent-%COMP%]   .dia-semana[_ngcontent-%COMP%] {\n  min-width: 120px;\n  color: white;\n}\n.horarios-grid[_ngcontent-%COMP%]   .horario-row[_ngcontent-%COMP%]   .horarios-inputs[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 16px;\n  flex: 1;\n}\nmat-error[_ngcontent-%COMP%] {\n  color: #D1495B !important;\n  font-size: 0.8rem;\n  font-weight: 500;\n  opacity: 1 !important;\n}\n.mat-mdc-form-field-error[_ngcontent-%COMP%] {\n  color: #D1495B !important;\n}\n@media (max-width: 768px) {\n  .signup-form[_ngcontent-%COMP%] {\n    padding: 0;\n  }\n  .signup-form[_ngcontent-%COMP%]   .form-section[_ngcontent-%COMP%] {\n    padding: 16px;\n  }\n  .signup-form[_ngcontent-%COMP%]   .form-section[_ngcontent-%COMP%]   .form-row.two-columns[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  .horarios-grid[_ngcontent-%COMP%]   .horario-row[_ngcontent-%COMP%] {\n    flex-direction: column;\n    align-items: flex-start;\n  }\n  .horarios-grid[_ngcontent-%COMP%]   .horario-row[_ngcontent-%COMP%]   .dia-semana[_ngcontent-%COMP%] {\n    min-width: auto;\n  }\n  .horarios-grid[_ngcontent-%COMP%]   .horario-row[_ngcontent-%COMP%]   .horarios-inputs[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n}\n.horario-row-flex[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 16px;\n  margin-bottom: 12px;\n}\n.add-horario-btn[_ngcontent-%COMP%] {\n  margin-top: 12px;\n  color: #3B221B !important;\n  border-color: #F6BD38 !important;\n  background: #F6BD38 !important;\n  font-weight: 600;\n}\n.add-horario-btn[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  color: #3B221B !important;\n}\n.actions[_ngcontent-%COMP%] {\n  margin-top: 2rem;\n  display: flex;\n  flex-direction: column;\n  gap: 1rem;\n  padding: 0 16px;\n}\n.actions[_ngcontent-%COMP%]   .primary-action[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 50px;\n  background:\n    linear-gradient(\n      135deg,\n      #F6BD38 0%,\n      #FDD835 100%);\n  border: none;\n  color: #4A3429;\n  font-weight: 600;\n  font-size: 1rem;\n  border-radius: 8px;\n  transition: all 0.3s ease;\n  cursor: pointer;\n}\n.actions[_ngcontent-%COMP%]   .primary-action[_ngcontent-%COMP%]:hover:not(:disabled) {\n  transform: translateY(-2px);\n  box-shadow: 0 8px 25px rgba(246, 189, 56, 0.4);\n}\n.actions[_ngcontent-%COMP%]   .primary-action[_ngcontent-%COMP%]:disabled {\n  opacity: 0.6;\n  cursor: not-allowed;\n  transform: none;\n}\n.actions[_ngcontent-%COMP%]   .primary-action[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  margin-right: 0.5rem;\n}\n.actions[_ngcontent-%COMP%]   .secondary-action[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 45px;\n  border: 1px solid rgba(246, 189, 56, 0.3);\n  color: #F6BD38;\n  background: transparent;\n  font-weight: 500;\n  border-radius: 8px;\n  transition: all 0.3s ease;\n  cursor: pointer;\n}\n.actions[_ngcontent-%COMP%]   .secondary-action[_ngcontent-%COMP%]:hover {\n  background: rgba(246, 189, 56, 0.1);\n  border-color: #F6BD38;\n}\n.actions[_ngcontent-%COMP%]   .secondary-action[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  margin-right: 0.5rem;\n}\n/*# sourceMappingURL=signup.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SignUpComponent, [{
    type: Component,
    args: [{ selector: "app-signup", standalone: true, imports: [
      CommonModule,
      DefaultLoginLayoutComponent,
      ReactiveFormsModule,
      MatFormFieldModule,
      MatInputModule,
      MatIconModule,
      MatButtonModule,
      MatDividerModule,
      MatSelectModule,
      MatRadioModule,
      MatTabsModule,
      MatCheckboxModule,
      LayoutPrincipalComponent,
      NgxMaskDirective,
      NzIconModule
    ], providers: [], template: `<app-default-login-layout>\r
  <mat-tab-group [(selectedIndex)]="selectedTabIndex" class="signup-tabs" mat-stretch-tabs="false" mat-align-tabs="center">\r
    <!-- Tab Cliente -->\r
    <mat-tab label="Cliente">\r
      <form [formGroup]="clienteForm" class="signup-form" (ngSubmit)="cadastrarCliente()">\r
        <div class="form-section">\r
          <h3 class="section-title">Informa\xE7\xF5es da Conta</h3>\r
          <div class="form-row">\r
            <mat-form-field appearance="outline" class="full-width">\r
              <mat-label>Nome Completo</mat-label>\r
              <input matInput formControlName="nome" type="text">\r
              <mat-error *ngIf="clienteForm.get('nome')?.hasError('required')">\r
                Este campo \xE9 obrigat\xF3rio\r
              </mat-error>\r
            </mat-form-field>\r
          </div>\r
          <div class="form-row">\r
            <mat-form-field appearance="outline" class="full-width">\r
              <mat-label>E-mail</mat-label>\r
              <input matInput formControlName="email" type="email">\r
              <mat-error *ngIf="clienteForm.get('email')?.hasError('required')">\r
                Este campo \xE9 obrigat\xF3rio\r
              </mat-error>\r
              <mat-error *ngIf="clienteForm.get('email')?.hasError('email')">\r
                E-mail inv\xE1lido\r
              </mat-error>\r
            </mat-form-field>\r
          </div>\r
          <div class="form-row">\r
            <mat-form-field appearance="outline" class="full-width">\r
              <mat-label>Telefone</mat-label>\r
              <input matInput formControlName="telefone" mask="(00) 00000-0000">\r
              <mat-error *ngIf="clienteForm.get('telefone')?.hasError('required')">\r
                Este campo \xE9 obrigat\xF3rio\r
              </mat-error>\r
            </mat-form-field>\r
          </div>\r
          <div class="form-row">\r
            <mat-form-field appearance="outline" class="full-width">\r
              <mat-label>Senha</mat-label>\r
              <input matInput formControlName="senha" type="password">\r
              <mat-error *ngIf="clienteForm.get('senha')?.hasError('required')">\r
                Este campo \xE9 obrigat\xF3rio\r
              </mat-error>\r
              <mat-error *ngIf="clienteForm.get('senha')?.hasError('minCaracteres')">\r
                A senha deve ter no m\xEDnimo 8 caracteres\r
              </mat-error>\r
              <mat-error *ngIf="clienteForm.get('senha')?.hasError('semCaractereEspecial')">\r
                A senha deve conter ao menos um caractere especial\r
              </mat-error>\r
            </mat-form-field>\r
          </div>\r
          <div class="form-row">\r
            <mat-form-field appearance="outline" class="full-width">\r
              <mat-label>Confirme sua senha</mat-label>\r
              <input matInput formControlName="passwordConfirm" type="password">\r
              <mat-error *ngIf="clienteForm.get('passwordConfirm')?.hasError('required')">\r
                Este campo \xE9 obrigat\xF3rio\r
              </mat-error>\r
              <mat-error *ngIf="clienteForm.get('passwordConfirm')?.hasError('passwordMismatch')">\r
                As senhas n\xE3o coincidem\r
              </mat-error>\r
            </mat-form-field>\r
          </div>\r
        </div>\r
\r
        <div class="form-section">\r
          <h3 class="section-title">Endere\xE7o</h3>\r
          <div class="form-row two-columns">\r
            <mat-form-field appearance="outline">\r
              <mat-label>CEP</mat-label>\r
              <input matInput formControlName="cep" mask="00000-000" (blur)="buscarCepGenerico(clienteForm, 'mensagemCepInvalido')">\r
              <mat-error *ngIf="clienteForm.get('cep')?.hasError('required')">\r
                Este campo \xE9 obrigat\xF3rio\r
              </mat-error>\r
            </mat-form-field>\r
            <mat-form-field appearance="outline">\r
              <mat-label>Estado</mat-label>\r
              <input matInput formControlName="estado">\r
              <mat-error *ngIf="clienteForm.get('estado')?.hasError('required')">\r
                Este campo \xE9 obrigat\xF3rio\r
              </mat-error>\r
            </mat-form-field>\r
          </div>\r
          <div class="form-row two-columns">\r
            <mat-form-field appearance="outline">\r
              <mat-label>Cidade</mat-label>\r
              <input matInput formControlName="cidade">\r
              <mat-error *ngIf="clienteForm.get('cidade')?.hasError('required')">\r
                Este campo \xE9 obrigat\xF3rio\r
              </mat-error>\r
            </mat-form-field>\r
            <mat-form-field appearance="outline">\r
              <mat-label>Bairro</mat-label>\r
              <input matInput formControlName="bairro">\r
              <mat-error *ngIf="clienteForm.get('bairro')?.hasError('required')">\r
                Este campo \xE9 obrigat\xF3rio\r
              </mat-error>\r
            </mat-form-field>\r
          </div>\r
          <div class="form-row two-columns">\r
            <mat-form-field appearance="outline">\r
              <mat-label>Rua</mat-label>\r
              <input matInput formControlName="rua">\r
              <mat-error *ngIf="clienteForm.get('rua')?.hasError('required')">\r
                Este campo \xE9 obrigat\xF3rio\r
              </mat-error>\r
            </mat-form-field>\r
            <mat-form-field appearance="outline">\r
              <mat-label>N\xFAmero</mat-label>\r
              <input matInput formControlName="numero">\r
              <mat-error *ngIf="clienteForm.get('numero')?.hasError('required')">\r
                Este campo \xE9 obrigat\xF3rio\r
              </mat-error>\r
            </mat-form-field>\r
          </div>\r
          <div class="form-row">\r
            <mat-form-field appearance="outline" class="full-width">\r
              <mat-label>Complemento</mat-label>\r
              <input matInput formControlName="complemento">\r
            </mat-form-field>\r
          </div>\r
        </div>\r
        \r
        <!-- Bot\xF5es de a\xE7\xE3o para Cliente -->\r
        <div class="actions">\r
          <button \r
            type="submit" \r
            class="primary-action" \r
            [disabled]="!clienteForm.valid">\r
            <i nz-icon nzType="user-add" nzTheme="outline"></i>\r
            Cadastrar Cliente\r
          </button>\r
          \r
          <button \r
            type="button"\r
            class="secondary-action" \r
            (click)="irParaLogin()">\r
            <i nz-icon nzType="login" nzTheme="outline"></i>\r
            J\xE1 tenho uma conta\r
          </button>\r
        </div>\r
      </form>\r
    </mat-tab>\r
\r
    <!-- Tab Restaurante -->\r
    <mat-tab label="Restaurante">\r
      <form [formGroup]="restauranteForm" class="signup-form" (ngSubmit)="cadastrarRestaurante()">\r
        <div class="form-section">\r
          <h3 class="section-title">Informa\xE7\xF5es da Conta</h3>\r
          <div class="form-row">\r
            <mat-form-field appearance="outline" class="full-width">\r
              <mat-label>Nome do Restaurante</mat-label>\r
              <input matInput formControlName="nomeCompleto">\r
              <mat-error *ngIf="restauranteForm.get('nomeCompleto')?.hasError('required')">\r
                Este campo \xE9 obrigat\xF3rio\r
              </mat-error>\r
            </mat-form-field>\r
          </div>\r
          <div class="form-row">\r
            <mat-form-field appearance="outline" class="full-width">\r
              <mat-label>E-mail</mat-label>\r
              <input matInput formControlName="email" type="email">\r
              <mat-error *ngIf="restauranteForm.get('email')?.hasError('required')">\r
                Este campo \xE9 obrigat\xF3rio\r
              </mat-error>\r
              <mat-error *ngIf="restauranteForm.get('email')?.hasError('email')">\r
                E-mail inv\xE1lido\r
              </mat-error>\r
            </mat-form-field>\r
          </div>\r
          <div class="form-row">\r
            <mat-form-field appearance="outline" class="full-width">\r
              <mat-label>Senha</mat-label>\r
              <input matInput formControlName="senha" type="password">\r
              <mat-error *ngIf="restauranteForm.get('senha')?.hasError('required')">\r
                Este campo \xE9 obrigat\xF3rio\r
              </mat-error>\r
              <mat-error *ngIf="restauranteForm.get('senha')?.hasError('minCaracteres')">\r
                A senha deve ter no m\xEDnimo 8 caracteres\r
              </mat-error>\r
              <mat-error *ngIf="restauranteForm.get('senha')?.hasError('semCaractereEspecial')">\r
                A senha deve conter ao menos um caractere especial\r
              </mat-error>\r
            </mat-form-field>\r
          </div>\r
          <div class="form-row">\r
            <mat-form-field appearance="outline" class="full-width">\r
              <mat-label>Confirme sua senha</mat-label>\r
              <input matInput formControlName="passwordConfirm" type="password">\r
              <mat-error *ngIf="restauranteForm.get('passwordConfirm')?.hasError('required')">\r
                Este campo \xE9 obrigat\xF3rio\r
              </mat-error>\r
              <mat-error *ngIf="restauranteForm.get('passwordConfirm')?.hasError('passwordMismatch')">\r
                As senhas n\xE3o coincidem\r
              </mat-error>\r
            </mat-form-field>\r
          </div>\r
        </div>\r
\r
        <div class="form-section">\r
          <h3 class="section-title">Endere\xE7o</h3>\r
          <div formGroupName="endereco">\r
            <div class="form-row two-columns">\r
              <mat-form-field appearance="outline">\r
                <mat-label>CEP</mat-label>\r
                <input matInput formControlName="cep" mask="00000-000" (blur)="buscarCepGenerico(enderecoFormGroup, 'mensagemCepInvalidoRestaurante')">\r
                <mat-error *ngIf="restauranteForm.get('endereco.cep')?.hasError('required')">\r
                  Este campo \xE9 obrigat\xF3rio\r
                </mat-error>\r
              </mat-form-field>\r
              <mat-form-field appearance="outline">\r
                <mat-label>Estado</mat-label>\r
                <input matInput formControlName="estado">\r
                <mat-error *ngIf="restauranteForm.get('endereco.estado')?.hasError('required')">\r
                  Este campo \xE9 obrigat\xF3rio\r
                </mat-error>\r
              </mat-form-field>\r
            </div>\r
            <div class="form-row two-columns">\r
              <mat-form-field appearance="outline">\r
                <mat-label>Cidade</mat-label>\r
                <input matInput formControlName="cidade">\r
                <mat-error *ngIf="restauranteForm.get('endereco.cidade')?.hasError('required')">\r
                  Este campo \xE9 obrigat\xF3rio\r
                </mat-error>\r
              </mat-form-field>\r
              <mat-form-field appearance="outline">\r
                <mat-label>Bairro</mat-label>\r
                <input matInput formControlName="bairro">\r
                <mat-error *ngIf="restauranteForm.get('endereco.bairro')?.hasError('required')">\r
                  Este campo \xE9 obrigat\xF3rio\r
                </mat-error>\r
              </mat-form-field>\r
            </div>\r
            <div class="form-row two-columns">\r
              <mat-form-field appearance="outline">\r
                <mat-label>Rua</mat-label>\r
                <input matInput formControlName="rua">\r
                <mat-error *ngIf="restauranteForm.get('endereco.rua')?.hasError('required')">\r
                  Este campo \xE9 obrigat\xF3rio\r
                </mat-error>\r
              </mat-form-field>\r
              <mat-form-field appearance="outline">\r
                <mat-label>N\xFAmero</mat-label>\r
                <input matInput formControlName="numero">\r
                <mat-error *ngIf="restauranteForm.get('endereco.numero')?.hasError('required')">\r
                  Este campo \xE9 obrigat\xF3rio\r
                </mat-error>\r
              </mat-form-field>\r
            </div>\r
            <div class="form-row">\r
              <mat-form-field appearance="outline" class="full-width">\r
                <mat-label>Complemento</mat-label>\r
                <input matInput formControlName="complemento">\r
              </mat-form-field>\r
            </div>\r
          </div>\r
        </div>\r
\r
        <div class="form-section">\r
          <h3 class="section-title">Informa\xE7\xF5es do Restaurante</h3>\r
          <div class="form-row full-width">\r
            <mat-form-field appearance="outline">\r
              <mat-label>Tipo de Cozinha</mat-label>\r
              <mat-select formControlName="tipoCozinha">\r
                <mat-option *ngFor="let tipo of tiposCozinha" [value]="tipo">{{ tipo }}</mat-option>\r
              </mat-select>\r
              <mat-error *ngIf="restauranteForm.get('tipoCozinha')?.hasError('required')">\r
                Este campo \xE9 obrigat\xF3rio\r
              </mat-error>\r
            </mat-form-field>\r
          </div>\r
          <div class="form-row two-columns">\r
            <mat-form-field appearance="outline">\r
              <mat-label>Quantidade de Mesas</mat-label>\r
              <input matInput type="number" formControlName="quantidadeMesas" min="1">\r
              <mat-error *ngIf="restauranteForm.get('quantidadeMesas')?.hasError('required')">\r
                Este campo \xE9 obrigat\xF3rio\r
              </mat-error>\r
              <mat-error *ngIf="restauranteForm.get('quantidadeMesas')?.hasError('min')">\r
                Deve ter pelo menos 1 mesa\r
              </mat-error>\r
            </mat-form-field>\r
            <mat-form-field appearance="outline">\r
              <mat-label>Telefone</mat-label>\r
              <input matInput formControlName="telefone" mask="(00) 00000-0000">\r
              <mat-error *ngIf="restauranteForm.get('telefone')?.hasError('required')">\r
                Este campo \xE9 obrigat\xF3rio\r
              </mat-error>\r
            </mat-form-field>\r
          </div>\r
          <div class="form-row">\r
            <mat-form-field appearance="outline" class="full-width">\r
              <mat-label>Descri\xE7\xE3o</mat-label>\r
              <textarea matInput formControlName="descricao" rows="3" maxlength="500"></textarea>\r
              <mat-hint align="end">{{restauranteForm.get('descricao')?.value?.length || 0}}/500</mat-hint>\r
              <mat-error *ngIf="restauranteForm.get('descricao')?.hasError('required')">\r
                Este campo \xE9 obrigat\xF3rio\r
              </mat-error>\r
              <mat-error *ngIf="restauranteForm.get('descricao')?.hasError('maxlength')">\r
                M\xE1ximo de 500 caracteres\r
              </mat-error>\r
            </mat-form-field>\r
          </div>\r
        </div>\r
\r
        <div class="form-section">\r
          <h3 class="section-title">Hor\xE1rio de Funcionamento</h3>\r
          <div formArrayName="horaFuncionamento">\r
            <div *ngFor="let horario of horaFuncionamento.controls; let i = index" [formGroupName]="i" class="horario-row-flex">\r
              <mat-form-field appearance="outline">\r
                <mat-label>Dia da Semana</mat-label>\r
                <mat-select formControlName="diaSemana">\r
                  <mat-option *ngFor="let dia of diasSemana" [value]="dia.value">{{ dia.label }}</mat-option>\r
                </mat-select>\r
              </mat-form-field>\r
              <mat-form-field appearance="outline">\r
                <mat-label>Abertura</mat-label>\r
                <input matInput type="time" formControlName="abertura">\r
              </mat-form-field>\r
              <mat-form-field appearance="outline">\r
                <mat-label>Fechamento</mat-label>\r
                <input matInput type="time" formControlName="fechamento">\r
              </mat-form-field>\r
              <button mat-icon-button color="warn" (click)="removeHorario(i)" *ngIf="horaFuncionamento.length > 1">\r
                <mat-icon>delete</mat-icon>\r
              </button>\r
            </div>\r
            <button mat-stroked-button color="primary" type="button" (click)="addHorario()" class="add-horario-btn">\r
              <mat-icon>add</mat-icon> Adicionar Hor\xE1rio\r
            </button>\r
          </div>\r
        </div>\r
        \r
        <!-- Bot\xF5es de a\xE7\xE3o para Restaurante -->\r
        <div class="actions">\r
          <button \r
            type="submit" \r
            class="primary-action" \r
            [disabled]="!restauranteForm.valid">\r
            <i nz-icon nzType="shop" nzTheme="outline"></i>\r
            Cadastrar Restaurante\r
          </button>\r
          \r
          <button \r
            type="button"\r
            class="secondary-action" \r
            (click)="irParaLogin()">\r
            <i nz-icon nzType="login" nzTheme="outline"></i>\r
            J\xE1 tenho uma conta\r
          </button>\r
        </div>\r
      </form>\r
    </mat-tab>\r
  </mat-tab-group>\r
</app-default-login-layout>\r
`, styles: ["/* src/app/pages/acesso/signup/signup.component.scss */\n:host {\n  display: block;\n  width: 100%;\n  height: 100vh;\n  overflow-y: auto;\n  background-color: #3B221B;\n}\n:host::-webkit-scrollbar {\n  width: 8px;\n}\n:host::-webkit-scrollbar-track {\n  background: #2a1812;\n  border-radius: 4px;\n}\n:host::-webkit-scrollbar-thumb {\n  background: #4e2e22;\n  border-radius: 4px;\n}\n:host::-webkit-scrollbar-thumb:hover {\n  background: #D1495B;\n}\n.signup-tabs {\n  margin-top: -24px;\n  padding-bottom: 80px;\n}\n.signup-tabs ::ng-deep .mat-mdc-tab-header {\n  margin-bottom: 24px;\n  border-bottom: 1px solid rgba(255, 255, 255, 0.12);\n  position: sticky;\n  top: 0;\n  background: transparent;\n  z-index: 1;\n}\n.signup-tabs ::ng-deep .mat-mdc-tab-header .mat-mdc-tab {\n  color: rgba(255, 255, 255, 0.6);\n  min-height: 48px;\n}\n.signup-tabs ::ng-deep .mat-mdc-tab-header .mat-mdc-tab .mdc-tab__text-label {\n  transition: color 0.2s;\n}\n.signup-tabs ::ng-deep .mat-mdc-tab-header .mat-mdc-tab.mdc-tab--active .mdc-tab__text-label {\n  color: #D1495B !important;\n}\n.signup-tabs ::ng-deep .mat-mdc-tab-header .mat-mdc-tab .mdc-tab-indicator__content--underline {\n  border-color: #D1495B;\n}\n.signup-tabs ::ng-deep .mat-mdc-tab-body-wrapper {\n  height: auto;\n  overflow: visible;\n}\n.signup-form {\n  display: flex;\n  flex-direction: column;\n  gap: 32px;\n  padding: 0 16px;\n  max-width: 800px;\n  margin: 0 auto;\n}\n.signup-form .form-section {\n  background: rgba(255, 255, 255, 0.05);\n  border-radius: 8px;\n  padding: 24px;\n  margin-bottom: 16px;\n}\n.signup-form .form-section .section-title {\n  color: #F6BD38;\n  font-size: 18px;\n  font-weight: 600;\n  margin-bottom: 24px;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n  border-left: 4px solid #F6BD38;\n  padding-left: 12px;\n}\n.signup-form .form-section .form-row {\n  margin-bottom: 16px;\n}\n.signup-form .form-section .form-row.two-columns {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 16px;\n}\n.signup-form .form-section .form-row:last-child {\n  margin-bottom: 0;\n}\n.signup-form .form-section .form-row.full-width {\n  grid-column: 1/-1;\n}\n::ng-deep .mat-mdc-form-field {\n  width: 100%;\n}\n::ng-deep .mat-mdc-form-field .mat-mdc-input-element,\n::ng-deep .mat-mdc-form-field .mat-mdc-select-value-text,\n::ng-deep .mat-mdc-form-field .mdc-floating-label,\n::ng-deep .mat-mdc-form-field .mat-mdc-select-arrow {\n  color: white !important;\n}\n::ng-deep .mat-mdc-form-field .mat-mdc-input-element:hover,\n::ng-deep .mat-mdc-form-field .mat-mdc-input-element:focus {\n  color: white !important;\n}\n::ng-deep .mat-mdc-form-field .mdc-text-field--outlined {\n  --mdc-outlined-text-field-label-text-color: rgba(255, 255, 255, 0.6);\n  --mdc-outlined-text-field-outline-color: rgba(255, 255, 255, 0.3);\n  --mdc-outlined-text-field-hover-outline-color: #F6BD38;\n  --mdc-outlined-text-field-focus-outline-color: #F6BD38;\n}\n::ng-deep .mat-mdc-form-field .mdc-text-field--focused:not(.mdc-text-field--disabled) .mdc-floating-label {\n  color: #F6BD38 !important;\n}\n::ng-deep .mat-mdc-form-field textarea {\n  min-height: 100px;\n}\n::ng-deep .mat-mdc-checkbox {\n  --mdc-checkbox-selected-checkmark-color: #fff;\n  --mdc-checkbox-selected-focus-icon-color: #F6BD38;\n  --mdc-checkbox-selected-hover-icon-color: #F6BD38;\n  --mdc-checkbox-selected-icon-color: #F6BD38;\n  --mdc-checkbox-selected-pressed-icon-color: #F6BD38;\n  --mdc-checkbox-unselected-focus-icon-color: #D1495B;\n  --mdc-checkbox-unselected-hover-icon-color: #D1495B;\n  --mdc-checkbox-unselected-icon-color: #D1495B;\n  --mdc-checkbox-unselected-pressed-icon-color: #D1495B;\n}\n.horarios-grid {\n  display: flex;\n  flex-direction: column;\n  gap: 16px;\n}\n.horarios-grid .horario-row {\n  display: flex;\n  align-items: center;\n  gap: 16px;\n}\n.horarios-grid .horario-row .dia-semana {\n  min-width: 120px;\n  color: white;\n}\n.horarios-grid .horario-row .horarios-inputs {\n  display: flex;\n  gap: 16px;\n  flex: 1;\n}\nmat-error {\n  color: #D1495B !important;\n  font-size: 0.8rem;\n  font-weight: 500;\n  opacity: 1 !important;\n}\n.mat-mdc-form-field-error {\n  color: #D1495B !important;\n}\n@media (max-width: 768px) {\n  .signup-form {\n    padding: 0;\n  }\n  .signup-form .form-section {\n    padding: 16px;\n  }\n  .signup-form .form-section .form-row.two-columns {\n    grid-template-columns: 1fr;\n  }\n  .horarios-grid .horario-row {\n    flex-direction: column;\n    align-items: flex-start;\n  }\n  .horarios-grid .horario-row .dia-semana {\n    min-width: auto;\n  }\n  .horarios-grid .horario-row .horarios-inputs {\n    width: 100%;\n  }\n}\n.horario-row-flex {\n  display: flex;\n  align-items: center;\n  gap: 16px;\n  margin-bottom: 12px;\n}\n.add-horario-btn {\n  margin-top: 12px;\n  color: #3B221B !important;\n  border-color: #F6BD38 !important;\n  background: #F6BD38 !important;\n  font-weight: 600;\n}\n.add-horario-btn mat-icon {\n  color: #3B221B !important;\n}\n.actions {\n  margin-top: 2rem;\n  display: flex;\n  flex-direction: column;\n  gap: 1rem;\n  padding: 0 16px;\n}\n.actions .primary-action {\n  width: 100%;\n  height: 50px;\n  background:\n    linear-gradient(\n      135deg,\n      #F6BD38 0%,\n      #FDD835 100%);\n  border: none;\n  color: #4A3429;\n  font-weight: 600;\n  font-size: 1rem;\n  border-radius: 8px;\n  transition: all 0.3s ease;\n  cursor: pointer;\n}\n.actions .primary-action:hover:not(:disabled) {\n  transform: translateY(-2px);\n  box-shadow: 0 8px 25px rgba(246, 189, 56, 0.4);\n}\n.actions .primary-action:disabled {\n  opacity: 0.6;\n  cursor: not-allowed;\n  transform: none;\n}\n.actions .primary-action i {\n  margin-right: 0.5rem;\n}\n.actions .secondary-action {\n  width: 100%;\n  height: 45px;\n  border: 1px solid rgba(246, 189, 56, 0.3);\n  color: #F6BD38;\n  background: transparent;\n  font-weight: 500;\n  border-radius: 8px;\n  transition: all 0.3s ease;\n  cursor: pointer;\n}\n.actions .secondary-action:hover {\n  background: rgba(246, 189, 56, 0.1);\n  border-color: #F6BD38;\n}\n.actions .secondary-action i {\n  margin-right: 0.5rem;\n}\n/*# sourceMappingURL=signup.component.css.map */\n"] }]
  }], () => [], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SignUpComponent, { className: "SignUpComponent", filePath: "src/app/pages/acesso/signup/signup.component.ts", lineNumber: 37 });
})();
export {
  SignUpComponent
};
//# sourceMappingURL=chunk-ZGKTLMQW.js.map
