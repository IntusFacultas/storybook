<template>
  <n-sidebar-container
    :flavor="flavor"
    :top-offset="topOffset"
    :bottom-offset="bottomOffset"
    id="sidebar"
    :width="width"
    :breakpoint="breakpoint"
    ref="sidebar"
  >
    <n-sidebar-title :flavor="flavor">
      <n-text :size="16">{{sidebarTitle}}</n-text>
      <n-sidebar-hamburger-container :width="width" :breakpoint="breakpoint">
        <n-button :flavor="flavor" @click="toggleAccordion">&#9776;</n-button>
      </n-sidebar-hamburger-container>
    </n-sidebar-title>
    <n-sidebar-content :flavor="flavor" :width="width" :breakpoint="breakpoint">
      <n-sidebar-item-list>
        <n-sidebar-item
          v-for="(item, index) in items"
          :key="'item' + index"
          :flavor="flavor"
          :disabled="item.disabled"
          :active="item.active"
        >
          <a v-if="item.type == 'item'" :href="item.url">
            <div v-html="item.icon"></div>
            <n-text :size="13">{{item.text}}</n-text>
          </a>
          <div v-else>
            <div v-html="item.icon"></div>
            <n-label
              class="dropdown-label"
              :for="'sidebar-dropdown' + index"
              role="button"
              @click="toggleDropdown(index)"
            >
              {{item.text}}
              <n-dropdown-carat
                :flavor="flavor"
                :class="computeDropdownClass(index)"
                :disabled="item.disabled"
              ></n-dropdown-carat>
            </n-label>
            <n-sidebar-dropdown
              :style="{'max-height': dropdowns[index] ? (item.items.length * 40) + 'px' : '0px'}"
            >
              <n-sidebar-item
                v-for="(option, optionIndex) in item.items"
                :key="'dropdown' + index + 'option' + optionIndex"
                :flavor="flavor"
                :disabled="option.disabled"
                :active="option.active"
              >
                <a :href="option.url">
                  <div v-html="option.icon"></div>
                  <n-text :size="13">{{option.text}}</n-text>
                </a>
              </n-sidebar-item>
            </n-sidebar-dropdown>
          </div>
        </n-sidebar-item>
      </n-sidebar-item-list>
    </n-sidebar-content>
    <n-collapsed-sidebar-content
      :class="computedClass"
      :flavor="flavor"
      :width="width"
      :breakpoint="breakpoint"
    >
      <n-sidebar-item-list>
        <n-sidebar-item
          v-for="(item, index) in items"
          :key="'item' + index"
          :flavor="flavor"
          :disabled="item.disabled"
          :active="item.active"
        >
          <a v-if="item.type == 'item'" :href="item.url">
            <div v-html="item.icon"></div>
            <n-text :size="13">{{item.text}}</n-text>
          </a>
          <div v-else>
            <div v-html="item.icon"></div>
            <n-label
              class="dropdown-label"
              :for="'sidebar-dropdown' + index"
              role="button"
              @click="toggleDropdown(index)"
            >
              {{item.text}}
              <n-dropdown-carat
                :disabled="item.disabled"
                :flavor="flavor"
                :class="computeDropdownClass(index)"
              ></n-dropdown-carat>
            </n-label>
            <n-sidebar-dropdown
              :style="{'max-height': dropdowns[index] ? (item.items.length * 40) + 'px' : '0px'}"
            >
              <n-sidebar-item
                v-for="(option, optionIndex) in item.items"
                :key="'dropdown' + index + 'option' + optionIndex"
                :flavor="flavor"
                :disabled="option.disabled"
                :active="option.active"
              >
                <a :href="option.url">
                  <div v-html="option.icon"></div>
                  <n-text :size="13">{{option.text}}</n-text>
                </a>
              </n-sidebar-item>
            </n-sidebar-dropdown>
          </div>
        </n-sidebar-item>
      </n-sidebar-item-list>
    </n-collapsed-sidebar-content>
  </n-sidebar-container>
</template>
<script>
import styled from "vue-styled-components";
import Theme from "@intus/designsystem";
import { NText, NLabel } from "@intus/typography";
import { NButton } from "@intus/button";
const props = {
  flavor: String,
  disabled: Boolean,
  active: Boolean,
  raw: Boolean,
  width: {
    type: Number,
    default: 200
  },
  breakpoint: {
    type: Number,
    default: 576
  },
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
export const NSidebarHamburgerContainer = styled("div", props)`
  display: none;
  @media (max-width: ${props => props.breakpoint}px) {
    display: block;
  }
`;
export const NSidebarContainer = styled("aside", props)`
  background-color: ${props =>
    props.theme && props.theme[props.flavor]
      ? props.theme[props.flavor].background.color
      : props.defaultTheme[props.flavor]
      ? props.defaultTheme[props.flavor].background.color
      : "#f2f2f2"};
  width: ${props => props.width}px;
  z-index: 1;
  position: absolute;
  left: 0px;
  top: ${props => props.topOffset};
  bottom: ${props => props.bottomOffset};
  @media (max-width: ${props => props.breakpoint}px) {
    position: relative;
    width: 100%;
    padding-left: auto;
    top: initial;
  }
  & * {
    webkit-touch-callout: none; /* iOS Safari */
    -webkit-user-select: none; /* Safari */
    -khtml-user-select: none; /* Konqueror HTML */
    -moz-user-select: none; /* Firefox */
    -ms-user-select: none; /* Internet Explorer/Edge */
    user-select: none; /* Non-prefixed version, currently supported by Chrome and Opera */
  }
`;
export const NSidebarTitle = styled("div", props)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 15px;
  & * {
    color: ${props =>
      props.theme && props.theme[props.flavor]
        ? props.theme[props.flavor].color.color
        : props.defaultTheme[props.flavor]
        ? props.defaultTheme[props.flavor].color.color
        : "#222"};};
  }
