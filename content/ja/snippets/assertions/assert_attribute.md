---
title: "要素が特定の属性の値を持つことを検証する"
weight: 40
ie_support: true
---

特定の属性の値を検証したいときにご利用ください。

以下の値を変更してください。

- selector: 対象要素を特定するセレクタの文字列
- attrName: 値を検証したい属性の文字列
- expected: 検証対象属性に期待する値の文字列
- errMessage: 検証が失敗したときに表示したいエラーメッセージの文字列。`<TODO: REPLACE>` のまま変更がない場合はデフォルトの文言で表示します。

```js
var selector = "<TODO: REPLACE>";
var attrName = "<TODO: REPLACE>"; /* e.g) id, class, data */
var expected = "<TODO: REPLACE>";
var errMessage = "<TODO: REPLACE>";

/**
 * --------- ここから下は変える必要はありません ----------
 */

/**
 * 要素を探す
 */
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
 * 属性の値を取得する
 */
var actual = element.getAttribute(attrName);

/**
 * 実際のものと期待するものが違う場合処理を中断する
 */
if (actual !== expected) {
  if (errMessage == "<TODO: REPLACE>") {
    errMessage =
      "Error: expected(" +
      expected +
      ") and actual(" +
      actual +
      ") are not same.";
  }

  throw new Error(errMessage);
}
```
