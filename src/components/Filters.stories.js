import SelectMe from "./SelectMe.vue"
import { withA11y } from '@storybook/addon-a11y';
import { withKnobs, array, text, boolean, object} from '@storybook/addon-knobs';

export default {
    title: 'Filters',
    decorators: [withA11y, withKnobs],
    // Our exports that end in "Data" are not stories.
    excludeStories: /.*Data$/,
  };


export const MultiSelect = () => ({
    components: { SelectMe },
    props: {
        badgeClasses: {
            default: array("Badge CSS Classes", []),
        },
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
        ])},
        valueAttribute: {
            default: text("Value Key in Option", "value")
        },
        displayAttribute: {default: text("Display Key in Option", "text")},
        disabled: {default: boolean("Disable SelectMe", false)},
        debug: {default: boolean("Debug Mode", false)},
        multiSelect: {default: boolean("Multi Select Mode", true)},
        inputClass: {default: array("Input CSS Classes", ["form-control"])},
        initialValues: {default: array("Initially Set Values", [])}
    },
    template: `
        <div style="width: 40%">
            <select-me
                :badge-class="badgeClasses"
                :options="options"
                :value-attribute="valueAttribute"
                :display-attribute="displayAttribute"
                :disabled="disabled"
                :debug="debug"
                :multi-select="multiSelect"
                :input-class="inputClass"
                :initial-values="initialValues">
            </select-me>
        </div>
    `
})