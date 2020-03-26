import styled from 'vue-styled-components';

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
  var data = _taggedTemplateLiteral(["\n  width: calc(100% - 85px);\n  display: inline-block;\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n  animation: shimmer 2.5s infinite;\n  background: linear-gradient(to right, #eff1f3 4%, #e2e2e2 25%, #eff1f3 36%);\n  background-size: 1000px 100%;\n  height: ", ";\n  margin: 10px 10px;\n  border-radius: 8px;\n  width: ", ";\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  animation: shimmer 2.5s infinite;\n  background: linear-gradient(to right, #eff1f3 4%, #e2e2e2 25%, #eff1f3 36%);\n  background-size: 1000px 100%;\n  height: 10px;\n  display: inline-block;\n  margin: 10px 0px;\n  border-radius: 8px;\n  width: ", "%;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  height: ", ";\n  padding: 15px;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}
var props = {
  height: {
    type: String,
    default: "50px"
  },
  width: {
    type: [String, Number],
    default: "50px"
  }
};
var PlaceholderContainer = styled("div", props)(_templateObject(), function (props) {
  return props.height;
});
var PlaceholderLine = styled("div", props)(_templateObject2(), function (props) {
  return props.width;
});
var PlaceholderPicture = styled("div", props)(_templateObject3(), function (props) {
  return props.height;
}, function (props) {
  return props.width;
});
var ParagraphLineHolder = styled.div(_templateObject4());
var PlaceholderParagraph = {
  components: {
    PlaceholderLine: PlaceholderLine,
    PlaceholderPicture: PlaceholderPicture,
    ParagraphLineHolder: ParagraphLineHolder
  },
  methods: {
    getWidth: function getWidth() {
      return Math.random() * (100 - 85) + 85;
    }
  },
  template: "\n    <div>\n        <div>\n            <placeholder-picture height=\"78px\" width=\"60px\" class=\"paragraph\"></placeholder-picture>\n            <paragraph-line-holder>\n                <placeholder-line :width=\"getWidth()\" class=\"paragraph\"></placeholder-line>\n                <placeholder-line :width=\"getWidth()\" class=\"paragraph\"></placeholder-line>\n                <placeholder-line :width=\"getWidth()\" class=\"paragraph\"></placeholder-line>\n            </paragraph-line-holder>\n        </div>\n        <placeholder-line :width=\"getWidth()\"></placeholder-line>\n        <placeholder-line :width=\"getWidth()\"></placeholder-line>\n    </div>\n    "
};
var Placeholder = {
  components: {
    PlaceholderContainer: PlaceholderContainer,
    PlaceholderLine: PlaceholderLine,
    PlaceholderParagraph: PlaceholderParagraph
  },
  data: function data() {
    return {
      PLACEHOLDER_LINE_HEIGHT: 30,
      PARAGRAPH_HEIGHT: 170,
      PADDING_BUFFER: 30,
      internals: {
        paragraphs: 0,
        lines: 0
      }
    };
  },
  props: {
    height: {
      type: String,
      default: "50px"
    },
    paragraphs: {
      type: Boolean,
      default: true
    }
  },
  watch: {
    height: function height() {
      var _this = this;

      this.$nextTick(function () {
        _this.internals = _this.calculateInternals();

        _this.$forceUpdate();
      });
    }
  },
  mounted: function mounted() {
    var _this2 = this;

    this.$nextTick(function () {
      _this2.internals = _this2.calculateInternals();
    });
  },
  methods: {
    getWidth: function getWidth() {
      return Math.random() * (100 - 85) + 85;
    },
    calculateInternals: function calculateInternals() {
      var availableSpace = this.$refs.container.$el.scrollHeight - this.PADDING_BUFFER;

      if (!this.paragraphs) {
        return {
          paragraphs: 0,
          lines: parseInt(availableSpace / this.PLACEHOLDER_LINE_HEIGHT)
        };
      } else {
        var maxParagraphs = parseInt(availableSpace / this.PARAGRAPH_HEIGHT);
        var remainingSpace = parseInt(availableSpace % this.PARAGRAPH_HEIGHT / this.PLACEHOLDER_LINE_HEIGHT);
        return {
          paragraphs: maxParagraphs,
          lines: remainingSpace
        };
      }
    }
  },
  computed: {}
};

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
const __vue_script__ = Placeholder;

/* template */
var __vue_render__ = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c(
    "placeholder-container",
    { ref: "container", attrs: { height: _vm.height } },
    [
      _vm._l(_vm.internals.paragraphs, function(paragraph, paragraphIndex) {
        return _c("placeholder-paragraph", {
          key: "paragraph" + paragraphIndex
        })
      }),
      _vm._v(" "),
      _vm._l(_vm.internals.lines, function(line, index) {
        return _c("placeholder-line", {
          key: index,
          attrs: { width: _vm.getWidth() }
        })
      })
    ],
    2
  )
};
var __vue_staticRenderFns__ = [];
__vue_render__._withStripped = true;

  /* style */
  const __vue_inject_styles__ = function (inject) {
    if (!inject) return
    inject("data-v-4177adff_0", { source: "\n@keyframes shimmer {\n0% {\r\n    background-position: -1000px 0;\n}\n100% {\r\n    background-position: 1000px 0;\n}\n}\n.paragraph {\r\n  display: inline-block;\n}\r\n", map: {"version":3,"sources":["C:\\Users\\pedro\\Documents\\Personal Projects\\GitHub\\storybook\\storybook\\src\\components\\Placeholder\\src\\Placeholder.vue"],"names":[],"mappings":";AAwIA;AACA;IACA,8BAAA;AACA;AACA;IACA,6BAAA;AACA;AACA;AACA;EACA,qBAAA;AACA","file":"Placeholder.vue","sourcesContent":["<template>\r\n  <placeholder-container ref=\"container\" :height=\"height\">\r\n    <placeholder-paragraph\r\n      v-for=\"(paragraph, paragraphIndex) in internals.paragraphs\"\r\n      :key=\"`paragraph${paragraphIndex}`\"\r\n    ></placeholder-paragraph>\r\n    <placeholder-line v-for=\"(line, index) in internals.lines\" :key=\"index\" :width=\"getWidth()\"></placeholder-line>\r\n  </placeholder-container>\r\n</template>\r\n\r\n<script>\r\nimport styled from \"vue-styled-components\";\r\n\r\nconst props = {\r\n  height: {\r\n    type: String,\r\n    default: \"50px\"\r\n  },\r\n  width: {\r\n    type: [String, Number],\r\n    default: \"50px\"\r\n  }\r\n};\r\nconst PlaceholderContainer = styled(\"div\", props)`\r\n  height: ${props => props.height};\r\n  padding: 15px;\r\n`;\r\nconst PlaceholderLine = styled(\"div\", props)`\r\n  animation: shimmer 2.5s infinite;\r\n  background: linear-gradient(to right, #eff1f3 4%, #e2e2e2 25%, #eff1f3 36%);\r\n  background-size: 1000px 100%;\r\n  height: 10px;\r\n  display: inline-block;\r\n  margin: 10px 0px;\r\n  border-radius: 8px;\r\n  width: ${props => props.width}%;\r\n`;\r\nexport const PlaceholderPicture = styled(\"div\", props)`\r\n  animation: shimmer 2.5s infinite;\r\n  background: linear-gradient(to right, #eff1f3 4%, #e2e2e2 25%, #eff1f3 36%);\r\n  background-size: 1000px 100%;\r\n  height: ${props => props.height};\r\n  margin: 10px 10px;\r\n  border-radius: 8px;\r\n  width: ${props => props.width};\r\n`;\r\nexport const ParagraphLineHolder = styled.div`\r\n  width: calc(100% - 85px);\r\n  display: inline-block;\r\n`;\r\nconst PlaceholderParagraph = {\r\n  components: { PlaceholderLine, PlaceholderPicture, ParagraphLineHolder },\r\n  methods: {\r\n    getWidth() {\r\n      return Math.random() * (100 - 85) + 85;\r\n    }\r\n  },\r\n  template: `\r\n    <div>\r\n        <div>\r\n            <placeholder-picture height=\"78px\" width=\"60px\" class=\"paragraph\"></placeholder-picture>\r\n            <paragraph-line-holder>\r\n                <placeholder-line :width=\"getWidth()\" class=\"paragraph\"></placeholder-line>\r\n                <placeholder-line :width=\"getWidth()\" class=\"paragraph\"></placeholder-line>\r\n                <placeholder-line :width=\"getWidth()\" class=\"paragraph\"></placeholder-line>\r\n            </paragraph-line-holder>\r\n        </div>\r\n        <placeholder-line :width=\"getWidth()\"></placeholder-line>\r\n        <placeholder-line :width=\"getWidth()\"></placeholder-line>\r\n    </div>\r\n    `\r\n};\r\nexport const Placeholder = {\r\n  components: { PlaceholderContainer, PlaceholderLine, PlaceholderParagraph },\r\n  data() {\r\n    return {\r\n      PLACEHOLDER_LINE_HEIGHT: 30,\r\n      PARAGRAPH_HEIGHT: 170,\r\n      PADDING_BUFFER: 30,\r\n      internals: { paragraphs: 0, lines: 0 }\r\n    };\r\n  },\r\n  props: {\r\n    height: {\r\n      type: String,\r\n      default: \"50px\"\r\n    },\r\n    paragraphs: {\r\n      type: Boolean,\r\n      default: true\r\n    }\r\n  },\r\n  watch: {\r\n    height() {\r\n      this.$nextTick(() => {\r\n        this.internals = this.calculateInternals();\r\n        this.$forceUpdate();\r\n      });\r\n    }\r\n  },\r\n  mounted() {\r\n    this.$nextTick(() => {\r\n      this.internals = this.calculateInternals();\r\n    });\r\n  },\r\n  methods: {\r\n    getWidth() {\r\n      return Math.random() * (100 - 85) + 85;\r\n    },\r\n    calculateInternals() {\r\n      let availableSpace =\r\n        this.$refs.container.$el.scrollHeight - this.PADDING_BUFFER;\r\n      if (!this.paragraphs) {\r\n        return {\r\n          paragraphs: 0,\r\n          lines: parseInt(availableSpace / this.PLACEHOLDER_LINE_HEIGHT)\r\n        };\r\n      } else {\r\n        let maxParagraphs = parseInt(availableSpace / this.PARAGRAPH_HEIGHT);\r\n        let remainingSpace = parseInt(\r\n          (availableSpace % this.PARAGRAPH_HEIGHT) /\r\n            this.PLACEHOLDER_LINE_HEIGHT\r\n        );\r\n        return {\r\n          paragraphs: maxParagraphs,\r\n          lines: remainingSpace\r\n        };\r\n      }\r\n    }\r\n  },\r\n  computed: {}\r\n};\r\nexport default Placeholder;\r\n</script>\r\n\r\n<style>\r\n@keyframes shimmer {\r\n  0% {\r\n    background-position: -1000px 0;\r\n  }\r\n  100% {\r\n    background-position: 1000px 0;\r\n  }\r\n}\r\n.paragraph {\r\n  display: inline-block;\r\n}\r\n</style>\r\n"]}, media: undefined });

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
  label: "Placeholder",
  component: Placeholder
}, {
  label: "PlaceholderPicture",
  component: PlaceholderPicture
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

export { Placeholder, PlaceholderPicture };
//# sourceMappingURL=Placeholder.esm.js.map
