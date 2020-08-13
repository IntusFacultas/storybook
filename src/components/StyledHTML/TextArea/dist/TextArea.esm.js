import { NLabel } from '@IntusFacultas/typography';
import Theme from '@IntusFacultas/design-system';
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

/*
DragResize v1.0@74147644ad1f26597f1c8d1c42a065f57d9b2e8b
(c) 2005-2013 Angus Turnbull, TwinHelix Designs http://www.twinhelix.com

Licensed under the GNU LGPL, version 3 or later:
https://www.gnu.org/copyleft/lesser.html
This is distributed WITHOUT ANY WARRANTY; without even the implied
warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.

MODIFIED BY Pedro Del Moral Lopez TO RESOLVE ISSUES WITH STRICT MODE
*/
if (typeof addEvent != "function") {
  var addEvent = function addEvent(o, t, f, l) {
    var d = "addEventListener",
        n = "on" + t,
        rO = o,
        rT = t,
        rF = f,
        rL = l;
    if (o[d] && !l) return o[d](t, f, false);
    if (!o._evts) o._evts = {};

    if (!o._evts[t]) {
      o._evts[t] = o[n] ? {
        b: o[n]
      } : {};
      o[n] = new Function("e", 'var r=true,o=this,a=o._evts["' + t + '"],i;for(i in a){o._f=a[i];r=o._f(e||window.event)!=false&&r;o._f=null}return r');
      if (t != "unload") addEvent(window, "unload", function () {
        removeEvent(rO, rT, rF, rL);
      });
    }

    if (!f._i) f._i = addEvent._i++;
    o._evts[t][f._i] = f;
  };

  addEvent._i = 1;

  var removeEvent = function removeEvent(o, t, f, l) {
    var d = "removeEventListener";
    if (o[d] && !l) return o[d](t, f, false);
    if (o._evts && o._evts[t] && f._i) delete o._evts[t][f._i];
  };
}

function cancelEvent(e, c) {
  e.returnValue = false;
  if (e.preventDefault) e.preventDefault();

  if (c) {
    e.cancelBubble = true;
    if (e.stopPropagation) e.stopPropagation();
  }
}

function DragResize(myName, config) {
  var props = {
    myName: myName,
    enabled: true,
    handles: ["tl", "tm", "tr", "ml", "mr", "bl", "bm", "br"],
    isElement: null,
    isHandle: null,
    element: null,
    handle: null,
    minWidth: 10,
    minHeight: 10,
    minLeft: 0,
    maxLeft: 9999,
    minTop: 0,
    maxTop: 9999,
    gridX: 1,
    gridY: 1,
    zIndex: 1,
    mouseX: 0,
    mouseY: 0,
    lastMouseX: 0,
    lastMouseY: 0,
    mOffX: 0,
    mOffY: 0,
    elmX: 0,
    elmY: 0,
    elmW: 0,
    elmH: 0,
    allowBlur: true,
    ondragfocus: null,
    ondragstart: null,
    ondragmove: null,
    ondragend: null,
    ondragblur: null
  };

  for (var p in props) {
    this[p] = typeof config[p] == "undefined" ? props[p] : config[p];
  }
}

DragResize.prototype.apply = function (node) {
  var obj = this;
  addEvent(node, "mousedown", function (e) {
    obj.mouseDown(e);
  });
  addEvent(node, "mousemove", function (e) {
    obj.mouseMove(e);
  });
  addEvent(node, "mouseup", function (e) {
    obj.mouseUp(e);
  });
  addEvent(node, "touchstart", function (e) {
    obj.mouseDown(e);
  });
  addEvent(node, "touchmove", function (e) {
    obj.mouseMove(e);
  });
  addEvent(node, "touchend", function (e) {
    obj.mouseUp(e);
  });
};

DragResize.prototype.select = function (newElement) {
  if (!document.getElementById || !this.enabled) return;

  if (newElement && newElement != this.element && this.enabled) {
    this.element = newElement;
    this.element.style.zIndex = ++this.zIndex;
    if (this.resizeHandleSet) this.resizeHandleSet(this.element, true);
    var eCS = this.element.currentStyle || window.getComputedStyle(this.element, null);

    if (eCS.right) {
      this.element.style.left = this.element.offsetLeft + "px";
      this.element.style.right = "";
    }

    if (eCS.bottom) {
      this.element.style.top = this.element.offsetTop + "px";
      this.element.style.bottom = "";
    }

    this.elmX = parseInt(this.element.style.left);
    this.elmY = parseInt(this.element.style.top);
    this.elmW = this.element.clientWidth || this.element.offsetWidth;
    this.elmH = this.element.clientHeight || this.element.offsetHeight;
    if (this.ondragfocus) this.ondragfocus();
  }
};

