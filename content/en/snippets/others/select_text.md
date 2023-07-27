---
title: "put text in a selecting state"
weight: 10
ie_support: true
---

This snippet is used to put the text of an element in a selection state.
Change the following value.

- `targetSelector`: A string of a selector to specify the element

```js
var targetSelector = "<TODO: REPLACE SELECTOR>";

/* --------- Anything below this does not need to be changed. ---------- */
var element = document.querySelector(targetSelector);

if (!element) {
	throw new Error("Element not found");
}

/* Select the text of an element */
selectRange(element, 0, element.textContent.length);

function selectRange(element, startAt, endAt) {
  var selection = window.getSelection();
	var range = document.createRange();
  var textNode = element.childNodes[0];
  
  range.setStart(textNode, startAt);
  range.setEnd(textNode, endAt);
  
  if (selection.rangeCount > 0) {
    selection.removeAllRanges();
  }
  selection.addRange(range);
}
```