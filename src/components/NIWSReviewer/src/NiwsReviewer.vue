<template>
  <flex-row v-if="!stacked">
    <flex-column :lg="6" :sm="12">
      <vue-text-area
        :label-flavor="textFlavor"
        name="niwsComment"
        label="Attach optional comment"
        v-model="internalComment"
        cols="30"
        rows="10"
      ></vue-text-area>
    </flex-column>
    <flex-column :lg="6" :sm="12">
      <div>
        <text>Send to:</text>
        <br />
        <div>
          <n-button
            class="niws-reviewer-button-seperation"
            v-for="transition in transitions"
            :key="transition.transitionId"
            @click="submit(transition)"
            :flavor="transition.destinationState.stateType"
            >{{ transition.destinationState.stateName }}</n-button
          >
        </div>
      </div>
    </flex-column>
  </flex-row>
  <div v-else>
    <flex-row>
      <flex-column :sm="12">
        <vue-text-area
          :name="niwsComment"
          label="Attach optional comment"
          v-model="comment"
          cols="30"
          rows="10"
        ></vue-text-area>
      </flex-column>
    </flex-row>
    <flex-row>
      <flex-column :sm="12">
        <div>
          <text flavor="textFlavor">Send to:</text>
          <br />
          <div>
            <n-button
              class="niws-reviewer-button-seperation"
              v-for="transition in transitions"
              :key="transition.transitionId"
              @click="submit(transition)"
              :flavor="transition.destinationState.stateType"
              >{{ transition.destinationState.stateName }}</n-button
            >
          </div>
        </div>
      </flex-column>
    </flex-row>
  </div>
</template>

<script>
import { FlexRow, FlexColumn } from "@IntusFacultas/layout";
import { NButton } from "@IntusFacultas/button";
import VueTextArea from "@IntusFacultas/textarea";
import { TextContent } from "@IntusFacultas/typography";
import axios from "axios";

export const NiwsReviewer = {
  components: { NButton, VueTextArea, TextContent, FlexRow, FlexColumn },
  data() {
    return {
      internalComment: "",
    };
  },
  watch: {
    comment(newVal) {
      if (this.internalComment != newVal) {
        this.internalComment = newVal;
      }
    },
  },
  props: {
    comment: {
      type: String,
      default: "",
    },
    transitions: {
      type: Array,
      required: true,
    },
    instanceId: {
      type: String,
      required: true,
    },
    workflowUrl: {
      type: String,
      required: true,
    },
    workflowId: {
      type: String,
      required: true,
    },
    stacked: {
      type: Boolean,
      default: false,
    },
    textFlavor: {
      type: String,
      default: "Normal",
    },
  },
  mounted() {
    let self = this;
    self.internalComment = self.comment;
  },
  methods: {
    submit(transition) {
      let self = this;
      let url = self.workflowUrl;
      if (url[url.length - 1] != "/") {
        url += "/";
      }
      url += "workflow/";
      url += self.workflowId;
      url += "/instance/";
      url += self.instanceId;
      url += "/transition/";
      url += transition.transitionId;
      self.$emit(
        "post",
        axios.post(
          url,
          { comment: self.internalComment },
          { withCredentials: true }
        )
      );
    },
  },
};
export default NiwsReviewer;
</script>

<style>
.niws-reviewer-button-seperation {
  margin: 0px 2px;
}
</style>
