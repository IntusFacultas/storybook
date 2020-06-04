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

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n  width: 100%;\n  flex-wrap: wrap;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  flex: ", ";\n  width: 100%;\n  padding: 15px;\n  display: flex;\n  flex-wrap: wrap;\n  @media (min-width: 0px) {\n    flex: ", ";\n    min-width: calc(\n      100% /\n        (\n          12 /\n            ", "\n        )\n    );\n  }\n  @media (min-width: 576px) {\n    flex: ", ";\n    min-width: calc(\n      100% /\n        (\n          12 /\n            ", "\n        )\n    );\n  }\n  @media (min-width: 768px) {\n    flex: ", ";\n    min-width: calc(\n      100% /\n        (\n          12 /\n            ", "\n        )\n    );\n  }\n  @media (min-width: 992px) {\n    flex: ", ";\n    min-width: calc(\n      100% /\n        (\n          12 /\n            ", "\n        )\n    );\n  }\n  @media (min-width: 1200px) {\n    flex: ", ";\n    min-width: calc(\n      100% /\n        (\n          12 /\n            ", "\n        )\n    );\n  }\n  box-sizing: border-box;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}
var props = {
  col: Number,
  xs: Number,
  sm: Number,
  md: Number,
  lg: Number,
  xl: Number
};
var FlexColumn = styled("div", props)(_templateObject(), function (props) {
  return !isNaN(props.col) ? props.col : 1;
}, function (props) {
  return !isNaN(props.xs) ? props.xs : !isNaN(props.sm) ? props.sm : !isNaN(props.md) ? props.md : !isNaN(props.lg) ? props.lg : !isNaN(props.xl) ? props.xl : !isNaN(props.col) ? props.col : 1;
}, function (props) {
  return !isNaN(props.xs) ? props.xs : !isNaN(props.sm) ? props.sm : !isNaN(props.md) ? props.md : !isNaN(props.lg) ? props.lg : !isNaN(props.xl) ? props.xl : !isNaN(props.col) ? props.col : 1;
}, function (props) {
  return !isNaN(props.sm) ? props.sm : !isNaN(props.md) ? props.md : !isNaN(props.lg) ? props.lg : !isNaN(props.xl) ? props.xl : !isNaN(props.col) ? props.col : 1;
}, function (props) {
  return !isNaN(props.sm) ? props.sm : !isNaN(props.md) ? props.md : !isNaN(props.lg) ? props.lg : !isNaN(props.xl) ? props.xl : !isNaN(props.col) ? props.col : 1;
}, function (props) {
  return !isNaN(props.md) ? props.md : !isNaN(props.lg) ? props.lg : !isNaN(props.xl) ? props.xl : !isNaN(props.col) ? props.col : 1;
}, function (props) {
  return !isNaN(props.md) ? props.md : !isNaN(props.lg) ? props.lg : !isNaN(props.xl) ? props.xl : !isNaN(props.col) ? props.col : 1;
}, function (props) {
  return !isNaN(props.lg) ? props.lg : !isNaN(props.xl) ? props.xl : !isNaN(props.col) ? props.col : 1;
}, function (props) {
  return !isNaN(props.lg) ? props.lg : !isNaN(props.xl) ? props.xl : !isNaN(props.col) ? props.col : 1;
}, function (props) {
  return !isNaN(props.xl) ? props.xl : !isNaN(props.col) ? props.col : 1;
}, function (props) {
  return !isNaN(props.xl) ? props.xl : !isNaN(props.col) ? props.col : 1;
});
var FlexRow = styled.div(_templateObject2());

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

/* script */
const __vue_script__ = FlexColumn;

/* template */

  /* style */
  const __vue_inject_styles__ = undefined;
  /* scoped */
  const __vue_scope_id__ = undefined;
  /* module identifier */
  const __vue_module_identifier__ = undefined;
  /* functional template */
  const __vue_is_functional_template__ = undefined;
  /* style inject */
  
  /* style inject SSR */
  
  /* style inject shadow dom */
  

  
  const __vue_component__ = normalizeComponent(
    {},
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
var components = [{
  label: "FlexRow",
  component: FlexRow
}, {
  label: "FlexColumn",
  component: FlexColumn
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

export { FlexColumn, FlexRow };
//# sourceMappingURL=Layout.esm.js.map
