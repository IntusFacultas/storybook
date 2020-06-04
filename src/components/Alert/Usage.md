# Vue Static Alert

## Type of Component

Vue Component - https://v1.vuejs.org/guide/components.html

## Installation

```bash
npm install @IntusFacultas/vue-static-alert@latest --save
```

## Purpose

This provides a Bootstrap style alert

# Usage

```html
<vue-static-alert :flavor="flavor" :animated="animated" :closeable="closeable"
  ><span>Test</span></vue-static-alert
>
```

```javascript
import VueStaticAlert from "@IntusFacultas/vue-static-alert";
data: {
    flavor: "Primary",
    aniamted: true,
    closeable: true
}
```

## Configuration

- Various Vue Component Props have been exposed for customizing the behavior of the component.
- The flavors are chosen from the AlertTheme in `@IntusFacultas/design-system`
- Special note: camelCase props need to be converted to kebab-case when being set.

<table>
    <thead>
        <tr>
            <th>Prop Name</th>
            <th>Type</th>
            <th>Default</th>
            <th>Purpose</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>animated</td>
            <td>`Boolean`</td>
            <td>`false`</td>
            <td>When set to true, the alert will fade in on creation, and (if closed on click) fade out. Otherwise the alert will simply snap in and out of existence.</td>
        </tr>
        <tr>
            <td>closeable</td>
            <td>`Boolean`</td>
            <td>`false`</td>
            <td>When set to true, the user can click the alert to close it, and the alert will display an x to inform the user that this is possible.</td>
        </tr>
        <tr>
            <td>flavor</td>
            <td>`String`</td>
            <td>`""`</td>
            <td>Sets the flavor of the alert</td>
        </tr>
    </tbody>
</table>
