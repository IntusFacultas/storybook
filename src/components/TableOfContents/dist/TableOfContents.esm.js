import styled from "vue-styled-components";
import { TextTheme } from "@intus/design-system";

function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    _typeof = function(obj) {
      return typeof obj;
    };
  } else {
    _typeof = function(obj) {
      return obj &&
        typeof Symbol === "function" &&
        obj.constructor === Symbol &&
        obj !== Symbol.prototype
        ? "symbol"
        : typeof obj;
    };
  }

  return _typeof(obj);
}

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

function _slicedToArray(arr, i) {
  return (
    _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest()
  );
}

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

function _iterableToArrayLimit(arr, i) {
  if (
    !(
      Symbol.iterator in Object(arr) ||
      Object.prototype.toString.call(arr) === "[object Arguments]"
    )
  ) {
    return;
  }

  var _arr = [];
  var _n = true;
  var _d = false;
  var _e = undefined;

  try {
    for (
      var _i = arr[Symbol.iterator](), _s;
      !(_n = (_s = _i.next()).done);
      _n = true
    ) {
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

function _templateObject4() {
  var data = _taggedTemplateLiteral([
    "\n  padding-left: ",
    "px;\n  border-left-style: solid;\n  border-left-width: 2px;\n  font-size: 14px;\n  cursor: pointer;\n  transition: 0.2s all;\n  max-height: 0px;\n  overflow: hidden;\n  border-color: rgba(0, 0, 0, 0.1);\n  color: ",
    ";\n  ",
    ";\n"
  ]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral([
    '\n  & * {\n    font-family: "Open Sans Regular", -apple-system, BlinkMacSystemFont,\n      "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif,\n      "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";\n    -webkit-touch-callout: none; /* iOS Safari */\n    -webkit-user-select: none; /* Safari */\n    -khtml-user-select: none; /* Konqueror HTML */\n    -moz-user-select: none; /* Firefox */\n    -ms-user-select: none; /* Internet Explorer/Edge */\n    user-select: none;\n  }\n  padding-left: 0px;\n  list-style: none;\n'
  ]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral([
    "\n  display: block;\n  max-width: ",
    ";\n"
  ]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral([
    "\n  color: #ff7200;\n  font-size: 16px;\n  font-weight: bold;\n  cursor: pointer;\n  pointer-events: none;\n"
  ]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

if (!Element.prototype.matches) {
  Element.prototype.matches =
    Element.prototype.msMatchesSelector ||
    Element.prototype.webkitMatchesSelector;
}

var props = {
  padding: {
    type: Number,
    default: 0
  },
  breakpoint: {
    type: Number,
    default: 576
  },
  topOffset: {
    type: Number,
    default: 100
  },
  width: {
    type: String,
    default: "auto"
  },
  textTheme: {
    type: Object,
    default: function _default() {
      return TextTheme;
    }
  },
  flavor: String
};
var Toggler = styled.span(_templateObject());
var ContentsContainer = styled("nav", props)(_templateObject2(), function(
  props
) {
  return props.width ? props.width : "auto";
});
var ContentsTable = styled("ul", props)(_templateObject3());
var Item = styled("li", props)(
  _templateObject4(),
  function(props) {
    return props.padding * 10 + 10;
  },
  function(props) {
    return props.dark
      ? props.textTheme.Dark.color
      : props.textTheme.Normal.color;
  },
  function(props) {
    return props.flavor
      ? props.textTheme[props.flavor]
        ? "color " + props.textTheme[props.flavor].color
        : ""
      : "";
  }
);
var TableOfContents = {
  components: {
    ContentsTable: ContentsTable,
    Item: Item,
    ContentsContainer: ContentsContainer,
    Toggler: Toggler
  },
  data: function data() {
    return {
      titles: [],
      override: false,
      scrollToOverride: false
    };
  },
  props: {
    width: {
      type: String,
      default: "auto"
    },
    flavor: {
      type: String,
      default: ""
    },
    queryOverride: {
      type: String,
      default: ""
    },
    offset: {
      type: Number,
      default: 0
    }
  },
  methods: {
    toggleOverride: function toggleOverride() {
      this.override = !this.override;
      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
        for (
          var _iterator = this.titles[Symbol.iterator](), _step;
          !(_iteratorNormalCompletion = (_step = _iterator.next()).done);
          _iteratorNormalCompletion = true
        ) {
          var title = _step.value;
          title.override = this.override;
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
    },
    delayCollapse: function delayCollapse(title) {
      setTimeout(function() {
        return (title.override = false);
      }, 500);
    },
    scrollToEl: function scrollToEl(el) {
      var y = el.getBoundingClientRect().top + window.pageYOffset - this.offset; // el.scrollIntoView({ behavior: "smooth", block: "start" });

      var IEHoldOff = 5; // IE is dumb and can't appropriately calculate viewport

      window.scrollTo({
        top: y - IEHoldOff,
        behavior: "smooth"
      });
      this.scrollToOverride = true;
      var self = this;
      setTimeout(function() {
        setTimeout(function() {
          self.checkTitles();
        }, 100);
        self.scrollToOverride = false;
      }, 500);
      el.focus();
    },
    debounce: function debounce(func, wait, immediate) {
      // pulled from https://davidwalsh.name/javascript-debounce-function
      var timeout;
      return function() {
        var context = this,
          args = arguments;

        var later = function later() {
          timeout = null;
          if (!immediate) func.apply(context, args);
        };

        var callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
        if (callNow) func.apply(context, args);
      };
    },
    computeOverride: function computeOverride(title) {
      return (
        (!this.scrollToOverride && this.override) ||
        title.override ||
        title.children.filter(function(child) {
          return child.override;
        }).length > 0 ||
        title.parents.filter(function(parent) {
          return parent.override;
        }).length > 0
      );
    },
    computeScreenVisibility: function computeScreenVisibility(title) {
      return (
        !this.scrollToOverride &&
        (title.visible ||
          title.children.filter(function(child) {
            return child.visible;
          }).length > 0)
      );
    },
    computeVisibility: function computeVisibility(title) {
      return (
        title.parents.length == 0 ||
        (title.directParents.length == 1 &&
          title.parents.length == 1 &&
          this.computeScreenVisibility(title.directParents[0])) ||
        this.computeOverride(title) ||
        this.computeScreenVisibility(title)
      );
    },
    margined: function margined(title) {
      return title.visible; //|| title.children.filter(child => child.visible).length > 0
    },
    isInView: function isInView(el) {
      // pulled from https://stackoverflow.com/questions/123999/how-can-i-tell-if-a-dom-element-is-visible-in-the-current-viewport
      var box = el.getBoundingClientRect();
      return box.top < window.innerHeight && box.bottom >= 0;
    },
    getPathTo: function getPathTo(element) {
      // pulled from https://stackoverflow.com/questions/2631820/how-do-i-ensure-saved-click-coordinates-can-be-reloaed-to-the-same-place-even-i/2631931#2631931
      if (element.id !== "") return 'id("' + element.id + '")';
      if (element === document.body) return element.tagName;
      var ix = 0;
      var siblings = element.parentNode.childNodes;

      for (var i = 0; i < siblings.length; i++) {
        var sibling = siblings[i];
        if (sibling === element)
          return (
            this.getPathTo(element.parentNode) +
            "/" +
            element.tagName +
            "[" +
            (ix + 1) +
            "]"
          );
        if (sibling.nodeType === 1 && sibling.tagName === element.tagName) ix++;
      }
    },
    checkIfTitle: function checkIfTitle(el) {
      if (this.queryOverride) {
        return el.matches(this.queryOverride);
      } else {
        return el.matches("h1, h2, h3, h4, h5, h6");
      }
    },
    calculateTitleType: function calculateTitleType(el) {
      if (this.queryOverride) {
        return el.getAttribute("data-rank");
      } else {
        return parseInt(el.tagName[1]);
      }
    },
    crawl: function crawl(node) {
      var _this = this;

      var titles = [];
      var stack = [node];
      var visited = [];

      var _loop = function _loop() {
        var el = stack.pop();
        var _iteratorNormalCompletion2 = true;
        var _didIteratorError2 = false;
        var _iteratorError2 = undefined;

        try {
          for (
            var _iterator2 = Array.from(el.children)
                .filter(function(c) {
                  return visited.indexOf(c) == -1 && !c.isEqualNode(el);
                })
                [Symbol.iterator](),
              _step2;
            !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done);
            _iteratorNormalCompletion2 = true
          ) {
            var child = _step2.value;
            stack.push(child);
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

        var path = _this.getPathTo(el);

        var notVisited = visited.indexOf(path) == -1;

        var isTitle = _this.checkIfTitle(el);

        if (notVisited && isTitle) {
          titles.push({
            el: el,
            id: _this.getPathTo(el),
            titleType: _this.calculateTitleType(el),
            offset: -1,
            visible: false,
            hovered: false,
            override: false
          });
        }

        visited.push(_this.getPathTo(el));
      };

      while (stack.length > 0) {
        _loop();
      }

      return titles.reverse();
    },
    checkTitles: function checkTitles() {
      var yOffset = window.pageYOffset;

      if (this.titles.length == 0) {
        return;
      }

      var _iteratorNormalCompletion3 = true;
      var _didIteratorError3 = false;
      var _iteratorError3 = undefined;

      try {
        for (
          var _iterator3 = this.titles.entries()[Symbol.iterator](), _step3;
          !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done);
          _iteratorNormalCompletion3 = true
        ) {
          var _step3$value = _slicedToArray(_step3.value, 2),
            index = _step3$value[0],
            title = _step3$value[1];

          title.offset = title.el.getBoundingClientRect().top;

          if (title.offset < 20 + this.offset && title.offset > 0) {
            var _iteratorNormalCompletion6 = true;
            var _didIteratorError6 = false;
            var _iteratorError6 = undefined;

            try {
              for (
                var _iterator6 = this.titles
                    .filter(function(o) {
                      return o.visible;
                    })
                    [Symbol.iterator](),
                  _step6;
                !(_iteratorNormalCompletion6 = (_step6 = _iterator6.next())
                  .done);
                _iteratorNormalCompletion6 = true
              ) {
                var _other2 = _step6.value;
                _other2.visible = false;
              }
            } catch (err) {
              _didIteratorError6 = true;
              _iteratorError6 = err;
            } finally {
              try {
                if (!_iteratorNormalCompletion6 && _iterator6.return != null) {
                  _iterator6.return();
                }
              } finally {
                if (_didIteratorError6) {
                  throw _iteratorError6;
                }
              }
            }

            title.visible = true;
          } else if (
            title.visible &&
            title.el.getBoundingClientRect().bottom >=
              (window.innerHeight || document.documentElement.clientHeight)
          ) {
            if (this.titles[index - 1]) this.titles[index - 1].visible = true;
            title.visible = false;
          }
        }
      } catch (err) {
        _didIteratorError3 = true;
        _iteratorError3 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion3 && _iterator3.return != null) {
            _iterator3.return();
          }
        } finally {
          if (_didIteratorError3) {
            throw _iteratorError3;
          }
        }
      }

      if (
        yOffset == 0 &&
        window.innerWidth - document.documentElement.clientWidth == 0
      ) {
        var _iteratorNormalCompletion4 = true;
        var _didIteratorError4 = false;
        var _iteratorError4 = undefined;

        try {
          for (
            var _iterator4 = this.titles
                .filter(function(o) {
                  return o.visible;
                })
                [Symbol.iterator](),
              _step4;
            !(_iteratorNormalCompletion4 = (_step4 = _iterator4.next()).done);
            _iteratorNormalCompletion4 = true
          ) {
            var other = _step4.value;
            other.visible = false;
          }
        } catch (err) {
          _didIteratorError4 = true;
          _iteratorError4 = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion4 && _iterator4.return != null) {
              _iterator4.return();
            }
          } finally {
            if (_didIteratorError4) {
              throw _iteratorError4;
            }
          }
        }

        this.titles[0].visible = true;
      } else if (window.innerHeight + yOffset >= document.body.offsetHeight) {
        var _iteratorNormalCompletion5 = true;
        var _didIteratorError5 = false;
        var _iteratorError5 = undefined;

        try {
          for (
            var _iterator5 = this.titles
                .filter(function(o) {
                  return o.visible;
                })
                [Symbol.iterator](),
              _step5;
            !(_iteratorNormalCompletion5 = (_step5 = _iterator5.next()).done);
            _iteratorNormalCompletion5 = true
          ) {
            var _other = _step5.value;
            _other.visible = false;
          }
        } catch (err) {
          _didIteratorError5 = true;
          _iteratorError5 = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion5 && _iterator5.return != null) {
              _iterator5.return();
            }
          } finally {
            if (_didIteratorError5) {
              throw _iteratorError5;
            }
          }
        }

        this.titles[this.titles.length - 1].visible = true;
      }
    },
    assignChildren: function assignChildren() {
      var _this2 = this;

      for (var title = 0; title < this.titles.length; title++) {
        var parentTitle = this.titles[title]; // instantiate parents, children, and direct parents arrays

        if (!parentTitle.children) {
          parentTitle.children = [];
        }

        if (!parentTitle.parents) {
          parentTitle.parents = [];
        }

        if (!parentTitle.directParents) {
          parentTitle.directParents = [];
        }

        for (
          var potentialChild = title + 1;
          potentialChild < this.titles.length;
          potentialChild++
        ) {
          var childTitle = this.titles[potentialChild]; // if titletype is greater than parent, title is child of parent

          if (childTitle.titleType > parentTitle.titleType) {
            parentTitle.children.push(childTitle);

            if (!childTitle.parents) {
              childTitle.parents = [];
            }

            if (!childTitle.directParents) {
              childTitle.directParents = [];
            }

            childTitle.parents.push(parentTitle);
          } else {
            break;
          }
        }
      }

      var _iteratorNormalCompletion7 = true;
      var _didIteratorError7 = false;
      var _iteratorError7 = undefined;

      try {
        var _loop2 = function _loop2() {
          var title = _step7.value;

          // look for titles with only root level parents
          if (title.parents.length == 1) {
            title.directParents.push(title.parents[0]);
          } // assign siblings

          if (title.parents.length == 0) {
            title.siblings = [];
          } else {
            title.siblings = _this2.titles.filter(function(o) {
              return (
                o.parents.filter(function(p) {
                  return p.id == title.parents[0].id;
                }).length > 0 &&
                o.parents.length == title.parents.length &&
                o.id != title.id
              );
            });
          }
        };

        for (
          var _iterator7 = this.titles[Symbol.iterator](), _step7;
          !(_iteratorNormalCompletion7 = (_step7 = _iterator7.next()).done);
          _iteratorNormalCompletion7 = true
        ) {
          _loop2();
        }
      } catch (err) {
        _didIteratorError7 = true;
        _iteratorError7 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion7 && _iterator7.return != null) {
            _iterator7.return();
          }
        } finally {
          if (_didIteratorError7) {
            throw _iteratorError7;
          }
        }
      }
    }
  },
  mounted: function mounted() {
    this.titles = this.crawl(document.getElementsByTagName("body")[0]);
    this.assignChildren();
    this.checkTitles();
    window.addEventListener("scroll", this.checkTitles);

    (function() {
      function polyfill() {
        // aliases
        var w = window;
        var d = document; // return if scroll behavior is supported and polyfill is not forced

        if (
          "scrollBehavior" in d.documentElement.style &&
          w.__forceSmoothScrollPolyfill__ !== true
        ) {
          return;
        } // globals

        var Element = w.HTMLElement || w.Element;
        var SCROLL_TIME = 468; // object gathering original scroll methods

        var original = {
          scroll: w.scroll || w.scrollTo,
          scrollBy: w.scrollBy,
          elementScroll: Element.prototype.scroll || scrollElement,
          scrollIntoView: Element.prototype.scrollIntoView
        }; // define timing method

        var now =
          w.performance && w.performance.now
            ? w.performance.now.bind(w.performance)
            : Date.now;
        /**
         * indicates if a the current browser is made by Microsoft
         * @method isMicrosoftBrowser
         * @param {String} userAgent
         * @returns {Boolean}
         */

        function isMicrosoftBrowser(userAgent) {
          var userAgentPatterns = ["MSIE ", "Trident/", "Edge/"];
          return new RegExp(userAgentPatterns.join("|")).test(userAgent);
        }
        /*
         * IE has rounding bug rounding down clientHeight and clientWidth and
         * rounding up scrollHeight and scrollWidth causing false positives
         * on hasScrollableSpace
         */

        var ROUNDING_TOLERANCE = isMicrosoftBrowser(w.navigator.userAgent)
          ? 1
          : 0;
        /**
         * changes scroll position inside an element
         * @method scrollElement
         * @param {Number} x
         * @param {Number} y
         * @returns {undefined}
         */

        function scrollElement(x, y) {
          this.scrollLeft = x;
          this.scrollTop = y;
        }
        /**
         * returns result of applying ease math function to a number
         * @method ease
         * @param {Number} k
         * @returns {Number}
         */

        function ease(k) {
          return 0.5 * (1 - Math.cos(Math.PI * k));
        }
        /**
         * indicates if a smooth behavior should be applied
         * @method shouldBailOut
         * @param {Number|Object} firstArg
         * @returns {Boolean}
         */

        function shouldBailOut(firstArg) {
          if (
            firstArg === null ||
            _typeof(firstArg) !== "object" ||
            firstArg.behavior === undefined ||
            firstArg.behavior === "auto" ||
            firstArg.behavior === "instant"
          ) {
            // first argument is not an object/null
            // or behavior is auto, instant or undefined
            return true;
          }

          if (
            _typeof(firstArg) === "object" &&
            firstArg.behavior === "smooth"
          ) {
            // first argument is an object and behavior is smooth
            return false;
          } // throw error when behavior is not supported

          throw new TypeError(
            "behavior member of ScrollOptions " +
              firstArg.behavior +
              " is not a valid value for enumeration ScrollBehavior."
          );
        }
        /**
         * indicates if an element has scrollable space in the provided axis
         * @method hasScrollableSpace
         * @param {Node} el
         * @param {String} axis
         * @returns {Boolean}
         */

        function hasScrollableSpace(el, axis) {
          if (axis === "Y") {
            return el.clientHeight + ROUNDING_TOLERANCE < el.scrollHeight;
          }

          if (axis === "X") {
            return el.clientWidth + ROUNDING_TOLERANCE < el.scrollWidth;
          }
        }
        /**
         * indicates if an element has a scrollable overflow property in the axis
         * @method canOverflow
         * @param {Node} el
         * @param {String} axis
         * @returns {Boolean}
         */

        function canOverflow(el, axis) {
          var overflowValue = w.getComputedStyle(el, null)["overflow" + axis];
          return overflowValue === "auto" || overflowValue === "scroll";
        }
        /**
         * indicates if an element can be scrolled in either axis
         * @method isScrollable
         * @param {Node} el
         * @param {String} axis
         * @returns {Boolean}
         */

        function isScrollable(el) {
          var isScrollableY =
            hasScrollableSpace(el, "Y") && canOverflow(el, "Y");
          var isScrollableX =
            hasScrollableSpace(el, "X") && canOverflow(el, "X");
          return isScrollableY || isScrollableX;
        }
        /**
         * finds scrollable parent of an element
         * @method findScrollableParent
         * @param {Node} el
         * @returns {Node} el
         */

        function findScrollableParent(el) {
          while (el !== d.body && isScrollable(el) === false) {
            el = el.parentNode || el.host;
          }

          return el;
        }
        /**
         * self invoked function that, given a context, steps through scrolling
         * @method step
         * @param {Object} context
         * @returns {undefined}
         */

        function step(context) {
          var time = now();
          var value;
          var currentX;
          var currentY;
          var elapsed = (time - context.startTime) / SCROLL_TIME; // avoid elapsed times higher than one

          elapsed = elapsed > 1 ? 1 : elapsed; // apply easing to elapsed time

          value = ease(elapsed);
          currentX = context.startX + (context.x - context.startX) * value;
          currentY = context.startY + (context.y - context.startY) * value;
          context.method.call(context.scrollable, currentX, currentY); // scroll more if we have not reached our destination

          if (currentX !== context.x || currentY !== context.y) {
            w.requestAnimationFrame(step.bind(w, context));
          }
        }
        /**
         * scrolls window or element with a smooth behavior
         * @method smoothScroll
         * @param {Object|Node} el
         * @param {Number} x
         * @param {Number} y
         * @returns {undefined}
         */

        function smoothScroll(el, x, y) {
          var scrollable;
          var startX;
          var startY;
          var method;
          var startTime = now(); // define scroll context

          if (el === d.body) {
            scrollable = w;
            startX = w.scrollX || w.pageXOffset;
            startY = w.scrollY || w.pageYOffset;
            method = original.scroll;
          } else {
            scrollable = el;
            startX = el.scrollLeft;
            startY = el.scrollTop;
            method = scrollElement;
          } // scroll looping over a frame

          step({
            scrollable: scrollable,
            method: method,
            startTime: startTime,
            startX: startX,
            startY: startY,
            x: x,
            y: y
          });
        } // ORIGINAL METHODS OVERRIDES
        // w.scroll and w.scrollTo

        w.scroll = w.scrollTo = function() {
          // avoid action when no arguments are passed
          if (arguments[0] === undefined) {
            return;
          } // avoid smooth behavior if not required

          if (shouldBailOut(arguments[0]) === true) {
            original.scroll.call(
              w,
              arguments[0].left !== undefined
                ? arguments[0].left
                : _typeof(arguments[0]) !== "object"
                ? arguments[0]
                : w.scrollX || w.pageXOffset, // use top prop, second argument if present or fallback to scrollY
              arguments[0].top !== undefined
                ? arguments[0].top
                : arguments[1] !== undefined
                ? arguments[1]
                : w.scrollY || w.pageYOffset
            );
            return;
          } // LET THE SMOOTHNESS BEGIN!

          smoothScroll.call(
            w,
            d.body,
            arguments[0].left !== undefined
              ? ~~arguments[0].left
              : w.scrollX || w.pageXOffset,
            arguments[0].top !== undefined
              ? ~~arguments[0].top
              : w.scrollY || w.pageYOffset
          );
        }; // w.scrollBy

        w.scrollBy = function() {
          // avoid action when no arguments are passed
          if (arguments[0] === undefined) {
            return;
          } // avoid smooth behavior if not required

          if (shouldBailOut(arguments[0])) {
            original.scrollBy.call(
              w,
              arguments[0].left !== undefined
                ? arguments[0].left
                : _typeof(arguments[0]) !== "object"
                ? arguments[0]
                : 0,
              arguments[0].top !== undefined
                ? arguments[0].top
                : arguments[1] !== undefined
                ? arguments[1]
                : 0
            );
            return;
          } // LET THE SMOOTHNESS BEGIN!

          smoothScroll.call(
            w,
            d.body,
            ~~arguments[0].left + (w.scrollX || w.pageXOffset),
            ~~arguments[0].top + (w.scrollY || w.pageYOffset)
          );
        }; // Element.prototype.scroll and Element.prototype.scrollTo

        Element.prototype.scroll = Element.prototype.scrollTo = function() {
          // avoid action when no arguments are passed
          if (arguments[0] === undefined) {
            return;
          } // avoid smooth behavior if not required

          if (shouldBailOut(arguments[0]) === true) {
            // if one number is passed, throw error to match Firefox implementation
            if (
              typeof arguments[0] === "number" &&
              arguments[1] === undefined
            ) {
              throw new SyntaxError("Value could not be converted");
            }

            original.elementScroll.call(
              this, // use left prop, first number argument or fallback to scrollLeft
              arguments[0].left !== undefined
                ? ~~arguments[0].left
                : _typeof(arguments[0]) !== "object"
                ? ~~arguments[0]
                : this.scrollLeft, // use top prop, second argument or fallback to scrollTop
              arguments[0].top !== undefined
                ? ~~arguments[0].top
                : arguments[1] !== undefined
                ? ~~arguments[1]
                : this.scrollTop
            );
            return;
          }

          var left = arguments[0].left;
          var top = arguments[0].top; // LET THE SMOOTHNESS BEGIN!

          smoothScroll.call(
            this,
            this,
            typeof left === "undefined" ? this.scrollLeft : ~~left,
            typeof top === "undefined" ? this.scrollTop : ~~top
          );
        }; // Element.prototype.scrollBy

        Element.prototype.scrollBy = function() {
          // avoid action when no arguments are passed
          if (arguments[0] === undefined) {
            return;
          } // avoid smooth behavior if not required

          if (shouldBailOut(arguments[0]) === true) {
            original.elementScroll.call(
              this,
              arguments[0].left !== undefined
                ? ~~arguments[0].left + this.scrollLeft
                : ~~arguments[0] + this.scrollLeft,
              arguments[0].top !== undefined
                ? ~~arguments[0].top + this.scrollTop
                : ~~arguments[1] + this.scrollTop
            );
            return;
          }

          this.scroll({
            left: ~~arguments[0].left + this.scrollLeft,
            top: ~~arguments[0].top + this.scrollTop,
            behavior: arguments[0].behavior
          });
        }; // Element.prototype.scrollIntoView

        Element.prototype.scrollIntoView = function() {
          // avoid smooth behavior if not required
          if (shouldBailOut(arguments[0]) === true) {
            original.scrollIntoView.call(
              this,
              arguments[0] === undefined ? true : arguments[0]
            );
            return;
          } // LET THE SMOOTHNESS BEGIN!

          var scrollableParent = findScrollableParent(this);
          var parentRects = scrollableParent.getBoundingClientRect();
          var clientRects = this.getBoundingClientRect();

          if (scrollableParent !== d.body) {
            // reveal element inside parent
            smoothScroll.call(
              this,
              scrollableParent,
              scrollableParent.scrollLeft + clientRects.left - parentRects.left,
              scrollableParent.scrollTop + clientRects.top - parentRects.top
            ); // reveal parent in viewport unless is fixed

            if (w.getComputedStyle(scrollableParent).position !== "fixed") {
              w.scrollBy({
                left: parentRects.left,
                top: parentRects.top,
                behavior: "smooth"
              });
            }
          } else {
            // reveal element in viewport
            w.scrollBy({
              left: clientRects.left,
              top: clientRects.top,
              behavior: "smooth"
            });
          }
        };
      }

      if (
        (typeof exports === "undefined" ? "undefined" : _typeof(exports)) ===
          "object" &&
        typeof module !== "undefined"
      ) {
        // commonjs
        module.exports = {
          polyfill: polyfill
        };
      } else {
        // global
        polyfill();
      }
    })();
  },
  beforeDestroy: function beforeDestroy() {
    window.removeEventListener("scroll", this.checkTitles);
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
const __vue_script__ = TableOfContents;

/* template */
var __vue_render__ = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c(
    "contents-container",
    { attrs: { width: _vm.width } },
    [
      _c(
        "contents-table",
        [
          _c(
            "item",
            {
              staticClass: "visible-title table-of-contents-title",
              attrs: { flavor: _vm.flavor, tabindex: "0" },
              on: {
                click: _vm.toggleOverride,
                keyup: [
                  function($event) {
                    if (
                      !$event.type.indexOf("key") &&
                      _vm._k($event.keyCode, "space", 32, $event.key, [
                        " ",
                        "Spacebar"
                      ])
                    ) {
                      return null;
                    }
                    return _vm.toggleOverride($event);
                  },
                  function($event) {
                    if (
                      !$event.type.indexOf("key") &&
                      _vm._k($event.keyCode, "enter", 13, $event.key, "Enter")
                    ) {
                      return null;
                    }
                    return _vm.toggleOverride($event);
                  }
                ]
              }
            },
            [
              _vm._v("\n      Table of Contents\n      "),
              !_vm.override
                ? _c("toggler", [_vm._v("+")])
                : _c("toggler", [_vm._v("−")])
            ],
            1
          ),
          _vm._v(" "),
          _vm._l(_vm.titles, function(title) {
            return _c(
              "item",
              {
                key: title.id,
                class: {
                  "active-title": title.visible,
                  "margined-title": _vm.margined(title),
                  "visible-title": _vm.computeVisibility(title)
                },
                attrs: {
                  flavor: title.visible ? "MissileOrange" : _vm.flavor,
                  tabindex: _vm.computeVisibility(title) ? 0 : -1,
                  padding: title.titleType - 1
                },
                on: {
                  click: function($event) {
                    return _vm.scrollToEl(title.el);
                  },
                  keyup: [
                    function($event) {
                      if (
                        !$event.type.indexOf("key") &&
                        _vm._k($event.keyCode, "space", 32, $event.key, [
                          " ",
                          "Spacebar"
                        ])
                      ) {
                        return null;
                      }
                      return _vm.scrollToEl(title.el);
                    },
                    function($event) {
                      if (
                        !$event.type.indexOf("key") &&
                        _vm._k($event.keyCode, "enter", 13, $event.key, "Enter")
                      ) {
                        return null;
                      }
                      return _vm.scrollToEl(title.el);
                    }
                  ]
                }
              },
              [_vm._v(_vm._s(title.el.innerText))]
            );
          })
        ],
        2
      )
    ],
    1
  );
};
var __vue_staticRenderFns__ = [];
__vue_render__._withStripped = true;

/* style */
const __vue_inject_styles__ = function(inject) {
  if (!inject) return;
  inject("data-v-d8aa921e_0", {
    source:
      "\n.visible-title {\r\n  max-height: 100px !important;\r\n  padding-bottom: 2px;\r\n  padding-top: 2px;\n}\n.margined-title {\r\n  border-left-style: solid;\r\n  border-left-width: 3px;\r\n  border-left-color: #ff7200 !important;\n}\n.active-title {\r\n  font-weight: bold;\n}\n.table-of-contents-title {\r\n  font-size: 16px;\n}\r\n",
    map: {
      version: 3,
      sources: [
        "C:\\Users\\pedro\\Documents\\Work\\Storybook\\src\\components\\TableOfContents\\src\\TableOfContents.vue"
      ],
      names: [],
      mappings:
        ";AAi0BA;EACA,4BAAA;EACA,mBAAA;EACA,gBAAA;AACA;AACA;EACA,wBAAA;EACA,sBAAA;EACA,qCAAA;AACA;AACA;EACA,iBAAA;AACA;AACA;EACA,eAAA;AACA",
      file: "TableOfContents.vue",
      sourcesContent: [
        '<template>\r\n  <contents-container :width="width">\r\n    <contents-table>\r\n      <item\r\n        :flavor="flavor"\r\n        tabindex="0"\r\n        class="visible-title table-of-contents-title"\r\n        @click="toggleOverride"\r\n        @keyup.space="toggleOverride"\r\n        @keyup.enter="toggleOverride"\r\n      >\r\n        Table of Contents\r\n        <toggler v-if="!override">&#43;</toggler>\r\n        <toggler v-else>&#8722;</toggler>\r\n      </item>\r\n      <item\r\n        :flavor="title.visible ? \'MissileOrange\' : flavor"\r\n        :tabindex="computeVisibility(title) ? 0 : -1"\r\n        v-for="title in titles"\r\n        :key="title.id"\r\n        :padding="title.titleType - 1"\r\n        :class="{\r\n          \'active-title\': title.visible,\r\n          \'margined-title\': margined(title),\r\n          \'visible-title\': computeVisibility(title)\r\n        }"\r\n        @click="scrollToEl(title.el)"\r\n        @keyup.space="scrollToEl(title.el)"\r\n        @keyup.enter="scrollToEl(title.el)"\r\n      >{{ title.el.innerText }}</item>\r\n    </contents-table>\r\n  </contents-container>\r\n</template>\r\n\r\n<script>\r\nimport styled from "vue-styled-components";\r\nimport { TextTheme } from "@intus/design-system";\r\nif (!Element.prototype.matches) {\r\n  Element.prototype.matches =\r\n    Element.prototype.msMatchesSelector ||\r\n    Element.prototype.webkitMatchesSelector;\r\n}\r\nconst props = {\r\n  padding: {\r\n    type: Number,\r\n    default: 0\r\n  },\r\n  breakpoint: {\r\n    type: Number,\r\n    default: 576\r\n  },\r\n  topOffset: {\r\n    type: Number,\r\n    default: 100\r\n  },\r\n  width: {\r\n    type: String,\r\n    default: "auto"\r\n  },\r\n  textTheme: {\r\n    type: Object,\r\n    default: function() {\r\n      return TextTheme;\r\n    }\r\n  },\r\n  flavor: String\r\n};\r\nconst Toggler = styled.span`\r\n  color: #ff7200;\r\n  font-size: 16px;\r\n  font-weight: bold;\r\n  cursor: pointer;\r\n  pointer-events: none;\r\n`;\r\nconst ContentsContainer = styled("nav", props)`\r\n  display: block;\r\n  max-width: ${props => (props.width ? props.width : "auto")};\r\n`;\r\nconst ContentsTable = styled("ul", props)`\r\n  & * {\r\n    font-family: "Open Sans Regular", -apple-system, BlinkMacSystemFont,\r\n      "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif,\r\n      "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";\r\n    -webkit-touch-callout: none; /* iOS Safari */\r\n    -webkit-user-select: none; /* Safari */\r\n    -khtml-user-select: none; /* Konqueror HTML */\r\n    -moz-user-select: none; /* Firefox */\r\n    -ms-user-select: none; /* Internet Explorer/Edge */\r\n    user-select: none;\r\n  }\r\n  padding-left: 0px;\r\n  list-style: none;\r\n`;\r\n\r\nconst Item = styled("li", props)`\r\n  padding-left: ${props => props.padding * 10 + 10}px;\r\n  border-left-style: solid;\r\n  border-left-width: 2px;\r\n  font-size: 14px;\r\n  cursor: pointer;\r\n  transition: 0.2s all;\r\n  max-height: 0px;\r\n  overflow: hidden;\r\n  border-color: rgba(0, 0, 0, 0.1);\r\n  color: ${props =>\r\n    props.dark ? props.textTheme.Dark.color : props.textTheme.Normal.color};\r\n  ${props =>\r\n    props.flavor\r\n      ? props.textTheme[props.flavor]\r\n        ? "color " + props.textTheme[props.flavor].color\r\n        : ""\r\n      : ""};\r\n`;\r\n\r\nexport const TableOfContents = {\r\n  components: { ContentsTable, Item, ContentsContainer, Toggler },\r\n  data() {\r\n    return {\r\n      titles: [],\r\n      override: false,\r\n      scrollToOverride: false\r\n    };\r\n  },\r\n  props: {\r\n    width: {\r\n      type: String,\r\n      default: "auto"\r\n    },\r\n    flavor: {\r\n      type: String,\r\n      default: ""\r\n    },\r\n    queryOverride: {\r\n      type: String,\r\n      default: ""\r\n    },\r\n    offset: {\r\n      type: Number,\r\n      default: 0\r\n    }\r\n  },\r\n  methods: {\r\n    toggleOverride() {\r\n      this.override = !this.override;\r\n      for (let title of this.titles) {\r\n        title.override = this.override;\r\n      }\r\n    },\r\n    delayCollapse(title) {\r\n      setTimeout(() => (title.override = false), 500);\r\n    },\r\n    scrollToEl(el) {\r\n      const y =\r\n        el.getBoundingClientRect().top + window.pageYOffset - this.offset;\r\n      // el.scrollIntoView({ behavior: "smooth", block: "start" });\r\n      let IEHoldOff = 5; // IE is dumb and can\'t appropriately calculate viewport\r\n      window.scrollTo({ top: y - IEHoldOff, behavior: "smooth" });\r\n      this.scrollToOverride = true;\r\n      let self = this;\r\n      setTimeout(function() {\r\n        setTimeout(() => {\r\n          self.checkTitles();\r\n        }, 100);\r\n        self.scrollToOverride = false;\r\n      }, 500);\r\n      el.focus();\r\n    },\r\n    debounce(func, wait, immediate) {\r\n      // pulled from https://davidwalsh.name/javascript-debounce-function\r\n      var timeout;\r\n      return function() {\r\n        var context = this,\r\n          args = arguments;\r\n        var later = function() {\r\n          timeout = null;\r\n          if (!immediate) func.apply(context, args);\r\n        };\r\n        var callNow = immediate && !timeout;\r\n        clearTimeout(timeout);\r\n        timeout = setTimeout(later, wait);\r\n        if (callNow) func.apply(context, args);\r\n      };\r\n    },\r\n    computeOverride(title) {\r\n      return (\r\n        (!this.scrollToOverride && this.override) ||\r\n        title.override ||\r\n        title.children.filter(child => child.override).length > 0 ||\r\n        title.parents.filter(parent => parent.override).length > 0\r\n      );\r\n    },\r\n    computeScreenVisibility(title) {\r\n      return (\r\n        !this.scrollToOverride &&\r\n        (title.visible ||\r\n          title.children.filter(child => child.visible).length > 0)\r\n      );\r\n    },\r\n    computeVisibility(title) {\r\n      return (\r\n        title.parents.length == 0 ||\r\n        (title.directParents.length == 1 &&\r\n          title.parents.length == 1 &&\r\n          this.computeScreenVisibility(title.directParents[0])) ||\r\n        this.computeOverride(title) ||\r\n        this.computeScreenVisibility(title)\r\n      );\r\n    },\r\n    margined(title) {\r\n      return title.visible; //|| title.children.filter(child => child.visible).length > 0\r\n    },\r\n    isInView(el) {\r\n      // pulled from https://stackoverflow.com/questions/123999/how-can-i-tell-if-a-dom-element-is-visible-in-the-current-viewport\r\n      let box = el.getBoundingClientRect();\r\n      return box.top < window.innerHeight && box.bottom >= 0;\r\n    },\r\n    getPathTo(element) {\r\n      // pulled from https://stackoverflow.com/questions/2631820/how-do-i-ensure-saved-click-coordinates-can-be-reloaed-to-the-same-place-even-i/2631931#2631931\r\n      if (element.id !== "") return \'id("\' + element.id + \'")\';\r\n      if (element === document.body) return element.tagName;\r\n\r\n      var ix = 0;\r\n      var siblings = element.parentNode.childNodes;\r\n      for (var i = 0; i < siblings.length; i++) {\r\n        var sibling = siblings[i];\r\n        if (sibling === element)\r\n          return (\r\n            this.getPathTo(element.parentNode) +\r\n            "/" +\r\n            element.tagName +\r\n            "[" +\r\n            (ix + 1) +\r\n            "]"\r\n          );\r\n        if (sibling.nodeType === 1 && sibling.tagName === element.tagName) ix++;\r\n      }\r\n    },\r\n    checkIfTitle(el) {\r\n      if (this.queryOverride) {\r\n        return el.matches(this.queryOverride);\r\n      } else {\r\n        return el.matches("h1, h2, h3, h4, h5, h6");\r\n      }\r\n    },\r\n    calculateTitleType(el) {\r\n      if (this.queryOverride) {\r\n        return el.getAttribute("data-rank");\r\n      } else {\r\n        return parseInt(el.tagName[1]);\r\n      }\r\n    },\r\n    crawl(node) {\r\n      let titles = [];\r\n      let stack = [node];\r\n      let visited = [];\r\n      while (stack.length > 0) {\r\n        let el = stack.pop();\r\n        for (let child of Array.from(el.children).filter(\r\n          c => visited.indexOf(c) == -1 && !c.isEqualNode(el)\r\n        )) {\r\n          stack.push(child);\r\n        }\r\n        let path = this.getPathTo(el);\r\n        let notVisited = visited.indexOf(path) == -1;\r\n        let isTitle = this.checkIfTitle(el);\r\n        if (notVisited && isTitle) {\r\n          titles.push({\r\n            el: el,\r\n            id: this.getPathTo(el),\r\n            titleType: this.calculateTitleType(el),\r\n            offset: -1,\r\n            visible: false,\r\n            hovered: false,\r\n            override: false\r\n          });\r\n        }\r\n        visited.push(this.getPathTo(el));\r\n      }\r\n      return titles.reverse();\r\n    },\r\n    checkTitles() {\r\n      let yOffset = window.pageYOffset;\r\n      if (this.titles.length == 0) {\r\n        return;\r\n      }\r\n      for (let [index, title] of this.titles.entries()) {\r\n        title.offset = title.el.getBoundingClientRect().top;\r\n        if (title.offset < 20 + this.offset && title.offset > 0) {\r\n          for (let other of this.titles.filter(o => o.visible)) {\r\n            other.visible = false;\r\n          }\r\n          title.visible = true;\r\n        } else if (\r\n          title.visible &&\r\n          title.el.getBoundingClientRect().bottom >=\r\n            (window.innerHeight || document.documentElement.clientHeight)\r\n        ) {\r\n          if (this.titles[index - 1]) this.titles[index - 1].visible = true;\r\n          title.visible = false;\r\n        }\r\n      }\r\n      if (\r\n        yOffset == 0 &&\r\n        window.innerWidth - document.documentElement.clientWidth == 0\r\n      ) {\r\n        for (let other of this.titles.filter(o => o.visible)) {\r\n          other.visible = false;\r\n        }\r\n        this.titles[0].visible = true;\r\n      } else if (window.innerHeight + yOffset >= document.body.offsetHeight) {\r\n        for (let other of this.titles.filter(o => o.visible)) {\r\n          other.visible = false;\r\n        }\r\n        this.titles[this.titles.length - 1].visible = true;\r\n      }\r\n    },\r\n    assignChildren() {\r\n      for (let title = 0; title < this.titles.length; title++) {\r\n        let parentTitle = this.titles[title];\r\n\r\n        // instantiate parents, children, and direct parents arrays\r\n        if (!parentTitle.children) {\r\n          parentTitle.children = [];\r\n        }\r\n        if (!parentTitle.parents) {\r\n          parentTitle.parents = [];\r\n        }\r\n        if (!parentTitle.directParents) {\r\n          parentTitle.directParents = [];\r\n        }\r\n\r\n        for (\r\n          let potentialChild = title + 1;\r\n          potentialChild < this.titles.length;\r\n          potentialChild++\r\n        ) {\r\n          let childTitle = this.titles[potentialChild];\r\n\r\n          // if titletype is greater than parent, title is child of parent\r\n          if (childTitle.titleType > parentTitle.titleType) {\r\n            parentTitle.children.push(childTitle);\r\n            if (!childTitle.parents) {\r\n              childTitle.parents = [];\r\n            }\r\n            if (!childTitle.directParents) {\r\n              childTitle.directParents = [];\r\n            }\r\n\r\n            childTitle.parents.push(parentTitle);\r\n          } else {\r\n            break;\r\n          }\r\n        }\r\n      }\r\n      for (let title of this.titles) {\r\n        // look for titles with only root level parents\r\n        if (title.parents.length == 1) {\r\n          title.directParents.push(title.parents[0]);\r\n        }\r\n        // assign siblings\r\n        if (title.parents.length == 0) {\r\n          title.siblings = [];\r\n        } else {\r\n          title.siblings = this.titles.filter(\r\n            o =>\r\n              o.parents.filter(p => p.id == title.parents[0].id).length > 0 &&\r\n              o.parents.length == title.parents.length &&\r\n              o.id != title.id\r\n          );\r\n        }\r\n      }\r\n    }\r\n  },\r\n  mounted() {\r\n    this.titles = this.crawl(document.getElementsByTagName("body")[0]);\r\n    this.assignChildren();\r\n    this.checkTitles();\r\n    window.addEventListener("scroll", this.checkTitles);\r\n    (function() {\r\n      "use strict";\r\n\r\n      // polyfill\r\n      function polyfill() {\r\n        // aliases\r\n        var w = window;\r\n        var d = document;\r\n\r\n        // return if scroll behavior is supported and polyfill is not forced\r\n        if (\r\n          "scrollBehavior" in d.documentElement.style &&\r\n          w.__forceSmoothScrollPolyfill__ !== true\r\n        ) {\r\n          return;\r\n        }\r\n\r\n        // globals\r\n        var Element = w.HTMLElement || w.Element;\r\n        var SCROLL_TIME = 468;\r\n\r\n        // object gathering original scroll methods\r\n        var original = {\r\n          scroll: w.scroll || w.scrollTo,\r\n          scrollBy: w.scrollBy,\r\n          elementScroll: Element.prototype.scroll || scrollElement,\r\n          scrollIntoView: Element.prototype.scrollIntoView\r\n        };\r\n\r\n        // define timing method\r\n        var now =\r\n          w.performance && w.performance.now\r\n            ? w.performance.now.bind(w.performance)\r\n            : Date.now;\r\n\r\n        /**\r\n         * indicates if a the current browser is made by Microsoft\r\n         * @method isMicrosoftBrowser\r\n         * @param {String} userAgent\r\n         * @returns {Boolean}\r\n         */\r\n        function isMicrosoftBrowser(userAgent) {\r\n          var userAgentPatterns = ["MSIE ", "Trident/", "Edge/"];\r\n\r\n          return new RegExp(userAgentPatterns.join("|")).test(userAgent);\r\n        }\r\n\r\n        /*\r\n         * IE has rounding bug rounding down clientHeight and clientWidth and\r\n         * rounding up scrollHeight and scrollWidth causing false positives\r\n         * on hasScrollableSpace\r\n         */\r\n        var ROUNDING_TOLERANCE = isMicrosoftBrowser(w.navigator.userAgent)\r\n          ? 1\r\n          : 0;\r\n\r\n        /**\r\n         * changes scroll position inside an element\r\n         * @method scrollElement\r\n         * @param {Number} x\r\n         * @param {Number} y\r\n         * @returns {undefined}\r\n         */\r\n        function scrollElement(x, y) {\r\n          this.scrollLeft = x;\r\n          this.scrollTop = y;\r\n        }\r\n\r\n        /**\r\n         * returns result of applying ease math function to a number\r\n         * @method ease\r\n         * @param {Number} k\r\n         * @returns {Number}\r\n         */\r\n        function ease(k) {\r\n          return 0.5 * (1 - Math.cos(Math.PI * k));\r\n        }\r\n\r\n        /**\r\n         * indicates if a smooth behavior should be applied\r\n         * @method shouldBailOut\r\n         * @param {Number|Object} firstArg\r\n         * @returns {Boolean}\r\n         */\r\n        function shouldBailOut(firstArg) {\r\n          if (\r\n            firstArg === null ||\r\n            typeof firstArg !== "object" ||\r\n            firstArg.behavior === undefined ||\r\n            firstArg.behavior === "auto" ||\r\n            firstArg.behavior === "instant"\r\n          ) {\r\n            // first argument is not an object/null\r\n            // or behavior is auto, instant or undefined\r\n            return true;\r\n          }\r\n\r\n          if (typeof firstArg === "object" && firstArg.behavior === "smooth") {\r\n            // first argument is an object and behavior is smooth\r\n            return false;\r\n          }\r\n\r\n          // throw error when behavior is not supported\r\n          throw new TypeError(\r\n            "behavior member of ScrollOptions " +\r\n              firstArg.behavior +\r\n              " is not a valid value for enumeration ScrollBehavior."\r\n          );\r\n        }\r\n\r\n        /**\r\n         * indicates if an element has scrollable space in the provided axis\r\n         * @method hasScrollableSpace\r\n         * @param {Node} el\r\n         * @param {String} axis\r\n         * @returns {Boolean}\r\n         */\r\n        function hasScrollableSpace(el, axis) {\r\n          if (axis === "Y") {\r\n            return el.clientHeight + ROUNDING_TOLERANCE < el.scrollHeight;\r\n          }\r\n\r\n          if (axis === "X") {\r\n            return el.clientWidth + ROUNDING_TOLERANCE < el.scrollWidth;\r\n          }\r\n        }\r\n\r\n        /**\r\n         * indicates if an element has a scrollable overflow property in the axis\r\n         * @method canOverflow\r\n         * @param {Node} el\r\n         * @param {String} axis\r\n         * @returns {Boolean}\r\n         */\r\n        function canOverflow(el, axis) {\r\n          var overflowValue = w.getComputedStyle(el, null)["overflow" + axis];\r\n\r\n          return overflowValue === "auto" || overflowValue === "scroll";\r\n        }\r\n\r\n        /**\r\n         * indicates if an element can be scrolled in either axis\r\n         * @method isScrollable\r\n         * @param {Node} el\r\n         * @param {String} axis\r\n         * @returns {Boolean}\r\n         */\r\n        function isScrollable(el) {\r\n          var isScrollableY =\r\n            hasScrollableSpace(el, "Y") && canOverflow(el, "Y");\r\n          var isScrollableX =\r\n            hasScrollableSpace(el, "X") && canOverflow(el, "X");\r\n\r\n          return isScrollableY || isScrollableX;\r\n        }\r\n\r\n        /**\r\n         * finds scrollable parent of an element\r\n         * @method findScrollableParent\r\n         * @param {Node} el\r\n         * @returns {Node} el\r\n         */\r\n        function findScrollableParent(el) {\r\n          while (el !== d.body && isScrollable(el) === false) {\r\n            el = el.parentNode || el.host;\r\n          }\r\n\r\n          return el;\r\n        }\r\n\r\n        /**\r\n         * self invoked function that, given a context, steps through scrolling\r\n         * @method step\r\n         * @param {Object} context\r\n         * @returns {undefined}\r\n         */\r\n        function step(context) {\r\n          var time = now();\r\n          var value;\r\n          var currentX;\r\n          var currentY;\r\n          var elapsed = (time - context.startTime) / SCROLL_TIME;\r\n\r\n          // avoid elapsed times higher than one\r\n          elapsed = elapsed > 1 ? 1 : elapsed;\r\n\r\n          // apply easing to elapsed time\r\n          value = ease(elapsed);\r\n\r\n          currentX = context.startX + (context.x - context.startX) * value;\r\n          currentY = context.startY + (context.y - context.startY) * value;\r\n\r\n          context.method.call(context.scrollable, currentX, currentY);\r\n\r\n          // scroll more if we have not reached our destination\r\n          if (currentX !== context.x || currentY !== context.y) {\r\n            w.requestAnimationFrame(step.bind(w, context));\r\n          }\r\n        }\r\n\r\n        /**\r\n         * scrolls window or element with a smooth behavior\r\n         * @method smoothScroll\r\n         * @param {Object|Node} el\r\n         * @param {Number} x\r\n         * @param {Number} y\r\n         * @returns {undefined}\r\n         */\r\n        function smoothScroll(el, x, y) {\r\n          var scrollable;\r\n          var startX;\r\n          var startY;\r\n          var method;\r\n          var startTime = now();\r\n\r\n          // define scroll context\r\n          if (el === d.body) {\r\n            scrollable = w;\r\n            startX = w.scrollX || w.pageXOffset;\r\n            startY = w.scrollY || w.pageYOffset;\r\n            method = original.scroll;\r\n          } else {\r\n            scrollable = el;\r\n            startX = el.scrollLeft;\r\n            startY = el.scrollTop;\r\n            method = scrollElement;\r\n          }\r\n\r\n          // scroll looping over a frame\r\n          step({\r\n            scrollable: scrollable,\r\n            method: method,\r\n            startTime: startTime,\r\n            startX: startX,\r\n            startY: startY,\r\n            x: x,\r\n            y: y\r\n          });\r\n        }\r\n\r\n        // ORIGINAL METHODS OVERRIDES\r\n        // w.scroll and w.scrollTo\r\n        w.scroll = w.scrollTo = function() {\r\n          // avoid action when no arguments are passed\r\n          if (arguments[0] === undefined) {\r\n            return;\r\n          }\r\n\r\n          // avoid smooth behavior if not required\r\n          if (shouldBailOut(arguments[0]) === true) {\r\n            original.scroll.call(\r\n              w,\r\n              arguments[0].left !== undefined\r\n                ? arguments[0].left\r\n                : typeof arguments[0] !== "object"\r\n                ? arguments[0]\r\n                : w.scrollX || w.pageXOffset,\r\n              // use top prop, second argument if present or fallback to scrollY\r\n              arguments[0].top !== undefined\r\n                ? arguments[0].top\r\n                : arguments[1] !== undefined\r\n                ? arguments[1]\r\n                : w.scrollY || w.pageYOffset\r\n            );\r\n\r\n            return;\r\n          }\r\n\r\n          // LET THE SMOOTHNESS BEGIN!\r\n          smoothScroll.call(\r\n            w,\r\n            d.body,\r\n            arguments[0].left !== undefined\r\n              ? ~~arguments[0].left\r\n              : w.scrollX || w.pageXOffset,\r\n            arguments[0].top !== undefined\r\n              ? ~~arguments[0].top\r\n              : w.scrollY || w.pageYOffset\r\n          );\r\n        };\r\n\r\n        // w.scrollBy\r\n        w.scrollBy = function() {\r\n          // avoid action when no arguments are passed\r\n          if (arguments[0] === undefined) {\r\n            return;\r\n          }\r\n\r\n          // avoid smooth behavior if not required\r\n          if (shouldBailOut(arguments[0])) {\r\n            original.scrollBy.call(\r\n              w,\r\n              arguments[0].left !== undefined\r\n                ? arguments[0].left\r\n                : typeof arguments[0] !== "object"\r\n                ? arguments[0]\r\n                : 0,\r\n              arguments[0].top !== undefined\r\n                ? arguments[0].top\r\n                : arguments[1] !== undefined\r\n                ? arguments[1]\r\n                : 0\r\n            );\r\n\r\n            return;\r\n          }\r\n\r\n          // LET THE SMOOTHNESS BEGIN!\r\n          smoothScroll.call(\r\n            w,\r\n            d.body,\r\n            ~~arguments[0].left + (w.scrollX || w.pageXOffset),\r\n            ~~arguments[0].top + (w.scrollY || w.pageYOffset)\r\n          );\r\n        };\r\n\r\n        // Element.prototype.scroll and Element.prototype.scrollTo\r\n        Element.prototype.scroll = Element.prototype.scrollTo = function() {\r\n          // avoid action when no arguments are passed\r\n          if (arguments[0] === undefined) {\r\n            return;\r\n          }\r\n\r\n          // avoid smooth behavior if not required\r\n          if (shouldBailOut(arguments[0]) === true) {\r\n            // if one number is passed, throw error to match Firefox implementation\r\n            if (\r\n              typeof arguments[0] === "number" &&\r\n              arguments[1] === undefined\r\n            ) {\r\n              throw new SyntaxError("Value could not be converted");\r\n            }\r\n\r\n            original.elementScroll.call(\r\n              this,\r\n              // use left prop, first number argument or fallback to scrollLeft\r\n              arguments[0].left !== undefined\r\n                ? ~~arguments[0].left\r\n                : typeof arguments[0] !== "object"\r\n                ? ~~arguments[0]\r\n                : this.scrollLeft,\r\n              // use top prop, second argument or fallback to scrollTop\r\n              arguments[0].top !== undefined\r\n                ? ~~arguments[0].top\r\n                : arguments[1] !== undefined\r\n                ? ~~arguments[1]\r\n                : this.scrollTop\r\n            );\r\n\r\n            return;\r\n          }\r\n\r\n          var left = arguments[0].left;\r\n          var top = arguments[0].top;\r\n\r\n          // LET THE SMOOTHNESS BEGIN!\r\n          smoothScroll.call(\r\n            this,\r\n            this,\r\n            typeof left === "undefined" ? this.scrollLeft : ~~left,\r\n            typeof top === "undefined" ? this.scrollTop : ~~top\r\n          );\r\n        };\r\n\r\n        // Element.prototype.scrollBy\r\n        Element.prototype.scrollBy = function() {\r\n          // avoid action when no arguments are passed\r\n          if (arguments[0] === undefined) {\r\n            return;\r\n          }\r\n\r\n          // avoid smooth behavior if not required\r\n          if (shouldBailOut(arguments[0]) === true) {\r\n            original.elementScroll.call(\r\n              this,\r\n              arguments[0].left !== undefined\r\n                ? ~~arguments[0].left + this.scrollLeft\r\n                : ~~arguments[0] + this.scrollLeft,\r\n              arguments[0].top !== undefined\r\n                ? ~~arguments[0].top + this.scrollTop\r\n                : ~~arguments[1] + this.scrollTop\r\n            );\r\n\r\n            return;\r\n          }\r\n\r\n          this.scroll({\r\n            left: ~~arguments[0].left + this.scrollLeft,\r\n            top: ~~arguments[0].top + this.scrollTop,\r\n            behavior: arguments[0].behavior\r\n          });\r\n        };\r\n\r\n        // Element.prototype.scrollIntoView\r\n        Element.prototype.scrollIntoView = function() {\r\n          // avoid smooth behavior if not required\r\n          if (shouldBailOut(arguments[0]) === true) {\r\n            original.scrollIntoView.call(\r\n              this,\r\n              arguments[0] === undefined ? true : arguments[0]\r\n            );\r\n\r\n            return;\r\n          }\r\n\r\n          // LET THE SMOOTHNESS BEGIN!\r\n          var scrollableParent = findScrollableParent(this);\r\n          var parentRects = scrollableParent.getBoundingClientRect();\r\n          var clientRects = this.getBoundingClientRect();\r\n\r\n          if (scrollableParent !== d.body) {\r\n            // reveal element inside parent\r\n            smoothScroll.call(\r\n              this,\r\n              scrollableParent,\r\n              scrollableParent.scrollLeft + clientRects.left - parentRects.left,\r\n              scrollableParent.scrollTop + clientRects.top - parentRects.top\r\n            );\r\n\r\n            // reveal parent in viewport unless is fixed\r\n            if (w.getComputedStyle(scrollableParent).position !== "fixed") {\r\n              w.scrollBy({\r\n                left: parentRects.left,\r\n                top: parentRects.top,\r\n                behavior: "smooth"\r\n              });\r\n            }\r\n          } else {\r\n            // reveal element in viewport\r\n            w.scrollBy({\r\n              left: clientRects.left,\r\n              top: clientRects.top,\r\n              behavior: "smooth"\r\n            });\r\n          }\r\n        };\r\n      }\r\n\r\n      if (typeof exports === "object" && typeof module !== "undefined") {\r\n        // commonjs\r\n        module.exports = { polyfill: polyfill };\r\n      } else {\r\n        // global\r\n        polyfill();\r\n      }\r\n    })();\r\n  },\r\n  beforeDestroy() {\r\n    window.removeEventListener("scroll", this.checkTitles);\r\n  }\r\n};\r\nexport default TableOfContents;\r\n</script>\r\n\r\n<style>\r\n.visible-title {\r\n  max-height: 100px !important;\r\n  padding-bottom: 2px;\r\n  padding-top: 2px;\r\n}\r\n.margined-title {\r\n  border-left-style: solid;\r\n  border-left-width: 3px;\r\n  border-left-color: #ff7200 !important;\r\n}\r\n.active-title {\r\n  font-weight: bold;\r\n}\r\n.table-of-contents-title {\r\n  font-size: 16px;\r\n}\r\n</style>\r\n'
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

var install = function installTableOfContents(Vue) {
  if (install.installed) return;
  install.installed = true;
  Vue.component("TableOfContents", __vue_component__);
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
//# sourceMappingURL=TableOfContents.esm.js.map
