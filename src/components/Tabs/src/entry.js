// Import vue component
import Tabs from "./Tabs.vue";


// install function executed by Vue.use()
const install = function installTabs(Vue) {
    if (install.installed) return;
    install.installed = true;
    Vue.component("Tabs", Tabs);
};

// Create module definition for Vue.use()
const plugin = {
    install
};

// To auto-install when vue is found
// eslint-disable-next-line no-redeclare
/* global window, global */
let GlobalVue = null;
if (typeof window !== "undefined") {
    GlobalVue = window.Vue;
} else if (typeof global !== "undefined") {
    GlobalVue = global.Vue;
}
if (GlobalVue) {
    GlobalVue.use(plugin);
}

// Inject install function into component - allows component
// to be registered via Vue.use() as well as Vue.component()
Tabs.install = install;

// Export component by default
export default Tabs;

// It's possible to expose named exports when writing components that can
// also be used as directives, etc. - eg. import { RollupDemoDirective } from 'rollup-demo';
// export const RollupDemoDirective = component;