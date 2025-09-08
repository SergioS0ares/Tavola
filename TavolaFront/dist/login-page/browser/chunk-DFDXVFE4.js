import {
  MapsService
} from "./chunk-TYB57TMG.js";
import {
  MatAutocomplete,
  MatAutocompleteModule,
  MatAutocompleteTrigger
} from "./chunk-SBT7BDQG.js";
import {
  RestauranteService
} from "./chunk-2QDEYY6F.js";
import {
  MatOption
} from "./chunk-7TJEGKW3.js";
import {
  GlobalSpinnerService
} from "./chunk-XAACXT24.js";
import {
  MatFormField,
  MatFormFieldModule,
  MatInput,
  MatInputModule,
  MatPrefix
} from "./chunk-TFBPBZK4.js";
import {
  MatIcon,
  MatIconModule
} from "./chunk-WG6I7YZH.js";
import {
  ToastrService
} from "./chunk-FTC7ZL3K.js";
import {
  DefaultValueAccessor,
  FormControl,
  FormControlDirective,
  FormsModule,
  NgControlStatus,
  NgControlStatusGroup,
  NgForm,
  ReactiveFormsModule,
  RequiredValidator,
  ɵNgNoValidate
} from "./chunk-X4ULZSL7.js";
import {
  Router,
  RouterLink,
  RouterModule
} from "./chunk-5CK7YN5Y.js";
import {
  AsyncPipe,
  CommonModule,
  NgClass,
  NgForOf,
  NgIf
} from "./chunk-IOJADCVY.js";
import {
  animate,
  style,
  transition,
  trigger
} from "./chunk-ZE3YZEND.js";
import {
  BehaviorSubject,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  EventEmitter,
  HostListener,
  Injectable,
  Input,
  Output,
  ViewChild,
  ViewChildren,
  __async,
  map,
  of,
  setClassMetadata,
  startWith,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵclassProp,
  ɵɵdefineComponent,
  ɵɵdefineInjectable,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵloadQuery,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵpureFunction1,
  ɵɵqueryRefresh,
  ɵɵreference,
  ɵɵresetView,
  ɵɵresolveDocument,
  ɵɵrestoreView,
  ɵɵsanitizeUrl,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵviewQuery
} from "./chunk-CO622P43.js";

