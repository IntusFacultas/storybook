# Parametric Filter

## Type of Component

Vue Component - https://v1.vuejs.org/guide/components.html

## Installation

```bash
npm install @IntusFacultas/parametric-filter@latest --save
```

## Purpose

This provides a parametric filter component with quickselect capabilities for storefront applications.

## Usage

```html
<parametric-filter
  :flavor="flavor"
  :filter="filter"
  name="parametricFilter"
  :badge-flavor="badgeFlavor"
  :active-badge-flavor="activeBadgeFlavor"
  :quick-select-flavor="quickSelectFlavor"
  @input="onInput"
  v-model="selectedItems"
>
</parametric-filter>
```

```javascript
data: {
    filter: {
        display: "Parametric Filter",
        selected_values: [], // must match in format to items
        quickSelects: [
            {
                text: "United States - 1",
                value: "USA"
            },
            {
                text: "Russia - 2",
                value: "RUS"
            },
            {
                text: "China - 3",
                value: "CHN"
            },
        ],
        items: [
            {
                text: "United States - 1",
                value: "USA"
            },
            {
                text: "Russia - 2",
                value: "RUS"
            },
            {
                text: "China - 3",
                value: "CHN"
            },
            {
                text: "Canada - 0",
                value: "CAN"
            },
            {
                text: "Mexico - 2",
                value: "MEX"
            },
            {
                text: "Japan- 4",
                value: "JPN"
            },
            {
                text: "North Korea - 0",
                value: "NKA"
            },
            {
                text: "South Korea - 0",
                value: "SKA"
            },
        ]
    },
    flavor: "Primary",
    badgeFlavor: "Secondary",
    activeBadgeFlavor: "Light",
    quickSelectFlavor: "Secondary"
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
            <td>name</td>
            <td>`String`</td>
            <td>None. <b>Required</b></td>
            <td>Sets the ID of the input for accessability purposes</td>
        </tr>
        <tr>
            <td>filter</td>
            <td>`Object`</td>
            <td>None. <b>Required</b></td>
            <td>Must match a specific format (all items must share same format):
                <pre>
                    <code>
                    {
                        display: String,  // Displayed as the label on the dropdown
                        initialItems: [], // items that should be selected by default (format below)
                        quickSelects: [],  // items that should be provided as quick select buttons (format below)
                        items: [] // selectme items
                    }
                    </code>
                </pre>
                <hr>
                Format:
                <pre>
                    <code>
                        {
                            text: String,
                            value: String
                        }
                    </code>
                </pre>
You can replace the keys text and value with other values, but you must then set the displayAttribute and valueAttribute props.
            </td>
        </tr>
        <tr>
            <td>valueAttribute</td>
            <td>`String`</td>
            <td>`"value"`</td>
            <td>Passed to selectme. Refer to selectme documentation</td>
        </tr>
        <tr>
            <td>debug</td>
            <td>`Boolean`</td>
            <td>`false`</td>
            <td>Passed to selectme. Refer to selectme documentation</td>
        </tr>
        <tr>
            <td>defaultOpen</td>
            <td>`Boolean`</td>
            <td>`false`</td>
            <td>Whether the filter defaults to being open</td>
        </tr>
        <tr>
            <td>displayAttribute</td>
            <td>`String`</td>
            <td>`"text"`</td>
            <td>Passed to selectme. Refer to selectme documentation</td>
        </tr>
        <tr>
            <td>flavor</td>
            <td>`String`</td>
            <td>`Dark`</td>
            <td>Controls what flavor should be applied to the button dropdown toggler</td>
        </tr>
        <tr>
            <td>badgeFlavor</td>
            <td>`String`</td>
            <td>`Dark`</td>
            <td>Controls what flavor should be applied to the selectme badge</td>
        </tr>
        <tr>
            <td>activeBadgeFlavor</td>
            <td>`String`</td>
            <td>`Dark`</td>
            <td>Controls what flavor should be applied to the "Active" badge when values are selected</td>
        </tr>
        <tr>
            <td>quickSelectFlavor</td>
            <td>`String`</td>
            <td>`Dark`</td>
            <td>Controls what flavor should be applied to the quick select buttons</td>
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
            <td>`input`</td>
            <td>`@input`</td>
            <td>Currently Selected Options</td>
            <td>Fired on selection</td>
        </tr>
    </tbody>
</table>
