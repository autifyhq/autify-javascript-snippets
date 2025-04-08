---
title: "Canvas mouse event"
weight: 80
ie_support: true
---

Use this snippet to click on an area within a canvas element.

Replace the values in the code as needed.

```js
// Replace this with your desired CSS selector
var selector = "Selector here";

// Find the element
var element = document.querySelector(selector);

if (!element) {
  throw new Error("Error: cannot find the element with selector (" + selector + ").");
}

// Get the element's position and size
var rect = element.getBoundingClientRect();

// Change this to the xy click coordinates you need to target
var clickX = rect.left + rect.width / 4;
var clickY = rect.top + rect.height / 4;

// List of mouse events to dispatch
// Remove the mouse events that are not relevant 
var mouseEvents = ['mouseover', 'mouseenter', 'mousedown', 'mouseup', 'click', 'dblclick', 'mouseout'];

// Dispatch each event
mouseEvents.forEach(function(eventType) {
  var event = new MouseEvent(eventType, {
    bubbles: true,
    cancelable: true,
    clientX: clickX,
    clientY: clickY
  });

  element.dispatchEvent(event);
});