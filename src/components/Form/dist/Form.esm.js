import { SmallText, NLabel } from '@IntusFacultas/typography';
import { VueInput } from '@IntusFacultas/input';
import styled from 'vue-styled-components';
import SelectMe from '@IntusFacultas/select-me';
import { NButton } from '@IntusFacultas/button';
import { Placeholder } from '@IntusFacultas/placeholder';

function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    _typeof = function (obj) {
      return typeof obj;
    };
  } else {
    _typeof = function (obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

function _taggedTemplateLiteral(strings, raw) {
  if (!raw) {
    raw = strings.slice(0);
  }

  return Object.freeze(Object.defineProperties(strings, {
    raw: {
      value: Object.freeze(raw)
    }
  }));
}

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];

  return arr2;
}

function _createForOfIteratorHelper(o) {
  if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) {
    if (Array.isArray(o) || (o = _unsupportedIterableToArray(o))) {
      var i = 0;

      var F = function () {};

      return {
        s: F,
        n: function () {
          if (i >= o.length) return {
            done: true
          };
          return {
            done: false,
            value: o[i++]
          };
        },
        e: function (e) {
          throw e;
        },
        f: F
      };
    }

    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }

  var it,
      normalCompletion = true,
      didErr = false,
      err;
  return {
    s: function () {
      it = o[Symbol.iterator]();
    },
    n: function () {
      var step = it.next();
      normalCompletion = step.done;
      return step;
    },
    e: function (e) {
      didErr = true;
      err = e;
    },
    f: function () {
      try {
        if (!normalCompletion && it.return != null) it.return();
      } finally {
        if (didErr) throw err;
      }
    }
  };
}

//
var FormInput = {
  components: {
    SmallText: SmallText,
    VueInput: VueInput
  },
  tag: "what",
  data: function data() {
    return {
      internalValue: ""
    };
  },
  watch: {
    value: function value(newVal) {
      if (newVal != this.internalValue) {
        this.internalValue = newVal;
      }
    }
  },
  mounted: function mounted() {
    this.internalValue = this.value;
  },
  props: {
    name: String,
    inputType: String,
    label: String,
    required: Boolean,
    value: [String, Number],
    placeholder: String,
    disabled: {
      type: Boolean,
      default: false
    },
    errors: {
      type: Array,
      default: function _default() {
        return [];
      }
    }
  },
  methods: {
    computeFlavor: function computeFlavor(el) {
      if (el.indexOf("Text") != -1) {
        return "Danger";
      } else {
        if (this.errors.length > 0) {
          return "Danger";
        }

        return "LightBlue";
      }
    },
    onChange: function onChange($e) {
      this.internalValue = $e;
      this.$emit("change", $e);
    },
    onInput: function onInput($e) {
      this.internalValue = $e;
      this.$emit("input", $e);
    }
  }
};

function normalizeComponent(template, style, script, scopeId, isFunctionalTemplate, moduleIdentifier
/* server only */
, shadowMode, createInjector, createInjectorSSR, createInjectorShadow) {
  if (typeof shadowMode !== 'boolean') {
    createInjectorSSR = createInjector;
    createInjector = shadowMode;
    shadowMode = false;
  } // Vue.extend constructor export interop.


  var options = typeof script === 'function' ? script.options : script; // render functions

  if (template && template.render) {
    options.render = template.render;
    options.staticRenderFns = template.staticRenderFns;
    options._compiled = true; // functional template

    if (isFunctionalTemplate) {
      options.functional = true;
    }
  } // scopedId


  if (scopeId) {
    options._scopeId = scopeId;
  }

  var hook;

  if (moduleIdentifier) {
    // server build
    hook = function hook(context) {
      // 2.3 injection
      context = context || // cached call
      this.$vnode && this.$vnode.ssrContext || // stateful
      this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext; // functional
      // 2.2 with runInNewContext: true

      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__;
      } // inject component styles


      if (style) {
        style.call(this, createInjectorSSR(context));
      } // register component module identifier for async chunk inference


      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier);
      }
    }; // used by ssr in case component is cached and beforeCreate
    // never gets called


    options._ssrRegister = hook;
  } else if (style) {
    hook = shadowMode ? function (context) {
      style.call(this, createInjectorShadow(context, this.$root.$options.shadowRoot));
    } : function (context) {
      style.call(this, createInjector(context));
    };
  }

  if (hook) {
    if (options.functional) {
      // register for functional component in vue file
      var originalRender = options.render;

      options.render = function renderWithStyleInjection(h, context) {
        hook.call(context);
        return originalRender(h, context);
      };
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate;
      options.beforeCreate = existing ? [].concat(existing, hook) : [hook];
    }
  }

  return script;
}

var isOldIE = typeof navigator !== 'undefined' && /msie [6-9]\\b/.test(navigator.userAgent.toLowerCase());

function createInjector(context) {
  return function (id, style) {
    return addStyle(id, style);
  };
}

var HEAD;
var styles = {};

