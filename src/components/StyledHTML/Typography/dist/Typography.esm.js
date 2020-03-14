import styled from 'vue-styled-components';
import { TextTheme } from '@IntusFacultas/design-system';

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
  var data = _taggedTemplateLiteral(["\n  margin: 0;\n  font-family: \"Open Sans Regular\", -apple-system, BlinkMacSystemFont,\n    \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif, \"Apple Color Emoji\",\n    \"Segoe UI Emoji\", \"Segoe UI Symbol\";\n  font-weight: ", ";\n  line-height: 1.571;\n  color: ", ";\n  -webkit-text-size-adjust: 100%;\n  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);\n\n  ", "\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  margin: 0;\n  font-family: \"Open Sans Regular\", -apple-system, BlinkMacSystemFont,\n    \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif, \"Apple Color Emoji\",\n    \"Segoe UI Emoji\", \"Segoe UI Symbol\";\n  font-size: ", "px;\n  font-weight: ", ";\n  line-height: 1.571;\n  color: ", ";\n  -webkit-text-size-adjust: 100%;\n  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);\n\n  ", "\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  margin-top: 0;\n  font-weight: ", ";\n  line-height: 1.2;\n  margin-bottom: 0.5rem;\n  font-family: \"Open Sans Regular\", -apple-system, BlinkMacSystemFont,\n    \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif, \"Apple Color Emoji\",\n    \"Segoe UI Emoji\", \"Segoe UI Symbol\";\n  color: ", ";\n  ", "\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}
var titleProps = {
  dark: Boolean,
  bold: Boolean,
  flavor: String,
  textTheme: {
    type: Object,
    default: function _default() {
      return TextTheme;
    }
  }
};
var Title = styled("h1", titleProps)(_templateObject(), function (props) {
  return props.bold ? "bold" : 500;
}, function (props) {
  return props.dark ? props.textTheme.Dark.color : props.textTheme.Normal.color;
}, function (props) {
  return props.flavor ? props.textTheme[props.flavor] ? "color " + props.textTheme[props.flavor].color + "!important" : "" : "";
});
var SectionTitle = Title.withComponent("h2", titleProps);
var SubSectionTitle = Title.withComponent("h3", titleProps);
var CategoryTitle = Title.withComponent("h4", titleProps);
var SubCategoryTitle = Title.withComponent("h5", titleProps);
var Keyword = Title.withComponent("h6", titleProps);
var props = {
  size: {
    type: Number,
    default: 15
  },
  dark: Boolean,
  textTheme: {
    type: Object,
    default: function _default() {
      return TextTheme;
    }
  },
  flavor: String
};
var Text = styled("span", props)(_templateObject2(), function (props) {
  return props.size < 14 ? 14 : props.size > 16 ? 16 : props.size;
}, function (props) {
  return props.bold ? "bold" : 500;
}, function (props) {
  return props.dark ? props.textTheme.Dark.color : props.textTheme.Normal.color;
}, function (props) {
  return props.flavor ? props.textTheme[props.flavor] ? "color " + props.textTheme[props.flavor].color : "" : "";
});
var Paragraph = Text.withComponent("p", props);
var NSmall = styled("small", props)(_templateObject3(), function (props) {
  return props.bold ? "bold" : 500;
}, function (props) {
  return props.dark ? props.textTheme.Dark.color : props.textTheme.Normal.color;
}, function (props) {
  return props.flavor ? props.textTheme[props.flavor] ? "color " + props.textTheme[props.flavor].color : "" : "";
});
var NLabel = Text.withComponent("label", props);

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
const __vue_script__ = Text;

/* template */

  /* style */
  const __vue_inject_styles__ = function (inject) {
    if (!inject) return
    inject("data-v-8d534810_0", { source: "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", map: {"version":3,"sources":[],"names":[],"mappings":"","file":"Typography.vue"}, media: undefined });

  };
  /* scoped */
  const __vue_scope_id__ = undefined;
  /* module identifier */
  const __vue_module_identifier__ = undefined;
  /* functional template */
  const __vue_is_functional_template__ = undefined;
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
    createInjector,
    undefined,
    undefined
  );

var components = [{
  label: "Title",
  component: Title
}, {
  label: "SectionTitle",
  component: SectionTitle
}, {
  label: "SubSectionTitle",
  component: SubSectionTitle
}, {
  label: "CategoryTitle",
  component: CategoryTitle
}, {
  label: "SubCategoryTitle",
  component: SubCategoryTitle
}, {
  label: "Keyword",
  component: Keyword
}, {
  label: "Text",
  component: Text
}, {
  label: "Paragraph",
  component: Paragraph
}, {
  label: "NSmall",
  component: NSmall
}, {
  label: "NLabel",
  component: NLabel
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

export { CategoryTitle, Keyword, NLabel, NSmall, Paragraph, SectionTitle, SubCategoryTitle, SubSectionTitle, Text, Title };
//# sourceMappingURL=Typography.esm.js.map
