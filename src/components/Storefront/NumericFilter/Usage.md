# Numeric Filter

## Type of Component

Vue Component - https://v1.vuejs.org/guide/components.html

## Installation

```bash
npm install @IntusFacultas/numeric-filter@latest --save
```

## Purpose

This provides a numeric filter component for storefront applications.

## Usage

```html
<numeric-filter
  :text-flavor="textFlavor"
  :help-text="helpText"
  :flavor="flavor"
  :filter="filter"
  :active-badge-flavor="activeBadgeFlavor"
  :name="name"
  :default-open="defaultOpen"
  v-model="value"
  @change="onChange"
  @input="onInput"
>
</numeric-filter>
```

```javascript
data: {
    filter: {
        display: "Range Numeric Filter",
        numeric_type: "range",
        max: 100,
        min: 0,
        step: 2,
        value: 0,
    }
    name: "numericFilter",
    flavor: "Primary",
    badgeFlavor: "Secondary",
    defaultOpen: false,
    activeBadgeFlavor: "Light",
    helpText: "This is a range with a specific step value",
    textFlavor: "Normal",
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
            <td>Must match one of two specific formats:
                <pre>
                    <code>
                    {
                        display: "Range Numeric Filter",
                        numeric_type: "range",
                        max: 100,
                        min: 0,
                        step: 2,
                        value: 0,
                    }
                    </code>
                </pre>
                <hr>
                <pre>
                    <code>
                    {
                        display: "Discrete Steps Numeric Filter",
                        numeric_type: "discrete",
                        max: 100,
                        min: 0,
                        steps: [0,2,5,10,16,20,25,60,80,100],
                        value: 0
                    }
                    </code>
                </pre>
            </td>
        </tr>
        <tr>
            <td>defaultOpen</td>
            <td>`Boolean`</td>
            <td>`false`</td>
            <td>Whether the filter defaults to being open</td>
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
        <tr><td>helpText</td><td>`String`</td><td>`""`</td><td>Sets the help text</td></tr>
        <tr><td>textFlavor</td><td>`String`</td><td>`""`</td><td>Sets the help text flavor</td></tr>
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
            <td>`{ lowerValue: value, upperValue: value }`</td>
            <td>Fired on input</td>
        </tr>
        <tr>
            <td>`change`</td>
            <td>`@change`</td>
            <td>`{ lowerValue: value, upperValue: value }`</td>
            <td>Fired on change</td>
        </tr>
    </tbody>
</table>
