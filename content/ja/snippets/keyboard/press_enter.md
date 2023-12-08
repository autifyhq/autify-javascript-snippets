---
title: "Enterキーを押下する"
weight: 10
ie_support: false
---

CSSセレクターを指定して見つかった要素に対して、Enterキーを押下するイベントを発生させるのに使用します。

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

/* Enterキーの押下のイベントを生成し初期化する */
var enterEvent = new KeyboardEvent('keydown', { key: 'Enter', bubbles: true, cancelable: true });

/* Enterキーの押下のイベントを発生させる */
element.dispatchEvent(enterEvent);
```
