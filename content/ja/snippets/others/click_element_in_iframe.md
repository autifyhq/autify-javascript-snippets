---
title: "iframe内の要素をクリックする"
weight: 30
ie_support: true
---
iframe内の要素をクリックしたいときに使用します。以下の値を変更してください。
- `selectorIframeHtml` ：対象要素を含むiframeを特定するセレクタの文字列
- `selectorTargetElement` ：対象要素を特定するセレクタの文字列
```js
var selectorIframeHtml = "<TODO: REPLACE>";
var selectorTargetElement = "<TODO: REPLACE>";

/**
 * --------- ここから下は変える必要はありません ----------
 */

/**
 * iframeを探す
 */
var iframeHtml = document.querySelector(selectorIframeHtml);

/**
 * iframeがなければ処理を中断する
 */
if (!iframeHtml) {
    throw new Error(
      "Error: cannot find the iframe with selector (" + selectorIframeHtml + ")."
    );
}

/**
 * 要素を探す
 */
var targetElement = iframeHtml.contentWindow.document.querySelector(selectorTargetElement);

/**
 * 要素がなければ処理を中断する
 */
if (!targetElement) {
    throw new Error(
      "Error: cannot find the element with selector (" + selectorTargetElement + ")."
    );
}

/**
 * 要素をクリックする
 */
targetElement.click();
```