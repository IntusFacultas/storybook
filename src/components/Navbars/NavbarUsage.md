# Navbar

## Type of Component

Vue Component - https://vuejs.org/v2/guide/components.html

## Installation

```bash
npm install @IntusFacultas/navbar@latest --save
```

## Purpose

This creates a configurable responsive navbar that can use whatever flavor you provide it from a ThemeProvider or the default NASIC provider

## Usage

```html
<navbar
  :title="title"
  :fixed="fixed"
  :flavor="flavor"
  :left-items="leftItems"
  :right-items="rightItems"
  :center-items="centerItems"
></navbar>
```

```javascript
data: {
    title: {
        "html": "",
        "text": "Brand",
        "url": "#"
    },
    flavor: "Primary",
    fixed: false,
    leftItems: [
        {
            "html": "",
            "text": "Navbar Link",
            "url": "#"
        },
        {
            "type": "dropdown"
            "html": "",
            "text": "",
            "items": [
                {
                    "html": "",
                    "text": "Dropdown Link",
                    "url": "#"
                },
                {
                    "html": "",
                    "text": "Dropdown Link",
                    "url": "#"
                },
            ],
            "disabled": false,
            "active": false
        },
        {
            "html": "",
            "text": "Navbar Link",
            "url": "#"
        },
        {
            "html": "",
            "text": "Navbar Link",
            "url": "#"
        },
        {
            "html": "",
            "text": "Navbar Link",
            "url": "#"
        }
    ],
    centerItems: [],
    rightItems: [],
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
        <tr>
            <td>leftItems</td>
            <td>`Array`</td>
            <td>`[]`</td>
            <td>Sets the Nav Items to be displayed on the left hand side. The format for items should be one of the following: <br>
            <pre>
                <code>
                {
                    "type": "item",
                    "html": "", // rendered as HTML
                    "text": "",
                    "url": "",
                    "disabled": false,
                    "active": false
                }
                </code>
            </pre>
            <hr>
            <pre>
                <code>
                {
                    "type": "dropdown"
                    "html": "", // rendered as HTML
                    "text": "",
                    "items": [], // formatted items as above
                    "disabled": false,
                    "active": false
                }
                </code>
            </pre>
            </td>
        </tr>
        <tr>
            <td>centerItems</td>
            <td>`Array`</td>
            <td>`[]`</td>
            <td>Sets the Nav Items to be displayed in the center. The format for items should be one of the following: <br>
            <pre>
                <code>
                {
                    "type": "item",
                    "html": "", // rendered as HTML
                    "text": "",
                    "url": "",
                    "disabled": false,
                    "active": false
                }
                </code>
            </pre>
            <hr>
            <pre>
                <code>
                {
                    "type": "dropdown"
                    "html": "", // rendered as HTML
                    "text": "",
                    "items": [], // formatted items as above
                    "disabled": false,
                    "active": false
                }
                </code>
            </pre>
            </td>
        </tr>
        <tr>
            <td>rightItems</td>
            <td>`Array`</td>
            <td>`[]`</td>
            <td>Sets the Nav Items to be displayed on the right hand side. The format for items should be one of the following: <br>
            <pre>
                <code>
                {
                    "type": "item",
                    "html": "", // rendered as HTML
                    "text": "",
                    "url": "",
                    "disabled": false,
                    "active": false
                }
                </code>
            </pre>
            <hr>
            <pre>
                <code>
                {
                    "type": "dropdown"
                    "html": "", // rendered as HTML
                    "text": "",
                    "items": [], // formatted items as above
                    "disabled": false,
                    "active": false
                }
                </code>
            </pre>
            </td>
        </tr>
    </tbody>
</table>
