<template>
  <numeric-container>
    <n-button
      :block="true"
      :flavor="flavor"
      @click="toggle"
      class="numeric-button"
    >
      <span>
        {{ filter.display }}
        <badge :flavor="activeBadgeFlavor">Active</badge>
      </span>
      <numeric-carat
        :flavor="flavor"
        :class="computeClass"
        :disabled="filter.disabled"
      ></numeric-carat>
    </n-button>
    <numeric-content-container ref="content">
      <number-range
        :max="filter.max"
        :min="filter.min"
        :steps="computedStep"
        :label="filter.display"
        :label-flavor="textFlavor"
        :name="name"
        v-model="value"
        @input="bubbleInput"
        @change="bubbleChange"
      ></number-range>
      <text :flavor="textFlavor">{{ helpText }}</text>
    </numeric-content-container>
  </numeric-container>
</template>

<script>
import { NButton } from "@IntusFacultas/button";
import Badge from "@IntusFacultas/badge";
import { Text } from "@IntusFacultas/typography";
import NumberRange from "@IntusFacultas/number-range";
import styled from "vue-styled-components";
import Theme from "@IntusFacultas/design-system";
const NumericContainer = styled.div`
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
const NumericCarat = styled("div", props)`
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
const NumericContentContainer = styled.div`
  transition: 0.3s height;
  margin-top: 3px;
  height: 0px;
  overflow-y: hidden;
`;

export const NumericFilter = {
  components: {
    NButton,
    NumericContainer,
    NumericCarat,
    NumericContentContainer,
    NumberRange,
    Badge,
    Text
  },
  data() {
    return {
      open: false,
      internalValue: {
        lowerValue: 0,
        upperValue: 0
      }
    };
  },
  props: {
    value: {
      type: Object,
      default() {
        return {
          lowValue: 0,
          highValue: 0
        };
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
    activeBadgeFlavor: {
      type: String,
      default: "Light"
    },
    flavor: {
      type: String,
      default: "Dark"
    },
    textFlavor: {
      type: String,
      default: ""
    },
    helpText: {
      type: String,
      default: ""
    }
  },
  mounted() {
    this.open = this.defaultOpen;
    if (this.defaultOpen) {
      this.expandSection(this.$refs.content.$el);
    }
    if (this.filter.value) {
      if (!isNaN(this.filter.value.lowerValue)) {
        this.internalValue.lowerValue = this.filter.value.lowerValue;
      } else {
        this.internalValue.lowerValue = this.filter.min;
      }
      if (!isNaN(this.filter.value.upperValue)) {
        this.internalValue.upperValue = this.filter.value.upperValue;
      } else {
        this.internalValue.upperValue = this.filter.value.upperValue;
      }
    } else {
      this.internalValue.lowerValue = this.filter.min;
      this.internalValue.upperValue = this.filter.max;
    }

    let self = this;
    self.$watch("value", self.handleUpdate, { deep: true });
    // this.$watch("filter.value.lowerValue", this.handleUpdate, { deep: true });
    // this.$watch("filter.value.upperValue", this.handleUpdate, { deep: true });
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
    bubbleInput($event) {
      this.internalValue = $event;
      this.$emit("input", this.internalValue);
    },
    bubbleChange($event) {
      this.internalValue = $event;
      this.$emit("change", this.internalValue);
    },
    handleUpdate(value) {
      this.internalValue.lowerValue = this.value.lowerValue;
      this.internalValue.upperValue = this.value.upperValue;
    },
    toggle() {
      if (!this.open) {
        this.expandSection(this.$refs.content.$el);
        this.open = true;
      } else {
        this.collapseSection(this.$refs.content.$el);
        this.open = false;
      }
    }
  },
  computed: {
    computedStep() {
      if (this.filter.numeric_type == "range") {
        return [this.filter.step];
      } else {
        return this.filter.steps;
      }
    },
    computeClass() {
      if (this.open) {
        return ["sidebar-open-carat"];
      }
      return [];
    }
  }
};
export default NumericFilter;
</script>

<style>
.numeric-content-input {
  width: calc(100% - 10px);
  margin-left: 5px;
}
.numeric-button {
  justify-content: space-between;
  display: flex;
  align-items: center;
}
.numeric-open-carat {
  transform: rotate(135deg) !important;
}

.drag-rail {
  width: 100%;
  height: 2px;
  background-color: gray;
}
.drag-container {
  height: 45px;
  display: flex;
  align-items: center;
  position: relative;
  width: 100%;
}
.dragger {
  background-color: red;
  height: 15px;
  width: 15px;
  position: absolute;
  cursor: pointer;
}
</style>
