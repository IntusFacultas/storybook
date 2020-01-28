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
    <n-sidebar-content :flavor="flavor" :width="width" :breakpoint="breakpoint">
      <n-sidebar-item-list>
        <n-sidebar-item v-for="(item, index) in items" :key="'item' + index" :flavor="flavor">
          <a v-if="item.type == 'item'" :href="item.url">
            <div v-html="item.icon"></div>
            <n-text :size="13">{{item.text}}</n-text>
          </a>
          <div v-else>
            <div v-html="item.icon"></div>
            <n-label :for="'sidebar-dropdown' + index">{{item.text}}</n-label>
            <n-sidebar-dropdown
              @input="changeWindow($event)"
              :name="'sidebar-dropdown' + index"
              :id="'sidebar-dropdown' + index"
              :flavor="flavor"
            >
              <option value="#">&nbsp;</option>
              <option
                v-for="(subitem, subindex) in item.items"
                :key="'sidebar-dropdown-' + index + '-item-' + subindex"
                :value="subitem.url"
              >
                <div v-html="subitem.icon"></div>
                {{subitem.text}}
              </option>
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
        <n-sidebar-item v-for="(item, index) in items" :key="'item' + index" :flavor="flavor">
          <a v-if="item.type == 'item'" :href="item.url">
            <div v-html="item.icon"></div>
            <n-text :size="13">{{item.text}}</n-text>
          </a>
          <div v-else>
            <div v-html="item.icon"></div>
            <n-label :for="'sidebar-dropdown' + index">{{item.text}}</n-label>
            <n-sidebar-dropdown
              @input="changeWindow($event)"
              :name="'sidebar-dropdown' + index"
              :id="'sidebar-dropdown' + index"
              :flavor="flavor"
            >
              <option value="#">&nbsp;</option>
              <option
                v-for="(subitem, subindex) in item.items"
                :key="'sidebar-dropdown-' + index + '-item-' + subindex"
                :value="subitem.url"
              >
                <div v-html="subitem.icon"></div>
                {{subitem.text}}
              </option>
            </n-sidebar-dropdown>
          </div>
        </n-sidebar-item>
      </n-sidebar-item-list>
    </n-collapsed-sidebar-content>
  </n-sidebar-container>
</template>
<<script>
import styled from "vue-styled-components";
import Theme from "Components/components/DesignSystem/theme.js";
import { NText, NLabel } from "Components/components/StyledHTML/Typography/Typography.vue";
import { NButton } from "Components/components/StyledHTML/Button/Button.vue";
const props = {
  flavor: String,
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
      : "#dfdfdf"};
  width: ${props => props.width}px;
  position: fixed;
  margin-left: -15px;
  top: ${props => props.topOffset};
  bottom: ${props => props.bottomOffset};
  @media (max-width: ${props => props.breakpoint}px) {
    position: relative;
    width: 100%;
    margin-left: auto;
    padding-left: auto;
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
  & * {
    color: ${props =>
      props.theme && props.theme[props.flavor]
        ? props.theme[props.flavor].color.color
        : props.defaultTheme[props.flavor]
        ? props.defaultTheme[props.flavor].color.color
        : "#222"};};
  }
`;
export const NCollapsedSidebarContent = styled("div", props)`
  transition: 0.3s ease all;
  overflow-y: auto;
  min-height: 100px;
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
  & * {
    color: ${props =>
      props.theme && props.theme[props.flavor]
        ? props.theme[props.flavor].color.color
        : props.defaultTheme[props.flavor]
        ? props.defaultTheme[props.flavor].color.color
        : "#222"};};
  }
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
  &:hover {
  background-color: ${props =>
    props.theme && props.theme[props.flavor]
      ? props.theme[props.flavor].background.hover
      : props.defaultTheme[props.flavor]
      ? props.defaultTheme[props.flavor].background.hover
      : "#c1c1c1"};};
  }
`;
export const NSidebarDropdown = styled("select", props)`
  width: 100%;
  border: 1px solid transparent;
  background-color: ${props =>
    props.theme && props.theme[props.flavor]
      ? props.theme[props.flavor].background.color
      : props.defaultTheme[props.flavor]
      ? props.defaultTheme[props.flavor].background.color
      : "#dfdfdf"};
  & option {
    font-family: inherit;
    padding: 2px 5px;
  }
  & option:hover, & option:checked {
    box-shadow: 0 0 10px 100px  ${props =>
      props.theme && props.theme[props.flavor]
        ? props.theme[props.flavor].background.hover
        : props.defaultTheme[props.flavor]
        ? props.defaultTheme[props.flavor].background.hover
        : "#c1c1c1"};}; inset;
  }
  color: ${props =>
    props.theme && props.theme[props.flavor]
      ? props.theme[props.flavor].color.color
      : props.defaultTheme[props.flavor]
      ? props.defaultTheme[props.flavor].color.color
      : "#222"};};
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
    NText,
    NLabel,
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
  @media (min-width: ${props=> props.breakpoint}px) {
    margin-left: ${props => props.width}px;
    margin-top: 0px;
  }
  padding-left: 15px;
`;
export default NSidebar;
</script>

<style>
.closed {
  max-height: 0px;
  min-height: 0px;
  padding: 0px !important;
}
</style>