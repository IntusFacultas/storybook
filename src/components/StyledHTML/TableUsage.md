# Table


## Type of Component
Vue Component - https://v1.vuejs.org/guide/components.html

## Installation

```bash
npm install @nasic/table --save
```

## Purpose

This provides a data driven table component as well as the building blocks for use with the Raw Table Component.


Draws default themes from `@intus/designsystem`. You can override the theme by providing a theme using the **vue-styled-components** ThemeProvider component.

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
    @sort="onSort"></vue-table>
```


## Configuration

The colors are pulled from `@nasic/design-system` in the `Theme` Object.

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
        <tr><td>flavor</td><td>`String`</td><td>`""`</td><td>Sets the flavor for the entire table</td></tr>
        <tr><td>headerFlavor</td><td>`String`</td><td>`""`</td><td>Sets the flavor for the header (overrides base flavor)</td></tr>
        <tr><td>striped</td><td>`Boolean`</td><td>`false`</td><td>Stripes the `tbody` rows</td></tr>
        <tr><td>textAlign</td><td>`String`</td><td>`"left"`</td><td>Sets the text-align property for `th` and `td` cells</td></tr>
        <tr><td>hover</td><td>`Boolean`</td><td>`false`</td><td>Makes `tbody` rows hoverable</td></tr>
        <tr><td>bordered</td><td>`Boolean`</td><td>`false`</td><td>Makes `tbody` rows fully bordered (by default only top border is used)</td></tr>
        <tr><td>numbered</td><td>`Boolean`</td><td>`false`</td><td>Includes a `#` column which will attempt to use (in order): 
            <ol>
                <li>`item.data.id` attribute</li>
                <li>`item.data.pk` attribute</li>
                <li>`v-for` loop iterator index</li>
            </ol>
         </td></tr>
         <tr><td>condensed</td><td>`Boolean`</td><td>`false`</td><td>Makes `table` rows condensed</td></tr>
         <tr><td>sortable</td><td>`Boolean`</td><td>`false`</td><td>When set to true, mouse clicks on the header will fire off a sort event described in the Events section. It also will enable a carat that shows the direction of sort on headers.</td></tr>
         <tr><td>items</td><td>`Array`</td><td>`[]`</td><td>The items to be displayed. They must match the following format displayed below. <br>
         <pre>
            <code>
                {
                    data: {
                        // keys and values
                        // keys can be camelCase or snake_case, and will be analyzed to generate automatic Title Case headers
                        // values will not be displayed as raw HTML, if you need to display raw HTML, use `RawTable`
                    },
                    flavor: String, // this is optional, but will set the flavor for that specific row.
                }
            </code>
         </pre></td></tr>
         <tr><td>headers</td><td>`Array`</td><td>`[]`</td><td>As described above, the headers of the table are automatically generated based on the keys of the data. However, you can override this (either because the Title Case failed to work properly or because you want to change the order of the headers) by providing this prop.<br><br>
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
         </pre></td></tr>
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
            <td>`sort`</td>
            <td>`@sort`</td>
            <td>Sort attribute (in the form used by Django, so `-header` or `header`)</td>
            <td>Fired on click of a header</td>
        </tr>
    </tbody>
</table>