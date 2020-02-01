# VueMe

## Purpose
Recreates most of the core functionality of jQuery-Confirm without the need of requiring jQuery using VueJS only.

## Usage

```html 
<vue-me></vue-me>
```

The initial <vue-me> element sets up a function in your Vue App before self-destructing called $alert. This is how you create alerts in VueMe. You can pass it a number of options:

```javascript
// in the Vue App
var self = this;
 
 
/**
 * @function $alert
 * Creates a Dialog and shows it to the user
 * @param {Object} options, options to customize the dialog
 * @param {Object} self, the Vue instance calling it (pass yourself so the newly created component can be bound to you)
 */
self.$alert({
    // Type - String
    // Options: Flavors in DesignSystem
    // Controls: the color accent of the dialog
    // Default: "default"
    type: "default",
  
    // Title - String
    // Controls: The title of the dialog
    // Default: "Alert"
    title: "Title",
 
 
    // Icon - String
    // Must be valid HTML
    // Controls: The icon in the dialog title
    // Default: ""
    icon: "<i class='fa fa-info-circle'></i>",
 
 
 
    // Content - String
    // Must be valid HTML
    // Controls: the content of the dialog
    // Default: "This is an alert."
    content: "Content",
 
 
    // Background Dismiss - Boolean
    // Controls: Whether the dialog can be cleared by clicking on the background
    // Default: false
    backgroundDismiss: false,
 
 
    // Buttons - Array of Objects
    // Controls: the buttons that are displayed at the bottom.
    buttons: [
        {
            // Text - String
            // Controls - The button text
            text: "Close",
     
            // Flavor - String
            // Options: Flavors in Design System
            flavor: "Primary",
 
            // Action - Function
            // The function to be called when the button is clicked. Takes one argument which are the fieldValues data
            // If the function returns false, the dialog will not be closed, else the dialog will be closed on click
            // Default: function(data) {}
            action: function(data) {
                if (!data.name) {
                    self.$alert({title: "Error", type: "red", content: "Please provide a name":, buttons: [{text: "Ok"}] }, self);
                    return false;
                }
                self.$alert({title: "Hello", type: "green", content: "Hello " + data.name, buttons: [{text: "Hello"}] }, self);
            }
 
 
            // ID - String or Integer
            // Used for referencing buttons. This is important for autoclose
            // Default: UNIX Timestamp at time of creation
            id: "CloseButton",
        }
    ],
 
 
    // Fields - Array of Objects
    // Controls: The form fields rendered in the dialog
    // Default: [],
    fields: [
        {
            // Label - String
            // Controls the text for the label
            // Default: "Label"
            label: "Enter your name",
 
 
            // Type - String
            // Controls: the type of the input, must be valid type
            // Default: "text"
            type: "text",
 
            // id - String
            // Used to bind the value to fieldValues in v-model, doing v-model="fieldValues[field.id]"
            // Default: label + "-" + fieldType
            id: "name"
        }
    ],
 
 
    // Autoclose - String
    // Format must be "idOfButton|TimeInMilliseconds"
    // Default: disabled
    autoClose: "CloseButton|10000",
}, self);
```
