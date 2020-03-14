import ClassificationBanner from "Components/components/ClassificationBanner/src/ClassificationBanner.vue";
import { withA11y } from "@storybook/addon-a11y";
import markdown from "Components/components/ClassificationBanner/USAGE.md";

export default {
  title: "Navbars/Classification Banner",
  decorators: [withA11y],
  parameters: {
    notes: {
      "Mini Navbar": markdown
    }
  },
  // Our exports that end in "Data" are not stories.
  excludeStories: /.*Data$/
};

// Mini Navbar
export const ClassificationBannerNav = () => ({
  components: { ClassificationBanner },
  template: `
    <classification-banner>
      <b>
        DYNAMIC CONTENT - May be classified up to TOP SECRET//HCS-P/SI-G/TK//ORCON/NOFORN/FISA
      </b>
    </classification-banner>
  `
});
