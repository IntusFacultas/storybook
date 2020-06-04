<template>
  <radio-container>
    <symbol-holder
      tabindex="0"
      :disabled="disabled"
      :size="size + 4"
      @click="emitValue"
      @keyup.enter="emitValue"
      @keyup.space="emitValue"
      class="radio-button-container"
      :class="{ 'radio-button-container-disabled ': disabled }"
    >
      <svg
        class="radio-button"
        :class="{ 'radio-button-disabled ': disabled }"
        fill="6c757d"
        preserveAspectRatio="xMidYMid meet"
        :height="size"
        :width="size"
        viewBox="0 0 30 30"
      >
        <circle
          class="radio-button"
          :class="{ 'radio-button-disabled ': disabled }"
          cx="15"
          cy="15"
          r="13"
          stroke-width="2"
        />
        <circle
          v-if="value == inputValue"
          class="radio-button-inverse"
          :class="{ 'radio-button-inverse-disabled ': disabled }"
          cx="15"
          cy="15"
          r="6"
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
    default: 14,
  },
  disabled: Boolean,
  active: {
    type: Boolean,
    default: false,
  },
};
const RadioContainer = styled.div`
  display: inline;
  -webkit-touch-callout: none; /* iOS Safari */
  -webkit-user-select: none; /* Safari */
  -khtml-user-select: none; /* Konqueror HTML */
  -moz-user-select: none; /* Old versions of Firefox */
  -ms-user-select: none; /* Internet Explorer/Edge */
  user-select: none; /* Non-prefixed version, currently
                                  supported by Chrome, Edge, Opera and Firefox */
`;
const RadioAligner = styled.div`
  display: flex;
  align-content: center;
`;
const SymbolHolder = styled("span", props)`
  ${(props) => (props.disabled ? `cursor: not-allowed;` : `cursor: poitner`)}
  margin-right: 4px;
`;
export const Radio = {
  components: { NLabel, SymbolHolder, RadioContainer, RadioAligner },
  props: {
    label: {
      type: String,
      required: true,
    },
    value: {
      required: true,
    },
    inputValue: {
      required: true,
    },
    flavor: {
      type: String,
      default: "",
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    size: {
      type: Number,
      default: 14,
    },
    dark: {
      type: Boolean,
      default: false,
    },
    bold: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    emitValue() {
      if (!this.disabled) this.$emit("input", this.inputValue);
    },
  },
};
export default Radio;
</script>

<style>
.radio-button {
  stroke: #6c757d;
  fill: white;
}
.radio-button-inverse {
  fill: #6c757d;
}
.radio-button-container:hover .radio-button {
  stroke: #41bee8;
}
.radio-button-container:hover .radio-button-inverse {
  fill: #41bee8;
}

.radio-button-container-disabled:hover .radio-button {
  stroke: #bcbcbc;
}
.radio-button-container-disabled:hover .radio-button-inverse {
  fill: #bcbcbc;
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
.radio-button-inverse-disabled {
  fill: #bcbcbc;
}
.radio-button-inverse-disabled:hover {
  fill: #bcbcbc;
}
.radio-button-inverse:hover {
  fill: #bcbcbc;
}
.radio-button-disabled {
  stroke: #bcbcbc;
}
.radio-button-disabled:hover {
  stroke: #bcbcbc;
}
</style>
