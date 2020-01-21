<script>
import styled from "vue-styled-components";

const props = {
  flavor: String,
  small: Boolean,
  large: Boolean,
  block: Boolean
};

const dialogProps = {
  flavor: String,
  small: Boolean,
  large: Boolean,
  block: Boolean,
  dialogTheme: Object
};

export const DialogButton = styled("button", dialogProps)`
        padding: ${props =>
          props.large ? "8px 10px" : props.small ? "3px 5px" : "5px 10px"};
        font-size: ${props =>
          props.large ? "24px" : props.small ? "12px" : "16px"};
        border-radius: 3px;
        font-weight: bold;
        ${props => (props.block ? "width: 100%;" : "")}
        font-family: Segoe UI, sans-serif;
        border: 1px solid transparent;
        transition: color .1s ease-in-out,
            background-color .1s ease-in-out,
            border-color .1s ease-in-out,
            box-shadow .1s ease-in-out;
        cursor: pointer;
        color: ${props =>
          props.dialogTheme[props.flavor] &&
          props.dialogTheme[props.flavor].color.color
            ? props.dialogTheme[props.flavor].color.color
            : "#040404"}
        background-color: ${props =>
          props.dialogTheme[props.flavor] &&
          props.dialogTheme[props.flavor].background.color
            ? props.dialogTheme[props.flavor].background.color
            : "#f0f0f0"};
        &:focus {
            outline: none;
            box-shadow: 0 0 0 .2rem ${props =>
              props.dialogTheme[props.flavor] &&
              props.dialogTheme[props.flavor].background.color
                ? props.dialogTheme[props.flavor].background.color + "80"
                : "#dcc"};
            color: ${props =>
              props.dialogTheme[props.flavor] &&
              props.dialogTheme[props.flavor].color.focus
                ? props.dialogTheme[props.flavor].color.focus
                : "#000"}
        }
        &:disabled {
            opacity: 0.6;
            cursor: not-allowed;
        }
        &:hover {
            background-color: ${props =>
              props.dialogTheme[props.flavor] &&
              props.dialogTheme[props.flavor].background.hover
                ? props.dialogTheme[props.flavor].background.hover
                : "#d5d5d5"};
            color: ${props =>
              props.dialogTheme[props.flavor] &&
              props.dialogTheme[props.flavor].color.hover
                ? props.dialogTheme[props.flavor].color.hover
                : "#000"}
        }
        &:disabled:hover {
            background-color: ${props =>
              props.dialogTheme[props.flavor] &&
              props.dialogTheme[props.flavor].background.color
                ? props.dialogTheme[props.flavor].background.color
                : "#f0f0f0"};
        }
    `;
export const NButton = styled("button", props)`
        padding: ${props =>
          props.large ? "8px 10px" : props.small ? "3px 5px" : "5px 10px"};
        font-size: ${props =>
          props.large ? "24px" : props.small ? "12px" : "16px"};
        border-radius: 3px;
        font-weight: bold;
        ${props => (props.block ? "width: 100%;" : "")}
        font-family: Segoe UI, sans-serif;
        border: 1px solid transparent;
        transition: color .1s ease-in-out,
            background-color .1s ease-in-out,
            border-color .1s ease-in-out,
            box-shadow .1s ease-in-out;
        cursor: pointer;
        color: ${props =>
          props.theme[props.flavor] && props.theme[props.flavor].color.color
            ? props.theme[props.flavor].color.color
            : "#040404"}
        background-color: ${props =>
          props.theme[props.flavor] &&
          props.theme[props.flavor].background.color
            ? props.theme[props.flavor].background.color
            : "#f0f0f0"};
        &:focus {
            outline: none;
            box-shadow: 0 0 0 .2rem ${props =>
              props.theme[props.flavor] &&
              props.theme[props.flavor].background.color
                ? props.theme[props.flavor].background.color + "80"
                : "#dcc"};
            color: ${props =>
              props.theme[props.flavor] && props.theme[props.flavor].color.focus
                ? props.theme[props.flavor].color.focus
                : "#000"}
        }
        &:disabled {
            opacity: 0.6;
            cursor: not-allowed;
        }
        &:hover {
            background-color: ${props =>
              props.theme[props.flavor] &&
              props.theme[props.flavor].background.hover
                ? props.theme[props.flavor].background.hover
                : "#d5d5d5"};
            color: ${props =>
              props.theme[props.flavor] && props.theme[props.flavor].color.hover
                ? props.theme[props.flavor].color.hover
                : "#000"}
        }
        &:disabled:hover {
            background-color: ${props =>
              props.theme[props.flavor] &&
              props.theme[props.flavor].background.color
                ? props.theme[props.flavor].background.color
                : "#f0f0f0"};
        }
    `;
export default NButton;
</script>