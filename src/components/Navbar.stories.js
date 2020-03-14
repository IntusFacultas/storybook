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
  Navbar,
  NavbarContent,
  VueNavbarDropdown,
  NavbarItem
} from "Components/components/Navbars/Navbar/src/Navbar.vue";
import RawNavbar from "Components/components/Navbars/RawNavbar/src/RawNavbar.vue";
import rawmarkdown from "Components/components/Navbars/RawNavbarUsage.md";
import markdown from "Components/components/Navbars/NavbarUsage.md";

export default {
  title: "Navbars/Navbar",
  decorators: [withA11y, withKnobs],
  parameters: {
    notes: {
      Navbar: markdown,
      "Raw Navbar": rawmarkdown
    }
  },
  // Our exports that end in "Data" are not stories.
  excludeStories: /.*Data$/
};

export const RawInputNavbar = () => ({
  components: { RawNavbar, NavbarContent, VueNavbarDropdown, NavbarItem },
  data() {
    return {
      navbar: { collapsed: false },
      items: [
        {
          type: "item",
          text: "Dropdown Item 1",
          url: "#",
          disabled: false
        },
        {
          type: "item",
          text: "Dropdown Item 2",
          url: "#",
          disabled: false
        }
      ]
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
      default: boolean("Fixed to Top", false)
    },
    flavor: {
      default: text("Flavor", "")
    },
    title: {
      default: object("Title", {
        html: "",
        text: "Brand",
        url: "#"
      })
    }
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
        </div>
    `
});

export const ConfigurableNavbar = () => ({
  components: { Navbar },
  props: {
    fixed: {
      default: boolean("Fixed to Top", false)
    },
    flavor: {
      default: text("Flavor", "")
    },
    title: {
      default: object("Title", {
        html: "",
        text: "Brand",
        url: "#"
      })
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
              url: "#"
            }
          ]
        },
        {
          type: "item",
          html: "",
          text: "Navbar Link",
          url: "#"
        },
        {
          type: "item",
          html: "",
          text: "Navbar Link",
          url: "#"
        },
        {
          type: "item",
          html: "",
          text: "Navbar Link",
          url: "#"
        },
        {
          type: "item",
          html: "",
          text: "Navbar Link",
          url: "#"
        }
      ])
    },
    centerItems: {
      default: object("Center Items", [])
    },
    rightItems: {
      default: object("Right Items", [])
    }
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
        </div>
    `
});
