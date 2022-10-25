---
title: "Set input element value"
weight: 80
ie_support: true
---

In the case when you want to set value to `<input>` element.
Use this if Autify is unable to enter values in a test run for some reason.
`<input type="date">` is a typical element that is not supported by Autify.

Change the values written below.

- `selector`: A string of a selector to pinpoint the element.
- `setValue`: A value to be set.

```js
var selector = "<TODO: REPLACE>";
var setValue = "<TODO: REPLACE>"; /* e.g) var setValue = "2006-01-02" */

/**
 * --------- You don't need to touch below ---------------
 */

/**
 * Locate the element
 */
var element = document.querySelector(selector);

/**
 * Stop process if it does not exist
 */
if (!element) {
  throw new Error(
    "Error: cannot find the element with selector(" + selector + ")."
  );
}

/**
 * Set input value
 */
changeValue(element, setValue);

function changeValue(input, value) {
  var nativeInputValueSetter = Object.getOwnPropertyDescriptor(
    window.HTMLInputElement.prototype,
    "value"
  ).set;
  nativeInputValueSetter.call(input, value);

  var inputEvent;
  if (typeof Event === "function") {
    /**
     * For modern browser
     */
    inputEvent = new Event("input", { bubbles: true });
  } else {
    /**
     * For IE 11
     */
    inputEvent = document.createEvent("Event");
    inputEvent.initEvent("input", true, true);
  }
  input.dispatchEvent(inputEvent);
}
```
