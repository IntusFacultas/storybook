import { withA11y } from '@storybook/addon-a11y';
import { action } from '@storybook/addon-actions';
import { VueInput } from "Components/components/StyledHTML/Input/Input.vue";
import { VueTextArea } from "Components/components/StyledHTML/TextArea/TextArea.vue";
import { NLabel } from "Components/components/StyledHTML/Typography/Typography.vue";
import { withKnobs, text, boolean, number } from '@storybook/addon-knobs';
import { FlexRow, FlexColumn } from "Components/components/Layout/Layout.vue";
import markdown from "Components/components/StyledHTML/InputUsage.md";
import textareamarkdown from "Components/components/StyledHTML/TextAreaUsage.md";

export default {
    title: "StyledHTML/Input",
    decorators: [withA11y, withKnobs],
    parameters: {
        notes: {
            Input: markdown,
            TextArea: textareamarkdown
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
        },
        flavor: {
            default: text("Flavor", "Info")
        }
    },
    template: `
    <flex-row>
        <flex-column>
            <vue-input
            :flavor="flavor"
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
});

export const TextArea = () => ({
    components: { VueTextArea, FlexRow, FlexColumn },
    methods: actionsData,
    props: {
        autofocus: {
            default: boolean("Autofocus", false)
        },
        readonly: {
            default: boolean("Read only", false)
        },
        placeholder: {
            default: text("Placeholder", "")
        },
        maxlength: {
            default: number("Max Length", '')
        },
        cols: {
            default: number("Cols", "")
        },
        rows: {
            default: number("Rows", "")
        },
        name: {
            default: text("Name", "TextArea")
        },
        required: {
            default: boolean("Required", false)
        },
        labelFlavor: {
            default: text("Label Flavor", "")
        },
        labelDark: {
            default: boolean("Label Dark", false)
        },
        label: {
            default: text("Label Text", "This is a sample input")
        },
        disabled: {
            default: boolean("Disabled", false)
        },
        flavor: {
            default: text("Flavor", "Info")
        }
    },
    template: `
    <flex-row>
        <flex-column>
            <vue-text-area
                :readonly="readonly"
                :flavor="flavor"
                :placeholder="placeholder"
                :name="name"
                :rows="rows"
                :cols="cols"
                :maxlength="maxlength"
                :required="required"
                :disabled="disabled"
                :label-flavor="labelFlavor"
                :label-dark="labelDark"
                :label="label"
                @input="onInput"
                :autofocus="autofocus"
            ></vue-text-area>
        </flex-column>
    </flex-row>
    `
});