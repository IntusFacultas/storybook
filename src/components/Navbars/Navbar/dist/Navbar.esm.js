import styled from 'vue-styled-components';
import Theme from '@IntusFacultas/design-system';
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

function _templateObject9() {
  var data = _taggedTemplateLiteral(["\n  background-image: linear-gradient(\n    to top right,\n    transparent 50%,\n    ", "\n      50%\n  );\n  width: 0.5rem;\n  height: 0.5rem;\n  transform: rotate(45deg);\n  margin-bottom: 1px;\n  transition: 0.3s all;\n  display: inline-block;\n"]);

  _templateObject9 = function _templateObject9() {
    return data;
  };

  return data;
}

function _templateObject8() {
  var data = _taggedTemplateLiteral(["\n  list-style: none;\n  margin-top: 0px;\n  padding: 0px;\n  margin-bottom: 0px;\n  text-align: left;\n  transition: 0.3s max-height;\n  margin-left: -8px;\n  margin-right: -44px;\n  ", "\n  margin-top: 12px;\n  max-height: 0px;\n  overflow-y: hidden;\n  background-color: ", ";\n  & li {\n    color: ", ";\n    padding: 0.5rem 1.5rem;\n  }\n  border: 1px solid\n    ", ";\n  ", "\n  border-radius: 3px;\n"]);

  _templateObject8 = function _templateObject8() {
    return data;
  };

  return data;
}

function _templateObject7() {
  var data = _taggedTemplateLiteral(["\n  cursor: pointer;\n"]);

  _templateObject7 = function _templateObject7() {
    return data;
  };

  return data;
}

