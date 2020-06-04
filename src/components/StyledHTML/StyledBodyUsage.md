# Styled Text

## Type of Component

Vue Styled Component - https://github.com/styled-components/vue-styled-components

## Installation

```bash
npm install @IntusFacultas/typography@latest --save
```

## Purpose

These components replace the default HTML5 text tags that have baked in IntusFacultas styleguide-compliant styling.

## Usage

These components functions similarly to a normal HTML5 text tags. You can place content inside of them as you normally would.

## Available Components

```html
<text-content :bold="bold" :flavor="flavor" :size="size" :dark="dark"
  >Lorem ipsum</text-content
>
<paragraph :bold="bold" :flavor="flavor" :size="size" :dark="dark">
  Lorem ipsum
</paragraph>
<small-text :bold="bold" :flavor="flavor" :size="size" :dark="dark"
  >Lorem ipsum</small-text
>
<portion-marking :bold="bold" :flavor="flavor" :dark="dark"
  >(TS/SCI)</portion-marking
>
<n-label :bold="bold" :flavor="flavor" :size="size" :dark="dark">Label</n-label>
```

```javascript
import TextContent from "@IntusFacultas/typography";
import {TextContent, Paragraph, SmallText, NLabel } from "@IntusFacultas/typography";

// size should be an Integer between 14 and 16 inclusive. Numbers out of that range
// get rounded down or up to the edge of that range
data: {
    size: 14,
    dark: false,
    flavor: "",
    bold: false,
}
```

## Configuration

- The flavors for text are pulled from `@IntusFacultas/design-system` in the `TextTheme` Object.

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
            <td>size</td>
            <td>`Number`</td>
            <td>`14`</td>
            <td>Sets the size of the text.</td>
        </tr>
        <tr>
            <td>dark</td>
            <td>`Boolean`</td>
            <td>`false`</td>
            <td>Sets the color of the text to dark mode.</td>
        </tr>
        <tr>
            <td>flavor</td>
            <td>`String`</td>
            <td>`""`</td>
            <td>Sets the color of the text to provided flavor (overrides dark mode).</td>
        </tr>
        <tr>
            <td>bold</td>
            <td>`Boolean`</td>
            <td>`false`</td>
            <td>Sets the `font-weight` to `bold`</td>
        </tr>
    </tbody>
</table>
