import { withA11y } from "@storybook/addon-a11y";
import { ThemeProvider } from "vue-styled-components";
import {
  withKnobs,
  text,
  boolean,
  object,
  number
} from "@storybook/addon-knobs";
import Theme from "Components/components/DesignSystem/nasic-theme.js";
import { NButton } from "Components/components/StyledHTML/Button/src/Button.vue";
import VueMe from "Components/components/VueMe/src/VueMe.vue";
import Vue from "vue";
import markdown from "Components/components/VueMe/vueMe.md";

Vue.config.silent = true;
export default {
  title: "Composite Components/VueMe",
  decorators: [withA11y, withKnobs],
  parameters: {
    notes: {
      markdown
    }
  },
  // Our exports that end in "Data" are not stories.
  excludeStories: /.*Data$/
};

export const VueMeDialog = () => ({
  components: { VueMe, NButton, ThemeProvider },
  props: {
    width: {
      default: number("Minimum Pixel Width of Dialog", 360)
    },
    flavor: {
      default: text("Flavor of Dialog", "default")
    },
    title: {
      default: text("Title of Dialog", "Title")
    },
    icon: {
      default: text("Icon HTML", "")
    },
    content: {
      default: text("Dialog Content", "Content")
    },
    backgroundDismiss: {
      default: boolean("Allow Background Dismissing", false)
    },
    buttons: {
      default: object("Buttons", [
        {
          text: "Close",
          flavor: "Primary",
          action: function(data) {
            console.log(data);
          },
          id: "CloseButton"
        }
      ])
    },
    fields: {
      default: object("Fields", [
        {
          label: "Enter your name",
          type: "text",
          id: "name"
        }
      ])
    },
    autoClose: {
      default: text("Autoclose", "CloseButton|10000")
    }
  },
  data: function() {
    return {
      theme: Theme
    };
  },
  methods: {
    alert: function() {
      let self = this;
      self.$alert(
        {
          width: self.width,
          flavor: self.flavor,
          title: self.title,
          icon: self.icon,
          content: self.content,
          backgroundDismiss: self.backgroundDismiss,
          buttons: self.buttons,
          fields: self.fields,
          autoClose: self.autoClose
        },
        self
      );
    }
  },
  template: `
        <div>
            <theme-provider :theme="theme">
                <vue-me :parent-instance="this"></vue-me>
                <n-button flavor="Primary" @click="alert">Show Dialog</n-button>
            </theme-provider>
        </div>
    `
});
