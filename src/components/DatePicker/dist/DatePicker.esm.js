import moment from 'moment';
import styled from 'vue-styled-components';
import { VueInput } from '@IntusFacultas/input';
import Theme from '@IntusFacultas/design-system';

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

function _toConsumableArray(arr) {
  return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
}

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) return _arrayLikeToArray(arr);
}

function _iterableToArray(iter) {
  if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter);
}

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(n);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];

  return arr2;
}

function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

function _createForOfIteratorHelper(o) {
  if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) {
    if (Array.isArray(o) || (o = _unsupportedIterableToArray(o))) {
      var i = 0;

      var F = function () {};

      return {
        s: F,
        n: function () {
          if (i >= o.length) return {
            done: true
          };
          return {
            done: false,
            value: o[i++]
          };
        },
        e: function (e) {
          throw e;
        },
        f: F
      };
    }

    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }

  var it,
      normalCompletion = true,
      didErr = false,
      err;
  return {
    s: function () {
      it = o[Symbol.iterator]();
    },
    n: function () {
      var step = it.next();
      normalCompletion = step.done;
      return step;
    },
    e: function (e) {
      didErr = true;
      err = e;
    },
    f: function () {
      try {
        if (!normalCompletion && it.return != null) it.return();
      } finally {
        if (didErr) throw err;
      }
    }
  };
}

function _templateObject9() {
  var data = _taggedTemplateLiteral(["\n  width: 100%;\n  text-align: center;\n"]);

  _templateObject9 = function _templateObject9() {
    return data;
  };

  return data;
}

function _templateObject8() {
  var data = _taggedTemplateLiteral(["\n  ", "\n  ", "\n  cursor: pointer;\n  ", "\n  transition: color 0.1s ease-in-out, background-color 0.1s ease-in-out,\n    border-color 0.1s ease-in-out, box-shadow 0.1s ease-in-out;\n  border-radius: 4px;\n"]);

  _templateObject8 = function _templateObject8() {
    return data;
  };

  return data;
}

function _templateObject7() {
  var data = _taggedTemplateLiteral(["\n  ", "\n  padding: 5px 10px;\n  transition: color 0.1s ease-in-out, background-color 0.1s ease-in-out,\n    border-color 0.1s ease-in-out, box-shadow 0.1s ease-in-out;\n  cursor: pointer;\n  border-radius: 4px;\n"]);

  _templateObject7 = function _templateObject7() {
    return data;
  };

  return data;
}

