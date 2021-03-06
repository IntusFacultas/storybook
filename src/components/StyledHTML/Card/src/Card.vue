<template>
  <n-card-container>
    <n-card-header :flavor="headerFlavor" :bordered="bordered" v-if="header">
      <slot name="header"></slot>
    </n-card-header>
    <n-card-body
      :flavor="bodyFlavor"
      :bordered="bordered"
      :style="computedStyle"
    >
      <slot name="body"></slot>
    </n-card-body>
    <n-card-footer :flavor="footerFlavor" :bordered="bordered" v-if="footer">
      <slot name="footer"></slot>
    </n-card-footer>
  </n-card-container>
</template>

<script>
import styled from "vue-styled-components";
import Theme from "@IntusFacultas/design-system";
const props = {
  flavor: String,
  bordered: {
    type: Boolean,
    default: false,
  },
  defaultTheme: {
    type: Object,
    default: function() {
      return Theme;
    },
  },
};
const NCardHeader = styled("div", props)`
  padding: 10px 10px 10px 10px;
  border: 1px solid
    ${(props) =>
      props.theme && props.theme[props.flavor]
        ? props.theme[props.flavor].border.hover
        : props.defaultTheme[props.flavor]
        ? props.defaultTheme[props.flavor].border.hover
        : "#aaa"};
  ${(props) =>
    !props.bordered
      ? props.theme && props.theme[props.flavor]
        ? "background-color:" + props.theme[props.flavor].background.color + ";"
        : props.defaultTheme[props.flavor]
        ? "background-color:" +
          props.defaultTheme[props.flavor].background.color +
          ";"
        : "background-color: #f4f4f4;"
      : props.theme && props.theme[props.flavor]
      ? "border: 1px solid " + props.theme[props.flavor].background.color + ";"
      : props.defaultTheme[props.flavor]
      ? "border: 1px solid " +
        props.defaultTheme[props.flavor].background.color +
        ";"
      : "border: 1px solid #aaa;"};
  ${(props) => (props.bordered ? "background-color: #f4f4f4;" : "")}
`;
const NCardBody = styled("div", props)`
  padding: 10px;
  border: 1px solid
    ${(props) =>
      props.theme && props.theme[props.flavor]
        ? props.theme[props.flavor].border.hover
        : props.defaultTheme[props.flavor]
        ? props.defaultTheme[props.flavor].border.hover
        : "#aaa"};
  ${(props) =>
    !props.bordered
      ? props.theme && props.theme[props.flavor]
        ? "background-color:" + props.theme[props.flavor].background.color + ";"
        : props.defaultTheme[props.flavor]
        ? "background-color:" +
          props.defaultTheme[props.flavor].background.color +
          ";"
        : "background-color: white;"
      : props.theme && props.theme[props.flavor]
      ? "border-color: " + props.theme[props.flavor].background.color + ";"
      : props.defaultTheme[props.flavor]
      ? "border-color: " +
        props.defaultTheme[props.flavor].background.color +
        ";"
      : "border-color: #aaa;"};
  border-width: 0px 1px 0px 1px;
  border-style: solid;
`;
const NCardFooter = styled("div", props)`
  padding: 10px;

  border: 1px solid
    ${(props) =>
      props.theme && props.theme[props.flavor]
        ? props.theme[props.flavor].border.hover
        : props.defaultTheme[props.flavor]
        ? props.defaultTheme[props.flavor].border.hover
        : "#aaa"};
  ${(props) =>
    !props.bordered
      ? props.theme && props.theme[props.flavor]
        ? "background-color:" + props.theme[props.flavor].background.color + ";"
        : props.defaultTheme[props.flavor]
        ? "background-color:" +
          props.defaultTheme[props.flavor].background.color +
          ";"
        : "background-color: #f4f4f4;"
      : props.theme && props.theme[props.flavor]
      ? "border: 1px solid " + props.theme[props.flavor].background.color + ";"
      : props.defaultTheme[props.flavor]
      ? "border: 1px solid " +
        props.defaultTheme[props.flavor].background.color +
        ";"
      : "border: 1px solid #aaa;"};
  ${(props) => (props.bordered ? "background-color: #f4f4f4;" : "")}
`;
const NCardContainer = styled("div", props)``;
export const Card = {
  components: { NCardHeader, NCardBody, NCardFooter, NCardContainer },
  props: {
    headerFlavor: {
      type: String,
      default: "",
    },
    footerFlavor: {
      type: String,
      default: "",
    },
    bodyFlavor: {
      type: String,
      default: "",
    },
    bordered: {
      type: Boolean,
      default: false,
    },
    header: {
      type: Boolean,
      default: false,
    },
    footer: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    computedStyle: function() {
      var self = this;
      let data = {
        "border-top-left-radius": self.header ? "0px" : "5px",
        "border-top-right-radius": self.header ? "0px" : "5px",
        "border-bottom-left-radius": self.footer ? "0px" : "5px",
        "border-bottom-right-radius": self.footer ? "0px" : "5px",
        "border-top-width": self.header ? "0px" : "1px",
        "border-bottom-width": self.footer ? "0px" : "1px",
      };
      return data;
    },
  },
};
export default Card;
</script>
