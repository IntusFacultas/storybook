import { withA11y } from "@storybook/addon-a11y";
import { withKnobs, text, boolean, object } from "@storybook/addon-knobs";
import { action } from "@storybook/addon-actions";
import { MenuMultiSelect } from "Components/components/MenuMultiSelect/src/MenuMultiSelect.vue";
import markdown from "Components/components/MenuMultiSelect/USAGE.md";

export default {
  title: "Menu Multiselect", // Folder/ is unnecessary but you can group stories by a folder by doing so
  decorators: [withA11y, withKnobs],
  parameters: {
    notes: {
      markdown,
    },
  },
  excludeStories: /.*Data$/,
};

const actionsData = {
  onChange: action("@change"),
};

export const MultiselectableMenu = () => ({
  components: { MenuMultiSelect },
  methods: actionsData,
  props: {
    flavor: {
      default: text("Flavor", ""),
    },
    height: {
      default: text("Height", "100px"),
    },
    items: {
      default: object("Items", [
        {
          display: "Item 1",
          value: "1",
        },
        {
          display: "Item 2",
          value: "2",
        },
        {
          display: "Item 3",
          value: "3",
        },
        {
          display: "Item 4",
          value: "4",
        },
      ]),
    },
  },
  template: `
        <menu-multi-select @change="onChange" :height="height" :items="items" :flavor="flavor"></menu-multi-select>
    `,
});
