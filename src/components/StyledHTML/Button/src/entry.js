// Import vue component
import { NButton, DialogButton } from "./Button.vue";

// install function executed by Vue.use()
const install = function installNButton(Vue) {
  if (install.installed) return;
  install.installed = true;
  Vue.component("NButton", NButton);
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
NButton.install = install;

// install function executed by Vue.use()
const dialogInstall = function installDialogButton(Vue) {
  if (dialogInstall.installed) return;
  dialogInstall.installed = true;
  Vue.component("DialogButton", DialogButton);
};

// Create module definition for Vue.use()
const dialogPlugin = {
  install: dialogInstall
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
  GlobalVue.use(dialogPlugin);
}

// Inject install function into component - allows component
// to be registered via Vue.use() as well as Vue.component()
DialogButton.install = dialogInstall;

// Export component by default
export { NButton, DialogButton };

// It's possible to expose named exports when writing components that can
// also be used as directives, etc. - eg. import { RollupDemoDirective } from 'rollup-demo';
// export const RollupDemoDirective = component;
