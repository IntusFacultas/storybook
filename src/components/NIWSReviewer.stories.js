import { withA11y } from '@storybook/addon-a11y';
import { withKnobs, object, text, } from '@storybook/addon-knobs';
import { NiwsReviewer } from "./NIWSReviewer/niwsReviewer.vue";
import { NiwsStackedReviewer } from "./NIWSReviewer/niwsStackedReviewer.vue";
import markdown from "./NIWSReviewer/USAGE.md";

export default {
    title: 'NIWS/Reviewing Panel',
    decorators: [withA11y, withKnobs],
    parameters: {
        notes: { markdown }
    },
    // Our exports that end in "Data" are not stories.
    excludeStories: /.*Data$/,
};

const propData = {
    classMapping: {
        default: object("State CSS Class Mapping", {
            "TASK": ["niws-reviewer-task-button"],
            "START": ["niws-reviewer-start-button"],
            "CANCEL": ['niws-reviewer-cancel-button'],
            "COMPLETE": ["niws-reviewer-complete-button"],
            "REWORK": ["niws-reviewer-rework-button"],
        })
    },
    transitions: {
        default: object("NIWS Transitions", {})
    },
    instanceId: {
        default: text("Instance ID", "")
    },
    workflowUrl: {
        default: text("Workflow URL", "")
    },
    workflowId: {
        default: text("Workflow ID", "")
    },
    callback: {
        default: object("Callback Function", function (data) { console.log(data) })
    }
}

export const HorizontalReviewer = () => ({
    components: { NiwsReviewer },
    props: propData,
    template: `
        <niws-reviewer></niws-reviewer>
    `
});

export const StackedReviewer = () => ({
    components: { NiwsStackedReviewer },
    props: propData,
    template: `
        <niws-stacked-reviewer></niws-stacked-reviewer>
    `
})