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

function _templateObject6() {
  var data = _taggedTemplateLiteral(["\n  display: block;\n  max-width: ", ";\n  max-height: ", ";\n  width: auto;\n  height: auto;\n"]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n  position: relative;\n  overflow: hidden;\n  padding: 0 40px;\n  margin-bottom: 25px;\n  width: ", ";\n  height: ", ";\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n  position: absolute;\n  left: 40px;\n  right: 40px;\n  height: 25px;\n  bottom: 0px;\n  background-color: rgba(124, 124, 124, 0.5);\n  align-items: center;\n  display: flex;\n  justify-content: center;\n  & svg {\n    margin-left: 2px;\n    margin-right: 2px;\n    cursor: pointer;\n  }\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n  justify-content: center;\n  min-width: 100%;\n  ", "\n  height: ", ";\n  ", "\n  ", "\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  position: absolute;\n  right: 0;\n  top: 0;\n  bottom: 0;\n  width: 40px;\n  cursor: pointer;\n  background-color: rgba(0, 0, 0, 0);\n  border-width: 0px;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  position: absolute;\n  left: 0;\n  top: 0;\n  bottom: 0;\n  width: 40px;\n  cursor: pointer;\n  background-color: rgba(0, 0, 0, 0);\n  border-width: 0px;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}
var props = {
  height: String,
  width: String,
  direction: Number,
  // 2 right, 1 left, 0 none
  index: Number,
  selectable: Boolean
};
var CarouselLeftToggler = styled.button(_templateObject());
var CarouselRightToggler = styled.button(_templateObject2());
var ImageContainer = styled("div", props)(_templateObject3(), function (props) {
  return props.selectable ? "cursor: pointer;" : "";
}, function (props) {
  return props.height;
}, function (props) {
  return props.direction == 1 && props.index == 1 ? "\n        -webkit-animation: CarouselSlideLeftIn 0.5s; /* Safari, Chrome and Opera > 12.1 */\n        -moz-animation: CarouselSlideLeftIn 0.5s; /* Firefox < 16 */\n        -ms-animation: CarouselSlideLeftIn 0.5s; /* Internet Explorer */\n        -o-animation: CarouselSlideLeftIn 0.5s; /* Opera < 12.1 */\n        animation: CarouselSlideLeftIn 0.5s;\n        animation-iteration-count: 1;\n    " : props.direction == 1 && props.index == 0 ? "\n        -webkit-animation: CarouselSlideLeftOut 0.5s; /* Safari, Chrome and Opera > 12.1 */\n        -moz-animation: CarouselSlideLeftOut 0.5s; /* Firefox < 16 */\n        -ms-animation: CarouselSlideLeftOut 0.5s; /* Internet Explorer */\n        -o-animation: CarouselSlideLeftOut 0.5s; /* Opera < 12.1 */\n        animation: CarouselSlideLeftOut 0.5s;\n        animation-iteration-count: 1;\n    " : props.direction == 2 && props.index == 0 ? "\n        -webkit-animation: CarouselSlideRightIn 0.5s; /* Safari, Chrome and Opera > 12.1 */\n        -moz-animation: CarouselSlideRightIn 0.5s; /* Firefox < 16 */\n        -ms-animation: CarouselSlideRightIn 0.5s; /* Internet Explorer */\n        -o-animation: CarouselSlideRightIn 0.5s; /* Opera < 12.1 */\n        animation: CarouselSlideRightIn 0.5s;\n        animation-iteration-count: 1;\n    " : props.direction == 2 && props.index == 1 ? "\n        -webkit-animation: CarouselSlideRightOut 0.5s; /* Safari, Chrome and Opera > 12.1 */\n        -moz-animation: CarouselSlideRightOut 0.5s; /* Firefox < 16 */\n        -ms-animation: CarouselSlideRightOut 0.5s; /* Internet Explorer */\n        -o-animation: CarouselSlideRightOut 0.5s; /* Opera < 12.1 */\n        animation: CarouselSlideRightOut 0.5s;\n        animation-iteration-count: 1;\n    " : "";
}, function (props) {
  return props.index == 0 && props.direction == 1 ? "transform: translateX(-50px);" : props.index == 1 && props.direction == 2 ? "transform: translateX(50px);" : "";
});
var ImageSelectorCircleContainer = styled("div")(_templateObject4());
var CarouselContainer = styled("div", props)(_templateObject5(), function (props) {
  return props.width;
}, function (props) {
  return props.height;
});
var CarouselImage = styled("img", props)(_templateObject6(), function (props) {
  return props.width;
}, function (props) {
  return props.height;
});
var RIGHT = 2;
var LEFT = 1;
var NONE = 0;
var Carousel = {
  components: {
    CarouselRightToggler: CarouselRightToggler,
    CarouselLeftToggler: CarouselLeftToggler,
    CarouselContainer: CarouselContainer,
    ImageContainer: ImageContainer,
    CarouselImage: CarouselImage,
    ImageSelectorCircleContainer: ImageSelectorCircleContainer
  },
  data: function data() {
    return {
      shownImages: [],
      currentIndex: 0,
      direction: 0,
      intervalID: null
    };
  },
  computed: {
    priorImages: function priorImages() {
      return this.images.slice(0, this.currentIndex);
    },
    postImages: function postImages() {
      if (this.currentIndex != this.images.length - 1) return this.images.slice(this.currentIndex + 1, this.images.length);
      return [];
    }
  },
  beforeDestroy: function beforeDestroy() {
    if (this.intervalID != null) {
      clearInterval(this.intervalID);
    }
  },
  watch: {
    automated: function automated() {
      var _this = this;

      if (this.automated && this.intervalID == null) {
        this.intervalID = setInterval(function () {
          _this.step(1);
        }, this.delay);
      } else if (!this.automated && this.intervalID != null) {
        clearInterval(this.intervalID);
      }
    },
    delay: function delay() {
      var _this2 = this;

      if (this.intervalID != null) {
        clearInterval(this.intervalID);
      }

      this.intervalID = setInterval(function () {
        _this2.step(1);
      }, this.delay);
    }
  },
  mounted: function mounted() {
    var _this3 = this;

    if (this.images.length > 0) {
      this.shownImages.push(this.images[this.currentIndex]);
    }

    if (this.automated) {
      this.intervalID = setInterval(function () {
        _this3.step(1);
      }, this.delay);
    }
  },
  methods: {
    selectImage: function selectImage(image) {
      if (!this.selectable) {
        return;
      } else {
        this.$emit("select", image);
      }
    },
    step: function step(amount) {
      var _this4 = this;

      if (this.currentIndex + amount >= this.images.length) {
        this.currentIndex = 0;
      } else if (this.currentIndex + amount < 0) {
        this.currentIndex = this.images.length - 1;
      } else {
        this.currentIndex += amount;
      }

      if (amount < 0) {
        // stepping backwards
        this.shownImages.unshift(this.images[this.currentIndex]);
        this.direction = RIGHT;
        setTimeout(function () {
          _this4.direction = NONE;

          _this4.shownImages.splice(1, 1);
        }, 455);
      } else if (amount > 0) {
        // stepping
        this.shownImages.push(this.images[this.currentIndex]);
        this.direction = LEFT;
        setTimeout(function () {
          _this4.direction = NONE;

          _this4.shownImages.splice(0, 1);
        }, 455);
      }
    }
  },
  props: {
    height: {
      type: String,
      default: "500px"
    },
    width: {
      type: String,
      default: "100%"
    },
    automated: Boolean,
    images: {
      type: Array,
      required: true
    },
    selectable: {
      type: Boolean,
      default: true
    },
    showControlBar: {
      type: Boolean,
      default: true
    },
    delay: {
      type: Number,
      default: 5000
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
const __vue_script__ = Carousel;

/* template */
var __vue_render__ = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c(
    "carousel-container",
    { attrs: { height: _vm.height, width: _vm.width } },
    [
      _c(
        "carousel-left-toggler",
        {
          on: {
            click: function($event) {
              return _vm.step(-1)
            }
          }
        },
        [
          _c("span", { staticClass: "sr-only" }, [
            _vm._v("Move Carousel Left")
          ]),
          _vm._v(" "),
          _c(
            "svg",
            {
              staticClass: "carousel-left-toggle-svg carousel-svg",
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
                    "M16.67 0l2.83 2.829-9.339 9.175 9.339 9.167-2.83 2.829-12.17-11.996z"
                }
              })
            ]
          )
        ]
      ),
      _vm._v(" "),
      _vm._l(_vm.shownImages, function(image, index) {
        return _c(
          "image-container",
          {
            key: index,
            attrs: {
              height: _vm.height,
              width: _vm.width,
              index: index,
              direction: _vm.direction,
              selectable: _vm.selectable
            },
            on: {
              click: function($event) {
                return _vm.selectImage(image)
              }
            }
          },
          [
            _c("carousel-image", {
              attrs: {
                tabindex: "0",
                height: _vm.height,
                width: _vm.width,
                src: image.src,
                alt:
                  typeof image.alt != "undefined"
                    ? "" +
                      image.alt +
                      (_vm.selectable ? " Can be selected." : "")
                    : "An image in a carousel." +
                      (_vm.selectable ? " Can be selected." : "")
              }
            })
          ],
          1
        )
      }),
      _vm._v(" "),
      _c(
        "carousel-right-toggler",
        {
          on: {
            click: function($event) {
              return _vm.step(1)
            }
          }
        },
        [
          _c("span", { staticClass: "sr-only" }, [
            _vm._v("Move Carousel Right")
          ]),
          _vm._v(" "),
          _c(
            "svg",
            {
              staticClass: "carousel-right-toggle-svg carousel-svg",
              attrs: {
                xmlns: "http://www.w3.org/2000/svg",
                width: "24",
                height: "24",
                viewBox: "0 0 24 24"
              }
            },
            [
              _c("path", {
                attrs: { d: "M5 3l3.057-3 11.943 12-11.943 12-3.057-3 9-9z" }
              })
            ]
          )
        ]
      ),
      _vm._v(" "),
      _vm.showControlBar
        ? _c(
            "image-selector-circle-container",
            { staticClass: "carousel-control-bar" },
            [
              _vm._l(_vm.priorImages, function(image, index) {
                return _c(
                  "svg",
                  {
                    key: image.src,
                    attrs: {
                      xmlns: "http://www.w3.org/2000/svg",
                      width: "10",
                      height: "10",
                      viewBox: "0 0 24 24",
                      fill: "white",
                      stroke: "white"
                    },
                    on: {
                      click: function($event) {
                        return _vm.step(index - _vm.currentIndex)
                      }
                    }
                  },
                  [
                    _c("path", {
                      attrs: {
                        d:
                          "M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12z"
                      }
                    })
                  ]
                )
              }),
              _vm._v(" "),
              _c(
                "svg",
                {
                  attrs: {
                    xmlns: "http://www.w3.org/2000/svg",
                    width: "10",
                    height: "10",
                    viewBox: "0 0 24 24",
                    stroke: "white",
                    fill: "white"
                  }
                },
                [_c("circle", { attrs: { cx: "12", cy: "12", r: "12" } })]
              ),
              _vm._v(" "),
              _vm._l(_vm.postImages, function(image, index) {
                return _c(
                  "svg",
                  {
                    key: image.src,
                    attrs: {
                      xmlns: "http://www.w3.org/2000/svg",
                      width: "10",
                      height: "10",
                      viewBox: "0 0 24 24",
                      fill: "white",
                      stroke: "white"
                    },
                    on: {
                      click: function($event) {
                        return _vm.step(index + 1)
                      }
                    }
                  },
                  [
                    _c("path", {
                      attrs: {
                        d:
                          "M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12z"
                      }
                    })
                  ]
                )
              })
            ],
            2
          )
        : _vm._e()
    ],
    2
  )
};
var __vue_staticRenderFns__ = [];
__vue_render__._withStripped = true;

  /* style */
  const __vue_inject_styles__ = function (inject) {
    if (!inject) return
    inject("data-v-18a227e2_0", { source: "\n@keyframes CarouselSlideLeftIn {\nfrom {\r\n    transform: translateX(0px);\n}\nto {\r\n    transform: translateX(-100%);\n}\n}\n@keyframes CarouselSlideLeftOut {\nfrom {\r\n    transform: translateX(0px);\n}\nto {\r\n    transform: translateX(-100%) translateX(-50px);\n}\n}\n@keyframes CarouselSlideRightIn {\nfrom {\r\n    transform: translateX(-100%);\n}\nto {\r\n    transform: translateX(0px);\n}\n}\n@keyframes CarouselSlideRightOut {\nfrom {\r\n    transform: translateX(-100%);\n}\nto {\r\n    transform: translateX(0px) translateX(50px);\n}\n}\n.sr-only {\r\n  position: absolute;\r\n  width: 1px;\r\n  height: 1px;\r\n  padding: 0;\r\n  margin: -1px;\r\n  overflow: hidden;\r\n  clip: rect(0, 0, 0, 0);\r\n  border: 0;\n}\n.carousel-svg {\r\n  transition: 0.25s all;\r\n  opacity: 0.2;\n}\n.carousel-svg:hover {\r\n  opacity: 1;\n}\r\n", map: {"version":3,"sources":["C:\\Users\\pedro\\Documents\\Personal Projects\\GitHub\\storybook\\src\\components\\Carousel\\src\\Carousel.vue"],"names":[],"mappings":";AAgVA;AACA;IACA,0BAAA;AACA;AACA;IACA,4BAAA;AACA;AACA;AACA;AACA;IACA,0BAAA;AACA;AACA;IACA,8CAAA;AACA;AACA;AAEA;AACA;IACA,4BAAA;AACA;AACA;IACA,0BAAA;AACA;AACA;AAEA;AACA;IACA,4BAAA;AACA;AACA;IACA,2CAAA;AACA;AACA;AAEA;EACA,kBAAA;EACA,UAAA;EACA,WAAA;EACA,UAAA;EACA,YAAA;EACA,gBAAA;EACA,sBAAA;EACA,SAAA;AACA;AACA;EACA,qBAAA;EACA,YAAA;AACA;AACA;EACA,UAAA;AACA","file":"Carousel.vue","sourcesContent":["<template>\r\n  <carousel-container :height=\"height\" :width=\"width\">\r\n    <carousel-left-toggler @click=\"step(-1)\">\r\n      <span class=\"sr-only\">Move Carousel Left</span>\r\n      <svg\r\n        class=\"carousel-left-toggle-svg carousel-svg\"\r\n        xmlns=\"http://www.w3.org/2000/svg\"\r\n        width=\"24\"\r\n        height=\"24\"\r\n        viewBox=\"0 0 24 24\"\r\n      >\r\n        <path d=\"M16.67 0l2.83 2.829-9.339 9.175 9.339 9.167-2.83 2.829-12.17-11.996z\" />\r\n      </svg>\r\n    </carousel-left-toggler>\r\n    <image-container\r\n      :height=\"height\"\r\n      :width=\"width\"\r\n      v-for=\"(image, index) in shownImages\"\r\n      :key=\"index\"\r\n      :index=\"index\"\r\n      :direction=\"direction\"\r\n      :selectable=\"selectable\"\r\n      @click=\"selectImage(image)\"\r\n    >\r\n      <carousel-image\r\n        tabindex=\"0\"\r\n        :height=\"height\"\r\n        :width=\"width\"\r\n        :src=\"image.src\"\r\n        :alt=\"\r\n          typeof image.alt != 'undefined'\r\n            ? `${image.alt}${selectable ? ' Can be selected.' : ''}`\r\n            : `An image in a carousel.${selectable ? ' Can be selected.' : ''}`\r\n        \"\r\n      ></carousel-image>\r\n    </image-container>\r\n    <carousel-right-toggler @click=\"step(1)\">\r\n      <span class=\"sr-only\">Move Carousel Right</span>\r\n      <svg\r\n        class=\"carousel-right-toggle-svg carousel-svg\"\r\n        xmlns=\"http://www.w3.org/2000/svg\"\r\n        width=\"24\"\r\n        height=\"24\"\r\n        viewBox=\"0 0 24 24\"\r\n      >\r\n        <path d=\"M5 3l3.057-3 11.943 12-11.943 12-3.057-3 9-9z\" />\r\n      </svg>\r\n    </carousel-right-toggler>\r\n    <image-selector-circle-container class=\"carousel-control-bar\" v-if=\"showControlBar\">\r\n      <svg\r\n        v-for=\"(image, index) in priorImages\"\r\n        :key=\"image.src\"\r\n        xmlns=\"http://www.w3.org/2000/svg\"\r\n        width=\"10\"\r\n        height=\"10\"\r\n        viewBox=\"0 0 24 24\"\r\n        fill=\"white\"\r\n        stroke=\"white\"\r\n        @click=\"step(index - currentIndex)\"\r\n      >\r\n        <path\r\n          d=\"M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12z\"\r\n        />\r\n      </svg>\r\n      <svg\r\n        xmlns=\"http://www.w3.org/2000/svg\"\r\n        width=\"10\"\r\n        height=\"10\"\r\n        viewBox=\"0 0 24 24\"\r\n        stroke=\"white\"\r\n        fill=\"white\"\r\n      >\r\n        <circle cx=\"12\" cy=\"12\" r=\"12\" />\r\n      </svg>\r\n      <svg\r\n        v-for=\"(image, index) in postImages\"\r\n        :key=\"image.src\"\r\n        xmlns=\"http://www.w3.org/2000/svg\"\r\n        width=\"10\"\r\n        height=\"10\"\r\n        viewBox=\"0 0 24 24\"\r\n        fill=\"white\"\r\n        stroke=\"white\"\r\n        @click=\"step(index + 1)\"\r\n      >\r\n        <path\r\n          d=\"M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12z\"\r\n        />\r\n      </svg>\r\n    </image-selector-circle-container>\r\n  </carousel-container>\r\n</template>\r\n\r\n<script>\r\nimport styled from \"vue-styled-components\";\r\nconst props = {\r\n  height: String,\r\n  width: String,\r\n  direction: Number, // 2 right, 1 left, 0 none\r\n  index: Number,\r\n  selectable: Boolean\r\n};\r\nconst CarouselLeftToggler = styled.button`\r\n  position: absolute;\r\n  left: 0;\r\n  top: 0;\r\n  bottom: 0;\r\n  width: 40px;\r\n  cursor: pointer;\r\n  background-color: rgba(0, 0, 0, 0);\r\n  border-width: 0px;\r\n`;\r\nconst CarouselRightToggler = styled.button`\r\n  position: absolute;\r\n  right: 0;\r\n  top: 0;\r\n  bottom: 0;\r\n  width: 40px;\r\n  cursor: pointer;\r\n  background-color: rgba(0, 0, 0, 0);\r\n  border-width: 0px;\r\n`;\r\nconst ImageContainer = styled(\"div\", props)`\r\n  display: flex;\r\n  justify-content: center;\r\n  min-width: 100%;\r\n  ${props => (props.selectable ? `cursor: pointer;` : \"\")}\r\n  height: ${props => props.height};\r\n  ${props =>\r\n    props.direction == 1 && props.index == 1\r\n      ? `\r\n        -webkit-animation: CarouselSlideLeftIn 0.5s; /* Safari, Chrome and Opera > 12.1 */\r\n        -moz-animation: CarouselSlideLeftIn 0.5s; /* Firefox < 16 */\r\n        -ms-animation: CarouselSlideLeftIn 0.5s; /* Internet Explorer */\r\n        -o-animation: CarouselSlideLeftIn 0.5s; /* Opera < 12.1 */\r\n        animation: CarouselSlideLeftIn 0.5s;\r\n        animation-iteration-count: 1;\r\n    `\r\n      : props.direction == 1 && props.index == 0\r\n      ? `\r\n        -webkit-animation: CarouselSlideLeftOut 0.5s; /* Safari, Chrome and Opera > 12.1 */\r\n        -moz-animation: CarouselSlideLeftOut 0.5s; /* Firefox < 16 */\r\n        -ms-animation: CarouselSlideLeftOut 0.5s; /* Internet Explorer */\r\n        -o-animation: CarouselSlideLeftOut 0.5s; /* Opera < 12.1 */\r\n        animation: CarouselSlideLeftOut 0.5s;\r\n        animation-iteration-count: 1;\r\n    `\r\n      : props.direction == 2 && props.index == 0\r\n      ? `\r\n        -webkit-animation: CarouselSlideRightIn 0.5s; /* Safari, Chrome and Opera > 12.1 */\r\n        -moz-animation: CarouselSlideRightIn 0.5s; /* Firefox < 16 */\r\n        -ms-animation: CarouselSlideRightIn 0.5s; /* Internet Explorer */\r\n        -o-animation: CarouselSlideRightIn 0.5s; /* Opera < 12.1 */\r\n        animation: CarouselSlideRightIn 0.5s;\r\n        animation-iteration-count: 1;\r\n    `\r\n      : props.direction == 2 && props.index == 1\r\n      ? `\r\n        -webkit-animation: CarouselSlideRightOut 0.5s; /* Safari, Chrome and Opera > 12.1 */\r\n        -moz-animation: CarouselSlideRightOut 0.5s; /* Firefox < 16 */\r\n        -ms-animation: CarouselSlideRightOut 0.5s; /* Internet Explorer */\r\n        -o-animation: CarouselSlideRightOut 0.5s; /* Opera < 12.1 */\r\n        animation: CarouselSlideRightOut 0.5s;\r\n        animation-iteration-count: 1;\r\n    `\r\n      : ``}\r\n  ${props =>\r\n    props.index == 0 && props.direction == 1\r\n      ? `transform: translateX(-50px);`\r\n      : props.index == 1 && props.direction == 2\r\n      ? `transform: translateX(50px);`\r\n      : ``}\r\n`;\r\nconst ImageSelectorCircleContainer = styled(\"div\")`\r\n  position: absolute;\r\n  left: 40px;\r\n  right: 40px;\r\n  height: 25px;\r\n  bottom: 0px;\r\n  background-color: rgba(124, 124, 124, 0.5);\r\n  align-items: center;\r\n  display: flex;\r\n  justify-content: center;\r\n  & svg {\r\n    margin-left: 2px;\r\n    margin-right: 2px;\r\n    cursor: pointer;\r\n  }\r\n`;\r\nconst CarouselContainer = styled(\"div\", props)`\r\n  display: flex;\r\n  position: relative;\r\n  overflow: hidden;\r\n  padding: 0 40px;\r\n  margin-bottom: 25px;\r\n  width: ${props => props.width};\r\n  height: ${props => props.height};\r\n`;\r\nconst CarouselImage = styled(\"img\", props)`\r\n  display: block;\r\n  max-width: ${props => props.width};\r\n  max-height: ${props => props.height};\r\n  width: auto;\r\n  height: auto;\r\n`;\r\nconst RIGHT = 2;\r\nconst LEFT = 1;\r\nconst NONE = 0;\r\nexport const Carousel = {\r\n  components: {\r\n    CarouselRightToggler,\r\n    CarouselLeftToggler,\r\n    CarouselContainer,\r\n    ImageContainer,\r\n    CarouselImage,\r\n    ImageSelectorCircleContainer\r\n  },\r\n  data() {\r\n    return {\r\n      shownImages: [],\r\n      currentIndex: 0,\r\n      direction: 0,\r\n      intervalID: null\r\n    };\r\n  },\r\n  computed: {\r\n    priorImages() {\r\n      return this.images.slice(0, this.currentIndex);\r\n    },\r\n    postImages() {\r\n      if (this.currentIndex != this.images.length - 1)\r\n        return this.images.slice(this.currentIndex + 1, this.images.length);\r\n      return [];\r\n    }\r\n  },\r\n  beforeDestroy() {\r\n    if (this.intervalID != null) {\r\n      clearInterval(this.intervalID);\r\n    }\r\n  },\r\n  watch: {\r\n    automated() {\r\n      if (this.automated && this.intervalID == null) {\r\n        this.intervalID = setInterval(() => {\r\n          this.step(1);\r\n        }, this.delay);\r\n      } else if (!this.automated && this.intervalID != null) {\r\n        clearInterval(this.intervalID);\r\n      }\r\n    },\r\n    delay() {\r\n      if (this.intervalID != null) {\r\n        clearInterval(this.intervalID);\r\n      }\r\n      this.intervalID = setInterval(() => {\r\n        this.step(1);\r\n      }, this.delay);\r\n    }\r\n  },\r\n  mounted() {\r\n    if (this.images.length > 0) {\r\n      this.shownImages.push(this.images[this.currentIndex]);\r\n    }\r\n    if (this.automated) {\r\n      this.intervalID = setInterval(() => {\r\n        this.step(1);\r\n      }, this.delay);\r\n    }\r\n  },\r\n  methods: {\r\n    selectImage(image) {\r\n      if (!this.selectable) {\r\n        return;\r\n      } else {\r\n        this.$emit(\"select\", image);\r\n      }\r\n    },\r\n    step(amount) {\r\n      if (this.currentIndex + amount >= this.images.length) {\r\n        this.currentIndex = 0;\r\n      } else if (this.currentIndex + amount < 0) {\r\n        this.currentIndex = this.images.length - 1;\r\n      } else {\r\n        this.currentIndex += amount;\r\n      }\r\n      if (amount < 0) {\r\n        // stepping backwards\r\n        this.shownImages.unshift(this.images[this.currentIndex]);\r\n        this.direction = RIGHT;\r\n        setTimeout(() => {\r\n          this.direction = NONE;\r\n          this.shownImages.splice(1, 1);\r\n        }, 455);\r\n      } else if (amount > 0) {\r\n        // stepping\r\n        this.shownImages.push(this.images[this.currentIndex]);\r\n        this.direction = LEFT;\r\n        setTimeout(() => {\r\n          this.direction = NONE;\r\n          this.shownImages.splice(0, 1);\r\n        }, 455);\r\n      }\r\n    }\r\n  },\r\n  props: {\r\n    height: {\r\n      type: String,\r\n      default: \"500px\"\r\n    },\r\n    width: {\r\n      type: String,\r\n      default: \"100%\"\r\n    },\r\n    automated: Boolean,\r\n    images: {\r\n      type: Array,\r\n      required: true\r\n    },\r\n    selectable: {\r\n      type: Boolean,\r\n      default: true\r\n    },\r\n    showControlBar: {\r\n      type: Boolean,\r\n      default: true\r\n    },\r\n    delay: {\r\n      type: Number,\r\n      default: 5000\r\n    }\r\n  }\r\n};\r\nexport default Carousel;\r\n</script>\r\n\r\n<style>\r\n@keyframes CarouselSlideLeftIn {\r\n  from {\r\n    transform: translateX(0px);\r\n  }\r\n  to {\r\n    transform: translateX(-100%);\r\n  }\r\n}\r\n@keyframes CarouselSlideLeftOut {\r\n  from {\r\n    transform: translateX(0px);\r\n  }\r\n  to {\r\n    transform: translateX(-100%) translateX(-50px);\r\n  }\r\n}\r\n\r\n@keyframes CarouselSlideRightIn {\r\n  from {\r\n    transform: translateX(-100%);\r\n  }\r\n  to {\r\n    transform: translateX(0px);\r\n  }\r\n}\r\n\r\n@keyframes CarouselSlideRightOut {\r\n  from {\r\n    transform: translateX(-100%);\r\n  }\r\n  to {\r\n    transform: translateX(0px) translateX(50px);\r\n  }\r\n}\r\n\r\n.sr-only {\r\n  position: absolute;\r\n  width: 1px;\r\n  height: 1px;\r\n  padding: 0;\r\n  margin: -1px;\r\n  overflow: hidden;\r\n  clip: rect(0, 0, 0, 0);\r\n  border: 0;\r\n}\r\n.carousel-svg {\r\n  transition: 0.25s all;\r\n  opacity: 0.2;\r\n}\r\n.carousel-svg:hover {\r\n  opacity: 1;\r\n}\r\n</style>\r\n"]}, media: undefined });

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

var install = function installCarousel(Vue) {
  if (install.installed) return;
  install.installed = true;
  Vue.component("Carousel", __vue_component__);
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
export { __vue_component__ as Carousel };
//# sourceMappingURL=Carousel.esm.js.map
