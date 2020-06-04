# Modal

## Type of Component

Vue Styled Component - https://github.com/styled-components/vue-styled-components

## Installation

```bash
npm install @IntusFacultas/modal@latest --save
```

## Purpose

This provides a modal component that can be configured to a variety of different appearances as necessary, and accepts any valid HTML in slots to allow displaying content in the modal

## Usage

```html
<modal
  :id="modalId"
  :header-flavor="headerFlavor"
  :footer-flavor="footerFlavor"
  :body-flavor="bodyFlavor"
  :width="width"
  :top-offset="topOffset"
  :background-dismiss="backgroundDismiss"
  :header="header"
  :footer="footer"
>
  <template v-slot:header>Header Content</template>
  <template v-slot:body>Body Content</template>
  <template v-slot:footer>Footer Content</template>
</modal>
```

```javascript
import Modal from "@IntusFacultas/modal";
data: {
    modalId: "myspecialmodal",
    headerFlavor: "Primary",
    footerFlavor: "Primary",
    bodyFlavor: "",
    width: "400px",
    topOffset: "200px",
    backgroundDismiss: false,
    header: true,
    footer: true
},
methods: {
    openModal() {
        let evt = new CustomEvent(`modal-${modalId}`, { detail: { "modal": true } });
        window.dispatchEvent(evt)
    }
    closeModal() {
        let evt = new CustomEvent(`modal-${modalId}`, { detail: { "modal": false } });
        window.dispatchEvent(evt)
    }

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
            <td>id</td>
            <td>`String`</td>
            <td><b>NONE. REQUIRED</b></td>
            <td>This is used for setting up the event listening that allows you to open and close the modal. Whatever you pass as the id, it will listen for an event "modal-{id here}" on the window. </td>
        </tr>
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
            <td>width</td>
            <td>`String`</td>
            <td>`500px`</td>
            <td>Changes the width of the modal</td>
        </tr>
        <tr>
            <td>topOffset</td>
            <td>`String`</td>
            <td>`20px`</td>
            <td>Changes how far from the top the modal is.</td>
        </tr>
        <tr>
            <td>bottomOffset</td>
            <td>`String`</td>
            <td>`20px`</td>
            <td>Changes how far from the bottom the modal is.</td>
        </tr>
        <tr>
            <td>backgroundDismiss</td>
            <td>`Boolean`</td>
            <td>`True`</td>
            <td>Determines whether clicking on the modal backdrop allows you to dismiss the modal</td>
        </tr>
    </tbody>
</table>
