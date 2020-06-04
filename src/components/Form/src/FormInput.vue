<template>
  <div>
    <vue-input
      :flavor="computeFlavor('field')"
      :name="name"
      :input-type="inputType"
      :required="required"
      :label="label"
      :disabled="disabled"
      v-model="internalValue"
      :placeholder="placeholder"
      @change="onChange"
      @input="onInput"
      @keyup="$emit('keyup', $event)"
    ></vue-input>
    <div class="form-error-message">
      <small-text
        :flavor="computeFlavor('fieldText')"
        v-for="error in errors"
        :key="`field-error-${error}`"
        >{{ error }}</small-text
      >
    </div>
  </div>
</template>
<script>
import { SmallText } from "@IntusFacultas/typography";
import { VueInput } from "@IntusFacultas/input";
export const FormInput = {
  components: { SmallText, VueInput },
  tag: "what",
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
    name: String,
    inputType: String,
    label: String,
    required: Boolean,
    value: [String, Number],
    placeholder: String,
    disabled: {
      type: Boolean,
      default: false,
    },
    errors: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  methods: {
    computeFlavor(el) {
      if (el.indexOf("Text") != -1) {
        return "Danger";
      } else {
        if (this.errors.length > 0) {
          return "Danger";
        }
        return "LightBlue";
      }
    },
    onChange($e) {
      this.internalValue = $e;
      this.$emit("change", $e);
    },
    onInput($e) {
      this.internalValue = $e;
      this.$emit("input", $e);
    },
  },
};
export default FormInput;
</script>

<style>
.form-error-message {
  min-height: 17px;
  min-width: 1px;
  display: flex;
  flex-direction: column;
}
</style>
