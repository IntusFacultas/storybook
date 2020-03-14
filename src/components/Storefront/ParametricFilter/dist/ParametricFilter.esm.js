import { NButton } from "@intus/button";
import { NLabel } from "@intus/typography";
import Badge from "@intus/badge";
import styled from "vue-styled-components";
import SelectMe from "@intus/select-me";
import Theme from "@intus/design-system";

//
const ParametricContainer = styled.div`
  width: 100%;
`;
const props = {
  flavor: String,
  disabled: Boolean,
  active: Boolean,
  defaultTheme: {
    type: Object,
    default: function() {
      return Theme;
    }
  }
};
const ParametricCarat = styled("div", props)`
  background-image: linear-gradient(
    to top right,
    transparent 50%,
    ${props =>
        props.disabled
          ? "rgba(0, 0, 0, 0.3)"
          : props.theme && props.theme[props.flavor]
          ? props.theme[props.flavor].color.color
          : props.defaultTheme[props.flavor]
          ? props.defaultTheme[props.flavor].color.color
          : "#222"}
      50%
  );
  float: right;
  width: 0.5rem;
  height: 0.5rem;
  transform: rotate(45deg);
  transition: 0.3s all;
  display: inline-block;
`;
const QuickSelectContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-bottom: 5px;
`;
const QuickSelectOption = styled("div", props)`
  font-family: "Open Sans Regular", -apple-system, BlinkMacSystemFont,
    "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji",
    "Segoe UI Emoji", "Segoe UI Symbol";
  padding: 5px;
  margin-bottom: 2px;
  cursor: pointer;
  text-align: left !important;
  color: ${props =>
    props.theme && props.theme[props.flavor]
      ? props.theme[props.flavor].color.color
      : props.defaultTheme[props.flavor] &&
        props.defaultTheme[props.flavor].color.color
      ? props.defaultTheme[props.flavor].color.color
      : "#040404"}
  background-color: ${props =>
    props.theme && props.theme[props.flavor]
      ? props.theme[props.flavor].background.color
      : props.defaultTheme[props.flavor] &&
        props.defaultTheme[props.flavor].background.color
      ? props.defaultTheme[props.flavor].background.color
      : "#f0f0f0"};
  &:hover {
    background-color: ${props =>
      props.theme && props.theme[props.flavor]
        ? props.theme[props.flavor].background.hover
        : props.defaultTheme[props.flavor] &&
          props.defaultTheme[props.flavor].background.hover
        ? props.defaultTheme[props.flavor].background.hover
        : "#d5d5d5"};
    color: ${props =>
      props.theme && props.theme[props.flavor]
        ? props.theme[props.flavor].color.hover
        : props.defaultTheme[props.flavor] &&
          props.defaultTheme[props.flavor].color.hover
        ? props.defaultTheme[props.flavor].color.hover
        : "#000"}
  }
`;
const ParametricContentContainer = styled.div`
  transition: 0.3s height;
  margin-top: 3px;
  height: 0px;
  overflow-y: hidden;
