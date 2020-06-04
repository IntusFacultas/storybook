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

```javascript
// Some build tools do not automatically polyfill the necessary features for this component. If you experience this issue
// add the following:
require("core-js/modules/es.symbol");

import TableOfContents from "@IntusFacultas/table-of-contents";
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
            <td>enableDomListening</td>
            <td>`Boolean`</td>
            <td>`false`</td>
            <td>When set to true, the table of contents will passively listen for DOM changes before updating.
            When set to false, you can instead fire a CustomEvent in the following format in order to force the TableOfContents component
            to update:<br><br>
            <pre>
                <code>
                    let evt = new CustomEvent("IntusFacultas-table-of-contents");
                    window.dispatchEvent(evt)
                </code>
            </pre>
            </td>
        </tr>
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
            <td>ignoreQuery</td>
            <td>`String` or `Array`</td>
            <td>`""`</td>
            <td>By default the ToC will include all the headers it finds, but if for some reason you need to tell it to discount a specific header or type of header, you can set this to any valid html lookup and any title that matches the lookup will be ignored. If an array of strings, it will attempt to match against any of the values</td>
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
