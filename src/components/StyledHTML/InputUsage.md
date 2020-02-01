# Input

## Type of Component

Vue Component - https://vuejs.org/v2/guide/components.html

## Installation

On mount, this component adds itself to the parent Vue component under `.$refs.inputs[namePropValue]`. 

```bash
    npm install @intus/input --save
```

## Purpose

This provides a styleguide consistent and accessible input element that can be configured for most uses via a variety of props, listed below.

## Usage

```html
<vue-input
    :readonly="readonly"
    :placeholder="placeholder"
    :pattern="pattern"
    :multiple="multiple"
    :min="min"
    :max="max"
    :name="name"
    :input-type="inputType"
    :required="required"
    :disabled="disabled"
    :label-flavor="labelFlavor"
    :label-dark="labelDark"
    :label="label"
    @input="onInput"
    :autofocus="autofocus"
    :autocomplete="autocomplete">
</vue-input>
```

## Configuration

<table>
    <thead>
        <tr>
            <th>Prop</th>
            <th>Type</th>
            <th>Default</th>
            <th>Purpose</th>
            <th>Required?</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>autocomplete</td>
            <td>`Boolean`</td>
            <td>`off`</td>
            <td>Sets the autocomplete HTML attribute on the input</td>
            <td>&nbsp;</td>
        </tr>
        <tr>
            <td>initialValue</td>
            <td>`Text`</td>
            <td>`""`</td>
            <td>Sets the initial value on load</td>
            <td>&nbsp;</td>
        </tr>
        <tr>
            <td>readonly</td>
            <td>`Boolean`</td>
            <td>`false`</td>
            <td>Sets the radonl HTML attribute on the input</td>
            <td>&nbsp;</td>
        </tr>
        <tr>
            <td>placeholder</td>
            <td>`Text`</td>
            <td>`""`</td>
            <td>Sets the placeholder HTML attribute on the input</td>
            <td>&nbsp;</td>
        </tr>
        <tr>
            <td>pattern</td>
            <td>`Text`</td>
            <td>`"*"`</td>
            <td>Sets the pattern HTML attribute on the input</td>
            <td>&nbsp;</td>
        </tr>
        <tr>
            <td>multiple</td>
            <td>`Boolean`</td>
            <td>`false`</td>
            <td>Sets the multiple HTML attribute on the input</td>
            <td>&nbsp;</td>
        </tr>
        <tr>
            <td>min</td>
            <td>`Number`</td>
            <td>`""`</td>
            <td>Sets the min value for the input</td>
            <td>&nbsp;</td>
        </tr>
        <tr>
            <td>max</td>
            <td>`Number`</td>
            <td>`""`</td>
            <td>Sets the max value for the input</td>
            <td>&nbsp;</td>
        </tr>
        <tr>
            <td>name</td>
            <td>`Text`</td>
            <td>No Default</td>
            <td>Sets the name and ID for the input. This is necessary for accessability</td>
            <td><b>Required</b></td>
        </tr>
        <tr>
            <td>inputType</td>
            <td>`Text`</td>
            <td>No Default</td>
            <td>Sets the input type</td>
            <td><b>Required</b></td>
        </tr>
        <tr>
            <td>required</td>
            <td>`Boolean`</td>
            <td>`false`</td>
            <td>Sets the required HTML attribute for the input</td>
            <td>&nbsp;</td>
        </tr>
        <tr>
            <td>disabled</td>
            <td>`Boolean`</td>
            <td>`false`</td>
            <td>Disables the input element</td>
            <td>&nbsp;</td>
        </tr>
        <tr>
            <td>labelFlavor</td>
            <td>`Text`</td>
            <td>`""`</td>
            <td>Sets the label flavor</td>
            <td>&nbsp;</td>
        </tr>
        <tr>
            <td>labelDark</td>
            <td>`Boolean`</td>
            <td>`false`</td>
            <td>Sets the label to dark mode</td>
            <td>&nbsp;</td>
        </tr>
        <tr>
            <td>label</td>
            <td>`Text`</td>
            <td>No Default</td>
            <td>This sets the label for the element. This is necessary for accessability</td>
            <td><b>Required</b></td>
        </tr>
        <tr>
            <td>autofocus</td>
            <td>`Boolean`</td>
            <td>`false`</td>
            <td>Sets the HTML autofocus attribute on the input</td>
            <td>&nbsp;</td>
        </tr>
    </tbody>
</table>