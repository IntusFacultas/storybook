<template>
  <alert-container>
    <alert>
      <icon-container>
        <span v-if="alert.type == 'warning'">&#9888;</span>
        <span v-else-if="alert.type == 'success'">&#10004;</span>
        <span v-else-if="alert.type == 'info'">&#128712;</span>
        <div v-else-if="alert.type =='danger'">
          <span>&#128737;</span>
          <span>&#33;</span>
        </div>
      </icon-container>
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
const Alert = styled("div", props)`
  border-radius: 2px;
  box-shadow: 0px 0px 5px 10px #222;
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
</script>

<style>
</style>