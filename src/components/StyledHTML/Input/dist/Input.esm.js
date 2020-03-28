import { NLabel } from '@IntusFacultas/typography';
import styled from 'vue-styled-components';
import Theme from '@IntusFacultas/design-system';

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

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  width: 100%;\n  height: 35px;\n  font-size: 16px;\n  border-radius: 5px;\n  border-width: 1px;\n  border-style: solid;\n  padding: 2px 5px 2px 5px;\n  margin-top: 2px;\n  box-sizing: border-box;\n  font-family: \"Open Sans Regular\", -apple-system, BlinkMacSystemFont,\n    \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif, \"Apple Color Emoji\",\n    \"Segoe UI Emoji\", \"Segoe UI Symbol\";\n  transition: box-shadow 0.5s cubic-bezier(0, 0.99, 0.37, 1.01);\n  &:focus {\n    border-color: 1px solid\n      ", ";\n    outline: none;\n    box-shadow: 0px 0px 0px 3px\n      ", ";\n  }\n  &:read-only {\n    background-color: #e9e9e9;\n    color: #747474;\n  }\n  &:disabled {\n    cursor: not-allowed;\n    pointer-events: none;\n    color: #747474;\n    background-color: #e2e2e2;\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}
var props = {
  flavor: {
    type: String,
    default: "LightBlue"
  },
  defaultTheme: {
    type: Object,
    default: function _default() {
      return Theme;
    }
  }
};
var NInput = styled("input", props)(_templateObject(), function (props) {
  return props.theme && props.theme[props.flavor] ? props.theme[props.flavor].border.color : props.defaultTheme[props.flavor] && props.defaultTheme[props.flavor].border.color ? props.defaultTheme[props.flavor].border.color : "#04040480";
}, function (props) {
  return props.theme && props.theme[props.flavor] ? props.theme[props.flavor].border.color : props.defaultTheme[props.flavor] && props.defaultTheme[props.flavor].border.color ? props.defaultTheme[props.flavor].border.color : "#10d2ff80";
});
var VueInput = {
  name: "vue-input",
  components: {
    NInput: NInput,
    NLabel: NLabel
  },
  data: function data() {
    return {
      internalValue: ""
    };
  },
  props: {
    flavor: {
      type: String,
      default: "LightBlue"
    },
    autocomplete: {
      type: String,
      default: "off"
    },
    value: {
      type: String,
      default: ""
    },
    readonly: {
      type: Boolean,
      default: false
    },
    placeholder: {
      type: String,
      default: ""
    },
    pattern: {
      type: String,
      default: "*"
    },
    multiple: {
      type: Boolean,
      default: false
    },
    min: {
      type: String,
      default: ""
    },
    max: {
      type: String,
      default: ""
    },
    name: {
      type: String,
      required: true
    },
    inputType: {
      type: String,
      required: true
    },
    required: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    },
    labelFlavor: {
      type: String,
      default: ""
    },
    labelDark: {
      type: Boolean,
      default: false
    },
    label: {
      type: String,
      required: true
    },
    autofocus: {
      type: Boolean,
      default: false
    }
  },
  watch: {
    value: function value(newVal, oldVal) {
      this.internalValue = newVal;
    }
  },
  mounted: function mounted() {
    var self = this;

    if (typeof self.$parent !== "undefined") {
      if (!self.$parent.$refs.inputs) self.$parent.$refs.inputs = {};
      self.$parent.$refs.inputs[self.name] = self;
    }
  },
  methods: {
    oninput: function oninput($e) {
      var self = this;
      this.internalValue = $e;
      self.$emit("input", this.internalValue);
    },
    onChange: function onChange() {
      this.$emit("change", this.internalValue);
    },
    onFocus: function onFocus() {
      this.$emit("focus");
    }
  }
};

