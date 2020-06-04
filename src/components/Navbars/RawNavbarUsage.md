# Raw Navbar

## Type of Component

Vue Component - https://vuejs.org/v2/guide/components.html

## Installation

```bash
npm install @IntusFacultas/raw-navbar@latest --save
```

## Purpose

This creates a responsive navbar for navigation purposes which you can insert pure HTML into in order to create your own content.

## Usage

```html
<raw-navbar :title="title" :fixed="fixed" :flavor="flavor" ref="navbar">
  <navbar-content>
    <navbar-item>
      <vue-navbar-dropdown
        :parent="instance"
        :flavor="flavor"
        text="My Dropdown"
        :items="items"
      >
      </vue-navbar-dropdown>
    </navbar-item>
    <navbar-item>
      <a href="#">Link 1</a>
    </navbar-item>
    <navbar-item>
      <a href="#">Link 2</a>
    </navbar-item>
    <navbar-item>
      <a href="#">Link 3</a>
    </navbar-item>
    <navbar-item>
      <a href="#">Link 4</a>
    </navbar-item>
  </navbar-content>
  <navbar-content>
    <navbar-item>
      <input />
    </navbar-item>
  </navbar-content>
</raw-navbar>
```

```javascript
import RawNavbar from "@IntusFacultas/raw-navbar";
import {NavbarItem, NavbarContent, VueNavbarDropdown} from "@IntusFacultas/navbar";
data: {
  navbar: {collapsed: false},
  flavor: "Primary",
  title: {
    html: "",
    text: "Brand",
    url: "#"
  },
  fixed: false,
  items: [
    {
      type: "item",
      text: "Dropdown Item 1",
      url: "#",
      disabled: false
    },
    {
      type: "item",
      text: "Dropdown Item 2",
      url: "#",
      disabled: false
    }
  ]
},
computed: {
  instance() {
    return this.$refs.navbar
  }
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
            <td>fixed</td>
            <td>`Boolean`</td>
            <td>`false`</td>
            <td>Makes the navbar sticky to the top</td>
        </tr>
        <tr>
            <td>flavor</td>
            <td>`String`</td>
            <td>`""`</td>
            <td>Sets the flavor of navbar</td>
        </tr>
        <tr>
            <td>title</td>
            <td>`Object`</td>
            <td>
                <pre>
                    <code>
                    {
                        text: "Brand",
                        url: "#",
                        html: ""
                    }
                    </code>
                </pre>
            </td>
            <td>
                Sets the navbar brand and url. The `html` prop gets rendered as pure HTML.
            </td>
        </tr>
    </tbody>
</table>

## Available Components

The `@IntusFacultas/navbar` component uses a number of components that you can use to build your own navbar

### NavbarContent

This is a **crucial** component that plays a role in both arranging your navbar and also ensuring that any dropdowns you insert work as intended.

These components will be arranged in the parent via the `justify-content: space-between` CSS attribute on the parent element that contains the slot where your content goes.

If you want to have content that is right aligned, you would insert two `NavbarContent` components, then insert the right aligned content in the second `NavbarContent` component.

```html
<navbar-content>
  YOUR CONTENT GOES IN HERE
</navbar-content>
```

### NavbarItem

This is another **crucial** component for ensuring that your navbar items are all arranged as you would expect. Wrap anything you want to have appropriately aligned in a `NavbarItem` component.

```html
<navbar-item :flavor="flavor"
>I contain the actual content and go inside the NavbarContent
  component.
</navbar-item
```

### VueNavbarDropdown

This is a component that will render a dropdown with a variety of options.

**IT IS HIGHLY RECOMMENDED THAT YOU DO NOT NEST DROPDOWNS. USE A MEGAMENU COMPONENT INSTEAD**

**THIS COMPONENT WILL NOT RENDER PROPERLY UNLESS IT IS INSIDE A `NavbarItem` COMPONENT THAT IS INSIDE A `NavbarContent` COMPONENT AND YOU MUST PASS THE VUE NAVBAR COMPONENT TO IT**

```html
<vue-navbar-dropdown
  :parent="this"
  :flavor="flavor"
  icon=""
  text="My Dropdown"
  :items="items"
>
</vue-navbar-dropdown>
```

```javascript
let flavor = "Primary";
let items = [
  {
    type: "item",
    text: "Dropdown Item 1",
    url: "#",
    disabled: false,
  },
  {
    type: "item",
    text: "Dropdown Item 2",
    url: "#",
    disabled: false,
  },
];
```
