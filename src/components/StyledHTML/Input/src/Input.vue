<template>
  <div class="input-container">
    <n-label :dark="labelDark" :flavor="labelFlavor" :for="name">{{
      label
    }}</n-label>
    <n-input
      :flavor="flavor"
      :id="name"
      :readonly="readonly"
      :placeholder="placeholder"
      :pattern="pattern"
      :multiple="multiple"
      :min="min"
      :max="max"
      :name="name"
      :type="inputType"
      :required="required"
      :disabled="disabled"
      :autofocus="autofocus"
      :autocomplete="autocomplete"
      :value="internalValue"
      @input="oninput"
      @change="onChange"
      @focus="onFocus"
    ></n-input>
  </div>
</template>

<script>
import { NLabel } from "@IntusFacultas/typography";
import styled from "vue-styled-components";
import Theme from "@IntusFacultas/design-system";
const props = {
  flavor: {
    type: String,
    default: "LightBlue"
  },
  defaultTheme: {
    type: Object,
    default: function() {
      return Theme;
    }
  }
};
export const NInput = styled("input", props)`
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
    border-color: 1px solid
      ${props =>
        props.theme && props.theme[props.flavor]
          ? props.theme[props.flavor].border.color
          : props.defaultTheme[props.flavor] &&
            props.defaultTheme[props.flavor].border.color
          ? props.defaultTheme[props.flavor].border.color
          : "#04040480"};
    outline: none;
    box-shadow: 0px 0px 0px 3px
      ${props =>
        props.theme && props.theme[props.flavor]
          ? props.theme[props.flavor].border.color
          : props.defaultTheme[props.flavor] &&
            props.defaultTheme[props.flavor].border.color
          ? props.defaultTheme[props.flavor].border.color
          : "#10d2ff80"};
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
export const VueInput = {
  name: "vue-input",
  components: { NInput, NLabel },
  data: function() {
    return {
      internalValue: ""
    };
  },
  props: {
    flavor: {
      type: String,
      default: "LightBlue"
    },
    autocomplete: {
      type: String,
      default: "off"
    },
    value: {
      type: String,
      default: ""
    },
    readonly: {
      type: Boolean,
      default: false
    },
    placeholder: {
      type: String,
      default: ""
    },
    pattern: {
      type: String,
      default: "*"
    },
    multiple: {
      type: Boolean,
      default: false
    },
    min: {
      type: String,
      default: ""
    },
    max: {
      type: String,
      default: ""
    },
    name: {
      type: String,
      required: true
    },
    inputType: {
      type: String,
      required: true
    },
    required: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    },
    labelFlavor: {
      type: String,
      default: ""
    },
    labelDark: {
      type: Boolean,
      default: false
    },
    label: {
      type: String,
      required: true
    },
    autofocus: {
      type: Boolean,
      default: false
    }
  },
  watch: {
    value(newVal, oldVal) {
      this.internalValue = newVal;
    }
  },
  mounted() {
    var self = this;
    if (typeof self.$parent !== "undefined") {
      if (!self.$parent.$refs.inputs) self.$parent.$refs.inputs = {};
      self.$parent.$refs.inputs[self.name] = self;
    }
  },
  methods: {
    oninput($e) {
      var self = this;
      this.internalValue = $e;
      self.$emit("input", this.internalValue);
    },
    onChange() {
      this.$emit("change", this.internalValue);
    },
    onFocus() {
      this.$emit("focus");
    }
  }
};
export default VueInput;
</script>

<style>
.input-container {
  display: flex;
  flex-direction: column;
  width: 100%;
}
</style>
