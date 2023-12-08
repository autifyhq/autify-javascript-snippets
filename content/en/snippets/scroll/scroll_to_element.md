---
title: "Scroll until an element is displayd"
weight: 20
ie_support: false
---

Scroll down the page until the specific element is displayed.

Change the following value to specify the element:

- `selector`: A string of the element selector

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
 * Scroll until the element is displayed.
 * If the block value is set to "center", the element will scroll to the center of the page.
 */
element.scrollIntoView({block: "end", inline: "nearest", behavior: "smooth"});
```
