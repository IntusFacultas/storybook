# NIWS State Badge

## Type of Component
Vue Component - https://v1.vuejs.org/guide/components.html

## Dependencies
None

## Purpose
This allows a developer to easily display an individual state (such as the current state) of a workflow task in their UI by passing a state's data from the API directly to the component, then customizing the output to match whatever visual design is required for the application

## Usage

When you are instantiating your component instance, make sure to bind a variable with the format shown below
```html
<niws-state v-else :data="item"></niws-state>
```

```javascript
// A JSON Object matching the state format provided in the NIWS REST API
var item = {
    stateId: id | Integer,
    stateName: name | String,
    stateDescription: description | String,
    stateType: type | String,
    outgoingTransitions: [{
        transitionId: id | Integer,
        originState: {
            stateId: id | Integer,
            stateName: name | String,
            stateDescription: description | String,
            stateType: type | String,
        },
        destinationState: {
            stateId: id | Integer,
            stateName: name | String,
            stateDescription: description | String,
            stateType: type | String,
        }
    }],
    incomingTransitions: [{
        transitionId: id | Integer,
        originState: {
            stateId: id | Integer,
            stateName: name | String,
            stateDescription: description | String,
            stateType: type | String,
        },
        destinationState: {
            stateId: id | Integer,
            stateName: name | String,
            stateDescription: description | String,
            stateType: type | String,
        }
    }; 
```

## Special Configuration
Various Vue Component Props have been exposed for customizing the behavior of the component.

Special note: camelCase props need to be converted to kebab-case when being set.

<table>
    <thead>
        <tr>
            <th>Prop</th>
            <th>Type</th>
            <th>Default</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>classMapping</td>
            <td>`Object`</td>
            <td>
                ```javascript
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
