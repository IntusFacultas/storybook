import { action } from '@storybook/addon-actions';
import { withA11y } from '@storybook/addon-a11y';
import { withKnobs, text, object, boolean } from '@storybook/addon-knobs';
import { VueTable, NTh, NTd, NTr } from "Components/components/StyledHTML/Table/Table.vue";
import { VueRawTable } from "Components/components/StyledHTML/RawTable/RawTable.vue";
import markdown from "Components/components/StyledHTML/TableUsage.md";
import rawmarkdown from "Components/components/StyledHTML/RawTableUsage.md";

export default {
    title: "StyledHTML/Table",
    decorators: [withA11y, withKnobs],
    parameters: {
        notes: {
            Table: markdown,
            "Raw Table": rawmarkdown
        }
    },
    excludeStories: /.*Data$/,
};


const actionsData = {
    onSort: action("@sort")
}

export const Table = () => ({
    components: { VueTable },
    methods: actionsData,
    props: {
        headerFlavor: {
            default: text("Header Flavor (Overrides Flavor)", "")
        },
        flavor: {
            default: text("Flavor", "")
        },
        textAlign: {
            default: text("Text Align", "left")
        },
        striped: {
            default: boolean("Striped", false)
        },
        numbered: {
            default: boolean("Numbered", false)
        },
        hover: {
            default: boolean("Hover", false)
        },
        condensed: {
            default: boolean("Condensed", false)
        },
        sortable: {
            default: boolean("Sortable", false)
        },
        bordered: {
            default: boolean("Bordered", false)
        },
        items: {
            default: object("Items", [
                {
                    data: {
                        first_name: "Pedro",
                        last_name: "Del Moral Lopez",
                        age: 24,
                    },
                    flavor: ""
                },
                {
                    data: {
                        first_name: "Brent",
                        last_name: "Ropp",
                        age: 45,
                    },
                    flavor: ""
                },
                {
                    data: {
                        first_name: "Ryan",
                        last_name: "Kelbley",
                        age: 28,
                    },
                    flavor: ""
                },
            ])
        },
        headers: {
            default: object("Custom Headers", [])
        }
    },
    template: `
        <vue-table 
            :flavor="flavor"
            :header-flavor="headerFlavor"
            :striped="striped"
            :text-align="textAlign"
            :hover="hover"
            :bordered="bordered"
            :numbered="numbered"
            :condensed="condensed"
            :sortable="sortable"
            :items="items"
            @sort="onSort"
            :headers="headers"></vue-table>
    `

})

export const RawTable = () => ({
    components: { VueRawTable, NTh, NTd, NTr },
    props: {
        flavor: {
            default: text("Flavor", "")
        },
        striped: {
            default: boolean("Striped", false)
        },
    },
    template: `
        <vue-raw-table :flavor="flavor" :striped="striped">
            <template v-slot:header>
                <n-tr>
                    <n-th>Column 1</n-th>
                    <n-th>Column 2</n-th>
                </n-tr>
            </template>
            <template v-slot:body>
                <n-tr>
                    <n-td><h1>CUSTOM HTML</h1></n-td>
                    <n-td><ul><li>1</li><li>2</li><li>3</li></ul></n-td>
                </n-tr>
                <n-tr>
                    <n-td><h1>CUSTOM HTML</h1></n-td>
                    <n-td><ul><li>1</li><li>2</li><li>3</li></ul></n-td>
                </n-tr>
                <n-tr>
                    <n-td><h1>CUSTOM HTML</h1></n-td>
                    <n-td><ul><li>1</li><li>2</li><li>3</li></ul></n-td>
                </n-tr>
            </template>
        </vue-raw-table>
    `
})