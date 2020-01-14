

<template>
    <div>
        <input 
            :id="id"
            autocomplete="off"
            type="text"
            :class="inputClass"
            @click="openDropdown"
            @focus="openDropdown"
            @input="openDropdown"
            @blur="closeDropdown"
            v-model="optionSearch"
            @keydown.delete="handleBackspace"
            @keydown.down="handleDown"
            @keydown.up="handleUp"
            @keydown.left="handleLeft"
            @keydown.right="handleRight"
            @keyup.enter="selectHoveredOption"
            id="searchbar"
            :style="{'padding-left': calculatedPadding + 'px'}"
            :disabled="disabled">
        <div v-if="showDropdown" class="selectme-dropdown" :style="{width: calculatedWidth + 'px'}" >
            <ul>
                <li 
                    @keyup.enter="selectHoveredOption"
                    tabindex="0"
                    @focus="hoverElement()"
                    @blur="closeDropdown"
                    v-for="option in selectOptions"
                    :value="option[valueAttribute]"
                    :ref="'hover' + option[valueAttribute]"
                    @click="selectOption(option)"
                    :class="{'selectme-selected': contained(option), 'selectme-hovered': isHovered(option, hoveredOption)}">
                    <span class="sr-only" v-if="contained(option)">Active: </span><span class="sr-only" v-else>Press enter to select: </span>{{option[displayAttribute]}}
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
                    <li :ref="'selected' + option[valueAttribute]" :class="{'selectme-hovered': isHovered(option, hoveredSelectedOption)}" @click="deselectDropdownOption(option)" v-for="option in selectedOptions"><span>&#215;</span> {{option[displayAttribute]}}</li>
                </ul>
            </div>
        </div>
        <div class="selectme-selected" ref="selectBox" :style="{top: calculatedHeight + 'px' }" v-show="selectBoxWidth <= computedCutOff">
            <span v-for="option in selectedOptions" @click="deselectOption(option)" :class="computedBadgeClass">{{option[displayAttribute]}} <span :class="computedSpanClass">&#215;</span></span>
        </div>
    </div>
</template>

<script>
    const SelectMe = {
        name: 'select-me',
        data: function () {
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
                hoveredSelectedIndex: -1,
            }
        },
        props: {
            id: {
                type: String,
                default: ""
            },
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
                default: function() { return []},
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
                let options = self.options;
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
                if (self.showOptions) {
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
                        self.hoveredIndex = -1;
                        self.setSelectBoxWidth();
                        self.setCalculatedPadding();
                        self.$el.firstChild.focus();
                        self.closeDropdown();
                    }
                }
                else if (self.showSelected) {
                    self.deselectOption(self.hoveredSelectedOption);
                    self.$emit('input', self.selectedOptions);
                    self.hoveredSelectedOption = {};
                    self.showSelected = false;
                    setTimeout(function() {
                        self.hoveredIndex = -1;
                        self.setSelectBoxWidth();
                        self.setCalculatedPadding();
                        self.$el.firstChild.focus();
                        self.$el.firstChild.focus();
                    }, 550);
                }
            },
            hoverElement: function(e) {
                var self = this;
                clearTimeout(self.timeout)
                self.hoveredOption = self.selectOptions.filter(option => option[self.valueAttribute] == document.activeElement.getAttribute("value"))[0]
                self.hoveredIndex = self.selectOptions.map(option => option[self.valueAttribute]).indexOf(self.hoveredOption.valueAttribute)
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
            hoverSelectedOption: function(step) {
                var self = this;
                var proposedIndex = self.hoveredIndex + step;
                self.showSelected = true;
                if (proposedIndex >= self.selectedOptions.length || proposedIndex < -1 ) {
                    return;
                }
                else if (proposedIndex == -1) {
                    self.hoveredIndex = proposedIndex;
                    self.$el.firstChild.focus();
                    self.showSelected = false;
                    self.hoveredSelectedOption = {};
                }
                else {
                    self.hoveredIndex = proposedIndex
                    self.hoveredSelectedOption = self.selectedOptions[self.hoveredIndex];
                    self.$forceUpdate();
                }
            },
            contains: function (option, options) {
                var self = this;
                for (var x = 0; x < options.length; x++) {
                    let textMatches = option[self.displayAttribute] == options[x][self.displayAttribute];
                    let valueMatches = option[self.valueAttribute] == options[x][self.valueAttribute];
                    if (textMatches && valueMatches)
                        return true;
                }
                return false;
            },
            isHovered: function(option, hoverOption) {
                var self = this;
                let textMatches = option[self.displayAttribute] == hoverOption[self.displayAttribute];
                let valueMatches = option[self.valueAttribute] == hoverOption[self.valueAttribute];
                return textMatches && valueMatches;
            },
            handleUp: function() {
                var self = this;
                if (self.showSelected) {
                    self.hoverSelectedOption(-1);
                }
                else if (self.showOptions) {
                    self.hoverOption(-1)
                }
                else {
                    self.hoverOption(-1);
                }
            },
            handleDown: function() {
                var self = this;
                if (self.showSelected) {
                    self.hoverSelectedOption(1)
                }
                else if (self.showOptions) {
                    self.hoverOption(1)
                }
                else {
                    self.hoverOption(1)
                }
            },
            handleLeft: function() {
                var self = this;
                if (self.optionSearch.length == 0 && self.selectedOptions.length > 0 && self.selectBoxWidth > self.computedCutOff & !self.showSelected) {
                    self.closeDropdown();
                    self.showSelected = true;
                }
            },
            handleRight: function() {
                var self = this
                if (self.showSelected) {
                    self.showSelected = false;
                    self.hoveredSelectedOption = {};
                    self.$el.firstChild.focus();
                }
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
                self.closeDropdown();
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
                self.closeDropdown();
                self.$emit('input', self.selectedOptions);
                self.setSelectBoxWidth();
                self.setCalculatedPadding();
            },
            closeDropdown: function() {
                var self = this;
                var elements = Object.values(self.$refs).map(x => x[0])
                self.hoveredIndex = -1;
                self.timeout = setTimeout(function() {
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
                self.selectBoxWidth = textLength + additionalPadding + (2 * self.selectedOptions.length) ;
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
                }, 100)
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
    export default SelectMe;
</script>

<style scoped>
@import './selectme.css';
</style>
