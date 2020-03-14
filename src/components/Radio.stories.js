import { withA11y } from "@storybook/addon-a11y";
import {
  withKnobs,
  text,
  object,
  number,
  boolean
} from "@storybook/addon-knobs";
import { Radio } from "Components/components/StyledHTML/Radio/src/Radio.vue";
import markdown from "Components/components/StyledHTML/RadioUsage.md";

export default {
  title: "NASIC HTML/Radio", // Folder/ is unnecessary but you can group stories by a folder by doing so
  decorators: [withA11y, withKnobs],
  parameters: {
    notes: {
      markdown
    }
  },
  excludeStories: /.*Data$/
};

export const RadioButton = () => ({
  components: { Radio },
  data() {
    return {
      selected: "radio2"
    };
  },
  props: {
    inputValue: {
      default: object("Value 1", "1")
    },
    flavor: {
      default: text("Flavor", "")
    },
    size: {
      default: number("Size", 14)
    },
    dark: {
      default: boolean("Dark", false)
    },
    bold: {
      default: boolean("Bold", false)
    }
  },
  template: `
        <div>
            <radio v-model="selected" label="Radio 1" input-value="radio1" :flavor="flavor" :size="size" :bold="bold" :dark="dark"></radio>
            <radio v-model="selected" label="Radio 2" input-value="radio2" :flavor="flavor" :size="size" :bold="bold" :dark="dark"></radio><br>
            Selected: {{selected}}
        </div>
    `
});
