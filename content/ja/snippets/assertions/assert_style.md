---
title: "要素のstyleを検証する"
weight: 30
ie_support: true
---

要素の style を検証したいときにご利用ください。

```js
/* 要素を探す */
var selector = "<TODO: REPLACE SELECTOR>";
var element = document.querySelector(selector);

/* 要素がなければ処理を中断する */
if (!element) {
  throw new Error(
    "Error: cannot find the element with selector(" + selector + ")."
  );
}

/* 探したいスタイルを設定する */
var styleName = "<TODO: REPLACE STYLE NAME. e.g) background-color, border";

/* 属性の値を取得する */
var actual = window.getComputedStyle(element)[styleName];

/* 期待する値を設定する */
var expected = "<TODO: REPLACE EXPECTED VALUE>";

/* 実際のものと期待するものが違う場合処理を中断する */
if (actual !== expected) {
  throw new Error(
    "Error: expected(" + expected + ") and actual(" + actual + ") are not same."
  );
}
```
