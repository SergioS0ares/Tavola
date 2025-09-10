import {
  MatFormFieldModule
} from "./chunk-IZRDCHUW.js";
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
} from "./chunk-KZIFGY56.js";
import "./chunk-WZCVESCT.js";
import "./chunk-OSG77INW.js";
import "./chunk-KJMARGBT.js";
import "./chunk-OSWLVLQR.js";
import "./chunk-R2VP7ZZU.js";
import "./chunk-GLVVVOMH.js";
import "./chunk-JWBWZAEB.js";
import "./chunk-YPGO4SMH.js";
import "./chunk-XCQUCDG5.js";
import "./chunk-XRI5TUYR.js";
import "./chunk-TNEQYUDY.js";
import "./chunk-E7QHGSEU.js";
import "./chunk-ZXXLUXUM.js";
import "./chunk-3EBDM35N.js";
import "./chunk-6ZBWLEKV.js";
import "./chunk-22ANS3MO.js";
import "./chunk-AX5K2LPI.js";
import "./chunk-P2U7VML3.js";
import "./chunk-SRGPZJPB.js";
import "./chunk-5UQIFE34.js";
import "./chunk-LY47WWX6.js";
import "./chunk-W4JHFQG5.js";
import "./chunk-T3FUWE6O.js";
import "./chunk-WDMUDEB6.js";

// ../node_modules/@angular/material/fesm2022/form-field.mjs
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
