<script>
import Theme from "@IntusFacultas/design-system";
import styled from "vue-styled-components";
const props = {
  flavor: String,
  defaultTheme: {
    type: Object,
    default: function () {
      return Theme;
    },
  },
};
export const Badge = styled("div", props)`
  color: ${(props) =>
    props.theme && props.theme[props.flavor]
      ? props.theme[props.flavor].color.color
      : props.defaultTheme[props.flavor] &&
        props.defaultTheme[props.flavor].color.color
      ? props.defaultTheme[props.flavor].color.color
      : "#040404"}
        background-color: ${(props) =>
          props.theme && props.theme[props.flavor]
            ? props.theme[props.flavor].background.color
            : props.defaultTheme[props.flavor] &&
              props.defaultTheme[props.flavor].background.color
            ? props.defaultTheme[props.flavor].background.color
            : "#f0f0f0"};
  font-family: "Open Sans Regular", -apple-system, BlinkMacSystemFont,
    "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji",
    "Segoe UI Emoji", "Segoe UI Symbol";
  display: inline-block;
  border-radius: 4px;
  padding: 0.25em 0.4em;
  font-size: 75%;
  text-align: center;
  white-space: nowrap;
`;
export default Badge;
</script>
