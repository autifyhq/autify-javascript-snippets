---
title: "要素のテキストを取得する"
weight: 60
ie_support: true
---

```js
/**
 * 要素を探す
 */
var selector = "<TODO: REPLACE SELECTOR>";
var element = document.querySelector(selector);

/**
 * 要素がなければ処理を中断する
 */
if (!element) {
  throw new Error(
    "Error: cannot find the element with selector(" + selector + ")."
  );
}

/**
 * テキスト内容を返す
 */
return element.textContent;
```
