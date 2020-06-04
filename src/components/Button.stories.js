import { withA11y } from "@storybook/addon-a11y";
import { NButton } from "Components/components/StyledHTML/Button/src/Button.vue";
import { TextContent } from "Components/components/StyledHTML/Typography/src/Typography.vue";
import { ThemeProvider } from "vue-styled-components";
import { withKnobs, object, text, boolean } from "@storybook/addon-knobs";
import Theme from "Components/components/DesignSystem/theme.js";
import {
  FlexRow,
  FlexColumn,
} from "Components/components/Layout/src/Layout.vue";
import markdown from "Components/components/StyledHTML/ButtonUsage.md";

import {
  List,
  ListItem,
} from "Components/components/StyledHTML/List/src/StyledList.vue";
let formattedTheme = [];
Object.keys(Theme).forEach((key) =>
  formattedTheme.push({ text: key, value: Theme[key].background.color })
);

export default {
  title: "IntusFacultas HTML/Button", // Folder/ is unnecessary but you can group stories by a folder by doing so
  decorators: [withA11y, withKnobs],
  parameters: {
    notes: {
      markdown,
    },
  },
  excludeStories: /.*Data$/,
};

export const Button = () => ({
  components: {
    NButton,
    FlexRow,
    FlexColumn,
    "theme-provider": ThemeProvider,
    TextContent,
    List,
    ListItem,
  },
  data: function() {
    return {
      theme: Theme,
      formattedTheme,
    };
  },
  props: {
    large: {
      default: boolean("Large Button", false),
    },
    small: {
      default: boolean("Small Button", false),
    },
    flavor: {
      default: text("Flavor", Object.keys(Theme)[0]),
    },
    disabled: {
      default: boolean("Disable Button", false),
    },
    block: {
      default: boolean("Block Button", false),
    },
  },
  template: `
        <div>
            <flex-row>
                <theme-provider :theme="theme" style="width: 100%">
                    <n-button
                        :flavor="flavor"
                        :disabled="disabled"
                        :small="small"
                        :large="large"
                        :block="block">Themed Button
                    </n-button>
                </theme-provider>
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
