---
title: "Reading clipboard value"
weight: 10
ie_support: true
---

Use this snippet when you want to read the value of clipboard if it is copied by `document.execCommand("copy")` in the previous steps.

Note: This snippet assumes the copied data is text.

### Usage

You need a pair of JavaScript steps in your scenario:

1. Adding an event listener for `copy` event which stores the data to `localStorage`
2. Getting the data from `localStorage`

The step 1 should be inserted **before the click step**, then you can read the data after the click step.

```js
// Step 1
document.addEventListener('copy', function(event) {
  var active = document.activeElement;
  if (active instanceof HTMLInputElement || active instanceof HTMLTextAreaElement) {
    var data = active.value.substring(active.selectionStart, active.selectionEnd);
    localStorage.setItem('clipboard', data);
  }
});

// Step 2
return localStorage.getItem('clipboard');
```

### Caveat

#### iOS Safari doesn't work with `document.execCommand("copy")` with Autify

Due to technical limitation, Autify can't properly trigger `document.execCommand("copy")` only on iOS Safari environment yet.  Therefore, this snippet (or any other workaround) won't work with iOS Safari as of March 2022.

#### Doesn't support `navigation.clipboard.writeText()` API

If your website uses `navigation.clipboard.writeText()` API to copy the value to clipboard, this approach doesn't work because it supposed to send `clipboardchange` event but Chromium hasn't implemented the event yet as of March 2022.
