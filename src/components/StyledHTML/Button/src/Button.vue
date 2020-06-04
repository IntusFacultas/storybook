<script>
import styled from "vue-styled-components";
import Theme from "@IntusFacultas/design-system";
const props = {
  flavor: String,
  small: Boolean,
  outline: Boolean,
  large: Boolean,
  block: Boolean,
  loading: Boolean,
  defaultTheme: {
    type: Object,
    default: function() {
      return Theme;
    },
  },
};
const dialogProps = {
  flavor: String,
  small: Boolean,
  large: Boolean,
  block: Boolean,
  dialogTheme: {
    type: Object,
    default: function() {
      return Theme;
    },
  },
};
export const ButtonGroup = styled.div`
  position: relative;
  display: inline-flex;
  vertical-align: middle;
  & button:not(:last-child) {
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
  }
  & button:not(:first-child) {
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
  }
`;
export const DialogButton = styled("button", dialogProps)`
        padding: ${(props) =>
          props.large ? "8px 10px" : props.small ? "3px 5px" : "5px 10px"};
        font-size: ${(props) =>
          props.large ? "24px" : props.small ? "12px" : "16px"};
        border-radius: 3px;
        font-weight: bold;
        ${(props) => (props.block ? "width: 100%;" : "")}
        font-family: "Open Sans Regular", -apple-system, BlinkMacSystemFont,
    "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji",
    "Segoe UI Emoji", "Segoe UI Symbol";
        border: 1px solid transparent;
        transition: color .1s ease-in-out,
            background-color .1s ease-in-out,
            border-color .1s ease-in-out,
            box-shadow .1s ease-in-out;
        cursor: pointer;
        color: ${(props) =>
          props.theme && props.theme[props.flavor]
            ? props.theme[props.flavor].color.color
            : props.dialogTheme[props.flavor] &&
              props.dialogTheme[props.flavor].color.color
            ? props.dialogTheme[props.flavor].color.color
            : "#040404"}
        background-color: ${(props) =>
          props.theme && props.theme[props.flavor]
            ? props.theme[props.flavor].background.color
            : props.dialogTheme[props.flavor] &&
              props.dialogTheme[props.flavor].background.color
            ? props.dialogTheme[props.flavor].background.color
            : "#f0f0f0"};
        &:focus {
            outline: none;
            box-shadow: 0 0 0 .2rem ${(props) =>
              props.theme && props.theme[props.flavor]
                ? props.theme[props.flavor].background.color + "80"
                : props.dialogTheme[props.flavor] &&
                  props.dialogTheme[props.flavor].background.color
                ? props.dialogTheme[props.flavor].background.color + "80"
                : "#ddcccc80"};
            color: ${(props) =>
              props.theme && props.theme[props.flavor]
                ? props.theme[props.flavor].color.focus
                : props.dialogTheme[props.flavor] &&
                  props.dialogTheme[props.flavor].color.focus
                ? props.dialogTheme[props.flavor].color.focus
                : "#000"};
        }
        &:disabled {
            opacity: 0.6;
            cursor: not-allowed;
        }
        &:hover {
            background-color: ${(props) =>
              props.theme && props.theme[props.flavor]
                ? props.theme[props.flavor].background.hover
                : props.dialogTheme[props.flavor] &&
                  props.dialogTheme[props.flavor].background.hover
                ? props.dialogTheme[props.flavor].background.hover
                : "#d5d5d5"};
            color: ${(props) =>
              props.theme && props.theme[props.flavor]
                ? props.theme[props.flavor].color.hover
                : props.dialogTheme[props.flavor] &&
                  props.dialogTheme[props.flavor].color.hover
                ? props.dialogTheme[props.flavor].color.hover
                : "#000"};
        }
        &:disabled:hover {
            background-color: ${(props) =>
              props.theme && props.theme[props.flavor]
                ? props.theme[props.flavor].background.color
                : props.dialogTheme[props.flavor] &&
                  props.dialogTheme[props.flavor].background.color
                ? props.dialogTheme[props.flavor].background.color
                : "#f0f0f0"};
        }
    `;
