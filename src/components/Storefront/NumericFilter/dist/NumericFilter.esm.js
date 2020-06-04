import { NButton } from "@intus/button";
import Badge from "@intus/badge";
import { NText } from "@intus/typography";
import NumberRange from "@intus/number-range";
import styled from "vue-styled-components";
import Theme from "@intus/design-system";

function _taggedTemplateLiteral(strings, raw) {
  if (!raw) {
    raw = strings.slice(0);
  }

  return Object.freeze(
    Object.defineProperties(strings, {
      raw: {
        value: Object.freeze(raw),
      },
    })
  );
}

function _templateObject3() {
  var data = _taggedTemplateLiteral([
    "\n  transition: 0.3s height;\n  margin-top: 3px;\n  height: 0px;\n  overflow-y: hidden;\n",
  ]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral([
    "\n  background-image: linear-gradient(\n    to top right,\n    transparent 50%,\n    ",
    "\n      50%\n  );\n  float: right;\n  width: 0.5rem;\n  height: 0.5rem;\n  transform: rotate(45deg);\n  transition: 0.3s all;\n  display: inline-block;\n",
  ]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  width: 100%;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}
var NumericContainer = styled.div(_templateObject());
var props = {
  flavor: String,
  disabled: Boolean,
  active: Boolean,
  defaultTheme: {
    type: Object,
    default: function _default() {
      return Theme;
    },
  },
};
var NumericCarat = styled("div", props)(_templateObject2(), function(props) {
  return props.disabled
    ? "rgba(0, 0, 0, 0.3)"
    : props.theme && props.theme[props.flavor]
    ? props.theme[props.flavor].color.color
    : props.defaultTheme[props.flavor]
    ? props.defaultTheme[props.flavor].color.color
    : "#222";
});
var NumericContentContainer = styled.div(_templateObject3());
var NumericFilter = {
  components: {
    NButton: NButton,
    NumericContainer: NumericContainer,
    NumericCarat: NumericCarat,
    NumericContentContainer: NumericContentContainer,
    NumberRange: NumberRange,
    Badge: Badge,
    NText: NText,
  },
  data: function data() {
    return {
      open: false,
      internalValue: {
        lowerValue: 0,
        upperValue: 0,
      },
    };
  },
  props: {
    value: {
      type: Object,
      default: function _default() {
        return {
          lowValue: 0,
          highValue: 0,
        };
      },
    },
    name: {
      type: String,
      required: true,
    },
    filter: {
      type: Object,
      required: true,
    },
    defaultOpen: {
      type: Boolean,
      default: false,
    },
    activeBadgeFlavor: {
      type: String,
      default: "Light",
    },
    flavor: {
      type: String,
      default: "Dark",
    },
    textFlavor: {
      type: String,
      default: "",
    },
    helpText: {
      type: String,
      default: "",
    },
  },
  mounted: function mounted() {
    this.open = this.defaultOpen;

    if (this.defaultOpen) {
      this.expandSection(this.$refs.content.$el);
    }

    if (this.filter.value) {
      if (!isNaN(this.filter.value.lowerValue)) {
        this.internalValue.lowerValue = this.filter.value.lowerValue;
      } else {
        this.internalValue.lowerValue = this.filter.min;
      }

      if (!isNaN(this.filter.value.upperValue)) {
        this.internalValue.upperValue = this.filter.value.upperValue;
      } else {
        this.internalValue.upperValue = this.filter.value.upperValue;
      }
    } else {
      this.internalValue.lowerValue = this.filter.min;
      this.internalValue.upperValue = this.filter.max;
    }

    var self = this;
    self.$watch("value", self.handleUpdate, {
      deep: true,
    }); // this.$watch("filter.value.lowerValue", this.handleUpdate, { deep: true });
    // this.$watch("filter.value.upperValue", this.handleUpdate, { deep: true });
  },
  methods: {
    collapseSection: function collapseSection(element) {
      // pulled from https://css-tricks.com/using-css-transitions-auto-dimensions/ and modified
      // get the height of the element's inner content, regardless of its actual size
      var sectionHeight = element.scrollHeight; // temporarily disable all css transitions

      var elementTransition = element.style.transition;
      element.style.transition = "";
      element.style.height = sectionHeight + "px !important";
      element.style.overflowY = "hidden"; // element.style.width = sectionWidth + "px !important";
      // on the next frame (as soon as the previous style change has taken effect),
      // explicitly set the element's height to its current pixel height, so we
      // aren't transitioning out of 'auto'

      requestAnimationFrame(function() {
        element.style.height = sectionHeight + "px"; // element.style.width = sectionWidth + "px";

        element.style.transition = elementTransition; // element.style.overflowY = 'hidden';
        // on the next frame (as soon as the previous style change has taken effect),
        // have the element transition to height: 0

        requestAnimationFrame(function() {
          element.style.height = 0 + "px"; // element.style.width = "0px";

          element.style.paddingBottom = "0px";
        });
      }); // mark the section as "currently collapsed"

      element.setAttribute("data-collapsed", "true");
    },
    expandSection: function expandSection(element) {
      // pulled from https://css-tricks.com/using-css-transitions-auto-dimensions/ and modified
      // get the height of the element's inner content, regardless of its actual size
      var sectionHeight = element.scrollHeight; // have the element transition to the height of its inner content

      element.style.height = sectionHeight + "px"; // element.style.width = sectionWidth + "px";

      element.style.paddingBottom = "5px"; // element.style.overflowY = "auto"
      // when the next css transition finishes (which should be the one we just triggered)

      element.addEventListener("transitionend", function() {
        // remove this event listener so it only gets triggered once
        element.removeEventListener("transitionend", this);

        if (element.getAttribute("data-collapsed") == "false") {
          // remove "height" from the element's inline styles, so it can return to its initial value
          element.style.height = "auto";
          element.style.overflowY = "visible";
        }
      }); // mark the section as "currently not collapsed"

      element.setAttribute("data-collapsed", "false");
    },
    bubbleInput: function bubbleInput($event) {
      this.internalValue = $event;
      this.$emit("input", this.internalValue);
    },
    bubbleChange: function bubbleChange($event) {
      this.internalValue = $event;
      this.$emit("change", this.internalValue);
    },
    handleUpdate: function handleUpdate(value) {
      this.internalValue.lowerValue = this.value.lowerValue;
      this.internalValue.upperValue = this.value.upperValue;
    },
    toggle: function toggle() {
      if (!this.open) {
        this.expandSection(this.$refs.content.$el);
        this.open = true;
      } else {
        this.collapseSection(this.$refs.content.$el);
        this.open = false;
      }
    },
  },
  computed: {
    computedStep: function computedStep() {
      if (this.filter.numeric_type == "range") {
        return [this.filter.step];
      } else {
        return this.filter.steps;
      }
    },
    computeClass: function computeClass() {
      if (this.open) {
        return ["sidebar-open-carat"];
      }

      return [];
    },
  },
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
const __vue_script__ = NumericFilter;

/* template */
var __vue_render__ = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c(
    "numeric-container",
    [
      _c(
        "n-button",
        {
          staticClass: "numeric-button",
          attrs: { block: true, flavor: _vm.flavor },
          on: { click: _vm.toggle },
        },
        [
          _c(
            "span",
            [
              _vm._v("\n      " + _vm._s(_vm.filter.display) + "\n      "),
              _c("badge", { attrs: { flavor: _vm.activeBadgeFlavor } }, [
                _vm._v("Active"),
              ]),
            ],
            1
          ),
          _vm._v(" "),
          _c("numeric-carat", {
            class: _vm.computeClass,
            attrs: { flavor: _vm.flavor, disabled: _vm.filter.disabled },
          }),
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "numeric-content-container",
        { ref: "content" },
        [
          _c("number-range", {
            attrs: {
              max: _vm.filter.max,
              min: _vm.filter.min,
              steps: _vm.computedStep,
              label: _vm.filter.display,
              "label-flavor": _vm.textFlavor,
              name: _vm.name,
            },
            on: { input: _vm.bubbleInput, change: _vm.bubbleChange },
            model: {
              value: _vm.value,
              callback: function($$v) {
                _vm.value = $$v;
              },
              expression: "value",
            },
          }),
          _vm._v(" "),
          _c("text", { attrs: { flavor: _vm.textFlavor } }, [
            _vm._v(_vm._s(_vm.helpText)),
          ]),
        ],
        1
      ),
    ],
    1
  );
};
var __vue_staticRenderFns__ = [];
__vue_render__._withStripped = true;

/* style */
const __vue_inject_styles__ = function(inject) {
  if (!inject) return;
  inject("data-v-dde6a1e4_0", {
    source:
      "\n.numeric-content-input {\r\n  width: calc(100% - 10px);\r\n  margin-left: 5px;\n}\n.numeric-button {\r\n  justify-content: space-between;\r\n  display: flex;\r\n  align-items: center;\n}\n.numeric-open-carat {\r\n  transform: rotate(135deg) !important;\n}\n.drag-rail {\r\n  width: 100%;\r\n  height: 2px;\r\n  background-color: gray;\n}\n.drag-container {\r\n  height: 45px;\r\n  display: flex;\r\n  align-items: center;\r\n  position: relative;\r\n  width: 100%;\n}\n.dragger {\r\n  background-color: red;\r\n  height: 15px;\r\n  width: 15px;\r\n  position: absolute;\r\n  cursor: pointer;\n}\r\n",
    map: {
      version: 3,
      sources: [
        "C:\\Users\\pedro\\Documents\\Work\\Storybook\\src\\components\\Storefront\\NumericFilter\\src\\NumericFilter.vue",
      ],
      names: [],
      mappings:
        ";AA2QA;EACA,wBAAA;EACA,gBAAA;AACA;AACA;EACA,8BAAA;EACA,aAAA;EACA,mBAAA;AACA;AACA;EACA,oCAAA;AACA;AAEA;EACA,WAAA;EACA,WAAA;EACA,sBAAA;AACA;AACA;EACA,YAAA;EACA,aAAA;EACA,mBAAA;EACA,kBAAA;EACA,WAAA;AACA;AACA;EACA,qBAAA;EACA,YAAA;EACA,WAAA;EACA,kBAAA;EACA,eAAA;AACA",
      file: "NumericFilter.vue",
      sourcesContent: [
        '<template>\r\n  <numeric-container>\r\n    <n-button\r\n      :block="true"\r\n      :flavor="flavor"\r\n      @click="toggle"\r\n      class="numeric-button"\r\n    >\r\n      <span>\r\n        {{ filter.display }}\r\n        <badge :flavor="activeBadgeFlavor">Active</badge>\r\n      </span>\r\n      <numeric-carat\r\n        :flavor="flavor"\r\n        :class="computeClass"\r\n        :disabled="filter.disabled"\r\n      ></numeric-carat>\r\n    </n-button>\r\n    <numeric-content-container ref="content">\r\n      <number-range\r\n        :max="filter.max"\r\n        :min="filter.min"\r\n        :steps="computedStep"\r\n        :label="filter.display"\r\n        :label-flavor="textFlavor"\r\n        :name="name"\r\n        v-model="value"\r\n        @input="bubbleInput"\r\n        @change="bubbleChange"\r\n      ></number-range>\r\n      <text :flavor="textFlavor">{{ helpText }}</text>\r\n    </numeric-content-container>\r\n  </numeric-container>\r\n</template>\r\n\r\n<script>\r\nimport { NButton } from "@intus/button";\r\nimport Badge from "@intus/badge";\r\nimport { NText } from "@intus/typography";\r\nimport NumberRange from "@intus/number-range";\r\nimport styled from "vue-styled-components";\r\nimport Theme from "@intus/design-system";\r\nconst NumericContainer = styled.div`\r\n  width: 100%;\r\n`;\r\nconst props = {\r\n  flavor: String,\r\n  disabled: Boolean,\r\n  active: Boolean,\r\n  defaultTheme: {\r\n    type: Object,\r\n    default: function() {\r\n      return Theme;\r\n    }\r\n  }\r\n};\r\nconst NumericCarat = styled("div", props)`\r\n  background-image: linear-gradient(\r\n    to top right,\r\n    transparent 50%,\r\n    ${props =>\r\n        props.disabled\r\n          ? "rgba(0, 0, 0, 0.3)"\r\n          : props.theme && props.theme[props.flavor]\r\n          ? props.theme[props.flavor].color.color\r\n          : props.defaultTheme[props.flavor]\r\n          ? props.defaultTheme[props.flavor].color.color\r\n          : "#222"}\r\n      50%\r\n  );\r\n  float: right;\r\n  width: 0.5rem;\r\n  height: 0.5rem;\r\n  transform: rotate(45deg);\r\n  transition: 0.3s all;\r\n  display: inline-block;\r\n`;\r\nconst NumericContentContainer = styled.div`\r\n  transition: 0.3s height;\r\n  margin-top: 3px;\r\n  height: 0px;\r\n  overflow-y: hidden;\r\n`;\r\n\r\nexport const NumericFilter = {\r\n  components: {\r\n    NButton,\r\n    NumericContainer,\r\n    NumericCarat,\r\n    NumericContentContainer,\r\n    NumberRange,\r\n    Badge,\r\n    NText\r\n  },\r\n  data() {\r\n    return {\r\n      open: false,\r\n      internalValue: {\r\n        lowerValue: 0,\r\n        upperValue: 0\r\n      }\r\n    };\r\n  },\r\n  props: {\r\n    value: {\r\n      type: Object,\r\n      default() {\r\n        return {\r\n          lowValue: 0,\r\n          highValue: 0\r\n        };\r\n      }\r\n    },\r\n    name: {\r\n      type: String,\r\n      required: true\r\n    },\r\n    filter: {\r\n      type: Object,\r\n      required: true\r\n    },\r\n    defaultOpen: {\r\n      type: Boolean,\r\n      default: false\r\n    },\r\n    activeBadgeFlavor: {\r\n      type: String,\r\n      default: "Light"\r\n    },\r\n    flavor: {\r\n      type: String,\r\n      default: "Dark"\r\n    },\r\n    textFlavor: {\r\n      type: String,\r\n      default: ""\r\n    },\r\n    helpText: {\r\n      type: String,\r\n      default: ""\r\n    }\r\n  },\r\n  mounted() {\r\n    this.open = this.defaultOpen;\r\n    if (this.defaultOpen) {\r\n      this.expandSection(this.$refs.content.$el);\r\n    }\r\n    if (this.filter.value) {\r\n      if (!isNaN(this.filter.value.lowerValue)) {\r\n        this.internalValue.lowerValue = this.filter.value.lowerValue;\r\n      } else {\r\n        this.internalValue.lowerValue = this.filter.min;\r\n      }\r\n      if (!isNaN(this.filter.value.upperValue)) {\r\n        this.internalValue.upperValue = this.filter.value.upperValue;\r\n      } else {\r\n        this.internalValue.upperValue = this.filter.value.upperValue;\r\n      }\r\n    } else {\r\n      this.internalValue.lowerValue = this.filter.min;\r\n      this.internalValue.upperValue = this.filter.max;\r\n    }\r\n\r\n    let self = this;\r\n    self.$watch("value", self.handleUpdate, { deep: true });\r\n    // this.$watch("filter.value.lowerValue", this.handleUpdate, { deep: true });\r\n    // this.$watch("filter.value.upperValue", this.handleUpdate, { deep: true });\r\n  },\r\n  methods: {\r\n    collapseSection(element) {\r\n      // pulled from https://css-tricks.com/using-css-transitions-auto-dimensions/ and modified\r\n      // get the height of the element\'s inner content, regardless of its actual size\r\n      let sectionHeight = element.scrollHeight;\r\n      // temporarily disable all css transitions\r\n      var elementTransition = element.style.transition;\r\n      element.style.transition = "";\r\n      element.style.height = sectionHeight + "px !important";\r\n      element.style.overflowY = "hidden";\r\n      // element.style.width = sectionWidth + "px !important";\r\n\r\n      // on the next frame (as soon as the previous style change has taken effect),\r\n      // explicitly set the element\'s height to its current pixel height, so we\r\n      // aren\'t transitioning out of \'auto\'\r\n      requestAnimationFrame(function() {\r\n        element.style.height = sectionHeight + "px";\r\n        // element.style.width = sectionWidth + "px";\r\n        element.style.transition = elementTransition;\r\n        // element.style.overflowY = \'hidden\';\r\n\r\n        // on the next frame (as soon as the previous style change has taken effect),\r\n        // have the element transition to height: 0\r\n        requestAnimationFrame(function() {\r\n          element.style.height = 0 + "px";\r\n          // element.style.width = "0px";\r\n          element.style.paddingBottom = "0px";\r\n        });\r\n      });\r\n\r\n      // mark the section as "currently collapsed"\r\n      element.setAttribute("data-collapsed", "true");\r\n    },\r\n    expandSection(element) {\r\n      // pulled from https://css-tricks.com/using-css-transitions-auto-dimensions/ and modified\r\n      // get the height of the element\'s inner content, regardless of its actual size\r\n      let sectionHeight = element.scrollHeight;\r\n      // have the element transition to the height of its inner content\r\n      element.style.height = sectionHeight + "px";\r\n      // element.style.width = sectionWidth + "px";\r\n\r\n      element.style.paddingBottom = "5px";\r\n      // element.style.overflowY = "auto"\r\n      // when the next css transition finishes (which should be the one we just triggered)\r\n      element.addEventListener("transitionend", function() {\r\n        // remove this event listener so it only gets triggered once\r\n        element.removeEventListener("transitionend", this);\r\n        if (element.getAttribute("data-collapsed") == "false") {\r\n          // remove "height" from the element\'s inline styles, so it can return to its initial value\r\n          element.style.height = "auto";\r\n          element.style.overflowY = "visible";\r\n        }\r\n      });\r\n\r\n      // mark the section as "currently not collapsed"\r\n      element.setAttribute("data-collapsed", "false");\r\n    },\r\n    bubbleInput($event) {\r\n      this.internalValue = $event;\r\n      this.$emit("input", this.internalValue);\r\n    },\r\n    bubbleChange($event) {\r\n      this.internalValue = $event;\r\n      this.$emit("change", this.internalValue);\r\n    },\r\n    handleUpdate(value) {\r\n      this.internalValue.lowerValue = this.value.lowerValue;\r\n      this.internalValue.upperValue = this.value.upperValue;\r\n    },\r\n    toggle() {\r\n      if (!this.open) {\r\n        this.expandSection(this.$refs.content.$el);\r\n        this.open = true;\r\n      } else {\r\n        this.collapseSection(this.$refs.content.$el);\r\n        this.open = false;\r\n      }\r\n    }\r\n  },\r\n  computed: {\r\n    computedStep() {\r\n      if (this.filter.numeric_type == "range") {\r\n        return [this.filter.step];\r\n      } else {\r\n        return this.filter.steps;\r\n      }\r\n    },\r\n    computeClass() {\r\n      if (this.open) {\r\n        return ["sidebar-open-carat"];\r\n      }\r\n      return [];\r\n    }\r\n  }\r\n};\r\nexport default NumericFilter;\r\n</script>\r\n\r\n<style>\r\n.numeric-content-input {\r\n  width: calc(100% - 10px);\r\n  margin-left: 5px;\r\n}\r\n.numeric-button {\r\n  justify-content: space-between;\r\n  display: flex;\r\n  align-items: center;\r\n}\r\n.numeric-open-carat {\r\n  transform: rotate(135deg) !important;\r\n}\r\n\r\n.drag-rail {\r\n  width: 100%;\r\n  height: 2px;\r\n  background-color: gray;\r\n}\r\n.drag-container {\r\n  height: 45px;\r\n  display: flex;\r\n  align-items: center;\r\n  position: relative;\r\n  width: 100%;\r\n}\r\n.dragger {\r\n  background-color: red;\r\n  height: 15px;\r\n  width: 15px;\r\n  position: absolute;\r\n  cursor: pointer;\r\n}\r\n</style>\r\n',
      ],
    },
    media: undefined,
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

var install = function installNumericFilter(Vue) {
  if (install.installed) return;
  install.installed = true;
  Vue.component("NumericFilter", __vue_component__);
}; // Create module definition for Vue.use()

var plugin = {
  install: install,
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
//# sourceMappingURL=NumericFilter.esm.js.map
