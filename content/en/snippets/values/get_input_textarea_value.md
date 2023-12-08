---
title: "Get the value entered into an Input or Textarea element."
weight: 60
ie_support: true
---

Use this snippet to return the value entered into a `<input>` element or a `<textarea>` element.

Change the values written below.

- `selector`: A string of a selector to pinpoint the element.

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
 * Return the value entered for the element
 */
return element.value;
```