function addStyle(id, css) {
  var group = isOldIE ? css.media || 'default' : id;
  var style = styles[group] || (styles[group] = {
    ids: new Set(),
    styles: []
  });

  if (!style.ids.has(id)) {
    style.ids.add(id);
    var code = css.source;

    if (css.map) {
      // https://developer.chrome.com/devtools/docs/javascript-debugging
      // this makes source maps inside style tags work properly in Chrome
      code += '\n/*# sourceURL=' + css.map.sources[0] + ' */'; // http://stackoverflow.com/a/26603875

      code += '\n/*# sourceMappingURL=data:application/json;base64,' + btoa(unescape(encodeURIComponent(JSON.stringify(css.map)))) + ' */';
    }

    if (!style.element) {
      style.element = document.createElement('style');
      style.element.type = 'text/css';
      if (css.media) style.element.setAttribute('media', css.media);

      if (HEAD === undefined) {
        HEAD = document.head || document.getElementsByTagName('head')[0];
      }

      HEAD.appendChild(style.element);
    }

    if ('styleSheet' in style.element) {
      style.styles.push(code);
      style.element.styleSheet.cssText = style.styles.filter(Boolean).join('\n');
    } else {
      var index = style.ids.size - 1;
      var textNode = document.createTextNode(code);
      var nodes = style.element.childNodes;
      if (nodes[index]) style.element.removeChild(nodes[index]);
      if (nodes.length) style.element.insertBefore(textNode, nodes[index]);else style.element.appendChild(textNode);
    }
  }
}

/* script */
const __vue_script__ = FormInput;

/* template */
var __vue_render__ = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c(
    "div",
    [
      _c("vue-input", {
        attrs: {
          flavor: _vm.computeFlavor("field"),
          name: _vm.name,
          "input-type": _vm.inputType,
          required: _vm.required,
          label: _vm.label,
          disabled: _vm.disabled,
          placeholder: _vm.placeholder
        },
        on: {
          change: _vm.onChange,
          input: _vm.onInput,
          keyup: function($event) {
            return _vm.$emit("keyup", $event)
          }
        },
        model: {
          value: _vm.internalValue,
          callback: function($$v) {
            _vm.internalValue = $$v;
          },
          expression: "internalValue"
        }
      }),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "form-error-message" },
        _vm._l(_vm.errors, function(error) {
          return _c(
            "small-text",
            {
              key: "field-error-" + error,
              attrs: { flavor: _vm.computeFlavor("fieldText") }
            },
            [_vm._v(_vm._s(error))]
          )
        }),
        1
      )
    ],
    1
  )
};
var __vue_staticRenderFns__ = [];
__vue_render__._withStripped = true;

  /* style */
  const __vue_inject_styles__ = function (inject) {
    if (!inject) return
    inject("data-v-915bb754_0", { source: "\n.form-error-message {\r\n  min-height: 17px;\r\n  min-width: 1px;\r\n  display: flex;\r\n  flex-direction: column;\n}\r\n", map: {"version":3,"sources":["C:\\Users\\pedro\\Documents\\Personal Projects\\GitHub\\storybook\\src\\components\\Form\\src\\FormInput.vue"],"names":[],"mappings":";AAyFA;EACA,gBAAA;EACA,cAAA;EACA,aAAA;EACA,sBAAA;AACA","file":"FormInput.vue","sourcesContent":["<template>\r\n  <div>\r\n    <vue-input\r\n      :flavor=\"computeFlavor('field')\"\r\n      :name=\"name\"\r\n      :input-type=\"inputType\"\r\n      :required=\"required\"\r\n      :label=\"label\"\r\n      :disabled=\"disabled\"\r\n      v-model=\"internalValue\"\r\n      :placeholder=\"placeholder\"\r\n      @change=\"onChange\"\r\n      @input=\"onInput\"\r\n      @keyup=\"$emit('keyup', $event)\"\r\n    ></vue-input>\r\n    <div class=\"form-error-message\">\r\n      <small-text\r\n        :flavor=\"computeFlavor('fieldText')\"\r\n        v-for=\"error in errors\"\r\n        :key=\"`field-error-${error}`\"\r\n        >{{ error }}</small-text\r\n      >\r\n    </div>\r\n  </div>\r\n</template>\r\n<script>\r\nimport { SmallText } from \"@IntusFacultas/typography\";\r\nimport { VueInput } from \"@IntusFacultas/input\";\r\nexport const FormInput = {\r\n  components: { SmallText, VueInput },\r\n  tag: \"what\",\r\n  data() {\r\n    return {\r\n      internalValue: \"\",\r\n    };\r\n  },\r\n  watch: {\r\n    value(newVal) {\r\n      if (newVal != this.internalValue) {\r\n        this.internalValue = newVal;\r\n      }\r\n    },\r\n  },\r\n  mounted() {\r\n    this.internalValue = this.value;\r\n  },\r\n  props: {\r\n    name: String,\r\n    inputType: String,\r\n    label: String,\r\n    required: Boolean,\r\n    value: [String, Number],\r\n    placeholder: String,\r\n    disabled: {\r\n      type: Boolean,\r\n      default: false,\r\n    },\r\n    errors: {\r\n      type: Array,\r\n      default() {\r\n        return [];\r\n      },\r\n    },\r\n  },\r\n  methods: {\r\n    computeFlavor(el) {\r\n      if (el.indexOf(\"Text\") != -1) {\r\n        return \"Danger\";\r\n      } else {\r\n        if (this.errors.length > 0) {\r\n          return \"Danger\";\r\n        }\r\n        return \"LightBlue\";\r\n      }\r\n    },\r\n    onChange($e) {\r\n      this.internalValue = $e;\r\n      this.$emit(\"change\", $e);\r\n    },\r\n    onInput($e) {\r\n      this.internalValue = $e;\r\n      this.$emit(\"input\", $e);\r\n    },\r\n  },\r\n};\r\nexport default FormInput;\r\n</script>\r\n\r\n<style>\r\n.form-error-message {\r\n  min-height: 17px;\r\n  min-width: 1px;\r\n  display: flex;\r\n  flex-direction: column;\r\n}\r\n</style>\r\n"]}, media: undefined });

  };
  /* scoped */
  const __vue_scope_id__ = undefined;
  /* module identifier */
  const __vue_module_identifier__ = undefined;
  /* functional template */
  const __vue_is_functional_template__ = false;
  /* style inject SSR */
  
  /* style inject shadow dom */
  

  
  const __vue_component__ = normalizeComponent(
    { render: __vue_render__, staticRenderFns: __vue_staticRenderFns__ },
    __vue_inject_styles__,
    __vue_script__,
    __vue_scope_id__,
    __vue_is_functional_template__,
    __vue_module_identifier__,
    false,
    createInjector,
    undefined,
    undefined
  );

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  position: relative;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}
var RawFormInputContainer = styled.div(_templateObject());
var RawFormInput = {
  components: {
    SmallText: SmallText,
    RawFormInputContainer: RawFormInputContainer
  },
  data: function data() {
    return {
      internalValue: ""
    };
  },
  watch: {
    value: function value(newVal) {
      if (newVal != this.internalValue) {
        this.internalValue = newVal;
      }
    }
  },
  mounted: function mounted() {
    this.internalValue = this.value;
  },
  props: {
    errors: {
      type: Array,
      default: function _default() {
        return [];
      }
    }
  },
  methods: {
    computeFlavor: function computeFlavor() {
      if (this.errors.length > 0) {
        return "Danger";
      }

      return "LightBlue";
    }
  }
};

