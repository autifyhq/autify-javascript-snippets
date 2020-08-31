/* Locate the element
 * 要素を探す */
var selector = "<TODO: REPLACE SELECTOR>";
var element  = document.querySelector(selector);

/* Exit if it does not exist
 * 要素がなければ処理を中断する */
if (!element) {
  throw new Error('Error: cannot find the element with selector(' + selector + ').');
}

/* Create and init a double-click event
 * ダブルクリックのイベントを生成し初期化する */
var doubleClickEvent = document.createEvent('MouseEvents');
doubleClickEvent.initEvent('dblclick', true, true);

/* Fire a double-click event
 * ダブルクリックのイベントを発火させる */
element.dispatchEvent(doubleClickEvent);  
