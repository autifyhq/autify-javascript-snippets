---
title: "Search for text in a table and operate the specific column of the found row."
weight: 10
ie_support: false
---

Search for text in a table and get the element of a specific column in the row found by the search.
Then do something like "click" or "get innerText" on the element.

```js
const targetText = ""; //TODO: Put the text you want to look for.
const columnNum = ""; //TODO: Put the column number of the row found by the text you put.

const tagName = "td";
const candidates = document.getElementsByTagName(tagName);
const filtered = Array.from(candidates).filter((el) => el.innerText === targetText); // 完全一致です

const count = filtered.length;
if (!count) {
  throw new Error(`Element contains text "${targetText}" not found`);
}
if (count > 1) {
  console.log(`${count} elements found. Taking the first element in the list as a target.`);
}

const targetRowElement = filtered[0].parentElement;
const targetColumnElement = targetRowElement.querySelector(`td:nth-child(${columnNum})`)

// Do something to the target element, for example,
return targetColumnElement.innerText;
```