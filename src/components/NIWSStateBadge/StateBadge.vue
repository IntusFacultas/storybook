<template>
  <theme-provider :theme="theme" style="width: 100%">
    <niws-state-badge :title="data.stateDescription" :flavor="data.stateType">{{data.stateName}}</niws-state-badge>
  </theme-provider>
</template>

<script>
import styled from "vue-styled-components";
import { ThemeProvider } from "vue-styled-components";
import { NIWSTheme } from "Components/components/DesignSystem/nasic-theme.js";
const props = {
  flavor: String
};
const NiwsStateBadge = styled("div", props)`
        padding: 2px 5px;
        border-radius: 5px;
        text-align: center;
        font-weight: bold;
        font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;

        ${props => "color:" + props.theme[props.flavor].color.color}
        ${props =>
          "background-color:" + props.theme[props.flavor].background.color}
        ${props => "border:" + props.theme[props.flavor].border.color}
    `;
export const NiwsState = {
  name: "niws-state",
  components: { NiwsStateBadge, ThemeProvider },
  data: function() {
    return {
      theme: NIWSTheme
    };
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
  methods: {}
};
export default NiwsState;
</script>

<style scoped>
@import "./niwsStateBadge.css";
</style>