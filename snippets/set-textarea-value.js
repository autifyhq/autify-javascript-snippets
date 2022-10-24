
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
changeTextArea(element, setTextArea);

function changeTextArea(input, value) {
  var nativeInputValueSetter = Object.getOwnPropertyDescriptor(
    window.HTMLTextAreaElement.prototype,
    "value"
  ).set;
  nativeInputValueSetter.call(input, value);gg
  
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
