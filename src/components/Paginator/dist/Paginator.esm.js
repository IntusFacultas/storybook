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
  var data = _taggedTemplateLiteral(["\n  ", "\n  ", "\n  padding: 0.5rem 0.75rem;\n  border-width: 1px;\n  border-style: solid;\n  min-height: 39px;\n  display: block;\n  font-weight: bold;\n  font-size: 16px;\n  cursor: pointer;\n  transition: color 0.1s ease-in-out, background-color 0.1s ease-in-out,\n    border-color 0.1s ease-in-out, box-shadow 0.1s ease-in-out;\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n  ", "\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  padding-left: 0px;\n  display: flex;\n  list-style: none;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  & button {\n    font-family: \"Roboto\", sans-serif;\n    background-color: ", ";\n    color: ", ";\n    border-color: ", ";\n  }\n  & button:focus {\n    outline: none;\n    box-shadow: 0 0 0 0.2rem\n      ", ";\n    color: ", ";\n  }\n  & button:hover {\n    background-color: ", ";\n    color: ", ";\n    border-color: ", ";\n  }\n  & * {\n    -webkit-touch-callout: none; /* iOS Safari */\n    -webkit-user-select: none; /* Safari */\n    -khtml-user-select: none; /* Konqueror HTML */\n    -moz-user-select: none; /* Old versions of Firefox */\n    -ms-user-select: none; /* Internet Explorer/Edge */\n    user-select: none;\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}
var props = {
  flavor: String,
  active: Boolean,
  disabled: Boolean,
  defaultTheme: {
    type: Object,
    default: function _default() {
      return Theme;
    }
  }
};
var PaginationContainer = styled("nav", props)(_templateObject(), function (props) {
  return props.theme && props.theme[props.flavor] ? props.theme[props.flavor].background.color : props.defaultTheme[props.flavor] ? props.defaultTheme[props.flavor].background.color : "#fff";
}, function (props) {
  return props.theme && props.theme[props.flavor] ? props.theme[props.flavor].color.color : props.defaultTheme[props.flavor] ? props.defaultTheme[props.flavor].color.color : "#222";
}, function (props) {
  return props.theme && props.theme[props.flavor] ? props.theme[props.flavor].border.color : props.defaultTheme[props.flavor] ? props.defaultTheme[props.flavor].border.color : "#d9d9d9";
}, function (props) {
  return props.theme && props.theme[props.flavor] ? props.theme[props.flavor].background.color + "80" : props.defaultTheme[props.flavor] && props.defaultTheme[props.flavor].background.color ? props.defaultTheme[props.flavor].background.color + "80" : "#ddcccc80";
}, function (props) {
  return props.theme && props.theme[props.flavor] ? props.theme[props.flavor].color.focus : props.defaultTheme[props.flavor] && props.defaultTheme[props.flavor].color.focus ? props.defaultTheme[props.flavor].color.focus : "#000";
}, function (props) {
  return props.theme && props.theme[props.flavor] ? props.theme[props.flavor].background.hover : props.defaultTheme[props.flavor] ? props.defaultTheme[props.flavor].background.hover : "#d5d5d5";
}, function (props) {
  return props.theme && props.theme[props.flavor] ? props.theme[props.flavor].color.hover : props.defaultTheme[props.flavor] ? props.defaultTheme[props.flavor].color.hover : "#222";
}, function (props) {
  return props.theme && props.theme[props.flavor] ? props.theme[props.flavor].border.hover : props.defaultTheme[props.flavor] ? props.defaultTheme[props.flavor].border.hover : "#d5d5d5";
});
var PaginationList = styled("ul", props)(_templateObject2());
var PaginationItem = styled("li", props)(_templateObject3(), function (props) {
  return props.active ? "\n    background-color: rgba(0,0,0, .15)\n  " : "";
});
var PaginationButton = styled("button", props)(_templateObject4(), function (props) {
  return props.disabled ? "\n        opacity: 0.9;\n        cursor: not-allowed;\n        pointer-events: none;\n    " : "";
}, function (props) {
  return props.active ? "\n        pointer-events: none;\n        border-bottom-width: 2px;\n        background-color: ".concat(props.theme && props.theme[props.flavor] ? props.theme[props.flavor].background.hover : props.defaultTheme[props.flavor] ? props.defaultTheme[props.flavor].background.hover : "#e8e8e8", " !important;\n        color: ").concat(props.theme && props.theme[props.flavor] ? props.theme[props.flavor].color.hover : props.defaultTheme[props.flavor] ? props.defaultTheme[props.flavor].color.hover : "#222", " !important;\n        border-color: ").concat(props.theme && props.theme[props.flavor] ? props.theme[props.flavor].border.hover : props.defaultTheme[props.flavor] ? props.defaultTheme[props.flavor].border.hover : "#d5d5d5", " !important;\n    ") : "";
});
var Paginator = {
  components: {
    PaginationContainer: PaginationContainer,
    PaginationList: PaginationList,
    PaginationItem: PaginationItem,
    PaginationButton: PaginationButton
  },
  data: function data() {
    return {
      pages: [],
      leftFence: -1,
      rightFence: -1
    };
  },
  mounted: function mounted() {
    for (var page = 1; page < this.pageCount + 1; page++) {
      this.pages.push(page);
    }
  },
  props: {
    flavor: {
      type: String,
      default: ""
    },
    showFirstLast: {
      type: Boolean,
      default: false
    },
    currentPage: {
      type: Number,
      required: 1
    },
    pageCount: {
      type: Number,
      required: true
    },
    marginPages: {
      type: Number,
      default: 1
    },
    pageRange: {
      type: Number,
      default: 3
    }
  },
  methods: {
    step: function step(s) {
      if (this.currentPage + s < 1 || this.currentPage + s > this.pageCount) {
        return;
      }

      this.$emit("select", this.currentPage + s);
    },
    select: function select(page) {
      this.$emit("select", page);
    }
  },
  watch: {
    pageCount: function pageCount() {
      this.pages = [];

      for (var page = 1; page < this.pageCount + 1; page++) {
        this.pages.push(page);
      }
    }
  },
  computed: {
    slide: function slide() {
      var radius = Math.floor(this.pageRange / 2);
      var pageIndex = this.currentPage - 1;
      var bottom = pageIndex - radius;
      var top = pageIndex + radius + 1;

      if (bottom < 0) {
        top += Math.abs(bottom);
        bottom = 0;
      }

      if (top > this.pageCount) {
        bottom -= Math.abs(top - this.pageCount);
        top = this.pageCount;
      }

      bottom = bottom >= 0 ? bottom : 0;
      top = top <= this.pageCount ? top : this.pageCount;
      this.leftFence = bottom;
      this.rightFence = top;
      return this.pages.slice(this.leftFence, this.rightFence);
    },
    leftMargin: function leftMargin() {
      if (this.leftFence < this.marginPages) {
        return this.pages.slice(0, this.leftFence);
      }

      return this.pages.slice(0, this.marginPages);
    },
    rightMargin: function rightMargin() {
      if (this.rightFence > this.pageCount - this.marginPages) {
        return this.pages.slice(this.rightFence, this.pageCount);
      }

      return this.pages.slice(this.pageCount - this.marginPages, this.pageCount);
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
const __vue_script__ = Paginator;

/* template */
var __vue_render__ = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c(
    "pagination-container",
    { attrs: { "aria-label": "Page navigation", flavor: _vm.flavor } },
    [
      _c(
        "pagination-list",
        [
          _vm.showFirstLast
            ? _c(
                "pagination-item",
                [
                  _c(
                    "pagination-button",
                    {
                      on: {
                        click: function($event) {
                          return _vm.select(1)
                        }
                      }
                    },
                    [_vm._v("First")]
                  )
                ],
                1
              )
            : _vm._e(),
          _vm._v(" "),
          _c(
            "pagination-item",
            [
              _c(
                "pagination-button",
                {
                  on: {
                    click: function($event) {
                      return _vm.step(-1)
                    }
                  }
                },
                [_vm._v("❮")]
              )
            ],
            1
          ),
          _vm._v(" "),
          _vm._l(_vm.leftMargin, function(page, index) {
            return _c(
              "pagination-item",
              { key: "left" + index },
              [
                _c(
                  "pagination-button",
                  {
                    on: {
                      click: function($event) {
                        return _vm.select(page)
                      }
                    }
                  },
                  [_vm._v(_vm._s(page))]
                )
              ],
              1
            )
          }),
          _vm._v(" "),
          _vm.leftMargin.length == _vm.marginPages
            ? _c(
                "pagination-item",
                [
                  _c("pagination-button", { attrs: { disabled: true } }, [
                    _vm._v("...")
                  ])
                ],
                1
              )
            : _vm._e(),
          _vm._v(" "),
          _vm._l(_vm.slide, function(page, index) {
            return _c(
              "pagination-item",
              {
                key: "slide" + index,
                attrs: { active: _vm.currentPage == page }
              },
              [
                _c(
                  "pagination-button",
                  {
                    attrs: {
                      flavor: _vm.flavor,
                      active: _vm.currentPage == page
                    },
                    on: {
                      click: function($event) {
                        return _vm.select(page)
                      }
                    }
                  },
                  [_vm._v(_vm._s(page))]
                )
              ],
              1
            )
          }),
          _vm._v(" "),
          _vm.rightMargin.length == _vm.marginPages
            ? _c(
                "pagination-item",
                [
                  _c("pagination-button", { attrs: { disabled: true } }, [
                    _vm._v("...")
                  ])
                ],
                1
              )
            : _vm._e(),
          _vm._v(" "),
          _vm._l(_vm.rightMargin, function(page, index) {
            return _c(
              "pagination-item",
              { key: "right" + index },
              [
                _c(
                  "pagination-button",
                  {
                    on: {
                      click: function($event) {
                        return _vm.select(page)
                      }
                    }
                  },
                  [_vm._v(_vm._s(page))]
                )
              ],
              1
            )
          }),
          _vm._v(" "),
          _c(
            "pagination-item",
            [
              _c(
                "pagination-button",
                {
                  on: {
                    click: function($event) {
                      return _vm.step(1)
                    }
                  }
                },
                [_vm._v("❯")]
              )
            ],
            1
          ),
          _vm._v(" "),
          _vm.showFirstLast
            ? _c(
                "pagination-item",
                [
                  _c(
                    "pagination-button",
                    {
                      on: {
                        click: function($event) {
                          return _vm.select(_vm.pageCount)
                        }
                      }
                    },
                    [_vm._v("Last")]
                  )
                ],
                1
              )
            : _vm._e()
        ],
        2
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
    inject("data-v-ad8c718c_0", { source: "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", map: {"version":3,"sources":[],"names":[],"mappings":"","file":"Paginator.vue"}, media: undefined });

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

var install = function installPaginator(Vue) {
  if (install.installed) return;
  install.installed = true;
  Vue.component("Paginator", __vue_component__);
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
export { __vue_component__ as Paginator };
//# sourceMappingURL=Paginator.esm.js.map
