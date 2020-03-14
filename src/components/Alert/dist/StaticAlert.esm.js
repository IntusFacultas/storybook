import styled from "vue-styled-components";
import { AlertTheme } from "@intus/design-system";

function _taggedTemplateLiteral(strings, raw) {
  if (!raw) {
    raw = strings.slice(0);
  }

  return Object.freeze(
    Object.defineProperties(strings, {
      raw: {
        value: Object.freeze(raw)
      }
    })
  );
}

function _templateObject2() {
  var data = _taggedTemplateLiteral([
    "\n  padding: 1rem;\n  border-radius: 4px;\n  border: 2px solid\n    ",
    ";\n  background-color: ",
    ";\n  ",
    "\n  ",
    '\n  opacity: 1;\n  font-weight: bold;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  font-family: "Open Sans Regular", -apple-system, BlinkMacSystemFont,\n    "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji",\n    "Segoe UI Emoji", "Segoe UI Symbol";\n  & * {\n    opacity: 1;\n    line-height: 1rem;\n    color: ',
    ";\n  }\n"
  ]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral([
    "\n  cursor: pointer;\n  float: right;\n  text-align: end;\n  background-color: transparent;\n  border: none;\n  width: 45px;\n  outline: none;\n"
  ]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}
var props = {
  flavor: String,
  defaultTheme: {
    type: Object,
    default: function _default() {
      return AlertTheme;
    }
  },
  animated: Boolean,
  closeable: Boolean
};
var CloseContainer = styled("button")(_templateObject());
var AlertContainer = styled("div", props)(
  _templateObject2(),
  function(props) {
    return props.theme && props.theme[props.flavor]
      ? props.theme[props.flavor].border.color
      : props.defaultTheme[props.flavor]
      ? props.defaultTheme[props.flavor].border.color
      : "#e8e8e8";
  },
  function(props) {
    return props.theme && props.theme[props.flavor]
      ? props.theme[props.flavor].background.color
      : props.defaultTheme[props.flavor]
      ? props.defaultTheme[props.flavor].background.color
      : "#f2f2f2";
  },
  function(props) {
    return props.animated
      ? "\n        transition: .5s ease-in-out all;\n        -webkit-animation: vue-static-alert-fadein 0.5s; /* Safari, Chrome and Opera > 12.1 */\n        -moz-animation: vue-static-alert-fadein 0.5s; /* Firefox < 16 */\n        -ms-animation: vue-static-alert-fadein 0.5s; /* Internet Explorer */\n        -o-animation: vue-static-alert-fadein 0.5s; /* Opera < 12.1 */\n        animation: vue-static-alert-fadein 0.5s;\n        "
      : "";
  },
  function(props) {
    return props.closeable ? "cursor: pointer;" : "";
  },
  function(props) {
    return props.theme && props.theme[props.flavor]
      ? props.theme[props.flavor].color.color
      : props.defaultTheme[props.flavor]
      ? props.defaultTheme[props.flavor].color.color
      : "#222";
  }
);
var VueStaticAlert = {
  components: {
    AlertContainer: AlertContainer,
    CloseContainer: CloseContainer
  },
  data: function data() {
    return {
      showing: true,
      dying: false,
      theme: AlertTheme
    };
  },
  props: {
    closeable: {
      type: Boolean,
      default: false
    },
    animated: {
      type: Boolean,
      default: false
    },
    flavor: {
      type: String,
      default: ""
    }
  },
  methods: {
    closeAlert: function closeAlert() {
      var self = this;

      if (this.closeable) {
        if (this.animated) {
          this.dying = true;
          setTimeout(function() {
            self.showing = false;
          }, 501);
        } else {
          this.showing = false;
        }
      }
    }
  },
  computed: {
    computedClass: function computedClass() {
      if (this.dying && this.animated) {
        return ["vue-alert-dying"];
      }

      return [];
    }
  }
};

function normalizeComponent(
  template,
  style,
  script,
  scopeId,
  isFunctionalTemplate,
  moduleIdentifier /* server only */,
  shadowMode,
  createInjector,
  createInjectorSSR,
  createInjectorShadow
) {
  if (typeof shadowMode !== "boolean") {
    createInjectorSSR = createInjector;
    createInjector = shadowMode;
    shadowMode = false;
  }
  // Vue.extend constructor export interop.
  const options = typeof script === "function" ? script.options : script;
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
    hook = function(context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext); // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== "undefined") {
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
  } else if (style) {
    hook = shadowMode
      ? function(context) {
          style.call(
            this,
            createInjectorShadow(context, this.$root.$options.shadowRoot)
          );
        }
      : function(context) {
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
    } else {
      // inject component registration as beforeCreate hook
      const existing = options.beforeCreate;
      options.beforeCreate = existing ? [].concat(existing, hook) : [hook];
    }
  }
  return script;
}

const isOldIE =
  typeof navigator !== "undefined" &&
  /msie [6-9]\\b/.test(navigator.userAgent.toLowerCase());
function createInjector(context) {
  return (id, style) => addStyle(id, style);
}
let HEAD;
const styles = {};
function addStyle(id, css) {
  const group = isOldIE ? css.media || "default" : id;
  const style =
    styles[group] || (styles[group] = { ids: new Set(), styles: [] });
  if (!style.ids.has(id)) {
    style.ids.add(id);
    let code = css.source;
    if (css.map) {
      // https://developer.chrome.com/devtools/docs/javascript-debugging
      // this makes source maps inside style tags work properly in Chrome
      code += "\n/*# sourceURL=" + css.map.sources[0] + " */";
      // http://stackoverflow.com/a/26603875
      code +=
        "\n/*# sourceMappingURL=data:application/json;base64," +
        btoa(unescape(encodeURIComponent(JSON.stringify(css.map)))) +
        " */";
    }
    if (!style.element) {
      style.element = document.createElement("style");
      style.element.type = "text/css";
      if (css.media) style.element.setAttribute("media", css.media);
      if (HEAD === undefined) {
        HEAD = document.head || document.getElementsByTagName("head")[0];
      }
      HEAD.appendChild(style.element);
    }
    if ("styleSheet" in style.element) {
      style.styles.push(code);
      style.element.styleSheet.cssText = style.styles
        .filter(Boolean)
        .join("\n");
    } else {
      const index = style.ids.size - 1;
      const textNode = document.createTextNode(code);
      const nodes = style.element.childNodes;
      if (nodes[index]) style.element.removeChild(nodes[index]);
      if (nodes.length) style.element.insertBefore(textNode, nodes[index]);
      else style.element.appendChild(textNode);
    }
  }
}

/* script */
const __vue_script__ = VueStaticAlert;

/* template */
var __vue_render__ = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _vm.showing
    ? _c(
        "alert-container",
        {
          class: _vm.computedClass,
          attrs: {
            "aria-live": "polite",
            role: "alert",
            animated: _vm.animated,
            closeable: _vm.closeable,
            flavor: _vm.flavor
          },
          on: { click: _vm.closeAlert }
        },
        [
          _vm._t("default", [_vm._v("I'm an alert! Put HTML in me!")]),
          _vm._v(" "),
          _vm.closeable
            ? _c("close-container", [
                _c(
                  "svg",
                  {
                    staticClass: "svg-icon",
                    attrs: {
                      viewBox: "0 0 20 20",
                      height: "10",
                      stroke: _vm.theme[_vm.flavor]
                        ? _vm.theme[_vm.flavor].color.color
                        : "#222"
                    }
                  },
                  [
                    _c("path", {
                      attrs: {
                        stroke: _vm.theme[_vm.flavor]
                          ? _vm.theme[_vm.flavor].color.color
                          : "#222",
                        d:
                          "M11.469,10l7.08-7.08c0.406-0.406,0.406-1.064,0-1.469c-0.406-0.406-1.063-0.406-1.469,0L10,8.53l-7.081-7.08\n\t\t\t\t\t\t\tc-0.406-0.406-1.064-0.406-1.469,0c-0.406,0.406-0.406,1.063,0,1.469L8.531,10L1.45,17.081c-0.406,0.406-0.406,1.064,0,1.469\n\t\t\t\t\t\t\tc0.203,0.203,0.469,0.304,0.735,0.304c0.266,0,0.531-0.101,0.735-0.304L10,11.469l7.08,7.081c0.203,0.203,0.469,0.304,0.735,0.304\n\t\t\t\t\t\t\tc0.267,0,0.532-0.101,0.735-0.304c0.406-0.406,0.406-1.064,0-1.469L11.469,10z"
                      }
                    })
                  ]
                )
              ])
            : _vm._e()
        ],
        2
      )
    : _vm._e();
};
var __vue_staticRenderFns__ = [];
__vue_render__._withStripped = true;

