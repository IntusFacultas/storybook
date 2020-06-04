import { TextContent } from '@IntusFacultas/typography';
import { NButton } from '@IntusFacultas/button';
import { SidebarContainer, SidebarHamburgerContainer, SidebarTitle, SidebarContent } from '@IntusFacultas/sidebar';

//
var RawSidebar = {
  components: {
    SidebarContainer: SidebarContainer,
    SidebarHamburgerContainer: SidebarHamburgerContainer,
    SidebarTitle: SidebarTitle,
    SidebarContent: SidebarContent,
    TextContent: TextContent,
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
      element.style.padding = "0px 15px"; // on the next frame (as soon as the previous style change has taken effect),
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
      element.style.padding = "5px 15px"; // element.style.overflowY = "auto"
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
        if (obj == null) return true;
        if (obj.id == parentObj.id) return true;

        while (obj = obj.parentNode) {
          if (obj.id == parentObj.id) return true;
        }

        return false;
      }

      if (self.open && !isChild($e.target, document.getElementById("sidebar"))) {
        self.open = false;
        self.collapseSection(self.$refs.content.$el);
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
  computed: {
    computedClass: function computedClass() {
      if (this.open) {
        return {};
      }

      return ["sidebar-closed"];
    }
  },
  props: {
    sidebarTitle: {
      type: String,
      default: "Sidebar"
    },
    height: {
      type: [Number, Object],
      default: null
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
const __vue_script__ = RawSidebar;

/* template */
var __vue_render__ = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c(
    "sidebar-container",
    {
      attrs: {
        flavor: _vm.flavor,
        "top-offset": _vm.topOffset,
        "bottom-offset": _vm.bottomOffset,
        id: "sidebar",
        width: _vm.width,
        height: _vm.height,
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
            raw: true,
            flavor: _vm.flavor,
            width: _vm.width,
            breakpoint: _vm.breakpoint
          }
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
    inject("data-v-52bb532f_0", { source: "\n.sidebar-open-carat {\r\n  transform: rotate(135deg) !important;\r\n  margin-bottom: 4px;\n}\n.sidebar-icon {\r\n  display: inline-block;\n}\n.dropdown-arrow {\r\n  background-image: linear-gradient(to top right, transparent 50%, #727272 50%);\r\n  width: 0.5rem;\r\n  height: 0.5rem;\r\n  transform: rotate(135deg);\r\n  transition: 0.3s all;\r\n  display: inline-block;\n}\n.dropdown-label {\r\n  cursor: pointer;\n}\r\n", map: {"version":3,"sources":["C:\\Users\\pedro\\Documents\\Personal Projects\\GitHub\\storybook\\src\\components\\Navbars\\RawSidebar\\src\\RawSidebar.vue"],"names":[],"mappings":";AAyLA;EACA,oCAAA;EACA,kBAAA;AACA;AACA;EACA,qBAAA;AACA;AACA;EACA,6EAAA;EACA,aAAA;EACA,cAAA;EACA,yBAAA;EACA,oBAAA;EACA,qBAAA;AACA;AACA;EACA,eAAA;AACA","file":"RawSidebar.vue","sourcesContent":["<template>\r\n  <sidebar-container\r\n    :flavor=\"flavor\"\r\n    :top-offset=\"topOffset\"\r\n    :bottom-offset=\"bottomOffset\"\r\n    id=\"sidebar\"\r\n    :width=\"width\"\r\n    :height=\"height\"\r\n    :breakpoint=\"breakpoint\"\r\n  >\r\n    <sidebar-title :flavor=\"flavor\">\r\n      <text :size=\"16\">{{ sidebarTitle }}</text>\r\n      <sidebar-hamburger-container :width=\"width\" :breakpoint=\"breakpoint\">\r\n        <n-button :flavor=\"flavor\" @click=\"toggleAccordion\">&#9776;</n-button>\r\n      </sidebar-hamburger-container>\r\n    </sidebar-title>\r\n    <sidebar-content\r\n      :raw=\"true\"\r\n      :flavor=\"flavor\"\r\n      :width=\"width\"\r\n      :breakpoint=\"breakpoint\"\r\n      ref=\"content\"\r\n    >\r\n      <slot></slot>\r\n    </sidebar-content>\r\n  </sidebar-container>\r\n</template>\r\n\r\n<script>\r\nimport { TextContent } from \"@IntusFacultas/typography\";\r\nimport { NButton } from \"@IntusFacultas/button\";\r\nimport {\r\n  SidebarHamburgerContainer,\r\n  SidebarContainer,\r\n  SidebarTitle,\r\n  SidebarContent,\r\n} from \"@IntusFacultas/sidebar\";\r\nexport const RawSidebar = {\r\n  components: {\r\n    SidebarContainer,\r\n    SidebarHamburgerContainer,\r\n    SidebarTitle,\r\n    SidebarContent,\r\n    TextContent,\r\n    NButton,\r\n  },\r\n  data: function() {\r\n    return {\r\n      windowWidth: 0,\r\n      open: true,\r\n    };\r\n  },\r\n  mounted: function() {\r\n    var self = this;\r\n    window.addEventListener(\"click\", self.checkOffclick);\r\n  },\r\n  beforeDestroy() {\r\n    window.removeEventListener(\"click\", self.checkOffclick);\r\n  },\r\n  methods: {\r\n    collapseSection(element) {\r\n      // pulled from https://css-tricks.com/using-css-transitions-auto-dimensions/ and modified\r\n      // get the height of the element's inner content, regardless of its actual size\r\n      let sectionHeight = element.scrollHeight;\r\n      // temporarily disable all css transitions\r\n      var elementTransition = element.style.transition;\r\n      element.style.transition = \"\";\r\n      element.style.height = sectionHeight + \"px !important\";\r\n      element.style.padding = \"0px 15px\";\r\n      // on the next frame (as soon as the previous style change has taken effect),\r\n      // explicitly set the element's height to its current pixel height, so we\r\n      // aren't transitioning out of 'auto'\r\n      requestAnimationFrame(function() {\r\n        element.style.height = sectionHeight + \"px\";\r\n        element.style.transition = elementTransition;\r\n        // element.style.overflowY = 'hidden';\r\n\r\n        // on the next frame (as soon as the previous style change has taken effect),\r\n        // have the element transition to height: 0\r\n        requestAnimationFrame(function() {\r\n          element.style.height = 0 + \"px\";\r\n        });\r\n      });\r\n\r\n      // mark the section as \"currently collapsed\"\r\n      element.setAttribute(\"data-collapsed\", \"true\");\r\n    },\r\n    expandSection(element) {\r\n      // pulled from https://css-tricks.com/using-css-transitions-auto-dimensions/ and modified\r\n      // get the height of the element's inner content, regardless of its actual size\r\n      let sectionHeight = element.scrollHeight;\r\n      // have the element transition to the height of its inner content\r\n      element.style.height = sectionHeight + \"px\";\r\n      element.style.padding = \"5px 15px\";\r\n\r\n      // element.style.overflowY = \"auto\"\r\n      // when the next css transition finishes (which should be the one we just triggered)\r\n      element.addEventListener(\"transitionend\", function() {\r\n        // remove this event listener so it only gets triggered once\r\n        element.removeEventListener(\"transitionend\", this);\r\n        if (element.getAttribute(\"data-collapsed\") == \"false\") {\r\n          // remove \"height\" from the element's inline styles, so it can return to its initial value\r\n          element.style.height = \"auto\";\r\n        }\r\n      });\r\n\r\n      // mark the section as \"currently not collapsed\"\r\n      element.setAttribute(\"data-collapsed\", \"false\");\r\n    },\r\n    checkOffclick: function($e) {\r\n      /**\r\n       * Pulled from: https://stackoverflow.com/questions/17773852/check-if-div-is-descendant-of-another\r\n       */\r\n      let self = this;\r\n      function isChild(obj, parentObj) {\r\n        if (obj == null) return true;\r\n        if (obj.id == parentObj.id) return true;\r\n        while ((obj = obj.parentNode)) {\r\n          if (obj.id == parentObj.id) return true;\r\n        }\r\n        return false;\r\n      }\r\n      if (\r\n        self.open &&\r\n        !isChild($e.target, document.getElementById(\"sidebar\"))\r\n      ) {\r\n        self.open = false;\r\n        self.collapseSection(self.$refs.content.$el);\r\n      }\r\n    },\r\n    toggleAccordion: function() {\r\n      this.open = !this.open;\r\n      if (this.open) {\r\n        this.expandSection(this.$refs.content.$el);\r\n      } else {\r\n        this.collapseSection(this.$refs.content.$el);\r\n      }\r\n    },\r\n    changeWindow: function($e) {\r\n      window.location.href = $e;\r\n    },\r\n  },\r\n  computed: {\r\n    computedClass: function() {\r\n      if (this.open) {\r\n        return {};\r\n      }\r\n      return [\"sidebar-closed\"];\r\n    },\r\n  },\r\n  props: {\r\n    sidebarTitle: {\r\n      type: String,\r\n      default: \"Sidebar\",\r\n    },\r\n    height: {\r\n      type: [Number, Object],\r\n      default: null,\r\n    },\r\n    flavor: {\r\n      type: String,\r\n      default: \"\",\r\n    },\r\n    bottomOffset: {\r\n      type: String,\r\n      default: \"0px\",\r\n    },\r\n    topOffset: {\r\n      type: String,\r\n      default: \"\",\r\n    },\r\n    width: {\r\n      type: Number,\r\n      default: 200,\r\n    },\r\n    breakpoint: {\r\n      type: Number,\r\n      default: 576,\r\n    },\r\n  },\r\n};\r\nexport default RawSidebar;\r\n</script>\r\n\r\n<style>\r\n.sidebar-open-carat {\r\n  transform: rotate(135deg) !important;\r\n  margin-bottom: 4px;\r\n}\r\n.sidebar-icon {\r\n  display: inline-block;\r\n}\r\n.dropdown-arrow {\r\n  background-image: linear-gradient(to top right, transparent 50%, #727272 50%);\r\n  width: 0.5rem;\r\n  height: 0.5rem;\r\n  transform: rotate(135deg);\r\n  transition: 0.3s all;\r\n  display: inline-block;\r\n}\r\n.dropdown-label {\r\n  cursor: pointer;\r\n}\r\n</style>\r\n"]}, media: undefined });

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

var install = function installNModal(Vue) {
  if (install.installed) return;
  install.installed = true;
  Vue.component("RawSidebar", __vue_component__);
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
export { __vue_component__ as RawSidebar };
//# sourceMappingURL=RawSidebar.esm.js.map
