---
title: "Example"
---

Here is an example snippet.

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
