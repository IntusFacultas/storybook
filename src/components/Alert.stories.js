import { withA11y } from "@storybook/addon-a11y";
import { withKnobs, text, boolean } from "@storybook/addon-knobs";
import { VueStaticAlert } from "Components/components/Alert/src/StaticAlert.vue";
import markdown from "Components/components/Alert/Usage.md";

import { TextContent } from "Components/components/StyledHTML/Typography/src/Typography.vue";
import {
  List,
  ListItem,
} from "Components/components/StyledHTML/List/src/StyledList.vue";
import { AlertTheme as Theme } from "Components/components/DesignSystem/theme.js";
let formattedTheme = [];
Object.keys(Theme).forEach((key) =>
  formattedTheme.push({ text: key, value: Theme[key].background.color })
);

export default {
  title: "IntusFacultas HTML/Alert", // Folder/ is unnecessary but you can group stories by a folder by doing so
  decorators: [withA11y, withKnobs],
  parameters: {
    notes: {
      markdown,
    },
  },
  excludeStories: /.*Data$/,
};

export const Alert = () => ({
  components: { VueStaticAlert, TextContent, List, ListItem },
  data() {
    return {
      formattedTheme,
    };
  },
  props: {
    flavor: {
      default: text("Flavor", ""),
    },
    animated: {
      default: boolean("Animated", false),
    },
    closeable: {
      default: boolean("Closeable", false),
    },
  },
  template: `
        <div>
          <vue-static-alert :flavor="flavor" :animated="animated" :closeable="closeable"><span>Test</span></vue-static-alert>
          <hr>
          <text-content :size="16">Design system information can be found <a href="/?path=/story/design-system--colors">here</a></text-content><br>
          <text-content :size="16">Available Flavors</text-content>
          <list>
            <list-item v-for="themeFlavor in formattedTheme" :key="themeFlavor.text" :flavor="themeFlavor.text" :style="{color: themeFlavor.value}">
              {{themeFlavor.text}}
            </list-item>
          </list>
        </div>
    `,
});
