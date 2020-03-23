import { withA11y } from "@storybook/addon-a11y";
import { withKnobs, object, text } from "@storybook/addon-knobs";
import { NiwsReviewer } from "Components/components/NIWSReviewer/niwsReviewer.vue";
import { NiwsStackedReviewer } from "Components/components/NIWSReviewer/niwsStackedReviewer.vue";
import markdown from "Components/components/NIWSReviewer/USAGE.md";

export default {
  title: "NIWS/Reviewing Panel",
  decorators: [withA11y, withKnobs],
  parameters: {
    notes: { markdown }
  },
  // Our exports that end in "Data" are not stories.
  excludeStories: /.*Data$/
};

const propData = {
  transitions: {
    default: object("NIWS Transitions", {})
  },
  instanceId: {
    default: text("Instance ID", "")
  },
  workflowUrl: {
    default: text("Workflow URL", "")
  },
  workflowId: {
    default: text("Workflow ID", "")
  },
  callback: {
    default: object("Callback Function", function(data) {
      console.log(data);
    })
  }
};

// export const HorizontalReviewer = () => ({
//     components: { NiwsReviewer },
//     props: propData,
//     template: `
//         <niws-reviewer></niws-reviewer>
//     `
// });

// export const StackedReviewer = () => ({
//     components: { NiwsStackedReviewer },
//     props: propData,
//     template: `
//         <niws-stacked-reviewer></niws-stacked-reviewer>
//     `
// })
