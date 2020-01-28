# Raw Sidebar

## Type of Component

Vue Component 

## Dependencies

1. vue-styled-components

## Purpose

This creates a responsive sidebar for navigation purposes which you can insert pure HTML into in order to create your own content.

## Usage

This is meant to be used in tandem with the `SidebarOffsetContent` component for displaying content on your website. A full usage example is provided below:

```html

<n-raw-sidebar
    :flavor="flavor"
    :sidebar-title="sidebarTitle"
    :top-offset="topOffset"
    :bottom-offset="bottomOffset">
    <p>Custom HTML content goes in here.</p>
</n-raw-sidebar>
<sidebar-offset-content><h2>Content!</h2></sidebar-offset-content>
```

```javascript
let flavor = "Primary";
let sidebarTitle = "Sidebar Title";
// offset the sidebar from the top to make space for a navbar
let topOffset = "10px";
// offset the sidebar from the bottom to make space for a footer
let bottomOffset = "10px";

```

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
            <td>flavor</td>
            <td>```String```</td>
            <td>```""```</td>
            <td>Sets the flavor of sidebar</td>
        </tr>
        <tr>
            <td>sidebarTitle</td>
            <td>```String```</td>
            <td>```"Sidebar"```</td>
            <td>Sets the title of the sidebar</td>
        </tr>
        <tr>
            <td>topOffset</td>
            <td>`String`</td>
            <td>`"0px"`</td>
            <td>Offsets the sidebar from the top</td>
        </tr>
        <tr>
            <td>bottomOffset</td>
            <td>```String```</td>
            <td>```"0px"```</td>
            <td>Offsets the sidebar from the bottom</td>
        </tr>
        <tr>
            <td>width</td>
            <td>```Number```</td>
            <td>```200```</td>
            <td>Sets the sidebar width</td>
        </tr>
        <tr>
            <td>breakpoint</td>
            <td>```Number```</td>
            <td>```576```</td>
            <td>Sets the window width at which point the sidebar collapses</td>
        </tr>
    </tbody>
</table>
