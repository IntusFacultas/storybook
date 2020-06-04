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

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n  outline: none;\n  background-color: white;\n  &:hover {\n    box-shadow: 0px 0px 3px #8c5aff;\n  }\n  fill: ", ";\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n  margin-right: 0px;\n  display: inline-block;\n  height: 13px;\n  outline: none;\n  &:focus svg {\n    box-shadow: 0px 0px 3px #8c5aff;\n  }\n  & div {\n    display: inline-block;\n    transition: 0.1s all ease;\n  }\n  ", "\n"]);

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
  var data = _taggedTemplateLiteral(["\n  display: inline;\n  -webkit-touch-callout: none; /* iOS Safari */\n  -webkit-user-select: none; /* Safari */\n  -khtml-user-select: none; /* Konqueror HTML */\n  -moz-user-select: none; /* Old versions of Firefox */\n  -ms-user-select: none; /* Internet Explorer/Edge */\n  user-select: none; /* Non-prefixed version, currently\n                                  supported by Chrome, Edge, Opera and Firefox */\n"]);

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
  disabled: Boolean,
  active: {
    type: Boolean,
    default: false
  },
  flavor: String,
  defaultTheme: {
    type: Object,
    default: function _default() {
      return Theme;
    }
  }
};
var CheckboxContainer = styled.div(_templateObject());
var CheckboxAligner = styled.div(_templateObject2());
var SymbolHolder = styled("div", props)(_templateObject3(), function (props) {
  return props.disabled ? "\n    cursor: not-allowed;\n    & div {\n      color: #b6b6b6;\n    }\n  " : "\n    cursor: pointer;\n    & div:hover {\n      color: #496cbd;\n    }\n  ";
});
var SvgHolder = styled("svg", props)(_templateObject4(), function (props) {
  return props.theme && props.theme[props.flavor] ? props.theme[props.flavor].background.color : props.defaultTheme[props.flavor] ? props.defaultTheme[props.flavor].background.color : props.defaultTheme.Primary.background.color;
});
var Checkbox = {
  components: {
    NLabel: NLabel,
    SymbolHolder: SymbolHolder,
    CheckboxContainer: CheckboxContainer,
    CheckboxAligner: CheckboxAligner,
    SvgHolder: SvgHolder
  },
  props: {
    label: {
      type: String,
      required: true
    },
    value: {
      required: true
    },
    flavor: {
      type: String,
      default: ""
    },
    labelFlavor: {
      type: String,
      default: ""
    },
    disabled: {
      type: Boolean
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
      if (!this.disabled) this.$emit("input", !this.value);
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
const __vue_script__ = Checkbox;

/* template */
var __vue_render__ = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c(
    "checkbox-container",
    [
      _c(
        "symbol-holder",
        {
          attrs: { tabindex: "0", disabled: _vm.disabled, size: _vm.size + 4 },
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
          _vm.value
            ? _c(
                "svg-holder",
                {
                  attrs: {
                    xmlns: "http://www.w3.org/2000/svg",
                    width: "12",
                    height: "12",
                    viewBox: "0 0 24 24",
                    flavor: _vm.flavor
                  }
                },
                [
                  _c("path", {
                    attrs: {
                      d:
                        "M0 0v24h24v-24h-24zm10.041 17l-4.5-4.319 1.395-1.435 3.08 2.937 7.021-7.183 1.422 1.409-8.418 8.591z"
                    }
                  })
                ]
              )
            : _c(
                "svg-holder",
                {
                  attrs: {
                    xmlns: "http://www.w3.org/2000/svg",
                    width: "12",
                    height: "12",
                    viewBox: "0 0 24 24",
                    flavor: _vm.flavor
                  }
                },
                [
                  _c("path", {
                    attrs: { d: "M22 2v20h-20v-20h20zm2-2h-24v24h24v-24z" }
                  })
                ]
              )
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "n-label",
        {
          attrs: {
            bold: _vm.bold,
            flavor: _vm.labelFlavor,
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
    inject("data-v-f91835c0_0", { source: "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", map: {"version":3,"sources":[],"names":[],"mappings":"","file":"Checkbox.vue"}, media: undefined });

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

var install = function installCheckbox(Vue) {
  if (install.installed) return;
  install.installed = true;
  Vue.component("Checkbox", __vue_component__);
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
export { __vue_component__ as Checkbox };
//# sourceMappingURL=Checkbox.esm.js.map
