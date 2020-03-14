# Table of Contents

## Type of Component

Vue Component - https://v1.vuejs.org/guide/components.html

## Installation

```bash
npm install @IntusFacultas/table-of-contents@latest --save
```

## Purpose

This generates a table of contents by performing a DFS on the `<body>` element and looking for `<h1>` through `<h6>` tags.

## Usage

```html
<table-of-contents :flavor="flavor"></table-of-contents>
```

## Configuration

<table>
    <thead>
        <tr>
            <th>Prop</th>
            <th>Type</th>
            <th>Default</th>
            <th>Purpose</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>offset</td>
            <td>`Number`</td>
            <td>`0`</td>
            <td>Sets a vertical offset from the title in case you need it to trigger before or after the actual element</td>
        </tr>
        <tr>
            <td>width</td>
            <td>`String`</td>
            <td>"auto"</td>
            <td>Sets the max width of the containing nav. Useful in case you have long titles that needed to be word wrapped</td>
        </tr>
        <tr>
            <td>flavor</td>
            <td>`String`</td>
            <td>`""`</td>
            <td>Sets the flavor of titles in the table of contents</td>
        </tr>
        <tr>
            <td>queryOverride</td>
            <td>`String`</td>
            <td>`""`</td>
            <td>By default the ToC looks for headers. But if for some reason you need non-h tag headers, you can override the query here.<br/>
            If you set this, you must set a data-rank attribute with a rank 1-6 which tells the table how to rank your non-h tag titles
            </td>
        </tr>
    </tbody>
</table>
