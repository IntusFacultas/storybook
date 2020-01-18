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

export const BaseButton = () => ({
    components: { NButton },
    template: `
        <n-button>Base Button</n-button>
    `
});

export const ButtonThemes = () => ({
    components: { NButton, FlexRow, FlexColumn, 'theme-provider': ThemeProvider },
    data: function() {
        return {
            theme: Theme
        }
    },
    props: {
        flavor: {
            default: text("Flavor", "Success")
        },
        disabled: {
            default: boolean("Disable Button", false)
        },
    },
    template: `
        <flex-row>
            <flex-column>
                <theme-provider :theme="theme">
                    <n-button :flavor="flavor" :disabled="disabled">Themed Button</n-button>
                </theme-provider>
            </flex-column>
            <flex-column :col="4">
            </flex-column>
        </flex-row>
    `
})