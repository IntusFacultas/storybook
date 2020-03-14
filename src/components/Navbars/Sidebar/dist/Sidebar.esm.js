import styled from 'vue-styled-components';
import Theme from '@IntusFacultas/design-system';
import { NLabel, Text } from '@IntusFacultas/typography';
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
  var data = _taggedTemplateLiteral(["\n  margin-left: 0px;\n  @media (min-width: ", "px) {\n    margin-left: ", "px;\n    margin-top: 0px;\n  }\n  padding-left: 15px;\n"]);

  _templateObject9 = function _templateObject9() {
    return data;
  };

  return data;
}

function _templateObject8() {
  var data = _taggedTemplateLiteral(["\n  background-image: linear-gradient(\n    to top right,\n    transparent 50%,\n    ", "\n      50%\n  );\n  width: 0.5rem;\n  height: 0.5rem;\n  margin-bottom: 1px;\n  transform: rotate(45deg);\n  transition: 0.3s all;\n  display: inline-block;\n"]);

  _templateObject8 = function _templateObject8() {
    return data;
  };

  return data;
}

function _templateObject7() {
  var data = _taggedTemplateLiteral(["\n  list-style: none;\n  margin-top: 0px;\n  padding: 0px;\n  margin-bottom: 0px;\n  transition: 0.3s max-height;\n  max-height: 0px;\n  overflow-y: hidden;\n"]);

  _templateObject7 = function _templateObject7() {
    return data;
  };

  return data;
}