export const NButton = styled("button", props)`
  padding: ${(props) =>
    props.large ? "8px 10px" : props.small ? "3px 5px" : "5px 10px"};
  font-size: ${(props) =>
    props.large ? "24px" : props.small ? "12px" : "16px"};
  border-radius: 3px;
  font-weight: bold;
  ${(props) => (props.block ? "width: 100%;" : "")}
  font-family: Segoe UI, sans-serif;
  transition: color 0.1s ease-in-out, background-color 0.1s ease-in-out,
    border-color 0.1s ease-in-out, box-shadow 0.1s ease-in-out;
  cursor: pointer;
  ${(props) =>
    props.outline
      ? `
        /* Outline is true*/

        background-color: transparent;
        color: ${
          props.theme && props.theme[props.flavor]
            ? props.theme[props.flavor].background.color
            : props.defaultTheme[props.flavor] &&
              props.defaultTheme[props.flavor].background.color
            ? props.defaultTheme[props.flavor].background.color
            : "#f0f0f0"
        };
        border: 2px solid ${
          props.theme && props.theme[props.flavor]
            ? props.theme[props.flavor].background.color
            : props.defaultTheme[props.flavor] &&
              props.defaultTheme[props.flavor].background.color
            ? props.defaultTheme[props.flavor].background.color
            : "#f0f0f0"
        };
        &:focus {
            outline: none;
            box-shadow: 0 0 0 .2rem ${
              props.theme && props.theme[props.flavor]
                ? props.theme[props.flavor].background.color + "80"
                : props.defaultTheme[props.flavor] &&
                  props.defaultTheme[props.flavor].background.color
                ? props.defaultTheme[props.flavor].background.color + "80"
                : "#dcc"
            };
        }
        &:hover:enabled {
          background-color: ${
            props.theme && props.theme[props.flavor]
              ? props.theme[props.flavor].background.color
              : props.defaultTheme[props.flavor] &&
                props.defaultTheme[props.flavor].background.color
              ? props.defaultTheme[props.flavor].background.color
              : "#d5d5d5"
          };
          color: ${
            props.theme && props.theme[props.flavor]
              ? props.theme[props.flavor].color.color
              : props.defaultTheme[props.flavor] &&
                props.defaultTheme[props.flavor].color.color
              ? props.defaultTheme[props.flavor].color.color
              : "#000"
          }
      }

      `
      : `
        /* Outline is false */
        border: 1px solid transparent;
        color: ${
          props.theme && props.theme[props.flavor]
            ? props.theme[props.flavor].color.color
            : props.defaultTheme[props.flavor] &&
              props.defaultTheme[props.flavor].color.color
            ? props.defaultTheme[props.flavor].color.color
            : "#040404"
        };
        background-color: ${
          props.theme && props.theme[props.flavor]
            ? props.theme[props.flavor].background.color
            : props.defaultTheme[props.flavor] &&
              props.defaultTheme[props.flavor].background.color
            ? props.defaultTheme[props.flavor].background.color
            : "#f0f0f0"
        };
        &:focus {
            outline: none;
            box-shadow: 0 0 0 .2rem ${
              props.theme && props.theme[props.flavor]
                ? props.theme[props.flavor].background.color + "80"
                : props.defaultTheme[props.flavor] &&
                  props.defaultTheme[props.flavor].background.color
                ? props.defaultTheme[props.flavor].background.color + "80"
                : "#dcc"
            };
            color: ${
              props.theme && props.theme[props.flavor]
                ? props.theme[props.flavor].color.focus
                : props.defaultTheme[props.flavor] &&
                  props.defaultTheme[props.flavor].color.focus
                ? props.defaultTheme[props.flavor].color.focus
                : "#000"
            }
        }
        &:hover:enabled {
            background-color: ${
              props.theme && props.theme[props.flavor]
                ? props.theme[props.flavor].background.hover
                : props.defaultTheme[props.flavor] &&
                  props.defaultTheme[props.flavor].background.hover
                ? props.defaultTheme[props.flavor].background.hover
                : "#d5d5d5"
            };
            color: ${
              props.theme && props.theme[props.flavor]
                ? props.theme[props.flavor].color.hover
                : props.defaultTheme[props.flavor] &&
                  props.defaultTheme[props.flavor].color.hover
                ? props.defaultTheme[props.flavor].color.hover
                : "#000"
            }
        }
      `}
  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
  ${(props) =>
    props.loading
      ? `
     background: linear-gradient(to right, ${
       props.theme && props.theme[props.flavor]
         ? props.theme[props.flavor].background.color
         : props.defaultTheme[props.flavor] &&
           props.defaultTheme[props.flavor].background.color
         ? props.defaultTheme[props.flavor].background.color
         : "#dcc"
     } 0%, ${
          props.theme && props.theme[props.flavor]
            ? props.theme[props.flavor].background.color
            : props.defaultTheme[props.flavor] &&
              props.defaultTheme[props.flavor].background.color
            ? props.defaultTheme[props.flavor].background.color
            : "#dcc"
        } 50%, ${
          props.theme && props.theme[props.flavor]
            ? props.theme[props.flavor].background.hover + "AA"
            : props.defaultTheme[props.flavor] &&
              props.defaultTheme[props.flavor].background.hover
            ? props.defaultTheme[props.flavor].background.hover + "AA"
            : "#dcc"
        } 50%, ${
          props.theme && props.theme[props.flavor]
            ? props.theme[props.flavor].background.hover + "AA"
            : props.defaultTheme[props.flavor] &&
              props.defaultTheme[props.flavor].background.hover
            ? props.defaultTheme[props.flavor].background.hover + "AA"
            : "#dcc"
        } 100%);
      background-size: 600% 600%;

      -webkit-animation: AnimationName 2s ease infinite;
      -moz-animation: AnimationName 2s ease infinite;
      animation: AnimationName 2s ease infinite;
  `
      : ``}
  @-webkit-keyframes AnimationName {
    0% {
      background-position: 0% 0%;
    }
    100% {
      background-position: -100% -100%;
    }
  }
  @-moz-keyframes AnimationName {
    0% {
      background-position: 0% 0%;
    }
    100% {
      background-position: -100% -100%;
    }
  }
  @keyframes AnimationName {
    0% {
      background-position: 0% 0%;
    }
    100% {
      background-position: -100% -100%;
    }
  }
`;
export default NButton;
</script>
