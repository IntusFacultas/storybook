import { withA11y } from "@storybook/addon-a11y";
import { withKnobs, text, boolean } from "@storybook/addon-knobs";
import { Modal } from "Components/components/Modal/src/Modal.vue";
import { NButton } from "@IntusFacultas/button";
import {
  SubSectionTitle,
  WebText,
  NSmall
} from "Components/components/StyledHTML/Typography/src/Typography.vue";
import markdown from "Components/components/Modal/Usage.md";

export default {
  title: "Modal",
  decorators: [withA11y, withKnobs],
  parameters: {
    notes: {
      markdown
    }
  },
  excludeStories: /.*Data$/
};

export const ConfigurableModal = () => ({
  components: { Modal, SubSectionTitle, WebText, NSmall, NButton },
  data() {
    return {
      modalId: "my-modal"
    };
  },
  props: {
    headerFlavor: {
      default: text("Header Flavor", "Primary")
    },
    bodyFlavor: {
      default: text("Body Flavor", "Primary")
    },
    footerFlavor: {
      default: text("Footer Flavor", "Primary")
    },
    backgroundDismiss: {
      default: boolean("Allow Background Dismiss", true)
    },
    width: {
      default: text("Width", "")
    },
    header: {
      default: boolean("Header", true)
    },
    footer: {
      default: boolean("Footer", true)
    },
    topOffset: {
      default: text("Top Offset", "")
    }
  },
  methods: {
    openModal() {
      let evt = new CustomEvent(`modal-${this.modalId}`, {
        detail: { modal: true }
      });
      window.dispatchEvent(evt);
    },
    closeModal() {
      let evt = new CustomEvent(`modal-${this.modalId}`, {
        detail: { modal: false }
      });
      window.dispatchEvent(evt);
    }
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
                :background-dismiss="backgroundDismiss"
                :header="header"
                :footer="footer">
                <template v-slot:header><b><n-text :size="16">Test Header</web-text></b></template>
                <template v-slot:body><web-text>Sample body</web-text></template>
                <template v-slot:footer><n-small>This is a footer.</n-small> <n-button @click="closeModal">Close Modal</n-button></template>
            </modal>
        </div>
    `
});
