/* Locate the element
 * 要素を探す */
var selector = "<TODO: REPLACE SELECTOR>";
var element  = document.querySelector(selector);

/* Set expected value (Set true if you expect the element to be checked, otherwise set false)
 * 期待する値を設定する (チェックされていることを期待する場合は true, されていないことを期待する場合は false を設定する)　*/
var expected = true;

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
   throw new Error('Error: the actual(' + actual + ') does not match the expected(' + expected + ').');
}

