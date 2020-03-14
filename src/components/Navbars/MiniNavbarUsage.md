# Mini-Navbar

## Type of Component

Vue Component - https://vuejs.org/v2/guide/components.html

## Installation

```bash
npm install @IntusFacultas/mini-navbar@latest --save
```

## Purpose

This creates a configurable mini-navbar for use in LINK products

## Usage

```html
<mini-navbar
  :brand-url="brandUrl"
  :link-search-url="linkSearchUrl"
  :apps-search-url="appsSearchUrl"
  >HTML SLOT HERE. GETS PLUGGED WHERE THE CLASSIFICATION WOULD BE</mini-navbar
>
```

```javascript
data: {
    brandUrl: "#",
    linkSearchUrl: "#",
    appsSearchUrl: "#"
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
            <td>brandUrl</td>
            <td>`String`</td>
            <td>`"#"`</td>
            <td>Sets the link for the brand</td>
        </tr>
        <tr>
            <td>linkSearchUrl</td>
            <td>`String`</td>
            <td>`"#"`</td>
            <td>Sets the link for the Search NASIC Link `a` tag.</td>
        </tr>
       <tr>
            <td>appsSearchUrl</td>
            <td>`String`</td>
            <td>`"#"`</td>
            <td>Sets the link for the Apps `a` tag/svg.</td>
        </tr>
    </tbody>
</table>
