import { withA11y } from "@storybook/addon-a11y";
import { withKnobs, text } from "@storybook/addon-knobs";
import { Badge } from "Components/components/StyledHTML/Badge/src/Badge.vue";
import markdown from "Components/components/StyledHTML/BadgeUsage.md";

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
  title: "IntusFacultas HTML/Badge", // Folder/ is unnecessary but you can group stories by a folder by doing so
  decorators: [withA11y, withKnobs],
  parameters: {
    notes: {
      markdown,
    },
  },
  excludeStories: /.*Data$/,
};

export const ConfigurableBadge = () => ({
  components: { Badge, TextContent, List, ListItem },
  data() {
    return {
      formattedTheme,
    };
  },
  props: {
    flavor: {
      default: text("Flavor", ""),
    },
  },
  template: `
    <div>
    <badge :flavor="flavor">Badge</badge>
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
