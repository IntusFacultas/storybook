# SelectMe

## Type of Component

Vue Component - https://v1.vuejs.org/guide/components.html

## Installation

```bash
npm install @IntusFacultas/select-me@latest --save
```

## Purpose

This allows the user to select options or multiple options, replicating the original Select2 behavior, without the need for jQuery. This widget also has certain benefits over Vue-Multiselect, mainly that removing selected options is far easier on account of the badge system used.

## Usage

When you are instantiating your component instance, make sure to bind a variable containing the options

```html
<select-me
  :options="optionsForSelect"
  v-model="selectedOptions"
  :multi-select="multiSelect"
></select-me>
```

```javascript
import SelectMe from "@IntusFacultas/select-me";
data: {
    selectedOptions: [],
    multiSelect: true,
    optionsForSelect: [
        {
            text: "Label",
            value: "value"
        },
        {
            text: "Label2",
            value: "value2"
        },
        {
            text: "Label3",
            value: "value3"
        },
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
            <td>name</td>
            <td>`String`</td>
            <td>None. <b>Required</b></td>
            <td>What the id on the input field should be for accessability purposes</td>
        </tr>
        <tr>
            <td>loadAjax</td>
            <td>`Boolean`</td>
            <td>`false`</td>
            <td>Whether to load options form an endpoint or not. When set to true, uses an endpoint to retrieve options that match filter</td>
        </tr>
        <tr>
            <td>endpoint</td>
            <td>`String`</td>
            <td>`""`</td>
            <td>
                What endpoint it should reach out to in order to retrieve options when `loadAjax` is set to true.<br><br>
                By default, it will fire when the user inputs into the search field (debounced by 200ms), and it will perform a `GET` request with a query parameter `text`
                set to the value the user inputted.<br><br>
                It expects a response with a 20X status code, and an array of objects in the format:<br>
                <pre>
                <code>
                [
                    {
                        text: String,
                        value: whatever
                    }...
                ]
                </code><br><br>
                </pre>
                If you want to override the attributes of the objects in the array, use the `displayAttribute` and `valueAttribute` props, and match your returned objects accordingly.
            </td>
        </tr>
        <tr>
            <td>canBeEmpty</td>
            <td>`Boolean`</td>
            <td>`true`</td>
            <td>Sets whether the select can have no value selected. If set to false, the select will default to first value if none is provided</td>
        </tr>
        <tr>
            <td>displayAttribute</td>
            <td>`String`</td>
            <td>`"text"`</td>
            <td>What attribute in a JS object should be referenced for displaying the option text and badge text for an option</td>
        </tr>
        <tr>
            <td>valueAttribute</td>
            <td>`String`</td>
            <td>`"value"`</td>
            <td>What attribute in a JS object should be referenced for determining the value</td>
        </tr>
        <tr>
            <td>disabled</td>
            <td>`Boolean`</td>
            <td>`false`</td>
            <td>disables the widget, disallowing selection</td>
        </tr>
        <tr>
            <td>options</td>
            <td>`Array`</td>
            <td>`[]`</td>
            <td>This is the options for the dropdown</td>
        </tr>
        <tr>
            <td>debug</td>
            <td>`Boolean`</td>
            <td>`false`</td>
            <td>When this is set to True, the dropdown does not close, allowing you to inspect the element</td>
        </tr>
        <tr>
            <td>multiSelect</td>
            <td>`Boolean`</td>
            <td>`false`</td>
            <td>When this is set to True, the dropdown will allow a user to select multiple options</td>
        </tr>
        <tr>
            <td>flavor</td>
            <td>`String`</td>
            <td>`LightBlue`</td>
            <td>Controls what flavor should be applied to the searchbox</td>
        </tr>
        <tr>
            <td>badgeFlavor</td>
            <td>`String`</td>
            <td>`Primary`</td>
            <td>Controls what flavor should be applied to the badges</td>
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
            <td>Fired on selectio</td>
        </tr>
    </tbody>
</table>
