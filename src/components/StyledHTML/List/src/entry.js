// Import vue component
import { List, ListItem, OrderedList } from "./StyledList.vue";

let components = [
  { label: "List", component: List },
  { label: "OrderedList", component: OrderedList },
  { label: "ListItem", component: ListItem }
];
let GlobalVue = null;
for (let component_obj of components) {
  // install function executed by Vue.use()
  const install = function installComponent(Vue) {
    if (install.installed) return;
    install.installed = true;
    Vue.component(component_obj.label, component_obj.component);
  };

  // Create module definition for Vue.use()
  const plugin = {
    install
  };

  // To auto-install when vue is found
  // eslint-disable-next-line no-redeclare
  /* global window, global */
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
  component_obj.component.install = install;
}
// Export component by default
export { List, ListItem, OrderedList };

// It's possible to expose named exports when writing components that can
// also be used as directives, etc. - eg. import { RollupDemoDirective } from 'rollup-demo';
// export const RollupDemoDirective = component;
