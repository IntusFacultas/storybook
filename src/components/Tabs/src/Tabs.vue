<template>
  <tab-container ref="container" :flavor="flavor">
    <tab-list ref="tabs">
      <tab-item
        v-for="(tab, index) in tabs"
        :key="index"
        :flavor="flavor"
        :index="index"
        :tab="tab"
        @select="passSelect"
      ></tab-item>
    </tab-list>
  </tab-container>
</template>

<script>
import styled from "vue-styled-components";
import Theme from "@IntusFacultas/design-system";

const props = {
  flavor: String,
  disabled: Boolean,
  active: Boolean,
  defaultTheme: {
    type: Object,
    default: function() {
      return Theme;
    }
  }
};
const TabContainer = styled("nav", props)`
  display: flex;
  flex-direction: row;
  border-bottom-color: ${props.theme && props.theme[props.flavor]
    ? props.theme[props.flavor].border.color
    : props.defaultTheme[props.flavor]
    ? props.defaultTheme[props.flavor].border.color
    : "#dee2e6 "};
  border-bottom-style: solid;
  border-bottom-width: 1px;
`;
const TabList = styled.ul`
  list-style: none;
  padding-left: 0px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  margin-bottom: -1px;
  & * {
    font-family: "Open Sans Regular", -apple-system, BlinkMacSystemFont,
      "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif,
      "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
  }
`;
const Tab = styled("li", props)`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  cursor: pointer;
  min-width: 100px;
  padding: 0.1rem 1rem 0 1rem;
  height: 40px;
  ${props =>
    props.disabled
      ? `
        pointer-events: none;
        cursor: not-allowed
        `
      : ""}
  border-radius: 4px 4px 0px 0px;
  ${props =>
    props.active
      ? `
        background-color: ${
          props.theme && props.theme[props.flavor]
            ? props.theme[props.flavor].background.hover
            : props.defaultTheme[props.flavor]
            ? props.defaultTheme[props.flavor].background.hover
            : "white"
        };
        color: ${
          props.theme && props.theme[props.flavor]
            ? props.theme[props.flavor].color.color
            : props.defaultTheme[props.flavor]
            ? props.defaultTheme[props.flavor].color.color
            : "#222"
        };
        stroke: ${
          props.theme && props.theme[props.flavor]
            ? props.theme[props.flavor].background.color
            : props.defaultTheme[props.flavor]
            ? props.defaultTheme[props.flavor].background.color
            : "#222"
        };
        fill: ${
          props.theme && props.theme[props.flavor]
            ? props.theme[props.flavor].color.color
            : props.defaultTheme[props.flavor]
            ? props.defaultTheme[props.flavor].color.color
            : "#222"
        };
        color: ${
          props.theme && props.theme[props.flavor]
            ? props.theme[props.flavor].color.color
            : props.defaultTheme[props.flavor]
            ? props.defaultTheme[props.flavor].color.color
            : "#222"
        };

        border-top-color: ${
          props.theme && props.theme[props.flavor]
            ? props.theme[props.flavor].border.color
            : props.defaultTheme[props.flavor]
            ? props.defaultTheme[props.flavor].border.color
            : "#dee2e6 "
        };
        border-top-style: solid;
        border-top-width: 1px;

        border-left-color: ${
          props.theme && props.theme[props.flavor]
            ? props.theme[props.flavor].border.color
            : props.defaultTheme[props.flavor]
            ? props.defaultTheme[props.flavor].border.color
            : "#dee2e6 "
        };
        border-left-style: solid;
        border-left-width: 1px;

        border-right-color: ${
          props.disabled
            ? "rgba(0, 0, 0, 0.3)"
            : props.theme && props.theme[props.flavor]
            ? props.theme[props.flavor].border.color
            : props.defaultTheme[props.flavor]
            ? props.defaultTheme[props.flavor].border.color
            : "#dee2e6 "
        };
        border-right-style: solid;
        border-right-width: 1px;
        `
      : `
        &:hover {
            background-color: #eee;
            text-decoration: none;
            outline: none;
        }
        & * {
          color: #222;
        }
    `}
  & * {
    ${props => (props.disabled ? `opacity: .6` : "")}
    text-decoration: none;
    outline: none;
    -webkit-touch-callout: none; /* iOS Safari */
    -webkit-user-select: none; /* Safari */
    -khtml-user-select: none; /* Konqueror HTML */
    -moz-user-select: none; /* Firefox */
    -ms-user-select: none; /* Internet Explorer/Edge */
    user-select: none; /* Non-prefixed version, currently supported by Chrome and Opera */
  }
`;
const TabItem = {
  components: { Tab },
  props: {
    index: {
      type: Number,
      required: true
    },
    flavor: {
      type: String,
      default: ""
    },
    tab: {
      type: Object,
      required: true
    }
  },
  methods: {
    handleClick() {
      if (this.tab.active || this.tab.disabled) {
        return;
      }
      if (this.tab.type == "link") {
        window.location.href = this.tab.value;
      } else {
        this.tabClick(this.tab);
      }
    },
    tabClick(tab) {
      this.$emit("select", tab.value);
    }
  },
  template: `
        <tab
          :flavor='flavor'
          :disabled="tab.disabled"
          :active="tab.active"
          @click="handleClick"
          tabindex="0"
          @keyup.enter="handleClick"
          @keyup.space="handleClick"
          :role="tab.type == 'link' ? 'link' : 'button'">
            <a v-if="tab.type == 'link'" :href="tab.value">{{tab.text}}</a>
            <span v-else @click="tabClick(tab)">{{tab.text}}</span>
            <span v-html="tab.html"></span>
            <span v-if='tab.disabled' class="sr-only">(disabled)</span>
            <span v-if='tab.active' class="sr-only">(active)</span>
        </tab>
    `
};
export const Tabs = {
  components: { TabContainer, TabItem, TabList, Tab },
  props: {
    flavor: {
      type: String,
      default: ""
    },
    tabs: {
      type: Array,
      default() {
        return [];
      }
    }
  },
  methods: {
    passSelect(value) {
      this.$emit("select", value);
    }
  }
};
export default Tabs;
</script>

<style>
.sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  -webkit-clip-path: inset(50%);
  clip-path: inset(50%);
  border: 0;
}
</style>
