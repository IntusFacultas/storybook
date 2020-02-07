<template>
  <pagination-container aria-label="Page navigation" :flavor="flavor">
    <pagination-list>
      <pagination-item v-if="showFirstLast">
        <pagination-button @click="select(1)">First</pagination-button>
      </pagination-item>
      <pagination-item>
        <pagination-button @click="step(-1)">&#10094;</pagination-button>
      </pagination-item>
      <pagination-item v-for="(page,index) in leftMargin" :key="'left' + index">
        <pagination-button @click="select(page)">{{page}}</pagination-button>
      </pagination-item>
      <pagination-item v-if="leftMargin.length == marginPages">
        <pagination-button :disabled="true">...</pagination-button>
      </pagination-item>
      <pagination-item
        v-for="(page, index) in slide"
        :active="currentPage == page"
        :key="'slide' + index"
      >
        <pagination-button
          @click="select(page)"
          :flavor="flavor"
          :active="currentPage == page"
        >{{page}}</pagination-button>
      </pagination-item>
      <pagination-item v-if="rightMargin.length == marginPages">
        <pagination-button :disabled="true">...</pagination-button>
      </pagination-item>
      <pagination-item v-for="(page,index) in rightMargin" :key="'right' + index">
        <pagination-button @click="select(page)">{{page}}</pagination-button>
      </pagination-item>
      <pagination-item>
        <pagination-button @click="step(1)">&#10095;</pagination-button>
      </pagination-item>
      <pagination-item v-if="showFirstLast">
        <pagination-button @click="select(pageCount)">Last</pagination-button>
      </pagination-item>
    </pagination-list>
  </pagination-container>
</template>

<script>
import styled from "vue-styled-components";
import Theme from "@intus/designsystem";
require("@intus/fonts");
const props = {
  flavor: String,
  active: Boolean,
  disabled: Boolean,
  defaultTheme: {
    type: Object,
    default: function() {
      return Theme;
    }
  }
};
const PaginationContainer = styled("nav", props)`
  & button {
    font-family: "Roboto", sans-serif;
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
  }
  & button:focus {
    outline: none;
    box-shadow: 0 0 0 0.2rem
      ${props =>
        props.theme && props.theme[props.flavor]
          ? props.theme[props.flavor].background.color + "80"
          : props.defaultTheme[props.flavor] &&
            props.defaultTheme[props.flavor].background.color
          ? props.defaultTheme[props.flavor].background.color + "80"
          : "#ddcccc80"};
    color: ${props =>
      props.theme && props.theme[props.flavor]
        ? props.theme[props.flavor].color.focus
        : props.defaultTheme[props.flavor] &&
          props.defaultTheme[props.flavor].color.focus
        ? props.defaultTheme[props.flavor].color.focus
        : "#000"};
  }
  & button:hover {
    background-color: ${props =>
      props.theme && props.theme[props.flavor]
        ? props.theme[props.flavor].background.hover
        : props.defaultTheme[props.flavor]
        ? props.defaultTheme[props.flavor].background.hover
        : "#d5d5d5"};
    color: ${props =>
      props.theme && props.theme[props.flavor]
        ? props.theme[props.flavor].color.hover
        : props.defaultTheme[props.flavor]
        ? props.defaultTheme[props.flavor].color.hover
        : "#222"};
    border-color: ${props =>
      props.theme && props.theme[props.flavor]
        ? props.theme[props.flavor].border.hover
        : props.defaultTheme[props.flavor]
        ? props.defaultTheme[props.flavor].border.hover
        : "#d5d5d5"};
  }
  & * {
    -webkit-touch-callout: none; /* iOS Safari */
    -webkit-user-select: none; /* Safari */
    -khtml-user-select: none; /* Konqueror HTML */
    -moz-user-select: none; /* Old versions of Firefox */
    -ms-user-select: none; /* Internet Explorer/Edge */
    user-select: none;
  }
`;

