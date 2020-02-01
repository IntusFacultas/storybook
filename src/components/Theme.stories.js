import { withA11y } from '@storybook/addon-a11y';
import { FlexRow, FlexColumn } from "Components/components/Layout/Layout.vue";
import {
    NSpan, NP, NH1, NH2, NH3, NH4, NH5, NH6, NSmall
} from "Components/components/StyledHTML/Typography/Typography.vue"
import ColorSwatch from "Components/components/DesignSystem/colorSwatch.vue";
import { Theme, TextTheme } from "Components/components/DesignSystem/theme.js";
import markdown from 'Components/components/DesignSystem/Usage.md';

export default {
    title: 'Design System',
    decorators: [withA11y],
    parameters: {
        notes: {
            markdown
        }
    },
    // Our exports that end in "Data" are not stories.
    excludeStories: /.*Data$/,
};

export const DesignSystem = () => ({
    components: {
        FlexColumn, FlexRow, ColorSwatch,
        NSpan, NP, NH1, NH2, NH3, NH4, NH5, NH6, NSmall
    },
    data: function () {
        return {
            theme: Theme,
            texts: TextTheme,
            count: 0,
            limit: 3,
        }
    },
    computed: {
        splitArray: function () {
            let self = this;
            let colors = [];
            let count = 0;
            let row = 0;
            for (const key in self.theme) {
                if (count == 0) {
                    colors.push([{
                        name: key,
                        color: self.theme[key].background
                    }])
                }
                else {
                    colors[row].push({
                        name: key,
                        color: self.theme[key].background
                    })
                }
                count++;
                if (count == self.limit) {
                    row += 1;
                    count = 0;
                }
            }
            return colors;
        },
        keys: function () {
            var self = this;
            return Object.keys(self.theme);
        }
    },
    template: `
        <div>
            <n-h1>Color Swatches</n-h1>
            <hr/>
            <flex-row v-for="list in splitArray" style="padding-top:10px">
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
            <n-h1>Text Colors</n-h1>
            <hr/>
            <flex-row style="padding-top:10px; padding-left: 10px">
            </flex-row>
            <flex-row style="padding-top:10px">
                <color-swatch 
                    v-for="obj in Object.keys(texts)"
                    :name="obj"
                    :color="texts[obj]">
                </color-swatch>
            </flex-row>
            <n-h1>Typography</n-h1><hr/>
            <flex-row>
                <flex-column style="flex-direction: column; padding-top: 10px;">
                    <n-h1>This is a normal h1 header</n-h1>
                    <n-h2>This is a normal h2 header</n-h2>
                    <n-h3>This is a normal h3 header</n-h3>
                    <n-h4>This is a normal h4 header</n-h4>
                    <n-h5>This is a normal h5 header</n-h5>
                    <n-h6>This is a normal h6 header</n-h6>
                    <n-h1 flavor="Medium">This is a medium h1 header</n-h1>
                    <n-h2 flavor="Medium">This is a medium h2 header</n-h2>
                    <n-h3 flavor="Medium">This is a medium h3 header</n-h3>
                    <n-h4 flavor="Medium">This is a medium h4 header</n-h4>
                    <n-h5 flavor="Medium">This is a medium h5 header</n-h5>
                    <n-h6 flavor="Medium">This is a medium h6 header</n-h6>
                    <n-h1 flavor="Light">This is a light h1 header</n-h1>
                    <n-h2 flavor="Light">This is a light h2 header</n-h2>
                    <n-h3 flavor="Light">This is a light h3 header</n-h3>
                    <n-h4 flavor="Light">This is a light h4 header</n-h4>
                    <n-h5 flavor="Light">This is a light h5 header</n-h5>
                    <n-h6 flavor="Light">This is a light h6 header</n-h6>
                    <div style="background-color: #222">
                        <n-h1 flavor="White">This is a white h1 header</n-h1>
                        <n-h2 flavor="White">This is a white h2 header</n-h2>
                        <n-h3 flavor="White">This is a white h3 header</n-h3>
                        <n-h4 flavor="White">This is a white h4 header</n-h4>
                        <n-h5 flavor="White">This is a white h5 header</n-h5>
                        <n-h6 flavor="White">This is a white h6 header</n-h6>
                    </div>
                    <n-span>This is a normal span</n-span>
                    <n-p>This is a normal paragraph</n-p>
                    <n-span flavor="Medium">This is a medium span</n-span>
                    <n-p flavor="Medium">This is a medium paragraph</n-p>
                    <n-span flavor="Light">This is a light span</n-span>
                    <n-p flavor="Light">This is a light paragraph</n-p>
                    <div style="background-color: #222">
                        <n-span flavor="White">This is a white span</n-span>
                        <n-p flavor="White">This is a white paragraph</n-p>
                    </div>
                    <n-small>This is a normal small</n-small>
                    <n-small flavor="Medium">This is a medium small</n-small>
                    <n-small flavor="Light">This is a light small</n-small>
                    <div style="background-color: #222">
                        <n-small flavor="White">This is a white small</n-small>
                    </div>
                </flex-column>
            </flex-row>
        </div>
    `
});