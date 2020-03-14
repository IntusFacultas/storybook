<template>
  <parametric-container>
    <n-button
      :block="true"
      :flavor="flavor"
      @click="toggle"
      class="parametric-button"
    >
      <span>
        {{ filter.display }}
        <badge :flavor="activeBadgeFlavor" v-if="selectedItems.length != 0"
          >Active</badge
        >
      </span>
      <parametric-carat
        :flavor="flavor"
        :class="computeClass"
        :disabled="filter.disabled"
      ></parametric-carat>
    </n-button>
    <parametric-content-container ref="content">
      <n-label class="sr-only" :for="name">{{ filter.display }}</n-label>
      <select-me
        :aria-label="filter.display"
        v-model="selectedItems"
        :options="filter.items"
        :badge-flavor="badgeFlavor"
        :multi-select="true"
        :debug="debug"
        :display-attribute="displayAttribute"
        :value-attribute="valueAttribute"
        :name="name"
        ref="selectBar"
        @input="handleUpdate"
        @focus="open = true"
      ></select-me>
      <quick-select-container>
        <quick-select-option
          v-for="(item, index) in filter.quickSelects"
          :flavor="quickSelectFlavor"
          :key="index"
          v-html="item[displayAttribute]"
          @click="quickSelect(item)"
        ></quick-select-option>
      </quick-select-container>
    </parametric-content-container>
  </parametric-container>
</template>

<script>
import { NButton } from "@IntusFacultas/button";
import { NLabel } from "@IntusFacultas/typography";
import Badge from "@IntusFacultas/badge";
import styled from "vue-styled-components";
import SelectMe from "@IntusFacultas/select-me";
import Theme from "@IntusFacultas/design-system";
const ParametricContainer = styled.div`
  width: 100%;
`;
const props = {
  flavor: String,
  disabled: Boolean,
  active: Boolean,
  defaultTheme: {
    type: Object,
    default: function() {
      return Theme;
    }
  }
};
const ParametricCarat = styled("div", props)`
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
  float: right;
  width: 0.5rem;
  height: 0.5rem;
  transform: rotate(45deg);
  transition: 0.3s all;
  display: inline-block;
`;
const QuickSelectContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-bottom: 5px;
`;
const QuickSelectOption = styled("div", props)`
  font-family: "Open Sans Regular", -apple-system, BlinkMacSystemFont,
    "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji",
    "Segoe UI Emoji", "Segoe UI Symbol";
  padding: 5px;
  margin-bottom: 2px;
  cursor: pointer;
  text-align: left !important;
  color: ${props =>
    props.theme && props.theme[props.flavor]
      ? props.theme[props.flavor].color.color
      : props.defaultTheme[props.flavor] &&
        props.defaultTheme[props.flavor].color.color
      ? props.defaultTheme[props.flavor].color.color
      : "#040404"}
  background-color: ${props =>
    props.theme && props.theme[props.flavor]
      ? props.theme[props.flavor].background.color
      : props.defaultTheme[props.flavor] &&
        props.defaultTheme[props.flavor].background.color
      ? props.defaultTheme[props.flavor].background.color
      : "#f0f0f0"};
  &:hover {
    background-color: ${props =>
      props.theme && props.theme[props.flavor]
        ? props.theme[props.flavor].background.hover
        : props.defaultTheme[props.flavor] &&
          props.defaultTheme[props.flavor].background.hover
        ? props.defaultTheme[props.flavor].background.hover
        : "#d5d5d5"};
    color: ${props =>
      props.theme && props.theme[props.flavor]
        ? props.theme[props.flavor].color.hover
        : props.defaultTheme[props.flavor] &&
          props.defaultTheme[props.flavor].color.hover
        ? props.defaultTheme[props.flavor].color.hover
        : "#000"}
  }
`;
const ParametricContentContainer = styled.div`
  transition: 0.3s height;
  margin-top: 3px;
  height: 0px;
  overflow-y: hidden;
`;
export const ParametricFilter = {
  components: {
    NButton,
    ParametricContainer,
    ParametricCarat,
    SelectMe,
    ParametricContentContainer,
    QuickSelectContainer,
    QuickSelectOption,
    Badge,
    NLabel
  },
  data() {
    return {
      selectedItems: [],
      open: false,
      unwatch: null
    };
  },
  props: {
    value: {
      type: String,
      default() {
        return [];
      }
    },
    name: {
      type: String,
      required: true
    },
    filter: {
      type: Object,
      required: true
    },
    defaultOpen: {
      type: Boolean,
      default: false
    },
    displayAttribute: {
      type: String,
      default: "text"
    },
    valueAttribute: {
      type: String,
      default: "value"
    },
    quickSelectFlavor: {
      type: String,
      default: "Secondary"
    },
    activeBadgeFlavor: {
      type: String,
      default: "Light"
    },
    badgeFlavor: {
      type: String,
      default: "Secondary"
    },
    flavor: {
      type: String,
      default: "Dark"
    },
    debug: {
      type: Boolean,
      default: false
    }
  },
  beforeDestroy() {
    this.unwatch();
  },
  mounted() {
    this.open = this.defaultOpen;
    if (this.defaultOpen) {
      this.expandSection(this.$refs.content.$el);
    }
    if (this.filter.selected_values) {
      this.selectedItems = this.filter.selected_values.slice();
    }
    this.unwatch = this.$watch("values", this.updateSelectedItems, {
      deep: true
    });
  },
  methods: {
    updateSelectedItems() {
      this.selectedItems = this.value;
    },
    collapseSection(element) {
      // pulled from https://css-tricks.com/using-css-transitions-auto-dimensions/ and modified
      // get the height of the element's inner content, regardless of its actual size
      let sectionHeight = element.scrollHeight;
      // temporarily disable all css transitions
      var elementTransition = element.style.transition;
      element.style.transition = "";
      element.style.height = sectionHeight + "px !important";
      element.style.overflowY = "hidden";
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
          element.style.overflowY = "visible";
        }
      });

      // mark the section as "currently not collapsed"
      element.setAttribute("data-collapsed", "false");
    },
    handleUpdate(value) {
      this.selectedItems = value.slice();
      this.$emit("input", this.selectedItems);
    },
    toggle() {
      // this.open = !this.open;

      if (!this.open) {
        this.expandSection(this.$refs.content.$el);
        this.open = true;
      } else {
        this.collapseSection(this.$refs.content.$el);
        this.open = false;
      }
    },
    quickSelect(item) {
      let option = this.filter.items.filter(
        i => i[this.valueAttribute] == item[this.valueAttribute]
      )[0];
      if (this.$refs.selectBar) {
        this.$refs.selectBar.selectOption(option);
      }
    }
  },
  computed: {
    computeClass() {
      if (this.open) {
        return ["sidebar-open-carat"];
      }
      return [];
    }
  }
};
export default ParametricFilter;
</script>

<style>
.sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  -webkit-clip-path: inset(50%);
  clip-path: inset(50%);
  border: 0;
}
.parametric-button {
  justify-content: space-between;
  display: flex;
  align-items: center;
}
.parametric-open-carat {
  transform: rotate(135deg) !important;
}
</style>
