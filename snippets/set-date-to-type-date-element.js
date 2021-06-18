/**
 * Usage:
 *   In the case when you want to set date to <input type="date"> element.
 *
 *   Change the values written below.
 *    selector: A string of a selector to pinpoint the element.
 *    dateValue: A string of the date to be set.
 *
 * 使い方:
 *   <input type="date"> の要素に日付を設定したいときにご利用ください。
 *
 *   以下の値を変更してください
 *    selector: 対象要素を特定するセレクタの文字列
 *    dateValue: 設定したい日付文字列
 */

var selector = "<TODO: REPLACE>";
var dateValue = "<TODO: REPLACE>"; /* e.g) var dateValue = "2006-01-02" */

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

element.value = dateValue;
