import { NLabel } from '@IntusFacultas/typography';
import styled from 'vue-styled-components';

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

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n  cursor: pointer;\n  margin-right: 4px;\n  outline: none;\n  &:focus {\n    & * {\n      stroke: #41bee8;\n    }\n  }\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n  align-content: center;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  display: inline;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}
var props = {
  size: {
    type: Number,
    default: 14
  },
  active: {
    type: Boolean,
    default: false
  }
};
var RadioContainer = styled.div(_templateObject());
var RadioAligner = styled.div(_templateObject2());
var SymbolHolder = styled("span", props)(_templateObject3());
var Radio = {
  components: {
    NLabel: NLabel,
    SymbolHolder: SymbolHolder,
    RadioContainer: RadioContainer,
    RadioAligner: RadioAligner
  },
  props: {
    label: {
      type: String,
      required: true
    },
    value: {
      required: true
    },
    inputValue: {
      required: true
    },
    flavor: {
      type: String,
      default: ""
    },
    size: {
      type: Number,
      default: 14
    },
    dark: {
      type: Boolean,
      default: false
    },
    bold: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    emitValue: function emitValue() {
      this.$emit("input", this.inputValue);
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
const __vue_script__ = Radio;

/* template */
var __vue_render__ = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c(
    "radio-container",
    [
      _c(
        "symbol-holder",
        {
          staticClass: "radio-button-container",
          attrs: { tabindex: "0", active: false, size: _vm.size + 4 },
          on: {
            click: _vm.emitValue,
            keyup: [
              function($event) {
                if (
                  !$event.type.indexOf("key") &&
                  _vm._k($event.keyCode, "enter", 13, $event.key, "Enter")
                ) {
                  return null
                }
                return _vm.emitValue($event)
              },
              function($event) {
                if (
                  !$event.type.indexOf("key") &&
                  _vm._k($event.keyCode, "space", 32, $event.key, [
                    " ",
                    "Spacebar"
                  ])
                ) {
                  return null
                }
                return _vm.emitValue($event)
              }
            ]
          }
        },
        [
          _c(
            "svg",
            {
              staticClass: "radio-button",
              attrs: {
                fill: "6c757d",
                preserveAspectRatio: "xMidYMid meet",
                height: _vm.size,
                width: _vm.size,
                viewBox: "0 0 30 30"
              }
            },
            [
              _c("circle", {
                staticClass: "radio-button",
                attrs: {
                  cx: "15",
                  cy: "15",
                  r: "13",
                  fill: "white",
                  stroke: "#6c757d",
                  "stroke-width": "2"
                }
              }),
              _vm._v(" "),
              _vm.value == _vm.inputValue
                ? _c("circle", {
                    staticClass: "radio-button-inverse",
                    attrs: { cx: "15", cy: "15", r: "6", fill: "#6c757d" }
                  })
                : _vm._e()
            ]
          )
        ]
      ),
      _vm._v(" "),
      _c(
        "n-label",
        {
          attrs: {
            bold: _vm.bold,
            flavor: _vm.flavor,
            size: _vm.size,
            dark: _vm.dark
          },
          on: { click: _vm.emitValue }
        },
        [_vm._v(_vm._s(_vm.label))]
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
    inject("data-v-5904b58b_0", { source: "\n.radio-button-container:hover .radio-button {\r\n  stroke: #41bee8;\n}\n.radio-button-container:hover .radio-button-inverse {\r\n  fill: #41bee8;\n}\n.radio-button,\r\n.radio-button-inverse {\r\n  transition: 0.1s all ease;\n}\n.radio-button:hover {\r\n  stroke: #41bee8;\n}\n.radio-button-inverse:hover {\r\n  fill: #41bee8;\n}\r\n", map: {"version":3,"sources":["C:\\Users\\pedro\\Documents\\Personal Projects\\GitHub\\storybook\\storybook\\src\\components\\StyledHTML\\Radio\\src\\Radio.vue"],"names":[],"mappings":";AAuHA;EACA,eAAA;AACA;AACA;EACA,aAAA;AACA;AACA;;EAEA,yBAAA;AACA;AACA;EACA,eAAA;AACA;AACA;EACA,aAAA;AACA","file":"Radio.vue","sourcesContent":["<template>\r\n  <radio-container>\r\n    <symbol-holder\r\n      tabindex=\"0\"\r\n      :active=\"false\"\r\n      :size=\"size + 4\"\r\n      @click=\"emitValue\"\r\n      @keyup.enter=\"emitValue\"\r\n      @keyup.space=\"emitValue\"\r\n      class=\"radio-button-container\"\r\n    >\r\n      <svg\r\n        class=\"radio-button\"\r\n        fill=\"6c757d\"\r\n        preserveAspectRatio=\"xMidYMid meet\"\r\n        :height=\"size\"\r\n        :width=\"size\"\r\n        viewBox=\"0 0 30 30\"\r\n      >\r\n        <circle\r\n          class=\"radio-button\"\r\n          cx=\"15\"\r\n          cy=\"15\"\r\n          r=\"13\"\r\n          fill=\"white\"\r\n          stroke=\"#6c757d\"\r\n          stroke-width=\"2\"\r\n        />\r\n        <circle\r\n          v-if=\"value == inputValue\"\r\n          class=\"radio-button-inverse\"\r\n          cx=\"15\"\r\n          cy=\"15\"\r\n          r=\"6\"\r\n          fill=\"#6c757d\"\r\n        />\r\n      </svg>\r\n    </symbol-holder>\r\n    <n-label\r\n      @click=\"emitValue\"\r\n      :bold=\"bold\"\r\n      :flavor=\"flavor\"\r\n      :size=\"size\"\r\n      :dark=\"dark\"\r\n      >{{ label }}</n-label\r\n    >\r\n  </radio-container>\r\n</template>\r\n\r\n<script>\r\nimport { NLabel } from \"@IntusFacultas/typography\";\r\nimport styled from \"vue-styled-components\";\r\nconst props = {\r\n  size: {\r\n    type: Number,\r\n    default: 14\r\n  },\r\n  active: {\r\n    type: Boolean,\r\n    default: false\r\n  }\r\n};\r\nconst RadioContainer = styled.div`\r\n  display: inline;\r\n`;\r\nconst RadioAligner = styled.div`\r\n  display: flex;\r\n  align-content: center;\r\n`;\r\nconst SymbolHolder = styled(\"span\", props)`\r\n  cursor: pointer;\r\n  margin-right: 4px;\r\n  outline: none;\r\n  &:focus {\r\n    & * {\r\n      stroke: #41bee8;\r\n    }\r\n  }\r\n`;\r\nexport const Radio = {\r\n  components: { NLabel, SymbolHolder, RadioContainer, RadioAligner },\r\n  props: {\r\n    label: {\r\n      type: String,\r\n      required: true\r\n    },\r\n    value: {\r\n      required: true\r\n    },\r\n    inputValue: {\r\n      required: true\r\n    },\r\n    flavor: {\r\n      type: String,\r\n      default: \"\"\r\n    },\r\n    size: {\r\n      type: Number,\r\n      default: 14\r\n    },\r\n    dark: {\r\n      type: Boolean,\r\n      default: false\r\n    },\r\n    bold: {\r\n      type: Boolean,\r\n      default: false\r\n    }\r\n  },\r\n  methods: {\r\n    emitValue() {\r\n      this.$emit(\"input\", this.inputValue);\r\n    }\r\n  }\r\n};\r\nexport default Radio;\r\n</script>\r\n\r\n<style>\r\n.radio-button-container:hover .radio-button {\r\n  stroke: #41bee8;\r\n}\r\n.radio-button-container:hover .radio-button-inverse {\r\n  fill: #41bee8;\r\n}\r\n.radio-button,\r\n.radio-button-inverse {\r\n  transition: 0.1s all ease;\r\n}\r\n.radio-button:hover {\r\n  stroke: #41bee8;\r\n}\r\n.radio-button-inverse:hover {\r\n  fill: #41bee8;\r\n}\r\n</style>\r\n"]}, media: undefined });

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

// Import vue component

var install = function installRadio(Vue) {
  if (install.installed) return;
  install.installed = true;
  Vue.component("Radio", __vue_component__);
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


__vue_component__.install = install; // Export component by default
// also be used as directives, etc. - eg. import { RollupDemoDirective } from 'rollup-demo';
// export const RollupDemoDirective = component;

export default __vue_component__;
//# sourceMappingURL=Radio.esm.js.map
