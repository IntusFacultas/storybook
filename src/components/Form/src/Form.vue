<template>
  <form>
    <div v-for="(field, index) in internalFields" :key="`field${index}`">
      <form-input
        v-if="field.type != 'select'"
        :label="field.label"
        :placeholder="field.placeholder"
        :name="field.name"
        :required="field.required"
        :disabled="field.disabled"
        v-model="field.value"
        :errors="internalErrors[field.name]"
        :input-type="field.type"
        @input="validateField(field)"
        @keyup.enter="submitForm(index)"
      ></form-input>
      <raw-form-input
        :errors="internalErrors[field.name]"
        v-else-if="field.type == 'select'"
      >
        <n-label :for="field.name">{{ field.label }}</n-label>
        <select-me
          :name="field.name"
          :can-be-empty="!field.required"
          :options="field.options"
          v-model="field.value"
          :class="{ 'opacity-transparent': !load }"
          @input="validateField(field)"
        ></select-me>
        <placeholder
          class="field-placeholder"
          height="35px"
          v-if="!load"
        ></placeholder>
      </raw-form-input>
    </div>
    <div class="form-bottom-content" v-if="showBottom">
      <slot></slot>
      <div>
        <n-button
          type="button"
          flavor="Warning"
          @click="clearAll"
          :disabled="submitting"
          v-if="!disableClearing"
          class="form-button-spacing"
          >Clear</n-button
        >
        <n-button
          type="button"
          flavor="Primary"
          @click="submit($event)"
          :loading="submitting"
          :disabled="submitting || errorsExist || disableSubmission"
        >
          <span>Submit&nbsp;</span>
          <svg
            v-if="submitting"
            xmlns="http://www.w3.org/2000/svg"
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="white"
            class="loading-spinner"
          >
            <path
              d="M13.75 22c0 .966-.783 1.75-1.75 1.75s-1.75-.784-1.75-1.75.783-1.75 1.75-1.75 1.75.784 1.75 1.75zm-1.75-22c-1.104 0-2 .896-2 2s.896 2 2 2 2-.896 2-2-.896-2-2-2zm10 10.75c.689 0 1.249.561 1.249 1.25 0 .69-.56 1.25-1.249 1.25-.69 0-1.249-.559-1.249-1.25 0-.689.559-1.25 1.249-1.25zm-22 1.25c0 1.105.896 2 2 2s2-.895 2-2c0-1.104-.896-2-2-2s-2 .896-2 2zm19-8c.551 0 1 .449 1 1 0 .553-.449 1.002-1 1-.551 0-1-.447-1-.998 0-.553.449-1.002 1-1.002zm0 13.5c.828 0 1.5.672 1.5 1.5s-.672 1.501-1.502 1.5c-.826 0-1.498-.671-1.498-1.499 0-.829.672-1.501 1.5-1.501zm-14-14.5c1.104 0 2 .896 2 2s-.896 2-2.001 2c-1.103 0-1.999-.895-1.999-2s.896-2 2-2zm0 14c1.104 0 2 .896 2 2s-.896 2-2.001 2c-1.103 0-1.999-.895-1.999-2s.896-2 2-2z"
            />
          </svg>
        </n-button>
      </div>
    </div>
  </form>
