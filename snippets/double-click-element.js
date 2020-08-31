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
var event;
if (typeof(Event) === 'function') {
   /**
    * For modern browser
    * モダンブラウザの場合 
    */
   event = new MouseEvent("dblclick", {"bubbles":true, "cancelable":true})
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
