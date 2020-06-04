# Button

## Type of Component

Vue Styled Component - https://github.com/styled-components/vue-styled-components

## Installation

```bash
npm install @IntusFacultas/button@latest --save
```

## Purpose

This replaces the default HTML button with a styled button that contains styles for each color as described in the Design System:

Draws default themes from DesignSystem/theme.js. You can override the theme by providing a theme using the **vue-styled-components** ThemeProvider component.

## Usage

```html
<n-button
  flavor="Primary"
  :small="small"
  :large="large"
  :block="block"
></n-button>

<button-group>
  <n-button
    flavor="Primary"
    :small="small"
    :large="large"
    :block="block"
  ></n-button>
  <n-button
    flavor="Primary"
    :small="small"
    :large="large"
    :block="block"
  ></n-button>
  <n-button
    flavor="Primary"
    :small="small"
    :large="large"
    :block="block"
  ></n-button>
</button-group>
```

```javascript
import {NButton} from "@IntusFacultas/button";
import {NButton, ButtonGroup} from "@IntusFacultas/button";
data: {
    large: false,
    small: false,
    block: false,
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
        <tr><td>small</td><td>`boolean`</td><td>`false`</td><td>Sets the button to be a small button</td></tr>
        <tr><td>large</td><td>`boolean`</td><td>`false`</td><td>Sets the button to be a big button</td></tr>
        <tr><td>flavor</td><td>`String`</td><td>None</td><td>Sets the button flavor.</td></tr>
        <tr><td>loading</td><td>`boolean`</td><td>`false`</td><td>When true, shows a loading animation in the button</td></tr>
        <tr><td>block</td><td>`boolean`</td><td>`false`</td><td>Sets the button to be a block button</td></tr>
        <tr><td>outline</td><td>`boolean`</td><td>`false`</td><td>Sets the button to be an outline button</td></tr>
    </tbody>
</table>
