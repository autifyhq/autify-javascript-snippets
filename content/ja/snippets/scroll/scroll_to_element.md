---
title: "要素が表示されるまでスクロールする"
weight: 20
ie_support: false
---

特定の要素が表示されるまでページをスクロールします。

以下の値を対象要素に合わせて変更してください。

- `selector`: 要素を特定するCSSセレクターの文字列

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
 * 要素が表示されるまでスクロールする
 * 要素を真ん中までスクロールする場合はblockの値を"center"に変更してください
 */
element.scrollIntoView({block: "end", inline: "nearest", behavior: "smooth"});
```
