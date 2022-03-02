---
title: "Click an element"
weight: 10
ie_support: true
---

Fire a click event to a specified element. Use this snippet when a click cannot be recorded for some reason.

```js
/**
 * Locate the element
 */
var selector = "<TODO: REPLACE SELECTOR>";
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
 * Fire a click event
 */
element.click();
```
