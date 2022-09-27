---
title: "テキストの内容で要素を探す"
weight: 10
ie_support: false
---

指定されたテキストを含む要素を探します(完全一致です)。
複数の要素がマッチする場合、最初に見つかったものが使われます。

## XPath を使用した例

```js
const targetText = ""; //TODO: 探したいテキストを指定してください。
const targetTagName = ""; //TODO: そのテキストを含むタグの名前を指定してください。

/*
* このスニペットは、テキストの完全一致で要素を探索します。
* 部分一致で探索を行いたい場合は、 XPath を以下のように書き換えてください。
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
* 要素に対して行いたい操作を記述してください。
* click() メソッドを使う、アサーションを行う、そのまま要素を返す、など。
*/
element.click();
```
## CSS セレクターを使用した例

```js
const targetText = ""; //TODO: 探したいテキストを指定してください。
const tagName = ""; //TODO: そのテキストを含むタグの名前を指定してください。

/*
* このスニペットは、テキストの完全一致で要素を探索します。
* 部分一致で探索を行いたい場合は、 filter 用の関数を以下のように書き換えてください。
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
* 要素に対して行いたい操作を記述してください。
* click() メソッドを使う、アサーションを行う、そのまま要素を返す、など。
*/
targetElement.click();
```
