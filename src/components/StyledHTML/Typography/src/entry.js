import {
  PageTitle,
  SectionTitle,
  SubSectionTitle,
  CategoryTitle,
  SubCategoryTitle,
  Keyword,
  TextContent,
  Paragraph,
  SmallText,
  NLabel,
  WebLink,
} from "./Typography.vue";

let components = [
  { label: "PageTitle", component: PageTitle },
  { label: "SectionTitle", component: SectionTitle },
  { label: "SubSectionTitle", component: SubSectionTitle },
  { label: "CategoryTitle", component: CategoryTitle },
  { label: "SubCategoryTitle", component: SubCategoryTitle },
  { label: "Keyword", component: Keyword },
  { label: "TextContent", component: TextContent },
  { label: "Paragraph", component: Paragraph },
  { label: "SmallText", component: SmallText },
  { label: "NLabel", component: NLabel },
  { label: "WebLink", component: WebLink },
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
    install,
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
export {
  PageTitle,
  SectionTitle,
  SubSectionTitle,
  CategoryTitle,
  SubCategoryTitle,
  Keyword,
  TextContent,
  Paragraph,
  SmallText,
  NLabel,
  WebLink,
};
export default TextContent;

// It's possible to expose named exports when writing components that can
// also be used as directives, etc. - eg. import { RollupDemoDirective } from 'rollup-demo';
// export const RollupDemoDirective = component;
