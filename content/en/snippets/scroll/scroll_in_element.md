---
title: "Scroll inside of an element"
weight: 30
ie_support: true
---

When you need to scroll not whole page but inside of a specified element.

Change the values written below.

- `selector`: A string containing one or more selectors to find an element.
- `count`: A number how many times you want to scroll.
- `scrollRange`: A number of pixel how much you want to scroll down.

```js
var selector = "<TODO: REPLACE>"; /* e.g. var selector = "#sample > div"; */
var count = 3; /* <TODO: REPLACE> e.g. var count = 3; */
var scrollRange = 1000; /* <TODO: REPLACE> e.g. var scrollRange = 1000; */

function scrollLoop(maxCount, i) {
  if (i <= maxCount) {
    var element = document.querySelector(selector);
    element.scrollTop = scrollRange;
    if (element.scrollTop < scrollRange) {
      setTimeout(function () {
        scrollLoop(maxCount, i + 1);
      }, 1000);
    }
  }
}
scrollLoop(count, 0);
```
