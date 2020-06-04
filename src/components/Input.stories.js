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
  array,
} from "@storybook/addon-knobs";
import {
  specs,
  describe,
  it,
  beforeEach,
} from "storybook-addon-specifications";
import expect from "expect";
import { shallowMount } from "@vue/test-utils";
import {
  FlexRow,
  FlexColumn,
} from "Components/components/Layout/src/Layout.vue";
import markdown from "Components/components/StyledHTML/InputUsage.md";
import textareamarkdown from "Components/components/StyledHTML/TextAreaUsage.md";
import numberrangemarkdown from "Components/components/StyledHTML/NumberRangeUsage.md";
import jest from "jest-mock";
window.jest = jest;

import { TextContent } from "Components/components/StyledHTML/Typography/src/Typography.vue";
import {
  List,
  ListItem,
} from "Components/components/StyledHTML/List/src/StyledList.vue";
import { Theme } from "Components/components/DesignSystem/theme.js";
let formattedTheme = [];
Object.keys(Theme).forEach((key) =>
  formattedTheme.push({ text: key, value: Theme[key].background.color })
);

export default {
  title: "IntusFacultas HTML/Input",
  decorators: [withA11y, withKnobs],
  parameters: {
    notes: {
      Input: markdown,
      TextArea: textareamarkdown,
      "Number Range": numberrangemarkdown,
    },
  },
  excludeStories: /.*Data$/,
};

const actionsData = {
  onInput: action("@input"),
  onFocus: action("@focus"),
  onChange: action("@change"),
};

export const Input = () => ({
  components: { VueInput, FlexRow, FlexColumn, TextContent, List, ListItem },
  methods: actionsData,
  specs: specs(() =>
    describe("VueInput", () => {
      let vm;
      let wrapper;
      beforeEach(() => {
        wrapper = shallowMount(VueInput, {
          propsData: {
            name: "TestVueInput",
            inputType: "text",
            label: "label text",
          },
        });
        vm = wrapper.vm;
      });
      it("emits undefined input", () => {
        vm.$emit = jest.fn();
        vm.onInput();
        expect(vm.$emit).toHaveBeenCalledWith("input", undefined);
      });
      it("emits focus", () => {
        vm.$emit = jest.fn();
        vm.onFocus();
        expect(vm.$emit).toHaveBeenCalledWith("focus");
      });
      it("emits 'testtext' input", () => {
        vm.$emit = jest.fn();
        vm.internalValue = "testtext";
        vm.onInput();
        expect(vm.$emit).toHaveBeenCalledWith("input", vm.internalValue);
      });
    })
  ),
  data() {
    return {
      formattedTheme,
    };
  },
  props: {
    flavor: {
      default: text("Flavor", "LightBlue"),
    },
    readonly: {
      default: boolean("Readonly", false),
    },
    placeholder: {
      default: text("Placeholder", ""),
    },
    pattern: {
      default: text("Pattern", ""),
    },
    multiple: {
      default: boolean("Multiple", false),
    },
    min: {
      default: text("Min", ""),
    },
    max: {
      default: text("Max", ""),
    },
    name: {
      default: text("Name", "inputName"),
    },
    inputType: {
      default: text("Type", "text"),
    },
    required: {
      default: boolean("Required", false),
    },
    disabled: {
      default: boolean("Disabled", false),
    },
    labelFlavor: {
      default: text("Label Flavor", ""),
    },
    labelDark: {
      default: boolean("Label Dark", false),
    },
    label: {
      default: text("Label text", "This is a sample input"),
    },
    autofocus: {
      default: boolean("Autofocus", false),
    },
    autocomplete: {
      default: text("Autocomplete", "off"),
    },
  },
  template: `
    <div>
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
      <hr>
      <text-content :size="16">Design system information can be found <a href="/?path=/story/design-system--colors">here</a></text-content><br>
      <text-content :size="16">Available Flavors</text-content>
      <list>
      <list-item v-for="themeFlavor in formattedTheme" :key="themeFlavor.text" :style="{color: themeFlavor.value}">
          {{themeFlavor.text}}
      </list-item>
      </list>
    </div>
    `,
});