function normalizeComponent(template, style, script, scopeId, isFunctionalTemplate, moduleIdentifier /* server only */, shadowMode, createInjector, createInjectorSSR, createInjectorShadow) {
    if (typeof shadowMode !== 'boolean') {
        createInjectorSSR = createInjector;
        createInjector = shadowMode;
        shadowMode = false;
    }
    // Vue.extend constructor export interop.
    const options = typeof script === 'function' ? script.options : script;
    // render functions
    if (template && template.render) {
        options.render = template.render;
        options.staticRenderFns = template.staticRenderFns;
        options._compiled = true;
        // functional template
        if (isFunctionalTemplate) {
            options.functional = true;
        }
    }
    // scopedId
    if (scopeId) {
        options._scopeId = scopeId;
    }
    let hook;
    if (moduleIdentifier) {
        // server build
        hook = function (context) {
            // 2.3 injection
            context =
                context || // cached call
                    (this.$vnode && this.$vnode.ssrContext) || // stateful
                    (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext); // functional
            // 2.2 with runInNewContext: true
            if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
                context = __VUE_SSR_CONTEXT__;
            }
            // inject component styles
            if (style) {
                style.call(this, createInjectorSSR(context));
            }
            // register component module identifier for async chunk inference
            if (context && context._registeredComponents) {
                context._registeredComponents.add(moduleIdentifier);
            }
        };
        // used by ssr in case component is cached and beforeCreate
        // never gets called
        options._ssrRegister = hook;
    }
    else if (style) {
        hook = shadowMode
            ? function (context) {
                style.call(this, createInjectorShadow(context, this.$root.$options.shadowRoot));
            }
            : function (context) {
                style.call(this, createInjector(context));
            };
    }
    if (hook) {
        if (options.functional) {
            // register for functional component in vue file
            const originalRender = options.render;
            options.render = function renderWithStyleInjection(h, context) {
                hook.call(context);
                return originalRender(h, context);
            };
        }
        else {
            // inject component registration as beforeCreate hook
            const existing = options.beforeCreate;
            options.beforeCreate = existing ? [].concat(existing, hook) : [hook];
        }
    }
    return script;
}

const isOldIE = typeof navigator !== 'undefined' &&
    /msie [6-9]\\b/.test(navigator.userAgent.toLowerCase());
function createInjector(context) {
    return (id, style) => addStyle(id, style);
}
let HEAD;
const styles = {};
function addStyle(id, css) {
    const group = isOldIE ? css.media || 'default' : id;
    const style = styles[group] || (styles[group] = { ids: new Set(), styles: [] });
    if (!style.ids.has(id)) {
        style.ids.add(id);
        let code = css.source;
        if (css.map) {
            // https://developer.chrome.com/devtools/docs/javascript-debugging
            // this makes source maps inside style tags work properly in Chrome
            code += '\n/*# sourceURL=' + css.map.sources[0] + ' */';
            // http://stackoverflow.com/a/26603875
            code +=
                '\n/*# sourceMappingURL=data:application/json;base64,' +
                    btoa(unescape(encodeURIComponent(JSON.stringify(css.map)))) +
                    ' */';
        }
        if (!style.element) {
            style.element = document.createElement('style');
            style.element.type = 'text/css';
            if (css.media)
                style.element.setAttribute('media', css.media);
            if (HEAD === undefined) {
                HEAD = document.head || document.getElementsByTagName('head')[0];
            }
            HEAD.appendChild(style.element);
        }
        if ('styleSheet' in style.element) {
            style.styles.push(code);
            style.element.styleSheet.cssText = style.styles
                .filter(Boolean)
                .join('\n');
        }
        else {
            const index = style.ids.size - 1;
            const textNode = document.createTextNode(code);
            const nodes = style.element.childNodes;
            if (nodes[index])
                style.element.removeChild(nodes[index]);
            if (nodes.length)
                style.element.insertBefore(textNode, nodes[index]);
            else
                style.element.appendChild(textNode);
        }
    }
}

/* script */
const __vue_script__ = VueInput;

