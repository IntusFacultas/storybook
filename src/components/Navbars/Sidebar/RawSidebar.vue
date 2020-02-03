<template>
  <n-sidebar-container
    :flavor="flavor"
    :top-offset="topOffset"
    :bottom-offset="bottomOffset"
    id="sidebar"
  >
    <n-sidebar-title :flavor="flavor">
      <n-text :size="16">{{sidebarTitle}}</n-text>
      <n-sidebar-hamburger-container>
        <n-button :flavor="flavor" @click="toggleAccordion">&#9776;</n-button>
      </n-sidebar-hamburger-container>
    </n-sidebar-title>
    <n-sidebar-content :flavor="flavor">
      <slot></slot>
    </n-sidebar-content>
    <n-collapsed-sidebar-content :class="computedClass" :flavor="flavor">
      <slot></slot>
    </n-collapsed-sidebar-content>
  </n-sidebar-container>
</template>

<script>
import styled from "vue-styled-components";
import Theme from "Components/components/DesignSystem/theme.js";
import { NText } from "Components/components/StyledHTML/Typography/Typography.vue";
import { NButton } from "Components/components/StyledHTML/Button/Button.vue";
import {
  NSidebarHamburgerContainer,
  NSidebarContainer,
  NSidebarTitle,
  NSidebarContent,
  NCollapsedSidebarContent
} from "./Sidebar.vue";
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
    }
  }
};
export default NRawSidebar;
</script>

<style>
</style>