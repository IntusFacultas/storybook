import { NInput } from '@IntusFacultas/input';
import { NButton } from '@IntusFacultas/button';
import axios from 'axios';

//
var SelectMe = {
  name: "select-me",
  components: {
    NInput: NInput,
    NButton: NButton
  },
  data: function data() {
    return {
      loading: false,
      timeout: "",
      optionSearch: "",
      initialized: false,
      errored: false,
      showOptions: false,
      ajaxTimeout: null,
      showSelected: false,
      selectBoxWidth: 0,
      calculatedWidth: 0,
      calculatedHeight: 0,
      calculatedPadding: 0,
      selectedOptions: [],
      hoveredOption: {},
      loadedOptions: [],
      hoveredSelectedOption: {},
      combinedPaddingPerBadge: 26,
      hoveredIndex: -1,
      hoveredSelectedIndex: -1
    };
  },
  watch: {
    options: {
      handler: function handler() {
        if (this.selectedOptions.length == 0 && !this.canBeEmpty && this.options.length != 0) {
          this.selectOption(this.options[0]);
        }
      },
      deep: true
    },
    value: function value(newValue) {
      this.selectedOptions = newValue;
      window.requestAnimationFrame(this.setSelectBoxWidth);
      this.setCalculatedPadding();
    }
  },
  props: {
    value: {
      type: Array,
      default: function _default() {
        return [];
      }
    },
    name: {
      type: String,
      required: true
    },
    loadAjax: {
      type: Boolean,
      default: false
    },
    endpoint: {
      type: String,
      default: ""
    },
    badgeFlavor: {
      type: String,
      default: "Primary"
    },
    flavor: {
      type: String,
      default: "LightBlue"
    },
    displayAttribute: {
      type: String,
      default: "text"
    },
    valueAttribute: {
      type: String,
      default: "value"
    },
    canBeEmpty: {
      type: Boolean,
      default: true
    },
    disabled: {
      type: Boolean,
      default: false
    },
    options: {
      type: Array,
      default: function _default() {
        return [];
      }
    },
    debug: {
      type: Boolean,
      default: false
    },
    multiSelect: {
      type: Boolean,
      default: false
    },
    initialValues: {
      type: Array,
      default: function _default() {
        return [];
      }
    }
  },
  computed: {
    computedSpanClass: function computedSpanClass() {
      var self = this;
      if (!self.multiSelect) return ["selectme-badge-single-span"];
      return [];
    },
    computedCutOff: function computedCutOff() {
      var self = this;
      return self.calculatedWidth - 100;
    },
    showDropdown: function showDropdown() {
      var self = this;
      return self.showOptions || self.debug;
    },
    selectOptions: function selectOptions() {
      function textContains(n) {
        return n[self.displayAttribute].toUpperCase().indexOf(self.optionSearch.toUpperCase()) > -1;
      }

      var self = this;
      var options = self.options;

      function filter(fn, array) {
        var rtArray = [];

        for (var x = 0; x < array.length; x++) {
          if (fn(array[x])) {
            rtArray.push(array[x]);
          }
        }

        return rtArray;
      }

      if (self.optionSearch && !self.loadAjax) {
        options = filter(textContains, options);
      }

      if (self.loadAjax) {
        return self.loadedOptions;
      }

      return options;
    }
  },
  methods: {
    deselectDropdownOption: function deselectDropdownOption(option) {
      var self = this;
      self.deselectOption(option, false);
      window.requestAnimationFrame(self.setSelectBoxWidth);
    },
    handleOffClick: function handleOffClick(event) {
      var self = this;

      if (!event.target.attributes["data-dropdown"]) {
        self.showSelected = false;
      }
    },
    toggleSelectedDropdown: function toggleSelectedDropdown() {
      var self = this;
      self.showSelected = !self.showSelected;
    },
    selectHoveredOption: function selectHoveredOption() {
      var self = this;

      if (self.showOptions) {
        if (Object.keys(self.hoveredOption).length > 0) {
          if (!self.contains(self.hoveredOption, self.selectedOptions)) {
            if (!self.multiSelect) self.selectedOptions = [];
            self.selectedOptions.push(Object.assign({}, self.hoveredOption));
          } else {
            self.deselectOption(self.hoveredOption, false);
          }

          self.$emit("input", self.selectedOptions);
          self.hoveredOption = {};
          self.hoveredIndex = -1;
          window.requestAnimationFrame(self.setSelectBoxWidth);
          self.setCalculatedPadding();

          if (self.multiSelect) {
            self.$el.firstChild.focus();
          } else {
            self.closeDropdown();
          }
        }
      } else if (self.showSelected) {
        self.deselectOption(self.hoveredSelectedOption);
        self.$emit("input", self.selectedOptions);
        self.hoveredSelectedOption = {};
        self.showSelected = false;
        setTimeout(function () {
          self.hoveredIndex = -1;
          window.requestAnimationFrame(self.setSelectBoxWidth);
          self.setCalculatedPadding();
          self.$el.firstChild.focus();
        }, 550);
      }
    },
    hoverElement: function hoverElement() {
      var self = this;
      clearTimeout(self.timeout);
      self.hoveredOption = self.selectOptions.filter(function (option) {
        return option[self.valueAttribute] == document.activeElement.getAttribute("value");
      })[0];
      self.hoveredIndex = self.selectOptions.map(function (option) {
        return option[self.valueAttribute];
      }).indexOf(self.hoveredOption[self.valueAttribute]);
    },
    hoverOption: function hoverOption(step) {
      var self = this;
      var proposedIndex = self.hoveredIndex + step;
      self.openDropdown();

      if (proposedIndex >= self.selectOptions.length) {
        self.hoveredIndex = 0;
        self.hoveredOption = self.selectOptions[self.hoveredIndex];
      } else if (proposedIndex < -1) {
        return;
      } else if (proposedIndex == -1) {
        self.hoveredIndex = proposedIndex;
        self.$el.firstChild.focus();
        self.closeDropdown();
        self.hoveredOption = {};
      } else {
        self.hoveredIndex = proposedIndex;
        self.hoveredOption = self.selectOptions[self.hoveredIndex];
        self.$forceUpdate();
      }
    },
    hoverSelectedOption: function hoverSelectedOption(step) {
      var self = this;
      var proposedIndex = self.hoveredIndex + step;
      self.showSelected = true;

      if (proposedIndex >= self.selectedOptions.length || proposedIndex < -1) {
        return;
      } else if (proposedIndex == -1) {
        self.hoveredIndex = proposedIndex;
        self.$el.firstChild.focus();
        self.showSelected = false;
        self.hoveredSelectedOption = {};
      } else {
        self.hoveredIndex = proposedIndex;
        self.hoveredSelectedOption = self.selectedOptions[self.hoveredIndex];
        self.$forceUpdate();
      }
    },
    contains: function contains(option, options) {
      var self = this;

      for (var x = 0; x < options.length; x++) {
        var textMatches = option[self.displayAttribute] == options[x][self.displayAttribute];
        var valueMatches = option[self.valueAttribute] == options[x][self.valueAttribute];
        if (textMatches && valueMatches) return true;
      }

      return false;
    },
    isHovered: function isHovered(option, hoverOption) {
      var self = this;
      var textMatches = option[self.displayAttribute] == hoverOption[self.displayAttribute];
      var valueMatches = option[self.valueAttribute] == hoverOption[self.valueAttribute];
      return textMatches && valueMatches;
    },
    handleUp: function handleUp() {
      var self = this;

      if (self.showSelected) {
        self.hoverSelectedOption(-1);
      } else if (self.showOptions) {
        self.hoverOption(-1);
      } else {
        self.hoverOption(-1);
      }
    },
    handleDown: function handleDown() {
      var self = this;

      if (self.showSelected) {
        self.hoverSelectedOption(1);
      } else if (self.showOptions) {
        self.hoverOption(1);
      } else {
        self.hoverOption(1);
      }
    },
    handleLeft: function handleLeft() {
      var self = this;

      if (self.optionSearch.length == 0 && self.selectedOptions.length > 0 && self.selectBoxWidth > self.computedCutOff & !self.showSelected) {
        self.closeDropdown();
        self.showSelected = true;
      }
    },
    handleRight: function handleRight() {
      var self = this;

      if (self.showSelected) {
        self.showSelected = false;
        self.hoveredSelectedOption = {};
        self.$el.firstChild.focus();
      }
    },
    handleBackspace: function handleBackspace() {
      var self = this;

      if (self.optionSearch.length == 0 && self.selectedOptions.length > 0 && self.selectBoxWidth <= self.computedCutOff) {
        var el = self.selectedOptions.pop();
        self.$emit("input", self.selectedOptions);
        window.requestAnimationFrame(self.setSelectBoxWidth);
        self.setCalculatedPadding();
        self.optionSearch = el[self.displayAttribute];
      }
    },
    contained: function contained(option) {
      var self = this;
      return self.contains(option, self.selectedOptions);
    },
    debounce: function debounce(func, wait, immediate) {
      var self = this; // pulled from https://davidwalsh.name/javascript-debounce-function

      return function () {
        var context = this,
            args = arguments;

        var later = function later() {
          self.ajaxTimeout = null;
          if (!immediate) func.apply(context, args);
        };

        var callNow = immediate && !self.ajaxTimeout;
        clearTimeout(self.ajaxTimeout);
        self.ajaxTimeout = setTimeout(later, wait);
        if (callNow) func.apply(context, args);
      };
    },
    fireAjax: function fireAjax() {
      var self = this;

      if (self.loadAjax && self.optionSearch) {
        self.loading = true;
        axios.get(self.endpoint, {
          params: {
            text: self.optionSearch
          }
        }).then(function (response) {
          self.initialized = true;
          self.loading = false;
          self.loadedOptions = response.data;
        }).catch(function (response) {
          self.loading = false;
          self.errored = true;
          console.error("SelectMe had a bad response from the server.");
          console.error("Response status code: ", response.status);
          console.error("Response object following:");
          console.error(response);
        });
      } else if (self.loadAjax) {
        self.loadedOptions = [];
        self.initialized = false; // this is to force the component to show "please type chars" again
      }
    },
    selectOption: function selectOption(option) {
      var self = this;

      if (!self.contains(option, self.selectedOptions)) {
        if (!self.multiSelect) {
          self.selectedOptions = [];
        }

        self.selectedOptions.push(option);
      } else {
        self.deselectOption(option, !self.multiSelect);
      }

      if (!self.loadAjax) {
        self.optionSearch = "";
      }

      if (!self.multiSelect) {
        self.closeDropdown();
      }

      self.$emit("input", self.selectedOptions);
      window.requestAnimationFrame(self.setSelectBoxWidth);
      self.setCalculatedPadding();
    },
    deselectOption: function deselectOption(option, closeDropdown) {
      var self = this;

      if (!self.canBeEmpty && self.selectedOptions.length == 1) {
        return;
      }

      function findIndex(option, options) {
        for (var x = 0; x < options.length; x++) {
          if (option[self.valueAttribute] == options[x][self.valueAttribute]) {
            return x;
          }
        }

        return -1;
      }

      var index = findIndex(option, self.selectedOptions);
      self.selectedOptions.splice(index, 1);
      self.$forceUpdate();

      if (typeof closeDropdown === "undefined" || closeDropdown) {
        self.closeDropdown();
      }

      self.$emit("input", self.selectedOptions);
      window.requestAnimationFrame(self.setSelectBoxWidth);
      self.setCalculatedPadding();
    },
    closeDropdown: function closeDropdown() {
      var self = this;
      self.hoveredIndex = -1;
      self.timeout = setTimeout(function () {
        self.showOptions = false;
      }, 200);
    },
    openDropdown: function openDropdown() {
      var self = this;
      self.$emit("focus");
      clearTimeout(self.timeout);

      if (self.disabled) {
        return false;
      }

      self.hoveredIndex = -1;
      self.setCalculatedWidth();
      self.showSelected = false;
      self.showOptions = true;
    },
    setSelectBoxWidth: function setSelectBoxWidth() {
      var self = this;
      if (self.$refs.selectBox) self.selectBoxWidth = self.$refs.selectBox.clientWidth + 5;
      window.requestAnimationFrame(self.setSelectBoxWidth);
    },
    setCalculatedPadding: function setCalculatedPadding() {
      var self = this;

      if (self.selectBoxWidth > self.computedCutOff) {
        self.calculatedPadding = self.$refs.selectDropdownBox.clientWidth + 10;
      } else {
        self.calculatedPadding = self.selectBoxWidth;
      }

      window.requestAnimationFrame(self.setCalculatedPadding);
    },
    setCalculatedWidth: function setCalculatedWidth() {
      var self = this;
      setTimeout(function () {
        try {
          self.calculatedHeight = self.$el.firstChild.offsetHeight * -1 + 5;

          if (!self.multiSelect) {
            self.calculatedHeight -= 4;
          }

          self.calculatedWidth = self.$el.firstChild.offsetWidth;
          window.requestAnimationFrame(self.setSelectBoxWidth);
          self.setCalculatedPadding();
        } catch (err) {// pass
        }
      }, 50);
    }
  },
  mounted: function mounted() {
    var self = this;
    window.requestAnimationFrame(self.setCalculatedPadding);
    window.addEventListener("resize", self.setCalculatedWidth);
    window.addEventListener("click", self.handleOffClick);
    self.setCalculatedWidth();
    setTimeout(function () {
      self.setCalculatedWidth();
    }, 200);

    for (var x = 0; x < self.value.length; x++) {
      var initVal = self.value[x];

      for (var y = 0; y < self.options.length; y++) {
        if (self.options[y][self.valueAttribute] == initVal[self.valueAttribute]) {
          self.selectedOptions.push(Object.assign({}, self.options[y]));
          break;
        }
      }
    }

    if (!self.canBeEmpty && self.options.length > 0 && self.value.length == 0 && !self.loadAjax) {
      self.selectOption(self.options[0]);
    }
  },
  beforeDestroy: function beforeDestroy() {
    window.removeEventListener("resize", self.setCalculatedWidth);
    window.removeEventListener("click", self.handleOffClick);
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
const __vue_script__ = SelectMe;

/* template */
var __vue_render__ = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c(
    "div",
    { staticClass: "selectme-container" },
    [
      _c("n-input", {
        style: { "padding-left": _vm.calculatedPadding + "px" },
        attrs: {
          id: _vm.name,
          autocomplete: "off",
          type: "text",
          placeholder: "Search...",
          flavor: _vm.flavor,
          disabled: _vm.disabled
        },
        on: {
          click: _vm.openDropdown,
          focus: _vm.openDropdown,
          input: function($event) {
            _vm.openDropdown();
            _vm.debounce(_vm.fireAjax, 200)();
          },
          blur: _vm.closeDropdown,
          keydown: [
            function($event) {
              if (
                !$event.type.indexOf("key") &&
                _vm._k($event.keyCode, "delete", [8, 46], $event.key, [
                  "Backspace",
                  "Delete",
                  "Del"
                ])
              ) {
                return null
              }
              return _vm.handleBackspace($event)
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
              return _vm.handleDown($event)
            },
            function($event) {
              if (
                !$event.type.indexOf("key") &&
                _vm._k($event.keyCode, "up", 38, $event.key, ["Up", "ArrowUp"])
              ) {
                return null
              }
              return _vm.handleUp($event)
            },
            function($event) {
              if (
                !$event.type.indexOf("key") &&
                _vm._k($event.keyCode, "left", 37, $event.key, [
                  "Left",
                  "ArrowLeft"
                ])
              ) {
                return null
              }
              if ("button" in $event && $event.button !== 0) {
                return null
              }
              return _vm.handleLeft($event)
            },
            function($event) {
              if (
                !$event.type.indexOf("key") &&
                _vm._k($event.keyCode, "right", 39, $event.key, [
                  "Right",
                  "ArrowRight"
                ])
              ) {
                return null
              }
              if ("button" in $event && $event.button !== 2) {
                return null
              }
              return _vm.handleRight($event)
            }
          ],
          keyup: function($event) {
            if (
              !$event.type.indexOf("key") &&
              _vm._k($event.keyCode, "enter", 13, $event.key, "Enter")
            ) {
              return null
            }
            return _vm.selectHoveredOption($event)
          }
        },
        model: {
          value: _vm.optionSearch,
          callback: function($$v) {
            _vm.optionSearch = $$v;
          },
          expression: "optionSearch"
        }
      }),
      _vm._v(" "),
      _vm.showDropdown
        ? _c(
            "div",
            {
              staticClass: "selectme-dropdown",
              style: { width: _vm.calculatedWidth + "px" }
            },
            [
              _c(
                "ul",
                [
                  _vm._l(_vm.selectOptions, function(option, index) {
                    return _c(
                      "li",
                      {
                        key:
                          "dropdown-" +
                          option[_vm.valueAttribute] +
                          "-" +
                          index,
                        ref: "hover" + option[_vm.valueAttribute],
                        refInFor: true,
                        class: {
                          "selectme-selected": _vm.contained(option),
                          "selectme-hovered": _vm.isHovered(
                            option,
                            _vm.hoveredOption
                          )
                        },
                        attrs: {
                          tabindex: "0",
                          role: "button",
                          value: option[_vm.valueAttribute]
                        },
                        on: {
                          focus: function($event) {
                            return _vm.hoverElement()
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
                              return _vm.selectHoveredOption($event)
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
                              return _vm.selectHoveredOption($event)
                            }
                          ],
                          keydown: [
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
                              return _vm.hoverOption(1)
                            },
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
                              return _vm.hoverOption(-1)
                            }
                          ],
                          blur: _vm.closeDropdown,
                          click: function($event) {
                            return _vm.selectOption(option)
                          }
                        }
                      },
                      [
                        _vm.contained(option)
                          ? _c("span", { staticClass: "sr-only" }, [
                              _vm._v("Active:")
                            ])
                          : _c("span", { staticClass: "sr-only" }, [
                              _vm._v("Press enter or space to select:")
                            ]),
                        _vm._v(
                          "\n        " +
                            _vm._s(option[_vm.displayAttribute]) +
                            "\n      "
                        )
                      ]
                    )
                  }),
                  _vm._v(" "),
                  _vm.loadAjax && _vm.loading
                    ? _c("li", [_vm._v("Loading...")])
                    : _vm._e(),
                  _vm._v(" "),
                  _vm.loadAjax &&
                  !_vm.initialized &&
                  !_vm.errored &&
                  !_vm.loading
                    ? _c("li", [_vm._v("Please enter 1 or more characters")])
                    : _vm._e(),
                  _vm._v(" "),
                  _vm.errored
                    ? _c("li", [
                        _vm._v("There was an issue contacting the server.")
                      ])
                    : _vm._e(),
                  _vm._v(" "),
                  (_vm.loadAjax &&
                    !_vm.errored &&
                    _vm.initialized &&
                    !_vm.loading &&
                    _vm.loadedOptions.length == 0) ||
                  (!_vm.loadAjax && _vm.selectOptions.length == 0)
                    ? _c("li", [_vm._v("No results found")])
                    : _vm._e()
                ],
                2
              )
            ]
          )
        : _vm._e(),
      _vm._v(" "),
      _c(
        "div",
        {
          directives: [
            {
              name: "show",
              rawName: "v-show",
              value:
                _vm.selectBoxWidth > _vm.computedCutOff &&
                _vm.selectedOptions.length > 0 &&
                _vm.canBeEmpty &&
                _vm.multiSelect,
              expression:
                "\n      selectBoxWidth > computedCutOff &&\n        selectedOptions.length > 0 &&\n        canBeEmpty &&\n        multiSelect\n    "
            }
          ],
          ref: "selectDropdownBox",
          staticClass: "selectme-selected",
          style: {
            top: _vm.multiSelect
              ? _vm.calculatedHeight + "px"
              : _vm.calculatedHeight + 4 + "px"
          },
          attrs: { "data-dropdown": "parent" }
        },
        [
          _c(
            "n-button",
            {
              staticClass: "selectme-button selectme-badge",
              attrs: { flavor: _vm.badgeFlavor, "data-dropdown": "toggle" },
              on: { click: _vm.toggleSelectedDropdown }
            },
            [
              _vm._v(
                "\n      " +
                  _vm._s(_vm.selectedOptions.length) +
                  " selected...\n      "
              ),
              !_vm.showSelected
                ? _c("span", { staticClass: "select-me-ignore-me" }, [
                    _vm._v("▾")
                  ])
                : _c("span", { staticClass: "select-me-ignore-me" }, [
                    _vm._v("▴")
                  ])
            ]
          ),
          _vm._v(" "),
          _c(
            "div",
            {
              directives: [
                {
                  name: "show",
                  rawName: "v-show",
                  value: _vm.showSelected,
                  expression: "showSelected"
                }
              ],
              staticClass: "selectme-dropdown"
            },
            [
              _c(
                "ul",
                _vm._l(_vm.selectedOptions, function(option, index) {
                  return _c(
                    "li",
                    {
                      key:
                        "selected-" + option[_vm.valueAttribute] + "-" + index,
                      ref: "selected" + option[_vm.valueAttribute],
                      refInFor: true,
                      class: {
                        "selectme-hovered": _vm.isHovered(
                          option,
                          _vm.hoveredSelectedOption
                        )
                      },
                      attrs: {
                        tabindex: "0",
                        role: "button",
                        "data-dropdown": "child"
                      },
                      on: {
                        keyup: [
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
                            return _vm.deselectDropdownOption(option)
                          },
                          function($event) {
                            if (
                              !$event.type.indexOf("key") &&
                              _vm._k($event.keyCode, "space", 32, $event.key, [
                                " ",
                                "Spacebar"
                              ])
                            ) {
                              return null
                            }
                            return _vm.deselectDropdownOption(option)
                          }
                        ],
                        click: function($event) {
                          return _vm.deselectDropdownOption(option)
                        }
                      }
                    },
                    [
                      _c("span", [_vm._v("×")]),
                      _vm._v(" "),
                      _c("span", { staticClass: "sr-only" }, [
                        _vm._v("Press enter or space to deselect")
                      ]),
                      _vm._v(
                        "\n          " +
                          _vm._s(option[_vm.displayAttribute]) +
                          "\n        "
                      )
                    ]
                  )
                }),
                0
              )
            ]
          )
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "div",
        {
          ref: "selectBox",
          staticClass: "selectme-selected",
          class: {
            "hidden-inline":
              _vm.selectBoxWidth > _vm.computedCutOff &&
              _vm.canBeEmpty &&
              _vm.multiSelect
          },
          style: { top: _vm.calculatedHeight + "px" }
        },
        _vm._l(_vm.selectedOptions, function(option, index) {
          return _c(
            "n-button",
            {
              key: "selected-badge-" + option[_vm.valueAttribute] + "-" + index,
              staticClass: "selectme-button selectme-badge",
              class: { "selectme-single-select-badge": !_vm.multiSelect },
              attrs: { flavor: _vm.badgeFlavor },
              on: {
                click: function($event) {
                  return _vm.deselectOption(option)
                }
              }
            },
            [
              _c("span", { staticClass: "sr-only" }, [
                _vm._v("Press enter or space to deselect")
              ]),
              _vm._v(
                "\n      " + _vm._s(option[_vm.displayAttribute]) + "\n      "
              ),
              _vm.canBeEmpty ||
              (!_vm.canBeEmpty && _vm.selectedOptions.length > 1)
                ? _c(
                    "span",
                    {
                      staticClass: "select-me-ignore-me",
                      class: _vm.computedSpanClass
                    },
                    [_vm._v("×")]
                  )
                : _vm._e()
            ]
          )
        }),
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
    inject("data-v-11a3dea6_0", { source: "\n.select-me-ignore-me[data-v-11a3dea6] {\r\n  pointer-events: none;\n}\n.selectme-button[data-v-11a3dea6] {\r\n  height: 30px;\r\n  margin-top: -2px;\n}\n.selectme-single-select-badge[data-v-11a3dea6] {\r\n  margin-top: 1px;\n}\n.hidden-inline[data-v-11a3dea6] {\r\n  opacity: 0;\r\n  pointer-events: none;\n}\n.selectme-badge[data-v-11a3dea6] {\r\n  display: inline-block;\r\n  padding: 0.25em 0.4em;\r\n  font-weight: 700;\r\n  line-height: 1;\r\n  text-align: center;\r\n  white-space: nowrap;\r\n  vertical-align: baseline;\r\n  border-radius: 0.25rem;\r\n  font-weight: 700 !important;\r\n  font-size: 16px !important;\r\n  font-family: \"Segoe UI\" !important;\n}\n.selectme-container[data-v-11a3dea6] {\r\n  height: 45px;\n}\n.selectme-container *[data-v-11a3dea6] {\r\n  font-family: \"Roboto\", sans-serif;\n}\n.sr-only[data-v-11a3dea6] {\r\n  position: absolute;\r\n  width: 1px;\r\n  height: 1px;\r\n  padding: 0;\r\n  margin: -1px;\r\n  overflow: hidden;\r\n  clip: rect(0, 0, 0, 0);\r\n  border: 0;\n}\n.selectme-dropdown[data-v-11a3dea6] {\r\n  position: absolute;\r\n  z-index: 2;\r\n  background-color: white;\r\n  padding: 5px;\r\n  border: 1px solid rgba(0, 0, 0, 0.15);\r\n  border-radius: 0 0 5px 5px;\r\n  box-shadow: 0px 4px 7px -3px #dadada;\r\n  min-width: 200px;\r\n  max-height: 300px;\r\n  overflow-y: auto;\n}\n.selectme-badge-single-span[data-v-11a3dea6] {\r\n  float: left;\r\n  padding-right: 8px;\n}\n.selectme-badge-transparent[data-v-11a3dea6] {\r\n  color: black;\r\n  font-size: 16px !important;\r\n  background-color: transparent !important;\n}\n.selectme-selected[data-v-11a3dea6] {\r\n  position: relative;\r\n  display: inline-block;\r\n  margin-left: 5px;\n}\n.selectme-selected > button[data-v-11a3dea6] {\r\n  cursor: pointer;\r\n  padding: 7px;\r\n  margin-right: 2px;\n}\n.selectme-dropdown > ul[data-v-11a3dea6] {\r\n  list-style: none;\r\n  padding-left: 0px;\r\n  margin-left: 0px;\r\n  margin-bottom: 0px;\n}\n.selectme-dropdown > ul > li[data-v-11a3dea6] {\r\n  padding: 2px 10px 2px 10px;\r\n  cursor: pointer;\r\n  width: 100%;\r\n  box-sizing: border-box;\r\n  margin-left: 0px;\r\n  font-size: 16px;\r\n  max-height: 200px;\r\n  margin-bottom: -2px;\r\n  overflow-y: auto;\n}\n.selectme-dropdown > ul > li.selectme-selected[data-v-11a3dea6] {\r\n  background-color: #007bff;\r\n  color: white;\n}\n.selectme-dropdown > ul > li.selectme-hovered[data-v-11a3dea6] {\r\n  background-color: #eeeeee;\n}\n.selectme-dropdown > ul > li.selectme-selected.selectme-hovered[data-v-11a3dea6] {\r\n  background-color: #0069d9;\r\n  color: white;\n}\n.selectme-dropdown > ul > li[data-v-11a3dea6]:hover {\r\n  background-color: #eeeeee;\n}\n.selectme-dropdown > ul > li.selectme-selected[data-v-11a3dea6]:hover {\r\n  background-color: #0069d9;\r\n  color: white;\n}\n@keyframes SelectMeLoadingSpinner-data-v-11a3dea6 {\nfrom {\r\n    -webkit-transform: rotate(0deg);\r\n    transform: rotate(0deg);\n}\nto {\r\n    -webkit-transform: rotate(359deg);\r\n    transform: rotate(359deg);\n}\n}\n.selectme-loading-spinner[data-v-11a3dea6] {\r\n  -webkit-animation: SelectMeLoadingSpinner-data-v-11a3dea6 0.5s infinite steps(8); /* Safari, Chrome and Opera > 12.1 */\r\n  -moz-animation: SelectMeLoadingSpinner-data-v-11a3dea6 0.5s infinite steps(8); /* Firefox < 16 */\r\n  -ms-animation: SelectMeLoadingSpinner-data-v-11a3dea6 0.5s infinite steps(8); /* Internet Explorer */\r\n  -o-animation: SelectMeLoadingSpinner-data-v-11a3dea6 0.5s infinite steps(8); /* Opera < 12.1 */\r\n  animation: SelectMeLoadingSpinner-data-v-11a3dea6 0.5s infinite steps(8);\n}\r\n", map: {"version":3,"sources":["C:\\Users\\pedro\\Documents\\Personal Projects\\GitHub\\storybook\\src\\components\\SelectMe\\src\\SelectMe.vue"],"names":[],"mappings":";AA6oBA;EACA,oBAAA;AACA;AACA;EACA,YAAA;EACA,gBAAA;AACA;AACA;EACA,eAAA;AACA;AACA;EACA,UAAA;EACA,oBAAA;AACA;AACA;EACA,qBAAA;EACA,qBAAA;EACA,gBAAA;EACA,cAAA;EACA,kBAAA;EACA,mBAAA;EACA,wBAAA;EACA,sBAAA;EACA,2BAAA;EACA,0BAAA;EACA,kCAAA;AACA;AACA;EACA,YAAA;AACA;AACA;EACA,iCAAA;AACA;AAEA;EACA,kBAAA;EACA,UAAA;EACA,WAAA;EACA,UAAA;EACA,YAAA;EACA,gBAAA;EACA,sBAAA;EACA,SAAA;AACA;AACA;EACA,kBAAA;EACA,UAAA;EACA,uBAAA;EACA,YAAA;EACA,qCAAA;EACA,0BAAA;EACA,oCAAA;EACA,gBAAA;EACA,iBAAA;EACA,gBAAA;AACA;AACA;EACA,WAAA;EACA,kBAAA;AACA;AACA;EACA,YAAA;EACA,0BAAA;EACA,wCAAA;AACA;AACA;EACA,kBAAA;EACA,qBAAA;EACA,gBAAA;AACA;AACA;EACA,eAAA;EACA,YAAA;EACA,iBAAA;AACA;AACA;EACA,gBAAA;EACA,iBAAA;EACA,gBAAA;EACA,kBAAA;AACA;AACA;EACA,0BAAA;EACA,eAAA;EACA,WAAA;EACA,sBAAA;EACA,gBAAA;EACA,eAAA;EACA,iBAAA;EACA,mBAAA;EACA,gBAAA;AACA;AACA;EACA,yBAAA;EACA,YAAA;AACA;AACA;EACA,yBAAA;AACA;AACA;EACA,yBAAA;EACA,YAAA;AACA;AACA;EACA,yBAAA;AACA;AACA;EACA,yBAAA;EACA,YAAA;AACA;AACA;AACA;IACA,+BAAA;IACA,uBAAA;AACA;AACA;IACA,iCAAA;IACA,yBAAA;AACA;AACA;AACA;EACA,gFAAA,EAAA,oCAAA;EACA,6EAAA,EAAA,iBAAA;EACA,4EAAA,EAAA,sBAAA;EACA,2EAAA,EAAA,iBAAA;EACA,wEAAA;AACA","file":"SelectMe.vue","sourcesContent":["<template>\r\n  <div class=\"selectme-container\">\r\n    <n-input\r\n      :id=\"name\"\r\n      autocomplete=\"off\"\r\n      type=\"text\"\r\n      placeholder=\"Search...\"\r\n      @click=\"openDropdown\"\r\n      @focus=\"openDropdown\"\r\n      @input=\"\r\n        openDropdown();\r\n        debounce(fireAjax, 200)();\r\n      \"\r\n      @blur=\"closeDropdown\"\r\n      :flavor=\"flavor\"\r\n      v-model=\"optionSearch\"\r\n      @keydown.delete=\"handleBackspace\"\r\n      @keydown.down=\"handleDown\"\r\n      @keydown.up=\"handleUp\"\r\n      @keydown.left=\"handleLeft\"\r\n      @keydown.right=\"handleRight\"\r\n      @keyup.enter=\"selectHoveredOption\"\r\n      :style=\"{ 'padding-left': calculatedPadding + 'px' }\"\r\n      :disabled=\"disabled\"\r\n    ></n-input>\r\n    <!-- Dropdown for all options -->\r\n    <div v-if=\"showDropdown\" class=\"selectme-dropdown\" :style=\"{ width: calculatedWidth + 'px' }\">\r\n      <ul>\r\n        <li\r\n          v-for=\"(option, index) in selectOptions\"\r\n          tabindex=\"0\"\r\n          role=\"button\"\r\n          :key=\"'dropdown-' + option[valueAttribute] + '-' + index\"\r\n          :value=\"option[valueAttribute]\"\r\n          :ref=\"'hover' + option[valueAttribute]\"\r\n          @focus=\"hoverElement()\"\r\n          @keyup.space=\"selectHoveredOption\"\r\n          @keydown.down=\"hoverOption(1)\"\r\n          @keydown.up=\"hoverOption(-1)\"\r\n          @blur=\"closeDropdown\"\r\n          @keyup.enter=\"selectHoveredOption\"\r\n          @click=\"selectOption(option)\"\r\n          :class=\"{\r\n            'selectme-selected': contained(option),\r\n            'selectme-hovered': isHovered(option, hoveredOption),\r\n          }\"\r\n        >\r\n          <span class=\"sr-only\" v-if=\"contained(option)\">Active:</span>\r\n          <span class=\"sr-only\" v-else>Press enter or space to select:</span>\r\n          {{ option[displayAttribute] }}\r\n        </li>\r\n        <li v-if=\"loadAjax && loading\">Loading...</li>\r\n        <li\r\n          v-if=\"loadAjax && !initialized && !errored && !loading\"\r\n        >Please enter 1 or more characters</li>\r\n        <li v-if=\"errored\">There was an issue contacting the server.</li>\r\n        <li\r\n          v-if=\"\r\n            (loadAjax &&\r\n              !errored &&\r\n              initialized &&\r\n              !loading &&\r\n              loadedOptions.length == 0) ||\r\n              (!loadAjax && selectOptions.length == 0)\r\n          \"\r\n        >No results found</li>\r\n      </ul>\r\n    </div>\r\n    <!-- Dropdown for selected values. Only shows when selected overflow input-->\r\n    <div\r\n      class=\"selectme-selected\"\r\n      :style=\"{\r\n        top: multiSelect\r\n          ? `${calculatedHeight}px`\r\n          : `${calculatedHeight + 4}px`,\r\n      }\"\r\n      v-show=\"\r\n        selectBoxWidth > computedCutOff &&\r\n          selectedOptions.length > 0 &&\r\n          canBeEmpty &&\r\n          multiSelect\r\n      \"\r\n      ref=\"selectDropdownBox\"\r\n      data-dropdown=\"parent\"\r\n    >\r\n      <n-button\r\n        @click=\"toggleSelectedDropdown\"\r\n        class=\"selectme-button selectme-badge\"\r\n        :flavor=\"badgeFlavor\"\r\n        data-dropdown=\"toggle\"\r\n      >\r\n        {{ selectedOptions.length }} selected...\r\n        <span\r\n          class=\"select-me-ignore-me\"\r\n          v-if=\"!showSelected\"\r\n        >&#x25BE;</span>\r\n        <span class=\"select-me-ignore-me\" v-else>&#x25B4;</span>\r\n      </n-button>\r\n      <div class=\"selectme-dropdown\" v-show=\"showSelected\">\r\n        <ul>\r\n          <li\r\n            tabindex=\"0\"\r\n            v-for=\"(option, index) in selectedOptions\"\r\n            :key=\"'selected-' + option[valueAttribute] + '-' + index\"\r\n            role=\"button\"\r\n            data-dropdown=\"child\"\r\n            @keyup.enter=\"deselectDropdownOption(option)\"\r\n            @keyup.space=\"deselectDropdownOption(option)\"\r\n            :ref=\"'selected' + option[valueAttribute]\"\r\n            :class=\"{\r\n              'selectme-hovered': isHovered(option, hoveredSelectedOption),\r\n            }\"\r\n            @click=\"deselectDropdownOption(option)\"\r\n          >\r\n            <span>&#215;</span>\r\n            <span class=\"sr-only\">Press enter or space to deselect</span>\r\n            {{ option[displayAttribute] }}\r\n          </li>\r\n        </ul>\r\n      </div>\r\n    </div>\r\n    <!-- Inline selected options -->\r\n    <div\r\n      class=\"selectme-selected\"\r\n      ref=\"selectBox\"\r\n      :style=\"{ top: calculatedHeight + 'px' }\"\r\n      :class=\"{\r\n        'hidden-inline':\r\n          selectBoxWidth > computedCutOff && canBeEmpty && multiSelect,\r\n      }\"\r\n    >\r\n      <n-button\r\n        :flavor=\"badgeFlavor\"\r\n        class=\"selectme-button selectme-badge\"\r\n        :class=\"{ 'selectme-single-select-badge': !multiSelect }\"\r\n        v-for=\"(option, index) in selectedOptions\"\r\n        @click=\"deselectOption(option)\"\r\n        :key=\"'selected-badge-' + option[valueAttribute] + '-' + index\"\r\n      >\r\n        <span class=\"sr-only\">Press enter or space to deselect</span>\r\n        {{ option[displayAttribute] }}\r\n        <span\r\n          :class=\"computedSpanClass\"\r\n          class=\"select-me-ignore-me\"\r\n          v-if=\"canBeEmpty || (!canBeEmpty && selectedOptions.length > 1)\"\r\n        >&#215;</span>\r\n      </n-button>\r\n    </div>\r\n  </div>\r\n</template>\r\n\r\n<script>\r\nimport { NInput } from \"@IntusFacultas/input\";\r\nimport { NButton } from \"@IntusFacultas/button\";\r\nimport axios from \"axios\";\r\nconst SelectMe = {\r\n  name: \"select-me\",\r\n  components: { NInput, NButton },\r\n  data() {\r\n    return {\r\n      loading: false,\r\n      timeout: \"\",\r\n      optionSearch: \"\",\r\n      initialized: false,\r\n      errored: false,\r\n      showOptions: false,\r\n      ajaxTimeout: null,\r\n      showSelected: false,\r\n      selectBoxWidth: 0,\r\n      calculatedWidth: 0,\r\n      calculatedHeight: 0,\r\n      calculatedPadding: 0,\r\n      selectedOptions: [],\r\n      hoveredOption: {},\r\n      loadedOptions: [],\r\n      hoveredSelectedOption: {},\r\n      combinedPaddingPerBadge: 26,\r\n      hoveredIndex: -1,\r\n      hoveredSelectedIndex: -1,\r\n    };\r\n  },\r\n  watch: {\r\n    options: {\r\n      handler() {\r\n        if (\r\n          this.selectedOptions.length == 0 &&\r\n          !this.canBeEmpty &&\r\n          this.options.length != 0\r\n        ) {\r\n          this.selectOption(this.options[0]);\r\n        }\r\n      },\r\n      deep: true,\r\n    },\r\n    value(newValue) {\r\n      this.selectedOptions = newValue;\r\n      window.requestAnimationFrame(this.setSelectBoxWidth);\r\n      this.setCalculatedPadding();\r\n    },\r\n  },\r\n  props: {\r\n    value: {\r\n      type: Array,\r\n      default() {\r\n        return [];\r\n      },\r\n    },\r\n    name: {\r\n      type: String,\r\n      required: true,\r\n    },\r\n    loadAjax: {\r\n      type: Boolean,\r\n      default: false,\r\n    },\r\n    endpoint: {\r\n      type: String,\r\n      default: \"\",\r\n    },\r\n    badgeFlavor: {\r\n      type: String,\r\n      default: \"Primary\",\r\n    },\r\n    flavor: {\r\n      type: String,\r\n      default: \"LightBlue\",\r\n    },\r\n    displayAttribute: {\r\n      type: String,\r\n      default: \"text\",\r\n    },\r\n    valueAttribute: {\r\n      type: String,\r\n      default: \"value\",\r\n    },\r\n    canBeEmpty: {\r\n      type: Boolean,\r\n      default: true,\r\n    },\r\n    disabled: {\r\n      type: Boolean,\r\n      default: false,\r\n    },\r\n    options: {\r\n      type: Array,\r\n      default() {\r\n        return [];\r\n      },\r\n    },\r\n    debug: {\r\n      type: Boolean,\r\n      default: false,\r\n    },\r\n    multiSelect: {\r\n      type: Boolean,\r\n      default: false,\r\n    },\r\n    initialValues: {\r\n      type: Array,\r\n      default() {\r\n        return [];\r\n      },\r\n    },\r\n  },\r\n  computed: {\r\n    computedSpanClass() {\r\n      var self = this;\r\n      if (!self.multiSelect) return [\"selectme-badge-single-span\"];\r\n      return [];\r\n    },\r\n    computedCutOff() {\r\n      var self = this;\r\n      return self.calculatedWidth - 100;\r\n    },\r\n    showDropdown() {\r\n      var self = this;\r\n      return self.showOptions || self.debug;\r\n    },\r\n    selectOptions() {\r\n      function textContains(n) {\r\n        return (\r\n          n[self.displayAttribute]\r\n            .toUpperCase()\r\n            .indexOf(self.optionSearch.toUpperCase()) > -1\r\n        );\r\n      }\r\n      var self = this;\r\n      let options = self.options;\r\n      function filter(fn, array) {\r\n        var rtArray = [];\r\n        for (var x = 0; x < array.length; x++) {\r\n          if (fn(array[x])) {\r\n            rtArray.push(array[x]);\r\n          }\r\n        }\r\n        return rtArray;\r\n      }\r\n      if (self.optionSearch && !self.loadAjax) {\r\n        options = filter(textContains, options);\r\n      }\r\n      if (self.loadAjax) {\r\n        return self.loadedOptions;\r\n      }\r\n      return options;\r\n    },\r\n  },\r\n  methods: {\r\n    deselectDropdownOption(option) {\r\n      var self = this;\r\n      self.deselectOption(option, false);\r\n      window.requestAnimationFrame(self.setSelectBoxWidth);\r\n    },\r\n    handleOffClick(event) {\r\n      var self = this;\r\n      if (!event.target.attributes[\"data-dropdown\"]) {\r\n        self.showSelected = false;\r\n      }\r\n    },\r\n    toggleSelectedDropdown() {\r\n      var self = this;\r\n      self.showSelected = !self.showSelected;\r\n    },\r\n    selectHoveredOption() {\r\n      var self = this;\r\n      if (self.showOptions) {\r\n        if (Object.keys(self.hoveredOption).length > 0) {\r\n          if (!self.contains(self.hoveredOption, self.selectedOptions)) {\r\n            if (!self.multiSelect) self.selectedOptions = [];\r\n            self.selectedOptions.push(Object.assign({}, self.hoveredOption));\r\n          } else {\r\n            self.deselectOption(self.hoveredOption, false);\r\n          }\r\n          self.$emit(\"input\", self.selectedOptions);\r\n          self.hoveredOption = {};\r\n          self.hoveredIndex = -1;\r\n          window.requestAnimationFrame(self.setSelectBoxWidth);\r\n          self.setCalculatedPadding();\r\n          if (self.multiSelect) {\r\n            self.$el.firstChild.focus();\r\n          } else {\r\n            self.closeDropdown();\r\n          }\r\n        }\r\n      } else if (self.showSelected) {\r\n        self.deselectOption(self.hoveredSelectedOption);\r\n        self.$emit(\"input\", self.selectedOptions);\r\n        self.hoveredSelectedOption = {};\r\n        self.showSelected = false;\r\n        setTimeout(function () {\r\n          self.hoveredIndex = -1;\r\n          window.requestAnimationFrame(self.setSelectBoxWidth);\r\n          self.setCalculatedPadding();\r\n          self.$el.firstChild.focus();\r\n        }, 550);\r\n      }\r\n    },\r\n    hoverElement() {\r\n      var self = this;\r\n      clearTimeout(self.timeout);\r\n      self.hoveredOption = self.selectOptions.filter(\r\n        (option) =>\r\n          option[self.valueAttribute] ==\r\n          document.activeElement.getAttribute(\"value\")\r\n      )[0];\r\n      self.hoveredIndex = self.selectOptions\r\n        .map((option) => option[self.valueAttribute])\r\n        .indexOf(self.hoveredOption[self.valueAttribute]);\r\n    },\r\n    hoverOption(step) {\r\n      var self = this;\r\n      var proposedIndex = self.hoveredIndex + step;\r\n      self.openDropdown();\r\n      if (proposedIndex >= self.selectOptions.length) {\r\n        self.hoveredIndex = 0;\r\n        self.hoveredOption = self.selectOptions[self.hoveredIndex];\r\n      } else if (proposedIndex < -1) {\r\n        return;\r\n      } else if (proposedIndex == -1) {\r\n        self.hoveredIndex = proposedIndex;\r\n        self.$el.firstChild.focus();\r\n        self.closeDropdown();\r\n        self.hoveredOption = {};\r\n      } else {\r\n        self.hoveredIndex = proposedIndex;\r\n        self.hoveredOption = self.selectOptions[self.hoveredIndex];\r\n        self.$forceUpdate();\r\n      }\r\n    },\r\n    hoverSelectedOption(step) {\r\n      var self = this;\r\n      var proposedIndex = self.hoveredIndex + step;\r\n      self.showSelected = true;\r\n      if (proposedIndex >= self.selectedOptions.length || proposedIndex < -1) {\r\n        return;\r\n      } else if (proposedIndex == -1) {\r\n        self.hoveredIndex = proposedIndex;\r\n        self.$el.firstChild.focus();\r\n        self.showSelected = false;\r\n        self.hoveredSelectedOption = {};\r\n      } else {\r\n        self.hoveredIndex = proposedIndex;\r\n        self.hoveredSelectedOption = self.selectedOptions[self.hoveredIndex];\r\n        self.$forceUpdate();\r\n      }\r\n    },\r\n    contains(option, options) {\r\n      var self = this;\r\n      for (var x = 0; x < options.length; x++) {\r\n        let textMatches =\r\n          option[self.displayAttribute] == options[x][self.displayAttribute];\r\n        let valueMatches =\r\n          option[self.valueAttribute] == options[x][self.valueAttribute];\r\n        if (textMatches && valueMatches) return true;\r\n      }\r\n      return false;\r\n    },\r\n    isHovered(option, hoverOption) {\r\n      var self = this;\r\n      let textMatches =\r\n        option[self.displayAttribute] == hoverOption[self.displayAttribute];\r\n      let valueMatches =\r\n        option[self.valueAttribute] == hoverOption[self.valueAttribute];\r\n      return textMatches && valueMatches;\r\n    },\r\n    handleUp() {\r\n      var self = this;\r\n      if (self.showSelected) {\r\n        self.hoverSelectedOption(-1);\r\n      } else if (self.showOptions) {\r\n        self.hoverOption(-1);\r\n      } else {\r\n        self.hoverOption(-1);\r\n      }\r\n    },\r\n    handleDown() {\r\n      var self = this;\r\n      if (self.showSelected) {\r\n        self.hoverSelectedOption(1);\r\n      } else if (self.showOptions) {\r\n        self.hoverOption(1);\r\n      } else {\r\n        self.hoverOption(1);\r\n      }\r\n    },\r\n    handleLeft() {\r\n      var self = this;\r\n      if (\r\n        self.optionSearch.length == 0 &&\r\n        self.selectedOptions.length > 0 &&\r\n        (self.selectBoxWidth > self.computedCutOff) & !self.showSelected\r\n      ) {\r\n        self.closeDropdown();\r\n        self.showSelected = true;\r\n      }\r\n    },\r\n    handleRight() {\r\n      var self = this;\r\n      if (self.showSelected) {\r\n        self.showSelected = false;\r\n        self.hoveredSelectedOption = {};\r\n        self.$el.firstChild.focus();\r\n      }\r\n    },\r\n    handleBackspace() {\r\n      var self = this;\r\n      if (\r\n        self.optionSearch.length == 0 &&\r\n        self.selectedOptions.length > 0 &&\r\n        self.selectBoxWidth <= self.computedCutOff\r\n      ) {\r\n        var el = self.selectedOptions.pop();\r\n        self.$emit(\"input\", self.selectedOptions);\r\n        window.requestAnimationFrame(self.setSelectBoxWidth);\r\n        self.setCalculatedPadding();\r\n        self.optionSearch = el[self.displayAttribute];\r\n      }\r\n    },\r\n    contained(option) {\r\n      var self = this;\r\n      return self.contains(option, self.selectedOptions);\r\n    },\r\n    debounce(func, wait, immediate) {\r\n      var self = this;\r\n      // pulled from https://davidwalsh.name/javascript-debounce-function\r\n      return function () {\r\n        var context = this,\r\n          args = arguments;\r\n        var later = function () {\r\n          self.ajaxTimeout = null;\r\n          if (!immediate) func.apply(context, args);\r\n        };\r\n        var callNow = immediate && !self.ajaxTimeout;\r\n        clearTimeout(self.ajaxTimeout);\r\n        self.ajaxTimeout = setTimeout(later, wait);\r\n        if (callNow) func.apply(context, args);\r\n      };\r\n    },\r\n    fireAjax() {\r\n      var self = this;\r\n      if (self.loadAjax && self.optionSearch) {\r\n        self.loading = true;\r\n        axios\r\n          .get(self.endpoint, { params: { text: self.optionSearch } })\r\n          .then((response) => {\r\n            self.initialized = true;\r\n            self.loading = false;\r\n            self.loadedOptions = response.data;\r\n          })\r\n          .catch((response) => {\r\n            self.loading = false;\r\n            self.errored = true;\r\n            console.error(\"SelectMe had a bad response from the server.\");\r\n            console.error(\"Response status code: \", response.status);\r\n            console.error(\"Response object following:\");\r\n            console.error(response);\r\n          });\r\n      } else if (self.loadAjax) {\r\n        self.loadedOptions = [];\r\n        self.initialized = false; // this is to force the component to show \"please type chars\" again\r\n      }\r\n    },\r\n    selectOption(option) {\r\n      var self = this;\r\n      if (!self.contains(option, self.selectedOptions)) {\r\n        if (!self.multiSelect) {\r\n          self.selectedOptions = [];\r\n        }\r\n        self.selectedOptions.push(option);\r\n      } else {\r\n        self.deselectOption(option, !self.multiSelect);\r\n      }\r\n      if (!self.loadAjax) {\r\n        self.optionSearch = \"\";\r\n      }\r\n      if (!self.multiSelect) {\r\n        self.closeDropdown();\r\n      }\r\n      self.$emit(\"input\", self.selectedOptions);\r\n      window.requestAnimationFrame(self.setSelectBoxWidth);\r\n      self.setCalculatedPadding();\r\n    },\r\n    deselectOption(option, closeDropdown) {\r\n      var self = this;\r\n      if (!self.canBeEmpty && self.selectedOptions.length == 1) {\r\n        return;\r\n      }\r\n      function findIndex(option, options) {\r\n        for (var x = 0; x < options.length; x++) {\r\n          if (option[self.valueAttribute] == options[x][self.valueAttribute]) {\r\n            return x;\r\n          }\r\n        }\r\n        return -1;\r\n      }\r\n      var index = findIndex(option, self.selectedOptions);\r\n      self.selectedOptions.splice(index, 1);\r\n      self.$forceUpdate();\r\n      if (typeof closeDropdown === \"undefined\" || closeDropdown) {\r\n        self.closeDropdown();\r\n      }\r\n      self.$emit(\"input\", self.selectedOptions);\r\n      window.requestAnimationFrame(self.setSelectBoxWidth);\r\n      self.setCalculatedPadding();\r\n    },\r\n    closeDropdown() {\r\n      var self = this;\r\n      self.hoveredIndex = -1;\r\n      self.timeout = setTimeout(function () {\r\n        self.showOptions = false;\r\n      }, 200);\r\n    },\r\n    openDropdown() {\r\n      var self = this;\r\n      self.$emit(\"focus\");\r\n      clearTimeout(self.timeout);\r\n      if (self.disabled) {\r\n        return false;\r\n      }\r\n      self.hoveredIndex = -1;\r\n      self.setCalculatedWidth();\r\n      self.showSelected = false;\r\n      self.showOptions = true;\r\n    },\r\n    setSelectBoxWidth() {\r\n      var self = this;\r\n      if (self.$refs.selectBox)\r\n        self.selectBoxWidth = self.$refs.selectBox.clientWidth + 5;\r\n      window.requestAnimationFrame(self.setSelectBoxWidth);\r\n    },\r\n    setCalculatedPadding() {\r\n      var self = this;\r\n      if (self.selectBoxWidth > self.computedCutOff) {\r\n        self.calculatedPadding = self.$refs.selectDropdownBox.clientWidth + 10;\r\n      } else {\r\n        self.calculatedPadding = self.selectBoxWidth;\r\n      }\r\n      window.requestAnimationFrame(self.setCalculatedPadding);\r\n    },\r\n    setCalculatedWidth() {\r\n      var self = this;\r\n      setTimeout(function () {\r\n        try {\r\n          self.calculatedHeight = self.$el.firstChild.offsetHeight * -1 + 5;\r\n          if (!self.multiSelect) {\r\n            self.calculatedHeight -= 4;\r\n          }\r\n          self.calculatedWidth = self.$el.firstChild.offsetWidth;\r\n          window.requestAnimationFrame(self.setSelectBoxWidth);\r\n          self.setCalculatedPadding();\r\n        } catch (err) {\r\n          // pass\r\n        }\r\n      }, 50);\r\n    },\r\n  },\r\n  mounted() {\r\n    var self = this;\r\n\r\n    window.requestAnimationFrame(self.setCalculatedPadding);\r\n    window.addEventListener(\"resize\", self.setCalculatedWidth);\r\n    window.addEventListener(\"click\", self.handleOffClick);\r\n    self.setCalculatedWidth();\r\n    setTimeout(function () {\r\n      self.setCalculatedWidth();\r\n    }, 200);\r\n    for (var x = 0; x < self.value.length; x++) {\r\n      var initVal = self.value[x];\r\n      for (var y = 0; y < self.options.length; y++) {\r\n        if (\r\n          self.options[y][self.valueAttribute] == initVal[self.valueAttribute]\r\n        ) {\r\n          self.selectedOptions.push(Object.assign({}, self.options[y]));\r\n          break;\r\n        }\r\n      }\r\n    }\r\n    if (\r\n      !self.canBeEmpty &&\r\n      self.options.length > 0 &&\r\n      self.value.length == 0 &&\r\n      !self.loadAjax\r\n    ) {\r\n      self.selectOption(self.options[0]);\r\n    }\r\n  },\r\n  beforeDestroy() {\r\n    window.removeEventListener(\"resize\", self.setCalculatedWidth);\r\n    window.removeEventListener(\"click\", self.handleOffClick);\r\n  },\r\n};\r\nexport default SelectMe;\r\n</script>\r\n<style scoped>\r\n.select-me-ignore-me {\r\n  pointer-events: none;\r\n}\r\n.selectme-button {\r\n  height: 30px;\r\n  margin-top: -2px;\r\n}\r\n.selectme-single-select-badge {\r\n  margin-top: 1px;\r\n}\r\n.hidden-inline {\r\n  opacity: 0;\r\n  pointer-events: none;\r\n}\r\n.selectme-badge {\r\n  display: inline-block;\r\n  padding: 0.25em 0.4em;\r\n  font-weight: 700;\r\n  line-height: 1;\r\n  text-align: center;\r\n  white-space: nowrap;\r\n  vertical-align: baseline;\r\n  border-radius: 0.25rem;\r\n  font-weight: 700 !important;\r\n  font-size: 16px !important;\r\n  font-family: \"Segoe UI\" !important;\r\n}\r\n.selectme-container {\r\n  height: 45px;\r\n}\r\n.selectme-container * {\r\n  font-family: \"Roboto\", sans-serif;\r\n}\r\n\r\n.sr-only {\r\n  position: absolute;\r\n  width: 1px;\r\n  height: 1px;\r\n  padding: 0;\r\n  margin: -1px;\r\n  overflow: hidden;\r\n  clip: rect(0, 0, 0, 0);\r\n  border: 0;\r\n}\r\n.selectme-dropdown {\r\n  position: absolute;\r\n  z-index: 2;\r\n  background-color: white;\r\n  padding: 5px;\r\n  border: 1px solid rgba(0, 0, 0, 0.15);\r\n  border-radius: 0 0 5px 5px;\r\n  box-shadow: 0px 4px 7px -3px #dadada;\r\n  min-width: 200px;\r\n  max-height: 300px;\r\n  overflow-y: auto;\r\n}\r\n.selectme-badge-single-span {\r\n  float: left;\r\n  padding-right: 8px;\r\n}\r\n.selectme-badge-transparent {\r\n  color: black;\r\n  font-size: 16px !important;\r\n  background-color: transparent !important;\r\n}\r\n.selectme-selected {\r\n  position: relative;\r\n  display: inline-block;\r\n  margin-left: 5px;\r\n}\r\n.selectme-selected > button {\r\n  cursor: pointer;\r\n  padding: 7px;\r\n  margin-right: 2px;\r\n}\r\n.selectme-dropdown > ul {\r\n  list-style: none;\r\n  padding-left: 0px;\r\n  margin-left: 0px;\r\n  margin-bottom: 0px;\r\n}\r\n.selectme-dropdown > ul > li {\r\n  padding: 2px 10px 2px 10px;\r\n  cursor: pointer;\r\n  width: 100%;\r\n  box-sizing: border-box;\r\n  margin-left: 0px;\r\n  font-size: 16px;\r\n  max-height: 200px;\r\n  margin-bottom: -2px;\r\n  overflow-y: auto;\r\n}\r\n.selectme-dropdown > ul > li.selectme-selected {\r\n  background-color: #007bff;\r\n  color: white;\r\n}\r\n.selectme-dropdown > ul > li.selectme-hovered {\r\n  background-color: #eeeeee;\r\n}\r\n.selectme-dropdown > ul > li.selectme-selected.selectme-hovered {\r\n  background-color: #0069d9;\r\n  color: white;\r\n}\r\n.selectme-dropdown > ul > li:hover {\r\n  background-color: #eeeeee;\r\n}\r\n.selectme-dropdown > ul > li.selectme-selected:hover {\r\n  background-color: #0069d9;\r\n  color: white;\r\n}\r\n@keyframes SelectMeLoadingSpinner {\r\n  from {\r\n    -webkit-transform: rotate(0deg);\r\n    transform: rotate(0deg);\r\n  }\r\n  to {\r\n    -webkit-transform: rotate(359deg);\r\n    transform: rotate(359deg);\r\n  }\r\n}\r\n.selectme-loading-spinner {\r\n  -webkit-animation: SelectMeLoadingSpinner 0.5s infinite steps(8); /* Safari, Chrome and Opera > 12.1 */\r\n  -moz-animation: SelectMeLoadingSpinner 0.5s infinite steps(8); /* Firefox < 16 */\r\n  -ms-animation: SelectMeLoadingSpinner 0.5s infinite steps(8); /* Internet Explorer */\r\n  -o-animation: SelectMeLoadingSpinner 0.5s infinite steps(8); /* Opera < 12.1 */\r\n  animation: SelectMeLoadingSpinner 0.5s infinite steps(8);\r\n}\r\n</style>\r\n"]}, media: undefined });

  };
  /* scoped */
  const __vue_scope_id__ = "data-v-11a3dea6";
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

var install = function installSelectMe(Vue) {
  if (install.installed) return;
  install.installed = true;
  Vue.component("SelectMe", __vue_component__);
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
export { __vue_component__ as SelectMe };
//# sourceMappingURL=SelectMe.esm.js.map
