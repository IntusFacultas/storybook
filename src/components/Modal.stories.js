import { withA11y } from "@storybook/addon-a11y";
import { withKnobs, text, boolean } from "@storybook/addon-knobs";
import { Modal } from "Components/components/Modal/src/Modal.vue";
import { NButton } from "@IntusFacultas/button";
import {
  SubSectionTitle,
  TextContent,
  SmallText,
} from "Components/components/StyledHTML/Typography/src/Typography.vue";
import markdown from "Components/components/Modal/Usage.md";

import {
  List,
  ListItem,
} from "Components/components/StyledHTML/List/src/StyledList.vue";
import { Theme } from "Components/components/DesignSystem/theme.js";
let formattedTheme = [];
Object.keys(Theme).forEach((key) =>
  formattedTheme.push({ text: key, value: Theme[key].background.color })
);

import {
  specs,
  describe,
  it,
  beforeEach,
} from "storybook-addon-specifications";
import expect from "expect";
import { mount } from "@vue/test-utils";
import jest from "jest-mock";
window.jest = jest;

export default {
  title: "Modal",
  decorators: [withA11y, withKnobs],
  parameters: {
    notes: {
      markdown,
    },
  },
  excludeStories: /.*Data$/,
};

export const ConfigurableModal = () => ({
  components: {
    Modal,
    SubSectionTitle,
    TextContent,
    SmallText,
    NButton,
    List,
    ListItem,
  },
  data() {
    return {
      modalId: "my-modal",
      formattedTheme,
    };
  },
  specs: specs(() =>
    describe("Modal", () => {
      let vm;
      let wrapper;
      beforeEach(() => {
        wrapper = mount(Modal, {
          propsData: {
            id: "modal",
          },
        });
        vm = wrapper.vm;
      });
      it("polyfills Custom Event", () => {
        expect(window.CustomEvent).toBeDefined();
      });
      it("checks descendents", () => {
        expect(vm.isDescendant(null, { parentNode: null })).toBeFalsy();
        expect(vm.isDescendant(1, { parentNode: 1 })).toBeTruthy();
        expect(
          vm.isDescendant(1, { parentNode: { parentNode: 1 } })
        ).toBeTruthy();
      });
      it("turns off", () => {
        vm.visible = true;
        vm.backgroundDismiss = false;
        let event = {
          target: vm.$refs.backdrop.$el,
        };
        vm.turnOff(event);
        expect(vm.visible).toBeTruthy();
        vm.backgroundDismiss = true;
        vm.turnOff(event);
        expect(vm.visible).toBeFalsy();
      });
      it("detects change", () => {
        vm.visible = false;
        vm.detectChange({ detail: { modal: true } });
        expect(vm.visible).toBeTruthy();
      });
    })
  ),
  props: {
    headerFlavor: {
      default: text("Header Flavor", ""),
    },
    bodyFlavor: {
      default: text("Body Flavor", ""),
    },
    footerFlavor: {
      default: text("Footer Flavor", ""),
    },
    backgroundDismiss: {
      default: boolean("Allow Background Dismiss", true),
    },
    width: {
      default: text("Width", ""),
    },
    header: {
      default: boolean("Header", true),
    },
    footer: {
      default: boolean("Footer", true),
    },
    topOffset: {
      default: text("Top Offset", ""),
    },
    bottomOffset: {
      default: text("Bottom Offset", ""),
    },
  },
  methods: {
    openModal() {
      let evt = new CustomEvent(`modal-${this.modalId}`, {
        detail: { modal: true },
      });
      window.dispatchEvent(evt);
    },
    closeModal() {
      let evt = new CustomEvent(`modal-${this.modalId}`, {
        detail: { modal: false },
      });
      window.dispatchEvent(evt);
    },
  },
  template: `
        <div>
            <n-button @click="openModal">Open Modal</n-button>
            <modal
                :id="modalId"
                :header-flavor="headerFlavor"
                :footer-flavor="footerFlavor"
                :body-flavor="bodyFlavor"
                :width="width"
                :top-offset="topOffset"
                :bottom-offset="bottomOffset"
                :background-dismiss="backgroundDismiss"
                :header="header"
                :footer="footer">
                <template v-slot:header><b><text-content :size="16">Test Header</text-content></b></template>
                <template v-slot:body><text-content>Sample body</text-content></template>
                <template v-slot:footer><small-text>This is a footer.</small-text> <n-button @click="closeModal">Close Modal</n-button></template>
            </modal>
            <hr>
            <text-content :size="16">Design system information can be found <a href="/?path=/story/design-system--colors">here</a></text-content><br>
            <text-content :size="16">Available Flavors</text-content>
            <list>
            <list-item v-for="themeFlavor in formattedTheme" :key="themeFlavor.text" :style="{color: themeFlavor.value}">
                {{themeFlavor.text}}
            </list-item>
            </list>
        </div>
    `,
});
