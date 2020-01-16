import { withA11y } from '@storybook/addon-a11y';
import { NButton } from "./NASICHTML/Button.vue";
import { ThemeProvider } from "vue-styled-components";
import { withKnobs, object, text } from '@storybook/addon-knobs';
import NASICTheme from "./NASICHTML/nasic-theme.js";


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
    components: { NButton, 'theme-provider': ThemeProvider },
    props: {
        theme: {
            default: object("Themes", NASICTheme)
        },
        flavor: {
            default: text("Flavor", "LightBlue")
        }
    },
    template: `
        <theme-provider :theme="theme">
            <n-button flavor="LightBlue">Base Button</n-button>
        </theme-provider>
    `
})