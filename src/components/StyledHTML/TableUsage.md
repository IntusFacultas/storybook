# Table

## Type of Component

Vue Component - https://v1.vuejs.org/guide/components.html

## Installation

```bash
npm install @IntusFacultas/table@latest --save
```

## Purpose

This provides a data driven table component as well as the building blocks for use with the Raw Table Component.

Draws default themes from DesignSystem/theme.js. You can override the theme by providing a theme using the **vue-styled-components** ThemeProvider component.

## Usage

```html
<vue-table
  :flavor="flavor"
  :header-flavor="headerFlavor"
  :striped="striped"
  :text-align="textAlign"
  :hover="hover"
  :bordered="bordered"
  :numbered="numbered"
  :condensed="condensed"
  :sortable="sortable"
  :items="items"
  :headers="headers"
  @sort="onSort"
></vue-table>
```

```javascript
import VueTable from "@IntusFacultas/table";
import {VueTable} from "@IntusFacultas/table";
data: {
    flavor: "",
    headerFlavor: "Primary",
    striped: true,
    textAlign: "left",
    hover: true,
    bordered: false,
    numbered: false,
    condensed: true,
    sortable: false,
    items: [
        {
          data: {
            first_name: "Pedro",
            last_name: "Del Moral Lopez",
            age: 24
          },
          flavor: ""
        },
        {
          data: {
            first_name: "Brent",
            last_name: "Ropp",
            age: 45
          },
          flavor: ""
        },
        {
          data: {
            first_name: "Ryan",
            last_name: "Kelbley",
            age: 28
          },
          flavor: ""
        }
    ],
    headers: [],
}
```

## Configuration

The colors are pulled from `@IntusFacultas/design-system` in the `Theme` Object.

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
        <tr>
            <td>flavor</td>
            <td>`String`</td>
            <td>`""`</td>
            <td>Sets the flavor for the entire table</td>
        </tr>
        <tr>
            <td>showLoading</td>
            <td>`Boolean`</td>
            <td>`false`</td>
            <td>Shows a loading animation instead of data when set to true</td>
        </tr>
        <tr>
            <td>selectable</td>
            <td>`Boolean`</td>
            <td>`false`</td>
            <td>When set to true, a column with a button for selecting the row will be added</td>
        </tr>
        <tr>
            <td>buttons</td>
            <td>`Array`</td>
            <td>
                <pre>
                <code>
                    [{
                        flavor: "Primary",
                        html: "Select",
                        value: "select"
                    }]
                </code>
                </pre>
            </td>
            <td>
                Determines what buttons will show up when selectable is set to true. Must follow the format: <br>
                <pre>
                <code>
                    [
                        {
                            flavor: String, // the flavor of the button
                            html: String, // rendered as html in the button
                            // passed back to you as well as the item
                            // so you know what button was clicked
                            value: Whatever you'd like, 
                        }
                    ]
                </code>
                </pre>
            </td>
        </tr>
        <tr>
            <td>stickyHeaders</td>
            <td>`Boolean`</td>
            <td>`false`</td>
            <td>Sets the headers to be sticky</td>
        </tr>
        <tr>
            <td>zIndex</td>
            <td>`Integer`</td>
            <td>`10`</td>
            <td>Sets the z-index of the headers when they are sticky</td>
        </tr>
        <tr>
            <td>top</td>
            <td>`Integer`</td>
            <td>`0`</td>
            <td>Sets how far from the top the headers should stop when sticky</td>
        </tr>
        <tr>
            <td>headerFlavor</td>
            <td>`String`</td>
            <td>`""`</td>
            <td>Sets the flavor for the header (overrides base flavor)</td>
        </tr>
        <tr>
            <td>tableTitles</td>
            <td>`Array`</td>
            <td>`[]`</td>
            <td>Additional table titles (as Strings) to be displayed above the headers</td>
        </tr>
        <tr>
            <td>striped</td>
            <td>`Boolean`</td>
            <td>`false`</td>
            <td>Stripes the `tbody` rows</td>
        </tr>
        <tr>
            <td>textAlign</td>
            <td>`String`</td>
            <td>`"left"`</td>
            <td>Sets the text-align property for `th` and `td` cells</td>
        </tr>
        <tr>
            <td>sort</td>
            <td>`String`</td>
            <td>`""`</td>
            <td>Allows you to programmatically set the active sorting direction and column.
            Expects a string matching the key to be sorted on. "-{key}" for descending, "{key}" for ascending.</td>
        </tr>
        <tr>
            <td>hover</td>
            <td>`Boolean`</td>
            <td>`false`</td>
            <td>Makes `tbody` rows hoverable</td>
        </tr>
        <tr>
            <td>bordered</td>
            <td>`Boolean`</td>
            <td>`false`</td>
            <td>Makes `tbody` rows fully bordered (by default only top border is used)</td>
        </tr>
        <tr>
            <td>numbered</td>
            <td>`Boolean`</td>
            <td>`false`</td>
            <td>Includes a `#` column which will attempt to use (in order): 
                <ol>
                    <li>`item.data.id` attribute</li>
                    <li>`item.data.pk` attribute</li>
                    <li>`v-for` loop iterator index</li>
                </ol>
            </td>
         </tr>
         <tr>
            <td>condensed</td>
            <td>`Boolean`</td>
            <td>`false`</td>
            <td>Makes `table` rows condensed</td>
            </tr>
         <tr>
            <td>sortable</td>
            <td>`Boolean`</td>
            <td>`false`</td>
            <td>When set to true, mouse clicks on the header will fire off a sort event described in the Events section. It also will enable a carat that shows the direction of sort on headers.</td>
            </tr>
         <tr>
            <td>items</td>
            <td>`Array`</td>
            <td>`[]`</td>
            <td>The items to be displayed. They must match the following format displayed below. <br>
         <pre>
            <code>
                {
                    data: {
                        // keys can be camelCase or snake_case, and will be analyzed to generate automatic 
                        // values will not be displayed as raw HTML, if you need to display raw HTML, use `RawTable`
                        "Title Case Header": "Some value to display",
                        /\* or if showClassification is set to true \*/
                        "Title Case Header": {
                            value: "Some value to display",
                            classification: "(U)"
                        }
                    },
                    flavor: String, // this is optional, but will set the flavor for that specific row.
                    showClassification: Boolean, // this is optional, but set to true will have portion markings show up.
                }
            </code>
         </pre></td>
         </tr>
         <tr>
            <td>headers</td>
            <td>`Array`</td>
            <td>`[]`</td>
            <td>As described above, the headers of the table are automatically generated based on the keys of the data. However, you can override this (either because the Title Case failed to work properly or because you want to change the order of the headers) by providing this prop.<br><br>
            <b>Requirements:</b><br>
            You must ensure that the values of this array cover all the keys in the `data` attribute of the items. Otherwise the component will default to the automaticaly generated ones.<br><br>
            <b>Format</b>
            <pre>
                <code>
                    {
                        text: String, // the text to be displayed
                        key: String, // the key on the `item.data`
                    }
                </code>
            </pre>
            </td>
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
            <td>`sort`</td>
            <td>`@sort`</td>
            <td>Sort attribute (in the form used by Django, so `-header` or `header`)</td>
            <td>Fired on click of a header</td>
        </tr>
        <tr>
            <td>`select`</td>
            <td>`@select`</td>
            <td>
                <pre>
                <code>
                    {
                        item: The item data on that row,
                        value: the value of the button clicked
                    }
                </code>
                </pre>
            </td>
            <td>Fired on select button click</td>
        </tr>
    </tbody>
</table>
