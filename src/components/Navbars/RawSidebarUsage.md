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

<n-sidebar
    :flavor="flavor"
    :sidebar-title="sidebarTitle"
    :top-offset="topOffset"
    :bottom-offset="bottomOffset"
    :items="items">
</n-sidebar>
<sidebar-offset-content><h2>Content!</h2></sidebar-offset-content>
```

```javascript
let flavor = "Primary";
let sidebarTitle = "Sidebar Title";
// offset the sidebar from the top to make space for a navbar
let topOffset = "10px";
// offset the sidebar from the bottom to make space for a footer
let bottomOffset = "10px";
let items = [
    {
        type: "item",
        text: "Link 1",
        icon: "<i>Info!</i>",
        url: "/url/to/place"
    },
    {
        type: "dropdown",
        text: "Dropdown",
        icon: "",

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
```