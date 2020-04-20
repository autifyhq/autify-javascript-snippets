/**
 *  Usage:
 *   In the case when you want to confirm an element having a specified attribute.
 *
 *   Change the values written below.
 *    selector: A string of a selector to pinpoint the element.
 *    attrName: A string of the attribute which you want to assert its value.
 *    errMessage:
 *      A string of the error message which you want to show when it fails.
 *      It will be a default string if you don't change from <TODO: REPLACE>.
 *
 * 使い方:
 *   要素が特定の属性を持っていることを確認をしたいときにご利用ください。
 *
 *   以下の値を変更してください
 *    selector: 対象要素を特定するセレクタの文字列
 *    attrName: 値を検証したい属性の文字列
 *    errMessage:
 *      検証が失敗したときに表示したいエラーメッセージの文字列
 *      `<TODO: REPLACE>` のまま変更がない場合はデフォルトの文言で表示します。
 */

var selector = "<TODO: REPLACE>";
var attrName = "<TODO: REPLACE>";
var errMessage = "<TODO: REPLACE>";


/* --------- You don't need to touch below ---------------
 * --------- ここから下は変える必要はありません ---------- */

/* Locate the element
 * 要素を探す */
var element  = document.querySelector(selector);

/* Stop process if it does not exist
 * 要素がなければ処理を中断する */
if (!element) {
  throw new Error('Error: cannot find the element with selector(' + selector + ').');
}

/* check the if the element has the specified attribute
 * 対象の要素に指定された属性があるか確認 */
if (!element.hasAttribute(attrName)) {
  if (errMessage == "<TODO: REPLACE>") {
    errMessage = 'Error: This element is expected to have "' + attrName + '", but it doen't.';
  }

  throw new Error(errMessage);
}
