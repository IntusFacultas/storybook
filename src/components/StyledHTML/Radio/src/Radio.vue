<template>
  <radio-container>
    <symbol-holder
      tabindex="0"
      :active="false"
      :size="size + 4"
      @click="emitValue"
      @keyup.enter="emitValue"
      @keyup.space="emitValue"
      class="radio-button-container"
    >
      <svg
        class="radio-button"
        fill="6c757d"
        preserveAspectRatio="xMidYMid meet"
        :height="size"
        :width="size"
        viewBox="0 0 30 30"
      >
        <circle
          class="radio-button"
          cx="15"
          cy="15"
          r="13"
          fill="white"
          stroke="#6c757d"
          stroke-width="2"
        />
        <circle
          v-if="value == inputValue"
          class="radio-button-inverse"
          cx="15"
          cy="15"
          r="6"
          fill="#6c757d"
        />
      </svg>
    </symbol-holder>
    <n-label
      @click="emitValue"
      :bold="bold"
      :flavor="flavor"
      :size="size"
      :dark="dark"
      >{{ label }}</n-label
    >
  </radio-container>
</template>

<script>
import { NLabel } from "@IntusFacultas/typography";
import styled from "vue-styled-components";
const props = {
  size: {
    type: Number,
    default: 14
  },
  active: {
    type: Boolean,
    default: false
  }
};
const RadioContainer = styled.div`
  display: inline;
`;
const RadioAligner = styled.div`
  display: flex;
  align-content: center;
`;
const SymbolHolder = styled("span", props)`
  cursor: pointer;
  margin-right: 4px;
`;
export const Radio = {
  components: { NLabel, SymbolHolder, RadioContainer, RadioAligner },
  props: {
    label: {
      type: String,
      required: true
    },
    value: {
      required: true
    },
    inputValue: {
      required: true
    },
    flavor: {
      type: String,
      default: ""
    },
    size: {
      type: Number,
      default: 14
    },
    dark: {
      type: Boolean,
      default: false
    },
    bold: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    emitValue() {
      this.$emit("input", this.inputValue);
    }
  }
};
export default Radio;
</script>

<style>
.radio-button-container:hover .radio-button {
  stroke: #41bee8;
}
.radio-button-container:hover .radio-button-inverse {
  fill: #41bee8;
}
.radio-button,
.radio-button-inverse {
  transition: 0.1s all ease;
}
.radio-button:hover {
  stroke: #41bee8;
}
.radio-button-inverse:hover {
  fill: #41bee8;
}
</style>
