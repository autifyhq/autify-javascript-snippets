---
title: "要素に値を設定する"
weight: 80
ie_support: true
---

`<input>` 要素に対して値を設定します。
何らかの理由により、Autify のテスト実行で値の入力ができないときにご利用ください。
`<input type="date">` は、Autify が対応していない代表的な要素です。

以下の値を変更してください

- `selector`: 対象要素を特定するセレクタの文字列
- `setValue`: 設定したい値

```js
var selector = "<TODO: REPLACE>";
var setValue = "<TODO: REPLACE>"; /* e.g) var setValue = "2006-01-02" */

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
 * 値を入力する
 */
changeValue(element, setValue);

function changeValue(input, value) {
  var nativeInputValueSetter = Object.getOwnPropertyDescriptor(
    window.HTMLInputElement.prototype,
    "value"
  ).set;
  nativeInputValueSetter.call(input, value);

  var inputEvent;
  if (typeof Event === "function") {
    /**
     * モダンブラウザ用の処理
     */
    inputEvent = new Event("input", { bubbles: true });
  } else {
    /**
     * IE 11 対応
     */
    inputEvent = document.createEvent("Event");
    inputEvent.initEvent("input", true, true);
  }
  input.dispatchEvent(inputEvent);
}
```
