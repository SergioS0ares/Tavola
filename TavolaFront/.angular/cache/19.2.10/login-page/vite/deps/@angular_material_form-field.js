import {
  MatFormFieldModule
} from "./chunk-LUQG24OS.js";
import {
  MAT_ERROR,
  MAT_FORM_FIELD,
  MAT_FORM_FIELD_DEFAULT_OPTIONS,
  MAT_PREFIX,
  MAT_SUFFIX,
  MatError,
  MatFormField,
  MatFormFieldControl,
  MatHint,
  MatLabel,
  MatPrefix,
  MatSuffix,
  getMatFormFieldDuplicatedHintError,
  getMatFormFieldMissingControlError,
  getMatFormFieldPlaceholderConflictError
} from "./chunk-A36444WR.js";
import "./chunk-BAB6K2M2.js";
import "./chunk-KEV2MDLM.js";
import "./chunk-SBB7ZL3K.js";
import "./chunk-7INKPMYX.js";
import "./chunk-EYA7V6ZJ.js";
import "./chunk-LVASUAWP.js";
import "./chunk-KWJ7NQKH.js";
import "./chunk-MPHMHYME.js";
import "./chunk-7REFUPSQ.js";
import "./chunk-KX7MSBCL.js";
import "./chunk-7QEDEFTF.js";
import "./chunk-LZUF4T7K.js";
import "./chunk-NS6GQYXV.js";
import "./chunk-4XALSHBV.js";
import "./chunk-23TJ56N3.js";
import "./chunk-P46NK4MB.js";
import "./chunk-AJJDLHWL.js";
import "./chunk-5CSPOBBY.js";
import "./chunk-X7CBRGQN.js";
import "./chunk-SYBYN4KT.js";
import "./chunk-IEOGSPDX.js";
import "./chunk-NQPCOEVC.js";
import "./chunk-D6F6LF5Z.js";
import "./chunk-WDMUDEB6.js";

// ../../../node_modules/@angular/material/fesm2022/form-field.mjs
var matFormFieldAnimations = {
  // Represents:
  // trigger('transitionMessages', [
  //   // TODO(mmalerba): Use angular animations for label animation as well.
  //   state('enter', style({opacity: 1, transform: 'translateY(0%)'})),
  //   transition('void => enter', [
  //     style({opacity: 0, transform: 'translateY(-5px)'}),
  //     animate('300ms cubic-bezier(0.55, 0, 0.55, 0.2)'),
  //   ]),
  // ])
  /** Animation that transitions the form field's error and hint messages. */
  transitionMessages: {
    type: 7,
    name: "transitionMessages",
    definitions: [{
      type: 0,
      name: "enter",
      styles: {
        type: 6,
        styles: {
          opacity: 1,
          transform: "translateY(0%)"
        },
        offset: null
      }
    }, {
      type: 1,
      expr: "void => enter",
      animation: [{
        type: 6,
        styles: {
          opacity: 0,
          transform: "translateY(-5px)"
        },
        offset: null
      }, {
        type: 4,
        styles: null,
        timings: "300ms cubic-bezier(0.55, 0, 0.55, 0.2)"
      }],
      options: null
    }],
    options: {}
  }
};
export {
  MAT_ERROR,
  MAT_FORM_FIELD,
  MAT_FORM_FIELD_DEFAULT_OPTIONS,
  MAT_PREFIX,
  MAT_SUFFIX,
  MatError,
  MatFormField,
  MatFormFieldControl,
  MatFormFieldModule,
  MatHint,
  MatLabel,
  MatPrefix,
  MatSuffix,
  getMatFormFieldDuplicatedHintError,
  getMatFormFieldMissingControlError,
  getMatFormFieldPlaceholderConflictError,
  matFormFieldAnimations
};
//# sourceMappingURL=@angular_material_form-field.js.map
