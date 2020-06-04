import SelectMe from "Components/components/SelectMe/src/SelectMe.vue";
import { action } from "@storybook/addon-actions";
import { withA11y } from "@storybook/addon-a11y";
import {
  withKnobs,
  array,
  text,
  boolean,
  object,
} from "@storybook/addon-knobs";
import markdown from "Components/components/SelectMe/USAGE.md";
import axios from "axios";
import MockAdapter from "axios-mock-adapter";
const mock = new MockAdapter(axios, { delayResponse: 500 });

import {
  TextContent,
  NLabel,
  Paragraph,
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
import { shallowMount } from "@vue/test-utils";
import jest from "jest-mock";
window.jest = jest;

export default {
  title: "Composite Components/SelectMe",
  decorators: [withA11y, withKnobs],
  parameters: {
    notes: { markdown },
  },
  // Our exports that end in "Data" are not stories.
  excludeStories: /.*Data$/,
};

const actionsData = {
  onInput: action("@input"),
};

export const MultipleSelect = () => ({
  components: { SelectMe, TextContent, List, ListItem, NLabel },
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
        wrapper = shallowMount(SelectMe, {
          propsData: {
            name: "selectme",
            options: options,
          },
        });
        vm = wrapper.vm;
      });
      it("handles off click", () => {
        let event = {
          target: {
            attributes: {},
          },
        };
        vm.showSelected = true;
        vm.handleOffClick(event);
        expect(vm.showSelected).toBeFalsy();
      });
      it("toggles selected dropdown", () => {
        expect(vm.showSelected).toBeFalsy();
        vm.toggleSelectedDropdown();
        expect(vm.showSelected).toBeTruthy();
      });
      it("sets calculated width", () => {
        vm.setSelectBoxWidth = jest.fn();
        vm.setCalculatedWidth();
        setTimeout(() => {
          expect(vm.setSelectBoxWidth).toHaveBeenCalled();
        }, 100);
      });
      it("sets calculated padding", () => {
        vm.calculatedPadding = -1;
        vm.setCalculatedPadding();
        expect(vm.calculatedPadding).toBeGreaterThan(-1);
      });
      it("sets select box width", () => {
        vm.selectBoxWidth = -1;
        vm.setSelectBoxWidth();
        expect(vm.selectBoxWidth).toBeGreaterThan(-1);
      });
      it("opens the dropdown", () => {
        vm.$emit = jest.fn();
        vm.disabled = true;
        expect(vm.openDropdown()).toBeFalsy();
        expect(vm.$emit).toHaveBeenCalledWith("focus");
        vm.disabled = false;
        vm.openDropdown();
        expect(vm.showSelected).toBeFalsy();
        expect(vm.showOptions).toBeTruthy();
      });
      it("closes the dropdown", () => {
        vm.openDropdown();
        expect(vm.showOptions).toBeTruthy();
        vm.closeDropdown();
        setTimeout(() => {
          expect(vm.showOptions).toBeFalsy();
        }, 300);
      });
      it("selects an option", () => {
        vm.$emit = jest.fn();
        vm.closeDropdown = jest.fn();
        vm.selectOption(options[0]);
        expect(vm.closeDropdown).toHaveBeenCalled();
        expect(vm.$emit).toHaveBeenCalledWith("input", vm.selectedOptions);
        vm.selectOption(options[1]);
        expect(vm.selectedOptions.length).toEqual(1);
        vm.multiSelect = true;
        vm.selectOption(options[0]);
        expect(vm.selectedOptions.length).toEqual(2);
      });
      it("deselects options when allowed", () => {
        vm.$emit = jest.fn();
        vm.closeDropdown = jest.fn();
        vm.selectOption(options[0]);
        expect(vm.selectedOptions.length).toEqual(1);
        vm.deselectOption(options[0], false);
        expect(vm.selectedOptions.length).toEqual(0);
        expect(vm.$emit).toHaveBeenCalledWith("input", vm.selectedOptions);
        !expect(vm.closeDropdown).toHaveBeenCalled();
        vm.selectOption(options[0]);
        vm.selectOption(options[1]);
        vm.canBeEmpty = false;
        vm.deselectOption(options[1], false);
        expect(vm.selectedOptions.length).toEqual(1);
        vm.deselectOption(options[0], false);
        expect(vm.selectedOptions.length).toEqual(1);
        vm.canBeEmpty = true;
        vm.deselectOption(options[0], true);
        expect(vm.closeDropdown).toHaveBeenCalled();
      });
      it("checks if an option is already selected", () => {
        vm.selectOption(options[0]);
        expect(vm.contained(options[0])).toBeTruthy();
        expect(vm.contained(options[1])).toBeFalsy();
      });
      it("handles backspace appropriately", () => {
        vm.$emit = jest.fn();
        vm.selectOption(options[0]);
        vm.optionSearch = "asdf";
        vm.handleBackspace();
        !expect(vm.$emit).toHaveBeenCalled();
        expect(vm.selectedOptions.length).toEqual(1);
        vm.optionSearch = "";
        vm.selectBoxWidth = -10000; // just to force selectBoxWidth to be less than computedCutoff
        vm.handleBackspace();
        expect(vm.$emit).toHaveBeenCalledWith("input", vm.selectedOptions);
        expect(vm.selectedOptions.length).toEqual(0);
      });
      it("handles right arrow correctly", () => {
        vm.showSelected = true;
        vm.handleRight();
        expect(vm.showSelected).toBeFalsy();
      });
      it("handles left arrow correctly", () => {
        vm.closeDropdown = jest.fn();
        vm.selectOption(options[0]);
        vm.handleLeft();
        !expect(vm.closeDropdown).toHaveBeenCalled();
        vm.optionSearch = "asdf";
        vm.handleLeft();
        !expect(vm.closeDropdown).toHaveBeenCalled();
        vm.selectBoxWidth = 1000000;
        vm.handleLeft();
        !expect(vm.closeDropdown).toHaveBeenCalled();
        vm.showSelected = false;
        vm.optionSearch = "";
        vm.handleLeft();
        expect(vm.closeDropdown).toHaveBeenCalled();
      });
      it("handles down arrow correctly", () => {
        vm.hoverSelectedOption = jest.fn();
        vm.hoverOption = jest.fn();
        vm.showSelected = true;
        vm.handleDown();
        expect(vm.hoverSelectedOption).toHaveBeenCalledWith(1);
        vm.showSelected = false;
        vm.showOptions = true;
        vm.handleDown();
        expect(vm.hoverOption).toHaveBeenCalledWith(1);
        vm.showOptions = false;
        vm.handleDown();
        expect(vm.hoverOption).toHaveBeenCalledWith(1);
      });
      it("handles up arrow correctly", () => {
        vm.hoverSelectedOption = jest.fn();
        vm.hoverOption = jest.fn();
        vm.showSelected = true;
        vm.handleUp();
        expect(vm.hoverSelectedOption).toHaveBeenCalledWith(-1);
        vm.showSelected = false;
        vm.showOptions = true;
        vm.handleUp();
        expect(vm.hoverOption).toHaveBeenCalledWith(-1);
        vm.showOptions = false;
        vm.handleUp();
        expect(vm.hoverOption).toHaveBeenCalledWith(-1);
      });
      it("checks if an option exists in options", () => {
        expect(vm.contains({ a: 1, b: 2 }, options)).toBeFalsy();
        expect(vm.contains(options[0], options)).toBeTruthy();
      });
      it("checks if an option is hovered", () => {
        expect(vm.isHovered({ a: 1, b: 2 }, options[0])).toBeFalsy();
        expect(vm.isHovered(options[0], options[0])).toBeTruthy();
      });
      it("hovers selected options correctly", () => {
        vm.hoveredIndex = -1;
        vm.hoverSelectedOption(-1);
        expect(vm.hoveredIndex).toEqual(-1);
        vm.hoveredIndex = 0;
        vm.hoverSelectedOption(-1);
        expect(vm.hoveredIndex).toEqual(-1);
        expect(vm.showSelected).toBeFalsy();
        vm.hoveredIndex = 0;
        vm.hoverSelectedOption(1);
        expect(vm.hoveredIndex).toEqual(0);
        vm.selectOption(options[0]);
        vm.hoveredIndex = -1;
        vm.hoverSelectedOption(1);
        expect(vm.hoveredIndex).toEqual(0);
        expect(vm.hoveredSelectedOption).toEqual(options[0]);
      });
      it("hovers non-selected options correctly", () => {
        vm.closeDropdown = jest.fn();
        vm.hoveredIndex = -1;
        vm.hoverOption(-1);
        expect(vm.hoveredIndex).toEqual(-1);
        vm.hoverOption(0);
        expect(vm.closeDropdown).toHaveBeenCalled();
        vm.hoverOption(1);
        expect(vm.hoveredOption).toEqual(options[0]);
        vm.hoverOption(1);
        expect(vm.hoveredOption).toEqual(options[1]);
        vm.hoverOption(1);
        expect(vm.hoveredOption).toEqual(options[2]);
        vm.hoverOption(1);
        expect(vm.hoveredOption).toEqual(options[3]);
        vm.hoverOption(1);
        expect(vm.hoveredOption).toEqual(options[0]);
        vm.hoverOption(-1);
        expect(vm.hoveredOption).toEqual({});
      });
      it("selects the hovered option correctly", () => {
        vm.$emit = jest.fn();
        vm.showOptions = true;
        vm.hoveredOption = {};
        vm.selectHoveredOption();
        expect(vm.selectedOptions.length).toEqual(0);
        vm.hoverOption(1);
        vm.selectHoveredOption();
        expect(vm.selectedOptions.length).toEqual(1);
        expect(vm.$emit).toHaveBeenCalledWith("input", vm.selectedOptions);
        vm.hoverOption(1);
        vm.hoverOption(1);
        vm.selectHoveredOption();
        expect(vm.selectedOptions.length).toEqual(1);
        expect(vm.$emit).toHaveBeenCalledWith("input", vm.selectedOptions);
        vm.multiSelect = true;
        vm.hoverOption(1);
        vm.selectHoveredOption();
        expect(vm.selectedOptions.length).toEqual(2);
        expect(vm.$emit).toHaveBeenCalledWith("input", vm.selectedOptions);
        vm.hoverOption(1);
        vm.selectHoveredOption();
        expect(vm.selectedOptions.length).toEqual(1);
        expect(vm.$emit).toHaveBeenCalledWith("input", vm.selectedOptions);
      });
      it("deselects the hovered selected option correctly", () => {
        vm.$emit = jest.fn();
        vm.showOptions = false;
        vm.showSelected = true;
        vm.multiSelect = true;
        vm.selectOption(options[0]);
        vm.selectOption(options[1]);
        vm.selectOption(options[2]);
        vm.selectOption(options[3]);
        vm.hoverSelectedOption(1);
        vm.hoverSelectedOption(1);
        vm.selectHoveredOption();
        vm.showSelected = true;
        vm.showOptions = false;
        expect(vm.contained(options[1])).toBeFalsy();
        expect(vm.selectedOptions.length).toEqual(3);
        expect(vm.$emit).toHaveBeenCalledWith("input", vm.selectedOptions);
        vm.hoverSelectedOption(1);
        vm.selectHoveredOption();
        vm.showSelected = true;
        vm.showOptions = false;
        expect(vm.selectedOptions.length).toEqual(2);
        expect(vm.$emit).toHaveBeenCalledWith("input", vm.selectedOptions);
        vm.showSelected = true;
        vm.showOptions = false;
        vm.hoverSelectedOption(1);
        vm.selectHoveredOption();
        expect(vm.selectedOptions.length).toEqual(1);
        expect(vm.$emit).toHaveBeenCalledWith("input", vm.selectedOptions);
        vm.showSelected = true;
        vm.showOptions = false;
        vm.hoverSelectedOption(1);
        vm.selectHoveredOption();
        expect(vm.selectedOptions.length).toEqual(0);
        expect(vm.$emit).toHaveBeenCalledWith("input", vm.selectedOptions);
      });
    })
  ),
  props: {
    badgeFlavor: {
      default: text("Badge Flavor", "Primary"),
    },
    flavor: {
      default: text("Flavor", "LightBlue"),
    },

    /**
     * type: Array,
     * default: [],
     * default format: [{ text: "", value: "" }]
     * This is the options for the dropdown
     */
    options: {
      default: object("Select Options", [
        {
          text: "United States",
          value: "USA",
        },
        {
          text: "Russia",
          value: "RUS",
        },
        {
          text: "China",
          value: "CHN",
        },
        {
          text: "Canada",
          value: "CAN",
        },
        {
          text: "Mexico",
          value: "MEX",
        },
        {
          text: "Japan",
          value: "JPN",
        },
        {
          text: "North Korea",
          value: "NKA",
        },
        {
          text: "South Korea",
          value: "SKA",
        },
      ]),
    },

    /**
     * type: String,
     * default: "value",
     * What attribute in a JS object should be referenced for determining the value
     */
    valueAttribute: {
      default: text("Value Key in Option", "value"),
    },

    /**
     * type: String,
     * default: "text"
     * What attribute in a JS object should be referenced for displaying the option text and badge text for an option
     */
    displayAttribute: {
      default: text("Display Key in Option", "text"),
    },

    /**
     * type: Boolean,
     * default: false,
     * disables the widget, disallowing selection
     */
    disabled: { default: boolean("Disable SelectMe", false) },
    canBeEmpty: { default: boolean("Can Be Empty", true) },

    /**
     * type: Boolean,
     * default: false,
     * When this is set to True, the dropdown does not close, allowing you to inspect the element
     */
    debug: { default: boolean("Debug Mode", false) },

    /**
     * type: Boolean,
     * default: false,
     * When this is set to True, the dropdown will allow a user to select multiple options
     */
    multiSelect: { default: boolean("Multi Select Mode", true) },
  },
  template: `
        <div style="max-width: 35%">
            <n-label :for="searchableDropdown">Select a country</n-label>
            <select-me
                :flavor="flavor"
                :badge-flavor="badgeFlavor"
                :can-be-empty="canBeEmpty"
                @input="onInput"
                name="searchableDropdown"
                :options="options"
                :value-attribute="valueAttribute"
                :display-attribute="displayAttribute"
                :disabled="disabled"
                :debug="debug"
                :multi-select="multiSelect">
            </select-me>
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

export const SingleSelect = () => ({
  components: { SelectMe, TextContent, NLabel, List, ListItem },
  methods: actionsData,
  data() {
    return {
      formattedTheme,
    };
  },
  props: {
    flavor: {
      default: text("Flavor", "LightBlue"),
    },
    /**
     * type: String,
     * default: ""
     * Sets the input id so that you can reference it with a label for accessability purposes
     */
    canBeEmpty: { default: boolean("Can Be Empty", true) },

    /**
     * type: Array,
     * default: [],
     * default format: [{ text: "", value: "" }]
     * This is the options for the dropdown
     */
    options: {
      default: object("Select Options", [
        {
          text: "United States",
          value: "USA",
        },
        {
          text: "Russia",
          value: "RUS",
        },
        {
          text: "China",
          value: "CHN",
        },
        {
          text: "Canada",
          value: "CAN",
        },
        {
          text: "Mexico",
          value: "MEX",
        },
        {
          text: "Japan",
          value: "JPN",
        },
        {
          text: "North Korea",
          value: "NKA",
        },
        {
          text: "South Korea",
          value: "SKA",
        },
      ]),
    },

    /**
     * type: String,
     * default: "value",
     * What attribute in a JS object should be referenced for determining the value
     */
    valueAttribute: {
      default: text("Value Key in Option", "value"),
    },

    /**
     * type: String,
     * default: "text"
     * What attribute in a JS object should be referenced for displaying the option text and badge text for an option
     */
    displayAttribute: {
      default: text("Display Key in Option", "text"),
    },

    /**
     * type: Boolean,
     * default: false,
     * disables the widget, disallowing selection
     */
    disabled: { default: boolean("Disable SelectMe", false) },

    /**
     * type: Boolean,
     * default: false,
     * When this is set to True, the dropdown does not close, allowing you to inspect the element
     */
    debug: { default: boolean("Debug Mode", false) },
  },
  template: `
        <div style="max-width: 35%">
            <n-label for="searchableDropdown">Select a country</n-label>
            <select-me
                :flavor="flavor"
                :can-be-empty="canBeEmpty"
                @input="onInput"
                name="searchableDropdown"
                :options="options"
                :value-attribute="valueAttribute"
                :display-attribute="displayAttribute"
                :disabled="disabled"
                :debug="debug"
                :multi-select="false">
            </select-me>
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

