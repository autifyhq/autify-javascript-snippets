/* Locate the element
 * 要素を探す */
var selector = "<TODO: REPLACE SELECTOR>";
var element  = document.querySelector(selector);

/* Exit if it does not exist
 * 要素がなければ処理を中断する */
if (!element) {
  throw new Error('Error: cannot find the element with selector(' + selector + ').');
}

/* Create and init a right-click (to be exact, contextmenu) event
 * 右クリック (厳密にはcontextmenu) のイベントを生成して初期化する */
var rightClickEvent = document.createEvent('MouseEvents');
rightClickEvent.initEvent('contextmenu', true, true);

/* Fire a right-click event
 * 右クリックのイベントを発火させる */
element.dispatchEvent(rightClickEvent);  
