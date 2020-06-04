# Carousel

## Type of Component

Vue Component - https://vuejs.org/v2/guide/components.html

## Installation

```bash
    npm install @IntusFacultas/carousel@latest --save
```

## Purpose

This provides a configurable image carousel with both automated and manual controls, as well as the ability to select an image.

## Usage

```html
<carousel
  :height="height"
  @select="onSelect"
  :width="width"
  :delay="delay"
  :selectable="selectable"
  :images="images"
  :automated="automated"
>
</carousel>
```

```javascript
import Carousel from "@IntusFacultas/carousel";
data: {
    images: [
        {
          src: "https://www.apimages.com/Images/Ap_Creative_Stock_Header.jpg",
          id: 1,
        },
        {
          src:
            "https://image.jimcdn.com/app/cms/image/transf/none/path/sa716b1500dd60f05/image/ic839a74ed6a8a054/version/1519833130/image.jpg",
          id: 2,
        },
        {
          src:
            "https://i.kym-cdn.com/photos/images/newsfeed/000/954/161/b3a.jpg",
          id: 3,
        },
    ],
    width: "1000px",
    height: "500px",
    automated: false,
    delay: 5000
},
methods: {
    onSelect() {}
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
            <td>height</td>
            <td>`String`</td>
            <td>`"500px"`</td>
            <td>Sets the total height of the carousel. Use this to set height instead of CSS, as it will affect functionality otherwise</td>
        </tr>
        <tr>
            <td>width</td>
            <td>`String`</td>
            <td>`"100%"`</td>
            <td>Sets the total width of the carousel. Use this to set width instead of CSS, as it will affect functionality otherwise</td>
        </tr>
        <tr>
            <td>automated</td>
            <td>`Boolean`</td>
            <td>`false`</td>
            <td>Whether the carousel should autoscroll (does not disable the user from manually scrolling as well)</td>
        </tr>
        <tr>
            <td>showControlBar</td>
            <td>`Boolean`</td>
            <td>`true`</td>
            <td>Shows the control bar at the bottom of the carousel to jump more than one ahead or back</td>
        </tr>
        <tr>
            <td>images</td>
            <td>`Array`</td>
            <td><b>None. Required.</b></td>
            <td>An array of images to be displayed. The minimum requirements for the objects are:
            <pre>
                <code>
                {
                    src: "some/url/"
                }
                </code>
            </pre>
            However its urged that you also have an alt attribute for setting the alt text:
            <pre>
                <code>
                {
                    src: "some/url/"
                    alt: "Some useful alt text for accessability"
                }
                </code>
            </pre>
            </td>
        </tr>
        <tr>
            <td>selectable</td>
            <td>`Boolean`</td>
            <td>`true`</td>
            <td>Allows the user to select an image which fires an event you can listen for and determine the image selected</td>
        </tr>
        <tr>
            <td>delay</td>
            <td>`Number`</td>
            <td>`5000`</td>
            <td>How long in ms should the carousel delay before scrolling to the next image when automated is set to true.</td>
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
            <td>the image object selected</td>
            <td>Fired on click of an image when selectable is set to true</td>
        </tr>
    </tbody>
</table>
