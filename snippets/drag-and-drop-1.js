/*
 * Use this snippet to drag and drop an element using drag events.
 * Whether it will work or not depends on how the dran-and-drop is implemented in the web site.
 *
 * ドラッグイベントを利用して要素をドラッグ&ドロップするためにこのスニペットを使用します。
 * このスニペットが機能するかどうかはサイト内で実装されているドラッグ&ドロップの実装によります。
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
