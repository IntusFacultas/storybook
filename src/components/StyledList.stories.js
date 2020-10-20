import { withA11y } from "@storybook/addon-a11y";
import { withKnobs, number, boolean, text } from "@storybook/addon-knobs";
import {
  List,
  OrderedList,
  ListItem,
} from "Components/components/StyledHTML/List/src/StyledList.vue";
import markdown from "Components/components/StyledHTML/ListUsage.md";

import { TextContent } from "Components/components/StyledHTML/Typography/src/Typography.vue";
import { Theme } from "Components/components/DesignSystem/theme.js";
let formattedTheme = [];
Object.keys(Theme).forEach((key) =>
  formattedTheme.push({ text: key, value: Theme[key].background.color })
);

export default {
  title: "IntusFacultas HTML/List", // Folder/ is unnecessary but you can group stories by a folder by doing so
  decorators: [withA11y, withKnobs],
  parameters: {
    notes: {
      markdown,
    },
  },
  excludeStories: /.*Data$/,
};

export const ListLevelStyling = () => ({
  components: { List, ListItem, TextContent },
  data() {
    return {
      formattedTheme,
    };
  },
  props: {
    dark: {
      default: boolean("Dark Mode", false),
    },
    size: {
      default: number("Font Size", 14),
    },
    flavor: {
      default: text("Flavor", ""),
    },
  },
  template: `
    <div>
      <list :size="size" :dark="dark" :flavor="flavor">
          <list-item>List Item 1</list-item>
          <list-item>List Item 2</list-item>
          <list-item>List Item 3</list-item>
      </list>
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

export const ListItemLevelStyling = () => ({
  components: { List, ListItem, TextContent },
  data() {
    return {
      formattedTheme,
    };
  },
  props: {
    dark: {
      default: boolean("Dark Mode for First Element", false),
    },
    unstyled: {
      default: boolean("Unstyled List", false),
    },
    size: {
      default: number("Font Size for First Element", 14),
    },
    flavor: {
      default: text("Flavor", ""),
    },
  },
  template: `
    <div>
      <list :unstyled="unstyled">
          <list-item :size="size" :dark="dark" :flavor="flavor">List Item 1</list-item>
          <list-item >List Item 2</list-item>
          <list-item>List Item 3</list-item>
      </list>
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

export const OrderedListStyling = () => ({
  components: { OrderedList, ListItem, TextContent },
  data() {
    return {
      formattedTheme,
    };
  },
  props: {
    dark: {
      default: boolean("Dark Mode for First Element", false),
    },
    size: {
      default: number("Font Size for First Element", 14),
    },
    flavor: {
      default: text("Flavor", ""),
    },
  },
  template: `
    <div>
      <ordered-list>
          <list-item value="0" :size="size" :dark="dark" :flavor="flavor">List Item 1</list-item>
          <list-item value="1">List Item 2</list-item>
          <list-item value="2">List Item 3</list-item>
      </ordered-list>
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
