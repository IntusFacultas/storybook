<template>
  <contents-container :width="width">
    <contents-table>
      <item
        :flavor="flavor"
        tabindex="0"
        class="visible-title table-of-contents-title"
        @click="toggleOverride"
        @keyup.space="toggleOverride"
        @keyup.enter="toggleOverride"
      >
        Table of Contents
        <toggler v-if="!override">&#43;</toggler>
        <toggler v-else>&#8722;</toggler>
      </item>
      <item
        :flavor="title.visible ? 'MissileOrange' : flavor"
        :tabindex="computeVisibility(title) ? 0 : -1"
        v-for="title in titles"
        :key="title.id"
        :padding="title.titleType - 1"
        :class="{
          'active-title': title.visible,
          'margined-title': margined(title),
          'visible-title': computeVisibility(title)
        }"
        @click="scrollToEl(title.el)"
        @keyup.space="scrollToEl(title.el)"
        @keyup.enter="scrollToEl(title.el)"
        >{{ title.el.innerText }}</item
      >
    </contents-table>
  </contents-container>
</template>

<script>
import styled from "vue-styled-components";
import { TextTheme } from "@IntusFacultas/design-system";
if (!Element.prototype.matches) {
  Element.prototype.matches =
    Element.prototype.msMatchesSelector ||
    Element.prototype.webkitMatchesSelector;
}
const props = {
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
    default: function() {
      return TextTheme;
    }
  },
  flavor: String
};
const Toggler = styled.span`
  color: #ff7200;
  font-size: 16px;
  font-weight: bold;
  cursor: pointer;
  pointer-events: none;
`;
const ContentsContainer = styled("nav", props)`
  display: block;
  max-width: ${props => (props.width ? props.width : "auto")};
`;
const ContentsTable = styled("ul", props)`
  & * {
    font-family: "Open Sans Regular", -apple-system, BlinkMacSystemFont,
      "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif,
      "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
    -webkit-touch-callout: none; /* iOS Safari */
    -webkit-user-select: none; /* Safari */
    -khtml-user-select: none; /* Konqueror HTML */
    -moz-user-select: none; /* Firefox */
    -ms-user-select: none; /* Internet Explorer/Edge */
    user-select: none;
  }
  padding-left: 0px;
  list-style: none;
`;

const Item = styled("li", props)`
  padding-left: ${props => props.padding * 10 + 10}px;
  border-left-style: solid;
  border-left-width: 2px;
  font-size: 14px;
  cursor: pointer;
  transition: 0.2s all;
  max-height: 0px;
  overflow: hidden;
  border-color: rgba(0, 0, 0, 0.1);
  color: ${props =>
    props.dark ? props.textTheme.Dark.color : props.textTheme.Normal.color};
  ${props =>
    props.flavor
      ? props.textTheme[props.flavor]
        ? "color " + props.textTheme[props.flavor].color
        : ""
      : ""};
`;

