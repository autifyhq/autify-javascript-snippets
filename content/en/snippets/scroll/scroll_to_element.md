---
title: "Scroll until an element is visible"
weight: 20
ie_support: false
---

Scroll to a specified element in the entire page.

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
 * Scroll to the bottom of the element
 */
element.scrollIntoView(false);
```
