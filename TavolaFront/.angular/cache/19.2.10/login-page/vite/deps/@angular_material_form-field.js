import {
  MatFormFieldModule
} from "./chunk-B3QKSD7E.js";
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
} from "./chunk-CZ7RA6AN.js";
import "./chunk-BQ3AIMSV.js";
import "./chunk-VMQZ4732.js";
import "./chunk-GGGA5BQJ.js";
import "./chunk-OIIQJ44V.js";
import "./chunk-HHRKK6K5.js";
import "./chunk-JNEJ2NCE.js";
import "./chunk-WSAI2QAE.js";
import "./chunk-QQMKQDLC.js";
import "./chunk-PHSO4WZE.js";
import "./chunk-J5IVG3YW.js";
import "./chunk-NMEVFTWD.js";
import "./chunk-KOK6REQ4.js";
import "./chunk-NA5JTFUV.js";
import "./chunk-YG6IBZAG.js";
import "./chunk-E6OYZ467.js";
import "./chunk-OXN33DHF.js";
import "./chunk-JNVOAN5Y.js";
import "./chunk-3THGSVIG.js";
import "./chunk-CW2EXLSN.js";
import "./chunk-ECCGN4ZH.js";
import "./chunk-JVENEIRA.js";
import "./chunk-CQGGUQNL.js";
import "./chunk-DH6NDNLB.js";
import "./chunk-WDMUDEB6.js";

// ../../../../../node_modules/@angular/material/fesm2022/form-field.mjs
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
