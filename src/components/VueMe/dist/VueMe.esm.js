import styled from 'vue-styled-components';
import { Theme } from '@IntusFacultas/design-system';
import { SubSectionTitle } from '@IntusFacultas/typography';
import { DialogButton } from '@IntusFacultas/button';
import { VueInput } from '@IntusFacultas/input';
import { FlexRow, FlexColumn } from '@IntusFacultas/layout';

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

function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest();
}

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

function _iterableToArrayLimit(arr, i) {
  if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) {
    return;
  }

  var _arr = [];
  var _n = true;
  var _d = false;
  var _e = undefined;

  try {
    for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance");
}

function _templateObject7() {
  var data = _taggedTemplateLiteral(["\n  margin-top: 15px;\n  display: flex;\n  justify-content: flex-end;\n"]);

  _templateObject7 = function _templateObject7() {
    return data;
  };

  return data;
}

function _templateObject6() {
  var data = _taggedTemplateLiteral([""]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = _taggedTemplateLiteral(["\n  width: 100%;\n  font-family: \"Open Sans Regular\", -apple-system, BlinkMacSystemFont,\n    \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif, \"Apple Color Emoji\",\n    \"Segoe UI Emoji\", \"Segoe UI Symbol\";\n  padding: 10px;\n  word-break: break-word;\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n  z-index: ", ";\n  background-color: #fff;\n  border: 1px solid rgba(0, 0, 0, 0.125);\n  border-top: solid 7px\n    ", ";\n  border-radius: 0.25rem;\n  min-width: ", "px;\n  display: flex;\n  transition: all 0.4s;\n  transform: scale(0);\n  transition-timing-function: cubic-bezier(0.36, 0.55, 0.19, 1);\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  background-color: #444;\n  opacity: 0;\n  z-index: ", ";\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  transition-duration: 0.4s;\n  transition-timing-function: cubic-bezier(0.36, 0.55, 0.19, 1);\n  transition-property: opacity;\n  animation: vueme-fadein 0.4s;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  height: 100%;\n  position: fixed;\n  width: 100%;\n  z-index: ", ";\n  top: 0px;\n  bottom: 0px;\n  left: 0px;\n  right: 0px;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}
var props = {
  zIndex: {
    type: Number,
    default: 0
  },
  width: {
    type: Number,
    default: 360
  },
  flavor: String,
  defaultTheme: {
    type: Object,
    default: function _default() {
      return Theme;
    }
  }
};
var VueMeDialogContainer = styled("div", props)(_templateObject(), function (props) {
  return props.zIndex + 1999;
});
var VueMeBackdrop = styled("div", props)(_templateObject2(), function (props) {
  return props.zIndex + 1999;
});
var VueMeTitleContainer = styled.div(_templateObject3());
var VueMeDialogBox = styled("div", props)(_templateObject4(), function (props) {
  return props.zIndex + 2000;
}, function (props) {
  return props.theme && props.theme[props.flavor] ? props.theme[props.flavor].border.color : props.defaultTheme[props.flavor] ? props.defaultTheme[props.flavor].border.color : "white";
}, function (props) {
  return props.width;
});
var VueMeDialogContentContainer = styled.div(_templateObject5());
var VueMeDialogContent = styled.div(_templateObject6());
var VueMeDialogButtonContainer = styled.div(_templateObject7());
var VueMeDialog = {
  components: {
    VueMeDialogContainer: VueMeDialogContainer,
    VueMeBackdrop: VueMeBackdrop,
    VueMeTitleContainer: VueMeTitleContainer,
    VueMeDialogBox: VueMeDialogBox,
    VueMeDialogContentContainer: VueMeDialogContentContainer,
    VueMeDialogContent: VueMeDialogContent,
    VueMeDialogButtonContainer: VueMeDialogButtonContainer,
    SubSectionTitle: SubSectionTitle,
    DialogButton: DialogButton,
    VueInput: VueInput,
    FlexRow: FlexRow,
    FlexColumn: FlexColumn
  },
  data: function data() {
    return {
      show: false,
      intervalId: -1,
      shaking: false,
      enabled: false,
      fieldValues: [],
      internalCloseTime: 0
    };
  },
  props: {
    flavor: {
      type: String,
      default: ""
    },
    id: {
      type: Number,
      required: true
    },
    parent: {
      type: Object,
      required: true
    },
    zIndex: {
      type: Number,
      default: 0
    },
    closeTime: {
      type: Number,
      default: 0
    },
    autoCloseIndex: {
      type: Number,
      default: -1
    },
    autoClose: {
      type: Boolean,
      default: false
    },
    title: {
      type: String,
      default: "Alert"
    },
    icon: {
      type: String,
      default: ""
    },
    width: {
      type: Number,
      default: 360
    },
    content: {
      type: String,
      default: "You forgot to provide content"
    },
    fields: {
      type: Array,
      default: function _default() {
        return [];
      }
    },
    backgroundDismiss: {
      type: Boolean,
      default: true
    },
    buttons: {
      type: Array,
      default: function _default() {
        return [{
          id: 1,
          flavor: "",
          text: "Close",
          action: function action() {// empty
          }
        }];
      }
    }
  },
  mounted: function mounted() {
    var self = this;
    this.$nextTick(function () {
      self.open();
    });
  },
  methods: {
    open: function open() {
      this.show = true;
      this.enabled = true;
      this.internalCloseTime = this.closeTime;

      if (this.autoClose) {
        this.beginAutoClose();
      }

      var self = this;
      setTimeout(function () {
        self.$refs.backdrop.$el.classList.add("vueme-dialog-backdrop-open");
        self.$refs.dialogBox.$el.classList.add("vueme-dialog-open");
      }, 50);
    },
    handleAutoClose: function handleAutoClose() {
      if (this.internalCloseTime == 0) {
        clearInterval(this.intervalId);
        this.callFunction(this.buttons[this.autoCloseIndex]);
      } else {
        this.internalCloseTime--;
      }
    },
    beginAutoClose: function beginAutoClose() {
      this.intervalId = setInterval(this.handleAutoClose, 1000);
    },
    callFunction: function callFunction(button) {
      if (this.enabled) {
        var close = button.action(this.fieldValues);

        if (close !== false) {
          this.close();
        }
      }
    },
    close: function close() {
      if (this.enabled && !this.shaking) {
        this.enabled = false;

        if (this && this.$refs && this.$refs.dialogBox) {
          this.$refs.dialogBox.$el.classList.remove("vueme-dialog-open");
          this.$refs.dialogBox.$el.classList.add("vueme-dismiss-dialog");
        }

        if (this && this.$refs && this.$refs.backdrop) this.$refs.backdrop.$el.classList.remove("vueme-dialog-backdrop-open");
        var self = this;
        setTimeout(function () {
          self.show = false;
          self.show = false; // destroy the vue listeners, etc

          self.$destroy(); // remove the element from the DOM

          self.$el.parentNode.removeChild(self.$el);
          self.parent.close(self.id);
        }, 420);
      }
    },
    closeDialog: function closeDialog() {
      if (!this.enabled) {
        return;
      }

      if (this.backgroundDismiss) {
        this.close();
      } else {
        if (this && this.$refs && this.$refs.dialogBox) this.$refs.dialogBox.$el.classList.add("vueme-shake-dialog");
        var self = this;
        this.shaking = true;
        setTimeout(function () {
          self.shaking = false;
          if (self && self.$refs && self.$refs.dialogBox) self.$refs.dialogBox.$el.classList.remove("vueme-shake-dialog");
        }, 1000);
      }
    }
  },
  template: "\n  <vue-me-dialog-container :z-index=\"zIndex\">\n    <vue-me-backdrop\n      ref=\"backdrop\"\n      :class=\"{'vueme-dialog-backdrop-open' : show}\"\n      :z-index=\"zIndex\"\n      @click=\"closeDialog\"\n    ></vue-me-backdrop>\n      <vue-me-dialog-box\n        ref=\"dialogBox\"\n        :flavor=\"flavor\"\n        :width=\"width\"\n      >\n        <vue-me-dialog-content-container>\n          <vue-me-title-container>\n            <span v-html=\"icon\"></span>\n            <sub-section-title class=\"vue-me-title\">{{title}}</sub-section-title>\n          </vue-me-title-container>\n          <vue-me-dialog-content>\n            <div v-html=\"content\"></div>\n            <form v-if=\"fields.length > 0\">\n              <vue-input\n                v-for=\"field in fields\"\n                :key=\"'field' + field.id\"\n                :name=\"'vueMeField' + field.id\"\n                :input-type=\"field.type\"\n                :label=\"field.label\"\n                v-model=\"fieldValues[field.id]\"\n              ></vue-input>\n            </form>\n            <vue-me-dialog-button-container>\n              <dialog-button\n                v-for=\"(button, index) in buttons\"\n                :key=\"'button' + button.id\"\n                @click=\"callFunction(button)\"\n                :flavor=\"button.flavor\"\n                :small=\"true\"\n                :disabled=\"shaking\"\n              >\n                {{button.text}}\n                <span v-if=\"index == autoCloseIndex\">({{internalCloseTime}})</span>\n              </dialog-button>\n            </vue-me-dialog-button-container>\n          </vue-me-dialog-content>\n        </vue-me-dialog-content-container>\n      </vue-me-dialog-box>\n  </vue-me-dialog-container>\n  "
};
var VueMe = {
  components: {
    VueMeDialog: VueMeDialog
  },
  name: "vue-me",
  data: function data() {
    return {
      alerts: [],
      availableId: 0,
      availalbeAlertId: 0,
      deletedAlerts: []
    };
  },
  props: {
    parentInstance: {
      type: Object,
      default: ""
    }
  },
  mounted: function mounted() {
    this.parentInstance.$alert = this.alert;

    if (typeof Object.assign !== "function") {
      // Must be writable: true, enumerable: false, configurable: true
      Object.defineProperty(Object, "assign", {
        value: function assign(target, varArgs) {

          if (target === null || target === undefined) {
            throw new TypeError("Cannot convert undefined or null to object");
          }

          var to = Object(target);

          for (var index = 1; index < arguments.length; index++) {
            var nextSource = arguments[index];

            if (nextSource !== null && nextSource !== undefined) {
              for (var nextKey in nextSource) {
                // Avoid bugs when hasOwnProperty is shadowed
                if (Object.prototype.hasOwnProperty.call(nextSource, nextKey)) {
                  to[nextKey] = nextSource[nextKey];
                }
              }
            }
          }

          return to;
        },
        writable: true,
        configurable: true
      });
    }
  },
  watch: {
    deletedAlerts: function deletedAlerts(newVal, oldVal) {
      // we do this because if we change the alerts array while we still have alerts visible, it causes a re render but
      // not a re-mount so the alerts "disappear". So we wait to delete from array until all alerts are no longer visible
      if (this.deletedAlerts.length == this.alerts.length && this.deletedAlerts.length != 0) {
        this.alerts = [];
        this.deletedAlerts = [];
      }
    }
  },
  methods: {
    close: function close(id) {
      this.deletedAlerts.push(id);
    },
    formatField: function formatField(field) {
      var label = "Label";

      if (field.label) {
        label = field.label;
      }

      var fieldType = "text";

      if (field.type) {
        fieldType = field.type;
      }

      var id = label + "-" + fieldType;

      if (field.id) {
        id = field.id;
      }

      return {
        id: id,
        label: label,
        type: fieldType
      };
    },
    formatButton: function formatButton(button) {
      var text = "Button";

      if (button.text) {
        text = button.text;
      }

      var flavor = "Primary";

      if (button.flavor) {
        flavor = button.flavor;
      }

      var action = function action() {};

      if (button.action) {
        action = button.action;
      }

      var id = this.availableId++;

      if (button.id) {
        id = button.id;
      }

      return {
        id: id,
        text: text,
        flavor: flavor,
        action: action
      };
    },
    alert: function alert(options) {
      var dialogConfiguration = {
        id: this.availalbeAlertId++,
        parent: this
      };
      var flavor = "";

      if (options.flavor) {
        flavor = options.flavor;
      }

      dialogConfiguration.flavor = flavor;
      var width = 360;

      if (options.width) {
        width = options.width;
      }

      dialogConfiguration.width = width;
      var title = "Alert";

      if (typeof options.title == "string") {
        title = options.title;
      }

      dialogConfiguration.title = title;
      var icon = "";

      if (options.icon) {
        icon = options.icon;
      }

      dialogConfiguration.icon = icon;
      var content = "This is an alert.";

      if (typeof options.content == "string") {
        content = options.content;
      }

      dialogConfiguration.content = content;
      var backgroundDismiss = false;

      if (options.backgroundDismiss) {
        backgroundDismiss = options.backgroundDismiss;
      }

      dialogConfiguration.backgroundDismiss = backgroundDismiss;
      var buttons = [this.formatButton({})];

      if (options.buttons && Array.isArray(options.buttons)) {
        buttons = [];

        for (var x = 0; x < options.buttons.length; x++) {
          buttons.push(this.formatButton(options.buttons[x]));
        }
      }

      dialogConfiguration.buttons = buttons;
      var fields = [];

      if (options.fields && Array.isArray(options.fields)) {
        fields = [];
        var _iteratorNormalCompletion = true;
        var _didIteratorError = false;
        var _iteratorError = undefined;

        try {
          for (var _iterator = options.fields[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
            var field = _step.value;
            fields.push(this.formatField(field));
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
      }

      dialogConfiguration.fields = fields;
      var autoClose = options.autoClose;

      if (autoClose) {
        dialogConfiguration.autoClose = true;
        autoClose = autoClose.split("|");
        dialogConfiguration.closeTime = Math.ceil(parseInt(autoClose[1]) / 1000);
        var _iteratorNormalCompletion2 = true;
        var _didIteratorError2 = false;
        var _iteratorError2 = undefined;

        try {
          for (var _iterator2 = dialogConfiguration.buttons.entries()[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
            var _step2$value = _slicedToArray(_step2.value, 2),
                index = _step2$value[0],
                button = _step2$value[1];

            if (button.id == autoClose[0]) {
              dialogConfiguration.autoCloseIndex = index;
              break;
            }
          }
        } catch (err) {
          _didIteratorError2 = true;
          _iteratorError2 = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion2 && _iterator2.return != null) {
              _iterator2.return();
            }
          } finally {
            if (_didIteratorError2) {
              throw _iteratorError2;
            }
          }
        }
      }

      this.alerts.push(Object.assign({}, dialogConfiguration));
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
const __vue_script__ = VueMe;

/* template */
var __vue_render__ = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c(
    "div",
    _vm._l(_vm.alerts, function(alert, index) {
      return _c("vue-me-dialog", {
        key: index,
        attrs: {
          flavor: alert.flavor,
          id: alert.id,
          parent: alert.parent,
          zIndex: alert.zIndex,
          closeTime: alert.closeTime,
          autoCloseIndex: alert.autoCloseIndex,
          autoClose: alert.autoClose,
          title: alert.title,
          icon: alert.icon,
          width: alert.width,
          content: alert.content,
          fields: alert.fields,
          backgroundDismiss: alert.backgroundDismiss,
          buttons: alert.buttons
        }
      })
    }),
    1
  )
};
var __vue_staticRenderFns__ = [];
__vue_render__._withStripped = true;

  /* style */
  const __vue_inject_styles__ = function (inject) {
    if (!inject) return
    inject("data-v-6f980367_0", { source: "\n.vue-me-title {\r\n  margin: 0px;\n}\n.vueme-dialog-backdrop-open {\r\n  opacity: 0.2;\n}\n.vueme-dialog-open {\r\n  transform: scale(1);\n}\n.vueme-dismiss-dialog {\r\n  transition: all 0.4s;\r\n  transition-timing-function: cubic-bezier(0.36, 0.55, 0.19, 1);\r\n  transform: scale(0);\r\n  display: block;\n}\n.vueme-shake-dialog {\r\n  -webkit-animation: shake 0.82s cubic-bezier(0.36, 0.07, 0.19, 0.97) both;\r\n  animation: shake 0.82s cubic-bezier(0.36, 0.07, 0.19, 0.97) both;\r\n  -webkit-transform: translate3d(0, 0, 0);\r\n  transform: translate3d(0, 0, 0);\n}\n@keyframes vueme-fadein {\nfrom {\r\n    opacity: 0;\n}\nto {\r\n    opacity: 0.2;\n}\n}\n@keyframes shake {\n10%,\r\n  90% {\r\n    -webkit-transform: translate3d(-2px, 0, 0);\r\n    transform: translate3d(-2px, 0, 0);\n}\n20%,\r\n  80% {\r\n    -webkit-transform: translate3d(4px, 0, 0);\r\n    transform: translate3d(4px, 0, 0);\n}\n30%,\r\n  50%,\r\n  70% {\r\n    -webkit-transform: translate3d(-8px, 0, 0);\r\n    transform: translate3d(-8px, 0, 0);\n}\n40%,\r\n  60% {\r\n    -webkit-transform: translate3d(8px, 0, 0);\r\n    transform: translate3d(8px, 0, 0);\n}\n}\n@-ms-keyframes shake {\n10%,\r\n  90% {\r\n    -webkit-transform: translate3d(-2px, 0, 0);\r\n    transform: translate3d(-2px, 0, 0);\n}\n20%,\r\n  80% {\r\n    -webkit-transform: translate3d(4px, 0, 0);\r\n    transform: translate3d(4px, 0, 0);\n}\n30%,\r\n  50%,\r\n  70% {\r\n    -webkit-transform: translate3d(-8px, 0, 0);\r\n    transform: translate3d(-8px, 0, 0);\n}\n40%,\r\n  60% {\r\n    -webkit-transform: translate3d(8px, 0, 0);\r\n    transform: translate3d(8px, 0, 0);\n}\n}\r\n", map: {"version":3,"sources":["C:\\Users\\pedro\\Documents\\Personal Projects\\GitHub\\storybook\\storybook\\src\\components\\VueMe\\src\\VueMe.vue"],"names":[],"mappings":";AAugBA;EACA,WAAA;AACA;AACA;EACA,YAAA;AACA;AACA;EACA,mBAAA;AACA;AACA;EACA,oBAAA;EACA,6DAAA;EACA,mBAAA;EACA,cAAA;AACA;AACA;EACA,wEAAA;EACA,gEAAA;EACA,uCAAA;EACA,+BAAA;AACA;AACA;AACA;IACA,UAAA;AACA;AACA;IACA,YAAA;AACA;AACA;AACA;AACA;;IAEA,0CAAA;IACA,kCAAA;AACA;AACA;;IAEA,yCAAA;IACA,iCAAA;AACA;AACA;;;IAGA,0CAAA;IACA,kCAAA;AACA;AACA;;IAEA,yCAAA;IACA,iCAAA;AACA;AACA;AACA;AACA;;IAEA,0CAAA;IACA,kCAAA;AACA;AACA;;IAEA,yCAAA;IACA,iCAAA;AACA;AACA;;;IAGA,0CAAA;IACA,kCAAA;AACA;AACA;;IAEA,yCAAA;IACA,iCAAA;AACA;AACA","file":"VueMe.vue","sourcesContent":["<template>\r\n  <div>\r\n    <vue-me-dialog\r\n      v-for=\"(alert, index) in alerts\"\r\n      :key=\"index\"\r\n      :flavor=\"alert.flavor\"\r\n      :id=\"alert.id\"\r\n      :parent=\"alert.parent\"\r\n      :zIndex=\"alert.zIndex\"\r\n      :closeTime=\"alert.closeTime\"\r\n      :autoCloseIndex=\"alert.autoCloseIndex\"\r\n      :autoClose=\"alert.autoClose\"\r\n      :title=\"alert.title\"\r\n      :icon=\"alert.icon\"\r\n      :width=\"alert.width\"\r\n      :content=\"alert.content\"\r\n      :fields=\"alert.fields\"\r\n      :backgroundDismiss=\"alert.backgroundDismiss\"\r\n      :buttons=\"alert.buttons\"\r\n    ></vue-me-dialog>\r\n  </div>\r\n</template>\r\n\r\n<script>\r\nimport styled from \"vue-styled-components\";\r\nimport { Theme } from \"@IntusFacultas/design-system\";\r\nimport { SubSectionTitle } from \"@IntusFacultas/typography\";\r\nimport { DialogButton } from \"@IntusFacultas/button\";\r\nimport { VueInput } from \"@IntusFacultas/input\";\r\nimport { FlexRow, FlexColumn } from \"@IntusFacultas/layout\";\r\nconst props = {\r\n  zIndex: {\r\n    type: Number,\r\n    default: 0\r\n  },\r\n  width: {\r\n    type: Number,\r\n    default: 360\r\n  },\r\n  flavor: String,\r\n  defaultTheme: {\r\n    type: Object,\r\n    default: function() {\r\n      return Theme;\r\n    }\r\n  }\r\n};\r\nconst VueMeDialogContainer = styled(\"div\", props)`\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  height: 100%;\r\n  position: fixed;\r\n  width: 100%;\r\n  z-index: ${props => props.zIndex + 1999};\r\n  top: 0px;\r\n  bottom: 0px;\r\n  left: 0px;\r\n  right: 0px;\r\n`;\r\nconst VueMeBackdrop = styled(\"div\", props)`\r\n  background-color: #444;\r\n  opacity: 0;\r\n  z-index: ${props => props.zIndex + 1999};\r\n  position: fixed;\r\n  top: 0;\r\n  left: 0;\r\n  right: 0;\r\n  bottom: 0;\r\n  transition-duration: 0.4s;\r\n  transition-timing-function: cubic-bezier(0.36, 0.55, 0.19, 1);\r\n  transition-property: opacity;\r\n  animation: vueme-fadein 0.4s;\r\n`;\r\nconst VueMeTitleContainer = styled.div`\r\n  display: flex;\r\n`;\r\nconst VueMeDialogBox = styled(\"div\", props)`\r\n  z-index: ${props => props.zIndex + 2000};\r\n  background-color: #fff;\r\n  border: 1px solid rgba(0, 0, 0, 0.125);\r\n  border-top: solid 7px\r\n    ${props =>\r\n      props.theme && props.theme[props.flavor]\r\n        ? props.theme[props.flavor].border.color\r\n        : props.defaultTheme[props.flavor]\r\n        ? props.defaultTheme[props.flavor].border.color\r\n        : \"white\"};\r\n  border-radius: 0.25rem;\r\n  min-width: ${props => props.width}px;\r\n  display: flex;\r\n  transition: all 0.4s;\r\n  transform: scale(0);\r\n  transition-timing-function: cubic-bezier(0.36, 0.55, 0.19, 1);\r\n`;\r\nconst VueMeDialogContentContainer = styled.div`\r\n  width: 100%;\r\n  font-family: \"Open Sans Regular\", -apple-system, BlinkMacSystemFont,\r\n    \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif, \"Apple Color Emoji\",\r\n    \"Segoe UI Emoji\", \"Segoe UI Symbol\";\r\n  padding: 10px;\r\n  word-break: break-word;\r\n`;\r\nconst VueMeDialogContent = styled.div``;\r\nconst VueMeDialogButtonContainer = styled.div`\r\n  margin-top: 15px;\r\n  display: flex;\r\n  justify-content: flex-end;\r\n`;\r\nconst VueMeDialog = {\r\n  components: {\r\n    VueMeDialogContainer,\r\n    VueMeBackdrop,\r\n    VueMeTitleContainer,\r\n    VueMeDialogBox,\r\n    VueMeDialogContentContainer,\r\n    VueMeDialogContent,\r\n    VueMeDialogButtonContainer,\r\n    SubSectionTitle,\r\n    DialogButton,\r\n    VueInput,\r\n    FlexRow,\r\n    FlexColumn\r\n  },\r\n  data() {\r\n    return {\r\n      show: false,\r\n      intervalId: -1,\r\n      shaking: false,\r\n      enabled: false,\r\n      fieldValues: [],\r\n      internalCloseTime: 0\r\n    };\r\n  },\r\n  props: {\r\n    flavor: {\r\n      type: String,\r\n      default: \"\"\r\n    },\r\n    id: {\r\n      type: Number,\r\n      required: true\r\n    },\r\n    parent: {\r\n      type: Object,\r\n      required: true\r\n    },\r\n    zIndex: {\r\n      type: Number,\r\n      default: 0\r\n    },\r\n    closeTime: {\r\n      type: Number,\r\n      default: 0\r\n    },\r\n    autoCloseIndex: {\r\n      type: Number,\r\n      default: -1\r\n    },\r\n    autoClose: {\r\n      type: Boolean,\r\n      default: false\r\n    },\r\n    title: {\r\n      type: String,\r\n      default: \"Alert\"\r\n    },\r\n    icon: {\r\n      type: String,\r\n      default: \"\"\r\n    },\r\n    width: {\r\n      type: Number,\r\n      default: 360\r\n    },\r\n    content: {\r\n      type: String,\r\n      default: \"You forgot to provide content\"\r\n    },\r\n    fields: {\r\n      type: Array,\r\n      default() {\r\n        return [];\r\n      }\r\n    },\r\n    backgroundDismiss: {\r\n      type: Boolean,\r\n      default: true\r\n    },\r\n    buttons: {\r\n      type: Array,\r\n      default() {\r\n        return [\r\n          {\r\n            id: 1,\r\n            flavor: \"\",\r\n            text: \"Close\",\r\n            action: function() {\r\n              // empty\r\n            }\r\n          }\r\n        ];\r\n      }\r\n    }\r\n  },\r\n  mounted() {\r\n    let self = this;\r\n    this.$nextTick(function() {\r\n      self.open();\r\n    });\r\n  },\r\n  methods: {\r\n    open: function() {\r\n      this.show = true;\r\n      this.enabled = true;\r\n      this.internalCloseTime = this.closeTime;\r\n      if (this.autoClose) {\r\n        this.beginAutoClose();\r\n      }\r\n      let self = this;\r\n      setTimeout(function() {\r\n        self.$refs.backdrop.$el.classList.add(\"vueme-dialog-backdrop-open\");\r\n        self.$refs.dialogBox.$el.classList.add(\"vueme-dialog-open\");\r\n      }, 50);\r\n    },\r\n    handleAutoClose: function() {\r\n      if (this.internalCloseTime == 0) {\r\n        clearInterval(this.intervalId);\r\n        this.callFunction(this.buttons[this.autoCloseIndex]);\r\n      } else {\r\n        this.internalCloseTime--;\r\n      }\r\n    },\r\n    beginAutoClose: function() {\r\n      this.intervalId = setInterval(this.handleAutoClose, 1000);\r\n    },\r\n    callFunction: function(button) {\r\n      if (this.enabled) {\r\n        var close = button.action(this.fieldValues);\r\n        if (close !== false) {\r\n          this.close();\r\n        }\r\n      }\r\n    },\r\n    close: function() {\r\n      if (this.enabled && !this.shaking) {\r\n        this.enabled = false;\r\n        if (this && this.$refs && this.$refs.dialogBox) {\r\n          this.$refs.dialogBox.$el.classList.remove(\"vueme-dialog-open\");\r\n          this.$refs.dialogBox.$el.classList.add(\"vueme-dismiss-dialog\");\r\n        }\r\n        if (this && this.$refs && this.$refs.backdrop)\r\n          this.$refs.backdrop.$el.classList.remove(\r\n            \"vueme-dialog-backdrop-open\"\r\n          );\r\n        let self = this;\r\n        setTimeout(function() {\r\n          self.show = false;\r\n          self.show = false;\r\n          // destroy the vue listeners, etc\r\n          self.$destroy();\r\n\r\n          // remove the element from the DOM\r\n          self.$el.parentNode.removeChild(self.$el);\r\n          self.parent.close(self.id);\r\n        }, 420);\r\n      }\r\n    },\r\n    closeDialog: function() {\r\n      if (!this.enabled) {\r\n        return;\r\n      }\r\n      if (this.backgroundDismiss) {\r\n        this.close();\r\n      } else {\r\n        if (this && this.$refs && this.$refs.dialogBox)\r\n          this.$refs.dialogBox.$el.classList.add(\"vueme-shake-dialog\");\r\n        let self = this;\r\n        this.shaking = true;\r\n        setTimeout(function() {\r\n          self.shaking = false;\r\n          if (self && self.$refs && self.$refs.dialogBox)\r\n            self.$refs.dialogBox.$el.classList.remove(\"vueme-shake-dialog\");\r\n        }, 1000);\r\n      }\r\n    }\r\n  },\r\n  template: `\r\n  <vue-me-dialog-container :z-index=\"zIndex\">\r\n    <vue-me-backdrop\r\n      ref=\"backdrop\"\r\n      :class=\"{'vueme-dialog-backdrop-open' : show}\"\r\n      :z-index=\"zIndex\"\r\n      @click=\"closeDialog\"\r\n    ></vue-me-backdrop>\r\n      <vue-me-dialog-box\r\n        ref=\"dialogBox\"\r\n        :flavor=\"flavor\"\r\n        :width=\"width\"\r\n      >\r\n        <vue-me-dialog-content-container>\r\n          <vue-me-title-container>\r\n            <span v-html=\"icon\"></span>\r\n            <sub-section-title class=\"vue-me-title\">{{title}}</sub-section-title>\r\n          </vue-me-title-container>\r\n          <vue-me-dialog-content>\r\n            <div v-html=\"content\"></div>\r\n            <form v-if=\"fields.length > 0\">\r\n              <vue-input\r\n                v-for=\"field in fields\"\r\n                :key=\"'field' + field.id\"\r\n                :name=\"'vueMeField' + field.id\"\r\n                :input-type=\"field.type\"\r\n                :label=\"field.label\"\r\n                v-model=\"fieldValues[field.id]\"\r\n              ></vue-input>\r\n            </form>\r\n            <vue-me-dialog-button-container>\r\n              <dialog-button\r\n                v-for=\"(button, index) in buttons\"\r\n                :key=\"'button' + button.id\"\r\n                @click=\"callFunction(button)\"\r\n                :flavor=\"button.flavor\"\r\n                :small=\"true\"\r\n                :disabled=\"shaking\"\r\n              >\r\n                {{button.text}}\r\n                <span v-if=\"index == autoCloseIndex\">({{internalCloseTime}})</span>\r\n              </dialog-button>\r\n            </vue-me-dialog-button-container>\r\n          </vue-me-dialog-content>\r\n        </vue-me-dialog-content-container>\r\n      </vue-me-dialog-box>\r\n  </vue-me-dialog-container>\r\n  `\r\n};\r\nexport const VueMe = {\r\n  components: { VueMeDialog },\r\n  name: \"vue-me\",\r\n  data() {\r\n    return {\r\n      alerts: [],\r\n      availableId: 0,\r\n      availalbeAlertId: 0,\r\n      deletedAlerts: []\r\n    };\r\n  },\r\n  props: {\r\n    parentInstance: {\r\n      type: Object,\r\n      default: \"\"\r\n    }\r\n  },\r\n  mounted: function() {\r\n    this.parentInstance.$alert = this.alert;\r\n    if (typeof Object.assign !== \"function\") {\r\n      // Must be writable: true, enumerable: false, configurable: true\r\n      Object.defineProperty(Object, \"assign\", {\r\n        value: function assign(target, varArgs) {\r\n          // .length of function is 2\r\n          \"use strict\";\r\n          if (target === null || target === undefined) {\r\n            throw new TypeError(\"Cannot convert undefined or null to object\");\r\n          }\r\n\r\n          var to = Object(target);\r\n\r\n          for (var index = 1; index < arguments.length; index++) {\r\n            var nextSource = arguments[index];\r\n\r\n            if (nextSource !== null && nextSource !== undefined) {\r\n              for (var nextKey in nextSource) {\r\n                // Avoid bugs when hasOwnProperty is shadowed\r\n                if (Object.prototype.hasOwnProperty.call(nextSource, nextKey)) {\r\n                  to[nextKey] = nextSource[nextKey];\r\n                }\r\n              }\r\n            }\r\n          }\r\n          return to;\r\n        },\r\n        writable: true,\r\n        configurable: true\r\n      });\r\n    }\r\n  },\r\n  watch: {\r\n    deletedAlerts(newVal, oldVal) {\r\n      // we do this because if we change the alerts array while we still have alerts visible, it causes a re render but\r\n      // not a re-mount so the alerts \"disappear\". So we wait to delete from array until all alerts are no longer visible\r\n      if (\r\n        this.deletedAlerts.length == this.alerts.length &&\r\n        this.deletedAlerts.length != 0\r\n      ) {\r\n        this.alerts = [];\r\n        this.deletedAlerts = [];\r\n      }\r\n    }\r\n  },\r\n  methods: {\r\n    close: function close(id) {\r\n      this.deletedAlerts.push(id);\r\n    },\r\n    formatField: function(field) {\r\n      var label = \"Label\";\r\n      if (field.label) {\r\n        label = field.label;\r\n      }\r\n      var fieldType = \"text\";\r\n      if (field.type) {\r\n        fieldType = field.type;\r\n      }\r\n      var id = label + \"-\" + fieldType;\r\n      if (field.id) {\r\n        id = field.id;\r\n      }\r\n      return {\r\n        id: id,\r\n        label: label,\r\n        type: fieldType\r\n      };\r\n    },\r\n    formatButton: function(button) {\r\n      var text = \"Button\";\r\n      if (button.text) {\r\n        text = button.text;\r\n      }\r\n      var flavor = \"Primary\";\r\n      if (button.flavor) {\r\n        flavor = button.flavor;\r\n      }\r\n      var action = function() {};\r\n      if (button.action) {\r\n        action = button.action;\r\n      }\r\n      var id = this.availableId++;\r\n      if (button.id) {\r\n        id = button.id;\r\n      }\r\n      return {\r\n        id: id,\r\n        text: text,\r\n        flavor: flavor,\r\n        action: action\r\n      };\r\n    },\r\n    alert: function(options) {\r\n      let dialogConfiguration = {\r\n        id: this.availalbeAlertId++,\r\n        parent: this\r\n      };\r\n      let flavor = \"\";\r\n      if (options.flavor) {\r\n        flavor = options.flavor;\r\n      }\r\n      dialogConfiguration.flavor = flavor;\r\n      let width = 360;\r\n      if (options.width) {\r\n        width = options.width;\r\n      }\r\n      dialogConfiguration.width = width;\r\n      let title = \"Alert\";\r\n      if (typeof options.title == \"string\") {\r\n        title = options.title;\r\n      }\r\n      dialogConfiguration.title = title;\r\n      let icon = \"\";\r\n      if (options.icon) {\r\n        icon = options.icon;\r\n      }\r\n      dialogConfiguration.icon = icon;\r\n      let content = \"This is an alert.\";\r\n      if (typeof options.content == \"string\") {\r\n        content = options.content;\r\n      }\r\n      dialogConfiguration.content = content;\r\n      let backgroundDismiss = false;\r\n      if (options.backgroundDismiss) {\r\n        backgroundDismiss = options.backgroundDismiss;\r\n      }\r\n      dialogConfiguration.backgroundDismiss = backgroundDismiss;\r\n      let buttons = [this.formatButton({})];\r\n      if (options.buttons && Array.isArray(options.buttons)) {\r\n        buttons = [];\r\n        for (let x = 0; x < options.buttons.length; x++) {\r\n          buttons.push(this.formatButton(options.buttons[x]));\r\n        }\r\n      }\r\n      dialogConfiguration.buttons = buttons;\r\n      let fields = [];\r\n      if (options.fields && Array.isArray(options.fields)) {\r\n        fields = [];\r\n        for (let field of options.fields) {\r\n          fields.push(this.formatField(field));\r\n        }\r\n      }\r\n      dialogConfiguration.fields = fields;\r\n      let autoClose = options.autoClose;\r\n      if (autoClose) {\r\n        dialogConfiguration.autoClose = true;\r\n        autoClose = autoClose.split(\"|\");\r\n        dialogConfiguration.closeTime = Math.ceil(\r\n          parseInt(autoClose[1]) / 1000\r\n        );\r\n        for (let [index, button] of dialogConfiguration.buttons.entries()) {\r\n          if (button.id == autoClose[0]) {\r\n            dialogConfiguration.autoCloseIndex = index;\r\n            break;\r\n          }\r\n        }\r\n      }\r\n      this.alerts.push(Object.assign({}, dialogConfiguration));\r\n    }\r\n  }\r\n};\r\nexport default VueMe;\r\n</script>\r\n\r\n<style>\r\n.vue-me-title {\r\n  margin: 0px;\r\n}\r\n.vueme-dialog-backdrop-open {\r\n  opacity: 0.2;\r\n}\r\n.vueme-dialog-open {\r\n  transform: scale(1);\r\n}\r\n.vueme-dismiss-dialog {\r\n  transition: all 0.4s;\r\n  transition-timing-function: cubic-bezier(0.36, 0.55, 0.19, 1);\r\n  transform: scale(0);\r\n  display: block;\r\n}\r\n.vueme-shake-dialog {\r\n  -webkit-animation: shake 0.82s cubic-bezier(0.36, 0.07, 0.19, 0.97) both;\r\n  animation: shake 0.82s cubic-bezier(0.36, 0.07, 0.19, 0.97) both;\r\n  -webkit-transform: translate3d(0, 0, 0);\r\n  transform: translate3d(0, 0, 0);\r\n}\r\n@keyframes vueme-fadein {\r\n  from {\r\n    opacity: 0;\r\n  }\r\n  to {\r\n    opacity: 0.2;\r\n  }\r\n}\r\n@keyframes shake {\r\n  10%,\r\n  90% {\r\n    -webkit-transform: translate3d(-2px, 0, 0);\r\n    transform: translate3d(-2px, 0, 0);\r\n  }\r\n  20%,\r\n  80% {\r\n    -webkit-transform: translate3d(4px, 0, 0);\r\n    transform: translate3d(4px, 0, 0);\r\n  }\r\n  30%,\r\n  50%,\r\n  70% {\r\n    -webkit-transform: translate3d(-8px, 0, 0);\r\n    transform: translate3d(-8px, 0, 0);\r\n  }\r\n  40%,\r\n  60% {\r\n    -webkit-transform: translate3d(8px, 0, 0);\r\n    transform: translate3d(8px, 0, 0);\r\n  }\r\n}\r\n@-ms-keyframes shake {\r\n  10%,\r\n  90% {\r\n    -webkit-transform: translate3d(-2px, 0, 0);\r\n    transform: translate3d(-2px, 0, 0);\r\n  }\r\n  20%,\r\n  80% {\r\n    -webkit-transform: translate3d(4px, 0, 0);\r\n    transform: translate3d(4px, 0, 0);\r\n  }\r\n  30%,\r\n  50%,\r\n  70% {\r\n    -webkit-transform: translate3d(-8px, 0, 0);\r\n    transform: translate3d(-8px, 0, 0);\r\n  }\r\n  40%,\r\n  60% {\r\n    -webkit-transform: translate3d(8px, 0, 0);\r\n    transform: translate3d(8px, 0, 0);\r\n  }\r\n}\r\n</style>\r\n"]}, media: undefined });

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

var install = function installVueMe(Vue) {
  if (install.installed) return;
  install.installed = true;
  Vue.component("VueMe", __vue_component__);
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
//# sourceMappingURL=VueMe.esm.js.map
