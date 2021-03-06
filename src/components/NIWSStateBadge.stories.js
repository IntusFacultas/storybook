// import { withA11y } from "@storybook/addon-a11y";
// import { withKnobs, object } from "@storybook/addon-knobs";
// import { NiwsState } from "Components/components/NIWSStateBadge/StateBadge.vue";
// import markdown from "Components/components/NIWSStateBadge/USAGE.md";

// export default {
//   title: "NIWS/State Badge",
//   parameters: {
//     notes: { markdown },
//   },
//   decorators: [withA11y, withKnobs],
//   // Our exports that end in "Data" are not stories.
//   excludeStories: /.*Data$/,
// };

// export const TaskStateBadge = () => ({
//   components: { NiwsState },
//   props: {
//     /**
//      * type: Object
//      * default: a JS object similar to a NIWS state as defined in the NIWS API Documentation
//      *
//      */
//     data: {
//       default: object("NIWS Data", {
//         stateId: 1,
//         stateName: "Supervisor Review",
//         stateDescription: "Supervisor Reviews Application",
//         stateType: "TASK",
//         outgoingTransitions: [],
//         incomingTransitions: [],
//       }),
//     },
//   },
//   template: `
//         <div><niws-state :data="data"></niws-state></div>
//     `,
// });

// export const ReworkStateBadge = () => ({
//   components: { NiwsState },
//   props: {
//     /**
//      * type: Object
//      * default: a JS object similar to a NIWS state as defined in the NIWS API Documentation
//      *
//      */
//     data: {
//       default: object("NIWS Data", {
//         stateId: 1,
//         stateName: "Rework",
//         stateDescription: "Application needs modifications",
//         stateType: "REWORK",
//         outgoingTransitions: [],
//         incomingTransitions: [],
//       }),
//     },
//   },
//   template: `
//         <div><niws-state :data="data"></niws-state></div>
//     `,
// });

// export const StartStateBadge = () => ({
//   components: { NiwsState },
//   props: {
//     /**
//      * type: Object
//      * default: a JS object similar to a NIWS state as defined in the NIWS API Documentation
//      *
//      */
//     data: {
//       default: object("NIWS Data", {
//         stateId: 1,
//         stateName: "Submit Application",
//         stateDescription: "Application Submitted",
//         stateType: "START",
//         outgoingTransitions: [],
//         incomingTransitions: [],
//       }),
//     },
//   },
//   template: `
//         <div><niws-state :data="data"></niws-state></div>
//     `,
// });

// export const CompleteStateBadge = () => ({
//   components: { NiwsState },
//   props: {
//     /**
//      * type: Object
//      * default: a JS object similar to a NIWS state as defined in the NIWS API Documentation
//      *
//      */
//     data: {
//       default: object("NIWS Data", {
//         stateId: 1,
//         stateName: "Application Approved",
//         stateDescription: "Application accepted by supervisor",
//         stateType: "COMPLETE",
//         outgoingTransitions: [],
//         incomingTransitions: [],
//       }),
//     },
//   },
//   template: `
//         <div><niws-state :data="data"></niws-state></div>
//     `,
// });

// export const CancelStateBadge = () => ({
//   components: { NiwsState },
//   props: {
//     /**
//      * type: Object
//      * default: a JS object similar to a NIWS state as defined in the NIWS API Documentation
//      *
//      */
//     data: {
//       default: object("NIWS Data", {
//         stateId: 1,
//         stateName: "Application Denied",
//         stateDescription: "Application denied by supervisor",
//         stateType: "CANCEL",
//         outgoingTransitions: [],
//         incomingTransitions: [],
//       }),
//     },
//   },
//   template: `
//         <div><niws-state :data="data"></niws-state></div>
//     `,
// });
