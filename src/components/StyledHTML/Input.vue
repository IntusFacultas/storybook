

<script>
    import {NLabel, LLabel, MLabel, WLabel} from "./Typography.vue";
    import styled from "vue-styled-components";
    import Theme from "../DesignSystem/theme.js";

    const props = {
        color: {
            type: String,
            default: Theme.InfoMedium.background.color
        }
    }
    export const NInput = styled("input", props)`
        width: 100%;
        height: 25px;
        font-size: 16px;
        border-radius: 5px;
        border: 1px solid #838E99;
        padding: 2px 5px 2px 5px;
        &:focus {
            outline: none;
            border-color: ${props => props.color};
            box-shadow: 0px 0px 4px 4px ${props => props.color };
        }
    `;
    export const VueInput = {
        name: "vue-input",
        components: {NInput, NLabel, LLabel, MLabel, WLabel },
        props: {
            labelType: {
                type: String,
                default: "normal"
            },
            label: {
                type: String,
                default: ""
            },
        }
    }
    export default NInput;
</script>