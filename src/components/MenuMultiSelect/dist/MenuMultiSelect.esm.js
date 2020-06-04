import styled from 'vue-styled-components';
import Theme from '@IntusFacultas/design-system';
import Badge from '@IntusFacultas/badge';
import { NButton } from '@IntusFacultas/button';

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
  var data = _taggedTemplateLiteral(["\n  color: #222;\n  display: flex;\n  user-select: none;\n  justify-content: space-between;\n  padding: 2px 5px;\n  transition: color 0.1s ease-in-out, background-color 0.1s ease-in-out,\n    border-color 0.1s ease-in-out, box-shadow 0.1s ease-in-out;\n  cursor: pointer;\n  &:hover {\n    background-color: #fafafa;\n  }\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n  width: 50%;\n  height: ", ";\n  overflow-y: auto;\n  border: 1px solid #dcdcdc;\n  border-radius: 4px;\n  padding: 5px 10px;\n  list-style-type: none;\n  background-color: white;\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n  justify-content: space-between;\n  & * {\n    font-family: \"Open Sans Regular\", -apple-system, BlinkMacSystemFont,\n      \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif,\n      \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\";\n  }\n  padding: 10px 10px;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: column;\n\n  justify-content: center;\n  margin: 16px 5px;\n  padding: 5px 0px;\n  & button {\n    margin: 5px 0px;\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}
var props = {
  flavor: String,
  height: String,
  defaultTheme: {
    type: Object,
    default: function _default() {
      return Theme;
    }
  }
};
var MenuButtons = styled.div(_templateObject());
var MenuContainer = styled.div(_templateObject2());
var MultiMenu = styled("ul", props)(_templateObject3(), function (props) {
  return props.height;
});
var MenuItem = styled.li(_templateObject4());
var MenuMultiSelect = {
  components: {
    MenuContainer: MenuContainer,
    MultiMenu: MultiMenu,
    MenuItem: MenuItem,
    Badge: Badge,
    MenuButtons: MenuButtons,
    NButton: NButton
  },
  data: function data() {
    return {
      internalValue: []
    };
  },
  watch: {
    value: function value(newVal) {
      this.internalValue = newVal;
    }
  },
  props: {
    flavor: {
      type: String,
      default: ""
    },
    value: {
      type: Array,
      default: function _default() {
        return [];
      }
    },
    height: {
      type: String,
      default: function _default() {
        return "100px";
      }
    },
    items: {
      type: Array,
      default: function _default() {
        return [];
      }
    }
  },
  mounted: function mounted() {
    this.internalValue = this.value;
  },
  methods: {
    select: function select(item) {
      this.internalValue.push(item);
      this.$emit("change", this.internalValue);
    },
    deselect: function deselect(item) {
      this.internalValue.splice(this.internalValue.map(function (x) {
        return x.value;
      }).indexOf(item.value), 1);
      this.$emit("change", this.internalValue);
    },
    selectAll: function selectAll() {
      this.internalValue = this.items.slice();
      this.$emit("change", this.internalValue);
    },
    deselectAll: function deselectAll() {
      this.internalValue = [];
      this.$emit("change", this.internalValue);
    }
  },
  computed: {
    computedItems: function computedItems() {
      var mappedInternals = this.internalValue.map(function (x) {
        return x.value;
      });
      return this.items.filter(function (x) {
        return mappedInternals.indexOf(x.value) == -1;
      });
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
const __vue_script__ = MenuMultiSelect;

/* template */
var __vue_render__ = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c(
    "menu-container",
    [
      _c(
        "multi-menu",
        { attrs: { height: _vm.height } },
        _vm._l(_vm.computedItems, function(item, index) {
          return _c(
            "menu-item",
            {
              key: "selectable" + index,
              attrs: { tabindex: "0", role: "button" },
              on: {
                click: function($event) {
                  return _vm.select(item)
                },
                keyup: [
                  function($event) {
                    if (
                      !$event.type.indexOf("key") &&
                      _vm._k($event.keyCode, "enter", 13, $event.key, "Enter")
                    ) {
                      return null
                    }
                    return _vm.select(item)
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
                    return _vm.select(item)
                  }
                ]
              }
            },
            [
              _c("span"),
              _vm._v(_vm._s(item.display) + "\n      "),
              _c("badge", { attrs: { flavor: _vm.flavor } }, [_vm._v("❯")])
            ],
            1
          )
        }),
        1
      ),
      _vm._v(" "),
      _c(
        "menu-buttons",
        [
          _c(
            "n-button",
            {
              staticClass: "menu-multi-select-flipped",
              attrs: { flavor: _vm.flavor, small: true },
              on: {
                click: function($event) {
                  return _vm.selectAll()
                }
              }
            },
            [_vm._v("❮❮")]
          ),
          _vm._v(" "),
          _c(
            "n-button",
            {
              attrs: { flavor: _vm.flavor, small: true },
              on: {
                click: function($event) {
                  return _vm.deselectAll()
                }
              }
            },
            [_vm._v("❮❮")]
          )
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "multi-menu",
        { attrs: { height: _vm.height } },
        _vm._l(_vm.internalValue, function(item, index) {
          return _c(
            "menu-item",
            {
              key: "selected" + index,
              attrs: { role: "button", tabindex: "0" },
              on: {
                click: function($event) {
                  return _vm.deselect(item)
                },
                keyup: [
                  function($event) {
                    if (
                      !$event.type.indexOf("key") &&
                      _vm._k($event.keyCode, "enter", 13, $event.key, "Enter")
                    ) {
                      return null
                    }
                    return _vm.deselect(item)
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
                    return _vm.deselect(item)
                  }
                ]
              }
            },
            [
              _c(
                "badge",
                {
                  staticClass: "menu-multi-select-flipped",
                  attrs: { flavor: _vm.flavor }
                },
                [_vm._v("❯")]
              ),
              _vm._v(_vm._s(item.display) + " "),
              _c("span")
            ],
            1
          )
        }),
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
    inject("data-v-c4e42bf4_0", { source: "\n.menu-multi-select-flipped {\r\n  transform: rotate(180deg);\n}\r\n", map: {"version":3,"sources":["C:\\Users\\pedro\\Documents\\Personal Projects\\GitHub\\storybook\\src\\components\\MenuMultiSelect\\src\\MenuMultiSelect.vue"],"names":[],"mappings":";AAqLA;EACA,yBAAA;AACA","file":"MenuMultiSelect.vue","sourcesContent":["<template>\r\n  <menu-container>\r\n    <multi-menu :height=\"height\">\r\n      <menu-item\r\n        tabindex=\"0\"\r\n        role=\"button\"\r\n        v-for=\"(item, index) in computedItems\"\r\n        @click=\"select(item)\"\r\n        @keyup.enter=\"select(item)\"\r\n        @keyup.space=\"select(item)\"\r\n        :key=\"`selectable${index}`\"\r\n        ><span></span>{{ item.display }}\r\n        <badge :flavor=\"flavor\">&#x276F;</badge>\r\n      </menu-item>\r\n    </multi-menu>\r\n    <menu-buttons>\r\n      <n-button\r\n        @click=\"selectAll()\"\r\n        :flavor=\"flavor\"\r\n        :small=\"true\"\r\n        class=\"menu-multi-select-flipped\"\r\n        >&#10094;&#10094;</n-button\r\n      >\r\n      <n-button @click=\"deselectAll()\" :flavor=\"flavor\" :small=\"true\"\r\n        >&#10094;&#10094;</n-button\r\n      >\r\n    </menu-buttons>\r\n    <multi-menu :height=\"height\">\r\n      <menu-item\r\n        role=\"button\"\r\n        tabindex=\"0\"\r\n        @click=\"deselect(item)\"\r\n        @keyup.enter=\"deselect(item)\"\r\n        @keyup.space=\"deselect(item)\"\r\n        v-for=\"(item, index) in internalValue\"\r\n        :key=\"`selected${index}`\"\r\n        ><badge class=\"menu-multi-select-flipped\" :flavor=\"flavor\"\r\n          >&#x276F;</badge\r\n        >{{ item.display }} <span></span\r\n      ></menu-item>\r\n    </multi-menu>\r\n  </menu-container>\r\n</template>\r\n\r\n<script>\r\nimport styled from \"vue-styled-components\";\r\nimport Theme from \"@IntusFacultas/design-system\";\r\nimport Badge from \"@IntusFacultas/badge\";\r\nimport { NButton } from \"@IntusFacultas/button\";\r\nconst props = {\r\n  flavor: String,\r\n  height: String,\r\n  defaultTheme: {\r\n    type: Object,\r\n    default: function() {\r\n      return Theme;\r\n    }\r\n  }\r\n};\r\nconst MenuButtons = styled.div`\r\n  display: flex;\r\n  flex-direction: column;\r\n\r\n  justify-content: center;\r\n  margin: 16px 5px;\r\n  padding: 5px 0px;\r\n  & button {\r\n    margin: 5px 0px;\r\n  }\r\n`;\r\nconst MenuContainer = styled.div`\r\n  display: flex;\r\n  justify-content: space-between;\r\n  & * {\r\n    font-family: \"Open Sans Regular\", -apple-system, BlinkMacSystemFont,\r\n      \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif,\r\n      \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\";\r\n  }\r\n  padding: 10px 10px;\r\n`;\r\nconst MultiMenu = styled(\"ul\", props)`\r\n  width: 50%;\r\n  height: ${props => props.height};\r\n  overflow-y: auto;\r\n  border: 1px solid #dcdcdc;\r\n  border-radius: 4px;\r\n  padding: 5px 10px;\r\n  list-style-type: none;\r\n  background-color: white;\r\n`;\r\nconst MenuItem = styled.li`\r\n  color: #222;\r\n  display: flex;\r\n  user-select: none;\r\n  justify-content: space-between;\r\n  padding: 2px 5px;\r\n  transition: color 0.1s ease-in-out, background-color 0.1s ease-in-out,\r\n    border-color 0.1s ease-in-out, box-shadow 0.1s ease-in-out;\r\n  cursor: pointer;\r\n  &:hover {\r\n    background-color: #fafafa;\r\n  }\r\n`;\r\nexport const MenuMultiSelect = {\r\n  components: {\r\n    MenuContainer,\r\n    MultiMenu,\r\n    MenuItem,\r\n    Badge,\r\n    MenuButtons,\r\n    NButton\r\n  },\r\n  data() {\r\n    return {\r\n      internalValue: []\r\n    };\r\n  },\r\n  watch: {\r\n    value(newVal) {\r\n      this.internalValue = newVal;\r\n    }\r\n  },\r\n  props: {\r\n    flavor: {\r\n      type: String,\r\n      default: \"\"\r\n    },\r\n    value: {\r\n      type: Array,\r\n      default() {\r\n        return [];\r\n      }\r\n    },\r\n    height: {\r\n      type: String,\r\n      default() {\r\n        return \"100px\";\r\n      }\r\n    },\r\n    items: {\r\n      type: Array,\r\n      default() {\r\n        return [];\r\n      }\r\n    }\r\n  },\r\n  mounted() {\r\n    this.internalValue = this.value;\r\n  },\r\n  methods: {\r\n    select(item) {\r\n      this.internalValue.push(item);\r\n      this.$emit(\"change\", this.internalValue);\r\n    },\r\n    deselect(item) {\r\n      this.internalValue.splice(\r\n        this.internalValue.map(x => x.value).indexOf(item.value),\r\n        1\r\n      );\r\n      this.$emit(\"change\", this.internalValue);\r\n    },\r\n    selectAll() {\r\n      this.internalValue = this.items.slice();\r\n      this.$emit(\"change\", this.internalValue);\r\n    },\r\n    deselectAll() {\r\n      this.internalValue = [];\r\n      this.$emit(\"change\", this.internalValue);\r\n    }\r\n  },\r\n  computed: {\r\n    computedItems() {\r\n      let mappedInternals = this.internalValue.map(x => x.value);\r\n      return this.items.filter(x => mappedInternals.indexOf(x.value) == -1);\r\n    }\r\n  }\r\n};\r\nexport default MenuMultiSelect;\r\n</script>\r\n\r\n<style>\r\n.menu-multi-select-flipped {\r\n  transform: rotate(180deg);\r\n}\r\n</style>\r\n"]}, media: undefined });

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

var install = function installMenuMultiSelect(Vue) {
  if (install.installed) return;
  install.installed = true;
  Vue.component("MenuMultiSelect", __vue_component__);
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
//# sourceMappingURL=MenuMultiSelect.esm.js.map
