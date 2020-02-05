<template>
  <div class="input-container">
    <n-label :for="name">{{label}}</n-label>
    <n-input
      :id="name"
      :flavor="flavor"
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
      v-model="value"
      @input="oninput"
    ></n-input>
  </div>
</template>

<script>
import { NLabel, LLabel, MLabel, WLabel } from "@intus/typography";
import styled from "vue-styled-components";
import Theme from "@intus/designsystem";
require("@intus/fonts");

const props = {
  flavor: {
    type: String,
    default: "Info"
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
  border: 1px solid
    ${props =>
      props.theme && props.theme[props.flavor]
        ? props.theme[props.flavor].border.color
        : props.defaultTheme[props.flavor] &&
          props.defaultTheme[props.flavor].border.color
        ? props.defaultTheme[props.flavor].border.color
        : "#04040480"};
  padding: 2px 5px 2px 5px;
  font-family: "Roboto", sans-serif;
  box-sizing: border-box;
  transition: box-shadow 0.5s cubic-bezier(0, 0.99, 0.37, 1.01);
  &:focus {
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
    color: #747474;
    background-color: #e2e2e2;
  }
`;
export const VueInput = {
  name: "vue-input",
  components: { NInput, NLabel, LLabel, MLabel, WLabel },
  data: function() {
    return {
      value: ""
    };
  },
  props: {
    autocomplete: {
      type: String,
      default: "off"
    },
    initialValue: {
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
    labelType: {
      type: String,
      default: "normal"
    },
    label: {
      type: String,
      required: true
    },
    autofocus: {
      type: Boolean,
      default: false
    },
    flavor: {
      type: String,
      default: "Info"
    }
  },
  mounted: function() {
    var self = this;
    if (typeof self.$parent !== "undefined") {
      if (!self.$parent.$refs.inputs) self.$parent.$refs.inputs = {};
      self.$parent.$refs.inputs[self.name] = self;
    }
  },
  methods: {
    oninput: function() {
      var self = this;
      self.$emit("input", self.value);
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
