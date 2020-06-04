<template>
  <checkbox-container>
    <symbol-holder
      tabindex="0"
      :disabled="disabled"
      :size="size + 4"
      @click="emitValue"
      @keyup.enter="emitValue"
      @keyup.space="emitValue"
    >
      <svg-holder
        xmlns="http://www.w3.org/2000/svg"
        width="12"
        height="12"
        viewBox="0 0 24 24"
        :flavor="flavor"
        v-if="value"
      >
        <path
          d="M0 0v24h24v-24h-24zm10.041 17l-4.5-4.319 1.395-1.435 3.08 2.937 7.021-7.183 1.422 1.409-8.418 8.591z"
        />
      </svg-holder>
      <svg-holder
        xmlns="http://www.w3.org/2000/svg"
        width="12"
        height="12"
        v-else
        viewBox="0 0 24 24"
        :flavor="flavor"
      >
        <path d="M22 2v20h-20v-20h20zm2-2h-24v24h24v-24z" />
      </svg-holder>
      <!-- <div v-if="!value">&#9744;</div> -->
      <!-- <div v-else>&#9745;</div> -->
    </symbol-holder>
    <n-label
      @click="emitValue"
      :bold="bold"
      :flavor="labelFlavor"
      :size="size"
      :dark="dark"
      >{{ label }}</n-label
    >
  </checkbox-container>
</template>

<script>
import { NLabel } from "@IntusFacultas/typography";
import styled from "vue-styled-components";
import Theme from "@IntusFacultas/design-system";
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
  flavor: String,
  defaultTheme: {
    type: Object,
    default() {
      return Theme;
    },
  },
};
const CheckboxContainer = styled.div`
  display: inline;
  -webkit-touch-callout: none; /* iOS Safari */
  -webkit-user-select: none; /* Safari */
  -khtml-user-select: none; /* Konqueror HTML */
  -moz-user-select: none; /* Old versions of Firefox */
  -ms-user-select: none; /* Internet Explorer/Edge */
  user-select: none; /* Non-prefixed version, currently
                                  supported by Chrome, Edge, Opera and Firefox */
`;
const CheckboxAligner = styled.div`
  display: flex;
  align-content: center;
`;
const SymbolHolder = styled("div", props)`
  margin-right: 0px;
  display: inline-block;
  height: 13px;
  outline: none;
  &:focus svg {
    box-shadow: 0px 0px 3px #8c5aff;
  }
  & div {
    display: inline-block;
    transition: 0.1s all ease;
  }
  ${(props) =>
    props.disabled
      ? `
    cursor: not-allowed;
    & div {
      color: #b6b6b6;
    }
  `
      : `
    cursor: pointer;
    & div:hover {
      color: #496cbd;
    }
  `}
`;
const SvgHolder = styled("svg", props)`
  outline: none;
  background-color: white;
  &:hover {
    box-shadow: 0px 0px 3px #8c5aff;
  }
  fill: ${(props) =>
    props.theme && props.theme[props.flavor]
      ? props.theme[props.flavor].background.color
      : props.defaultTheme[props.flavor]
      ? props.defaultTheme[props.flavor].background.color
      : props.defaultTheme.Primary.background.color};
`;
export const Checkbox = {
  components: {
    NLabel,
    SymbolHolder,
    CheckboxContainer,
    CheckboxAligner,
    SvgHolder,
  },
  props: {
    label: {
      type: String,
      required: true,
    },
    value: {
      required: true,
    },
    flavor: {
      type: String,
      default: "",
    },
    labelFlavor: {
      type: String,
      default: "",
    },
    disabled: {
      type: Boolean,
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
      if (!this.disabled) this.$emit("input", !this.value);
    },
  },
};
export default Checkbox;
</script>

<style></style>
