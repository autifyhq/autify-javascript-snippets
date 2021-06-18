/**
 * Usage:
 *   In the case when you want to set value to <input> element.
 *   Use this if Autify is unable to enter values in a test run for some reason.
 *   <input type="date"> is a typical element that is not supported by Autify.
 *
 *   Change the values written below.
 *    selector: A string of a selector to pinpoint the element.
 *    setValue: A value to be set.
 *
 * 使い方:
 *   <input> 要素に対して値を設定します。
 *   何らかの理由により、Autify のテスト実行で値の入力ができないときにご利用ください。
 *   <input type="date"> は、Autify が対応していない代表的な要素です。
 *
 *   以下の値を変更してください
 *    selector: 対象要素を特定するセレクタの文字列
 *    setValue: 設定したい値
 */

var selector = "<TODO: REPLACE>";
var setValue = "<TODO: REPLACE>"; /* e.g) var setValue = "2006-01-02" */

/**
 *  --------- You don't need to touch below ---------------
 * --------- ここから下は変える必要はありません ----------
 */

/**
 * Locate the element
 * 要素を探す
 */

var element  = document.querySelector(selector);

/**
 * Stop process if it does not exist
 * 要素がなければ処理を中断する
 */

if (!element) {
  throw new Error('Error: cannot find the element with selector(' + selector + ').');
}

/**
 * Set input value
 * 値を入力する
 */

element.value = setValue;
