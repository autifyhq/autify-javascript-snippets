---
title: "Set textarea element value"
weight: 80
ie_support: true
---

In the case when you want to set value to `<textarea>` element.
Use this if Autify is unable to enter values in a test run for some reason.

Change the values written below.

- `selector`: A string of a selector to pinpoint the element.
- `setTextArea`: A value to be set.

```js
var selector = "<TODO: REPLACE>";
var setTextArea = "<TODO: REPLACE>";  //TODO: Specify what you want to enter in the text area. If you want to include a line break, specify "\n".

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
 * Set TextArea value
 */
inputTextToTextArea(element, setTextArea);

function inputTextToTextArea(input, value) {
  var nativeInputValueSetter = Object.getOwnPropertyDescriptor(
    window.HTMLTextAreaElement.prototype,
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
