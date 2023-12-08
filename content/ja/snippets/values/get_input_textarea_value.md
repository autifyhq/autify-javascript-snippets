---
title: "Input要素やTextarea要素に入力された値を取得する"
weight: 60
ie_support: true
---

`<input>`要素や`<textarea>`要素に入力された値を取得したい時にご利用ください。

以下の値を変更してください。

- `selector`: 対象要素を特定するCSSセレクターの文字列

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
 * 要素に入力された値を返す
 */
return element.value;
```
