---
title: "Double click an element"
weight: 20
ie_support: true
---

Use this snippet to fire a double-click event on an element.

Change the following value to specify the element:
- `selector`: A string of the element selector


```js

/*
 * Specify the element selector
 */
var selector = "<TODO: REPLACE SELECTOR>";

/* --------- You don't need to touch below --------------- */

/*
 * Locate the element
 */
var element  = document.querySelector(selector);

/*
 * Exit if it does not exist
 */
if (!element) {
  throw new Error('Error: cannot find the element with selector(' + selector + ').');
}

/*
 * Create and init a double-click event
 */
var event;
if (typeof(Event) === 'function') {
   /**
    * For modern browser
    */
   event = new MouseEvent("dblclick", {"bubbles":true, "cancelable":true});
} else {
   /** 
    * For IE 11
    */
   event = document.createEvent('MouseEvents');
   event.initEvent('dblclick', true, true);
}
/* Fire a double-click event */
element.dispatchEvent(event);  
```
