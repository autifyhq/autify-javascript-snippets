---
title: "Confirm a value of an attribute"
weight: 40
ie_support: true
---

In the case when you want to assert a value of a specified attribute.

Change the values written below.

- `selector`: A string of a selector to pinpoint the element.
- `attrName`: A string of the attribute which you want to assert its value.
- `expected`: A string of the your expected value.
- `errMessage`: A string of the error message which you want to show when it fails. It will be a default string if you don't change from `<TODO: REPLACE>`.

```js
var selector = "<TODO: REPLACE>";
var attrName = "<TODO: REPLACE>"; /* e.g) id, class, data */
var expected = "<TODO: REPLACE>";
var errMessage = "<TODO: REPLACE>";

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
 * Get value from the elment
 */
var actual = element.getAttribute(attrName);

/**
 * Stop process if actual and expected are different
 */
if (actual !== expected) {
  if (errMessage == "<TODO: REPLACE>") {
    errMessage =
      "Error: expected(" +
      expected +
      ") and actual(" +
      actual +
      ") are not same.";
  }

  throw new Error(errMessage);
}
```
