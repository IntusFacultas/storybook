<template>
  <navbar-container
    :flavor="flavor"
    ref="container"
    :fixed="fixed"
    :collapsed="collapsed"
    :data-navbar="_uid"
  >
    <navbar-title ref="title">
      <div v-html="title.html" class="navbar-brand"></div>
      <a v-if="title.text" :href="title.url ? title.url : '#'">
        {{
        title.text
        }}
      </a>
    </navbar-title>
    <n-button
      class="nav-button"
      v-show="collapsed"
      :flavor="flavor"
      @click="toggleAccordion"
      ref="hamburger"
    >&#9776;</n-button>
    <navbar-content-container :collapsed="collapsed" ref="content">
      <slot></slot>
    </navbar-content-container>
  </navbar-container>
</template>
<script>
import {
  NavbarContainer,
  NavbarTitle,
  NavbarContentContainer
} from "@IntusFacultas/navbar";
import { NButton } from "@IntusFacultas/button";
export const Navbar = {
  components: {
    NavbarContainer,
    NavbarTitle,
    NavbarContentContainer,
    NButton
  },
  data: () => {
    return {
      open: false,
      contentWidth: 0,
      containerWidth: 0,
      navHeight: 0,
      observer: null,
      titleWidth: 0,
      blockWidth: 0,
      leaves: []
    };
  },
  mounted() {
    let self = this;
    this.calculateDimensions();
    window.addEventListener(
      "resize",
      this.debounce(this.calculateDimensions, 10, true),
      {
        passive: true
      }
    );
    this.calculateContentWidth();
    this.observer = new MutationObserver(this.calculateContentWidth);
    this.observer.observe(this.$refs.content.$el, {
      childList: true,
      characterData: true,
      subtree: true
    });
    window.addEventListener("click", self.checkOffclick);
  },
  beforeDestroy() {
    let self = this;
    this.observer.disconnect();
    window.removeEventListener("click", self.checkOffclick);
    window.removeEventListener(
      "resize",
      this.debounce(this.calculateDimensions, 10, true)
    );
  },
  updated() {
    this.calculateDimensions();
  },
  props: {
    title: {
      type: Object,
      default: () => {
        return {
          text: "Brand",
          url: "#",
          html: ""
        };
      }
    },
    fixed: {
      type: Boolean,
      default: false
    },
    flavor: {
      type: String,
      default: ""
    }
  },
  methods: {
    calculateContentWidth() {
      let self = this;
      function findBlockElement(elem) {
        const INLINE_ELEMENTS = [
          "a",
          "abbr",
          "acronym",
          "b",
          "bdo",
          "big",
          "br",
          "button",
          "cite",
          "code",
          "dfn",
          "em",
          "i",
          "img",
          "input",
          "kbd",
          "label",
          "map",
          "object",
          "output",
          "q",
          "samp",
          "script",
          "select",
          "small",
          "span",
          "strong",
          "sub",
          "sup",
          "textarea",
          "time",
          "tt",
          "var"
        ];
        if (INLINE_ELEMENTS.indexOf(elem.tagName.toLowerCase()) != -1) {
          return elem;
        }
        for (let child of elem.children) {
          if (INLINE_ELEMENTS.indexOf(child.tagName.toLowerCase()) != -1) {
            return child;
          }
          for (let subchild of child.children) {
            let potentialChild = findBlockElement(subchild);
            if (potentialChild != null) {
              return potentialChild;
            }
          }
        }
        return null;
      }
      function stepChildren(elem) {
        if (elem.tagName.toUpperCase() == "LI") {
          elem.children.forEach(child =>
            self.leaves.push(findBlockElement(child))
          );
        } else {
          elem.children.forEach(child => stepChildren(child));
        }
      }
      stepChildren(this.$refs.content.$el);
      this.blockWidth = this.leaves
        .map(a => a.scrollWidth + 32)
        .reduce((accum, val) => accum + val);
    },
    collapseSection(element) {
      // pulled from https://css-tricks.com/using-css-transitions-auto-dimensions/ and modified
      // get the height of the element's inner content, regardless of its actual size
      let sectionHeight = element.scrollHeight;
      // temporarily disable all css transitions
      var elementTransition = element.style.transition;
      element.style.transition = "";
      element.style.height = sectionHeight + "px !important";
      element.style.paddingBottom = "0px";
      // element.style.width = sectionWidth + "px !important";

      // on the next frame (as soon as the previous style change has taken effect),
      // explicitly set the element's height to its current pixel height, so we
      // aren't transitioning out of 'auto'
      requestAnimationFrame(function() {
        element.style.height = sectionHeight + "px";
        // element.style.width = sectionWidth + "px";
        element.style.transition = elementTransition;
        // element.style.overflowY = 'hidden';

        // on the next frame (as soon as the previous style change has taken effect),
        // have the element transition to height: 0
        requestAnimationFrame(function() {
          element.style.height = 0 + "px";
          // element.style.width = "0px";
          element.style.paddingBottom = "0px";
        });
      });

      // mark the section as "currently collapsed"
      element.setAttribute("data-collapsed", "true");
    },
    expandSection(element) {
      // pulled from https://css-tricks.com/using-css-transitions-auto-dimensions/ and modified
      // get the height of the element's inner content, regardless of its actual size
      let sectionHeight = element.scrollHeight;
      // have the element transition to the height of its inner content
      element.style.height = sectionHeight + "px";
      // element.style.width = sectionWidth + "px";

      element.style.paddingBottom = "5px";
      // element.style.overflowY = "auto"
      // when the next css transition finishes (which should be the one we just triggered)
      element.addEventListener("transitionend", function() {
        // remove this event listener so it only gets triggered once
        element.removeEventListener("transitionend", this);
        if (element.getAttribute("data-collapsed") == "false") {
          // remove "height" from the element's inline styles, so it can return to its initial value
          element.style.height = "auto";
        }
      });

      // mark the section as "currently not collapsed"
      element.setAttribute("data-collapsed", "false");
    },
    debounce(func, wait, immediate) {
      /**
       * Pulled from: https://davidwalsh.name/javascript-debounce-function
       */
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
        try {
          if (callNow) func.apply(context, args);
        } catch {
          // pass
        }
      };
    },
    calculateDimensions() {
      if (typeof this.$refs.container != "undefined") {
        if (!this.open) {
          this.navHeight = this.$refs.container.$el.clientHeight;
        }
        this.containerWidth = this.$refs.container.$el.clientWidth;
      }
      if (typeof this.$refs.title != "undefined") {
        this.titleWidth = this.$refs.title.$el.clientWidth;
      }
    },
    toggleAccordion() {
      if (!this.open) {
        this.expandSection(this.$refs.content.$el);
        this.open = true;
      } else {
        this.collapseSection(this.$refs.content.$el);
        this.open = false;
      }
    }
  },
  watch: {
    collapsed(newVal) {
      if (newVal) {
        this.$refs.content.$el.style.height = "0px";
        // this.$refs.content.$el.style.width =  "0px";
        this.$refs.content.$el.style.paddingBottom = "0px";
        this.$refs.content.$el.style.overflow = "hidden";
      } else {
        this.$refs.content.$el.style.height = "50px";
        // this.$refs.content.$el.style.width = "initial";
        this.$refs.content.$el.style.paddingBottom = "initial";
        this.$refs.content.$el.style.overflow = "visible";
      }
    }
  },
  computed: {
    collapsed() {
      return this.blockWidth >= this.collapseCutOff;
    },
    collapseCutOff() {
      let additionalPadding = 30;
      return this.containerWidth - this.titleWidth - additionalPadding;
    }
  }
};
export default Navbar;
</script>

<style>
.navbar-brand {
  display: inline-block;
  padding-right: 5px;
}
.navbar-open-carat {
  transform: rotate(135deg) !important;
  margin-bottom: 4px;
}
.open {
  max-height: 1980px !important;
}
.nav-button {
  height: 37px;
  margin-top: 0.4rem;
  position: absolute;
  right: 20px;
}
</style>
