<script>
import styled from "vue-styled-components";
import { TextTheme } from "@intus/designsystem";
require("@intus/fonts");

const props = {
  flavor: {
    type: String,
    default: "Normal"
  },
  colors: {
    type: Object,
    default: function() {
      return TextTheme;
    }
  }
};

export const NText = styled("span", props)`
  color: ${props =>
    props.theme
      ? props.theme[props.flavor]
        ? props.theme[props.flavor]
        : props.colors[props.flavor]
      : props.colors[props.flavor]
      ? props.colors[props.flavor]
      : "#222"};
  font-family: "Roboto", sans-serif;
`;
export const NLabel = NText.withComponent("label", props);
export const NParagraph = NText.withComponent("p", props);
export const NSmallText = NText.withComponent("small", props);
export const NTopLevelTitle = styled("h1", props)`
  color: ${props =>
    props.theme
      ? props.theme[props.flavor]
        ? props.theme[props.flavor]
        : props.colors[props.flavor]
      : props.colors[props.flavor]
      ? props.colors[props.flavor]
      : "#222"};
  font-family: "Montserrat", sans-serif;
  margin-top: 0px;
  margin-bottom: 5px;
`;
export const NCategoryHeader = styled("h2", props)`
  color: ${props =>
    props.theme
      ? props.theme[props.flavor]
        ? props.theme[props.flavor]
        : props.colors[props.flavor]
      : props.colors[props.flavor]
      ? props.colors[props.flavor]
      : "#222"};
  font-family: "Montserrat", sans-serif;
  margin-top: 0px;
  margin-bottom: 5px;
  font-size: 26px;
`;
export const NSubCategoryHeader = styled("h3", props)`
  color: ${props =>
    props.theme
      ? props.theme[props.flavor]
        ? props.theme[props.flavor]
        : props.colors[props.flavor]
      : props.colors[props.flavor]
      ? props.colors[props.flavor]
      : "#222"};
  font-family: "Montserrat", sans-serif;
  margin-top: 0px;
  margin-bottom: 5px;
  font-size: 23px;
`;
export const NSectionHeader = styled("h4", props)`
  color: ${props =>
    props.theme
      ? props.theme[props.flavor]
        ? props.theme[props.flavor]
        : props.colors[props.flavor]
      : props.colors[props.flavor]
      ? props.colors[props.flavor]
      : "#222"};
  font-family: "Montserrat", sans-serif;
  margin-top: 0px;
  margin-bottom: 5px;
  font-size: 19px;
`;
export const NSubSectionHeader = styled("h5", props)`
  color: ${props =>
    props.theme
      ? props.theme[props.flavor]
        ? props.theme[props.flavor]
        : props.colors[props.flavor]
      : props.colors[props.flavor]
      ? props.colors[props.flavor]
      : "#222"};
  font-family: "Montserrat", sans-serif;
  margin-top: 0px;
  margin-bottom: 5px;
  font-size: 17px;
`;
export const NKeyword = styled("h6", props)`
  color: ${props =>
    props.theme
      ? props.theme[props.flavor]
        ? props.theme[props.flavor]
        : props.colors[props.flavor]
      : props.colors[props.flavor]
      ? props.colors[props.flavor]
      : "#222"};
  font-family: "Montserrat", sans-serif;
  margin-top: 0px;
  margin-bottom: 5px;
  font-size: 16px;
`;

export default NText;
</script>

<style scoped>
</style>