/* script */
const __vue_script__$1 = RawFormInput;

/* template */
var __vue_render__$1 = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c(
    "raw-form-input-container",
    [
      _vm._t("default"),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "form-error-message" },
        _vm._l(_vm.errors, function(error, index) {
          return _c(
            "small-text",
            {
              key: "field-error-" + index,
              attrs: { flavor: _vm.computeFlavor("fieldText") }
            },
            [_vm._v(_vm._s(error))]
          )
        }),
        1
      )
    ],
    2
  )
};
var __vue_staticRenderFns__$1 = [];
__vue_render__$1._withStripped = true;

  /* style */
  const __vue_inject_styles__$1 = function (inject) {
    if (!inject) return
    inject("data-v-ec4288ca_0", { source: "\n.form-error-message {\r\n  min-height: 17px;\r\n  min-width: 1px;\n}\r\n", map: {"version":3,"sources":["C:\\Users\\pedro\\Documents\\Personal Projects\\GitHub\\storybook\\src\\components\\Form\\src\\RawFormInput.vue"],"names":[],"mappings":";AAyDA;EACA,gBAAA;EACA,cAAA;AACA","file":"RawFormInput.vue","sourcesContent":["<template>\r\n  <raw-form-input-container>\r\n    <slot></slot>\r\n    <div class=\"form-error-message\">\r\n      <small-text\r\n        :flavor=\"computeFlavor('fieldText')\"\r\n        v-for=\"(error, index) in errors\"\r\n        :key=\"`field-error-${index}`\"\r\n        >{{ error }}</small-text\r\n      >\r\n    </div>\r\n  </raw-form-input-container>\r\n</template>\r\n<script>\r\nimport styled from \"vue-styled-components\";\r\nimport { SmallText } from \"@IntusFacultas/typography\";\r\nconst RawFormInputContainer = styled.div`\r\n  position: relative;\r\n`;\r\nexport const RawFormInput = {\r\n  components: { SmallText, RawFormInputContainer },\r\n  data() {\r\n    return {\r\n      internalValue: \"\",\r\n    };\r\n  },\r\n  watch: {\r\n    value(newVal) {\r\n      if (newVal != this.internalValue) {\r\n        this.internalValue = newVal;\r\n      }\r\n    },\r\n  },\r\n  mounted() {\r\n    this.internalValue = this.value;\r\n  },\r\n  props: {\r\n    errors: {\r\n      type: Array,\r\n      default() {\r\n        return [];\r\n      },\r\n    },\r\n  },\r\n  methods: {\r\n    computeFlavor() {\r\n      if (this.errors.length > 0) {\r\n        return \"Danger\";\r\n      }\r\n      return \"LightBlue\";\r\n    },\r\n  },\r\n};\r\nexport default RawFormInput;\r\n</script>\r\n\r\n<style>\r\n.form-error-message {\r\n  min-height: 17px;\r\n  min-width: 1px;\r\n}\r\n</style>\r\n"]}, media: undefined });

  };
  /* scoped */
  const __vue_scope_id__$1 = undefined;
  /* module identifier */
  const __vue_module_identifier__$1 = undefined;
  /* functional template */
  const __vue_is_functional_template__$1 = false;
  /* style inject SSR */
  
  /* style inject shadow dom */
  

  
  const __vue_component__$1 = normalizeComponent(
    { render: __vue_render__$1, staticRenderFns: __vue_staticRenderFns__$1 },
    __vue_inject_styles__$1,
    __vue_script__$1,
    __vue_scope_id__$1,
    __vue_is_functional_template__$1,
    __vue_module_identifier__$1,
    false,
    createInjector,
    undefined,
    undefined
  );

