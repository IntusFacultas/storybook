<script>
import styled from "vue-styled-components";
import { TextTheme } from "../DesignSystem/theme.js";

const props = {
  colors: {
    type: Object,
    default: function() {
      return TextTheme;
    }
  }
};

export const NSpan = styled("span", props)`
  color: ${props => props.colors.Normal};
  font-family: "Roboto", sans-serif;
`;
export const NP = NSpan.withComponent("p");
export const MSpan = styled("span", props)`
  color: ${props => props.colors.Medium};
  font-family: "Roboto", sans-serif;
`;
export const MP = MSpan.withComponent("p");
export const LSpan = styled("span", props)`
  color: ${props => props.colors.Light};
  font-family: "Roboto", sans-serif;
`;
export const LP = LSpan.withComponent("p");
export const WSpan = styled("span", props)`
  color: ${props => props.colors.White};
  font-family: "Roboto", sans-serif;
`;
export const WP = WSpan.withComponent("p");

export const NH1 = styled("h1", props)`
  color: ${props => props.colors.Normal};
  font-family: "Montserrat", sans-serif;
`;
export const NH2 = NH1.withComponent("h2");
export const NH3 = NH1.withComponent("h3");
export const NH4 = NH1.withComponent("h4");
export const NH5 = NH1.withComponent("h5");
export const NH6 = NH1.withComponent("h6");
export const MH1 = styled("h1", props)`
  color: ${props => props.colors.Medium};
  font-family: "Montserrat", sans-serif;
`;
export const MH2 = MH1.withComponent("h2");
export const MH3 = MH1.withComponent("h3");
export const MH4 = MH1.withComponent("h4");
export const MH5 = MH1.withComponent("h5");
export const MH6 = MH1.withComponent("h6");
export const LH1 = styled("h1", props)`
  color: ${props => props.colors.Light};
  font-family: "Montserrat", sans-serif;
`;
export const LH2 = LH1.withComponent("h2");
export const LH3 = LH1.withComponent("h3");
export const LH4 = LH1.withComponent("h4");
export const LH5 = LH1.withComponent("h5");
export const LH6 = LH1.withComponent("h6");
export const WH1 = styled("h1", props)`
  color: ${props => props.colors.White};
  font-family: "Montserrat", sans-serif;
`;
export const WH2 = LH1.withComponent("h2");
export const WH3 = LH1.withComponent("h3");
export const WH4 = LH1.withComponent("h4");
export const WH5 = LH1.withComponent("h5");
export const WH6 = LH1.withComponent("h6");
export default NSpan;
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css?family=Montserrat|Roboto&display=swap");
</style>