`;
const ParametricFilter = {
  components: {
    NButton,
    ParametricContainer,
    ParametricCarat,
    SelectMe,
    ParametricContentContainer,
    QuickSelectContainer,
    QuickSelectOption,
    Badge,
    NLabel
  },
  data() {
    return {
      selectedItems: [],
      open: false,
      unwatch: null
    };
  },
  props: {
    value: {
      type: String,
      default() {
        return [];
      }
    },
    name: {
      type: String,
      required: true
    },
    filter: {
      type: Object,
      required: true
    },
    defaultOpen: {
      type: Boolean,
      default: false
    },
    displayAttribute: {
      type: String,
      default: "text"
    },
    valueAttribute: {
      type: String,
      default: "value"
    },
    quickSelectFlavor: {
      type: String,
      default: "Secondary"
    },
    activeBadgeFlavor: {
      type: String,
      default: "Light"
    },
    badgeFlavor: {
      type: String,
      default: "Secondary"
    },
    flavor: {
      type: String,
      default: "Dark"
    },
    debug: {
      type: Boolean,
      default: false
    }
  },
  beforeDestroy() {
    this.unwatch();
  },
  mounted() {
    this.open = this.defaultOpen;
    if (this.defaultOpen) {
      this.expandSection(this.$refs.content.$el);
    }
    if (this.filter.selected_values) {
      this.selectedItems = this.filter.selected_values.slice();
    }
    this.unwatch = this.$watch("values", this.updateSelectedItems, {
      deep: true
    });
  },
  methods: {
    updateSelectedItems() {
      this.selectedItems = this.value;
    },
    collapseSection(element) {
      // pulled from https://css-tricks.com/using-css-transitions-auto-dimensions/ and modified
      // get the height of the element's inner content, regardless of its actual size
      let sectionHeight = element.scrollHeight;
      // temporarily disable all css transitions
      var elementTransition = element.style.transition;
      element.style.transition = "";
      element.style.height = sectionHeight + "px !important";
      element.style.overflowY = "hidden";
      // element.style.width = sectionWidth + "px !important";

      // on the next frame (as soon as the previous style change has taken effect),
      // explicitly set the element's height to its current pixel height, so we
      // aren't transitioning out of 'auto'
      requestAnimationFrame(function() {
        element.style.height = sectionHeight + "px";
        // element.style.width = sectionWidth + "px";
        element.style.transition = elementTransition;
        // element.style.overflowY = 'hidden';

        // on the next frame (as soon as the previous style change has taken effect),
        // have the element transition to height: 0
        requestAnimationFrame(function() {
          element.style.height = 0 + "px";
          // element.style.width = "0px";
          element.style.paddingBottom = "0px";
        });
      });

      // mark the section as "currently collapsed"
      element.setAttribute("data-collapsed", "true");
    },
    expandSection(element) {
      // pulled from https://css-tricks.com/using-css-transitions-auto-dimensions/ and modified
      // get the height of the element's inner content, regardless of its actual size
      let sectionHeight = element.scrollHeight;
      // have the element transition to the height of its inner content
      element.style.height = sectionHeight + "px";
      // element.style.width = sectionWidth + "px";

      element.style.paddingBottom = "5px";
      // element.style.overflowY = "auto"
      // when the next css transition finishes (which should be the one we just triggered)
      element.addEventListener("transitionend", function() {
        // remove this event listener so it only gets triggered once
        element.removeEventListener("transitionend", this);
        if (element.getAttribute("data-collapsed") == "false") {
          // remove "height" from the element's inline styles, so it can return to its initial value
          element.style.height = "auto";
          element.style.overflowY = "visible";
        }
      });

      // mark the section as "currently not collapsed"
      element.setAttribute("data-collapsed", "false");
    },
    handleUpdate(value) {
      this.selectedItems = value.slice();
      this.$emit("input", this.selectedItems);
    },
    toggle() {
      // this.open = !this.open;

      if (!this.open) {
        this.expandSection(this.$refs.content.$el);
        this.open = true;
      } else {
        this.collapseSection(this.$refs.content.$el);
        this.open = false;
      }
    },
    quickSelect(item) {
      let option = this.filter.items.filter(
        i => i[this.valueAttribute] == item[this.valueAttribute]
      )[0];
      if (this.$refs.selectBar) {
        this.$refs.selectBar.selectOption(option);
      }
    }
  },
  computed: {
    computeClass() {
      if (this.open) {
        return ["sidebar-open-carat"];
      }
      return [];
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
const __vue_script__ = ParametricFilter;

/* template */
var __vue_render__ = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c(
    "parametric-container",
    [
      _c(
        "n-button",
        {
          staticClass: "parametric-button",
          attrs: { block: true, flavor: _vm.flavor },
          on: { click: _vm.toggle }
        },
        [
          _c(
            "span",
            [
              _vm._v("\n      " + _vm._s(_vm.filter.display) + "\n      "),
              _vm.selectedItems.length != 0
                ? _c("badge", { attrs: { flavor: _vm.activeBadgeFlavor } }, [
                    _vm._v("Active")
                  ])
                : _vm._e()
            ],
            1
          ),
          _vm._v(" "),
          _c("parametric-carat", {
            class: _vm.computeClass,
            attrs: { flavor: _vm.flavor, disabled: _vm.filter.disabled }
          })
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "parametric-content-container",
        { ref: "content" },
        [
          _c("n-label", { staticClass: "sr-only", attrs: { for: _vm.name } }, [
            _vm._v(_vm._s(_vm.filter.display))
          ]),
          _vm._v(" "),
          _c("select-me", {
            ref: "selectBar",
            attrs: {
              "aria-label": _vm.filter.display,
              options: _vm.filter.items,
              "badge-flavor": _vm.badgeFlavor,
              "multi-select": true,
              debug: _vm.debug,
              "display-attribute": _vm.displayAttribute,
              "value-attribute": _vm.valueAttribute,
              name: _vm.name
            },
            on: {
              input: _vm.handleUpdate,
              focus: function($event) {
                _vm.open = true;
              }
            },
            model: {
              value: _vm.selectedItems,
              callback: function($$v) {
                _vm.selectedItems = $$v;
              },
              expression: "selectedItems"
            }
          }),
          _vm._v(" "),
          _c(
            "quick-select-container",
            _vm._l(_vm.filter.quickSelects, function(item, index) {
              return _c("quick-select-option", {
                key: index,
                attrs: { flavor: _vm.quickSelectFlavor },
                domProps: { innerHTML: _vm._s(item[_vm.displayAttribute]) },
                on: {
                  click: function($event) {
                    return _vm.quickSelect(item);
                  }
                }
              });
            }),
            1
          )
        ],
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
  inject("data-v-3b6853c4_0", {
    source:
      "\n.sr-only {\r\n  position: absolute;\r\n  width: 1px;\r\n  height: 1px;\r\n  padding: 0;\r\n  overflow: hidden;\r\n  clip: rect(0, 0, 0, 0);\r\n  white-space: nowrap;\r\n  -webkit-clip-path: inset(50%);\r\n  clip-path: inset(50%);\r\n  border: 0;\n}\n.parametric-button {\r\n  justify-content: space-between;\r\n  display: flex;\r\n  align-items: center;\n}\n.parametric-open-carat {\r\n  transform: rotate(135deg) !important;\n}\r\n",
    map: {
      version: 3,
      sources: [
        "C:\\Users\\pedro\\Documents\\Work\\Storybook\\src\\components\\Storefront\\ParametricFilter\\src\\ParametricFilter.vue"
      ],
      names: [],
      mappings:
        ";AAiUA;EACA,kBAAA;EACA,UAAA;EACA,WAAA;EACA,UAAA;EACA,gBAAA;EACA,sBAAA;EACA,mBAAA;EACA,6BAAA;EACA,qBAAA;EACA,SAAA;AACA;AACA;EACA,8BAAA;EACA,aAAA;EACA,mBAAA;AACA;AACA;EACA,oCAAA;AACA",
      file: "ParametricFilter.vue",
      sourcesContent: [
        '<template>\r\n  <parametric-container>\r\n    <n-button\r\n      :block="true"\r\n      :flavor="flavor"\r\n      @click="toggle"\r\n      class="parametric-button"\r\n    >\r\n      <span>\r\n        {{ filter.display }}\r\n        <badge :flavor="activeBadgeFlavor" v-if="selectedItems.length != 0"\r\n          >Active</badge\r\n        >\r\n      </span>\r\n      <parametric-carat\r\n        :flavor="flavor"\r\n        :class="computeClass"\r\n        :disabled="filter.disabled"\r\n      ></parametric-carat>\r\n    </n-button>\r\n    <parametric-content-container ref="content">\r\n      <n-label class="sr-only" :for="name">{{ filter.display }}</n-label>\r\n      <select-me\r\n        :aria-label="filter.display"\r\n        v-model="selectedItems"\r\n        :options="filter.items"\r\n        :badge-flavor="badgeFlavor"\r\n        :multi-select="true"\r\n        :debug="debug"\r\n        :display-attribute="displayAttribute"\r\n        :value-attribute="valueAttribute"\r\n        :name="name"\r\n        ref="selectBar"\r\n        @input="handleUpdate"\r\n        @focus="open = true"\r\n      ></select-me>\r\n      <quick-select-container>\r\n        <quick-select-option\r\n          v-for="(item, index) in filter.quickSelects"\r\n          :flavor="quickSelectFlavor"\r\n          :key="index"\r\n          v-html="item[displayAttribute]"\r\n          @click="quickSelect(item)"\r\n        ></quick-select-option>\r\n      </quick-select-container>\r\n    </parametric-content-container>\r\n  </parametric-container>\r\n</template>\r\n\r\n<script>\r\nimport { NButton } from "@intus/button";\r\nimport { NLabel } from "@intus/typography";\r\nimport Badge from "@intus/badge";\r\nimport styled from "vue-styled-components";\r\nimport SelectMe from "@intus/select-me";\r\nimport Theme from "@intus/design-system";\r\nconst ParametricContainer = styled.div`\r\n  width: 100%;\r\n`;\r\nconst props = {\r\n  flavor: String,\r\n  disabled: Boolean,\r\n  active: Boolean,\r\n  defaultTheme: {\r\n    type: Object,\r\n    default: function() {\r\n      return Theme;\r\n    }\r\n  }\r\n};\r\nconst ParametricCarat = styled("div", props)`\r\n  background-image: linear-gradient(\r\n    to top right,\r\n    transparent 50%,\r\n    ${props =>\r\n        props.disabled\r\n          ? "rgba(0, 0, 0, 0.3)"\r\n          : props.theme && props.theme[props.flavor]\r\n          ? props.theme[props.flavor].color.color\r\n          : props.defaultTheme[props.flavor]\r\n          ? props.defaultTheme[props.flavor].color.color\r\n          : "#222"}\r\n      50%\r\n  );\r\n  float: right;\r\n  width: 0.5rem;\r\n  height: 0.5rem;\r\n  transform: rotate(45deg);\r\n  transition: 0.3s all;\r\n  display: inline-block;\r\n`;\r\nconst QuickSelectContainer = styled.div`\r\n  width: 100%;\r\n  display: flex;\r\n  flex-direction: column;\r\n  margin-bottom: 5px;\r\n`;\r\nconst QuickSelectOption = styled("div", props)`\r\n  font-family: "Open Sans Regular", -apple-system, BlinkMacSystemFont,\r\n    "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji",\r\n    "Segoe UI Emoji", "Segoe UI Symbol";\r\n  padding: 5px;\r\n  margin-bottom: 2px;\r\n  cursor: pointer;\r\n  text-align: left !important;\r\n  color: ${props =>\r\n    props.theme && props.theme[props.flavor]\r\n      ? props.theme[props.flavor].color.color\r\n      : props.defaultTheme[props.flavor] &&\r\n        props.defaultTheme[props.flavor].color.color\r\n      ? props.defaultTheme[props.flavor].color.color\r\n      : "#040404"}\r\n  background-color: ${props =>\r\n    props.theme && props.theme[props.flavor]\r\n      ? props.theme[props.flavor].background.color\r\n      : props.defaultTheme[props.flavor] &&\r\n        props.defaultTheme[props.flavor].background.color\r\n      ? props.defaultTheme[props.flavor].background.color\r\n      : "#f0f0f0"};\r\n  &:hover {\r\n    background-color: ${props =>\r\n      props.theme && props.theme[props.flavor]\r\n        ? props.theme[props.flavor].background.hover\r\n        : props.defaultTheme[props.flavor] &&\r\n          props.defaultTheme[props.flavor].background.hover\r\n        ? props.defaultTheme[props.flavor].background.hover\r\n        : "#d5d5d5"};\r\n    color: ${props =>\r\n      props.theme && props.theme[props.flavor]\r\n        ? props.theme[props.flavor].color.hover\r\n        : props.defaultTheme[props.flavor] &&\r\n          props.defaultTheme[props.flavor].color.hover\r\n        ? props.defaultTheme[props.flavor].color.hover\r\n        : "#000"}\r\n  }\r\n`;\r\nconst ParametricContentContainer = styled.div`\r\n  transition: 0.3s height;\r\n  margin-top: 3px;\r\n  height: 0px;\r\n  overflow-y: hidden;\r\n`;\r\nexport const ParametricFilter = {\r\n  components: {\r\n    NButton,\r\n    ParametricContainer,\r\n    ParametricCarat,\r\n    SelectMe,\r\n    ParametricContentContainer,\r\n    QuickSelectContainer,\r\n    QuickSelectOption,\r\n    Badge,\r\n    NLabel\r\n  },\r\n  data() {\r\n    return {\r\n      selectedItems: [],\r\n      open: false,\r\n      unwatch: null\r\n    };\r\n  },\r\n  props: {\r\n    value: {\r\n      type: String,\r\n      default() {\r\n        return [];\r\n      }\r\n    },\r\n    name: {\r\n      type: String,\r\n      required: true\r\n    },\r\n    filter: {\r\n      type: Object,\r\n      required: true\r\n    },\r\n    defaultOpen: {\r\n      type: Boolean,\r\n      default: false\r\n    },\r\n    displayAttribute: {\r\n      type: String,\r\n      default: "text"\r\n    },\r\n    valueAttribute: {\r\n      type: String,\r\n      default: "value"\r\n    },\r\n    quickSelectFlavor: {\r\n      type: String,\r\n      default: "Secondary"\r\n    },\r\n    activeBadgeFlavor: {\r\n      type: String,\r\n      default: "Light"\r\n    },\r\n    badgeFlavor: {\r\n      type: String,\r\n      default: "Secondary"\r\n    },\r\n    flavor: {\r\n      type: String,\r\n      default: "Dark"\r\n    },\r\n    debug: {\r\n      type: Boolean,\r\n      default: false\r\n    }\r\n  },\r\n  beforeDestroy() {\r\n    this.unwatch();\r\n  },\r\n  mounted() {\r\n    this.open = this.defaultOpen;\r\n    if (this.defaultOpen) {\r\n      this.expandSection(this.$refs.content.$el);\r\n    }\r\n    if (this.filter.selected_values) {\r\n      this.selectedItems = this.filter.selected_values.slice();\r\n    }\r\n    this.unwatch = this.$watch("values", this.updateSelectedItems, {\r\n      deep: true\r\n    });\r\n  },\r\n  methods: {\r\n    updateSelectedItems() {\r\n      this.selectedItems = this.value;\r\n    },\r\n    collapseSection(element) {\r\n      // pulled from https://css-tricks.com/using-css-transitions-auto-dimensions/ and modified\r\n      // get the height of the element\'s inner content, regardless of its actual size\r\n      let sectionHeight = element.scrollHeight;\r\n      // temporarily disable all css transitions\r\n      var elementTransition = element.style.transition;\r\n      element.style.transition = "";\r\n      element.style.height = sectionHeight + "px !important";\r\n      element.style.overflowY = "hidden";\r\n      // element.style.width = sectionWidth + "px !important";\r\n\r\n      // on the next frame (as soon as the previous style change has taken effect),\r\n      // explicitly set the element\'s height to its current pixel height, so we\r\n      // aren\'t transitioning out of \'auto\'\r\n      requestAnimationFrame(function() {\r\n        element.style.height = sectionHeight + "px";\r\n        // element.style.width = sectionWidth + "px";\r\n        element.style.transition = elementTransition;\r\n        // element.style.overflowY = \'hidden\';\r\n\r\n        // on the next frame (as soon as the previous style change has taken effect),\r\n        // have the element transition to height: 0\r\n        requestAnimationFrame(function() {\r\n          element.style.height = 0 + "px";\r\n          // element.style.width = "0px";\r\n          element.style.paddingBottom = "0px";\r\n        });\r\n      });\r\n\r\n      // mark the section as "currently collapsed"\r\n      element.setAttribute("data-collapsed", "true");\r\n    },\r\n    expandSection(element) {\r\n      // pulled from https://css-tricks.com/using-css-transitions-auto-dimensions/ and modified\r\n      // get the height of the element\'s inner content, regardless of its actual size\r\n      let sectionHeight = element.scrollHeight;\r\n      // have the element transition to the height of its inner content\r\n      element.style.height = sectionHeight + "px";\r\n      // element.style.width = sectionWidth + "px";\r\n\r\n      element.style.paddingBottom = "5px";\r\n      // element.style.overflowY = "auto"\r\n      // when the next css transition finishes (which should be the one we just triggered)\r\n      element.addEventListener("transitionend", function() {\r\n        // remove this event listener so it only gets triggered once\r\n        element.removeEventListener("transitionend", this);\r\n        if (element.getAttribute("data-collapsed") == "false") {\r\n          // remove "height" from the element\'s inline styles, so it can return to its initial value\r\n          element.style.height = "auto";\r\n          element.style.overflowY = "visible";\r\n        }\r\n      });\r\n\r\n      // mark the section as "currently not collapsed"\r\n      element.setAttribute("data-collapsed", "false");\r\n    },\r\n    handleUpdate(value) {\r\n      this.selectedItems = value.slice();\r\n      this.$emit("input", this.selectedItems);\r\n    },\r\n    toggle() {\r\n      // this.open = !this.open;\r\n\r\n      if (!this.open) {\r\n        this.expandSection(this.$refs.content.$el);\r\n        this.open = true;\r\n      } else {\r\n        this.collapseSection(this.$refs.content.$el);\r\n        this.open = false;\r\n      }\r\n    },\r\n    quickSelect(item) {\r\n      let option = this.filter.items.filter(\r\n        i => i[this.valueAttribute] == item[this.valueAttribute]\r\n      )[0];\r\n      if (this.$refs.selectBar) {\r\n        this.$refs.selectBar.selectOption(option);\r\n      }\r\n    }\r\n  },\r\n  computed: {\r\n    computeClass() {\r\n      if (this.open) {\r\n        return ["sidebar-open-carat"];\r\n      }\r\n      return [];\r\n    }\r\n  }\r\n};\r\nexport default ParametricFilter;\r\n</script>\r\n\r\n<style>\r\n.sr-only {\r\n  position: absolute;\r\n  width: 1px;\r\n  height: 1px;\r\n  padding: 0;\r\n  overflow: hidden;\r\n  clip: rect(0, 0, 0, 0);\r\n  white-space: nowrap;\r\n  -webkit-clip-path: inset(50%);\r\n  clip-path: inset(50%);\r\n  border: 0;\r\n}\r\n.parametric-button {\r\n  justify-content: space-between;\r\n  display: flex;\r\n  align-items: center;\r\n}\r\n.parametric-open-carat {\r\n  transform: rotate(135deg) !important;\r\n}\r\n</style>\r\n'
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

// install function executed by Vue.use()
const install = function installParametricFilter(Vue) {
  if (install.installed) return;
  install.installed = true;
  Vue.component("ParametricFilter", __vue_component__);
};

// Create module definition for Vue.use()
const plugin = {
  install
};

// To auto-install when vue is found
// eslint-disable-next-line no-redeclare
/* global window, global */
let GlobalVue = null;
if (typeof window !== "undefined") {
  GlobalVue = window.Vue;
} else if (typeof global !== "undefined") {
  GlobalVue = global.Vue;
}
if (GlobalVue) {
  GlobalVue.use(plugin);
}

// Inject install function into component - allows component
// to be registered via Vue.use() as well as Vue.component()
__vue_component__.install = install;

// It's possible to expose named exports when writing components that can
// also be used as directives, etc. - eg. import { RollupDemoDirective } from 'rollup-demo';
// export const RollupDemoDirective = component;

export default __vue_component__;
//# sourceMappingURL=ParametricFilter.esm.js.map
