---
title: "要素をクリックする"
weight: 10
ie_support: true
---

このスニペットは、CSS セレクターを指定して見つかった要素をクリックします。

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
 * クリックする
 */
element.click();
```
