---
title: "Search for text in a table and operate the specific column of the found row."
weight: 10
ie_support: false
---

Search for a text in a table and get the element of a specific column in the row found by the search.
Search with multiple texts are also possible, and lines with all specified texts will be targeted.
Then do something like "click" or "get innerText" on the element.
If there are multiple matches, the first matched element will be taken.

```js
const targetTextList = ["<TODO: REPLACE>"]; //TODO: Specify a text that one of the cells in the desired row has. To specify more than one, add text to the array.
const colIndex = 1; //TODO: Specify the column index of the desired cell that you want to interact with.

const trPredicates = targetTextList.map(targetText => `td[text()='${targetText}']`).join(' and ')
const xpath = `//tr[${trPredicates}]`

function getElementByXpath(xp) {
  return document.evaluate(
    xp,
    document,
    null,
    XPathResult.FIRST_ORDERED_NODE_TYPE,
    null
  ).singleNodeValue;
}

const tempElement = getElementByXpath(xpath);
if(!tempElement) {
  throw new Error(`Error: TR element not found (${xpath})`);
}

const selector = `td:nth-child(${colIndex})`;
const targetElement = tempElement.querySelector(selector);
if(!targetElement) {
  throw new Error(`Error: Element not found (${selector})`);
}

/*
* Write some interactions with the element.
* Use the click() method, put assertions, just return it, etc. 
*/
targetElement.click();
```