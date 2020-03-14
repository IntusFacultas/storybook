<template>
  <sidebar-container
    :flavor="flavor"
    :top-offset="topOffset"
    :bottom-offset="bottomOffset"
    id="sidebar"
    :width="width"
    :breakpoint="breakpoint"
  >
    <sidebar-title :flavor="flavor">
      <n-text :size="16">{{ sidebarTitle }}</text>
      <sidebar-hamburger-container :width="width" :breakpoint="breakpoint">
        <n-button :flavor="flavor" @click="toggleAccordion">&#9776;</n-button>
      </sidebar-hamburger-container>
    </sidebar-title>
    <sidebar-content
      :raw="true"
      :flavor="flavor"
      :width="width"
      :breakpoint="breakpoint"
      ref="content"
    >
      <slot></slot>
    </sidebar-content>
  </sidebar-container>
</template>

<script>
import { Text } from "@IntusFacultas/typography";
import { NButton } from "@IntusFacultas/button";
import {
  SidebarHamburgerContainer,
  SidebarContainer,
  SidebarTitle,
  SidebarContent
} from "@IntusFacultas/sidebar";
export const RawSidebar = {
  components: {
    SidebarContainer,
    SidebarHamburgerContainer,
    SidebarTitle,
    SidebarContent,
    Text,
    NButton
  },
  data: function() {
    return {
      windowWidth: 0,
      open: true
    };
  },
  mounted: function() {
    var self = this;
    window.addEventListener("click", self.checkOffclick);
  },
  beforeDestroy() {
    window.removeEventListener("click", self.checkOffclick);
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
      element.style.padding = "0px 15px";
      // on the next frame (as soon as the previous style change has taken effect),
      // explicitly set the element's height to its current pixel height, so we
      // aren't transitioning out of 'auto'
      requestAnimationFrame(function() {
        element.style.height = sectionHeight + "px";
        element.style.transition = elementTransition;
        // element.style.overflowY = 'hidden';

        // on the next frame (as soon as the previous style change has taken effect),
        // have the element transition to height: 0
        requestAnimationFrame(function() {
          element.style.height = 0 + "px";
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
      element.style.padding = "5px 15px";

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
    checkOffclick: function($e) {
      /**
       * Pulled from: https://stackoverflow.com/questions/17773852/check-if-div-is-descendant-of-another
       */
      let self = this;
      function isChild(obj, parentObj) {
        if (obj.id == parentObj.id) return true;
        while ((obj = obj.parentNode)) {
          if (obj.id == parentObj.id) return true;
        }
        return false;
      }
      if (
        self.open &&
        !isChild($e.target, document.getElementById("sidebar"))
      ) {
        self.open = false;
        self.collapseSection(self.$refs.content.$el);
      }
    },
    toggleAccordion: function() {
      this.open = !this.open;
      if (this.open) {
        this.expandSection(this.$refs.content.$el);
      } else {
        this.collapseSection(this.$refs.content.$el);
      }
    },
    changeWindow: function($e) {
      window.location.href = $e;
    }
  },
  computed: {
    computedClass: function() {
      if (this.open) {
        return {};
      }
      return ["sidebar-closed"];
    }
  },
  props: {
    sidebarTitle: {
      type: String,
      default: "Sidebar"
    },
    flavor: {
      type: String,
      default: ""
    },
    bottomOffset: {
      type: String,
      default: "0px"
    },
    topOffset: {
      type: String,
      default: ""
    },
    width: {
      type: Number,
      default: 200
    },
    breakpoint: {
      type: Number,
      default: 576
    }
  }
};
export default RawSidebar;
</script>

<style>
.sidebar-open-carat {
  transform: rotate(135deg) !important;
  margin-bottom: 4px;
}
.sidebar-icon {
  display: inline-block;
}
.dropdown-arrow {
  background-image: linear-gradient(to top right, transparent 50%, #727272 50%);
  width: 0.5rem;
  height: 0.5rem;
  transform: rotate(135deg);
  transition: 0.3s all;
  display: inline-block;
}
.dropdown-label {
  cursor: pointer;
}
</style>
