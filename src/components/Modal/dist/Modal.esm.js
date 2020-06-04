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

function _templateObject5() {
  var data = _taggedTemplateLiteral(["\n  padding: 10px;\n  border-radius: 0px 0px 5px 5px;\n\n  border: 1px solid\n    ", ";\n  background-color: ", ";\n  margin-bottom: ", ";\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n  padding: 10px;\n  border: 1px solid\n    ", ";\n  background-color: ", ";\n  border-width: 0px 1px 0px 1px;\n  border-style: solid;\n  margin-bottom: ", ";\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n  border-radius: 5px 5px 0px 0px;\n  padding: 10px 10px 10px 10px;\n  border: 1px solid\n    ", ";\n  background-color: ", ";\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  z-index: 1000;\n  margin-top: ", "\n  width: ", "\n  transition: .15s ease-in-out transform;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  background-color: rgba(0, 0, 0, 0.35);\n  z-index: 999;\n  transition: 0.15s ease-in-out all;\n  position: fixed;\n  top: 0px;\n  left: 0px;\n  right: 0px;\n  overflow-y: auto;\n  bottom: 0px;\n  display: flex;\n  justify-content: center;\n  & > div {\n    transform: translateY(0px);\n  }\n"]);

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
      return Theme;
    }
  },
  width: String,
  topOffset: String,
  bottomOffset: String
};
var NModalBackdrop = styled.div(_templateObject());
var NModalContainer = styled("div", props)(_templateObject2(), function (props) {
  return props.topOffset ? props.topOffset : "20px";
}, function (props) {
  return props.width ? props.width : "500px";
});
var NModalHeader = styled("div", props)(_templateObject3(), function (props) {
  return props.theme && props.theme[props.flavor] ? props.theme[props.flavor].border.hover : props.defaultTheme[props.flavor] ? props.defaultTheme[props.flavor].border.hover : "#aaa";
}, function (props) {
  return props.theme && props.theme[props.flavor] ? props.theme[props.flavor].background.color : props.defaultTheme[props.flavor] ? props.defaultTheme[props.flavor].background.color : "white";
});
var NModalBody = styled("div", props)(_templateObject4(), function (props) {
  return props.theme && props.theme[props.flavor] ? props.theme[props.flavor].border.hover : props.defaultTheme[props.flavor] ? props.defaultTheme[props.flavor].border.hover : "#aaa";
}, function (props) {
  return props.theme && props.theme[props.flavor] ? props.theme[props.flavor].background.color : props.defaultTheme[props.flavor] ? props.defaultTheme[props.flavor].background.color : "white";
}, function (props) {
  return props.bottomOffset ? props.bottomOffset : "0px";
});
var NModalFooter = styled("div", props)(_templateObject5(), function (props) {
  return props.theme && props.theme[props.flavor] ? props.theme[props.flavor].border.hover : props.defaultTheme[props.flavor] ? props.defaultTheme[props.flavor].border.hover : "#aaa";
}, function (props) {
  return props.theme && props.theme[props.flavor] ? props.theme[props.flavor].background.color : props.defaultTheme[props.flavor] ? props.defaultTheme[props.flavor].background.color : "white";
}, function (props) {
  return props.bottomOffset ? props.bottomOffset : "20px";
});
var Modal = {
  components: {
    NModalHeader: NModalHeader,
    NModalBody: NModalBody,
    NModalFooter: NModalFooter,
    NModalBackdrop: NModalBackdrop,
    NModalContainer: NModalContainer
  },
  data: function data() {
    return {
      visible: false
    };
  },
  props: {
    id: {
      type: String,
      required: true
    },
    backgroundDismiss: {
      type: Boolean,
      default: true
    },
    headerFlavor: {
      type: String,
      default: ""
    },
    footerFlavor: {
      type: String,
      default: ""
    },
    bodyFlavor: {
      type: String,
      default: ""
    },
    width: {
      type: String,
      default: "500px"
    },
    topOffset: {
      type: String
    },
    bottomOffset: {
      type: String
    },
    header: {
      type: Boolean,
      default: false
    },
    footer: {
      type: Boolean,
      default: false
    }
  },
  mounted: function mounted() {
    window.addEventListener("modal-".concat(this.id), this.detectChange);

    (function () {
      if (typeof window.CustomEvent === "function") return false;

      function CustomEvent(event, params) {
        params = params || {
          bubbles: false,
          cancelable: false,
          detail: null
        };
        var evt = document.createEvent("CustomEvent");
        evt.initCustomEvent(event, params.bubbles, params.cancelable, params.detail);
        return evt;
      }

      window.CustomEvent = CustomEvent;
    })();
  },
  beforeDestroy: function beforeDestroy() {
    window.removeEventListener("modal-".concat(this.id), this.detectChange);
  },
  methods: {
    isDescendant: function isDescendant(parent, child) {
      var node = child.parentNode;

      while (node != null) {
        if (node == parent) {
          return true;
        }

        node = node.parentNode;
      }

      return false;
    },
    turnOff: function turnOff(event) {
      if (this.backgroundDismiss && this.$refs.backdrop.$el == event.target) {
        this.visible = false;
      }
    },
    detectChange: function detectChange(event) {
      this.visible = event.detail.modal;
    }
  },
  computed: {
    computedClass: function computedClass() {
      if (this.visible) {
        return [];
      }

      return ["modal-hidden"];
    },
    computedStyle: function computedStyle() {
      var self = this;
      var data = {
        "border-top-left-radius": self.header ? "0px" : "5px",
        "border-top-right-radius": self.header ? "0px" : "5px",
        "border-bottom-left-radius": self.footer ? "0px" : "5px",
        "border-bottom-right-radius": self.footer ? "0px" : "5px",
        "border-top-width": self.header ? "0px" : "1px",
        "border-bottom-width": self.footer ? "0px" : "1px"
      };
      return data;
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
const __vue_script__ = Modal;

/* template */
var __vue_render__ = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c(
    "div",
    [
      _c(
        "n-modal-backdrop",
        {
          ref: "backdrop",
          class: _vm.computedClass,
          on: { click: _vm.turnOff }
        },
        [
          _c(
            "n-modal-container",
            {
              ref: "modal",
              attrs: { width: _vm.width, "top-offset": _vm.topOffset }
            },
            [
              _vm.header
                ? _c(
                    "n-modal-header",
                    { attrs: { flavor: _vm.headerFlavor } },
                    [_vm._t("header")],
                    2
                  )
                : _vm._e(),
              _vm._v(" "),
              _c(
                "n-modal-body",
                {
                  style: _vm.computedStyle,
                  attrs: {
                    "bottom-offset": !_vm.footer ? _vm.bottomOffset : "0px",
                    flavor: _vm.bodyFlavor
                  }
                },
                [_vm._t("body")],
                2
              ),
              _vm._v(" "),
              _vm.footer
                ? _c(
                    "n-modal-footer",
                    {
                      attrs: {
                        "bottom-offset": _vm.bottomOffset,
                        flavor: _vm.footerFlavor
                      }
                    },
                    [_vm._t("footer")],
                    2
                  )
                : _vm._e()
            ],
            1
          )
        ],
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
    inject("data-v-03231482_0", { source: "\n.modal-hidden {\r\n  opacity: 0;\r\n  pointer-events: none;\n}\n.modal-hidden > div {\r\n  transform: translateY(-200px);\n}\r\n", map: {"version":3,"sources":["C:\\Users\\pedro\\Documents\\Personal Projects\\GitHub\\storybook\\src\\components\\Modal\\src\\Modal.vue"],"names":[],"mappings":";AAuPA;EACA,UAAA;EACA,oBAAA;AACA;AACA;EACA,6BAAA;AACA","file":"Modal.vue","sourcesContent":["<template>\r\n  <div>\r\n    <n-modal-backdrop :class=\"computedClass\" @click=\"turnOff\" ref=\"backdrop\">\r\n      <n-modal-container :width=\"width\" :top-offset=\"topOffset\" ref=\"modal\">\r\n        <n-modal-header :flavor=\"headerFlavor\" v-if=\"header\">\r\n          <slot name=\"header\"></slot>\r\n        </n-modal-header>\r\n        <n-modal-body\r\n          :bottom-offset=\"!footer ? bottomOffset : '0px'\"\r\n          :flavor=\"bodyFlavor\"\r\n          :style=\"computedStyle\"\r\n        >\r\n          <slot name=\"body\"></slot>\r\n        </n-modal-body>\r\n        <n-modal-footer\r\n          :bottom-offset=\"bottomOffset\"\r\n          :flavor=\"footerFlavor\"\r\n          v-if=\"footer\"\r\n        >\r\n          <slot name=\"footer\"></slot>\r\n        </n-modal-footer>\r\n      </n-modal-container>\r\n    </n-modal-backdrop>\r\n  </div>\r\n</template>\r\n\r\n<script>\r\nimport styled from \"vue-styled-components\";\r\nimport Theme from \"@IntusFacultas/design-system\";\r\nconst props = {\r\n  flavor: String,\r\n  defaultTheme: {\r\n    type: Object,\r\n    default: function () {\r\n      return Theme;\r\n    },\r\n  },\r\n  width: String,\r\n  topOffset: String,\r\n  bottomOffset: String,\r\n};\r\nexport const NModalBackdrop = styled.div`\r\n  background-color: rgba(0, 0, 0, 0.35);\r\n  z-index: 999;\r\n  transition: 0.15s ease-in-out all;\r\n  position: fixed;\r\n  top: 0px;\r\n  left: 0px;\r\n  right: 0px;\r\n  overflow-y: auto;\r\n  bottom: 0px;\r\n  display: flex;\r\n  justify-content: center;\r\n  & > div {\r\n    transform: translateY(0px);\r\n  }\r\n`;\r\nexport const NModalContainer = styled(\"div\", props)`\r\n  z-index: 1000;\r\n  margin-top: ${(props) => (props.topOffset ? props.topOffset : \"20px\")}\r\n  width: ${(props) => (props.width ? props.width : \"500px\")}\r\n  transition: .15s ease-in-out transform;\r\n`;\r\nexport const NModalHeader = styled(\"div\", props)`\r\n  border-radius: 5px 5px 0px 0px;\r\n  padding: 10px 10px 10px 10px;\r\n  border: 1px solid\r\n    ${(props) =>\r\n      props.theme && props.theme[props.flavor]\r\n        ? props.theme[props.flavor].border.hover\r\n        : props.defaultTheme[props.flavor]\r\n        ? props.defaultTheme[props.flavor].border.hover\r\n        : \"#aaa\"};\r\n  background-color: ${(props) =>\r\n    props.theme && props.theme[props.flavor]\r\n      ? props.theme[props.flavor].background.color\r\n      : props.defaultTheme[props.flavor]\r\n      ? props.defaultTheme[props.flavor].background.color\r\n      : \"white\"};\r\n`;\r\nexport const NModalBody = styled(\"div\", props)`\r\n  padding: 10px;\r\n  border: 1px solid\r\n    ${(props) =>\r\n      props.theme && props.theme[props.flavor]\r\n        ? props.theme[props.flavor].border.hover\r\n        : props.defaultTheme[props.flavor]\r\n        ? props.defaultTheme[props.flavor].border.hover\r\n        : \"#aaa\"};\r\n  background-color: ${(props) =>\r\n    props.theme && props.theme[props.flavor]\r\n      ? props.theme[props.flavor].background.color\r\n      : props.defaultTheme[props.flavor]\r\n      ? props.defaultTheme[props.flavor].background.color\r\n      : \"white\"};\r\n  border-width: 0px 1px 0px 1px;\r\n  border-style: solid;\r\n  margin-bottom: ${(props) =>\r\n    props.bottomOffset ? props.bottomOffset : \"0px\"};\r\n`;\r\nexport const NModalFooter = styled(\"div\", props)`\r\n  padding: 10px;\r\n  border-radius: 0px 0px 5px 5px;\r\n\r\n  border: 1px solid\r\n    ${(props) =>\r\n      props.theme && props.theme[props.flavor]\r\n        ? props.theme[props.flavor].border.hover\r\n        : props.defaultTheme[props.flavor]\r\n        ? props.defaultTheme[props.flavor].border.hover\r\n        : \"#aaa\"};\r\n  background-color: ${(props) =>\r\n    props.theme && props.theme[props.flavor]\r\n      ? props.theme[props.flavor].background.color\r\n      : props.defaultTheme[props.flavor]\r\n      ? props.defaultTheme[props.flavor].background.color\r\n      : \"white\"};\r\n  margin-bottom: ${(props) =>\r\n    props.bottomOffset ? props.bottomOffset : \"20px\"};\r\n`;\r\n\r\nexport const Modal = {\r\n  components: {\r\n    NModalHeader,\r\n    NModalBody,\r\n    NModalFooter,\r\n    NModalBackdrop,\r\n    NModalContainer,\r\n  },\r\n  data() {\r\n    return {\r\n      visible: false,\r\n    };\r\n  },\r\n  props: {\r\n    id: {\r\n      type: String,\r\n      required: true,\r\n    },\r\n    backgroundDismiss: {\r\n      type: Boolean,\r\n      default: true,\r\n    },\r\n    headerFlavor: {\r\n      type: String,\r\n      default: \"\",\r\n    },\r\n    footerFlavor: {\r\n      type: String,\r\n      default: \"\",\r\n    },\r\n    bodyFlavor: {\r\n      type: String,\r\n      default: \"\",\r\n    },\r\n    width: {\r\n      type: String,\r\n      default: \"500px\",\r\n    },\r\n    topOffset: {\r\n      type: String,\r\n    },\r\n    bottomOffset: {\r\n      type: String,\r\n    },\r\n    header: {\r\n      type: Boolean,\r\n      default: false,\r\n    },\r\n    footer: {\r\n      type: Boolean,\r\n      default: false,\r\n    },\r\n  },\r\n  mounted() {\r\n    window.addEventListener(`modal-${this.id}`, this.detectChange);\r\n    (function () {\r\n      if (typeof window.CustomEvent === \"function\") return false;\r\n\r\n      function CustomEvent(event, params) {\r\n        params = params || {\r\n          bubbles: false,\r\n          cancelable: false,\r\n          detail: null,\r\n        };\r\n        var evt = document.createEvent(\"CustomEvent\");\r\n        evt.initCustomEvent(\r\n          event,\r\n          params.bubbles,\r\n          params.cancelable,\r\n          params.detail\r\n        );\r\n        return evt;\r\n      }\r\n\r\n      window.CustomEvent = CustomEvent;\r\n    })();\r\n  },\r\n  beforeDestroy() {\r\n    window.removeEventListener(`modal-${this.id}`, this.detectChange);\r\n  },\r\n  methods: {\r\n    isDescendant(parent, child) {\r\n      var node = child.parentNode;\r\n      while (node != null) {\r\n        if (node == parent) {\r\n          return true;\r\n        }\r\n        node = node.parentNode;\r\n      }\r\n      return false;\r\n    },\r\n    turnOff(event) {\r\n      if (this.backgroundDismiss && this.$refs.backdrop.$el == event.target) {\r\n        this.visible = false;\r\n      }\r\n    },\r\n    detectChange(event) {\r\n      this.visible = event.detail.modal;\r\n    },\r\n  },\r\n  computed: {\r\n    computedClass() {\r\n      if (this.visible) {\r\n        return [];\r\n      }\r\n      return [\"modal-hidden\"];\r\n    },\r\n    computedStyle: function () {\r\n      var self = this;\r\n      let data = {\r\n        \"border-top-left-radius\": self.header ? \"0px\" : \"5px\",\r\n        \"border-top-right-radius\": self.header ? \"0px\" : \"5px\",\r\n        \"border-bottom-left-radius\": self.footer ? \"0px\" : \"5px\",\r\n        \"border-bottom-right-radius\": self.footer ? \"0px\" : \"5px\",\r\n        \"border-top-width\": self.header ? \"0px\" : \"1px\",\r\n        \"border-bottom-width\": self.footer ? \"0px\" : \"1px\",\r\n      };\r\n      return data;\r\n    },\r\n  },\r\n};\r\n\r\nexport default Modal;\r\n</script>\r\n\r\n<style>\r\n.modal-hidden {\r\n  opacity: 0;\r\n  pointer-events: none;\r\n}\r\n.modal-hidden > div {\r\n  transform: translateY(-200px);\r\n}\r\n</style>\r\n"]}, media: undefined });

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

var install = function installModal(Vue) {
  if (install.installed) return;
  install.installed = true;
  Vue.component("Modal", __vue_component__);
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
export { __vue_component__ as Modal };
//# sourceMappingURL=Modal.esm.js.map
