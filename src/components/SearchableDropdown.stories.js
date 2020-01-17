import SelectMe from "./SelectMe/SelectMe.vue"
import { action } from '@storybook/addon-actions'
import { withA11y } from '@storybook/addon-a11y';
import { withKnobs, array, text, boolean, object } from '@storybook/addon-knobs';
import markdown from "./SelectMe/USAGE.md";

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
         * default: ["badge", "badge-secondary"]
         * Controls what classes should be applied to the badges for selected values. "selectme-badge" is always applied.
         */
        badgeClasses: {
            default: array("Badge CSS Classes", ["badge", "badge-secondary"]),
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

        /**
         * type: Array,
         * default: ["form-control"]
         * Controls what classes should be applied to the searchbox
         */
        inputClass: { default: array("Input CSS Classes", ["form-control"]) },

        /**
         * type: Array
         * default: []
         * When this is set to an array of objects with key "value" that match the values of 
         * options present in the required "options" prop, the selectme will initialize itself 
         * already having those options pre-selected.
         */
        // initialValues: {default: object("Initially Set Values", [])}
    },
    template: `
        <div style="max-width: 25%">
            <label :for="id">Select a country</label>
            <select-me
                @input="onInput"
                :id="id"
                :badge-class="badgeClasses"
                :options="options"
                :value-attribute="valueAttribute"
                :display-attribute="displayAttribute"
                :disabled="disabled"
                :debug="debug"
                :multi-select="multiSelect"
                :input-class="inputClass">
            </select-me>
        </div>
    `
})

export const SingleSelect = () => ({
    components: { SelectMe },
    methods: actionsData,
    props: {

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
         * default: ["badge", "badge-secondary"]
         * Controls what classes should be applied to the badges for selected values. "selectme-badge" is always applied.
         */
        badgeClasses: {
            default: array("Badge CSS Classes", ["badge", "badge-secondary"]),
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

        /**
         * type: Array,
         * default: ["form-control"]
         * Controls what classes should be applied to the searchbox
         */
        inputClass: { default: array("Input CSS Classes", ["form-control"]) },

        /**
         * type: Array
         * default: []
         * When this is set to an array of objects with key "value" that match the values of 
         * options present in the required "options" prop, the selectme will initialize itself 
         * already having those options pre-selected.
         */
        // initialValues: {default: object("Initially Set Values", [])}
    },
    template: `
        <div style="max-width: 25%">
            <label :for="id">Select a country</label>
            <select-me
                @input="onInput"
                :id="id"
                :badge-class="badgeClasses"
                :options="options"
                :value-attribute="valueAttribute"
                :display-attribute="displayAttribute"
                :disabled="disabled"
                :debug="debug"
                :multi-select="multiSelect"
                :input-class="inputClass">
            </select-me>
        </div>
    `
})