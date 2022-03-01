/*
 * Use this snippet to drag and drop an element.
 * This emulates a drag-and-drop operation using MouseEvent.
 * Whether it will work or not depends on how the dran-and-drop is implemented in the web site.
 *
 * Usage:
 *   Change the variables below.
 *     dragTargetSelector: CSS selector for the element you want to drag
 *     dropAreaSelector:   CSS selector for the element where you want to drop
 *
 * このスニペットは要素をドラッグ&ドロップするのに使用します。
 * MouseEventを使ってドラッグ&ドロップ操作をエミュレートします。
 * このスニペットが機能するかどうかはサイト内で実装されているドラッグ&ドロップの実装によります。
 * このスニペットはIEをサポートしていません。
 *
 * 使い方:
 *   下記の変数を変更してください。
 *     dragTargetSelector: ドラッグしたい要素のCSSセレクター
 *     dropAreaSelector:   ドロップしたい場所の要素のCSSセレクター
 */

var dragTargetSelector = "<TODO: REPLACE SELECTOR>";
var dropAreaSelector = "<TODO: REPLACE SELECTOR>";

/**
 * --------- You don't need to touch below ---------------
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

var coords = getCoordinates(dropArea);

dragTarget.dispatchEvent(new MouseEvent("mousedown", { bubbles: true }));
dragTarget.dispatchEvent(
  new MouseEvent("mousemove", {
    bubbles: true,
    clientX: coords.x,
    clientY: coords.y,
  })
);
dragTarget.dispatchEvent(
  new MouseEvent("mouseup", {
    bubbles: true,
    clientX: coords.x,
    clientY: coords.y,
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
