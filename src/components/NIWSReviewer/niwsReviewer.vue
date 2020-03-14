<template>
  <flex-row>
    <flex-column :lg="6" :sm="12">
      <vue-text-area
        :name="niwsComment"
        label="Attach optional comment"
        @input="comment = $event.target.value"
        cols="30"
        rows="10"
      ></vue-text-area>
    </flex-column>
    <flex-column :lg="6" :sm="12">
      <web-text>Send to:</web-text>
      <button
        class="niws-reviewer-button"
        v-for="transition in transitions"
        :key="transition.transitionId"
        @click="submit(transition)"
        :class="calculateClass(transition)"
      >
        {{ transition.destinationState.stateName }}
      </button>
    </flex-column>
  </flex-row>
</template>

<script>
import {
  FlexRow,
  FlexColumn
} from "Components/components/Layout/src/Layout.vue";
import { NButton } from "Components/components/StyledHTML/Button/src/Button.vue";
import { VueTextArea } from "Components/components/StyledHTML/TextArea/src/TextArea.vue";
import { WebText } from "Components/components/StyledHTML/Typography/src/Typography.vue";

export const NiwsReviewer = {
  components: { NButton, VueTextArea, WebText, FlexRow, FlexColumn },
  data: function() {
    return {
      comment: ""
    };
  },
  props: {
    classMapping: {
      type: Object,
      default: function() {
        return {
          TASK: ["niws-reviewer-task-button"],
          START: ["niws-reviewer-start-button"],
          CANCEL: ["niws-reviewer-cancel-button"],
          COMPLETE: ["niws-reviewer-complete-button"],
          REWORK: ["niws-reviewer-rework-button"]
        };
      }
    },
    transitions: {
      type: Array,
      required: true
    },
    instanceId: {
      type: String,
      required: true
    },
    workflowUrl: {
      type: String,
      required: true
    },
    workflowId: {
      type: String,
      required: true
    },
    callback: {
      type: Function,
      default: function() {}
    }
  },
  mounted: function() {
    var self = this;
  },
  methods: {
    submit: function(transition) {
      var self = this;
      var url = self.workflowUrl;
      if (url[url.length - 1] != "/") {
        url += "/";
      }
      url += "workflow/";
      url += self.workflowId;
      url += "/instance/";
      url += self.instanceId;
      url += "/transition/";
      url += transition.transitionId;

      function postAjax(url, data) {
        // gotten from https://plainjs.com/javascript/ajax/send-ajax-get-and-post-requests-47/
        var params =
          typeof data == "string"
            ? data
            : Object.keys(data)
                .map(function(k) {
                  return (
                    encodeURIComponent(k) + "=" + encodeURIComponent(data[k])
                  );
                })
                .join("&");

        var xhr = window.XMLHttpRequest
          ? new XMLHttpRequest()
          : new ActiveXObject("Microsoft.XMLHTTP");
        xhr.open("POST", url);
        xhr.onreadystatechange = function() {
          if (xhr.readyState > 3) {
            self.callback({
              optionClicked: transition,
              response: xhr
            });
          }
        };
        xhr.setRequestHeader("X-Requested-With", "XMLHttpRequest");
        xhr.setRequestHeader(
          "Content-Type",
          "application/x-www-form-urlencoded"
        );
        xhr.withCredentials = true;
        xhr.send(params);
        return xhr;
      }
      postAjax(url, { comment: self.comment });
    },
    calculateClass: function(transition) {
      var self = this;
      return [self.classMapping[transition.destinationState.stateType]];
    }
  }
};
export default NiwsReviewer;
</script>

<style scoped>
@import "./niwsReviewer.css";
</style>
