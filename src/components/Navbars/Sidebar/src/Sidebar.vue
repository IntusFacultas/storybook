<template>
  <sidebar-container
    :flavor="flavor"
    :top-offset="topOffset"
    :bottom-offset="bottomOffset"
    id="sidebar"
    :width="width"
    :height="height"
    :breakpoint="breakpoint"
    ref="sidebar"
  >
    <sidebar-title :flavor="flavor">
      <text :size="16">{{ sidebarTitle }}</text>
      <sidebar-hamburger-container :width="width" :breakpoint="breakpoint">
        <n-button :flavor="flavor" @click="toggleAccordion">&#9776;</n-button>
      </sidebar-hamburger-container>
    </sidebar-title>
    <sidebar-content
      :flavor="flavor"
      :width="width"
      :breakpoint="breakpoint"
      ref="content"
    >
      <sidebar-item-list>
        <sidebar-item
          v-for="(item, index) in items"
          :key="'item' + index"
          :flavor="flavor"
          :disabled="item.disabled"
          :active="item.active"
        >
          <a v-if="item.type == 'item'" :href="item.url">
            <div class="sidebar-icon" v-html="item.icon"></div>
            <text :size="13">{{ item.text }}</text>
          </a>
          <div v-else>
            <vue-sidebar-dropdown
              :icon="item.icon"
              :text="item.text"
              :disabled="item.disabled"
              :items="item.items"
              :flavor="flavor"
            ></vue-sidebar-dropdown>
          </div>
        </sidebar-item>
      </sidebar-item-list>
    </sidebar-content>
  </sidebar-container>
</template>
<script>
import styled from "vue-styled-components";
import Theme from "@IntusFacultas/design-system";
import { TextContent, NLabel } from "@IntusFacultas/typography";
import { NButton } from "@IntusFacultas/button";
const props = {
  flavor: String,
  disabled: Boolean,
  active: Boolean,
  raw: Boolean,
  width: {
    type: Number,
    default: 200,
  },
  height: {
    type: Number,
    default: null,
  },
  breakpoint: {
    type: Number,
    default: 576,
  },
  topOffset: {
    type: String,
    default: "0px",
  },
  bottomOffset: {
    type: String,
    default: "0px",
  },
  defaultTheme: {
    type: Object,
    default: function() {
      return Theme;
    },
  },
};
export const SidebarHamburgerContainer = styled("div", props)`
  display: none;
  @media (max-width: ${(props) => props.breakpoint}px) {
    display: block;
  }
`;
export const SidebarContainer = styled("aside", props)`
  background-color: ${(props) =>
    props.theme && props.theme[props.flavor]
      ? props.theme[props.flavor].background.color
      : props.defaultTheme[props.flavor]
      ? props.defaultTheme[props.flavor].background.color
      : "#f2f2f2"};
  width: ${(props) => props.width}px;
  z-index: 1;
  position: absolute;
  left: 0px;
  top: ${(props) => props.topOffset};
  bottom: ${(props) => props.bottomOffset};
  ${(props) => (!isNaN(props.height) ? `height: ${props.height}px` : ``)}
  @media (max-width: ${(props) => props.breakpoint}px) {
    position: relative;
    width: 100%;
    padding-left: auto;
    top: initial;
    height: initial
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
export const SidebarTitle = styled("div", props)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 15px;
  & * {
    color: ${(props) =>
      props.theme && props.theme[props.flavor]
        ? props.theme[props.flavor].color.color
        : props.defaultTheme[props.flavor]
        ? props.defaultTheme[props.flavor].color.color
        : "#222"};};
  }
`;
export const SidebarContent = styled("div", props)`
  overflow: hidden;
  transition: height 0.3s ease-out;

  @media (min-width: ${(props) => props.breakpoint + 1}px) {
    height: auto !important;
    padding: 5px 0px !important;
  }

  ${(props) =>
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
      };!important };
    }
  
  `}
`;
export const SidebarItemList = styled.ul`
  list-style: none;
  margin-top: 0px;
  padding: 0px;
  margin-bottom: 0px;
