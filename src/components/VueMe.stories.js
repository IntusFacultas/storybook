import { withA11y } from '@storybook/addon-a11y';
import { ThemeProvider } from "vue-styled-components";
import { action } from '@storybook/addon-actions';
import {
    withKnobs,
    text, boolean, object
} from '@storybook/addon-knobs';
import Theme from "Components/components/DesignSystem/theme.js";
import { NButton } from "Components/components/StyledHTML/Button/Button.vue";
import VueMe from "Components/components/VueMe/vueMe.vue";
import Vue from 'vue';
import markdown from "Components/components/VueMe/vueMe.md";


Vue.config.silent = true;
export default {
    title: 'VueMe',
    decorators: [withA11y, withKnobs],
    parameters: {
        notes: {
            markdown
        }
    },
    // Our exports that end in "Data" are not stories.
    excludeStories: /.*Data$/,
};

export const VueMeDialog = () => ({
    components: { VueMe, NButton, ThemeProvider },
    props: {
        type: {
            default: text("Type of Dialog", "default")
        },
        title: {
            default: text("Title of Dialog", "Title")
        },
        icon: {
            default: text("Icon HTML", "")
        },
        content: {
            default: text("Dialog Content", "Content")
        },
        backgroundDismiss: {
            default: boolean("Allow Background Dismissing", false)
        },
        buttons: {
            default: object("Buttons", [
                {
                    text: "Close",
                    flavor: "Primary",
                    action: function (data) {
                        console.log(data)
                    },
                    id: "CloseButton",
                }
            ])
        },
        fields: {
            default: object("Fields", [
                {
                    label: "Enter your name",
                    type: "text",
                    id: "name"
                }
            ])
        },
        autoClose: {
            default: text("Autoclose", "CloseButton|10000")
        },
    },
    data: function () {
        return {
            theme: Theme
        }
    },
    methods: {
        alert: function () {
            let self = this;
            self.$alert({
                type: self.type,
                title: self.title,
                icon: self.icon,
                titleClass: self.titleClass,
                content: self.content,
                label: self.label,
                backgroundDismiss: self.backgroundDismiss,
                buttons: self.buttons,
                fields: self.fields,
                autoClose: self.autoClose,
            }, self);
        }
    },
    template: `
        <div>
            <theme-provider :theme="theme">
                <vue-me :parent-instance="this"></vue-me>
                <n-button flavor="Primary" @click="alert">Show Dialog</n-button>
            </theme-provider>
        </div>
    `
});
