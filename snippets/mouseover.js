/* Locate the element
 * 要素を探す */
var selector = "<TODO: REPLACE SELECTOR>";
var element  = document.querySelector(selector);

/* Stop process if it does not exist
 * 要素がなければ処理を中断する */
if (!element) {
  throw new Error('Error: cannot find the element with selector(' + selector + ').');
}

var event;
if (typeof(Event) === 'function') {
   /* For modern browser
    * モダンブラウザの場合 */
   event = new Event('mouseover');
} else {
   /* For IE 11
    * IE 11 の場合は */
   event = document.createEvent('Event');
   event.initEvent('mouseover', true, true);
}

/* Fire a mouse over event
 * マウスオーバーイベントを発火させる */
element.dispatchEvent(event);
