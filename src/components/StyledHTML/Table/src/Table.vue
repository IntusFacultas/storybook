<template>
  <n-table :flavor="flavor" :striped="striped">
    <table-headers>
      <table-row v-for="(title, index) in tableTitles" :key="`title${index}`">
        <table-header
          :flavor="headerFlavor ? headerFlavor : flavor"
          :condensed="condensed"
          :bordered="bordered"
          :sticky="stickyHeaders"
          :z-index="zIndex"
          :top="top + index * computedHeaderHeight"
          text-align="center"
          :colspan="
            numbered && selectable
              ? tableHeaders.length + 2
              : numbered || selectable
              ? tableHeaders.length + 1
              : tableHeaders.length
          "
        >
          <text-content :bold="true">{{ title }}</text-content>
        </table-header>
      </table-row>
      <table-row>
        <table-header
          :flavor="headerFlavor ? headerFlavor : flavor"
          :condensed="condensed"
          :bordered="bordered"
          :text-align="textAlign"
          :sticky="stickyHeaders"
          :z-index="zIndex"
          :top="top + computedTopOffset"
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
          :sticky="stickyHeaders"
          :z-index="zIndex"
          :top="top + computedTopOffset"
          :bordered="bordered"
          :text-align="textAlign"
        >
          <text-content :bold="true">{{ header.text }}</text-content>
          <table-carat
            :flavor="headerFlavor ? headerFlavor : flavor"
            :class="
              internalSort == header.key
                ? ''
                : internalSort == '-' + header.key
                ? 'table-open-carat'
                : 'table-not-shown'
            "
          ></table-carat>
        </table-header>
        <table-header
          :flavor="headerFlavor ? headerFlavor : flavor"
          :condensed="condensed"
          :bordered="bordered"
          :sticky="stickyHeaders"
          :z-index="zIndex"
          :top="top + computedTopOffset"
          :text-align="textAlign"
          v-if="selectable"
          >&nbsp;</table-header
        >
      </table-row>
    </table-headers>
    <table-body>
      <table-row v-show="showLoading">
        <table-cell
          text-align="center"
          :colspan="
            numbered && selectable
              ? tableHeaders.length + 2
              : numbered || selectable
              ? tableHeaders.length + 1
              : tableHeaders.length
          "
        >
          <svg
            class="loading-spin"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <path
              d="M23 12c0 1.042-.154 2.045-.425 3h-2.101c.335-.94.526-1.947.526-3 0-4.962-4.037-9-9-9-1.706 0-3.296.484-4.655 1.314l1.858 2.686h-6.994l2.152-7 1.849 2.673c1.684-1.049 3.659-1.673 5.79-1.673 6.074 0 11 4.925 11 11zm-6.354 7.692c-1.357.826-2.944 1.308-4.646 1.308-4.962 0-9-4.038-9-9 0-1.053.191-2.06.525-3h-2.1c-.271.955-.425 1.958-.425 3 0 6.075 4.925 11 11 11 2.127 0 4.099-.621 5.78-1.667l1.853 2.667 2.152-6.989h-6.994l1.855 2.681z"
            />
          </svg>
        </table-cell>
      </table-row>
      <table-row
        v-show="!showLoading"
        v-for="(item, index) in items"
        :key="'item' + index"
        :hover="hover"
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
        >
          <text-content>
            {{ item.data[header.key] }}
          </text-content>
        </table-cell>
        <table-cell
          v-if="selectable"
          :flavor="flavor"
          :condensed="condensed"
          :bordered="bordered"
        >
          <div v-if="buttons.length == 1">
            <n-button
              v-for="(button, index) in buttons"
              :key="`button${index}`"
              :small="condensed"
              :flavor="button.flavor"
              @click="select(item, button.value)"
            >
              <span v-html="button.html"></span>
            </n-button>
          </div>
          <button-group v-else>
            <n-button
              v-for="(button, index) in buttons"
              :key="`button${index}`"
              :small="condensed"
              :flavor="button.flavor"
              @click="select(item, button.value)"
            >
              <span v-html="button.html"></span>
            </n-button>
          </button-group>
        </table-cell>
      </table-row>
    </table-body>
  </n-table>
