<template>
  <div class="input-container">
    <n-label :dark="labelDark" :flavor="labelFlavor" :for="name">{{
      label
    }}</n-label>
    <n-text-area
      :id="name"
      :flavor="flavor"
      :cols="cols"
      :rows="rows"
      :readonly="readonly"
      :placeholder="placeholder"
      :name="name"
      :maxlength="maxlength"
      :required="required"
      :disabled="disabled"
      :autofocus="autofocus"
      v-model="internalValue"
      @input="oninput"
      @change="onChange"
      @focus="onFocus"
      ref="input"
    ></n-text-area>
  </div>
</template>

<script>
import { NLabel } from "@IntusFacultas/typography";
import Theme from "@IntusFacultas/design-system";
import styled from "vue-styled-components";
import resizeHandlerPolyfill from "./polyfill-resize";
const props = {
  flavor: {
    type: String,
    default: "LightBlue",
  },
  defaultTheme: {
    type: Object,
    default: function() {
      return Theme;
    },
  },
};
export const NTextArea = styled("textarea", props)`
  width: 100%;
  height: 35px;
  font-size: 16px;
  border-radius: 5px;
  border-width: 1px;
  border-style: solid;
  padding: 2px 5px 2px 5px;
  margin-top: 2px;
  box-sizing: border-box;
  font-family: "Open Sans Regular", -apple-system, BlinkMacSystemFont,
    "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji",
    "Segoe UI Emoji", "Segoe UI Symbol";
  transition: box-shadow 0.5s cubic-bezier(0, 0.99, 0.37, 1.01);
  &:focus {
    border-color: ${(props) =>
      props.theme && props.theme[props.flavor]
        ? props.theme[props.flavor].border.color
        : props.defaultTheme[props.flavor] &&
          props.defaultTheme[props.flavor].border.color
        ? props.defaultTheme[props.flavor].border.color
        : "#040404"};
    outline: none;
    box-shadow: 0px 0px 0px 3px
      ${(props) =>
        props.theme && props.theme[props.flavor]
          ? props.theme[props.flavor].border.color
          : props.defaultTheme[props.flavor] &&
            props.defaultTheme[props.flavor].border.color
          ? props.defaultTheme[props.flavor].border.color
          : "#040404"};
  }
  &:read-only {
    background-color: #e9e9e9;
    color: #747474;
  }
  &:disabled {
    cursor: not-allowed;
    pointer-events: none;
    color: #747474;
    background-color: #e2e2e2;
  }
`;
export const VueTextArea = {
  name: "vue-text-area",
  components: { NTextArea, NLabel },
  data: function() {
    return {
      internalValue: "",
    };
  },
  props: {
    flavor: {
      type: String,
      default: "LightBlue",
    },
    autofocus: {
      type: Boolean,
      default: false,
    },
    readonly: {
      type: Boolean,
      default: false,
    },
    placeholder: {
      type: String,
      default: "",
    },
    maxlength: {
      type: String,
      default: "",
    },
    value: {
      type: String,
      default: "",
    },
    cols: {
      type: String,
      default: "",
    },
    rows: {
      type: String,
      default: "",
    },
    name: {
      type: String,
      required: true,
    },
    required: {
      type: Boolean,
      default: false,
    },
    labelFlavor: {
      type: String,
      default: "",
    },
    labelDark: {
      type: Boolean,
      default: false,
    },
    label: {
      type: String,
      required: true,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
  },
  watch: {
    value: function(newVal, oldVal) {
      this.internalValue = newVal;
    },
  },
  mounted: function() {
    var self = this;
    if (typeof self.$parent !== "undefined") {
      if (!self.$parent.$refs.inputs) self.$parent.$refs.inputs = {};
      self.$parent.$refs.inputs[self.name] = self;
    }
    if (self.msieversion()) {
      resizeHandlerPolyfill(self.$refs.input.$el, true);
    }
  },
  methods: {
    msieversion() {
      var ua = window.navigator.userAgent;
      var msie = ua.indexOf("MSIE ");

      if (msie > 0 || !!navigator.userAgent.match(/Trident.*rv\:11\./)) {
        // If Internet Explorer, return version number
        return true;
      } // If another browser, return 0
      else {
        return false;
      }

      return false;
    },
    oninput: function() {
      var self = this;
      self.$emit("input", self.internalValue);
    },
    onChange() {
      this.$emit("change", this.internalValue);
    },
    onFocus() {
      this.$emit("focus");
    },
  },
};
export default VueTextArea;
</script>

<style>
.input-container {
  display: flex;
  flex-direction: column;
  width: 100%;
}
</style>
