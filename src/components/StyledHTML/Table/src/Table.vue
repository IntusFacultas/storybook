<template>
  <n-table :flavor="flavor" :striped="striped">
    <table-headers>
      <table-row v-for="(title, index) in tableTitles" :key="`title${index}`">
        <table-header
          :flavor="headerFlavor ? headerFlavor : flavor"
          :condensed="condensed"
          :bordered="bordered"
          text-align="center"
          :colspan="
            numbered && selectable
              ? tableHeaders.length + 2
              : numbered || selectable
              ? tableHeaders.length + 1
              : tableHeaders.length
          "
          >{{ title }}</table-header
        >
      </table-row>
      <table-row>
        <table-header
          :flavor="headerFlavor ? headerFlavor : flavor"
          :condensed="condensed"
          :bordered="bordered"
          :text-align="textAlign"
          v-if="numbered"
          >#</table-header
        >
        <table-header
          v-for="(header, index) in tableHeaders"
          :key="'header' + index"
          @click="sortBy(header.key)"
          :flavor="headerFlavor ? headerFlavor : flavor"
          :condensed="condensed"
          :sortable="sortable"
          :bordered="bordered"
          :text-align="textAlign"
        >
          {{ header.text }}
          <table-carat
            :flavor="headerFlavor ? headerFlavor : flavor"
            :class="
              sort == header.key
                ? ''
                : sort == '-' + header.key
                ? 'table-open-carat'
                : 'table-not-shown'
            "
          ></table-carat>
        </table-header>
        <table-header
          :flavor="headerFlavor ? headerFlavor : flavor"
          :condensed="condensed"
          :bordered="bordered"
          :text-align="textAlign"
          v-if="selectable"
          >&nbsp;</table-header
        >
      </table-row>
    </table-headers>
    <table-body>
      <table-row
        v-for="(item, index) in items"
        :key="'item' + index"
        :class="{ 'table-hoverable-row': hover }"
      >
        <table-cell
          v-if="numbered"
          :flavor="flavor"
          :condensed="condensed"
          :bordered="bordered"
        >
          {{
            item.data.id
              ? item.data.id
              : item.data.pk
              ? item.data.pk
              : index + 1
          }}
        </table-cell>
        <table-cell
          v-for="header in tableHeaders"
          :key="'item' + index + 'key' + header.key"
          :flavor="flavor"
          :condensed="condensed"
          :bordered="bordered"
          :text-align="textAlign"
          >{{ item.data[header.key] }}</table-cell
        >
        <table-cell
          v-if="selectable"
          :flavor="flavor"
          :condensed="condensed"
          :bordered="bordered"
        >
          <n-button
            :small="condensed"
            :flavor="selectFlavor"
            @click="select(item)"
          >
            <span v-html="selectHtml"></span>
          </n-button>
        </table-cell>
      </table-row>
    </table-body>
  </n-table>
</template>

