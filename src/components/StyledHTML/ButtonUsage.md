# Button

## Type of Component

Vue Styled Component - https://github.com/styled-components/vue-styled-components

## Installation

```bash
npm install @nasic/button --save
```

## Purpose

This replaces the default HTML button with a styled button that contains styles for each color as described in the Design System:

And draws default themes from DesignSystem/nasic-theme.js. You can override the theme by providing a theme using the **vue-styled-components** ThemeProvider component.


## Usage
```html
<n-button :flavor="Primary"></n-button>>
```


## Configuration

The colors are pulled from `@nasic/design-system` in the `Theme` Object.

<table>
    <thead>
        <tr>
            <th>Prop</th>
            <th>Default</th>
            <th>Purpose</th>
        </tr>
    </thead>
    <tbody>
        <tr><td>small</td><td>`false`</td><td>Sets the button to be a small button</td></tr>
        <tr><td>large</td><td>`false`</td><td>Sets the button to be a big button</td></tr>
        <tr><td>block</td><td>`false`</td><td>Sets the button to be a block button</td></tr>
    </tbody>
</table>

