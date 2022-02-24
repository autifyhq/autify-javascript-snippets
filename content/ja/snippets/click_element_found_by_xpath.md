---
title: "XPathで見つかった要素をクリックする"
weight: 30
ie_support: false
---

XPathを指定して見つかった要素をクリックします。
以下のようなケースでよく用いられます。

- 内部のテキストを指定して要素を見つけたい場合
- CSSセレクターでの表現が難しい、周囲の要素との複雑な関係から要素を指定したい場合

以下の値を対象要素に合わせて変更してください。

- `xpath`: 要素を指定するXPathの文字列 (例: `//*[normalize-space() = '要素内のテキスト']`)

```js
/**
 * 要素のXpathを指定する
 */
var xpath = "<TODO: REPLACE>";

/**
 * ここから下は変える必要はありません
 */
function getElementByXpath(path) {
  return document.evaluate(path, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
}

/**
 * 指定されたXPathで要素を探す
 */
var element = getElementByXpath(xpath);

/**
 * 要素が見つからなければ終了する
 */
if (!element) {
  throw new Error("Error: cannot find an element with XPath(" + xpath + ")");
}

/**
 * クリックする
 */
element.click();
```
