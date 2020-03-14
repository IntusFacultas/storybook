# Card

## Type of Component

Vue Styled Component - https://github.com/styled-components/vue-styled-components

## Installation

```bash
npm install @IntusFacultas/card@latest --save
```

## Purpose

This provides a card component that can be configured to a variety of different appearances as necessary, and accepts any valid HTML in slots to allow displaying content in the card

## Usage

```html
<card
  :header-flavor="headerFlavor"
  :footer-flavor="footerFlavor"
  :body-flavor="bodyFlavor"
  :bordered="bordered"
  :header="header"
  :footer="footer"
>
  <template v-slot:header>Header Content</template>
  <template v-slot:body>Body Content</template>
  <template v-slot:footer>Footer Content</template>
</card>
```

```javascript
data: {
    headerFlavor: "Primary",
    footerFlavor: "Primary",
    bodyFlavor: "",
    header: true,
    footer: true,
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
            <td>header</td>
            <td>`Boolean`</td>
            <td>`False`</td>
            <td>Displays the header</td>
        </tr>
        <tr>
            <td>footer</td>
            <td>`Boolean`</td>
            <td>`False`</td>
            <td>Displays the footer</td>
        </tr>
        <tr>
            <td>headerFlavor</td>
            <td>`Text`</td>
            <td>`""`</td>
            <td>Sets the flavor for the header</td>
        </tr>
        <tr>
            <td>bodyFlavor</td>
            <td>`Text`</td>
            <td>`""`</td>
            <td>Sets the flavor for the body</td>
        </tr>
        <tr>
            <td>footerFlavor</td>
            <td>`Text`</td>
            <td>`""`</td>
            <td>Sets the flavor for the footer</td>
        </tr>
        <tr>
            <td>bordered</td>
            <td>`Boolean`</td>
            <td>`False`</td>
            <td>Changes the styling to apply to borders and text rather than background and text</td>
        </tr>
    </tbody>
</table>
