<template>
  <div class="selectme-container">
    <n-input
      :id="id"
      autocomplete="off"
      type="text"
      placeholder="Search..."
      @click="openDropdown"
      @focus="openDropdown"
      @input="openDropdown"
      @blur="closeDropdown"
      :flavor="flavor"
      v-model="optionSearch"
      @keydown.delete="handleBackspace"
      @keydown.down="handleDown"
      @keydown.up="handleUp"
      @keydown.left="handleLeft"
      @keydown.right="handleRight"
      @keyup.enter="selectHoveredOption"
      :style="{'padding-left': calculatedPadding + 'px'}"
      :disabled="disabled"
    ></n-input>
    <!-- Dropdown for all options -->
    <div v-if="showDropdown" class="selectme-dropdown" :style="{width: calculatedWidth + 'px'}">
      <ul>
        <li
          @keyup.enter="selectHoveredOption"
          @keyup.space="selectHoveredOption"
          tabindex="0"
          role="button"
          @focus="hoverElement()"
          @keydown.down="hoverOption(1)"
          @keydown.up="hoverOption(-1)"
          @blur="closeDropdown"
          v-for="(option, index) in selectOptions"
          :key="'dropdown-' + option[valueAttribute] + '-' + index"
          :value="option[valueAttribute]"
          :ref="'hover' + option[valueAttribute]"
          @click="selectOption(option)"
          :class="{'selectme-selected': contained(option), 'selectme-hovered': isHovered(option, hoveredOption)}"
        >
          <span class="sr-only" v-if="contained(option)">Active:</span>
          <span class="sr-only" v-else>Press enter to select:</span>
          {{option[displayAttribute]}}
        </li>
        <li v-if="selectOptions.length == 0">No results found</li>
      </ul>
    </div>
    <!-- Dropdown for selected values. Only shows when selected overflow input-->
    <div
      class="selectme-selected"
      :style="{top: calculatedHeight + 'px' }"
      v-show="selectBoxWidth > computedCutOff && selectedOptions.length > 0"
      ref="selectDropdownBox"
    >
      <n-button
        @click="toggleSelectedDropdown"
        class="selectme-button selectme-badge"
        :flavor="badgeFlavor"
      >
        {{selectedOptions.length}} selected...
        <span v-if="!showSelected">&#x25BE;</span>
        <span v-else>&#x25B4;</span>
      </n-button>
      <div class="selectme-dropdown" v-show="showSelected">
        <ul>
          <li
            tabindex="0"
            v-for="(option, index) in selectedOptions"
            :key="'selected-' + option[valueAttribute] + '-' + index"
            role="button"
            @keyup.enter="deselectDropdownOption(option)"
            @keyup.space="deselectDropdownOption(option)"
            :ref="'selected' + option[valueAttribute]"
            :class="{'selectme-hovered': isHovered(option, hoveredSelectedOption)}"
            @click="deselectDropdownOption(option)"
          >
            <span>&#215;</span>
            {{option[displayAttribute]}}
          </li>
        </ul>
      </div>
    </div>
    <!-- Inline selected options -->
    <div
      class="selectme-selected"
      ref="selectBox"
      :style="{top:  calculatedHeight + 'px' }"
      :class="{'hidden-inline': selectBoxWidth > computedCutOff}"
    >
      <n-button
        :flavor="badgeFlavor"
        tabindex="-1"
        class="selectme-button selectme-badge"
        :class="{'selectme-single-select-badge': !multiSelect}"
        v-for="(option, index) in selectedOptions"
        @click="deselectOption(option)"
        :key="'selected-badge-' + option[valueAttribute] + '-' + index"
      >
        {{option[displayAttribute]}}
        <span :class="computedSpanClass">&#215;</span>
      </n-button>
    </div>
  </div>
</template>

