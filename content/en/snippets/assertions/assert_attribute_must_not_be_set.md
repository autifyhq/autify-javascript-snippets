---
title: "Confirm an element must not to have attribute"
weight: 110
ie_support: true
---

In the case when you want to confirm an element must not to have a specified attribute.

Change the values written below.

- `selector`: A string of a selector to pinpoint the element.
- `attrName`: A string of the attribute which you want to assert its value.
- `errMessage`: A string of the error message which you want to show when it fails. It will be a default string if you don't change from `<TODO: REPLACE>`.

```js
var selector = "<TODO: REPLACE>";
var attrName = "<TODO: REPLACE>";
var errMessage = "<TODO: REPLACE>";

/* --------- You don't need to touch below --------------- */

/* Locate the element */
var element = document.querySelector(selector);

/* Stop process if it does not exist */
if (!element) {
  throw new Error(
    "Error: cannot find the element with selector(" + selector + ")."
  );
}

/* check the if the element has the specified attribute */
if (element.hasAttribute(attrName)) {
  if (errMessage == "<TODO: REPLACE>") {
    errMessage =
      'Error: This element is expected not to have "' +
      attrName +
      '", but it does.';
  }

  throw new Error(errMessage);
}
```
