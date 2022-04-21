/* Usage of this snippet:
 *   Use this snippet to assert that a checkable element
 *   (such as a radio button implemented as <input type="radio">)
 *   is checked or not, in case it is not possible with Recorder.
 * 
 *   Refer to the following document for currently supported assertions by Recorder.
 *   https://help.autify.com/docs/list-of-assertions
 *
 *   Change the following values to fit your test case:
 *     selector: A string of a selector to specify the element
 *     expected: Set true if you expect the element to be checked, otherwise set false
 *
 * このスニペットの用途:
 *   レコーダーで検証できないチェック可能要素 (<input type="radio"> で実装されたラジオボタンなど) が
 *   チェックされているかどうかのアサーションを行いたい場合にご利用ください。 
 * 
 *   現在レコーダーでサポートされているアサーションについては、以下をご確認ください。
 *   https://help.autify.com/docs/ja/list-of-assertions
 * 
 *   以下の値をテストケースに合うように変更してください:
 *     selector: 対象要素を特定するセレクタの文字列
 *     expected: チェックされていることを期待する場合は true, されていないことを期待する場合は false
 */
var selector = "<TODO: REPLACE SELECTOR>";
var expected = true;

/* --------- You don't need to touch below ---------------
 * --------- ここから下は変える必要はありません ---------- */

/* Locate the element
 * 要素を探す */
var element  = document.querySelector(selector);

/* Exit if it does not exist
 * 要素がなければ処理を中断する */
if (!element) {
  throw new Error('Error: cannot find the element with selector(' + selector + ').');
}

/* Check if the element is checked
 * 要素がチェックされているかどうかを取得する */
var actual = element.checked;

/* Exit if the actual value does not match the expected value
 * 実際の値と期待する値が違う場合、処理を中断する */
if (actual !== expected) {
   throw new Error('Error: [assert checked] the actual(' + actual + ') does not match the expected(' + expected + ').');
}

