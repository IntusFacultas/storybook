<template>
  <alert-container :width="maxWidth">
    <alert
      v-for="alert in alerts"
      :key="alert.id"
      :class="{dying: alert.dying}"
      :flavor="alert.type"
      @click="removeToast(alert.id)"
    >
      <icon-container>
        <span v-if="alert.type == 'warning'">&#9888;</span>
        <span v-else-if="alert.type == 'success'">&#10004;</span>
        <span v-else-if="alert.type == 'info'">&#128712;</span>
        <div v-else-if="alert.type =='danger'">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            version="1.1"
            id="Capa_1"
            xml:space="preserve"
            viewBox="0 0 50 50"
            style="fill: white;"
            height="20px"
          >
            <g>
              <path
                d="M44.373,7.603c-10.137-10.137-26.632-10.138-36.77,0c-10.138,10.138-10.137,26.632,0,36.77s26.632,10.138,36.77,0   C54.51,34.235,54.51,17.74,44.373,7.603z M36.241,36.241c-0.781,0.781-2.047,0.781-2.828,0l-7.425-7.425l-7.778,7.778   c-0.781,0.781-2.047,0.781-2.828,0c-0.781-0.781-0.781-2.047,0-2.828l7.778-7.778l-7.425-7.425c-0.781-0.781-0.781-2.048,0-2.828   c0.781-0.781,2.047-0.781,2.828,0l7.425,7.425l7.071-7.071c0.781-0.781,2.047-0.781,2.828,0c0.781,0.781,0.781,2.047,0,2.828   l-7.071,7.071l7.425,7.425C37.022,34.194,37.022,35.46,36.241,36.241z"
              />
            </g>
          </svg>
        </div>
      </icon-container>
      <alert-content v-html="alert.content"></alert-content>
    </alert>
  </alert-container>
</template>

<script>
import styled from "vue-styled-components";
import { ToastTheme } from "@intus/designsystem";
require("@intus/fonts");
const props = {
  flavor: String,
  width: Number,
  defaultTheme: {
    type: Object,
    default: function() {
      return ToastTheme;
    }
  }
};
const AlertContainer = styled("div", props)`
  max-width: ${props => props.width}px;
  position: fixed;
  right: 15px;
  top: 30px;
  bottom: 0px;
  display: flex;
  flex-direction: column;
`;
const IconContainer = styled("div", props)`
  padding-right: 0.5rem;
  font-size: 25px;
`;
const AlertContent = styled.div``;
const Alert = styled("div", props)`
  border-radius: 2px;
  padding: 1rem;
  margin-bottom: 5px;
  align-items: center;
  display: flex;
  justify-content: space-between;
  -webkit-animation: fadein 0.5s; /* Safari, Chrome and Opera > 12.1 */
  -moz-animation: fadein 0.5s; /* Firefox < 16 */
  -ms-animation: fadein 0.5s; /* Internet Explorer */
  -o-animation: fadein 0.5s; /* Opera < 12.1 */
  animation: fadein 0.5s;
  
  @keyframes fadein {
    from {
      opacity: 0;
    }
    to {
      opacity: 0.85;
    }
  }

  /* Firefox < 16 */
  @-moz-keyframes fadein {
    from {
      opacity: 0;
    }
    to {
      opacity: 0.85;
    }
  }

  /* Safari, Chrome and Opera > 12.1 */
  @-webkit-keyframes fadein {
    from {
      opacity: 0;
    }
    to {
      opacity: 0.85;
    }
  }

  /* Internet Explorer */
  @-ms-keyframes fadein {
    from {
      opacity: 0;
    }
    to {
      opacity: 0.85;
    }
  }

  /* Opera < 12.1 */
  @-o-keyframes fadein {
    from {
      opacity: 0;
    }
    to {
      opacity: 0.85;
    }
  }
  opacity: 0.85;
  & * {
    opacity: 1;
  }
  box-shadow: 0px 0px 6px 1px
    ${props =>
      props.theme && props.theme[props.flavor]
        ? props.theme[props.flavor].border.color
        : props.defaultTheme[props.flavor]
        ? props.defaultTheme[props.flavor].border.color
        : "#f2f2f2"};
  &:hover {
    box-shadow: 0px 0px 6px 2px
      ${props =>
        props.theme && props.theme[props.flavor]
          ? props.theme[props.flavor].border.color
          : props.defaultTheme[props.flavor]
          ? props.defaultTheme[props.flavor].border.color
          : "#f2f2f2"};
  }
  transition: 1s all;
  cursor: pointer;
  border: 2px solid
    ${props =>
      props.theme && props.theme[props.flavor]
        ? props.theme[props.flavor].border.color
        : props.defaultTheme[props.flavor]
        ? props.defaultTheme[props.flavor].border.color
        : "#f2f2f2"};
  background-color: ${props =>
    props.theme && props.theme[props.flavor]
      ? props.theme[props.flavor].background.color
      : props.defaultTheme[props.flavor]
      ? props.defaultTheme[props.flavor].background.color
      : "#f2f2f2"};
  font-family: "Open Sans Regular", -apple-system, BlinkMacSystemFont,
    "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji",
    "Segoe UI Emoji", "Segoe UI Symbol";
  font-size: 16px;
  font-weight: bold;
  & * {
    color: ${props =>
      props.theme && props.theme[props.flavor]
        ? props.theme[props.flavor].color.color
        : props.defaultTheme[props.flavor]
        ? props.defaultTheme[props.flavor].color.color
        : "#222"};
  }
`;

export const VueToast = {
  components: {
    AlertContainer,
    IconContainer,
    AlertContent,
    Alert
  },
  data() {
    return {
      alerts: [],
      validTypes: ["WARNING", "INFO", "DANGER", "SUCCESS"]
    };
  },
  props: {
    parentInstance: {
      type: Object,
      required: true
    },
    maxWidth: {
      type: Number,
      default: 300
    },
    delay: {
      type: Number,
      default: 5000
    }
  },
  mounted() {
    this.parentInstance.$toast = this.toast;
  },
  computed: {},
  methods: {
    uuidv4() {
      // pulled from https://stackoverflow.com/questions/105034/create-guid-uuid-in-javascript
      return ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, c =>
        (
          c ^
          (crypto.getRandomValues(new Uint8Array(1))[0] & (15 >> (c / 4)))
        ).toString(16)
      );
    },
    toast(options) {
      let self = this;
      let alertType = "info";
      if (
        options.type &&
        this.validTypes.indexOf(options.type.toUpperCase()) > -1
      ) {
        alertType = options.type.toLowerCase();
      }
      let text = "This is an info toast";
      if (options.text) {
        text = options.text;
      }
      let id = this.uuidv4();
      let timeAdded = Math.round(new Date().getTime() / 1000);
      let dying = false;
      this.alerts.push({
        type: alertType,
        content: text,
        timeAdded: timeAdded,
        id: id,
        dying: dying
      });
      setTimeout(function() {
        self.removeToast(id);
      }, this.delay);
    },
    removeToast(id) {
      var self = this;
      let alert = this.alerts.filter(alert => alert.id == id)[0];
      if (alert && !alert.dying) {
        alert.dying = true;
        this.$forceUpdate();
        setTimeout(function() {
          self.alerts = self.alerts.filter(alert => alert.id != id);
          self.$forceUpdate();
        }, 501);
      } else if (!alert) {
        self.$nextTick(self.removeToast(id));
      }
    }
  }
};
export default VueToast;
</script>

<style>
.dying {
  transition: 0.5s all;
  opacity: 0;
}
</style>