var VueForm = {
  components: {
    FormInput: __vue_component__,
    NButton: NButton,
    SelectMe: SelectMe,
    RawFormInput: __vue_component__$1,
    NLabel: NLabel,
    Placeholder: Placeholder
  },
  data: function data() {
    return {
      internalFields: [],
      internalErrors: {},
      load: false,
      errorsExist: false,
      overridenFieldErrors: []
    };
  },
  props: {
    showBottom: {
      type: Boolean,
      default: true
    },
    submitting: Boolean,
    disableSubmission: Boolean,
    disableClearing: Boolean,
    allowSubmissionOnEnter: {
      type: Boolean,
      default: true
    },
    fields: {
      type: Array,
      default: function _default() {
        return [];
      }
    },
    errors: {
      type: Object,
      default: function _default() {
        return {};
      }
    }
  },
  watch: {
    fields: function fields() {
      this.internalFields = this.fields.slice();
    },
    errors: {
      handler: function handler() {
        // this.internalErrors = Object.assign({}, newVal);
        for (var _i = 0, _Object$keys = Object.keys(this.errors); _i < _Object$keys.length; _i++) {
          var field = _Object$keys[_i];

          if (this.overridenFieldErrors.indexOf(field) == -1) {
            this.$set(this.internalErrors, field, this.errors[field].slice());
          }
        }

        this.checkErrors();
        this.$forceUpdate();
      },
      deep: true
    }
  },
  mounted: function mounted() {
    var _this = this;

    var self = this;
    setTimeout(function () {
      self.load = true;
    }, 500);
    this.fields.forEach(function (field) {
      _this.$watch(function () {
        return field;
      }, _this.handleChange, {
        deep: true
      });
    });
    this.internalFields = this.fields.slice();

    for (var _i2 = 0, _Object$keys2 = Object.keys(this.errors); _i2 < _Object$keys2.length; _i2++) {
      var field = _Object$keys2[_i2];
      this.internalErrors[field] = this.errors[field].slice();
    }
  },
  methods: {
    checkErrors: function checkErrors() {
      for (var _i3 = 0, _Object$keys3 = Object.keys(this.internalErrors); _i3 < _Object$keys3.length; _i3++) {
        var field = _Object$keys3[_i3];

        if (this.internalErrors[field].length != 0) {
          this.errorsExist = true;
          return true;
        }
      }

      this.errorsExist = false;
      return false;
    },
    submitForm: function submitForm(index) {
      if (index == this.internalFields.length - 1 && this.allowSubmissionOnEnter) {
        this.$emit("submit");
      }
    },
    clearAll: function clearAll() {
      var _iterator = _createForOfIteratorHelper(this.internalFields),
          _step;

      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var field = _step.value;
          field.value = "";
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }

      this.$emit("clear");
      this.$emit("fields", this.internalFields.slice());
    },
    objectDeepEquals: function objectDeepEquals(ob1, ob2) {
      var ob1Keys = Object.keys(ob1);
      var ob2Keys = Object.keys(ob2);

      if (ob1Keys.length !== ob2Keys.length) {
        return false;
      }

      for (var _i4 = 0, _ob1Keys = ob1Keys; _i4 < _ob1Keys.length; _i4++) {
        var key = _ob1Keys[_i4];

        if (ob2Keys.indexOf(key) == -1) {
          return false;
        }

        if (_typeof(ob1[key]) != _typeof(ob2[key])) {
          return false;
        }

        if (_typeof(ob1[key]) == "object") {
          if (!this.objectDeepEquals(ob1[key], ob2[key])) {
            return false;
          }
        } else if (Array.isArray(ob1[key])) {
          if (!this.deepEquals(ob1[key], ob2[key])) {
            return false;
          }
        } else {
          if (ob1[key] != ob2[key]) {
            return false;
          }
        }
      }

      return true;
    },
    deepEquals: function deepEquals(ar1, ar2) {
      var still_matches = true;
      var self = this;

      if (!Array.isArray(ar1) || !Array.isArray(ar2)) {
        return false;
      }

      if (ar1.length !== ar2.length) {
        return false;
      }

      ar1.forEach(function (val1, index) {
        var val2 = ar2[index];

        if (val1 !== val2 && !self.objectDeepEquals(val1, val2)) {
          still_matches = false;
        }
      });
      return still_matches;
    },
    validateField: function validateField(field) {
      if (typeof field.validation == "function") {
        var value = field.validation(field.value, this.internalFields);

        if (value) {
          if (!Array.isArray(this.internalErrors[field.name])) {
            this.$set(this.internalErrors, field.name, [value]);
          }

          if (this.internalErrors[field.name].indexOf(value) == -1) {
            this.internalErrors[field.name].push(value);
          }

          this.$forceUpdate();
          this.$emit("errors", this.internalErrors);
          this.checkErrors();
          return false;
        }
      }

      this.internalErrors[field.name] = [];

      if (this.overridenFieldErrors.indexOf(field.name) == -1) {
        this.overridenFieldErrors.push(field.name);
      }

      this.$emit("fields", this.internalFields.slice());
      this.$emit("errors", this.internalErrors);
      this.checkErrors();
      return true;
    },
    handleChange: function handleChange() {
      this.internalFields = this.fields.slice();
    },
    submit: function submit($e) {
      $e.preventDefault();
      this.overridenFieldErrors = [];
      document.activeElement.blur();
      this.$emit("submit");
    }
  }
};

