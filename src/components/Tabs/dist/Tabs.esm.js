import styled from "vue-styled-components";
import Theme from "@intus/design-system";

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

function _templateObject3() {
  var data = _taggedTemplateLiteral([
    "\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  text-align: center;\n  cursor: pointer;\n  min-width: 100px;\n  padding: 0.1rem 1rem 0 1rem;\n  height: 40px;\n  ",
    "\n  border-radius: 4px 4px 0px 0px;\n  ",
    "\n  & * {\n    ",
    "\n    text-decoration: none;\n    outline: none;\n    -webkit-touch-callout: none; /* iOS Safari */\n    -webkit-user-select: none; /* Safari */\n    -khtml-user-select: none; /* Konqueror HTML */\n    -moz-user-select: none; /* Firefox */\n    -ms-user-select: none; /* Internet Explorer/Edge */\n    user-select: none; /* Non-prefixed version, currently supported by Chrome and Opera */\n  }\n"
  ]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral([
    '\n  list-style: none;\n  padding-left: 0px;\n  display: flex;\n  flex-direction: row;\n  flex-wrap: wrap;\n  margin-bottom: -1px;\n  & * {\n    font-family: "Open Sans Regular", -apple-system, BlinkMacSystemFont,\n      "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif,\n      "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";\n  }\n'
  ]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral([
    "\n  display: flex;\n  flex-direction: row;\n  border-bottom-color: ",
    ";\n  border-bottom-style: solid;\n  border-bottom-width: 1px;\n"
  ]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}
var props = {
  flavor: String,
  disabled: Boolean,
  active: Boolean,
  defaultTheme: {
    type: Object,
    default: function _default() {
      return Theme;
    }
  }
};
var TabContainer = styled("nav", props)(
  _templateObject(),
  props.theme && props.theme[props.flavor]
    ? props.theme[props.flavor].border.color
    : props.defaultTheme[props.flavor]
    ? props.defaultTheme[props.flavor].border.color
    : "#dee2e6 "
);
var TabList = styled.ul(_templateObject2());
var Tab = styled("li", props)(
  _templateObject3(),
  function(props) {
    return props.disabled
      ? "\n        pointer-events: none;\n        cursor: not-allowed\n        "
      : "";
  },
  function(props) {
    return props.active
      ? "\n        background-color: "
          .concat(
            props.theme && props.theme[props.flavor]
              ? props.theme[props.flavor].background.hover
              : props.defaultTheme[props.flavor]
              ? props.defaultTheme[props.flavor].background.hover
              : "white",
            ";\n        color: "
          )
          .concat(
            props.theme && props.theme[props.flavor]
              ? props.theme[props.flavor].color.color
              : props.defaultTheme[props.flavor]
              ? props.defaultTheme[props.flavor].color.color
              : "#222",
            ";\n        stroke: "
          )
          .concat(
            props.theme && props.theme[props.flavor]
              ? props.theme[props.flavor].background.color
              : props.defaultTheme[props.flavor]
              ? props.defaultTheme[props.flavor].background.color
              : "#222",
            ";\n        fill: "
          )
          .concat(
            props.theme && props.theme[props.flavor]
              ? props.theme[props.flavor].color.color
              : props.defaultTheme[props.flavor]
              ? props.defaultTheme[props.flavor].color.color
              : "#222",
            ";\n        color: "
          )
          .concat(
            props.theme && props.theme[props.flavor]
              ? props.theme[props.flavor].color.color
              : props.defaultTheme[props.flavor]
              ? props.defaultTheme[props.flavor].color.color
              : "#222",
            ";\n\n        border-top-color: "
          )
          .concat(
            props.theme && props.theme[props.flavor]
              ? props.theme[props.flavor].border.color
              : props.defaultTheme[props.flavor]
              ? props.defaultTheme[props.flavor].border.color
              : "#dee2e6 ",
            ";\n        border-top-style: solid;\n        border-top-width: 1px;\n\n        border-left-color: "
          )
          .concat(
            props.theme && props.theme[props.flavor]
              ? props.theme[props.flavor].border.color
              : props.defaultTheme[props.flavor]
              ? props.defaultTheme[props.flavor].border.color
              : "#dee2e6 ",
            ";\n        border-left-style: solid;\n        border-left-width: 1px;\n\n        border-right-color: "
          )
          .concat(
            props.disabled
              ? "rgba(0, 0, 0, 0.3)"
              : props.theme && props.theme[props.flavor]
              ? props.theme[props.flavor].border.color
              : props.defaultTheme[props.flavor]
              ? props.defaultTheme[props.flavor].border.color
              : "#dee2e6 ",
            ";\n        border-right-style: solid;\n        border-right-width: 1px;\n        "
          )
      : "\n        &:hover {\n            background-color: #eee;\n            text-decoration: none;\n            outline: none;\n        }\n        & * {\n          color: #222;\n        }\n    ";
  },
  function(props) {
    return props.disabled ? "opacity: .6" : "";
  }
);
var TabItem = {
  components: {
    Tab: Tab
  },
  props: {
    index: {
      type: Number,
      required: true
    },
    flavor: {
      type: String,
      default: ""
    },
    tab: {
      type: Object,
      required: true
    }
  },
  methods: {
    handleClick: function handleClick() {
      if (this.tab.active || this.tab.disabled) {
        return;
      }

      if (this.tab.type == "link") {
        window.location.href = this.tab.value;
      } else {
        this.tabClick(this.tab);
      }
    },
    tabClick: function tabClick(tab) {
      this.$emit("select", tab.value);
    }
  },
  template:
    '\n        <tab\n          :flavor=\'flavor\'\n          :disabled="tab.disabled"\n          :active="tab.active"\n          @click="handleClick"\n          tabindex="0"\n          @keyup.enter="handleClick"\n          @keyup.space="handleClick"\n          :role="tab.type == \'link\' ? \'link\' : \'button\'">\n            <a v-if="tab.type == \'link\'" :href="tab.value">{{tab.text}}</a>\n            <span v-else @click="tabClick(tab)">{{tab.text}}</span>\n            <span v-html="tab.html"></span>\n            <span v-if=\'tab.disabled\' class="sr-only">(disabled)</span>\n            <span v-if=\'tab.active\' class="sr-only">(active)</span>\n        </tab>\n    '
};
var Tabs = {
  components: {
    TabContainer: TabContainer,
    TabItem: TabItem,
    TabList: TabList,
    Tab: Tab
  },
  props: {
    flavor: {
      type: String,
      default: ""
    },
    tabs: {
      type: Array,
      default: function _default() {
        return [];
      }
    }
  },
  methods: {
    passSelect: function passSelect(value) {
      this.$emit("select", value);
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
const __vue_script__ = Tabs;

/* template */
var __vue_render__ = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c(
    "tab-container",
    { ref: "container", attrs: { flavor: _vm.flavor } },
    [
      _c(
        "tab-list",
        { ref: "tabs" },
        _vm._l(_vm.tabs, function(tab, index) {
          return _c("tab-item", {
            key: index,
            attrs: { flavor: _vm.flavor, index: index, tab: tab },
            on: { select: _vm.passSelect }
          });
        }),
        1
      )
    ],
    1
  );
};
var __vue_staticRenderFns__ = [];
__vue_render__._withStripped = true;

/* style */
const __vue_inject_styles__ = function(inject) {
  if (!inject) return;
  inject("data-v-66230465_0", {
    source:
      "\n.sr-only {\r\n  position: absolute;\r\n  width: 1px;\r\n  height: 1px;\r\n  padding: 0;\r\n  overflow: hidden;\r\n  clip: rect(0, 0, 0, 0);\r\n  white-space: nowrap;\r\n  -webkit-clip-path: inset(50%);\r\n  clip-path: inset(50%);\r\n  border: 0;\n}\r\n",
    map: {
      version: 3,
      sources: [
        "C:\\Users\\pedro\\Documents\\Work\\Storybook\\src\\components\\Tabs\\src\\Tabs.vue"
      ],
      names: [],
      mappings:
        ";AA6OA;EACA,kBAAA;EACA,UAAA;EACA,WAAA;EACA,UAAA;EACA,gBAAA;EACA,sBAAA;EACA,mBAAA;EACA,6BAAA;EACA,qBAAA;EACA,SAAA;AACA",
      file: "Tabs.vue",
      sourcesContent: [
        '<template>\r\n  <tab-container ref="container" :flavor="flavor">\r\n    <tab-list ref="tabs">\r\n      <tab-item\r\n        v-for="(tab, index) in tabs"\r\n        :key="index"\r\n        :flavor="flavor"\r\n        :index="index"\r\n        :tab="tab"\r\n        @select="passSelect"\r\n      ></tab-item>\r\n    </tab-list>\r\n  </tab-container>\r\n</template>\r\n\r\n<script>\r\nimport styled from "vue-styled-components";\r\nimport Theme from "@intus/design-system";\r\n\r\nconst props = {\r\n  flavor: String,\r\n  disabled: Boolean,\r\n  active: Boolean,\r\n  defaultTheme: {\r\n    type: Object,\r\n    default: function() {\r\n      return Theme;\r\n    }\r\n  }\r\n};\r\nconst TabContainer = styled("nav", props)`\r\n  display: flex;\r\n  flex-direction: row;\r\n  border-bottom-color: ${props.theme && props.theme[props.flavor]\r\n    ? props.theme[props.flavor].border.color\r\n    : props.defaultTheme[props.flavor]\r\n    ? props.defaultTheme[props.flavor].border.color\r\n    : "#dee2e6 "};\r\n  border-bottom-style: solid;\r\n  border-bottom-width: 1px;\r\n`;\r\nconst TabList = styled.ul`\r\n  list-style: none;\r\n  padding-left: 0px;\r\n  display: flex;\r\n  flex-direction: row;\r\n  flex-wrap: wrap;\r\n  margin-bottom: -1px;\r\n  & * {\r\n    font-family: "Open Sans Regular", -apple-system, BlinkMacSystemFont,\r\n      "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif,\r\n      "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";\r\n  }\r\n`;\r\nconst Tab = styled("li", props)`\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  text-align: center;\r\n  cursor: pointer;\r\n  min-width: 100px;\r\n  padding: 0.1rem 1rem 0 1rem;\r\n  height: 40px;\r\n  ${props =>\r\n    props.disabled\r\n      ? `\r\n        pointer-events: none;\r\n        cursor: not-allowed\r\n        `\r\n      : ""}\r\n  border-radius: 4px 4px 0px 0px;\r\n  ${props =>\r\n    props.active\r\n      ? `\r\n        background-color: ${\r\n          props.theme && props.theme[props.flavor]\r\n            ? props.theme[props.flavor].background.hover\r\n            : props.defaultTheme[props.flavor]\r\n            ? props.defaultTheme[props.flavor].background.hover\r\n            : "white"\r\n        };\r\n        color: ${\r\n          props.theme && props.theme[props.flavor]\r\n            ? props.theme[props.flavor].color.color\r\n            : props.defaultTheme[props.flavor]\r\n            ? props.defaultTheme[props.flavor].color.color\r\n            : "#222"\r\n        };\r\n        stroke: ${\r\n          props.theme && props.theme[props.flavor]\r\n            ? props.theme[props.flavor].background.color\r\n            : props.defaultTheme[props.flavor]\r\n            ? props.defaultTheme[props.flavor].background.color\r\n            : "#222"\r\n        };\r\n        fill: ${\r\n          props.theme && props.theme[props.flavor]\r\n            ? props.theme[props.flavor].color.color\r\n            : props.defaultTheme[props.flavor]\r\n            ? props.defaultTheme[props.flavor].color.color\r\n            : "#222"\r\n        };\r\n        color: ${\r\n          props.theme && props.theme[props.flavor]\r\n            ? props.theme[props.flavor].color.color\r\n            : props.defaultTheme[props.flavor]\r\n            ? props.defaultTheme[props.flavor].color.color\r\n            : "#222"\r\n        };\r\n\r\n        border-top-color: ${\r\n          props.theme && props.theme[props.flavor]\r\n            ? props.theme[props.flavor].border.color\r\n            : props.defaultTheme[props.flavor]\r\n            ? props.defaultTheme[props.flavor].border.color\r\n            : "#dee2e6 "\r\n        };\r\n        border-top-style: solid;\r\n        border-top-width: 1px;\r\n\r\n        border-left-color: ${\r\n          props.theme && props.theme[props.flavor]\r\n            ? props.theme[props.flavor].border.color\r\n            : props.defaultTheme[props.flavor]\r\n            ? props.defaultTheme[props.flavor].border.color\r\n            : "#dee2e6 "\r\n        };\r\n        border-left-style: solid;\r\n        border-left-width: 1px;\r\n\r\n        border-right-color: ${\r\n          props.disabled\r\n            ? "rgba(0, 0, 0, 0.3)"\r\n            : props.theme && props.theme[props.flavor]\r\n            ? props.theme[props.flavor].border.color\r\n            : props.defaultTheme[props.flavor]\r\n            ? props.defaultTheme[props.flavor].border.color\r\n            : "#dee2e6 "\r\n        };\r\n        border-right-style: solid;\r\n        border-right-width: 1px;\r\n        `\r\n      : `\r\n        &:hover {\r\n            background-color: #eee;\r\n            text-decoration: none;\r\n            outline: none;\r\n        }\r\n        & * {\r\n          color: #222;\r\n        }\r\n    `}\r\n  & * {\r\n    ${props => (props.disabled ? `opacity: .6` : "")}\r\n    text-decoration: none;\r\n    outline: none;\r\n    -webkit-touch-callout: none; /* iOS Safari */\r\n    -webkit-user-select: none; /* Safari */\r\n    -khtml-user-select: none; /* Konqueror HTML */\r\n    -moz-user-select: none; /* Firefox */\r\n    -ms-user-select: none; /* Internet Explorer/Edge */\r\n    user-select: none; /* Non-prefixed version, currently supported by Chrome and Opera */\r\n  }\r\n`;\r\nconst TabItem = {\r\n  components: { Tab },\r\n  props: {\r\n    index: {\r\n      type: Number,\r\n      required: true\r\n    },\r\n    flavor: {\r\n      type: String,\r\n      default: ""\r\n    },\r\n    tab: {\r\n      type: Object,\r\n      required: true\r\n    }\r\n  },\r\n  methods: {\r\n    handleClick() {\r\n      if (this.tab.active || this.tab.disabled) {\r\n        return;\r\n      }\r\n      if (this.tab.type == "link") {\r\n        window.location.href = this.tab.value;\r\n      } else {\r\n        this.tabClick(this.tab);\r\n      }\r\n    },\r\n    tabClick(tab) {\r\n      this.$emit("select", tab.value);\r\n    }\r\n  },\r\n  template: `\r\n        <tab\r\n          :flavor=\'flavor\'\r\n          :disabled="tab.disabled"\r\n          :active="tab.active"\r\n          @click="handleClick"\r\n          tabindex="0"\r\n          @keyup.enter="handleClick"\r\n          @keyup.space="handleClick"\r\n          :role="tab.type == \'link\' ? \'link\' : \'button\'">\r\n            <a v-if="tab.type == \'link\'" :href="tab.value">{{tab.text}}</a>\r\n            <span v-else @click="tabClick(tab)">{{tab.text}}</span>\r\n            <span v-html="tab.html"></span>\r\n            <span v-if=\'tab.disabled\' class="sr-only">(disabled)</span>\r\n            <span v-if=\'tab.active\' class="sr-only">(active)</span>\r\n        </tab>\r\n    `\r\n};\r\nexport const Tabs = {\r\n  components: { TabContainer, TabItem, TabList, Tab },\r\n  props: {\r\n    flavor: {\r\n      type: String,\r\n      default: ""\r\n    },\r\n    tabs: {\r\n      type: Array,\r\n      default() {\r\n        return [];\r\n      }\r\n    }\r\n  },\r\n  methods: {\r\n    passSelect(value) {\r\n      this.$emit("select", value);\r\n    }\r\n  }\r\n};\r\nexport default Tabs;\r\n</script>\r\n\r\n<style>\r\n.sr-only {\r\n  position: absolute;\r\n  width: 1px;\r\n  height: 1px;\r\n  padding: 0;\r\n  overflow: hidden;\r\n  clip: rect(0, 0, 0, 0);\r\n  white-space: nowrap;\r\n  -webkit-clip-path: inset(50%);\r\n  clip-path: inset(50%);\r\n  border: 0;\r\n}\r\n</style>'
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

var install = function installTabs(Vue) {
  if (install.installed) return;
  install.installed = true;
  Vue.component("Tabs", __vue_component__);
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
//# sourceMappingURL=Tabs.esm.js.map
