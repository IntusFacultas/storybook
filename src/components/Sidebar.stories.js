import { NSidebar, SidebarOffsetContent } from "Components/components/Navbars/Sidebar/Sidebar.vue"
import { FlexRow } from "Components/components/Layout/Layout.vue";
import { withA11y } from '@storybook/addon-a11y';
import { withKnobs, array, text, boolean, object } from '@storybook/addon-knobs';
import { NText, NH1 } from "Components/components/StyledHTML/Typography/Typography.vue";

export default {
    title: 'Navbars/Sidebar',
    decorators: [withA11y, withKnobs],
    parameters: {
        notes: {

        }
    },
    // Our exports that end in "Data" are not stories.
    excludeStories: /.*Data$/,
};

export const Sidebar = () => ({
    components: { NSidebar, FlexRow, SidebarOffsetContent, NText, NH1 },
    props: {
        flavor: {
            default: text("Sidebar Flavor", "")
        },
        sidebarTitle: {
            default: object("Sidebar Title", {
                text: "Test Sidebar",
                flavor: ""
            })
        }
    },
    template: `
    <flex-row>
        <n-sidebar
            :flavor="flavor"
            :sidebar-title="sidebarTitle"><n-h1 flavor="White">Sidebar Title</n-h1></n-sidebar:flavor="flavor">
        <sidebar-offset-content><h2>Content!</h2></sidebar-offset-content>
    </flex-row>
    `
})