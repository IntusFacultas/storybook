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
  Navbar,
  NavbarContent,
  VueNavbarDropdown,
  NavbarItem,
} from "Components/components/Navbars/Navbar/src/Navbar.vue";
import RawNavbar from "Components/components/Navbars/RawNavbar/src/RawNavbar.vue";
import rawmarkdown from "Components/components/Navbars/RawNavbarUsage.md";
import markdown from "Components/components/Navbars/NavbarUsage.md";

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
  title: "Navbars/Navbar",
  decorators: [withA11y, withKnobs],
  parameters: {
    notes: {
      Navbar: markdown,
      "Raw Navbar": rawmarkdown,
    },
  },
  // Our exports that end in "Data" are not stories.
  excludeStories: /.*Data$/,
};

export const RawInputNavbar = () => ({
  components: {
    RawNavbar,
    NavbarContent,
    VueNavbarDropdown,
    NavbarItem,
    TextContent,
    List,
    ListItem,
  },
  data() {
    return {
      navbar: { collapsed: false },
      formattedTheme,
      items: [
        {
          type: "item",
          text: "Dropdown Item 1",
          url: "#",
          disabled: false,
        },
        {
          type: "item",
          text: "Dropdown Item 2",
          url: "#",
          disabled: false,
        },
      ],
    };
  },
  mounted() {
    let self = this;
    this.$nextTick(function() {
      self.$forceUpdate();
      self.navbar = self.$refs.navbar;
    });
  },
  props: {
    fixed: {
      default: boolean("Fixed to Top", false),
    },
    flavor: {
      default: text("Flavor", ""),
    },
    title: {
      default: object("Title", {
        html: "",
        text: "Brand",
        url: "#",
      }),
    },
  },
  template: `
        <div>
        <raw-navbar
            :title="title"
            :fixed="fixed"
            :flavor="flavor"
            ref="navbar"
            >
                <navbar-content>
                    <navbar-item>
                    <vue-navbar-dropdown
                      :parent="navbar"
                      icon=""
                      text="Dropdown" 
                      :items="items"
                      :flavor="flavor"
                    ></vue-navbar-dropdown>
                    </navbar-item>
                    <navbar-item>
                        <a href="#">Link 1</a>
                    </navbar-item>
                    <navbar-item>
                    <a href="#">Link 2</a>
                    </navbar-item>
                    <navbar-item>
                    <a href="#">Link 3</a>
                    </navbar-item>
                    <navbar-item>
                    <a href="#">Link 4</a>
                    </navbar-item>
                </navbar-content>
                <navbar-content>
                    <navbar-item>
                        <input>
                    </navbar-item>
                </navbar-content>
            </raw-navbar>
            <h1>Content! Stuff! Excitement!</h1>
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

export const ConfigurableNavbar = () => ({
  components: { Navbar, TextContent, List, ListItem },
  data() {
    return {
      formattedTheme,
    };
  },
  props: {
    fixed: {
      default: boolean("Fixed to Top", false),
    },
    flavor: {
      default: text("Flavor", ""),
    },

    title: {
      default: object("Title", {
        html: "",
        text: "Brand",
        url: "#",
      }),
    },
    leftItems: {
      default: object("Left Items", [
        {
          type: "dropdown",
          html: "",
          text: "Really Long Dropdown",
          items: [
            {
              type: "item",
              html: "",
              text: "Dropdown Link",
              url: "#",
            },
          ],
        },
        {
          type: "item",
          html: "",
          text: "Navbar Link",
          url: "#",
        },
        {
          type: "item",
          html: "",
          text: "Navbar Link",
          url: "#",
        },
        {
          type: "item",
          html: "",
          text: "Navbar Link",
          url: "#",
        },
        {
          type: "item",
          html: "",
          text: "Navbar Link",
          url: "#",
        },
      ]),
    },
    centerItems: {
      default: object("Center Items", []),
    },
    rightItems: {
      default: object("Right Items", []),
    },
  },
  template: `
        <div>
          <navbar
            :title="title"
            :fixed="fixed"
            :flavor="flavor"
            :left-items="leftItems"
            :right-items="rightItems"
            :center-items="centerItems">
          </navbar>
            <h1>Content! Stuff! Excitement!</h1>
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