`;
export const NSidebarContent = styled("div", props)`
  padding: 5px 0px;
  @media (max-width: ${props => props.breakpoint}px) {
    display: none;
  }
  ${props =>
    props.raw
      ? ""
      : `
    & * {
      color: ${
        props.theme && props.theme[props.flavor]
          ? props.theme[props.flavor].color.color
          : props.defaultTheme[props.flavor]
          ? props.defaultTheme[props.flavor].color.color
          : "#222"
      };};
    }
  
  `}
`;
export const NCollapsedSidebarContent = styled("div", props)`
  transition: 0.3s all;
  overflow-y: auto;
  max-height: 1000px;
  display: none;
  padding: 0px;
  border-top: 1px solid ${props =>
    props.theme && props.theme[props.flavor]
      ? props.theme[props.flavor].background.color
      : props.defaultTheme[props.flavor]
      ? props.defaultTheme[props.flavor].background.color
      : "gray"};};
  @media (max-width: ${props => props.breakpoint}px) {
    display: block;
    padding: 10px 0px;
  }
  ${props =>
    props.raw
      ? ""
      : `
    & * {
      color: ${
        props.theme && props.theme[props.flavor]
          ? props.theme[props.flavor].color.color
          : props.defaultTheme[props.flavor]
          ? props.defaultTheme[props.flavor].color.color
          : "#222"
      };};
    }
  
  `}
`;
export const NSidebarItemList = styled.ul`
  list-style: none;
  margin-top: 0px;
  padding: 0px;
  margin-bottom: 0px;
`;
export const NSidebarItem = styled("li", props)`
  padding: 10px 20px;
  & a {
    text-decoration: none;
  }
  ${props =>
    props.disabled
      ? `
    pointer-events: none;
    & * {color: rgba(0, 0, 0, 0.3) !important;}`
      : ""};
  ${props =>
    props.active
      ? `
  background-color: ${
    props.theme && props.theme[props.flavor]
      ? props.theme[props.flavor].background.focus
      : props.defaultTheme[props.flavor]
      ? props.defaultTheme[props.flavor].background.focus
      : "#d7d7d7"
  };
  `
      : ""}
  &:hover {
  background-color: ${props =>
    props.theme && props.theme[props.flavor]
      ? props.theme[props.flavor].background.hover
      : props.defaultTheme[props.flavor]
      ? props.defaultTheme[props.flavor].background.hover
      : "#d7d7d7"};};
  }
`;
export const NSidebarDropdown = styled("ul", props)`
  list-style: none;
  margin-top: 0px;
  padding: 0px;
  margin-bottom: 0px;
  transition: 0.3s max-height;
  max-height: 0px;
  overflow-y: hidden;
`;
export const NDropdownCarat = styled("div", props)`
  background-image: linear-gradient(
    to top right,
    transparent 50%,
    ${props =>
        props.disabled
          ? "rgba(0, 0, 0, 0.3)"
          : props.theme && props.theme[props.flavor]
          ? props.theme[props.flavor].color.color
          : props.defaultTheme[props.flavor]
          ? props.defaultTheme[props.flavor].color.color
          : "#222"}
      50%
  );
  width: 0.5rem;
  height: 0.5rem;
  transform: rotate(-45deg);
  transition: 0.3s all;
  display: inline-block;
`;
export const NSidebar = {
  components: {
    NSidebarContainer,
    NSidebarHamburgerContainer,
    NSidebarTitle,
    NSidebarContent,
    NCollapsedSidebarContent,
    NSidebarItemList,
    NSidebarItem,
    NSidebarDropdown,
    NDropdownCarat,
    NText,
    NLabel,
    NButton
  },
  data: function() {
    return {
      windowWidth: 0,
      open: false,
      dropdowns: {}
    };
  },
  mounted: function() {
    var self = this;
    self.items.forEach((item, index) => {
      if (item.type == "dropdown") {
        self.dropdowns[index] = false;
      }
    });
    window.addEventListener("click", self.checkOffclick);
  },
  beforeDestroy() {
    window.removeEventListener("click", self.checkOffclick);
  },
  methods: {
    computeDropdownClass(index) {
      if (this.dropdowns[index]) {
        return ["sidebar-open-carat"];
      }
      return [];
    },
    toggleDropdown(index) {
      this.dropdowns[index] = !this.dropdowns[index];
      this.$forceUpdate();
    },
    checkOffclick: function($e) {
      /**
       * Pulled from: https://stackoverflow.com/questions/17773852/check-if-div-is-descendant-of-another
       */
      let self = this;
      function isChild(obj, parentObj) {
        if (obj.isEqualNode(parentObj)) return true;
        while ((obj = obj.parentNode)) {
          if (obj.isEqualNode(parentObj)) return true;
        }
        return false;
      }
      if (
        self.open &&
        this.$refs.sidebar &&
        !isChild($e.target, this.$refs.sidebar.$el)
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
    },
    items: {
      type: Array,
      default: function() {
        return [];
      }
    }
  }
};
export const SidebarOffsetContent = styled("main", props)`
  margin-left: 0px;
  @media (min-width: ${props => props.breakpoint}px) {
    margin-left: ${props => props.width}px;
    margin-top: 0px;
  }
  padding-left: 15px;
`;
export default NSidebar;
</script>

<style>
.sidebar-open-carat {
  transform: rotate(135deg) !important;
  margin-bottom: 4px;
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
.sidebar-closed {
  max-height: 0px !important;
  padding: 0px !important;
}
</style>
