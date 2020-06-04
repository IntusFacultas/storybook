# Raw Sidebar

## Type of Component

Vue Component - https://vuejs.org/v2/guide/components.html

## Installation

```bash
npm install @IntusFacultas/raw-sidebar@latest --save
```

## Purpose

This creates a responsive sidebar for navigation purposes which you can insert pure HTML into in order to create your own content.

## Usage

This is meant to be used in tandem with the `SidebarOffsetContent` component for displaying content on your website. A full usage example is provided below:

```html
<raw-sidebar
  :flavor="flavor"
  :sidebar-title="sidebarTitle"
  :top-offset="topOffset"
  :bottom-offset="bottomOffset"
>
  <p>Custom HTML content goes in here.</p>
</raw-sidebar>
<sidebar-offset-content><h2>Content!</h2></sidebar-offset-content>
```

```javascript
import RawSidebar from "@IntusFacultas/raw-sidebar";
import {VueSidebarDropdown, SidebarItem, SidebarItemList,} from "@IntusFacultas/sidebar";
data: {
    flavor: "Primary",
    sidebarTitle: "Sidebar Title",
    topOffset: "10px",
    bottomOffset: "10px",
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
    </tbody>
</table>

## Available Components

The `sidebar` component uses a number of components that you can use to build your own sidebar (should you choose)

### SidebarItemList

This is a styled `ul` component that acts as the container for all `SidebarItem` and `SidebarDropdown` components. An example of how to use this component is provided below:

```html
<sidebar-item-list>
  <sidebar-item :flavor="flavor"><span>Test</span></sidebar-item>
  <sidebar-item :flavor="flavor"><span>Test</span></sidebar-item>
  <sidebar-item :flavor="flavor">
    <vue-sidebar-dropdown
      :flavor="flavor"
      :items="items"
      text="Dropdown"
      icon="<i>Icon</i>"
    >
    </vue-sidebar-dropdown>
  </sidebar-item>
  <!-- Put your sidebar items and sidebar dropdowns in here -->
</sidebar-item-list>
```

```javascript
data: {
  items: [
    {
      type: "item",
      text: "Link 98",
      icon: "",
      url: "/url/to/place",
    },
    {
      type: "item",
      text: "Link 10",
      icon: "",
      url: "/url/to/place",
    },
  ];
}
```

### SidebarItem

This is a styled `li` component that acts as a sidebar item. An example of how to use this component is provided below:

```html
<sidebar-item :flavor="flavor" :disabled="item.disabled" :active="item.active">
  Text
</sidebar-item>
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
            <td>`String`</td>
            <td>`""`</td>
            <td>Sets the flavor of the item</td>
        </tr>
        <tr>
            <td>disabled</td>
            <td>`Boolean`</td>
            <td>`false`</td>
            <td>Grays out the item and disables pointer events when true</td>
        </tr>
        <tr>
            <td>active</td>
            <td>`Boolean`</td>
            <td>`false`</td>
            <td>Styles the item to demonstrate that it is currently active</td>
        </tr>
    </tbody>
</table>

### VueSidebarDropdown

This is a fully self-contained dropdown component. Place it in a `SidebarItem`.

```html
<vue-sidebar-dropdown
  :icon="item.icon"
  :text="item.text"
  :items="item.items"
  :flavor="flavor"
></vue-sidebar-dropdown>
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
            <td>`String`</td>
            <td>`""`</td>
            <td>Sets the flavor of the item</td>
        </tr>
        <tr>
            <td>items</td>
            <td>`Array`</td>
            <td>`[]`</td>
            <td>Sets the items that the dropdown will display. Format is: <br>
            <pre>
                <code>
                {
                    text: "Link 98",  // any text of your choice
                    icon: "",  // text to be rendered as HTML
                    url: "/url/to/place"  // URL,
                    disabled: false,
                    active: false
                },
                </code>
            </pre>
            </td>
        </tr>
        <tr>
            <td>text</td>
            <td>`String`</td>
            <td>`""`</td>
            <td>Sets the text of the dropdown</td>
        </tr>
        <tr>
            <td>disabled</td>
            <td>`Boolean`</td>
            <td>`false`</td>
            <td>Grays out the item and disables pointer events when true</td>
        </tr>
    </tbody>
</table>
