---
title: "Search for text in a table and operate the specific column of the found row."
weight: 10
ie_support: false
---

Search for a text in a table and get the element of a specific column in the row found by the search.
Then do something like "click" or "get innerText" on the element.
If there are multiple matches, the first matched element will be taken.

```js
const targetText = ""; //TODO: Specify a text that one of the cells in the desired row has.
const colIndex = 1; //TODO: Specify the column index of the desired cell that you want to interact with.

const xpath = `//td[text()="${targetText}"]`;

function getElementByXpath(xp) {
  return document.evaluate(
    xp,
    document,
    null,
    XPathResult.FIRST_ORDERED_NODE_TYPE,
    null
  ).singleNodeValue;
}

let tempElement = getElementByXpath(xpath);
if(!tempElement) {
  throw new Error(`Error: TD element not found (${xpath})`);
}

while(tempElement) {
  tempElement = tempElement.parentElement;
  if(tempElement.tagName === "TR") {
    break;
  }
}
if(!tempElement) {
  throw new Error(`Error: TR element (row) not found (Parent or ancestor of ${xpath})`);
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