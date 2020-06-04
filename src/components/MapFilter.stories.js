import MapFilter from "Components/components/MapFilter/src/MapFilter.vue";
import { action } from "@storybook/addon-actions";
import { withA11y } from "@storybook/addon-a11y";
import { withKnobs, text, object } from "@storybook/addon-knobs";
import { FlexRow, FlexColumn } from "@IntusFacultas/layout";
import mapmarkdown from "Components/components/MapFilter/Usage.md";

import {
  TextContent,
  NLabel,
} from "Components/components/StyledHTML/Typography/src/Typography.vue";
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
import { shallowMount, mount } from "@vue/test-utils";
import jest from "jest-mock";
window.jest = jest;

export default {
  title: "Map Filter",
  decorators: [withA11y, withKnobs],
  parameters: {
    notes: {
      mapmarkdown,
    },
  },
  // Our exports that end in "Data" are not stories.
  excludeStories: /.*Data$/,
};

const actionsData = {
  onInput: action("@input"),
};

export const ConfigurableMapFilter = () => ({
  components: {
    MapFilter,
    TextContent,
    List,
    ListItem,
    NLabel,
  },
  methods: {
    onInput: action("@input"),
    onChange: action("@change"),
  },
  specs: specs(() =>
    describe("Map Filter", () => {
      let vm;
      let wrapper;
      let options = [
        {
          text: "1",
          value: 1,
        },
        {
          text: "2",
          value: 2,
        },
        {
          text: "3",
          value: 3,
        },
        {
          text: "4",
          value: 4,
        },
      ];
      beforeEach(() => {
        wrapper = mount(MapFilter, {
          propsData: {
            mapId: "map-filter",
          },
        });
        vm = wrapper.vm;
      });
      it("mounts svg-pan-zoom", () => {
        setTimeout(() => {
          !expect(vm.svgPZ).toEqual(null);
        });
      });
      it("disables countries correctly", () => {
        vm.enabledCountries = ["USA"];
        expect(vm.testDisabled("CAN")).toBeTruthy();
        vm.enabledCountries = [];
        vm.disabledCountries = ["USA"];
        expect(vm.testDisabled("USA")).toBeTruthy();
      });
      it("prevents the right click menu", () => {
        event = {};
        event.preventDefault = jest.fn();
        vm.preventMenu(event);
        expect(event.preventDefault).toHaveBeenCalled;
      });
      it("selects colors", () => {
        vm.colors = {
          USA: "red",
        };
        expect(vm.selectColor("USA")).toEqual("red");
        vm.colors = {};
        expect(vm.selectColor("USA")).toEqual(vm.defaultColors.USA);
        expect(vm.selectColor("GARBLEGARBLE")).toEqual(
          vm.defaultColors.default
        );
      });
      it("calculates color based on status", () => {
        vm.disabledCountries = ["USA"];
        expect(vm.calculateColor("USA")).toEqual(vm.defaultColors.disabled);
        vm.disabledCountries = [];
        vm.selectedCountries = ["USA"];
        expect(vm.calculateColor("USA")).toEqual(vm.defaultColors.active);
        vm.hoveredCountry = {
          id: "USA",
        };
        expect(vm.calculateColor("USA")).toEqual(
          vm.LightenDarkenColor(vm.defaultColors.active, 30)
        );
      });
      it("calculates stroke", () => {
        vm.colors = {
          border: "honk",
        };
        expect(vm.calculateStroke("USA")).toEqual("honk");
        vm.colors = {};
        expect(vm.calculateStroke("USA")).toEqual(vm.defaultColors.border);
      });
      it("handles country click", () => {
        vm.$emit = jest.fn();
        vm.readOnly = true;
        vm.handleCountryClick("USA");
        expect(vm.$emit).toHaveBeenCalledTimes(0);
        vm.readOnly = false;
        vm.disabledCountries = ["USA"];
        vm.handleCountryClick("USA");
        expect(vm.$emit).toHaveBeenCalledTimes(0);
        vm.disabledCountries = [];
        vm.handleCountryClick("USA");
        expect(vm.selectedCountries).toContain("USA");
        expect(vm.$emit).toHaveBeenNthCalledWith(
          1,
          "input",
          vm.selectedCountries
        );
        expect(vm.$emit).toHaveBeenNthCalledWith(
          2,
          "change",
          vm.selectedCountries
        );
        vm.handleCountryClick("USA");
        expect(vm.selectedCountries).toEqual([]);
        expect(vm.$emit).toHaveBeenNthCalledWith(
          3,
          "input",
          vm.selectedCountries
        );
        expect(vm.$emit).toHaveBeenNthCalledWith(
          4,
          "change",
          vm.selectedCountries
        );
      });
      it("hovers countries correctly", () => {
        vm.hoverCountry("USA");
        expect(vm.hoveredCountry).toEqual("USA");
      });
    })
  ),
  data() {
    return {
      countries: ["USA"],
      formattedTheme,
    };
  },
  props: {
    height: {
      default: text("Height", "400px"),
    },
    colors: {
      default: object("Custom Colors", {}),
    },
    disabledCountries: {
      default: object("Disabled Countries", ["CAN", "JPN"]),
    },
    enabledCountries: {
      default: object("Enabled Countries", []),
    },
    width: {
      default: text("Width", "100%"),
    },
    mapMarginBottom: {
      default: text("Bottom Margin for Map", "25px"),
    },
    textBottom: {
      default: text("Bottom Offset for Map text", "2px"),
    },
    textLeft: {
      default: text("Left Offset for Map text", "5px"),
    },
    border: {
      default: text("Map Border", "1px solid black"),
    },
    backgroundColor: {
      default: text("Map Background Color", "#3a3a3a"),
    },
    mapLabel: {
      default: text("Map Label", "Map Filter"),
    },
    mapId: {
      default: text("Map SVG ID", "mapfilter"),
    },
    textFlavor: {
      default: text("Text Flavor", "Dark"),
    },
  },
  template: `
  <div>
    <map-filter
      :height="height"
      :width="width"
      :colors="colors"
      :map-margin-bottom="mapMarginBottom"
      :disabled-countries="disabledCountries"
      :enabled-countries="enabledCountries"
      :text-bottom="textBottom"
      :text-left="textLeft"
      :border="border"
      :background-color="backgroundColor"
      :map-label="mapLabel"
      :map-id="mapId"
      :text-flavor="textFlavor"
      v-model="countries"
      @input="onInput"
      @change="onChange"
    ></map-filter>
    <hr>
    <n-label>Countries (v-model)</n-label><br>
    <textarea v-model="countries"></textarea>
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