DragResize.prototype.deselect = function (delHandles) {
  if (!document.getElementById || !this.enabled) return;

  if (delHandles) {
    if (this.ondragblur) this.ondragblur();
    if (this.resizeHandleSet) this.resizeHandleSet(this.element, false);
    this.element = null;
  }

  this.handle = null;
  this.mOffX = 0;
  this.mOffY = 0;
};

DragResize.prototype.mouseDown = function (e) {
  if (!document.getElementById || !this.enabled) return true;
  if (e.touches && e.touches.length) this.mouseMove(e);
  var elm = e.target || e.srcElement,
      newElement = null,
      newHandle = null,
      hRE = new RegExp(this.myName + "-([trmbl]{2})", "");

  while (elm) {
    if (elm.className) {
      if (!newHandle && (hRE.test(elm.className) || this.isHandle(elm))) newHandle = elm;

      if (this.isElement(elm)) {
        newElement = elm;
        break;
      }
    }

    elm = elm.parentNode;
  }

  if (this.element && this.element != newElement && this.allowBlur) this.deselect(true);

  if (newElement && (!this.element || newElement == this.element)) {
    if (newHandle) cancelEvent(e);
    this.select(newElement, newHandle);
    this.handle = newHandle;
    if (this.handle && this.ondragstart) this.ondragstart(hRE.test(this.handle.className));
  }
};

DragResize.prototype.mouseMove = function (e) {
  if (!document.getElementById || !this.enabled) return true;
  var mt = e.touches && e.touches.length ? e.touches[0] : e;
  this.mouseX = mt.pageX || mt.clientX + document.documentElement.scrollLeft;
  this.mouseY = mt.pageY || mt.clientY + document.documentElement.scrollTop;
  var diffX = this.mouseX - this.lastMouseX + this.mOffX;
  var diffY = this.mouseY - this.lastMouseY + this.mOffY;
  this.mOffX = this.mOffY = 0;
  this.lastMouseX = this.mouseX;
  this.lastMouseY = this.mouseY;
  if (!this.handle) return true;
  var isResize = false;

  if (this.resizeHandleDrag && this.resizeHandleDrag(diffX, diffY)) {
    isResize = true;
  } else {
    var dX = diffX,
        dY = diffY;
    if (this.elmX + dX < this.minLeft) this.mOffX = dX - (diffX = this.minLeft - this.elmX);else if (this.elmX + this.elmW + dX > this.maxLeft) this.mOffX = dX - (diffX = this.maxLeft - this.elmX - this.elmW);
    if (this.elmY + dY < this.minTop) this.mOffY = dY - (diffY = this.minTop - this.elmY);else if (this.elmY + this.elmH + dY > this.maxTop) this.mOffY = dY - (diffY = this.maxTop - this.elmY - this.elmH);
    this.elmX += diffX;
    this.elmY += diffY;
  }

  this.element.style.left = Math.round(this.elmX / this.gridX) * this.gridX + "px";
  this.element.style.top = Math.round(this.elmY / this.gridY) * this.gridY + "px";

  if (isResize) {
    this.element.style.width = Math.round(this.elmW / this.gridX) * this.gridX + "px";
    this.element.style.height = Math.round(this.elmH / this.gridY) * this.gridY + "px";
  }

  if (window.opera && document.documentElement) {
    var oDF = document.getElementById("op-drag-fix");

    if (!oDF) {
      var oDF = document.createElement("input");
      oDF.id = "op-drag-fix";
      oDF.style.display = "none";
      document.body.appendChild(oDF);
    }

    oDF.focus();
  }

  if (this.ondragmove) this.ondragmove(isResize);
  cancelEvent(e);
};

DragResize.prototype.mouseUp = function (e) {
  if (!document.getElementById || !this.enabled) return;
  var hRE = new RegExp(this.myName + "-([trmbl]{2})", "");
  if (this.handle && this.ondragend) this.ondragend(hRE.test(this.handle.className));
  this.deselect(false);
};

