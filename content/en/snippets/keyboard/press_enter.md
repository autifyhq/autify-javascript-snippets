---
title: "Press Enter"
weight: 10
ie_support: false
---

Use this snippet to fire a pressing Enter key event on an element.

Change the following value to specify the element:

- `selector`: A string of the element selector

```js
/*
 * Specify the element selector
 */
var selector = "<TODO: REPLACE SELECTOR>";
var element = document.querySelector(selector);

/*
 * Exit if it does not exist
 */
if (!element) {
  throw new Error(
    "Error: cannot find the element with selector(" + selector + ")."
  );
}

/* Create and init a pressing Enter key event */
var enterEvent = new KeyboardEvent('keydown', { key: 'Enter', bubbles: true, cancelable: true });

/* Fire a pressing Enter key event */
element.dispatchEvent(enterEvent);
```
