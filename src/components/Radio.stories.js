import { withA11y } from "@storybook/addon-a11y";
import {
  withKnobs,
  text,
  object,
  number,
  boolean,
} from "@storybook/addon-knobs";
import { Radio } from "Components/components/StyledHTML/Radio/src/Radio.vue";
import markdown from "Components/components/StyledHTML/RadioUsage.md";

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

import {
  specs,
  describe,
  it,
  beforeEach,
} from "storybook-addon-specifications";
import expect from "expect";
import { shallowMount } from "@vue/test-utils";
import jest from "jest-mock";
window.jest = jest;

export default {
  title: "IntusFacultas HTML/Radio", // Folder/ is unnecessary but you can group stories by a folder by doing so
  decorators: [withA11y, withKnobs],
  parameters: {
    notes: {
      markdown,
    },
  },
  excludeStories: /.*Data$/,
};

export const RadioButton = () => ({
  components: { Radio, TextContent, List, ListItem },
  data() {
    return {
      selected: "radio2",
      formattedTheme,
    };
  },
  specs: specs(() =>
    describe("Radio", () => {
      let vm;
      let wrapper;
      beforeEach(() => {
        wrapper = shallowMount(Radio, {
          propsData: {
            inputValue: "radio1",
            label: "Label",
          },
        });
        vm = wrapper.vm;
      });
      it("emits value when not disabled", () => {
        vm.$emit = jest.fn();
        vm.emitValue();
        expect(vm.$emit).toHaveBeenCalledWith("input", vm.inputValue);
      });
      it("doesn't emit value when disabled", () => {
        vm.disabled = true;
        vm.$emit = jest.fn();
        vm.emitValue();
        expect(vm.$emit).toHaveBeenCalledTimes(0);
      });
    })
  ),
  props: {
    inputValue: {
      default: object("Value 1", "1"),
    },
    flavor: {
      default: text("Flavor", ""),
    },
    disabled: {
      default: boolean("Disabled", false),
    },
    size: {
      default: number("Size", 14),
    },
    dark: {
      default: boolean("Dark", false),
    },
    bold: {
      default: boolean("Bold", false),
    },
  },
  template: `
        <div>
            <radio v-model="selected" :disabled="disabled" label="Radio 1" input-value="radio1" :flavor="flavor" :size="size" :bold="bold" :dark="dark"></radio>
            <radio v-model="selected" :disabled="disabled" label="Radio 2" input-value="radio2" :flavor="flavor" :size="size" :bold="bold" :dark="dark"></radio><br>
            <text-content>Selected: {{selected}}</text-content>
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
