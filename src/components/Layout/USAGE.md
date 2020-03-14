# Flex Grid

## Type of Component

Vue Styled Component - https://github.com/styled-components/vue-styled-components

## Installation

```bash
npm install @IntusFacultas/layout@latest --save
```

## Purpose

This provides a Flex grid that has responsive breakpoints, providing a greater degree of programmatic control than the Bootstrap col-row system.

## Usage

The minimum configuration needed is passing a number to the `col` prop of the FlexColumn. If a number is not passed, the column defaults to 1.

```html
<flex-row>
  <flex-column
    :col="col"
    :xs="xs"
    :sm="sm"
    :md="md"
    :lg="lg"
    :xl="xl"
  ></flex-column>
</flex-row>
```

```javascript
data: {
    col: 1,
    xs: 1,
    sm: 1,
    md: 1,
    lg: 1,
    xl: 1,
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
            <td>xs</td>
            <td>`Number`</td>
            <td>
                ```
                1
                ```
            </td>
            <td>The column size for an extra small viewport</td>
        </tr>
        <tr>
            <td>sm</td>
            <td>`Number`</td>
            <td>
                ```
                1
                ```
            </td>
            <td>The column size for a small viewport</td>
        </tr>
        <tr>
            <td>md</td>
            <td>`Number`</td>
            <td>
                ```
                1
                ```
            </td>
            <td>The column size for a medium viewport</td>
        </tr>
        <tr>
            <td>lg</td>
            <td>`Number`</td>
            <td>
                ```
                1
                ```
            </td>
            <td>The column size for a large viewport</td>
        </tr>
        <tr>
            <td>xl</td>
            <td>`Number`</td>
            <td>
                ```
                1
                ```
            </td>
            <td>The column size for a extra large viewport</td>
        </tr>
    </tbody>
</table>
