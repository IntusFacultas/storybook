# Select

## Type of Component

Vue Styled Component - https://github.com/styled-components/vue-styled-components

## Installation

```bash
npm install @IntusFacultas/basic-select@latest --save
```

## Purpose

This replaces the default HTML select with a styled select that contains styles for each color as described in the Design System:

Draws default themes from DesignSystem/theme.js. You can override the theme by providing a theme using the **vue-styled-components** ThemeProvider component.

## Usage

```html
<vue-select
  :flavor="flavor"
  :name="name"
  v-model="internalValue"
  :multiple="multiple"
  :required="required"
  :options="options"
  :disabled="disabled"
  :label-flavor="labelFlavor"
  :label="label"
  @focus="onFocus"
  @change="onChange"
  :autofocus="autofocus"
></vue-select>
```

```javascript
import VueSelect from "@IntusFacultas/basic-select";
data: {
  flavor: "LightBlue",
  autofocus: false,
  name: "option",
  multiple: false,
  required: false,
  labelFlavor: "",
  label: "This is a sample input",
  disabled: false,
  options: [
        {
          text: "Option 1",
          value: "1",
        },
        {
          text: "Option 2",
          value: "2",
        },
        {
          text: "Option 3",
          value: "3",
        },
      ],
    },
}
```

## Configuration

The colors are pulled from `@IntusFacultas/design-system` in the `Theme` Object.

<table>
    <thead>
        <tr>
            <th>Prop</th>
            <th>Type</th>
            <th>Default</th>
            <th>Purpose</th>
            <th>Required</th>
        </tr>
    </thead>
    <tbody>
        <tr>
          <td>flavor</td>
          <td>`String`</td>
          <td>`"Primary"`</td>
          <td>Sets the flavor on the select</td>
          <td>&nbsp;</td>
        </tr>
        <tr>
          <td>options</td>
          <td>`Array`</td>
          <td>`[]`</td>
          <td>Sets the options on the select. The format of the objects should be<br>
          <pre>
          <code>
            {
              text: String,
              value: Anything
            }
          </code></pre></td>
          <td>&nbsp;</td>
        </tr>
        <tr>
          <td>canBeEmpty</td>
          <td>`Boolean`</td>
          <td>`true`</td>
          <td>Sets the whether no value can be a choice</td>
          <td>&nbsp;</td>
        </tr>
        <tr>
          <td>multiple</td>
          <td>`Boolean`</td>
          <td>`false`</td>
          <td>Sets the multiple HTML attribute on the select</td>
          <td>&nbsp;</td>
        </tr>
        <tr>
          <td>name</td>
          <td>`Text`</td>
          <td>No Default</td>
          <td>Sets the name and ID for the select. This is necessary for accessability</td>
          <td><b>Required</b></td>
        </tr>
        <tr>
          <td>required</td>
          <td>`Boolean`</td>
          <td>`false`</td>
          <td>Sets the required HTML attribute for the select</td>
          <td>&nbsp;</td>
        </tr>
        <tr>
          <td>disabled</td>
          <td>`Boolean`</td>
          <td>`false`</td>
          <td>Disables the select element</td>
          <td>&nbsp;</td>
        </tr>
        <tr>
          <td>labelFlavor</td>
          <td>`Text`</td>
          <td>`""`</td>
          <td>Sets the label flavor</td>
          <td>&nbsp;</td>
        </tr>
        <tr>
          <td>label</td>
          <td>`Text`</td>
          <td>No Default</td>
          <td>This sets the label for the element. This is necessary for accessability</td>
          <td><b>Required</b></td>
        </tr>
        <tr>
          <td>autofocus</td>
          <td>`Boolean`</td>
          <td>`false`</td>
          <td>Sets the HTML autofocus attribute on the select</td>
          <td>&nbsp;</td>
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
            <td>`focus`</td>
            <td>`@focus`</td>
            <td>None</td>
            <td>Fired on focus to the internal select field</td>
        </tr>
        <tr>
            <td>`change`</td>
            <td>`@change`</td>
            <td>Value of the select</td>
            <td>Fired on change to the internal select field value</td>
        </tr>
        <tr>
            <td>`input`</td>
            <td>`@input`</td>
            <td>Value of the select</td>
            <td>Fired on input to the internal select field value</td>
        </tr>
    </tbody>
</table>
