import { withA11y } from "@storybook/addon-a11y";
import { action } from "@storybook/addon-actions";
import {
  withKnobs,
  text,
  boolean,
  object,
  number,
} from "@storybook/addon-knobs";
import { Carousel } from "Components/components/Carousel/src/Carousel.vue";
import markdown from "Components/components/Carousel/Usage.md";

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
  title: "Carousel", // Folder/ is unnecessary but you can group stories by a folder by doing so
  decorators: [withA11y, withKnobs],
  parameters: {
    notes: {
      markdown,
    },
  },
  excludeStories: /.*Data$/,
};

const actionsData = {
  onSelect: action("@select"),
};
export const ImageCarousel = () => ({
  components: { Carousel, TextContent, List, ListItem },
  methods: actionsData,
  data() {
    return {
      formattedTheme,
    };
  },
  props: {
    images: {
      default: object("Images", [
        {
          src: "https://www.apimages.com/Images/Ap_Creative_Stock_Header.jpg",
          id: 1,
        },
        {
          src:
            "https://image.jimcdn.com/app/cms/image/transf/none/path/sa716b1500dd60f05/image/ic839a74ed6a8a054/version/1519833130/image.jpg",
          id: 2,
        },
        {
          src:
            "https://i.kym-cdn.com/photos/images/newsfeed/000/954/161/b3a.jpg",
          id: 3,
        },
      ]),
    },
    height: {
      default: text("Carousel Height", "300px"),
    },
    width: {
      default: text("Carousel Width", "500px"),
    },
    delay: {
      default: number("Delay in Automated Transitions in MS", 5000),
    },
    showControlBar: {
      default: boolean("Show Control Bar", true),
    },
    selectable: {
      default: boolean("Selectable", false),
    },
    automated: {
      default: boolean("Animated", false),
    },
  },
  template: `
        <div>
          <carousel
            style="margin-left: 200px"
            :height="height"
            @select="onSelect"
            :show-control-bar="showControlBar"
            :width="width"
            :delay="delay"
            :selectable="selectable"
            :images="images"
            :automated="automated">
          </carousel>
        </div>
    `,
});
