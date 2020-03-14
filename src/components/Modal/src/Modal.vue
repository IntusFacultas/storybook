<template>
  <div>
    <n-modal-backdrop :class="computedClass" @click="turnOff" ref="backdrop">
      <n-modal-container :width="width" :top-offset="topOffset" ref="modal">
        <n-modal-header :flavor="headerFlavor" v-if="header">
          <slot name="header"></slot>
        </n-modal-header>
        <n-modal-body :flavor="bodyFlavor" :style="computedStyle">
          <slot name="body"></slot>
        </n-modal-body>
        <n-modal-footer :flavor="footerFlavor" v-if="footer">
          <slot name="footer"></slot>
        </n-modal-footer>
      </n-modal-container>
    </n-modal-backdrop>
  </div>
</template>

<script>
import styled from "vue-styled-components";
import Theme from "@IntusFacultas/design-system";
const props = {
  flavor: String,
  defaultTheme: {
    type: Object,
    default: function() {
      return Theme;
    }
  },
  width: String,
  topOffset: String
};
export const NModalBackdrop = styled.div`
  background-color: rgba(0, 0, 0, 0.35);
  z-index: 999;
  transition: 0.15s ease-in-out all;
  position: fixed;
  top: 0px;
  left: 0px;
  right: 0px;
  bottom: 0px;
  display: flex;
  justify-content: center;
  & > div {
    transform: translateY(0px);
  }
`;
export const NModalContainer = styled("div", props)`
  z-index: 1000;
  margin-top: ${props => (props.topOffset ? props.topOffset : "20px")}
  width: ${props => (props.width ? props.width : "500px")}
  transition: .15s ease-in-out transform;
`;
export const NModalHeader = styled("div", props)`
  border-radius: 5px 5px 0px 0px;
  padding: 10px 10px 10px 10px;
  border: 1px solid
    ${props =>
      props.theme && props.theme[props.flavor]
        ? props.theme[props.flavor].border.hover
        : props.defaultTheme[props.flavor]
        ? props.defaultTheme[props.flavor].border.hover
        : "#aaa"};
  background-color: ${props =>
    props.theme && props.theme[props.flavor]
      ? props.theme[props.flavor].background.color
      : props.defaultTheme[props.flavor]
      ? props.defaultTheme[props.flavor].background.color
      : "white"};
  & * {
    color: ${props =>
      props.theme && props.theme[props.flavor]
        ? props.theme[props.flavor].color.color
        : props.defaultTheme[props.flavor]
        ? props.defaultTheme[props.flavor].color.color
        : "initial"};
  }
`;
export const NModalBody = styled("div", props)`
  padding: 10px;
  border: 1px solid
    ${props =>
      props.theme && props.theme[props.flavor]
        ? props.theme[props.flavor].border.hover
        : props.defaultTheme[props.flavor]
        ? props.defaultTheme[props.flavor].border.hover
        : "#aaa"};
  background-color: ${props =>
    props.theme && props.theme[props.flavor]
      ? props.theme[props.flavor].background.color
      : props.defaultTheme[props.flavor]
      ? props.defaultTheme[props.flavor].background.color
      : "white"};
  border-width: 0px 1px 0px 1px;
  border-style: solid;
  & * {
    color: ${props =>
      props.theme && props.theme[props.flavor]
        ? props.theme[props.flavor].color.color
        : props.defaultTheme[props.flavor]
        ? props.defaultTheme[props.flavor].color.color
        : "initial"};
  }
`;
export const NModalFooter = styled("div", props)`
  padding: 10px;
  border-radius: 0px 0px 5px 5px;

  border: 1px solid
    ${props =>
      props.theme && props.theme[props.flavor]
        ? props.theme[props.flavor].border.hover
        : props.defaultTheme[props.flavor]
        ? props.defaultTheme[props.flavor].border.hover
        : "#aaa"};
  background-color: ${props =>
    props.theme && props.theme[props.flavor]
      ? props.theme[props.flavor].background.color
      : props.defaultTheme[props.flavor]
      ? props.defaultTheme[props.flavor].background.color
      : "white"};
  & * {
    color: ${props =>
      props.theme && props.theme[props.flavor]
        ? props.theme[props.flavor].color.color
        : props.defaultTheme[props.flavor]
        ? props.defaultTheme[props.flavor].color.color
        : "initial"};
  }
`;

export const Modal = {
  components: {
    NModalHeader,
    NModalBody,
    NModalFooter,
    NModalBackdrop,
    NModalContainer
  },
  data() {
    return {
      visible: false
    };
  },
  props: {
    id: {
      type: String,
      required: true
    },
    backgroundDismiss: {
      type: Boolean,
      default: true
    },
    headerFlavor: {
      type: String,
      default: ""
    },
    footerFlavor: {
      type: String,
      default: ""
    },
    bodyFlavor: {
      type: String,
      default: ""
    },
    width: {
      type: String,
      default: "500px"
    },
    topOffset: {
      type: String
    },
    header: {
      type: Boolean,
      default: false
    },
    footer: {
      type: Boolean,
      default: false
    }
  },
  mounted() {
    window.addEventListener(`modal-${this.id}`, this.detectChange);
    (function() {
      if (typeof window.CustomEvent === "function") return false;

      function CustomEvent(event, params) {
        params = params || {
          bubbles: false,
          cancelable: false,
          detail: null
        };
        var evt = document.createEvent("CustomEvent");
        evt.initCustomEvent(
          event,
          params.bubbles,
          params.cancelable,
          params.detail
        );
        return evt;
      }

      window.CustomEvent = CustomEvent;
    })();
  },
  beforeDestroy() {
    window.removeEventListener(`modal-${this.id}`, this.detectChange);
  },
  methods: {
    isDescendant(parent, child) {
      var node = child.parentNode;
      while (node != null) {
        if (node == parent) {
          return true;
        }
        node = node.parentNode;
      }
      return false;
    },
    turnOff(event) {
      if (
        this.backgroundDismiss &&
        !this.isDescendant(this.$refs.modal.$el, event.target)
      ) {
        this.visible = false;
      }
    },
    detectChange(event) {
      this.visible = event.detail.modal;
    }
  },
  computed: {
    computedClass() {
      if (this.visible) {
        return [];
      }
      return ["modal-hidden"];
    },
    computedStyle: function() {
      var self = this;
      let data = {
        "border-top-left-radius": self.header ? "0px" : "5px",
        "border-top-right-radius": self.header ? "0px" : "5px",
        "border-bottom-left-radius": self.footer ? "0px" : "5px",
        "border-bottom-right-radius": self.footer ? "0px" : "5px",
        "border-top-width": self.header ? "0px" : "1px",
        "border-bottom-width": self.footer ? "0px" : "1px"
      };
      return data;
    }
  }
};

export default Modal;
</script>

<style>
.modal-hidden {
  opacity: 0;
  pointer-events: none;
}
.modal-hidden > div {
  transform: translateY(-200px);
}
</style>