/* script */
const __vue_script__$2 = VueForm;

/* template */
var __vue_render__$2 = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c(
    "form",
    [
      _vm._l(_vm.internalFields, function(field, index) {
        return _c(
          "div",
          { key: "field" + index },
          [
            field.type != "select"
              ? _c("form-input", {
                  attrs: {
                    label: field.label,
                    placeholder: field.placeholder,
                    name: field.name,
                    required: field.required,
                    disabled: field.disabled,
                    errors: _vm.internalErrors[field.name],
                    "input-type": field.type
                  },
                  on: {
                    input: function($event) {
                      return _vm.validateField(field)
                    },
                    keyup: function($event) {
                      if (
                        !$event.type.indexOf("key") &&
                        _vm._k($event.keyCode, "enter", 13, $event.key, "Enter")
                      ) {
                        return null
                      }
                      return _vm.submitForm(index)
                    }
                  },
                  model: {
                    value: field.value,
                    callback: function($$v) {
                      _vm.$set(field, "value", $$v);
                    },
                    expression: "field.value"
                  }
                })
              : field.type == "select"
              ? _c(
                  "raw-form-input",
                  { attrs: { errors: _vm.internalErrors[field.name] } },
                  [
                    _c("n-label", { attrs: { for: field.name } }, [
                      _vm._v(_vm._s(field.label))
                    ]),
                    _vm._v(" "),
                    _c("select-me", {
                      class: { "opacity-transparent": !_vm.load },
                      attrs: {
                        name: field.name,
                        "can-be-empty": !field.required,
                        options: field.options
                      },
                      on: {
                        input: function($event) {
                          return _vm.validateField(field)
                        }
                      },
                      model: {
                        value: field.value,
                        callback: function($$v) {
                          _vm.$set(field, "value", $$v);
                        },
                        expression: "field.value"
                      }
                    }),
                    _vm._v(" "),
                    !_vm.load
                      ? _c("placeholder", {
                          staticClass: "field-placeholder",
                          attrs: { height: "35px" }
                        })
                      : _vm._e()
                  ],
                  1
                )
              : _vm._e()
          ],
          1
        )
      }),
      _vm._v(" "),
      _vm.showBottom
        ? _c(
            "div",
            { staticClass: "form-bottom-content" },
            [
              _vm._t("default"),
              _vm._v(" "),
              _c(
                "div",
                [
                  !_vm.disableClearing
                    ? _c(
                        "n-button",
                        {
                          staticClass: "form-button-spacing",
                          attrs: {
                            type: "button",
                            flavor: "Warning",
                            disabled: _vm.submitting
                          },
                          on: { click: _vm.clearAll }
                        },
                        [_vm._v("Clear")]
                      )
                    : _vm._e(),
                  _vm._v(" "),
                  _c(
                    "n-button",
                    {
                      attrs: {
                        type: "button",
                        flavor: "Primary",
                        disabled:
                          _vm.submitting ||
                          _vm.errorsExist ||
                          _vm.disableSubmission
                      },
                      on: {
                        click: function($event) {
                          return _vm.submit($event)
                        }
                      }
                    },
                    [
                      _c("span", [_vm._v("Submit ")]),
                      _vm._v(" "),
                      _vm.submitting
                        ? _c(
                            "svg",
                            {
                              staticClass: "loading-spinner",
                              attrs: {
                                xmlns: "http://www.w3.org/2000/svg",
                                width: "14",
                                height: "14",
                                viewBox: "0 0 24 24",
                                fill: "white"
                              }
                            },
                            [
                              _c("path", {
                                attrs: {
                                  d:
                                    "M13.75 22c0 .966-.783 1.75-1.75 1.75s-1.75-.784-1.75-1.75.783-1.75 1.75-1.75 1.75.784 1.75 1.75zm-1.75-22c-1.104 0-2 .896-2 2s.896 2 2 2 2-.896 2-2-.896-2-2-2zm10 10.75c.689 0 1.249.561 1.249 1.25 0 .69-.56 1.25-1.249 1.25-.69 0-1.249-.559-1.249-1.25 0-.689.559-1.25 1.249-1.25zm-22 1.25c0 1.105.896 2 2 2s2-.895 2-2c0-1.104-.896-2-2-2s-2 .896-2 2zm19-8c.551 0 1 .449 1 1 0 .553-.449 1.002-1 1-.551 0-1-.447-1-.998 0-.553.449-1.002 1-1.002zm0 13.5c.828 0 1.5.672 1.5 1.5s-.672 1.501-1.502 1.5c-.826 0-1.498-.671-1.498-1.499 0-.829.672-1.501 1.5-1.501zm-14-14.5c1.104 0 2 .896 2 2s-.896 2-2.001 2c-1.103 0-1.999-.895-1.999-2s.896-2 2-2zm0 14c1.104 0 2 .896 2 2s-.896 2-2.001 2c-1.103 0-1.999-.895-1.999-2s.896-2 2-2z"
                                }
                              })
                            ]
                          )
                        : _vm._e()
                    ]
                  )
                ],
                1
              )
            ],
            2
          )
        : _vm._e()
    ],
    2
  )
};
var __vue_staticRenderFns__$2 = [];
__vue_render__$2._withStripped = true;

  /* style */
  const __vue_inject_styles__$2 = function (inject) {
    if (!inject) return
    inject("data-v-125a6426_0", { source: "\n.field-placeholder {\r\n  position: absolute;\r\n  left: 0px;\r\n  right: 0px;\r\n  top: 20px;\n}\n.form-bottom-content {\r\n  margin-top: 25px;\r\n  display: flex;\r\n  justify-content: space-between;\n}\n.form-error-message {\r\n  min-height: 17px;\r\n  min-width: 1px;\n}\n.opacity-transparent {\r\n  opacity: 0;\n}\n.form-button-spacing {\r\n  margin-right: 5px;\n}\n@keyframes FormLoadingSpinner {\nfrom {\r\n    -webkit-transform: rotate(0deg);\r\n    transform: rotate(0deg);\n}\nto {\r\n    -webkit-transform: rotate(359deg);\r\n    transform: rotate(359deg);\n}\n}\n.loading-spinner {\r\n  -webkit-animation: FormLoadingSpinner 0.5s infinite steps(8); /* Safari, Chrome and Opera > 12.1 */\r\n  -moz-animation: FormLoadingSpinner 0.5s infinite steps(8); /* Firefox < 16 */\r\n  -ms-animation: FormLoadingSpinner 0.5s infinite steps(8); /* Internet Explorer */\r\n  -o-animation: FormLoadingSpinner 0.5s infinite steps(8); /* Opera < 12.1 */\r\n  animation: FormLoadingSpinner 0.5s infinite steps(8);\n}\r\n", map: {"version":3,"sources":["C:\\Users\\pedro\\Documents\\Personal Projects\\GitHub\\storybook\\src\\components\\Form\\src\\Form.vue"],"names":[],"mappings":";AA0QA;EACA,kBAAA;EACA,SAAA;EACA,UAAA;EACA,SAAA;AACA;AACA;EACA,gBAAA;EACA,aAAA;EACA,8BAAA;AACA;AACA;EACA,gBAAA;EACA,cAAA;AACA;AACA;EACA,UAAA;AACA;AACA;EACA,iBAAA;AACA;AACA;AACA;IACA,+BAAA;IACA,uBAAA;AACA;AACA;IACA,iCAAA;IACA,yBAAA;AACA;AACA;AACA;EACA,4DAAA,EAAA,oCAAA;EACA,yDAAA,EAAA,iBAAA;EACA,wDAAA,EAAA,sBAAA;EACA,uDAAA,EAAA,iBAAA;EACA,oDAAA;AACA","file":"Form.vue","sourcesContent":["<template>\r\n  <form>\r\n    <div v-for=\"(field, index) in internalFields\" :key=\"`field${index}`\">\r\n      <form-input\r\n        v-if=\"field.type != 'select'\"\r\n        :label=\"field.label\"\r\n        :placeholder=\"field.placeholder\"\r\n        :name=\"field.name\"\r\n        :required=\"field.required\"\r\n        :disabled=\"field.disabled\"\r\n        v-model=\"field.value\"\r\n        :errors=\"internalErrors[field.name]\"\r\n        :input-type=\"field.type\"\r\n        @input=\"validateField(field)\"\r\n        @keyup.enter=\"submitForm(index)\"\r\n      ></form-input>\r\n      <raw-form-input\r\n        :errors=\"internalErrors[field.name]\"\r\n        v-else-if=\"field.type == 'select'\"\r\n      >\r\n        <n-label :for=\"field.name\">{{ field.label }}</n-label>\r\n        <select-me\r\n          :name=\"field.name\"\r\n          :can-be-empty=\"!field.required\"\r\n          :options=\"field.options\"\r\n          v-model=\"field.value\"\r\n          :class=\"{ 'opacity-transparent': !load }\"\r\n          @input=\"validateField(field)\"\r\n        ></select-me>\r\n        <placeholder\r\n          class=\"field-placeholder\"\r\n          height=\"35px\"\r\n          v-if=\"!load\"\r\n        ></placeholder>\r\n      </raw-form-input>\r\n    </div>\r\n    <div class=\"form-bottom-content\" v-if=\"showBottom\">\r\n      <slot></slot>\r\n      <div>\r\n        <n-button\r\n          type=\"button\"\r\n          flavor=\"Warning\"\r\n          @click=\"clearAll\"\r\n          :disabled=\"submitting\"\r\n          v-if=\"!disableClearing\"\r\n          class=\"form-button-spacing\"\r\n          >Clear</n-button\r\n        >\r\n        <n-button\r\n          type=\"button\"\r\n          flavor=\"Primary\"\r\n          @click=\"submit($event)\"\r\n          :disabled=\"submitting || errorsExist || disableSubmission\"\r\n        >\r\n          <span>Submit&nbsp;</span>\r\n          <svg\r\n            v-if=\"submitting\"\r\n            xmlns=\"http://www.w3.org/2000/svg\"\r\n            width=\"14\"\r\n            height=\"14\"\r\n            viewBox=\"0 0 24 24\"\r\n            fill=\"white\"\r\n            class=\"loading-spinner\"\r\n          >\r\n            <path\r\n              d=\"M13.75 22c0 .966-.783 1.75-1.75 1.75s-1.75-.784-1.75-1.75.783-1.75 1.75-1.75 1.75.784 1.75 1.75zm-1.75-22c-1.104 0-2 .896-2 2s.896 2 2 2 2-.896 2-2-.896-2-2-2zm10 10.75c.689 0 1.249.561 1.249 1.25 0 .69-.56 1.25-1.249 1.25-.69 0-1.249-.559-1.249-1.25 0-.689.559-1.25 1.249-1.25zm-22 1.25c0 1.105.896 2 2 2s2-.895 2-2c0-1.104-.896-2-2-2s-2 .896-2 2zm19-8c.551 0 1 .449 1 1 0 .553-.449 1.002-1 1-.551 0-1-.447-1-.998 0-.553.449-1.002 1-1.002zm0 13.5c.828 0 1.5.672 1.5 1.5s-.672 1.501-1.502 1.5c-.826 0-1.498-.671-1.498-1.499 0-.829.672-1.501 1.5-1.501zm-14-14.5c1.104 0 2 .896 2 2s-.896 2-2.001 2c-1.103 0-1.999-.895-1.999-2s.896-2 2-2zm0 14c1.104 0 2 .896 2 2s-.896 2-2.001 2c-1.103 0-1.999-.895-1.999-2s.896-2 2-2z\"\r\n            />\r\n          </svg>\r\n        </n-button>\r\n      </div>\r\n    </div>\r\n  </form>\r\n</template>\r\n<script>\r\nimport FormInput from \"./FormInput.vue\";\r\nimport RawFormInput from \"./RawFormInput.vue\";\r\nimport SelectMe from \"@IntusFacultas/select-me\";\r\nimport { NButton } from \"@IntusFacultas/button\";\r\nimport { NLabel } from \"@IntusFacultas/typography\";\r\nimport { Placeholder } from \"@IntusFacultas/placeholder\";\r\nexport const VueForm = {\r\n  components: {\r\n    FormInput,\r\n    NButton,\r\n    SelectMe,\r\n    RawFormInput,\r\n    NLabel,\r\n    Placeholder,\r\n  },\r\n  data() {\r\n    return {\r\n      internalFields: [],\r\n      internalErrors: {},\r\n      load: false,\r\n      errorsExist: false,\r\n      overridenFieldErrors: [],\r\n    };\r\n  },\r\n  props: {\r\n    showBottom: {\r\n      type: Boolean,\r\n      default: true,\r\n    },\r\n    submitting: Boolean,\r\n    disableSubmission: Boolean,\r\n    disableClearing: Boolean,\r\n    allowSubmissionOnEnter: {\r\n      type: Boolean,\r\n      default: true,\r\n    },\r\n    fields: {\r\n      type: Array,\r\n      default() {\r\n        return [];\r\n      },\r\n    },\r\n    errors: {\r\n      type: Object,\r\n      default() {\r\n        return {};\r\n      },\r\n    },\r\n  },\r\n  watch: {\r\n    fields() {\r\n      this.internalFields = this.fields.slice();\r\n    },\r\n    errors: {\r\n      handler() {\r\n        // this.internalErrors = Object.assign({}, newVal);\r\n        for (let field of Object.keys(this.errors)) {\r\n          if (this.overridenFieldErrors.indexOf(field) == -1) {\r\n            this.$set(this.internalErrors, field, this.errors[field].slice());\r\n          }\r\n        }\r\n        this.checkErrors();\r\n        this.$forceUpdate();\r\n      },\r\n      deep: true,\r\n    },\r\n  },\r\n  mounted() {\r\n    let self = this;\r\n    setTimeout(() => {\r\n      self.load = true;\r\n    }, 500);\r\n    this.fields.forEach((field) => {\r\n      this.$watch(() => field, this.handleChange, { deep: true });\r\n    });\r\n    this.internalFields = this.fields.slice();\r\n    for (let field of Object.keys(this.errors)) {\r\n      this.internalErrors[field] = this.errors[field].slice();\r\n    }\r\n  },\r\n  methods: {\r\n    checkErrors() {\r\n      for (let field of Object.keys(this.internalErrors)) {\r\n        if (this.internalErrors[field].length != 0) {\r\n          this.errorsExist = true;\r\n          return true;\r\n        }\r\n      }\r\n      this.errorsExist = false;\r\n      return false;\r\n    },\r\n    submitForm(index) {\r\n      if (\r\n        index == this.internalFields.length - 1 &&\r\n        this.allowSubmissionOnEnter\r\n      ) {\r\n        this.$emit(\"submit\");\r\n      }\r\n    },\r\n    clearAll() {\r\n      for (let field of this.internalFields) {\r\n        field.value = \"\";\r\n      }\r\n      this.$emit(\"clear\");\r\n      this.$emit(\"fields\", this.internalFields.slice());\r\n    },\r\n    objectDeepEquals(ob1, ob2) {\r\n      let ob1Keys = Object.keys(ob1);\r\n      let ob2Keys = Object.keys(ob2);\r\n      if (ob1Keys.length !== ob2Keys.length) {\r\n        return false;\r\n      }\r\n      for (let key of ob1Keys) {\r\n        if (ob2Keys.indexOf(key) == -1) {\r\n          return false;\r\n        }\r\n        if (typeof ob1[key] != typeof ob2[key]) {\r\n          return false;\r\n        }\r\n        if (typeof ob1[key] == \"object\") {\r\n          if (!this.objectDeepEquals(ob1[key], ob2[key])) {\r\n            return false;\r\n          }\r\n        } else if (Array.isArray(ob1[key])) {\r\n          if (!this.deepEquals(ob1[key], ob2[key])) {\r\n            return false;\r\n          }\r\n        } else {\r\n          if (ob1[key] != ob2[key]) {\r\n            return false;\r\n          }\r\n        }\r\n      }\r\n      return true;\r\n    },\r\n    deepEquals(ar1, ar2) {\r\n      let still_matches = true;\r\n      let self = this;\r\n      if (!Array.isArray(ar1) || !Array.isArray(ar2)) {\r\n        return false;\r\n      }\r\n      if (ar1.length !== ar2.length) {\r\n        return false;\r\n      }\r\n      ar1.forEach((val1, index) => {\r\n        let val2 = ar2[index];\r\n        if (val1 !== val2 && !self.objectDeepEquals(val1, val2)) {\r\n          still_matches = false;\r\n        }\r\n      });\r\n      return still_matches;\r\n    },\r\n    validateField(field) {\r\n      if (typeof field.validation == \"function\") {\r\n        let value = field.validation(field.value, this.internalFields);\r\n        if (value) {\r\n          if (!Array.isArray(this.internalErrors[field.name])) {\r\n            this.$set(this.internalErrors, field.name, [value]);\r\n          }\r\n          if (this.internalErrors[field.name].indexOf(value) == -1) {\r\n            this.internalErrors[field.name].push(value);\r\n          }\r\n          this.$forceUpdate();\r\n          this.$emit(\"errors\", this.internalErrors);\r\n          this.checkErrors();\r\n          return false;\r\n        }\r\n      }\r\n      this.internalErrors[field.name] = [];\r\n      if (this.overridenFieldErrors.indexOf(field.name) == -1) {\r\n        this.overridenFieldErrors.push(field.name);\r\n      }\r\n      this.$emit(\"fields\", this.internalFields.slice());\r\n      this.$emit(\"errors\", this.internalErrors);\r\n      this.checkErrors();\r\n      return true;\r\n    },\r\n    handleChange() {\r\n      this.internalFields = this.fields.slice();\r\n    },\r\n    submit($e) {\r\n      $e.preventDefault();\r\n      this.overridenFieldErrors = [];\r\n      document.activeElement.blur();\r\n      this.$emit(\"submit\");\r\n    },\r\n  },\r\n};\r\nexport default VueForm;\r\n</script>\r\n\r\n<style>\r\n.field-placeholder {\r\n  position: absolute;\r\n  left: 0px;\r\n  right: 0px;\r\n  top: 20px;\r\n}\r\n.form-bottom-content {\r\n  margin-top: 25px;\r\n  display: flex;\r\n  justify-content: space-between;\r\n}\r\n.form-error-message {\r\n  min-height: 17px;\r\n  min-width: 1px;\r\n}\r\n.opacity-transparent {\r\n  opacity: 0;\r\n}\r\n.form-button-spacing {\r\n  margin-right: 5px;\r\n}\r\n@keyframes FormLoadingSpinner {\r\n  from {\r\n    -webkit-transform: rotate(0deg);\r\n    transform: rotate(0deg);\r\n  }\r\n  to {\r\n    -webkit-transform: rotate(359deg);\r\n    transform: rotate(359deg);\r\n  }\r\n}\r\n.loading-spinner {\r\n  -webkit-animation: FormLoadingSpinner 0.5s infinite steps(8); /* Safari, Chrome and Opera > 12.1 */\r\n  -moz-animation: FormLoadingSpinner 0.5s infinite steps(8); /* Firefox < 16 */\r\n  -ms-animation: FormLoadingSpinner 0.5s infinite steps(8); /* Internet Explorer */\r\n  -o-animation: FormLoadingSpinner 0.5s infinite steps(8); /* Opera < 12.1 */\r\n  animation: FormLoadingSpinner 0.5s infinite steps(8);\r\n}\r\n</style>\r\n"]}, media: undefined });

  };
  /* scoped */
  const __vue_scope_id__$2 = undefined;
  /* module identifier */
  const __vue_module_identifier__$2 = undefined;
  /* functional template */
  const __vue_is_functional_template__$2 = false;
  /* style inject SSR */
  
  /* style inject shadow dom */
  

  
  const __vue_component__$2 = normalizeComponent(
    { render: __vue_render__$2, staticRenderFns: __vue_staticRenderFns__$2 },
    __vue_inject_styles__$2,
    __vue_script__$2,
    __vue_scope_id__$2,
    __vue_is_functional_template__$2,
    __vue_module_identifier__$2,
    false,
    createInjector,
    undefined,
    undefined
  );

// Import vue component

var install = function installVueStaticAlert(Vue) {
  if (install.installed) return;
  install.installed = true;
  Vue.component("VueForm", __vue_component__$2);
}; // Create module definition for Vue.use()


var plugin = {
  install: install
}; // To auto-install when vue is found
// eslint-disable-next-line no-redeclare

/* global window, global */

var GlobalVue = null;

if (typeof window !== "undefined") {
  GlobalVue = window.Vue;
} else if (typeof global !== "undefined") {
  GlobalVue = global.Vue;
}

if (GlobalVue) {
  GlobalVue.use(plugin);
} // Inject install function into component - allows component
// to be registered via Vue.use() as well as Vue.component()


__vue_component__$2.install = install; // Export component by default
// also be used as directives, etc. - eg. import { RollupDemoDirective } from 'rollup-demo';
// export const RollupDemoDirective = component;

export default __vue_component__$2;
export { __vue_component__$2 as VueForm };
//# sourceMappingURL=Form.esm.js.map
