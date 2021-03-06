import styled from 'vue-styled-components';
import Theme from '@IntusFacultas/design-system';
import { NButton, ButtonGroup } from '@IntusFacultas/button';
import { TextContent } from '@IntusFacultas/typography';

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

function _templateObject7() {
  var data = _taggedTemplateLiteral(["\n    ", "\n    text-align: ", ";\n    ", "\n      border-color: ", ";\n"]);

  _templateObject7 = function _templateObject7() {
    return data;
  };

  return data;
}

function _templateObject6() {
  var data = _taggedTemplateLiteral(["\n    -webkit-touch-callout: none; /* iOS Safari */\n    -webkit-user-select: none; /* Safari */\n    -khtml-user-select: none; /* Konqueror HTML */\n    -moz-user-select: none; /* Old versions of Firefox */\n    -ms-user-select: none; /* Internet Explorer/Edge */\n    user-select: none;\n    text-align: ", ";\n    ", "\n    ", "\n    ", "\n        border-bottom-width: 2px;\n    border-bottom-style: solid;\n    background-color: ", ";\n    & span {color: ", ";}\n    border-color: ", ";\n      ", "\n"]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = _taggedTemplateLiteral(["\n  ", "\n"]);

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
  var data = _taggedTemplateLiteral([""]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  background-image: linear-gradient(\n    to top right,\n    transparent 50%,\n    ", "\n      50%\n  );\n  width: 0.5rem;\n  height: 0.5rem;\n  transform: rotate(-45deg);\n  transition: 0.3s all;\n  display: inline-block;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  border-collapse: collapse;\n  width: 100%;\n  max-width: 100%;\n  position: relative;\n  background-color: ", ";\n  ", "\n  & td > span {\n    color: ", ";\n  }\n  border-color: ", ";\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}
var props = {
  flavor: String,
  active: Boolean,
  textAlign: {
    type: String,
    default: "left"
  },
  striped: Boolean,
  sticky: Boolean,
  zIndex: {
    type: Number,
    default: 10
  },
  top: {
    type: Number,
    default: 0
  },
  bordered: Boolean,
  sortable: Boolean,
  hover: Boolean,
  condensed: Boolean,
  defaultTheme: {
    type: Object,
    default: function _default() {
      return Theme;
    }
  }
};
var NTable = styled("table", props)(_templateObject(), function (props) {
  return props.theme && props.theme[props.flavor] ? props.theme[props.flavor].background.color : props.defaultTheme[props.flavor] ? props.defaultTheme[props.flavor].background.color : "#fff";
}, function (props) {
  return props.striped ? "\n             & > tbody > tr:nth-of-type(2n+1) > td {\n                background-color: rgba(0, 0, 0, .1);\n            }\n        " : "";
}, function (props) {
  return props.theme && props.theme[props.flavor] ? props.theme[props.flavor].color.color : props.defaultTheme[props.flavor] ? props.defaultTheme[props.flavor].color.color : "#222";
}, function (props) {
  return props.theme && props.theme[props.flavor] ? props.theme[props.flavor].border.color : props.defaultTheme[props.flavor] ? props.defaultTheme[props.flavor].border.color : "#d9d9d9";
});
var TableCarat = styled("div", props)(_templateObject2(), function (props) {
  return props.theme && props.theme[props.flavor] ? props.theme[props.flavor].color.color : props.defaultTheme[props.flavor] ? props.defaultTheme[props.flavor].color.color : "#222";
});
var TableHeaders = styled("thead", props)(_templateObject3());
var TableBody = styled("tbody", props)(_templateObject4());
var TableRow = styled("tr", props)(_templateObject5(), function (props) {
  return props.hover ? "\n      &:hover {\n        background-color: rgb(0,0,0,0.05);\n      }" : "";
});
var TableHeader = styled("th", props)(_templateObject6(), function (props) {
  return props.textAlign ? props.textAlign : "left";
}, function (props) {
  return props.condensed ? "padding: .25rem;" : "padding: .5rem;";
}, function (props) {
  return props.sortable ? "cursor: pointer;" : "";
}, function (props) {
  return props.bordered ? "border-width: 1px; border-style: solid;" : "border-top-width: 1px; border-top-style: solid";
}, function (props) {
  return props.theme && props.theme[props.flavor] ? props.theme[props.flavor].background.color : props.defaultTheme[props.flavor] ? props.defaultTheme[props.flavor].background.color : "#fff";
}, function (props) {
  return props.theme && props.theme[props.flavor] ? props.theme[props.flavor].color.color : props.defaultTheme[props.flavor] ? props.defaultTheme[props.flavor].color.color : "#222";
}, function (props) {
  return props.theme && props.theme[props.flavor] ? props.theme[props.flavor].border.color : props.defaultTheme[props.flavor] ? props.defaultTheme[props.flavor].border.color : "#d9d9d9";
}, function (props) {
  return props.sticky ? "\n        position: sticky;\n        top: ".concat(props.top, "px;\n        z-index: ").concat(props.zIndex, " \n      ") : "";
});
var TableCell = styled("td", props)(_templateObject7(), function (props) {
  return props.condensed ? "padding: .25rem;" : "padding: .5rem;";
}, function (props) {
  return props.textAlign ? props.textAlign : "left";
}, function (props) {
  return props.bordered ? "border-width: 1px; border-style: solid;" : "border-top-width: 1px; border-top-style: solid";
}, function (props) {
  return props.theme && props.theme[props.flavor] ? props.theme[props.flavor].border.color : props.defaultTheme[props.flavor] ? props.defaultTheme[props.flavor].border.color : "#d9d9d9";
});
var VueTable = {
  components: {
    NTable: NTable,
    TableHeaders: TableHeaders,
    TableBody: TableBody,
    TableRow: TableRow,
    TableHeader: TableHeader,
    TableCell: TableCell,
    TableCarat: TableCarat,
    NButton: NButton,
    TextContent: TextContent,
    ButtonGroup: ButtonGroup
  },
  data: function data() {
    return {
      internalSort: ""
    };
  },
  watch: {
    sort: function sort(newVal) {
      if (newVal != this.internalSort) {
        this.internalSort = newVal;
        this.$forceUpdate();
      }
    }
  },
  mounted: function mounted() {
    this.internalSort = this.sort;
  },
  props: {
    textAlign: {
      type: String,
      default: "left"
    },
    headerFlavor: {
      type: String,
      default: ""
    },
    sort: {
      type: String,
      default: ""
    },
    stickyHeaders: Boolean,
    showLoading: Boolean,
    zIndex: {
      type: Number,
      default: 10
    },
    top: {
      type: Number,
      default: 0
    },
    flavor: {
      type: String,
      default: ""
    },
    striped: {
      type: Boolean,
      default: false
    },
    selectable: {
      type: Boolean,
      default: false
    },
    buttons: {
      type: Array,
      default: function _default() {
        return [{
          flavor: "Primary",
          html: "Select",
          value: "select"
        }];
      }
    },
    hover: {
      type: Boolean,
      default: false
    },
    condensed: {
      type: Boolean,
      default: false
    },
    numbered: {
      type: Boolean,
      default: false
    },
    bordered: {
      type: Boolean,
      default: false
    },
    sortable: {
      type: Boolean,
      default: false
    },
    items: {
      type: Array,
      default: function _default() {
        return [];
      }
    },
    tableTitles: {
      type: Array,
      default: function _default() {
        return [];
      }
    },
    headers: {
      type: Array,
      default: function _default() {
        return [];
      }
    }
  },
  methods: {
    sortBy: function sortBy(header) {
      if (!this.sortable) {
        return false;
      }

      var proposedSort = "";

      if (this.internalSort == header) {
        if (this.internalSort.indexOf("-") == -1) {
          proposedSort = "-" + this.internalSort;
        } else {
          proposedSort = "";
        }
      } else if (this.internalSort == "") {
        proposedSort = header;
      } else if (this.internalSort == "-" + header) {
        proposedSort = "";
      } else {
        proposedSort = header;
      }

      if (this.sort == "") {
        this.internalSort = proposedSort;
      }

      this.$emit("sort", proposedSort);
      this.$forceUpdate();
    },
    camelCaseToTitleCase: function camelCaseToTitleCase(in_camelCaseString) {
      // pulled from https://stackoverflow.com/questions/7225407/convert-camelcasetext-to-sentence-case-text/7225450
      var result = in_camelCaseString // "ToGetYourGEDInTimeASongAboutThe26ABCsIsOfTheEssenceButAPersonalIDCardForUser456InRoom26AContainingABC26TimesIsNotAsEasyAs123ForC3POOrR2D2Or2R2D"
      .replace(/([a-z])([A-Z][a-z])/g, "$1 $2") // "To Get YourGEDIn TimeASong About The26ABCs IsOf The Essence ButAPersonalIDCard For User456In Room26AContainingABC26Times IsNot AsEasy As123ForC3POOrR2D2Or2R2D"
      .replace(/([A-Z][a-z])([A-Z])/g, "$1 $2") // "To Get YourGEDIn TimeASong About The26ABCs Is Of The Essence ButAPersonalIDCard For User456In Room26AContainingABC26Times Is Not As Easy As123ForC3POOr R2D2Or2R2D"
      .replace(/([a-z])([A-Z]+[a-z])/g, "$1 $2") // "To Get Your GEDIn Time ASong About The26ABCs Is Of The Essence But APersonal IDCard For User456In Room26AContainingABC26Times Is Not As Easy As123ForC3POOr R2D2Or2R2D"
      .replace(/([A-Z]+)([A-Z][a-z][a-z])/g, "$1 $2") // "To Get Your GEDIn Time A Song About The26ABCs Is Of The Essence But A Personal ID Card For User456In Room26A ContainingABC26Times Is Not As Easy As123ForC3POOr R2D2Or2R2D"
      .replace(/([a-z]+)([A-Z0-9]+)/g, "$1 $2") // "To Get Your GEDIn Time A Song About The 26ABCs Is Of The Essence But A Personal ID Card For User 456In Room 26A Containing ABC26Times Is Not As Easy As 123For C3POOr R2D2Or 2R2D"
      // Note: the next regex includes a special case to exclude plurals of acronyms, e.g. "ABCs"
      .replace(/([A-Z]+)([A-Z][a-rt-z][a-z]*)/g, "$1 $2") // "To Get Your GED In Time A Song About The 26ABCs Is Of The Essence But A Personal ID Card For User 456In Room 26A Containing ABC26Times Is Not As Easy As 123For C3PO Or R2D2Or 2R2D"
      .replace(/([0-9])([A-Z][a-z]+)/g, "$1 $2") // "To Get Your GED In Time A Song About The 26ABCs Is Of The Essence But A Personal ID Card For User 456In Room 26A Containing ABC 26Times Is Not As Easy As 123For C3PO Or R2D2Or 2R2D"
      // Note: the next two regexes use {2,} instead of + to add space on phrases like Room26A and 26ABCs but not on phrases like R2D2 and C3PO"
      .replace(/([A-Z]{2,})([0-9]{2,})/g, "$1 $2") // "To Get Your GED In Time A Song About The 26ABCs Is Of The Essence But A Personal ID Card For User 456 In Room 26A Containing ABC 26 Times Is Not As Easy As 123 For C3PO Or R2D2 Or 2R2D"
      .replace(/([0-9]{2,})([A-Z]{2,})/g, "$1 $2") // "To Get Your GED In Time A Song About The 26 ABCs Is Of The Essence But A Personal ID Card For User 456 In Room 26A Containing ABC 26 Times Is Not As Easy As 123 For C3PO Or R2D2 Or 2R2D"
      .trim(); // capitalize the first letter

      return result.charAt(0).toUpperCase() + result.slice(1);
    },
    select: function select(item, value) {
      this.$emit("select", {
        item: item,
        type: value
      });
    },
    toTitleCase: function toTitleCase(str) {
      str = this.camelCaseToTitleCase(str);
      str = str.replace(/_/g, " ");
      return str.replace(/(^|\s)\S/g, function (t) {
        return t.toUpperCase();
      });
    }
  },
  computed: {
    computedHeaderHeight: function computedHeaderHeight() {
      var sizeOfHeader = 41;

      if (this.condensed) {
        sizeOfHeader = 33;
      }

      return sizeOfHeader;
    },
    computedTopOffset: function computedTopOffset() {
      return this.tableTitles.length * this.computedHeaderHeight;
    },
    tableHeaders: function tableHeaders() {
      if (this.items.length > 0) {
        var keys = Object.keys(this.items[0].data);

        if (this.headers.length != 0) {
          var handledKeys = this.headers.map(function (x) {
            return x.key;
          });
          var titles = this.headers.map(function (x) {
            return x.text;
          });

          if (handledKeys.length == keys.length && titles.length == handledKeys.length) {
            var valid = true;

            var _iterator = _createForOfIteratorHelper(handledKeys),
                _step;

            try {
              for (_iterator.s(); !(_step = _iterator.n()).done;) {
                var key = _step.value;

                if (keys.indexOf(key) == -1) {
                  valid = false;
                  break;
                }
              }
            } catch (err) {
              _iterator.e(err);
            } finally {
              _iterator.f();
            }

            if (valid) {
              return this.headers;
            }
          }
        }

        var headers = [];

        for (var _i = 0, _keys = keys; _i < _keys.length; _i++) {
          var _key = _keys[_i];
          headers.push({
            text: this.toTitleCase(_key),
            key: _key
          });
        }

        return headers;
      } else if (this.headers.length > 0) {
        return this.headers;
      } else {
        throw new Error("Table component: no headers defined and no items provided");
      }
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
const __vue_script__ = VueTable;

/* template */
var __vue_render__ = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c(
    "n-table",
    { attrs: { flavor: _vm.flavor, striped: _vm.striped } },
    [
      _c(
        "table-headers",
        [
          _vm._l(_vm.tableTitles, function(title, index) {
            return _c(
              "table-row",
              { key: "title" + index },
              [
                _c(
                  "table-header",
                  {
                    attrs: {
                      flavor: _vm.headerFlavor ? _vm.headerFlavor : _vm.flavor,
                      condensed: _vm.condensed,
                      bordered: _vm.bordered,
                      sticky: _vm.stickyHeaders,
                      "z-index": _vm.zIndex,
                      top: _vm.top + index * _vm.computedHeaderHeight,
                      "text-align": "center",
                      colspan:
                        _vm.numbered && _vm.selectable
                          ? _vm.tableHeaders.length + 2
                          : _vm.numbered || _vm.selectable
                          ? _vm.tableHeaders.length + 1
                          : _vm.tableHeaders.length
                    }
                  },
                  [
                    _c("text-content", { attrs: { bold: true } }, [
                      _vm._v(_vm._s(title))
                    ])
                  ],
                  1
                )
              ],
              1
            )
          }),
          _vm._v(" "),
          _c(
            "table-row",
            [
              _vm.numbered
                ? _c(
                    "table-header",
                    {
                      attrs: {
                        flavor: _vm.headerFlavor
                          ? _vm.headerFlavor
                          : _vm.flavor,
                        condensed: _vm.condensed,
                        bordered: _vm.bordered,
                        "text-align": _vm.textAlign,
                        sticky: _vm.stickyHeaders,
                        "z-index": _vm.zIndex,
                        top: _vm.top + _vm.computedTopOffset
                      }
                    },
                    [_vm._v("#")]
                  )
                : _vm._e(),
              _vm._v(" "),
              _vm._l(_vm.tableHeaders, function(header, index) {
                return _c(
                  "table-header",
                  {
                    key: "header" + index,
                    attrs: {
                      flavor: _vm.headerFlavor ? _vm.headerFlavor : _vm.flavor,
                      condensed: _vm.condensed,
                      sortable: _vm.sortable,
                      sticky: _vm.stickyHeaders,
                      "z-index": _vm.zIndex,
                      top: _vm.top + _vm.computedTopOffset,
                      bordered: _vm.bordered,
                      "text-align": _vm.textAlign
                    },
                    on: {
                      click: function($event) {
                        return _vm.sortBy(header.key)
                      }
                    }
                  },
                  [
                    _c("text-content", { attrs: { bold: true } }, [
                      _vm._v(_vm._s(header.text))
                    ]),
                    _vm._v(" "),
                    _c("table-carat", {
                      class:
                        _vm.internalSort == header.key
                          ? ""
                          : _vm.internalSort == "-" + header.key
                          ? "table-open-carat"
                          : "table-not-shown",
                      attrs: {
                        flavor: _vm.headerFlavor ? _vm.headerFlavor : _vm.flavor
                      }
                    })
                  ],
                  1
                )
              }),
              _vm._v(" "),
              _vm.selectable
                ? _c(
                    "table-header",
                    {
                      attrs: {
                        flavor: _vm.headerFlavor
                          ? _vm.headerFlavor
                          : _vm.flavor,
                        condensed: _vm.condensed,
                        bordered: _vm.bordered,
                        sticky: _vm.stickyHeaders,
                        "z-index": _vm.zIndex,
                        top: _vm.top + _vm.computedTopOffset,
                        "text-align": _vm.textAlign
                      }
                    },
                    [_vm._v(" ")]
                  )
                : _vm._e()
            ],
            2
          )
        ],
        2
      ),
      _vm._v(" "),
      _c(
        "table-body",
        [
          _c(
            "table-row",
            {
              directives: [
                {
                  name: "show",
                  rawName: "v-show",
                  value: _vm.showLoading,
                  expression: "showLoading"
                }
              ]
            },
            [
              _c(
                "table-cell",
                {
                  attrs: {
                    "text-align": "center",
                    colspan:
                      _vm.numbered && _vm.selectable
                        ? _vm.tableHeaders.length + 2
                        : _vm.numbered || _vm.selectable
                        ? _vm.tableHeaders.length + 1
                        : _vm.tableHeaders.length
                  }
                },
                [
                  _c(
                    "svg",
                    {
                      staticClass: "loading-spin",
                      attrs: {
                        xmlns: "http://www.w3.org/2000/svg",
                        width: "24",
                        height: "24",
                        viewBox: "0 0 24 24"
                      }
                    },
                    [
                      _c("path", {
                        attrs: {
                          d:
                            "M23 12c0 1.042-.154 2.045-.425 3h-2.101c.335-.94.526-1.947.526-3 0-4.962-4.037-9-9-9-1.706 0-3.296.484-4.655 1.314l1.858 2.686h-6.994l2.152-7 1.849 2.673c1.684-1.049 3.659-1.673 5.79-1.673 6.074 0 11 4.925 11 11zm-6.354 7.692c-1.357.826-2.944 1.308-4.646 1.308-4.962 0-9-4.038-9-9 0-1.053.191-2.06.525-3h-2.1c-.271.955-.425 1.958-.425 3 0 6.075 4.925 11 11 11 2.127 0 4.099-.621 5.78-1.667l1.853 2.667 2.152-6.989h-6.994l1.855 2.681z"
                        }
                      })
                    ]
                  )
                ]
              )
            ],
            1
          ),
          _vm._v(" "),
          _vm._l(_vm.items, function(item, index) {
            return _c(
              "table-row",
              {
                directives: [
                  {
                    name: "show",
                    rawName: "v-show",
                    value: !_vm.showLoading,
                    expression: "!showLoading"
                  }
                ],
                key: "item" + index,
                attrs: { hover: _vm.hover }
              },
              [
                _vm.numbered
                  ? _c(
                      "table-cell",
                      {
                        attrs: {
                          flavor: _vm.flavor,
                          condensed: _vm.condensed,
                          bordered: _vm.bordered
                        }
                      },
                      [
                        _vm._v(
                          "\n        " +
                            _vm._s(
                              item.data.id
                                ? item.data.id
                                : item.data.pk
                                ? item.data.pk
                                : index + 1
                            ) +
                            "\n      "
                        )
                      ]
                    )
                  : _vm._e(),
                _vm._v(" "),
                _vm._l(_vm.tableHeaders, function(header) {
                  return _c(
                    "table-cell",
                    {
                      key: "item" + index + "key" + header.key,
                      attrs: {
                        flavor: _vm.flavor,
                        condensed: _vm.condensed,
                        bordered: _vm.bordered,
                        "text-align": _vm.textAlign
                      }
                    },
                    [
                      _c("text-content", [
                        _vm._v(
                          "\n          " +
                            _vm._s(item.data[header.key]) +
                            "\n        "
                        )
                      ])
                    ],
                    1
                  )
                }),
                _vm._v(" "),
                _vm.selectable
                  ? _c(
                      "table-cell",
                      {
                        attrs: {
                          flavor: _vm.flavor,
                          condensed: _vm.condensed,
                          bordered: _vm.bordered
                        }
                      },
                      [
                        _vm.buttons.length == 1
                          ? _c(
                              "div",
                              _vm._l(_vm.buttons, function(button, index) {
                                return _c(
                                  "n-button",
                                  {
                                    key: "button" + index,
                                    attrs: {
                                      small: _vm.condensed,
                                      flavor: button.flavor
                                    },
                                    on: {
                                      click: function($event) {
                                        return _vm.select(item, button.value)
                                      }
                                    }
                                  },
                                  [
                                    _c("span", {
                                      domProps: {
                                        innerHTML: _vm._s(button.html)
                                      }
                                    })
                                  ]
                                )
                              }),
                              1
                            )
                          : _c(
                              "button-group",
                              _vm._l(_vm.buttons, function(button, index) {
                                return _c(
                                  "n-button",
                                  {
                                    key: "button" + index,
                                    attrs: {
                                      small: _vm.condensed,
                                      flavor: button.flavor
                                    },
                                    on: {
                                      click: function($event) {
                                        return _vm.select(item, button.value)
                                      }
                                    }
                                  },
                                  [
                                    _c("span", {
                                      domProps: {
                                        innerHTML: _vm._s(button.html)
                                      }
                                    })
                                  ]
                                )
                              }),
                              1
                            )
                      ],
                      1
                    )
                  : _vm._e()
              ],
              2
            )
          })
        ],
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
    inject("data-v-22828e9a_0", { source: "\n.table-not-shown {\r\n  opacity: 0;\r\n  transform: rotate(45deg) !important;\n}\n.table-hoverable-row:hover {\r\n  background-color: rgba(0, 0, 0, 0.05);\n}\n.table-open-carat {\r\n  transform: rotate(135deg) !important;\n}\n.portion-marking-container {\r\n  display: flex;\r\n  justify-content: space-between;\n}\n@-moz-keyframes loading-spin {\nto {\r\n    -moz-transform: rotate(-360deg);\n}\n}\n@-webkit-keyframes loading-spin {\nto {\r\n    -webkit-transform: rotate(-360deg);\n}\n}\n@keyframes loading-spin {\nto {\r\n    transform: rotate(-360deg);\n}\n}\n.loading-spin {\r\n  animation: loading-spin 1000ms linear infinite;\n}\r\n", map: {"version":3,"sources":["C:\\Users\\pedro\\Documents\\Personal Projects\\GitHub\\storybook\\src\\components\\StyledHTML\\Table\\src\\Table.vue"],"names":[],"mappings":";AAkiBA;EACA,UAAA;EACA,mCAAA;AACA;AACA;EACA,qCAAA;AACA;AAEA;EACA,oCAAA;AACA;AACA;EACA,aAAA;EACA,8BAAA;AACA;AACA;AACA;IACA,+BAAA;AACA;AACA;AACA;AACA;IACA,kCAAA;AACA;AACA;AACA;AACA;IACA,0BAAA;AACA;AACA;AAEA;EACA,8CAAA;AACA","file":"Table.vue","sourcesContent":["<template>\r\n  <n-table :flavor=\"flavor\" :striped=\"striped\">\r\n    <table-headers>\r\n      <table-row v-for=\"(title, index) in tableTitles\" :key=\"`title${index}`\">\r\n        <table-header\r\n          :flavor=\"headerFlavor ? headerFlavor : flavor\"\r\n          :condensed=\"condensed\"\r\n          :bordered=\"bordered\"\r\n          :sticky=\"stickyHeaders\"\r\n          :z-index=\"zIndex\"\r\n          :top=\"top + index * computedHeaderHeight\"\r\n          text-align=\"center\"\r\n          :colspan=\"\r\n            numbered && selectable\r\n              ? tableHeaders.length + 2\r\n              : numbered || selectable\r\n              ? tableHeaders.length + 1\r\n              : tableHeaders.length\r\n          \"\r\n        >\r\n          <text-content :bold=\"true\">{{ title }}</text-content>\r\n        </table-header>\r\n      </table-row>\r\n      <table-row>\r\n        <table-header\r\n          :flavor=\"headerFlavor ? headerFlavor : flavor\"\r\n          :condensed=\"condensed\"\r\n          :bordered=\"bordered\"\r\n          :text-align=\"textAlign\"\r\n          :sticky=\"stickyHeaders\"\r\n          :z-index=\"zIndex\"\r\n          :top=\"top + computedTopOffset\"\r\n          v-if=\"numbered\"\r\n          >#</table-header\r\n        >\r\n        <table-header\r\n          v-for=\"(header, index) in tableHeaders\"\r\n          :key=\"'header' + index\"\r\n          @click=\"sortBy(header.key)\"\r\n          :flavor=\"headerFlavor ? headerFlavor : flavor\"\r\n          :condensed=\"condensed\"\r\n          :sortable=\"sortable\"\r\n          :sticky=\"stickyHeaders\"\r\n          :z-index=\"zIndex\"\r\n          :top=\"top + computedTopOffset\"\r\n          :bordered=\"bordered\"\r\n          :text-align=\"textAlign\"\r\n        >\r\n          <text-content :bold=\"true\">{{ header.text }}</text-content>\r\n          <table-carat\r\n            :flavor=\"headerFlavor ? headerFlavor : flavor\"\r\n            :class=\"\r\n              internalSort == header.key\r\n                ? ''\r\n                : internalSort == '-' + header.key\r\n                ? 'table-open-carat'\r\n                : 'table-not-shown'\r\n            \"\r\n          ></table-carat>\r\n        </table-header>\r\n        <table-header\r\n          :flavor=\"headerFlavor ? headerFlavor : flavor\"\r\n          :condensed=\"condensed\"\r\n          :bordered=\"bordered\"\r\n          :sticky=\"stickyHeaders\"\r\n          :z-index=\"zIndex\"\r\n          :top=\"top + computedTopOffset\"\r\n          :text-align=\"textAlign\"\r\n          v-if=\"selectable\"\r\n          >&nbsp;</table-header\r\n        >\r\n      </table-row>\r\n    </table-headers>\r\n    <table-body>\r\n      <table-row v-show=\"showLoading\">\r\n        <table-cell\r\n          text-align=\"center\"\r\n          :colspan=\"\r\n            numbered && selectable\r\n              ? tableHeaders.length + 2\r\n              : numbered || selectable\r\n              ? tableHeaders.length + 1\r\n              : tableHeaders.length\r\n          \"\r\n        >\r\n          <svg\r\n            class=\"loading-spin\"\r\n            xmlns=\"http://www.w3.org/2000/svg\"\r\n            width=\"24\"\r\n            height=\"24\"\r\n            viewBox=\"0 0 24 24\"\r\n          >\r\n            <path\r\n              d=\"M23 12c0 1.042-.154 2.045-.425 3h-2.101c.335-.94.526-1.947.526-3 0-4.962-4.037-9-9-9-1.706 0-3.296.484-4.655 1.314l1.858 2.686h-6.994l2.152-7 1.849 2.673c1.684-1.049 3.659-1.673 5.79-1.673 6.074 0 11 4.925 11 11zm-6.354 7.692c-1.357.826-2.944 1.308-4.646 1.308-4.962 0-9-4.038-9-9 0-1.053.191-2.06.525-3h-2.1c-.271.955-.425 1.958-.425 3 0 6.075 4.925 11 11 11 2.127 0 4.099-.621 5.78-1.667l1.853 2.667 2.152-6.989h-6.994l1.855 2.681z\"\r\n            />\r\n          </svg>\r\n        </table-cell>\r\n      </table-row>\r\n      <table-row\r\n        v-show=\"!showLoading\"\r\n        v-for=\"(item, index) in items\"\r\n        :key=\"'item' + index\"\r\n        :hover=\"hover\"\r\n      >\r\n        <table-cell\r\n          v-if=\"numbered\"\r\n          :flavor=\"flavor\"\r\n          :condensed=\"condensed\"\r\n          :bordered=\"bordered\"\r\n        >\r\n          {{\r\n            item.data.id\r\n              ? item.data.id\r\n              : item.data.pk\r\n              ? item.data.pk\r\n              : index + 1\r\n          }}\r\n        </table-cell>\r\n        <table-cell\r\n          v-for=\"header in tableHeaders\"\r\n          :key=\"'item' + index + 'key' + header.key\"\r\n          :flavor=\"flavor\"\r\n          :condensed=\"condensed\"\r\n          :bordered=\"bordered\"\r\n          :text-align=\"textAlign\"\r\n        >\r\n          <text-content>\r\n            {{ item.data[header.key] }}\r\n          </text-content>\r\n        </table-cell>\r\n        <table-cell\r\n          v-if=\"selectable\"\r\n          :flavor=\"flavor\"\r\n          :condensed=\"condensed\"\r\n          :bordered=\"bordered\"\r\n        >\r\n          <div v-if=\"buttons.length == 1\">\r\n            <n-button\r\n              v-for=\"(button, index) in buttons\"\r\n              :key=\"`button${index}`\"\r\n              :small=\"condensed\"\r\n              :flavor=\"button.flavor\"\r\n              @click=\"select(item, button.value)\"\r\n            >\r\n              <span v-html=\"button.html\"></span>\r\n            </n-button>\r\n          </div>\r\n          <button-group v-else>\r\n            <n-button\r\n              v-for=\"(button, index) in buttons\"\r\n              :key=\"`button${index}`\"\r\n              :small=\"condensed\"\r\n              :flavor=\"button.flavor\"\r\n              @click=\"select(item, button.value)\"\r\n            >\r\n              <span v-html=\"button.html\"></span>\r\n            </n-button>\r\n          </button-group>\r\n        </table-cell>\r\n      </table-row>\r\n    </table-body>\r\n  </n-table>\r\n</template>\r\n\r\n<script>\r\nimport styled from \"vue-styled-components\";\r\nimport Theme from \"@IntusFacultas/design-system\";\r\nimport { NButton, ButtonGroup } from \"@IntusFacultas/button\";\r\nimport { TextContent } from \"@IntusFacultas/typography\";\r\n\r\nconst props = {\r\n  flavor: String,\r\n  active: Boolean,\r\n  textAlign: {\r\n    type: String,\r\n    default: \"left\",\r\n  },\r\n  striped: Boolean,\r\n  sticky: Boolean,\r\n  zIndex: {\r\n    type: Number,\r\n    default: 10,\r\n  },\r\n  top: {\r\n    type: Number,\r\n    default: 0,\r\n  },\r\n  bordered: Boolean,\r\n  sortable: Boolean,\r\n  hover: Boolean,\r\n  condensed: Boolean,\r\n  defaultTheme: {\r\n    type: Object,\r\n    default: function() {\r\n      return Theme;\r\n    },\r\n  },\r\n};\r\nexport const NTable = styled(\"table\", props)`\r\n  border-collapse: collapse;\r\n  width: 100%;\r\n  max-width: 100%;\r\n  position: relative;\r\n  background-color: ${(props) =>\r\n    props.theme && props.theme[props.flavor]\r\n      ? props.theme[props.flavor].background.color\r\n      : props.defaultTheme[props.flavor]\r\n      ? props.defaultTheme[props.flavor].background.color\r\n      : \"#fff\"};\r\n  ${(props) =>\r\n    props.striped\r\n      ? `\r\n             & > tbody > tr:nth-of-type(2n+1) > td {\r\n                background-color: rgba(0, 0, 0, .1);\r\n            }\r\n        `\r\n      : \"\"}\r\n  & td > span {\r\n    color: ${(props) =>\r\n      props.theme && props.theme[props.flavor]\r\n        ? props.theme[props.flavor].color.color\r\n        : props.defaultTheme[props.flavor]\r\n        ? props.defaultTheme[props.flavor].color.color\r\n        : \"#222\"};\r\n  }\r\n  border-color: ${(props) =>\r\n    props.theme && props.theme[props.flavor]\r\n      ? props.theme[props.flavor].border.color\r\n      : props.defaultTheme[props.flavor]\r\n      ? props.defaultTheme[props.flavor].border.color\r\n      : \"#d9d9d9\"};\r\n`;\r\nexport const TableCarat = styled(\"div\", props)`\r\n  background-image: linear-gradient(\r\n    to top right,\r\n    transparent 50%,\r\n    ${(props) =>\r\n        props.theme && props.theme[props.flavor]\r\n          ? props.theme[props.flavor].color.color\r\n          : props.defaultTheme[props.flavor]\r\n          ? props.defaultTheme[props.flavor].color.color\r\n          : \"#222\"}\r\n      50%\r\n  );\r\n  width: 0.5rem;\r\n  height: 0.5rem;\r\n  transform: rotate(-45deg);\r\n  transition: 0.3s all;\r\n  display: inline-block;\r\n`;\r\nexport const TableHeaders = styled(\"thead\", props)``;\r\nexport const TableBody = styled(\"tbody\", props)``;\r\nexport const TableRow = styled(\"tr\", props)`\r\n  ${(props) =>\r\n    props.hover\r\n      ? `\r\n      &:hover {\r\n        background-color: rgb(0,0,0,0.05);\r\n      }`\r\n      : ``}\r\n`;\r\nexport const TableHeader = styled(\"th\", props)`\r\n    -webkit-touch-callout: none; /* iOS Safari */\r\n    -webkit-user-select: none; /* Safari */\r\n    -khtml-user-select: none; /* Konqueror HTML */\r\n    -moz-user-select: none; /* Old versions of Firefox */\r\n    -ms-user-select: none; /* Internet Explorer/Edge */\r\n    user-select: none;\r\n    text-align: ${(props) => (props.textAlign ? props.textAlign : \"left\")};\r\n    ${(props) => (props.condensed ? `padding: .25rem;` : `padding: .5rem;`)}\r\n    ${(props) => (props.sortable ? `cursor: pointer;` : \"\")}\r\n    ${(props) =>\r\n      props.bordered\r\n        ? `border-width: 1px; border-style: solid;`\r\n        : `border-top-width: 1px; border-top-style: solid`}\r\n        border-bottom-width: 2px;\r\n    border-bottom-style: solid;\r\n    background-color: ${(props) =>\r\n      props.theme && props.theme[props.flavor]\r\n        ? props.theme[props.flavor].background.color\r\n        : props.defaultTheme[props.flavor]\r\n        ? props.defaultTheme[props.flavor].background.color\r\n        : \"#fff\"};\r\n    & span {color: ${(props) =>\r\n      props.theme && props.theme[props.flavor]\r\n        ? props.theme[props.flavor].color.color\r\n        : props.defaultTheme[props.flavor]\r\n        ? props.defaultTheme[props.flavor].color.color\r\n        : \"#222\"};}\r\n    border-color: ${(props) =>\r\n      props.theme && props.theme[props.flavor]\r\n        ? props.theme[props.flavor].border.color\r\n        : props.defaultTheme[props.flavor]\r\n        ? props.defaultTheme[props.flavor].border.color\r\n        : \"#d9d9d9\"};\r\n      ${(props) =>\r\n        props.sticky\r\n          ? `\r\n        position: sticky;\r\n        top: ${props.top}px;\r\n        z-index: ${props.zIndex} \r\n      `\r\n          : ``}\r\n`;\r\nexport const TableCell = styled(\"td\", props)`\r\n    ${(props) => (props.condensed ? `padding: .25rem;` : `padding: .5rem;`)}\r\n    text-align: ${(props) => (props.textAlign ? props.textAlign : \"left\")};\r\n    ${(props) =>\r\n      props.bordered\r\n        ? `border-width: 1px; border-style: solid;`\r\n        : `border-top-width: 1px; border-top-style: solid`}\r\n      border-color: ${(props) =>\r\n        props.theme && props.theme[props.flavor]\r\n          ? props.theme[props.flavor].border.color\r\n          : props.defaultTheme[props.flavor]\r\n          ? props.defaultTheme[props.flavor].border.color\r\n          : \"#d9d9d9\"};\r\n`;\r\n\r\nexport const VueTable = {\r\n  components: {\r\n    NTable,\r\n    TableHeaders,\r\n    TableBody,\r\n    TableRow,\r\n    TableHeader,\r\n    TableCell,\r\n    TableCarat,\r\n    NButton,\r\n    TextContent,\r\n    ButtonGroup,\r\n  },\r\n  data() {\r\n    return {\r\n      internalSort: \"\",\r\n    };\r\n  },\r\n  watch: {\r\n    sort(newVal) {\r\n      if (newVal != this.internalSort) {\r\n        this.internalSort = newVal;\r\n        this.$forceUpdate();\r\n      }\r\n    },\r\n  },\r\n  mounted() {\r\n    this.internalSort = this.sort;\r\n  },\r\n  props: {\r\n    textAlign: {\r\n      type: String,\r\n      default: \"left\",\r\n    },\r\n    headerFlavor: {\r\n      type: String,\r\n      default: \"\",\r\n    },\r\n    sort: {\r\n      type: String,\r\n      default: \"\",\r\n    },\r\n    stickyHeaders: Boolean,\r\n    showLoading: Boolean,\r\n    zIndex: {\r\n      type: Number,\r\n      default: 10,\r\n    },\r\n    top: {\r\n      type: Number,\r\n      default: 0,\r\n    },\r\n    flavor: {\r\n      type: String,\r\n      default: \"\",\r\n    },\r\n    striped: {\r\n      type: Boolean,\r\n      default: false,\r\n    },\r\n    selectable: {\r\n      type: Boolean,\r\n      default: false,\r\n    },\r\n    buttons: {\r\n      type: Array,\r\n      default() {\r\n        return [\r\n          {\r\n            flavor: \"Primary\",\r\n            html: \"Select\",\r\n            value: \"select\",\r\n          },\r\n        ];\r\n      },\r\n    },\r\n    hover: {\r\n      type: Boolean,\r\n      default: false,\r\n    },\r\n    condensed: {\r\n      type: Boolean,\r\n      default: false,\r\n    },\r\n    numbered: {\r\n      type: Boolean,\r\n      default: false,\r\n    },\r\n    bordered: {\r\n      type: Boolean,\r\n      default: false,\r\n    },\r\n    sortable: {\r\n      type: Boolean,\r\n      default: false,\r\n    },\r\n    items: {\r\n      type: Array,\r\n      default() {\r\n        return [];\r\n      },\r\n    },\r\n    tableTitles: {\r\n      type: Array,\r\n      default() {\r\n        return [];\r\n      },\r\n    },\r\n    headers: {\r\n      type: Array,\r\n      default() {\r\n        return [];\r\n      },\r\n    },\r\n  },\r\n  methods: {\r\n    sortBy(header) {\r\n      if (!this.sortable) {\r\n        return false;\r\n      }\r\n      let proposedSort = \"\";\r\n      if (this.internalSort == header) {\r\n        if (this.internalSort.indexOf(\"-\") == -1) {\r\n          proposedSort = \"-\" + this.internalSort;\r\n        } else {\r\n          proposedSort = \"\";\r\n        }\r\n      } else if (this.internalSort == \"\") {\r\n        proposedSort = header;\r\n      } else if (this.internalSort == \"-\" + header) {\r\n        proposedSort = \"\";\r\n      } else {\r\n        proposedSort = header;\r\n      }\r\n      if (this.sort == \"\") {\r\n        this.internalSort = proposedSort;\r\n      }\r\n      this.$emit(\"sort\", proposedSort);\r\n      this.$forceUpdate();\r\n    },\r\n    camelCaseToTitleCase(in_camelCaseString) {\r\n      // pulled from https://stackoverflow.com/questions/7225407/convert-camelcasetext-to-sentence-case-text/7225450\r\n      var result = in_camelCaseString // \"ToGetYourGEDInTimeASongAboutThe26ABCsIsOfTheEssenceButAPersonalIDCardForUser456InRoom26AContainingABC26TimesIsNotAsEasyAs123ForC3POOrR2D2Or2R2D\"\r\n        .replace(/([a-z])([A-Z][a-z])/g, \"$1 $2\") // \"To Get YourGEDIn TimeASong About The26ABCs IsOf The Essence ButAPersonalIDCard For User456In Room26AContainingABC26Times IsNot AsEasy As123ForC3POOrR2D2Or2R2D\"\r\n        .replace(/([A-Z][a-z])([A-Z])/g, \"$1 $2\") // \"To Get YourGEDIn TimeASong About The26ABCs Is Of The Essence ButAPersonalIDCard For User456In Room26AContainingABC26Times Is Not As Easy As123ForC3POOr R2D2Or2R2D\"\r\n        .replace(/([a-z])([A-Z]+[a-z])/g, \"$1 $2\") // \"To Get Your GEDIn Time ASong About The26ABCs Is Of The Essence But APersonal IDCard For User456In Room26AContainingABC26Times Is Not As Easy As123ForC3POOr R2D2Or2R2D\"\r\n        .replace(/([A-Z]+)([A-Z][a-z][a-z])/g, \"$1 $2\") // \"To Get Your GEDIn Time A Song About The26ABCs Is Of The Essence But A Personal ID Card For User456In Room26A ContainingABC26Times Is Not As Easy As123ForC3POOr R2D2Or2R2D\"\r\n        .replace(/([a-z]+)([A-Z0-9]+)/g, \"$1 $2\") // \"To Get Your GEDIn Time A Song About The 26ABCs Is Of The Essence But A Personal ID Card For User 456In Room 26A Containing ABC26Times Is Not As Easy As 123For C3POOr R2D2Or 2R2D\"\r\n\r\n        // Note: the next regex includes a special case to exclude plurals of acronyms, e.g. \"ABCs\"\r\n        .replace(/([A-Z]+)([A-Z][a-rt-z][a-z]*)/g, \"$1 $2\") // \"To Get Your GED In Time A Song About The 26ABCs Is Of The Essence But A Personal ID Card For User 456In Room 26A Containing ABC26Times Is Not As Easy As 123For C3PO Or R2D2Or 2R2D\"\r\n        .replace(/([0-9])([A-Z][a-z]+)/g, \"$1 $2\") // \"To Get Your GED In Time A Song About The 26ABCs Is Of The Essence But A Personal ID Card For User 456In Room 26A Containing ABC 26Times Is Not As Easy As 123For C3PO Or R2D2Or 2R2D\"\r\n\r\n        // Note: the next two regexes use {2,} instead of + to add space on phrases like Room26A and 26ABCs but not on phrases like R2D2 and C3PO\"\r\n        .replace(/([A-Z]{2,})([0-9]{2,})/g, \"$1 $2\") // \"To Get Your GED In Time A Song About The 26ABCs Is Of The Essence But A Personal ID Card For User 456 In Room 26A Containing ABC 26 Times Is Not As Easy As 123 For C3PO Or R2D2 Or 2R2D\"\r\n        .replace(/([0-9]{2,})([A-Z]{2,})/g, \"$1 $2\") // \"To Get Your GED In Time A Song About The 26 ABCs Is Of The Essence But A Personal ID Card For User 456 In Room 26A Containing ABC 26 Times Is Not As Easy As 123 For C3PO Or R2D2 Or 2R2D\"\r\n        .trim();\r\n\r\n      // capitalize the first letter\r\n      return result.charAt(0).toUpperCase() + result.slice(1);\r\n    },\r\n    select(item, value) {\r\n      this.$emit(\"select\", { item, type: value });\r\n    },\r\n    toTitleCase(str) {\r\n      str = this.camelCaseToTitleCase(str);\r\n      str = str.replace(/_/g, \" \");\r\n      return str.replace(/(^|\\s)\\S/g, function(t) {\r\n        return t.toUpperCase();\r\n      });\r\n    },\r\n  },\r\n  computed: {\r\n    computedHeaderHeight() {\r\n      let sizeOfHeader = 41;\r\n      if (this.condensed) {\r\n        sizeOfHeader = 33;\r\n      }\r\n      return sizeOfHeader;\r\n    },\r\n    computedTopOffset() {\r\n      return this.tableTitles.length * this.computedHeaderHeight;\r\n    },\r\n    tableHeaders() {\r\n      if (this.items.length > 0) {\r\n        let keys = Object.keys(this.items[0].data);\r\n        if (this.headers.length != 0) {\r\n          let handledKeys = this.headers.map((x) => x.key);\r\n          let titles = this.headers.map((x) => x.text);\r\n          if (\r\n            handledKeys.length == keys.length &&\r\n            titles.length == handledKeys.length\r\n          ) {\r\n            let valid = true;\r\n            for (let key of handledKeys) {\r\n              if (keys.indexOf(key) == -1) {\r\n                valid = false;\r\n                break;\r\n              }\r\n            }\r\n            if (valid) {\r\n              return this.headers;\r\n            }\r\n          }\r\n        }\r\n        let headers = [];\r\n        for (let key of keys) {\r\n          headers.push({\r\n            text: this.toTitleCase(key),\r\n            key,\r\n          });\r\n        }\r\n        return headers;\r\n      } else if (this.headers.length > 0) {\r\n        return this.headers;\r\n      } else {\r\n        throw new Error(\r\n          \"Table component: no headers defined and no items provided\"\r\n        );\r\n      }\r\n    },\r\n  },\r\n};\r\nexport default VueTable;\r\n</script>\r\n\r\n<style>\r\n.table-not-shown {\r\n  opacity: 0;\r\n  transform: rotate(45deg) !important;\r\n}\r\n.table-hoverable-row:hover {\r\n  background-color: rgba(0, 0, 0, 0.05);\r\n}\r\n\r\n.table-open-carat {\r\n  transform: rotate(135deg) !important;\r\n}\r\n.portion-marking-container {\r\n  display: flex;\r\n  justify-content: space-between;\r\n}\r\n@-moz-keyframes loading-spin {\r\n  to {\r\n    -moz-transform: rotate(-360deg);\r\n  }\r\n}\r\n@-webkit-keyframes loading-spin {\r\n  to {\r\n    -webkit-transform: rotate(-360deg);\r\n  }\r\n}\r\n@keyframes loading-spin {\r\n  to {\r\n    transform: rotate(-360deg);\r\n  }\r\n}\r\n\r\n.loading-spin {\r\n  animation: loading-spin 1000ms linear infinite;\r\n}\r\n</style>\r\n"]}, media: undefined });

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

var components = [{
  label: "NTable",
  component: NTable
}, {
  label: "TableCarat",
  component: TableCarat
}, {
  label: "TableHeaders",
  component: TableHeaders
}, {
  label: "TableBody",
  component: TableBody
}, {
  label: "TableRow",
  component: TableRow
}, {
  label: "TableHeader",
  component: TableHeader
}, {
  label: "TableCell",
  component: TableCell
}, {
  label: "VueTable",
  component: VueTable
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

export default VueTable;
export { NTable, TableBody, TableCarat, TableCell, TableHeader, TableHeaders, TableRow, VueTable };
//# sourceMappingURL=Table.esm.js.map
