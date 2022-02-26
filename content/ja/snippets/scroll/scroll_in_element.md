---
title: "要素内をスクロールする"
weight: 30
ie_support: true
---

ページ全体ではなく、特定の要素の中でスクロールさせたいときにご利用ください。

以下の値を変更してください。

- `selector`: 対象要素を特定するセレクタの文字列
- `count`: スクロールを発生させたい回数
- `scrollRange`: スクロールさせたいピクセル数

```js
var selector = "<TODO: REPLACE>"; /* e.g. var selector = "#sample > div"; */
var count = 3; /* <TODO: REPLACE> e.g. var count = 3; */
var scrollRange = 1000; /* <TODO: REPLACE> e.g. var scrollRange = 1000; */

function scrollLoop(maxCount, i) {
  if (i <= maxCount) {
    var element = document.querySelector(selector);
    element.scrollTop = scrollRange;
    if (element.scrollTop < scrollRange) {
      setTimeout(function () {
        scrollLoop(maxCount, i + 1);
      }, 1000);
    }
  }
}
scrollLoop(count, 0);
```
