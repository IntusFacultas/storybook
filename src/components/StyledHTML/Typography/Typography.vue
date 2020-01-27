<script>
import styled from "vue-styled-components";
import { TextTheme } from "Components/components/DesignSystem/theme.js";

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

export const NSpan = styled("span", props)`
  color: ${props => props.colors[props.flavor]};
  font-family: "Roboto", sans-serif;
`;
export const NLabel = NSpan.withComponent("label", props);
export const NP = NSpan.withComponent("p", props);
export const NText = NSpan.withComponent("span", props);
export const NSmall = NSpan.withComponent("small", props);
export const NH1 = styled("h1", props)`
  color: ${props => props.colors[props.flavor]};
  font-family: "Montserrat", sans-serif;
  margin-top: 0px;
  margin-bottom: 5px;
`;
export const NH2 = NH1.withComponent("h2", props);
export const NH3 = NH1.withComponent("h3", props);
export const NH4 = NH1.withComponent("h4", props);
export const NH5 = NH1.withComponent("h5", props);
export const NH6 = NH1.withComponent("h6", props);

export default NSpan;
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css?family=Montserrat|Roboto&display=swap");
</style>