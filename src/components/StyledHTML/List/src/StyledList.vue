<script>
import styled from "vue-styled-components";
import { TextTheme } from "@IntusFacultas/design-system";
const props = {
  size: Number,
  dark: Boolean,
  unstyled: Boolean,
  textTheme: {
    type: Object,
    default: function() {
      return TextTheme;
    },
  },
  flavor: String,
};
export const List = styled("ul", props)`
  font-family: "Open Sans Regular", -apple-system, BlinkMacSystemFont,
    "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji",
    "Segoe UI Emoji", "Segoe UI Symbol";
    ${(props) =>
      props.unstyled
        ? `
      list-style: none;
      padding-inline-start: 0;
    `
        : ``}
  font-size: ${(props) =>
    props.size < 14 ? 14 : props.size > 16 ? 16 : props.size}px;
  & li {
    color: ${(props) =>
      props.dark ? props.textTheme.Dark.color : props.textTheme.Normal.color};
    ${(props) =>
      props.flavor
        ? props.textTheme[props.flavor]
          ? "color " + props.textTheme[props.flavor].color
          : ""
        : ""}
  }
`;
export const OrderedList = styled("ol", props)`
  font-family: "Open Sans Regular", -apple-system, BlinkMacSystemFont,
    "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji",
    "Segoe UI Emoji", "Segoe UI Symbol";
    ${(props) =>
      props.unstyled
        ? `
      list-style: none;
      padding-inline-start: 0;
    `
        : ``}
  font-size: ${(props) =>
    props.size < 14 ? 14 : props.size > 16 ? 16 : props.size}px;
  & li {
    color: ${(props) =>
      props.dark ? props.textTheme.Dark.color : props.textTheme.Normal.color};
    ${(props) =>
      props.flavor
        ? props.textTheme[props.flavor]
          ? "color " + props.textTheme[props.flavor].color
          : ""
        : ""}
  }
`;
export const ListItem = styled("li", props)`
  font-family: "Open Sans Regular", -apple-system, BlinkMacSystemFont,
    "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji",
    "Segoe UI Emoji", "Segoe UI Symbol";
  font-size: ${(props) =>
    props.size < 14 ? 14 : props.size > 16 ? 16 : props.size}px;
  color: ${(props) =>
    props.dark
      ? props.textTheme.Dark.color + " !important"
      : props.textTheme.Normal.color};
  ${(props) =>
    props.flavor
      ? props.textTheme[props.flavor]
        ? "color " + props.textTheme[props.flavor].color + " !important"
        : ""
      : ""}
`;
export default List;
</script>

<style></style>
