---
title: "Drag and drop using DragEvent"
weight: 60
ie_support: false
---

Use this snippet to drag and drop an element. This emulates a drag-and-drop operation using DragEvent. Whether it will work or not depends on how the dran-and-drop is implemented in the web site.

Change the variables below.

- `dragTargetSelector`: CSS selector for the element you want to drag
- `dropAreaSelector`: CSS selector for the element where you want to drop

```js
var dragTargetSelector = "<TODO: REPLACE SELECTOR>";
var dropAreaSelector = "<TODO: REPLACE SELECTOR>";

/**
 * --------- You don't need to touch below ---------------
 */

var dragTarget = document.querySelector(dragTargetSelector);
if (!dragTarget) {
  throw new Error(
    "Error: cannot find the element with selector(" + dragTargetSelector + ")."
  );
}

var dropArea = document.querySelector(dropAreaSelector);
if (!dropArea) {
  throw new Error(
    "Error: cannot find the element with selector(" + dropAreaSelector + ")."
  );
}

dragTarget.dispatchEvent(dragEvent("dragstart"));
dropArea.dispatchEvent(dragEvent("drop"));
dragTarget.dispatchEvent(dragEvent("dragend"));

/**
 * Create DragEvent
 */
function dragEvent(name) {
  var ev = new DragEvent(name, {
    bubbles: true,
  });
  var transfer = new DataTransfer();
  Object.defineProperty(transfer, "dropEffect", {
    value: "move",
    writable: true,
  });
  Object.defineProperty(transfer, "effectAllowed", {
    value: "move",
    writable: true,
  });
  Object.defineProperty(ev, "dataTransfer", { value: transfer });
  return ev;
}
```
