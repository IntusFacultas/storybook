import { withA11y } from "@storybook/addon-a11y";
import {
  withKnobs,
  text,
  object,
  number,
  boolean,
} from "@storybook/addon-knobs";
import { Checkbox } from "Components/components/StyledHTML/Checkbox/src/Checkbox.vue";
import markdown from "Components/components/StyledHTML/CheckboxUsage.md";

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
  title: "IntusFacultas HTML/Checkbox", // Folder/ is unnecessary but you can group stories by a folder by doing so
  decorators: [withA11y, withKnobs],
  parameters: {
    notes: {
      markdown,
    },
  },
  excludeStories: /.*Data$/,
};

export const CheckboxInput = () => ({
  components: { Checkbox, TextContent, List, ListItem },
  data() {
    return {
      selected: false,
      formattedTheme,
    };
  },
  props: {
    labelFlavor: {
      default: text("Label Flavor", ""),
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
            <checkbox v-model="selected" :label-flavor="labelFlavor" :disabled="disabled" label="Radio 1" :flavor="flavor" :size="size" :bold="bold" :dark="dark"></checkbox>
            <hr>
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
