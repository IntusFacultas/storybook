<template>
  <n-sidebar-container
    :flavor="flavor"
    :top-offset="topOffset"
    :bottom-offset="bottomOffset"
    id="sidebar"
    :width="width"
    :breakpoint="breakpoint"
  >
    <n-sidebar-title :flavor="flavor">
      <n-text :size="16">{{sidebarTitle}}</n-text>
      <n-sidebar-hamburger-container :width="width" :breakpoint="breakpoint">
        <n-button :flavor="flavor" @click="toggleAccordion">&#9776;</n-button>
      </n-sidebar-hamburger-container>
    </n-sidebar-title>
    <n-sidebar-content :flavor="flavor" class="raw-sidebar" :width="width" :breakpoint="breakpoint">
      <slot></slot>
    </n-sidebar-content>
    <n-collapsed-sidebar-content
      :width="width"
      :breakpoint="breakpoint"
      class="raw-sidebar"
      :class="computedClass"
      :flavor="flavor"
    >
      <slot></slot>
    </n-collapsed-sidebar-content>
  </n-sidebar-container>
</template>

<script>
import styled from "vue-styled-components";
import Theme from "@intus/designsystem";
import { NText } from "@intus/typography";
import { NButton } from "@intus/button";
import {
  NSidebarHamburgerContainer,
  NSidebarContainer,
  NSidebarTitle,
  NSidebarContent,
  NCollapsedSidebarContent
} from "@intus/sidebar";
const props = {
  flavor: String,
  topOffset: {
    type: String,
    default: "0px"
  },
  bottomOffset: {
    type: String,
    default: "0px"
  },
  defaultTheme: {
    type: Object,
    default: function() {
      return Theme;
    }
  }
};
export const NRawSidebar = {
  components: {
    NSidebarContainer,
    NSidebarHamburgerContainer,
    NSidebarTitle,
    NSidebarContent,
    NCollapsedSidebarContent,
    NText,
    NButton
  },
  data: function() {
    return {
      windowWidth: 0,
      open: false
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
      }
    },
    toggleAccordion: function() {
      this.open = !this.open;
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
      return ["closed"];
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
export default NRawSidebar;
</script>

<style>
.raw-sidebar {
  padding: 5px 15px;
}
</style>