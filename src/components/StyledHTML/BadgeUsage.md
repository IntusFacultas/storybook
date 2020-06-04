# Badge

## Type of Component

Vue Styled Component - https://github.com/styled-components/vue-styled-components

## Installation

```bash
npm install @IntusFacultas/badge@latest --save
```

## Purpose

This provides a badge component that contains styles for each color as described in the Design System

Draws default themes from DesignSystem/theme.js. You can override the theme by providing a theme using the **vue-styled-components** ThemeProvider component.

## Usage

```html
<badge flavor="Primary"></badge>
```

```javascript
import Badge from "@IntusFacultas/badge";
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
        <tr><td>flavor</td><td>`String`</td><td>`""`</td><td>Sets the flavor for the badge</td></tr>
    </tbody>
</table>
