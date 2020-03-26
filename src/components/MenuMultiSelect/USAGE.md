# Menu Multiselect

## Type of Component

Vue Component - https://v1.vuejs.org/guide/components.html

## Installation

```bash
npm install @nasic/menu-multiselect@latest --save
```

## Purpose

This provides a parallel menu multi select. Similar to the Django Permissions widget.

## Usage

```html
<menu-multi-select
  @change="onChange"
  :height="height"
  :items="items"
  :flavor="flavor"
  v-model="selected"
></menu-multi-select>
```

```javascript
data: {
    selected: [],
    flavor: "",
    height: "100px",
    items: [
        {
            display: "Item 1",
            value: "1"
        },
        {
            display: "Item 2",
            value: "2"
        },
        {
            display: "Item 3",
            value: "3"
        },
        {
            display: "Item 4",
            value: "4"
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
            <td>height</td>
            <td>`String`</td>
            <td>`"100px"`</td>
            <td>Controls the height of the menu. The menu will auto overflow additional items</td>
        </tr>
        <tr>
            <td>flavor</td>
            <td>`String`</td>
            <td>`""`</td>
            <td>Controls the flavor of the badges and buttons</td>
        </tr>
        <tr>
            <td>items</td>
            <td>`Array`</td>
            <td>`[]`</td>
            <td>This is the items that should be displayed. Expects objects of the following format<br>
            <pre>
                <code>
                    {
                        display: String,
                        value: Any-primitive-or-date-that-can-be-compared-with-equals-equals
                    }
                </code>
            </pre></td>
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
            <td>`change`</td>
            <td>`@change`</td>
            <td>Currently Selected Options</td>
            <td>Fired on selection</td>
        </tr>
    </tbody>
</table>
