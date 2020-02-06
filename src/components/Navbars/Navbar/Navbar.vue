<template>
  <navbar-container :flavor="flavor" ref="container" :fixed="fixed">
    <navbar-title ref="title" tabindex="1">
      <div v-html="title.html" class="navbar-brand"></div>
      <a :href="title.url ? title.url : '#'">{{title.text}}</a>
    </navbar-title>
    <n-button
      tabindex="1"
      class="nav-button"
      v-show="collapsed"
      :flavor="flavor"
      @click="toggleAccordion"
      ref="hamburger"
    >&#9776;</n-button>
    <navbar-content-container :collapsed="collapsed" :open="open" ref="content">
      <navbar-content
        :style="computedStyle(leftItems.length)"
        :collapsed="collapsed"
        ref="leftContent"
      >
        <navbar-item
          v-for="(item, index) in leftItems"
          :key="index + '-left'"
          @click="selectInternalA($event, 'L', index)"
          :collapsed="collapsed"
          :nav-height="navHeight"
          :disabled="item.disabled"
          :active="item.active"
          :flavor="flavor"
        >
          <a v-if="item.type == 'item'" :href="item.disabled ? '#' : item.url">{{item.text}}</a>
          <navbar-dropdown-container v-else>
            <a
              href="#"
              role="button"
              @click="toggleDropdown($event, 'L', index)"
              @keyup.space="toggleDropdown($event, 'L', index)"
            >
              {{item.text}}
              <navbar-dropdown-carat
                :flavor="flavor"
                @click="toggleDropdown($event, 'L', index)"
                @keyup.space="toggleDropdown($event, 'L', index)"
                :class="computeDropdownClass('L', index)"
                :disabled="item.disabled"
              ></navbar-dropdown-carat>
            </a>
            <navbar-dropdown
              :flavor="flavor"
              @click="doNotClose"
              :collapsed="collapsed"
              :open="dropdowns['L' + index]"
              :style="{'max-height': dropdowns['L' + index] ? (item.items.length * 60) + 'px' : '0px'}"
            >
              <navbar-item
                v-for="(option, optionIndex) in item.items"
                :key="index + '-left-option-' +  optionIndex"
                @click="selectInternalA($event, 'L', index)"
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
          @click="selectInternalA($event, 'C', index)"
          :collapsed="collapsed"
          :nav-height="navHeight"
          :disabled="item.disabled"
          :active="item.active"
          :flavor="flavor"
        >
          <a v-if="item.type == 'item'" :href="item.disabled ? '#' : item.url">{{item.text}}</a>
          <navbar-dropdown-container v-else>
            <a
              href="#"
              role="button"
              @click="toggleDropdown($event, 'C', index)"
              @keyup.space="toggleDropdown($event, 'C', index)"
            >
              {{item.text}}
              <navbar-dropdown-carat
                :flavor="flavor"
                @click="toggleDropdown($event, 'C', index)"
                @keyup.space="toggleDropdown($event, 'C', index)"
                :class="computeDropdownClass('C', index)"
                :disabled="item.disabled"
              ></navbar-dropdown-carat>
            </a>
            <navbar-dropdown
              :flavor="flavor"
              @click="doNotClose"
              :collapsed="collapsed"
              :open="dropdowns['C' + index]"
              :style="{'max-height': dropdowns['C' + index] ? (item.items.length * 60) + 'px' : '0px'}"
            >
              <navbar-item
                v-for="(option, optionIndex) in item.items"
                :key="index + '-left-option-' +  optionIndex"
                @click="selectInternalA($event, 'C', index)"
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
          @click="selectInternalA($event, 'R', index)"
          :collapsed="collapsed"
          :nav-height="navHeight"
          :disabled="item.disabled"
          :active="item.active"
          :flavor="flavor"
        >
          <a v-if="item.type == 'item'" :href="item.disabled ? '#' : item.url">{{item.text}}</a>
          <navbar-dropdown-container v-else>
            <a
              href="#"
              role="button"
              @click="toggleDropdown($event, 'R', index)"
              @keyup.space="toggleDropdown($event, 'R', index)"
            >
              {{item.text}}
              <navbar-dropdown-carat
                :flavor="flavor"
                @click="toggleDropdown($event, 'R', index)"
                @keyup.space="toggleDropdown($event, 'R', index)"
                :class="computeDropdownClass('R', index)"
                :disabled="item.disabled"
              ></navbar-dropdown-carat>
            </a>
            <navbar-dropdown
              :flavor="flavor"
              @click="doNotClose"
              :collapsed="collapsed"
              :open="dropdowns['R' + index]"
              :style="{'max-height': dropdowns['R' + index] ? (item.items.length * 60) + 'px' : '0px'}"
            >
              <navbar-item
                v-for="(option, optionIndex) in item.items"
                :key="index + '-left-option-' +  optionIndex"
                @click="selectInternalA($event, 'R', index)"
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
        </navbar-item>
      </navbar-content>
    </navbar-content-container>
  </navbar-container>
