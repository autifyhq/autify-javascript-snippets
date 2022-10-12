---
title: "テーブル内をテキストで検索し見つかった行の特定の列を操作する"
weight: 10
ie_support: false
---

テーブル内をテキストで検索し、見つかった行の特定の列に対してテキストを取得したり、クリックするなどの操作を行います。
複数のテキストでの検索も可能で、指定した全てのテキストを持つ行が対象になります。
条件に当てはまる要素が複数ある場合、最初に見つかったものが使用されます。

```js
const targetTextList = ["<TODO: REPLACE>"]; //TODO: 探したいテキストを指定してください。そのテキストの属する行が対象になります。複数指定したい場合は配列にテキストを追加してください。
const colIndex = 1; //TODO: 操作したいセルの列番号を指定してください。テキストで見つけた行の中の、何番目の列かを指定します。

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
* 見つけた要素に対して行いたい操作を記述してください。
* click() メソッドを使う、アサーションを行う、そのまま要素を返す、等。
*/
targetElement.click();
```