DragResize.prototype.resizeHandleSet = function (elm, show) {
  if (!elm._handle_tr) {
    for (var h = 0; h < this.handles.length; h++) {
      var hDiv = document.createElement("div");
      hDiv.className = this.myName + " " + this.myName + "-" + this.handles[h];
      elm["_handle_" + this.handles[h]] = elm.appendChild(hDiv);
    }
  }

  for (var h = 0; h < this.handles.length; h++) {
    elm["_handle_" + this.handles[h]].style.visibility = show ? "inherit" : "hidden";
  }
};

DragResize.prototype.resizeHandleDrag = function (diffX, diffY) {
  var hClass = this.handle && this.handle.className && this.handle.className.match(new RegExp(this.myName + "-([tmblr]{2})")) ? RegExp.$1 : "";
  var dY = diffY,
      dX = diffX,
      processed = false;

  if (hClass.indexOf("t") >= 0) {
    if (this.elmH - dY < this.minHeight) this.mOffY = dY - (diffY = this.elmH - this.minHeight);else if (this.elmY + dY < this.minTop) this.mOffY = dY - (diffY = this.minTop - this.elmY);
    this.elmY += diffY;
    this.elmH -= diffY;
    processed = true;
  }

  if (hClass.indexOf("b") >= 0) {
    if (this.elmH + dY < this.minHeight) this.mOffY = dY - (diffY = this.minHeight - this.elmH);else if (this.elmY + this.elmH + dY > this.maxTop) this.mOffY = dY - (diffY = this.maxTop - this.elmY - this.elmH);
    this.elmH += diffY;
    processed = true;
  }

  if (hClass.indexOf("l") >= 0) {
    if (this.elmW - dX < this.minWidth) this.mOffX = dX - (diffX = this.elmW - this.minWidth);else if (this.elmX + dX < this.minLeft) this.mOffX = dX - (diffX = this.minLeft - this.elmX);
    this.elmX += diffX;
    this.elmW -= diffX;
    processed = true;
  }

  if (hClass.indexOf("r") >= 0) {
    if (this.elmW + dX < this.minWidth) this.mOffX = dX - (diffX = this.minWidth - this.elmW);else if (this.elmX + this.elmW + dX > this.maxLeft) this.mOffX = dX - (diffX = this.maxLeft - this.elmX - this.elmW);
    this.elmW += diffX;
    processed = true;
  }

  return processed;
};
/*
 * resize-polyfill 1.1.0
 * (c) 2005-2013 Cezary Daniel Nowak
 * https://github.com/CezaryDanielNowak/css-resize-polyfill
 * Licenced under the MIT
 */


var resizeSupported = document.createElement("textarea").style.resize !== undefined;

var resizeHandlerPolyfill = function resizeHandlerPolyfill(target, force) {
  if (!target) {
    return resizeSupported ? "native" : "polyfill";
  }

  if (target.length) {
    //this.element list provided
    for (var i = target.length; i--;) {
      resizeHandlerPolyfill(target[i], force);
    }
  } else {
    if (target.tagName === "TEXTAREA") {
      target = target.parentNode;
    }

    target.className += " resize-polyfill-wrapper";

    if (resizeSupported && !force) {
      return;
    }

    var dragresize = new DragResize("resize-polyfill", {
      handles: ["br"],
      minWidth: 50,
      minHeight: 50,
      allowBlur: false
    });

    dragresize.isElement = function (elm) {
      return elm === target;
    };

    dragresize.isHandle = function (elm) {
      return false;
    };

    dragresize.ondragfocus = function () {};

    dragresize.ondragstart = function (isResize) {};

    dragresize.ondragmove = function (isResize) {};

    dragresize.ondragend = function (isResize) {};

    dragresize.ondragblur = function () {};

    var child = target.children[0];

    if (child && child.tagName === "TEXTAREA") {
      target.style.width = child.offsetWidth + "px";
      target.style.height = child.offsetHeight + "px";
      child.style.resize = "none";
    } else {
      target.style.resize = "none";
    }

    dragresize.apply(document);
    dragresize.select(target); // required to show handler on bottom-right

    target.className += " resize-polyfill-polyfilled";
  }
};

