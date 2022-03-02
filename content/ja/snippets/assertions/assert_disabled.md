---
title: "要素が無効であることを確認する"
weight: 20
ie_support: true
---

`disabled` 属性の存在を確認したい（ボタンなどが非活性になっていることを確認したい）ときに使用します。

なお、Autify では `<button>` タグなど `disabled` 属性をサポートしている要素に対しては有効/無効のアサーションを用意しています。 `<a>` タグなど、 disabled 属性をサポートしないタグの要素が無効かどうかの確認をしたいときにご利用ください。

以下の値を変更してください。

- `selector`: 対象要素を特定するセレクタの文字列
- `attrName`: 無効状態を示す属性名の文字列 （必要に応じて変更してください）
- `errMessage`: 検証が失敗したときに表示したいエラーメッセージの文字列。`<TODO: REPLACE>` のまま変更がない場合はデフォルトの文言で表示します。

```js
var selector = "<TODO: REPLACE>";
var errMessage = "<TODO: REPLACE>";

/**
 * --------- ここから下は変える必要はありません ----------
 */

var attrName = "disabled";

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
  if (errMessage == "<TODO: REPLACE>") {
    errMessage =
      'Error: This element is expected to have "' +
      attrName +
      '", but it does not.';
  }

  throw new Error(errMessage);
}
```
