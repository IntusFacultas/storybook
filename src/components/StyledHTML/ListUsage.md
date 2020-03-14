# Lists

## Type of Component

Vue Styled Component - https://github.com/styled-components/vue-styled-components

## Installation

```bash
npm install @IntusFacultas/list@latest --save
```

## Purpose

### List

This replaces the default `<ul>` tag with a styled `<ul>` that complies with NASIC Styleguide styling

### OrderedList

This replaces the default `<ol>` tag with a styled `<ol>` that complies with NASIC Styleguide styling

### ListItem

This replaces the default `<li>` tag with a styled `<li>` that complies with NASIC Styleguide styling

## Usage

```html
<list :flavor="flavor" :size="size" :dark="dark">
  <list-item :flavor="flavor" :size="size" :dark="dark"> Element 1</list-item>
</list>
```

```javascript
// size should be an Integer between 14 and 16 inclusive. Numbers out of that range
// get rounded down or up to the edge of that range
data: {
    size: 14,
    dark: false,
    flavor: "Spice",
}
```

## Configuration

- The colors for text are pulled from `@IntusFacultas/design-system` in the `TextTheme` Object.
- If a prop is applied to the `List` element, the prop will apply to all `ListItem` elements.

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
    </tbody>
</table>
