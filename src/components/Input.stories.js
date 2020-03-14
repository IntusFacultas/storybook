import { withA11y } from "@storybook/addon-a11y";
import { action } from "@storybook/addon-actions";
import { VueInput } from "Components/components/StyledHTML/Input/src/Input.vue";
import { VueTextArea } from "Components/components/StyledHTML/TextArea/src/TextArea.vue";
import { NumberRange } from "Components/components/StyledHTML/NumberRange/src/NumberRange.vue";
import {
  withKnobs,
  text,
  boolean,
  number,
  array
} from "@storybook/addon-knobs";
import {
  FlexRow,
  FlexColumn
} from "Components/components/Layout/src/Layout.vue";
import markdown from "Components/components/StyledHTML/InputUsage.md";
import textareamarkdown from "Components/components/StyledHTML/TextAreaUsage.md";
import numberrangemarkdown from "Components/components/StyledHTML/NumberRangeUsage.md";

export default {
  title: "Styled HTML/Input",
  decorators: [withA11y, withKnobs],
  parameters: {
    notes: {
      Input: markdown,
      TextArea: textareamarkdown,
      "Number Range": numberrangemarkdown
    }
  },
  excludeStories: /.*Data$/
};

const actionsData = {
  onInput: action("@input"),
  onFocus: action("@focus"),
  onChange: action("@change")
};

export const Input = () => ({
  components: { VueInput, FlexRow, FlexColumn },
  methods: actionsData,
  props: {
    flavor: {
      default: text("Flavor", "LightBlue")
    },
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
    labelFlavor: {
      default: text("Label Flavor", "")
    },
    labelDark: {
      default: boolean("Label Dark", false)
    },
    label: {
      default: text("Label WebText", "This is a sample input")
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
            :label-flavor="labelFlavor"
            :label-dark="labelDark"
            :label="label"
            @input="onInput"
            @focus="onFocus"
            @change="onChange"
            :autofocus="autofocus"
            :autocomplete="autocomplete"></vue-input>
        </flex-column>
    </flex-row>
    `
});

export const BasicNumberRange = () => ({
  components: { NumberRange, FlexRow, FlexColumn },
  data() {
    return {
      value: {
        lowerValue: 0,
        upperValue: 100
      }
    };
  },
  methods: {
    onInput: action("@input"),
    onChange: action("@change")
  },
  props: {
    flavor: {
      default: text("Flavor", "Primary")
    },
    min: {
      default: number("Minimum", 0)
    },
    max: {
      default: number("Maximum", 100)
    },
    steps: {
      default: array("Steps", [2])
    },
    type: {
      default: text("Type", "range")
    },
    label: {
      default: text("Label", "Number Range")
    }
  },
  template: `
    <div>
      <number-range
        :max="max"
        :min="min"
        :flavor="flavor"
        :steps="steps"
        :label="label"
        :type="type"
        v-model="value"
        name="numberRange"
        @change="onChange"
        @input="onInput">
      </number-range>
    </div>
  `
});

export const DiscreteNumberRange = () => ({
  components: { NumberRange, FlexRow, FlexColumn },
  methods: {
    onInput: action("@input"),
    onChange: action("@change")
  },
  props: {
    min: {
      default: number("Minimum", 0)
    },
    max: {
      default: number("Maximum", 100)
    },
    steps: {
      default: array("Steps", [0, 2, 15, 20, 25, 60, 100])
    },
    type: {
      default: text("Type", "range")
    },
    label: {
      default: text("Label", "Number Range")
    },
    labelFlavor: {
      default: text("Label Flavor", "")
    }
  },
  template: `
    <number-range
      :max="max"
      :min="min"
      :steps="steps"
      :label="label"
      :label-flavor="labelFlavor"
      :type="type"
      name="numberRange"
      @change="onChange"
      @input="onInput">
    </number-range>
  `
});

export const TextArea = () => ({
  components: { VueTextArea, FlexRow, FlexColumn },
  methods: actionsData,
  props: {
    flavor: {
      default: text("Flavor", "LightBlue")
    },
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
      default: number("Max Length", "")
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
      default: text("Label WebText", "This is a sample input")
    },
    disabled: {
      default: boolean("Disabled", false)
    }
  },
  template: `
    <flex-row>
        <flex-column>
            <vue-text-area
                :flavor="flavor"
                :readonly="readonly"
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
                @focus="onFocus"
                @change="onChange"
                :autofocus="autofocus"
            ></vue-text-area>
        </flex-column>
    </flex-row>
    `
});
