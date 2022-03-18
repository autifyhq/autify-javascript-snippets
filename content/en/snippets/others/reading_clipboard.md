---
title: "Reading clipboard value"
weight: 10
ie_support: true
---

Use this snippet when you want to read the value of clipboard if it is copied by `document.execCommand("copy")` in the previous steps.

### Usage

You need a pair of JavaScript steps in your scenario:

1. Adding an event listener for `copy` event which stores the data to `localStorage`
2. Getting the data from `localStorage`

The step 1 should be inserted **before the click step**, then you can read the data after the click step.

```js
// Step 1
document.addEventListener('copy', function(event) {
  var data = document.getSelection().toString();
  localStorage.setItem('clipboard', data);
});

// Step 2
return localStorage.getItem('clipboard');
```

### Caveat

If your website uses `navigation.clipboard.write*` API to copy the value to clipboard, this approach doesn't work because it supposed to send `clipboardchange` event but Chromium hasn't implemented the event yet as of March 2022.
