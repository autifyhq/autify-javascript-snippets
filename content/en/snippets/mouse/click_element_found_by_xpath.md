---
title: "Click an element found by XPath"
weight: 30
ie_support: false
---

This snippet can be used to click an element found by XPath.
Typically, this will be used in the following cases:

- When you want to find an element by specifying its internal text
- When you want to specify an element based on its complex relationship with surrounding elements which is hard to describe by a CSS selector

Change the following value to specify the element:

- `xpath`: An XPath string (e.g. `//*[normalize-space() = 'text inside the element']`)

```js
/**
 * Specify the element XPath
 */
var xpath = "<TODO: REPLACE>";

/**
 * The following lines do not need to be changed
 */
function getElementByXpath(path) {
  return document.evaluate(
    path,
    document,
    null,
    XPathResult.FIRST_ORDERED_NODE_TYPE,
    null
  ).singleNodeValue;
}

/**
 * Find an element with the XPath
 */
var element = getElementByXpath(xpath);

/**
 * Exit if the element does not exist
 */
if (!element) {
  throw new Error("Error: cannot find an element with XPath(" + xpath + ")");
}

/**
 * Click the element
 */
element.click();
```
