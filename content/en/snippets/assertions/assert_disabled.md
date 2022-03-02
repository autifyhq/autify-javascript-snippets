---
title: "Confirm an element is disabled"
weight: 20
ie_support: true
---

In the case when you want to confirm a element with the attribute `disabled`.

Basically we support assertions for disabled element. You need to use this snippet when your app uses `disabled` to the element that doesn't support the attribute, like `<a>` tag.

Change the values written below:

- `selector`: A string of a selector to pinpoint the element.
- `attrName`: A string of an attribute which shows it is disabled
- `errMessage`: A string of the error message which you want to show when it fails. It will be a default string if you don't change from `<TODO: REPLACE>`.

```js
var selector = "<TODO: REPLACE>";
var errMessage = "<TODO: REPLACE>";

/**
 * --------- You don't need to touch below ---------------
 */

var attrName = "disabled";

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
 * check if the element has the specified attribute
 */
if (!element.hasAttribute(attrName)) {
  if (errMessage == "<TODO: REPLACE>") {
    errMessage =
      'Error: This element is expected to have "' +
      attrName +
      '", but it does not.';
  }

  throw new Error(errMessage);
}
```
