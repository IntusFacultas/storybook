<template>
  <navbar-container :flavor="flavor" ref="container" :fixed="fixed" :data-navbar="_uid">
    <navbar-title ref="title">
      <div v-html="title.html" class="navbar-brand"></div>
      <a v-if="title.text" :href="title.url ? title.url : '#'">{{ title.text }}</a>
    </navbar-title>
    <n-button
      class="nav-button"
      v-show="collapsed"
      :flavor="flavor"
      @click="toggleAccordion"
      ref="hamburger"
    >&#9776;</n-button>
    <navbar-content-container :collapsed="collapsed" ref="content">
      <navbar-content :collapsed="collapsed" ref="leftContent">
        <navbar-item
          v-for="(item, index) in leftItems"
          :key="index + '-left'"
          :disabled="item.disabled"
          :active="item.active"
          :flavor="flavor"
        >
          <a v-if="item.type == 'item'" :href="item.disabled ? '#' : item.url">{{ item.text }}</a>
          <vue-navbar-dropdown
            v-else
            :icon="item.icon"
            :text="item.text"
            :items="item.items"
            :disabled="item.disabled"
            :flavor="flavor"
          ></vue-navbar-dropdown>
        </navbar-item>
      </navbar-content>
      <navbar-content :collapsed="collapsed" ref="middleContent">
        <navbar-item
          v-for="(item, index) in centerItems"
          :key="index + '-left'"
          :disabled="item.disabled"
          :active="item.active"
          :flavor="flavor"
        >
          <a v-if="item.type == 'item'" :href="item.disabled ? '#' : item.url">{{ item.text }}</a>
          <vue-navbar-dropdown
            v-else
            :icon="item.icon"
            :text="item.text"
            :items="item.items"
            :disabled="item.disabled"
            :flavor="flavor"
          ></vue-navbar-dropdown>
        </navbar-item>
      </navbar-content>
      <navbar-content :collapsed="collapsed" ref="rightContent">
        <navbar-item
          v-for="(item, index) in rightItems"
          :key="index + '-left'"
          :disabled="item.disabled"
          :active="item.active"
          :flavor="flavor"
        >
          <a v-if="item.type == 'item'" :href="item.disabled ? '#' : item.url">{{ item.text }}</a>
          <vue-navbar-dropdown
            v-else
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
  defaultTheme: {
    type: Object,
    default: function() {
      return Theme;
    }
  },
  collapsed: Boolean,

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
  display: flex;
  justify-content: center;
  padding: 0.5em 1em;
  align-items: center;
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
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 1em 0 0;
  & a {
    text-decoration: none;
  }
`;
export const NavbarContent = styled("ul", props)`
  display: flex;
  list-style: none;
  margin: 0;
  padding-left: 0px !important;
`;
export const NavbarContentContainer = styled("div", props)`
  display: flex;
  flex: 1;

  justify-content: space-between;
  padding-right: 10px;
  ${props =>
    props.collapsed
      ? `
      & > ul{
        display: flex;
        flex-direction: column;
      }
      
      transition: 0.1s height ease-in-out;
       overflow: hidden;
       height: 0px;
       flex-direction: column;
       flex-basis: 100%;
       flex-grow: 1;
       padding-right: 0px;`
      : "height: 50px !important; overflow-y: visible !important;"};
`;
const NavbarDropdownContainer = styled("div", props)`
  position: relative;
  display: block;
  width: 100%;
  text-align: center;
`;
const NavbarDropdownLabel = styled.label`
  cursor: pointer;
