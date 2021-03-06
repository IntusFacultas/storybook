# Sidebar

## Type of Component

Vue Component - https://vuejs.org/v2/guide/components.html

## Installation

```bash
npm install @IntusFacultas/sidebar@latest --save
```

## Purpose

This creates a responsive sidebar for navigation purposes.

## Usage

<b>IMPORTANT NOTE: MAKE SURE THAT BOTH THE SIDEBAR AND SIDEBAR OFFSET CONTENT ARE INSIDE A RELATIVE POSITIONED DIV OTHERWISE THE SIDEBAR WILL NOT USE THE FULL VERTICAL SPACE.</b>

This is meant to be used in tandem with the `SidebarOffsetContent` component for displaying content on your website. A full usage example is provided below:

```html
<sidebar
  :flavor="flavor"
  :sidebar-title="sidebarTitle"
  :top-offset="topOffset"
  :bottom-offset="bottomOffset"
  :items="items"
  :width="width"
  :breakpoint="breakpoint"
>
</sidebar>
<sidebar-offset-content :width="width" :breakpoint="breakpoint"
  ><h2>Content!</h2></sidebar-offset-content
>
```

```javascript
import {Sidebar, SidebarOffsetContent} from "@IntusFacultas/sidebar";
data: {
    flavor: "Primary",
    sidebarTitle: "Sidebar Title",
    // offset the sidebar from the top to make space for a navbar
    topOffset: "10px",
    // offset the sidebar from the bottom to make space for a footer

    // width of the sidebar. Make sure to pass this to your SidebarOffsetContent component as well
    width: 200,

    // breakpoint for responsiveness
    breakpoint: 576,
    bottomOffset: "10px",
    items: [
        {
            type: "item",
            text: "Link 1",
            icon: "<i>Info!</i>",
            url: "/url/to/place",
            disabled: false,
        },
        {
            type: "dropdown",
            text: "Dropdown",
            icon: "",
            disabled: false,
            items: [
                {
                    type: "item",
                    text: "Link 98",
                    icon: "",
                    url: "/url/to/place"
                },
                {
                    type: "item",
                    text: "Link 10",
                    icon: "",
                    url: "/url/to/place"
                },
            ]
        },
    ]
}
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
            <td>flavor</td>
            <td>`String`</td>
            <td>`""`</td>
            <td>Sets the flavor of sidebar</td>
        </tr>
        <tr>
            <td>sidebarTitle</td>
            <td>`String`</td>
            <td>`"Sidebar"`</td>
            <td>Sets the title of the sidebar</td>
        </tr>
        <tr>
            <td>topOffset</td>
            <td>`String`</td>
            <td>`"0px"`</td>
            <td>Offsets the sidebar from the top</td>
        </tr>
        <tr>
            <td>height</td>
            <td>`Number` or `null`</td>
            <td>`null`</td>
            <td>Overrides the height of the sidebar</td>
        </tr>
        <tr>
            <td>bottomOffset</td>
            <td>`String`</td>
            <td>`"0px"`</td>
            <td>Offsets the sidebar from the bottom</td>
        </tr>
        <tr>
            <td>width</td>
            <td>`Number`</td>
            <td>`200`</td>
            <td>Sets the sidebar width</td>
        </tr>
        <tr>
            <td>breakpoint</td>
            <td>`Number`</td>
            <td>`576`</td>
            <td>Sets the window width at which point the sidebar collapses</td>
        </tr>
        <tr>
            <td>items</td>
            <td>`Array`</td>
            <td>`[]`</td>
            <td>Sets the items that the sidebar will display. Options are: <br>
            <pre>
                <code>
                {
                    type: "item", // item or dropdown
                    text: "Link 98",  // any text of your choice
                    icon: "",  // text to be rendered as HTML
                    url: "/url/to/place"  // URL,
                    disabled: false,
                    active: false
                },
                </code>
            </pre>
            <hr>
            <pre>
                <code>
                {
                    type: "dropdown",
                    text: "Dropdown",
                    icon: "",
                    items: []  // no nested dropdowns
                    disabled: false,
                    active: false
                },
                </code>
            </pre>
            </td>
        </tr>
    </tbody>
</table>