</template>

<script>
import styled from "vue-styled-components";
import Theme from "@intus/designsystem";
require("@intus/fonts");
import { NButton } from "@intus/button";

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
  z-index: 1;
  & * {
    z-index: 1;
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
  padding: 1rem 0.75rem 0px 0.75rem;
  transition: color .2s ease-in-out,
            background-color .2s ease-in-out,
            border-color .2s ease-in-out,
            box-shadow .2s ease-in-out;
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
export const NavbarDropdownContainer = styled("div", props)`
  & * {
  }
`;
export const NavbarDropdownLabel = styled.label`
  cursor: pointer;
`;
export const NavbarDropdown = styled("ul", props)`
  list-style: none;
  margin-top: 0px;
  padding: 0px;
  margin-bottom: 0px;
  transition: 0.3s max-height;
  margin-left: -8px;
  margin-right: -44px;
  ${props => (props.collapsed ? `margin-right: -8px; padding-left: 20px` : "")}
  margin-top: 11px;
  max-height: 0px;
  overflow-y: hidden;
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
  border: 1px solid
    ${props =>
      props.theme && props.theme[props.flavor]
        ? props.theme[props.flavor].background.hover
        : props.defaultTheme[props.flavor]
        ? props.defaultTheme[props.flavor].background.hover
        : "#222"};
  ${props => (!props.open ? `border: none` : "")}
  border-radius: 3px;
`;
export const NavbarDropdownCarat = styled("div", props)`
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
export const Navbar = {
  components: {
    NavbarContainer,
    NavbarItem,
    NavbarTitle,
    NavbarContentContainer,
    NavbarContent,
    NavbarDropdownContainer,
    NavbarDropdownLabel,
    NavbarDropdownCarat,
    NavbarDropdown,
    NButton
  },
  data: () => {
    return {
      open: false,
      contentWidth: 0,
      containerWidth: 0,
      navHeight: 0,
      titleWidth: 0,
      dropdowns: {},
      LEFT_CONTENT_INDICATOR: "L",
      CENTER_CONTENT_INDICATOR: "C",
      RIGHT_CONTENT_INDICATOR: "R"
    };
  },
  mounted() {
    let self = this;
    this.calculateDimensions();
    self.leftItems.forEach((item, index) => {
      if (item.type == "dropdown") {
        self.dropdowns[this.LEFT_CONTENT_INDICATOR + index] = false;
      }
    });
    self.centerItems.forEach((item, index) => {
      if (item.type == "dropdown") {
        self.dropdowns[this.CENTER_CONTENT_INDICATOR + index] = false;
      }
    });
    self.rightItems.forEach((item, index) => {
      if (item.type == "dropdown") {
        self.dropdowns[this.RIGHT_CONTENT_INDICATOR + index] = false;
      }
    });
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
    selectInternalA($e, section, index) {
      if ($e.target.children[0]) $e.target.children[0].click();
      this.$forceUpdate();
    },
    doNotClose($e) {
      $e.stopPropagation();
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
        this.$refs.container &&
        !isChild($e.target, this.$refs.container.$el)
      ) {
        self.open = false;
        for (let dropdown in self.dropdowns) {
          self.dropdowns[dropdown] = false;
        }
        self.$forceUpdate();
      }
    },
    computeDropdownClass(section, index) {
      if (this.dropdowns[section + index]) {
        return ["navbar-open-carat"];
      }
      return [];
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
        if (callNow) func.apply(context, args);
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
    toggleDropdown($e, section, index) {
      $e.preventDefault();
      this.dropdowns[section + index] = !this.dropdowns[section + index];
      this.$forceUpdate();
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
