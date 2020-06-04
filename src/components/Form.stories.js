import { withA11y } from "@storybook/addon-a11y";
import { withKnobs, text, boolean, object } from "@storybook/addon-knobs";
import { VueForm } from "Components/components/Form/src/Form.vue";
import { action } from "@storybook/addon-actions";
import markdown from "Components/components/Form/USAGE.md";
import { TextContent } from "Components/components/StyledHTML/Typography/src/Typography.vue";

export default {
  title: "Form", // Folder/ is unnecessary but you can group stories by a folder by doing so
  decorators: [withA11y, withKnobs],
  parameters: {
    notes: {
      markdown,
    },
  },
  excludeStories: /.*Data$/,
};

export const Form = () => ({
  components: { VueForm, TextContent },
  data() {
    return {
      internalFields: [],
    };
  },
  methods: {
    onFields: action("@fields"),
    onSubmit: action("@submit"),
  },
  props: {
    fields: {
      default: object("Fields", [
        {
          name: "first_name",
          label: "First Name",
          type: "text-content",
          placeholder: "First name",
          value: "",
          required: true,
        },
        {
          name: "last_name",
          label: "Last Name",
          type: "text-content",
          placeholder: "Last Name",
          value: "",
          required: true,
        },
        {
          name: "age",
          label: "Age",
          type: "number",
          placeholder: "Age",
          value: "",
          required: true,
        },
        {
          name: "gender",
          label: "Gender",
          type: "select",
          options: [
            {
              text: "Male",
              value: 1,
            },
            {
              text: "Female",
              value: 2,
            },
            {
              text: "Prefer not to state",
              value: 3,
            },
            {
              text: "Non-binary/Other",
              value: 4,
            },
          ],
          value: [],
          required: true,
        },
        {
          name: "email",
          label: "Preferred Email",
          type: "text-content",
          placeholder: "Email",
          value: "",
          required: true,
        },
      ]),
    },
    submitting: {
      default: boolean("Submitting", false),
    },
    disableSubmission: {
      default: boolean("Disable Submission", false),
    },
    showBottom: {
      default: boolean("Show Bottom", true),
    },
    disableClearing: {
      default: boolean("Disable Clearing", false),
    },
    errors: {
      default: object("Errors", {
        first_name: [],
        last_name: [],
        age: [],
        gender: [],
        email: [],
      }),
    },
  },
  computed: {
    formattedFields() {
      if (this.internalFields.length == 0) {
        this.internalFields = this.fields.slice();
      } else {
        for (let field of this.fields) {
          if (field.value != "") {
            this.internalFields[
              this.internalFields.map((x) => x.name).indexOf(field.name)
            ].value = field.value;
          }
        }
      }
      return this.internalFields;
    },
  },
  template: `
        <div>
        <vue-form
          :fields="formattedFields"
          :submitting="submitting"
          :errors="profileErrors"
          :disable-submission="disableSubmission"
          :show-bottom="showBottom"
          :disable-clearing="disableClearing"
          @fields="onFields($event); internalFields = $event"
          @submit="onSubmit"
        >
          <text-content>Custom Content Here!</text-content>
        </vue-form>
        <hr>
        <text-content>
        Fields Object:
        </text-content>
        <text-content>
          <pre>
          <code>
{{formattedFields}}
          </code>
          </pre>
        </text-content>
        </div>
    `,
});
