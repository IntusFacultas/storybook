# Styled Titles

## Type of Component

Vue Styled Component - https://github.com/styled-components/vue-styled-components

## Installation

```bash
npm install @IntusFacultas/typography@latest --save
```

## Purpose

These components replace the default HTML5 title tags with nicer tags

## Usage

These components functions similarly to a normal HTML5 title tag. You can place content inside of them as you normally would.

## Available Components

```html
<page-title :bold="bold" :flavor="flavor">Lorem ipsum</page-title>
<section-title :bold="bold" :flavor="flavor">Lorem ipsum</section-title>
<sub-section-title :bold="bold" :flavor="flavor">Lorem ipsum</sub-section-title>
<category-title :bold="bold" :flavor="flavor">Lorem ipsum</category-title>
<sub-category-title :bold="bold" :flavor="flavor"
  >Lorem ipsum</sub-category-title
>
<keyword :bold="bold" :flavor="flavor">Lorem ipsum</keyword>
```

```javascript
data: {
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
