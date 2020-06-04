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

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n        padding: ", ";\n        font-size: ", ";\n        border-radius: 3px;\n        font-weight: bold;\n        ", "\n        font-family: Segoe UI, sans-serif;\n        border: 1px solid transparent;\n        transition: color .1s ease-in-out,\n            background-color .1s ease-in-out,\n            border-color .1s ease-in-out,\n            box-shadow .1s ease-in-out;\n        cursor: pointer;\n        color: ", "\n        background-color: ", ";\n        &:focus {\n            outline: none;\n            box-shadow: 0 0 0 .2rem ", ";\n            color: ", "\n        }\n        &:disabled {\n            opacity: 0.6;\n            cursor: not-allowed;\n        }\n        &:hover {\n            background-color: ", ";\n            color: ", "\n        }\n        &:disabled:hover {\n            background-color: ", ";\n        }\n    "]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n        padding: ", ";\n        font-size: ", ";\n        border-radius: 3px;\n        font-weight: bold;\n        ", "\n        font-family: \"Open Sans Regular\", -apple-system, BlinkMacSystemFont,\n    \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif, \"Apple Color Emoji\",\n    \"Segoe UI Emoji\", \"Segoe UI Symbol\";\n        border: 1px solid transparent;\n        transition: color .1s ease-in-out,\n            background-color .1s ease-in-out,\n            border-color .1s ease-in-out,\n            box-shadow .1s ease-in-out;\n        cursor: pointer;\n        color: ", "\n        background-color: ", ";\n        &:focus {\n            outline: none;\n            box-shadow: 0 0 0 .2rem ", ";\n            color: ", ";\n        }\n        &:disabled {\n            opacity: 0.6;\n            cursor: not-allowed;\n        }\n        &:hover {\n            background-color: ", ";\n            color: ", ";\n        }\n        &:disabled:hover {\n            background-color: ", ";\n        }\n    "]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  position: relative;\n  display: inline-flex;\n  vertical-align: middle;\n  & button:not(:last-child) {\n    border-top-right-radius: 0;\n    border-bottom-right-radius: 0;\n  }\n  & button:not(:first-child) {\n    border-top-left-radius: 0;\n    border-bottom-left-radius: 0;\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}
var props = {
  flavor: String,
  small: Boolean,
  large: Boolean,
  block: Boolean,
  defaultTheme: {
    type: Object,
    default: function _default() {
      return Theme;
    }
  }
};
var dialogProps = {
  flavor: String,
  small: Boolean,
  large: Boolean,
  block: Boolean,
  dialogTheme: {
    type: Object,
    default: function _default() {
      return Theme;
    }
  }
};
var ButtonGroup = styled.div(_templateObject());
var DialogButton = styled("button", dialogProps)(_templateObject2(), function (props) {
  return props.large ? "8px 10px" : props.small ? "3px 5px" : "5px 10px";
}, function (props) {
  return props.large ? "24px" : props.small ? "12px" : "16px";
}, function (props) {
  return props.block ? "width: 100%;" : "";
}, function (props) {
  return props.theme && props.theme[props.flavor] ? props.theme[props.flavor].color.color : props.dialogTheme[props.flavor] && props.dialogTheme[props.flavor].color.color ? props.dialogTheme[props.flavor].color.color : "#040404";
}, function (props) {
  return props.theme && props.theme[props.flavor] ? props.theme[props.flavor].background.color : props.dialogTheme[props.flavor] && props.dialogTheme[props.flavor].background.color ? props.dialogTheme[props.flavor].background.color : "#f0f0f0";
}, function (props) {
  return props.theme && props.theme[props.flavor] ? props.theme[props.flavor].background.color + "80" : props.dialogTheme[props.flavor] && props.dialogTheme[props.flavor].background.color ? props.dialogTheme[props.flavor].background.color + "80" : "#ddcccc80";
}, function (props) {
  return props.theme && props.theme[props.flavor] ? props.theme[props.flavor].color.focus : props.dialogTheme[props.flavor] && props.dialogTheme[props.flavor].color.focus ? props.dialogTheme[props.flavor].color.focus : "#000";
}, function (props) {
  return props.theme && props.theme[props.flavor] ? props.theme[props.flavor].background.hover : props.dialogTheme[props.flavor] && props.dialogTheme[props.flavor].background.hover ? props.dialogTheme[props.flavor].background.hover : "#d5d5d5";
}, function (props) {
  return props.theme && props.theme[props.flavor] ? props.theme[props.flavor].color.hover : props.dialogTheme[props.flavor] && props.dialogTheme[props.flavor].color.hover ? props.dialogTheme[props.flavor].color.hover : "#000";
}, function (props) {
  return props.theme && props.theme[props.flavor] ? props.theme[props.flavor].background.color : props.dialogTheme[props.flavor] && props.dialogTheme[props.flavor].background.color ? props.dialogTheme[props.flavor].background.color : "#f0f0f0";
});
var NButton = styled("button", props)(_templateObject3(), function (props) {
  return props.large ? "8px 10px" : props.small ? "3px 5px" : "5px 10px";
}, function (props) {
  return props.large ? "24px" : props.small ? "12px" : "16px";
}, function (props) {
  return props.block ? "width: 100%;" : "";
}, function (props) {
  return props.theme && props.theme[props.flavor] ? props.theme[props.flavor].color.color : props.defaultTheme[props.flavor] && props.defaultTheme[props.flavor].color.color ? props.defaultTheme[props.flavor].color.color : "#040404";
}, function (props) {
  return props.theme && props.theme[props.flavor] ? props.theme[props.flavor].background.color : props.defaultTheme[props.flavor] && props.defaultTheme[props.flavor].background.color ? props.defaultTheme[props.flavor].background.color : "#f0f0f0";
}, function (props) {
  return props.theme && props.theme[props.flavor] ? props.theme[props.flavor].background.color + "80" : props.defaultTheme[props.flavor] && props.defaultTheme[props.flavor].background.color ? props.defaultTheme[props.flavor].background.color + "80" : "#dcc";
}, function (props) {
  return props.theme && props.theme[props.flavor] ? props.theme[props.flavor].color.focus : props.defaultTheme[props.flavor] && props.defaultTheme[props.flavor].color.focus ? props.defaultTheme[props.flavor].color.focus : "#000";
}, function (props) {
  return props.theme && props.theme[props.flavor] ? props.theme[props.flavor].background.hover : props.defaultTheme[props.flavor] && props.defaultTheme[props.flavor].background.hover ? props.defaultTheme[props.flavor].background.hover : "#d5d5d5";
}, function (props) {
  return props.theme && props.theme[props.flavor] ? props.theme[props.flavor].color.hover : props.defaultTheme[props.flavor] && props.defaultTheme[props.flavor].color.hover ? props.defaultTheme[props.flavor].color.hover : "#000";
}, function (props) {
  return props.theme && props.theme[props.flavor] ? props.theme[props.flavor].background.color : props.defaultTheme[props.flavor] && props.defaultTheme[props.flavor].background.color ? props.defaultTheme[props.flavor].background.color : "#f0f0f0";
});

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
const __vue_script__ = NButton;

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

var components = [{
  label: "NButton",
  component: NButton
}, {
  label: "DialogButton",
  component: DialogButton
}, {
  label: "ButtonGroup",
  component: ButtonGroup
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

export default NButton;
export { ButtonGroup, DialogButton, NButton };
//# sourceMappingURL=Button.esm.js.map
