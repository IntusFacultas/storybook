import { NSidebar, SidebarOffsetContent } from "Components/components/Navbars/Sidebar/Sidebar.vue"
import { NRawSidebar } from "Components/components/Navbars/Sidebar/RawSidebar.vue";
import { FlexRow } from "Components/components/Layout/Layout.vue";
import { withA11y } from '@storybook/addon-a11y';
import { withKnobs, array, text, boolean, object, number } from '@storybook/addon-knobs';
import { NText, NH1 } from "Components/components/StyledHTML/Typography/Typography.vue";
import { VueInput } from "Components/components/StyledHTML/Input/Input.vue"
import markdown from "Components/components/Navbars/SidebarUsage.md";
export default {
    title: 'Navbars/Sidebar',
    decorators: [withA11y, withKnobs],
    parameters: {
        notes: {
            Sidebar: markdown
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
        width: {
            default: number("Sidebar width", 200)
        },
        breakpoint: {
            default: number("Sidebar collapse breakpoint", 576)
        },
        items: {
            default: object("Sidebar Items", [
                {
                    type: "item",
                    text: "Link 1",
                    icon: "",
                    url: "/url/to/place"
                },
                {
                    type: "dropdown",
                    text: "Dropdown",
                    icon: "",
                    items: [
                        {
                            type: "item",
                            text: "Link 98",
                            icon: "",
                            url: "/url/to/place"
                        },
                        {
                            type: "item",
                            text: "Link 10",
                            icon: "",
                            url: "/url/to/place"
                        },
                    ]
                },
                {
                    type: "item",
                    text: "Link 2",
                    icon: "",
                    url: "/url/to/place"
                },
                {
                    type: "item",
                    text: "Link 3",
                    icon: "",
                    url: "/url/to/place"
                },
                {
                    type: "item",
                    text: "Link 4",
                    icon: "",
                    url: "/url/to/place"
                },
                {
                    type: "item",
                    text: "Link 5",
                    icon: "",
                    url: "/url/to/place"
                },
                {
                    type: "item",
                    text: "Link 6",
                    icon: "",
                    url: "/url/to/place"
                },
                {
                    type: "item",
                    text: "Link 7",
                    icon: "",
                    url: "/url/to/place"
                },
                {
                    type: "item",
                    text: "Link 8",
                    icon: "",
                    url: "/url/to/place"
                },

            ])
        },
        sidebarTitle: {
            default: text("Sidebar Title", "Sidebar"),
        },
        topOffset: {
            default: text("Top Offset", 0)
        },
        bottomOffset: {
            default: text("Bottom Offset", 0)
        },
    },
    template: `
    <flex-row>
        <n-sidebar
            :flavor="flavor"
            :sidebar-title="sidebarTitle"
            :top-offset="topOffset"
            :bottom-offset="bottomOffset"
            :items="items"
            :width="width"
            :breakpoint="breakpoint">
        </n-sidebar>
        <sidebar-offset-content
            :width="width"
            :breakpoint="breakpoint"><h2>Content!</h2></sidebar-offset-content>
    </flex-row>
    `
})

export const RawSidebar = () => ({
    components: { NRawSidebar, FlexRow, SidebarOffsetContent, NText, NH1, VueInput },
    props: {
        flavor: {
            default: text("Sidebar Flavor", "")
        },
        sidebarTitle: {
            default: text("Sidebar Title", "Sidebar"),
        },
        topOffset: {
            default: text("Top Offset", 0)
        },
        bottomOffset: {
            default: text("Bottom Offset", 0)
        },
        width: {
            default: number("Sidebar width", 200)
        },
        breakpoint: {
            default: number("Sidebar collapse breakpoint", 576)
        },
    },
    template: `
    <flex-row>
        <n-raw-sidebar
            :flavor="flavor"
            :sidebar-title="sidebarTitle"
            :top-offset="topOffset"
            :bottom-offset="bottomOffset"
            :width="width"
            :breakpoint="breakpoint"
        >
            <n-h1>This is raw HTMl piped into my sidebar</n-h1>
            <vue-input name="sampleInput" label="This is a label in my sidebar" type="text"></vue-input>
        </n-raw-sidebar>
        <sidebar-offset-content :width="width" :breakpoint="breakpoint"><h2>Content!</h2></sidebar-offset-content>
    </flex-row>
    `
})