let API_OPTIONS = [
  {
    text: "United States",
    value: "USA",
  },
  {
    text: "Russia",
    value: "RUS",
  },
  {
    text: "China",
    value: "CHN",
  },
  {
    text: "Canada",
    value: "CAN",
  },
  {
    text: "Mexico",
    value: "MEX",
  },
  {
    text: "Japan",
    value: "JPN",
  },
  {
    text: "North Korea",
    value: "NKA",
  },
  {
    text: "South Korea",
    value: "SKA",
  },
];
mock.onGet("/api/options").reply((config) => {
  console.log(
    `Server received GET request with params: ${JSON.stringify(config.params)}`
  );
  return [
    200,
    API_OPTIONS.filter(
      (option) =>
        option.text.toUpperCase().indexOf(config.params.text.toUpperCase()) !=
        -1
    ),
  ];
});
export const AjaxLoadingSelect = () => ({
  components: { SelectMe, TextContent, NLabel, List, ListItem, Paragraph },
  methods: actionsData,
  data() {
    return {
      formattedTheme,
    };
  },
  props: {
    flavor: {
      default: text("Flavor", "LightBlue"),
    },

    /**
     * type: String,
     * default: "value",
     * What attribute in a JS object should be referenced for determining the value
     */
    valueAttribute: {
      default: text("Value Key in Option", "value"),
    },

    /**
     * type: String,
     * default: "text"
     * What attribute in a JS object should be referenced for displaying the option text and badge text for an option
     */
    displayAttribute: {
      default: text("Display Key in Option", "text"),
    },

    /**
     * type: Boolean,
     * default: false,
     * disables the widget, disallowing selection
     */
    disabled: { default: boolean("Disable SelectMe", false) },

    /**
     * type: Boolean,
     * default: false,
     * When this is set to True, the dropdown does not close, allowing you to inspect the element
     */
    debug: { default: boolean("Debug Mode", false) },
  },
  template: `
        <div style="max-width: 35%">
            <n-label for="searchableDropdown">Select a country</n-label>
            <select-me
                :flavor="flavor"
                :load-ajax="true"
                endpoint="/api/options"
                name="searchableDropdown"
                :value-attribute="valueAttribute"
                :display-attribute="displayAttribute"
                :disabled="disabled"
                :debug="debug"
                :multi-select="true">
            </select-me>
            <paragraph>This story has the SelectMe loading the results from an endpoint which has been mocked out.</paragraph>
            <paragraph>In this case, the endpoint is <code>/api/options</code></paragraph>
            <paragraph>Check the documentation to see how AJAX loading works with this component</paragraph>
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