<script>
import styled from "vue-styled-components";
import Theme from "@IntusFacultas/design-system";
import { NButton } from "@IntusFacultas/button";
const props = {
  flavor: String,
  active: Boolean,
  textAlign: {
    type: String,
    default: "left"
  },
  striped: Boolean,
  bordered: Boolean,
  sortable: Boolean,
  hover: Boolean,
  condensed: Boolean,
  defaultTheme: {
    type: Object,
    default: function() {
      return Theme;
    }
  }
};
export const NTable = styled("table", props)`
    & * {
        font-family: "Open Sans Regular", -apple-system, BlinkMacSystemFont,
        "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif,
        "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
    }
    border-collapse: collapse;
    width: 100%;
    max-width: 100%;

  background-color: ${props =>
    props.theme && props.theme[props.flavor]
      ? props.theme[props.flavor].background.color
      : props.defaultTheme[props.flavor]
      ? props.defaultTheme[props.flavor].background.color
      : "#fff"};
    ${props =>
      props.striped
        ? `
             & > tbody > tr:nth-of-type(2n+1) > td {
                background-color: rgba(0, 0, 0, .1);
            }
        `
        : ""}
    color: ${props =>
      props.theme && props.theme[props.flavor]
        ? props.theme[props.flavor].color.color
        : props.defaultTheme[props.flavor]
        ? props.defaultTheme[props.flavor].color.color
        : "#222"};
    border-color: ${props =>
      props.theme && props.theme[props.flavor]
        ? props.theme[props.flavor].border.color
        : props.defaultTheme[props.flavor]
        ? props.defaultTheme[props.flavor].border.color
        : "#d9d9d9"};
`;
export const TableCarat = styled("div", props)`
  background-image: linear-gradient(
    to top right,
    transparent 50%,
    ${props =>
        props.theme && props.theme[props.flavor]
          ? props.theme[props.flavor].color.color
          : props.defaultTheme[props.flavor]
          ? props.defaultTheme[props.flavor].color.color
          : "#222"}
      50%
  );
  width: 0.5rem;
  height: 0.5rem;
  transform: rotate(-45deg);
  transition: 0.3s all;
  display: inline-block;
`;
export const TableHeaders = styled("thead", props)``;
export const TableBody = styled("tbody", props)``;
export const TableRow = styled("tr", props)``;
export const TableHeader = styled("th", props)`
    -webkit-touch-callout: none; /* iOS Safari */
    -webkit-user-select: none; /* Safari */
    -khtml-user-select: none; /* Konqueror HTML */
    -moz-user-select: none; /* Old versions of Firefox */
    -ms-user-select: none; /* Internet Explorer/Edge */
    user-select: none;
    text-align: ${props => (props.textAlign ? props.textAlign : "left")};
    ${props => (props.condensed ? `padding: .25rem;` : `padding: .5rem;`)}
    ${props => (props.sortable ? `cursor: pointer;` : "")}
    ${props =>
      props.bordered
        ? `border-width: 1px; border-style: solid;`
        : `border-top-width: 1px; border-top-style: solid`}
        border-bottom-width: 2px;
    border-bottom-style: solid;
    background-color: ${props =>
      props.theme && props.theme[props.flavor]
        ? props.theme[props.flavor].background.color
        : props.defaultTheme[props.flavor]
        ? props.defaultTheme[props.flavor].background.color
        : "#fff"};
    color: ${props =>
      props.theme && props.theme[props.flavor]
        ? props.theme[props.flavor].color.color
        : props.defaultTheme[props.flavor]
        ? props.defaultTheme[props.flavor].color.color
        : "#222"};
    border-color: ${props =>
      props.theme && props.theme[props.flavor]
        ? props.theme[props.flavor].border.color
        : props.defaultTheme[props.flavor]
        ? props.defaultTheme[props.flavor].border.color
        : "#d9d9d9"};
`;
export const TableCell = styled("td", props)`
    ${props => (props.condensed ? `padding: .25rem;` : `padding: .5rem;`)}
    text-align: ${props => (props.textAlign ? props.textAlign : "left")};
    ${props =>
      props.bordered
        ? `border-width: 1px; border-style: solid;`
        : `border-top-width: 1px; border-top-style: solid`}
      border-color: ${props =>
        props.theme && props.theme[props.flavor]
          ? props.theme[props.flavor].border.color
          : props.defaultTheme[props.flavor]
          ? props.defaultTheme[props.flavor].border.color
          : "#d9d9d9"};
`;

