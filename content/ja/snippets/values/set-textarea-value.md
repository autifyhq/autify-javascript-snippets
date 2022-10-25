---
title: "Textarea要素に値を設定する"
weight: 80
ie_support: true
---

`<textarea>` 要素に対して値を設定します。
何らかの理由により、Autify のテスト実行で値の入力ができないときにご利用ください。

以下の値を変更してください

- `selector`: 対象要素を特定するセレクタの文字列
- `setTextArea`: 設定したい値

```js
var selector = "<TODO: REPLACE>";
var setTextArea = "<TODO: REPLACE>";  //TODO: テキストエリアに入力したい内容を指定してください。改行を含めたい場合には、「\n」を指定してください。

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
inputTextToTextArea(element, setTextArea);

function inputTextToTextArea(input, value) {
  var nativeInputValueSetter = Object.getOwnPropertyDescriptor(
    window.HTMLTextAreaElement.prototype,
    "value"
  ).set;
  nativeInputValueSetter.call(input, value);
  
  var inputEvent;
  if (typeof Event === "function") {
    /**
    * For modern browser
    */
    inputEvent = new Event("input", { bubbles: true });
  } else {
    /**
     * For IE 11
     */
    inputEvent = document.createEvent("Event");
    inputEvent.initEvent("input", true, true);
  }
  input.dispatchEvent(inputEvent);
}
```
