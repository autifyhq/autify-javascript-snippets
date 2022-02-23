---
title: "Click an element"
weight: 10
---

This snippet finds an element by a CSS selector, and click it.

```js
/**
 * Locate the element
 */
var selector = "<TODO: REPLACE SELECTOR>";
var element  = document.querySelector(selector);

/**
 * Stop process if it does not exist
 */
if (!element) {
  throw new Error('Error: cannot find the element with selector(' + selector + ').');
}

/**
 * Fire a click event
 */
element.click();
```
