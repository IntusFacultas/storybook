import { action } from "@storybook/addon-actions";
import { withA11y } from "@storybook/addon-a11y";
import {
  withKnobs,
  text,
  object,
  boolean,
  array,
} from "@storybook/addon-knobs";
import {
  VueTable,
  TableHeader,
  TableCell,
  TableRow,
} from "Components/components/StyledHTML/Table/src/Table.vue";
import { VueRawTable } from "Components/components/StyledHTML/RawTable/src/RawTable.vue";
import markdown from "Components/components/StyledHTML/TableUsage.md";
import rawmarkdown from "Components/components/StyledHTML/RawTableUsage.md";

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
  title: "IntusFacultas HTML/Table", // Folder/ is unnecessary but you can group stories by a folder by doing so
  decorators: [withA11y, withKnobs],
  parameters: {
    notes: {
      Table: markdown,
      "Raw Table": rawmarkdown,
    },
  },
  excludeStories: /.*Data$/,
};

const actionsData = {
  onSort: action("@sort"),
  onSelect: action("@select"),
};

export const Table = () => ({
  components: { VueTable, TextContent, List, ListItem },
  methods: actionsData,
  specs: specs(() =>
    describe("Table", () => {
      let vm;
      let wrapper;
      let headers = [
        {
          text: "Header 1",
          key: "1",
        },
        {
          text: "Header 2",
          key: "2",
        },
      ];
      beforeEach(() => {
        wrapper = shallowMount(VueTable, {
          propsData: {
            headers: headers,
          },
        });
        vm = wrapper.vm;
      });
      it("sorts by header", () => {
        vm.sortable = false;
        let header = {
          text: "Header 1",
          key: "1",
        };
        expect(vm.sortBy(header.key)).toEqual(false);
        vm.sortable = true;
        vm.$emit = jest.fn();
        vm.sortBy(header.key);
        expect(vm.$emit).toHaveBeenCalledWith("sort", header.key);
        vm.sortBy(header.key);
        expect(vm.$emit).toHaveBeenCalledWith("sort", `-${header.key}`);
        vm.sortBy(header.key);
        expect(vm.$emit).toHaveBeenCalledWith("sort", "");
        expect(vm.internalSort).toEqual("");
        vm.sort = "sortsort";
        vm.sortBy(header.key);
        expect(vm.internalSort).toEqual("");
      });
      it("converts camelCase to Title Case", () => {
        expect(vm.camelCaseToTitleCase("whatOnEarth")).toEqual("What On Earth");
      });
      it("converts snake_case to Title Case", () => {
        expect(vm.toTitleCase("what_on_earth")).toEqual("What On Earth");
      });
      it("emits select", () => {
        vm.$emit = jest.fn();
        let item = { a: 1 };
        vm.select(item, "select");
        expect(vm.$emit).toHaveBeenCalledWith("select", {
          item,
          type: "select",
        });
      });
      it("returns custom headers when no items are present", () => {
        expect(vm.tableHeaders).toEqual(headers);
      });
      it("defaults headers correctly when not overriden", () => {
        let second_wrapper = shallowMount(VueTable, {
          propsData: {
            items: [
              {
                data: {
                  columnA: "what",
                  columnB: "to",
                  columnC: "do",
                },
              },
            ],
          },
        });
        let vm2 = second_wrapper.vm;
        expect(vm2.tableHeaders).toEqual([
          { text: "Column A", key: "columnA" },
          { text: "Column B", key: "columnB" },
          { text: "Column C", key: "columnC" },
        ]);
      });
      it("allows overriding headers correctly", () => {
        let second_wrapper = shallowMount(VueTable, {
          propsData: {
            items: [
              {
                data: {
                  columnA: "what",
                  columnB: "to",
                  columnC: "do",
                },
              },
            ],
            headers: [
              { text: "Column AA", key: "columnA" },
              { text: "Column BB", key: "columnB" },
              { text: "Column CC", key: "columnC" },
            ],
          },
        });
        let vm2 = second_wrapper.vm;
        expect(vm2.tableHeaders).toEqual([
          { text: "Column AA", key: "columnA" },
          { text: "Column BB", key: "columnB" },
          { text: "Column CC", key: "columnC" },
        ]);
      });
      it("allows defaults headers when improper headers are provided correctly", () => {
        let second_wrapper = shallowMount(VueTable, {
          propsData: {
            items: [
              {
                data: {
                  columnA: "what",
                  columnB: "to",
                  columnC: "do",
                },
              },
            ],
            headers: [
              { text: "Column AA", key: "columnA" },
              { text: "Column CC", key: "columnC" },
            ],
          },
        });
        let vm2 = second_wrapper.vm;
        expect(vm2.tableHeaders).toEqual([
          { text: "Column A", key: "columnA" },
          { text: "Column B", key: "columnB" },
          { text: "Column C", key: "columnC" },
        ]);
      });
      it("throws an exception when neither items nor headers are provided", () => {
        try {
          let second_wrapper = shallowMount(VueTable);
          let vm2 = second_wrapper.vm;
          expect(true).toBeFalsy();
        } catch (error) {}
      });
    })
  ),
  props: {
    headerFlavor: {
      default: text("Header Flavor (Overrides Flavor)", ""),
    },
    flavor: {
      default: text("Flavor", ""),
    },
    textAlign: {
      default: text("Text Align", "left"),
    },
    striped: {
      default: boolean("Striped", false),
    },
    loading: {
      default: boolean("Loading", false),
    },
    numbered: {
      default: boolean("Numbered", false),
    },
    hover: {
      default: boolean("Hover", false),
    },
    selectable: {
      default: boolean("Selectable", false),
    },
    buttons: {
      default: object("Buttons", [
        {
          flavor: "Primary",
          html: "Select",
          value: "select",
        },
      ]),
    },
    tableTitles: {
      default: array("Table Titles", []),
    },
    condensed: {
      default: boolean("Condensed", false),
    },
    sortable: {
      default: boolean("Sortable", false),
    },
    sticky: {
      default: boolean("Sticky Headers", false),
    },
    sort: {
      default: text("Sort", ""),
    },
    bordered: {
      default: boolean("Bordered", false),
    },
    items: {
      default: object("Items", [
        {
          data: {
            first_name: "Pedro",
            last_name: "Del Moral Lopez",
            age: 24,
          },
          flavor: "",
        },
        {
          data: {
            first_name: "Brent",
            last_name: "Ropp",
            age: 45,
          },
          flavor: "",
        },
        {
          data: {
            first_name: "Ryan",
            last_name: "Kelbley",
            age: 28,
          },
          flavor: "",
        },
        {
          data: {
            first_name: "Pedro",
            last_name: "Del Moral Lopez",
            age: 24,
          },
          flavor: "",
        },
        {
          data: {
            first_name: "Brent",
            last_name: "Ropp",
            age: 45,
          },
          flavor: "",
        },
        {
          data: {
            first_name: "Ryan",
            last_name: "Kelbley",
            age: 28,
          },
          flavor: "",
        },
      ]),
    },
    headers: {
      default: object("Custom Headers", []),
    },
  },
  data() {
    return {
      formattedTheme,
    };
  },
  template: `
    <div>
      <vue-table 
        :table-titles="tableTitles"
          :flavor="flavor"
          :header-flavor="headerFlavor"
          :striped="striped"
          :text-align="textAlign"
          :hover="hover"
          :sticky-headers="sticky"
          :sort="sort"
          :selectable="selectable"
          :buttons="buttons"
          :bordered="bordered"
          :numbered="numbered"
          :condensed="condensed"
          :show-loading="loading"
          :sortable="sortable"
          :items="items"
          @sort="onSort"
          @select="onSelect"
          :headers="headers">
      </vue-table>
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

export const RawTable = () => ({
  components: {
    VueRawTable,
    TableHeader,
    TableCell,
    TableRow,
    TextContent,
    List,
    ListItem,
  },
  props: {
    flavor: {
      default: text("Flavor", ""),
    },
    striped: {
      default: boolean("Striped", false),
    },
  },
  data() {
    return {
      formattedTheme,
    };
  },
  template: `
    <div>
      <vue-raw-table :flavor="flavor" :striped="striped">
          <template v-slot:header>
              <table-row>
                  <table-header>Column 1</table-header>
                  <table-header>Column 2</table-header>
              </table-row>
          </template>
          <template v-slot:body>
              <table-row>
                  <table-cell><h1>CUSTOM HTML</h1></table-cell>
                  <table-cell><ul><li>1</li><li>2</li><li>3</li></ul></table-cell>
              </table-row>
              <table-row>
                  <table-cell><h1>CUSTOM HTML</h1></table-cell>
                  <table-cell><ul><li>1</li><li>2</li><li>3</li></ul></table-cell>
              </table-row>
              <table-row>
                  <table-cell><h1>CUSTOM HTML</h1></table-cell>
                  <table-cell><ul><li>1</li><li>2</li><li>3</li></ul></table-cell>
              </table-row>
          </template>
      </vue-raw-table>
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
