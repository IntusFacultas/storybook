<template>
  <navbar-container
    :flavor="flavor"
    ref="container"
    :fixed="fixed"
    :collapsed="collapsed"
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
    <navbar-content-container :collapsed="collapsed" :open="open" ref="content">
      <navbar-content
        :style="computedStyle(leftItems.length)"
        :collapsed="collapsed"
        ref="leftContent"
      >
        <navbar-item
          v-for="(item, index) in leftItems"
          :key="index + '-left'"
          :collapsed="collapsed"
          :nav-height="navHeight"
          :disabled="item.disabled"
          :active="item.active"
          :flavor="flavor"
        >
          <a
            v-if="item.type == 'item'"
            :href="item.disabled ? '#' : item.url"
            >{{ item.text }}</a
          >
          <vue-navbar-dropdown
            v-else
            :parent="instance"
            :collapsed="collapsed"
            :icon="item.icon"
            :text="item.text"
            :items="item.items"
            :disabled="item.disabled"
            :flavor="flavor"
          ></vue-navbar-dropdown>
        </navbar-item>
      </navbar-content>
      <navbar-content
        :style="computedStyle(centerItems.length)"
        :collapsed="collapsed"
        ref="middleContent"
      >
        <navbar-item
          v-for="(item, index) in centerItems"
          :key="index + '-left'"
          :collapsed="collapsed"
          :nav-height="navHeight"
          :disabled="item.disabled"
          :active="item.active"
          :flavor="flavor"
        >
          <a
            v-if="item.type == 'item'"
            :href="item.disabled ? '#' : item.url"
            >{{ item.text }}</a
          >
          <vue-navbar-dropdown
            v-else
            :parent="instance"
            :collapsed="collapsed"
            :icon="item.icon"
            :text="item.text"
            :items="item.items"
            :disabled="item.disabled"
            :flavor="flavor"
          ></vue-navbar-dropdown>
        </navbar-item>
      </navbar-content>
      <navbar-content
        :style="computedStyle(rightItems.length)"
        :collapsed="collapsed"
        ref="rightContent"
      >
        <navbar-item
          v-for="(item, index) in rightItems"
          :key="index + '-left'"
          :collapsed="collapsed"
          :nav-height="navHeight"
          :disabled="item.disabled"
          :active="item.active"
          :flavor="flavor"
        >
          <a
            v-if="item.type == 'item'"
            :href="item.disabled ? '#' : item.url"
            >{{ item.text }}</a
          >
          <vue-navbar-dropdown
            v-else
            :parent="instance"
            :collapsed="collapsed"
            :icon="item.icon"
            :text="item.text"
            :items="item.items"
            :disabled="item.disabled"
            :flavor="flavor"
          ></vue-navbar-dropdown>
        </navbar-item>
      </navbar-content>
    </navbar-content-container>
  </navbar-container>
</template>

