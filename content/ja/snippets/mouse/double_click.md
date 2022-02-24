---
title: "要素をダブルクリックする"
weight: 20
ie_support: true
---

このスニペットは、要素に対してダブルクリックイベントを発生させるのに使用します。

以下の値を対象要素に合わせて変更してください。

- `selector`: 要素を特定するセレクタの文字列

```js
/* 要素のセレクタを指定する */
var selector = "<TODO: REPLACE SELECTOR>";

/* --------- ここから下は変える必要はありません ---------- */

/* 要素を探す */
var element = document.querySelector(selector);

/* 要素がなければ処理を中断する */
if (!element) {
  throw new Error(
    "Error: cannot find the element with selector(" + selector + ")."
  );
}

/* ダブルクリックのイベントを生成し初期化する */
var event;
if (typeof Event === "function") {
  /**
   * モダンブラウザの場合
   */
  event = new MouseEvent("dblclick", { bubbles: true, cancelable: true });
} else {
  /**
   * IE 11 の場合
   */
  event = document.createEvent("MouseEvents");
  event.initEvent("dblclick", true, true);
}
/* ダブルクリックのイベントを発火させる */
element.dispatchEvent(event);
```