</template>

<script>
import styled from "vue-styled-components";
import Theme from "@IntusFacultas/design-system";
import { NButton, ButtonGroup } from "@IntusFacultas/button";
import { TextContent } from "@IntusFacultas/typography";

const props = {
  flavor: String,
  active: Boolean,
  textAlign: {
    type: String,
    default: "left",
  },
  striped: Boolean,
  sticky: Boolean,
  zIndex: {
    type: Number,
    default: 10,
  },
  top: {
    type: Number,
    default: 0,
  },
  bordered: Boolean,
  sortable: Boolean,
  hover: Boolean,
  condensed: Boolean,
  defaultTheme: {
    type: Object,
    default: function() {
      return Theme;
    },
  },
};
export const NTable = styled("table", props)`
  border-collapse: collapse;
  width: 100%;
  max-width: 100%;
  position: relative;
  background-color: ${(props) =>
    props.theme && props.theme[props.flavor]
      ? props.theme[props.flavor].background.color
      : props.defaultTheme[props.flavor]
      ? props.defaultTheme[props.flavor].background.color
      : "#fff"};
  ${(props) =>
    props.striped
      ? `
             & > tbody > tr:nth-of-type(2n+1) > td {
                background-color: rgba(0, 0, 0, .1);
            }
        `
      : ""}
  & td > span {
    color: ${(props) =>
      props.theme && props.theme[props.flavor]
        ? props.theme[props.flavor].color.color
        : props.defaultTheme[props.flavor]
        ? props.defaultTheme[props.flavor].color.color
        : "#222"};
  }
  border-color: ${(props) =>
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
    ${(props) =>
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
export const TableRow = styled("tr", props)`
  ${(props) =>
    props.hover
      ? `
      &:hover {
        background-color: rgb(0,0,0,0.05);
      }`
      : ``}
`;
export const TableHeader = styled("th", props)`
    -webkit-touch-callout: none; /* iOS Safari */
    -webkit-user-select: none; /* Safari */
    -khtml-user-select: none; /* Konqueror HTML */
    -moz-user-select: none; /* Old versions of Firefox */
    -ms-user-select: none; /* Internet Explorer/Edge */
    user-select: none;
    text-align: ${(props) => (props.textAlign ? props.textAlign : "left")};
    ${(props) => (props.condensed ? `padding: .25rem;` : `padding: .5rem;`)}
    ${(props) => (props.sortable ? `cursor: pointer;` : "")}
    ${(props) =>
      props.bordered
        ? `border-width: 1px; border-style: solid;`
        : `border-top-width: 1px; border-top-style: solid`}
        border-bottom-width: 2px;
    border-bottom-style: solid;
    background-color: ${(props) =>
      props.theme && props.theme[props.flavor]
        ? props.theme[props.flavor].background.color
        : props.defaultTheme[props.flavor]
        ? props.defaultTheme[props.flavor].background.color
        : "#fff"};
    & span {color: ${(props) =>
      props.theme && props.theme[props.flavor]
        ? props.theme[props.flavor].color.color
        : props.defaultTheme[props.flavor]
        ? props.defaultTheme[props.flavor].color.color
        : "#222"};}
    border-color: ${(props) =>
      props.theme && props.theme[props.flavor]
        ? props.theme[props.flavor].border.color
        : props.defaultTheme[props.flavor]
        ? props.defaultTheme[props.flavor].border.color
        : "#d9d9d9"};
      ${(props) =>
        props.sticky
          ? `
        position: sticky;
        top: ${props.top}px;
        z-index: ${props.zIndex} 
      `
          : ``}
