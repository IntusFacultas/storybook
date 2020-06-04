# Tabs

## Type of Component

Vue Component - https://v1.vuejs.org/guide/components.html

## Installation

```bash
npm install @IntusFacultas/tabs@latest --save
```

## Purpose

This provides a configurable tabs component with theming

## Usage

```html
<tabs :flavor="flavor" :tabs="tabs" @select="onSelect"></tabs>
```

```javascript
import Tabs from "@IntusFacultas/tabs";
data: {
    flavor: "",
    tabs: [
        {
            text: "Link 1",
            value: "link1",
            type: "tab",
            html: "",
            active: true,
            disabled: false,
        },
        {
            text: "Link 2 (Im an href)",
            value: "link1",  // the href
            type: "link",
            html: ``,
            active: false,
            disabled: false,
        },
        {
            text: "Link 3",
            value: "link3",
            type: "tab",
            html: "",
            active: false,
            disabled: true,
        },
        {
            text: "Link 4",
            value: "link4",
            type: "tab",
            html: "",
            active: false,
            disabled: false,
        },
        {
            text: "Link 5",
            value: "link5",
            type: "tab",
            html: "",
            active: false,
            disabled: false,
        }
    ]
}
```

## Configuration

Various Vue Component Props have been exposed for customizing the behavior of the component.

Special note: camelCase props need to be converted to kebab-case when being set.

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
            <td>tabs</td>
            <td>`Array`</td>
            <td>[]</td>
            <td>The tabs to be displayed. Reference the usage exmaple above for the format</td>
        </tr>
        <tr>
            <td>flavor</td>
            <td>`String`</td>
            <td>`Dark`</td>
            <td>Controls what flavor should be applied to the tab</td>
        </tr>
    </tbody>
</table>

## Events

<table>
    <thead>
        <tr>
            <th>Event</th>
            <th>Bind Attribute</th>
            <th>Payload</th>
            <th>Description</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>`select`</td>
            <td>`@select`</td>
            <td>Selected Tab</td>
            <td>Fired on selection of tab</td>
        </tr>
    </tbody>
</table>