if (typeof window !== "undefined") {
  var css = '.resize-polyfill-wrapper {position: relative;top: auto !important;left: auto !important;}\n\
    .resize-polyfill-polyfilled textarea {width: 100%;height: 100%;}\n\
    .resize-polyfill-br {background: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAALUlEQVR42mNgwAH279//H4QZyFYAAv///5fBqQurCQQVEHQMVjaMAQQc2BQAABXMU79BvB5bAAAAAElFTkSuQmCC") no-repeat center center;border: 2px solid transparent;bottom: 0px;cursor: se-resize;height: 8px;position: absolute;right: 0px;width: 8px;}',
      head = document.head || document.getElementsByTagName("head")[0],
      style = document.createElement("style");

  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    style.appendChild(document.createTextNode(css));
  }

  head.appendChild(style);
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  width: 100%;\n  height: 35px;\n  font-size: 16px;\n  border-radius: 5px;\n  border-width: 1px;\n  border-style: solid;\n  padding: 2px 5px 2px 5px;\n  margin-top: 2px;\n  box-sizing: border-box;\n  font-family: \"Open Sans Regular\", -apple-system, BlinkMacSystemFont,\n    \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif, \"Apple Color Emoji\",\n    \"Segoe UI Emoji\", \"Segoe UI Symbol\";\n  transition: box-shadow 0.5s cubic-bezier(0, 0.99, 0.37, 1.01);\n  &:focus {\n    border-color: ", ";\n    outline: none;\n    box-shadow: 0px 0px 0px 3px\n      ", ";\n  }\n  &:read-only {\n    background-color: #e9e9e9;\n    color: #747474;\n  }\n  &:disabled {\n    cursor: not-allowed;\n    pointer-events: none;\n    color: #747474;\n    background-color: #e2e2e2;\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}
var props = {
  flavor: {
    type: String,
    default: "LightBlue"
  },
  defaultTheme: {
    type: Object,
    default: function _default() {
      return Theme;
    }
  }
};
var NTextArea = styled("textarea", props)(_templateObject(), function (props) {
  return props.theme && props.theme[props.flavor] ? props.theme[props.flavor].border.color : props.defaultTheme[props.flavor] && props.defaultTheme[props.flavor].border.color ? props.defaultTheme[props.flavor].border.color : "#040404";
}, function (props) {
  return props.theme && props.theme[props.flavor] ? props.theme[props.flavor].border.color : props.defaultTheme[props.flavor] && props.defaultTheme[props.flavor].border.color ? props.defaultTheme[props.flavor].border.color : "#040404";
});
var VueTextArea = {
  name: "vue-text-area",
  components: {
    NTextArea: NTextArea,
    NLabel: NLabel
  },
  data: function data() {
    return {
      internalValue: ""
    };
  },
  props: {
    flavor: {
      type: String,
      default: "LightBlue"
    },
    autofocus: {
      type: Boolean,
      default: false
    },
    readonly: {
      type: Boolean,
      default: false
    },
    placeholder: {
      type: String,
      default: ""
    },
    maxlength: {
      type: String,
      default: ""
    },
    value: {
      type: String,
      default: ""
    },
    cols: {
      type: String,
      default: ""
    },
    rows: {
      type: String,
      default: ""
    },
    name: {
      type: String,
      required: true
    },
    required: {
      type: Boolean,
      default: false
    },
    labelFlavor: {
      type: String,
      default: ""
    },
    labelDark: {
      type: Boolean,
      default: false
    },
    label: {
      type: String,
      required: true
    },
    disabled: {
      type: Boolean,
      default: false
    }
  },
  watch: {
    value: function value(newVal, oldVal) {
      this.internalValue = newVal;
    }
  },
  mounted: function mounted() {
    var self = this;

    if (typeof self.$parent !== "undefined") {
      if (!self.$parent.$refs.inputs) self.$parent.$refs.inputs = {};
      self.$parent.$refs.inputs[self.name] = self;
    }

    if (self.msieversion()) {
      resizeHandlerPolyfill(self.$refs.input.$el, true);
    }
  },
  computed: {
    dynamicAttributes: function dynamicAttributes() {
      var attributes = {};

      if (this.placeholder) {
        attributes.placeholder = this.placeholder;
      }

      if (this.maxlength) {
        attributes.maxlength = this.maxlength;
      }

      if (this.cols) {
        attributes.cols = this.cols;
      }

      if (this.rows) {
        attributes.rows = this.rows;
      }

      return attributes;
    }
  },
  methods: {
    msieversion: function msieversion() {
      var ua = window.navigator.userAgent;
      var msie = ua.indexOf("MSIE ");

      if (msie > 0 || !!navigator.userAgent.match(/Trident.*rv\:11\./)) {
        // If Internet Explorer, return version number
        return true;
      } // If another browser, return 0
      else {
          return false;
        }
    },
    oninput: function oninput() {
      var self = this;
      self.$emit("input", self.internalValue);
    },
    onChange: function onChange() {
      this.$emit("change", this.internalValue);
    },
    onFocus: function onFocus() {
      this.$emit("focus");
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
const __vue_script__ = VueTextArea;

/* template */
var __vue_render__ = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c(
    "div",
    { staticClass: "input-container" },
    [
      _c(
        "n-label",
        {
          attrs: { dark: _vm.labelDark, flavor: _vm.labelFlavor, for: _vm.name }
        },
        [_vm._v(_vm._s(_vm.label))]
      ),
      _vm._v(" "),
      _c(
        "n-text-area",
        _vm._b(
          {
            ref: "input",
            attrs: {
              id: _vm.name,
              flavor: _vm.flavor,
              readonly: _vm.readonly,
              name: _vm.name,
              required: _vm.required,
              disabled: _vm.disabled,
              autofocus: _vm.autofocus
            },
            on: {
              input: _vm.oninput,
              change: _vm.onChange,
              focus: _vm.onFocus
            },
            model: {
              value: _vm.internalValue,
              callback: function($$v) {
                _vm.internalValue = $$v;
              },
              expression: "internalValue"
            }
          },
          "n-text-area",
          _vm.dynamicAttributes,
          false
        )
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
    inject("data-v-7bce0596_0", { source: "\n.input-container {\r\n  display: flex;\r\n  flex-direction: column;\r\n  width: 100%;\n}\r\n", map: {"version":3,"sources":["C:\\Users\\pedro\\Documents\\Personal Projects\\GitHub\\storybook\\src\\components\\StyledHTML\\TextArea\\src\\TextArea.vue"],"names":[],"mappings":";AAqNA;EACA,aAAA;EACA,sBAAA;EACA,WAAA;AACA","file":"TextArea.vue","sourcesContent":["<template>\r\n  <div class=\"input-container\">\r\n    <n-label :dark=\"labelDark\" :flavor=\"labelFlavor\" :for=\"name\">{{\r\n      label\r\n    }}</n-label>\r\n    <n-text-area\r\n      :id=\"name\"\r\n      :flavor=\"flavor\"\r\n      :readonly=\"readonly\"\r\n      :name=\"name\"\r\n      v-bind=\"dynamicAttributes\"\r\n      :required=\"required\"\r\n      :disabled=\"disabled\"\r\n      :autofocus=\"autofocus\"\r\n      v-model=\"internalValue\"\r\n      @input=\"oninput\"\r\n      @change=\"onChange\"\r\n      @focus=\"onFocus\"\r\n      ref=\"input\"\r\n    ></n-text-area>\r\n  </div>\r\n</template>\r\n\r\n<script>\r\nimport { NLabel } from \"@IntusFacultas/typography\";\r\nimport Theme from \"@IntusFacultas/design-system\";\r\nimport styled from \"vue-styled-components\";\r\nimport resizeHandlerPolyfill from \"./polyfill-resize\";\r\nconst props = {\r\n  flavor: {\r\n    type: String,\r\n    default: \"LightBlue\",\r\n  },\r\n  defaultTheme: {\r\n    type: Object,\r\n    default: function() {\r\n      return Theme;\r\n    },\r\n  },\r\n};\r\nexport const NTextArea = styled(\"textarea\", props)`\r\n  width: 100%;\r\n  height: 35px;\r\n  font-size: 16px;\r\n  border-radius: 5px;\r\n  border-width: 1px;\r\n  border-style: solid;\r\n  padding: 2px 5px 2px 5px;\r\n  margin-top: 2px;\r\n  box-sizing: border-box;\r\n  font-family: \"Open Sans Regular\", -apple-system, BlinkMacSystemFont,\r\n    \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif, \"Apple Color Emoji\",\r\n    \"Segoe UI Emoji\", \"Segoe UI Symbol\";\r\n  transition: box-shadow 0.5s cubic-bezier(0, 0.99, 0.37, 1.01);\r\n  &:focus {\r\n    border-color: ${(props) =>\r\n      props.theme && props.theme[props.flavor]\r\n        ? props.theme[props.flavor].border.color\r\n        : props.defaultTheme[props.flavor] &&\r\n          props.defaultTheme[props.flavor].border.color\r\n        ? props.defaultTheme[props.flavor].border.color\r\n        : \"#040404\"};\r\n    outline: none;\r\n    box-shadow: 0px 0px 0px 3px\r\n      ${(props) =>\r\n        props.theme && props.theme[props.flavor]\r\n          ? props.theme[props.flavor].border.color\r\n          : props.defaultTheme[props.flavor] &&\r\n            props.defaultTheme[props.flavor].border.color\r\n          ? props.defaultTheme[props.flavor].border.color\r\n          : \"#040404\"};\r\n  }\r\n  &:read-only {\r\n    background-color: #e9e9e9;\r\n    color: #747474;\r\n  }\r\n  &:disabled {\r\n    cursor: not-allowed;\r\n    pointer-events: none;\r\n    color: #747474;\r\n    background-color: #e2e2e2;\r\n  }\r\n`;\r\nexport const VueTextArea = {\r\n  name: \"vue-text-area\",\r\n  components: { NTextArea, NLabel },\r\n  data: function() {\r\n    return {\r\n      internalValue: \"\",\r\n    };\r\n  },\r\n  props: {\r\n    flavor: {\r\n      type: String,\r\n      default: \"LightBlue\",\r\n    },\r\n    autofocus: {\r\n      type: Boolean,\r\n      default: false,\r\n    },\r\n    readonly: {\r\n      type: Boolean,\r\n      default: false,\r\n    },\r\n    placeholder: {\r\n      type: String,\r\n      default: \"\",\r\n    },\r\n    maxlength: {\r\n      type: String,\r\n      default: \"\",\r\n    },\r\n    value: {\r\n      type: String,\r\n      default: \"\",\r\n    },\r\n    cols: {\r\n      type: String,\r\n      default: \"\",\r\n    },\r\n    rows: {\r\n      type: String,\r\n      default: \"\",\r\n    },\r\n    name: {\r\n      type: String,\r\n      required: true,\r\n    },\r\n    required: {\r\n      type: Boolean,\r\n      default: false,\r\n    },\r\n    labelFlavor: {\r\n      type: String,\r\n      default: \"\",\r\n    },\r\n    labelDark: {\r\n      type: Boolean,\r\n      default: false,\r\n    },\r\n    label: {\r\n      type: String,\r\n      required: true,\r\n    },\r\n    disabled: {\r\n      type: Boolean,\r\n      default: false,\r\n    },\r\n  },\r\n  watch: {\r\n    value: function(newVal, oldVal) {\r\n      this.internalValue = newVal;\r\n    },\r\n  },\r\n  mounted: function() {\r\n    var self = this;\r\n    if (typeof self.$parent !== \"undefined\") {\r\n      if (!self.$parent.$refs.inputs) self.$parent.$refs.inputs = {};\r\n      self.$parent.$refs.inputs[self.name] = self;\r\n    }\r\n    if (self.msieversion()) {\r\n      resizeHandlerPolyfill(self.$refs.input.$el, true);\r\n    }\r\n  },\r\n  computed: {\r\n    dynamicAttributes() {\r\n      let attributes = {};\r\n      if (this.placeholder) {\r\n        attributes.placeholder = this.placeholder;\r\n      }\r\n      if (this.maxlength) {\r\n        attributes.maxlength = this.maxlength;\r\n      }\r\n      if (this.cols) {\r\n        attributes.cols = this.cols;\r\n      }\r\n      if (this.rows) {\r\n        attributes.rows = this.rows;\r\n      }\r\n      return attributes;\r\n    },\r\n  },\r\n  methods: {\r\n    msieversion() {\r\n      var ua = window.navigator.userAgent;\r\n      var msie = ua.indexOf(\"MSIE \");\r\n\r\n      if (msie > 0 || !!navigator.userAgent.match(/Trident.*rv\\:11\\./)) {\r\n        // If Internet Explorer, return version number\r\n        return true;\r\n      } // If another browser, return 0\r\n      else {\r\n        return false;\r\n      }\r\n\r\n      return false;\r\n    },\r\n    oninput: function() {\r\n      var self = this;\r\n      self.$emit(\"input\", self.internalValue);\r\n    },\r\n    onChange() {\r\n      this.$emit(\"change\", this.internalValue);\r\n    },\r\n    onFocus() {\r\n      this.$emit(\"focus\");\r\n    },\r\n  },\r\n};\r\nexport default VueTextArea;\r\n</script>\r\n\r\n<style>\r\n.input-container {\r\n  display: flex;\r\n  flex-direction: column;\r\n  width: 100%;\r\n}\r\n</style>\r\n"]}, media: undefined });

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

var install = function installVueTextArea(Vue) {
  if (install.installed) return;
  install.installed = true;
  Vue.component("VueTextArea", __vue_component__);
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
export { __vue_component__ as VueTextArea };
//# sourceMappingURL=TextArea.esm.js.map
