---
title: "Confirm an element having attribute"
weight: 100
ie_support: true
---

In the case when you want to confirm an element having a specified attribute.

Change the values written below.

- `selector`: A string containing one or more selectors to find an element.
- `attrName`: A string representing the name of the attribute.
- `errorMessage`: A string of the error message which you want to show when it fails. It will be a default string if you don't change from `<TODO: REPLACE>`.

```js
var selector = "<TODO: REPLACE>";
var attrName = "<TODO: REPLACE>";
var errMessage = "<TODO: REPLACE>";


/**
 * --------- Anything below this does not need to be changed. ---------------
 */

/**
 * Locate the element
 */
var element = document.querySelector(selector);

/**
 * Stop process if it does not exist
 */
if (!element) {
  throw new Error('Error: cannot find the element with selector(' + selector + ').');
}

/**
 * check the if the element has the specified attribute
 */
if (!element.hasAttribute(attrName)) {
  if (errMessage === "<TODO: REPLACE>") {
    errMessage = 'Error: This element is expected to have "' + attrName + '", but it does not.';
  }

  throw new Error(errMessage);
}

```