export const BasicNumberRange = () => ({
  components: { NumberRange, FlexRow, FlexColumn, TextContent, List, ListItem },
  data() {
    return {
      formattedTheme,
      value: {
        lowerValue: 0,
        upperValue: 100,
      },
    };
  },
  methods: {
    onInput: action("@input"),
    onChange: action("@change"),
  },
  props: {
    flavor: {
      default: text("Flavor", "Primary"),
    },
    min: {
      default: number("Minimum", 0),
    },
    max: {
      default: number("Maximum", 100),
    },
    steps: {
      default: array("Steps", [2]),
    },
    type: {
      default: text("Type", "range"),
    },
    label: {
      default: text("Label", "Number Range"),
    },
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
      <hr>
      <text-content :size="16">Design system information can be found <a href="/?path=/story/design-system--colors">here</a></text-content><br>
      <text-content :size="16">Available Flavors</text-content>
      <list>
      <list-item v-for="themeFlavor in formattedTheme" :key="themeFlavor.text" :style="{color: themeFlavor.value}">
          {{themeFlavor.text}}
      </list-item>
      </list>
    </div>
  `,
});

export const DiscreteNumberRange = () => ({
  components: { NumberRange, FlexRow, FlexColumn, TextContent, List, ListItem },
  methods: {
    onInput: action("@input"),
    onChange: action("@change"),
  },
  data() {
    return {
      formattedTheme,
    };
  },
  props: {
    min: {
      default: number("Minimum", 0),
    },
    max: {
      default: number("Maximum", 100),
    },
    steps: {
      default: array("Steps", [0, 2, 15, 20, 25, 60, 100]),
    },
    type: {
      default: text("Type", "range"),
    },
    label: {
      default: text("Label", "Number Range"),
    },
    labelFlavor: {
      default: text("Label Flavor", ""),
    },
  },
  template: `
    <div>
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
      <hr>
      <text-content :size="16">Design system information can be found <a href="/?path=/story/design-system--colors">here</a></text-content><br>
      <text-content :size="16">Available Flavors</text-content>
      <list>
      <list-item v-for="themeFlavor in formattedTheme" :key="themeFlavor.text" :style="{color: themeFlavor.value}">
          {{themeFlavor.text}}
      </list-item>
      </list>
    </div>

  `,
});

export const TextArea = () => ({
  components: { VueTextArea, FlexRow, FlexColumn, TextContent, List, ListItem },
  methods: actionsData,
  data() {
    return {
      formattedTheme,
    };
  },
  props: {
    flavor: {
      default: text("Flavor", "LightBlue"),
    },
    autofocus: {
      default: boolean("Autofocus", false),
    },
    readonly: {
      default: boolean("Read only", false),
    },
    placeholder: {
      default: text("Placeholder", ""),
    },
    maxlength: {
      default: number("Max Length", ""),
    },
    cols: {
      default: number("Cols", ""),
    },
    rows: {
      default: number("Rows", ""),
    },
    name: {
      default: text("Name", "textArea"),
    },
    required: {
      default: boolean("Required", false),
    },
    labelFlavor: {
      default: text("Label Flavor", ""),
    },
    labelDark: {
      default: boolean("Label Dark", false),
    },
    label: {
      default: text("Label text", "This is a sample input"),
    },
    disabled: {
      default: boolean("Disabled", false),
    },
  },
  template: `
    <div>
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
      <hr>
      <text-content :size="16">Design system information can be found <a href="/?path=/story/design-system--colors">here</a></text-content><br>
      <text-content :size="16">Available Flavors</text-content>
      <list>
      <list-item v-for="themeFlavor in formattedTheme" :key="themeFlavor.text" :style="{color: themeFlavor.value}">
          {{themeFlavor.text}}
      </list-item>
      </list>
    </div>
    `,
});
