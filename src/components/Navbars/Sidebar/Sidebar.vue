<template>
  <n-sidebar-container>
    <slot></slot>
  </n-sidebar-container>
</template>
<script>
import styled from "vue-styled-components";
import Theme from "Components/components/DesignSystem/theme.js";
const props = {
  flavor: String,
  topOffset: {
    type: String,
    default: "0px"
  },
  bottomOffset: {
    type: String,
    default: "0px"
  },
  defaultTheme: {
    type: Object,
    default: function() {
      return Theme;
    }
  }
};
export const NSidebarContainer = styled("aside", props)`
  background-color: ${props =>
    props.theme && props.theme[props.flavor]
      ? props.theme[props.flavor].background.color
      : props.defaultTheme[props.flavor]
      ? props.defaultTheme[props.flavor].background.color
      : "#495161"};
  width: 25%;
  position: fixed;
  top: ${props => props.topOffset};
  bottom: ${props => props.bottomOffset};
`;
export const NSidebar = {
  components: { NSidebarContainer },
  props: {
    flavor: {
      type: String,
      default: ""
    },
    bottomOffset: {
      type: String,
      default: "0px"
    },
    topOffset: {
      type: String,
      default: ""
    }
  }
};
export const SidebarOffsetContent = styled.main`
  margin-left: 25%;
  padding-left: 15px;
  width: 75%;
`;
export default NSidebar;
</script>