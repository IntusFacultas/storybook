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

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  z-index: 2;\n  background-color: ", ";\n  padding: 1em;\n  clip-path: circle(18px at calc(100% - 1.55em) 1.55em);\n  transition: all 0.5s ease-in-out;\n\n  display: inline-block;\n  position: absolute;\n  right: 0;\n  border-radius: 5px;\n  & * {\n    opacity: 1;\n    line-height: 1rem;\n    color: ", ";\n  }\n  & div.vue-tooltip-content {\n    margin-right: 50px;\n  }\n  & svg.vue-tooltip-icon {\n    position: absolute;\n    right: 1em;\n    top: 1em;\n    stroke: ", ";\n    fill: ", ";\n  }\n  &:hover {\n    box-shadow: 0px 5px 3px 0px #d6d6d6;\n    clip-path: circle(100%);\n    background-color: ", ";\n    color: ", ";\n    ", "\n  }\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  font-family: \"Open Sans Regular\", -apple-system, BlinkMacSystemFont,\n    \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif, \"Apple Color Emoji\",\n    \"Segoe UI Emoji\", \"Segoe UI Symbol\";\n  display: inline-block;\n  position: relative;\n  width: 48px;\n  height: 48px;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}
var props = {
  flavor: String,
  activeFlavor: String,
  translate: Boolean,
  translateAmount: Number,
  defaultTheme: {
    type: Object,
    default: function _default() {
      return Theme;
    }
  }
};
var TooltipContainer = styled("div", props)(_templateObject());
var TooltipContent = styled("div", props)(_templateObject2(), function (props) {
  return props.theme && props.theme[props.flavor] ? props.theme[props.flavor].background.color : props.defaultTheme[props.flavor] ? props.defaultTheme[props.flavor].background.color : "#f2f2f2";
}, function (props) {
  return props.theme && props.theme[props.flavor] ? props.theme[props.flavor].color.color : props.defaultTheme[props.flavor] ? props.defaultTheme[props.flavor].color.color : "#222";
}, function (props) {
  return props.theme && props.theme[props.flavor] ? props.theme[props.flavor].color.color : props.defaultTheme[props.flavor] ? props.defaultTheme[props.flavor].color.color : "#222";
}, function (props) {
  return props.theme && props.theme[props.flavor] ? props.theme[props.flavor].color.color : props.defaultTheme[props.flavor] ? props.defaultTheme[props.flavor].color.color : "#222";
}, function (props) {
  return props.theme && props.theme[props.activeFlavor] ? props.theme[props.activeFlavor].background.color : props.defaultTheme[props.activeFlavor] ? props.defaultTheme[props.activeFlavor].background.color : "#f2f2f2";
}, function (props) {
  return props.theme && props.theme[props.activeFlavor] ? props.theme[props.activeFlavor].color.color : props.defaultTheme[props.activeFlavor] ? props.defaultTheme[props.activeFlavor].color.color : "#222";
}, function (props) {
  return props.translate ? "\n      transform: translate(calc(".concat(props.translateAmount, "px + 2em + 30px), 0px)\n    ") : "";
});
var Tooltip = {
  components: {
    TooltipContainer: TooltipContainer,
    TooltipContent: TooltipContent
  },
  data: function data() {
    return {
      translate: false
    };
  },
  props: {
    flavor: {
      type: String,
      default: ""
    },
    activeFlavor: {
      type: String,
      default: ""
    }
  },
  methods: {
    setSide: function setSide() {
      var distanceFromEdge = this.$refs.content.getBoundingClientRect();

      if (distanceFromEdge.x < distanceFromEdge.width) {
        this.translate = true;
        this.translateAmount = distanceFromEdge.width;
      } else {
        this.translate = false;
      }
    }
  },
  beforeDestroy: function beforeDestroy() {
    window.removeEventListener("resize", this.setSide);
  },
  mounted: function mounted() {
    this.setSide();
    window.addEventListener("resize", this.setSide);
  },
  computed: {
    computedActiveFlavor: function computedActiveFlavor() {
      if (this.activeFlavor) {
        return this.activeFlavor;
      }

      return this.flavor;
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
const __vue_script__ = Tooltip;

/* template */
var __vue_render__ = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c(
    "tooltip-container",
    [
      _c(
        "tooltip-content",
        {
          ref: "container",
          attrs: {
            flavor: _vm.flavor,
            "active-flavor": _vm.computedActiveFlavor,
            translate: _vm.translate,
            "translate-amount": _vm.translateAmount
          }
        },
        [
          _c(
            "div",
            { ref: "content", staticClass: "vue-tooltip-content" },
            [_vm._t("default")],
            2
          ),
          _vm._v(" "),
          _c(
            "svg",
            {
              staticClass: "vue-tooltip-icon",
              attrs: {
                xmlns: "http://www.w3.org/2000/svg",
                width: "18",
                height: "18",
                viewBox: "0 0 24 24"
              }
            },
            [
              _c("path", {
                attrs: {
                  d:
                    "M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm1 18h-2v-8h2v8zm-1-12.25c.69 0 1.25.56 1.25 1.25s-.56 1.25-1.25 1.25-1.25-.56-1.25-1.25.56-1.25 1.25-1.25z"
                }
              })
            ]
          )
        ]
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
    inject("data-v-73921523_0", { source: "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", map: {"version":3,"sources":[],"names":[],"mappings":"","file":"Tooltip.vue"}, media: undefined });

  };
  /* scoped */
  const __vue_scope_id__ = undefined;
  /* module identifier */
  const __vue_module_identifier__ = undefined;
  /* functional template */
  const __vue_is_functional_template__ = false;
  /* style inject SSR */
  
  /* style inject shadow dom */
  

  
  const __vue_component__ = /*#__PURE__*/normalizeComponent(
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

var install = function installVueStaticAlert(Vue) {
  if (install.installed) return;
  install.installed = true;
  Vue.component("Tooltip", __vue_component__);
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
export { __vue_component__ as Tooltip };
//# sourceMappingURL=Tooltip.esm.js.map
