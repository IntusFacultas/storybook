<template>
  <div class="selectme-container">
    <n-input
      :id="name"
      autocomplete="off"
      type="text"
      placeholder="Search..."
      @click="openDropdown"
      @focus="openDropdown"
      @input="
        openDropdown();
        debounce(fireAjax, 200)();
      "
      @blur="closeDropdown"
      :flavor="flavor"
      v-model="optionSearch"
      @keydown.delete="handleBackspace"
      @keydown.down="handleDown"
      @keydown.up="handleUp"
      @keydown.left="handleLeft"
      @keydown.right="handleRight"
      @keyup.enter="selectHoveredOption"
      :style="{ 'padding-left': calculatedPadding + 'px' }"
      :disabled="disabled"
    ></n-input>
    <!-- Dropdown for all options -->
    <div v-if="showDropdown" class="selectme-dropdown" :style="{ width: calculatedWidth + 'px' }">
      <ul>
        <li
          v-for="(option, index) in selectOptions"
          tabindex="0"
          role="button"
          :key="'dropdown-' + option[valueAttribute] + '-' + index"
          :value="option[valueAttribute]"
          :ref="'hover' + option[valueAttribute]"
          @focus="hoverElement()"
          @keyup.space="selectHoveredOption"
          @keydown.down="hoverOption(1)"
          @keydown.up="hoverOption(-1)"
          @blur="closeDropdown"
          @keyup.enter="selectHoveredOption"
          @click="selectOption(option)"
          :class="{
            'selectme-selected': contained(option),
            'selectme-hovered': isHovered(option, hoveredOption),
          }"
        >
          <span class="sr-only" v-if="contained(option)">Active:</span>
          <span class="sr-only" v-else>Press enter to select:</span>
          {{ option[displayAttribute] }}
        </li>
        <li v-if="loadAjax && loading">Loading...</li>
        <li
          v-if="loadAjax && !initialized && !errored && !loading"
        >Please enter 1 or more characters</li>
        <li v-if="errored">There was an issue contacting the server.</li>
        <li
          v-if="
            (loadAjax && !errored && initialized && !loading && loadedOptions.length == 0) ||
              (!loadAjax && selectOptions.length == 0)
          "
        >No results found</li>
      </ul>
    </div>
    <!-- Dropdown for selected values. Only shows when selected overflow input-->
    <div
      class="selectme-selected"
      :style="{
        top: multiSelect
          ? `${calculatedHeight}px`
          : `${calculatedHeight + 4}px`,
      }"
      v-show="
        selectBoxWidth > computedCutOff &&
          selectedOptions.length > 0 &&
          canBeEmpty &&
          multiSelect
      "
      ref="selectDropdownBox"
      data-dropdown="parent"
    >
      <n-button
        @click="toggleSelectedDropdown"
        class="selectme-button selectme-badge"
        :flavor="badgeFlavor"
        data-dropdown="toggle"
      >
        {{ selectedOptions.length }} selected...
        <span
          class="select-me-ignore-me"
          v-if="!showSelected"
        >&#x25BE;</span>
        <span class="select-me-ignore-me" v-else>&#x25B4;</span>
      </n-button>
      <div class="selectme-dropdown" v-show="showSelected">
        <ul>
          <li
            tabindex="0"
            v-for="(option, index) in selectedOptions"
            :key="'selected-' + option[valueAttribute] + '-' + index"
            role="button"
            data-dropdown="child"
            @keyup.enter="deselectDropdownOption(option)"
            @keyup.space="deselectDropdownOption(option)"
            :ref="'selected' + option[valueAttribute]"
            :class="{
              'selectme-hovered': isHovered(option, hoveredSelectedOption),
            }"
            @click="deselectDropdownOption(option)"
          >
            <span>&#215;</span>
            {{ option[displayAttribute] }}
          </li>
        </ul>
      </div>
    </div>
    <!-- Inline selected options -->
    <div
      class="selectme-selected"
      ref="selectBox"
      :style="{ top: calculatedHeight + 'px' }"
      :class="{
        'hidden-inline':
          selectBoxWidth > computedCutOff && canBeEmpty && multiSelect,
      }"
    >
      <n-button
        :flavor="badgeFlavor"
        class="selectme-button selectme-badge"
        :class="{ 'selectme-single-select-badge': !multiSelect }"
        v-for="(option, index) in selectedOptions"
        @click="deselectOption(option)"
        :key="'selected-badge-' + option[valueAttribute] + '-' + index"
      >
        {{ option[displayAttribute] }}
        <span
          :class="computedSpanClass"
          class="select-me-ignore-me"
          v-if="canBeEmpty || (!canBeEmpty && selectedOptions.length > 1)"
        >&#215;</span>
      </n-button>
    </div>
  </div>