/* style */
const __vue_inject_styles__ = function(inject) {
  if (!inject) return;
  inject("data-v-2913851c_0", {
    source:
      "\n@keyframes vue-static-alert-fadein {\nfrom {\r\n    opacity: 0;\n}\nto {\r\n    opacity: 1;\n}\n}\r\n\r\n/* Firefox < 16 */\n@-moz-keyframes vue-static-alert-fadein {\nfrom {\r\n    opacity: 0;\n}\nto {\r\n    opacity: 1;\n}\n}\r\n\r\n/* Safari, Chrome and Opera > 12.1 */\n@-webkit-keyframes vue-static-alert-fadein {\nfrom {\r\n    opacity: 0;\n}\nto {\r\n    opacity: 1;\n}\n}\r\n\r\n/* Internet Explorer */\n@-ms-keyframes vue-static-alert-fadein {\nfrom {\r\n    opacity: 0;\n}\nto {\r\n    opacity: 1;\n}\n}\r\n\r\n/* Opera < 12.1 */\n@-o-keyframes vue-static-alert-fadein {\nfrom {\r\n    opacity: 0;\n}\nto {\r\n    opacity: 1;\n}\n}\n.vue-alert-dying {\r\n  opacity: 0 !important;\n}\r\n",
    map: {
      version: 3,
      sources: [
        "C:\\Users\\pedro\\Documents\\Work\\Storybook\\src\\components\\Alert\\src\\StaticAlert.vue"
      ],
      names: [],
      mappings:
        ";AAyJA;AACA;IACA,UAAA;AACA;AACA;IACA,UAAA;AACA;AACA;;AAEA,iBAAA;AACA;AACA;IACA,UAAA;AACA;AACA;IACA,UAAA;AACA;AACA;;AAEA,oCAAA;AACA;AACA;IACA,UAAA;AACA;AACA;IACA,UAAA;AACA;AACA;;AAEA,sBAAA;AACA;AACA;IACA,UAAA;AACA;AACA;IACA,UAAA;AACA;AACA;;AAEA,iBAAA;AACA;AACA;IACA,UAAA;AACA;AACA;IACA,UAAA;AACA;AACA;AACA;EACA,qBAAA;AACA",
      file: "StaticAlert.vue",
      sourcesContent: [
        '<template>\r\n  <alert-container\r\n    v-if="showing"\r\n    aria-live="polite"\r\n    role="alert"\r\n    :animated="animated"\r\n    :closeable="closeable"\r\n    :flavor="flavor"\r\n    @click="closeAlert"\r\n    :class="computedClass"\r\n  >\r\n    <slot>I\'m an alert! Put HTML in me!</slot>\r\n    <close-container v-if="closeable">\r\n      <svg\r\n        class="svg-icon"\r\n        viewBox="0 0 20 20"\r\n        height="10"\r\n        :stroke="theme[flavor] ? theme[flavor].color.color : \'#222\'"\r\n      >\r\n        <path\r\n          :stroke="theme[flavor] ? theme[flavor].color.color : \'#222\'"\r\n          d="M11.469,10l7.08-7.08c0.406-0.406,0.406-1.064,0-1.469c-0.406-0.406-1.063-0.406-1.469,0L10,8.53l-7.081-7.08\r\n\t\t\t\t\t\t\tc-0.406-0.406-1.064-0.406-1.469,0c-0.406,0.406-0.406,1.063,0,1.469L8.531,10L1.45,17.081c-0.406,0.406-0.406,1.064,0,1.469\r\n\t\t\t\t\t\t\tc0.203,0.203,0.469,0.304,0.735,0.304c0.266,0,0.531-0.101,0.735-0.304L10,11.469l7.08,7.081c0.203,0.203,0.469,0.304,0.735,0.304\r\n\t\t\t\t\t\t\tc0.267,0,0.532-0.101,0.735-0.304c0.406-0.406,0.406-1.064,0-1.469L11.469,10z"\r\n        />\r\n      </svg>\r\n    </close-container>\r\n  </alert-container>\r\n</template>\r\n\r\n<script>\r\nimport styled from "vue-styled-components";\r\nimport { AlertTheme } from "@intus/design-system";\r\nconst props = {\r\n  flavor: String,\r\n  defaultTheme: {\r\n    type: Object,\r\n    default: function() {\r\n      return AlertTheme;\r\n    }\r\n  },\r\n  animated: Boolean,\r\n  closeable: Boolean\r\n};\r\nconst CloseContainer = styled("button")`\r\n  cursor: pointer;\r\n  float: right;\r\n  text-align: end;\r\n  background-color: transparent;\r\n  border: none;\r\n  width: 45px;\r\n  outline: none;\r\n`;\r\nconst AlertContainer = styled("div", props)`\r\n  padding: 1rem;\r\n  border-radius: 4px;\r\n  border: 2px solid\r\n    ${props =>\r\n      props.theme && props.theme[props.flavor]\r\n        ? props.theme[props.flavor].border.color\r\n        : props.defaultTheme[props.flavor]\r\n        ? props.defaultTheme[props.flavor].border.color\r\n        : "#e8e8e8"};\r\n  background-color: ${props =>\r\n    props.theme && props.theme[props.flavor]\r\n      ? props.theme[props.flavor].background.color\r\n      : props.defaultTheme[props.flavor]\r\n      ? props.defaultTheme[props.flavor].background.color\r\n      : "#f2f2f2"};\r\n  ${props =>\r\n    props.animated\r\n      ? `\r\n        transition: .5s ease-in-out all;\r\n        -webkit-animation: vue-static-alert-fadein 0.5s; /* Safari, Chrome and Opera > 12.1 */\r\n        -moz-animation: vue-static-alert-fadein 0.5s; /* Firefox < 16 */\r\n        -ms-animation: vue-static-alert-fadein 0.5s; /* Internet Explorer */\r\n        -o-animation: vue-static-alert-fadein 0.5s; /* Opera < 12.1 */\r\n        animation: vue-static-alert-fadein 0.5s;\r\n        `\r\n      : ``}\r\n  ${props => (props.closeable ? `cursor: pointer;` : ``)}\r\n  opacity: 1;\r\n  font-weight: bold;\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: space-between;\r\n  font-family: "Open Sans Regular", -apple-system, BlinkMacSystemFont,\r\n    "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji",\r\n    "Segoe UI Emoji", "Segoe UI Symbol";\r\n  & * {\r\n    opacity: 1;\r\n    line-height: 1rem;\r\n    color: ${props =>\r\n      props.theme && props.theme[props.flavor]\r\n        ? props.theme[props.flavor].color.color\r\n        : props.defaultTheme[props.flavor]\r\n        ? props.defaultTheme[props.flavor].color.color\r\n        : "#222"};\r\n  }\r\n`;\r\n\r\nexport const VueStaticAlert = {\r\n  components: { AlertContainer, CloseContainer },\r\n  data() {\r\n    return {\r\n      showing: true,\r\n      dying: false,\r\n      theme: AlertTheme\r\n    };\r\n  },\r\n  props: {\r\n    closeable: {\r\n      type: Boolean,\r\n      default: false\r\n    },\r\n    animated: {\r\n      type: Boolean,\r\n      default: false\r\n    },\r\n    flavor: {\r\n      type: String,\r\n      default: ""\r\n    }\r\n  },\r\n  methods: {\r\n    closeAlert() {\r\n      let self = this;\r\n      if (this.closeable) {\r\n        if (this.animated) {\r\n          this.dying = true;\r\n          setTimeout(() => {\r\n            self.showing = false;\r\n          }, 501);\r\n        } else {\r\n          this.showing = false;\r\n        }\r\n      }\r\n    }\r\n  },\r\n  computed: {\r\n    computedClass() {\r\n      if (this.dying && this.animated) {\r\n        return ["vue-alert-dying"];\r\n      }\r\n      return [];\r\n    }\r\n  }\r\n};\r\nexport default VueStaticAlert;\r\n</script>\r\n\r\n<style>\r\n@keyframes vue-static-alert-fadein {\r\n  from {\r\n    opacity: 0;\r\n  }\r\n  to {\r\n    opacity: 1;\r\n  }\r\n}\r\n\r\n/* Firefox < 16 */\r\n@-moz-keyframes vue-static-alert-fadein {\r\n  from {\r\n    opacity: 0;\r\n  }\r\n  to {\r\n    opacity: 1;\r\n  }\r\n}\r\n\r\n/* Safari, Chrome and Opera > 12.1 */\r\n@-webkit-keyframes vue-static-alert-fadein {\r\n  from {\r\n    opacity: 0;\r\n  }\r\n  to {\r\n    opacity: 1;\r\n  }\r\n}\r\n\r\n/* Internet Explorer */\r\n@-ms-keyframes vue-static-alert-fadein {\r\n  from {\r\n    opacity: 0;\r\n  }\r\n  to {\r\n    opacity: 1;\r\n  }\r\n}\r\n\r\n/* Opera < 12.1 */\r\n@-o-keyframes vue-static-alert-fadein {\r\n  from {\r\n    opacity: 0;\r\n  }\r\n  to {\r\n    opacity: 1;\r\n  }\r\n}\r\n.vue-alert-dying {\r\n  opacity: 0 !important;\r\n}\r\n</style>\r\n'
      ]
    },
    media: undefined
  });
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

var install = function installVueStaticAlert(Vue) {
  if (install.installed) return;
  install.installed = true;
  Vue.component("VueStaticAlert", __vue_component__);
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
//# sourceMappingURL=StaticAlert.esm.js.map
