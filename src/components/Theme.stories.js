import { withA11y } from '@storybook/addon-a11y';
import { FlexRow, FlexColumn } from "./Layout/flexColumn.vue";
import {
    NSpan, NP, MSpan, MP, LSpan, LP, WSpan, WP,
    NH1, NH2, NH3, NH4, NH5, NH6, MH1, MH2, MH3,
    MH4, MH5, MH6, LH1, LH2, LH3, LH4, LH5, LH6,
    WH1, WH2, WH3, WH4, WH5, WH6,
} from "./StyledHTML/Typography.vue"
import ColorSwatch from "./DesignSystem/colorSwatch.vue";
import Theme from "./DesignSystem/theme.js";

export default {
    title: 'Design System',
    decorators: [withA11y],
    parameters: {
    },
    // Our exports that end in "Data" are not stories.
    excludeStories: /.*Data$/,
};

export const DesignSystem = () => ({
    components: {
        FlexColumn, FlexRow, ColorSwatch,
        NSpan, NP, MSpan, MP, LSpan, LP, WSpan, WP,
        NH1, NH2, NH3, NH4, NH5, NH6, MH1, MH2, MH3,
        MH4, MH5, MH6, LH1, LH2, LH3, LH4, LH5, LH6,
        WH1, WH2, WH3, WH4, WH5, WH6,
    },
    data: function () {
        return {
            theme: Theme,
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
            <flex-row>
                <flex-column style="flex-direction: column; padding-top: 10px;">
                    <n-h1>This is a normal h1 header</n-h1>
                    <n-h2>This is a normal h2 header</n-h2>
                    <n-h3>This is a normal h3 header</n-h3>
                    <n-h4>This is a normal h4 header</n-h4>
                    <n-h5>This is a normal h5 header</n-h5>
                    <n-h6>This is a normal h6 header</n-h6>
                    <m-h1>This is a medium h1 header</m-h1>
                    <m-h2>This is a medium h2 header</m-h2>
                    <m-h3>This is a medium h3 header</m-h3>
                    <m-h4>This is a medium h4 header</m-h4>
                    <m-h5>This is a medium h5 header</m-h5>
                    <m-h6>This is a medium h6 header</m-h6>
                    <l-h1>This is a light h1 header</l-h1>
                    <l-h2>This is a light h2 header</l-h2>
                    <l-h3>This is a light h3 header</l-h3>
                    <l-h4>This is a light h4 header</l-h4>
                    <l-h5>This is a light h5 header</l-h5>
                    <l-h6>This is a light h6 header</l-h6>
                    <div style="background-color: #222">
                        <w-h1>This is a white h1 header</w-h1>
                        <w-h2>This is a white h2 header</w-h2>
                        <w-h3>This is a white h3 header</w-h3>
                        <w-h4>This is a white h4 header</w-h4>
                        <w-h5>This is a white h5 header</w-h5>
                        <w-h6>This is a white h6 header</w-h6>
                    </div>
                    <n-span>This is a normal span</n-span>
                    <n-p>This is a normal paragraph</n-p>
                    <m-span>This is a medium span</m-span>
                    <m-p>This is a medium paragraph</m-p>
                    <l-span>This is a light span</l-span>
                    <l-p>This is a light paragraph</l-p>
                    <div style="background-color: #222">
                        <w-span>This is a white span</w-span>
                        <w-p>This is a white paragraph</w-p>
                    </div>
                </flex-column>
            </flex-row>
        </div>
    `
});