/* template */
var __vue_render__ = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c(
    "div",
    { staticClass: "input-container" },
    [
      _c(
        "n-label",
        {
          attrs: { dark: _vm.labelDark, flavor: _vm.labelFlavor, for: _vm.name }
        },
        [_vm._v(_vm._s(_vm.label))]
      ),
      _vm._v(" "),
      _c("n-input", {
        attrs: {
          flavor: _vm.flavor,
          id: _vm.name,
          readonly: _vm.readonly,
          placeholder: _vm.placeholder,
          pattern: _vm.pattern,
          multiple: _vm.multiple,
          min: _vm.min,
          max: _vm.max,
          name: _vm.name,
          type: _vm.inputType,
          required: _vm.required,
          disabled: _vm.disabled,
          autofocus: _vm.autofocus,
          autocomplete: _vm.autocomplete,
          value: _vm.internalValue
        },
        on: { input: _vm.oninput, change: _vm.onChange, focus: _vm.onFocus }
      })
    ],
    1
  )
};
var __vue_staticRenderFns__ = [];
__vue_render__._withStripped = true;

  /* style */
  const __vue_inject_styles__ = function (inject) {
    if (!inject) return
    inject("data-v-34745649_0", { source: "\n.input-container {\r\n  display: flex;\r\n  flex-direction: column;\r\n  width: 100%;\n}\r\n", map: {"version":3,"sources":["C:\\Users\\pedro\\Documents\\Personal Projects\\GitHub\\storybook\\storybook\\src\\components\\StyledHTML\\Input\\src\\Input.vue"],"names":[],"mappings":";AAoMA;EACA,aAAA;EACA,sBAAA;EACA,WAAA;AACA","file":"Input.vue","sourcesContent":["<template>\r\n  <div class=\"input-container\">\r\n    <n-label :dark=\"labelDark\" :flavor=\"labelFlavor\" :for=\"name\">{{\r\n      label\r\n    }}</n-label>\r\n    <n-input\r\n      :flavor=\"flavor\"\r\n      :id=\"name\"\r\n      :readonly=\"readonly\"\r\n      :placeholder=\"placeholder\"\r\n      :pattern=\"pattern\"\r\n      :multiple=\"multiple\"\r\n      :min=\"min\"\r\n      :max=\"max\"\r\n      :name=\"name\"\r\n      :type=\"inputType\"\r\n      :required=\"required\"\r\n      :disabled=\"disabled\"\r\n      :autofocus=\"autofocus\"\r\n      :autocomplete=\"autocomplete\"\r\n      :value=\"internalValue\"\r\n      @input=\"oninput\"\r\n      @change=\"onChange\"\r\n      @focus=\"onFocus\"\r\n    ></n-input>\r\n  </div>\r\n</template>\r\n\r\n<script>\r\nimport { NLabel } from \"@IntusFacultas/typography\";\r\nimport styled from \"vue-styled-components\";\r\nimport Theme from \"@IntusFacultas/design-system\";\r\nconst props = {\r\n  flavor: {\r\n    type: String,\r\n    default: \"LightBlue\"\r\n  },\r\n  defaultTheme: {\r\n    type: Object,\r\n    default: function() {\r\n      return Theme;\r\n    }\r\n  }\r\n};\r\nexport const NInput = styled(\"input\", props)`\r\n  width: 100%;\r\n  height: 35px;\r\n  font-size: 16px;\r\n  border-radius: 5px;\r\n  border-width: 1px;\r\n  border-style: solid;\r\n  padding: 2px 5px 2px 5px;\r\n  margin-top: 2px;\r\n  box-sizing: border-box;\r\n  font-family: \"Open Sans Regular\", -apple-system, BlinkMacSystemFont,\r\n    \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif, \"Apple Color Emoji\",\r\n    \"Segoe UI Emoji\", \"Segoe UI Symbol\";\r\n  transition: box-shadow 0.5s cubic-bezier(0, 0.99, 0.37, 1.01);\r\n  &:focus {\r\n    border-color: 1px solid\r\n      ${props =>\r\n        props.theme && props.theme[props.flavor]\r\n          ? props.theme[props.flavor].border.color\r\n          : props.defaultTheme[props.flavor] &&\r\n            props.defaultTheme[props.flavor].border.color\r\n          ? props.defaultTheme[props.flavor].border.color\r\n          : \"#04040480\"};\r\n    outline: none;\r\n    box-shadow: 0px 0px 0px 3px\r\n      ${props =>\r\n        props.theme && props.theme[props.flavor]\r\n          ? props.theme[props.flavor].border.color\r\n          : props.defaultTheme[props.flavor] &&\r\n            props.defaultTheme[props.flavor].border.color\r\n          ? props.defaultTheme[props.flavor].border.color\r\n          : \"#10d2ff80\"};\r\n  }\r\n  &:read-only {\r\n    background-color: #e9e9e9;\r\n    color: #747474;\r\n  }\r\n  &:disabled {\r\n    cursor: not-allowed;\r\n    pointer-events: none;\r\n    color: #747474;\r\n    background-color: #e2e2e2;\r\n  }\r\n`;\r\nexport const VueInput = {\r\n  name: \"vue-input\",\r\n  components: { NInput, NLabel },\r\n  data: function() {\r\n    return {\r\n      internalValue: \"\"\r\n    };\r\n  },\r\n  props: {\r\n    flavor: {\r\n      type: String,\r\n      default: \"LightBlue\"\r\n    },\r\n    autocomplete: {\r\n      type: String,\r\n      default: \"off\"\r\n    },\r\n    value: {\r\n      type: String,\r\n      default: \"\"\r\n    },\r\n    readonly: {\r\n      type: Boolean,\r\n      default: false\r\n    },\r\n    placeholder: {\r\n      type: String,\r\n      default: \"\"\r\n    },\r\n    pattern: {\r\n      type: String,\r\n      default: \"*\"\r\n    },\r\n    multiple: {\r\n      type: Boolean,\r\n      default: false\r\n    },\r\n    min: {\r\n      type: String,\r\n      default: \"\"\r\n    },\r\n    max: {\r\n      type: String,\r\n      default: \"\"\r\n    },\r\n    name: {\r\n      type: String,\r\n      required: true\r\n    },\r\n    inputType: {\r\n      type: String,\r\n      required: true\r\n    },\r\n    required: {\r\n      type: Boolean,\r\n      default: false\r\n    },\r\n    disabled: {\r\n      type: Boolean,\r\n      default: false\r\n    },\r\n    labelFlavor: {\r\n      type: String,\r\n      default: \"\"\r\n    },\r\n    labelDark: {\r\n      type: Boolean,\r\n      default: false\r\n    },\r\n    label: {\r\n      type: String,\r\n      required: true\r\n    },\r\n    autofocus: {\r\n      type: Boolean,\r\n      default: false\r\n    }\r\n  },\r\n  watch: {\r\n    value(newVal, oldVal) {\r\n      this.internalValue = newVal;\r\n    }\r\n  },\r\n  mounted() {\r\n    var self = this;\r\n    if (typeof self.$parent !== \"undefined\") {\r\n      if (!self.$parent.$refs.inputs) self.$parent.$refs.inputs = {};\r\n      self.$parent.$refs.inputs[self.name] = self;\r\n    }\r\n  },\r\n  methods: {\r\n    oninput($e) {\r\n      var self = this;\r\n      this.internalValue = $e;\r\n      self.$emit(\"input\", this.internalValue);\r\n    },\r\n    onChange() {\r\n      this.$emit(\"change\", this.internalValue);\r\n    },\r\n    onFocus() {\r\n      this.$emit(\"focus\");\r\n    }\r\n  }\r\n};\r\nexport default VueInput;\r\n</script>\r\n\r\n<style>\r\n.input-container {\r\n  display: flex;\r\n  flex-direction: column;\r\n  width: 100%;\r\n}\r\n</style>\r\n"]}, media: undefined });

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

var components = [{
  label: "VueInput",
  component: VueInput
}, {
  label: "NInput",
  component: NInput
}];
var GlobalVue = null;

var _loop = function _loop() {
  var component_obj = _components[_i];

  // install function executed by Vue.use()
  var install = function installComponent(Vue) {
    if (install.installed) return;
    install.installed = true;
    Vue.component(component_obj.label, component_obj.component);
  }; // Create module definition for Vue.use()


  var plugin = {
    install: install
  }; // To auto-install when vue is found
  // eslint-disable-next-line no-redeclare

  /* global window, global */

  if (typeof window !== "undefined") {
    GlobalVue = window.Vue;
  } else if (typeof global !== "undefined") {
    GlobalVue = global.Vue;
  }

  if (GlobalVue) {
    GlobalVue.use(plugin);
  } // Inject install function into component - allows component
  // to be registered via Vue.use() as well as Vue.component()


  component_obj.component.install = install;
};

for (var _i = 0, _components = components; _i < _components.length; _i++) {
  _loop();
} // Export component by default
// also be used as directives, etc. - eg. import { RollupDemoDirective } from 'rollup-demo';
// export const RollupDemoDirective = component;

export { NInput, VueInput };
//# sourceMappingURL=Input.esm.js.map
