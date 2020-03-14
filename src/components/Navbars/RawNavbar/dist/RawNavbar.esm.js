import { NavbarContainer, NavbarTitle, NavbarContentContainer } from '@IntusFacultas/navbar';
import { NButton } from '@IntusFacultas/button';

//
var Navbar = {
  components: {
    NavbarContainer: NavbarContainer,
    NavbarTitle: NavbarTitle,
    NavbarContentContainer: NavbarContentContainer,
    NButton: NButton
  },
  data: function data() {
    return {
      open: false,
      contentWidth: 0,
      containerWidth: 0,
      navHeight: 0,
      titleWidth: 0
    };
  },
  mounted: function mounted() {
    var self = this;
    this.calculateDimensions();
    window.addEventListener("resize", this.debounce(this.calculateDimensions, 10, true), {
      passive: true
    });
    window.addEventListener("click", self.checkOffclick);
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
    }
  },
  methods: {
    collapseSection: function collapseSection(element) {
      // pulled from https://css-tricks.com/using-css-transitions-auto-dimensions/ and modified
      // get the height of the element's inner content, regardless of its actual size
      var sectionHeight = element.scrollHeight; // temporarily disable all css transitions

      var elementTransition = element.style.transition;
      element.style.transition = "";
      element.style.height = sectionHeight + "px !important"; // element.style.width = sectionWidth + "px !important";
      // on the next frame (as soon as the previous style change has taken effect),
      // explicitly set the element's height to its current pixel height, so we
      // aren't transitioning out of 'auto'

      requestAnimationFrame(function () {
        element.style.height = sectionHeight + "px"; // element.style.width = sectionWidth + "px";

        element.style.transition = elementTransition; // element.style.overflowY = 'hidden';
        // on the next frame (as soon as the previous style change has taken effect),
        // have the element transition to height: 0

        requestAnimationFrame(function () {
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
      if (typeof this.$refs.content != "undefined" && !this.collapsed) {
        var contentWidth = 0;
        var _iteratorNormalCompletion = true;
        var _didIteratorError = false;
        var _iteratorError = undefined;

        try {
          for (var _iterator = this.$refs.content.$el.children[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
            var child = _step.value;
            contentWidth += child.scrollWidth;
          }
        } catch (err) {
          _didIteratorError = true;
          _iteratorError = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion && _iterator.return != null) {
              _iterator.return();
            }
          } finally {
            if (_didIteratorError) {
              throw _iteratorError;
            }
          }
        }

        this.contentWidth = contentWidth; // this.$forceUpdate();
      }

      if (typeof this.$refs.container != "undefined") {
        if (!this.open) {
          this.navHeight = this.$refs.container.$el.clientHeight;
        }

        this.containerWidth = this.$refs.container.$el.clientWidth;
      }

      if (typeof this.$refs.title != "undefined") {
        this.titleWidth = this.$refs.title.$el.clientWidth;
      }
    },
    toggleAccordion: function toggleAccordion() {
      if (!this.open) {
        this.expandSection(this.$refs.content.$el);
        this.open = true;
      } else {
        this.collapseSection(this.$refs.content.$el);
        this.open = false;
      }
    }
  },
  watch: {
    collapsed: function collapsed(newVal) {
      if (newVal) {
        this.$refs.content.$el.style.height = "0px"; // this.$refs.content.$el.style.width =  "0px";

        this.$refs.content.$el.style.paddingBottom = "0px";
        this.$refs.content.$el.style.overflow = "hidden";
      } else {
        this.$refs.content.$el.style.height = "50px"; // this.$refs.content.$el.style.width = "initial";

        this.$refs.content.$el.style.paddingBottom = "initial";
        this.$refs.content.$el.style.overflow = "visible";
      }
    }
  },
  computed: {
    computedNavClass: function computedNavClass() {
      if (!this.collapsed) {
        return ["raw-navbar-container-uncollapsed"];
      }

      return [];
    },
    computedClass: function computedClass() {
      if (this.collapsed) {
        return ["raw-navbar-content-container", "open-raw-navbar"];
      }

      return ["raw-navbar-content-container"];
    },
    collapsed: function collapsed() {
      return this.contentWidth >= this.collapseCutOff;
    },
    collapseCutOff: function collapseCutOff() {
      var additionalPadding = 30;
      return this.containerWidth - this.titleWidth - additionalPadding;
    }
  }
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
      class: _vm.computedNavClass,
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
        {
          ref: "content",
          class: _vm.computedClass,
          attrs: { collapsed: _vm.collapsed }
        },
        [_vm._t("default")],
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
    inject("data-v-219c6e75_0", { source: "\n.navbar-brand {\r\n  display: inline-block;\r\n  padding-right: 5px;\n}\n.navbar-open-carat {\r\n  transform: rotate(135deg) !important;\r\n  margin-bottom: 4px;\n}\n.open {\r\n  max-height: 1980px !important;\n}\n.nav-button {\r\n  height: 37px;\r\n  margin-top: 0.4rem;\r\n  position: absolute;\r\n  right: 20px;\n}\n.raw-navbar-container-uncollapsed {\r\n  height: 50px;\r\n  overflow: visible;\n}\n.raw-navbar-content-container {\r\n  transition: height 0.3s ease-out;\r\n  max-width: initial !important;\r\n  max-height: initial !important;\r\n  overflow: hidden;\n}\n.open-raw-navbar * {\r\n  flex-direction: column;\n}\r\n", map: {"version":3,"sources":["C:\\Users\\pedro\\Documents\\Personal Projects\\GitHub\\storybook\\storybook\\src\\components\\Navbars\\RawNavbar\\src\\RawNavbar.vue"],"names":[],"mappings":";AAmPA;EACA,qBAAA;EACA,kBAAA;AACA;AACA;EACA,oCAAA;EACA,kBAAA;AACA;AACA;EACA,6BAAA;AACA;AACA;EACA,YAAA;EACA,kBAAA;EACA,kBAAA;EACA,WAAA;AACA;AACA;EACA,YAAA;EACA,iBAAA;AACA;AACA;EACA,gCAAA;EACA,6BAAA;EACA,8BAAA;EACA,gBAAA;AACA;AACA;EACA,sBAAA;AACA","file":"RawNavbar.vue","sourcesContent":["<template>\r\n  <navbar-container\r\n    :flavor=\"flavor\"\r\n    ref=\"container\"\r\n    :fixed=\"fixed\"\r\n    :collapsed=\"collapsed\"\r\n    :class=\"computedNavClass\"\r\n  >\r\n    <navbar-title ref=\"title\" tabindex=\"1\">\r\n      <div v-html=\"title.html\" class=\"navbar-brand\"></div>\r\n      <a :href=\"title.url ? title.url : '#'\">{{ title.text }}</a>\r\n    </navbar-title>\r\n    <n-button\r\n      tabindex=\"1\"\r\n      class=\"nav-button\"\r\n      v-show=\"collapsed\"\r\n      :flavor=\"flavor\"\r\n      @click=\"toggleAccordion\"\r\n      ref=\"hamburger\"\r\n      >&#9776;</n-button\r\n    >\r\n    <navbar-content-container\r\n      :collapsed=\"collapsed\"\r\n      ref=\"content\"\r\n      :class=\"computedClass\"\r\n    >\r\n      <slot></slot>\r\n    </navbar-content-container>\r\n  </navbar-container>\r\n</template>\r\n<script>\r\nimport {\r\n  NavbarContainer,\r\n  NavbarTitle,\r\n  NavbarContentContainer\r\n} from \"@IntusFacultas/navbar\";\r\nimport { NButton } from \"@IntusFacultas/button\";\r\nexport const Navbar = {\r\n  components: {\r\n    NavbarContainer,\r\n    NavbarTitle,\r\n    NavbarContentContainer,\r\n    NButton\r\n  },\r\n  data: () => {\r\n    return {\r\n      open: false,\r\n      contentWidth: 0,\r\n      containerWidth: 0,\r\n      navHeight: 0,\r\n      titleWidth: 0\r\n    };\r\n  },\r\n  mounted() {\r\n    let self = this;\r\n    this.calculateDimensions();\r\n    window.addEventListener(\r\n      \"resize\",\r\n      this.debounce(this.calculateDimensions, 10, true),\r\n      {\r\n        passive: true\r\n      }\r\n    );\r\n    window.addEventListener(\"click\", self.checkOffclick);\r\n  },\r\n  beforeDestroy() {\r\n    let self = this;\r\n    window.removeEventListener(\"click\", self.checkOffclick);\r\n    window.removeEventListener(\r\n      \"resize\",\r\n      this.debounce(this.calculateDimensions, 10, true)\r\n    );\r\n  },\r\n  updated() {\r\n    this.calculateDimensions();\r\n  },\r\n  props: {\r\n    title: {\r\n      type: Object,\r\n      default: () => {\r\n        return {\r\n          text: \"Brand\",\r\n          url: \"#\",\r\n          html: \"\"\r\n        };\r\n      }\r\n    },\r\n    fixed: {\r\n      type: Boolean,\r\n      default: false\r\n    },\r\n    flavor: {\r\n      type: String,\r\n      default: \"\"\r\n    }\r\n  },\r\n  methods: {\r\n    collapseSection(element) {\r\n      // pulled from https://css-tricks.com/using-css-transitions-auto-dimensions/ and modified\r\n      // get the height of the element's inner content, regardless of its actual size\r\n      let sectionHeight = element.scrollHeight;\r\n      // temporarily disable all css transitions\r\n      var elementTransition = element.style.transition;\r\n      element.style.transition = \"\";\r\n      element.style.height = sectionHeight + \"px !important\";\r\n      // element.style.width = sectionWidth + \"px !important\";\r\n\r\n      // on the next frame (as soon as the previous style change has taken effect),\r\n      // explicitly set the element's height to its current pixel height, so we\r\n      // aren't transitioning out of 'auto'\r\n      requestAnimationFrame(function() {\r\n        element.style.height = sectionHeight + \"px\";\r\n        // element.style.width = sectionWidth + \"px\";\r\n        element.style.transition = elementTransition;\r\n        // element.style.overflowY = 'hidden';\r\n\r\n        // on the next frame (as soon as the previous style change has taken effect),\r\n        // have the element transition to height: 0\r\n        requestAnimationFrame(function() {\r\n          element.style.height = 0 + \"px\";\r\n          // element.style.width = \"0px\";\r\n          element.style.paddingBottom = \"0px\";\r\n        });\r\n      });\r\n\r\n      // mark the section as \"currently collapsed\"\r\n      element.setAttribute(\"data-collapsed\", \"true\");\r\n    },\r\n    expandSection(element) {\r\n      // pulled from https://css-tricks.com/using-css-transitions-auto-dimensions/ and modified\r\n      // get the height of the element's inner content, regardless of its actual size\r\n      let sectionHeight = element.scrollHeight;\r\n      // have the element transition to the height of its inner content\r\n      element.style.height = sectionHeight + \"px\";\r\n      // element.style.width = sectionWidth + \"px\";\r\n\r\n      element.style.paddingBottom = \"5px\";\r\n      // element.style.overflowY = \"auto\"\r\n      // when the next css transition finishes (which should be the one we just triggered)\r\n      element.addEventListener(\"transitionend\", function() {\r\n        // remove this event listener so it only gets triggered once\r\n        element.removeEventListener(\"transitionend\", this);\r\n        if (element.getAttribute(\"data-collapsed\") == \"false\") {\r\n          // remove \"height\" from the element's inline styles, so it can return to its initial value\r\n          element.style.height = \"auto\";\r\n        }\r\n      });\r\n\r\n      // mark the section as \"currently not collapsed\"\r\n      element.setAttribute(\"data-collapsed\", \"false\");\r\n    },\r\n    debounce(func, wait, immediate) {\r\n      /**\r\n       * Pulled from: https://davidwalsh.name/javascript-debounce-function\r\n       */\r\n      var timeout;\r\n      return function() {\r\n        var context = this,\r\n          args = arguments;\r\n        var later = function() {\r\n          timeout = null;\r\n          if (!immediate) func.apply(context, args);\r\n        };\r\n        var callNow = immediate && !timeout;\r\n        clearTimeout(timeout);\r\n        timeout = setTimeout(later, wait);\r\n        try {\r\n          if (callNow) func.apply(context, args);\r\n        } catch {\r\n          // pass\r\n        }\r\n      };\r\n    },\r\n    calculateDimensions() {\r\n      if (typeof this.$refs.content != \"undefined\" && !this.collapsed) {\r\n        let contentWidth = 0;\r\n        for (let child of this.$refs.content.$el.children) {\r\n          contentWidth += child.scrollWidth;\r\n        }\r\n        this.contentWidth = contentWidth;\r\n        // this.$forceUpdate();\r\n      }\r\n      if (typeof this.$refs.container != \"undefined\") {\r\n        if (!this.open) {\r\n          this.navHeight = this.$refs.container.$el.clientHeight;\r\n        }\r\n        this.containerWidth = this.$refs.container.$el.clientWidth;\r\n      }\r\n      if (typeof this.$refs.title != \"undefined\") {\r\n        this.titleWidth = this.$refs.title.$el.clientWidth;\r\n      }\r\n    },\r\n    toggleAccordion() {\r\n      if (!this.open) {\r\n        this.expandSection(this.$refs.content.$el);\r\n        this.open = true;\r\n      } else {\r\n        this.collapseSection(this.$refs.content.$el);\r\n        this.open = false;\r\n      }\r\n    }\r\n  },\r\n  watch: {\r\n    collapsed(newVal) {\r\n      if (newVal) {\r\n        this.$refs.content.$el.style.height = \"0px\";\r\n        // this.$refs.content.$el.style.width =  \"0px\";\r\n        this.$refs.content.$el.style.paddingBottom = \"0px\";\r\n        this.$refs.content.$el.style.overflow = \"hidden\";\r\n      } else {\r\n        this.$refs.content.$el.style.height = \"50px\";\r\n        // this.$refs.content.$el.style.width = \"initial\";\r\n        this.$refs.content.$el.style.paddingBottom = \"initial\";\r\n        this.$refs.content.$el.style.overflow = \"visible\";\r\n      }\r\n    }\r\n  },\r\n  computed: {\r\n    computedNavClass() {\r\n      if (!this.collapsed) {\r\n        return [\"raw-navbar-container-uncollapsed\"];\r\n      }\r\n      return [];\r\n    },\r\n    computedClass() {\r\n      if (this.collapsed) {\r\n        return [\"raw-navbar-content-container\", \"open-raw-navbar\"];\r\n      }\r\n      return [\"raw-navbar-content-container\"];\r\n    },\r\n    collapsed() {\r\n      return this.contentWidth >= this.collapseCutOff;\r\n    },\r\n    collapseCutOff() {\r\n      let additionalPadding = 30;\r\n      return this.containerWidth - this.titleWidth - additionalPadding;\r\n    }\r\n  }\r\n};\r\nexport default Navbar;\r\n</script>\r\n\r\n<style>\r\n.navbar-brand {\r\n  display: inline-block;\r\n  padding-right: 5px;\r\n}\r\n.navbar-open-carat {\r\n  transform: rotate(135deg) !important;\r\n  margin-bottom: 4px;\r\n}\r\n.open {\r\n  max-height: 1980px !important;\r\n}\r\n.nav-button {\r\n  height: 37px;\r\n  margin-top: 0.4rem;\r\n  position: absolute;\r\n  right: 20px;\r\n}\r\n.raw-navbar-container-uncollapsed {\r\n  height: 50px;\r\n  overflow: visible;\r\n}\r\n.raw-navbar-content-container {\r\n  transition: height 0.3s ease-out;\r\n  max-width: initial !important;\r\n  max-height: initial !important;\r\n  overflow: hidden;\r\n}\r\n.open-raw-navbar * {\r\n  flex-direction: column;\r\n}\r\n</style>\r\n"]}, media: undefined });

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

var install = function installRawNavbar(Vue) {
  if (install.installed) return;
  install.installed = true;
  Vue.component("RawNavbar", __vue_component__);
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
//# sourceMappingURL=RawNavbar.esm.js.map
