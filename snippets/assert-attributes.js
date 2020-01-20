// Locate the element
// 要素を探す
var selector = "<TODO: REPLACE SELECTOR>"
var element  = document.querySelector(selector)

// Stop process if it does not exist
// 要素がなければ処理を中断する
if (!element) {
  throw new Error('Error: cannot find the element with selector(' + selector + ').');
}

// Set attribute name
// 探したい属性を設定する
var attrName = "<TODO: REPLACE ATTRIBUTE NAME. e.g) id, class, data->"

// Get value from the elment
// 属性の値を取得する
var actual   = element.getAttribute(attrName)

// Set expected value
// 期待する値を設定する
var expected = "<TODO: REPLACE EXPECTED VALUE>"

// Stop process if actual and expected are different
// 実際のものと期待するものが違う場合処理を中断する
if (actual !== expected) {
   thow new Error('Error: expected(' + expected + ') and actual(' + actual + ') are not same.')
}
