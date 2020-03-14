<template>
  <navbar-container
    :flavor="flavor"
    ref="container"
    :fixed="fixed"
    :collapsed="collapsed"
    :class="computedNavClass"
  >
    <navbar-title ref="title" tabindex="1">
      <div v-html="title.html" class="navbar-brand"></div>
      <a :href="title.url ? title.url : '#'">{{ title.text }}</a>
    </navbar-title>
    <n-button
      tabindex="1"
      class="nav-button"
      v-show="collapsed"
      :flavor="flavor"
      @click="toggleAccordion"
      ref="hamburger"
      >&#9776;</n-button
    >
    <navbar-content-container
      :collapsed="collapsed"
      ref="content"
      :class="computedClass"
    >
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
      titleWidth: 0
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
    window.addEventListener("click", self.checkOffclick);
  },
  beforeDestroy() {
    let self = this;
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
    collapseSection(element) {
      // pulled from https://css-tricks.com/using-css-transitions-auto-dimensions/ and modified
      // get the height of the element's inner content, regardless of its actual size
      let sectionHeight = element.scrollHeight;
      // temporarily disable all css transitions
      var elementTransition = element.style.transition;
      element.style.transition = "";
      element.style.height = sectionHeight + "px !important";
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
      if (typeof this.$refs.content != "undefined" && !this.collapsed) {
        let contentWidth = 0;
        for (let child of this.$refs.content.$el.children) {
          contentWidth += child.scrollWidth;
        }
        this.contentWidth = contentWidth;
        // this.$forceUpdate();
      }
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
    computedNavClass() {
      if (!this.collapsed) {
        return ["raw-navbar-container-uncollapsed"];
      }
      return [];
    },
    computedClass() {
      if (this.collapsed) {
        return ["raw-navbar-content-container", "open-raw-navbar"];
      }
      return ["raw-navbar-content-container"];
    },
    collapsed() {
      return this.contentWidth >= this.collapseCutOff;
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
.raw-navbar-container-uncollapsed {
  height: 50px;
  overflow: visible;
}
.raw-navbar-content-container {
  transition: height 0.3s ease-out;
  max-width: initial !important;
  max-height: initial !important;
  overflow: hidden;
}
.open-raw-navbar * {
  flex-direction: column;
}
</style>
