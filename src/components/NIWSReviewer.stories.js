// import { withA11y } from "@storybook/addon-a11y";
// import { action } from "@storybook/addon-actions";
// import { withKnobs, object, text } from "@storybook/addon-knobs";
// import { NiwsReviewer } from "Components/components/NIWSReviewer/src/NiwsReviewer.vue";
// import markdown from "Components/components/NIWSReviewer/USAGE.md";
// import axios from "axios";
// import MockAdapter from "axios-mock-adapter";
// const mock = new MockAdapter(axios);

// import { TextContent } from "Components/components/StyledHTML/Typography/src/Typography.vue";
// import {
//   List,
//   ListItem,
// } from "Components/components/StyledHTML/List/src/StyledList.vue";
// import { NIWSTheme as Theme } from "Components/components/DesignSystem/theme.js";
// let formattedTheme = [];
// Object.keys(Theme).forEach((key) =>
//   formattedTheme.push({ text: key, value: Theme[key].background.color })
// );

// export default {
//   title: "NIWS/Reviewing Panel",
//   decorators: [withA11y, withKnobs],
//   parameters: {
//     notes: { markdown },
//   },
//   // Our exports that end in "Data" are not stories.
//   excludeStories: /.*Data$/,
// };
// let instanceID = "123V123";
// let baseURL = "https://niws.intusfacultas.dev/niws/";
// let workflowID = "MockWorkflow";
// const propData = {
//   transitions: {
//     default: object("NIWS Transitions", [
//       {
//         transitionId: 1,
//         originState: {
//           stateId: 1,
//           stateName: "Start",
//           stateDescription: "Start state",
//           stateType: "START",
//         },
//         destinationState: {
//           stateId: 2,
//           stateName: "Task 1",
//           stateDescription: "Do something",
//           stateType: "TASK",
//         },
//       },
//       {
//         transitionId: 2,
//         originState: {
//           stateId: 1,
//           stateName: "Start",
//           stateDescription: "Start state",
//           stateType: "START",
//         },
//         destinationState: {
//           stateId: 3,
//           stateName: "Task Cancelled",
//           stateDescription: "Don't do something",
//           stateType: "CANCEL",
//         },
//       },
//       {
//         transitionId: 3,
//         originState: {
//           stateId: 1,
//           stateName: "Start",
//           stateDescription: "Start state",
//           stateType: "START",
//         },
//         destinationState: {
//           stateId: 4,
//           stateName: "Rework",
//           stateDescription: "Do something again",
//           stateType: "REWORK",
//         },
//       },
//       {
//         transitionId: 4,
//         originState: {
//           stateId: 1,
//           stateName: "Start",
//           stateDescription: "Start state",
//           stateType: "START",
//         },
//         destinationState: {
//           stateId: 5,
//           stateName: "Complete Task",
//           stateDescription: "Done something",
//           stateType: "COMPLETE",
//         },
//       },
//     ]),
//   },
//   instanceId: {
//     default: text("Instance ID", instanceID),
//   },
//   workflowUrl: {
//     default: text("Workflow URL", baseURL),
//   },
//   workflowId: {
//     default: text("Workflow ID", workflowID),
//   },
//   textFlavor: {
//     default: text("Flavor", ""),
//   },
// };
// const API_REQUEST_1 = `${baseURL}workflow/${workflowID}/instance/${instanceID}/transition/1`;
// const API_REQUEST_2 = `${baseURL}workflow/${workflowID}/instance/${instanceID}/transition/2`;
// const API_REQUEST_3 = `${baseURL}workflow/${workflowID}/instance/${instanceID}/transition/3`;
// const API_REQUEST_4 = `${baseURL}workflow/${workflowID}/instance/${instanceID}/transition/4`;
// let responseData = {
//   instanceId: 1,
//   createdBy: {
//     // up to date information for the author's primary Bifrost account
//     username: "username",
//     first_name: "first_name",
//     last_name: "last_name",
//     email: "email",
//     pia: false,
//     sia: false,
//     office: "office",
//   },
//   authorOfficeAtTimeOfCreation: "office",
//   networkIDUsedForCreation: "id",
//   dateCreated: "2020-02-02",
//   completed: false,
//   cancelled: false,
//   active: true,
//   currentState: {
//     stateId: 1,
//     stateName: "name",
//     stateDescription: "description",
//     stateType: "TASK",
//     outgoingTransitions: [],
//     incomingTransitions: [],
//   },
//   auditLog: [],
// };
// mock.onPost(API_REQUEST_1).reply(200, responseData);
// mock.onPost(API_REQUEST_2).reply(200, responseData);
// mock.onPost(API_REQUEST_3).reply(200, responseData);
// mock.onPost(API_REQUEST_4).reply(200, responseData);
// const actions = {
//   onPost: action("@post"),
// };
// export const HorizontalReviewer = () => ({
//   components: { NiwsReviewer, TextContent, List, ListItem },
//   props: propData,
//   data() {
//     return {
//       formattedTheme,
//     };
//   },
//   methods: actions,
//   template: `
//     <div>
//       <niws-reviewer
//           :transitions="transitions"
//           :instance-id="instanceId"
//           :workflow-url="workflowUrl"
//           :workflow-id="workflowId"
//           :text-flavor="textFlavor"
//           @post="onPost">
//       </niws-reviewer>
//       <hr>
//       <text-content :size="16">Design system information can be found <a href="/?path=/story/design-system--colors">here</a></text-content><br>
//       <text-content :size="16">Available Flavors</text-content>
//       <list>
//       <list-item v-for="themeFlavor in formattedTheme" :key="themeFlavor.text" :style="{color: themeFlavor.value}">
//           {{themeFlavor.text}}
//       </list-item>
//       </list>

//     </div>
//     `,
// });

// export const StackedReviewer = () => ({
//   components: { NiwsReviewer },
//   props: propData,
//   data() {
//     return {
//       formattedTheme,
//     };
//   },
//   methods: actions,
//   template: `
//     <div>
//       <niws-reviewer
//           :transitions="transitions"
//           :instance-id="instanceId"
//           :workflow-url="workflowUrl"
//           :workflow-id="workflowId"
//           :text-flavor="textFlavor"
//           :stacked="true"
//           @post="onPost">
//       </niws-reviewer>
//       <hr>
//       <text-content :size="16">Design system information can be found <a href="/?path=/story/design-system--colors">here</a></text-content><br>
//       <text-content :size="16">Available Flavors</text-content>
//       <list>
//       <list-item v-for="themeFlavor in formattedTheme" :key="themeFlavor.text" :style="{color: themeFlavor.value}">
//           {{themeFlavor.text}}
//       </list-item>
//       </list>
//     </div>
//       `,
// });
