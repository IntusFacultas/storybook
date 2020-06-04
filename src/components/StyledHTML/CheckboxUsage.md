# Radio

## Type of Component

Vue Component - https://vuejs.org/v2/guide/components.html

## Installation

```bash
npm install @IntusFacultas/checkbox@latest --save
```

## Purpose

This replaces the default HTML checkbox with a styled checkbox that contains styles for each color as described in the Design System:

Draws default themes from DesignSystem/theme.js. You can override the theme by providing a theme using the **vue-styled-components** ThemeProvider component.

## Usage

```html
<checkbox
  v-model="selected"
  :label-flavor="labelFlavor"
  :disabled="disabled"
  label="Radio 1"
  :flavor="flavor"
  :size="size"
  :bold="bold"
  :dark="dark"
>
</checkbox>
```

```javascript
import Checkbox from "@IntusFacultas/checkbox";
data: {
    selected: "",
    flavor: "",
    labelFlavor: "",
    disabled: false,
    size: 15,
    bold: false,
    dark: false
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
        </tr>
    </thead>
    <tbody>
    <tr>
        <td>label</td>
        <td>String</td>
        <td>None. <b>required</b></td>
        <td>Sets the label text</td>
    </tr>
    <tr>
        <td>value</td>
        <td><b>SPECIAL CASE</b></td>
        <td><b>SPECIAL CASE</b></td>
        <td>So that you can use v-model with this component. don't bother manually setting it yourself</td>
    </tr>
    <tr>
        <td>flavor</td>
        <td>String</td>
        <td>`""`</td>
        <td>The flavor for the checkbox</td>
    </tr>
    <tr>
        <td>labelFlavor</td>
        <td>String</td>
        <td>`""`</td>
        <td>The flavor for the label</td>
    </tr>
    <tr>
        <td>size</td>
        <td>Number</td>
        <td>`14`</td>
        <td>The size of the label and radio</td>
    </tr>
    <tr>
        <td>dark</td>
        <td>Boolean</td>
        <td>`false`</td>
        <td>Whether to have the label in dark mode</td>
    </tr>
    <tr>
        <td>bold</td>
        <td>Boolean</td>
        <td>`false`</td>
        <td>Whether to have the label be bold</td>
    </tr>
    </tbody>
</table>

## Events

You can use this component as you normally would with v-model
