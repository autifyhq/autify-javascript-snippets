---
title: "MouseEventによるドラッグ&ドロップ"
weight: 70
ie_support: false
---

このスニペットは要素をドラッグ&ドロップするのに使用します。MouseEvent を使ってドラッグ&ドロップ操作をエミュレートします。このスニペットが機能するかどうかはサイト内で実装されているドラッグ&ドロップの実装によります。

下記の変数を変更してください。

- `dragTargetSelector`: ドラッグしたい要素の CSS セレクター
- `dropAreaSelector`: ドロップしたい場所の要素の CSS セレクター

```js
var dragTargetSelector = "<TODO: REPLACE SELECTOR>";
var dropAreaSelector = "<TODO: REPLACE SELECTOR>";

/**
 * --------- ここから下は変える必要はありません ----------
 */

var dragTarget = document.querySelector(dragTargetSelector);
if (!dragTarget) {
  throw new Error("Element not found by selector:", dragTargetSelector);
}

var dropArea = document.querySelector(dropAreaSelector);
if (!dropArea) {
  throw new Error("Element not found by selector:", dropAreaSelector);
}

var dragCoords = getCoordinates(dragTarget)
var dropCoords = getCoordinates(dropArea);

dragTarget.dispatchEvent(
  new MouseEvent("mousedown", {
    bubbles: true,
    clientX: dragCoords.x,
    clientY: dragCoords.y
  })
);
dragTarget.dispatchEvent(
  new MouseEvent("mousemove", {
    bubbles: true,
    clientX: dropCoords.x,
    clientY: dropCoords.y
  })
);
dragTarget.dispatchEvent(
  new MouseEvent("mouseup", {
    bubbles: true,
    clientX: dropCoords.x,
    clientY: dropCoords.y
  })
);

function getCoordinates(element) {
  var rect = element.getBoundingClientRect();
  var x = rect.x + rect.width / 2;
  var y = rect.y + rect.height / 2;
  return {
    x: x,
    y: y,
  };
}
```
