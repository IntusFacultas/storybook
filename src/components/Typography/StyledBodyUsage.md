# Styled Text

## Type of Component

Vue Styled Component - https://github.com/styled-components/vue-styled-components

## Dependencies

1. vue-styled-components

## Purpose

These components replace the default HTML5 `<p></p>` and `<span></span>` with `<p></p>` and `<span></span>` tags that have baked in NASIC styleguide-compliant styling.

## Usage

These components functions similarly to a normal HTML5 body and span tags. You can place content inside of them as you normally would.

## Available Components

```html

<n-text :size="size">Lorem ipsum</n-text>
<portion-marking>(TS/SCI)</portion-marking>

```

```javascript
// size should be an Integer between 14 and 16 inclusive. Numbers out of that range
// get rounded down or up to the edge of that range
let size = 14;
```
