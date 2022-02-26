---
title: "要素が表示されるまでスクロールする"
weight: 20
ie_support: false
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
 * 要素の下が表示されるまでスクロールする
 */
element.scrollIntoView(false);
```