`;
export const SidebarItem = styled("li", props)`
  padding: 10px 20px;
  & a {
    text-decoration: none;
  }
  & * {
    color: ${(props) =>
      props.theme && props.theme[props.flavor]
        ? props.theme[props.flavor].color.color
        : props.defaultTheme[props.flavor]
        ? props.defaultTheme[props.flavor].color.color
        : "#222"};
  }
  ${(props) =>
    props.disabled
      ? `
    pointer-events: none;
    & * {color: rgba(0, 0, 0, 0.3) !important;}`
      : ""};
  ${(props) =>
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
  background-color: ${(props) =>
    props.theme && props.theme[props.flavor]
      ? props.theme[props.flavor].background.hover
      : props.defaultTheme[props.flavor]
      ? props.defaultTheme[props.flavor].background.hover
      : "#d7d7d7"};};
  }
`;
const SidebarDropdown = styled("ul", props)`
  list-style: none;
  margin-top: 0px;
  padding: 0px;
  margin-bottom: 0px;
  transition: 0.3s max-height;
  max-height: 0px;
  overflow-y: hidden;
`;
const SidebarDropdownCarat = styled("div", props)`
  background-image: linear-gradient(
    to top right,
    transparent 50%,
    ${(props) =>
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
  margin-bottom: 1px;
  transform: rotate(45deg);
  transition: 0.3s all;
  display: inline-block;
`;
export const VueSidebarDropdown = {
  components: {
    SidebarDropdown,
    SidebarDropdownCarat,
    NLabel,
    SidebarItem,
    TextContent,
  },
  data() {
    return {
      toggled: false,
    };
  },
  props: {
    icon: {
      type: String,
      default: "",
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    text: {
      type: String,
      default: "",
    },
    items: {
      type: Array,
      default() {
        return [];
      },
    },
    flavor: {
      type: String,
      default: "",
    },
  },
  computed: {
    uid() {
      return this._uid;
    },
    computeDropdownClass() {
      if (this.toggled) {
        return ["sidebar-open-carat"];
      }
      return [];
    },
  },
  methods: {
    toggleDropdown() {
      this.toggled = !this.toggled;
    },
  },
  template: `
    <div>
      <div class="sidebar-icon" v-html="icon"></div>
      <n-label
        class="dropdown-label"
        :for="'sidebar-dropdown' + uid"
        role="button"
        @click="toggleDropdown"
        @keyup.space="toggleDropdown"
        @keyup.enter="toggleDropdown"
        tabindex="0"
      >
        {{text}}
        <sidebar-dropdown-carat
          :disabled="disabled"
          :flavor="flavor"
          :class="computeDropdownClass"
        ></sidebar-dropdown-carat>
      </n-label>
      <sidebar-dropdown
        :style="{'max-height': toggled ? (items.length * 40) + 'px' : '0px'}"
        :tabindex="-1"
      >
        <sidebar-item
          v-for="(option, optionIndex) in items"
          :key="'dropdown' + uid + 'option' + optionIndex"
          :flavor="flavor"
          :disabled="option.disabled"
          :active="option.active"
          :tabindex="-1"
        >
          <a :href="option.url" :tabindex="toggled ? 0 : -1">
            <div class="sidebar-icon" v-html="option.icon"></div>
            <text :size="13">{{option.text}}</text>
          </a>
        </sidebar-item>
      </sidebar-dropdown>
    </div>
  `,
};

export const Sidebar = {
  components: {
    SidebarContainer,
    SidebarHamburgerContainer,
    SidebarTitle,
    SidebarContent,
    SidebarItemList,
    SidebarItem,
    TextContent,
    VueSidebarDropdown,
    NButton,
  },
  data: function() {
    return {
      windowWidth: 0,
      open: true,
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
      element.style.padding = "0px 0px";
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
      element.style.padding = "5px 0px";

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
        self.collapseSection(this.$refs.content.$el);
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
    },
  },
  props: {
    sidebarTitle: {
      type: String,
      default: "Sidebar",
    },
    flavor: {
      type: String,
      default: "",
    },
    bottomOffset: {
      type: String,
      default: "0px",
    },
    topOffset: {
      type: String,
      default: "",
    },
    width: {
      type: Number,
      default: 200,
    },
    height: {
      type: [Number, Object],
      default: null,
    },
    breakpoint: {
      type: Number,
      default: 576,
    },
    items: {
      type: Array,
      default: function() {
        return [];
      },
    },
  },
};
export const SidebarOffsetContent = styled("div", props)`
  margin-left: 0px;
  @media (min-width: ${(props) => props.breakpoint}px) {
    margin-left: ${(props) => props.width}px;
    margin-top: 0px;
  }
  padding-left: 15px;
`;
export default Sidebar;
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