`;
export const TableCell = styled("td", props)`
    ${(props) => (props.condensed ? `padding: .25rem;` : `padding: .5rem;`)}
    text-align: ${(props) => (props.textAlign ? props.textAlign : "left")};
    ${(props) =>
      props.bordered
        ? `border-width: 1px; border-style: solid;`
        : `border-top-width: 1px; border-top-style: solid`}
      border-color: ${(props) =>
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
    NButton,
    TextContent,
    ButtonGroup,
  },
  data() {
    return {
      internalSort: "",
    };
  },
  watch: {
    sort(newVal) {
      if (newVal != this.internalSort) {
        this.internalSort = newVal;
        this.$forceUpdate();
      }
    },
  },
  mounted() {
    this.internalSort = this.sort;
  },
  props: {
    textAlign: {
      type: String,
      default: "left",
    },
    headerFlavor: {
      type: String,
      default: "",
    },
    sort: {
      type: String,
      default: "",
    },
    stickyHeaders: Boolean,
    showLoading: Boolean,
    zIndex: {
      type: Number,
      default: 10,
    },
    top: {
      type: Number,
      default: 0,
    },
    flavor: {
      type: String,
      default: "",
    },
    striped: {
      type: Boolean,
      default: false,
    },
    selectable: {
      type: Boolean,
      default: false,
    },
    buttons: {
      type: Array,
      default() {
        return [
          {
            flavor: "Primary",
            html: "Select",
            value: "select",
          },
        ];
      },
    },
    hover: {
      type: Boolean,
      default: false,
    },
    condensed: {
      type: Boolean,
      default: false,
    },
    numbered: {
      type: Boolean,
      default: false,
    },
    bordered: {
      type: Boolean,
      default: false,
    },
    sortable: {
      type: Boolean,
      default: false,
    },
    items: {
      type: Array,
      default() {
        return [];
      },
    },
    tableTitles: {
      type: Array,
      default() {
        return [];
      },
    },
    headers: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  methods: {
    sortBy(header) {
      if (!this.sortable) {
        return false;
      }
      let proposedSort = "";
      if (this.internalSort == header) {
        if (this.internalSort.indexOf("-") == -1) {
          proposedSort = "-" + this.internalSort;
        } else {
          proposedSort = "";
        }
      } else if (this.internalSort == "") {
        proposedSort = header;
      } else if (this.internalSort == "-" + header) {
        proposedSort = "";
      } else {
        proposedSort = header;
      }
      if (this.sort == "") {
        this.internalSort = proposedSort;
      }
      this.$emit("sort", proposedSort);
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
    select(item, value) {
      this.$emit("select", { item, type: value });
    },
    toTitleCase(str) {
      str = this.camelCaseToTitleCase(str);
      str = str.replace(/_/g, " ");
      return str.replace(/(^|\s)\S/g, function(t) {
        return t.toUpperCase();
      });
    },
  },
  computed: {
    computedHeaderHeight() {
      let sizeOfHeader = 41;
      if (this.condensed) {
        sizeOfHeader = 33;
      }
      return sizeOfHeader;
    },
    computedTopOffset() {
      return this.tableTitles.length * this.computedHeaderHeight;
    },
    tableHeaders() {
      if (this.items.length > 0) {
        let keys = Object.keys(this.items[0].data);
        if (this.headers.length != 0) {
          let handledKeys = this.headers.map((x) => x.key);
          let titles = this.headers.map((x) => x.text);
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
            key,
          });
        }
        return headers;
      } else if (this.headers.length > 0) {
        return this.headers;
      } else {
        throw new Error(
          "Table component: no headers defined and no items provided"
        );
      }
    },
  },
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
.portion-marking-container {
  display: flex;
  justify-content: space-between;
}
@-moz-keyframes loading-spin {
  to {
    -moz-transform: rotate(-360deg);
  }
}
@-webkit-keyframes loading-spin {
  to {
    -webkit-transform: rotate(-360deg);
  }
}
@keyframes loading-spin {
  to {
    transform: rotate(-360deg);
  }
}

.loading-spin {
  animation: loading-spin 1000ms linear infinite;
}
</style>
