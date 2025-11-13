import {
  MatFormFieldModule
} from "./chunk-ZCXQVUWC.js";
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
} from "./chunk-5LDN6ULK.js";
import "./chunk-D34CMO4F.js";
import "./chunk-JUMUXRE5.js";
import "./chunk-AQ46JP2X.js";
import "./chunk-7T77PNLY.js";
import "./chunk-XON5INCN.js";
import "./chunk-JW7H5MKH.js";
import "./chunk-E26MDDCW.js";
import "./chunk-QE5EJI7L.js";
import "./chunk-NDI52S4L.js";
import "./chunk-CSLJFACF.js";
import "./chunk-4FGVBOGF.js";
import "./chunk-EKRE3ZAZ.js";
import "./chunk-KWTLV7UG.js";
import "./chunk-RNK63XMY.js";
import "./chunk-I5LQNJUH.js";
import "./chunk-NWV2QZ42.js";
import "./chunk-HOPD3IFP.js";
import "./chunk-RW4FEUZK.js";
import "./chunk-6XAK26ZK.js";
import "./chunk-KIWW2XLQ.js";
import "./chunk-EMD5QRNG.js";
import "./chunk-HBLDS5AB.js";
import "./chunk-ZPX2LCRE.js";
import "./chunk-TXDUYLVM.js";

// ../../../../node_modules/@angular/material/fesm2022/form-field.mjs
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
