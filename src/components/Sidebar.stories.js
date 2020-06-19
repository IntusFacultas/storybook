import {
  Sidebar,
  SidebarOffsetContent,
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
  number,
} from "@storybook/addon-knobs";
import {
  TextContent,
  PageTitle,
} from "Components/components/StyledHTML/Typography/src/Typography.vue";
import { VueInput } from "Components/components/StyledHTML/Input/src/Input.vue";
import markdown from "Components/components/Navbars/SidebarUsage.md";
import rawmarkdown from "Components/components/Navbars/RawSidebarUsage.md";

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
  title: "Navigation/Sidebar",
  decorators: [withA11y, withKnobs],
  parameters: {
    notes: {
      Sidebar: markdown,
      "Raw Sidebar": rawmarkdown,
    },
  },
  // Our exports that end in "Data" are not stories.
  excludeStories: /.*Data$/,
};

export const ConfigurableSidebar = () => ({
  components: {
    Sidebar,
    FlexRow,
    SidebarOffsetContent,
    TextContent,
    PageTitle,
    List,
    ListItem,
  },
  data() {
    return {
      formattedTheme,
    };
  },
  props: {
    flavor: {
      default: text("Sidebar Flavor", ""),
    },
    width: {
      default: number("Sidebar width", 200),
    },
    height: {
      default: object("Sidebar height", null),
    },

    breakpoint: {
      default: number("Sidebar collapse breakpoint", 576),
    },
    items: {
      default: object("Sidebar Items", [
        {
          type: "item",
          text: "Link 1",
          icon: "",
          url: "/url/to/place",
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
              url: "/url/to/place",
            },
            {
              type: "item",
              text: "Link 10",
              icon: "",
              url: "/url/to/place",
            },
          ],
        },
        {
          type: "item",
          text: "Link 2",
          icon: "",
          url: "/url/to/place",
        },
        {
          type: "item",
          text: "Link 3",
          icon: "",
          url: "/url/to/place",
        },
        {
          type: "item",
          text: "Link 4",
          icon: "",
          url: "/url/to/place",
        },
        {
          type: "item",
          text: "Link 5",
          icon: "",
          url: "/url/to/place",
        },
        {
          type: "item",
          text: "Link 6",
          icon: "",
          url: "/url/to/place",
        },
        {
          type: "item",
          text: "Link 7",
          icon: "",
          url: "/url/to/place",
        },
        {
          type: "item",
          text: "Link 8",
          icon: "",
          url: "/url/to/place",
        },
      ]),
    },
    sidebarTitle: {
      default: text("Sidebar Title", "Sidebar"),
    },
    topOffset: {
      default: text("Top Offset", 0),
    },
    bottomOffset: {
      default: text("Bottom Offset", 0),
    },
  },
  template: `
        <div>
            <sidebar
                :flavor="flavor"
                :sidebar-title="sidebarTitle"
                :top-offset="topOffset"
                :bottom-offset="bottomOffset"
                :items="items"
                :height="height"
                :width="width"
                :breakpoint="breakpoint">
            </sidebar>
            <sidebar-offset-content
                :width="width"
                :breakpoint="breakpoint"><h2>Content!</h2>
                <hr>
                <text-content :size="16">Design system information can be found <a href="/?path=/story/design-system--colors">here</a></text-content><br>
                <text-content :size="16">Available Flavors</text-content>
                <list>
                <list-item v-for="themeFlavor in formattedTheme" :key="themeFlavor.text" :style="{color: themeFlavor.value}">
                    {{themeFlavor.text}}
                </list-item>
                </list>  
              </sidebar-offset-content>
        </div>
    `,
});

export const RawInputSidebar = () => ({
  components: {
    RawSidebar,
    FlexRow,
    SidebarOffsetContent,
    TextContent,
    PageTitle,
    VueInput,
    List,
    ListItem,
  },
  data() {
    return {
      formattedTheme,
    };
  },
  props: {
    flavor: {
      default: text("Sidebar Flavor", ""),
    },
    sidebarTitle: {
      default: text("Sidebar Title", "Sidebar"),
    },
    topOffset: {
      default: text("Top Offset", 0),
    },
    bottomOffset: {
      default: text("Bottom Offset", 0),
    },
    height: {
      default: object("Sidebar height", null),
    },
    width: {
      default: number("Sidebar width", 200),
    },
    breakpoint: {
      default: number("Sidebar collapse breakpoint", 576),
    },
  },
  template: `
    <div>
        <raw-sidebar
            :flavor="flavor"
            :sidebar-title="sidebarTitle"
            :top-offset="topOffset"
            :bottom-offset="bottomOffset"
            :width="width"
            :height="height"
            :breakpoint="breakpoint"
        >
            <page-title>This is raw HTMl piped into my sidebar</page-title>
            <vue-input name="sampleInput" label="This is a label in my sidebar" type="text-content"></vue-input>
        </raw-sidebar>
        <sidebar-offset-content :width="width" :breakpoint="breakpoint"><h2>Content!</h2>
        <hr>
        <text-content :size="16">Design system information can be found <a href="/?path=/story/design-system--colors">here</a></text-content><br>
        <text-content :size="16">Available Flavors</text-content>
        <list>
        <list-item v-for="themeFlavor in formattedTheme" :key="themeFlavor.text" :style="{color: themeFlavor.value}">
            {{themeFlavor.text}}
        </list-item>
        </list>
        </sidebar-offset-content>
    </div>
    `,
});
