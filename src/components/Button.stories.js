import { withA11y } from '@storybook/addon-a11y';
import { NButton } from "./NASICHTML/Button.vue";
import { ThemeProvider } from "vue-styled-components";
import { withKnobs, object, text } from '@storybook/addon-knobs';
import NASICTheme from "./NASICHTML/nasic-theme.js";
import { FlexRow, FlexColumn } from "./Layout/flexColumn.vue"


export default {
    title: "NASIC HTML/Button", // Folder/ is unnecessary but you can group stories by a folder by doing so
    decorators: [withA11y, withKnobs],
    parameters: {
        notes: {
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
    props: {
        flavor: {
            default: text("Flavor", "LightBlue")
        },
        theme: {
            default: object("Themes", NASICTheme)
        },
    },
    template: `
        <flex-row>
            <flex-column>
                <theme-provider :theme="theme">
                    <n-button :flavor="flavor">Themed Button</n-button>
                </theme-provider>
            </flex-column>
            <flex-column>
                <b>Available Themes</b>
                <ul>
                <li v-for="t in Object.keys(theme)">{{t}}</li>
                </ul>
            </flex-column>
            <flex-column :col="4">
            </flex-column>
        </flex-row>
    `
})