# NumberRange

## Type of Component

Vue Component - https://vuejs.org/v2/guide/components.html

## Installation

```bash
    npm install @IntusFacultas/number-range@latest --save
```

## Purpose

This provides a number range selector that can be given either a basic step increment or a discrete range of numbers

## Usage

```html
<number-range
  :max="max"
  :min="min"
  :steps="steps"
  :label="label"
  :name="name"
  v-model="value"
>
</number-range>
```

```javascript
data: {
    value: {
        lowerValue: 0,
        upperValue: 100,
    },
    max: 100,
    min: 0,
    steps: [0, 2, 15, 20, 60, 100], // if you provide just one value in the array, then that will be the step value rather than be treated as a list of discrete values
    label: "Number Range", // used for display purposes
    name: "NumberRangeInputField", // used for input id and names
},
```

## Configuration

Various Vue Component Props have been exposed for customizing the behavior of the component.

Special note: camelCase props need to be converted to kebab-case when being set.

Special Note 2: If you intend to use `v-model`, review the events section.

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
            <td>
                max
            </td>
            <td>
                `Number`
            </td>
            <td>
                <b>None. Required.</b>
            </td>
            <td>
                Sets the maximum value in the range.
            </td>
        </tr>
        <tr>
            <td>
                min
            </td>
            <td>
                `Number`
            </td>
            <td>
                <b>None. Required.</b>
            </td>
            <td>
                Sets the minimum value in the range.
            </td>
        </tr>
        <tr>
            <td>
                steps
            </td>
            <td>`Array`</td>
            <td>`[1]`</td>
            <td>
                Sets the step increment allowed for the range.<br><br>

                If you provide multiple values in the array, this will be treated as the allowed values in the range (to provide a discrete set of available values).

<br><br>
If you do choose to provide multiple discrete values, then the smallest value <strong>must</strong> be the minimum value, and the largest value <strong>must</strong> be the maximum value.

</td>
</tr>
<tr>
<td>
label
</td>
<td>`String`</td>
<td><b>None. Required</b></td>
<td>Controls what is visibly shown for the labels. The Labels will show the `{{label}} Lower` and `{{label}} Upper`</td>
</tr>
<tr>
<td>
labelFlavor
</td>
<td>`String`</td>
<td>`""`</td>
<td>Controls label flavor</td>
</tr>
<tr>
<td>name</td>
<td>`String`</td>
<td><b>None. Required</b></td>
<td>Used for setting the ids and names of the inputs.<br><br>The inputs will have id and names `name + 'LowerValue'` and `name + 'UpperValue'`</td>
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
            <td>`{lowValue: valueOfLowInput, highValue: valueOfHighInput}`</td>
            <td>Fired on change to the internal input fields' values</td>
        </tr>
    </tbody>
</table>
