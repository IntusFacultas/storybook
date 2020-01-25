import { NSidebar, SidebarOffsetContent } from "Components/components/Navbars/Sidebar/Sidebar.vue"
import { FlexRow } from "Components/components/Layout/Layout.vue";
import { withA11y } from '@storybook/addon-a11y';

export default {
    title: 'Navbars/Sidebar',
    decorators: [withA11y],
    parameters: {
        notes: {

        }
    },
    // Our exports that end in "Data" are not stories.
    excludeStories: /.*Data$/,
};

export const Sidebar = () => ({
    components: { NSidebar, FlexRow, SidebarOffsetContent },
    template: `
    <flex-row>
        <n-sidebar><h1>Test Sidebar</h1></n-sidebar>
        <sidebar-offset-content><h2>Content!</h2></sidebar-offset-content>
    </flex-row>
    `
})