const PaginationList = styled("ul", props)`
  padding-left: 0px;
  display: flex;
  list-style: none;
`;
const PaginationItem = styled("li", props)`
  ${props =>
    props.active
      ? `
    background-color: rgba(0,0,0, .15)
  `
      : ""}
`;
const PaginationButton = styled("button", props)`
  ${props =>
    props.disabled
      ? `
        opacity: 0.9;
        cursor: not-allowed;
        pointer-events: none;
    `
      : ""}
  ${props =>
    props.active
      ? `
        pointer-events: none;
        border-bottom-width: 2px;
        background-color: ${
          props.theme && props.theme[props.flavor]
            ? props.theme[props.flavor].background.hover
            : props.defaultTheme[props.flavor]
            ? props.defaultTheme[props.flavor].background.hover
            : "#e8e8e8"
        } !important;
        color: ${
          props.theme && props.theme[props.flavor]
            ? props.theme[props.flavor].color.hover
            : props.defaultTheme[props.flavor]
            ? props.defaultTheme[props.flavor].color.hover
            : "#222"
        } !important;
        border-color: ${
          props.theme && props.theme[props.flavor]
            ? props.theme[props.flavor].border.hover
            : props.defaultTheme[props.flavor]
            ? props.defaultTheme[props.flavor].border.hover
            : "#d5d5d5"
        } !important;
    `
      : ""}
  padding: 0.5rem 0.75rem;
  border-width: 1px;
  border-style: solid;
  min-height: 39px;
  display: block;
  font-weight: bold;
  font-size: 16px;
  cursor: pointer;
  transition: color 0.1s ease-in-out, background-color 0.1s ease-in-out,
    border-color 0.1s ease-in-out, box-shadow 0.1s ease-in-out;
`;
export const Paginator = {
  components: {
    PaginationContainer,
    PaginationList,
    PaginationItem,
    PaginationButton
  },
  data() {
    return {
      pages: [],
      leftFence: -1,
      rightFence: -1
    };
  },
  mounted() {
    for (let page = 1; page < this.pageCount + 1; page++) {
      this.pages.push(page);
    }
  },
  props: {
    flavor: {
      type: String,
      default: ""
    },
    showFirstLast: {
      type: Boolean,
      default: false
    },
    currentPage: {
      type: Number,
      required: 1
    },
    pageCount: {
      type: Number,
      required: true
    },
    marginPages: {
      type: Number,
      default: 1
    },
    pageRange: {
      type: Number,
      default: 3
    }
  },
  methods: {
    step(s) {
      this.$emit("select", this.currentPage + s);
    },
    select(page) {
      this.$emit("select", page);
    }
  },
  watch: {
    pageCount(newval, oldval) {
      this.pages = [];
      for (let page = 1; page < this.pageCount + 1; page++) {
        this.pages.push(page);
      }
    }
  },
  computed: {
    slide() {
      let radius = Math.floor(this.pageRange / 2);
      let pageIndex = this.currentPage - 1;
      let bottom = pageIndex - radius;
      let top = pageIndex + radius + 1;
      if (bottom < 0) {
        top += Math.abs(bottom);
        bottom = 0;
      }
      if (top > this.pageCount) {
        bottom -= Math.abs(top - this.pageCount);
        top = this.pageCount;
      }
      bottom = bottom >= 0 ? bottom : 0;
      top = top <= this.pageCount ? top : this.pageCount;
      this.leftFence = bottom;
      this.rightFence = top;
      return this.pages.slice(this.leftFence, this.rightFence);
    },
    leftMargin() {
      if (this.leftFence < this.marginPages) {
        return this.pages.slice(0, this.leftFence);
      }
      return this.pages.slice(0, this.marginPages);
    },
    rightMargin() {
      if (this.rightFence > this.pageCount - this.marginPages) {
        return this.pages.slice(this.rightFence, this.pageCount);
      }
      return this.pages.slice(
        this.pageCount - this.marginPages,
        this.pageCount
      );
    }
  }
};
export default Paginator;
</script>

<style>
</style>