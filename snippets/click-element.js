/* Locate the element
 * 要素を探す */
var selector = "<TODO: REPLACE SELECTOR>";
var element  = document.querySelector(selector);

/* Stop process if it does not exist
 * 要素がなければ処理を中断する */
if (!element) {
  throw new Error('Error: cannot find the element with selector(' + selector + ').');
}

/* Fire a click event
 * クリックする */
element.click();
