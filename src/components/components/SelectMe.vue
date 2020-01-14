<template>
    <div>
        <input autocomplete="off" type="text" :class="inputClass" @click="openDropdown" @focus="openDropdown" @input="openDropdown" @blur="closeDropdown" v-model="optionSearch" @keydown.delete="handleBackspace" @keydown.down="hoverOption(1)" @keydown.up="hoverOption(-1)" @keyup.enter="selectHoveredOption" id="searchbar" :style="{'padding-left': calculatedPadding + 'px'}" :disabled="disabled">
        <div style="max-height:200px; overflow-y:auto" v-if="showDropdown" class="selectme-dropdown" :style="{width: calculatedWidth + 'px'}" >
            <ul>
                <li v-for="option in selectOptions" @click="selectOption(option)" :class="{'selectme-selected': contained(option), 'selectme-hovered': isHovered(option)}">
                    {{option[displayAttribute]}}
                </li>
                <li v-if="selectOptions.length == 0">
                    No results found
                </li>
            </ul>
        </div>
        <div class="selectme-selected" id="test" :style="{top: calculatedHeight + 'px' }" v-show="selectBoxWidth > computedCutOff && selectedOptions.length > 0" ref="selectDropdownBox">
            <span @click="toggleSelectedDropdown" :class="computedBadgeClass"> {{selectedOptions.length}} selected... <span v-if="!showSelected">&#x25BE;</span><span v-else>&#x25B4;</span> </span>
            <div class="selectme-dropdown" style="min-width: 200px; max-height:300px; overflow-y:auto" v-show="showSelected">
                <ul>
                    <li @click="deselectDropdownOption(option)" v-for="option in selectedOptions"><span>&#215;</span> {{option[displayAttribute]}}</li>
                </ul>
            </div>
        </div>
        <div class="selectme-selected" ref="selectBox" :style="{top: calculatedHeight + 'px' }" v-show="selectBoxWidth <= computedCutOff">
            <span v-for="option in selectedOptions" @click="deselectOption(option)" :class="computedBadgeClass">{{option[displayAttribute]}} <span :class="computedSpanClass">&#215;</span></span>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'select-me',
        data: function () {
            return {
                optionSearch: "",
                showOptions: false,
                showSelected: false,
                selectBoxWidth: 0,
                calculatedWidth: 0,
                calculatedHeight: 0,
                calculatedPadding: 0,
                selectedOptions: [],
                hoveredOption: {},
                combinedPaddingPerBadge: 26,
                hoveredIndex: -1,
            }
        },
        props: {
            displayAttribute: {
                type: String,
                default: "text",
            },
            valueAttribute: {
                type: String,
                default: "value",
            },
            disabled: {
                type: Boolean,
                default: false,
            },
            options: {
                type: Array,
                default: [],
            },
            debug: {
                type: Boolean,
                default: false,
            },
            multiSelect: {
                type: Boolean,
                default: false,
            },
            initialValues: {
                type: Array,
                default: function() { return [] }
            },
            inputClass: {
                type: Array,
                default: function() { return ["form-control"] },
            },
            badgeClass: {
                type: Array,
                default: function() { return ["badge", "badge-secondary"]}
            }
        },
        computed: {
            computedSpanClass: function() {
                var self = this;
                if (!self.multiSelect)
                    return ["selectme-badge-single-span"]
                return []
            },
            computedBadgeClass: function() {
                var self = this;
                var array = self.badgeClass.slice();
                array.push("selectme-badge")
                if (!self.multiSelect)
                    array.push("selectme-badge-transparent")
                return array
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
                options = self.options;
                function filter(fn, array) {
                    var rtArray = [];
                    for (var x = 0; x < array.length; x++) {
                        if (fn(array[x])) {
                            rtArray.push(array[x])
                        }
                    }
                    return rtArray
                }
                if (self.optionSearch) {
                    function textContains(n) {
                        return n[self.displayAttribute].toUpperCase().indexOf(self.optionSearch.toUpperCase()) > -1;
                    }
                    options = filter(textContains, options)
                }
                return options;
            }
        },
        methods: {
            deselectDropdownOption: function(option) {
                var self = this;
                self.deselectOption(option);
                setTimeout(function() {
                    self.setSelectBoxWidth();
                }, 50);
                self.showSelected = false;
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
                if (Object.keys(self.hoveredOption).length > 0) {
                    if (!self.contains(self.hoveredOption, self.selectedOptions)) {
                        if (!self.multiSelect)
                            self.selectedOptions = [];
                        self.selectedOptions.push(Object.assign({}, self.hoveredOption));
                    }
                    else {
                        self.deselectOption(self.hoveredOption)
                    }
                    self.$emit('input', self.selectedOptions)
                    self.hoveredOption = {};
                    self.setSelectBoxWidth();
                    self.setCalculatedPadding();
                    self.closeDropdown();
                }
            },
            hoverOption: function(step) {
                var self = this;
                var proposedIndex = self.hoveredIndex + step;
                self.openDropdown();
                if (proposedIndex >= self.selectOptions.length || proposedIndex < -1 ) {
                    return;
                }
                else if (proposedIndex == -1) {
                    self.hoveredIndex = proposedIndex;
                    self.$el.firstChild.focus();
                    self.closeDropdown();
                    self.hoveredOption = {};
                }
                else {
                    self.hoveredIndex = proposedIndex
                    self.hoveredOption = self.selectOptions[self.hoveredIndex];
                    self.$forceUpdate();
                }
            },
            contains: function (option, options) {
                var self = this;
                for (var x = 0; x < options.length; x++) {
                    textMatches = option[self.displayAttribute] == options[x][self.displayAttribute];
                    valueMatches = option[self.valueAttribute] == options[x][self.valueAttribute];
                    if (textMatches && valueMatches)
                        return true;
                }
                return false;
            },
            isHovered: function(option) {
                var self = this;
                textMatches = option[self.displayAttribute] == self.hoveredOption[self.displayAttribute];
                valueMatches = option[self.valueAttribute] == self.hoveredOption[self.valueAttribute];
                return textMatches && valueMatches;
            },
            handleBackspace: function() {
                var self = this;
                if (self.optionSearch.length == 0 && self.selectedOptions.length > 0 && self.selectBoxWidth <= self.computedCutOff) {
                    var el = self.selectedOptions.pop();
                    self.$emit("input", self.selectedOptions);
                    self.setSelectBoxWidth();
                    self.setCalculatedPadding();
                    self.optionSearch = el[self.displayAttribute];
                }
            },
            contained: function(option) {
                var self = this;
                return self.contains(option, self.selectedOptions)
            },
            selectOption: function(option) {
                var self = this;
                if (!self.contains(option, self.selectedOptions)) {
                    if (!self.multiSelect) {
                        self.selectedOptions = [];
                    }
                    self.selectedOptions.push(option)
                }
                else {
                    self.deselectOption(option)
                }
                self.optionSearch = "";
                self.$emit('input', self.selectedOptions)
                self.setSelectBoxWidth();
                self.setCalculatedPadding();
            },
            deselectOption: function(option) {
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
                self.$emit('input', self.selectedOptions);
                self.setSelectBoxWidth();
                self.setCalculatedPadding();
            },
            closeDropdown: function() {
                var self = this;
                self.hoveredIndex = -1;
                setTimeout(function() {
                    self.showOptions = false
                }, 200);
            },
            openDropdown: function() {
                var self = this;
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
                function getTextWidth(text, font) {
                    // re-use canvas object for better performance
                    var canvas = getTextWidth.canvas || (getTextWidth.canvas = document.createElement("canvas"));
                    var context = canvas.getContext("2d");
                    context.font = font;
                    var metrics = context.measureText(text);
                    return metrics.width;
                }
                var combinedText = "";
                for (var x = 0; x < self.selectedOptions.length; x++) {
                    combinedText += self.selectedOptions[x][self.displayAttribute];
                }
                var additionalPadding = self.combinedPaddingPerBadge * self.selectedOptions.length;
                var element = document.querySelector(".selectme-badge");
                var style = getComputedStyle(element)
                var textLength = getTextWidth(combinedText, style.font);
                self.selectBoxWidth = textLength + additionalPadding;
                if (!self.multiSelect && textLength > 0)
                    self.selectBoxWidth += 25
            },
            setCalculatedPadding: function() {
                var self = this;
                setTimeout(function() {
                    if (self.selectBoxWidth > self.computedCutOff) {
                        self.calculatedPadding = self.$refs.selectDropdownBox.clientWidth + 10;
                    }
                    else {
                        self.calculatedPadding = self.selectBoxWidth + 17;
                    }
                }, 50)
            },
            setCalculatedWidth: function() {
                var self = this;
                setTimeout(function() {
                    try {
                        self.calculatedHeight = self.$el.firstChild.offsetHeight * -1 + 5;
                        self.calculatedWidth = self.$el.firstChild.offsetWidth;
                        self.setSelectBoxWidth();
                        self.setCalculatedPadding();
                    } catch(err) {
                    }
                }, 50)
            },
        },
        mounted: function() {
            var self = this;
            window.addEventListener("resize", self.setCalculatedWidth);
            window.addEventListener("click", self.handleOffClick);
            self.setCalculatedWidth();
            setTimeout(function() {
                self.setCalculatedWidth();
            }, 200)
            for (var x = 0; x < self.initialValues.length; x++) {
                var initVal = self.initialValues[x];
                for (var y = 0; y < self.options.length; y++) {
                    if (self.options[y][self.valueAttribute] == initVal[self.valueAttribute]) {
                        self.selectedOptions.push(Object.assign({}, self.options[y]));
                        break;
                    }
                }
            }
        },
  };
</script>