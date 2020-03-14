import {
  Sidebar,
  SidebarOffsetContent
} from "Components/components/Navbars/Sidebar/src/Sidebar.vue";
import { RawSidebar } from "Components/components/Navbars/RawSidebar/src/RawSidebar.vue";
import { FlexRow } from "Components/components/Layout/src/Layout.vue";
import { withA11y } from "@storybook/addon-a11y";
import {
  withKnobs,
  array,
  text,
  boolean,
  object,
  number
} from "@storybook/addon-knobs";
import {
  WebText,
  ProductTitle
} from "Components/components/StyledHTML/Typography/src/Typography.vue";
import { VueInput } from "Components/components/StyledHTML/Input/src/Input.vue";
import markdown from "Components/components/Navbars/SidebarUsage.md";
import rawmarkdown from "Components/components/Navbars/RawSidebarUsage.md";

export default {
  title: "Navbars/Sidebar",
  decorators: [withA11y, withKnobs],
  parameters: {
    notes: {
      Sidebar: markdown,
      "Raw Sidebar": rawmarkdown
    }
  },
  // Our exports that end in "Data" are not stories.
  excludeStories: /.*Data$/
};

export const ConfigurableSidebar = () => ({
  components: { Sidebar, FlexRow, SidebarOffsetContent, WebText, ProductTitle },
  props: {
    flavor: {
      default: text("Sidebar Flavor", "")
    },
    width: {
      default: number("Sidebar width", 200)
    },
    breakpoint: {
      default: number("Sidebar collapse breakpoint", 576)
    },
    items: {
      default: object("Sidebar Items", [
        {
          type: "item",
          text: "Link 1",
          icon: "",
          url: "/url/to/place"
        },
        {
          type: "dropdown",
          text: "Dropdown",
          icon: "",
          items: [
            {
              type: "item",
              text: "Link 98",
              icon: "",
              url: "/url/to/place"
            },
            {
              type: "item",
              text: "Link 10",
              icon: "",
              url: "/url/to/place"
            }
          ]
        },
        {
          type: "item",
          text: "Link 2",
          icon: "",
          url: "/url/to/place"
        },
        {
          type: "item",
          text: "Link 3",
          icon: "",
          url: "/url/to/place"
        },
        {
          type: "item",
          text: "Link 4",
          icon: "",
          url: "/url/to/place"
        },
        {
          type: "item",
          text: "Link 5",
          icon: "",
          url: "/url/to/place"
        },
        {
          type: "item",
          text: "Link 6",
          icon: "",
          url: "/url/to/place"
        },
        {
          type: "item",
          text: "Link 7",
          icon: "",
          url: "/url/to/place"
        },
        {
          type: "item",
          text: "Link 8",
          icon: "",
          url: "/url/to/place"
        }
      ])
    },
    sidebarTitle: {
      default: text("Sidebar Title", "Sidebar")
    },
    topOffset: {
      default: text("Top Offset", 0)
    },
    bottomOffset: {
      default: text("Bottom Offset", 0)
    }
  },
  template: `
        <div>
            <sidebar
                :flavor="flavor"
                :sidebar-title="sidebarTitle"
                :top-offset="topOffset"
                :bottom-offset="bottomOffset"
                :items="items"
                :width="width"
                :breakpoint="breakpoint">
            </sidebar>
            <sidebar-offset-content
                :width="width"
                :breakpoint="breakpoint"><h2>Content!</h2></sidebar-offset-content>
        </div>
    `
});

export const RawInputSidebar = () => ({
  components: {
    RawSidebar,
    FlexRow,
    SidebarOffsetContent,
    WebText,
    ProductTitle,
    VueInput
  },
  props: {
    flavor: {
      default: text("Sidebar Flavor", "")
    },
    sidebarTitle: {
      default: text("Sidebar Title", "Sidebar")
    },
    topOffset: {
      default: text("Top Offset", 0)
    },
    bottomOffset: {
      default: text("Bottom Offset", 0)
    },
    width: {
      default: number("Sidebar width", 200)
    },
    breakpoint: {
      default: number("Sidebar collapse breakpoint", 576)
    }
  },
  template: `
    <div >
        <raw-sidebar
            :flavor="flavor"
            :sidebar-title="sidebarTitle"
            :top-offset="topOffset"
            :bottom-offset="bottomOffset"
            :width="width"
            :breakpoint="breakpoint"
        >
            <product-title>This is raw HTMl piped into my sidebar</product-title>
            <vue-input name="sampleInput" label="This is a label in my sidebar" type="text"></vue-input>
        </raw-sidebar>
        <sidebar-offset-content :width="width" :breakpoint="breakpoint"><h2>Content!</h2></sidebar-offset-content>
    </div>
    `
});
