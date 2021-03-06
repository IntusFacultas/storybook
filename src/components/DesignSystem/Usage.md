# Design system

## Type of Component

Configuration JS objects

## Installation

```bash
npm install @IntusFacultas/design-system@latest --save
```

## Purpose

This provides a set of themes used by a number of components. You can import the themes by importing one of the following options, but most components import them by default. You can import them in order to develop with them, and have the following objects available:

```javascript
NIWSTheme;
TextTheme;
NASICTheme;
```

## Defining Your Own Themes

Defining your own themes for your own projects is simple.

1. Import ThemeProvider from vue-styled-components

```javascript
import { ThemeProvider } from "vue-styled-components";
```

2. Define a Themes Object

```javascript
let THEMES = {
  FlavorName: {
    color: {
      color: "#fff",
      focus: "#fff",
      hover: "#fff"
    },
    background: {
      color: "#4357AD",
      hover: "#2940A1",
      focus: "#4357AD"
    },
    border: {
      color: "#4357AD",
      hover: "#2940A1",
      focus: "#4357AD"
    }
  }
};
```

3. Assign your Themes object to the theme provider in your component

```html
<theme-provider :theme="THEMES">
  <some-other-styled-component></some-other-styled-component>
</theme-provider>
```

4. All components considered child nodes of the ThemeProvider will inherit that theme and attempt to use your themes before falling back on the default NASIC themes.
