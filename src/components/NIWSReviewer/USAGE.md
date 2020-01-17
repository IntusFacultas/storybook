# NIWS Reviewer

## Type of Component
Vue Component - https://v1.vuejs.org/guide/components.html

## Dependencies
None

## Purpose
This provides a component that will abstract the necessary UI to submit an Instance transition from the frontend to NIWS, auto generating the appropriate UI elements based on data passed to it.

## Usage

When you are instantiating your component instance, make sure to bind a variable with the format shown below

```html
<niws-reviewer 
    :instance-id="instanceID"
    :workflow-url="workflowURL"
    :workflow-id="workflowID"
    :transitions="transitions"
    :callback="handleCallback">
</niws-reviewer>
```
``` javascript
// a valid NIWS Instance ID
var instanceID = "A12348"

// the base NIWS url for the network you are on (example: "https://nasicweb.nasic.ic.gov/niws")
var workflowURL = "url" 

// the name of the workflow the instance belongs to
var workflowID = "WorkflowName" 

// an array of transitions in format the REST API returns in the current state attribute for an instance
var transitions = [] 

/*
* called as the callback (success and failure) for the AJAX call the component will make
* to transition the instance based on the user's choice
*/
function handleCallback(data) {
    // the transition selected (same format as the REST API)
    var transition = data.optionClicked 

    // the response XHR object
    var xhr = data.response 
}
```


## Special Configuration
Various Vue Component Props have been exposed for customizing the behavior of the component.

Special note: camelCase props need to be converted to kebab-case when being set.


<table>
    <thead>
        <tr>
            <th>Prop Name</th>
            <th>Type</th>
            <th>Default</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>classMapping</td>
            <td>Object</td>
            <td>
            ```javscript
            {
                "TASK": ["niws-tabular-task"],
                "START": ["niws-tabular-start"],
                "CANCEL": ['niws-tabular-cancel'],
                "COMPLETE": ["niws-tabular-complete"],
                "REWORK": ["niws-tabular-rework"],
            }
            ```
            The keys must match the state type options provided by NIWS REST API Documentation , and the values must be arrays of classes to apply to the individual entries 
            </td>
        </tr>
    </tbody>
</table>