<script>
import styled from "vue-styled-components";
import Theme from "@intus/designsystem";
import { NInput } from "@intus/input";
import { NButton } from "@intus/button";
require("@intus/fonts");
const SelectMe = {
  name: "select-me",
  components: { NInput, NButton },
  data() {
    return {
      timeout: "",
      optionSearch: "",
      showOptions: false,
      showSelected: false,
      selectBoxWidth: 0,
      calculatedWidth: 0,
      calculatedHeight: 0,
      calculatedPadding: 0,
      selectedOptions: [],
      hoveredOption: {},
      hoveredSelectedOption: {},
      combinedPaddingPerBadge: 26,
      hoveredIndex: -1,
      hoveredSelectedIndex: -1
    };
  },
  props: {
    badgeFlavor: {
      type: String,
      default: "Primary"
    },
    flavor: {
      type: String,
      default: "LightBlue"
    },
    id: {
      type: String,
      default: ""
    },
    displayAttribute: {
      type: String,
      default: "text"
    },
    valueAttribute: {
      type: String,
      default: "value"
    },
    disabled: {
      type: Boolean,
      default: false
    },
    options: {
      type: Array,
      default: function() {
        return [];
      }
    },
    debug: {
      type: Boolean,
      default: false
    },
    multiSelect: {
      type: Boolean,
      default: false
    },
    initialValues: {
      type: Array,
      default: function() {
        return [];
      }
    }
  },
  computed: {
    computedSpanClass: function() {
      var self = this;
      if (!self.multiSelect) return ["selectme-badge-single-span"];
      return [];
    },
    computedCutOff: function() {
      var self = this;
      return self.calculatedWidth - 100;
    },
    showDropdown: function() {
      var self = this;
      return self.showOptions || self.debug;
    },
    selectOptions: function() {
      var self = this;
      let options = self.options;
      function filter(fn, array) {
        var rtArray = [];
        for (var x = 0; x < array.length; x++) {
          if (fn(array[x])) {
            rtArray.push(array[x]);
          }
        }
        return rtArray;
      }
      if (self.optionSearch) {
        function textContains(n) {
          return (
            n[self.displayAttribute]
              .toUpperCase()
              .indexOf(self.optionSearch.toUpperCase()) > -1
          );
        }
        options = filter(textContains, options);
      }
      return options;
    }
  },
  methods: {
    deselectDropdownOption: function(option) {
      var self = this;
      self.deselectOption(option);
      window.requestAnimationFrame(self.setSelectBoxWidth);
      self.showSelected = false;
      self.$el.firstChild.focus();
    },
    handleOffClick: function(event) {
      var self = this;
      function isDescendant(parent, child) {
        var node = child.parentNode;
        while (node != null) {
          if (node == parent) {
            return true;
          }
          node = node.parentNode;
        }
        return false;
      }
      if (!isDescendant(self.$refs.selectDropdownBox, event.target)) {
        self.showSelected = false;
      }
    },
    toggleSelectedDropdown: function() {
      var self = this;
      self.showSelected = !self.showSelected;
    },
    selectHoveredOption: function() {
      var self = this;
      if (self.showOptions) {
        if (Object.keys(self.hoveredOption).length > 0) {
          if (!self.contains(self.hoveredOption, self.selectedOptions)) {
            if (!self.multiSelect) self.selectedOptions = [];
            self.selectedOptions.push(Object.assign({}, self.hoveredOption));
          } else {
            self.deselectOption(self.hoveredOption, false);
          }
          self.$emit("input", self.selectedOptions);
          self.hoveredOption = {};
          self.hoveredIndex = -1;
          window.requestAnimationFrame(self.setSelectBoxWidth);
          self.setCalculatedPadding();
          self.$el.firstChild.focus();
        }
      } else if (self.showSelected) {
        self.deselectOption(self.hoveredSelectedOption);
        self.$emit("input", self.selectedOptions);
        self.hoveredSelectedOption = {};
        self.showSelected = false;
        setTimeout(function() {
          self.hoveredIndex = -1;
          window.requestAnimationFrame(self.setSelectBoxWidth);
          self.setCalculatedPadding();
          self.$el.firstChild.focus();
        }, 550);
      }
    },
    hoverElement: function(e) {
      var self = this;
      clearTimeout(self.timeout);
      self.hoveredOption = self.selectOptions.filter(
        option =>
          option[self.valueAttribute] ==
          document.activeElement.getAttribute("value")
      )[0];
      self.hoveredIndex = self.selectOptions
        .map(option => option[self.valueAttribute])
        .indexOf(self.hoveredOption[self.valueAttribute]);
    },
    hoverOption: function(step) {
      var self = this;
      var proposedIndex = self.hoveredIndex + step;
      self.openDropdown();
      if (proposedIndex >= self.selectOptions.length || proposedIndex < -1) {
        return;
      } else if (proposedIndex == -1) {
        self.hoveredIndex = proposedIndex;
        self.$el.firstChild.focus();
        self.closeDropdown();
        self.hoveredOption = {};
      } else {
        self.hoveredIndex = proposedIndex;
        self.hoveredOption = self.selectOptions[self.hoveredIndex];
        self.$forceUpdate();
      }
    },
    hoverSelectedOption: function(step) {
      var self = this;
      var proposedIndex = self.hoveredIndex + step;
      self.showSelected = true;
      if (proposedIndex >= self.selectedOptions.length || proposedIndex < -1) {
        return;
      } else if (proposedIndex == -1) {
        self.hoveredIndex = proposedIndex;
        self.$el.firstChild.focus();
        self.showSelected = false;
        self.hoveredSelectedOption = {};
      } else {
        self.hoveredIndex = proposedIndex;
        self.hoveredSelectedOption = self.selectedOptions[self.hoveredIndex];
        self.$forceUpdate();
      }
    },
    contains: function(option, options) {
      var self = this;
      for (var x = 0; x < options.length; x++) {
        let textMatches =
          option[self.displayAttribute] == options[x][self.displayAttribute];
        let valueMatches =
          option[self.valueAttribute] == options[x][self.valueAttribute];
        if (textMatches && valueMatches) return true;
      }
      return false;
    },
    isHovered: function(option, hoverOption) {
      var self = this;
      let textMatches =
        option[self.displayAttribute] == hoverOption[self.displayAttribute];
      let valueMatches =
        option[self.valueAttribute] == hoverOption[self.valueAttribute];
      return textMatches && valueMatches;
    },
    handleUp: function() {
      var self = this;
      if (self.showSelected) {
        self.hoverSelectedOption(-1);
      } else if (self.showOptions) {
        self.hoverOption(-1);
      } else {
        self.hoverOption(-1);
      }
    },
    handleDown: function() {
      var self = this;
      if (self.showSelected) {
        self.hoverSelectedOption(1);
      } else if (self.showOptions) {
        self.hoverOption(1);
      } else {
        self.hoverOption(1);
      }
    },
    handleLeft: function() {
      var self = this;
      if (
        self.optionSearch.length == 0 &&
        self.selectedOptions.length > 0 &&
        (self.selectBoxWidth > self.computedCutOff) & !self.showSelected
      ) {
        self.closeDropdown();
        self.showSelected = true;
      }
    },
    handleRight: function() {
      var self = this;
      if (self.showSelected) {
        self.showSelected = false;
        self.hoveredSelectedOption = {};
        self.$el.firstChild.focus();
      }
    },
    handleBackspace: function() {
      var self = this;
      if (
        self.optionSearch.length == 0 &&
        self.selectedOptions.length > 0 &&
        self.selectBoxWidth <= self.computedCutOff
      ) {
        var el = self.selectedOptions.pop();
        self.$emit("input", self.selectedOptions);
        window.requestAnimationFrame(self.setSelectBoxWidth);
        self.setCalculatedPadding();
        self.optionSearch = el[self.displayAttribute];
      }
    },
    contained: function(option) {
      var self = this;
      return self.contains(option, self.selectedOptions);
    },
    selectOption: function(option) {
      var self = this;
      if (!self.contains(option, self.selectedOptions)) {
        if (!self.multiSelect) {
          self.selectedOptions = [];
        }
        self.selectedOptions.push(option);
      } else {
        self.deselectOption(option);
      }
      self.optionSearch = "";
      self.closeDropdown();
      self.$emit("input", self.selectedOptions);
      window.requestAnimationFrame(self.setSelectBoxWidth);
      self.setCalculatedPadding();
    },
    deselectOption: function(option, closeDropdown) {
      var self = this;
      function findIndex(option, options) {
        for (var x = 0; x < options.length; x++) {
          if (option[self.valueAttribute] == options[x][self.valueAttribute]) {
            return x;
          }
        }
        return -1;
      }
      var index = findIndex(option, self.selectedOptions);
      self.selectedOptions.splice(index, 1);
      self.$forceUpdate();
      if (typeof closeDropdown === "undefined" || closeDropdown) {
        self.closeDropdown();
      }
      self.$emit("input", self.selectedOptions);
      window.requestAnimationFrame(self.setSelectBoxWidth);
      self.setCalculatedPadding();
    },
    closeDropdown: function() {
      var self = this;
      var elements = Object.values(self.$refs).map(x => x[0]);
      self.hoveredIndex = -1;
      self.timeout = setTimeout(function() {
        self.showOptions = false;
      }, 200);
    },
    openDropdown: function() {
      var self = this;
      clearTimeout(self.timeout);
      if (self.disabled) {
        return false;
      }
      self.hoveredIndex = -1;
      self.setCalculatedWidth();
      self.showSelected = false;
      self.showOptions = true;
    },
    setSelectBoxWidth: function() {
      var self = this;
      if (self.$refs.selectBox)
        self.selectBoxWidth = self.$refs.selectBox.clientWidth + 5;
      window.requestAnimationFrame(self.setSelectBoxWidth);
    },
    setCalculatedPadding: function() {
      var self = this;
      if (self.selectBoxWidth > self.computedCutOff) {
        self.calculatedPadding = self.$refs.selectDropdownBox.clientWidth + 10;
      } else {
        self.calculatedPadding = self.selectBoxWidth;
      }
      window.requestAnimationFrame(self.setCalculatedPadding);
    },
    setCalculatedWidth: function() {
      var self = this;
      setTimeout(function() {
        try {
          self.calculatedHeight = self.$el.firstChild.offsetHeight * -1 + 5;
          if (!self.multiSelect) {
            self.calculatedHeight -= 4;
          }
          self.calculatedWidth = self.$el.firstChild.offsetWidth;
          window.requestAnimationFrame(self.setSelectBoxWidth);
          self.setCalculatedPadding();
        } catch (err) {}
      }, 50);
    }
  },
  mounted: function() {
    var self = this;
    window.requestAnimationFrame(self.setCalculatedPadding);
    window.addEventListener("resize", self.setCalculatedWidth);
    window.addEventListener("click", self.handleOffClick);
    self.setCalculatedWidth();
    setTimeout(function() {
      self.setCalculatedWidth();
    }, 200);
    for (var x = 0; x < self.initialValues.length; x++) {
      var initVal = self.initialValues[x];
      for (var y = 0; y < self.options.length; y++) {
        if (
          self.options[y][self.valueAttribute] == initVal[self.valueAttribute]
        ) {
          self.selectedOptions.push(Object.assign({}, self.options[y]));
          break;
        }
      }
    }
  }
};
export default SelectMe;
</script>
<style scoped>
.selectme-button {
  height: 30px;
  margin-top: -2px;
}
.selectme-single-select-badge {
  margin-top: 1px;
}
.hidden-inline {
  opacity: 0;
  pointer-events: none;
}
.selectme-badge {
  display: inline-block;
  padding: 0.25em 0.4em;
  font-size: 75%;
  font-weight: 700;
  line-height: 1;
  text-align: center;
  white-space: nowrap;
  vertical-align: baseline;
  border-radius: 0.25rem;
  font-weight: 700 !important;
  font-size: 12px !important;
  font-family: "Segoe UI" !important;
}
@import "./selectme.css";
</style>
