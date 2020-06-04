import styled from 'vue-styled-components';
import '@IntusFacultas/design-system';
import { NInput } from '@IntusFacultas/input';
import { NLabel } from '@IntusFacultas/typography';

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

function _templateObject7() {
  var data = _taggedTemplateLiteral(["\n  height: 17px;\n  & span {\n    display: inline-block;\n    transform: rotate(90deg);\n  }\n  border-radius: 0px 0px 5px 0px;\n  border: 1px solid transparent;\n  border-bottom-color: #222;\n  border-right-color: #222;\n  font-weight: bold;\n  font-size: 16px;\n  line-height: 0;\n  background-color: #f0f0f0;\n  transition: color 0.1s ease-in-out, background-color 0.1s ease-in-out,\n    border-color 0.1s ease-in-out, box-shadow 0.1s ease-in-out;\n  &:hover {\n    background-color: #e1e1e1;\n    cursor: pointer;\n  }\n"]);

  _templateObject7 = function _templateObject7() {
    return data;
  };

  return data;
}

function _templateObject6() {
  var data = _taggedTemplateLiteral(["\n  height: 18px;\n  & span {\n    display: inline-block;\n    transform: rotate(-90deg);\n    margin-right: 3px;\n  }\n  border-radius: 0px 5px 0px 0px;\n  border: 1px solid transparent;\n  border-top-color: #222;\n  border-right-color: #222;\n  font-weight: bold;\n  font-size: 16px;\n  background-color: #f0f0f0;\n  transition: color 0.1s ease-in-out, background-color 0.1s ease-in-out,\n    border-color 0.1s ease-in-out, box-shadow 0.1s ease-in-out;\n  &:hover {\n    background-color: #e1e1e1;\n    cursor: pointer;\n  }\n"]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-end;\n  margin-left: -22px;\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n  min-width: 100%;\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: row;\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  margin-left: 2px;\n  margin-right: 2px;\n  display: flex;\n  position: relative;\n  min-width: calc(50% - 4px);\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: column;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}
var NumberContainer = styled.div(_templateObject());
var InputGroupContainer = styled.div(_templateObject2());
var InputContainer = styled.div(_templateObject3());
var InputFieldContainer = styled.div(_templateObject4());
var ButtonContainer = styled.div(_templateObject5());
var IncrementButton = styled.button(_templateObject6());
var DecrementButton = styled.button(_templateObject7());
var NumberRange = {
  components: {
    NumberContainer: NumberContainer,
    InputContainer: InputContainer,
    InputGroupContainer: InputGroupContainer,
    NLabel: NLabel,
    NInput: NInput,
    ButtonContainer: ButtonContainer,
    IncrementButton: IncrementButton,
    DecrementButton: DecrementButton,
    InputFieldContainer: InputFieldContainer
  },
  data: function data() {
    return {
      lowerValue: 0,
      upperValue: 0,
      incrementID: 0,
      decrementID: 0,
      internalSteps: []
    };
  },
  props: {
    value: {
      type: Object,
      default: function _default() {
        return {
          lowValue: 0,
          highValue: 0
        };
      }
    },
    labelFlavor: {
      type: String,
      default: ""
    },
    name: {
      type: String,
      required: true
    },
    label: {
      type: String,
      required: true
    },
    max: {
      type: Number,
      required: true
    },
    min: {
      type: Number,
      required: true
    },
    steps: {
      type: Array,
      default: function _default() {
        return [1];
      }
    }
  },
  watch: {
    steps: function steps() {
      this.internalSteps = this.steps.slice().sort(function (x, y) {
        return x >= y;
      });
    }
  },
  mounted: function mounted() {
    this.lowerValue = this.min;
    this.upperValue = this.max;
    var self = this;
    self.$watch("value", function () {
      if (self.lowerValue != self.value.lowerValue) {
        self.lowerValue = self.value.lowerValue;
        self.validateValue();
      }

      if (self.upperValue != self.value.upperValue) {
        self.upperValue = self.value.upperValue;
        self.validateValue();
      }
    }, {
      deep: true
    });

    if (this.steps.length == 0) {
      throw "Steps must have at least one value";
    }

    if (this.steps.length > 1) {
      if (this.steps[0] != this.min) {
        throw "Discrete steps must have a first value equal to the minimum";
      }

      if (this.steps[this.steps.length - 1] != this.max) {
        throw "Discrete steps must have a last value equal to the maximum";
      }
    }

    this.internalSteps = this.steps.slice().sort(function (x, y) {
      return x >= y;
    });

    if (!Array.prototype.findIndex) {
      Object.defineProperty(Array.prototype, "findIndex", {
        value: function value(predicate) {
          // 1. Let O be ? ToObject(this value).
          if (this == null) {
            throw new TypeError('"this" is null or not defined');
          }

          var o = Object(this); // 2. Let len be ? ToLength(? Get(O, "length")).

          var len = o.length >>> 0; // 3. If IsCallable(predicate) is false, throw a TypeError exception.

          if (typeof predicate !== "function") {
            throw new TypeError("predicate must be a function");
          } // 4. If thisArg was supplied, let T be thisArg; else let T be undefined.


          var thisArg = arguments[1]; // 5. Let k be 0.

          var k = 0; // 6. Repeat, while k < len

          while (k < len) {
            // a. Let Pk be ! ToString(k).
            // b. Let kValue be ? Get(O, Pk).
            // c. Let testResult be ToBoolean(? Call(predicate, T, « kValue, k, O »)).
            // d. If testResult is true, return k.
            var kValue = o[k];

            if (predicate.call(thisArg, kValue, k, o)) {
              return k;
            } // e. Increase k by 1.


            k++;
          } // 7. Return -1.


          return -1;
        },
        configurable: true,
        writable: true
      });
    }
  },
  beforeDestroy: function beforeDestroy() {},
  methods: {
    startIncrement: function startIncrement(event, value) {
      var _this = this;

      this.increment(event, value);
      this.incrementID = setTimeout(function () {
        _this.incrementID = setInterval(function () {
          return _this.increment(event, value);
        }, 60);
      }, 60);
    },
    stopIncrement: function stopIncrement() {
      clearTimeout(this.incrementID);
      clearInterval(this.incrementID);
    },
    increment: function increment(event, value) {
      var _this2 = this;

      event.preventDefault();

      if (this[value] == this.max) {
        return;
      }

      if (this.internalSteps.length > 1) {
        var nextIndex = this.internalSteps.findIndex(function (x) {
          return x == _this2[value];
        }) + 1;

        if (nextIndex >= this.internalSteps.length) {
          nextIndex = this.internalSteps.length - 1;
        }

        this[value] = parseFloat(this.internalSteps[nextIndex]);
      } else {
        this[value] += parseFloat(this.internalSteps[0]);
      }

      this.validateValue();
    },
    startDecrement: function startDecrement(event, value) {
      var _this3 = this;

      this.decrement(event, value);
      this.decrementID = setTimeout(function () {
        _this3.decrementID = setInterval(function () {
          return _this3.decrement(event, value);
        }, 60);
      }, 60);
    },
    stopDecrement: function stopDecrement() {
      clearTimeout(this.decrementID);
      clearInterval(this.decrementID);
    },
    decrement: function decrement(event, value) {
      var _this4 = this;

      event.preventDefault();

      if (this[value] == this.min) {
        return;
      }

      if (this.internalSteps.length > 1) {
        var nextIndex = this.internalSteps.findIndex(function (x) {
          return x == _this4[value];
        }) - 1;

        if (nextIndex <= 0) {
          nextIndex = 0;
        }

        this[value] = parseFloat(this.internalSteps[nextIndex]);
      } else {
        this[value] -= parseFloat(this.internalSteps[0]);
      }

      this.validateValue();
    },
    roundValues: function roundValues(value) {
      var copy = this.internalSteps.slice();
      copy.push(parseFloat(value));
      copy.sort(function (x, y) {
        return x >= y;
      });
      var index = copy.findIndex(function (x) {
        return x == parseFloat(value);
      });
      var lowerBound = index - 1;
      var upperBound = index + 1;

      if (lowerBound < 0) {
        lowerBound = 0;
      }

      if (upperBound >= copy.length) {
        upperBound = copy.length - 1;
      }

      copy = copy.slice(lowerBound, upperBound + 1);
      return copy;
    },
    roundToNearestDiscreteStep: function roundToNearestDiscreteStep(values, value) {
      var lowerDelta = Math.abs(values[0] - value);
      var upperDelta = Math.abs(values[values.length - 1] - value);

      if (upperDelta < lowerDelta) {
        // round up
        return values[values.length - 1];
      } else {
        return values[0];
      }
    },
    roundToNearestBasicStep: function roundToNearestBasicStep(value, base) {
      var distanceToBottom = 0;
      var distanceToTop = 0;
      var tracker = value;
      var bottom = 0;
      var top = 0;

      while (Math.abs(tracker - base) % this.internalSteps[0] != 0) {
        distanceToBottom++;
        tracker--;
      }

      bottom = tracker;
      tracker = value;

      while (Math.abs(tracker - base) % this.internalSteps[0] != 0) {
        distanceToTop++;
        tracker++;
      }

      top = tracker;

      if (distanceToBottom <= distanceToTop) {
        return bottom;
      }

      return top;
    },
    validateValue: function validateValue() {
      if (this.internalSteps.length != 1) {
        if (this.internalSteps.indexOf(this.lowerValue) == -1) {
          var copy = this.roundValues(this.lowerValue);
          this.lowerValue = parseFloat(this.roundToNearestDiscreteStep(copy, this.lowerValue));
        }

        if (this.internalSteps.indexOf(this.upperValue) == -1) {
          var _copy = this.roundValues(this.upperValue);

          this.upperValue = parseFloat(this.roundToNearestDiscreteStep(_copy, this.upperValue));
        }
      } else {
        if (Math.abs(this.lowerValue - this.min) % this.internalSteps[0] != 0) {
          this.lowerValue = this.roundToNearestBasicStep(this.lowerValue, this.min);
        }

        if (Math.abs(this.upperValue - this.max) % this.internalSteps[0] != 0) {
          this.upperValue = this.roundToNearestBasicStep(this.upperValue, this.max);
        }
      }

      if (this.upperValue > this.max) {
        this.upperValue = this.max;
      }

      if (this.lowerValue < this.min) {
        this.lowerValue = this.min;
      }

      if (this.lowerValue > this.upperValue) {
        this.lowerValue = parseFloat(this.upperValue);
      }

      this.lowerValue = parseFloat(this.lowerValue);
      this.upperValue = parseFloat(this.upperValue);
      this.$emit("change", {
        lowerValue: this.lowerValue,
        upperValue: this.upperValue
      });
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
const __vue_script__ = NumberRange;

/* template */
var __vue_render__ = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c(
    "number-container",
    [
      _c(
        "input-container",
        [
          _c(
            "input-group-container",
            { staticClass: "number-range-min-input-container" },
            [
              _c(
                "input-field-container",
                [
                  _c(
                    "n-label",
                    {
                      attrs: {
                        flavor: _vm.labelFlavor,
                        for: _vm.name + "LowerValue"
                      }
                    },
                    [_vm._v(_vm._s(_vm.label) + " Lower")]
                  ),
                  _vm._v(" "),
                  _c("n-input", {
                    ref: "minInput",
                    staticClass: "number-range number-range",
                    attrs: {
                      type: "number",
                      name: _vm.name + "LowerValue",
                      id: _vm.name + "LowerValue",
                      min: _vm.min,
                      max: _vm.upperValue
                    },
                    on: {
                      keydown: [
                        function($event) {
                          if (
                            !$event.type.indexOf("key") &&
                            _vm._k($event.keyCode, "up", 38, $event.key, [
                              "Up",
                              "ArrowUp"
                            ])
                          ) {
                            return null
                          }
                          return _vm.increment($event, "lowerValue")
                        },
                        function($event) {
                          if (
                            !$event.type.indexOf("key") &&
                            _vm._k($event.keyCode, "down", 40, $event.key, [
                              "Down",
                              "ArrowDown"
                            ])
                          ) {
                            return null
                          }
                          return _vm.decrement($event, "lowerValue")
                        }
                      ],
                      change: _vm.validateValue
                    },
                    model: {
                      value: _vm.lowerValue,
                      callback: function($$v) {
                        _vm.lowerValue = $$v;
                      },
                      expression: "lowerValue"
                    }
                  })
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "button-container",
                [
                  _c(
                    "increment-button",
                    {
                      on: {
                        keydown: function($event) {
                          if (
                            !$event.type.indexOf("key") &&
                            _vm._k($event.keyCode, "space", 32, $event.key, [
                              " ",
                              "Spacebar"
                            ])
                          ) {
                            return null
                          }
                          return _vm.increment($event, "lowerValue")
                        },
                        mousedown: function($event) {
                          return _vm.startIncrement($event, "lowerValue")
                        },
                        mouseup: function($event) {
                          return _vm.stopIncrement()
                        },
                        mouseleave: function($event) {
                          return _vm.stopIncrement()
                        }
                      }
                    },
                    [_c("span", [_vm._v("›")])]
                  ),
                  _vm._v(" "),
                  _c(
                    "decrement-button",
                    {
                      on: {
                        keydown: function($event) {
                          if (
                            !$event.type.indexOf("key") &&
                            _vm._k($event.keyCode, "space", 32, $event.key, [
                              " ",
                              "Spacebar"
                            ])
                          ) {
                            return null
                          }
                          return _vm.decrement($event, "lowerValue")
                        },
                        mousedown: function($event) {
                          return _vm.startDecrement($event, "lowerValue")
                        },
                        mouseup: function($event) {
                          return _vm.stopDecrement()
                        },
                        mouseleave: function($event) {
                          return _vm.stopDecrement()
                        }
                      }
                    },
                    [_c("span", [_vm._v("›")])]
                  )
                ],
                1
              )
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "input-group-container",
            [
              _c(
                "input-field-container",
                [
                  _c(
                    "n-label",
                    {
                      staticClass: "number-range-max-label",
                      attrs: {
                        flavor: _vm.labelFlavor,
                        for: _vm.name + "UpperValue"
                      }
                    },
                    [_vm._v(_vm._s(_vm.label) + " Upper")]
                  ),
                  _vm._v(" "),
                  _c("n-input", {
                    ref: "maxInput",
                    staticClass: "number-range",
                    attrs: {
                      type: "number",
                      name: _vm.name + "UpperValue",
                      id: _vm.name + "UpperValue",
                      min: _vm.lowerValue,
                      max: _vm.max
                    },
                    on: {
                      keydown: [
                        function($event) {
                          if (
                            !$event.type.indexOf("key") &&
                            _vm._k($event.keyCode, "up", 38, $event.key, [
                              "Up",
                              "ArrowUp"
                            ])
                          ) {
                            return null
                          }
                          return _vm.increment($event, "upperValue")
                        },
                        function($event) {
                          if (
                            !$event.type.indexOf("key") &&
                            _vm._k($event.keyCode, "down", 40, $event.key, [
                              "Down",
                              "ArrowDown"
                            ])
                          ) {
                            return null
                          }
                          return _vm.decrement($event, "upperValue")
                        }
                      ],
                      change: _vm.validateValue
                    },
                    model: {
                      value: _vm.upperValue,
                      callback: function($$v) {
                        _vm.upperValue = $$v;
                      },
                      expression: "upperValue"
                    }
                  })
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "button-container",
                [
                  _c(
                    "increment-button",
                    {
                      on: {
                        keydown: function($event) {
                          if (
                            !$event.type.indexOf("key") &&
                            _vm._k($event.keyCode, "space", 32, $event.key, [
                              " ",
                              "Spacebar"
                            ])
                          ) {
                            return null
                          }
                          return _vm.increment($event, "upperValue")
                        },
                        mousedown: function($event) {
                          return _vm.startIncrement($event, "upperValue")
                        },
                        mouseup: function($event) {
                          return _vm.stopIncrement()
                        },
                        mouseleave: function($event) {
                          return _vm.stopIncrement()
                        }
                      }
                    },
                    [_c("span", [_vm._v("›")])]
                  ),
                  _vm._v(" "),
                  _c(
                    "decrement-button",
                    {
                      on: {
                        keydown: function($event) {
                          if (
                            !$event.type.indexOf("key") &&
                            _vm._k($event.keyCode, "space", 32, $event.key, [
                              " ",
                              "Spacebar"
                            ])
                          ) {
                            return null
                          }
                          return _vm.decrement($event, "upperValue")
                        },
                        mousedown: function($event) {
                          return _vm.startDecrement($event, "upperValue")
                        },
                        mouseup: function($event) {
                          return _vm.stopDecrement()
                        },
                        mouseleave: function($event) {
                          return _vm.stopDecrement()
                        }
                      }
                    },
                    [_c("span", [_vm._v("›")])]
                  )
                ],
                1
              )
            ],
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
    inject("data-v-0bb8c5e3_0", { source: "\n.number-range-max-label {\r\n  float: right;\r\n  text-align: end;\n}\n.number-range {\r\n  border-right-color: transparent;\n}\r\n/* Chrome, Safari, Edge, Opera */\ninput.number-range::-webkit-outer-spin-button,\r\ninput.number-range::-webkit-inner-spin-button {\r\n  -webkit-appearance: none;\r\n  margin: 0;\n}\r\n\r\n/* Firefox */\ninput[type=\"number\"].number-range {\r\n  -moz-appearance: textfield;\n}\r\n", map: {"version":3,"sources":["C:\\Users\\pedro\\Documents\\Personal Projects\\GitHub\\storybook\\src\\components\\StyledHTML\\NumberRange\\src\\NumberRange.vue"],"names":[],"mappings":";AA2cA;EACA,YAAA;EACA,eAAA;AACA;AACA;EACA,+BAAA;AACA;AACA,gCAAA;AACA;;EAEA,wBAAA;EACA,SAAA;AACA;;AAEA,YAAA;AACA;EACA,0BAAA;AACA","file":"NumberRange.vue","sourcesContent":["<template>\r\n  <number-container>\r\n    <input-container>\r\n      <input-group-container class=\"number-range-min-input-container\">\r\n        <input-field-container>\r\n          <n-label :flavor=\"labelFlavor\" :for=\"name + 'LowerValue'\"\r\n            >{{ label }} Lower</n-label\r\n          >\r\n          <n-input\r\n            @keydown.up=\"increment($event, 'lowerValue')\"\r\n            @keydown.down=\"decrement($event, 'lowerValue')\"\r\n            type=\"number\"\r\n            v-model=\"lowerValue\"\r\n            @change=\"validateValue\"\r\n            :name=\"name + 'LowerValue'\"\r\n            :id=\"name + 'LowerValue'\"\r\n            ref=\"minInput\"\r\n            :min=\"min\"\r\n            :max=\"upperValue\"\r\n            class=\"number-range number-range\"\r\n          ></n-input>\r\n        </input-field-container>\r\n        <button-container>\r\n          <increment-button\r\n            @keydown.space=\"increment($event, 'lowerValue')\"\r\n            @mousedown=\"startIncrement($event, 'lowerValue')\"\r\n            @mouseup=\"stopIncrement()\"\r\n            @mouseleave=\"stopIncrement()\"\r\n          >\r\n            <span>&#8250;</span>\r\n          </increment-button>\r\n          <decrement-button\r\n            @keydown.space=\"decrement($event, 'lowerValue')\"\r\n            @mousedown=\"startDecrement($event, 'lowerValue')\"\r\n            @mouseup=\"stopDecrement()\"\r\n            @mouseleave=\"stopDecrement()\"\r\n          >\r\n            <span>&#8250;</span>\r\n          </decrement-button>\r\n        </button-container>\r\n      </input-group-container>\r\n      <input-group-container>\r\n        <input-field-container>\r\n          <n-label\r\n            :flavor=\"labelFlavor\"\r\n            class=\"number-range-max-label\"\r\n            :for=\"name + 'UpperValue'\"\r\n            >{{ label }} Upper</n-label\r\n          >\r\n          <n-input\r\n            @keydown.up=\"increment($event, 'upperValue')\"\r\n            @keydown.down=\"decrement($event, 'upperValue')\"\r\n            class=\"number-range\"\r\n            type=\"number\"\r\n            v-model=\"upperValue\"\r\n            @change=\"validateValue\"\r\n            :name=\"name + 'UpperValue'\"\r\n            :id=\"name + 'UpperValue'\"\r\n            ref=\"maxInput\"\r\n            :min=\"lowerValue\"\r\n            :max=\"max\"\r\n          ></n-input>\r\n        </input-field-container>\r\n        <button-container>\r\n          <increment-button\r\n            @keydown.space=\"increment($event, 'upperValue')\"\r\n            @mousedown=\"startIncrement($event, 'upperValue')\"\r\n            @mouseup=\"stopIncrement()\"\r\n            @mouseleave=\"stopIncrement()\"\r\n          >\r\n            <span>&#8250;</span>\r\n          </increment-button>\r\n          <decrement-button\r\n            @keydown.space=\"decrement($event, 'upperValue')\"\r\n            @mousedown=\"startDecrement($event, 'upperValue')\"\r\n            @mouseup=\"stopDecrement()\"\r\n            @mouseleave=\"stopDecrement()\"\r\n          >\r\n            <span>&#8250;</span>\r\n          </decrement-button>\r\n        </button-container>\r\n      </input-group-container>\r\n    </input-container>\r\n  </number-container>\r\n</template>\r\n\r\n<script>\r\nimport styled from \"vue-styled-components\";\r\nimport Theme from \"@IntusFacultas/design-system\";\r\nimport { NInput } from \"@IntusFacultas/input\";\r\nimport { NLabel } from \"@IntusFacultas/typography\";\r\nconst props = {\r\n  flavor: String,\r\n  defaultTheme: {\r\n    type: Object,\r\n    default: function () {\r\n      return Theme;\r\n    },\r\n  },\r\n};\r\nconst NumberContainer = styled.div`\r\n  display: flex;\r\n  flex-direction: column;\r\n`;\r\nconst InputGroupContainer = styled.div`\r\n  margin-left: 2px;\r\n  margin-right: 2px;\r\n  display: flex;\r\n  position: relative;\r\n  min-width: calc(50% - 4px);\r\n`;\r\nconst InputContainer = styled.div`\r\n  display: flex;\r\n  flex-direction: row;\r\n`;\r\nconst InputFieldContainer = styled.div`\r\n  min-width: 100%;\r\n`;\r\nconst ButtonContainer = styled.div`\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: flex-end;\r\n  margin-left: -22px;\r\n`;\r\nconst IncrementButton = styled.button`\r\n  height: 18px;\r\n  & span {\r\n    display: inline-block;\r\n    transform: rotate(-90deg);\r\n    margin-right: 3px;\r\n  }\r\n  border-radius: 0px 5px 0px 0px;\r\n  border: 1px solid transparent;\r\n  border-top-color: #222;\r\n  border-right-color: #222;\r\n  font-weight: bold;\r\n  font-size: 16px;\r\n  background-color: #f0f0f0;\r\n  transition: color 0.1s ease-in-out, background-color 0.1s ease-in-out,\r\n    border-color 0.1s ease-in-out, box-shadow 0.1s ease-in-out;\r\n  &:hover {\r\n    background-color: #e1e1e1;\r\n    cursor: pointer;\r\n  }\r\n`;\r\nconst DecrementButton = styled.button`\r\n  height: 17px;\r\n  & span {\r\n    display: inline-block;\r\n    transform: rotate(90deg);\r\n  }\r\n  border-radius: 0px 0px 5px 0px;\r\n  border: 1px solid transparent;\r\n  border-bottom-color: #222;\r\n  border-right-color: #222;\r\n  font-weight: bold;\r\n  font-size: 16px;\r\n  line-height: 0;\r\n  background-color: #f0f0f0;\r\n  transition: color 0.1s ease-in-out, background-color 0.1s ease-in-out,\r\n    border-color 0.1s ease-in-out, box-shadow 0.1s ease-in-out;\r\n  &:hover {\r\n    background-color: #e1e1e1;\r\n    cursor: pointer;\r\n  }\r\n`;\r\nexport const NumberRange = {\r\n  components: {\r\n    NumberContainer,\r\n    InputContainer,\r\n    InputGroupContainer,\r\n    NLabel,\r\n    NInput,\r\n    ButtonContainer,\r\n    IncrementButton,\r\n    DecrementButton,\r\n    InputFieldContainer,\r\n  },\r\n  data() {\r\n    return {\r\n      lowerValue: 0,\r\n      upperValue: 0,\r\n      incrementID: 0,\r\n      decrementID: 0,\r\n      internalSteps: [],\r\n    };\r\n  },\r\n  props: {\r\n    value: {\r\n      type: Object,\r\n      default() {\r\n        return {\r\n          lowValue: 0,\r\n          highValue: 0,\r\n        };\r\n      },\r\n    },\r\n    labelFlavor: {\r\n      type: String,\r\n      default: \"\",\r\n    },\r\n    name: {\r\n      type: String,\r\n      required: true,\r\n    },\r\n    label: {\r\n      type: String,\r\n      required: true,\r\n    },\r\n    max: {\r\n      type: Number,\r\n      required: true,\r\n    },\r\n    min: {\r\n      type: Number,\r\n      required: true,\r\n    },\r\n    steps: {\r\n      type: Array,\r\n      default() {\r\n        return [1];\r\n      },\r\n    },\r\n  },\r\n  watch: {\r\n    steps() {\r\n      this.internalSteps = this.steps.slice().sort((x, y) => x >= y);\r\n    },\r\n  },\r\n  mounted() {\r\n    this.lowerValue = this.min;\r\n    this.upperValue = this.max;\r\n    let self = this;\r\n    self.$watch(\r\n      \"value\",\r\n      function () {\r\n        if (self.lowerValue != self.value.lowerValue) {\r\n          self.lowerValue = self.value.lowerValue;\r\n          self.validateValue();\r\n        }\r\n        if (self.upperValue != self.value.upperValue) {\r\n          self.upperValue = self.value.upperValue;\r\n          self.validateValue();\r\n        }\r\n      },\r\n      { deep: true }\r\n    );\r\n    if (this.steps.length == 0) {\r\n      throw \"Steps must have at least one value\";\r\n    }\r\n    if (this.steps.length > 1) {\r\n      if (this.steps[0] != this.min) {\r\n        throw \"Discrete steps must have a first value equal to the minimum\";\r\n      }\r\n      if (this.steps[this.steps.length - 1] != this.max) {\r\n        throw \"Discrete steps must have a last value equal to the maximum\";\r\n      }\r\n    }\r\n    this.internalSteps = this.steps.slice().sort((x, y) => x >= y);\r\n    if (!Array.prototype.findIndex) {\r\n      Object.defineProperty(Array.prototype, \"findIndex\", {\r\n        value: function (predicate) {\r\n          // 1. Let O be ? ToObject(this value).\r\n          if (this == null) {\r\n            throw new TypeError('\"this\" is null or not defined');\r\n          }\r\n\r\n          var o = Object(this);\r\n\r\n          // 2. Let len be ? ToLength(? Get(O, \"length\")).\r\n          var len = o.length >>> 0;\r\n\r\n          // 3. If IsCallable(predicate) is false, throw a TypeError exception.\r\n          if (typeof predicate !== \"function\") {\r\n            throw new TypeError(\"predicate must be a function\");\r\n          }\r\n\r\n          // 4. If thisArg was supplied, let T be thisArg; else let T be undefined.\r\n          var thisArg = arguments[1];\r\n\r\n          // 5. Let k be 0.\r\n          var k = 0;\r\n\r\n          // 6. Repeat, while k < len\r\n          while (k < len) {\r\n            // a. Let Pk be ! ToString(k).\r\n            // b. Let kValue be ? Get(O, Pk).\r\n            // c. Let testResult be ToBoolean(? Call(predicate, T, « kValue, k, O »)).\r\n            // d. If testResult is true, return k.\r\n            var kValue = o[k];\r\n            if (predicate.call(thisArg, kValue, k, o)) {\r\n              return k;\r\n            }\r\n            // e. Increase k by 1.\r\n            k++;\r\n          }\r\n\r\n          // 7. Return -1.\r\n          return -1;\r\n        },\r\n        configurable: true,\r\n        writable: true,\r\n      });\r\n    }\r\n  },\r\n  beforeDestroy() {},\r\n  methods: {\r\n    startIncrement(event, value) {\r\n      this.increment(event, value);\r\n      this.incrementID = setTimeout(() => {\r\n        this.incrementID = setInterval(() => this.increment(event, value), 60);\r\n      }, 60);\r\n    },\r\n    stopIncrement() {\r\n      clearTimeout(this.incrementID);\r\n      clearInterval(this.incrementID);\r\n    },\r\n    increment(event, value) {\r\n      event.preventDefault();\r\n      if (this[value] == this.max) {\r\n        return;\r\n      }\r\n      if (this.internalSteps.length > 1) {\r\n        let nextIndex =\r\n          this.internalSteps.findIndex((x) => x == this[value]) + 1;\r\n        if (nextIndex >= this.internalSteps.length) {\r\n          nextIndex = this.internalSteps.length - 1;\r\n        }\r\n        this[value] = parseFloat(this.internalSteps[nextIndex]);\r\n      } else {\r\n        this[value] += parseFloat(this.internalSteps[0]);\r\n      }\r\n      this.validateValue();\r\n    },\r\n    startDecrement(event, value) {\r\n      this.decrement(event, value);\r\n      this.decrementID = setTimeout(() => {\r\n        this.decrementID = setInterval(() => this.decrement(event, value), 60);\r\n      }, 60);\r\n    },\r\n    stopDecrement() {\r\n      clearTimeout(this.decrementID);\r\n      clearInterval(this.decrementID);\r\n    },\r\n    decrement(event, value) {\r\n      event.preventDefault();\r\n      if (this[value] == this.min) {\r\n        return;\r\n      }\r\n      if (this.internalSteps.length > 1) {\r\n        let nextIndex =\r\n          this.internalSteps.findIndex((x) => x == this[value]) - 1;\r\n        if (nextIndex <= 0) {\r\n          nextIndex = 0;\r\n        }\r\n        this[value] = parseFloat(this.internalSteps[nextIndex]);\r\n      } else {\r\n        this[value] -= parseFloat(this.internalSteps[0]);\r\n      }\r\n      this.validateValue();\r\n    },\r\n    roundValues(value) {\r\n      let copy = this.internalSteps.slice();\r\n      copy.push(parseFloat(value));\r\n      copy.sort((x, y) => x >= y);\r\n      let index = copy.findIndex((x) => x == parseFloat(value));\r\n      let lowerBound = index - 1;\r\n      let upperBound = index + 1;\r\n      if (lowerBound < 0) {\r\n        lowerBound = 0;\r\n      }\r\n      if (upperBound >= copy.length) {\r\n        upperBound = copy.length - 1;\r\n      }\r\n      copy = copy.slice(lowerBound, upperBound + 1);\r\n      return copy;\r\n    },\r\n    roundToNearestDiscreteStep(values, value) {\r\n      let lowerDelta = Math.abs(values[0] - value);\r\n      let upperDelta = Math.abs(values[values.length - 1] - value);\r\n      if (upperDelta < lowerDelta) {\r\n        // round up\r\n        return values[values.length - 1];\r\n      } else {\r\n        return values[0];\r\n      }\r\n    },\r\n    roundToNearestBasicStep(value, base) {\r\n      let distanceToBottom = 0;\r\n      let distanceToTop = 0;\r\n      let tracker = value;\r\n      let bottom = 0;\r\n      let top = 0;\r\n      while (Math.abs(tracker - base) % this.internalSteps[0] != 0) {\r\n        distanceToBottom++;\r\n        tracker--;\r\n      }\r\n      bottom = tracker;\r\n      tracker = value;\r\n      while (Math.abs(tracker - base) % this.internalSteps[0] != 0) {\r\n        distanceToTop++;\r\n        tracker++;\r\n      }\r\n      top = tracker;\r\n      if (distanceToBottom <= distanceToTop) {\r\n        return bottom;\r\n      }\r\n      return top;\r\n    },\r\n    validateValue() {\r\n      if (this.internalSteps.length != 1) {\r\n        if (this.internalSteps.indexOf(this.lowerValue) == -1) {\r\n          let copy = this.roundValues(this.lowerValue);\r\n          this.lowerValue = parseFloat(\r\n            this.roundToNearestDiscreteStep(copy, this.lowerValue)\r\n          );\r\n        }\r\n        if (this.internalSteps.indexOf(this.upperValue) == -1) {\r\n          let copy = this.roundValues(this.upperValue);\r\n          this.upperValue = parseFloat(\r\n            this.roundToNearestDiscreteStep(copy, this.upperValue)\r\n          );\r\n        }\r\n      } else {\r\n        if (Math.abs(this.lowerValue - this.min) % this.internalSteps[0] != 0) {\r\n          this.lowerValue = this.roundToNearestBasicStep(\r\n            this.lowerValue,\r\n            this.min\r\n          );\r\n        }\r\n        if (Math.abs(this.upperValue - this.max) % this.internalSteps[0] != 0) {\r\n          this.upperValue = this.roundToNearestBasicStep(\r\n            this.upperValue,\r\n            this.max\r\n          );\r\n        }\r\n      }\r\n      if (this.upperValue > this.max) {\r\n        this.upperValue = this.max;\r\n      }\r\n      if (this.lowerValue < this.min) {\r\n        this.lowerValue = this.min;\r\n      }\r\n      if (this.lowerValue > this.upperValue) {\r\n        this.lowerValue = parseFloat(this.upperValue);\r\n      }\r\n      this.lowerValue = parseFloat(this.lowerValue);\r\n      this.upperValue = parseFloat(this.upperValue);\r\n      this.$emit(\"change\", {\r\n        lowerValue: this.lowerValue,\r\n        upperValue: this.upperValue,\r\n      });\r\n    },\r\n  },\r\n};\r\nexport default NumberRange;\r\n</script>\r\n\r\n<style>\r\n.number-range-max-label {\r\n  float: right;\r\n  text-align: end;\r\n}\r\n.number-range {\r\n  border-right-color: transparent;\r\n}\r\n/* Chrome, Safari, Edge, Opera */\r\ninput.number-range::-webkit-outer-spin-button,\r\ninput.number-range::-webkit-inner-spin-button {\r\n  -webkit-appearance: none;\r\n  margin: 0;\r\n}\r\n\r\n/* Firefox */\r\ninput[type=\"number\"].number-range {\r\n  -moz-appearance: textfield;\r\n}\r\n</style>\r\n"]}, media: undefined });

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

var install = function installNumberRange(Vue) {
  if (install.installed) return;
  install.installed = true;
  Vue.component("NumberRange", __vue_component__);
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
export { __vue_component__ as NumberRange };
//# sourceMappingURL=NumberRange.esm.js.map
