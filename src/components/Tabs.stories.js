import { withA11y } from "@storybook/addon-a11y";
import { action } from "@storybook/addon-actions";
import {
  withKnobs,
  text,
  boolean,
  array,
  object,
} from "@storybook/addon-knobs";
import { Tabs } from "Components/components/Tabs/src/Tabs.vue";
import markdown from "Components/components/Tabs/Usage.md";

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

import {
  specs,
  describe,
  it,
  beforeEach,
} from "storybook-addon-specifications";
import expect from "expect";
import { shallowMount } from "@vue/test-utils";
import jest from "jest-mock";
window.jest = jest;

export default {
  title: "Navigation/Tabs", // Folder/ is unnecessary but you can group stories by a folder by doing so
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

export const NavigationTabs = () => ({
  components: { Tabs, TextContent, List, ListItem },
  methods: actionsData,
  specs: specs(() =>
    describe("Tabs", () => {
      let vm;
      let wrapper;
      beforeEach(() => {
        wrapper = shallowMount(Tabs, {
          propsData: {
            tabs: [
              {
                type: "link",
                disabled: true,
                text: "Hello",
                value: 1,
              },
              {
                type: "link",
                disabled: true,
                text: "Hello",
                value: 2,
              },
            ],
          },
        });
        vm = wrapper.vm;
      });
      it("passes selects", () => {
        vm.$emit = jest.fn();
        vm.passSelect("asdf");
        expect(vm.$emit).toHaveBeenCalledWith("select", "asdf");
      });
    })
  ),
  data() {
    return {
      formattedTheme,
    };
  },
  props: {
    flavor: {
      default: text("Flavor", ""),
    },
    tabs: {
      default: object("Tabs", [
        {
          text: "Link 1",
          value: "link1",
          type: "tab",
          html: "",
          active: true,
          disabled: false,
        },
        {
          text: "Link 2 (Im an href)",
          value: "link1",
          type: "link",
          html: ``,
          active: false,
          disabled: false,
        },
        {
          text: "Link 3",
          value: "link3",
          type: "tab",
          html: "",
          active: false,
          disabled: true,
        },
        {
          text: "Link 4",
          value: "link4",
          type: "tab",
          html: "",
          active: false,
          disabled: false,
        },
        {
          text: "Link 5",
          value: "link5",
          type: "tab",
          html: "",
          active: false,
          disabled: false,
        },
      ]),
    },
  },
  template: `
        <div>
            <tabs :flavor="flavor" :tabs="tabs" @select="onSelect" ></tabs>
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
