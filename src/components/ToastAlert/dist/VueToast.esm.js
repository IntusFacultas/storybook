import styled from "vue-styled-components";
import { AlertTheme } from "@intus/design-system";

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

function _templateObject5() {
  var data = _taggedTemplateLiteral([
    "\n  border-radius: 2px;\n  padding: 1rem 0.5rem;\n  margin-bottom: 5px;\n  display: flex;\n  justify-content: space-between;\n  -webkit-animation: fadein 0.5s; /* Safari, Chrome and Opera > 12.1 */\n  -moz-animation: fadein 0.5s; /* Firefox < 16 */\n  -ms-animation: fadein 0.5s; /* Internet Explorer */\n  -o-animation: fadein 0.5s; /* Opera < 12.1 */\n  animation: fadein 0.5s;\n\n  opacity: 1;\n  & * {\n    opacity: 1;\n  }\n  transition: 1s all;\n  cursor: pointer;\n  border: 2px solid\n    ",
    ";\n  background-color: ",
    ';\n  font-family: "Open Sans Regular", -apple-system, BlinkMacSystemFont,\n    "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji",\n    "Segoe UI Emoji", "Segoe UI Symbol";\n  font-size: 16px;\n  font-weight: bold;\n  & * {\n    background-color: ',
    ";\n    line-height: 1rem;\n    color: ",
    ";\n  }\n"
  ]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = _taggedTemplateLiteral([""]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral([
    "\n  padding-right: 0.25rem;\n  & span {\n    line-height: 1rem;\n  }\n"
  ]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral([
    "\n  max-width: ",
    "px;\n  position: fixed;\n  right: 15px;\n  top: 30px;\n  bottom: 0px;\n  display: flex;\n  flex-direction: column;\n"
  ]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  margin-left: 10px;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}
var props = {
  flavor: String,
  width: Number,
  defaultTheme: {
    type: Object,
    default: function _default() {
      return AlertTheme;
    }
  }
};
var CloseContainer = styled.div(_templateObject());
var AlertContainer = styled("div", props)(_templateObject2(), function(props) {
  return props.width;
});
var IconContainer = styled("div", props)(_templateObject3());
var AlertContent = styled.div(_templateObject4());
var Alert = styled("div", props)(
  _templateObject5(),
  function(props) {
    return props.theme && props.theme[props.flavor]
      ? props.theme[props.flavor].border.color
      : props.defaultTheme[props.flavor]
      ? props.defaultTheme[props.flavor].border.color
      : "#f2f2f2";
  },
  function(props) {
    return props.theme && props.theme[props.flavor]
      ? props.theme[props.flavor].background.color
      : props.defaultTheme[props.flavor]
      ? props.defaultTheme[props.flavor].background.color
      : "#f2f2f2";
  },
  function(props) {
    return props.theme && props.theme[props.flavor]
      ? props.theme[props.flavor].background.color
      : props.defaultTheme[props.flavor]
      ? props.defaultTheme[props.flavor].background.color
      : "#f2f2f2";
  },
  function(props) {
    return props.theme && props.theme[props.flavor]
      ? props.theme[props.flavor].color.color
      : props.defaultTheme[props.flavor]
      ? props.defaultTheme[props.flavor].color.color
      : "#222";
  }
);
var VueToast = {
  components: {
    AlertContainer: AlertContainer,
    IconContainer: IconContainer,
    AlertContent: AlertContent,
    Alert: Alert,
    CloseContainer: CloseContainer
  },
  data: function data() {
    return {
      availableId: 0,
      alerts: [],
      theme: AlertTheme,
      validTypes: ["WARNING", "INFO", "DANGER", "SUCCESS"]
    };
  },
  props: {
    parentInstance: {
      type: Object,
      required: true
    },
    maxWidth: {
      type: Number,
      default: 300
    },
    delay: {
      type: Number,
      default: 5000
    }
  },
  mounted: function mounted() {
    this.parentInstance.$toast = this.toast;
  },
  computed: {},
  methods: {
    toast: function toast(options) {
      var self = this;
      var alertType = "info";

      if (
        options.type &&
        this.validTypes.indexOf(options.type.toUpperCase()) > -1
      ) {
        alertType = options.type.toLowerCase();
      }

      var text = "This is an info toast";

      if (options.text) {
        text = options.text;
      }

      var id = this.availableId++;
      var timeAdded = Math.round(new Date().getTime() / 1000);
      var dying = false;
      this.alerts.push({
        type: alertType,
        content: text,
        timeAdded: timeAdded,
        id: id,
        dying: dying
      });
      setTimeout(function() {
        self.removeToast(id);
      }, this.delay);
    },
    removeToast: function removeToast(id) {
      var self = this;
      var alert = this.alerts.filter(function(alert) {
        return alert.id == id;
      })[0];

      if (alert && !alert.dying) {
        alert.dying = true;
        this.$forceUpdate();
        setTimeout(function() {
          self.alerts = self.alerts.filter(function(alert) {
            return alert.id != id;
          });
          self.$forceUpdate();
        }, 501);
      } else if (!alert) {
        self.$nextTick(self.removeToast(id));
      }
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
const __vue_script__ = VueToast;

/* template */
var __vue_render__ = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c(
    "alert-container",
    { attrs: { width: _vm.maxWidth } },
    _vm._l(_vm.alerts, function(alert) {
      return _c(
        "alert",
        {
          key: alert.id,
          class: { "vue-toast-dying": alert.dying },
          attrs: { flavor: alert.type, "aria-live": "polite", role: "alert" },
          on: {
            click: function($event) {
              return _vm.removeToast(alert.id);
            }
          }
        },
        [
          _c("icon-container", [
            alert.type == "warning"
              ? _c("span", [
                  _c(
                    "svg",
                    {
                      staticClass: "svg-icon",
                      attrs: {
                        viewBox: "0 0 20 20",
                        fill: _vm.theme[alert.type]
                          ? _vm.theme[alert.type].color.color
                          : "#222",
                        height: "20",
                        width: "20"
                      }
                    },
                    [
                      _c("path", {
                        attrs: {
                          fill: _vm.theme[alert.type]
                            ? _vm.theme[alert.type].color.color
                            : "#222",
                          d:
                            "M19.471,8.934L18.883,8.34c-2.096-2.14-4.707-4.804-8.903-4.804c-4.171,0-6.959,2.83-8.996,4.897L0.488,8.934c-0.307,0.307-0.307,0.803,0,1.109l0.401,0.403c2.052,2.072,4.862,4.909,9.091,4.909c4.25,0,6.88-2.666,8.988-4.807l0.503-0.506C19.778,9.737,19.778,9.241,19.471,8.934z M9.98,13.787c-3.493,0-5.804-2.254-7.833-4.3C4.182,7.424,6.493,5.105,9.98,5.105c3.536,0,5.792,2.301,7.784,4.332l0.049,0.051C15.818,11.511,13.551,13.787,9.98,13.787z"
                        }
                      }),
                      _vm._v(" "),
                      _c("circle", {
                        attrs: {
                          fill: _vm.theme[alert.type]
                            ? _vm.theme[alert.type].color.color
                            : "#222",
                          stroke: _vm.theme[alert.type]
                            ? _vm.theme[alert.type].color.color
                            : "#222",
                          cx: "9.98",
                          cy: "9.446",
                          r: "1.629"
                        }
                      })
                    ]
                  )
                ])
              : alert.type == "success"
              ? _c("span", [
                  _c(
                    "svg",
                    {
                      staticClass: "svg-icon",
                      attrs: {
                        viewBox: "0 0 20 20",
                        height: "20",
                        width: "20",
                        stroke: _vm.theme[alert.type]
                          ? _vm.theme[alert.type].color.color
                          : "#222",
                        fill: _vm.theme[alert.type]
                          ? _vm.theme[alert.type].color.color
                          : "#222"
                      }
                    },
                    [
                      _c("path", {
                        attrs: {
                          d:
                            "M10.219,1.688c-4.471,0-8.094,3.623-8.094,8.094s3.623,8.094,8.094,8.094s8.094-3.623,8.094-8.094S14.689,1.688,10.219,1.688 M10.219,17.022c-3.994,0-7.242-3.247-7.242-7.241c0-3.994,3.248-7.242,7.242-7.242c3.994,0,7.241,3.248,7.241,7.242C17.46,13.775,14.213,17.022,10.219,17.022 M15.099,7.03c-0.167-0.167-0.438-0.167-0.604,0.002L9.062,12.48l-2.269-2.277c-0.166-0.167-0.437-0.167-0.603,0c-0.166,0.166-0.168,0.437-0.002,0.603l2.573,2.578c0.079,0.08,0.188,0.125,0.3,0.125s0.222-0.045,0.303-0.125l5.736-5.751C15.268,7.466,15.265,7.196,15.099,7.03"
                        }
                      })
                    ]
                  )
                ])
              : alert.type == "info"
              ? _c("span", [
                  _c(
                    "svg",
                    {
                      staticClass: "svg-icon",
                      attrs: {
                        viewBox: "0 0 20 20",
                        height: "22",
                        width: "20",
                        stroke: _vm.theme[alert.type]
                          ? _vm.theme[alert.type].color.color
                          : "#222",
                        fill: _vm.theme[alert.type]
                          ? _vm.theme[alert.type].color.color
                          : "#222"
                      }
                    },
                    [
                      _c("path", {
                        attrs: {
                          fill: _vm.theme[alert.type]
                            ? _vm.theme[alert.type].color.color
                            : "#222",
                          d:
                            "M12.323,2.398c-0.741-0.312-1.523-0.472-2.319-0.472c-2.394,0-4.544,1.423-5.476,3.625C3.907,7.013,3.896,8.629,4.49,10.102c0.528,1.304,1.494,2.333,2.72,2.99L5.467,17.33c-0.113,0.273,0.018,0.59,0.292,0.703c0.068,0.027,0.137,0.041,0.206,0.041c0.211,0,0.412-0.127,0.498-0.334l1.74-4.23c0.583,0.186,1.18,0.309,1.795,0.309c2.394,0,4.544-1.424,5.478-3.629C16.755,7.173,15.342,3.68,12.323,2.398z M14.488,9.77c-0.769,1.807-2.529,2.975-4.49,2.975c-0.651,0-1.291-0.131-1.897-0.387c-0.002-0.004-0.002-0.004-0.002-0.004c-0.003,0-0.003,0-0.003,0s0,0,0,0c-1.195-0.508-2.121-1.452-2.607-2.656c-0.489-1.205-0.477-2.53,0.03-3.727c0.764-1.805,2.525-2.969,4.487-2.969c0.651,0,1.292,0.129,1.898,0.386C14.374,4.438,15.533,7.3,14.488,9.77z"
                        }
                      })
                    ]
                  )
                ])
              : alert.type == "danger"
              ? _c("div", [
                  _c(
                    "svg",
                    {
                      attrs: {
                        xmlns: "http://www.w3.org/2000/svg",
                        "xmlns:xlink": "http://www.w3.org/1999/xlink",
                        version: "1.1",
                        id: "Capa_1",
                        "xml:space": "preserve",
                        viewBox: "0 0 55 55",
                        fill: _vm.theme[alert.type]
                          ? _vm.theme[alert.type].color.color
                          : "#222",
                        stroke: _vm.theme[alert.type]
                          ? _vm.theme[alert.type].color.color
                          : "#222",
                        height: "18",
                        width: "18"
                      }
                    },
                    [
                      _c("g", [
                        _c("path", {
                          attrs: {
                            d:
                              "M44.373,7.603c-10.137-10.137-26.632-10.138-36.77,0c-10.138,10.138-10.137,26.632,0,36.77s26.632,10.138,36.77,0   C54.51,34.235,54.51,17.74,44.373,7.603z M36.241,36.241c-0.781,0.781-2.047,0.781-2.828,0l-7.425-7.425l-7.778,7.778   c-0.781,0.781-2.047,0.781-2.828,0c-0.781-0.781-0.781-2.047,0-2.828l7.778-7.778l-7.425-7.425c-0.781-0.781-0.781-2.048,0-2.828   c0.781-0.781,2.047-0.781,2.828,0l7.425,7.425l7.071-7.071c0.781-0.781,2.047-0.781,2.828,0c0.781,0.781,0.781,2.047,0,2.828   l-7.071,7.071l7.425,7.425C37.022,34.194,37.022,35.46,36.241,36.241z"
                          }
                        })
                      ])
                    ]
                  )
                ])
              : _vm._e()
          ]),
          _vm._v(" "),
          _c("alert-content", {
            domProps: { innerHTML: _vm._s(alert.content) }
          }),
          _vm._v(" "),
          _c("close-container", [
            _c(
              "svg",
              {
                staticClass: "svg-icon",
                attrs: {
                  viewBox: "0 0 20 20",
                  height: "10",
                  width: "10",
                  stroke: _vm.theme[alert.type]
                    ? _vm.theme[alert.type].color.color
                    : "#222"
                }
              },
              [
                _c("path", {
                  attrs: {
                    fill: _vm.theme[alert.type]
                      ? _vm.theme[alert.type].color.color
                      : "#222",
                    d:
                      "M11.469,10l7.08-7.08c0.406-0.406,0.406-1.064,0-1.469c-0.406-0.406-1.063-0.406-1.469,0L10,8.53l-7.081-7.08\n\t\t\t\t\t\t\tc-0.406-0.406-1.064-0.406-1.469,0c-0.406,0.406-0.406,1.063,0,1.469L8.531,10L1.45,17.081c-0.406,0.406-0.406,1.064,0,1.469\n\t\t\t\t\t\t\tc0.203,0.203,0.469,0.304,0.735,0.304c0.266,0,0.531-0.101,0.735-0.304L10,11.469l7.08,7.081c0.203,0.203,0.469,0.304,0.735,0.304\n\t\t\t\t\t\t\tc0.267,0,0.532-0.101,0.735-0.304c0.406-0.406,0.406-1.064,0-1.469L11.469,10z"
                  }
                })
              ]
            )
          ])
        ],
        1
      );
    }),
    1
  );
};
var __vue_staticRenderFns__ = [];
__vue_render__._withStripped = true;

/* style */
const __vue_inject_styles__ = function(inject) {
  if (!inject) return;
  inject("data-v-73a1f6d4_0", {
    source:
      "\n.vue-toast-dying {\r\n  opacity: 0 !important;\n}\n@keyframes fadein {\nfrom {\r\n    opacity: 0;\r\n    transform: translateX(200px);\n}\nto {\r\n    opacity: 1;\r\n    transform: translateX(0px);\n}\n}\r\n\r\n/* Firefox < 16 */\n@-moz-keyframes fadein {\nfrom {\r\n    opacity: 0;\r\n    transform: translateX(200px);\n}\nto {\r\n    opacity: 1;\r\n    transform: translateX(0px);\n}\n}\r\n\r\n/* Safari, Chrome and Opera > 12.1 */\n@-webkit-keyframes fadein {\nfrom {\r\n    opacity: 0;\r\n    transform: translateX(200px);\n}\nto {\r\n    opacity: 1;\r\n    transform: translateX(0px);\n}\n}\r\n\r\n/* Internet Explorer */\n@-ms-keyframes fadein {\nfrom {\r\n    opacity: 0;\r\n    transform: translateX(200px);\n}\nto {\r\n    opacity: 1;\r\n    transform: translateX(0px);\n}\n}\r\n\r\n/* Opera < 12.1 */\n@-o-keyframes fadein {\nfrom {\r\n    opacity: 0;\r\n    transform: translateX(200px);\n}\nto {\r\n    opacity: 1;\r\n    transform: translateX(0px);\n}\n}\r\n",
    map: {
      version: 3,
      sources: [
        "C:\\Users\\pedro\\Documents\\Work\\Storybook\\src\\components\\ToastAlert\\src\\Alert.vue"
      ],
      names: [],
      mappings:
        ";AAkRA;EACA,qBAAA;AACA;AACA;AACA;IACA,UAAA;IACA,4BAAA;AACA;AACA;IACA,UAAA;IACA,0BAAA;AACA;AACA;;AAEA,iBAAA;AACA;AACA;IACA,UAAA;IACA,4BAAA;AACA;AACA;IACA,UAAA;IACA,0BAAA;AACA;AACA;;AAEA,oCAAA;AACA;AACA;IACA,UAAA;IACA,4BAAA;AACA;AACA;IACA,UAAA;IACA,0BAAA;AACA;AACA;;AAEA,sBAAA;AACA;AACA;IACA,UAAA;IACA,4BAAA;AACA;AACA;IACA,UAAA;IACA,0BAAA;AACA;AACA;;AAEA,iBAAA;AACA;AACA;IACA,UAAA;IACA,4BAAA;AACA;AACA;IACA,UAAA;IACA,0BAAA;AACA;AACA",
      file: "Alert.vue",
      sourcesContent: [
        '<template>\r\n  <alert-container :width="maxWidth">\r\n    <alert\r\n      v-for="alert in alerts"\r\n      :key="alert.id"\r\n      :class="{ \'vue-toast-dying\': alert.dying }"\r\n      :flavor="alert.type"\r\n      @click="removeToast(alert.id)"\r\n      aria-live="polite"\r\n      role="alert"\r\n    >\r\n      <icon-container>\r\n        <span v-if="alert.type == \'warning\'">\r\n          <svg\r\n            class="svg-icon"\r\n            viewBox="0 0 20 20"\r\n            :fill="theme[alert.type] ? theme[alert.type].color.color : \'#222\'"\r\n            height="20"\r\n            width="20"\r\n          >\r\n            <path\r\n              :fill="theme[alert.type] ? theme[alert.type].color.color : \'#222\'"\r\n              d="M19.471,8.934L18.883,8.34c-2.096-2.14-4.707-4.804-8.903-4.804c-4.171,0-6.959,2.83-8.996,4.897L0.488,8.934c-0.307,0.307-0.307,0.803,0,1.109l0.401,0.403c2.052,2.072,4.862,4.909,9.091,4.909c4.25,0,6.88-2.666,8.988-4.807l0.503-0.506C19.778,9.737,19.778,9.241,19.471,8.934z M9.98,13.787c-3.493,0-5.804-2.254-7.833-4.3C4.182,7.424,6.493,5.105,9.98,5.105c3.536,0,5.792,2.301,7.784,4.332l0.049,0.051C15.818,11.511,13.551,13.787,9.98,13.787z"\r\n            />\r\n            <circle\r\n              :fill="theme[alert.type] ? theme[alert.type].color.color : \'#222\'"\r\n              :stroke="\r\n                theme[alert.type] ? theme[alert.type].color.color : \'#222\'\r\n              "\r\n              cx="9.98"\r\n              cy="9.446"\r\n              r="1.629"\r\n            />\r\n          </svg>\r\n        </span>\r\n        <span v-else-if="alert.type == \'success\'">\r\n          <svg\r\n            class="svg-icon"\r\n            viewBox="0 0 20 20"\r\n            height="20"\r\n            width="20"\r\n            :stroke="theme[alert.type] ? theme[alert.type].color.color : \'#222\'"\r\n            :fill="theme[alert.type] ? theme[alert.type].color.color : \'#222\'"\r\n          >\r\n            <path\r\n              d="M10.219,1.688c-4.471,0-8.094,3.623-8.094,8.094s3.623,8.094,8.094,8.094s8.094-3.623,8.094-8.094S14.689,1.688,10.219,1.688 M10.219,17.022c-3.994,0-7.242-3.247-7.242-7.241c0-3.994,3.248-7.242,7.242-7.242c3.994,0,7.241,3.248,7.241,7.242C17.46,13.775,14.213,17.022,10.219,17.022 M15.099,7.03c-0.167-0.167-0.438-0.167-0.604,0.002L9.062,12.48l-2.269-2.277c-0.166-0.167-0.437-0.167-0.603,0c-0.166,0.166-0.168,0.437-0.002,0.603l2.573,2.578c0.079,0.08,0.188,0.125,0.3,0.125s0.222-0.045,0.303-0.125l5.736-5.751C15.268,7.466,15.265,7.196,15.099,7.03"\r\n            />\r\n          </svg>\r\n        </span>\r\n        <span v-else-if="alert.type == \'info\'">\r\n          <svg\r\n            class="svg-icon"\r\n            viewBox="0 0 20 20"\r\n            height="22"\r\n            width="20"\r\n            :stroke="theme[alert.type] ? theme[alert.type].color.color : \'#222\'"\r\n            :fill="theme[alert.type] ? theme[alert.type].color.color : \'#222\'"\r\n          >\r\n            <path\r\n              :fill="theme[alert.type] ? theme[alert.type].color.color : \'#222\'"\r\n              d="M12.323,2.398c-0.741-0.312-1.523-0.472-2.319-0.472c-2.394,0-4.544,1.423-5.476,3.625C3.907,7.013,3.896,8.629,4.49,10.102c0.528,1.304,1.494,2.333,2.72,2.99L5.467,17.33c-0.113,0.273,0.018,0.59,0.292,0.703c0.068,0.027,0.137,0.041,0.206,0.041c0.211,0,0.412-0.127,0.498-0.334l1.74-4.23c0.583,0.186,1.18,0.309,1.795,0.309c2.394,0,4.544-1.424,5.478-3.629C16.755,7.173,15.342,3.68,12.323,2.398z M14.488,9.77c-0.769,1.807-2.529,2.975-4.49,2.975c-0.651,0-1.291-0.131-1.897-0.387c-0.002-0.004-0.002-0.004-0.002-0.004c-0.003,0-0.003,0-0.003,0s0,0,0,0c-1.195-0.508-2.121-1.452-2.607-2.656c-0.489-1.205-0.477-2.53,0.03-3.727c0.764-1.805,2.525-2.969,4.487-2.969c0.651,0,1.292,0.129,1.898,0.386C14.374,4.438,15.533,7.3,14.488,9.77z"\r\n            />\r\n          </svg>\r\n        </span>\r\n        <div v-else-if="alert.type == \'danger\'">\r\n          <svg\r\n            xmlns="http://www.w3.org/2000/svg"\r\n            xmlns:xlink="http://www.w3.org/1999/xlink"\r\n            version="1.1"\r\n            id="Capa_1"\r\n            xml:space="preserve"\r\n            viewBox="0 0 55 55"\r\n            :fill="theme[alert.type] ? theme[alert.type].color.color : \'#222\'"\r\n            :stroke="theme[alert.type] ? theme[alert.type].color.color : \'#222\'"\r\n            height="18"\r\n            width="18"\r\n          >\r\n            <g>\r\n              <path\r\n                d="M44.373,7.603c-10.137-10.137-26.632-10.138-36.77,0c-10.138,10.138-10.137,26.632,0,36.77s26.632,10.138,36.77,0   C54.51,34.235,54.51,17.74,44.373,7.603z M36.241,36.241c-0.781,0.781-2.047,0.781-2.828,0l-7.425-7.425l-7.778,7.778   c-0.781,0.781-2.047,0.781-2.828,0c-0.781-0.781-0.781-2.047,0-2.828l7.778-7.778l-7.425-7.425c-0.781-0.781-0.781-2.048,0-2.828   c0.781-0.781,2.047-0.781,2.828,0l7.425,7.425l7.071-7.071c0.781-0.781,2.047-0.781,2.828,0c0.781,0.781,0.781,2.047,0,2.828   l-7.071,7.071l7.425,7.425C37.022,34.194,37.022,35.46,36.241,36.241z"\r\n              />\r\n            </g>\r\n          </svg>\r\n        </div>\r\n      </icon-container>\r\n      <alert-content v-html="alert.content"></alert-content>\r\n      <close-container>\r\n        <svg\r\n          class="svg-icon"\r\n          viewBox="0 0 20 20"\r\n          height="10"\r\n          width="10"\r\n          :stroke="theme[alert.type] ? theme[alert.type].color.color : \'#222\'"\r\n        >\r\n          <path\r\n            :fill="theme[alert.type] ? theme[alert.type].color.color : \'#222\'"\r\n            d="M11.469,10l7.08-7.08c0.406-0.406,0.406-1.064,0-1.469c-0.406-0.406-1.063-0.406-1.469,0L10,8.53l-7.081-7.08\r\n\t\t\t\t\t\t\tc-0.406-0.406-1.064-0.406-1.469,0c-0.406,0.406-0.406,1.063,0,1.469L8.531,10L1.45,17.081c-0.406,0.406-0.406,1.064,0,1.469\r\n\t\t\t\t\t\t\tc0.203,0.203,0.469,0.304,0.735,0.304c0.266,0,0.531-0.101,0.735-0.304L10,11.469l7.08,7.081c0.203,0.203,0.469,0.304,0.735,0.304\r\n\t\t\t\t\t\t\tc0.267,0,0.532-0.101,0.735-0.304c0.406-0.406,0.406-1.064,0-1.469L11.469,10z"\r\n          />\r\n        </svg>\r\n      </close-container>\r\n    </alert>\r\n  </alert-container>\r\n</template>\r\n\r\n<script>\r\nimport styled from "vue-styled-components";\r\nimport { AlertTheme } from "@intus/design-system";\r\nconst props = {\r\n  flavor: String,\r\n  width: Number,\r\n  defaultTheme: {\r\n    type: Object,\r\n    default: function() {\r\n      return AlertTheme;\r\n    }\r\n  }\r\n};\r\nconst CloseContainer = styled.div`\r\n  margin-left: 10px;\r\n`;\r\n\r\nconst AlertContainer = styled("div", props)`\r\n  max-width: ${props => props.width}px;\r\n  position: fixed;\r\n  right: 15px;\r\n  top: 30px;\r\n  bottom: 0px;\r\n  display: flex;\r\n  flex-direction: column;\r\n`;\r\nconst IconContainer = styled("div", props)`\r\n  padding-right: 0.25rem;\r\n  & span {\r\n    line-height: 1rem;\r\n  }\r\n`;\r\nconst AlertContent = styled.div``;\r\nconst Alert = styled("div", props)`\r\n  border-radius: 2px;\r\n  padding: 1rem 0.5rem;\r\n  margin-bottom: 5px;\r\n  display: flex;\r\n  justify-content: space-between;\r\n  -webkit-animation: fadein 0.5s; /* Safari, Chrome and Opera > 12.1 */\r\n  -moz-animation: fadein 0.5s; /* Firefox < 16 */\r\n  -ms-animation: fadein 0.5s; /* Internet Explorer */\r\n  -o-animation: fadein 0.5s; /* Opera < 12.1 */\r\n  animation: fadein 0.5s;\r\n\r\n  opacity: 1;\r\n  & * {\r\n    opacity: 1;\r\n  }\r\n  transition: 1s all;\r\n  cursor: pointer;\r\n  border: 2px solid\r\n    ${props =>\r\n      props.theme && props.theme[props.flavor]\r\n        ? props.theme[props.flavor].border.color\r\n        : props.defaultTheme[props.flavor]\r\n        ? props.defaultTheme[props.flavor].border.color\r\n        : "#f2f2f2"};\r\n  background-color: ${props =>\r\n    props.theme && props.theme[props.flavor]\r\n      ? props.theme[props.flavor].background.color\r\n      : props.defaultTheme[props.flavor]\r\n      ? props.defaultTheme[props.flavor].background.color\r\n      : "#f2f2f2"};\r\n  font-family: "Open Sans Regular", -apple-system, BlinkMacSystemFont,\r\n    "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji",\r\n    "Segoe UI Emoji", "Segoe UI Symbol";\r\n  font-size: 16px;\r\n  font-weight: bold;\r\n  & * {\r\n    background-color: ${props =>\r\n      props.theme && props.theme[props.flavor]\r\n        ? props.theme[props.flavor].background.color\r\n        : props.defaultTheme[props.flavor]\r\n        ? props.defaultTheme[props.flavor].background.color\r\n        : "#f2f2f2"};\r\n    line-height: 1rem;\r\n    color: ${props =>\r\n      props.theme && props.theme[props.flavor]\r\n        ? props.theme[props.flavor].color.color\r\n        : props.defaultTheme[props.flavor]\r\n        ? props.defaultTheme[props.flavor].color.color\r\n        : "#222"};\r\n  }\r\n`;\r\nexport const VueToast = {\r\n  components: {\r\n    AlertContainer,\r\n    IconContainer,\r\n    AlertContent,\r\n    Alert,\r\n    CloseContainer\r\n  },\r\n  data() {\r\n    return {\r\n      availableId: 0,\r\n      alerts: [],\r\n      theme: AlertTheme,\r\n      validTypes: ["WARNING", "INFO", "DANGER", "SUCCESS"]\r\n    };\r\n  },\r\n  props: {\r\n    parentInstance: {\r\n      type: Object,\r\n      required: true\r\n    },\r\n    maxWidth: {\r\n      type: Number,\r\n      default: 300\r\n    },\r\n    delay: {\r\n      type: Number,\r\n      default: 5000\r\n    }\r\n  },\r\n  mounted() {\r\n    this.parentInstance.$toast = this.toast;\r\n  },\r\n  computed: {},\r\n  methods: {\r\n    toast(options) {\r\n      let self = this;\r\n      let alertType = "info";\r\n      if (\r\n        options.type &&\r\n        this.validTypes.indexOf(options.type.toUpperCase()) > -1\r\n      ) {\r\n        alertType = options.type.toLowerCase();\r\n      }\r\n      let text = "This is an info toast";\r\n      if (options.text) {\r\n        text = options.text;\r\n      }\r\n      let id = this.availableId++;\r\n      let timeAdded = Math.round(new Date().getTime() / 1000);\r\n      let dying = false;\r\n      this.alerts.push({\r\n        type: alertType,\r\n        content: text,\r\n        timeAdded: timeAdded,\r\n        id: id,\r\n        dying: dying\r\n      });\r\n      setTimeout(function() {\r\n        self.removeToast(id);\r\n      }, this.delay);\r\n    },\r\n    removeToast(id) {\r\n      var self = this;\r\n      let alert = this.alerts.filter(alert => alert.id == id)[0];\r\n      if (alert && !alert.dying) {\r\n        alert.dying = true;\r\n        this.$forceUpdate();\r\n        setTimeout(function() {\r\n          self.alerts = self.alerts.filter(alert => alert.id != id);\r\n          self.$forceUpdate();\r\n        }, 501);\r\n      } else if (!alert) {\r\n        self.$nextTick(self.removeToast(id));\r\n      }\r\n    }\r\n  }\r\n};\r\nexport default VueToast;\r\n</script>\r\n\r\n<style>\r\n.vue-toast-dying {\r\n  opacity: 0 !important;\r\n}\r\n@keyframes fadein {\r\n  from {\r\n    opacity: 0;\r\n    transform: translateX(200px);\r\n  }\r\n  to {\r\n    opacity: 1;\r\n    transform: translateX(0px);\r\n  }\r\n}\r\n\r\n/* Firefox < 16 */\r\n@-moz-keyframes fadein {\r\n  from {\r\n    opacity: 0;\r\n    transform: translateX(200px);\r\n  }\r\n  to {\r\n    opacity: 1;\r\n    transform: translateX(0px);\r\n  }\r\n}\r\n\r\n/* Safari, Chrome and Opera > 12.1 */\r\n@-webkit-keyframes fadein {\r\n  from {\r\n    opacity: 0;\r\n    transform: translateX(200px);\r\n  }\r\n  to {\r\n    opacity: 1;\r\n    transform: translateX(0px);\r\n  }\r\n}\r\n\r\n/* Internet Explorer */\r\n@-ms-keyframes fadein {\r\n  from {\r\n    opacity: 0;\r\n    transform: translateX(200px);\r\n  }\r\n  to {\r\n    opacity: 1;\r\n    transform: translateX(0px);\r\n  }\r\n}\r\n\r\n/* Opera < 12.1 */\r\n@-o-keyframes fadein {\r\n  from {\r\n    opacity: 0;\r\n    transform: translateX(200px);\r\n  }\r\n  to {\r\n    opacity: 1;\r\n    transform: translateX(0px);\r\n  }\r\n}\r\n</style>\r\n'
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

var install = function installVueToast(Vue) {
  if (install.installed) return;
  install.installed = true;
  Vue.component("VueToast", __vue_component__);
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
//# sourceMappingURL=VueToast.esm.js.map