</template>

<script>
import { NInput } from "@IntusFacultas/input";
import { NButton } from "@IntusFacultas/button";
import axios from "axios";
const SelectMe = {
  name: "select-me",
  components: { NInput, NButton },
  data() {
    return {
      loading: false,
      timeout: "",
      optionSearch: "",
      initialized: false,
      errored: false,
      showOptions: false,
      ajaxTimeout: null,
      showSelected: false,
      selectBoxWidth: 0,
      calculatedWidth: 0,
      calculatedHeight: 0,
      calculatedPadding: 0,
      selectedOptions: [],
      hoveredOption: {},
      loadedOptions: [],
      hoveredSelectedOption: {},
      combinedPaddingPerBadge: 26,
      hoveredIndex: -1,
      hoveredSelectedIndex: -1
    };
  },
  watch: {
    options: {
      handler() {
        if (
          this.selectedOptions.length == 0 &&
          !this.canBeEmpty &&
          this.options.length != 0
        ) {
          this.selectOption(this.options[0]);
        }
      },
      deep: true
    },
    value(newValue) {
      this.selectedOptions = newValue;
      window.requestAnimationFrame(this.setSelectBoxWidth);
      this.setCalculatedPadding();
    }
  },
  props: {
    value: {
      type: Array,
      default() {
        return [];
      }
    },
    name: {
      type: String,
      required: true
    },
    loadAjax: {
      type: Boolean,
      default: false
    },
    endpoint: {
      type: String,
      default: false
    },
    badgeFlavor: {
      type: String,
      default: "Primary"
    },
    flavor: {
      type: String,
      default: "LightBlue"
    },
    displayAttribute: {
      type: String,
      default: "text"
    },
    valueAttribute: {
      type: String,
      default: "value"
    },
    canBeEmpty: {
      type: Boolean,
      default: true
    },
    disabled: {
      type: Boolean,
      default: false
    },
    options: {
      type: Array,
      default() {
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
      default() {
        return [];
      }
    }
  },
  computed: {
    computedSpanClass() {
      var self = this;
      if (!self.multiSelect) return ["selectme-badge-single-span"];
      return [];
    },
    computedCutOff() {
      var self = this;
      return self.calculatedWidth - 100;
    },
    showDropdown() {
      var self = this;
      return self.showOptions || self.debug;
    },
    selectOptions() {
      function textContains(n) {
        return (
          n[self.displayAttribute]
            .toUpperCase()
            .indexOf(self.optionSearch.toUpperCase()) > -1
        );
      }
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
      if (self.optionSearch && !self.loadAjax) {
        options = filter(textContains, options);
      }
      if (self.loadAjax) {
        return self.loadedOptions;
      }
      return options;
    }
  },
  methods: {
    deselectDropdownOption(option) {
      var self = this;
      self.deselectOption(option, false);
      window.requestAnimationFrame(self.setSelectBoxWidth);
    },
    handleOffClick(event) {
      var self = this;
      if (!event.target.attributes["data-dropdown"]) {
        self.showSelected = false;
      }
    },
    toggleSelectedDropdown() {
      var self = this;
      self.showSelected = !self.showSelected;
    },
    selectHoveredOption() {
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
          if (self.multiSelect) {
            self.$el.firstChild.focus();
          } else {
            self.closeDropdown();
          }
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
    hoverElement() {
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
    hoverOption(step) {
      var self = this;
      var proposedIndex = self.hoveredIndex + step;
      self.openDropdown();
      if (proposedIndex >= self.selectOptions.length) {
        self.hoveredIndex = 0;
        self.hoveredOption = self.selectOptions[self.hoveredIndex];
      } else if (proposedIndex < -1) {
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
    hoverSelectedOption(step) {
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
    contains(option, options) {
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
    isHovered(option, hoverOption) {
      var self = this;
      let textMatches =
        option[self.displayAttribute] == hoverOption[self.displayAttribute];
      let valueMatches =
        option[self.valueAttribute] == hoverOption[self.valueAttribute];
      return textMatches && valueMatches;
    },
    handleUp() {
      var self = this;
      if (self.showSelected) {
        self.hoverSelectedOption(-1);
      } else if (self.showOptions) {
        self.hoverOption(-1);
      } else {
        self.hoverOption(-1);
      }
    },
    handleDown() {
      var self = this;
      if (self.showSelected) {
        self.hoverSelectedOption(1);
      } else if (self.showOptions) {
        self.hoverOption(1);
      } else {
        self.hoverOption(1);
      }
    },
    handleLeft() {
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
    handleRight() {
      var self = this;
      if (self.showSelected) {
        self.showSelected = false;
        self.hoveredSelectedOption = {};
        self.$el.firstChild.focus();
      }
    },
    handleBackspace() {
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
    contained(option) {
      var self = this;
      return self.contains(option, self.selectedOptions);
    },
    debounce(func, wait, immediate) {
      var self = this;
      // pulled from https://davidwalsh.name/javascript-debounce-function
      return function() {
        var context = this,
          args = arguments;
        var later = function() {
          self.ajaxTimeout = null;
          if (!immediate) func.apply(context, args);
        };
        var callNow = immediate && !self.ajaxTimeout;
        clearTimeout(self.ajaxTimeout);
        self.ajaxTimeout = setTimeout(later, wait);
        if (callNow) func.apply(context, args);
      };
    },
    fireAjax() {
      var self = this;
      if (self.loadAjax && self.optionSearch) {
        self.loading = true;
        axios
          .get(self.endpoint, { params: { text: self.optionSearch } })
          .then(response => {
            self.initialized = true;
            self.loading = false;
            self.loadedOptions = response.data;
          })
          .catch(response => {
            self.loading = false;
            self.errored = true;
            console.error("SelectMe had a bad response from the server.");
            console.error("Response status code: ", response.status);
            console.error("Response object following:");
            console.error(response);
          });
      } else if (self.loadAjax) {
        self.loadedOptions = [];
        self.initialized = false; // this is to force the component to show "please type chars" again
      }
    },
    selectOption(option) {
      var self = this;
      if (!self.contains(option, self.selectedOptions)) {
        if (!self.multiSelect) {
          self.selectedOptions = [];
        }
        self.selectedOptions.push(option);
      } else {
        self.deselectOption(option, !self.multiSelect);
      }
      if (!self.loadAjax) {
        self.optionSearch = "";
      }
      if (!self.multiSelect) {
        self.closeDropdown();
      }
      self.$emit("input", self.selectedOptions);
      window.requestAnimationFrame(self.setSelectBoxWidth);
      self.setCalculatedPadding();
    },
    deselectOption(option, closeDropdown) {
      var self = this;
      if (!self.canBeEmpty && self.selectedOptions.length == 1) {
        return;
      }
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
    closeDropdown() {
      var self = this;
      self.hoveredIndex = -1;
      self.timeout = setTimeout(function() {
        self.showOptions = false;
      }, 200);
    },
    openDropdown() {
      var self = this;
      self.$emit("focus");
      clearTimeout(self.timeout);
      if (self.disabled) {
        return false;
      }
      self.hoveredIndex = -1;
      self.setCalculatedWidth();
      self.showSelected = false;
      self.showOptions = true;
    },
    setSelectBoxWidth() {
      var self = this;
      if (self.$refs.selectBox)
        self.selectBoxWidth = self.$refs.selectBox.clientWidth + 5;
      window.requestAnimationFrame(self.setSelectBoxWidth);
    },
    setCalculatedPadding() {
      var self = this;
      if (self.selectBoxWidth > self.computedCutOff) {
        self.calculatedPadding = self.$refs.selectDropdownBox.clientWidth + 10;
      } else {
        self.calculatedPadding = self.selectBoxWidth;
      }
      window.requestAnimationFrame(self.setCalculatedPadding);
    },
    setCalculatedWidth() {
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
        } catch (err) {
          // pass
        }
      }, 50);
    }
  },
  mounted() {
    var self = this;
    if (!self.canBeEmpty && self.options.length > 0 && !self.loadAjax) {
      self.selectOption(self.options[0]);
    }
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
  },
  beforeDestroy() {
    window.removeEventListener("resize", self.setCalculatedWidth);
    window.removeEventListener("click", self.handleOffClick);
  }
};
export default SelectMe;
</script>
<style scoped>
.select-me-ignore-me {
  pointer-events: none;
}
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
  font-weight: 700;
  line-height: 1;
  text-align: center;
  white-space: nowrap;
  vertical-align: baseline;
  border-radius: 0.25rem;
  font-weight: 700 !important;
  font-size: 16px !important;
  font-family: "Segoe UI" !important;
}
.selectme-container {
  height: 45px;
}
.selectme-container * {
  font-family: "Roboto", sans-serif;
}

.sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  border: 0;
}
.selectme-dropdown {
  position: absolute;
  z-index: 2;
  background-color: white;
  padding: 5px;
  border: 1px solid rgba(0, 0, 0, 0.15);
  border-radius: 0 0 5px 5px;
  box-shadow: 0px 4px 7px -3px #dadada;
  min-width: 200px;
  max-height: 300px;
  overflow-y: auto;
}
.selectme-badge-single-span {
  float: left;
  padding-right: 8px;
}
.selectme-badge-transparent {
  color: black;
  font-size: 16px !important;
  background-color: transparent !important;
}
.selectme-selected {
  position: relative;
  display: inline-block;
  margin-left: 5px;
}
.selectme-selected > button {
  cursor: pointer;
  padding: 7px;
  margin-right: 2px;
}
.selectme-dropdown > ul {
  list-style: none;
  padding-left: 0px;
  margin-left: 0px;
  margin-bottom: 0px;
}
.selectme-dropdown > ul > li {
  padding: 2px 10px 2px 10px;
  cursor: pointer;
  width: 100%;
  box-sizing: border-box;
  margin-left: 0px;
  font-size: 16px;
  max-height: 200px;
  margin-bottom: -2px;
  overflow-y: auto;
}
.selectme-dropdown > ul > li.selectme-selected {
  background-color: #007bff;
  color: white;
}
.selectme-dropdown > ul > li.selectme-hovered {
  background-color: #eeeeee;
}
.selectme-dropdown > ul > li.selectme-selected.selectme-hovered {
  background-color: #0069d9;
  color: white;
}
.selectme-dropdown > ul > li:hover {
  background-color: #eeeeee;
}
.selectme-dropdown > ul > li.selectme-selected:hover {
  background-color: #0069d9;
  color: white;
}
@keyframes SelectMeLoadingSpinner {
  from {
    -webkit-transform: rotate(0deg);
    transform: rotate(0deg);
  }
  to {
    -webkit-transform: rotate(359deg);
    transform: rotate(359deg);
  }
}
.selectme-loading-spinner {
  -webkit-animation: SelectMeLoadingSpinner 0.5s infinite steps(8); /* Safari, Chrome and Opera > 12.1 */
  -moz-animation: SelectMeLoadingSpinner 0.5s infinite steps(8); /* Firefox < 16 */
  -ms-animation: SelectMeLoadingSpinner 0.5s infinite steps(8); /* Internet Explorer */
  -o-animation: SelectMeLoadingSpinner 0.5s infinite steps(8); /* Opera < 12.1 */
  animation: SelectMeLoadingSpinner 0.5s infinite steps(8);
}
</style>
