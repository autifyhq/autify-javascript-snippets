/**
 * Usage of this snippet:
 *   In the case when you want to confirm a element with the attribute `disabled`.
 *   (Basically we support assertions for disabled element. You need to use this snippet when your app uses `disabled` to the element that doesn't support the attribute, like `<a>` tag.)
 *
 *   Change the values written below.
 *    selector: A string of a selector to pinpoint the element.
 *    attrName: A string of an attribute which shows it is disabled
 *    errMessage:
 *      A string of the error message which you want to show when it fails.
 *      It will be a default string if you don't change from <TODO: REPLACE>.
 *
 * このスニペットの使い方:
 *   `disabled` 属性の存在を確認したい（ボタンなどが非活性になっていることを確認したい）ときに使用します。
 *   なお、Autifyでは `<button>` タグなど `disabled` 属性をサポートしている要素に対しては有効/無効のアサーションを用意しています。
 *   <a> タグなど、 disabled 属性をサポートしないタグの要素が無効かどうかの確認をしたいときにご利用ください。
 *
 *   以下の値を変更してください
 *    selector: 対象要素を特定するセレクタの文字列
 *    attrName: 無効状態を示す属性名の文字列 （必要に応じて変更してください）
 *    errMessage:
 *      検証が失敗したときに表示したいエラーメッセージの文字列
 *      `<TODO: REPLACE>` のまま変更がない場合はデフォルトの文言で表示します。
 */

var selector = "<TODO: REPLACE>";
var attrName = "disabled";
var errMessage = "<TODO: REPLACE>";


/**
 * --------- You don't need to touch below ---------------
 * --------- ここから下は変える必要はありません ----------
 */

/**
 * Locate the element
 * 要素を探す
 * */
var element  = document.querySelector(selector);

/**
 * Stop process if it does not exist
 * 要素がなければ処理を中断する
 */
if (!element) {
  throw new Error('Error: cannot find the element with selector(' + selector + ').');
}

/**
 * check if the element has the specified attribute
 * 対象の要素に指定された属性があるか確認
 */
if (!element.hasAttribute(attrName)) {
  if (errMessage == "<TODO: REPLACE>") {
    errMessage = 'Error: This element is expected to have "' + attrName + '", but it does not.';
  }

  throw new Error(errMessage);
}
