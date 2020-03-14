# Raw Table

## Type of Component

Vue Component - https://v1.vuejs.org/guide/components.html

## Installation

```bash
npm install @IntusFacultas/raw-table@latest --save
```

## Purpose

This is a variation of the `@IntusFacultas/table` component, which allows you to construct your own custom table based on the same components as `@IntusFacultas/table`.

Draws default themes from DesignSystem/nasic-theme.js. You can override the theme by providing a theme using the **vue-styled-components** ThemeProvider component.

## Usage

```html
<vue-raw-table :flavor="flavor" :striped="striped">
  <template v-slot:header> </template>
  <template v-slot:body> </template>
</vue-raw-table>
```

```javascript
data: {
    flavor: "Primary",
    striped: true
}
```

## Configuration

<table>
    <thead>
        <tr>
            <th>Prop</th>
            <th>`Type`</th>
            <th>Default</th>
            <th>Purpose</th>
        </tr>
    </thead>
    <tbody>
        <tr><td>flavor</td><td>`String`</td><td>`""`</td><td>Sets the flavor for the table body</td></tr>
        <tr><td>striped</td><td>`Boolean`</td><td>`false`</td><td>Stripes the `tbody` rows</td></tr>
    </tbody>
</table>

## Components Available for Use

### TableRow

#### Purpose

Provides a styled table row

#### Usage

```html
<table-row></table-row>
```

#### Configuration

If you wish to make a row hoverable, bind `table-hoverable-row` class to it.

### TableCell

#### Purpose

Provides a styled table cell

#### Usage

```html
<table-cell :flavor="flavor" :condensed="condensed" :bordered="bordered">
  {{item.text}}
</table-cell>
```

#### Configuration

<table>
    <thead>
        <tr>
            <th>Prop</th>
            <th>`Type`</th>
            <th>Default</th>
            <th>Purpose</th>
        </tr>
    </thead>
    <tbody>
        <tr><td>flavor</td><td>`String`</td><td>`""`</td><td>Used for setting the flavor of borders</td></tr>
        <tr><td>condensed</td><td>`Boolean`</td><td>`false`</td><td>Used for reducing the padding of the cell for condensed tables</td></tr>
        <tr><td>bordered</td><td>`Boolean`</td><td>`false`</td><td>Used for setting full bordering rather than just border-top for cell</td></tr>
        <tr><td>textAlign</td><td>`String`</td><td>`"left"`</td><td>Used for setting the text align property of the cell</td></tr>
    </tbody>
</table>

### TableHeader

#### Purpose

Provides a styled table header cell

#### Usage

```html
<table-header
  :flavor="flavor"
  :condensed="condensed"
  :sortable="sortable"
  :bordered="bordered"
  :text-align="textAlign"
>
  {{header.text}}
</table-header>
```

#### Configuration

<table>
    <thead>
        <tr>
            <th>Prop</th>
            <th>`Type`</th>
            <th>Default</th>
            <th>Purpose</th>
        </tr>
    </thead>
    <tbody>
        <tr><td>flavor</td><td>`String`</td><td>`""`</td><td>Used for setting the flavor of borders and background (header flavor)</td></tr>
        <tr><td>condensed</td><td>`Boolean`</td><td>`false`</td><td>Used for reducing the padding of the cell for condensed tables</td></tr>
        <tr><td>sortable</td><td>`Boolean`</td><td>`false`</td><td>Sets the cursor to pointer to indicate the header is sortable/interactable</td></tr>
        <tr><td>bordered</td><td>`Boolean`</td><td>`false`</td><td>Used for setting full bordering rather than just border-top for cell</td></tr>
        <tr><td>textAlign</td><td>`String`</td><td>`"left"`</td><td>Used for setting the text align property of the cell</td></tr>
    </tbody>
</table>

### TableCarat

#### Purpose

Provides an animated sorting direction indicator

#### Usage

```html
<table-carat
  :flavor="headerFlavor ? headerFlavor : flavor"
  :class="sortingActive ? '': sortDescending ? 'table-open-carat' : 'table-not-shown'"
></table-carat>
```

#### Configuration

By default, the sort indicator points up (ascending). So `table-open-carat` will cause it to point downwards, and `table-not-shown` will cause it to stop displaying. This can be leveraged for displaying the sort indicator as appropriate using logic similar to the one above.

<table>
    <thead>
        <tr>
            <th>Prop</th>
            <th>`Type`</th>
            <th>Default</th>
            <th>Purpose</th>
        </tr>
    </thead>
    <tbody>
        <tr><td>flavor</td><td>`String`</td><td>`""`</td><td>Used for setting the color of the carat</td></tr>
    </tbody>
</table>
