import SelectMe from "Components/components/SelectMe/SelectMe.vue"
import { action } from '@storybook/addon-actions'
import { withA11y } from '@storybook/addon-a11y';
import { withKnobs, array, text, boolean, object } from '@storybook/addon-knobs';
import markdown from "Components/components/SelectMe/USAGE.md";

export default {
    title: 'Searchable Dropdown',
    decorators: [withA11y, withKnobs],
    parameters: {
        notes: { markdown }
    },
    // Our exports that end in "Data" are not stories.
    excludeStories: /.*Data$/,
};

const actionsData = {
    onInput: action("onInput")
}

export const MultipleSelect = () => ({
    components: { SelectMe },
    methods: actionsData,
    props: {

        badgeFlavor: {
            default: text("Badge Flavor", "Primary")
        },
        flavor: {
            default: text("Flavor", "LightBlue")
        },
        /**
         * type: String,
         * default: ""
         * Sets the input id so that you can reference it with a label for accessability purposes
         */
        id: {
            default: text("Input ID", "selectInput")
        },

        /**
         * type: Array,
         * default: [],
         * default format: [{ text: "", value: "" }]
         * This is the options for the dropdown
         */
        options: {
            default: object("Select Options", [
                {
                    text: "United States",
                    value: "USA"
                },
                {
                    text: "Russia",
                    value: "RUS"
                },
                {
                    text: "China",
                    value: "CHN"
                },
                {
                    text: "Canada",
                    value: "CAN"
                },
                {
                    text: "Mexico",
                    value: "MEX"
                },
                {
                    text: "Japan",
                    value: "JPN"
                },
                {
                    text: "North Korea",
                    value: "NKA"
                },
                {
                    text: "South Korea",
                    value: "SKA"
                },
            ])
        },

        /**
         * type: String,
         * default: "value",
         * What attribute in a JS object should be referenced for determining the value
         */
        valueAttribute: {
            default: text("Value Key in Option", "value")
        },

        /**
         * type: String,
         * default: "text"
         * What attribute in a JS object should be referenced for displaying the option text and badge text for an option
         */
        displayAttribute: { default: text("Display Key in Option", "text") },

        /**
         * type: Boolean,
         * default: false,
         * disables the widget, disallowing selection
         */
        disabled: { default: boolean("Disable SelectMe", false) },

        /**
         * type: Boolean,
         * default: false, 
         * When this is set to True, the dropdown does not close, allowing you to inspect the element
         */
        debug: { default: boolean("Debug Mode", false) },

        /**
         * type: Boolean,
         * default: false,
         * When this is set to True, the dropdown will allow a user to select multiple options
         */
        multiSelect: { default: boolean("Multi Select Mode", true) },
    },
    template: `
        <div style="max-width: 35%">
            <label :for="id">Select a country</label>
            <select-me
                :flavor="flavor"
                :badge-flavor="badgeFlavor"
                @input="onInput"
                :id="id"
                :options="options"
                :value-attribute="valueAttribute"
                :display-attribute="displayAttribute"
                :disabled="disabled"
                :debug="debug"
                :multi-select="multiSelect">
            </select-me>
        </div>
    `
})

export const SingleSelect = () => ({
    components: { SelectMe },
    methods: actionsData,
    props: {
        badgeFlavor: {
            default: text("Badge Flavor", "Primary")
        },
        flavor: {
            default: text("Flavor", "LightBlue")
        },
        /**
         * type: String,
         * default: ""
         * Sets the input id so that you can reference it with a label for accessability purposes
         */
        id: {
            default: text("Input ID", "selectInput")
        },

        /**
         * type: Array,
         * default: [],
         * default format: [{ text: "", value: "" }]
         * This is the options for the dropdown
         */
        options: {
            default: object("Select Options", [
                {
                    text: "United States",
                    value: "USA"
                },
                {
                    text: "Russia",
                    value: "RUS"
                },
                {
                    text: "China",
                    value: "CHN"
                },
                {
                    text: "Canada",
                    value: "CAN"
                },
                {
                    text: "Mexico",
                    value: "MEX"
                },
                {
                    text: "Japan",
                    value: "JPN"
                },
                {
                    text: "North Korea",
                    value: "NKA"
                },
                {
                    text: "South Korea",
                    value: "SKA"
                },
            ])
        },

        /**
         * type: String,
         * default: "value",
         * What attribute in a JS object should be referenced for determining the value
         */
        valueAttribute: {
            default: text("Value Key in Option", "value")
        },

        /**
         * type: String,
         * default: "text"
         * What attribute in a JS object should be referenced for displaying the option text and badge text for an option
         */
        displayAttribute: { default: text("Display Key in Option", "text") },

        /**
         * type: Boolean,
         * default: false,
         * disables the widget, disallowing selection
         */
        disabled: { default: boolean("Disable SelectMe", false) },

        /**
         * type: Boolean,
         * default: false, 
         * When this is set to True, the dropdown does not close, allowing you to inspect the element
         */
        debug: { default: boolean("Debug Mode", false) },

        /**
         * type: Boolean,
         * default: false,
         * When this is set to True, the dropdown will allow a user to select multiple options
         */
        multiSelect: { default: boolean("Multi Select Mode", false) },
    },
    template: `
        <div style="max-width: 35%">
            <label :for="id">Select a country</label>
            <select-me
                :flavor="flavor"
                :badge-flavor="badgeFlavor"
                @input="onInput"
                :id="id"
                :options="options"
                :value-attribute="valueAttribute"
                :display-attribute="displayAttribute"
                :disabled="disabled"
                :debug="debug"
                :multi-select="multiSelect">
            </select-me>
        </div>
    `
})