function _templateObject6() {
  var data = _taggedTemplateLiteral(["\n  padding: 10px 20px;\n  & a {\n    text-decoration: none;\n  }\n  & * {\n    color: ", ";\n  }\n  ", ";\n  ", "\n  &:hover {\n  background-color: ", ";};\n  }\n"]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = _taggedTemplateLiteral(["\n  list-style: none;\n  margin-top: 0px;\n  padding: 0px;\n  margin-bottom: 0px;\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n  overflow: hidden;\n  transition: height 0.3s ease-out;\n\n  @media (min-width: ", "px) {\n    height: auto !important;\n    padding: 5px 0px !important;\n  }\n\n  ", "\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 10px 15px;\n  & * {\n    color: ", ";};\n  }\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  background-color: ", ";\n  width: ", "px;\n  z-index: 1;\n  position: absolute;\n  left: 0px;\n  top: ", ";\n  bottom: ", ";\n  @media (max-width: ", "px) {\n    position: relative;\n    width: 100%;\n    padding-left: auto;\n    top: initial;\n  }\n  & * {\n    webkit-touch-callout: none; /* iOS Safari */\n    -webkit-user-select: none; /* Safari */\n    -khtml-user-select: none; /* Konqueror HTML */\n    -moz-user-select: none; /* Firefox */\n    -ms-user-select: none; /* Internet Explorer/Edge */\n    user-select: none; /* Non-prefixed version, currently supported by Chrome and Opera */\n  }\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  display: none;\n  @media (max-width: ", "px) {\n    display: block;\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}
var props = {
  flavor: String,
  disabled: Boolean,
  active: Boolean,
  raw: Boolean,
  width: {
    type: Number,
    default: 200
  },
  breakpoint: {
    type: Number,
    default: 576
  },
  topOffset: {
    type: String,
    default: "0px"
  },
  bottomOffset: {
    type: String,
    default: "0px"
  },
  defaultTheme: {
    type: Object,
    default: function _default() {
      return Theme;
    }
  }
};
var SidebarHamburgerContainer = styled("div", props)(_templateObject(), function (props) {
  return props.breakpoint;
});
var SidebarContainer = styled("aside", props)(_templateObject2(), function (props) {
  return props.theme && props.theme[props.flavor] ? props.theme[props.flavor].background.color : props.defaultTheme[props.flavor] ? props.defaultTheme[props.flavor].background.color : "#f2f2f2";
}, function (props) {
  return props.width;
}, function (props) {
  return props.topOffset;
}, function (props) {
  return props.bottomOffset;
}, function (props) {
  return props.breakpoint;
});
var SidebarTitle = styled("div", props)(_templateObject3(), function (props) {
  return props.theme && props.theme[props.flavor] ? props.theme[props.flavor].color.color : props.defaultTheme[props.flavor] ? props.defaultTheme[props.flavor].color.color : "#222";
});
var SidebarContent = styled("div", props)(_templateObject4(), function (props) {
  return props.breakpoint + 1;
}, function (props) {
  return props.raw ? "" : "\n    & * {\n      color: ".concat(props.theme && props.theme[props.flavor] ? props.theme[props.flavor].color.color : props.defaultTheme[props.flavor] ? props.defaultTheme[props.flavor].color.color : "#222", ";!important };\n    }\n  \n  ");
});
var SidebarItemList = styled.ul(_templateObject5());
var SidebarItem = styled("li", props)(_templateObject6(), function (props) {
  return props.theme && props.theme[props.flavor] ? props.theme[props.flavor].color.color : props.defaultTheme[props.flavor] ? props.defaultTheme[props.flavor].color.color : "#222";
}, function (props) {
  return props.disabled ? "\n    pointer-events: none;\n    & * {color: rgba(0, 0, 0, 0.3) !important;}" : "";
}, function (props) {
  return props.active ? "\n  background-color: ".concat(props.theme && props.theme[props.flavor] ? props.theme[props.flavor].background.focus : props.defaultTheme[props.flavor] ? props.defaultTheme[props.flavor].background.focus : "#d7d7d7", ";\n  ") : "";
}, function (props) {
  return props.theme && props.theme[props.flavor] ? props.theme[props.flavor].background.hover : props.defaultTheme[props.flavor] ? props.defaultTheme[props.flavor].background.hover : "#d7d7d7";
});
var SidebarDropdown = styled("ul", props)(_templateObject7());
var SidebarDropdownCarat = styled("div", props)(_templateObject8(), function (props) {
  return props.disabled ? "rgba(0, 0, 0, 0.3)" : props.theme && props.theme[props.flavor] ? props.theme[props.flavor].color.color : props.defaultTheme[props.flavor] ? props.defaultTheme[props.flavor].color.color : "#222";
});
var VueSidebarDropdown = {
  components: {
    SidebarDropdown: SidebarDropdown,
    SidebarDropdownCarat: SidebarDropdownCarat,
    NLabel: NLabel,
    SidebarItem: SidebarItem,
    Text: Text
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
    disabled: {
      type: Boolean,
      default: false
    },
    text: {
      type: String,
      default: ""
    },
    items: {
      type: Array,
      default: function _default() {
        return [];
      }
    },
    flavor: {
      type: String,
      default: ""
    }
  },
  computed: {
    uid: function uid() {
      return this._uid;
    },
    computeDropdownClass: function computeDropdownClass() {
      if (this.toggled) {
        return ["sidebar-open-carat"];
      }

      return [];
    }
  },
  methods: {
    toggleDropdown: function toggleDropdown() {
      this.toggled = !this.toggled;
    }
  },
  template: "\n    <div>\n      <div class=\"sidebar-icon\" v-html=\"icon\"></div>\n      <n-label\n        class=\"dropdown-label\"\n        :for=\"'sidebar-dropdown' + uid\"\n        role=\"button\"\n        @click=\"toggleDropdown\"\n        @keyup.space=\"toggleDropdown\"\n        @keyup.enter=\"toggleDropdown\"\n        tabindex=\"0\"\n      >\n        {{text}}\n        <sidebar-dropdown-carat\n          :disabled=\"disabled\"\n          :flavor=\"flavor\"\n          :class=\"computeDropdownClass\"\n        ></sidebar-dropdown-carat>\n      </n-label>\n      <sidebar-dropdown\n        :style=\"{'max-height': toggled ? (items.length * 40) + 'px' : '0px'}\"\n        :tabindex=\"-1\"\n      >\n        <sidebar-item\n          v-for=\"(option, optionIndex) in items\"\n          :key=\"'dropdown' + uid + 'option' + optionIndex\"\n          :flavor=\"flavor\"\n          :disabled=\"option.disabled\"\n          :active=\"option.active\"\n          :tabindex=\"-1\"\n        >\n          <a :href=\"option.url\" :tabindex=\"toggled ? 0 : -1\">\n            <div class=\"sidebar-icon\" v-html=\"option.icon\"></div>\n            <text :size=\"13\">{{option.text}}</text>\n          </a>\n        </sidebar-item>\n      </sidebar-dropdown>\n    </div>\n  "
};
var Sidebar = {
  components: {
    SidebarContainer: SidebarContainer,
    SidebarHamburgerContainer: SidebarHamburgerContainer,
    SidebarTitle: SidebarTitle,
    SidebarContent: SidebarContent,
    SidebarItemList: SidebarItemList,
    SidebarItem: SidebarItem,
    Text: Text,
    VueSidebarDropdown: VueSidebarDropdown,
    NButton: NButton
  },
  data: function data() {
    return {
      windowWidth: 0,
      open: true
    };
  },
  mounted: function mounted() {
    var self = this;
    window.addEventListener("click", self.checkOffclick);
  },
  beforeDestroy: function beforeDestroy() {
    window.removeEventListener("click", self.checkOffclick);
  },
  methods: {
    collapseSection: function collapseSection(element) {
      // pulled from https://css-tricks.com/using-css-transitions-auto-dimensions/ and modified
      // get the height of the element's inner content, regardless of its actual size
      var sectionHeight = element.scrollHeight; // temporarily disable all css transitions

      var elementTransition = element.style.transition;
      element.style.transition = "";
      element.style.height = sectionHeight + "px !important";
      element.style.padding = "0px 0px"; // on the next frame (as soon as the previous style change has taken effect),
      // explicitly set the element's height to its current pixel height, so we
      // aren't transitioning out of 'auto'

      requestAnimationFrame(function () {
        element.style.height = sectionHeight + "px";
        element.style.transition = elementTransition; // element.style.overflowY = 'hidden';
        // on the next frame (as soon as the previous style change has taken effect),
        // have the element transition to height: 0

        requestAnimationFrame(function () {
          element.style.height = 0 + "px";
        });
      }); // mark the section as "currently collapsed"

      element.setAttribute("data-collapsed", "true");
    },
    expandSection: function expandSection(element) {
      // pulled from https://css-tricks.com/using-css-transitions-auto-dimensions/ and modified
      // get the height of the element's inner content, regardless of its actual size
      var sectionHeight = element.scrollHeight; // have the element transition to the height of its inner content

      element.style.height = sectionHeight + "px";
      element.style.padding = "5px 0px"; // element.style.overflowY = "auto"
      // when the next css transition finishes (which should be the one we just triggered)

      element.addEventListener("transitionend", function () {
        // remove this event listener so it only gets triggered once
        element.removeEventListener("transitionend", this);

        if (element.getAttribute("data-collapsed") == "false") {
          // remove "height" from the element's inline styles, so it can return to its initial value
          element.style.height = "auto";
        }
      }); // mark the section as "currently not collapsed"

      element.setAttribute("data-collapsed", "false");
    },
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

      if (self.open && this.$refs.sidebar && !isChild($e.target, this.$refs.sidebar.$el)) {
        self.open = false;
        self.collapseSection(this.$refs.content.$el);
      }
    },
    toggleAccordion: function toggleAccordion() {
      this.open = !this.open;

      if (this.open) {
        this.expandSection(this.$refs.content.$el);
      } else {
        this.collapseSection(this.$refs.content.$el);
      }
    },
    changeWindow: function changeWindow($e) {
      window.location.href = $e;
    }
  },
  props: {
    sidebarTitle: {
      type: String,
      default: "Sidebar"
    },
    flavor: {
      type: String,
      default: ""
    },
    bottomOffset: {
      type: String,
      default: "0px"
    },
    topOffset: {
      type: String,
      default: ""
    },
    width: {
      type: Number,
      default: 200
    },
    breakpoint: {
      type: Number,
      default: 576
    },
    items: {
      type: Array,
      default: function _default() {
        return [];
      }
    }
  }
};
var SidebarOffsetContent = styled("div", props)(_templateObject9(), function (props) {
  return props.breakpoint;
}, function (props) {
  return props.width;
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
const __vue_script__ = Sidebar;

/* template */
var __vue_render__ = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c(
    "sidebar-container",
    {
      ref: "sidebar",
      attrs: {
        flavor: _vm.flavor,
        "top-offset": _vm.topOffset,
        "bottom-offset": _vm.bottomOffset,
        id: "sidebar",
        width: _vm.width,
        breakpoint: _vm.breakpoint
      }
    },
    [
      _c(
        "sidebar-title",
        { attrs: { flavor: _vm.flavor } },
        [
          _c("text", { attrs: { size: 16 } }, [
            _vm._v(_vm._s(_vm.sidebarTitle))
          ]),
          _vm._v(" "),
          _c(
            "sidebar-hamburger-container",
            { attrs: { width: _vm.width, breakpoint: _vm.breakpoint } },
            [
              _c(
                "n-button",
                {
                  attrs: { flavor: _vm.flavor },
                  on: { click: _vm.toggleAccordion }
                },
                [_vm._v("☰")]
              )
            ],
            1
          )
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "sidebar-content",
        {
          ref: "content",
          attrs: {
            flavor: _vm.flavor,
            width: _vm.width,
            breakpoint: _vm.breakpoint
          }
        },
        [
          _c(
            "sidebar-item-list",
            _vm._l(_vm.items, function(item, index) {
              return _c(
                "sidebar-item",
                {
                  key: "item" + index,
                  attrs: {
                    flavor: _vm.flavor,
                    disabled: item.disabled,
                    active: item.active
                  }
                },
                [
                  item.type == "item"
                    ? _c("a", { attrs: { href: item.url } }, [
                        _c("div", {
                          staticClass: "sidebar-icon",
                          domProps: { innerHTML: _vm._s(item.icon) }
                        }),
                        _vm._v(" "),
                        _c("text", { attrs: { size: 13 } }, [
                          _vm._v(_vm._s(item.text))
                        ])
                      ])
                    : _c(
                        "div",
                        [
                          _c("vue-sidebar-dropdown", {
                            attrs: {
                              icon: item.icon,
                              text: item.text,
                              disabled: item.disabled,
                              items: item.items,
                              flavor: _vm.flavor
                            }
                          })
                        ],
                        1
                      )
                ]
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
    inject("data-v-54d70fe0_0", { source: "\n.sidebar-open-carat {\r\n  transform: rotate(135deg) !important;\r\n  margin-bottom: 4px;\n}\n.sidebar-icon {\r\n  display: inline-block;\n}\n.dropdown-arrow {\r\n  background-image: linear-gradient(to top right, transparent 50%, #727272 50%);\r\n  width: 0.5rem;\r\n  height: 0.5rem;\r\n  transform: rotate(135deg);\r\n  transition: 0.3s all;\r\n  display: inline-block;\n}\n.dropdown-label {\r\n  cursor: pointer;\n}\r\n", map: {"version":3,"sources":["C:\\Users\\pedro\\Documents\\Personal Projects\\GitHub\\storybook\\storybook\\src\\components\\Navbars\\Sidebar\\src\\Sidebar.vue"],"names":[],"mappings":";AA6dA;EACA,oCAAA;EACA,kBAAA;AACA;AACA;EACA,qBAAA;AACA;AACA;EACA,6EAAA;EACA,aAAA;EACA,cAAA;EACA,yBAAA;EACA,oBAAA;EACA,qBAAA;AACA;AACA;EACA,eAAA;AACA","file":"Sidebar.vue","sourcesContent":["<template>\r\n  <sidebar-container\r\n    :flavor=\"flavor\"\r\n    :top-offset=\"topOffset\"\r\n    :bottom-offset=\"bottomOffset\"\r\n    id=\"sidebar\"\r\n    :width=\"width\"\r\n    :breakpoint=\"breakpoint\"\r\n    ref=\"sidebar\"\r\n  >\r\n    <sidebar-title :flavor=\"flavor\">\r\n      <text :size=\"16\">{{ sidebarTitle }}</text>\r\n      <sidebar-hamburger-container :width=\"width\" :breakpoint=\"breakpoint\">\r\n        <n-button :flavor=\"flavor\" @click=\"toggleAccordion\">&#9776;</n-button>\r\n      </sidebar-hamburger-container>\r\n    </sidebar-title>\r\n    <sidebar-content\r\n      :flavor=\"flavor\"\r\n      :width=\"width\"\r\n      :breakpoint=\"breakpoint\"\r\n      ref=\"content\"\r\n    >\r\n      <sidebar-item-list>\r\n        <sidebar-item\r\n          v-for=\"(item, index) in items\"\r\n          :key=\"'item' + index\"\r\n          :flavor=\"flavor\"\r\n          :disabled=\"item.disabled\"\r\n          :active=\"item.active\"\r\n        >\r\n          <a v-if=\"item.type == 'item'\" :href=\"item.url\">\r\n            <div class=\"sidebar-icon\" v-html=\"item.icon\"></div>\r\n            <text :size=\"13\">{{ item.text }}</text>\r\n          </a>\r\n          <div v-else>\r\n            <vue-sidebar-dropdown\r\n              :icon=\"item.icon\"\r\n              :text=\"item.text\"\r\n              :disabled=\"item.disabled\"\r\n              :items=\"item.items\"\r\n              :flavor=\"flavor\"\r\n            ></vue-sidebar-dropdown>\r\n          </div>\r\n        </sidebar-item>\r\n      </sidebar-item-list>\r\n    </sidebar-content>\r\n  </sidebar-container>\r\n</template>\r\n<script>\r\nimport styled from \"vue-styled-components\";\r\nimport Theme from \"@IntusFacultas/design-system\";\r\nimport { Text, NLabel } from \"@IntusFacultas/typography\";\r\nimport { NButton } from \"@IntusFacultas/button\";\r\nconst props = {\r\n  flavor: String,\r\n  disabled: Boolean,\r\n  active: Boolean,\r\n  raw: Boolean,\r\n  width: {\r\n    type: Number,\r\n    default: 200\r\n  },\r\n  breakpoint: {\r\n    type: Number,\r\n    default: 576\r\n  },\r\n  topOffset: {\r\n    type: String,\r\n    default: \"0px\"\r\n  },\r\n  bottomOffset: {\r\n    type: String,\r\n    default: \"0px\"\r\n  },\r\n  defaultTheme: {\r\n    type: Object,\r\n    default: function() {\r\n      return Theme;\r\n    }\r\n  }\r\n};\r\nexport const SidebarHamburgerContainer = styled(\"div\", props)`\r\n  display: none;\r\n  @media (max-width: ${props => props.breakpoint}px) {\r\n    display: block;\r\n  }\r\n`;\r\nexport const SidebarContainer = styled(\"aside\", props)`\r\n  background-color: ${props =>\r\n    props.theme && props.theme[props.flavor]\r\n      ? props.theme[props.flavor].background.color\r\n      : props.defaultTheme[props.flavor]\r\n      ? props.defaultTheme[props.flavor].background.color\r\n      : \"#f2f2f2\"};\r\n  width: ${props => props.width}px;\r\n  z-index: 1;\r\n  position: absolute;\r\n  left: 0px;\r\n  top: ${props => props.topOffset};\r\n  bottom: ${props => props.bottomOffset};\r\n  @media (max-width: ${props => props.breakpoint}px) {\r\n    position: relative;\r\n    width: 100%;\r\n    padding-left: auto;\r\n    top: initial;\r\n  }\r\n  & * {\r\n    webkit-touch-callout: none; /* iOS Safari */\r\n    -webkit-user-select: none; /* Safari */\r\n    -khtml-user-select: none; /* Konqueror HTML */\r\n    -moz-user-select: none; /* Firefox */\r\n    -ms-user-select: none; /* Internet Explorer/Edge */\r\n    user-select: none; /* Non-prefixed version, currently supported by Chrome and Opera */\r\n  }\r\n`;\r\nexport const SidebarTitle = styled(\"div\", props)`\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: space-between;\r\n  padding: 10px 15px;\r\n  & * {\r\n    color: ${props =>\r\n      props.theme && props.theme[props.flavor]\r\n        ? props.theme[props.flavor].color.color\r\n        : props.defaultTheme[props.flavor]\r\n        ? props.defaultTheme[props.flavor].color.color\r\n        : \"#222\"};};\r\n  }\r\n`;\r\nexport const SidebarContent = styled(\"div\", props)`\r\n  overflow: hidden;\r\n  transition: height 0.3s ease-out;\r\n\r\n  @media (min-width: ${props => props.breakpoint + 1}px) {\r\n    height: auto !important;\r\n    padding: 5px 0px !important;\r\n  }\r\n\r\n  ${props =>\r\n    props.raw\r\n      ? \"\"\r\n      : `\r\n    & * {\r\n      color: ${\r\n        props.theme && props.theme[props.flavor]\r\n          ? props.theme[props.flavor].color.color\r\n          : props.defaultTheme[props.flavor]\r\n          ? props.defaultTheme[props.flavor].color.color\r\n          : \"#222\"\r\n      };!important };\r\n    }\r\n  \r\n  `}\r\n`;\r\nexport const SidebarItemList = styled.ul`\r\n  list-style: none;\r\n  margin-top: 0px;\r\n  padding: 0px;\r\n  margin-bottom: 0px;\r\n`;\r\nexport const SidebarItem = styled(\"li\", props)`\r\n  padding: 10px 20px;\r\n  & a {\r\n    text-decoration: none;\r\n  }\r\n  & * {\r\n    color: ${props =>\r\n      props.theme && props.theme[props.flavor]\r\n        ? props.theme[props.flavor].color.color\r\n        : props.defaultTheme[props.flavor]\r\n        ? props.defaultTheme[props.flavor].color.color\r\n        : \"#222\"};\r\n  }\r\n  ${props =>\r\n    props.disabled\r\n      ? `\r\n    pointer-events: none;\r\n    & * {color: rgba(0, 0, 0, 0.3) !important;}`\r\n      : \"\"};\r\n  ${props =>\r\n    props.active\r\n      ? `\r\n  background-color: ${\r\n    props.theme && props.theme[props.flavor]\r\n      ? props.theme[props.flavor].background.focus\r\n      : props.defaultTheme[props.flavor]\r\n      ? props.defaultTheme[props.flavor].background.focus\r\n      : \"#d7d7d7\"\r\n  };\r\n  `\r\n      : \"\"}\r\n  &:hover {\r\n  background-color: ${props =>\r\n    props.theme && props.theme[props.flavor]\r\n      ? props.theme[props.flavor].background.hover\r\n      : props.defaultTheme[props.flavor]\r\n      ? props.defaultTheme[props.flavor].background.hover\r\n      : \"#d7d7d7\"};};\r\n  }\r\n`;\r\nconst SidebarDropdown = styled(\"ul\", props)`\r\n  list-style: none;\r\n  margin-top: 0px;\r\n  padding: 0px;\r\n  margin-bottom: 0px;\r\n  transition: 0.3s max-height;\r\n  max-height: 0px;\r\n  overflow-y: hidden;\r\n`;\r\nconst SidebarDropdownCarat = styled(\"div\", props)`\r\n  background-image: linear-gradient(\r\n    to top right,\r\n    transparent 50%,\r\n    ${props =>\r\n        props.disabled\r\n          ? \"rgba(0, 0, 0, 0.3)\"\r\n          : props.theme && props.theme[props.flavor]\r\n          ? props.theme[props.flavor].color.color\r\n          : props.defaultTheme[props.flavor]\r\n          ? props.defaultTheme[props.flavor].color.color\r\n          : \"#222\"}\r\n      50%\r\n  );\r\n  width: 0.5rem;\r\n  height: 0.5rem;\r\n  margin-bottom: 1px;\r\n  transform: rotate(45deg);\r\n  transition: 0.3s all;\r\n  display: inline-block;\r\n`;\r\nexport const VueSidebarDropdown = {\r\n  components: {\r\n    SidebarDropdown,\r\n    SidebarDropdownCarat,\r\n    NLabel,\r\n    SidebarItem,\r\n    Text\r\n  },\r\n  data() {\r\n    return {\r\n      toggled: false\r\n    };\r\n  },\r\n  props: {\r\n    icon: {\r\n      type: String,\r\n      default: \"\"\r\n    },\r\n    disabled: {\r\n      type: Boolean,\r\n      default: false\r\n    },\r\n    text: {\r\n      type: String,\r\n      default: \"\"\r\n    },\r\n    items: {\r\n      type: Array,\r\n      default() {\r\n        return [];\r\n      }\r\n    },\r\n    flavor: {\r\n      type: String,\r\n      default: \"\"\r\n    }\r\n  },\r\n  computed: {\r\n    uid() {\r\n      return this._uid;\r\n    },\r\n    computeDropdownClass() {\r\n      if (this.toggled) {\r\n        return [\"sidebar-open-carat\"];\r\n      }\r\n      return [];\r\n    }\r\n  },\r\n  methods: {\r\n    toggleDropdown() {\r\n      this.toggled = !this.toggled;\r\n    }\r\n  },\r\n  template: `\r\n    <div>\r\n      <div class=\"sidebar-icon\" v-html=\"icon\"></div>\r\n      <n-label\r\n        class=\"dropdown-label\"\r\n        :for=\"'sidebar-dropdown' + uid\"\r\n        role=\"button\"\r\n        @click=\"toggleDropdown\"\r\n        @keyup.space=\"toggleDropdown\"\r\n        @keyup.enter=\"toggleDropdown\"\r\n        tabindex=\"0\"\r\n      >\r\n        {{text}}\r\n        <sidebar-dropdown-carat\r\n          :disabled=\"disabled\"\r\n          :flavor=\"flavor\"\r\n          :class=\"computeDropdownClass\"\r\n        ></sidebar-dropdown-carat>\r\n      </n-label>\r\n      <sidebar-dropdown\r\n        :style=\"{'max-height': toggled ? (items.length * 40) + 'px' : '0px'}\"\r\n        :tabindex=\"-1\"\r\n      >\r\n        <sidebar-item\r\n          v-for=\"(option, optionIndex) in items\"\r\n          :key=\"'dropdown' + uid + 'option' + optionIndex\"\r\n          :flavor=\"flavor\"\r\n          :disabled=\"option.disabled\"\r\n          :active=\"option.active\"\r\n          :tabindex=\"-1\"\r\n        >\r\n          <a :href=\"option.url\" :tabindex=\"toggled ? 0 : -1\">\r\n            <div class=\"sidebar-icon\" v-html=\"option.icon\"></div>\r\n            <text :size=\"13\">{{option.text}}</text>\r\n          </a>\r\n        </sidebar-item>\r\n      </sidebar-dropdown>\r\n    </div>\r\n  `\r\n};\r\n\r\nexport const Sidebar = {\r\n  components: {\r\n    SidebarContainer,\r\n    SidebarHamburgerContainer,\r\n    SidebarTitle,\r\n    SidebarContent,\r\n    SidebarItemList,\r\n    SidebarItem,\r\n    Text,\r\n    VueSidebarDropdown,\r\n    NButton\r\n  },\r\n  data: function() {\r\n    return {\r\n      windowWidth: 0,\r\n      open: true\r\n    };\r\n  },\r\n  mounted: function() {\r\n    var self = this;\r\n    window.addEventListener(\"click\", self.checkOffclick);\r\n  },\r\n  beforeDestroy() {\r\n    window.removeEventListener(\"click\", self.checkOffclick);\r\n  },\r\n  methods: {\r\n    collapseSection(element) {\r\n      // pulled from https://css-tricks.com/using-css-transitions-auto-dimensions/ and modified\r\n      // get the height of the element's inner content, regardless of its actual size\r\n      let sectionHeight = element.scrollHeight;\r\n      // temporarily disable all css transitions\r\n      var elementTransition = element.style.transition;\r\n      element.style.transition = \"\";\r\n      element.style.height = sectionHeight + \"px !important\";\r\n      element.style.padding = \"0px 0px\";\r\n      // on the next frame (as soon as the previous style change has taken effect),\r\n      // explicitly set the element's height to its current pixel height, so we\r\n      // aren't transitioning out of 'auto'\r\n      requestAnimationFrame(function() {\r\n        element.style.height = sectionHeight + \"px\";\r\n        element.style.transition = elementTransition;\r\n        // element.style.overflowY = 'hidden';\r\n\r\n        // on the next frame (as soon as the previous style change has taken effect),\r\n        // have the element transition to height: 0\r\n        requestAnimationFrame(function() {\r\n          element.style.height = 0 + \"px\";\r\n        });\r\n      });\r\n\r\n      // mark the section as \"currently collapsed\"\r\n      element.setAttribute(\"data-collapsed\", \"true\");\r\n    },\r\n    expandSection(element) {\r\n      // pulled from https://css-tricks.com/using-css-transitions-auto-dimensions/ and modified\r\n      // get the height of the element's inner content, regardless of its actual size\r\n      let sectionHeight = element.scrollHeight;\r\n      // have the element transition to the height of its inner content\r\n      element.style.height = sectionHeight + \"px\";\r\n      element.style.padding = \"5px 0px\";\r\n\r\n      // element.style.overflowY = \"auto\"\r\n      // when the next css transition finishes (which should be the one we just triggered)\r\n      element.addEventListener(\"transitionend\", function() {\r\n        // remove this event listener so it only gets triggered once\r\n        element.removeEventListener(\"transitionend\", this);\r\n        if (element.getAttribute(\"data-collapsed\") == \"false\") {\r\n          // remove \"height\" from the element's inline styles, so it can return to its initial value\r\n          element.style.height = \"auto\";\r\n        }\r\n      });\r\n\r\n      // mark the section as \"currently not collapsed\"\r\n      element.setAttribute(\"data-collapsed\", \"false\");\r\n    },\r\n    checkOffclick: function($e) {\r\n      /**\r\n       * Pulled from: https://stackoverflow.com/questions/17773852/check-if-div-is-descendant-of-another\r\n       */\r\n      let self = this;\r\n      function isChild(obj, parentObj) {\r\n        if (obj.isEqualNode(parentObj)) return true;\r\n        while ((obj = obj.parentNode)) {\r\n          if (obj.isEqualNode(parentObj)) return true;\r\n        }\r\n        return false;\r\n      }\r\n      if (\r\n        self.open &&\r\n        this.$refs.sidebar &&\r\n        !isChild($e.target, this.$refs.sidebar.$el)\r\n      ) {\r\n        self.open = false;\r\n        self.collapseSection(this.$refs.content.$el);\r\n      }\r\n    },\r\n    toggleAccordion: function() {\r\n      this.open = !this.open;\r\n      if (this.open) {\r\n        this.expandSection(this.$refs.content.$el);\r\n      } else {\r\n        this.collapseSection(this.$refs.content.$el);\r\n      }\r\n    },\r\n    changeWindow: function($e) {\r\n      window.location.href = $e;\r\n    }\r\n  },\r\n  props: {\r\n    sidebarTitle: {\r\n      type: String,\r\n      default: \"Sidebar\"\r\n    },\r\n    flavor: {\r\n      type: String,\r\n      default: \"\"\r\n    },\r\n    bottomOffset: {\r\n      type: String,\r\n      default: \"0px\"\r\n    },\r\n    topOffset: {\r\n      type: String,\r\n      default: \"\"\r\n    },\r\n    width: {\r\n      type: Number,\r\n      default: 200\r\n    },\r\n    breakpoint: {\r\n      type: Number,\r\n      default: 576\r\n    },\r\n    items: {\r\n      type: Array,\r\n      default: function() {\r\n        return [];\r\n      }\r\n    }\r\n  }\r\n};\r\nexport const SidebarOffsetContent = styled(\"div\", props)`\r\n  margin-left: 0px;\r\n  @media (min-width: ${props => props.breakpoint}px) {\r\n    margin-left: ${props => props.width}px;\r\n    margin-top: 0px;\r\n  }\r\n  padding-left: 15px;\r\n`;\r\nexport default Sidebar;\r\n</script>\r\n\r\n<style>\r\n.sidebar-open-carat {\r\n  transform: rotate(135deg) !important;\r\n  margin-bottom: 4px;\r\n}\r\n.sidebar-icon {\r\n  display: inline-block;\r\n}\r\n.dropdown-arrow {\r\n  background-image: linear-gradient(to top right, transparent 50%, #727272 50%);\r\n  width: 0.5rem;\r\n  height: 0.5rem;\r\n  transform: rotate(135deg);\r\n  transition: 0.3s all;\r\n  display: inline-block;\r\n}\r\n.dropdown-label {\r\n  cursor: pointer;\r\n}\r\n</style>\r\n"]}, media: undefined });

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
  label: "SidebarHamburgerContainer",
  component: SidebarHamburgerContainer
}, {
  label: "SidebarContainer",
  component: SidebarContainer
}, {
  label: "SidebarTitle",
  component: SidebarTitle
}, {
  label: "SidebarContent",
  component: SidebarContent
}, {
  label: "VueSidebarDropdown",
  component: VueSidebarDropdown
}, {
  label: "Sidebar",
  component: Sidebar
}, {
  label: "SidebarItem",
  component: SidebarItem
}, {
  label: "SidebarItemList",
  component: SidebarItemList
}, {
  label: "SidebarOffsetContent",
  component: SidebarOffsetContent
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

export { Sidebar, SidebarContainer, SidebarContent, SidebarHamburgerContainer, SidebarItem, SidebarItemList, SidebarOffsetContent, SidebarTitle, VueSidebarDropdown };
//# sourceMappingURL=Sidebar.esm.js.map
