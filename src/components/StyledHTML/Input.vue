<template>
  <div class="input-container">
    <l-label :for="name" v-if="labelType.toUpperCase() == 'LIGHT'">{{label}}</l-label>
    <m-label :for="name" v-else-if="labelType.toUpperCase() == 'MEDIUM'">{{label}}</m-label>
    <w-label :for="name" v-else-if="labelType.toUpperCase() == 'WHITE'">{{label}}</w-label>
    <n-label :for="name" v-else>{{label}}</n-label>
    <n-input
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
      v-model="value"
      @input="oninput"
    ></n-input>
  </div>
</template>

<script>
import { NLabel, LLabel, MLabel, WLabel } from "./Typography.vue";
import styled from "vue-styled-components";
import Theme from "../DesignSystem/theme.js";

const props = {
  color: {
    type: String,
    default: Theme.InfoMedium.background.color
  }
};
export const NInput = styled("input", props)`
  width: 100%;
  height: 25px;
  font-size: 16px;
  border-radius: 5px;
  border: 1px solid #838e99;
  padding: 2px 5px 2px 5px;
  box-sizing: border-box;
  transition: box-shadow 0.5s;
  &:focus {
    outline: none;
    border-color: ${props => props.color};
    box-shadow: 0px 0px 0px 3px ${props => props.color};
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
      default: ""
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
  display: block;
  width: 100%;
}
</style>