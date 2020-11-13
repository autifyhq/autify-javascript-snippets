/**
 * Usage of this snippet:
 *   In the case when you want to assert a value of a specified attribute.
 *
 *   Change the values written below.
 *    selector: A string of a selector to pinpoint the element.
 *    attrName: A string of the attribute which you want to assert its value.
 *    expected: A string of the your expected value.
 *    errMessage:
 *      A string of the error message which you want to show when it fails.
 *      It will be a default string if you don't change from `<TODO: REPLACE>`.
 *
 * このスニペットの使い方:
 *   特定の属性の値を検証したいときにご利用ください。
 *
 *   以下の値を変更してください
 *    selector: 対象要素を特定するセレクタの文字列
 *    attrName: 値を検証したい属性の文字列
 *    expected: 検証対象属性に期待する値の文字列
 *    errMessage:
 *      検証が失敗したときに表示したいエラーメッセージの文字列
 *      `<TODO: REPLACE>` のまま変更がない場合はデフォルトの文言で表示します。
 */

var selector = "<TODO: REPLACE>";
var attrName = "<TODO: REPLACE>"; /* e.g) id, class, data */
var expected = "<TODO: REPLACE>";
var errMessage = "<TODO: REPLACE>";


/**
 *  --------- You don't need to touch below ---------------
 * --------- ここから下は変える必要はありません ----------
 */

/** Locate the element
 * 要素を探す
 * */
var element  = document.querySelector(selector);

/**
 *  Stop process if it does not exist
 * 要素がなければ処理を中断する
 */
if (!element) {
  throw new Error('Error: cannot find the element with selector(' + selector + ').');
}

/**
 *  Get value from the elment
 * 属性の値を取得する
 */
var actual   = element.getAttribute(attrName);

/**
 * Stop process if actual and expected are different
 * 実際のものと期待するものが違う場合処理を中断する
 */
if (actual !== expected) {
  if (errMessage == "<TODO: REPLACE>") {
    errMessage = 'Error: expected(' + expected + ') and actual(' + actual + ') are not same.';
  }

  throw new Error(errMessage);
}
