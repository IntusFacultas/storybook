import { withA11y } from "@storybook/addon-a11y";
import { withKnobs, text } from "@storybook/addon-knobs";
import { Badge } from "Components/components/StyledHTML/Badge/src/Badge.vue";
import markdown from "Components/components/StyledHTML/BadgeUsage.md";

export default {
  title: "NASIC HTML/Badge", // Folder/ is unnecessary but you can group stories by a folder by doing so
  decorators: [withA11y, withKnobs],
  parameters: {
    notes: {
      markdown
    }
  },
  excludeStories: /.*Data$/
};

export const ConfigurableBadge = () => ({
  components: { Badge },
  props: {
    flavor: {
      default: text("Flavor", "")
    }
  },
  template: `
        <badge :flavor="flavor">Badge</badge>
    `
});