</template>
<script>
import FormInput from "./FormInput.vue";
import RawFormInput from "./RawFormInput.vue";
import SelectMe from "@IntusFacultas/select-me";
import { NButton } from "@IntusFacultas/button";
import { NLabel } from "@IntusFacultas/typography";
import { Placeholder } from "@IntusFacultas/placeholder";
export const VueForm = {
  components: {
    FormInput,
    NButton,
    SelectMe,
    RawFormInput,
    NLabel,
    Placeholder,
  },
  data() {
    return {
      internalFields: [],
      internalErrors: {},
      load: false,
      errorsExist: false,
      overridenFieldErrors: [],
    };
  },
  props: {
    showBottom: {
      type: Boolean,
      default: true,
    },
    submitting: Boolean,
    disableSubmission: Boolean,
    disableClearing: Boolean,
    allowSubmissionOnEnter: {
      type: Boolean,
      default: true,
    },
    fields: {
      type: Array,
      default() {
        return [];
      },
    },
    errors: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  watch: {
    fields() {
      this.internalFields = this.fields.slice();
    },
    errors: {
      handler() {
        // this.internalErrors = Object.assign({}, newVal);
        for (let field of Object.keys(this.errors)) {
          if (this.overridenFieldErrors.indexOf(field) == -1) {
            this.$set(this.internalErrors, field, this.errors[field].slice());
          }
        }
        this.checkErrors();
        this.$forceUpdate();
      },
      deep: true,
    },
  },
  mounted() {
    let self = this;
    setTimeout(() => {
      self.load = true;
    }, 500);
    this.fields.forEach((field) => {
      this.$watch(() => field, this.handleChange, { deep: true });
    });
    this.internalFields = this.fields.slice();
    for (let field of Object.keys(this.errors)) {
      this.internalErrors[field] = this.errors[field].slice();
    }
  },
  methods: {
    checkErrors() {
      for (let field of Object.keys(this.internalErrors)) {
        if (this.internalErrors[field].length != 0) {
          this.errorsExist = true;
          return true;
        }
      }
      this.errorsExist = false;
      return false;
    },
    submitForm(index) {
      if (
        index == this.internalFields.length - 1 &&
        this.allowSubmissionOnEnter
      ) {
        this.$emit("submit");
      }
    },
    clearAll() {
      for (let field of this.internalFields) {
        field.value = "";
      }
      this.$emit("clear");
      this.$emit("fields", this.internalFields.slice());
    },
    objectDeepEquals(ob1, ob2) {
      let ob1Keys = Object.keys(ob1);
      let ob2Keys = Object.keys(ob2);
      if (ob1Keys.length !== ob2Keys.length) {
        return false;
      }
      for (let key of ob1Keys) {
        if (ob2Keys.indexOf(key) == -1) {
          return false;
        }
        if (typeof ob1[key] != typeof ob2[key]) {
          return false;
        }
        if (typeof ob1[key] == "object") {
          if (!this.objectDeepEquals(ob1[key], ob2[key])) {
            return false;
          }
        } else if (Array.isArray(ob1[key])) {
          if (!this.deepEquals(ob1[key], ob2[key])) {
            return false;
          }
        } else {
          if (ob1[key] != ob2[key]) {
            return false;
          }
        }
      }
      return true;
    },
    deepEquals(ar1, ar2) {
      let still_matches = true;
      let self = this;
      if (!Array.isArray(ar1) || !Array.isArray(ar2)) {
        return false;
      }
      if (ar1.length !== ar2.length) {
        return false;
      }
      ar1.forEach((val1, index) => {
        let val2 = ar2[index];
        if (val1 !== val2 && !self.objectDeepEquals(val1, val2)) {
          still_matches = false;
        }
      });
      return still_matches;
    },
    validateField(field) {
      if (typeof field.validation == "function") {
        let value = field.validation(field.value, this.internalFields);
        if (value) {
          if (!Array.isArray(this.internalErrors[field.name])) {
            this.$set(this.internalErrors, field.name, [value]);
          }
          if (this.internalErrors[field.name].indexOf(value) == -1) {
            this.internalErrors[field.name].push(value);
          }
          this.$forceUpdate();
          this.$emit("errors", this.internalErrors);
          this.checkErrors();
          return false;
        }
      }
      this.internalErrors[field.name] = [];
      if (this.overridenFieldErrors.indexOf(field.name) == -1) {
        this.overridenFieldErrors.push(field.name);
      }
      this.$emit("fields", this.internalFields.slice());
      this.$emit("errors", this.internalErrors);
      this.checkErrors();
      return true;
    },
    handleChange() {
      this.internalFields = this.fields.slice();
    },
    submit($e) {
      $e.preventDefault();
      this.overridenFieldErrors = [];
      document.activeElement.blur();
      this.$emit("submit");
    },
  },
};
export default VueForm;
</script>

<style>
.field-placeholder {
  position: absolute;
  left: 0px;
  right: 0px;
  top: 20px;
}
.form-bottom-content {
  margin-top: 25px;
  display: flex;
  justify-content: space-between;
}
.form-error-message {
  min-height: 17px;
  min-width: 1px;
}
.opacity-transparent {
  opacity: 0;
}
.form-button-spacing {
  margin-right: 5px;
}
@keyframes FormLoadingSpinner {
  from {
    -webkit-transform: rotate(0deg);
    transform: rotate(0deg);
  }
  to {
    -webkit-transform: rotate(359deg);
    transform: rotate(359deg);
  }
}
.loading-spinner {
  -webkit-animation: FormLoadingSpinner 0.5s infinite steps(8); /* Safari, Chrome and Opera > 12.1 */
  -moz-animation: FormLoadingSpinner 0.5s infinite steps(8); /* Firefox < 16 */
  -ms-animation: FormLoadingSpinner 0.5s infinite steps(8); /* Internet Explorer */
  -o-animation: FormLoadingSpinner 0.5s infinite steps(8); /* Opera < 12.1 */
  animation: FormLoadingSpinner 0.5s infinite steps(8);
}
</style>
