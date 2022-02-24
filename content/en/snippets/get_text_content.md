---
title: "Get text content"
weight: 60
ie_support: true
---

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
 * Return text content
 */
return element.textContent;
```
