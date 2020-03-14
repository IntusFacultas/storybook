import { withA11y } from "@storybook/addon-a11y";
import { withKnobs, text, boolean } from "@storybook/addon-knobs";
import { Card } from "Components/components/StyledHTML/Card/src/Card.vue";
import {
  SubSectionTitle,
  Text,
  NSmall
} from "Components/components/StyledHTML/Typography/src/Typography.vue";
import markdown from "Components/components/StyledHTML/CardUsage.md";

export default {
  title: "NASIC HTML/Card",
  decorators: [withA11y, withKnobs],
  parameters: {
    notes: {
      markdown
    }
  },
  excludeStories: /.*Data$/
};

export const ConfigurableCard = () => ({
  components: { Card, SubSectionTitle, Text, NSmall },
  props: {
    headerFlavor: {
      default: text("Header Flavor", "Primary")
    },
    bodyFlavor: {
      default: text("Body Flavor", "Primary")
    },
    footerFlavor: {
      default: text("Footer Flavor", "Primary")
    },
    bordered: {
      default: boolean("Bordered", false)
    },
    header: {
      default: boolean("Header", true)
    },
    footer: {
      default: boolean("Footer", true)
    }
  },
  template: `
        <card 
            :header-flavor="headerFlavor"
            :footer-flavor="footerFlavor"
            :body-flavor="bodyFlavor"
            :bordered="bordered"
            :header="header"
            :footer="footer">
            <template v-slot:header><b><n-text :size="16">Test Header</text></b></template>
            <template v-slot:body><text>Sample body</text></template>
            <template v-slot:footer><n-small>This is a footer</n-small></template>
        </card>
    `
});
