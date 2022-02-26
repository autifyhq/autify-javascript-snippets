---
title: "Confirm an element has style"
weight: 30
ie_support: true
---

Confirm an element has a specified style.

```js
/* Locate the element */
var selector = "<TODO: REPLACE SELECTOR>";
var element = document.querySelector(selector);

/* Stop process if it does not exist */
if (!element) {
  throw new Error(
    "Error: cannot find the element with selector(" + selector + ")."
  );
}

/* Set style name */
var styleName = "<TODO: REPLACE STYLE NAME. e.g) background-color, border";

/* Get value from the elment */
var actual = window.getComputedStyle(element)[styleName];

/* Set expected value */
var expected = "<TODO: REPLACE EXPECTED VALUE>";

/* Stop process if actual and expected are different */
if (actual !== expected) {
  throw new Error(
    "Error: expected(" + expected + ") and actual(" + actual + ") are not same."
  );
}
```