<script>
import styled from "vue-styled-components";
import Theme from "@IntusFacultas/design-system";
import { NButton } from "@IntusFacultas/button";
const props = {
  flavor: String,
  disabled: Boolean,
  open: Boolean,
  active: Boolean,
  navHeight: Number,
  defaultTheme: {
    type: Object,
    default: function() {
      return Theme;
    }
  },
  collapsed: Boolean,
  breakpoint: {
    type: Number,
    default: 576
  },
  fixed: Boolean
};
export const NavbarContainer = styled("nav", props)`
  ${props =>
    props.fixed
      ? `
    position: fixed;
    top: 0px;
    right: 0px;
    left: 0px;
  `
      : ""}
  z-index: 2;
  & * {
    z-index: 2;
  }
  & * {
    -webkit-touch-callout: none; /* iOS Safari */
    -webkit-user-select: none; /* Safari */
    -khtml-user-select: none; /* Konqueror HTML */
    -moz-user-select: none; /* Old versions of Firefox */
    -ms-user-select: none; /* Internet Explorer/Edge */
    user-select: none;
  }
  background-color: ${props =>
    props.theme && props.theme[props.flavor]
      ? props.theme[props.flavor].background.color
      : props.defaultTheme[props.flavor]
      ? props.defaultTheme[props.flavor].background.color
      : "#f2f2f2"};
  & * {
    color: ${props =>
      props.theme && props.theme[props.flavor]
        ? props.theme[props.flavor].color.color
        : props.defaultTheme[props.flavor]
        ? props.defaultTheme[props.flavor].color.color
        : "#222"};
  }
  font-family: "Open Sans Regular", -apple-system, BlinkMacSystemFont,
    "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji",
    "Segoe UI Emoji", "Segoe UI Symbol";
  font-size: 16px;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  padding: 0rem 0.5rem;
  border: none;
`;
export const NavbarItem = styled("li", props)`
  white-space: nowrap;
  padding: 1rem 0.5rem 0px 0.5rem;
  height:
  ${props => (props.collapsed ? "auto" : `calc(${props.navHeight}px - 1rem);`)}
  & * {
    text-decoration: none;
  }
  ${props =>
    props.disabled
      ? `& * {
    pointer-events: none;
    color: rgba(0, 0, 0, 0.3) !important;
  }`
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
        : "#d7d7d7"};
    color: ${props =>
      props.theme && props.theme[props.flavor]
        ? props.theme[props.flavor].color.hover
        : props.defaultTheme[props.flavor]
        ? props.defaultTheme[props.flavor].color.hover
        : "#222"};
  }
  &:disabled {
    pointer-events: none;
  }
`;
export const NavbarTitle = styled.span`
  font-weight: bold;
  font-size: 24px;
  padding: 0.5rem;
  padding-left: 0rem;
  & a {
    text-decoration: none;
  }
`;
export const NavbarContent = styled("ul", props)`
  display: flex;
  list-style: none;
  margin: 0;
  transition: 0.3s max-height;
  padding-left: 0px !important;
  ${props =>
    props.collapsed
      ? `flex-direction: column; max-height: 0px; overflow: hidden;`
      : ""};
`;
export const NavbarContentContainer = styled("div", props)`
  display: flex;
  flex: 1;
  justify-content: space-between;
  padding-right: 10px;
  ${props =>
    props.collapsed
      ? "flex-direction: column; padding-bottom: 5px; flex-basis: 100%; flex-grow: 1; padding-right: 0px;"
      : ""};
  ${props => (props.collapsed && !props.open ? "max-width: 0px;" : "")}
`;
const NavbarDropdownContainer = styled("div", props)`
  ${props => (props.collapsed ? `text-align: left` : `text-align: center;`)}
  min-width: 130px;
  & * {
  }
`;
const NavbarDropdownLabel = styled.label`
  cursor: pointer;
`;
const NavbarDropdown = styled("ul", props)`
  list-style: none;
  margin-top: 0px;
  padding: 0px;
  margin-bottom: 0px;
  text-align: left;
  transition: 0.3s max-height;
  margin-left: -8px;
  margin-right: -44px;
  ${props => (props.collapsed ? `margin-right: -8px; padding-left: 20px` : "")}
  margin-top: 12px;
  max-height: 0px;
  overflow-y: hidden;
  background-color: ${props =>
    props.theme && props.theme[props.flavor]
      ? props.theme[props.flavor].background.color
      : props.defaultTheme[props.flavor]
      ? props.defaultTheme[props.flavor].background.color
      : "#f2f2f2"};
  & li {
    color: ${props =>
      props.theme && props.theme[props.flavor]
        ? props.theme[props.flavor].color.color
        : props.defaultTheme[props.flavor]
        ? props.defaultTheme[props.flavor].color.color
        : "#222"};
    padding: 0.5rem 1.5rem;
  }
  border: 1px solid
    ${props =>
      props.theme && props.theme[props.flavor]
        ? props.theme[props.flavor].background.hover
        : props.defaultTheme[props.flavor]
        ? props.defaultTheme[props.flavor].background.hover
        : "#222"};
  ${props => (!props.open ? `border: none; ` : "padding: .25rem 0")}
  border-radius: 3px;
`;
const NavbarDropdownCarat = styled("div", props)`
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
  transform: rotate(45deg);
  margin-bottom: 1px;
  transition: 0.3s all;
  display: inline-block;
`;
export const VueNavbarDropdown = {
  components: {
    NavbarDropdownContainer,
    NavbarDropdownLabel,
    NavbarDropdown,
    NavbarDropdownCarat,
    NavbarItem
  },
  data() {
    return {
      toggled: false
    };
  },
  props: {
    icon: {
      type: String,
      default: ""
    },
    text: {
      type: String,
      default: ""
    },
    disabled: {
      type: Boolean,
      default: false
    },
    parent: {
      type: Object,
      required: true
    },
    flavor: {
      type: String,
      default: ""
    },
    items: {
      type: Array,
      default() {
        return [];
      }
    }
  },
  mounted() {
    window.addEventListener("click", this.checkOffclick);
  },
  beforeDestroy() {
    window.removeEventListener("click", this.checkOffclick);
  },
  computed: {
    collapsed() {
      return this.parent.collapsed;
    },
    computedDropdownClass() {
      if (this.toggled) {
        return ["navbar-open-carat"];
      }
      return [];
    }
  },
  methods: {
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
      if (!isChild($e.target, this.$el)) {
        self.toggled = false;
        self.$forceUpdate();
      }
    },
    doNotClose($e) {
      $e.stopPropagation();
    },
    selectInternalA($e) {
      if ($e.target.children[0]) $e.target.children[0].click();
      this.$forceUpdate();
    },
    toggleDropdown($e) {
      this.toggled = !this.toggled;
      $e.preventDefault();
    }
  },
  template: `
    <navbar-dropdown-container :collapsed="collapsed">
      <a
        href="#"
        role="button"
        @click="toggleDropdown"
        @keyup.space="toggleDropdown"
        @keyup.enter='toggleDropdown'
      >
        <div v-html="icon"></div>
        {{text}}
        <navbar-dropdown-carat
          :flavor="flavor"
          :class="computedDropdownClass"
          :disabled="disabled"
        ></navbar-dropdown-carat>
      </a>
      <navbar-dropdown
        :flavor="flavor"
        @click="doNotClose"
        :collapsed="collapsed"
        :open="toggled"
        :style="{'max-height': toggled ? (items.length * 60) + 'px' : '0px'}"

      >
        <navbar-item
          v-for="(option, optionIndex) in items"
          :key="optionIndex"
          @click="selectInternalA"
          :collapsed="collapsed"
          :disabled="option.disabled"
          :active="option.active"
          :flavor="flavor"
        >
          <a
            v-if="option.type == 'item'"
            :href="option.disabled ? '#' : option.url"
          >{{option.text}}</a>
        </navbar-item>
      </navbar-dropdown>
    </navbar-dropdown-container>
  `
};
export const Navbar = {
  components: {
    NavbarContainer,
    NavbarItem,
    NavbarTitle,
    NavbarContentContainer,
    NavbarContent,
    VueNavbarDropdown,
    NButton
  },
  data: () => {
    return {
      open: false,
      contentWidth: 0,
      containerWidth: 0,
      navHeight: 0,
      titleWidth: 0,
      LEFT_CONTENT_INDICATOR: "L",
      CENTER_CONTENT_INDICATOR: "C",
      RIGHT_CONTENT_INDICATOR: "R"
    };
  },
  mounted() {
    this.calculateDimensions();
    window.addEventListener(
      "resize",
      this.debounce(this.calculateDimensions, 10, true),
      {
        passive: true
      }
    );
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
    },
    leftItems: {
      type: Array,
      default: () => {
        return [];
      }
    },
    centerItems: {
      type: Array,
      default: () => {
        return [];
      }
    },
    rightItems: {
      type: Array,
      default: () => {
        return [];
      }
    }
  },
  methods: {
    selectInternalA($e) {
      if ($e.target.children[0]) $e.target.children[0].click();
      this.$forceUpdate();
    },
    doNotClose($e) {
      $e.stopPropagation();
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
      if (this.$refs.content && !this.collapsed)
        this.contentWidth =
          this.$refs.leftContent.$el.clientWidth +
          this.$refs.middleContent.$el.clientWidth +
          this.$refs.rightContent.$el.clientWidth;
      if (this.$refs.container) {
        if (!this.open) {
          this.navHeight = this.$refs.container.$el.clientHeight;
        }
        this.containerWidth = this.$refs.container.$el.clientWidth;
      }
      if (this.$refs.title) {
        this.titleWidth = this.$refs.title.$el.clientWidth;
      }
    },
    computedStyle(length) {
      let sizeOfUnit = 50; // height of the nav elements
      for (let dropdown in this.dropdowns) {
        if (this.dropdowns[dropdown]) {
          if (dropdown[0] == this.LEFT_CONTENT_INDICATOR) {
            length += this.leftItems[dropdown.substring(1, dropdown.length)]
              .items.length;
          } else if (dropdown[0] == this.CENTER_CONTENT_INDICATOR) {
            length += this.centerItems[dropdown.substring(1, dropdown.length)]
              .items.length;
          } else if (dropdown[0] == this.RIGHT_CONTENT_INDICATOR) {
            length += this.rightItems[dropdown.substring(1, dropdown.length)]
              .items.length;
          }
        }
      }
      return {
        "max-height": `${this.open ? sizeOfUnit * length : 0}px`
      };
    },
    toggleAccordion() {
      this.open = !this.open;
    }
  },
  watch: {
    collapsed: function() {
      this.open = false;
      for (let dropdown in this.dropdowns) {
        this.dropdowns[dropdown] = false;
      }
    }
  },
  computed: {
    instance() {
      return this;
    },
    collapsed() {
      return this.contentWidth >= this.collapseCutOff;
    },
    computedClass() {
      if (this.open) {
        return [];
      }
      return ["closed"];
    },
    collapseCutOff() {
      let additionalPadding = 28;
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
