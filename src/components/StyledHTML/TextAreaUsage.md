# TextArea

This provides a styleguide consistent and accessible textarea element that can be configured for most uses via a variety of props, listed below.

On mount, this component adds itself to the parent Vue component under `.$refs.inputs[namePropValue]`. 

## Usage

```html
<vue-text-area
    :readonly="readonly"
    :placeholder="placeholder"
    :name="name"
    :rows="rows"
    :cols="cols"
    :maxlength="maxlength"
    :required="required"
    :disabled="disabled"
    :label-flavor="labelFlavor"
    :label-dark="labelDark"
    :label="label"
    @input="onInput"
    :autofocus="autofocus"
></vue-text-area>
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
            <td>readonly</td>
            <td>`Boolean`</td>
            <td>`false`</td>
            <td>Sets the radonl HTML attribute on the textarea</td>
            <td>&nbsp;</td>
        </tr>
        <tr>
            <td>placeholder</td>
            <td>`Text`</td>
            <td>`""`</td>
            <td>Sets the placeholder HTML attribute on the textarea</td>
            <td>&nbsp;</td>
        </tr>
        <tr>
            <td>name</td>
            <td>`Text`</td>
            <td>No Default</td>
            <td>Sets the name and ID for the textarea. This is necessary for accessability</td>
            <td><b>Required</b></td>
        </tr>
        <tr>
            <td>rows</td>
            <td>`Number`</td>
            <td>No Default</td>
            <td>Sets the rows for the textarea</td>
            <td></td>
        </tr>
        <tr>
            <td>cols</td>
            <td>`Number`</td>
            <td>No Default</td>
            <td>Sets the cols for the textarea</td>
            <td></td>
        </tr>
        <tr>
            <td>maxlength</td>
            <td>`Number`</td>
            <td>No Default</td>
            <td>Sets the rows for the textarea</td>
            <td></td>
        </tr>
        <tr>
            <td>required</td>
            <td>`Boolean`</td>
            <td>`false`</td>
            <td>Sets the required HTML attribute for the textarea</td>
            <td>&nbsp;</td>
        </tr>
        <tr>
            <td>disabled</td>
            <td>`Boolean`</td>
            <td>`false`</td>
            <td>Disables the textarea element</td>
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