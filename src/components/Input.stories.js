import { withA11y } from '@storybook/addon-a11y';
import { NInput } from "./StyledHTML/Input.vue";
import { NLabel } from "./StyledHTML/Typography.vue";
import { withKnobs, text } from '@storybook/addon-knobs';
import { FlexRow } from "./Layout/flexColumn.vue";

export default {
    title: "StyledHTML/Input",
    decorators: [withA11y, withKnobs ],
    parameters: {
        notes: {
        }
    },
    excludeStories: /.*Data$/,
};

// export const Input = () => ({
//     components: { NInput, FlexRow, NLabel},
//     props: {
//         inputType: {
//             default: text("Input Type", "text")
//         }
//     },
//     template: `
//     <div>
//     </div>
//         <n-label for="input">Example input</n-label>
//         <flex-row><n-input id="input"></n-input></flex-row>
//     `
// })