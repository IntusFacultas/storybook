import { withA11y } from '@storybook/addon-a11y';
import { action } from '@storybook/addon-actions';
import { VueInput } from "./StyledHTML/Input.vue";
import { NLabel } from "./StyledHTML/Typography.vue";
import { withKnobs, text, boolean, number } from '@storybook/addon-knobs';
import { FlexRow, FlexColumn } from "./Layout/flexColumn.vue";
import markdown from "./StyledHTML/InputUsage.md";

export default {
    title: "StyledHTML/Input",
    decorators: [withA11y, withKnobs],
    parameters: {
        notes: {
            markdown
        }
    },
    excludeStories: /.*Data$/,
};

const actionsData = {
    onInput: action("onInput")
}

export const Input = () => ({
    components: { VueInput, FlexRow, NLabel, FlexColumn },
    methods: actionsData,
    props: {
        readonly: {
            default: boolean("Readonly", false)
        },
        placeholder: {
            default: text("Placeholder", "")
        },
        pattern: {
            default: text("Pattern", "")
        },
        multiple: {
            default: boolean("Multiple", false)
        },
        min: {
            default: text("Min", "")
        },
        max: {
            default: text("Max", "")
        },
        name: {
            default: text("Name", "inputName")
        },
        inputType: {
            default: text("Type", "text")
        },
        required: {
            default: boolean("Required", false)
        },
        disabled: {
            default: boolean("Disabled", false)
        },
        labelType: {
            default: text("Label Type", "normal")
        },
        label: {
            default: text("Label Text", "This is a sample input")
        },
        autofocus: {
            default: boolean("Autofocus", false)
        },
        autocomplete: {
            default: text("Autocomplete", "off")
        }
    },
    template: `
    <flex-row>
        <flex-column>
            <vue-input
            :readonly="readonly"
            :placeholder="placeholder"
            :pattern="pattern"
            :multiple="multiple"
            :min="min"
            :max="max"
            :name="name"
            :input-type="inputType"
            :required="required"
            :disabled="disabled"
            :label-type="labelType"
            :label="label"
            @input="onInput"
            :autofocus="autofocus"
            :autocomplete="autocomplete"></vue-input>
        </flex-column>
    </flex-row>
    `
})