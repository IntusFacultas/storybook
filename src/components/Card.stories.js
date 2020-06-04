import { withA11y } from "@storybook/addon-a11y";
import { withKnobs, text, boolean } from "@storybook/addon-knobs";
import { Card } from "Components/components/StyledHTML/Card/src/Card.vue";
import {
  SubSectionTitle,
  TextContent,
  SmallText,
} from "Components/components/StyledHTML/Typography/src/Typography.vue";
import markdown from "Components/components/StyledHTML/CardUsage.md";

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
  title: "IntusFacultas HTML/Card",
  decorators: [withA11y, withKnobs],
  parameters: {
    notes: {
      markdown,
    },
  },
  excludeStories: /.*Data$/,
};

export const ConfigurableCard = () => ({
  components: { Card, SubSectionTitle, TextContent, SmallText, List, ListItem },
  data() {
    return {
      formattedTheme,
    };
  },
  props: {
    headerFlavor: {
      default: text("Header Flavor", ""),
    },
    bodyFlavor: {
      default: text("Body Flavor", ""),
    },
    footerFlavor: {
      default: text("Footer Flavor", ""),
    },
    bordered: {
      default: boolean("Bordered", false),
    },
    header: {
      default: boolean("Header", true),
    },
    footer: {
      default: boolean("Footer", true),
    },
  },
  template: `
    <div>
      <card 
          :header-flavor="headerFlavor"
          :footer-flavor="footerFlavor"
          :body-flavor="bodyFlavor"
          :bordered="bordered"
          :header="header"
          :footer="footer">
          <template v-slot:header><b><text-content :size="16">Test Header</text-content></b></template>
          <template v-slot:body><text-content>Sample body</text-content></template>
          <template v-slot:footer><small-text>This is a footer</small-text></template>
      </card>
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
