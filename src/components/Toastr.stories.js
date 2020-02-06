import { VueToast } from "Components/components/ToastAlert/Alert.vue";
import { withA11y } from '@storybook/addon-a11y';
import NButton from "@intus/button";
import { withKnobs, number, text } from '@storybook/addon-knobs';
import markdown from "Components/components/ToastAlert/Usage.md";


export default {
    title: "VueToast",
    decorators: [withA11y, withKnobs],
    parameters: {
        notes: {
            markdown
        }
    },
    excludeStories: /.*Data$/,
};


export const ToastrAlerts = () => ({
    components: { VueToast, NButton },
    props: {
        maxWidth: {
            default: number("Max Width", 300)
        },
        delay: {
            default: number("Delay", 5000)
        },
        alertType: {
            default: text("Alert Type", "success")
        },
        alertText: {
            default: text("Alert Text", "This is a toast alert")
        }
    },
    methods: {
        fireToast() {
            this.$toast({
                type: this.alertType,
                text: this.alertText,
            })
        }
    },
    template: `
        <div>
            <n-button @click="fireToast">Toast</n-button>
             <vue-toast :max-width="maxWidth" :delay="delay" :parent-instance="this"></vue-toast>
        </div>
    `
});