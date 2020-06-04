<script>
import styled from "vue-styled-components";
import { TextTheme } from "@IntusFacultas/design-system";
const titleProps = {
  dark: Boolean,
  bold: Boolean,
  flavor: String,
  textTheme: {
    type: Object,
    default: function() {
      return TextTheme;
    },
  },
};

export const PageTitle = styled("h1", titleProps)`
  margin-top: 0;
  font-weight: ${(props) => (props.bold ? "bold" : 500)};
  line-height: 1.2;
  margin-bottom: 0.5rem;
  font-family: Roboto, "Helvetica Neue", Arial, sans-serif;
  color: ${(props) =>
    props.dark ? props.textTheme.Dark.color : props.textTheme.Normal.color};
  ${(props) =>
    props.flavor
      ? props.textTheme[props.flavor]
        ? "color " + props.textTheme[props.flavor].color + "!important"
        : ""
      : ""}
`;
export const SectionTitle = PageTitle.withComponent("h2", titleProps);
export const SubSectionTitle = PageTitle.withComponent("h3", titleProps);
export const CategoryTitle = PageTitle.withComponent("h4", titleProps);
export const SubCategoryTitle = PageTitle.withComponent("h5", titleProps);
export const Keyword = PageTitle.withComponent("h6", titleProps);

const props = {
  size: {
    type: Number,
    default: 15,
  },
  dark: Boolean,
  bold: Boolean,
  textTheme: {
    type: Object,
    default: function() {
      return TextTheme;
    },
  },
  flavor: String,
};
export const TextContent = styled("span", props)`
  margin: 0;
  font-family: "Open Sans Regular", -apple-system, BlinkMacSystemFont, Roboto,
    "Helvetica Neue", Arial, sans-serif;
  font-size: ${(props) =>
    props.size < 14 ? 14 : props.size > 16 ? 16 : props.size}px;
  font-weight: ${(props) => (props.bold ? "bold" : 500)};
  line-height: 1.571;
  color: ${(props) =>
    props.dark ? props.textTheme.Dark.color : props.textTheme.Normal.color};
  -webkit-text-size-adjust: 100%;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);

  ${(props) =>
    props.flavor
      ? props.textTheme[props.flavor]
        ? "color " + props.textTheme[props.flavor].color
        : ""
      : ""}
`;
export const Paragraph = TextContent.withComponent("p", props);
export const SmallText = styled("small", props)`
  margin: 0;
  font-family: "Open Sans Regular", -apple-system, BlinkMacSystemFont, Roboto,
    "Helvetica Neue", Arial, sans-serif;
  font-weight: ${(props) => (props.bold ? "bold" : 500)};
  line-height: 1.571;
  color: ${(props) =>
    props.dark ? props.textTheme.Dark.color : props.textTheme.Normal.color};
  -webkit-text-size-adjust: 100%;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);

  ${(props) =>
    props.flavor
      ? props.textTheme[props.flavor]
        ? "color " + props.textTheme[props.flavor].color
        : ""
      : ""}
`;
export const NLabel = TextContent.withComponent("label", props);
export const WebLink = TextContent.withComponent("a", props);
export default TextContent;
</script>

<style></style>