// src/app/pages/home/search-bar/search-bar.component.ts
function SearchBarComponent_mat_option_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 11)(1, "mat-icon", 12);
    \u0275\u0275text(2, "location_on");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const city_r2 = ctx.$implicit;
    \u0275\u0275property("value", city_r2);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", city_r2, " ");
  }
}
function SearchBarComponent_mat_option_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 11)(1, "mat-icon", 12);
    \u0275\u0275text(2, "search");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const suggestion_r3 = ctx.$implicit;
    \u0275\u0275property("value", suggestion_r3);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", suggestion_r3, " ");
  }
}
var SearchBarComponent = class _SearchBarComponent {
  constructor() {
    this.citySuggestions = [];
    this.querySuggestions = [];
    this.showCityDropdown = false;
    this.showQueryDropdown = false;
    this.cityCtrl = new FormControl("");
    this.queryCtrl = new FormControl("");
    this.filteredCities$ = of([]);
    this.filteredQueries$ = of([]);
    this.search = new EventEmitter();
    this.cityInput = new EventEmitter();
    this.queryInput = new EventEmitter();
    this.selectCity = new EventEmitter();
    this.selectQuery = new EventEmitter();
    this.cityBlur = new EventEmitter();
  }
  onCidadeInput(event) {
    this.cityInput.emit(event);
  }
  onQueryInput(event) {
    this.queryInput.emit(event);
  }
  onSelectCity(city) {
    this.selectCity.emit(city);
  }
  onSelectQuery(query) {
    this.selectQuery.emit(query);
  }
  onSearch() {
    this.search.emit();
  }
  onCityBlur(event) {
    this.cityBlur.emit(event);
  }
  onDocumentClick(event) {
    const target = event.target;
    if (!target.closest(".input-group")) {
      this.showCityDropdown = false;
      this.showQueryDropdown = false;
    }
  }
  static {
    this.\u0275fac = function SearchBarComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _SearchBarComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SearchBarComponent, selectors: [["app-search-bar"]], hostBindings: function SearchBarComponent_HostBindings(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275listener("click", function SearchBarComponent_click_HostBindingHandler($event) {
          return ctx.onDocumentClick($event);
        }, false, \u0275\u0275resolveDocument);
      }
    }, inputs: { citySuggestions: "citySuggestions", querySuggestions: "querySuggestions", showCityDropdown: "showCityDropdown", showQueryDropdown: "showQueryDropdown", cityCtrl: "cityCtrl", queryCtrl: "queryCtrl", filteredCities$: "filteredCities$", filteredQueries$: "filteredQueries$" }, outputs: { search: "search", cityInput: "cityInput", queryInput: "queryInput", selectCity: "selectCity", selectQuery: "selectQuery", cityBlur: "cityBlur" }, decls: 20, vars: 11, consts: [["autoCity", "matAutocomplete"], ["autoQuery", "matAutocomplete"], ["autocomplete", "off", 1, "search-bar", 3, "ngSubmit"], ["id", "searchBarHome", 1, "input-group"], ["appearance", "outline", 1, "custom-field", "location"], ["matPrefix", "", 1, "icon", "brown"], ["matInput", "", "placeholder", "Cidade", "required", "", 1, "brown-text", "city-input", 3, "formControl", "matAutocomplete"], [3, "value", 4, "ngFor", "ngForOf"], ["appearance", "outline", 1, "custom-field", "query"], ["matInput", "", "placeholder", "Nome do restaurante...", 1, "brown-text", "long-query", 3, "formControl", "matAutocomplete"], ["type", "submit", 1, "search-btn"], [3, "value"], [1, "icon", "brown"]], template: function SearchBarComponent_Template(rf, ctx) {
      if (rf & 1) {
        const _r1 = \u0275\u0275getCurrentView();
        \u0275\u0275elementStart(0, "form", 2);
        \u0275\u0275listener("ngSubmit", function SearchBarComponent_Template_form_ngSubmit_0_listener() {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.onSearch());
        });
        \u0275\u0275elementStart(1, "div", 3)(2, "mat-form-field", 4)(3, "mat-icon", 5);
        \u0275\u0275text(4, "location_on");
        \u0275\u0275elementEnd();
        \u0275\u0275element(5, "input", 6);
        \u0275\u0275elementStart(6, "mat-autocomplete", null, 0);
        \u0275\u0275template(8, SearchBarComponent_mat_option_8_Template, 4, 2, "mat-option", 7);
        \u0275\u0275pipe(9, "async");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(10, "mat-form-field", 8)(11, "mat-icon", 5);
        \u0275\u0275text(12, "search");
        \u0275\u0275elementEnd();
        \u0275\u0275element(13, "input", 9);
        \u0275\u0275elementStart(14, "mat-autocomplete", null, 1);
        \u0275\u0275template(16, SearchBarComponent_mat_option_16_Template, 4, 2, "mat-option", 7);
        \u0275\u0275pipe(17, "async");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(18, "button", 10);
        \u0275\u0275text(19, " PROCURAR ");
        \u0275\u0275elementEnd()()();
      }
      if (rf & 2) {
        const autoCity_r4 = \u0275\u0275reference(7);
        const autoQuery_r5 = \u0275\u0275reference(15);
        \u0275\u0275property("@searchBarAnim", void 0);
        \u0275\u0275advance(5);
        \u0275\u0275property("formControl", ctx.cityCtrl)("matAutocomplete", autoCity_r4);
        \u0275\u0275advance(3);
        \u0275\u0275property("ngForOf", \u0275\u0275pipeBind1(9, 7, ctx.filteredCities$));
        \u0275\u0275advance(5);
        \u0275\u0275property("formControl", ctx.queryCtrl)("matAutocomplete", autoQuery_r5);
        \u0275\u0275advance(3);
        \u0275\u0275property("ngForOf", \u0275\u0275pipeBind1(17, 9, ctx.filteredQueries$));
      }
    }, dependencies: [CommonModule, NgForOf, AsyncPipe, MatFormFieldModule, MatFormField, MatPrefix, MatInputModule, MatInput, MatIconModule, MatIcon, FormsModule, \u0275NgNoValidate, DefaultValueAccessor, NgControlStatus, NgControlStatusGroup, RequiredValidator, NgForm, ReactiveFormsModule, FormControlDirective, MatAutocompleteModule, MatAutocomplete, MatOption, MatAutocompleteTrigger], styles: ["\n\n.banner[_ngcontent-%COMP%] {\n  background: #f6bd38;\n  border-radius: 32px;\n  margin: 48px auto;\n  max-width: 96vw;\n  min-height: 420px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  box-shadow: 0 4px 24px rgba(0, 0, 0, 0.07);\n  overflow: hidden;\n}\n.banner-content[_ngcontent-%COMP%] {\n  width: 100%;\n  max-width: 1200px;\n  margin: 0 auto;\n}\n.banner-row[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  justify-content: center;\n  position: relative;\n  gap: 0;\n}\n.banner-left[_ngcontent-%COMP%] {\n  flex: 1 1 0;\n  display: flex;\n  flex-direction: column;\n  align-items: flex-start;\n  justify-content: center;\n  z-index: 2;\n  margin-top: 60px;\n  margin-left: 0;\n  margin-right: 0;\n  max-width: 65%;\n}\n.banner[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  color: #fff;\n  font-size: 2.8rem;\n  font-weight: 800;\n  margin-bottom: 38px;\n  line-height: 1.2;\n  text-align: left;\n  max-width: 95%;\n  margin-right: 32px;\n  word-break: break-word;\n}\n.search-bar[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-start;\n  width: 100%;\n}\n.input-group[_ngcontent-%COMP%] {\n  display: flex;\n  background: #fff;\n  border-radius: 15px;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);\n  align-items: stretch;\n  width: 700px;\n  max-width: 100vw;\n  min-width: 320px;\n  margin: 0 auto;\n  padding: 0;\n  height: 56px;\n  margin-top: 0;\n  justify-content: space-between;\n  gap: 8px;\n  transition: box-shadow 0.3s, transform 0.3s;\n}\n.custom-field[_ngcontent-%COMP%] {\n  flex: 1 1 0;\n  min-width: 120px;\n  max-width: 220px;\n  margin-right: 8px;\n  background: none;\n  border: none;\n  box-shadow: none;\n  padding: 0;\n  display: flex;\n  align-items: center;\n  border-radius: 0;\n  height: 100%;\n}\n.custom-field[_ngcontent-%COMP%]:last-child {\n  margin-right: 0;\n}\n.mat-form-field[_ngcontent-%COMP%] {\n  width: 100%;\n  background: none;\n}\n.mat-form-field-appearance-outline[_ngcontent-%COMP%]   .mat-form-field-outline[_ngcontent-%COMP%] {\n  color: #eee;\n}\n.mat-mdc-form-field[_ngcontent-%COMP%]   .mat-mdc-input-element[_ngcontent-%COMP%], \n.mat-mdc-form-field[_ngcontent-%COMP%]   .mat-input-element[_ngcontent-%COMP%], \n.mat-form-field[_ngcontent-%COMP%]   .mat-input-element[_ngcontent-%COMP%] {\n  color: #3B221B !important;\n}\ninput[_ngcontent-%COMP%], \n.mat-input-element[_ngcontent-%COMP%], \n.mat-form-field-input[_ngcontent-%COMP%] {\n  color: #3B221B !important;\n  background: transparent !important;\n  font-style: italic;\n}\ninput[_ngcontent-%COMP%]::placeholder, \n.mat-input-element[_ngcontent-%COMP%]::placeholder, \n.mat-form-field-input[_ngcontent-%COMP%]::placeholder {\n  color: #3B221B !important;\n  opacity: 0.7;\n  font-style: italic;\n}\n.search-btn[_ngcontent-%COMP%] {\n  background: #f6bd38;\n  color: #222;\n  font-weight: 800;\n  border: none;\n  border-radius: 15px;\n  padding: 0 22px;\n  height: 44px;\n  margin-left: 12px;\n  margin-right: 4px;\n  font-size: 1.05rem;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);\n  transition: background 0.2s, color 0.2s;\n  cursor: pointer;\n  outline: none;\n  min-width: 110px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  align-self: center;\n}\n.search-btn[_ngcontent-%COMP%]:hover, \n.search-btn[_ngcontent-%COMP%]:focus {\n  background: #ffe08a;\n  color: #222;\n}\n.city-dropdown-absolute[_ngcontent-%COMP%] {\n  position: absolute;\n  left: 50%;\n  top: 100px;\n  transform: translateX(-50%);\n  width: 340px;\n  z-index: 100;\n  margin-left: 0;\n}\n.dropdown[_ngcontent-%COMP%] {\n  background: #fff;\n  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.1);\n  border-radius: 0 0 14px 14px;\n  z-index: 20;\n  max-height: 260px;\n  overflow-y: auto;\n  margin-top: 2px;\n  position: absolute;\n  left: 0;\n  width: 100%;\n}\n.city-dropdown[_ngcontent-%COMP%] {\n  padding: 12px 0 8px 0;\n  min-width: 320px;\n  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.13);\n  border-radius: 0 0 14px 14px;\n}\n.dropdown-city-search[_ngcontent-%COMP%] {\n  width: 90%;\n  margin: 0 5% 10px 5%;\n  padding: 10px 12px;\n  border-radius: 8px;\n  border: 1px solid #eee;\n  font-size: 1rem;\n  color: #3B221B;\n  background: #fafafa;\n}\n.dropdown-title[_ngcontent-%COMP%] {\n  font-size: 0.98rem;\n  font-weight: 600;\n  color: #3B221B;\n  padding: 8px 18px 4px 18px;\n  opacity: 0.7;\n}\n.highlight[_ngcontent-%COMP%] {\n  background: #f6f6f6;\n  font-weight: 600;\n  border-radius: 8px;\n  margin: 0 8px 8px 8px;\n  padding: 12px 18px !important;\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n.dropdown-item[_ngcontent-%COMP%] {\n  padding: 14px 18px;\n  cursor: pointer;\n  color: #3B221B;\n  font-size: 1rem;\n  border-bottom: 1px solid #f6f6f6;\n  transition: background 0.15s, color 0.15s;\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  border-radius: 6px;\n}\n.dropdown-item[_ngcontent-%COMP%]:last-child {\n  border-bottom: none;\n}\n.dropdown-item[_ngcontent-%COMP%]:hover {\n  background: #f6bd38;\n  color: #3B221B;\n  font-weight: 700;\n}\n.banner-right[_ngcontent-%COMP%] {\n  flex: 0 0 420px;\n  display: flex;\n  align-items: center;\n  justify-content: flex-end;\n  height: 100%;\n  position: absolute;\n  right: -18%;\n  top: 50%;\n  transform: translateY(-50%);\n  z-index: 1;\n  overflow: visible;\n}\n.pizza-img[_ngcontent-%COMP%] {\n  max-width: 420px;\n  max-height: 420px;\n  width: 100%;\n  height: auto;\n  object-fit: contain;\n  filter: drop-shadow(0 4px 16px rgba(0, 0, 0, 0.1));\n  overflow: visible;\n  transition: none !important;\n  will-change: auto;\n}\n@media (max-width: 1100px) {\n  .banner-row[_ngcontent-%COMP%] {\n    flex-direction: column;\n    align-items: center;\n  }\n  .banner-right[_ngcontent-%COMP%] {\n    position: static;\n    right: 0;\n    top: 0;\n    transform: none;\n    margin-top: 32px;\n    justify-content: center;\n  }\n  .pizza-img[_ngcontent-%COMP%] {\n    margin-left: 0;\n    max-width: 220px;\n  }\n  .banner-left[_ngcontent-%COMP%] {\n    margin-left: 0;\n    margin-top: 32px;\n    align-items: center;\n    margin-right: 0;\n    max-width: 100%;\n  }\n  .input-group[_ngcontent-%COMP%] {\n    width: 98vw;\n    max-width: 98vw;\n  }\n  .city-dropdown-absolute[_ngcontent-%COMP%] {\n    position: static;\n    margin-left: 0;\n    width: 98vw;\n    left: 0;\n    transform: none;\n  }\n}\n@media (max-width: 700px) {\n  .banner-content[_ngcontent-%COMP%] {\n    max-width: 98vw;\n  }\n  .banner-row[_ngcontent-%COMP%] {\n    flex-direction: column;\n    align-items: center;\n  }\n  .banner-left[_ngcontent-%COMP%] {\n    align-items: center;\n    margin-left: 0;\n    margin-right: 0;\n    max-width: 100%;\n  }\n  .input-group[_ngcontent-%COMP%] {\n    flex-direction: column;\n    gap: 8px;\n    width: 98vw;\n    max-width: 98vw;\n  }\n  .custom-field[_ngcontent-%COMP%] {\n    min-width: 100%;\n    max-width: 100%;\n    margin-right: 0;\n  }\n  .search-btn[_ngcontent-%COMP%] {\n    margin-top: 8px;\n    height: 48px;\n  }\n  .pizza-img[_ngcontent-%COMP%] {\n    max-width: 180px;\n  }\n  .banner[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n    font-size: 1.5rem;\n    text-align: center;\n    margin-right: 0;\n  }\n}\n.results-grid[_ngcontent-%COMP%] {\n  margin-top: 24px;\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));\n  gap: 24px;\n}\n.rest-card[_ngcontent-%COMP%] {\n  background: #fff;\n  border-radius: 12px;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.07);\n  padding: 16px;\n  transition: transform 0.2s;\n  cursor: pointer;\n}\n.rest-card[_ngcontent-%COMP%]:hover {\n  transform: scale(1.03);\n}\n.rest-card[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n  border-radius: 8px;\n}\n.rest-card[_ngcontent-%COMP%]   .tipo[_ngcontent-%COMP%] {\n  font-size: 13px;\n  color: #DA4A24;\n  font-weight: 600;\n  margin-bottom: 4px;\n}\n.rest-card[_ngcontent-%COMP%]   .nome[_ngcontent-%COMP%] {\n  font-size: 18px;\n  font-weight: 700;\n  margin-bottom: 8px;\n}\n.restaurants-section[_ngcontent-%COMP%] {\n  margin: 48px auto 0 auto;\n  max-width: 1200px;\n  padding: 0 24px;\n}\n.restaurants-section[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: 2rem;\n  font-weight: 700;\n  color: #3B221B;\n  margin-bottom: 24px;\n}\n.restaurants-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));\n  gap: 32px;\n}\n.restaurant-info[_ngcontent-%COMP%] {\n  padding: 18px 18px 14px 18px;\n  display: flex;\n  flex-direction: column;\n  gap: 6px;\n}\n.restaurant-type[_ngcontent-%COMP%] {\n  font-size: 0.95rem;\n  color: #DA4A24;\n  font-weight: 600;\n  margin-bottom: 2px;\n}\n.restaurant-name[_ngcontent-%COMP%] {\n  font-size: 1.18rem;\n  font-weight: 700;\n  color: #3B221B;\n  margin-bottom: 6px;\n}\n.restaurant-rating[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 4px;\n}\n.star.filled[_ngcontent-%COMP%] {\n  color: #F6BD38;\n}\n.rate-number[_ngcontent-%COMP%] {\n  font-size: 1rem;\n  font-weight: 600;\n  color: #3B221B;\n  margin-left: 6px;\n}\n@media (max-width: 900px) {\n  .restaurants-section[_ngcontent-%COMP%] {\n    padding: 0 8px;\n  }\n  .restaurants-grid[_ngcontent-%COMP%] {\n    gap: 18px;\n  }\n}\n.mat-icon[_ngcontent-%COMP%] {\n  color: #3B221B !important;\n  margin-right: 8px;\n}\n.mat-autocomplete-panel[_ngcontent-%COMP%] {\n  color: #3B221B !important;\n}\n.mat-autocomplete-panel[_ngcontent-%COMP%]   .mat-option[_ngcontent-%COMP%] {\n  color: #3B221B !important;\n}\n.mat-autocomplete-panel[_ngcontent-%COMP%]   .mat-option[_ngcontent-%COMP%]   .mat-icon[_ngcontent-%COMP%] {\n  color: #3B221B !important;\n  margin-right: 8px;\n}\n/*# sourceMappingURL=search-bar.component.css.map */"], data: { animation: [
      trigger("searchBarAnim", [
        transition(":enter", [
          style({ opacity: 0, transform: "translateY(-24px)" }),
          animate("250ms cubic-bezier(.4,0,.2,1)", style({ opacity: 1, transform: "none" }))
        ]),
        transition(":leave", [
          animate("200ms cubic-bezier(.4,0,.2,1)", style({ opacity: 0, transform: "translateY(-24px)" }))
        ])
      ])
    ] }, changeDetection: 0 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SearchBarComponent, [{
    type: Component,
    args: [{ selector: "app-search-bar", standalone: true, imports: [CommonModule, MatFormFieldModule, MatInputModule, MatIconModule, FormsModule, ReactiveFormsModule, MatAutocompleteModule], animations: [
      trigger("searchBarAnim", [
        transition(":enter", [
          style({ opacity: 0, transform: "translateY(-24px)" }),
          animate("250ms cubic-bezier(.4,0,.2,1)", style({ opacity: 1, transform: "none" }))
        ]),
        transition(":leave", [
          animate("200ms cubic-bezier(.4,0,.2,1)", style({ opacity: 0, transform: "translateY(-24px)" }))
        ])
      ])
    ], changeDetection: ChangeDetectionStrategy.OnPush, template: '<form class="search-bar" (ngSubmit)="onSearch()" autocomplete="off" [@searchBarAnim]>\r\n  <div class="input-group" id="searchBarHome">\r\n    <!-- Campo Cidade com Autocomplete -->\r\n    <mat-form-field appearance="outline" class="custom-field location">\r\n      <!-- <mat-label>Cidade</mat-label> -->\r\n      <mat-icon matPrefix class="icon brown">location_on</mat-icon>\r\n      <input matInput placeholder="Cidade" [formControl]="cityCtrl" [matAutocomplete]="autoCity" required class="brown-text city-input">\r\n      <mat-autocomplete #autoCity="matAutocomplete">\r\n        <mat-option *ngFor="let city of filteredCities$ | async" [value]="city">\r\n          <mat-icon class="icon brown">location_on</mat-icon> {{city}}\r\n        </mat-option>\r\n      </mat-autocomplete>\r\n    </mat-form-field>\r\n\r\n    <!-- Campo Cozinha/Restaurante com Autocomplete -->\r\n    <mat-form-field appearance="outline" class="custom-field query">\r\n      <!-- <mat-label>Nome do restaurante</mat-label> -->\r\n      <mat-icon matPrefix class="icon brown">search</mat-icon>\r\n      <input matInput placeholder="Nome do restaurante..." [formControl]="queryCtrl" [matAutocomplete]="autoQuery" class="brown-text long-query">\r\n      <mat-autocomplete #autoQuery="matAutocomplete">\r\n        <mat-option *ngFor="let suggestion of filteredQueries$ | async" [value]="suggestion">\r\n          <mat-icon class="icon brown">search</mat-icon> {{suggestion}}\r\n        </mat-option>\r\n      </mat-autocomplete>\r\n    </mat-form-field>\r\n\r\n    <!-- Bot\xE3o de busca -->\r\n    <button class="search-btn" type="submit">\r\n      PROCURAR\r\n    </button>\r\n  </div>\r\n</form> ', styles: ["/* src/app/pages/home/search-bar/search-bar.component.scss */\n.banner {\n  background: #f6bd38;\n  border-radius: 32px;\n  margin: 48px auto;\n  max-width: 96vw;\n  min-height: 420px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  box-shadow: 0 4px 24px rgba(0, 0, 0, 0.07);\n  overflow: hidden;\n}\n.banner-content {\n  width: 100%;\n  max-width: 1200px;\n  margin: 0 auto;\n}\n.banner-row {\n  display: flex;\n  align-items: flex-start;\n  justify-content: center;\n  position: relative;\n  gap: 0;\n}\n.banner-left {\n  flex: 1 1 0;\n  display: flex;\n  flex-direction: column;\n  align-items: flex-start;\n  justify-content: center;\n  z-index: 2;\n  margin-top: 60px;\n  margin-left: 0;\n  margin-right: 0;\n  max-width: 65%;\n}\n.banner h1 {\n  color: #fff;\n  font-size: 2.8rem;\n  font-weight: 800;\n  margin-bottom: 38px;\n  line-height: 1.2;\n  text-align: left;\n  max-width: 95%;\n  margin-right: 32px;\n  word-break: break-word;\n}\n.search-bar {\n  display: flex;\n  justify-content: flex-start;\n  width: 100%;\n}\n.input-group {\n  display: flex;\n  background: #fff;\n  border-radius: 15px;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);\n  align-items: stretch;\n  width: 700px;\n  max-width: 100vw;\n  min-width: 320px;\n  margin: 0 auto;\n  padding: 0;\n  height: 56px;\n  margin-top: 0;\n  justify-content: space-between;\n  gap: 8px;\n  transition: box-shadow 0.3s, transform 0.3s;\n}\n.custom-field {\n  flex: 1 1 0;\n  min-width: 120px;\n  max-width: 220px;\n  margin-right: 8px;\n  background: none;\n  border: none;\n  box-shadow: none;\n  padding: 0;\n  display: flex;\n  align-items: center;\n  border-radius: 0;\n  height: 100%;\n}\n.custom-field:last-child {\n  margin-right: 0;\n}\n.mat-form-field {\n  width: 100%;\n  background: none;\n}\n.mat-form-field-appearance-outline .mat-form-field-outline {\n  color: #eee;\n}\n.mat-mdc-form-field .mat-mdc-input-element,\n.mat-mdc-form-field .mat-input-element,\n.mat-form-field .mat-input-element {\n  color: #3B221B !important;\n}\ninput,\n.mat-input-element,\n.mat-form-field-input {\n  color: #3B221B !important;\n  background: transparent !important;\n  font-style: italic;\n}\ninput::placeholder,\n.mat-input-element::placeholder,\n.mat-form-field-input::placeholder {\n  color: #3B221B !important;\n  opacity: 0.7;\n  font-style: italic;\n}\n.search-btn {\n  background: #f6bd38;\n  color: #222;\n  font-weight: 800;\n  border: none;\n  border-radius: 15px;\n  padding: 0 22px;\n  height: 44px;\n  margin-left: 12px;\n  margin-right: 4px;\n  font-size: 1.05rem;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);\n  transition: background 0.2s, color 0.2s;\n  cursor: pointer;\n  outline: none;\n  min-width: 110px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  align-self: center;\n}\n.search-btn:hover,\n.search-btn:focus {\n  background: #ffe08a;\n  color: #222;\n}\n.city-dropdown-absolute {\n  position: absolute;\n  left: 50%;\n  top: 100px;\n  transform: translateX(-50%);\n  width: 340px;\n  z-index: 100;\n  margin-left: 0;\n}\n.dropdown {\n  background: #fff;\n  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.1);\n  border-radius: 0 0 14px 14px;\n  z-index: 20;\n  max-height: 260px;\n  overflow-y: auto;\n  margin-top: 2px;\n  position: absolute;\n  left: 0;\n  width: 100%;\n}\n.city-dropdown {\n  padding: 12px 0 8px 0;\n  min-width: 320px;\n  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.13);\n  border-radius: 0 0 14px 14px;\n}\n.dropdown-city-search {\n  width: 90%;\n  margin: 0 5% 10px 5%;\n  padding: 10px 12px;\n  border-radius: 8px;\n  border: 1px solid #eee;\n  font-size: 1rem;\n  color: #3B221B;\n  background: #fafafa;\n}\n.dropdown-title {\n  font-size: 0.98rem;\n  font-weight: 600;\n  color: #3B221B;\n  padding: 8px 18px 4px 18px;\n  opacity: 0.7;\n}\n.highlight {\n  background: #f6f6f6;\n  font-weight: 600;\n  border-radius: 8px;\n  margin: 0 8px 8px 8px;\n  padding: 12px 18px !important;\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n.dropdown-item {\n  padding: 14px 18px;\n  cursor: pointer;\n  color: #3B221B;\n  font-size: 1rem;\n  border-bottom: 1px solid #f6f6f6;\n  transition: background 0.15s, color 0.15s;\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  border-radius: 6px;\n}\n.dropdown-item:last-child {\n  border-bottom: none;\n}\n.dropdown-item:hover {\n  background: #f6bd38;\n  color: #3B221B;\n  font-weight: 700;\n}\n.banner-right {\n  flex: 0 0 420px;\n  display: flex;\n  align-items: center;\n  justify-content: flex-end;\n  height: 100%;\n  position: absolute;\n  right: -18%;\n  top: 50%;\n  transform: translateY(-50%);\n  z-index: 1;\n  overflow: visible;\n}\n.pizza-img {\n  max-width: 420px;\n  max-height: 420px;\n  width: 100%;\n  height: auto;\n  object-fit: contain;\n  filter: drop-shadow(0 4px 16px rgba(0, 0, 0, 0.1));\n  overflow: visible;\n  transition: none !important;\n  will-change: auto;\n}\n@media (max-width: 1100px) {\n  .banner-row {\n    flex-direction: column;\n    align-items: center;\n  }\n  .banner-right {\n    position: static;\n    right: 0;\n    top: 0;\n    transform: none;\n    margin-top: 32px;\n    justify-content: center;\n  }\n  .pizza-img {\n    margin-left: 0;\n    max-width: 220px;\n  }\n  .banner-left {\n    margin-left: 0;\n    margin-top: 32px;\n    align-items: center;\n    margin-right: 0;\n    max-width: 100%;\n  }\n  .input-group {\n    width: 98vw;\n    max-width: 98vw;\n  }\n  .city-dropdown-absolute {\n    position: static;\n    margin-left: 0;\n    width: 98vw;\n    left: 0;\n    transform: none;\n  }\n}\n@media (max-width: 700px) {\n  .banner-content {\n    max-width: 98vw;\n  }\n  .banner-row {\n    flex-direction: column;\n    align-items: center;\n  }\n  .banner-left {\n    align-items: center;\n    margin-left: 0;\n    margin-right: 0;\n    max-width: 100%;\n  }\n  .input-group {\n    flex-direction: column;\n    gap: 8px;\n    width: 98vw;\n    max-width: 98vw;\n  }\n  .custom-field {\n    min-width: 100%;\n    max-width: 100%;\n    margin-right: 0;\n  }\n  .search-btn {\n    margin-top: 8px;\n    height: 48px;\n  }\n  .pizza-img {\n    max-width: 180px;\n  }\n  .banner h1 {\n    font-size: 1.5rem;\n    text-align: center;\n    margin-right: 0;\n  }\n}\n.results-grid {\n  margin-top: 24px;\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));\n  gap: 24px;\n}\n.rest-card {\n  background: #fff;\n  border-radius: 12px;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.07);\n  padding: 16px;\n  transition: transform 0.2s;\n  cursor: pointer;\n}\n.rest-card:hover {\n  transform: scale(1.03);\n}\n.rest-card img {\n  width: 100%;\n  border-radius: 8px;\n}\n.rest-card .tipo {\n  font-size: 13px;\n  color: #DA4A24;\n  font-weight: 600;\n  margin-bottom: 4px;\n}\n.rest-card .nome {\n  font-size: 18px;\n  font-weight: 700;\n  margin-bottom: 8px;\n}\n.restaurants-section {\n  margin: 48px auto 0 auto;\n  max-width: 1200px;\n  padding: 0 24px;\n}\n.restaurants-section h2 {\n  font-size: 2rem;\n  font-weight: 700;\n  color: #3B221B;\n  margin-bottom: 24px;\n}\n.restaurants-grid {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));\n  gap: 32px;\n}\n.restaurant-info {\n  padding: 18px 18px 14px 18px;\n  display: flex;\n  flex-direction: column;\n  gap: 6px;\n}\n.restaurant-type {\n  font-size: 0.95rem;\n  color: #DA4A24;\n  font-weight: 600;\n  margin-bottom: 2px;\n}\n.restaurant-name {\n  font-size: 1.18rem;\n  font-weight: 700;\n  color: #3B221B;\n  margin-bottom: 6px;\n}\n.restaurant-rating {\n  display: flex;\n  align-items: center;\n  gap: 4px;\n}\n.star.filled {\n  color: #F6BD38;\n}\n.rate-number {\n  font-size: 1rem;\n  font-weight: 600;\n  color: #3B221B;\n  margin-left: 6px;\n}\n@media (max-width: 900px) {\n  .restaurants-section {\n    padding: 0 8px;\n  }\n  .restaurants-grid {\n    gap: 18px;\n  }\n}\n.mat-icon {\n  color: #3B221B !important;\n  margin-right: 8px;\n}\n.mat-autocomplete-panel {\n  color: #3B221B !important;\n}\n.mat-autocomplete-panel .mat-option {\n  color: #3B221B !important;\n}\n.mat-autocomplete-panel .mat-option .mat-icon {\n  color: #3B221B !important;\n  margin-right: 8px;\n}\n/*# sourceMappingURL=search-bar.component.css.map */\n"] }]
  }], null, { citySuggestions: [{
    type: Input
  }], querySuggestions: [{
    type: Input
  }], showCityDropdown: [{
    type: Input
  }], showQueryDropdown: [{
    type: Input
  }], cityCtrl: [{
    type: Input
  }], queryCtrl: [{
    type: Input
  }], filteredCities$: [{
    type: Input
  }], filteredQueries$: [{
    type: Input
  }], search: [{
    type: Output
  }], cityInput: [{
    type: Output
  }], queryInput: [{
    type: Output
  }], selectCity: [{
    type: Output
  }], selectQuery: [{
    type: Output
  }], cityBlur: [{
    type: Output
  }], onDocumentClick: [{
    type: HostListener,
    args: ["document:click", ["$event"]]
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SearchBarComponent, { className: "SearchBarComponent", filePath: "src/app/pages/home/search-bar/search-bar.component.ts", lineNumber: 30 });
})();

