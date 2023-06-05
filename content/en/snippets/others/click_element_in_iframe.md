---
title: "Click an element in iframe"
weight: 30
ie_support: true
---
Use this when you want to click on an element in an iframe. Change the following values.
- `selectorIframeHtml` ：Selector string identifying the iframe containing the target element
- `selectorTargetElement` ：Selector string identifying the target element
```js
var selectorIframeHtml = "<TODO: REPLACE>";
var selectorTargetElement = "<TODO: REPLACE>";

/**
 * --------- Anything below this does not need to be changed. ---------------
 */

/**
 * Locate the iframe
 */
var iframeHtml = document.querySelector(selectorIframeHtml);

/**
 * Stop process if it does not exist
 */
if (!iframeHtml) {
    throw new Error(
      "Error: cannot find the iframe with selector (" + selectorIframeHtml + ")."
    );
}

/**
 * Locate the element
 */
var targetElement = iframeHtml.contentWindow.document.querySelector(selectorTargetElement);

/**
 * Stop process if it does not exist
 */
if (!targetElement) {
    throw new Error(
      "Error: cannot find the element with selector (" + selectorTargetElement + ")."
    );
}

/**
 * Fire a click event
 */
targetElement.click();
```