`;
const NavbarDropdown = styled("ul", props)`
  list-style: none;
  padding: 0px;
  text-align: left;
  transition: 0.1s height;
  position: absolute;
  
  top: 35px;
  z-index: 888;
  height: 0;
  overflow-y: hidden;
  background-color: white;
  & li * {
    color: #444;
  }
  & > a {
    white-space: nowrap;
  }
  & li:hover {
    background-color: #f2f2f2;
  }
  ${props =>
    props.collapsed
      ? `display: block;
        position: relative;
        & li {
          word-break: break-all;
          white-space: pre-line;
        }
        margin-top: 1em;
        top: 0px;
        width: 100%;`
      : `min-width: 100%; max-width: 350px; word-wrap: break-word;`}
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
      toggled: false,
      collapsed: false,
      parent: null
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
    this.parent = this.$parent;
    while (this.parent && !this.parent.$el.hasAttribute("data-navbar")) {
      this.parent = this.parent.$parent;
    }
    this.parent = this.parent.$parent;
    this.collapsed = this.parent.collapsed;
    let self = this;
    this.$watch("parent.collapsed", function(newVal) {
      self.collapsed = newVal;
    });
  },
  beforeDestroy() {
    window.removeEventListener("click", this.checkOffclick);
  },
  computed: {
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
        self.collapseSection(this.$refs.dropdowncontent.$el);
      }
    },
    doNotClose($e) {
      $e.stopPropagation();
    },
    selectInternalA($e) {
      if ($e.target.children[0]) $e.target.children[0].click();
      this.$forceUpdate();
    },
    collapseSection(element) {
      // pulled from https://css-tricks.com/using-css-transitions-auto-dimensions/ and modified
      // get the height of the element's inner content, regardless of its actual size
      let sectionHeight = element.scrollHeight;
      // // temporarily disable all css transitions
      var elementTransition = element.style.transition;
      element.style.transition = "";
      element.style.height = sectionHeight + "px !important";
      // on the next frame (as soon as the previous style change has taken effect),
      // explicitly set the element's height to its current pixel height, so we
      // aren't transitioning out of 'auto'
      requestAnimationFrame(function() {
        element.style.height = sectionHeight + "px";
        element.style.transition = elementTransition;
        element.style.overflowY = "hidden";
        element.style.padding = "0 0 0 0";

        //   // on the next frame (as soon as the previous style change has taken effect),
        //   // have the element transition to height: 0
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
      // element.style.padding = "5px 0px";

      // element.style.overflowY = "auto"
      // when the next css transition finishes (which should be the one we just triggered)
      element.addEventListener("transitionend", function() {
        // remove this event listener so it only gets triggered once
        element.removeEventListener("transitionend", this);
        if (element.getAttribute("data-collapsed") == "false") {
          // remove "height" from the element's inline styles, so it can return to its initial value
          element.style.height = "auto";
          element.style.padding = "0 0 5px 0";
        }
      });

      // mark the section as "currently not collapsed"
      element.setAttribute("data-collapsed", "false");
    },
    toggleDropdown($e) {
      this.toggled = !this.toggled;
      $e.preventDefault();
      if (this.toggled) {
        this.expandSection(this.$refs.dropdowncontent.$el);
      } else {
        this.collapseSection(this.$refs.dropdowncontent.$el);
      }
    }
  },
  template: `
    <navbar-dropdown-container>
      <a
        href="#"
        role="button"
        :collapsed="collapsed"
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
        :collapsed="collapsed"
        :flavor="flavor"
        @click="doNotClose"
        :open="toggled"
        ref="dropdowncontent"
      >
        <navbar-item
          v-for="(option, optionIndex) in items"
          :key="optionIndex"
          @click="selectInternalA"
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
    collapseSection(element) {
      // pulled from https://css-tricks.com/using-css-transitions-auto-dimensions/ and modified
      // get the height of the element's inner content, regardless of its actual size
      let sectionHeight = element.scrollHeight;
      // // temporarily disable all css transitions
      var elementTransition = element.style.transition;
      element.style.transition = "";
      element.style.height = sectionHeight + "px !important";
      // on the next frame (as soon as the previous style change has taken effect),
      // explicitly set the element's height to its current pixel height, so we
      // aren't transitioning out of 'auto'
      requestAnimationFrame(function() {
        element.style.height = sectionHeight + "px";
        element.style.transition = elementTransition;
        element.style.overflowY = "hidden";

        //   // on the next frame (as soon as the previous style change has taken effect),
        //   // have the element transition to height: 0
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
      // element.style.padding = "5px 0px";

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
    calculateDimensions() {
      if (this.$refs.content && !this.collapsed)
        this.contentWidth =
          this.$refs.leftContent.$el.clientWidth +
          this.$refs.middleContent.$el.clientWidth +
          this.$refs.rightContent.$el.clientWidth;
      if (this.$refs.container) {
        if (this.$refs.container.$el.clientWidth)
          this.containerWidth = this.$refs.container.$el.clientWidth;
      }
      if (this.$refs.title) {
        this.titleWidth = this.$refs.title.$el.clientWidth;
      }
    },
    toggleAccordion() {
      this.open = !this.open;
      if (this.open) {
        this.expandSection(this.$refs.content.$el);
      } else {
        this.collapseSection(this.$refs.content.$el);
      }
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
  display: flex;
  align-items: center;
  height: 50px;
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
