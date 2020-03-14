import { withA11y } from "@storybook/addon-a11y";
import { withKnobs, text, boolean } from "@storybook/addon-knobs";
import { VueStaticAlert } from "Components/components/Alert/src/StaticAlert.vue";
import markdown from "Components/components/Alert/Usage.md";

export default {
  title: "NASIC HTML/Alert", // Folder/ is unnecessary but you can group stories by a folder by doing so
  decorators: [withA11y, withKnobs],
  parameters: {
    notes: {
      markdown
    }
  },
  excludeStories: /.*Data$/
};

export const Alert = () => ({
  components: { VueStaticAlert },
  props: {
    flavor: {
      default: text("Flavor", "")
    },
    animated: {
      default: boolean("Animated", false)
    },
    closeable: {
      default: boolean("Closeable", false)
    }
  },
  template: `
        <vue-static-alert :flavor="flavor" :animated="animated" :closeable="closeable"><span>Test</span></vue-static-alert>
    `
});