// src/app/core/services/sticky-search.service.ts
var StickySearchService = class _StickySearchService {
  constructor() {
    this._sticky = new BehaviorSubject(false);
    this.sticky$ = this._sticky.asObservable();
    this._sidebarAberta = new BehaviorSubject(true);
    this.sidebarAberta$ = this._sidebarAberta.asObservable();
  }
  setSticky(value) {
    this._sticky.next(value);
  }
  setSidebarAberta(value) {
    this._sidebarAberta.next(value);
  }
  static {
    this.\u0275fac = function StickySearchService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _StickySearchService)();
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _StickySearchService, factory: _StickySearchService.\u0275fac, providedIn: "root" });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(StickySearchService, [{
    type: Injectable,
    args: [{ providedIn: "root" }]
  }], () => [], null);
})();

// src/app/pages/home/home.component.ts
var _c0 = ["searchBarHome"];
var _c1 = ["banner"];
var _c2 = ["searchSentinel"];
var _c3 = ["scrollContainer"];
var _c4 = (a0) => ["/home", "agendamento-reservas-restaurante", a0];
var _c5 = () => [1, 2, 3, 4, 5];
var _c6 = (a0) => ({ "filled": a0 });
function HomeComponent_app_search_bar_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "app-search-bar", 15, 2);
    \u0275\u0275listener("search", function HomeComponent_app_search_bar_10_Template_app_search_bar_search_0_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onSearch());
    })("cityInput", function HomeComponent_app_search_bar_10_Template_app_search_bar_cityInput_0_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onCityInput($event));
    })("selectCity", function HomeComponent_app_search_bar_10_Template_app_search_bar_selectCity_0_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.selectCity($event));
    })("selectQuery", function HomeComponent_app_search_bar_10_Template_app_search_bar_selectQuery_0_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.selectQuery($event));
    })("cityBlur", function HomeComponent_app_search_bar_10_Template_app_search_bar_cityBlur_0_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onCityBlur($event));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("citySuggestions", ctx_r1.filteredCitySuggestions)("querySuggestions", ctx_r1.querySuggestions)("showCityDropdown", ctx_r1.showCityDropdown)("showQueryDropdown", ctx_r1.showQueryDropdown)("cityCtrl", ctx_r1.cityCtrl)("queryCtrl", ctx_r1.queryCtrl)("filteredCities$", ctx_r1.filteredCities$)("filteredQueries$", ctx_r1.filteredQueries$);
  }
}
function HomeComponent_div_13_div_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 23);
    \u0275\u0275listener("mousedown", function HomeComponent_div_13_div_9_Template_div_mousedown_0_listener() {
      const city_r5 = \u0275\u0275restoreView(_r4).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.selectCity(city_r5));
    });
    \u0275\u0275elementStart(1, "mat-icon", 20);
    \u0275\u0275text(2, "location_on");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const city_r5 = ctx.$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", city_r5, " ");
  }
}
function HomeComponent_div_13_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 16)(1, "div", 17)(2, "input", 18);
    \u0275\u0275listener("input", function HomeComponent_div_13_Template_input_input_2_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onCityInput($event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 19);
    \u0275\u0275listener("mousedown", function HomeComponent_div_13_Template_div_mousedown_3_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.selectCity("Perto de mim"));
    });
    \u0275\u0275elementStart(4, "mat-icon", 20);
    \u0275\u0275text(5, "send");
    \u0275\u0275elementEnd();
    \u0275\u0275text(6, " Perto de mim ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "div", 21);
    \u0275\u0275text(8, "Sugest\xF5es");
    \u0275\u0275elementEnd();
    \u0275\u0275template(9, HomeComponent_div_13_div_9_Template, 4, 1, "div", 22);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275property("formControl", ctx_r1.cityCtrl);
    \u0275\u0275advance(7);
    \u0275\u0275property("ngForOf", ctx_r1.filteredCitySuggestions);
  }
}
function HomeComponent_div_15_div_14_mat_icon_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-icon", 40);
    \u0275\u0275text(1, "star");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const star_r8 = ctx.$implicit;
    const r_r9 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(1, _c6, star_r8 <= ctx_r1.getStarCount(r_r9)));
  }
}
function HomeComponent_div_15_div_14_span_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 41);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const r_r9 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("(", ctx_r1.getTotalAvaliacoes(r_r9), " avalia\xE7\xF5es)");
  }
}
function HomeComponent_div_15_div_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 31);
    \u0275\u0275element(1, "img", 32);
    \u0275\u0275elementStart(2, "div", 33)(3, "div", 34);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 35);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "div", 36);
    \u0275\u0275template(8, HomeComponent_div_15_div_14_mat_icon_8_Template, 2, 3, "mat-icon", 37);
    \u0275\u0275elementStart(9, "span", 38);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd();
    \u0275\u0275template(11, HomeComponent_div_15_div_14_span_11_Template, 2, 1, "span", 39);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const r_r9 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(8, _c4, r_r9.id));
    \u0275\u0275advance();
    \u0275\u0275property("src", ctx_r1.getImagemRestaurante(r_r9), \u0275\u0275sanitizeUrl)("alt", r_r9.nome);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r1.getEnderecoFormatado(r_r9));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(r_r9.nome);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", \u0275\u0275pureFunction0(10, _c5));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(r_r9.mediaAvaliacao);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.getTotalAvaliacoes(r_r9) > 0);
  }
}
function HomeComponent_div_15_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 24)(1, "div", 25)(2, "h2");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 26)(5, "button", 27);
    \u0275\u0275listener("click", function HomeComponent_div_15_Template_button_click_5_listener() {
      const cuisine_r7 = \u0275\u0275restoreView(_r6).$implicit;
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.scrollRestaurants(cuisine_r7, "left"));
    });
    \u0275\u0275elementStart(6, "mat-icon");
    \u0275\u0275text(7, "chevron_left");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "button", 27);
    \u0275\u0275listener("click", function HomeComponent_div_15_Template_button_click_8_listener() {
      const cuisine_r7 = \u0275\u0275restoreView(_r6).$implicit;
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.scrollRestaurants(cuisine_r7, "right"));
    });
    \u0275\u0275elementStart(9, "mat-icon");
    \u0275\u0275text(10, "chevron_right");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(11, "div", 28, 3);
    \u0275\u0275listener("scroll", function HomeComponent_div_15_Template_div_scroll_11_listener($event) {
      const cuisine_r7 = \u0275\u0275restoreView(_r6).$implicit;
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onRestaurantScroll($event, cuisine_r7));
    });
    \u0275\u0275elementStart(13, "div", 29);
    \u0275\u0275template(14, HomeComponent_div_15_div_14_Template, 12, 11, "div", 30);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const cuisine_r7 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(cuisine_r7);
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", !ctx_r1.canScrollLeft(cuisine_r7));
    \u0275\u0275advance(3);
    \u0275\u0275property("disabled", !ctx_r1.canScrollRight(cuisine_r7));
    \u0275\u0275advance(3);
    \u0275\u0275attribute("data-cuisine", cuisine_r7);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngForOf", ctx_r1.groupedRestaurants[cuisine_r7]);
  }
}
var HomeComponent = class _HomeComponent {
  constructor(stickyService, cdr, restauranteService, mapsService, router, spinnerService, toastr) {
    this.stickyService = stickyService;
    this.cdr = cdr;
    this.restauranteService = restauranteService;
    this.mapsService = mapsService;
    this.router = router;
    this.spinnerService = spinnerService;
    this.toastr = toastr;
    this.cityCtrl = new FormControl("");
    this.queryCtrl = new FormControl("");
    this.todasCidades = [];
    this.todasCozinhas = [];
    this.filteredCitySuggestions = [];
    this.querySuggestions = [];
    this.showCityDropdown = false;
    this.showQueryDropdown = false;
    this.restaurants = [];
    this.groupedRestaurants = {};
    this.stickySearch = false;
    this.isSidebarOpen = true;
    this.scrollStates = {};
  }
  ngOnInit() {
    this.filteredCitySuggestions = [];
    this.querySuggestions = [];
    this.restauranteService.allCities$.subscribe((cities) => {
      this.todasCidades = cities;
      this.filteredCitySuggestions = [...this.todasCidades];
    });
    this.restauranteService.allCuisines$.subscribe((cuisines) => {
      const sugestoesGeraisCozinha = [
        "Ver todos os restaurantes",
        "Melhor avaliado"
      ];
      this.todasCozinhas = Array.from(/* @__PURE__ */ new Set([...cuisines, ...sugestoesGeraisCozinha])).sort();
      this.querySuggestions = [...this.todasCozinhas];
    });
    this.filteredCities$ = this.cityCtrl.valueChanges.pipe(startWith(this.cityCtrl.value ?? ""), map((val) => this._filter(val ?? "", this.todasCidades)));
    this.filteredQueries$ = this.queryCtrl.valueChanges.pipe(startWith(""), map((val) => this._filter(val ?? "", this.todasCozinhas)));
    this.spinnerService.mostrar();
    this.restauranteService.getRestaurantes().subscribe({
      next: (restaurants) => {
        const coordPromises = (restaurants || []).map((r) => __async(this, null, function* () {
          if (!r.coordenadas) {
            const endereco = `${r.endereco.rua}, ${r.endereco.numero}, ${r.endereco.bairro}, ${r.endereco.cidade} - ${r.endereco.estado}, ${r.endereco.cep}`;
            try {
              const coords = yield this.mapsService.getCoordinatesFromAddress(endereco).toPromise();
              if (coords) {
                r.coordenadas = { latitude: coords.lat, longitude: coords.lng };
              }
            } catch {
            }
          }
          return r;
        }));
        Promise.all(coordPromises).then((rests) => {
          this.setRestaurants(rests);
          this.spinnerService.ocultar();
        });
      },
      error: (err) => {
        this.spinnerService.ocultar();
      }
    });
    const cuisineTypes = this.getCuisineTypes();
    if (Array.isArray(cuisineTypes)) {
      cuisineTypes.forEach((cuisine) => {
        this.scrollStates[cuisine] = { canScrollLeft: false, canScrollRight: false };
      });
    }
    this.sidebarSubscription = this.stickyService.sidebarAberta$.subscribe((isOpen) => {
      this.isSidebarOpen = isOpen;
      this.scrollContainers.forEach((containerRef) => {
        const cuisine = containerRef.nativeElement.dataset.cuisine;
        if (cuisine)
          this.checkScrollArrows(containerRef.nativeElement, cuisine);
      });
      this.cdr.detectChanges();
    });
    setTimeout(() => {
      if (this.searchSentinel) {
        this.initStickyObserver(this.searchSentinel.nativeElement);
      }
    }, 0);
  }
  ngAfterViewInit() {
    if (this.scrollContainers) {
      this.scrollContainers.changes.subscribe((list) => {
        list.forEach((containerRef) => {
          const cuisine = containerRef.nativeElement.dataset.cuisine;
          if (cuisine && !containerRef.nativeElement._hasScrollListener) {
            containerRef.nativeElement.addEventListener("scroll", (event) => this.onRestaurantScroll(event, cuisine));
            containerRef.nativeElement._hasScrollListener = true;
          }
          this.checkScrollArrows(containerRef.nativeElement, cuisine || "default");
        });
        this.cdr.detectChanges();
      });
      setTimeout(() => {
        this.scrollContainers.forEach((containerRef) => {
          const cuisine = containerRef.nativeElement.dataset.cuisine;
          if (cuisine)
            this.checkScrollArrows(containerRef.nativeElement, cuisine);
        });
        this.cdr.detectChanges();
      }, 0);
    }
  }
  ngOnDestroy() {
    if (this.sidebarSubscription) {
      this.sidebarSubscription.unsubscribe();
    }
    this.scrollContainers.forEach((containerRef) => {
      if (containerRef.nativeElement._hasScrollListener) {
        containerRef.nativeElement.removeEventListener("scroll", (event) => this.onRestaurantScroll(event, ""));
        containerRef.nativeElement._hasScrollListener = false;
      }
    });
  }
  initStickyObserver(elementToObserve) {
    const observer = new IntersectionObserver((entries) => {
      this.stickySearch = !entries[0].isIntersecting;
      this.stickyService.setSticky(this.stickySearch);
      this.cdr.detectChanges();
    }, {
      threshold: [0, 1]
    });
    observer.observe(elementToObserve);
  }
  _filter(val, list) {
    const filterValue = val.toLowerCase();
    return list.filter((item) => item.toLowerCase().includes(filterValue));
  }
  onSearch() {
    this.spinnerService.mostrar();
    this.restaurants = [];
    this.groupedRestaurants = {};
    const cidadeBusca = this.cityCtrl.value?.trim();
    const termoBusca = this.queryCtrl.value?.trim();
    if (cidadeBusca && termoBusca) {
      this.restauranteService.getRestaurantesPorCidade(cidadeBusca).subscribe({
        next: (restaurantsPorCidade) => {
          const filteredByTerm = restaurantsPorCidade.filter((r) => r.nome.toLowerCase().includes(termoBusca.toLowerCase()) || r.tipoCozinha && r.tipoCozinha.toLowerCase().includes(termoBusca.toLowerCase()));
          this.setRestaurants(filteredByTerm);
          this.spinnerService.ocultar();
        },
        error: (err) => {
          this.toastr.error("Erro ao buscar restaurantes por cidade.");
          console.error(err);
          this.spinnerService.ocultar();
        }
      });
    } else if (cidadeBusca) {
      this.restauranteService.getRestaurantesPorCidade(cidadeBusca).subscribe({
        next: (restaurantsPorCidade) => {
          this.setRestaurants(restaurantsPorCidade);
          this.spinnerService.ocultar();
        },
        error: (err) => {
          this.toastr.error("Erro ao buscar restaurantes por cidade.");
          console.error(err);
          this.spinnerService.ocultar();
        }
      });
    } else if (termoBusca) {
      this.restauranteService.getPesquisarRestaurantes(termoBusca, 0, 10).subscribe({
        next: (response) => {
          this.setRestaurants(response.content || []);
          this.spinnerService.ocultar();
        },
        error: (err) => {
          this.toastr.error("Erro ao pesquisar restaurantes.");
          console.error(err);
          this.spinnerService.ocultar();
        }
      });
    } else {
      this.restauranteService.getRestaurantes().subscribe({
        next: (allRestaurants) => {
          this.setRestaurants(allRestaurants);
          this.spinnerService.ocultar();
        },
        error: (err) => {
          this.toastr.error("Erro ao carregar todos os restaurantes.");
          console.error(err);
          this.spinnerService.ocultar();
        }
      });
      this.toastr.info("Por favor, digite um termo ou selecione uma cidade para buscar.");
      this.spinnerService.ocultar();
    }
  }
  onCityInput(event) {
    const value = event.target.value;
    this.filteredCitySuggestions = this._filter(value, this.todasCidades);
  }
  onCityBlur(event) {
    setTimeout(() => {
      this.showCityDropdown = false;
    }, 120);
  }
  selectQuery(q) {
    this.queryCtrl.setValue(q);
    this.showQueryDropdown = false;
  }
  getStarCount(r) {
    return Math.round((r.mediaAvaliacao || 0) / 2);
  }
  selectCity(city) {
    this.cityCtrl.setValue(city);
    this.showCityDropdown = false;
  }
  groupRestaurantsByCuisine(restaurants) {
    if (!Array.isArray(restaurants))
      return {};
    return restaurants.reduce((acc, restaurant) => {
      const type = restaurant.tipoCozinha || "Outros";
      if (!acc[type]) {
        acc[type] = [];
      }
      acc[type].push(restaurant);
      return acc;
    }, {});
  }
  formatarEndereco(endereco) {
    if (!endereco)
      return "Endere\xE7o n\xE3o informado";
    return `${endereco.rua}, ${endereco.numero} - ${endereco.bairro}, ${endereco.cidade}`;
  }
  getCuisineTypes() {
    return this.groupedRestaurants ? Object.keys(this.groupedRestaurants) : [];
  }
  onRestaurantScroll(event, cuisine) {
    const container = event.target;
    this.checkScrollArrows(container, cuisine);
  }
  canScrollLeft(cuisine) {
    return this.scrollStates[cuisine]?.canScrollLeft || false;
  }
  canScrollRight(cuisine) {
    return this.scrollStates[cuisine]?.canScrollRight || false;
  }
  checkScrollArrows(container, cuisine) {
    const canScrollLeft = container.scrollLeft > 0;
    const canScrollRight = container.scrollWidth > container.clientWidth && container.scrollLeft < container.scrollWidth - container.clientWidth - 5;
    if (this.scrollStates[cuisine] && (this.scrollStates[cuisine].canScrollLeft !== canScrollLeft || this.scrollStates[cuisine].canScrollRight !== canScrollRight)) {
      this.scrollStates[cuisine].canScrollLeft = canScrollLeft;
      this.scrollStates[cuisine].canScrollRight = canScrollRight;
      this.cdr.detectChanges();
    }
  }
  scrollRestaurants(cuisine, direction) {
    const containers = this.scrollContainers.toArray();
    const containerRef = containers.find((c) => c.nativeElement.dataset.cuisine === cuisine);
    if (!containerRef)
      return;
    const container = containerRef.nativeElement;
    const scrollAmount = container.clientWidth * 0.75;
    if (direction === "left") {
      container.scrollLeft -= scrollAmount;
    } else {
      container.scrollLeft += scrollAmount;
    }
  }
  setRestaurants(restaurants) {
    if (JSON.stringify(this.restaurants) !== JSON.stringify(restaurants)) {
      this.restaurants = restaurants;
      this.groupedRestaurants = this.groupRestaurantsByCuisine(restaurants);
    }
  }
  navigateToRestaurante(r) {
    this.router.navigate(["/home/agendamento-reservas-restaurante", r.id]);
  }
  getImagemRestaurante(r) {
    if (r.imagens && r.imagens.length > 0 && r.imagens[0]) {
      return r.imagens[0].startsWith("/") ? "http://localhost:8080" + r.imagens[0] : r.imagens[0];
    }
    return "assets/jpg/restauranteOsso.jpg";
  }
  getEnderecoFormatado(r) {
    if (!r.endereco)
      return "Endere\xE7o n\xE3o informado";
    const { rua, numero, bairro, cidade, estado } = r.endereco;
    return `${rua}, ${numero} - ${bairro}, ${cidade} - ${estado}`;
  }
  getTotalAvaliacoes(r) {
    return r.totalDeAvaliacoes || 0;
  }
  static {
    this.\u0275fac = function HomeComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _HomeComponent)(\u0275\u0275directiveInject(StickySearchService), \u0275\u0275directiveInject(ChangeDetectorRef), \u0275\u0275directiveInject(RestauranteService), \u0275\u0275directiveInject(MapsService), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(GlobalSpinnerService), \u0275\u0275directiveInject(ToastrService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _HomeComponent, selectors: [["app-home"]], viewQuery: function HomeComponent_Query(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275viewQuery(_c0, 5);
        \u0275\u0275viewQuery(_c1, 5);
        \u0275\u0275viewQuery(_c2, 5);
        \u0275\u0275viewQuery(_c3, 5);
      }
      if (rf & 2) {
        let _t;
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.searchBarHome = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.bannerRef = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.searchSentinel = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.scrollContainers = _t);
      }
    }, decls: 16, vars: 5, consts: [["banner", ""], ["searchSentinel", ""], ["searchBarHome", ""], ["scrollContainer", ""], [1, "banner"], [1, "banner-content"], [1, "banner-row"], [1, "banner-left"], [1, "search-wrapper"], [3, "citySuggestions", "querySuggestions", "showCityDropdown", "showQueryDropdown", "cityCtrl", "queryCtrl", "filteredCities$", "filteredQueries$", "search", "cityInput", "selectCity", "selectQuery", "cityBlur", 4, "ngIf"], [1, "banner-right"], ["src", "assets/png/Pizza.png", "alt", "Pizza", 1, "pizza-img"], ["class", "city-dropdown-absolute", 4, "ngIf"], [1, "restaurants-section"], ["class", "cuisine-group", 4, "ngFor", "ngForOf"], [3, "search", "cityInput", "selectCity", "selectQuery", "cityBlur", "citySuggestions", "querySuggestions", "showCityDropdown", "showQueryDropdown", "cityCtrl", "queryCtrl", "filteredCities$", "filteredQueries$"], [1, "city-dropdown-absolute"], [1, "dropdown", "city-dropdown"], ["type", "text", "placeholder", "Digite a cidade...", "autofocus", "", 1, "dropdown-city-search", 3, "input", "formControl"], [1, "dropdown-item", "brown-text", "highlight", 3, "mousedown"], [1, "icon", "brown"], [1, "dropdown-title"], ["class", "dropdown-item brown-text", 3, "mousedown", 4, "ngFor", "ngForOf"], [1, "dropdown-item", "brown-text", 3, "mousedown"], [1, "cuisine-group"], [1, "cuisine-header"], [1, "navigation-arrows"], ["mat-icon-button", "", 3, "click", "disabled"], [1, "scrollable-restaurants", 3, "scroll"], [1, "restaurants-grid"], ["class", "restaurant-card", 3, "routerLink", 4, "ngFor", "ngForOf"], [1, "restaurant-card", 3, "routerLink"], [1, "restaurant-img", 3, "src", "alt"], [1, "restaurant-info"], [1, "restaurant-address"], [1, "restaurant-name"], [1, "restaurant-rating"], ["class", "star", 3, "ngClass", 4, "ngFor", "ngForOf"], [1, "rate-number"], ["class", "reviews-count", 4, "ngIf"], [1, "star", 3, "ngClass"], [1, "reviews-count"]], template: function HomeComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 4, 0)(2, "div", 5)(3, "div", 6)(4, "div", 7)(5, "h1");
        \u0275\u0275text(6, "Descubra e reserve o melhor restaurante");
        \u0275\u0275elementEnd();
        \u0275\u0275element(7, "div", null, 1);
        \u0275\u0275elementStart(9, "div", 8);
        \u0275\u0275template(10, HomeComponent_app_search_bar_10_Template, 2, 8, "app-search-bar", 9);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(11, "div", 10);
        \u0275\u0275element(12, "img", 11);
        \u0275\u0275elementEnd()();
        \u0275\u0275template(13, HomeComponent_div_13_Template, 10, 2, "div", 12);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(14, "div", 13);
        \u0275\u0275template(15, HomeComponent_div_15_Template, 15, 5, "div", 14);
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        \u0275\u0275advance(10);
        \u0275\u0275property("ngIf", !ctx.stickySearch);
        \u0275\u0275advance(3);
        \u0275\u0275property("ngIf", ctx.showCityDropdown);
        \u0275\u0275advance();
        \u0275\u0275classProp("sidebar-aberta", ctx.isSidebarOpen);
        \u0275\u0275advance();
        \u0275\u0275property("ngForOf", ctx.getCuisineTypes());
      }
    }, dependencies: [
      CommonModule,
      NgClass,
      NgForOf,
      NgIf,
      FormsModule,
      DefaultValueAccessor,
      NgControlStatus,
      ReactiveFormsModule,
      FormControlDirective,
      MatIconModule,
      MatIcon,
      MatInputModule,
      MatFormFieldModule,
      MatAutocompleteModule,
      SearchBarComponent,
      RouterModule,
      RouterLink
    ], styles: ['@charset "UTF-8";\n\n\n\n.banner[_ngcontent-%COMP%] {\n  background: #f6bd38;\n  border-radius: 32px;\n  margin: 48px auto;\n  max-width: 96vw;\n  min-height: 420px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  box-shadow: 0 4px 24px rgba(0, 0, 0, 0.07);\n  overflow: hidden;\n}\n.banner-content[_ngcontent-%COMP%] {\n  width: 100%;\n  max-width: 1200px;\n  margin: 0 auto;\n}\n.banner-row[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  justify-content: center;\n  position: relative;\n  gap: 0;\n}\n.banner-left[_ngcontent-%COMP%] {\n  flex: 1 1 0;\n  display: flex;\n  flex-direction: column;\n  align-items: flex-start;\n  justify-content: center;\n  z-index: 2;\n  margin-top: 60px;\n  margin-left: 0;\n  margin-right: 0;\n  max-width: 65%;\n}\n.banner[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  color: #fff;\n  font-size: 2.8rem;\n  font-weight: 800;\n  margin-bottom: 38px;\n  line-height: 1.2;\n  text-align: left;\n  max-width: 95%;\n  margin-right: 32px;\n  word-break: break-word;\n}\n.search-bar[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-start;\n  width: 100%;\n}\n.input-group[_ngcontent-%COMP%] {\n  display: flex;\n  background: #fff;\n  border-radius: 15px;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);\n  align-items: stretch;\n  width: 700px;\n  max-width: 5200px;\n  min-width: 380px;\n  margin: 0;\n  padding: 0;\n  height: 56px;\n  margin-top: 0;\n  justify-content: space-between;\n  position: sticky;\n  top: 24px;\n  z-index: 50;\n  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.1);\n  background: #fff;\n  margin-bottom: 24px;\n  gap: 8px;\n}\n.custom-field[_ngcontent-%COMP%] {\n  flex: 1 1 0;\n  min-width: 120px;\n  max-width: 220px;\n  margin-right: 8px;\n  background: none;\n  border: none;\n  box-shadow: none;\n  padding: 0;\n  display: flex;\n  align-items: center;\n  border-radius: 0;\n  height: 100%;\n}\n.custom-field[_ngcontent-%COMP%]:last-child {\n  margin-right: 0;\n}\n.mat-form-field[_ngcontent-%COMP%] {\n  width: 100%;\n  background: none;\n}\n.mat-form-field-appearance-outline[_ngcontent-%COMP%]   .mat-form-field-outline[_ngcontent-%COMP%] {\n  color: #eee;\n}\n.city-input[_ngcontent-%COMP%], \n.long-query[_ngcontent-%COMP%] {\n  min-width: 120px;\n  max-width: 220px;\n  font-style: italic;\n}\n.icon[_ngcontent-%COMP%] {\n  font-size: 1.3rem;\n  color: #3B221B;\n  margin-right: 6px;\n}\n.brown[_ngcontent-%COMP%] {\n  color: #3B221B !important;\n}\n.brown-text[_ngcontent-%COMP%] {\n  color: #3B221B !important;\n}\n[_ngcontent-%COMP%]::placeholder {\n  color: #3B221B !important;\n  opacity: 0.7;\n  font-style: italic;\n}\n.search-btn[_ngcontent-%COMP%] {\n  background: #f6bd38;\n  color: #222;\n  font-weight: 800;\n  border: none;\n  border-radius: 15px;\n  padding: 0 22px;\n  height: 44px;\n  margin-left: 12px;\n  margin-right: 4px;\n  font-size: 1.05rem;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);\n  transition: background 0.2s, color 0.2s;\n  cursor: pointer;\n  outline: none;\n  min-width: 110px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  align-self: center;\n}\n.search-btn[_ngcontent-%COMP%]:hover, \n.search-btn[_ngcontent-%COMP%]:focus {\n  background: #ffe08a;\n  color: #222;\n}\n.city-dropdown-absolute[_ngcontent-%COMP%] {\n  position: absolute;\n  left: 50%;\n  top: 100px;\n  transform: translateX(-50%);\n  width: 340px;\n  z-index: 100;\n  margin-left: 0;\n}\n.dropdown[_ngcontent-%COMP%] {\n  background: #fff;\n  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.1);\n  border-radius: 0 0 14px 14px;\n  z-index: 20;\n  max-height: 260px;\n  overflow-y: auto;\n  margin-top: 2px;\n}\n.city-dropdown[_ngcontent-%COMP%] {\n  padding: 12px 0 8px 0;\n  min-width: 320px;\n  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.13);\n  border-radius: 0 0 14px 14px;\n}\n.dropdown-city-search[_ngcontent-%COMP%] {\n  width: 90%;\n  margin: 0 5% 10px 5%;\n  padding: 10px 12px;\n  border-radius: 8px;\n  border: 1px solid #eee;\n  font-size: 1rem;\n  color: #3B221B;\n  background: #fafafa;\n}\n.dropdown-title[_ngcontent-%COMP%] {\n  font-size: 0.98rem;\n  font-weight: 600;\n  color: #3B221B;\n  padding: 8px 18px 4px 18px;\n  opacity: 0.7;\n}\n.highlight[_ngcontent-%COMP%] {\n  background: #f6f6f6;\n  font-weight: 600;\n  border-radius: 8px;\n  margin: 0 8px 8px 8px;\n  padding: 12px 18px !important;\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n.dropdown-item[_ngcontent-%COMP%] {\n  padding: 14px 18px;\n  cursor: pointer;\n  color: #3B221B;\n  font-size: 1rem;\n  border-bottom: 1px solid #f6f6f6;\n  transition: background 0.15s, color 0.15s;\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  border-radius: 6px;\n}\n.dropdown-item[_ngcontent-%COMP%]:last-child {\n  border-bottom: none;\n}\n.dropdown-item[_ngcontent-%COMP%]:hover {\n  background: #f6bd38;\n  color: #3B221B;\n  font-weight: 700;\n}\n.banner-right[_ngcontent-%COMP%] {\n  flex: 0 0 420px;\n  display: flex;\n  align-items: center;\n  justify-content: flex-end;\n  height: 100%;\n  position: absolute;\n  right: -18%;\n  top: 50%;\n  transform: translateY(-50%);\n  z-index: 1;\n  overflow: visible;\n}\n.pizza-img[_ngcontent-%COMP%] {\n  max-width: 420px;\n  max-height: 420px;\n  width: 100%;\n  height: auto;\n  object-fit: contain;\n  filter: drop-shadow(0 4px 16px rgba(0, 0, 0, 0.1));\n  overflow: visible;\n}\n@media (max-width: 1100px) {\n  .banner-row[_ngcontent-%COMP%] {\n    flex-direction: column;\n    align-items: center;\n  }\n  .banner-right[_ngcontent-%COMP%] {\n    position: static;\n    right: 0;\n    top: 0;\n    transform: none;\n    margin-top: 32px;\n    justify-content: center;\n  }\n  .pizza-img[_ngcontent-%COMP%] {\n    margin-left: 0;\n    max-width: 220px;\n  }\n  .banner-left[_ngcontent-%COMP%] {\n    margin-left: 0;\n    margin-top: 32px;\n    align-items: center;\n    margin-right: 0;\n    max-width: 100%;\n  }\n  .input-group[_ngcontent-%COMP%] {\n    width: 98vw;\n    max-width: 98vw;\n  }\n  .city-dropdown-absolute[_ngcontent-%COMP%] {\n    position: static;\n    margin-left: 0;\n    width: 98vw;\n    left: 0;\n    transform: none;\n  }\n}\n@media (max-width: 700px) {\n  .banner-content[_ngcontent-%COMP%] {\n    max-width: 98vw;\n  }\n  .banner-row[_ngcontent-%COMP%] {\n    flex-direction: column;\n    align-items: center;\n  }\n  .banner-left[_ngcontent-%COMP%] {\n    align-items: center;\n    margin-left: 0;\n    margin-right: 0;\n    max-width: 100%;\n  }\n  .input-group[_ngcontent-%COMP%] {\n    flex-direction: column;\n    gap: 8px;\n  }\n  .custom-field[_ngcontent-%COMP%] {\n    min-width: 100%;\n    max-width: 100%;\n    margin-right: 0;\n  }\n  .search-btn[_ngcontent-%COMP%] {\n    margin-top: 8px;\n    height: 48px;\n  }\n  .pizza-img[_ngcontent-%COMP%] {\n    max-width: 180px;\n  }\n  .banner[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n    font-size: 1.5rem;\n    text-align: center;\n    margin-right: 0;\n  }\n}\n.results-grid[_ngcontent-%COMP%] {\n  margin-top: 24px;\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));\n  gap: 24px;\n}\n.rest-card[_ngcontent-%COMP%] {\n  background: #fff;\n  border-radius: 12px;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.07);\n  padding: 16px;\n  transition: transform 0.2s;\n  cursor: pointer;\n}\n.rest-card[_ngcontent-%COMP%]:hover {\n  transform: scale(1.03);\n}\n.rest-card[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n  border-radius: 8px;\n}\n.rest-card[_ngcontent-%COMP%]   .tipo[_ngcontent-%COMP%] {\n  font-size: 13px;\n  color: #DA4A24;\n  font-weight: 600;\n  margin-bottom: 4px;\n}\n.rest-card[_ngcontent-%COMP%]   .nome[_ngcontent-%COMP%] {\n  font-size: 18px;\n  font-weight: 700;\n  margin-bottom: 8px;\n}\n.restaurants-section[_ngcontent-%COMP%] {\n  margin: 48px auto 0 auto;\n  max-width: 1200px;\n  padding: 0 24px;\n  transition: max-width 0.3s ease, padding 0.3s ease;\n}\n.restaurants-section.sidebar-aberta[_ngcontent-%COMP%] {\n  max-width: 928px;\n  padding: 0 16px;\n  margin-left: auto;\n  margin-right: auto;\n}\n.restaurants-section[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: 2rem;\n  font-weight: 700;\n  color: #3B221B;\n  margin-bottom: 24px;\n}\n.restaurant-card[_ngcontent-%COMP%] {\n  background: #fff;\n  border-radius: 18px;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);\n  overflow: hidden;\n  display: flex;\n  flex-direction: column;\n  align-items: stretch;\n  transition: box-shadow 0.2s, transform 0.2s;\n  cursor: pointer;\n}\n.restaurant-card[_ngcontent-%COMP%]:hover {\n  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.13);\n  transform: translateY(-2px) scale(1.01);\n}\n.restaurant-img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 160px;\n  object-fit: cover;\n  border-radius: 18px 18px 0 0;\n}\n.restaurant-info[_ngcontent-%COMP%] {\n  padding: 18px 18px 14px 18px;\n  display: flex;\n  flex-direction: column;\n  gap: 6px;\n}\n.restaurant-type[_ngcontent-%COMP%] {\n  font-size: 0.95rem;\n  color: #DA4A24;\n  font-weight: 600;\n  margin-bottom: 2px;\n}\n.restaurant-name[_ngcontent-%COMP%] {\n  font-size: 1.18rem;\n  font-weight: 700;\n  color: #3B221B;\n  margin-bottom: 6px;\n}\n.restaurant-rating[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 4px;\n}\n.star[_ngcontent-%COMP%] {\n  font-size: 1.1rem;\n  color: #e0e0e0;\n}\n.star.filled[_ngcontent-%COMP%] {\n  color: #F6BD38;\n}\n.rate-number[_ngcontent-%COMP%] {\n  font-size: 1rem;\n  font-weight: 600;\n  color: #3B221B;\n  margin-left: 6px;\n}\n.restaurant-address[_ngcontent-%COMP%] {\n  font-size: 0.9rem;\n  color: #555;\n  margin-bottom: 4px;\n}\n.see-more-container[_ngcontent-%COMP%] {\n  text-align: center;\n  margin-top: 16px;\n}\n.see-more-button[_ngcontent-%COMP%] {\n  color: #DA4A24;\n}\n.see-more-button[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 1.1rem;\n}\n.cuisine-group[_ngcontent-%COMP%] {\n  margin-bottom: 32px;\n}\n.cuisine-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 16px;\n}\n.cuisine-header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: 2rem;\n  font-weight: 700;\n  color: #3B221B;\n  margin: 0;\n}\n.cuisine-header[_ngcontent-%COMP%]   .navigation-arrows[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 8px;\n}\n.cuisine-header[_ngcontent-%COMP%]   .navigation-arrows[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  width: 32px;\n  height: 32px;\n  border-radius: 50%;\n  background-color: #fff;\n  border: 1px solid #e0e0e0;\n  color: #3B221B;\n  cursor: pointer;\n  transition: all 0.2s ease;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);\n}\n.cuisine-header[_ngcontent-%COMP%]   .navigation-arrows[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background-color: #f5f5f5;\n  border-color: #f6bd38;\n  color: #f6bd38;\n}\n.cuisine-header[_ngcontent-%COMP%]   .navigation-arrows[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:disabled {\n  opacity: 0.4;\n  cursor: not-allowed;\n  box-shadow: none;\n}\n.cuisine-header[_ngcontent-%COMP%]   .navigation-arrows[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 14px;\n  width: 14px;\n  height: 14px;\n}\n.scrollable-restaurants[_ngcontent-%COMP%] {\n  overflow-x: auto;\n  padding-bottom: 20px;\n  -webkit-overflow-scrolling: touch;\n  scrollbar-width: none;\n  -ms-overflow-style: none;\n  scroll-behavior: smooth;\n}\n.scrollable-restaurants[_ngcontent-%COMP%]::-webkit-scrollbar {\n  display: none;\n}\n.scrollable-restaurants[_ngcontent-%COMP%]   .restaurants-grid[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: nowrap;\n  gap: 24px;\n}\n.scrollable-restaurants[_ngcontent-%COMP%]   .restaurants-grid[_ngcontent-%COMP%]   .restaurant-card[_ngcontent-%COMP%] {\n  flex: 0 0 calc((100% - 72px) / 4);\n  max-width: calc((100% - 72px) / 4);\n  min-width: 260px;\n}\n.restaurants-section.sidebar-aberta[_ngcontent-%COMP%]   .scrollable-restaurants[_ngcontent-%COMP%]   .restaurants-grid[_ngcontent-%COMP%]   .restaurant-card[_ngcontent-%COMP%] {\n  flex: 0 0 calc((100% - 48px) / 3);\n  max-width: calc((100% - 48px) / 3);\n  min-width: 250px;\n}\n@media (max-width: 900px) {\n  .restaurants-section[_ngcontent-%COMP%] {\n    padding: 0 8px;\n  }\n  .restaurants-section.sidebar-aberta[_ngcontent-%COMP%] {\n    padding: 0 8px;\n  }\n  .scrollable-restaurants[_ngcontent-%COMP%]   .restaurants-grid[_ngcontent-%COMP%] {\n    gap: 18px;\n  }\n  .scrollable-restaurants[_ngcontent-%COMP%]   .restaurants-grid[_ngcontent-%COMP%]   .restaurant-card[_ngcontent-%COMP%] {\n    flex: 0 0 calc((100% - 18px) / 2);\n    max-width: calc((100% - 18px) / 2);\n    min-width: 200px;\n  }\n  .restaurants-section.sidebar-aberta[_ngcontent-%COMP%]   .scrollable-restaurants[_ngcontent-%COMP%]   .restaurants-grid[_ngcontent-%COMP%]   .restaurant-card[_ngcontent-%COMP%] {\n    flex: 0 0 calc((100% - 18px) / 2);\n    max-width: calc((100% - 18px) / 2);\n  }\n}\n@media (max-width: 700px) {\n  .scrollable-restaurants[_ngcontent-%COMP%]   .restaurants-grid[_ngcontent-%COMP%]   .restaurant-card[_ngcontent-%COMP%] {\n    flex: 0 0 100%;\n    max-width: 100%;\n  }\n  .restaurants-section.sidebar-aberta[_ngcontent-%COMP%]   .scrollable-restaurants[_ngcontent-%COMP%]   .restaurants-grid[_ngcontent-%COMP%]   .restaurant-card[_ngcontent-%COMP%] {\n    flex: 0 0 100%;\n    max-width: 100%;\n  }\n}\n/*# sourceMappingURL=home.component.css.map */'] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(HomeComponent, [{
    type: Component,
    args: [{ selector: "app-home", standalone: true, imports: [
      CommonModule,
      FormsModule,
      ReactiveFormsModule,
      MatIconModule,
      MatInputModule,
      MatFormFieldModule,
      MatAutocompleteModule,
      SearchBarComponent,
      RouterModule
    ], template: `<div class="banner" #banner>\r
  <div class="banner-content">\r
    <div class="banner-row">\r
      <div class="banner-left">\r
        <h1>Descubra e reserve o melhor restaurante</h1>\r
        <div #searchSentinel></div>\r
        <div class="search-wrapper">\r
          <app-search-bar\r
            *ngIf="!stickySearch"\r
            #searchBarHome\r
            [citySuggestions]="filteredCitySuggestions"\r
            [querySuggestions]="querySuggestions"\r
            [showCityDropdown]="showCityDropdown"\r
            [showQueryDropdown]="showQueryDropdown"\r
            [cityCtrl]="cityCtrl"\r
            [queryCtrl]="queryCtrl"\r
            [filteredCities$]="filteredCities$"\r
            [filteredQueries$]="filteredQueries$"\r
            (search)="onSearch()"\r
            (cityInput)="onCityInput($event)"\r
            (selectCity)="selectCity($event)"\r
            (selectQuery)="selectQuery($event)"\r
            (cityBlur)="onCityBlur($event)"\r
          ></app-search-bar>\r
        </div>\r
      </div>\r
      <div class="banner-right">\r
        <img src="assets/png/Pizza.png" alt="Pizza" class="pizza-img" />\r
      </div>\r
    </div>\r
    <div class="city-dropdown-absolute" *ngIf="showCityDropdown">\r
      <div class="dropdown city-dropdown">\r
        <input class="dropdown-city-search" type="text" placeholder="Digite a cidade..." [formControl]="cityCtrl" (input)="onCityInput($event)" autofocus>\r
        <div class="dropdown-item brown-text highlight" (mousedown)="selectCity('Perto de mim')">\r
          <mat-icon class="icon brown">send</mat-icon> Perto de mim\r
        </div>\r
        <div class="dropdown-title">Sugest\xF5es</div>\r
        <div class="dropdown-item brown-text" *ngFor="let city of filteredCitySuggestions" (mousedown)="selectCity(city)">\r
          <mat-icon class="icon brown">location_on</mat-icon> {{city}}\r
        </div>\r
      </div>\r
    </div>\r
  </div>\r
</div>\r
\r
<div class="restaurants-section" [class.sidebar-aberta]="isSidebarOpen">\r
  <div *ngFor="let cuisine of getCuisineTypes()" class="cuisine-group">\r
    <div class="cuisine-header">\r
      <h2>{{ cuisine }}</h2>\r
      <div class="navigation-arrows">\r
        <button mat-icon-button (click)="scrollRestaurants(cuisine, 'left')" [disabled]="!canScrollLeft(cuisine)">\r
          <mat-icon>chevron_left</mat-icon>\r
        </button>\r
        <button mat-icon-button (click)="scrollRestaurants(cuisine, 'right')" [disabled]="!canScrollRight(cuisine)">\r
          <mat-icon>chevron_right</mat-icon>\r
        </button>\r
      </div>\r
    </div>\r
\r
    <div class="scrollable-restaurants" #scrollContainer [attr.data-cuisine]="cuisine" (scroll)="onRestaurantScroll($event, cuisine)">\r
      <div class="restaurants-grid">\r
        <div class="restaurant-card" *ngFor="let r of groupedRestaurants[cuisine]" [routerLink]="['/home','agendamento-reservas-restaurante', r.id]">\r
          <img [src]="getImagemRestaurante(r)" [alt]="r.nome" class="restaurant-img" />\r
          <div class="restaurant-info">\r
            <div class="restaurant-address">{{ getEnderecoFormatado(r) }}</div>\r
            <div class="restaurant-name">{{ r.nome }}</div>\r
            <div class="restaurant-rating">\r
              <mat-icon *ngFor="let star of [1,2,3,4,5]" class="star" [ngClass]="{'filled': star <= getStarCount(r)}">star</mat-icon>\r
              <span class="rate-number">{{ r.mediaAvaliacao }}</span>\r
              <span class="reviews-count" *ngIf="getTotalAvaliacoes(r) > 0">({{ getTotalAvaliacoes(r) }} avalia\xE7\xF5es)</span>\r
            </div>\r
          </div>\r
        </div>\r
      </div>\r
    </div>\r
  </div>\r
</div>`, styles: ['@charset "UTF-8";\n\n/* src/app/pages/home/home.component.scss */\n.banner {\n  background: #f6bd38;\n  border-radius: 32px;\n  margin: 48px auto;\n  max-width: 96vw;\n  min-height: 420px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  box-shadow: 0 4px 24px rgba(0, 0, 0, 0.07);\n  overflow: hidden;\n}\n.banner-content {\n  width: 100%;\n  max-width: 1200px;\n  margin: 0 auto;\n}\n.banner-row {\n  display: flex;\n  align-items: flex-start;\n  justify-content: center;\n  position: relative;\n  gap: 0;\n}\n.banner-left {\n  flex: 1 1 0;\n  display: flex;\n  flex-direction: column;\n  align-items: flex-start;\n  justify-content: center;\n  z-index: 2;\n  margin-top: 60px;\n  margin-left: 0;\n  margin-right: 0;\n  max-width: 65%;\n}\n.banner h1 {\n  color: #fff;\n  font-size: 2.8rem;\n  font-weight: 800;\n  margin-bottom: 38px;\n  line-height: 1.2;\n  text-align: left;\n  max-width: 95%;\n  margin-right: 32px;\n  word-break: break-word;\n}\n.search-bar {\n  display: flex;\n  justify-content: flex-start;\n  width: 100%;\n}\n.input-group {\n  display: flex;\n  background: #fff;\n  border-radius: 15px;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);\n  align-items: stretch;\n  width: 700px;\n  max-width: 5200px;\n  min-width: 380px;\n  margin: 0;\n  padding: 0;\n  height: 56px;\n  margin-top: 0;\n  justify-content: space-between;\n  position: sticky;\n  top: 24px;\n  z-index: 50;\n  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.1);\n  background: #fff;\n  margin-bottom: 24px;\n  gap: 8px;\n}\n.custom-field {\n  flex: 1 1 0;\n  min-width: 120px;\n  max-width: 220px;\n  margin-right: 8px;\n  background: none;\n  border: none;\n  box-shadow: none;\n  padding: 0;\n  display: flex;\n  align-items: center;\n  border-radius: 0;\n  height: 100%;\n}\n.custom-field:last-child {\n  margin-right: 0;\n}\n.mat-form-field {\n  width: 100%;\n  background: none;\n}\n.mat-form-field-appearance-outline .mat-form-field-outline {\n  color: #eee;\n}\n.city-input,\n.long-query {\n  min-width: 120px;\n  max-width: 220px;\n  font-style: italic;\n}\n.icon {\n  font-size: 1.3rem;\n  color: #3B221B;\n  margin-right: 6px;\n}\n.brown {\n  color: #3B221B !important;\n}\n.brown-text {\n  color: #3B221B !important;\n}\n::placeholder {\n  color: #3B221B !important;\n  opacity: 0.7;\n  font-style: italic;\n}\n.search-btn {\n  background: #f6bd38;\n  color: #222;\n  font-weight: 800;\n  border: none;\n  border-radius: 15px;\n  padding: 0 22px;\n  height: 44px;\n  margin-left: 12px;\n  margin-right: 4px;\n  font-size: 1.05rem;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);\n  transition: background 0.2s, color 0.2s;\n  cursor: pointer;\n  outline: none;\n  min-width: 110px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  align-self: center;\n}\n.search-btn:hover,\n.search-btn:focus {\n  background: #ffe08a;\n  color: #222;\n}\n.city-dropdown-absolute {\n  position: absolute;\n  left: 50%;\n  top: 100px;\n  transform: translateX(-50%);\n  width: 340px;\n  z-index: 100;\n  margin-left: 0;\n}\n.dropdown {\n  background: #fff;\n  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.1);\n  border-radius: 0 0 14px 14px;\n  z-index: 20;\n  max-height: 260px;\n  overflow-y: auto;\n  margin-top: 2px;\n}\n.city-dropdown {\n  padding: 12px 0 8px 0;\n  min-width: 320px;\n  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.13);\n  border-radius: 0 0 14px 14px;\n}\n.dropdown-city-search {\n  width: 90%;\n  margin: 0 5% 10px 5%;\n  padding: 10px 12px;\n  border-radius: 8px;\n  border: 1px solid #eee;\n  font-size: 1rem;\n  color: #3B221B;\n  background: #fafafa;\n}\n.dropdown-title {\n  font-size: 0.98rem;\n  font-weight: 600;\n  color: #3B221B;\n  padding: 8px 18px 4px 18px;\n  opacity: 0.7;\n}\n.highlight {\n  background: #f6f6f6;\n  font-weight: 600;\n  border-radius: 8px;\n  margin: 0 8px 8px 8px;\n  padding: 12px 18px !important;\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n.dropdown-item {\n  padding: 14px 18px;\n  cursor: pointer;\n  color: #3B221B;\n  font-size: 1rem;\n  border-bottom: 1px solid #f6f6f6;\n  transition: background 0.15s, color 0.15s;\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  border-radius: 6px;\n}\n.dropdown-item:last-child {\n  border-bottom: none;\n}\n.dropdown-item:hover {\n  background: #f6bd38;\n  color: #3B221B;\n  font-weight: 700;\n}\n.banner-right {\n  flex: 0 0 420px;\n  display: flex;\n  align-items: center;\n  justify-content: flex-end;\n  height: 100%;\n  position: absolute;\n  right: -18%;\n  top: 50%;\n  transform: translateY(-50%);\n  z-index: 1;\n  overflow: visible;\n}\n.pizza-img {\n  max-width: 420px;\n  max-height: 420px;\n  width: 100%;\n  height: auto;\n  object-fit: contain;\n  filter: drop-shadow(0 4px 16px rgba(0, 0, 0, 0.1));\n  overflow: visible;\n}\n@media (max-width: 1100px) {\n  .banner-row {\n    flex-direction: column;\n    align-items: center;\n  }\n  .banner-right {\n    position: static;\n    right: 0;\n    top: 0;\n    transform: none;\n    margin-top: 32px;\n    justify-content: center;\n  }\n  .pizza-img {\n    margin-left: 0;\n    max-width: 220px;\n  }\n  .banner-left {\n    margin-left: 0;\n    margin-top: 32px;\n    align-items: center;\n    margin-right: 0;\n    max-width: 100%;\n  }\n  .input-group {\n    width: 98vw;\n    max-width: 98vw;\n  }\n  .city-dropdown-absolute {\n    position: static;\n    margin-left: 0;\n    width: 98vw;\n    left: 0;\n    transform: none;\n  }\n}\n@media (max-width: 700px) {\n  .banner-content {\n    max-width: 98vw;\n  }\n  .banner-row {\n    flex-direction: column;\n    align-items: center;\n  }\n  .banner-left {\n    align-items: center;\n    margin-left: 0;\n    margin-right: 0;\n    max-width: 100%;\n  }\n  .input-group {\n    flex-direction: column;\n    gap: 8px;\n  }\n  .custom-field {\n    min-width: 100%;\n    max-width: 100%;\n    margin-right: 0;\n  }\n  .search-btn {\n    margin-top: 8px;\n    height: 48px;\n  }\n  .pizza-img {\n    max-width: 180px;\n  }\n  .banner h1 {\n    font-size: 1.5rem;\n    text-align: center;\n    margin-right: 0;\n  }\n}\n.results-grid {\n  margin-top: 24px;\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));\n  gap: 24px;\n}\n.rest-card {\n  background: #fff;\n  border-radius: 12px;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.07);\n  padding: 16px;\n  transition: transform 0.2s;\n  cursor: pointer;\n}\n.rest-card:hover {\n  transform: scale(1.03);\n}\n.rest-card img {\n  width: 100%;\n  border-radius: 8px;\n}\n.rest-card .tipo {\n  font-size: 13px;\n  color: #DA4A24;\n  font-weight: 600;\n  margin-bottom: 4px;\n}\n.rest-card .nome {\n  font-size: 18px;\n  font-weight: 700;\n  margin-bottom: 8px;\n}\n.restaurants-section {\n  margin: 48px auto 0 auto;\n  max-width: 1200px;\n  padding: 0 24px;\n  transition: max-width 0.3s ease, padding 0.3s ease;\n}\n.restaurants-section.sidebar-aberta {\n  max-width: 928px;\n  padding: 0 16px;\n  margin-left: auto;\n  margin-right: auto;\n}\n.restaurants-section h2 {\n  font-size: 2rem;\n  font-weight: 700;\n  color: #3B221B;\n  margin-bottom: 24px;\n}\n.restaurant-card {\n  background: #fff;\n  border-radius: 18px;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);\n  overflow: hidden;\n  display: flex;\n  flex-direction: column;\n  align-items: stretch;\n  transition: box-shadow 0.2s, transform 0.2s;\n  cursor: pointer;\n}\n.restaurant-card:hover {\n  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.13);\n  transform: translateY(-2px) scale(1.01);\n}\n.restaurant-img {\n  width: 100%;\n  height: 160px;\n  object-fit: cover;\n  border-radius: 18px 18px 0 0;\n}\n.restaurant-info {\n  padding: 18px 18px 14px 18px;\n  display: flex;\n  flex-direction: column;\n  gap: 6px;\n}\n.restaurant-type {\n  font-size: 0.95rem;\n  color: #DA4A24;\n  font-weight: 600;\n  margin-bottom: 2px;\n}\n.restaurant-name {\n  font-size: 1.18rem;\n  font-weight: 700;\n  color: #3B221B;\n  margin-bottom: 6px;\n}\n.restaurant-rating {\n  display: flex;\n  align-items: center;\n  gap: 4px;\n}\n.star {\n  font-size: 1.1rem;\n  color: #e0e0e0;\n}\n.star.filled {\n  color: #F6BD38;\n}\n.rate-number {\n  font-size: 1rem;\n  font-weight: 600;\n  color: #3B221B;\n  margin-left: 6px;\n}\n.restaurant-address {\n  font-size: 0.9rem;\n  color: #555;\n  margin-bottom: 4px;\n}\n.see-more-container {\n  text-align: center;\n  margin-top: 16px;\n}\n.see-more-button {\n  color: #DA4A24;\n}\n.see-more-button mat-icon {\n  font-size: 1.1rem;\n}\n.cuisine-group {\n  margin-bottom: 32px;\n}\n.cuisine-header {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 16px;\n}\n.cuisine-header h2 {\n  font-size: 2rem;\n  font-weight: 700;\n  color: #3B221B;\n  margin: 0;\n}\n.cuisine-header .navigation-arrows {\n  display: flex;\n  gap: 8px;\n}\n.cuisine-header .navigation-arrows button {\n  width: 32px;\n  height: 32px;\n  border-radius: 50%;\n  background-color: #fff;\n  border: 1px solid #e0e0e0;\n  color: #3B221B;\n  cursor: pointer;\n  transition: all 0.2s ease;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);\n}\n.cuisine-header .navigation-arrows button:hover:not(:disabled) {\n  background-color: #f5f5f5;\n  border-color: #f6bd38;\n  color: #f6bd38;\n}\n.cuisine-header .navigation-arrows button:disabled {\n  opacity: 0.4;\n  cursor: not-allowed;\n  box-shadow: none;\n}\n.cuisine-header .navigation-arrows button mat-icon {\n  font-size: 14px;\n  width: 14px;\n  height: 14px;\n}\n.scrollable-restaurants {\n  overflow-x: auto;\n  padding-bottom: 20px;\n  -webkit-overflow-scrolling: touch;\n  scrollbar-width: none;\n  -ms-overflow-style: none;\n  scroll-behavior: smooth;\n}\n.scrollable-restaurants::-webkit-scrollbar {\n  display: none;\n}\n.scrollable-restaurants .restaurants-grid {\n  display: flex;\n  flex-wrap: nowrap;\n  gap: 24px;\n}\n.scrollable-restaurants .restaurants-grid .restaurant-card {\n  flex: 0 0 calc((100% - 72px) / 4);\n  max-width: calc((100% - 72px) / 4);\n  min-width: 260px;\n}\n.restaurants-section.sidebar-aberta .scrollable-restaurants .restaurants-grid .restaurant-card {\n  flex: 0 0 calc((100% - 48px) / 3);\n  max-width: calc((100% - 48px) / 3);\n  min-width: 250px;\n}\n@media (max-width: 900px) {\n  .restaurants-section {\n    padding: 0 8px;\n  }\n  .restaurants-section.sidebar-aberta {\n    padding: 0 8px;\n  }\n  .scrollable-restaurants .restaurants-grid {\n    gap: 18px;\n  }\n  .scrollable-restaurants .restaurants-grid .restaurant-card {\n    flex: 0 0 calc((100% - 18px) / 2);\n    max-width: calc((100% - 18px) / 2);\n    min-width: 200px;\n  }\n  .restaurants-section.sidebar-aberta .scrollable-restaurants .restaurants-grid .restaurant-card {\n    flex: 0 0 calc((100% - 18px) / 2);\n    max-width: calc((100% - 18px) / 2);\n  }\n}\n@media (max-width: 700px) {\n  .scrollable-restaurants .restaurants-grid .restaurant-card {\n    flex: 0 0 100%;\n    max-width: 100%;\n  }\n  .restaurants-section.sidebar-aberta .scrollable-restaurants .restaurants-grid .restaurant-card {\n    flex: 0 0 100%;\n    max-width: 100%;\n  }\n}\n/*# sourceMappingURL=home.component.css.map */\n'] }]
  }], () => [{ type: StickySearchService }, { type: ChangeDetectorRef }, { type: RestauranteService }, { type: MapsService }, { type: Router }, { type: GlobalSpinnerService }, { type: ToastrService }], { searchBarHome: [{
    type: ViewChild,
    args: ["searchBarHome", { static: false }]
  }], bannerRef: [{
    type: ViewChild,
    args: ["banner", { static: false }]
  }], searchSentinel: [{
    type: ViewChild,
    args: ["searchSentinel", { static: false }]
  }], scrollContainers: [{
    type: ViewChildren,
    args: ["scrollContainer"]
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(HomeComponent, { className: "HomeComponent", filePath: "src/app/pages/home/home.component.ts", lineNumber: 37 });
})();

export {
  StickySearchService,
  SearchBarComponent,
  HomeComponent
};
//# sourceMappingURL=chunk-DFDXVFE4.js.map
