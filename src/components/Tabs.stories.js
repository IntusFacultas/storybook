import { withA11y } from "@storybook/addon-a11y";
import { action } from '@storybook/addon-actions';
import { withKnobs, text, boolean, array, object } from "@storybook/addon-knobs";
import { Tabs } from "Components/components/Tabs/src/Tabs.vue";
import markdown from "Components/components/Tabs/Usage.md";

export default {
    title: "Navbars/Tabs", // Folder/ is unnecessary but you can group stories by a folder by doing so
    decorators: [withA11y, withKnobs],
    parameters: {
        notes: {
            markdown
        }
    },
    excludeStories: /.*Data$/
};

const actionsData = {
    onSelect: action("@select")
}

export const NavigationTabs = () => ({
    components: { Tabs },
    methods: actionsData,
    props: {
        flavor: {
            default: text("Flavor", "")
        },
        tabs: {
            default: object("Tabs", [
                {
                    text: "Link 1",
                    value: "link1",
                    type: "tab",
                    html: "",
                    active: true,
                    disabled: false,
                },
                {
                    text: "Link 2 (Im an href)",
                    value: "link1",
                    type: "link",
                    html: ``,
                    active: false,
                    disabled: false,
                },
                {
                    text: "Link 3",
                    value: "link3",
                    type: "tab",
                    html: "",
                    active: false,
                    disabled: true,
                },
                {
                    text: "Link 4",
                    value: "link4",
                    type: "tab",
                    html: "",
                    active: false,
                    disabled: false,
                },
                {
                    text: "Link 5",
                    value: "link5",
                    type: "tab",
                    html: "",
                    active: false,
                    disabled: false,
                }
            ])
        }
    },
    template: `
        <div>
            <tabs :flavor="flavor" :tabs="tabs" @select="onSelect" ></tabs>
        </div>
    `
});
