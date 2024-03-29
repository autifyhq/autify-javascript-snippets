---
title: "Right click"
weight: 40
ie_support: true
---

Use this snippet to fire a right-click event on an element.

Change the following value to specify the element:

- `selector`: A string of the element selector

```js
/* Specify the element selector */
var selector = "<TODO: REPLACE SELECTOR>";

/* --------- You don't need to touch below --------------- */

/* Locate the element */
var element = document.querySelector(selector);

/* Exit if it does not exist */
if (!element) {
  throw new Error(
    "Error: cannot find the element with selector(" + selector + ")."
  );
}

/* Create and init a right-click (to be exact, contextmenu) event */
var event;
if (typeof Event === "function") {
  /**
   * For modern browser
   */
  event = new MouseEvent("contextmenu", { bubbles: true, cancelable: true });
} else {
  /**
   * For IE 11
   */
  event = document.createEvent("MouseEvents");
  event.initEvent("contextmenu", true, true);
}
/* Fire a right-click event */
element.dispatchEvent(event);
```

If the above snippet doesn’t work, please try the below snippet, which specifies the position of the right-click.

\* This snippet does not support IE11.

```js
// Specify the element selector
var selector = "<TODO: REPLACE SELECTOR>";

/* --------- You don't need to touch below ---------- */

// Locate the element
var element = document.querySelector(selector);

// Exit if it does not exist
if (!element) {
  throw new Error(
    "Error: cannot find the element with selector(" + selector + ")."
  );
}

var rect = element.getBoundingClientRect();

// Get the coordinates of the point to be clicked
var contextMenuX = rect.left + rect.width / 2;
var contextMenuY = rect.top + rect.height / 2;

// Create and init a right-click (to be exact, contextmenu) event
var contextMenuEvent = new MouseEvent('contextmenu', {
  bubbles: true,
  cancelable: true,
  clientX: contextMenuX,
  clientY: contextMenuY
});

// Fire a right-click event
element.dispatchEvent(contextMenuEvent);
```
