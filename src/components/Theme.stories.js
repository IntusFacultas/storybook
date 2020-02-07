import { withA11y } from '@storybook/addon-a11y';
import { FlexRow, FlexColumn } from "Components/components/Layout/Layout.vue";
import {
    NText, NParagraph, NTopLevelTitle, NCategoryHeader, NSubCategoryHeader, NSectionHeader, NSubSectionHeader, NKeyword, NSmallText
} from "Components/components/StyledHTML/Typography/Typography.vue"
import ColorSwatch from "Components/components/DesignSystem/colorSwatch.vue";
import { Theme, TextTheme, ToastTheme } from "Components/components/DesignSystem/theme.js";
import markdown from 'Components/components/DesignSystem/Usage.md';
import textmarkdown from 'Components/components/StyledHTML/TypographyUsage.md';

export default {
    title: 'Design System',
    decorators: [withA11y],
    parameters: {
        notes: {
            Colors: markdown,
            Text: textmarkdown
        }
    },
    // Our exports that end in "Data" are not stories.
    excludeStories: /.*Data$/,
};

export const DesignSystem = () => ({
    components: {
        FlexColumn, FlexRow, ColorSwatch,
        NText, NParagraph, NTopLevelTitle, NCategoryHeader, NSubCategoryHeader, NSectionHeader, NSubSectionHeader, NKeyword, NSmallText
    },
    data: function () {
        return {
            theme: Theme,
            toast: ToastTheme,
            texts: TextTheme,
            count: 0,
            limit: 3,
        }
    },
    methods: {
        splitArray: function (theme, limit) {
            let self = this;
            let colors = [];
            let count = 0;
            let row = 0;
            for (const key in theme) {
                if (count == 0) {
                    colors.push([{
                        name: key,
                        color: theme[key].background
                    }])
                }
                else {
                    colors[row].push({
                        name: key,
                        color: theme[key].background
                    })
                }
                count++;
                if (count == limit) {
                    row += 1;
                    count = 0;
                }
            }
            return colors;
        },
    },
    computed: {
        keys: function () {
            var self = this;
            return Object.keys(self.theme);
        }
    },
    template: `
        <div>
            <n-top-level-title>Color Swatches</n-top-level-title>
            <hr/>
            <flex-row v-for="list in splitArray(theme, limit)" style="padding-top:10px">
                <div v-for="obj in list" style="display: flex">
                    <color-swatch
                        :name="obj.name"
                        :color="obj.color.color">
                        <color-swatch
                    </color-swatch>
                    <color-swatch
                        :name="obj.name + ':Hover'"
                        :color="obj.color.hover">
                        <color-swatch
                    </color-swatch>
                </div>
            </flex-row>
            <n-top-level-title>Text Colors</n-top-level-title>
            <hr/>
            <flex-row style="padding-top:10px">
                <color-swatch 
                    v-for="obj in Object.keys(texts)"
                    :name="obj"
                    :color="texts[obj]">
                </color-swatch>
            </flex-row>
            <n-top-level-title>Toast Colors</n-top-level-title>
            <hr/>
            <flex-row v-for="list in splitArray(toast, 4)" style="padding-top:10px">
                <div v-for="obj in list" style="display: flex">
                    <color-swatch
                        :name="obj.name"
                        :color="obj.color.color">
                        <color-swatch
                    </color-swatch>
                </div>
            </flex-row>
            <n-top-level-title>Typography</n-top-level-title><hr/>
            <flex-row>
                <flex-column style="flex-direction: column; padding-top: 10px;">
                    <n-top-level-title>This is a normal top level title</n-top-level-title>
                    <n-category-header>This is a normal category header</n-category-header>
                    <n-sub-category-header>This is a normal subcategory header</n-sub-category-header>
                    <n-section-header>This is a normal section header</n-section-header>
                    <n-sub-section-header>This is a normal subsection header</n-sub-section-header>
                    <n-keyword>This is a normal keyword</n-keyword>
                    <n-top-level-title flavor="Medium">This is a medium top level title</n-top-level-title>
                    <n-category-header flavor="Medium">This is a medium category header</n-category-header>
                    <n-sub-category-header flavor="Medium">This is a medium subcategory header</n-sub-category-header>
                    <n-section-header flavor="Medium">This is a medium section header</n-section-header>
                    <n-sub-section-header flavor="Medium">This is a medium subsection header</n-sub-section-header>
                    <n-keyword flavor="Medium">This is a medium keyword</n-keyword>
                    <n-top-level-title flavor="Light">This is a light top level title</n-top-level-title>
                    <n-category-header flavor="Light">This is a light category header</n-category-header>
                    <n-sub-category-header flavor="Light">This is a light subcategory header</n-sub-category-header>
                    <n-section-header flavor="Light">This is a light section header</n-section-header>
                    <n-sub-section-header flavor="Light">This is a light subsection header</n-sub-section-header>
                    <n-keyword flavor="Light">This is a light keyword</n-keyword>
                    <div style="background-color: #222">
                        <n-top-level-title flavor="White">This is a white top level title</n-top-level-title>
                        <n-category-header flavor="White">This is a white category header</n-category-header>
                        <n-sub-category-header flavor="White">This is a white subcategory header</n-sub-category-header>
                        <n-section-header flavor="White">This is a white section header</n-section-header>
                        <n-sub-section-header flavor="White">This is a white subsection header</n-sub-section-header>
                        <n-keyword flavor="White">This is a white keyword</n-keyword>
                    </div>
                    <n-text>This is a normal text</n-text>
                    <n-paragraph>This is a normal paragraph</n-paragraph>
                    <n-text flavor="Medium">This is a medium text</n-text>
                    <n-paragraph flavor="Medium">This is a medium paragraph</n-paragraph>
                    <n-text flavor="Light">This is a light text</n-text>
                    <n-paragraph flavor="Light">This is a light paragraph</n-paragraph>
                    <div style="background-color: #222">
                        <n-text flavor="White">This is a white text</n-text>
                        <n-paragraph flavor="White">This is a white paragraph</n-paragraph>
                    </div>
                    <n-small-text>This is a normal small</n-small-text>
                    <n-small-text flavor="Medium">This is a medium small</n-small-text>
                    <n-small-text flavor="Light">This is a light small</n-small-text>
                    <div style="background-color: #222">
                        <n-small-text flavor="White">This is a white small</n-small-text>
                    </div>
                </flex-column>
            </flex-row>
        </div>
    `
});