function _templateObject6() {
  var data = _taggedTemplateLiteral(["\n  width: 280px;\n  position: absolute;\n  padding: 10px 10px;\n  border-radius: 4px;\n  background-color: white;\n  top: ", ";\n  & * {\n    font-family: \"Open Sans Regular\", -apple-system, BlinkMacSystemFont,\n      \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif,\n      \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\";\n    user-select: none;\n  }\n  z-index: 1000;\n  box-shadow: 0px 8px 8px 2px #e4e4e4;\n"]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = _taggedTemplateLiteral(["\n  position: relative;\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n  background-color: white;\n  border: 1px solid white;\n  border-radius: 4px;\n  cursor: pointer;\n  text-align: center;\n  padding: 4px 16px;\n  &:hover {\n    background-color: #eee;\n  }\n  transition: color 0.1s ease-in-out, background-color 0.1s ease-in-out,\n    border-color 0.1s ease-in-out, box-shadow 0.1s ease-in-out;\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n  background-color: white;\n  width:240px\n  border: 1px solid white;\n  border-radius: 4px;\n  padding: 4px 0px;\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  background-color: white;\n  width:240px\n  border: 1px solid white;\n  border-radius: 4px;\n  cursor: pointer;\n  padding: 4px 0px;\n  &:hover {\n    background-color: #eee;\n  }\n  transition: color .1s ease-in-out,\n            background-color .1s ease-in-out,\n            border-color .1s ease-in-out,\n            box-shadow .1s ease-in-out;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  text-align: center;\n  width: 100%;\n  & * {\n    font-size: 16px;\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}
var SATURDAY = 6;
var SUNDAY = 0;
var props = {
  active: {
    type: Boolean,
    default: false
  },
  disabled: {
    type: Boolean,
    default: false
  },
  inMonth: {
    type: Boolean,
    default: false
  },
  current: {
    type: Boolean,
    default: false
  },
  top: {
    type: String,
    default: "inherit"
  },
  defaultTheme: {
    type: Object,
    default: function _default() {
      return Theme;
    }
  }
};
var SelectorBar = styled.div(_templateObject());
var MonthPicker = styled.button(_templateObject2());
var YearPicker = styled.span(_templateObject3());
var IncrementDecrement = styled.button(_templateObject4());
var ContentContainer = styled.div(_templateObject5());
var DatePickerContainer = styled("div", props)(_templateObject6(), function (props) {
  return props.top;
});
var MonthOrYear = styled("td", props)(_templateObject7(), function (props) {
  return props.active ? "\n        color: ".concat(props.defaultTheme.Primary.color.color, "\n        background-color: ").concat(props.defaultTheme.Primary.background.color, "\n        &:hover {\n          background-color: ").concat(props.defaultTheme.Primary.background.hover, ";\n        }\n      ") : props.current ? "\n        background-color: #ddd;\n        &:hover {\n          background-color: #eee;\n        }\n      " : "\n  &:hover {\n    background-color: #eee;\n  }";
});
var Day = styled("td", props)(_templateObject8(), function (props) {
  return props.inMonth ? "" : "color: #b8b8b8;";
}, function (props) {
  return props.active ? "\n        color: ".concat(props.defaultTheme.Primary.color.color, "\n        background-color: ").concat(props.defaultTheme.Primary.background.color, "\n        &:hover {\n          background-color: ").concat(props.defaultTheme.Primary.background.hover, ";\n        }\n      ") : props.current ? "\n        background-color: #ddd;\n        &:hover {\n          background-color: #eee;\n        }\n      " : "\n  &:hover {\n    background-color: #eee;\n  }";
}, function (props) {
  return props.disabled ? "pointer-events: none; color: #f0f0f0; cursor: not-allowed;" : "";
});
var Calendar = styled.table(_templateObject9());
var DatePicker = {
  components: {
    VueInput: VueInput,
    DatePickerContainer: DatePickerContainer,
    IncrementDecrement: IncrementDecrement,
    MonthPicker: MonthPicker,
    SelectorBar: SelectorBar,
    Calendar: Calendar,
    Day: Day,
    MonthOrYear: MonthOrYear,
    YearPicker: YearPicker,
    ContentContainer: ContentContainer
  },
  data: function data() {
    return {
      show: false,
      selectingDay: true,
      selectingMonth: false,
      selectingYear: false,
      cursorDate: null,
      currentDate: null,
      calculatedTop: "initial",
      internalDate: null,
      shownMonth: {
        month: "Loading",
        dates: []
      },
      shownYear: {
        year: "Loading",
        months: []
      },
      shownYears: {
        range: "Loading",
        years: []
      }
    };
  },
  watch: {
    value: function value(newVal, oldVal) {
      if (!moment(newVal).isSame(this.internalDate)) {
        this.internalDate = moment(newVal);
        this.cursorDate = this.internalDate;
      }
    },
    start: function start(newVal, oldVal) {
      if (oldVal == null || !moment(newVal).isSame(oldVal)) {
        this.validateStartEnd();
      }
    },
    end: function end(newVal, oldVal) {
      if (oldVal == null || !moment(newVal).isSame(oldVal)) {
        this.validateStartEnd();
      }
    }
  },
  beforeDestroy: function beforeDestroy() {
    document.removeEventListener("click", this.handleClick, {
      passive: true
    });
  },
  mounted: function mounted() {
    Element.prototype.closestDatePicker = function (name) {
      var el = this;
      var ancestor = this;
      if (!document.documentElement.contains(el)) return null;

      do {
        if (ancestor.getAttribute("data-datepicker") == name) return ancestor;
        ancestor = ancestor.parentElement;
      } while (ancestor !== null);

      return null;
    };

    this.internalDate = moment(this.value);

    if (!this.internalDate.isValid()) {
      this.internalDate = null;
      this.cursorDate = moment();
    } else {
      this.cursorDate = this.internalDate.clone();
    }

    this.currentDate = moment();
    this.validateStartEnd();
    this.updateShownValues();
    document.addEventListener("click", this.handleClick, {
      passive: true
    });
  },
  props: {
    label: {
      type: String,
      default: "Select a date"
    },
    debug: {
      type: Boolean,
      default: false
    },
    textFlavor: {
      type: String,
      default: "Normal"
    },
    name: {
      type: String,
      required: true
    },
    defaultNow: {
      type: Boolean,
      default: true
    },
    start: {
      type: [Object, String, Date, moment],
      default: function _default() {
        return null;
      }
    },
    end: {
      type: [Object, String, Date, moment],
      default: function _default() {
        return null;
      }
    },
    disabledDates: {
      type: Array,
      default: function _default() {
        return [];
      }
    },
    value: {
      type: [Object, String, Date, moment],
      default: function _default() {
        return new Date();
      }
    }
  },
  computed: {
    computedStart: function computedStart() {
      if (this.start) {
        return moment(this.start);
      }

      return null;
    },
    computedEnd: function computedEnd() {
      if (this.end) {
        return moment(this.end);
      }

      return null;
    }
  },
  methods: {
    open: function open() {
      this.show = true;
      var self = this;
      var ref;

      if (this.selectingDay) {
        ref = "daypicker";
      } else if (this.selectingMonth) {
        ref = "monthpicker";
      } else if (this.selectingYear) {
        ref = "yearpicker";
      }

      this.$nextTick(function () {
        self.calculatedTop = self.calculateTop(ref);
        self.$forceUpdate();
      });
    },
    calculateTop: function calculateTop(ref) {
      var BUFFER = 20;

      if (this.$refs[ref]) {
        var totalHeightNeeded = this.$refs[ref].$el.getBoundingClientRect().bottom;

        if (totalHeightNeeded > window.innerHeight) {
          return "-".concat(this.$refs[ref].$el.scrollHeight - BUFFER, "px");
        }

        return "inherit";
      }

      return "inherit";
    },
    validateStartEnd: function validateStartEnd() {
      if (this.computedStart && this.computedEnd) {
        if (this.computedEnd.isBefore(this.computedStart)) {
          console.error("Datepicker ID: ".concat(this.name, " was passed an end date that comes before the passed start date. Start Date: ").concat(this.computedStart.format("YYYY-MM-DD"), ", End date: ").concat(this.computedEnd.format("YYYY-MM-DD")));
        }
      }
    },
    testDisabled: function testDisabled(d) {
      for (disabled in this.disabledDates) {
        if (moment(disabled).isSame(d)) {
          return true;
        }
      }

      if (this.computedStart) {
        if (d.isBefore(this.computedStart)) {
          return true;
        }
      }

      if (this.computedEnd) {
        if (d.isAfter(this.computedEnd)) {
          return true;
        }
      }

      return false;
    },
    close: function close() {
      this.show = false;
      this.selectingDay = true;
      this.selectingMonth = false;
      this.selectingYear = false;
    },
    handleClick: function handleClick(event) {
      if (event.target.getAttribute("data-datepicker") != this.name && !event.target.closestDatePicker(this.name)) {
        this.close();
      }
    },
    updateShownValues: function updateShownValues() {
      this.shownMonth = this.formatMonth(this.getsDayOfMonth(this.cursorDate));
      this.shownYear = {
        year: this.cursorDate.year(),
        months: [[{
          display: "JAN",
          value: 0
        }, {
          display: "FEB",
          value: 1
        }, {
          display: "MAR",
          value: 2
        }, {
          display: "APR",
          value: 3
        }], [{
          display: "MAY",
          value: 4
        }, {
          display: "JUN",
          value: 5
        }, {
          display: "JUL",
          value: 6
        }, {
          display: "AUG",
          value: 7
        }], [{
          display: "SEP",
          value: 8
        }, {
          display: "OCT",
          value: 9
        }, {
          display: "NOV",
          value: 10
        }, {
          display: "DEC",
          value: 11
        }]]
      };
      var rangeStart = Math.floor(this.cursorDate.year() / 10) * 10;
      var rangeEnd = Math.round(this.cursorDate.year() / 10) * 10;

      if (rangeStart == rangeEnd) {
        rangeEnd += 10;
      }

      var years = [[], [], []];
      var buffer = 0;

      for (var year = rangeStart; year <= rangeEnd; year++) {
        years[parseInt(buffer++ / 5)].push(year);
      }

      this.shownYears = {
        range: "".concat(rangeStart, " - ").concat(rangeEnd),
        years: years
      };
    },
    incrementCursorDate: function incrementCursorDate(amount, duration) {
      this.cursorDate.add(amount, duration);
      this.updateShownValues();
    },
    decrementCursorDate: function decrementCursorDate(amount, duration) {
      this.cursorDate.subtract(amount, duration);
      this.updateShownValues();
    },
    setInternalDate: function setInternalDate(day) {
      this.internalDate = day.clone();
      this.$emit("input", this.internalDate);
      this.close();
    },
    setCursorDate: function setCursorDate(value, time) {
      if (time == "day") {
        this.cursorDate = value.clone();
      } else if (time == "month") {
        this.cursorDate.month(value);
      } else if (time == "year") {
        this.cursorDate.year(value);
      }

      this.updateShownValues();
      this.$forceUpdate();
    },
    toggleYear: function toggleYear() {
      this.selectingDay = false;
      this.selectingMonth = false;
      this.selectingYear = true;
    },
    toggleMonth: function toggleMonth() {
      this.selectingDay = false;
      this.selectingMonth = true;
      this.selectingYear = false;
    },
    toggleDay: function toggleDay() {
      this.selectingDay = true;
      this.selectingMonth = false;
      this.selectingYear = false;
    },
    formatMonth: function formatMonth(days) {
      if (days[0].day() != 0) {
        var missedDate = days[0].clone().subtract(1, "d");

        while (missedDate.day() != SATURDAY) {
          days.unshift(missedDate.clone());
          missedDate.subtract(1, "d");
        }
      }

      if (days[days.length - 1].day() != SATURDAY) {
        var _missedDate = days[days.length - 1].clone().add(1, "d");

        while (_missedDate.day() != SUNDAY) {
          days.push(_missedDate.clone());

          _missedDate.add(1, "d");
        }
      }

      var formattedMonth = [];
      var week = [];

      var _iterator = _createForOfIteratorHelper(days),
          _step;

      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var day = _step.value;

          if (day.day() == SATURDAY) {
            week.push(day);
            formattedMonth.push(week.slice());
            week = [];
          } else {
            week.push(day);
          }
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }

      return {
        month: this.cursorDate.format("MMMM YYYY"),
        dates: formattedMonth.slice()
      };
    },
    getsDayOfMonth: function getsDayOfMonth(momentDate) {
      var daysBehind = [];
      var daysAhead = [];
      var previousDay = momentDate.clone().subtract(1, "d");

      while (previousDay.month() == momentDate.month()) {
        daysBehind.push(previousDay.clone());
        previousDay.subtract(1, "d");
      }

      daysBehind = daysBehind.reverse();
      var nextDay = momentDate.clone().add(1, "d");

      while (nextDay.month() == momentDate.month()) {
        daysAhead.push(nextDay.clone());
        nextDay.add(1, "d");
      }

      return [].concat(_toConsumableArray(daysBehind), [momentDate], daysAhead);
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
const __vue_script__ = DatePicker;

/* template */
var __vue_render__ = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c(
    "content-container",
    { ref: "content" },
    [
      _c("vue-input", {
        ref: "input",
        attrs: {
          label: _vm.label,
          "input-type": "Date",
          "label-flavor": _vm.textFlavor,
          name: _vm.name,
          value: _vm.internalDate ? _vm.internalDate.format("YYYY-MM-DD") : "",
          "data-datepicker": _vm.name
        },
        on: {
          focus: function($event) {
            return _vm.open()
          }
        }
      }),
      _vm._v(" "),
      _vm.selectingDay && (_vm.show || _vm.debug)
        ? _c(
            "date-picker-container",
            {
              ref: "daypicker",
              attrs: { "data-datepicker": _vm.name, top: _vm.calculatedTop }
            },
            [
              _c(
                "selector-bar",
                { attrs: { "data-datepicker": _vm.name } },
                [
                  _c(
                    "increment-decrement",
                    {
                      attrs: { "data-datepicker": _vm.name },
                      on: {
                        click: function($event) {
                          return _vm.decrementCursorDate(1, "month")
                        }
                      }
                    },
                    [_vm._v("❮")]
                  ),
                  _vm._v(" "),
                  _c(
                    "month-picker",
                    {
                      attrs: { "data-datepicker": _vm.name },
                      on: { click: _vm.toggleMonth }
                    },
                    [
                      _vm._v(
                        "\n        " + _vm._s(_vm.shownMonth.month) + "\n      "
                      )
                    ]
                  ),
                  _vm._v(" "),
                  _c(
                    "increment-decrement",
                    {
                      attrs: { "data-datepicker": _vm.name },
                      on: {
                        click: function($event) {
                          return _vm.incrementCursorDate(1, "month")
                        }
                      }
                    },
                    [_vm._v("❯")]
                  )
                ],
                1
              ),
              _vm._v(" "),
              _c("calendar", { attrs: { "data-datepicker": _vm.name } }, [
                _vm.cursorDate
                  ? _c(
                      "tbody",
                      { attrs: { "data-datepicker": _vm.name } },
                      [
                        _c("tr", [
                          _c("td", [_vm._v("Su")]),
                          _vm._v(" "),
                          _c("td", [_vm._v("Mo")]),
                          _vm._v(" "),
                          _c("td", [_vm._v("Tu")]),
                          _vm._v(" "),
                          _c("td", [_vm._v("We")]),
                          _vm._v(" "),
                          _c("td", [_vm._v("Th")]),
                          _vm._v(" "),
                          _c("td", [_vm._v("Fr")]),
                          _vm._v(" "),
                          _c("td", [_vm._v("Sa")])
                        ]),
                        _vm._v(" "),
                        _vm._l(_vm.shownMonth.dates, function(week, index) {
                          return _c(
                            "tr",
                            {
                              key: index,
                              attrs: { "data-datepicker": _vm.name }
                            },
                            _vm._l(week, function(day, dayIndex) {
                              return _c(
                                "day",
                                {
                                  key: dayIndex,
                                  attrs: {
                                    "data-datepicker": _vm.name,
                                    "in-month":
                                      day.month() == _vm.cursorDate.month() &&
                                      day.year() == _vm.cursorDate.year(),
                                    disabled: _vm.testDisabled(day),
                                    current:
                                      _vm.currentDate.month() == day.month() &&
                                      _vm.currentDate.year() == day.year() &&
                                      _vm.currentDate.date() == day.date(),
                                    active: _vm.internalDate
                                      ? _vm.internalDate.month() ==
                                          day.month() &&
                                        _vm.internalDate.year() == day.year() &&
                                        _vm.internalDate.date() == day.date()
                                      : false,
                                    role: "button",
                                    tabindex: "0"
                                  },
                                  on: {
                                    click: function($event) {
                                      _vm.setCursorDate(day, "day");
                                      _vm.setInternalDate(day);
                                    },
                                    keyup: [
                                      function($event) {
                                        if (
                                          !$event.type.indexOf("key") &&
                                          _vm._k(
                                            $event.keyCode,
                                            "space",
                                            32,
                                            $event.key,
                                            [" ", "Spacebar"]
                                          )
                                        ) {
                                          return null
                                        }
                                        _vm.setCursorDate(day, "day");
                                        _vm.setInternalDate(day);
                                      },
                                      function($event) {
                                        if (
                                          !$event.type.indexOf("key") &&
                                          _vm._k(
                                            $event.keyCode,
                                            "enter",
                                            13,
                                            $event.key,
                                            "Enter"
                                          )
                                        ) {
                                          return null
                                        }
                                        _vm.setCursorDate(day, "day");
                                        _vm.setInternalDate(day);
                                      }
                                    ]
                                  }
                                },
                                [_vm._v(_vm._s(day.format("D")))]
                              )
                            }),
                            1
                          )
                        }),
                        _vm._v(" "),
                        _c(
                          "tr",
                          [
                            _c(
                              "day",
                              {
                                attrs: {
                                  tabindex: "0",
                                  "in-month": true,
                                  disabled: _vm.testDisabled(_vm.currentDate),
                                  colspan: "7"
                                },
                                on: {
                                  click: function($event) {
                                    _vm.setCursorDate(_vm.currentDate, "day");
                                    _vm.setInternalDate(_vm.currentDate);
                                  },
                                  keyup: [
                                    function($event) {
                                      if (
                                        !$event.type.indexOf("key") &&
                                        _vm._k(
                                          $event.keyCode,
                                          "space",
                                          32,
                                          $event.key,
                                          [" ", "Spacebar"]
                                        )
                                      ) {
                                        return null
                                      }
                                      _vm.setCursorDate(_vm.currentDate, "day");
                                      _vm.setInternalDate(_vm.currentDate);
                                    },
                                    function($event) {
                                      if (
                                        !$event.type.indexOf("key") &&
                                        _vm._k(
                                          $event.keyCode,
                                          "enter",
                                          13,
                                          $event.key,
                                          "Enter"
                                        )
                                      ) {
                                        return null
                                      }
                                      _vm.setCursorDate(_vm.currentDate, "day");
                                      _vm.setInternalDate(_vm.currentDate);
                                    }
                                  ]
                                }
                              },
                              [_vm._v("Today")]
                            )
                          ],
                          1
                        )
                      ],
                      2
                    )
                  : _vm._e()
              ])
            ],
            1
          )
        : _vm.selectingMonth && (_vm.show || _vm.debug)
        ? _c(
            "date-picker-container",
            { ref: "monthpicker", attrs: { "data-datepicker": _vm.name } },
            [
              _c(
                "selector-bar",
                { attrs: { "data-datepicker": _vm.name } },
                [
                  _c(
                    "increment-decrement",
                    {
                      attrs: { "data-datepicker": _vm.name },
                      on: {
                        click: function($event) {
                          return _vm.decrementCursorDate(1, "year")
                        }
                      }
                    },
                    [_vm._v("❮")]
                  ),
                  _vm._v(" "),
                  _c(
                    "month-picker",
                    {
                      attrs: { "data-datepicker": _vm.name },
                      on: { click: _vm.toggleYear }
                    },
                    [
                      _vm._v(
                        "\n        " + _vm._s(_vm.shownYear.year) + "\n      "
                      )
                    ]
                  ),
                  _vm._v(" "),
                  _c(
                    "increment-decrement",
                    {
                      attrs: { "data-datepicker": _vm.name },
                      on: {
                        click: function($event) {
                          return _vm.incrementCursorDate(1, "year")
                        }
                      }
                    },
                    [_vm._v("❯")]
                  )
                ],
                1
              ),
              _vm._v(" "),
              _c("calendar", { attrs: { "data-datepicker": _vm.name } }, [
                _vm.cursorDate
                  ? _c(
                      "tbody",
                      { attrs: { "data-datepicker": _vm.name } },
                      _vm._l(_vm.shownYear.months, function(monthChunk, index) {
                        return _c(
                          "tr",
                          {
                            key: index,
                            attrs: { "data-datepicker": _vm.name }
                          },
                          _vm._l(monthChunk, function(month, monthIndex) {
                            return _c(
                              "month-or-year",
                              {
                                key: monthIndex,
                                attrs: {
                                  "data-datepicker": _vm.name,
                                  current:
                                    _vm.currentDate.month() == month.value &&
                                    _vm.currentDate.year() ==
                                      _vm.shownYear.year,
                                  active: _vm.internalDate
                                    ? _vm.internalDate.month() == month.value &&
                                      _vm.internalDate.year() ==
                                        _vm.shownYear.year
                                    : false,
                                  role: "button",
                                  tabindex: "0"
                                },
                                on: {
                                  click: function($event) {
                                    _vm.setCursorDate(month.value, "month");
                                    _vm.toggleDay();
                                  },
                                  keyup: [
                                    function($event) {
                                      if (
                                        !$event.type.indexOf("key") &&
                                        _vm._k(
                                          $event.keyCode,
                                          "space",
                                          32,
                                          $event.key,
                                          [" ", "Spacebar"]
                                        )
                                      ) {
                                        return null
                                      }
                                      _vm.setCursorDate(month.value, "month");
                                      _vm.toggleDay();
                                    },
                                    function($event) {
                                      if (
                                        !$event.type.indexOf("key") &&
                                        _vm._k(
                                          $event.keyCode,
                                          "enter",
                                          13,
                                          $event.key,
                                          "Enter"
                                        )
                                      ) {
                                        return null
                                      }
                                      _vm.setCursorDate(month.value, "month");
                                      _vm.toggleDay();
                                    }
                                  ]
                                }
                              },
                              [_vm._v(_vm._s(month.display))]
                            )
                          }),
                          1
                        )
                      }),
                      0
                    )
                  : _vm._e()
              ])
            ],
            1
          )
        : _vm.selectingYear && (_vm.show || _vm.debug)
        ? _c(
            "date-picker-container",
            { ref: "yearpicker", attrs: { "data-datepicker": _vm.name } },
            [
              _c(
                "selector-bar",
                { attrs: { "data-datepicker": _vm.name } },
                [
                  _c(
                    "increment-decrement",
                    {
                      attrs: { "data-datepicker": _vm.name },
                      on: {
                        click: function($event) {
                          return _vm.decrementCursorDate(10, "year")
                        }
                      }
                    },
                    [_vm._v("❮")]
                  ),
                  _vm._v(" "),
                  _c(
                    "year-picker",
                    { attrs: { "data-datepicker": _vm.name } },
                    [
                      _vm._v(
                        "\n        " + _vm._s(_vm.shownYears.range) + "\n      "
                      )
                    ]
                  ),
                  _vm._v(" "),
                  _c(
                    "increment-decrement",
                    {
                      attrs: { "data-datepicker": _vm.name },
                      on: {
                        click: function($event) {
                          return _vm.incrementCursorDate(10, "year")
                        }
                      }
                    },
                    [_vm._v("❯")]
                  )
                ],
                1
              ),
              _vm._v(" "),
              _c("calendar", { attrs: { "data-datepicker": _vm.name } }, [
                _vm.cursorDate
                  ? _c(
                      "tbody",
                      { attrs: { "data-datepicker": _vm.name } },
                      _vm._l(_vm.shownYears.years, function(yearChunk, index) {
                        return _c(
                          "tr",
                          {
                            key: index,
                            attrs: { "data-datepicker": _vm.name }
                          },
                          _vm._l(yearChunk, function(year, yearIndex) {
                            return _c(
                              "month-or-year",
                              {
                                key: yearIndex,
                                attrs: {
                                  "data-datepicker": _vm.name,
                                  current: _vm.currentDate.year() == year,
                                  active: _vm.internalDate
                                    ? _vm.internalDate.year() == year
                                    : false,
                                  role: "button",
                                  tabindex: "0",
                                  colspan: yearChunk.length == 5 ? 1 : 5
                                },
                                on: {
                                  click: function($event) {
                                    _vm.setCursorDate(year, "year");
                                    _vm.toggleMonth();
                                  },
                                  keyup: [
                                    function($event) {
                                      if (
                                        !$event.type.indexOf("key") &&
                                        _vm._k(
                                          $event.keyCode,
                                          "space",
                                          32,
                                          $event.key,
                                          [" ", "Spacebar"]
                                        )
                                      ) {
                                        return null
                                      }
                                      _vm.setCursorDate(year, "year");
                                      _vm.toggleMonth();
                                    },
                                    function($event) {
                                      if (
                                        !$event.type.indexOf("key") &&
                                        _vm._k(
                                          $event.keyCode,
                                          "enter",
                                          13,
                                          $event.key,
                                          "Enter"
                                        )
                                      ) {
                                        return null
                                      }
                                      _vm.setCursorDate(year, "year");
                                      _vm.toggleMonth();
                                    }
                                  ]
                                }
                              },
                              [_vm._v(_vm._s(year))]
                            )
                          }),
                          1
                        )
                      }),
                      0
                    )
                  : _vm._e()
              ])
            ],
            1
          )
        : _vm._e()
    ],
    1
  )
};
var __vue_staticRenderFns__ = [];
__vue_render__._withStripped = true;

  /* style */
  const __vue_inject_styles__ = function (inject) {
    if (!inject) return
    inject("data-v-4f3cec88_0", { source: "\ninput::-webkit-calendar-picker-indicator {\r\n  display: none;\n}\ninput[type=\"date\"]::-webkit-input-placeholder {\r\n  visibility: hidden !important;\n}\ninput[type=\"date\"]::-webkit-outer-spin-button,\r\ninput[type=\"date\"]::-webkit-inner-spin-button {\r\n  -webkit-appearance: none;\r\n  margin: 0;\n}\r\n", map: {"version":3,"sources":["C:\\Users\\pedro\\Documents\\Personal Projects\\GitHub\\storybook\\storybook\\src\\components\\DatePicker\\src\\DatePicker.vue"],"names":[],"mappings":";AAwvBA;EACA,aAAA;AACA;AACA;EACA,6BAAA;AACA;AACA;;EAEA,wBAAA;EACA,SAAA;AACA","file":"DatePicker.vue","sourcesContent":["<template>\r\n  <content-container ref=\"content\">\r\n    <vue-input\r\n      :label=\"label\"\r\n      input-type=\"Date\"\r\n      :label-flavor=\"textFlavor\"\r\n      :name=\"name\"\r\n      :value=\"internalDate ? internalDate.format('YYYY-MM-DD') : ''\"\r\n      @focus=\"open()\"\r\n      ref=\"input\"\r\n      :data-datepicker=\"name\"\r\n    ></vue-input>\r\n    <date-picker-container\r\n      :data-datepicker=\"name\"\r\n      v-if=\"selectingDay && (show || debug)\"\r\n      ref=\"daypicker\"\r\n      :top=\"calculatedTop\"\r\n    >\r\n      <selector-bar :data-datepicker=\"name\">\r\n        <increment-decrement\r\n          :data-datepicker=\"name\"\r\n          @click=\"decrementCursorDate(1, 'month')\"\r\n        >&#10094;</increment-decrement>\r\n        <month-picker :data-datepicker=\"name\" @click=\"toggleMonth\">\r\n          {{\r\n          shownMonth.month\r\n          }}\r\n        </month-picker>\r\n        <increment-decrement\r\n          :data-datepicker=\"name\"\r\n          @click=\"incrementCursorDate(1, 'month')\"\r\n        >&#10095;</increment-decrement>\r\n      </selector-bar>\r\n\r\n      <calendar :data-datepicker=\"name\">\r\n        <tbody :data-datepicker=\"name\" v-if=\"cursorDate\">\r\n          <tr>\r\n            <td>Su</td>\r\n            <td>Mo</td>\r\n            <td>Tu</td>\r\n            <td>We</td>\r\n            <td>Th</td>\r\n            <td>Fr</td>\r\n            <td>Sa</td>\r\n          </tr>\r\n          <tr :data-datepicker=\"name\" v-for=\"(week, index) in shownMonth.dates\" :key=\"index\">\r\n            <day\r\n              :data-datepicker=\"name\"\r\n              v-for=\"(day, dayIndex) in week\"\r\n              :in-month=\"\r\n                day.month() == cursorDate.month() &&\r\n                  day.year() == cursorDate.year()\r\n              \"\r\n              :disabled=\"testDisabled(day)\"\r\n              @click=\"\r\n                setCursorDate(day, 'day');\r\n                setInternalDate(day);\r\n              \"\r\n              @keyup.space=\"\r\n                setCursorDate(day, 'day');\r\n                setInternalDate(day);\r\n              \"\r\n              @keyup.enter=\"\r\n                setCursorDate(day, 'day');\r\n                setInternalDate(day);\r\n              \"\r\n              :current=\"\r\n                currentDate.month() == day.month() &&\r\n                  currentDate.year() == day.year() &&\r\n                  currentDate.date() == day.date()\r\n              \"\r\n              :active=\"\r\n                internalDate\r\n                  ? internalDate.month() == day.month() &&\r\n                    internalDate.year() == day.year() &&\r\n                    internalDate.date() == day.date()\r\n                  : false\r\n              \"\r\n              :key=\"dayIndex\"\r\n              role=\"button\"\r\n              tabindex=\"0\"\r\n            >{{ day.format(\"D\") }}</day>\r\n          </tr>\r\n          <tr>\r\n            <day\r\n              tabindex=\"0\"\r\n              @click=\"\r\n                setCursorDate(currentDate, 'day');\r\n                setInternalDate(currentDate);\r\n              \"\r\n              @keyup.space=\"\r\n                setCursorDate(currentDate, 'day');\r\n                setInternalDate(currentDate);\r\n              \"\r\n              @keyup.enter=\"\r\n                setCursorDate(currentDate, 'day');\r\n                setInternalDate(currentDate);\r\n              \"\r\n              :in-month=\"true\"\r\n              :disabled=\"testDisabled(currentDate)\"\r\n              colspan=\"7\"\r\n            >Today</day>\r\n          </tr>\r\n        </tbody>\r\n      </calendar>\r\n    </date-picker-container>\r\n    <date-picker-container\r\n      ref=\"monthpicker\"\r\n      :data-datepicker=\"name\"\r\n      v-else-if=\"selectingMonth && (show || debug)\"\r\n    >\r\n      <selector-bar :data-datepicker=\"name\">\r\n        <increment-decrement\r\n          :data-datepicker=\"name\"\r\n          @click=\"decrementCursorDate(1, 'year')\"\r\n        >&#10094;</increment-decrement>\r\n        <month-picker :data-datepicker=\"name\" @click=\"toggleYear\">\r\n          {{\r\n          shownYear.year\r\n          }}\r\n        </month-picker>\r\n        <increment-decrement\r\n          :data-datepicker=\"name\"\r\n          @click=\"incrementCursorDate(1, 'year')\"\r\n        >&#10095;</increment-decrement>\r\n      </selector-bar>\r\n      <calendar :data-datepicker=\"name\">\r\n        <tbody :data-datepicker=\"name\" v-if=\"cursorDate\">\r\n          <tr :data-datepicker=\"name\" v-for=\"(monthChunk, index) in shownYear.months\" :key=\"index\">\r\n            <month-or-year\r\n              :data-datepicker=\"name\"\r\n              v-for=\"(month, monthIndex) in monthChunk\"\r\n              :current=\"\r\n                currentDate.month() == month.value &&\r\n                  currentDate.year() == shownYear.year\r\n              \"\r\n              :active=\"\r\n                internalDate\r\n                  ? internalDate.month() == month.value &&\r\n                    internalDate.year() == shownYear.year\r\n                  : false\r\n              \"\r\n              :key=\"monthIndex\"\r\n              role=\"button\"\r\n              tabindex=\"0\"\r\n              @click=\"\r\n                setCursorDate(month.value, 'month');\r\n                toggleDay();\r\n              \"\r\n              @keyup.space=\"\r\n                setCursorDate(month.value, 'month');\r\n                toggleDay();\r\n              \"\r\n              @keyup.enter=\"\r\n                setCursorDate(month.value, 'month');\r\n                toggleDay();\r\n              \"\r\n            >{{ month.display }}</month-or-year>\r\n          </tr>\r\n        </tbody>\r\n      </calendar>\r\n    </date-picker-container>\r\n    <date-picker-container\r\n      :data-datepicker=\"name\"\r\n      v-else-if=\"selectingYear && (show || debug)\"\r\n      ref=\"yearpicker\"\r\n    >\r\n      <selector-bar :data-datepicker=\"name\">\r\n        <increment-decrement\r\n          :data-datepicker=\"name\"\r\n          @click=\"decrementCursorDate(10, 'year')\"\r\n        >&#10094;</increment-decrement>\r\n        <year-picker :data-datepicker=\"name\">\r\n          {{\r\n          shownYears.range\r\n          }}\r\n        </year-picker>\r\n        <increment-decrement\r\n          :data-datepicker=\"name\"\r\n          @click=\"incrementCursorDate(10, 'year')\"\r\n        >&#10095;</increment-decrement>\r\n      </selector-bar>\r\n      <calendar :data-datepicker=\"name\">\r\n        <tbody :data-datepicker=\"name\" v-if=\"cursorDate\">\r\n          <tr :data-datepicker=\"name\" v-for=\"(yearChunk, index) in shownYears.years\" :key=\"index\">\r\n            <month-or-year\r\n              :data-datepicker=\"name\"\r\n              v-for=\"(year, yearIndex) in yearChunk\"\r\n              :current=\"currentDate.year() == year\"\r\n              :active=\"internalDate ? internalDate.year() == year : false\"\r\n              :key=\"yearIndex\"\r\n              role=\"button\"\r\n              tabindex=\"0\"\r\n              :colspan=\"yearChunk.length == 5 ? 1 : 5\"\r\n              @click=\"\r\n                setCursorDate(year, 'year');\r\n                toggleMonth();\r\n              \"\r\n              @keyup.space=\"\r\n                setCursorDate(year, 'year');\r\n                toggleMonth();\r\n              \"\r\n              @keyup.enter=\"\r\n                setCursorDate(year, 'year');\r\n                toggleMonth();\r\n              \"\r\n            >{{ year }}</month-or-year>\r\n          </tr>\r\n        </tbody>\r\n      </calendar>\r\n    </date-picker-container>\r\n  </content-container>\r\n</template>\r\n\r\n<script>\r\nimport moment from \"moment\";\r\nimport styled from \"vue-styled-components\";\r\nimport { VueInput } from \"@IntusFacultas/input\";\r\nimport Theme from \"@IntusFacultas/design-system\";\r\nconst SATURDAY = 6;\r\nconst SUNDAY = 0;\r\nconst props = {\r\n  active: {\r\n    type: Boolean,\r\n    default: false\r\n  },\r\n  disabled: {\r\n    type: Boolean,\r\n    default: false\r\n  },\r\n  inMonth: {\r\n    type: Boolean,\r\n    default: false\r\n  },\r\n  current: {\r\n    type: Boolean,\r\n    default: false\r\n  },\r\n  top: {\r\n    type: String,\r\n    default: \"inherit\"\r\n  },\r\n  defaultTheme: {\r\n    type: Object,\r\n    default() {\r\n      return Theme;\r\n    }\r\n  }\r\n};\r\nconst SelectorBar = styled.div`\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  text-align: center;\r\n  width: 100%;\r\n  & * {\r\n    font-size: 16px;\r\n  }\r\n`;\r\nconst MonthPicker = styled.button`\r\n  background-color: white;\r\n  width:240px\r\n  border: 1px solid white;\r\n  border-radius: 4px;\r\n  cursor: pointer;\r\n  padding: 4px 0px;\r\n  &:hover {\r\n    background-color: #eee;\r\n  }\r\n  transition: color .1s ease-in-out,\r\n            background-color .1s ease-in-out,\r\n            border-color .1s ease-in-out,\r\n            box-shadow .1s ease-in-out;\r\n`;\r\nconst YearPicker = styled.span`\r\n  background-color: white;\r\n  width:240px\r\n  border: 1px solid white;\r\n  border-radius: 4px;\r\n  padding: 4px 0px;\r\n`;\r\nconst IncrementDecrement = styled.button`\r\n  background-color: white;\r\n  border: 1px solid white;\r\n  border-radius: 4px;\r\n  cursor: pointer;\r\n  text-align: center;\r\n  padding: 4px 16px;\r\n  &:hover {\r\n    background-color: #eee;\r\n  }\r\n  transition: color 0.1s ease-in-out, background-color 0.1s ease-in-out,\r\n    border-color 0.1s ease-in-out, box-shadow 0.1s ease-in-out;\r\n`;\r\nconst ContentContainer = styled.div`\r\n  position: relative;\r\n`;\r\nconst DatePickerContainer = styled(\"div\", props)`\r\n  width: 280px;\r\n  position: absolute;\r\n  padding: 10px 10px;\r\n  border-radius: 4px;\r\n  background-color: white;\r\n  top: ${props => props.top};\r\n  & * {\r\n    font-family: \"Open Sans Regular\", -apple-system, BlinkMacSystemFont,\r\n      \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif,\r\n      \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\";\r\n    user-select: none;\r\n  }\r\n  z-index: 1000;\r\n  box-shadow: 0px 8px 8px 2px #e4e4e4;\r\n`;\r\nconst MonthOrYear = styled(\"td\", props)`\r\n  ${props =>\r\n    props.active\r\n      ? `\r\n        color: ${props.defaultTheme.Primary.color.color}\r\n        background-color: ${props.defaultTheme.Primary.background.color}\r\n        &:hover {\r\n          background-color: ${props.defaultTheme.Primary.background.hover};\r\n        }\r\n      `\r\n      : props.current\r\n      ? `\r\n        background-color: #ddd;\r\n        &:hover {\r\n          background-color: #eee;\r\n        }\r\n      `\r\n      : `\r\n  &:hover {\r\n    background-color: #eee;\r\n  }`}\r\n  padding: 5px 10px;\r\n  transition: color 0.1s ease-in-out, background-color 0.1s ease-in-out,\r\n    border-color 0.1s ease-in-out, box-shadow 0.1s ease-in-out;\r\n  cursor: pointer;\r\n  border-radius: 4px;\r\n`;\r\nconst Day = styled(\"td\", props)`\r\n  ${props => (props.inMonth ? `` : `color: #b8b8b8;`)}\r\n  ${props =>\r\n    props.active\r\n      ? `\r\n        color: ${props.defaultTheme.Primary.color.color}\r\n        background-color: ${props.defaultTheme.Primary.background.color}\r\n        &:hover {\r\n          background-color: ${props.defaultTheme.Primary.background.hover};\r\n        }\r\n      `\r\n      : props.current\r\n      ? `\r\n        background-color: #ddd;\r\n        &:hover {\r\n          background-color: #eee;\r\n        }\r\n      `\r\n      : `\r\n  &:hover {\r\n    background-color: #eee;\r\n  }`}\r\n  cursor: pointer;\r\n  ${props =>\r\n    props.disabled\r\n      ? `pointer-events: none; color: #f0f0f0; cursor: not-allowed;`\r\n      : ``}\r\n  transition: color 0.1s ease-in-out, background-color 0.1s ease-in-out,\r\n    border-color 0.1s ease-in-out, box-shadow 0.1s ease-in-out;\r\n  border-radius: 4px;\r\n`;\r\nconst Calendar = styled.table`\r\n  width: 100%;\r\n  text-align: center;\r\n`;\r\nexport const DatePicker = {\r\n  components: {\r\n    VueInput,\r\n    DatePickerContainer,\r\n    IncrementDecrement,\r\n    MonthPicker,\r\n    SelectorBar,\r\n    Calendar,\r\n    Day,\r\n    MonthOrYear,\r\n    YearPicker,\r\n    ContentContainer\r\n  },\r\n  data() {\r\n    return {\r\n      show: false,\r\n      selectingDay: true,\r\n      selectingMonth: false,\r\n      selectingYear: false,\r\n      cursorDate: null,\r\n      currentDate: null,\r\n      calculatedTop: \"initial\",\r\n      internalDate: null,\r\n      shownMonth: {\r\n        month: \"Loading\",\r\n        dates: []\r\n      },\r\n      shownYear: {\r\n        year: \"Loading\",\r\n        months: []\r\n      },\r\n      shownYears: {\r\n        range: \"Loading\",\r\n        years: []\r\n      }\r\n    };\r\n  },\r\n  watch: {\r\n    value(newVal, oldVal) {\r\n      if (!moment(newVal).isSame(this.internalDate)) {\r\n        this.internalDate = moment(newVal);\r\n        this.cursorDate = this.internalDate;\r\n      }\r\n    },\r\n    start(newVal, oldVal) {\r\n      if (oldVal == null || !moment(newVal).isSame(oldVal)) {\r\n        this.validateStartEnd();\r\n      }\r\n    },\r\n    end(newVal, oldVal) {\r\n      if (oldVal == null || !moment(newVal).isSame(oldVal)) {\r\n        this.validateStartEnd();\r\n      }\r\n    }\r\n  },\r\n  beforeDestroy() {\r\n    document.removeEventListener(\"click\", this.handleClick, { passive: true });\r\n  },\r\n  mounted() {\r\n    Element.prototype.closestDatePicker = function(name) {\r\n      var el = this;\r\n      var ancestor = this;\r\n      if (!document.documentElement.contains(el)) return null;\r\n      do {\r\n        if (ancestor.getAttribute(\"data-datepicker\") == name) return ancestor;\r\n        ancestor = ancestor.parentElement;\r\n      } while (ancestor !== null);\r\n      return null;\r\n    };\r\n    this.internalDate = moment(this.value);\r\n    if (!this.internalDate.isValid()) {\r\n      this.internalDate = null;\r\n      this.cursorDate = moment();\r\n    } else {\r\n      this.cursorDate = this.internalDate.clone();\r\n    }\r\n    this.currentDate = moment();\r\n    this.validateStartEnd();\r\n    this.updateShownValues();\r\n    document.addEventListener(\"click\", this.handleClick, { passive: true });\r\n  },\r\n  props: {\r\n    label: {\r\n      type: String,\r\n      default: \"Select a date\"\r\n    },\r\n    debug: {\r\n      type: Boolean,\r\n      default: false\r\n    },\r\n    textFlavor: {\r\n      type: String,\r\n      default: \"Normal\"\r\n    },\r\n    name: {\r\n      type: String,\r\n      required: true\r\n    },\r\n    defaultNow: {\r\n      type: Boolean,\r\n      default: true\r\n    },\r\n    start: {\r\n      type: [Object, String, Date, moment],\r\n      default() {\r\n        return null;\r\n      }\r\n    },\r\n    end: {\r\n      type: [Object, String, Date, moment],\r\n      default() {\r\n        return null;\r\n      }\r\n    },\r\n    disabledDates: {\r\n      type: Array,\r\n      default() {\r\n        return [];\r\n      }\r\n    },\r\n    value: {\r\n      type: [Object, String, Date, moment],\r\n      default() {\r\n        return new Date();\r\n      }\r\n    }\r\n  },\r\n  computed: {\r\n    computedStart() {\r\n      if (this.start) {\r\n        return moment(this.start);\r\n      }\r\n      return null;\r\n    },\r\n    computedEnd() {\r\n      if (this.end) {\r\n        return moment(this.end);\r\n      }\r\n      return null;\r\n    }\r\n  },\r\n  methods: {\r\n    open() {\r\n      this.show = true;\r\n      let self = this;\r\n      let ref;\r\n      if (this.selectingDay) {\r\n        ref = \"daypicker\";\r\n      } else if (this.selectingMonth) {\r\n        ref = \"monthpicker\";\r\n      } else if (this.selectingYear) {\r\n        ref = \"yearpicker\";\r\n      }\r\n\r\n      this.$nextTick(() => {\r\n        self.calculatedTop = self.calculateTop(ref);\r\n        self.$forceUpdate();\r\n      });\r\n    },\r\n    calculateTop(ref) {\r\n      const BUFFER = 20;\r\n      if (this.$refs[ref]) {\r\n        let totalHeightNeeded = this.$refs[ref].$el.getBoundingClientRect()\r\n          .bottom;\r\n        if (totalHeightNeeded > window.innerHeight) {\r\n          return `-${this.$refs[ref].$el.scrollHeight - BUFFER}px`;\r\n        }\r\n        return \"inherit\";\r\n      }\r\n      return \"inherit\";\r\n    },\r\n    validateStartEnd() {\r\n      if (this.computedStart && this.computedEnd) {\r\n        if (this.computedEnd.isBefore(this.computedStart)) {\r\n          console.error(\r\n            `Datepicker ID: ${\r\n              this.name\r\n            } was passed an end date that comes before the passed start date. Start Date: ${this.computedStart.format(\r\n              \"YYYY-MM-DD\"\r\n            )}, End date: ${this.computedEnd.format(\"YYYY-MM-DD\")}`\r\n          );\r\n        }\r\n      }\r\n    },\r\n    testDisabled(d) {\r\n      for (disabled in this.disabledDates) {\r\n        if (moment(disabled).isSame(d)) {\r\n          return true;\r\n        }\r\n      }\r\n      if (this.computedStart) {\r\n        if (d.isBefore(this.computedStart)) {\r\n          return true;\r\n        }\r\n      }\r\n      if (this.computedEnd) {\r\n        if (d.isAfter(this.computedEnd)) {\r\n          return true;\r\n        }\r\n      }\r\n      return false;\r\n    },\r\n    close() {\r\n      this.show = false;\r\n      this.selectingDay = true;\r\n      this.selectingMonth = false;\r\n      this.selectingYear = false;\r\n    },\r\n    handleClick(event) {\r\n      if (\r\n        event.target.getAttribute(\"data-datepicker\") != this.name &&\r\n        !event.target.closestDatePicker(this.name)\r\n      ) {\r\n        this.close();\r\n      }\r\n    },\r\n    updateShownValues() {\r\n      this.shownMonth = this.formatMonth(this.getsDayOfMonth(this.cursorDate));\r\n      this.shownYear = {\r\n        year: this.cursorDate.year(),\r\n        months: [\r\n          [\r\n            {\r\n              display: \"JAN\",\r\n              value: 0\r\n            },\r\n            {\r\n              display: \"FEB\",\r\n              value: 1\r\n            },\r\n            {\r\n              display: \"MAR\",\r\n              value: 2\r\n            },\r\n            {\r\n              display: \"APR\",\r\n              value: 3\r\n            }\r\n          ],\r\n          [\r\n            {\r\n              display: \"MAY\",\r\n              value: 4\r\n            },\r\n            {\r\n              display: \"JUN\",\r\n              value: 5\r\n            },\r\n            {\r\n              display: \"JUL\",\r\n              value: 6\r\n            },\r\n            {\r\n              display: \"AUG\",\r\n              value: 7\r\n            }\r\n          ],\r\n          [\r\n            {\r\n              display: \"SEP\",\r\n              value: 8\r\n            },\r\n            {\r\n              display: \"OCT\",\r\n              value: 9\r\n            },\r\n            {\r\n              display: \"NOV\",\r\n              value: 10\r\n            },\r\n            {\r\n              display: \"DEC\",\r\n              value: 11\r\n            }\r\n          ]\r\n        ]\r\n      };\r\n      let rangeStart = Math.floor(this.cursorDate.year() / 10) * 10;\r\n      let rangeEnd = Math.round(this.cursorDate.year() / 10) * 10;\r\n      if (rangeStart == rangeEnd) {\r\n        rangeEnd += 10;\r\n      }\r\n      let years = [[], [], []];\r\n      let buffer = 0;\r\n      for (let year = rangeStart; year <= rangeEnd; year++) {\r\n        years[parseInt(buffer++ / 5)].push(year);\r\n      }\r\n      this.shownYears = {\r\n        range: `${rangeStart} - ${rangeEnd}`,\r\n        years\r\n      };\r\n    },\r\n    incrementCursorDate(amount, duration) {\r\n      this.cursorDate.add(amount, duration);\r\n      this.updateShownValues();\r\n    },\r\n    decrementCursorDate(amount, duration) {\r\n      this.cursorDate.subtract(amount, duration);\r\n      this.updateShownValues();\r\n    },\r\n    setInternalDate(day) {\r\n      this.internalDate = day.clone();\r\n      this.$emit(\"input\", this.internalDate);\r\n      this.close();\r\n    },\r\n    setCursorDate(value, time) {\r\n      if (time == \"day\") {\r\n        this.cursorDate = value.clone();\r\n      } else if (time == \"month\") {\r\n        this.cursorDate.month(value);\r\n      } else if (time == \"year\") {\r\n        this.cursorDate.year(value);\r\n      }\r\n      this.updateShownValues();\r\n      this.$forceUpdate();\r\n    },\r\n    toggleYear() {\r\n      this.selectingDay = false;\r\n      this.selectingMonth = false;\r\n      this.selectingYear = true;\r\n    },\r\n    toggleMonth() {\r\n      this.selectingDay = false;\r\n      this.selectingMonth = true;\r\n      this.selectingYear = false;\r\n    },\r\n    toggleDay() {\r\n      this.selectingDay = true;\r\n      this.selectingMonth = false;\r\n      this.selectingYear = false;\r\n    },\r\n    formatMonth(days) {\r\n      if (days[0].day() != 0) {\r\n        let missedDate = days[0].clone().subtract(1, \"d\");\r\n        while (missedDate.day() != SATURDAY) {\r\n          days.unshift(missedDate.clone());\r\n          missedDate.subtract(1, \"d\");\r\n        }\r\n      }\r\n\r\n      if (days[days.length - 1].day() != SATURDAY) {\r\n        let missedDate = days[days.length - 1].clone().add(1, \"d\");\r\n        while (missedDate.day() != SUNDAY) {\r\n          days.push(missedDate.clone());\r\n          missedDate.add(1, \"d\");\r\n        }\r\n      }\r\n      let formattedMonth = [];\r\n      let week = [];\r\n      for (let day of days) {\r\n        if (day.day() == SATURDAY) {\r\n          week.push(day);\r\n          formattedMonth.push(week.slice());\r\n          week = [];\r\n        } else {\r\n          week.push(day);\r\n        }\r\n      }\r\n      return {\r\n        month: this.cursorDate.format(\"MMMM YYYY\"),\r\n        dates: formattedMonth.slice()\r\n      };\r\n    },\r\n    getsDayOfMonth(momentDate) {\r\n      let daysBehind = [];\r\n      let daysAhead = [];\r\n      let previousDay = momentDate.clone().subtract(1, \"d\");\r\n      while (previousDay.month() == momentDate.month()) {\r\n        daysBehind.push(previousDay.clone());\r\n        previousDay.subtract(1, \"d\");\r\n      }\r\n      daysBehind = daysBehind.reverse();\r\n      let nextDay = momentDate.clone().add(1, \"d\");\r\n      while (nextDay.month() == momentDate.month()) {\r\n        daysAhead.push(nextDay.clone());\r\n        nextDay.add(1, \"d\");\r\n      }\r\n      return [...daysBehind, momentDate, ...daysAhead];\r\n    }\r\n  }\r\n};\r\nexport default DatePicker;\r\n</script>\r\n\r\n<style>\r\ninput::-webkit-calendar-picker-indicator {\r\n  display: none;\r\n}\r\ninput[type=\"date\"]::-webkit-input-placeholder {\r\n  visibility: hidden !important;\r\n}\r\ninput[type=\"date\"]::-webkit-outer-spin-button,\r\ninput[type=\"date\"]::-webkit-inner-spin-button {\r\n  -webkit-appearance: none;\r\n  margin: 0;\r\n}\r\n</style>\r\n"]}, media: undefined });

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

var install = function installDatePicker(Vue) {
  if (install.installed) return;
  install.installed = true;
  Vue.component("DatePicker", __vue_component__);
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
//# sourceMappingURL=DatePicker.esm.js.map
