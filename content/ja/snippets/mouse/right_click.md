---
title: "要素を右クリックする"
weight: 40
ie_support: true
---

要素に対して右クリックを発生させるのに使用します。

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

/* 右クリック (厳密にはcontextmenu) のイベントを生成して初期化する */
var event;
if (typeof Event === "function") {
  /**
   * モダンブラウザの場合
   */
  event = new MouseEvent("contextmenu", { bubbles: true, cancelable: true });
} else {
  /**
   * IE 11 の場合
   */
  event = document.createEvent("MouseEvents");
  event.initEvent("contextmenu", true, true);
}
/* 右クリックのイベントを発火させる */
element.dispatchEvent(event);
```

上記のスニペットでうまくいかない場合は、右クリックする箇所の座標を指定するスニペットを試してください。

※このスニペットはIE11をサポートしていません。

```js
// 要素のセレクタを指定する
var selector = "<TODO: REPLACE SELECTOR>";

/* --------- ここから下は変える必要はありません ---------- */

// 要素を探す
var element = document.querySelector(selector);

// 要素がなければ処理を中断する
if (!element) {
  throw new Error(
    "Error: cannot find the element with selector(" + selector + ")."
  );
}

var rect = element.getBoundingClientRect();

// クリック箇所の座標を取得する
var contextMenuX = rect.left + rect.width / 2;
var contextMenuY = rect.top + rect.height / 2;

// 右クリック (厳密にはcontextmenu) のイベントを生成して初期化する
var contextMenuEvent = new MouseEvent('contextmenu', {
  bubbles: true,
  cancelable: true,
  clientX: contextMenuX,
  clientY: contextMenuY
});

// 右クリックのイベントを発火させる
element.dispatchEvent(contextMenuEvent);
```
