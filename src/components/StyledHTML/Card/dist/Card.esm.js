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
  var data = _taggedTemplateLiteral([""]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n  padding: 10px;\n\n  border: 1px solid\n    ", ";\n  ", ";\n  ", "\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  padding: 10px;\n  border: 1px solid\n    ", ";\n  ", ";\n  border-width: 0px 1px 0px 1px;\n  border-style: solid;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  padding: 10px 10px 10px 10px;\n  border: 1px solid\n    ", ";\n  ", ";\n  ", "\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}
var props = {
  flavor: String,
  bordered: {
    type: Boolean,
    default: false
  },
  defaultTheme: {
    type: Object,
    default: function _default() {
      return Theme;
    }
  }
};
var NCardHeader = styled("div", props)(_templateObject(), function (props) {
  return props.theme && props.theme[props.flavor] ? props.theme[props.flavor].border.hover : props.defaultTheme[props.flavor] ? props.defaultTheme[props.flavor].border.hover : "#aaa";
}, function (props) {
  return !props.bordered ? props.theme && props.theme[props.flavor] ? "background-color:" + props.theme[props.flavor].background.color + ";" : props.defaultTheme[props.flavor] ? "background-color:" + props.defaultTheme[props.flavor].background.color + ";" : "background-color: #f4f4f4;" : props.theme && props.theme[props.flavor] ? "border: 1px solid " + props.theme[props.flavor].background.color + ";" : props.defaultTheme[props.flavor] ? "border: 1px solid " + props.defaultTheme[props.flavor].background.color + ";" : "border: 1px solid #aaa;";
}, function (props) {
  return props.bordered ? "background-color: #f4f4f4;" : "";
});
var NCardBody = styled("div", props)(_templateObject2(), function (props) {
  return props.theme && props.theme[props.flavor] ? props.theme[props.flavor].border.hover : props.defaultTheme[props.flavor] ? props.defaultTheme[props.flavor].border.hover : "#aaa";
}, function (props) {
  return !props.bordered ? props.theme && props.theme[props.flavor] ? "background-color:" + props.theme[props.flavor].background.color + ";" : props.defaultTheme[props.flavor] ? "background-color:" + props.defaultTheme[props.flavor].background.color + ";" : "background-color: white;" : props.theme && props.theme[props.flavor] ? "border-color: " + props.theme[props.flavor].background.color + ";" : props.defaultTheme[props.flavor] ? "border-color: " + props.defaultTheme[props.flavor].background.color + ";" : "border-color: #aaa;";
});
var NCardFooter = styled("div", props)(_templateObject3(), function (props) {
  return props.theme && props.theme[props.flavor] ? props.theme[props.flavor].border.hover : props.defaultTheme[props.flavor] ? props.defaultTheme[props.flavor].border.hover : "#aaa";
}, function (props) {
  return !props.bordered ? props.theme && props.theme[props.flavor] ? "background-color:" + props.theme[props.flavor].background.color + ";" : props.defaultTheme[props.flavor] ? "background-color:" + props.defaultTheme[props.flavor].background.color + ";" : "background-color: #f4f4f4;" : props.theme && props.theme[props.flavor] ? "border: 1px solid " + props.theme[props.flavor].background.color + ";" : props.defaultTheme[props.flavor] ? "border: 1px solid " + props.defaultTheme[props.flavor].background.color + ";" : "border: 1px solid #aaa;";
}, function (props) {
  return props.bordered ? "background-color: #f4f4f4;" : "";
});
var NCardContainer = styled("div", props)(_templateObject4());
var Card = {
  components: {
    NCardHeader: NCardHeader,
    NCardBody: NCardBody,
    NCardFooter: NCardFooter,
    NCardContainer: NCardContainer
  },
  props: {
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
    bordered: {
      type: Boolean,
      default: false
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
  computed: {
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

/* script */
const __vue_script__ = Card;

/* template */
var __vue_render__ = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c(
    "n-card-container",
    [
      _vm.header
        ? _c(
            "n-card-header",
            { attrs: { flavor: _vm.headerFlavor, bordered: _vm.bordered } },
            [_vm._t("header")],
            2
          )
        : _vm._e(),
      _vm._v(" "),
      _c(
        "n-card-body",
        {
          style: _vm.computedStyle,
          attrs: { flavor: _vm.bodyFlavor, bordered: _vm.bordered }
        },
        [_vm._t("body")],
        2
      ),
      _vm._v(" "),
      _vm.footer
        ? _c(
            "n-card-footer",
            { attrs: { flavor: _vm.footerFlavor, bordered: _vm.bordered } },
            [_vm._t("footer")],
            2
          )
        : _vm._e()
    ],
    1
  )
};
var __vue_staticRenderFns__ = [];
__vue_render__._withStripped = true;

  /* style */
  const __vue_inject_styles__ = undefined;
  /* scoped */
  const __vue_scope_id__ = undefined;
  /* module identifier */
  const __vue_module_identifier__ = undefined;
  /* functional template */
  const __vue_is_functional_template__ = false;
  /* style inject */
  
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
    undefined,
    undefined,
    undefined
  );

// Import vue component

var install = function installCard(Vue) {
  if (install.installed) return;
  install.installed = true;
  Vue.component("Card", __vue_component__);
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
export { __vue_component__ as Card };
//# sourceMappingURL=Card.esm.js.map
