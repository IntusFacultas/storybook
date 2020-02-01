import { withA11y } from '@storybook/addon-a11y';
import { withKnobs, array, text, boolean, object, number } from '@storybook/addon-knobs';
import Navbar from "Components/components/Navbars/Navbar/Navbar.vue";
import markdown from "Components/components/Navbars/NavbarUsage.md";

export default {
    title: 'Navbars/Navbar',
    decorators: [withA11y, withKnobs],
    parameters: {
        notes: {
            markdown
        }
    },
    // Our exports that end in "Data" are not stories.
    excludeStories: /.*Data$/,
};

export const ConfigurableNavbar = () => ({
    components: { Navbar },
    props: {
        fixed: {
            default: boolean("Fixed to Top", false),
        },
        flavor: {
            default: text("Flavor", "")
        },
        title: {
            default: object("Title", {
                html: "",
                text: "Brand",
                url: "#"
            })
        },
        leftItems: {
            default: object("Left Items", [
                {
                    type: "dropdown",
                    html: "",
                    text: "Navbar Dropdown",
                    items: [{
                        type: "item",
                        html: "",
                        text: "Dropdown Link",
                        url: "#"
                    },]
                },
                {
                    type: "item",
                    html: "",
                    text: "Navbar Link",
                    url: "#"
                },
                {
                    type: "item",
                    html: "",
                    text: "Navbar Link",
                    url: "#"
                },
                {
                    type: "item",
                    html: "",
                    text: "Navbar Link",
                    url: "#"
                },
                {
                    type: "item",
                    html: "",
                    text: "Navbar Link",
                    url: "#"
                }
            ])
        },
        centerItems: {
            default: object("Center Items", [])
        },
        rightItems: {
            default: object("Right Items", [

            ])
        }
    },
    template: `
        <div>
        <navbar
            :title="title"
            :fixed="fixed"
            :flavor="flavor"
            :left-items="leftItems"
            :right-items="rightItems"
            :center-items="centerItems"></navbar>
            <h1>Content! Stuff! Excitement!</h1>
        </div>
    `
})