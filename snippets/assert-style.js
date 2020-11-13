/* Locate the element
 * 要素を探す */
var selector = "<TODO: REPLACE SELECTOR>";
var element  = document.querySelector(selector);

/* Stop process if it does not exist
 * 要素がなければ処理を中断する */
if (!element) {
  throw new Error('Error: cannot find the element with selector(' + selector + ').');
}

/* Set style name
 * 探したいスタイルを設定する */
var styleName = "<TODO: REPLACE STYLE NAME. e.g) background-color, border";

/* Get value from the elment
 * 属性の値を取得する */
var actual   = window.getComputedStyle(element)[styleName];

/* Set expected value
 * 期待する値を設定する */
var expected = "<TODO: REPLACE EXPECTED VALUE>";

/* Stop process if actual and expected are different
 * 実際のものと期待するものが違う場合処理を中断する */
if (actual !== expected) {
   throw new Error('Error: expected(' + expected + ') and actual(' + actual + ') are not same.');
}
