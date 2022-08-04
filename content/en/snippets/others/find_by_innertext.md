---
title: "Find an element by its innerText"
weight: 10
ie_support: false
---

Find an element that contains the specified inner text.

```js
const targetText = ""; //TODO: Put the text you want to look for.
const tagName = ""; //TODO: Put the tag name that should contain the target text.

const candidates = document.getElementsByTagName(tagName);
const filtered = Array.from(candidates).filter((el) => el.innerText === targetText); // Exact match.

const count = filtered.length;
if (!count) {
  throw new Error(`Element contains text "${targetText}" not found`);
}
if (count > 1) {
  console.log(`${count} elements found. Taking the first element in the list as a target.`);
}

const targetElement = filtered[0];

// Do something to the target element, for example,
targetElement.click();
```