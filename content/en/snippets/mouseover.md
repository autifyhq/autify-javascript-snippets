---
title: "Mouse over"
weight: 45
ie_support: true
---

Note: A element does not listen to mouseover event. Please make sure the what event listen to with Developer Tools.

https://developers.google.com/web/updates/2015/05/easily-jump-to-event-listeners

```js
/**
 * Locate the element
 */
var selector = "<TODO: REPLACE SELECTOR>";
var element  = document.querySelector(selector);

/**
 * Stop process if it does not exist
 */
if (!element) {
  throw new Error('Error: cannot find the element with selector(' + selector + ').');
}

var event;
if (typeof(Event) === 'function') {
   /**
    * For modern browser
    */
   event = new Event('mouseover');
} else {
   /**
    * For IE 11
    */
   event = document.createEvent('Event');
   event.initEvent('mouseover', true, true);
}

/**
 * Fire a mouse over event
 */
element.dispatchEvent(event);
```