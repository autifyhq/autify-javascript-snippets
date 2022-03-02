---
title: "DragEventによるドラッグ&ドロップ"
weight: 60
ie_support: false
---

このスニペットは要素をドラッグ&ドロップするのに使用します。DragEvent を使ってドラッグ&ドロップ操作をエミュレートします。このスニペットが機能するかどうかはサイト内で実装されているドラッグ&ドロップの実装によります。

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
  throw new Error(
    "Error: cannot find the element with selector(" + dragTargetSelector + ")."
  );
}

var dropArea = document.querySelector(dropAreaSelector);
if (!dropArea) {
  throw new Error(
    "Error: cannot find the element with selector(" + dropAreaSelector + ")."
  );
}

dragTarget.dispatchEvent(dragEvent("dragstart"));
dropArea.dispatchEvent(dragEvent("drop"));
dragTarget.dispatchEvent(dragEvent("dragend"));

/**
 * DragEvent を作成する
 */
function dragEvent(name) {
  var ev = new DragEvent(name, {
    bubbles: true,
  });
  var transfer = new DataTransfer();
  Object.defineProperty(transfer, "dropEffect", {
    value: "move",
    writable: true,
  });
  Object.defineProperty(transfer, "effectAllowed", {
    value: "move",
    writable: true,
  });
  Object.defineProperty(ev, "dataTransfer", { value: transfer });
  return ev;
}
```
