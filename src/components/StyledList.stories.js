import { withA11y } from "@storybook/addon-a11y";
import { withKnobs, number, boolean, text } from "@storybook/addon-knobs";
import {
  List,
  ListItem
} from "Components/components/StyledHTML/List/src/StyledList.vue";
import markdown from "Components/components/StyledHTML/ListUsage.md";

export default {
  title: "NASIC HTML/List", // Folder/ is unnecessary but you can group stories by a folder by doing so
  decorators: [withA11y, withKnobs],
  parameters: {
    notes: {
      markdown
    }
  },
  excludeStories: /.*Data$/
};

export const ULLevelStyling = () => ({
  components: { List, ListItem },
  props: {
    dark: {
      default: boolean("Dark Mode", false)
    },
    size: {
      default: number("Font Size", 14)
    },
    flavor: {
      default: text("Flavor", "")
    }
  },
  template: `
        <list :size="size" :dark="dark" :flavor="flavor">
            <list-item>List Item 1</list-item>
            <list-item>List Item 2</list-item>
            <list-item>List Item 3</list-item>
        </list>
    `
});

export const LiLevelStyling = () => ({
  components: { List, ListItem },
  props: {
    dark: {
      default: boolean("Dark Mode for First Element", false)
    },
    size: {
      default: number("Font Size for First Element", 14)
    },
    flavor: {
      default: text("Flavor", "")
    }
  },
  template: `
        <list>
            <list-item :size="size" :dark="dark" :flavor="flavor">List Item 1</list-item>
            <list-item>List Item 2</list-item>
            <list-item>List Item 3</list-item>
        </list>
    `
});
