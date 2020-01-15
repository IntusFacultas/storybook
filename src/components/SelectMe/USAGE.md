# SelectMe

## Type of Widget
Vue Component - https://v1.vuejs.org/guide/components.html

## Dependencies
None

## Purpose
This allows the user to select options or multiple options, replicating the original Select2 behavior, without the need for jQuery. This widget also has certain benefits over Vue-Multiselect, mainly that removing selected options is far easier on account of the badge system used.


## Usage

When you are instantiating your component instance, make sure to bind a variable containing the options

```html
<select-me :options="optionsForSelect" v-model="selectedOptions" :multi-select="true"></select-me>
```

```javascript
var optionsForSelect = [
    {
        text: "Label",
        value: "value"
    },
    ...
]
```


### Special Configuration
Various Vue Component Props have been exposed for customizing the behavior of the component.

Special note: camelCase props need to be converted to kebab-case when being set.

1. displayAttribute
    * type: String,
    * default: "text"
    * What attribute in a JS object should be referenced for displaying the option text and badge text for an option
2. valueAttribute
    * type: String,
    * default: "value",
    * What attribute in a JS object should be referenced for determining the value
3. disabled
    * type: Boolean,
    * default: false,
    * disables the widget, disallowing selection
4. options
    * type: Array,
    * default: [],
    * This is the options for the dropdown
5. debug
    * type: Boolean,
    * default: false,
    * When this is set to True, the dropdown does not close, allowing you to inspect the element
6. initialValues
    * type: Array
    * default: []
    * When this is set to an array of objects with key "value" that match the values of options present in the required "options" prop, the selectme will initialize itself already having those options pre-selected.
7. multiSelect
    * type: Boolean,
    * default: false,
    * When this is set to True, the dropdown will allow a user to select multiple options
8. inputClass
    * type: Array,
    * default: `["form-control"]`
    * Controls what classes should be applied to the searchbox
9. badgeClass
    * type: Array,
    * default: `["badge", "badge-secondary"]`
    * Controls what classes should be applied to the badges for selected values. `"selectme-badge"` is always applied.