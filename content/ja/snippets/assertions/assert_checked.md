---
title: "要素がチェックされているかどうかを確認する"
weight: 10
ie_support: true
---

「チェックボックスが選択されている/いないことを確認する」アサーションで、検証できないチェック可能要素をアサーションしたい場合にご利用ください。

現在サポートされているアサーションについては<a href="https://help.autify.com/docs/ja/list-of-assertions" target="_blank">**こちら**</a>をご確認ください。

以下の値をテストケースに合うように変更してください:

- `selector`: 対象要素を特定するセレクタの文字列
- `expected`: チェックされていることを期待する場合は `true`, されていないことを期待する場合は `false`

```js
var selector = "<TODO: REPLACE SELECTOR>";
var expected = true;

/* --------- ここから下は変える必要はありません ---------- */

/* 要素を探す */
var element = document.querySelector(selector);

/* 要素がなければ処理を中断する */
if (!element) {
  throw new Error(
    "Error: cannot find the element with selector(" + selector + ")."
  );
}

/* 要素がチェックされているかどうかを取得する */
var actual = element.checked;

/* 実際の値と期待する値が違う場合、処理を中断する */
if (actual !== expected) {
  throw new Error(
    "Error: [assert checked] the actual(" +
      actual +
      ") does not match the expected(" +
      expected +
      ")."
  );
}
```
