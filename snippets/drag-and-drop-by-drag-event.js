/*
 * Use this snippet to drag and drop an element.
 * This emulates a drag-and-drop operation using DragEvent.
 * Whether it will work or not depends on how the dran-and-drop is implemented in the web site.
 * This snippet does not support IE.
 *
 * Usage:
 *   Change the variables below.
 *     dragTargetSelector: CSS selector for the element you want to drag
 *     dropAreaSelector:   CSS selector for the element where you want to drop
 *
 * このスニペットは要素をドラッグ&ドロップするのに使用します。
 * DragEventを使ってドラッグ&ドロップ操作をエミュレートします。
 * このスニペットが機能するかどうかはサイト内で実装されているドラッグ&ドロップの実装によります。
 * このスニペットはIEをサポートしていません。
 *
 * 使い方:
 *   下記の変数を変更してください。
 *     dragTargetSelector: ドラッグしたい要素のCSSセレクター
 *     dropAreaSelector:   ドロップしたい場所の要素のCSSセレクター
 *
 */

var dragTargetSelector = "<TODO: REPLACE SELECTOR>";
var dropAreaSelector = "<TODO: REPLACE SELECTOR>";

/**
 * --------- You don't need to touch below ---------------
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
 * Create DragEvent
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
