# Typography


## Purpose

These components overhaul the basic HTML text with styled text components

## Usage

These components functions similarly to a normal HTML5 text tags. You can place content inside of them as you normally would.


## Available Components
- NText
- NLabel
- NParagraph
- NSmallText
- NTopLevelTitle

## Usage

```html
<n-text :flavor="Medium"></n-text>
```

## Configuration

- The flavors for text are pulled from `@intus/design-system` in the `TextTheme` Object.

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
            <td>Sets the color of the text to provided flavor.</td>
        </tr>
    </tbody>
</table>