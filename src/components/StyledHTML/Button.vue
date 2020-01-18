<script>
import styled from "vue-styled-components";

const props = {
  flavor: String
};

export const NButton = styled("button", props)`
        padding: 5px 10px;
        font-size: 16px;
        border-radius: 3px;
        font-weight: bold;
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