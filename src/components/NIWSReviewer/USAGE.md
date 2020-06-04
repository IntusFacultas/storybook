# NIWS Reviewer

## Type of Component

Vue Component - https://v1.vuejs.org/guide/components.html

## Installation

```bash
npm install @IntusFacultas/niws-reviewer@latest --save
```

## Purpose

This provides a component that will abstract the necessary UI to submit an Instance transition from the frontend to NIWS, auto generating the appropriate UI elements based on data passed to it.

## Usage

When you are instantiating your component instance, make sure to bind a variable with the format shown below

```html
<niws-reviewer
  :stacked="false"
  comment=""
  :instance-id="instanceID"
  :workflow-url="workflowURL"
  :workflow-id="workflowID"
  :transitions="transitions"
  @post="handleCallback"
>
</niws-reviewer>
```

```javascript
import NiwsReviewer from "@IntusFacultas/niws-reviewer";
// a valid NIWS Instance ID
var instanceID = "A12348";

// the base NIWS url for the network you are on (example: "https://IntusFacultasweb.IntusFacultas.ic.gov/niws")
var workflowURL = "url";

// the name of the workflow the instance belongs to
var workflowID = "WorkflowName";

// an array of transitions in format the REST API returns in the current state attribute for an instance
var transitions = [];
```

## Configuration

- Various Vue Component Props have been exposed for customizing the behavior of the component.
- Special note: camelCase props need to be converted to kebab-case when being set.

<table>
    <thead>
        <tr>
            <th>Prop Name</th>
            <th>Type</th>
            <th>Default</th>
            <th>Purpose</th>
        </tr>
    </thead>
    <tbody>
        <tr><td>comment</td><td>`String`</td><td>`""`</td><td>Allows you to override the comment set (not two way bound currently)</td></tr>
        <tr><td>transitions</td><td>`Object`</td><td><b>None. Required</b></td><td>Sets the transition buttons for the reviewer. Its recommended you feed the transitions from the API directly into the component, otherwise you need to copy the format expected from the API exactly.</td></tr>
        <tr><td>instanceId</td><td>`String`</td><td><b>None. Required</b></td><td>The Instance being reviewed. Used for setting the url dynamically</td></tr>
        <tr><td>workflowUrl</td><td>`String`</td><td><b>None. Required</b></td><td>The base url of the NIWS application. Such as `http://IntusFacultasweb.IntusFacultas.wpafb.af.mil/niws`</td></tr>
        <tr><td>workflowId</td><td>`String`</td><td><b>None. Required</b></td><td>The Workflow of the Instance. Used for setting the url dynamically</td></tr>
        <tr><td>stacked</td><td>`Boolean`</td><td>`false`</td><td>Whether to vertically stack the reviewer or not.</td></tr>
        <tr><td>textFlavor</td><td>`String`</td><td>`"Normal"`</td><td>Controls the flavor of the text on the component.</td></tr>
    </tbody>
</table>
