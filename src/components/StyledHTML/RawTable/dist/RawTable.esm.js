import { NTable, TableHeaders, TableBody } from '@IntusFacultas/table';

//
var VueRawTable = {
  components: {
    NTable: NTable,
    TableHeaders: TableHeaders,
    TableBody: TableBody
  },
  props: {
    flavor: {
      type: String,
      default: ""
    },
    striped: {
      type: Boolean,
      default: false
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
const __vue_script__ = VueRawTable;

/* template */
var __vue_render__ = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c(
    "n-table",
    { attrs: { flavor: _vm.flavor, striped: _vm.striped } },
    [
      _c("table-headers", [_vm._t("header")], 2),
      _vm._v(" "),
      _c("table-body", [_vm._t("body")], 2)
    ],
    1
  )
};
var __vue_staticRenderFns__ = [];
__vue_render__._withStripped = true;

  /* style */
  const __vue_inject_styles__ = function (inject) {
    if (!inject) return
    inject("data-v-8f58d1d2_0", { source: "\n.table-not-shown {\r\n  opacity: 0;\r\n  transform: rotate(45deg) !important;\n}\n.table-hoverable-row:hover {\r\n  background-color: rgba(0, 0, 0, 0.05);\n}\n.table-open-carat {\r\n  transform: rotate(135deg) !important;\n}\r\n", map: {"version":3,"sources":["C:\\Users\\pedro\\Documents\\Personal Projects\\GitHub\\storybook\\src\\components\\StyledHTML\\RawTable\\src\\RawTable.vue"],"names":[],"mappings":";AA+BA;EACA,UAAA;EACA,mCAAA;AACA;AACA;EACA,qCAAA;AACA;AAEA;EACA,oCAAA;AACA","file":"RawTable.vue","sourcesContent":["<template>\r\n  <n-table :flavor=\"flavor\" :striped=\"striped\">\r\n    <table-headers>\r\n      <slot name=\"header\"> </slot>\r\n    </table-headers>\r\n    <table-body>\r\n      <slot name=\"body\"> </slot>\r\n    </table-body>\r\n  </n-table>\r\n</template>\r\n\r\n<script>\r\nimport { NTable, TableHeaders, TableBody } from \"@IntusFacultas/table\";\r\n\r\nexport const VueRawTable = {\r\n  components: { NTable, TableHeaders, TableBody },\r\n  props: {\r\n    flavor: {\r\n      type: String,\r\n      default: \"\",\r\n    },\r\n    striped: {\r\n      type: Boolean,\r\n      default: false,\r\n    },\r\n  },\r\n};\r\nexport default VueRawTable;\r\n</script>\r\n\r\n<style>\r\n.table-not-shown {\r\n  opacity: 0;\r\n  transform: rotate(45deg) !important;\r\n}\r\n.table-hoverable-row:hover {\r\n  background-color: rgba(0, 0, 0, 0.05);\r\n}\r\n\r\n.table-open-carat {\r\n  transform: rotate(135deg) !important;\r\n}\r\n</style>\r\n"]}, media: undefined });

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

var install = function installVueRawTable(Vue) {
  if (install.installed) return;
  install.installed = true;
  Vue.component("VueRawTable", __vue_component__);
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
export { __vue_component__ as VueRawTable };
//# sourceMappingURL=RawTable.esm.js.map
