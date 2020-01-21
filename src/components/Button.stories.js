import { withA11y } from '@storybook/addon-a11y';
import { NButton } from "./StyledHTML/Button.vue";
import { ThemeProvider } from "vue-styled-components";
import { withKnobs, object, text, boolean } from '@storybook/addon-knobs';
import Theme from "./DesignSystem/theme.js";
import { FlexRow, FlexColumn } from "./Layout/flexColumn.vue"
import buttonmarkdown from "./StyledHTML/ButtonUsage.md";


export default {
    title: "StyledHTML/Button", // Folder/ is unnecessary but you can group stories by a folder by doing so
    decorators: [withA11y, withKnobs],
    parameters: {
        notes: {
            Button: buttonmarkdown
        }
    },
    excludeStories: /.*Data$/,
};

export const Button = () => ({
    components: { NButton, FlexRow, FlexColumn, 'theme-provider': ThemeProvider },
    data: function () {
        return {
            theme: Theme
        }
    },
    props: {
        large: {
            default: boolean("Large Button", false)
        },
        small: {
            default: boolean("Small Button", false)
        },
        flavor: {
            default: text("Flavor", "Success")
        },
        disabled: {
            default: boolean("Disable Button", false)
        },
        block: {
            default: boolean("Block Button", false)
        }
    },
    template: `
        <flex-row>
            <theme-provider :theme="theme" style="width: 100%">
                <n-button
                    :flavor="flavor"
                    :disabled="disabled"
                    :small="small"
                    :large="large"
                    :block="block">Themed Button
                </n-button>
            </theme-provider>
        </flex-row>
    `
})