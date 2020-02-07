# SelectMe

## Type of Component
Vue Component - https://v1.vuejs.org/guide/components.html

## Installation

```bash
npm install @intus/select-me --save
```

## Purpose
This allows the user to select options or multiple options, replicating the original Select2 behavior, without the need for jQuery. This widget also has certain benefits over Vue-Multiselect, mainly that removing selected options is far easier on account of the badge system used.


## Usage

When you are instantiating your component instance, make sure to bind a variable containing the options

```html
<select-me :options="optionsForSelect" v-model="selectedOptions" :multi-select="true"></select-me>
```

```javascript
var optionsForSelect = [
    {
        text: "Label",
        value: "value"
    },
    ...
]
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
            <td>Purpose</td>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>displayAttribute</td>
            <td>String</td>
            <td>`"text"`</td>
            <td>What attribute in a JS object should be referenced for displaying the option text and badge text for an option</td>
        </tr>
        <tr>
            <td>valueAttribute</td>
            <td>String</td>
            <td>`"value"`</td>
            <td>What attribute in a JS object should be referenced for determining the value</td>
        </tr>
        <tr>
            <td>disabled</td>
            <td>Boolean</td>
            <td>`false`</td>
            <td>disables the widget, disallowing selection</td>
        </tr>
        <tr>
            <td>options</td>
            <td>Array</td>
            <td>`[]`</td>
            <td>This is the options for the dropdown</td>
        </tr>
        <tr>
            <td>debug</td>
            <td>Boolean</td>
            <td>`false`</td>
            <td>When this is set to True, the dropdown does not close, allowing you to inspect the element</td>
        </tr>
        <tr>
            <td>initialValues</td>
            <td>Array</td>
            <td>`[]`</td>
            <td>When this is set to an array of objects with key "value" that match the values of options present in the required "options" prop, the selectme will initialize itself already having those options pre-selected.</td>
        </tr>
        <tr>
            <td>multiSelect</td>
            <td>Boolean</td>
            <td>`false`</td>
            <td>When this is set to True, the dropdown will allow a user to select multiple options</td>
        </tr>
        <tr>
            <td>inputClass</td>
            <td>Array</td>
            <td>`["form-control"]`</td>
            <td>Controls what classes should be applied to the searchbox</td>
        </tr>
        <tr>
            <td>badgeClass</td>
            <td>Array</td>
            <td>`["badge", "badge-secondary"]`</td>
            <td>Controls what classes should be applied to the badges for selected values. `"selectme-badge"` is always applied.</td>
        </tr>
    </tbody>
</table>


## Events

<table>
    <thead>
        <tr>
            <th>Event</th>
            <td>Bind Attribute</td>
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
        <tr>
            <td>`focus`</td>
            <td>`@focus`</td>
            <td>N/A</td>
            <td>Fired on focus of input</td>
        </tr>
    </tbody>
</table>