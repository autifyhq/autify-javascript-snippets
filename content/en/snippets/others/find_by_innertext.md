---
title: "Find an element by its innerText"
weight: 10
ie_support: false
---

Find an element that contains the specified inner text (exact match).
If there are multiple elements that have the same text, the first matched element will be returned.

## XPath example

```js
const targetText = ""; //TODO: Specify a text that you want to find.
const targetTagName = ""; //TODO: Specify a tag name that contains the text.

/*
* By default, this JS snippet finds the element by an exact match.
* If you want to use a partial match, replace the xpath expression with following.
* //${targetTagName}[contains(text(), "${targetText}")]
*/
const xpath = `//${targetTagName}[text()="${targetText}"]`;

function getElementByXpath(xp) {
  return document.evaluate(
    xp,
    document,
    null,
    XPathResult.FIRST_ORDERED_NODE_TYPE,
    null
  ).singleNodeValue;
}

const element = getElementByXpath(xpath);

if (!element) {
  throw new Error(`Error: Element not found (${xpath})`);
}

/*
* Write some interactions with the element.
* Use the click() method, put assertions, just return it, etc. 
*/
element.click();
```

## CSS selector example

```js
const targetText = ""; //TODO: Specify a text that you want to find.
const tagName = ""; //TODO: Specify a tag name that contains the text.

/*
* By default, this JS snippet finds the element by an exact match.
* If you want to use a partial match, replace the filtering function with following.
* (el) => el.innerText.includes(targetText)
*/
const candidates = document.getElementsByTagName(tagName);
const filtered = Array.from(candidates).filter((el) => el.innerText === targetText);

const count = filtered.length;
if (!count) {
  throw new Error(`${tagName.toUpperCase()} element contains text "${targetText}" not found`);
}
if (count > 1) {
  console.log(`${count} elements found. Taking the first element in the list as a target.`);
}

const targetElement = filtered[0];

/*
* Write some interactions with the element.
* Use the click() method, put assertions, just return it, etc. 
*/
targetElement.click();
```
