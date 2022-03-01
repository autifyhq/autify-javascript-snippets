/* Usage of this snippet:
 *   Use this snippet to fire a double-click event on an element.
 *
 *   Change the following value to specify the element:
 *     selector: A string of the element selector
 *
 * このスニペットの用途:
 *   要素に対してダブルクリックを発生させるのに使用します。
 *
 *   以下の値を対象要素に合わせて変更してください。
 *     selector: 要素を特定するセレクタの文字列
 */

/* Specify the element selector
 * 要素のセレクタを指定する */
var selector = "<TODO: REPLACE SELECTOR>";

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

/* Create and init a double-click event
 * ダブルクリックのイベントを生成し初期化する */
var event;
if (typeof(Event) === 'function') {
   /**
    * For modern browser
    * モダンブラウザの場合 
    */
   event = new MouseEvent("dblclick", {"bubbles":true, "cancelable":true});
} else {
   /** 
    * For IE 11
    * IE 11 の場合
    */
   event = document.createEvent('MouseEvents');
   event.initEvent('dblclick', true, true);
}
/* Fire a double-click event
 * ダブルクリックのイベントを発火させる */
element.dispatchEvent(event);  
