import { action } from "@storybook/addon-actions";
import { withA11y } from "@storybook/addon-a11y";
import { withKnobs, text, object, boolean } from "@storybook/addon-knobs";
import {
  VueTable,
  TableHeader,
  TableCell,
  TableRow
} from "Components/components/StyledHTML/Table/src/Table.vue";
import { VueRawTable } from "Components/components/StyledHTML/RawTable/src/RawTable.vue";
import markdown from "Components/components/StyledHTML/TableUsage.md";
import rawmarkdown from "Components/components/StyledHTML/RawTableUsage.md";

export default {
  title: "Styled HTML/Table", // Folder/ is unnecessary but you can group stories by a folder by doing so
  decorators: [withA11y, withKnobs],
  parameters: {
    notes: {
      Table: markdown,
      "Raw Table": rawmarkdown
    }
  },
  excludeStories: /.*Data$/
};

const actionsData = {
  onSort: action("@sort"),
  onSelect: action("@select")
};

export const Table = () => ({
  components: { VueTable },
  methods: actionsData,
  props: {
    headerFlavor: {
      default: text("Header Flavor (Overrides Flavor)", "")
    },
    flavor: {
      default: text("Flavor", "")
    },
    textAlign: {
      default: text("WebText Align", "left")
    },
    striped: {
      default: boolean("Striped", false)
    },
    numbered: {
      default: boolean("Numbered", false)
    },
    hover: {
      default: boolean("Hover", false)
    },
    condensed: {
      default: boolean("Condensed", false)
    },
    sortable: {
      default: boolean("Sortable", false)
    },
    selectable: {
      default: boolean("Selectable", false)
    },
    selectFlavor: {
      default: text("Select Flavor", "Primary")
    },
    tableTitles: {
      default: array("Table Titles", [])
    },
    selectHtml: {
      default: text("Select HTML", "Select")
    },
    bordered: {
      default: boolean("Bordered", false)
    },
    items: {
      default: object("Items", [
        {
          data: {
            first_name: "Pedro",
            last_name: "Del Moral Lopez",
            age: 24
          },
          flavor: ""
        },
        {
          data: {
            first_name: "Brent",
            last_name: "Ropp",
            age: 45
          },
          flavor: ""
        },
        {
          data: {
            first_name: "Ryan",
            last_name: "Kelbley",
            age: 28
          },
          flavor: ""
        }
      ])
    },
    headers: {
      default: object("Custom Headers", [])
    }
  },
  template: `
        <vue-table 
          :table-titles="tableTitles"
          :flavor="flavor"
          :header-flavor="headerFlavor"
          :striped="striped"
          :text-align="textAlign"
          :hover="hover"
          :bordered="bordered"
          :numbered="numbered"
          :condensed="condensed"
          :sortable="sortable"
          :selectable="selectable"
          :select-flavor="selectFlavor"
          :select-html="selectHtml"
          :items="items"
          @sort="onSort"
          @select="onSelect"
          :headers="headers"></vue-table>
    `
});

export const RawTable = () => ({
  components: { VueRawTable, TableHeader, TableCell, TableRow },
  props: {
    flavor: {
      default: text("Flavor", "")
    },
    striped: {
      default: boolean("Striped", false)
    }
  },
  template: `
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
    `
});
