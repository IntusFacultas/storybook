import { withA11y } from '@storybook/addon-a11y';
import { withKnobs, text, boolean } from '@storybook/addon-knobs';
import { NCard } from "Components/components/StyledHTML/Card/Card.vue";
import { NH3, NText, NSmall } from "Components/components/StyledHTML/Typography/Typography.vue";
import markdown from "Components/components/StyledHTML/CardUsage.md";

export default {
    title: "StyledHTML/Card",
    decorators: [withA11y, withKnobs],
    parameters: {
        notes: {
            markdown
        }
    },
    excludeStories: /.*Data$/,
};

export const ConfigurableCard = () => ({
    components: { "n-card": NCard, NH3, NText, NSmall },
    props: {
        headerFlavor: {
            default: text("Header Flavor", "Primary"),
        },
        bodyFlavor: {
            default: text("Body Flavor", "Primary"),
        },
        footerFlavor: {
            default: text("Footer Flavor", "Primary"),
        },
        bordered: {
            default: boolean("Bordered", false)
        },
        header: {
            default: boolean("Header", true)
        },
        footer: {
            default: boolean("Footer", true)
        },
    },
    template: `
        <n-card 
            :header-flavor="headerFlavor"
            :footer-flavor="footerFlavor"
            :body-flavor="bodyFlavor"
            :bordered="bordered"
            :header="header"
            :footer="footer">
            <template v-slot:header><n-h3>Test Header</n-h3></template>
            <template v-slot:body><n-text>Sample body</n-text></template>
            <template v-slot:footer><n-small>This is a footer</n-small></template>
        </n-card>
    `
})