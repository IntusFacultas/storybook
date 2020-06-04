import { withA11y } from "@storybook/addon-a11y";
import { withKnobs, text, boolean, number } from "@storybook/addon-knobs";
import { Paginator } from "Components/components/Paginator/src/Paginator.vue";
import { action } from "@storybook/addon-actions";
import markdown from "Components/components/Paginator/Usage.md";

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
  title: "Paginator",
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
  update: function(page) {
    this.currentPage = page;
  },
};

export const ConfigurablePaginator = () => ({
  components: { Paginator, TextContent, List, ListItem },
  methods: actionsData,
  data() {
    return {
      formattedTheme,
    };
  },
  specs: specs(() =>
    describe("Select Me", () => {
      let vm;
      let wrapper;
      beforeEach(() => {
        wrapper = shallowMount(Paginator, {
          propsData: {
            pageCount: 10,
            currentPage: 1,
            marginPages: 1,
            pageRange: 3,
          },
        });
        vm = wrapper.vm;
      });
      it("steps", () => {
        vm.$emit = jest.fn();
        vm.step(-1);
        expect(vm.$emit).toHaveBeenCalledTimes(0);
        vm.step(10);
        expect(vm.$emit).toHaveBeenCalledTimes(0);
        vm.step(1);
        expect(vm.$emit).toHaveBeenCalledWith("select", vm.currentPage + 1);
      });
      it("selects", () => {
        vm.$emit = jest.fn();
        vm.select(8);
        expect(vm.$emit).toHaveBeenCalledWith("select", 8);
      });
    })
  ),
  props: {
    flavor: {
      default: text("Flavor", ""),
    },
    currentPage: {
      default: number("Current Page", 1),
    },
    showFirstLast: {
      default: boolean("Show First and Last Buttons", false),
    },
    pageCount: {
      default: number("Page Count", 20),
    },
    marginPages: {
      default: number("Margin Pages", 2),
    },
    pageRange: {
      default: number("Page Range", 3),
    },
  },
  template: `
        <div>
            <paginator 
                :flavor="flavor"
                :show-first-last="showFirstLast"
                :page-count="pageCount"
                :current-page="currentPage"
                :margin-pages="marginPages" 
                :page-range="pageRange" 
                @select="onSelect($event); update($event);">
            </paginator>
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
