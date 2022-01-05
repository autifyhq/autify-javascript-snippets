/* Usage of this snippet:
 *
 *   This snippet can be used to click an element found by XPath.
 *   Typically, this will be used in the following cases:
 *   - When you want to find an element by specifying its internal text
 *   - When you want to specify an element based on its complex relationship with surrounding elements which is hard to describe by a CSS selector
 *
 *   Change the following value to specify the element:
 *     xpath: An XPath string (e.g. //*[normalize-space() = 'text inside the element'])
 *
 * このスニペットの用途:
 * 
 *   XPathを指定して見つかった要素をクリックします。
 *   以下のようなケースでよく用いられます。
 *   - 内部のテキストを指定して要素を見つけたい場合
 *   - CSSセレクターでの表現が難しい、周囲の要素との複雑な関係から要素を指定したい場合
 *
 *   以下の値を対象要素に合わせて変更してください。
 *     xpath: 要素を指定するXPathの文字列 (例: //*[normalize-space() = '要素内のテキスト'])
 */

/**
 * Specify the element XPath
 * 要素のXpathを指定する
 */
var xpath = "<TODO: REPLACE>";

/**
 * The following lines do not need to be changed
 * ここから下は変える必要はありません
 */
function getElementByXpath(path) {
  return document.evaluate(path, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
}

/**
 * Find an element with the XPath
 * 指定されたXPathで要素を探す
 */
var element = getElementByXpath(xpath);

/**
 * Exit if the element does not exist
 * 要素が見つからなければ終了する
 */
if (!element) {
  throw new Error("Error: cannot find an element with XPath(" + xpath + ")");
}

/**
 * Click the element
 * クリックする
 */
element.click();
