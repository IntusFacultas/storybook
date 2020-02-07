import { withA11y } from '@storybook/addon-a11y';
import { withKnobs, text, boolean, number } from '@storybook/addon-knobs';
import { Paginator } from "Components/components/Paginator/Paginator.vue";
import { action } from '@storybook/addon-actions';
// import markdown from "Components/components/NASICHTML/CardUsage.md";

export default {
    title: "Paginator",
    decorators: [withA11y, withKnobs],
    parameters: {
        notes: {
            // markdown
        }
    },
    excludeStories: /.*Data$/,
};

const actionsData = {
    onSelect: action("@select"),
    update: function (page) {
        this.currentPage = page;

    }
}


export const ConfigurablePaginator = () => ({
    components: { Paginator },
    methods: actionsData,
    props: {
        flavor: {
            default: text("Flavor", "")
        },
        currentPage: {
            default: number("Current Page", 1)
        },
        showFirstLast: {
            default: boolean("Show First and Last Buttons", false)
        },
        pageCount: {
            default: number("Page Count", 20)
        },
        marginPages: {
            default: number("Margin Pages", 2)
        },
        pageRange: {
            default: number("Page Range", 3)
        }
    },
    template: `
        <div style="position: relative">
            <paginator 
                :flavor="flavor"
                :show-first-last="showFirstLast"
                :page-count="pageCount"
                :current-page="currentPage"
                :margin-pages="marginPages" 
                :page-range="pageRange" 
                @select="onSelect($event); update($event);">
            </paginator>
        </div>
    `
})