export const TableOfContents = {
  components: { ContentsTable, Item, ContentsContainer, Toggler },
  data() {
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
    toggleOverride() {
      this.override = !this.override;
      for (let title of this.titles) {
        title.override = this.override;
      }
    },
    delayCollapse(title) {
      setTimeout(() => (title.override = false), 500);
    },
    scrollToEl(el) {
      const y =
        el.getBoundingClientRect().top + window.pageYOffset - this.offset;
      // el.scrollIntoView({ behavior: "smooth", block: "start" });
      let IEHoldOff = 5; // IE is dumb and can't appropriately calculate viewport
      window.scrollTo({ top: y - IEHoldOff, behavior: "smooth" });
      this.scrollToOverride = true;
      let self = this;
      setTimeout(function() {
        setTimeout(() => {
          self.checkTitles();
        }, 100);
        self.scrollToOverride = false;
      }, 500);
      el.focus();
    },
    debounce(func, wait, immediate) {
      // pulled from https://davidwalsh.name/javascript-debounce-function
      var timeout;
      return function() {
        var context = this,
          args = arguments;
        var later = function() {
          timeout = null;
          if (!immediate) func.apply(context, args);
        };
        var callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
        if (callNow) func.apply(context, args);
      };
    },
    computeOverride(title) {
      return (
        (!this.scrollToOverride && this.override) ||
        title.override ||
        title.children.filter(child => child.override).length > 0 ||
        title.parents.filter(parent => parent.override).length > 0
      );
    },
    computeScreenVisibility(title) {
      return (
        !this.scrollToOverride &&
        (title.visible ||
          title.children.filter(child => child.visible).length > 0)
      );
    },
    computeVisibility(title) {
      return (
        title.parents.length == 0 ||
        (title.directParents.length == 1 &&
          title.parents.length == 1 &&
          this.computeScreenVisibility(title.directParents[0])) ||
        this.computeOverride(title) ||
        this.computeScreenVisibility(title)
      );
    },
    margined(title) {
      return title.visible; //|| title.children.filter(child => child.visible).length > 0
    },
    isInView(el) {
      // pulled from https://stackoverflow.com/questions/123999/how-can-i-tell-if-a-dom-element-is-visible-in-the-current-viewport
      let box = el.getBoundingClientRect();
      return box.top < window.innerHeight && box.bottom >= 0;
    },
    getPathTo(element) {
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
    checkIfTitle(el) {
      if (this.queryOverride) {
        return el.matches(this.queryOverride);
      } else {
        return el.matches("h1, h2, h3, h4, h5, h6");
      }
    },
    calculateTitleType(el) {
      if (this.queryOverride) {
        return el.getAttribute("data-rank");
      } else {
        return parseInt(el.tagName[1]);
      }
    },
    crawl(node) {
      let titles = [];
      let stack = [node];
      let visited = [];
      while (stack.length > 0) {
        let el = stack.pop();
        for (let child of Array.from(el.children).filter(
          c => visited.indexOf(c) == -1 && !c.isEqualNode(el)
        )) {
          stack.push(child);
        }
        let path = this.getPathTo(el);
        let notVisited = visited.indexOf(path) == -1;
        let isTitle = this.checkIfTitle(el);
        if (notVisited && isTitle) {
          titles.push({
            el: el,
            id: this.getPathTo(el),
            titleType: this.calculateTitleType(el),
            offset: -1,
            visible: false,
            hovered: false,
            override: false
          });
        }
        visited.push(this.getPathTo(el));
      }
      return titles.reverse();
    },
    checkTitles() {
      let yOffset = window.pageYOffset;
      if (this.titles.length == 0) {
        return;
      }
      for (let [index, title] of this.titles.entries()) {
        title.offset = title.el.getBoundingClientRect().top;
        if (title.offset < 20 + this.offset && title.offset > 0) {
          for (let other of this.titles.filter(o => o.visible)) {
            other.visible = false;
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
      if (
        yOffset == 0 &&
        window.innerWidth - document.documentElement.clientWidth == 0
      ) {
        for (let other of this.titles.filter(o => o.visible)) {
          other.visible = false;
        }
        this.titles[0].visible = true;
      } else if (window.innerHeight + yOffset >= document.body.offsetHeight) {
        for (let other of this.titles.filter(o => o.visible)) {
          other.visible = false;
        }
        this.titles[this.titles.length - 1].visible = true;
      }
    },
    assignChildren() {
      for (let title = 0; title < this.titles.length; title++) {
        let parentTitle = this.titles[title];

        // instantiate parents, children, and direct parents arrays
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
          let potentialChild = title + 1;
          potentialChild < this.titles.length;
          potentialChild++
        ) {
          let childTitle = this.titles[potentialChild];

          // if titletype is greater than parent, title is child of parent
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
      for (let title of this.titles) {
        // look for titles with only root level parents
        if (title.parents.length == 1) {
          title.directParents.push(title.parents[0]);
        }
        // assign siblings
        if (title.parents.length == 0) {
          title.siblings = [];
        } else {
          title.siblings = this.titles.filter(
            o =>
              o.parents.filter(p => p.id == title.parents[0].id).length > 0 &&
              o.parents.length == title.parents.length &&
              o.id != title.id
          );
        }
      }
    }
  },
  mounted() {
    this.titles = this.crawl(document.getElementsByTagName("body")[0]);
    this.assignChildren();
    this.checkTitles();
    window.addEventListener("scroll", this.checkTitles);
    (function() {
      "use strict";

      // polyfill
      function polyfill() {
        // aliases
        var w = window;
        var d = document;

        // return if scroll behavior is supported and polyfill is not forced
        if (
          "scrollBehavior" in d.documentElement.style &&
          w.__forceSmoothScrollPolyfill__ !== true
        ) {
          return;
        }

        // globals
        var Element = w.HTMLElement || w.Element;
        var SCROLL_TIME = 468;

        // object gathering original scroll methods
        var original = {
          scroll: w.scroll || w.scrollTo,
          scrollBy: w.scrollBy,
          elementScroll: Element.prototype.scroll || scrollElement,
          scrollIntoView: Element.prototype.scrollIntoView
        };

        // define timing method
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
            typeof firstArg !== "object" ||
            firstArg.behavior === undefined ||
            firstArg.behavior === "auto" ||
            firstArg.behavior === "instant"
          ) {
            // first argument is not an object/null
            // or behavior is auto, instant or undefined
            return true;
          }

          if (typeof firstArg === "object" && firstArg.behavior === "smooth") {
            // first argument is an object and behavior is smooth
            return false;
          }

          // throw error when behavior is not supported
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
          var elapsed = (time - context.startTime) / SCROLL_TIME;

          // avoid elapsed times higher than one
          elapsed = elapsed > 1 ? 1 : elapsed;

          // apply easing to elapsed time
          value = ease(elapsed);

          currentX = context.startX + (context.x - context.startX) * value;
          currentY = context.startY + (context.y - context.startY) * value;

          context.method.call(context.scrollable, currentX, currentY);

          // scroll more if we have not reached our destination
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
          var startTime = now();

          // define scroll context
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
          }

          // scroll looping over a frame
          step({
            scrollable: scrollable,
            method: method,
            startTime: startTime,
            startX: startX,
            startY: startY,
            x: x,
            y: y
          });
        }

        // ORIGINAL METHODS OVERRIDES
        // w.scroll and w.scrollTo
        w.scroll = w.scrollTo = function() {
          // avoid action when no arguments are passed
          if (arguments[0] === undefined) {
            return;
          }

          // avoid smooth behavior if not required
          if (shouldBailOut(arguments[0]) === true) {
            original.scroll.call(
              w,
              arguments[0].left !== undefined
                ? arguments[0].left
                : typeof arguments[0] !== "object"
                ? arguments[0]
                : w.scrollX || w.pageXOffset,
              // use top prop, second argument if present or fallback to scrollY
              arguments[0].top !== undefined
                ? arguments[0].top
                : arguments[1] !== undefined
                ? arguments[1]
                : w.scrollY || w.pageYOffset
            );

            return;
          }

          // LET THE SMOOTHNESS BEGIN!
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
        };

        // w.scrollBy
        w.scrollBy = function() {
          // avoid action when no arguments are passed
          if (arguments[0] === undefined) {
            return;
          }

          // avoid smooth behavior if not required
          if (shouldBailOut(arguments[0])) {
            original.scrollBy.call(
              w,
              arguments[0].left !== undefined
                ? arguments[0].left
                : typeof arguments[0] !== "object"
                ? arguments[0]
                : 0,
              arguments[0].top !== undefined
                ? arguments[0].top
                : arguments[1] !== undefined
                ? arguments[1]
                : 0
            );

            return;
          }

          // LET THE SMOOTHNESS BEGIN!
          smoothScroll.call(
            w,
            d.body,
            ~~arguments[0].left + (w.scrollX || w.pageXOffset),
            ~~arguments[0].top + (w.scrollY || w.pageYOffset)
          );
        };

        // Element.prototype.scroll and Element.prototype.scrollTo
        Element.prototype.scroll = Element.prototype.scrollTo = function() {
          // avoid action when no arguments are passed
          if (arguments[0] === undefined) {
            return;
          }

          // avoid smooth behavior if not required
          if (shouldBailOut(arguments[0]) === true) {
            // if one number is passed, throw error to match Firefox implementation
            if (
              typeof arguments[0] === "number" &&
              arguments[1] === undefined
            ) {
              throw new SyntaxError("Value could not be converted");
            }

            original.elementScroll.call(
              this,
              // use left prop, first number argument or fallback to scrollLeft
              arguments[0].left !== undefined
                ? ~~arguments[0].left
                : typeof arguments[0] !== "object"
                ? ~~arguments[0]
                : this.scrollLeft,
              // use top prop, second argument or fallback to scrollTop
              arguments[0].top !== undefined
                ? ~~arguments[0].top
                : arguments[1] !== undefined
                ? ~~arguments[1]
                : this.scrollTop
            );

            return;
          }

          var left = arguments[0].left;
          var top = arguments[0].top;

          // LET THE SMOOTHNESS BEGIN!
          smoothScroll.call(
            this,
            this,
            typeof left === "undefined" ? this.scrollLeft : ~~left,
            typeof top === "undefined" ? this.scrollTop : ~~top
          );
        };

        // Element.prototype.scrollBy
        Element.prototype.scrollBy = function() {
          // avoid action when no arguments are passed
          if (arguments[0] === undefined) {
            return;
          }

          // avoid smooth behavior if not required
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
        };

        // Element.prototype.scrollIntoView
        Element.prototype.scrollIntoView = function() {
          // avoid smooth behavior if not required
          if (shouldBailOut(arguments[0]) === true) {
            original.scrollIntoView.call(
              this,
              arguments[0] === undefined ? true : arguments[0]
            );

            return;
          }

          // LET THE SMOOTHNESS BEGIN!
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
            );

            // reveal parent in viewport unless is fixed
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

      if (typeof exports === "object" && typeof module !== "undefined") {
        // commonjs
        module.exports = { polyfill: polyfill };
      } else {
        // global
        polyfill();
      }
    })();
  },
  beforeDestroy() {
    window.removeEventListener("scroll", this.checkTitles);
  }
};
export default TableOfContents;
</script>

<style>
.visible-title {
  max-height: 100px !important;
  padding-bottom: 2px;
  padding-top: 2px;
}
.margined-title {
  border-left-style: solid;
  border-left-width: 3px;
  border-left-color: #ff7200 !important;
}
.active-title {
  font-weight: bold;
}
.table-of-contents-title {
  font-size: 16px;
}
</style>