function _templateObject6() {
  var data = _taggedTemplateLiteral(["\n  ", "\n  min-width: 130px;\n  & * {\n  }\n"]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n  flex: 1;\n  justify-content: space-between;\n  padding-right: 10px;\n  ", ";\n  ", "\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n  list-style: none;\n  margin: 0;\n  transition: 0.3s max-height;\n  padding-left: 0px !important;\n  ", ";\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n  font-weight: bold;\n  font-size: 24px;\n  padding: 0.5rem;\n  padding-left: 0rem;\n  & a {\n    text-decoration: none;\n  }\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  white-space: nowrap;\n  padding: 1rem 0.5rem 0px 0.5rem;\n  height: ", "\n    & * {\n    text-decoration: none;\n  }\n  ", ";\n  ", "\n  &:hover {\n    background-color: ", ";\n    color: ", ";\n  }\n  &:disabled {\n    pointer-events: none;\n  }\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  ", "\n  z-index: 2;\n  & * {\n    z-index: 2;\n  }\n  & * {\n    -webkit-touch-callout: none; /* iOS Safari */\n    -webkit-user-select: none; /* Safari */\n    -khtml-user-select: none; /* Konqueror HTML */\n    -moz-user-select: none; /* Old versions of Firefox */\n    -ms-user-select: none; /* Internet Explorer/Edge */\n    user-select: none;\n  }\n  background-color: ", ";\n  & * {\n    color: ", ";\n  }\n  font-family: \"Open Sans Regular\", -apple-system, BlinkMacSystemFont,\n    \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif, \"Apple Color Emoji\",\n    \"Segoe UI Emoji\", \"Segoe UI Symbol\";\n  font-size: 16px;\n  display: flex;\n  justify-content: space-between;\n  flex-wrap: wrap;\n  padding: 0rem 0.5rem;\n  border: none;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}
var props = {
  flavor: String,
  disabled: Boolean,
  open: Boolean,
  active: Boolean,
  navHeight: Number,
  defaultTheme: {
    type: Object,
    default: function _default() {
      return Theme;
    }
  },
  collapsed: Boolean,
  breakpoint: {
    type: Number,
    default: 576
  },
  fixed: Boolean
};
var NavbarContainer = styled("nav", props)(_templateObject(), function (props) {
  return props.fixed ? "\n    position: fixed;\n    top: 0px;\n    right: 0px;\n    left: 0px;\n  " : "";
}, function (props) {
  return props.theme && props.theme[props.flavor] ? props.theme[props.flavor].background.color : props.defaultTheme[props.flavor] ? props.defaultTheme[props.flavor].background.color : "#f2f2f2";
}, function (props) {
  return props.theme && props.theme[props.flavor] ? props.theme[props.flavor].color.color : props.defaultTheme[props.flavor] ? props.defaultTheme[props.flavor].color.color : "#222";
});
var NavbarItem = styled("li", props)(_templateObject2(), function (props) {
  return props.collapsed ? "auto" : "calc(".concat(props.navHeight, "px - 1rem);");
}, function (props) {
  return props.disabled ? "& * {\n    pointer-events: none;\n    color: rgba(0, 0, 0, 0.3) !important;\n  }" : "";
}, function (props) {
  return props.active ? "\n  background-color: ".concat(props.theme && props.theme[props.flavor] ? props.theme[props.flavor].background.focus : props.defaultTheme[props.flavor] ? props.defaultTheme[props.flavor].background.focus : "#d7d7d7", ";\n  ") : "";
}, function (props) {
  return props.theme && props.theme[props.flavor] ? props.theme[props.flavor].background.hover : props.defaultTheme[props.flavor] ? props.defaultTheme[props.flavor].background.hover : "#d7d7d7";
}, function (props) {
  return props.theme && props.theme[props.flavor] ? props.theme[props.flavor].color.hover : props.defaultTheme[props.flavor] ? props.defaultTheme[props.flavor].color.hover : "#222";
});
var NavbarTitle = styled.span(_templateObject3());
var NavbarContent = styled("ul", props)(_templateObject4(), function (props) {
  return props.collapsed ? "flex-direction: column; max-height: 0px; overflow: hidden;" : "";
});
var NavbarContentContainer = styled("div", props)(_templateObject5(), function (props) {
  return props.collapsed ? "flex-direction: column; padding-bottom: 5px; flex-basis: 100%; flex-grow: 1; padding-right: 0px;" : "";
}, function (props) {
  return props.collapsed && !props.open ? "max-width: 0px;" : "";
});
var NavbarDropdownContainer = styled("div", props)(_templateObject6(), function (props) {
  return props.collapsed ? "text-align: left" : "text-align: center;";
});
var NavbarDropdownLabel = styled.label(_templateObject7());
var NavbarDropdown = styled("ul", props)(_templateObject8(), function (props) {
  return props.collapsed ? "margin-right: -8px; padding-left: 20px" : "";
}, function (props) {
  return props.theme && props.theme[props.flavor] ? props.theme[props.flavor].background.color : props.defaultTheme[props.flavor] ? props.defaultTheme[props.flavor].background.color : "#f2f2f2";
}, function (props) {
  return props.theme && props.theme[props.flavor] ? props.theme[props.flavor].color.color : props.defaultTheme[props.flavor] ? props.defaultTheme[props.flavor].color.color : "#222";
}, function (props) {
  return props.theme && props.theme[props.flavor] ? props.theme[props.flavor].background.hover : props.defaultTheme[props.flavor] ? props.defaultTheme[props.flavor].background.hover : "#222";
}, function (props) {
  return !props.open ? "border: none; " : "padding: .25rem 0";
});
var NavbarDropdownCarat = styled("div", props)(_templateObject9(), function (props) {
  return props.disabled ? "rgba(0, 0, 0, 0.3)" : props.theme && props.theme[props.flavor] ? props.theme[props.flavor].color.color : props.defaultTheme[props.flavor] ? props.defaultTheme[props.flavor].color.color : "#222";
});
var VueNavbarDropdown = {
  components: {
    NavbarDropdownContainer: NavbarDropdownContainer,
    NavbarDropdownLabel: NavbarDropdownLabel,
    NavbarDropdown: NavbarDropdown,
    NavbarDropdownCarat: NavbarDropdownCarat,
    NavbarItem: NavbarItem
  },
  data: function data() {
    return {
      toggled: false
    };
  },
  props: {
    icon: {
      type: String,
      default: ""
    },
    text: {
      type: String,
      default: ""
    },
    disabled: {
      type: Boolean,
      default: false
    },
    parent: {
      type: Object,
      required: true
    },
    flavor: {
      type: String,
      default: ""
    },
    items: {
      type: Array,
      default: function _default() {
        return [];
      }
    }
  },
  mounted: function mounted() {
    window.addEventListener("click", this.checkOffclick);
  },
  beforeDestroy: function beforeDestroy() {
    window.removeEventListener("click", this.checkOffclick);
  },
  computed: {
    collapsed: function collapsed() {
      return this.parent.collapsed;
    },
    computedDropdownClass: function computedDropdownClass() {
      if (this.toggled) {
        return ["navbar-open-carat"];
      }

      return [];
    }
  },
  methods: {
    checkOffclick: function checkOffclick($e) {
      /**
       * Pulled from: https://stackoverflow.com/questions/17773852/check-if-div-is-descendant-of-another
       */
      var self = this;

      function isChild(obj, parentObj) {
        if (obj.isEqualNode(parentObj)) return true;

        while (obj = obj.parentNode) {
          if (obj.isEqualNode(parentObj)) return true;
        }

        return false;
      }

      if (!isChild($e.target, this.$el)) {
        self.toggled = false;
        self.$forceUpdate();
      }
    },
    doNotClose: function doNotClose($e) {
      $e.stopPropagation();
    },
    selectInternalA: function selectInternalA($e) {
      if ($e.target.children[0]) $e.target.children[0].click();
      this.$forceUpdate();
    },
    toggleDropdown: function toggleDropdown($e) {
      this.toggled = !this.toggled;
      $e.preventDefault();
    }
  },
  template: "\n    <navbar-dropdown-container :collapsed=\"collapsed\">\n      <a\n        href=\"#\"\n        role=\"button\"\n        @click=\"toggleDropdown\"\n        @keyup.space=\"toggleDropdown\"\n        @keyup.enter='toggleDropdown'\n      >\n        <div v-html=\"icon\"></div>\n        {{text}}\n        <navbar-dropdown-carat\n          :flavor=\"flavor\"\n          :class=\"computedDropdownClass\"\n          :disabled=\"disabled\"\n        ></navbar-dropdown-carat>\n      </a>\n      <navbar-dropdown\n        :flavor=\"flavor\"\n        @click=\"doNotClose\"\n        :collapsed=\"collapsed\"\n        :open=\"toggled\"\n        :style=\"{'max-height': toggled ? (items.length * 60) + 'px' : '0px'}\"\n\n      >\n        <navbar-item\n          v-for=\"(option, optionIndex) in items\"\n          :key=\"optionIndex\"\n          @click=\"selectInternalA\"\n          :collapsed=\"collapsed\"\n          :disabled=\"option.disabled\"\n          :active=\"option.active\"\n          :flavor=\"flavor\"\n        >\n          <a\n            v-if=\"option.type == 'item'\"\n            :href=\"option.disabled ? '#' : option.url\"\n          >{{option.text}}</a>\n        </navbar-item>\n      </navbar-dropdown>\n    </navbar-dropdown-container>\n  "
};
var Navbar = {
  components: {
    NavbarContainer: NavbarContainer,
    NavbarItem: NavbarItem,
    NavbarTitle: NavbarTitle,
    NavbarContentContainer: NavbarContentContainer,
    NavbarContent: NavbarContent,
    VueNavbarDropdown: VueNavbarDropdown,
    NButton: NButton
  },
  data: function data() {
    return {
      open: false,
      contentWidth: 0,
      containerWidth: 0,
      navHeight: 0,
      titleWidth: 0,
      LEFT_CONTENT_INDICATOR: "L",
      CENTER_CONTENT_INDICATOR: "C",
      RIGHT_CONTENT_INDICATOR: "R"
    };
  },
  mounted: function mounted() {
    this.calculateDimensions();
    window.addEventListener("resize", this.debounce(this.calculateDimensions, 10, true), {
      passive: true
    });
  },
  beforeDestroy: function beforeDestroy() {
    var self = this;
    window.removeEventListener("click", self.checkOffclick);
    window.removeEventListener("resize", this.debounce(this.calculateDimensions, 10, true));
  },
  updated: function updated() {
    this.calculateDimensions();
  },
  props: {
    title: {
      type: Object,
      default: function _default() {
        return {
          text: "Brand",
          url: "#",
          html: ""
        };
      }
    },
    fixed: {
      type: Boolean,
      default: false
    },
    flavor: {
      type: String,
      default: ""
    },
    leftItems: {
      type: Array,
      default: function _default() {
        return [];
      }
    },
    centerItems: {
      type: Array,
      default: function _default() {
        return [];
      }
    },
    rightItems: {
      type: Array,
      default: function _default() {
        return [];
      }
    }
  },
  methods: {
    selectInternalA: function selectInternalA($e) {
      if ($e.target.children[0]) $e.target.children[0].click();
      this.$forceUpdate();
    },
    doNotClose: function doNotClose($e) {
      $e.stopPropagation();
    },
    debounce: function debounce(func, wait, immediate) {
      /**
       * Pulled from: https://davidwalsh.name/javascript-debounce-function
       */
      var timeout;
      return function () {
        var context = this,
            args = arguments;

        var later = function later() {
          timeout = null;
          if (!immediate) func.apply(context, args);
        };

        var callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);

        try {
          if (callNow) func.apply(context, args);
        } catch (_unused) {// pass
        }
      };
    },
    calculateDimensions: function calculateDimensions() {
      if (this.$refs.content && !this.collapsed) this.contentWidth = this.$refs.leftContent.$el.clientWidth + this.$refs.middleContent.$el.clientWidth + this.$refs.rightContent.$el.clientWidth;

      if (this.$refs.container) {
        if (!this.open) {
          this.navHeight = this.$refs.container.$el.clientHeight;
        }

        this.containerWidth = this.$refs.container.$el.clientWidth;
      }

      if (this.$refs.title) {
        this.titleWidth = this.$refs.title.$el.clientWidth;
      }
    },
    computedStyle: function computedStyle(length) {
      var sizeOfUnit = 50; // height of the nav elements

      for (var dropdown in this.dropdowns) {
        if (this.dropdowns[dropdown]) {
          if (dropdown[0] == this.LEFT_CONTENT_INDICATOR) {
            length += this.leftItems[dropdown.substring(1, dropdown.length)].items.length;
          } else if (dropdown[0] == this.CENTER_CONTENT_INDICATOR) {
            length += this.centerItems[dropdown.substring(1, dropdown.length)].items.length;
          } else if (dropdown[0] == this.RIGHT_CONTENT_INDICATOR) {
            length += this.rightItems[dropdown.substring(1, dropdown.length)].items.length;
          }
        }
      }

      return {
        "max-height": "".concat(this.open ? sizeOfUnit * length : 0, "px")
      };
    },
    toggleAccordion: function toggleAccordion() {
      this.open = !this.open;
    }
  },
  watch: {
    collapsed: function collapsed() {
      this.open = false;

      for (var dropdown in this.dropdowns) {
        this.dropdowns[dropdown] = false;
      }
    }
  },
  computed: {
    instance: function instance() {
      return this;
    },
    collapsed: function collapsed() {
      return this.contentWidth >= this.collapseCutOff;
    },
    computedClass: function computedClass() {
      if (this.open) {
        return [];
      }

      return ["closed"];
    },
    collapseCutOff: function collapseCutOff() {
      var additionalPadding = 28;
      return this.containerWidth - this.titleWidth - additionalPadding;
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
const __vue_script__ = Navbar;

/* template */
var __vue_render__ = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c(
    "navbar-container",
    {
      ref: "container",
      attrs: { flavor: _vm.flavor, fixed: _vm.fixed, collapsed: _vm.collapsed }
    },
    [
      _c("navbar-title", { ref: "title", attrs: { tabindex: "1" } }, [
        _c("div", {
          staticClass: "navbar-brand",
          domProps: { innerHTML: _vm._s(_vm.title.html) }
        }),
        _vm._v(" "),
        _c("a", { attrs: { href: _vm.title.url ? _vm.title.url : "#" } }, [
          _vm._v(_vm._s(_vm.title.text))
        ])
      ]),
      _vm._v(" "),
      _c(
        "n-button",
        {
          directives: [
            {
              name: "show",
              rawName: "v-show",
              value: _vm.collapsed,
              expression: "collapsed"
            }
          ],
          ref: "hamburger",
          staticClass: "nav-button",
          attrs: { tabindex: "1", flavor: _vm.flavor },
          on: { click: _vm.toggleAccordion }
        },
        [_vm._v("☰")]
      ),
      _vm._v(" "),
      _c(
        "navbar-content-container",
        { ref: "content", attrs: { collapsed: _vm.collapsed, open: _vm.open } },
        [
          _c(
            "navbar-content",
            {
              ref: "leftContent",
              style: _vm.computedStyle(_vm.leftItems.length),
              attrs: { collapsed: _vm.collapsed }
            },
            _vm._l(_vm.leftItems, function(item, index) {
              return _c(
                "navbar-item",
                {
                  key: index + "-left",
                  attrs: {
                    collapsed: _vm.collapsed,
                    "nav-height": _vm.navHeight,
                    disabled: item.disabled,
                    active: item.active,
                    flavor: _vm.flavor
                  }
                },
                [
                  item.type == "item"
                    ? _c(
                        "a",
                        { attrs: { href: item.disabled ? "#" : item.url } },
                        [_vm._v(_vm._s(item.text))]
                      )
                    : _c("vue-navbar-dropdown", {
                        attrs: {
                          parent: _vm.instance,
                          collapsed: _vm.collapsed,
                          icon: item.icon,
                          text: item.text,
                          items: item.items,
                          disabled: item.disabled,
                          flavor: _vm.flavor
                        }
                      })
                ],
                1
              )
            }),
            1
          ),
          _vm._v(" "),
          _c(
            "navbar-content",
            {
              ref: "middleContent",
              style: _vm.computedStyle(_vm.centerItems.length),
              attrs: { collapsed: _vm.collapsed }
            },
            _vm._l(_vm.centerItems, function(item, index) {
              return _c(
                "navbar-item",
                {
                  key: index + "-left",
                  attrs: {
                    collapsed: _vm.collapsed,
                    "nav-height": _vm.navHeight,
                    disabled: item.disabled,
                    active: item.active,
                    flavor: _vm.flavor
                  }
                },
                [
                  item.type == "item"
                    ? _c(
                        "a",
                        { attrs: { href: item.disabled ? "#" : item.url } },
                        [_vm._v(_vm._s(item.text))]
                      )
                    : _c("vue-navbar-dropdown", {
                        attrs: {
                          parent: _vm.instance,
                          collapsed: _vm.collapsed,
                          icon: item.icon,
                          text: item.text,
                          items: item.items,
                          disabled: item.disabled,
                          flavor: _vm.flavor
                        }
                      })
                ],
                1
              )
            }),
            1
          ),
          _vm._v(" "),
          _c(
            "navbar-content",
            {
              ref: "rightContent",
              style: _vm.computedStyle(_vm.rightItems.length),
              attrs: { collapsed: _vm.collapsed }
            },
            _vm._l(_vm.rightItems, function(item, index) {
              return _c(
                "navbar-item",
                {
                  key: index + "-left",
                  attrs: {
                    collapsed: _vm.collapsed,
                    "nav-height": _vm.navHeight,
                    disabled: item.disabled,
                    active: item.active,
                    flavor: _vm.flavor
                  }
                },
                [
                  item.type == "item"
                    ? _c(
                        "a",
                        { attrs: { href: item.disabled ? "#" : item.url } },
                        [_vm._v(_vm._s(item.text))]
                      )
                    : _c("vue-navbar-dropdown", {
                        attrs: {
                          parent: _vm.instance,
                          collapsed: _vm.collapsed,
                          icon: item.icon,
                          text: item.text,
                          items: item.items,
                          disabled: item.disabled,
                          flavor: _vm.flavor
                        }
                      })
                ],
                1
              )
            }),
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
    inject("data-v-ac56de10_0", { source: "\n.navbar-brand {\r\n  display: inline-block;\r\n  padding-right: 5px;\n}\n.navbar-open-carat {\r\n  transform: rotate(135deg) !important;\r\n  margin-bottom: 4px;\n}\n.open {\r\n  max-height: 1980px !important;\n}\n.nav-button {\r\n  height: 37px;\r\n  margin-top: 0.4rem;\r\n  position: absolute;\r\n  right: 20px;\n}\r\n", map: {"version":3,"sources":["C:\\Users\\pedro\\Documents\\Personal Projects\\GitHub\\storybook\\src\\components\\Navbars\\Navbar\\src\\Navbar.vue"],"names":[],"mappings":";AAqoBA;EACA,qBAAA;EACA,kBAAA;AACA;AACA;EACA,oCAAA;EACA,kBAAA;AACA;AACA;EACA,6BAAA;AACA;AACA;EACA,YAAA;EACA,kBAAA;EACA,kBAAA;EACA,WAAA;AACA","file":"Navbar.vue","sourcesContent":["<template>\r\n  <navbar-container\r\n    :flavor=\"flavor\"\r\n    ref=\"container\"\r\n    :fixed=\"fixed\"\r\n    :collapsed=\"collapsed\"\r\n  >\r\n    <navbar-title ref=\"title\" tabindex=\"1\">\r\n      <div v-html=\"title.html\" class=\"navbar-brand\"></div>\r\n      <a :href=\"title.url ? title.url : '#'\">{{ title.text }}</a>\r\n    </navbar-title>\r\n    <n-button\r\n      tabindex=\"1\"\r\n      class=\"nav-button\"\r\n      v-show=\"collapsed\"\r\n      :flavor=\"flavor\"\r\n      @click=\"toggleAccordion\"\r\n      ref=\"hamburger\"\r\n      >&#9776;</n-button\r\n    >\r\n    <navbar-content-container :collapsed=\"collapsed\" :open=\"open\" ref=\"content\">\r\n      <navbar-content\r\n        :style=\"computedStyle(leftItems.length)\"\r\n        :collapsed=\"collapsed\"\r\n        ref=\"leftContent\"\r\n      >\r\n        <navbar-item\r\n          v-for=\"(item, index) in leftItems\"\r\n          :key=\"index + '-left'\"\r\n          :collapsed=\"collapsed\"\r\n          :nav-height=\"navHeight\"\r\n          :disabled=\"item.disabled\"\r\n          :active=\"item.active\"\r\n          :flavor=\"flavor\"\r\n        >\r\n          <a\r\n            v-if=\"item.type == 'item'\"\r\n            :href=\"item.disabled ? '#' : item.url\"\r\n            >{{ item.text }}</a\r\n          >\r\n          <vue-navbar-dropdown\r\n            v-else\r\n            :parent=\"instance\"\r\n            :collapsed=\"collapsed\"\r\n            :icon=\"item.icon\"\r\n            :text=\"item.text\"\r\n            :items=\"item.items\"\r\n            :disabled=\"item.disabled\"\r\n            :flavor=\"flavor\"\r\n          ></vue-navbar-dropdown>\r\n        </navbar-item>\r\n      </navbar-content>\r\n      <navbar-content\r\n        :style=\"computedStyle(centerItems.length)\"\r\n        :collapsed=\"collapsed\"\r\n        ref=\"middleContent\"\r\n      >\r\n        <navbar-item\r\n          v-for=\"(item, index) in centerItems\"\r\n          :key=\"index + '-left'\"\r\n          :collapsed=\"collapsed\"\r\n          :nav-height=\"navHeight\"\r\n          :disabled=\"item.disabled\"\r\n          :active=\"item.active\"\r\n          :flavor=\"flavor\"\r\n        >\r\n          <a\r\n            v-if=\"item.type == 'item'\"\r\n            :href=\"item.disabled ? '#' : item.url\"\r\n            >{{ item.text }}</a\r\n          >\r\n          <vue-navbar-dropdown\r\n            v-else\r\n            :parent=\"instance\"\r\n            :collapsed=\"collapsed\"\r\n            :icon=\"item.icon\"\r\n            :text=\"item.text\"\r\n            :items=\"item.items\"\r\n            :disabled=\"item.disabled\"\r\n            :flavor=\"flavor\"\r\n          ></vue-navbar-dropdown>\r\n        </navbar-item>\r\n      </navbar-content>\r\n      <navbar-content\r\n        :style=\"computedStyle(rightItems.length)\"\r\n        :collapsed=\"collapsed\"\r\n        ref=\"rightContent\"\r\n      >\r\n        <navbar-item\r\n          v-for=\"(item, index) in rightItems\"\r\n          :key=\"index + '-left'\"\r\n          :collapsed=\"collapsed\"\r\n          :nav-height=\"navHeight\"\r\n          :disabled=\"item.disabled\"\r\n          :active=\"item.active\"\r\n          :flavor=\"flavor\"\r\n        >\r\n          <a\r\n            v-if=\"item.type == 'item'\"\r\n            :href=\"item.disabled ? '#' : item.url\"\r\n            >{{ item.text }}</a\r\n          >\r\n          <vue-navbar-dropdown\r\n            v-else\r\n            :parent=\"instance\"\r\n            :collapsed=\"collapsed\"\r\n            :icon=\"item.icon\"\r\n            :text=\"item.text\"\r\n            :items=\"item.items\"\r\n            :disabled=\"item.disabled\"\r\n            :flavor=\"flavor\"\r\n          ></vue-navbar-dropdown>\r\n        </navbar-item>\r\n      </navbar-content>\r\n    </navbar-content-container>\r\n  </navbar-container>\r\n</template>\r\n\r\n<script>\r\nimport styled from \"vue-styled-components\";\r\nimport Theme from \"@IntusFacultas/design-system\";\r\nimport { NButton } from \"@IntusFacultas/button\";\r\nconst props = {\r\n  flavor: String,\r\n  disabled: Boolean,\r\n  open: Boolean,\r\n  active: Boolean,\r\n  navHeight: Number,\r\n  defaultTheme: {\r\n    type: Object,\r\n    default: function () {\r\n      return Theme;\r\n    },\r\n  },\r\n  collapsed: Boolean,\r\n  breakpoint: {\r\n    type: Number,\r\n    default: 576,\r\n  },\r\n  fixed: Boolean,\r\n};\r\nexport const NavbarContainer = styled(\"nav\", props)`\r\n  ${(props) =>\r\n    props.fixed\r\n      ? `\r\n    position: fixed;\r\n    top: 0px;\r\n    right: 0px;\r\n    left: 0px;\r\n  `\r\n      : \"\"}\r\n  z-index: 2;\r\n  & * {\r\n    z-index: 2;\r\n  }\r\n  & * {\r\n    -webkit-touch-callout: none; /* iOS Safari */\r\n    -webkit-user-select: none; /* Safari */\r\n    -khtml-user-select: none; /* Konqueror HTML */\r\n    -moz-user-select: none; /* Old versions of Firefox */\r\n    -ms-user-select: none; /* Internet Explorer/Edge */\r\n    user-select: none;\r\n  }\r\n  background-color: ${(props) =>\r\n    props.theme && props.theme[props.flavor]\r\n      ? props.theme[props.flavor].background.color\r\n      : props.defaultTheme[props.flavor]\r\n      ? props.defaultTheme[props.flavor].background.color\r\n      : \"#f2f2f2\"};\r\n  & * {\r\n    color: ${(props) =>\r\n      props.theme && props.theme[props.flavor]\r\n        ? props.theme[props.flavor].color.color\r\n        : props.defaultTheme[props.flavor]\r\n        ? props.defaultTheme[props.flavor].color.color\r\n        : \"#222\"};\r\n  }\r\n  font-family: \"Open Sans Regular\", -apple-system, BlinkMacSystemFont,\r\n    \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif, \"Apple Color Emoji\",\r\n    \"Segoe UI Emoji\", \"Segoe UI Symbol\";\r\n  font-size: 16px;\r\n  display: flex;\r\n  justify-content: space-between;\r\n  flex-wrap: wrap;\r\n  padding: 0rem 0.5rem;\r\n  border: none;\r\n`;\r\nexport const NavbarItem = styled(\"li\", props)`\r\n  white-space: nowrap;\r\n  padding: 1rem 0.5rem 0px 0.5rem;\r\n  height: ${(props) =>\r\n      props.collapsed ? \"auto\" : `calc(${props.navHeight}px - 1rem);`}\r\n    & * {\r\n    text-decoration: none;\r\n  }\r\n  ${(props) =>\r\n    props.disabled\r\n      ? `& * {\r\n    pointer-events: none;\r\n    color: rgba(0, 0, 0, 0.3) !important;\r\n  }`\r\n      : \"\"};\r\n  ${(props) =>\r\n    props.active\r\n      ? `\r\n  background-color: ${\r\n    props.theme && props.theme[props.flavor]\r\n      ? props.theme[props.flavor].background.focus\r\n      : props.defaultTheme[props.flavor]\r\n      ? props.defaultTheme[props.flavor].background.focus\r\n      : \"#d7d7d7\"\r\n  };\r\n  `\r\n      : \"\"}\r\n  &:hover {\r\n    background-color: ${(props) =>\r\n      props.theme && props.theme[props.flavor]\r\n        ? props.theme[props.flavor].background.hover\r\n        : props.defaultTheme[props.flavor]\r\n        ? props.defaultTheme[props.flavor].background.hover\r\n        : \"#d7d7d7\"};\r\n    color: ${(props) =>\r\n      props.theme && props.theme[props.flavor]\r\n        ? props.theme[props.flavor].color.hover\r\n        : props.defaultTheme[props.flavor]\r\n        ? props.defaultTheme[props.flavor].color.hover\r\n        : \"#222\"};\r\n  }\r\n  &:disabled {\r\n    pointer-events: none;\r\n  }\r\n`;\r\nexport const NavbarTitle = styled.span`\r\n  font-weight: bold;\r\n  font-size: 24px;\r\n  padding: 0.5rem;\r\n  padding-left: 0rem;\r\n  & a {\r\n    text-decoration: none;\r\n  }\r\n`;\r\nexport const NavbarContent = styled(\"ul\", props)`\r\n  display: flex;\r\n  list-style: none;\r\n  margin: 0;\r\n  transition: 0.3s max-height;\r\n  padding-left: 0px !important;\r\n  ${(props) =>\r\n    props.collapsed\r\n      ? `flex-direction: column; max-height: 0px; overflow: hidden;`\r\n      : \"\"};\r\n`;\r\nexport const NavbarContentContainer = styled(\"div\", props)`\r\n  display: flex;\r\n  flex: 1;\r\n  justify-content: space-between;\r\n  padding-right: 10px;\r\n  ${(props) =>\r\n    props.collapsed\r\n      ? \"flex-direction: column; padding-bottom: 5px; flex-basis: 100%; flex-grow: 1; padding-right: 0px;\"\r\n      : \"\"};\r\n  ${(props) => (props.collapsed && !props.open ? \"max-width: 0px;\" : \"\")}\r\n`;\r\nconst NavbarDropdownContainer = styled(\"div\", props)`\r\n  ${(props) => (props.collapsed ? `text-align: left` : `text-align: center;`)}\r\n  min-width: 130px;\r\n  & * {\r\n  }\r\n`;\r\nconst NavbarDropdownLabel = styled.label`\r\n  cursor: pointer;\r\n`;\r\nconst NavbarDropdown = styled(\"ul\", props)`\r\n  list-style: none;\r\n  margin-top: 0px;\r\n  padding: 0px;\r\n  margin-bottom: 0px;\r\n  text-align: left;\r\n  transition: 0.3s max-height;\r\n  margin-left: -8px;\r\n  margin-right: -44px;\r\n  ${(props) =>\r\n    props.collapsed ? `margin-right: -8px; padding-left: 20px` : \"\"}\r\n  margin-top: 12px;\r\n  max-height: 0px;\r\n  overflow-y: hidden;\r\n  background-color: ${(props) =>\r\n    props.theme && props.theme[props.flavor]\r\n      ? props.theme[props.flavor].background.color\r\n      : props.defaultTheme[props.flavor]\r\n      ? props.defaultTheme[props.flavor].background.color\r\n      : \"#f2f2f2\"};\r\n  & li {\r\n    color: ${(props) =>\r\n      props.theme && props.theme[props.flavor]\r\n        ? props.theme[props.flavor].color.color\r\n        : props.defaultTheme[props.flavor]\r\n        ? props.defaultTheme[props.flavor].color.color\r\n        : \"#222\"};\r\n    padding: 0.5rem 1.5rem;\r\n  }\r\n  border: 1px solid\r\n    ${(props) =>\r\n      props.theme && props.theme[props.flavor]\r\n        ? props.theme[props.flavor].background.hover\r\n        : props.defaultTheme[props.flavor]\r\n        ? props.defaultTheme[props.flavor].background.hover\r\n        : \"#222\"};\r\n  ${(props) => (!props.open ? `border: none; ` : \"padding: .25rem 0\")}\r\n  border-radius: 3px;\r\n`;\r\nconst NavbarDropdownCarat = styled(\"div\", props)`\r\n  background-image: linear-gradient(\r\n    to top right,\r\n    transparent 50%,\r\n    ${(props) =>\r\n        props.disabled\r\n          ? \"rgba(0, 0, 0, 0.3)\"\r\n          : props.theme && props.theme[props.flavor]\r\n          ? props.theme[props.flavor].color.color\r\n          : props.defaultTheme[props.flavor]\r\n          ? props.defaultTheme[props.flavor].color.color\r\n          : \"#222\"}\r\n      50%\r\n  );\r\n  width: 0.5rem;\r\n  height: 0.5rem;\r\n  transform: rotate(45deg);\r\n  margin-bottom: 1px;\r\n  transition: 0.3s all;\r\n  display: inline-block;\r\n`;\r\nexport const VueNavbarDropdown = {\r\n  components: {\r\n    NavbarDropdownContainer,\r\n    NavbarDropdownLabel,\r\n    NavbarDropdown,\r\n    NavbarDropdownCarat,\r\n    NavbarItem,\r\n  },\r\n  data() {\r\n    return {\r\n      toggled: false,\r\n    };\r\n  },\r\n  props: {\r\n    icon: {\r\n      type: String,\r\n      default: \"\",\r\n    },\r\n    text: {\r\n      type: String,\r\n      default: \"\",\r\n    },\r\n    disabled: {\r\n      type: Boolean,\r\n      default: false,\r\n    },\r\n    parent: {\r\n      type: Object,\r\n      required: true,\r\n    },\r\n    flavor: {\r\n      type: String,\r\n      default: \"\",\r\n    },\r\n    items: {\r\n      type: Array,\r\n      default() {\r\n        return [];\r\n      },\r\n    },\r\n  },\r\n  mounted() {\r\n    window.addEventListener(\"click\", this.checkOffclick);\r\n  },\r\n  beforeDestroy() {\r\n    window.removeEventListener(\"click\", this.checkOffclick);\r\n  },\r\n  computed: {\r\n    collapsed() {\r\n      return this.parent.collapsed;\r\n    },\r\n    computedDropdownClass() {\r\n      if (this.toggled) {\r\n        return [\"navbar-open-carat\"];\r\n      }\r\n      return [];\r\n    },\r\n  },\r\n  methods: {\r\n    checkOffclick: function ($e) {\r\n      /**\r\n       * Pulled from: https://stackoverflow.com/questions/17773852/check-if-div-is-descendant-of-another\r\n       */\r\n      let self = this;\r\n      function isChild(obj, parentObj) {\r\n        if (obj.isEqualNode(parentObj)) return true;\r\n        while ((obj = obj.parentNode)) {\r\n          if (obj.isEqualNode(parentObj)) return true;\r\n        }\r\n        return false;\r\n      }\r\n      if (!isChild($e.target, this.$el)) {\r\n        self.toggled = false;\r\n        self.$forceUpdate();\r\n      }\r\n    },\r\n    doNotClose($e) {\r\n      $e.stopPropagation();\r\n    },\r\n    selectInternalA($e) {\r\n      if ($e.target.children[0]) $e.target.children[0].click();\r\n      this.$forceUpdate();\r\n    },\r\n    toggleDropdown($e) {\r\n      this.toggled = !this.toggled;\r\n      $e.preventDefault();\r\n    },\r\n  },\r\n  template: `\r\n    <navbar-dropdown-container :collapsed=\"collapsed\">\r\n      <a\r\n        href=\"#\"\r\n        role=\"button\"\r\n        @click=\"toggleDropdown\"\r\n        @keyup.space=\"toggleDropdown\"\r\n        @keyup.enter='toggleDropdown'\r\n      >\r\n        <div v-html=\"icon\"></div>\r\n        {{text}}\r\n        <navbar-dropdown-carat\r\n          :flavor=\"flavor\"\r\n          :class=\"computedDropdownClass\"\r\n          :disabled=\"disabled\"\r\n        ></navbar-dropdown-carat>\r\n      </a>\r\n      <navbar-dropdown\r\n        :flavor=\"flavor\"\r\n        @click=\"doNotClose\"\r\n        :collapsed=\"collapsed\"\r\n        :open=\"toggled\"\r\n        :style=\"{'max-height': toggled ? (items.length * 60) + 'px' : '0px'}\"\r\n\r\n      >\r\n        <navbar-item\r\n          v-for=\"(option, optionIndex) in items\"\r\n          :key=\"optionIndex\"\r\n          @click=\"selectInternalA\"\r\n          :collapsed=\"collapsed\"\r\n          :disabled=\"option.disabled\"\r\n          :active=\"option.active\"\r\n          :flavor=\"flavor\"\r\n        >\r\n          <a\r\n            v-if=\"option.type == 'item'\"\r\n            :href=\"option.disabled ? '#' : option.url\"\r\n          >{{option.text}}</a>\r\n        </navbar-item>\r\n      </navbar-dropdown>\r\n    </navbar-dropdown-container>\r\n  `,\r\n};\r\nexport const Navbar = {\r\n  components: {\r\n    NavbarContainer,\r\n    NavbarItem,\r\n    NavbarTitle,\r\n    NavbarContentContainer,\r\n    NavbarContent,\r\n    VueNavbarDropdown,\r\n    NButton,\r\n  },\r\n  data: () => {\r\n    return {\r\n      open: false,\r\n      contentWidth: 0,\r\n      containerWidth: 0,\r\n      navHeight: 0,\r\n      titleWidth: 0,\r\n      LEFT_CONTENT_INDICATOR: \"L\",\r\n      CENTER_CONTENT_INDICATOR: \"C\",\r\n      RIGHT_CONTENT_INDICATOR: \"R\",\r\n    };\r\n  },\r\n  mounted() {\r\n    this.calculateDimensions();\r\n    window.addEventListener(\r\n      \"resize\",\r\n      this.debounce(this.calculateDimensions, 10, true),\r\n      {\r\n        passive: true,\r\n      }\r\n    );\r\n  },\r\n  beforeDestroy() {\r\n    let self = this;\r\n    window.removeEventListener(\"click\", self.checkOffclick);\r\n    window.removeEventListener(\r\n      \"resize\",\r\n      this.debounce(this.calculateDimensions, 10, true)\r\n    );\r\n  },\r\n  updated() {\r\n    this.calculateDimensions();\r\n  },\r\n  props: {\r\n    title: {\r\n      type: Object,\r\n      default: () => {\r\n        return {\r\n          text: \"Brand\",\r\n          url: \"#\",\r\n          html: \"\",\r\n        };\r\n      },\r\n    },\r\n    fixed: {\r\n      type: Boolean,\r\n      default: false,\r\n    },\r\n    flavor: {\r\n      type: String,\r\n      default: \"\",\r\n    },\r\n    leftItems: {\r\n      type: Array,\r\n      default: () => {\r\n        return [];\r\n      },\r\n    },\r\n    centerItems: {\r\n      type: Array,\r\n      default: () => {\r\n        return [];\r\n      },\r\n    },\r\n    rightItems: {\r\n      type: Array,\r\n      default: () => {\r\n        return [];\r\n      },\r\n    },\r\n  },\r\n  methods: {\r\n    selectInternalA($e) {\r\n      if ($e.target.children[0]) $e.target.children[0].click();\r\n      this.$forceUpdate();\r\n    },\r\n    doNotClose($e) {\r\n      $e.stopPropagation();\r\n    },\r\n    debounce(func, wait, immediate) {\r\n      /**\r\n       * Pulled from: https://davidwalsh.name/javascript-debounce-function\r\n       */\r\n      var timeout;\r\n      return function () {\r\n        var context = this,\r\n          args = arguments;\r\n        var later = function () {\r\n          timeout = null;\r\n          if (!immediate) func.apply(context, args);\r\n        };\r\n        var callNow = immediate && !timeout;\r\n        clearTimeout(timeout);\r\n        timeout = setTimeout(later, wait);\r\n        try {\r\n          if (callNow) func.apply(context, args);\r\n        } catch {\r\n          // pass\r\n        }\r\n      };\r\n    },\r\n    calculateDimensions() {\r\n      if (this.$refs.content && !this.collapsed)\r\n        this.contentWidth =\r\n          this.$refs.leftContent.$el.clientWidth +\r\n          this.$refs.middleContent.$el.clientWidth +\r\n          this.$refs.rightContent.$el.clientWidth;\r\n      if (this.$refs.container) {\r\n        if (!this.open) {\r\n          this.navHeight = this.$refs.container.$el.clientHeight;\r\n        }\r\n        this.containerWidth = this.$refs.container.$el.clientWidth;\r\n      }\r\n      if (this.$refs.title) {\r\n        this.titleWidth = this.$refs.title.$el.clientWidth;\r\n      }\r\n    },\r\n    computedStyle(length) {\r\n      let sizeOfUnit = 50; // height of the nav elements\r\n      for (let dropdown in this.dropdowns) {\r\n        if (this.dropdowns[dropdown]) {\r\n          if (dropdown[0] == this.LEFT_CONTENT_INDICATOR) {\r\n            length += this.leftItems[dropdown.substring(1, dropdown.length)]\r\n              .items.length;\r\n          } else if (dropdown[0] == this.CENTER_CONTENT_INDICATOR) {\r\n            length += this.centerItems[dropdown.substring(1, dropdown.length)]\r\n              .items.length;\r\n          } else if (dropdown[0] == this.RIGHT_CONTENT_INDICATOR) {\r\n            length += this.rightItems[dropdown.substring(1, dropdown.length)]\r\n              .items.length;\r\n          }\r\n        }\r\n      }\r\n      return {\r\n        \"max-height\": `${this.open ? sizeOfUnit * length : 0}px`,\r\n      };\r\n    },\r\n    toggleAccordion() {\r\n      this.open = !this.open;\r\n    },\r\n  },\r\n  watch: {\r\n    collapsed: function () {\r\n      this.open = false;\r\n      for (let dropdown in this.dropdowns) {\r\n        this.dropdowns[dropdown] = false;\r\n      }\r\n    },\r\n  },\r\n  computed: {\r\n    instance() {\r\n      return this;\r\n    },\r\n    collapsed() {\r\n      return this.contentWidth >= this.collapseCutOff;\r\n    },\r\n    computedClass() {\r\n      if (this.open) {\r\n        return [];\r\n      }\r\n      return [\"closed\"];\r\n    },\r\n    collapseCutOff() {\r\n      let additionalPadding = 28;\r\n      return this.containerWidth - this.titleWidth - additionalPadding;\r\n    },\r\n  },\r\n};\r\nexport default Navbar;\r\n</script>\r\n\r\n<style>\r\n.navbar-brand {\r\n  display: inline-block;\r\n  padding-right: 5px;\r\n}\r\n.navbar-open-carat {\r\n  transform: rotate(135deg) !important;\r\n  margin-bottom: 4px;\r\n}\r\n.open {\r\n  max-height: 1980px !important;\r\n}\r\n.nav-button {\r\n  height: 37px;\r\n  margin-top: 0.4rem;\r\n  position: absolute;\r\n  right: 20px;\r\n}\r\n</style>\r\n"]}, media: undefined });

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
var components = [{
  label: "NavbarContainer",
  component: NavbarContainer
}, {
  label: "NavbarItem",
  component: NavbarItem
}, {
  label: "NavbarTitle",
  component: NavbarTitle
}, {
  label: "NavbarContent",
  component: NavbarContent
}, {
  label: "NavbarContentContainer",
  component: NavbarContentContainer
}, {
  label: "VueNavbarDropdown",
  component: VueNavbarDropdown
}, {
  label: "Navbar",
  component: Navbar
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

export default Navbar;
export { Navbar, NavbarContainer, NavbarContent, NavbarContentContainer, NavbarItem, NavbarTitle, VueNavbarDropdown };
//# sourceMappingURL=Navbar.esm.js.map
