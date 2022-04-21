---
title: "チェックボックスがチェックされているかどうかを確認する"
weight: 10
ie_support: true
---

レコーダーで検証できないチェック可能要素 (`<input type="radio">` で実装されたラジオボタンなど) がチェックされているかどうかのアサーションを行いたい場合にご利用ください。

現在レコーダーでサポートされているアサーションについては、以下をご確認ください。

https://help.autify.com/docs/ja/list-of-assertions?highlight=%E3%82%A2%E3%82%B5%E3%83%BC%E3%82%B7%E3%83%A7%E3%83%B3%E4%B8%80%E8%A6%A7

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
