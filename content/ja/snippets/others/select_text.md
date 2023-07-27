---
title: "テキストを選択状態にする"
weight: 10
ie_support: true
---

このスニペットは要素を選択状態にするのに使用します。
下記の変数を変更してください。

- `targetSelector`: 選択したい要素の CSS セレクター

```js
var targetSelector = "<TODO: REPLACE SELECTOR>";

/* --------- ここから下は変える必要はありません ---------- */
var element = document.querySelector(targetSelector);

if (!element) {
	throw new Error("Element not found");
}

/* 要素のテキストを選択する */
selectRange(element, 0, element.textContent.length);

function selectRange(element, startAt, endAt) {
  var selection = window.getSelection();
	var range = document.createRange();
  var textNode = element.childNodes[0];
  
  range.setStart(textNode, startAt);
  range.setEnd(textNode, endAt);
  
  if (selection.rangeCount > 0) {
    selection.removeAllRanges();
  }
  selection.addRange(range);
}
```