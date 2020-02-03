<template>
  <alert-container>
    <alert
      v-for="(alert, index) in alerts"
      :key="alert.id"
      :class="{dying: alert.dying}"
      :flavor="alert.type"
      @click="removeToast(index)"
    >
      <icon-container>
        <span v-if="alert.type == 'warning'">&#9888;</span>
        <span v-else-if="alert.type == 'success'">&#10004;</span>
        <span v-else-if="alert.type == 'info'">&#128712;</span>
        <div v-else-if="alert.type =='danger'">
          <span>&#128737;</span>
          <span>&#33;</span>
        </div>
      </icon-container>
      <alert-content v-html="alert.content"></alert-content>
    </alert>
  </alert-container>
</template>

<script>
import styled from "vue-styled-components";
import { ToastTheme } from "@intus/designsystem";
require("@intus/fonts");
const AlertContainer = styled.div`
  max-width: 200px;
  position: static;
  right: 0px;
  top: 0px;
  bottom: 0px;
  display: flex;
  flex-direction: column;
  opacity: 0.8;
  & * {
    opacity: 0.8;
  }
`;
const props = {
  flavor: String,
  defaultTheme: {
    type: Object,
    default: function() {
      return ToastTheme;
    }
  }
};
const IconContainer = styled("div", props)``;
const AlertContent = styled.div``;
const Alert = styled("div", props)`
  border-radius: 2px;
  box-shadow: 0px 0px 5px 10px #222;
  &:hover {
    box-shadow: 0px 0px 8px 10px #222;
  }
  transition: 1s all;
  cursor: pointer;
  border: 2px solid
    ${props =>
      props.theme && props.theme[props.flavor]
        ? props.theme[props.flavor].border.color
        : props.defaultTheme[props.flavor]
        ? props.defaultTheme[props.flavor].border.color
        : "#f2f2f2"};
  background-color: ${props =>
    props.theme && props.theme[props.flavor]
      ? props.theme[props.flavor].background.color
      : props.defaultTheme[props.flavor]
      ? props.defaultTheme[props.flavor].background.color
      : "#f2f2f2"};
  font-family: "Open Sans Regular", -apple-system, BlinkMacSystemFont,
    "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji",
    "Segoe UI Emoji", "Segoe UI Symbol";
  & * {
    color: ${props =>
      props.theme && props.theme[props.flavor]
        ? props.theme[props.flavor].color.color
        : props.defaultTheme[props.flavor]
        ? props.defaultTheme[props.flavor].color.color
        : "#222"};
  }
`;

export const VueToast = {
  data() {
    return {
      alerts: [],
      validTypes: ["WARNING", "INFO", "DANGER", "SUCCESS"]
    };
  },
  mounted() {
    this.$parent.$toast = this.toast;
  },
  methods: {
    uuidv4() {
      // pulled from https://stackoverflow.com/questions/105034/create-guid-uuid-in-javascript
      return ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, c =>
        (
          c ^
          (crypto.getRandomValues(new Uint8Array(1))[0] & (15 >> (c / 4)))
        ).toString(16)
      );
    },
    toast(options) {
      let alertType = "info";
      if (
        options.type &&
        this.validTypes.indexOf(options.type.toUpperCase()) > -1
      ) {
        alertType = options.type.toLowerCase();
      }
      let text = "This is an info toast";
      if (options.text) {
      }
      let id = uuidv4();
      let timeAdded = getTime();
      let dying = false;
      this.alerts.push({
        type: alertType
      });
    },
    removeToast(index) {
      var self = this;
      let alert = this.alerts[index];
      if (!alert.dying) {
        this.alerts[index].dying = true;
        setTimeout(function() {
          self.alerts.splice(index, 1);
        }, 1000);
      }
    }
  }
};
</script>

<style>
.dying {
  opacity: 0;
}
</style>