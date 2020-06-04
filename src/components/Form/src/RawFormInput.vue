<template>
  <raw-form-input-container>
    <slot></slot>
    <div class="form-error-message">
      <small-text
        :flavor="computeFlavor('fieldText')"
        v-for="(error, index) in errors"
        :key="`field-error-${index}`"
        >{{ error }}</small-text
      >
    </div>
  </raw-form-input-container>
</template>
<script>
import styled from "vue-styled-components";
import { SmallText } from "@IntusFacultas/typography";
const RawFormInputContainer = styled.div`
  position: relative;
`;
export const RawFormInput = {
  components: { SmallText, RawFormInputContainer },
  data() {
    return {
      internalValue: "",
    };
  },
  watch: {
    value(newVal) {
      if (newVal != this.internalValue) {
        this.internalValue = newVal;
      }
    },
  },
  mounted() {
    this.internalValue = this.value;
  },
  props: {
    errors: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  methods: {
    computeFlavor() {
      if (this.errors.length > 0) {
        return "Danger";
      }
      return "LightBlue";
    },
  },
};
export default RawFormInput;
</script>

<style>
.form-error-message {
  min-height: 17px;
  min-width: 1px;
}
</style>
