import { FlexColumn, FlexRow } from "Components/components/Layout/Layout.vue";
import { withA11y } from '@storybook/addon-a11y';
import { withKnobs, number } from '@storybook/addon-knobs';
import markdown from "Components/components/Layout/USAGE.md";


export default {
    title: "Layout", // Folder/ is unnecessary but you can group stories by a folder by doing so
    decorators: [withA11y, withKnobs],
    parameters: {
        notes: {
            markdown
        }
    },
    excludeStories: /.*Data$/,
};


export const FlexColumns = () => ({
    components: { FlexColumn, FlexRow },
    props: {
        col: {
            default: number("Left Default Column Size", 1)
        },
        col2: {
            default: number("Right Default Column Size", 1)
        },
    },
    template: `
        <flex-row>
            <flex-column 
                style="border: 3px solid orange" :col="col">
                <div style="height:100px; background-color: gray; display: flex; justify-content: center; align-items:center; font-weight: bold; font-size: 24px;">Content Goes Here</div>
            </flex-column>
            <flex-column 
                style="border: 3px solid purple" :col="col2">
                <div style="height:100px; background-color: gray; display: flex; justify-content: center; align-items:center; font-weight: bold; font-size: 24px;">Content Goes Here</div>
            </flex-column>
        </flex-row>
    `
});
export const FlexColumnsAllParameters = () => ({
    components: { FlexColumn, FlexRow },
    props: {
        col: {
            default: number("Left Default Column Size", 1)
        },
        sm: {
            default: number("Left Column Size for small viewports", 1)
        },
        md: {
            default: number("Left Column Size for medium viewports", 1)
        },
        lg: {
            default: number("Left Column Size for large viewports", 1)
        },
        xl: {
            default: number("Left Column Size for extra large viewports", 1)
        },
        col2: {
            default: number("Right Default Column Size", 1)
        },
        sm2: {
            default: number("Right Column Size for small viewports", 1)
        },
        md2: {
            default: number("Right Column Size for medium viewports", 1)
        },
        lg2: {
            default: number("Right Column Size for large viewports", 1)
        },
        xl2: {
            default: number("Right Column Size for extra large viewports", 1)
        }
    },
    template: `
        <flex-row>
            <flex-column 
                style="border: 3px solid orange"
                :col="col"
                :sm="sm"
                :md="md"
                :lg="lg"
                :xl="xl">
                <div style="height:100px; background-color: gray; display: flex; justify-content: center; align-items:center; font-weight: bold; font-size: 24px;">Content Goes Here</div>
            </flex-column>
            <flex-column 
                style="border: 3px solid purple"
                :col="col2"
                :sm="sm2"
                :md="md2"
                :lg="lg2"
                :xl="xl2">
                <div style="height:100px; background-color: gray; display: flex; justify-content: center; align-items:center; font-weight: bold; font-size: 24px;">Content Goes Here</div>
            </flex-column>
        </flex-row>
    `
});