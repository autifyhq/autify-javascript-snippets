/* Locate the iframe element
 * iframe 要素を探す */
var selector = "<TODO: REPLACE SELECTOR>";
var element  = document.querySelector(selector);

/* Stop process if it does not exist
 * 要素がなければ処理を中断する */
if (!element) {
  throw new Error('Error: cannot find the element with selector(' + selector + ').');
}

/* Stop process if it does not exist
 * Iframe 内の document がなければ処理を中断する */
var iframeDocument = element.contentWindow.document;
if (!iframeDocument) {
  throw new Error('Error: cannot find the document inside of iframe.');
}

iframeDocument.querySelector('body').textContent = "<TODO: Text>"