export const VueTable = {
  components: {
    NTable,
    TableHeaders,
    TableBody,
    TableRow,
    TableHeader,
    TableCell,
    TableCarat,
    NButton
  },
  data() {
    return {
      sort: ""
    };
  },
  props: {
    textAlign: {
      type: String,
      default: "left"
    },
    headerFlavor: {
      type: String,
      default: ""
    },
    flavor: {
      type: String,
      default: ""
    },
    striped: {
      type: Boolean,
      default: false
    },
    hover: {
      type: Boolean,
      default: false
    },
    selectable: {
      type: Boolean,
      default: false
    },
    selectFlavor: {
      type: String,
      default: "Primary"
    },
    selectHtml: {
      type: String,
      default: "Select"
    },
    condensed: {
      type: Boolean,
      default: false
    },
    numbered: {
      type: Boolean,
      default: false
    },
    bordered: {
      type: Boolean,
      default: false
    },
    sortable: {
      type: Boolean,
      default: false
    },
    items: {
      type: Array,
      default() {
        return [];
      }
    },
    headers: {
      type: Array,
      default() {
        return [];
      }
    },
    tableTitles: {
      type: Array,
      default() {
        return [];
      }
    }
  },
  methods: {
    sortBy(header) {
      if (!this.sortable) {
        return false;
      }
      if (this.sort == header) {
        if (this.sort.indexOf("-") == -1) {
          this.sort = "-" + this.sort;
        } else {
          this.sort = "";
        }
      } else if (this.sort == "") {
        this.sort = header;
      } else if (this.sort == "-" + header) {
        this.sort = "";
      } else {
        this.sort = "-" + header;
      }
      this.$emit("sort", this.sort);
      this.$forceUpdate();
    },
    camelCaseToTitleCase(in_camelCaseString) {
      // pulled from https://stackoverflow.com/questions/7225407/convert-camelcasetext-to-sentence-case-text/7225450
      var result = in_camelCaseString // "ToGetYourGEDInTimeASongAboutThe26ABCsIsOfTheEssenceButAPersonalIDCardForUser456InRoom26AContainingABC26TimesIsNotAsEasyAs123ForC3POOrR2D2Or2R2D"
        .replace(/([a-z])([A-Z][a-z])/g, "$1 $2") // "To Get YourGEDIn TimeASong About The26ABCs IsOf The Essence ButAPersonalIDCard For User456In Room26AContainingABC26Times IsNot AsEasy As123ForC3POOrR2D2Or2R2D"
        .replace(/([A-Z][a-z])([A-Z])/g, "$1 $2") // "To Get YourGEDIn TimeASong About The26ABCs Is Of The Essence ButAPersonalIDCard For User456In Room26AContainingABC26Times Is Not As Easy As123ForC3POOr R2D2Or2R2D"
        .replace(/([a-z])([A-Z]+[a-z])/g, "$1 $2") // "To Get Your GEDIn Time ASong About The26ABCs Is Of The Essence But APersonal IDCard For User456In Room26AContainingABC26Times Is Not As Easy As123ForC3POOr R2D2Or2R2D"
        .replace(/([A-Z]+)([A-Z][a-z][a-z])/g, "$1 $2") // "To Get Your GEDIn Time A Song About The26ABCs Is Of The Essence But A Personal ID Card For User456In Room26A ContainingABC26Times Is Not As Easy As123ForC3POOr R2D2Or2R2D"
        .replace(/([a-z]+)([A-Z0-9]+)/g, "$1 $2") // "To Get Your GEDIn Time A Song About The 26ABCs Is Of The Essence But A Personal ID Card For User 456In Room 26A Containing ABC26Times Is Not As Easy As 123For C3POOr R2D2Or 2R2D"

        // Note: the next regex includes a special case to exclude plurals of acronyms, e.g. "ABCs"
        .replace(/([A-Z]+)([A-Z][a-rt-z][a-z]*)/g, "$1 $2") // "To Get Your GED In Time A Song About The 26ABCs Is Of The Essence But A Personal ID Card For User 456In Room 26A Containing ABC26Times Is Not As Easy As 123For C3PO Or R2D2Or 2R2D"
        .replace(/([0-9])([A-Z][a-z]+)/g, "$1 $2") // "To Get Your GED In Time A Song About The 26ABCs Is Of The Essence But A Personal ID Card For User 456In Room 26A Containing ABC 26Times Is Not As Easy As 123For C3PO Or R2D2Or 2R2D"

        // Note: the next two regexes use {2,} instead of + to add space on phrases like Room26A and 26ABCs but not on phrases like R2D2 and C3PO"
        .replace(/([A-Z]{2,})([0-9]{2,})/g, "$1 $2") // "To Get Your GED In Time A Song About The 26ABCs Is Of The Essence But A Personal ID Card For User 456 In Room 26A Containing ABC 26 Times Is Not As Easy As 123 For C3PO Or R2D2 Or 2R2D"
        .replace(/([0-9]{2,})([A-Z]{2,})/g, "$1 $2") // "To Get Your GED In Time A Song About The 26 ABCs Is Of The Essence But A Personal ID Card For User 456 In Room 26A Containing ABC 26 Times Is Not As Easy As 123 For C3PO Or R2D2 Or 2R2D"
        .trim();

      // capitalize the first letter
      return result.charAt(0).toUpperCase() + result.slice(1);
    },

    toTitleCase(str) {
      str = this.camelCaseToTitleCase(str);
      str = str.replace(/_/g, " ");
      return str.replace(/(^|\s)\S/g, function(t) {
        return t.toUpperCase();
      });
    }
  },
  computed: {
    tableHeaders() {
      let keys = Object.keys(this.items[0].data);
      if (this.headers.length != 0) {
        let handledKeys = this.headers.map(x => x.key);
        let titles = this.headers.map(x => x.text);
        if (
          handledKeys.length == keys.length &&
          titles.length == handledKeys.length
        ) {
          let valid = true;
          for (let key of handledKeys) {
            if (keys.indexOf(key) == -1) {
              valid = false;
              break;
            }
          }
          if (valid) {
            return this.headers;
          }
        }
      }
      let headers = [];
      for (let key of keys) {
        headers.push({
          text: this.toTitleCase(key),
          key
        });
      }
      return headers;
    }
  }
};
export default VueTable;
</script>

<style>
.table-not-shown {
  opacity: 0;
  transform: rotate(45deg) !important;
}
.table-hoverable-row:hover {
  background-color: rgba(0, 0, 0, 0.05);
}

.table-open-carat {
  transform: rotate(135deg) !important;
}
</style>
