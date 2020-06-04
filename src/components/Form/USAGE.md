# Form

## Type of Component

Vue Styled Component - https://github.com/styled-components/vue-styled-components

## Installation

```bash
npm install @IntusFacultas/form@latest --save
```

## Purpose

This provides a data driven dynamic form constructor with built in validation that allows developers to quickly and easily display forms similar to the Django form rendering, based on a JSON representation of Django forms which is easily configured on the backend.

## Usage

```html
<vue-form
  :fields="fields"
  :errors="errors"
  :submitting="submitting"
  @fields="fields = $event"
  @submit="submit"
>
  Custom Content on Bottom Left of Form
</vue-form>
```

```javascript
import VueForm from "@IntusFacultas/form";
data: {
     fields: [
        {
          name: "username",
          label: "Username",
          type: "text",
          placeholder: "Username",
          value: "",
          required: true
        },
        {
          name: "password",
          label: "Password",
          type: "password",
          placeholder: "Password",
          value: "",
          required: true
        }
      ],
      submitting: false,
      errors: {
        username: [],
        password: []
      }
},
methods: {
    submit() {
      let self = this;
      this.submitting = true;
      this.$store
        .dispatch("action", data)
        .then(() => {
          // stuff
        })
        .catch(data => {
            if (Array.isArray(data.response.data.username))
            self.errors.username = data.response.data.username;
            else self.errors.username = [];
            if (Array.isArray(data.response.data.password))
            self.errors.password = data.response.data.password;
            else self.errors.password = [];
        })
        .then(() => {
            self.submitting = false;
        });
    }
}
```

## Special Configuration

Various Vue Component Props have been exposed for customizing the behavior of the component.

Special note: camelCase props need to be converted to kebab-case when being set.

<table>
    <thead>
        <tr>
            <th>Prop</th>
            <th>Type</th>
            <th>Default</th>
            <th>Purpose</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>showBottom</td>
            <td>`Boolean`</td>
            <td>`true`</td>
            <td>
                When true, the bottom of the form which includes the submit and clear buttons, as well as the custom content is shown. This is in case you want to have multiple forms on one page, but only want one form to display the submit forms (useful for formatting the page correctly)
            </td>
        </tr>
        <tr>
            <td>submitting</td>
            <td>`Boolean`</td>
            <td>`false`</td>
            <td>
                When set to true, the form disabled submission or clearing and shows a "submitting" animation to stop the user from spamming the submit button.
            </td>
        </tr>
        <tr>
            <td>disableSubmission</td>
            <td>`Boolean`</td>
            <td>`false`</td>
            <td>
                When set to true, disables form submission. The form already has baked in submission disabling when errors exist, but this allows you to manually disable it even without errors existing.
            </td>
        </tr>
        <tr>
            <td>disableClearing</td>
            <td>`Boolean`</td>
            <td>`false`</td>
            <td>
                When set to true, the button for clearing the form will not be displayed
            </td>
        </tr>
        <tr>
            <td>allowSubmissionOnEnter</td>
            <td>`Boolean`</td>
            <td>`true`</td>
            <td>When set to true, hitting enter on the last input will submit the form</td>
        </tr>
        <tr>
            <td>fields</td>
            <td>`Array`</td>
            <td>`[]`</td>
            <td>
                The fields the form should display. Each field object should conform to the following format:
                <pre>
                    <code>
                        {
                            name: String, // sets the name attribute on the field
                            label: String, // sets the label
                            type: "password" or "text" or "number" or "select", // sets what kind of field to use
                            placeholder: String, // sets the placeholder for the field
                            value: String or Number, // sets the value of the field (2 way bound)
                            validation(value, fields) {
                                // value is the value of the field (passed on input)
                                // fields is all the other fields in the form, which you can use to compare values
                                // fields is an array of field objects, where the value attribute is the 2 way bound
                                // value of the field
                                //
                                // return nothing if valid
                                // return string error if invalid to be displayed to user
                            },
                            // if type is select
                            options: [
                                {text: String, value: Whatever },...
                            ]
                            required: Boolean, // sets whether the field is required.
                        }
                    </code>
                </pre>
            </td>
        </tr>
        <tr>
            <td>errors</td>
            <td>`Object`</td>
            <td>`{}`</td>
            <td>
                The errors to display on each field. Useful for displaying field errors returned form the backend. Format should conform to:
                <pre>
                    <code>
                        {
                            fieldName: Array of Strings
                        }
                    </code>
                </pre>
            </td>
        </tr>
    </tbody>
</table>

## Events

<table>
    <thead>
        <tr>
            <th>Event</th>
            <th>Bind Attribute</th>
            <th>Payload</th>
            <th>Description</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>`fields`</td>
            <td>`@fields`</td>
            <td>All the field obejcts with up to date values</td>
            <td>Fired on field update</td>
        </tr>
        <tr>
            <td>`submit`</td>
            <td>`@submit`</td>
            <td>None. Its just a flag</td>
            <td>Fired on submit button click</td>
        </tr>
    </tbody>
</table>
