# Paginator

## Type of Component

Vue Component - https://vuejs.org/v2/guide/components.html

## Installation

```bash
npm install @IntusFacultas/paginator@latest --save
```

## Purpose

This creates a configurable pagination component that returns what page is selected by the user

## Usage

```html
<paginator
  :flavor="flavor"
  :show-first-last="showFirstLast"
  :page-count="pageCount"
  :current-page="currentPage"
  :margin-pages="marginPages"
  :page-range="pageRange"
  @select="onSelect"
>
</paginator>
```

```javascript
import Paginator from "@IntusFacultas/paginator";
data: {
    flavor: "Primary",
    showFirstLast: true,
    pageCount: 10,
    currentPage: 1,
    marginPages: 1,
    pageRange: 3
},
methods: {
    onSelect: function(page) {
        this.currentPage = page;
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
            <td>showFirstLast</td>
            <td>`Boolean`</td>
            <td>`false`</td>
            <td>Displays the "First" and "Last" buttons to skip to end of navigation</td>
        </tr>
        <tr>
            <td>pageCount</td>
            <td>`Number`</td>
            <td>`None`|<b>REQUIRED</b></td>
            <td>The number of pages</td>
        </tr>
        <tr>
            <td>currentPage</td>
            <td>`Number`</td>
            <td>`1`</td>
            <td>Sets what page is currently selected which affects appearance and the sliding window</td>
        </tr>
        <tr>
            <td>marginPages</td>
            <td>`Number`</td>
            <td>`1`</td>
            <td>Sets the number of pages to be shown at the extremes of the paginator outside the sliding window (Will be clipped by the sliding window automatically)</td>
        </tr>
        <tr>
            <td>pageRange</td>
            <td>`Number`</td>
            <td>`3`</td>
            <td>Sets the number of pages to be shown in the sliding window.</td>
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
            <td>`select`</td>
            <td>`@select`</td>
            <td>1th-based page selected</td>
            <td>Fired on selection</td>
        </tr>
    </tbody>
</table>
