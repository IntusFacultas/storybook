<template>
  <menu-container>
    <multi-menu :height="height">
      <menu-item
        tabindex="0"
        role="button"
        v-for="(item, index) in computedItems"
        @click="select(item)"
        @keyup.enter="select(item)"
        @keyup.space="select(item)"
        :key="`selectable${index}`"
        ><span></span>{{ item.display }}
        <badge :flavor="flavor">&#x276F;</badge>
      </menu-item>
    </multi-menu>
    <menu-buttons>
      <n-button
        @click="selectAll()"
        :flavor="flavor"
        :small="true"
        class="menu-multi-select-flipped"
        >&#10094;&#10094;</n-button
      >
      <n-button @click="deselectAll()" :flavor="flavor" :small="true"
        >&#10094;&#10094;</n-button
      >
    </menu-buttons>
    <multi-menu :height="height">
      <menu-item
        role="button"
        tabindex="0"
        @click="deselect(item)"
        @keyup.enter="deselect(item)"
        @keyup.space="deselect(item)"
        v-for="(item, index) in internalValue"
        :key="`selected${index}`"
        ><badge class="menu-multi-select-flipped" :flavor="flavor"
          >&#x276F;</badge
        >{{ item.display }} <span></span
      ></menu-item>
    </multi-menu>
  </menu-container>
</template>

<script>
import styled from "vue-styled-components";
import Theme from "@IntusFacultas/design-system";
import Badge from "@IntusFacultas/badge";
import { NButton } from "@IntusFacultas/button";
const props = {
  flavor: String,
  height: String,
  defaultTheme: {
    type: Object,
    default: function() {
      return Theme;
    }
  }
};
const MenuButtons = styled.div`
  display: flex;
  flex-direction: column;

  justify-content: center;
  margin: 16px 5px;
  padding: 5px 0px;
  & button {
    margin: 5px 0px;
  }
`;
const MenuContainer = styled.div`
  display: flex;
  justify-content: space-between;
  & * {
    font-family: "Open Sans Regular", -apple-system, BlinkMacSystemFont,
      "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif,
      "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
  }
  padding: 10px 10px;
`;
const MultiMenu = styled("ul", props)`
  width: 50%;
  height: ${props => props.height};
  overflow-y: auto;
  border: 1px solid #dcdcdc;
  border-radius: 4px;
  padding: 5px 10px;
  list-style-type: none;
  background-color: white;
`;
const MenuItem = styled.li`
  color: #222;
  display: flex;
  user-select: none;
  justify-content: space-between;
  padding: 2px 5px;
  transition: color 0.1s ease-in-out, background-color 0.1s ease-in-out,
    border-color 0.1s ease-in-out, box-shadow 0.1s ease-in-out;
  cursor: pointer;
  &:hover {
    background-color: #fafafa;
  }
`;
export const MenuMultiSelect = {
  components: {
    MenuContainer,
    MultiMenu,
    MenuItem,
    Badge,
    MenuButtons,
    NButton
  },
  data() {
    return {
      internalValue: []
    };
  },
  watch: {
    value(newVal) {
      this.internalValue = newVal;
    }
  },
  props: {
    flavor: {
      type: String,
      default: ""
    },
    value: {
      type: Array,
      default() {
        return [];
      }
    },
    height: {
      type: String,
      default() {
        return "100px";
      }
    },
    items: {
      type: Array,
      default() {
        return [];
      }
    }
  },
  mounted() {
    this.internalValue = this.value;
  },
  methods: {
    select(item) {
      this.internalValue.push(item);
      this.$emit("change", this.internalValue);
    },
    deselect(item) {
      this.internalValue.splice(
        this.internalValue.map(x => x.value).indexOf(item.value),
        1
      );
      this.$emit("change", this.internalValue);
    },
    selectAll() {
      this.internalValue = this.items.slice();
      this.$emit("change", this.internalValue);
    },
    deselectAll() {
      this.internalValue = [];
      this.$emit("change", this.internalValue);
    }
  },
  computed: {
    computedItems() {
      let mappedInternals = this.internalValue.map(x => x.value);
      return this.items.filter(x => mappedInternals.indexOf(x.value) == -1);
    }
  }
};
export default MenuMultiSelect;
</script>

<style>
.menu-multi-select-flipped {
  transform: rotate(180deg);
}
</style>
