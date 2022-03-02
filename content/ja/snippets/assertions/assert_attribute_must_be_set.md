---
title: "要素が特定の属性を持つことを確認する"
weight: 100
ie_support: true
---

要素が特定の属性を持っていることを確認をしたいときにご利用ください。

以下の値を変更してください。

- `selector`: 対象要素を特定するセレクタの文字列
- `attrName`: 値を検証したい属性の文字列
- `errorMessage`: 検証が失敗したときに表示したいエラーメッセージの文字列。`<TODO: REPLACE>` のまま変更がない場合はデフォルトの文言で表示します。

```js
var selector = "<TODO: REPLACE>";
var attrName = "<TODO: REPLACE>";
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
 * 対象の要素に指定された属性があるか確認
 */
if (!element.hasAttribute(attrName)) {
  if (errMessage === "<TODO: REPLACE>") {
    errMessage =
      'Error: This element is expected to have "' +
      attrName +
      '", but it does not.';
  }

  throw new Error(errMessage);
}
```
