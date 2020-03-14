<template>
  <alert-container
    v-if="showing"
    aria-live="polite"
    role="alert"
    :animated="animated"
    :closeable="closeable"
    :flavor="flavor"
    @click="closeAlert"
    :class="computedClass"
  >
    <slot>I'm an alert! Put HTML in me!</slot>
    <close-container v-if="closeable">
      <svg
        class="svg-icon"
        viewBox="0 0 20 20"
        height="10"
        :stroke="theme[flavor] ? theme[flavor].color.color : '#222'"
      >
        <path
          :stroke="theme[flavor] ? theme[flavor].color.color : '#222'"
          d="M11.469,10l7.08-7.08c0.406-0.406,0.406-1.064,0-1.469c-0.406-0.406-1.063-0.406-1.469,0L10,8.53l-7.081-7.08
							c-0.406-0.406-1.064-0.406-1.469,0c-0.406,0.406-0.406,1.063,0,1.469L8.531,10L1.45,17.081c-0.406,0.406-0.406,1.064,0,1.469
							c0.203,0.203,0.469,0.304,0.735,0.304c0.266,0,0.531-0.101,0.735-0.304L10,11.469l7.08,7.081c0.203,0.203,0.469,0.304,0.735,0.304
							c0.267,0,0.532-0.101,0.735-0.304c0.406-0.406,0.406-1.064,0-1.469L11.469,10z"
        />
      </svg>
    </close-container>
  </alert-container>
</template>

<script>
import styled from "vue-styled-components";
import { AlertTheme } from "@IntusFacultas/design-system";
const props = {
  flavor: String,
  defaultTheme: {
    type: Object,
    default: function() {
      return AlertTheme;
    }
  },
  animated: Boolean,
  closeable: Boolean
};
const CloseContainer = styled("button")`
  cursor: pointer;
  float: right;
  text-align: end;
  background-color: transparent;
  border: none;
  width: 45px;
  outline: none;
`;
const AlertContainer = styled("div", props)`
  padding: 1rem;
  border-radius: 4px;
  border: 2px solid
    ${props =>
      props.theme && props.theme[props.flavor]
        ? props.theme[props.flavor].border.color
        : props.defaultTheme[props.flavor]
        ? props.defaultTheme[props.flavor].border.color
        : "#e8e8e8"};
  background-color: ${props =>
    props.theme && props.theme[props.flavor]
      ? props.theme[props.flavor].background.color
      : props.defaultTheme[props.flavor]
      ? props.defaultTheme[props.flavor].background.color
      : "#f2f2f2"};
  ${props =>
    props.animated
      ? `
        transition: .5s ease-in-out all;
        -webkit-animation: vue-static-alert-fadein 0.5s; /* Safari, Chrome and Opera > 12.1 */
        -moz-animation: vue-static-alert-fadein 0.5s; /* Firefox < 16 */
        -ms-animation: vue-static-alert-fadein 0.5s; /* Internet Explorer */
        -o-animation: vue-static-alert-fadein 0.5s; /* Opera < 12.1 */
        animation: vue-static-alert-fadein 0.5s;
        `
      : ``}
  ${props => (props.closeable ? `cursor: pointer;` : ``)}
  opacity: 1;
  font-weight: bold;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-family: "Open Sans Regular", -apple-system, BlinkMacSystemFont,
    "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji",
    "Segoe UI Emoji", "Segoe UI Symbol";
  & * {
    opacity: 1;
    line-height: 1rem;
    color: ${props =>
      props.theme && props.theme[props.flavor]
        ? props.theme[props.flavor].color.color
        : props.defaultTheme[props.flavor]
        ? props.defaultTheme[props.flavor].color.color
        : "#222"};
  }
`;

export const VueStaticAlert = {
  components: { AlertContainer, CloseContainer },
  data() {
    return {
      showing: true,
      dying: false,
      theme: AlertTheme
    };
  },
  props: {
    closeable: {
      type: Boolean,
      default: false
    },
    animated: {
      type: Boolean,
      default: false
    },
    flavor: {
      type: String,
      default: ""
    }
  },
  methods: {
    closeAlert() {
      let self = this;
      if (this.closeable) {
        if (this.animated) {
          this.dying = true;
          setTimeout(() => {
            self.showing = false;
          }, 501);
        } else {
          this.showing = false;
        }
      }
    }
  },
  computed: {
    computedClass() {
      if (this.dying && this.animated) {
        return ["vue-alert-dying"];
      }
      return [];
    }
  }
};
export default VueStaticAlert;
</script>

<style>
@keyframes vue-static-alert-fadein {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

/* Firefox < 16 */
@-moz-keyframes vue-static-alert-fadein {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

/* Safari, Chrome and Opera > 12.1 */
@-webkit-keyframes vue-static-alert-fadein {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

/* Internet Explorer */
@-ms-keyframes vue-static-alert-fadein {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

/* Opera < 12.1 */
@-o-keyframes vue-static-alert-fadein {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
.vue-alert-dying {
  opacity: 0 !important;
}
</style>
