---
title: "Confirm an element is checked or not"
weight: 10
ie_support: true
---

Use this snippet to assert whether a checkable element is checked or not, in case it is not possible with currently supported assertions.

Please check <a href="https://help.autify.com/docs/list-of-assertions" target="_blank">**here**</a> for currently supported assertions.

Change the following values to fit your test case:

- `selector`: A string of a selector to specify the element
- `expected`: Set `true` if you expect the element to be checked, otherwise set `false`

```js
var selector = "<TODO: REPLACE SELECTOR>";
var expected = true;

/* --------- You don't need to touch below --------------- */

/* Locate the element */
var element = document.querySelector(selector);

/* Exit if it does not exist */
if (!element) {
  throw new Error(
    "Error: cannot find the element with selector(" + selector + ")."
  );
}

/* Check if the element is checked */
var actual = element.checked;

/* Exit if the actual value does not match the expected value */
if (actual !== expected) {
  throw new Error(
    "Error: [assert checked] the actual(" +
      actual +
      ") does not match the expected(" +
      expected +
      ")."
  );
}
```
