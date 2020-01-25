<template>
  <niws-state-badge :title="data.stateDescription" :flavor="data.stateType">{{data.stateName}}</niws-state-badge>
</template>

<script>
import { NIWSTheme } from "Components/components/DesignSystem/theme.js";
import styled from "vue-styled-components";
const props = {
  flavor: String,
  defaultTheme: {
    type: Object,
    default: function() {
      return NIWSTheme;
    }
  }
};
const NiwsStateBadge = styled("span", props)`
  padding: 3px 10px;
  border-radius: 5px;
  text-align: center;
  font-weight: bold;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
    ${props => console.log(props)}
  color: ${props =>
    props.theme && props.theme[props.flavor]
      ? props.theme[props.flavor].color.color
      : props.defaultTheme[props.flavor]
      ? props.defaultTheme[props.flavor].color.color
      : "#222"};
    background-color: ${props =>
      props.theme && props.theme[props.flavor]
        ? props.theme[props.flavor].background.color
        : props.defaultTheme[props.flavor]
        ? props.defaultTheme[props.flavor].background.color
        : "white"};
    border: 2px solid ${props =>
      props.theme && props.theme[props.flavor]
        ? props.theme[props.flavor].border.color
        : props.defaultTheme[props.flavor]
        ? props.defaultTheme[props.flavor].border.color
        : "#222"};
`;
export const NiwsState = {
  name: "niws-state",
  components: { NiwsStateBadge },
  data: function() {
    return {};
  },
  props: {
    data: {
      type: Object,
      required: true
    }
  },
  mounted: function() {
    var self = this;
  },
  methods: {
    calculateClass: function(data) {
      var self = this;
      return ["niws-state", self.classMapping[self.data.stateType]];
    }
  }
};
export default NiwsState;
</script>

<style scoped>
@import "./niwsStateBadge.css";
</style>