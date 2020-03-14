import { withA11y } from "@storybook/addon-a11y";
import {
  withKnobs,
  array,
  text,
  boolean,
  object,
  number
} from "@storybook/addon-knobs";
import MiniNavbar from "Components/components/Navbars/MiniNavbar/src/MiniNavbar.vue";
import markdown from "Components/components/Navbars/MiniNavbarUsage.md";

export default {
  title: "Navbars/Mini-Navbar",
  decorators: [withA11y, withKnobs],
  parameters: {
    notes: {
      markdown
    }
  },
  // Our exports that end in "Data" are not stories.
  excludeStories: /.*Data$/
};

export const ConfigurableMiniNavbar = () => ({
  components: { MiniNavbar },
  props: {
    brandUrl: {
      default: text("Brand URL", "#")
    },
    linkSearchUrl: {
      default: text("LINK Search URL", "#")
    },
    appsSearchUrl: {
      default: text("Apps Search URL", "#")
    }
  },
  template: `
        <mini-navbar :brand-url="brandUrl" :link-search-url="linkSearchUrl" :apps-search-url="appsSearchUrl"></mini-navbar>
    `
});
